import { Col, Row } from "react-bootstrap"
import moment from "moment"
import { useEffect, useMemo, useState } from "react"
import { datosAcumuladosDDJJHook } from "./hooks/AcumulativosDDJJHook"
import ListHeader from "../ListHeader"
import ListadoDatos from "../ParteDiario/ListadoDatos"
import { columnsDDJJ, columnsDetalleDDJJ } from "./columnsTableDDJJ"
import ListadoDatosExpandible from "./ListaDatosExpandible"
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";

const DdjjComponent = ({
  anioZafra,
  fechaDesdeInformacion,
  fechaHastaInformacion,
  ddjjInformacion,
  ddjjInformacionFilter,
  ddjjInformacionParseada,
  estadoDDJJInformacion,
  setDdjjInformacionParseada
}) => {
  useEffect(() => {
    const returnData = datosAcumuladosDDJJHook(
      ddjjInformacionFilter
    )
    setDdjjInformacionParseada(returnData)
  }, [ddjjInformacionFilter])


  /**
   * Indexamos TODAS las DDJJ para búsquedas rápidas
   * key = ingenioCodigo + fechaDesde
   */
  const ddjjIndex = useMemo(() => {
    return ddjjInformacion.reduce((acc, d) => {
      const key = `${d.ingenioCodigo}-${moment(d.fechaDesde).format("YYYY-MM-DD")}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(d);
      return acc;
    }, {});
  }, [ddjjInformacion]);

  /**
   * Render del desplegable
   */
  const expandedRowRender = (record) => {
    const key = `${record.ingenioCodigo}-${moment(record.fechaDesde).format("YYYY-MM-DD")}`;

    const dataDetalle = ddjjIndex[key] || [];
    const dataDetalleFiltradaPorEstado1 = dataDetalle.filter(d => d.identificadorDeclaracion !== record.identificadorDeclaracion)
    return (
      <div
        style={{
          margin: "8px 0",
          padding: "12px",
          background: "#f5f7fa",
        }}
      >
        <ListadoDatos
          columns={columnsDetalleDDJJ}
          data={dataDetalleFiltradaPorEstado1}
          scroll={false}
          pagination={false}
          size="small"
        />
      </div>
    );
  };

  const expandableConfig = {
    expandedRowRender,
    rowExpandable: () => true,
    expandIcon: ({ expanded, onExpand, record }) => (
      <span
        onClick={e => onExpand(record, e)}
        style={{
          cursor: "pointer",
          fontSize: 14,
          color: expanded ? "#1677ff" : "#595959",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {expanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
      </span>
    )
  };

  return (
    <Row className="d-flex justify-content-start align-items-center px-4 pb-4 pt-2">
      <Col xs={12} className="mb-2">
        <Row className="justify-content-start">
          <Col className="mb-1 encabezados-panel fw-bolder">
            {fechaDesdeInformacion && fechaHastaInformacion
              ? `Periodo: ${fechaDesdeInformacion ? moment(fechaDesdeInformacion).format("DD-MM-YYYY") : ""}
                         | ${fechaHastaInformacion ? moment(fechaHastaInformacion).format("DD-MM-YYYY") : ""}`
              : `Periodo: ${anioZafra}`
            }

          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Estado: {estadoDDJJInformacion}
          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Total DDJJ: {ddjjInformacionFilter.length}
          </Col>
        </Row>
      </Col>
      {estadoDDJJInformacion === 'Aprobado' ? (
        <>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Caña molida bruta
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.cmb?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Az. Crudo
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.azCrudo?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Az. Blanco
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.azBlanco?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Az. Refinado
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.azRefinado?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Az. Orgánico
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.azOrganico?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Az. Físico
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.azFisico?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Az. Equivalente
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.azEquivalente?.toLocaleString("es-ES")} [tn]
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Rto. Az. Equivalente
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {((ddjjInformacionParseada?.totales?.azEquivalente / ddjjInformacionParseada?.totales?.cmb) * 100).toFixed(2)} (%)
              </p>
            </div>
          </Col>
          <Col className="align-items-center col-valores p-2 mx-2">
            <div>
              <p className="text-center fw-bolder mb-1 t-panel">
                Alcohol Producido
              </p>
            </div>
            <div>
              <p className="text-center mb-1 dato-panel">
                {ddjjInformacionParseada?.totales?.alcoholElaborado?.toLocaleString("es-ES")} [L]
              </p>
            </div>
          </Col>
        </>

      ) : (
        <>
          <ListHeader
            title={`Declaraciones Juradas ${estadoDDJJInformacion}`}
          />
          <div className='pb-1 pt-3 px-4'>
            <ListadoDatosExpandible
              columns={columnsDDJJ}
              data={ddjjInformacionFilter}
              scroll={600}
              expandable={
                expandableConfig
              }
            />
           
          </div>
        </>
      )}
    </Row>
  )
}

export default DdjjComponent