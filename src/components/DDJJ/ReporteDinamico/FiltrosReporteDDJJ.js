import { useEffect } from "react";
import { Select, Checkbox, Divider } from "antd";
import { ingenioFijo } from "../../../utils/permisos";
import { Col, Row } from "react-bootstrap";
import "./FiltrosReporteDDJJ.css";

const FiltrosReporteDDJJ = ({
  zafras,
  ingenios,
  quincenas,
  items,
  zafraReportes,
  setZafraReportes,
  ingeniosReporte,
  setIngeniosReporte,
  quincenasReporte,
  setQuincenasReporte,
  itemsReporte,
  setItemsReporte,
  itemsReporteValidos
}) => {
  const idIngenioFijo = ingenioFijo();
  useEffect(() => {
    if (idIngenioFijo && ingenios?.length === 1) {
      setIngeniosReporte(ingenios);
    }
  }, [idIngenioFijo, ingenios, setIngeniosReporte]);
  return (
    <div className="filtros-reporte-container">
      <Row className="g-3">
        <Col className="mt-3">
          <div className={`pt-1 pb-0 `}>
            <p className="fw-bolder">Filtros reporte dinámico</p>
          </div>
        </Col>
      </Row>
      <Row className="g-3">
        <Col xs={12} md={6} lg={4}>
          <div className="filtro-box">
            <label className="filtro-label">Zafras</label>
            <Select
              mode="multiple"
              placeholder="Seleccionar zafras"
              options={zafras.map(z => ({ label: z, value: z }))}
              value={zafraReportes}
              onChange={setZafraReportes}
              className="filtro-select"
            />
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="filtro-box">
            <label className="filtro-label">Ingenios</label>
            <Select
              mode="multiple"
              placeholder="Seleccionar ingenios"
              options={ingenios.map(i => ({ label: i, value: i }))}
              value={idIngenioFijo && ingenios?.length === 1 ? ingenios : ingeniosReporte}
              onChange={setIngeniosReporte}
              disabled={Boolean(idIngenioFijo)}
              className="filtro-select"
            />
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="filtro-box">
            <label className="filtro-label">Quincenas</label>
            <Select
              mode="multiple"
              placeholder="Seleccionar quincenas"
              options={quincenas.map(q => ({ label: q, value: q }))}
              value={quincenasReporte}
              onChange={setQuincenasReporte}
              className="filtro-select"
            />
          </div>
        </Col>
      </Row>

      <Divider className="filtro-divider" />

      <div className="filtro-box checkbox-box">
        <label className="filtro-label">Items del reporte</label>

        <Checkbox.Group
          value={itemsReporteValidos}
          onChange={setItemsReporte}
          className="checkbox-group-grid"
        >
          {items.map(item => (
            <Checkbox key={item.key} value={item.key}>
              {item.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default FiltrosReporteDDJJ;
