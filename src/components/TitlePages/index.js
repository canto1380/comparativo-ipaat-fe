import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import './titlePage.css'
const TitlePage = ({
  titlePage,
  btnBack,
  btnLink,
  btnOnClick,
  titleBtnOnClick,
  functionOnClick,
  lastUpdated,
  type
}) => {
  return (
    <Row className="d-flex justify-content-between align-items-center page-title-row">
      <Col xs={btnOnClick ? 12 : 8} sm={8} className="mt-2">
        <div className="pt-2 pb-0 px-4">
          <h3 className="mb-0">{titlePage}</h3>
        </div>
      </Col>
      {btnBack && (
        <Col xs={4} className="mt-2">
          <div className="pt-2 pb-0 px-4 text-end">
            <Button
              type="secondary"
              style={{ background: "rgb(64, 64, 64)", color: "white" }}
              href={`${btnLink}`}
            >
              Volver
            </Button>
          </div>
        </Col>
      )}
      {btnOnClick && (
        <Col xs={12} md={4} className="mt-2 container-button-update">
          <div className="pt-2 pb-0 px-2 text-end button-update">
            <Button
              type="secondary"
              className="btn-actualizar"
              onClick={functionOnClick}
            >
              {titleBtnOnClick}
            </Button>
          </div>
          <div className="ps-4 pe-3 text-end info-update">
            <p className="mb-0">{type === 'parteDiario' ? 'Última actualización: ' : 'DDJJ hasta: '}{lastUpdated}</p>
          </div>
        </Col>
      )}
    </Row>
  );
};
export default TitlePage;
