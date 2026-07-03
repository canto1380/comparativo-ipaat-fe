import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { datosComparativosHook } from "./hooks/DatosComparativosHook"
import { Button, message, Table } from "antd";
import { columnsTable } from "./ColumnsComparativoZafras";
import { apiExportExcel } from "../../../utils/apiExportExcel";
import moment from 'moment';

const ReportesComparativoZafras = ({
  periodosAnioStart,
  periodosAnioEnd,
  dataAnioStartZafraTucuman,
  dataAnioStartDestileriaTucuman,
  dataAnioStartAnhidroTucuman,
  dataAnioEndZafraTucuman,
  dataAnioEndDestileriaTucuman,
  dataAnioEndAnhidroTucuman,
  dataAnioStartZafraNorte,
  dataAnioStartDestileriaNorte,
  dataAnioStartAnhidroNorte,
  dataAnioEndZafraNorte,
  dataAnioEndDestileriaNorte,
  dataAnioEndAnhidroNorte,
  anioStart,
  anioEnd,
  itemsComaprativosZafra,
  routeAPI,
  dataUserRegister,
  region
}) => {

  // 📊 Ingenios Tucumán
  const [aguilares, setAguilares] = useState([]);
  const [aguilaresComp, setAguilaresComp] = useState([]);
  const [bellavista, setBellavista] = useState([]);
  const [bellavistaComp, setBellavistaComp] = useState([]);
  const [bellavistaDestileria, setBellavistaDestileria] = useState([]);
  const [bellavistaDestileriaComp, setBellavistaDestileriaComp] = useState([]);
  const [concepcion, setConcepcion] = useState([]);
  const [concepcionComp, setConcepcionComp] = useState([]);
  const [cruzalta, setCruzalta] = useState([]);
  const [cruzaltaComp, setCruzaltaComp] = useState([]);
  const [famailla, setFamailla] = useState([]);
  const [famaillaComp, setFamaillaComp] = useState([]);
  const [corona, setCorona] = useState([]);
  const [coronaComp, setCoronaComp] = useState([]);
  const [florida, setFlorida] = useState([]);
  const [floridaComp, setFloridaComp] = useState([]);
  const [provincia, setProvincia] = useState([]);
  const [provinciaComp, setProvinciaComp] = useState([]);
  const [trinidad, setTrinidad] = useState([]);
  const [trinidadComp, setTrinidadComp] = useState([]);
  const [leales, setLeales] = useState([]);
  const [lealesComp, setLealesComp] = useState([]);
  const [marapa, setMarapa] = useState([]);
  const [marapaComp, setMarapaComp] = useState([]);
  const [nunorco, setNunorco] = useState([]);
  const [nunorcoComp, setNunorcoComp] = useState([]);
  const [santabarbara, setSantabarbara] = useState([]);
  const [santabarbaraComp, setSantabarbaraComp] = useState([]);
  const [santarosa, setSantarosa] = useState([]);
  const [santarosaComp, setSantarosaComp] = useState([]);
  const [sanjuan, setSanjuan] = useState([]);
  const [sanjuanComp, setSanjuanComp] = useState([]);

  // 📊 Ingenios Norte
  const [esperanza, setEsperanza] = useState([]);
  const [esperanzaComp, setEsperanzaComp] = useState([]);
  const [ledesma, setLedesma] = useState([]);
  const [ledesmaComp, setLedesmaComp] = useState([]);
  const [riogrande, setRiogrande] = useState([]);
  const [riograndeComp, setRiograndeComp] = useState([]);
  const [sanisidro, setSanisidro] = useState([]);
  const [sanisidroComp, setSanisidroComp] = useState([]);
  const [seaboard, setSeaboard] = useState([]);
  const [seaboardComp, setSeaboardComp] = useState([]);

  /*** FECHAS PERIODOS ***/
  const [fechasInicioIngenios, setFechasInicioIngenios] = useState(null);
  const [fechasAnioFinIngenios, setFechasAnioFinIngenios] = useState(null);
  const [fechasInicioDestileriaIngenios, setFechasInicioDestileriaIngenios] = useState(null);
  const [fechasAnioFinDestileriaIngenios, setFechasAnioFinDestileriaIngenios] = useState(null);
  const [fechasInicioAnhidroIngenios, setFechasInicioAnhidroIngenios] = useState(null)
  const [fechasAnioFinAnhidroIngenios, setFechasAnioFinAnhidroIngenios] = useState(null)
  const [fechasInicioIngeniosNorte, setFechasInicioIngeniosNorte] = useState(null);
  const [fechasAnioFinIngeniosNorte, setFechasAnioFinIngeniosNorte] = useState(null);
  const [fechasInicioDestileriaIngeniosNorte, setFechasInicioDestileriaIngeniosNorte] = useState(null);
  const [fechasAnioFinDestileriaIngeniosNorte, setFechasAnioFinDestileriaIngeniosNorte] = useState(null);
  const [fechasInicioAnhidroIngeniosNorte, setFechasInicioAnhidroIngeniosNorte] = useState(null);
  const [fechasAnioFinAnhidroIngeniosNorte, setFechasAnioFinAnhidroIngeniosNorte] = useState(null);

  const [ingeniosFinalizados, setIngeniosFinalizados] = useState(undefined)
  const [ingeniosDestileriaFinalizados, setIngeniosDestileriaFinalizados] = useState(undefined)
  const [ingeniosAnhidroFinalizados, setIngeniosAnhidroFinalizados] = useState(undefined)

  const [ingeniosFinalizadosNorte, setIngeniosFinalizadosNorte] = useState(undefined)
  const [ingeniosDestileriaFinalizadosNorte, setIngeniosDestileriaFinalizadosNorte] = useState(undefined)
  const [ingeniosAnhidroFinalizadosNorte, setIngeniosAnhidroFinalizadosNorte] = useState(undefined)

  const [tableDataView, setTableDataView] = useState([])

  useEffect(() => {
    datosComparativosHook(
      anioEnd,
      anioStart,
      periodosAnioStart,
      periodosAnioEnd,
      dataAnioStartZafraTucuman,
      dataAnioStartDestileriaTucuman,
      dataAnioStartAnhidroTucuman,
      dataAnioEndZafraTucuman,
      dataAnioEndDestileriaTucuman,
      dataAnioEndAnhidroTucuman,
      dataAnioStartZafraNorte,
      dataAnioStartDestileriaNorte,
      dataAnioStartAnhidroNorte,
      dataAnioEndZafraNorte,
      dataAnioEndDestileriaNorte,
      dataAnioEndAnhidroNorte,
      setAguilares,
      setBellavista,
      setBellavistaDestileria,
      setConcepcion,
      setCruzalta,
      setFamailla,
      setFlorida,
      setCorona,
      setProvincia,
      setTrinidad,
      setLeales,
      setMarapa,
      setNunorco,
      setSantabarbara,
      setSantarosa,
      setEsperanza,
      setLedesma,
      setRiogrande,
      setSanisidro,
      setSeaboard,

      setAguilaresComp,
      setBellavistaComp,
      setBellavistaDestileriaComp,
      setConcepcionComp,
      setCruzaltaComp,
      setFamaillaComp,
      setFloridaComp,
      setCoronaComp,
      setProvinciaComp,
      setTrinidadComp,
      setLealesComp,
      setMarapaComp,
      setNunorcoComp,
      setSantabarbaraComp,
      setSantarosaComp,
      setEsperanzaComp,
      setLedesmaComp,
      setRiograndeComp,
      setSanisidroComp,
      setSeaboardComp,

      setFechasInicioIngenios,
      setFechasAnioFinIngenios,
      setFechasInicioDestileriaIngenios,
      setFechasAnioFinDestileriaIngenios,
      setFechasInicioIngeniosNorte,
      setFechasAnioFinAnhidroIngenios,
      setFechasInicioDestileriaIngeniosNorte,
      setFechasAnioFinIngeniosNorte,
      setFechasInicioAnhidroIngenios,
      setFechasAnioFinDestileriaIngeniosNorte,
      setFechasInicioAnhidroIngeniosNorte,
      setFechasAnioFinAnhidroIngeniosNorte
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [periodosAnioStart, periodosAnioEnd, dataAnioStartAnhidroTucuman, dataAnioStartDestileriaTucuman, dataAnioStartZafraTucuman, dataAnioEndDestileriaTucuman, dataAnioEndAnhidroTucuman, dataAnioEndZafraTucuman, dataAnioStartZafraNorte, dataAnioEndZafraNorte, dataAnioStartDestileriaNorte, dataAnioEndDestileriaNorte, dataAnioStartAnhidroNorte, dataAnioEndAnhidroNorte])
  /** FILTRO DE INGENIOS QUE FINALIZARON -- TUCUMAN **/
  useEffect(() => {
    if (fechasAnioFinIngenios && fechasAnioFinIngenios !== null && periodosAnioStart && periodosAnioEnd) {
      let ingeniosFinalizados = Object.entries(fechasAnioFinIngenios)
        .filter(([key, value]) => key.endsWith("FinZafraEnd") && value !== null)
        .map(([key]) => key.replace("FinZafraEnd", ""))
        .filter(nombre => nombre !== 'sanJuan')
      setIngeniosFinalizados(ingeniosFinalizados)
    }
  }, [fechasAnioFinIngenios])

  useEffect(() => {
    if (fechasAnioFinDestileriaIngenios && fechasAnioFinDestileriaIngenios !== null && periodosAnioStart && periodosAnioEnd) {

      let ingeniosDestFinalizados = Object.entries(fechasAnioFinDestileriaIngenios)
        .filter(([key, value]) => key.endsWith("FinDestileriaEnd") && value !== null)
        .map(([key]) => key.replace("FinDestileriaEnd", ""))
        .filter(nombre => nombre !== 'sanJuan')
      setIngeniosDestileriaFinalizados(ingeniosDestFinalizados)
    }
  }, [fechasAnioFinDestileriaIngenios])
  useEffect(() => {
    if (fechasAnioFinAnhidroIngenios && fechasAnioFinAnhidroIngenios !== null && periodosAnioStart && periodosAnioEnd) {
      let ingeniosAnhFinalizados = Object.entries(fechasAnioFinAnhidroIngenios)
        .filter(([key, value]) => key.endsWith("FinAnhidroEnd") && value !== null)
        .map(([key]) => key.replace("FinAnhidroEnd", ""))
        .filter(nombre => nombre !== 'sanJuan')
      setIngeniosAnhidroFinalizados(ingeniosAnhFinalizados)
    }
  }, [fechasAnioFinAnhidroIngenios])
  /*************************************************/

  /** FILTRO DE INGENIOS QUE FINALIZARON -- NORTE **/
  useEffect(() => {
    if (fechasAnioFinIngeniosNorte && fechasAnioFinIngeniosNorte !== null && periodosAnioStart && periodosAnioEnd) {
      let ingeniosFinalizados = Object.entries(fechasAnioFinIngeniosNorte)
        .filter(([key, value]) => key.endsWith("FinZafraEnd") && value !== null)
        .map(([key]) => key.replace("FinZafraEnd", ""))
        .filter(nombre => nombre !== 'sanJuan')
      setIngeniosFinalizadosNorte(ingeniosFinalizados)
    }
  }, [fechasAnioFinIngeniosNorte])

  useEffect(() => {
    if (fechasAnioFinDestileriaIngeniosNorte && fechasAnioFinDestileriaIngeniosNorte !== null && periodosAnioStart && periodosAnioEnd) {
      let ingeniosDestFinalizados = Object.entries(fechasAnioFinDestileriaIngeniosNorte)
        .filter(([key, value]) => key.endsWith("FinDestileriaEnd") && value !== null)
        .map(([key]) => key.replace("FinDestileriaEnd", ""))
        .filter(nombre => nombre !== 'sanJuan')
      setIngeniosDestileriaFinalizadosNorte(ingeniosDestFinalizados)
    }
  }, [fechasAnioFinDestileriaIngeniosNorte])

  useEffect(() => {
    if (fechasAnioFinAnhidroIngeniosNorte && fechasAnioFinAnhidroIngeniosNorte !== null && periodosAnioStart && periodosAnioEnd) {
      let ingeniosAnhFinalizados = Object.entries(fechasAnioFinAnhidroIngeniosNorte)
        .filter(([key, value]) => key.endsWith("FinAnhidroEnd") && value !== null)
        .map(([key]) => key.replace("FinAnhidroEnd", ""))
        .filter(nombre => nombre !== 'sanJuan')
      setIngeniosAnhidroFinalizadosNorte(ingeniosAnhFinalizados)
    }
  }, [fechasAnioFinAnhidroIngeniosNorte])
  /*************************************************/

  const calcDiff = (a, b) => ({
    diff: b - a,
    percent: ((b - a) / a * 100).toFixed(2),
  });

  /** MAPA DE DATOS **/
  const ingenioNombres = {
    aguilares: "Aguilares",
    bellaVista: 'Bella Vista',
    concepcion: 'Concepción',
    cruzAlta: 'Cruz Alta',
    destBellaVista: 'Dest. Bella Vista',
    famailla: "Famaillá",
    laCorona: "La Corona",
    laFlorida: 'La Florida',
    laProvidencia: 'La Providencia',
    laTrinidad: "La Trinidad",
    leales: 'Leales',
    marapa: "Marapa",
    nunorco: "Ñuñorco",
    staBarbara: "Santa Bárbara",
    staRosa: "Santa Rosa",
    sanJuan: "San Juan",
    laEsperanza: "La Esperanza",
    ledesma: "Ledesma",
    rioGrande: "Río Grande",
    sanIsidro: "San Isidro",
    seaboard: "Seaboard",
  };
  const dataPorIngenio = {
    aguilares: { start: aguilares, end: aguilaresComp },
    bellaVista: { start: bellavista, end: bellavistaComp },
    concepcion: { start: concepcion, end: concepcionComp },
    cruzAlta: { start: cruzalta, end: cruzaltaComp },
    destBellaVista: { start: bellavistaDestileria, end: bellavistaDestileriaComp },
    famailla: { start: famailla, end: famaillaComp },
    laCorona: { start: corona, end: coronaComp },
    laFlorida: { start: florida, end: floridaComp },
    laProvidencia: { start: provincia, end: provinciaComp },
    laTrinidad: { start: trinidad, end: trinidadComp },
    leales: { start: leales, end: lealesComp },
    marapa: { start: marapa, end: marapaComp },
    nunorco: { start: nunorco, end: nunorcoComp },
    staBarbara: { start: santabarbara, end: santabarbaraComp },
    staRosa: { start: santarosa, end: santarosaComp },
    sanJuan: { start: sanjuan, end: sanjuanComp },
    laEsperanza: { start: esperanza, end: esperanzaComp },
    ledesma: { start: ledesma, end: ledesmaComp },
    rioGrande: { start: riogrande, end: riograndeComp },
    sanIsidro: { start: sanisidro, end: sanisidroComp },
    seaboard: { start: seaboard, end: seaboardComp },
  };
  console.log(dataPorIngenio)

  // console.log('2024:', bellavista, bellavistaDestileria)
  // console.log('2025:', bellavistaComp, bellavistaDestileriaComp)
  /** CONDICION PARA VERIFICAR SI HAY DATOS PARA MOSTRAR **/
  const hayDatosListos =
    anioStart &&
    anioEnd &&
    itemsComaprativosZafra?.length > 0 &&
    ((ingeniosFinalizados?.length > 0) || (ingeniosFinalizadosNorte?.length > 0) ||
      (ingeniosDestileriaFinalizados?.length > 0) || (ingeniosDestileriaFinalizadosNorte?.length > 0) ||
      (ingeniosAnhidroFinalizados?.length > 0) || (ingeniosAnhidroFinalizadosNorte?.length > 0));



  const columns = hayDatosListos ? columnsTable(itemsComaprativosZafra, anioStart, anioEnd) : []
  let data = []

  const itemsZafra = ["CMB", "CMN", "MELAZA", "EQUIVALENTE", "RCMB", "RCMN", "CRUDO", "BLANCO", "REFINADO", "ORGANICO", "OTROS", "FISICOTOTAL"];
  const itemsDestileria = ["ALCPRODUCIDO", "ALCHIDRATADO"];
  const itemsAnhidro = ["ANHIDRO"];

  // Normalizar nombres (por si vienen con sufijo Dest)
  const normalizarNombreIngenio = (nombre) => {
    if (nombre === "bellaVistaDest") return "destBellaVista";
    return nombre;
  };

  // 👇 Mapeo de ingenios a regiones (1 = Tucumán, 2 = Norte)

  const ingeniosPorRegion = {
    1: ['aguilares', 'bellaVista', 'concepcion', 'cruzAlta', 'destBellaVista', 'famailla', 'laCorona', 'laFlorida', 'laProvidencia', 'laTrinidad', 'leales', 'marapa', 'nunorco', 'staBarbara', 'staRosa', 'sanJuan'],
    2: ['laEsperanza', 'ledesma', 'rioGrande', 'sanIsidro', 'seaboard']
  };

  // Función para verificar si un ingenio pertenece a una región
  const ingenioPerteneceARegion = (nombreIngenio, regionId) => {
    if (!regionId || regionId === 'Todos') return true;
    const regionNum = typeof regionId === 'string' ? parseInt(regionId) : regionId;
    return ingeniosPorRegion[regionNum]?.includes(nombreIngenio) || false;
  };
  // 👇 Mapeo especial por cambios estructurales entre campañas
  const aliasIngenios = anioEnd === 2025 ? {
    destBellaVista: "bellaVista", // comparar con Bella Vista anterior
  } : {};

  if (hayDatosListos) {
    const ingeniosCombinados = [
      ...(ingeniosFinalizados || []),
      ...(ingeniosFinalizadosNorte || []),
      ...(ingeniosDestileriaFinalizados || []),
      ...(ingeniosDestileriaFinalizadosNorte || []),
      ...(ingeniosAnhidroFinalizados || []),
      ...(ingeniosAnhidroFinalizadosNorte || [])
    ]
      .map(normalizarNombreIngenio)
      .filter((v, i, a) => a.indexOf(v) === i)
      // Filtrar por región si está seleccionada
      .filter(nombre => ingenioPerteneceARegion(nombre, region))
    // const ingenios = ingeniosFinalizados?.map((nombre) => {
    const ingenios = ingeniosCombinados.map((nombre) => {
      let itemsMostrar = []
      const itemsData = {};
      const dataIngenio = dataPorIngenio[nombre];
      // console.log(dataIngenio)
      if (!dataIngenio) return null;
      // 👇 Determinar qué items mostrar según el tipo de finalización
      if (ingeniosFinalizados.includes(nombre) || ingeniosFinalizadosNorte?.includes(nombre)) itemsMostrar.push(...itemsZafra);
      if (ingeniosDestileriaFinalizados.includes(nombre) || ingeniosDestileriaFinalizadosNorte?.includes(nombre)) itemsMostrar.push(...itemsDestileria);
      if (ingeniosAnhidroFinalizados.includes(nombre) || ingeniosAnhidroFinalizadosNorte?.includes(nombre)) itemsMostrar.push(...itemsAnhidro);
      // Eliminar duplicados si coincide en varios
      itemsMostrar = [...new Set(itemsMostrar)];
      // 📦 Armar los datos
      itemsMostrar.forEach((item) => {
        const clave = `${nombre}${item}`;
        let valorStart = 0;
        let valorEnd = 0;

        // 👇 Si hay un alias definido, usarlo para comparar ingenios distintos
        if (aliasIngenios[nombre]) {
          const nombreAnterior = aliasIngenios[nombre];
          const dataIngenioAnterior = dataPorIngenio[nombreAnterior];

          // Para ítems de alcohol, comparar el ingenio viejo vs el nuevo
          if (["ALCPRODUCIDO", "ALCHIDRATADO", "ANHIDRO"].includes(item)) {
            valorStart = dataIngenioAnterior?.start?.[`${nombre}${item}`] ?? 0;
            valorEnd = dataIngenio.end?.[`${nombre}${item}`] ?? 0;
          } else {
            // para otros ítems, usar el ingenio normal
            valorStart = dataIngenio.start?.[`${nombre}${item}`] ?? 0;
            valorEnd = dataIngenio.end?.[`${nombre}${item}`] ?? 0;
          }
        } else {
          // caso normal
          console.log(nombre,item)
          console.log(dataIngenio.end)
          valorStart = dataIngenio.start?.[`${nombre}${item}`] ?? 0;
          valorEnd = dataIngenio.end?.[`${nombre}${item}`] ?? 0;
        }
        // const valorStart = dataIngenio.start?.[clave] ?? 0;
        // const valorEnd = dataIngenio.end?.[clave] ?? 0;
        // console.log(valorStart, valorEnd)
        itemsData[item] = {
          [anioStart]: valorStart,
          [anioEnd]: valorEnd,
        };
      });
      // console.log(ingenioNombres[nombre] || nombre, itemsData)
      return {
        ingenio: ingenioNombres[nombre] || nombre,
        items: itemsData,
      };
    }).filter(Boolean);
    // 🧮 Preparar los datos de la tabla
    data = ingenios.map((ing) => {
      if (anioStart && anioEnd) {
        const row = { ingenio: ing.ingenio };

        Object.keys(ing.items).forEach((item) => {
          const valorStart = ing.items[item][anioStart];
          const valorEnd = ing.items[item][anioEnd];
          const { diff, percent } = calcDiff(valorStart, valorEnd);
          // 📊 Lógica personalizada para mostrar 100% si desapareció el dato
          let percentDisplay;
          if (
            valorStart !== undefined && valorEnd !== undefined &&
            valorStart === 0 && valorEnd === 0
          ) {
            percentDisplay = '-'; // ambos son cero

          } else if (
            valorEnd > 0 && (valorStart === 0 || valorStart == null)
          ) {
            percentDisplay = 100; // apareció dato nuevo

          } else if (
            valorStart > 0 && (valorEnd === 0 || valorEnd == null)
          ) {
            percentDisplay = -100; // desapareció el dato
          } else if (percent === Infinity || isNaN(percent)) {
            percentDisplay = '-';
          } else {
            percentDisplay = percent;
          }

          row[`${item}_${anioEnd}`] = valorEnd;
          row[`${item}_${anioStart}`] = valorStart;
          row[`${item}_diff`] = diff;
          row[`${item}_percent`] = percentDisplay;
        });
        return row;
      }
    });
  }
  useEffect(() => {
    setTableDataView(data || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)])

  const getLeafColumns = (cols) => {
    const out = []
    const walk = (arr) => {
      (arr || []).forEach(c => {
        if (c.children && c.children.length) {
          walk(c.children)
        } else {
          const dataIndex = Array.isArray(c.dataIndex) ? c.dataIndex[0] : c.dataIndex
          if (dataIndex) out.push({ title: c.title, key: dataIndex })
        }
      })
    }
    walk(cols)
    return out
  }
  const filterRowsByColumns = (rows, leafCols) => {
    const allowed = new Set(['ingenio', ...leafCols.map(c => c.key)])
    return (rows || []).map(r => {
      const obj = {}
      allowed.forEach(k => { if (r[k] !== undefined) obj[k] = r[k] })
      return obj
    })
  }
  const exportarComparativoZafra = async () => {
    const dateNow = new Date()
    const leafCols = getLeafColumns(columns)
    const rows = tableDataView && tableDataView.length ? tableDataView : data
    const dataFiltered = filterRowsByColumns(rows, leafCols)
    const dateFormat = moment(dateNow).format("DD-MM-YYYY")
    const titulo = 'Comparativo zafras'
    const payload = {
      dateFormat,
      dataUserRegister,
      titulo,
      data: dataFiltered,
      // columns: leafCols.map(c => ({ header: c.title, key: c.key })),
      columns: columns,
      anioStart,
      anioEnd
    }
    const res = await apiExportExcel("POST", `${routeAPI}/descargarComparativoZafra`, { data: [payload] })
    if (res.status === 200) {
      const blob = new Blob([res.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${dateFormat} - Informe comparativa zafra`
      link.click();
      link.remove();
      window.URL.revokeObjectURL(link);
      message.success("Descarga realizada correctamente", 5);
      window.location.reload();
    }
  }
  console.log('data:: ', data)
  return (
    <>
      {!hayDatosListos ? (
        <div className="px-4 py-2"><span className='text-dark fw-bolder text-legend'>Selecciona un período y al menos un ítem para ver los resultados..</span></div>
      ) : (
        <Container fluid>
          {hayDatosListos && (
            <div className="text-end my-3">
              <Button variant="success" onClick={exportarComparativoZafra}>
                📦 Exportar comparativo
              </Button>
            </div>
          )}
          <Table
            bordered
            size="small"
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: "max-content" }}
            rowKey="ingenio"
            onChange={(pagination, filters, sorter, extra) => {
              setTableDataView(extra?.currentDataSource || data)
            }}
          />
        </Container>
      )
      }
    </>
  )
}
export default ReportesComparativoZafras