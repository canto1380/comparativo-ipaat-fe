import { Row, Col } from "react-bootstrap";
import moment from "moment";
import "./parteDiario.css";

const texto = (valor) =>
  valor === null || valor === undefined ? "" : Number(valor).toLocaleString("es-ES");

const PanelResumenRegion = ({
  dataEnd,
  diasZafra,
  diasDestileria,
  cmb,
  azucarEquivalente,
  azucar,
  azucarCrudo,
  azucarBlancoA,
  azucarRefinado,
  azucarOrganico,
  alcohol,
  alcoholAnhidro,
  estimacion,
}) => {
  const rendimiento = cmb ? ((azucarEquivalente / cmb) * 100).toFixed(2) : "";
  const avance = cmb && estimacion ? ((cmb / estimacion) * 100).toFixed(2) : 0;

  return (
    <Row className="justify-content-start align-items-center">
      <Col xs={12} className="mb-2">
        <Row className="justify-content-start">
          <Col className="mb-1 encabezados-panel fw-bolder">
            Datos hasta: {dataEnd ? moment(dataEnd).format("DD-MM-YYYY") : ""}
          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Días de zafra: {Math.trunc(Number(diasZafra) || 0)}
          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Días de Destilería: {Math.trunc(Number(diasDestileria) || 0)}
          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Rto CMB(%): {rendimiento}
          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Avance de zafra(%): {avance}
          </Col>
        </Row>
      </Col>
      <Tarjeta titulo="Caña molida bruta" valor={texto(cmb)} unidad="tn" />
      <Tarjeta titulo="Azúcar Total" valor={texto(azucar)} unidad="tn" />
      <Tarjeta titulo="Azúcar Crudo" valor={texto(azucarCrudo)} unidad="tn" />
      <Tarjeta titulo="Azúcar Blanco A" valor={texto(azucarBlancoA)} unidad="tn" />
      <Tarjeta titulo="Azúcar Refinado" valor={texto(azucarRefinado)} unidad="tn" />
      <Tarjeta titulo="Azúcar Orgánico" valor={texto(azucarOrganico)} unidad="tn" />
      <Tarjeta titulo="Alcohol" valor={texto(alcohol)} unidad="L" />
      <Tarjeta titulo="Alcohol Anhidro" valor={texto(alcoholAnhidro)} unidad="L" />
    </Row>
  );
};

const Tarjeta = ({ titulo, valor, unidad }) => (
  <Col className="align-items-center col-valores p-2 mx-2">
    <div>
      <p className="text-center fw-bolder mb-1 t-panel">{titulo}</p>
    </div>
    <div>
      <p className="text-center mb-1 dato-panel">
        {valor} [{unidad}]
      </p>
    </div>
  </Col>
);

export default PanelResumenRegion;
