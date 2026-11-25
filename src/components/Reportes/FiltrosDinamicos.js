import React, { useContext, useState, useEffect } from "react";
import { User } from "../../context/UserProvider";
import { ingenioFijo } from "../../utils/permisos";
import { Select, DatePicker, Button, Card, Row, Col, Divider } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { getAnios } from "../../utils/queryAPI/anios";
import { getIngenios } from "../../utils/queryAPI/ingenios";

const { RangePicker } = DatePicker;
const { Option } = Select;

const FiltrosDinamicos = ({
  onFiltrosChange,
  onGenerarReporte,
  loading = false
}) => {
  const [tipoReporte, setTipoReporte] = useState(null);
  const [parametroFiltro, setParametroFiltro] = useState(null);
  const [ingeniosSeleccionados, setIngeniosSeleccionados] = useState([]);
  const [periodoZafra, setPeriodoZafra] = useState(null);
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);
  const [anios, setAnios] = useState([]);
  const [ingenios, setIngenios] = useState([]);
  const { dataUser } = useContext(User);
  const idIngenioFijo = ingenioFijo(dataUser);

  // Opciones de tipos de reporte
  const tiposReporte = [
    {
      value: "mejores_registros",
      label: "Mejores registros por ingenio según parámetros",
      description: "Muestra los mejores registros de cada ingenio basado en el parámetro seleccionado"
    },
    {
      value: "mejores_historicos",
      label: "Mejores registros históricos por ingenio",
      description: "Mejores registros históricos de cada ingenio según parámetros"
    },
    {
      value: "resumen_zafra",
      label: "Resumen de cada zafra por parámetros",
      description: "Resumen estadístico de cada zafra según el parámetro seleccionado"
    },
    {
      value: "dia_mayor_produccion",
      label: "Día con mayor producción de parámetro",
      description: "Identifica el día con mayor producción del parámetro seleccionado"
    },
    {
      value: "quincena_mayor_produccion",
      label: "Quincena con mayor producción de parámetro",
      description: "Identifica la quincena con mayor producción del parámetro seleccionado"
    },
    {
      value: "ingenio_mayor_produccion",
      label: "Ingenio con mayor producción de parámetro",
      description: "Identifica el ingenio con mayor producción del parámetro seleccionado"
    }
  ];

  // Parámetros disponibles para filtrar
  const parametrosDisponibles = [
    { value: "MoliendaCanaBruta", label: "CMB (Caña Molida Bruta)", unidad: "ton" },
    { value: "Alcohol", label: "Alcohol", unidad: "hl" },
    { value: "AzucarCrudo", label: "Azúcar Crudo", unidad: "ton" },
    { value: "AzucarBlanco", label: "Azúcar Blanco", unidad: "ton" },
    { value: "Melaza", label: "Melaza", unidad: "ton" },
    { value: "RendimientoCMB", label: "Rendimiento CMB", unidad: "%" },
    { value: "RendimientoAzucar", label: "Rendimiento Azúcar", unidad: "%" },
    { value: "EficienciaMolienda", label: "Eficiencia Molienda", unidad: "%" }
  ];

  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  const cargarDatosIniciales = async () => {
    try {
      const [aniosData, ingeniosData] = await Promise.all([
        getAnios(),
        getIngenios()
      ]);
      
      setAnios(aniosData.filter(a => a.anio_zafra !== 2013));
      const lista = idIngenioFijo
        ? (ingeniosData || []).filter((ingenio) => Number(ingenio.id) === idIngenioFijo)
        : ingeniosData;
      setIngenios(lista);
      if (idIngenioFijo) setIngeniosSeleccionados([idIngenioFijo]);
    } catch (error) {
      console.error("Error cargando datos iniciales:", error);
    }
  };

  const handleTipoReporteChange = (value) => {
    setTipoReporte(value);
    // Limpiar otros filtros cuando cambia el tipo de reporte
    setParametroFiltro(null);
    setIngeniosSeleccionados(idIngenioFijo ? [idIngenioFijo] : []);
    setPeriodoZafra(null);
    setFechaInicio(null);
    setFechaFin(null);
  };

  const handleParametroChange = (value) => {
    setParametroFiltro(value);
  };

  const handleIngeniosChange = (value) => {
    setIngeniosSeleccionados(value);
  };

  const handlePeriodoZafraChange = (value) => {
    setPeriodoZafra(value);
  };

  const handleFechaChange = (dates) => {
    if (dates && dates.length === 2) {
      setFechaInicio(dates[0]);
      setFechaFin(dates[1]);
    } else {
      setFechaInicio(null);
      setFechaFin(null);
    }
  };

  const handleGenerarReporte = () => {
    const filtros = {
      tipoReporte,
      parametroFiltro,
      ingenios: ingeniosSeleccionados,
      periodoZafra,
      fechaInicio,
      fechaFin
    };

    if (onFiltrosChange) {
      onFiltrosChange(filtros);
    }

    if (onGenerarReporte) {
      onGenerarReporte(filtros);
    }
  };

  const getTipoReporteSeleccionado = () => {
    return tiposReporte.find(t => t.value === tipoReporte);
  };

  const isFormValid = () => {
    return tipoReporte && parametroFiltro && (periodoZafra || (fechaInicio && fechaFin));
  };

  return (
    <Card 
      title={
        <div className="d-flex align-items-center">
          <FilterOutlined className="me-2" />
          Filtros Dinámicos para Reportes
        </div>
      }
      className="mb-4"
    >
      <Row gutter={[16, 16]}>
        {/* Tipo de Reporte */}
        <Col xs={24} md={12}>
          <div className="mb-3">
            <label className="form-label fw-bold">Tipo de Reporte:</label>
            <Select
              placeholder="Seleccione el tipo de reporte"
              style={{ width: "100%" }}
              value={tipoReporte}
              onChange={handleTipoReporteChange}
              showSearch
              optionFilterProp="label"
            >
              {tiposReporte.map(tipo => (
                <Option key={tipo.value} value={tipo.value} label={tipo.label}>
                  <div>
                    <div className="fw-bold">{tipo.label}</div>
                    <div className="text-muted small">{tipo.description}</div>
                  </div>
                </Option>
              ))}
            </Select>
            {tipoReporte && (
              <div className="mt-2 p-2 bg-light rounded">
                <small className="text-muted">
                  <strong>Descripción:</strong> {getTipoReporteSeleccionado()?.description}
                </small>
              </div>
            )}
          </div>
        </Col>

        {/* Parámetro de Filtro */}
        <Col xs={24} md={12}>
          <div className="mb-3">
            <label className="form-label fw-bold">Parámetro a Analizar:</label>
            <Select
              placeholder="Seleccione el parámetro"
              style={{ width: "100%" }}
              value={parametroFiltro}
              onChange={handleParametroChange}
              showSearch
              optionFilterProp="label"
              disabled={!tipoReporte}
            >
              {parametrosDisponibles.map(param => (
                <Option key={param.value} value={param.value} label={param.label}>
                  <div>
                    <div>{param.label}</div>
                    <div className="text-muted small">Unidad: {param.unidad}</div>
                  </div>
                </Option>
              ))}
            </Select>
          </div>
        </Col>

        {/* Ingenios */}
        <Col xs={24} md={12}>
          <div className="mb-3">
            <label className="form-label fw-bold">Ingenios (Opcional):</label>
            <Select
              mode="multiple"
              placeholder="Seleccione ingenios (opcional)"
              style={{ width: "100%" }}
              value={ingeniosSeleccionados}
              onChange={handleIngeniosChange}
              showSearch
              optionFilterProp="label"
              disabled={!tipoReporte || Boolean(idIngenioFijo)}
            >
              {ingenios.map(ingenio => (
                <Option key={ingenio.id} value={ingenio.id} label={ingenio.nombre_ingenio || ingenio.nombre}>
                  {ingenio.nombre_ingenio || ingenio.nombre}
                </Option>
              ))}
            </Select>
            <small className="text-muted">
              {idIngenioFijo ? "Solo el ingenio de su usuario" : "Dejar vacío para incluir todos los ingenios"}
            </small>
          </div>
        </Col>

        {/* Período de Zafra */}
        <Col xs={24} md={12}>
          <div className="mb-3">
            <label className="form-label fw-bold">Período de Zafra:</label>
            <Select
              placeholder="Seleccione período de zafra"
              style={{ width: "100%" }}
              value={periodoZafra}
              onChange={handlePeriodoZafraChange}
              showSearch
              optionFilterProp="label"
              disabled={!tipoReporte}
            >
              {anios.map(anio => (
                <Option key={anio.anio_zafra} value={anio.anio_zafra} label={anio.anio_zafra}>
                  Zafra {anio.anio_zafra}
                </Option>
              ))}
            </Select>
          </div>
        </Col>

        {/* Rango de Fechas */}
        <Col xs={24} md={12}>
          <div className="mb-3">
            <label className="form-label fw-bold">Rango de Fechas (Alternativo):</label>
            <RangePicker
              style={{ width: "100%" }}
              onChange={handleFechaChange}
              placeholder={["Fecha inicio", "Fecha fin"]}
              disabled={!tipoReporte || periodoZafra}
            />
            <small className="text-muted">Use este campo si no selecciona período de zafra</small>
          </div>
        </Col>

        {/* Botón Generar */}
        <Col xs={24}>
          <Divider />
          <div className="d-flex justify-content-end">
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={handleGenerarReporte}
              disabled={!isFormValid()}
              loading={loading}
              size="large"
            >
              Generar Reporte
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default FiltrosDinamicos;
