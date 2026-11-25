import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { DatosHistoricosZafraExcel } from "../../Excel/DatosHistoricosZafra";
import { User } from "../../context/UserProvider";
import ListHeader from "../ListHeader";
import ListadoDatos from "../ParteDiario/ListadoDatos";
import ColumnasDatosHistoricos from "../../components/Reportes/columnasDatosHistoricos.json";
import { dataRegistro1 } from "./DataReporte1";
import { tienePermiso } from "../../utils/permisos";

const DatosHistoricosZafra = ({
  dataZafraInicio,
  dataZafraFin,
  dataImport,
  setDataImport,
  setBanderaDataNull,
}) => {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const { dataUser } = useContext(User);
  const [anio2014, setAnio2014] = useState(undefined);
  const [anio2015, setAnio2015] = useState(undefined);
  const [anio2016, setAnio2016] = useState(undefined);
  const [anio2017, setAnio2017] = useState(undefined);
  const [anio2018, setAnio2018] = useState(undefined);
  const [anio2019, setAnio2019] = useState(undefined);
  const [anio2020, setAnio2020] = useState(undefined);
  const [anio2021, setAnio2021] = useState(undefined);
  const [anio2022, setAnio2022] = useState(undefined);
  const [anio2023, setAnio2023] = useState(undefined);
  const [anio2024, setAnio2024] = useState(undefined);
  const [anio2025, setAnio2025] = useState(undefined);
  const [dataTabla, setDataTabla] = useState(undefined);

  useEffect(() => {
    dataRegistro1(
      dataImport,
      setAnio2014,
      setAnio2015,
      setAnio2016,
      setAnio2017,
      setAnio2018,
      setAnio2019,
      setAnio2020,
      setAnio2021,
      setAnio2022,
      setAnio2023,
      setAnio2024,
      setAnio2025,
      setDataTabla
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafraInicio, dataZafraFin, dataImport]);
  for (let i = 2014; i <= 2024; i++) {
    let varName1 = "CMB" + i;
    let varName2 = "AzEquiv" + i;
    let varName3 = "RtoCMB" + i;
    let varName4 = "Alcohol" + i;
    let varName5 = "Melaza" + i;
    window[varName1] = 0;
    window[varName2] = 0;
    window[varName3] = 0;
    window[varName4] = 0;
    window[varName5] = 0;
  }

  return (
    <Container fluid className="p-3">
      <p className="fw-bolder">Resumen Histórico de zafras</p>
      <span className="text-danger fw-bolder">*</span>
      <span className="text-legend">
        Informe general de cada zafra durante el periodo elegido.
      </span>
      {(dataTabla !== undefined && dataTabla.length !== 0)  && (
      <Row>
        <ListHeader title="Datos reportes" />
        <ListadoDatos columns={ColumnasDatosHistoricos.columns} scroll={30} data={dataTabla}/>
      </Row>
      )}
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

export default DatosHistoricosZafra;
