import React, { useContext, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { DatosHistoricosZafraExcel } from "../../Excel/DatosHistoricosZafra";
import { User } from "../../context/UserProvider";
import { tienePermiso } from "../../utils/permisos";

const ZafraUnificadaPorDias = ({
  dataZafraInicio,
  dataZafraFin,
  dataImport,
  setDataImport,
  setBanderaDataNull,
}) => {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const { dataUser } = useContext(User);

  return (
    <Container fluid className="p3">
      <p className="fw-bolder">Resumen Histórico diario.</p>
      <span className="text-danger fw-bolder">*</span>
      <span className="text-legend">
        Informe diario unificado durante el periodo elegido.
      </span>

      <p className="text-legend mb-1">
        <span className="text-danger fw-bolder">*</span>
        <span className="text-legend">No hay vista previa debido a la cantidad de registros.</span>
      </p>

      {tienePermiso(dataUser, "reportes.exportar") && (
      <Row className="d-flex justify-content-start align-items-center pt-2 px-0">
        <Col xs={12} className="text-start mb-3 mt-2">
          <Button
            className={`${(!dataZafraInicio || !dataZafraFin) && "disabled"}`}
            onClick={() =>
              DatosHistoricosZafraExcel(
                dataUser,
                dataImport,
                setDataImport,
                setBanderaDataNull,
                setLoadingDownload
              )
            }
          >
            {!dataZafraInicio || !dataZafraFin ? (
              "Elija el periodo"
            ) : dataZafraInicio && dataZafraFin && dataImport === null ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Procesando
              </>
            ) : loadingDownload ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Descargando
              </>
            ) : (
              "Descargar"
            )}
          </Button>
        </Col>
      </Row>
      )}
    </Container>
  );
};
export default ZafraUnificadaPorDias;
