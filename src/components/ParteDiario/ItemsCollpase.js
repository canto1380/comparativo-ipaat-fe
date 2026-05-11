import React, { useMemo } from "react";
import ListadoDatos from "./ListadoDatos";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { columns } from "./ColumnasTablaListadoDatos";

/**
 * ItemsCollapse optimizado
 *
 * Props:
 * - dataAnio, dataMes, dataQuincena, dataZafra
 * - dataParteDiariosHistoricos (puede ser: a) array plano de partes, o b) array agrupado por ingenio)
 * - dataParteDiariosHistoricosNorte (igual que arriba)
 * - dateInicioIngeniosItemCollapse (lo dejé disponible aunque aquí no se usa directamente; se puede incorporar)
 *
 * Nota: asume que cada "parte" tiene, como mínimo:
 * - fechaParte (string/ISO)
 * - ingenioNombre o ingenio (nombre del ingenio)
 * - varias columnas numéricas (moliendaCanaBruta, moliendaCanaNeta, azucarEquivalente, etc.)
 *
 * El output es exactamente igual al que usabas: cada panel muestra una tabla con los registros filtrados
 * y al final 3 filas de totales: Total quincena, Total mes, Total zafra.
 */

// Orden que quieres mostrar en el Collapse (mantener orden original)
const INGENIOS_ORDER = [
  "Aguilares",
  "Bella Vista",
  "Concepción",
  "Cruz Alta",
  "Destilería Bella Vista",
  "Famaillá",
  "La Corona",
  "La Florida",
  "La Providencia",
  "La Trinidad",
  "Leales",
  "Marapa",
  "Santa Barbara",
  "Santa Rosa",
  "Ñuñorco",
  "La Esperanza",
  "Ledesma",
  "Río Grande",
  "San Isidro",
  "Seaboard",
];

const panelStyle = {
  marginBottom: 24,
  border: "none",
};

const parseDate = (v) => {
  if (!v) return null;
  try {
    return new Date(v);
  } catch (e) {
    return null;
  }
};

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// Suma todos los campos numéricos por llave en rows
const sumNumericFields = (rows = []) => {
  const totals = {};
  rows.forEach((r) => {
    Object.keys(r).forEach((k) => {
      const v = r[k];
      if (isNumeric(v)) {
        totals[k] = (totals[k] || 0) + Number(v);
      }
    });
  });
  return totals;
};

// Elimina duplicados por fechaParte + ingenioNombre (manteniendo el primer registro)
const eliminarDuplicadosPorFechaIngenio = (arr = []) => {
  const seen = new Set();
  return arr.filter((it) => {
    if (!it || !it.fechaParte) return false;
    const ingenioNombre = it.ingenioNombre || it.ingenio || "";
    const key = `${it.fechaParte}_${ingenioNombre}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

// Devuelve último día del mes (para el uso original)
const getLastDayOfMonth = (month /* 1..12 */) => {

  const d = new Date(2020, month, 0);
  return d.getDate();
};

// Flatten: admite tanto formato agrupado por ingenio como plano
const flattenParts = (maybeGrouped = []) => {
  if (!Array.isArray(maybeGrouped)) return [];
  // Detect grouped: if first item has zafra/destileria/anhidro arrays
  const grouped = maybeGrouped.length > 0 && (Array.isArray(maybeGrouped[0].zafra) || Array.isArray(maybeGrouped[0].destileria));
  if (!grouped) {
    // ya es plano (cada elemento es un parte)
    // Asegurarnos que cada elemento tenga ingenioNombre consistente (algunas fuentes usan 'ingenio' o 'ingenioNombre')
    return maybeGrouped.map((p) => {
      if (!p) return null;
      return {
        ...p,
        ingenioNombre: p.ingenioNombre || p.ingenio || p.ingenioNombre,
      };
    }).filter(Boolean);
  }

  // grouped (Tucumán): combinar por fechaParte para evitar "mezclar" alcohol de otra declaración.
  // Regla clave:
  // - Los campos de alcohol (alcoholProducido / alcoholAnhidro) SOLO se toman de destileria/anhidro.
  // - Si para una fecha no hay destileria/anhidro, esos campos deben quedar en 0 aunque vengan cargados en zafra.
  const safeAssignNonNull = (target, source) => {
    if (!source) return target;
    Object.keys(source).forEach((k) => {
      const v = source[k];
      if (v !== undefined && v !== null) target[k] = v;
    });
    return target;
  };

  const pick = (obj, keys) => {
    const out = {};
    keys.forEach((k) => {
      if (obj && Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
    });
    return out;
  };
  const mergeByFecha = (grp) => {
    const ingenioNombre = grp.ingenio || grp.ingenioNombre;
    const byFecha = new Map();
    const upsert = (row, kind) => {
      if (!row || !row.fechaParte) return;
      const key = row.fechaParte;
      const current = byFecha.get(key) || { fechaParte: row.fechaParte, ingenioNombre };
      if (kind === "zafra") {
        // Partimos de zafra para los campos de molienda/azúcares/melaza, pero forzamos alcohol en 0.
        const base = { ...row, ingenioNombre, alcoholProducido: 0, alcoholAnhidro: 0 };
        byFecha.set(key, safeAssignNonNull(current, base));
        return;
      }
      if (kind === "destileria") {
        // Destilería "habilita" alcohol hidratado (alcoholProducido) para esa fecha
        // IMPORTANTE: en muchos registros el backend manda en la misma fila datos de zafra + alcohol
        // (por solape de campañas). Para evitar “contaminar” zafra de otra campaña, acá solo tomamos
        // los campos de alcohol (y metadatos mínimos).
        const patch = {
          ...pick(row, ["id", "fechaParte", "ingenioCodigo", "ingenioNombre", "observacion", "identificadorDeclaracion"]),
          ingenioNombre,
          alcoholProducido: row.alcoholProducido,
        };
        if (patch.alcoholProducido === undefined || patch.alcoholProducido === null) patch.alcoholProducido = 0;
        byFecha.set(key, safeAssignNonNull(current, patch));
        return;
      }
      if (kind === "anhidro") {
        // Anhidro "habilita" alcohol anhidro para esa fecha
        const patch = {
          ...pick(row, ["id", "fechaParte", "ingenioCodigo", "ingenioNombre", "observacion", "identificadorDeclaracion"]),
          ingenioNombre,
          alcoholAnhidro: row.alcoholAnhidro,
        };
        if (patch.alcoholAnhidro === undefined || patch.alcoholAnhidro === null) patch.alcoholAnhidro = 0;
        byFecha.set(key, safeAssignNonNull(current, patch));
        return;
      }
    };

    (grp.zafra || []).forEach((r) => upsert(r, "zafra"));
    (grp.destileria || []).forEach((r) => upsert(r, "destileria"));
    (grp.anhidro || []).forEach((r) => upsert(r, "anhidro"));
    return Array.from(byFecha.values());
  };
  const flat = [];
  maybeGrouped.forEach((grp) => {
    mergeByFecha(grp).forEach((r) => flat.push(r));
  });
  return flat;
};

const filterByParams = (parts = [], { dataAnio, dataMes, dataQuincena }) => {
  // misma lógica que tenías: arrQuincenal (solo fechas en la quincena),
  // arrMensual (reglas según quincena), arrZafra (todos hasta fechaParametro2)
  const arrQuincenal = [];
  const arrMensual = [];
  const arrZafra = [];

  parts.forEach((data) => {
    if (!data || !data.fechaParte) return;
    const newDate = parseDate(data.fechaParte);
    if (!newDate) return;

    // fechaParametro1 y fechaParametro2
    const mes = Number(dataMes); // 1..12
    const anio = Number(dataAnio);

    // Construct dates in local timezone using Date(year, monthIndex, day)
    const fechaParametro1 = new Date(anio, mes - 1, dataQuincena === 1 ? 1 : 16, 0, 0, 0, 0);
    const lastDay = getLastDayOfMonth(mes);
    const fechaParametro2 = new Date(anio, mes - 1, dataQuincena === 1 ? 15 : lastDay, 23, 59, 59, 999);

    if (newDate >= fechaParametro1 && newDate <= fechaParametro2) {
      arrQuincenal.push({ ...data, fechaObj: newDate });
    }

    if (newDate.getMonth() + 1 === mes) {
      if (dataQuincena === 1) {
        if (newDate >= fechaParametro1 && newDate <= fechaParametro2) {
          arrMensual.push({ ...data, fechaObj: newDate });
        }
      } else {
        // quincena 2 -> todo el mes
        arrMensual.push({ ...data, fechaObj: newDate });
      }
    }

    // arrZafra: hasta fechaParametro2
    if (newDate <= fechaParametro2) {
      arrZafra.push({ ...data, fechaObj: newDate });
    }
  });

  // eliminar duplicados
  return {
    quincenal: eliminarDuplicadosPorFechaIngenio(arrQuincenal),
    mensual: eliminarDuplicadosPorFechaIngenio(arrMensual),
    zafra: eliminarDuplicadosPorFechaIngenio(arrZafra),
  };
};

// Construye filas finales con totales (igual que tu versión repetida)
const buildFinalRowsWithTotals = (rowsQuincena, rowsMes, rowsZafra) => {
  // Los rows ya son arrays de objetos con campos variados.
  // Para totales sumamos todos los campos numéricos.
  const totalQuincena = sumNumericFields(rowsQuincena);
  const totalMes = sumNumericFields(rowsMes);
  const totalZafra = sumNumericFields(rowsZafra);

  // Etiquetas y keys como antes
  const filaTotalQuincena = { key: `total-quincena`, fechaParte: "Total quincena", ...totalQuincena };
  const filaTotalMes = { key: `total-mes`, fechaParte: "Total mes", ...totalMes };
  const filaTotalZafra = { key: `total-zafra`, fechaParte: "Total zafra", ...totalZafra };

  // Calcular rendimiento (igual a tu lógica):
  const calcularRendimientos = (fila) => {
    // si no existe moliendaCanaBruta o moliendaCanaNeta o azucarEquivalente, queda 0
    const mb = Number(fila.moliendaCanaBruta || 0);
    const mn = Number(fila.moliendaCanaNeta || 0);
    const ae = Number(fila.azucarEquivalente || fila.azucarEquivalente || 0);

    fila.rendimientoCanaBruta = mb ? ((ae / mb) * 100).toFixed(3) : 0;
    fila.rendimientoCanaNeta = mn ? ((ae / mn) * 100).toFixed(3) : 0;
  };

  [filaTotalQuincena, filaTotalMes, filaTotalZafra].forEach(calcularRendimientos);

  // Agregar key únicos si no vienen
  // (Nota: caller generalmente concatenará al array original por ingenio)
  return [filaTotalQuincena, filaTotalMes, filaTotalZafra];
};

const ItemsCollapse = ({
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  dataParteDiariosHistoricos,
  dataParteDiariosHistoricosNorte,
  dateInicioIngeniosItemCollapse,
}) => {
  // Flatten both possible inputs (agrupados o planos) en una lista plana de partes
  const flatParts = useMemo(() => {
    const a = flattenParts(dataParteDiariosHistoricos || []);
    const b = flattenParts(dataParteDiariosHistoricosNorte || []);
    return [...a, ...b];
  }, [dataParteDiariosHistoricos, dataParteDiariosHistoricosNorte]);
  // Agrupar por ingenio y aplicar filtros (quincena / mes / zafra)
  const ingeniosProcesados = useMemo(() => {
    // Agrupar partes por ingenioNombre
    const grouped = flatParts.reduce((acc, part) => {
      const nombre = part.ingenioNombre || part.ingenio || "Sin Ingenio";
      if (!acc[nombre]) acc[nombre] = [];
      acc[nombre].push(part);
      return acc;
    }, {});

    // Para cada ingenio aplicamos filterByParams (que produce quincenal/mensual/zafra)
    const result = {};
    Object.keys(grouped).forEach((ingenioNombre) => {
      const partes = grouped[ingenioNombre] || [];
      const { quincenal, mensual, zafra } = filterByParams(partes, { dataAnio, dataMes, dataQuincena });

      // Construir las filas finales: quincena rows (filas originales), luego totales (quincena/mes/zafra)
      const filasTotales = buildFinalRowsWithTotals(quincenal, mensual, zafra);

      // Para mantener comportamiento antiguo, los totales los concatenamos al final del array quincenal (como hacías)
      // Pero vamos a generar tres arrays también para posible uso (quincenal/mensual/zafra)

      result[ingenioNombre] = {
        quincenal: quincenal,
        mensual: mensual,
        zafra: zafra,
        finalRows: [...quincenal, { ...filasTotales[0], key: `total-quincena-${ingenioNombre}` }, { ...filasTotales[1], key: `total-mes-${ingenioNombre}` }, { ...filasTotales[2], key: `total-zafra-${ingenioNombre}` }],
      };
    });

    return result;
  }, [flatParts, dataAnio, dataMes, dataQuincena]);

  // Construir items para Collapse manteniendo el orden INGENIOS_ORDER (y añadiendo los que no estén al final)
  const items = useMemo(() => {
    const entries = [];

    // Helper to push an ingenio if exists in processed set
    const pushIfExists = (nombre) => {
      if (!ingeniosProcesados[nombre]) return;
      const data = ingeniosProcesados[nombre];
      const label =
        nombre === "Ledesma" ? (
          <div>
            <span>{nombre}</span>
            <div style={{ fontSize: 12, color: "#888", fontWeight: 400 }}>
              {/* * Alcohol campaña 2025 están incorrectos. Revisar. */}
            </div>
          </div>
        ) : (
          nombre
        );

      entries.push({
        key: nombre,
        label,
        children: <ListadoDatos columns={columns} scroll={1600} data={data.finalRows} />,
      });
    };

    INGENIOS_ORDER.forEach((n) => {
      pushIfExists(n);
    });

    // Añadir cualquier ingenio que venga pero no esté en el order (por si hay nuevos)
    Object.keys(ingeniosProcesados).forEach((nombre) => {
      if (!INGENIOS_ORDER.includes(nombre)) {
        pushIfExists(nombre);
      }
    });

    return entries;
  }, [ingeniosProcesados]);
  return (
    <Collapse
      bordered={false}
      size="small"
      expandIconPosition="end"
      defaultActiveKey={["0"]}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        width: "100%",
        fontSize: 17,
        fontWeight: 600,
      }}
      items={items}
    />
  );
};

export default ItemsCollapse;
