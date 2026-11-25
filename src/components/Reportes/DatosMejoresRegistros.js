import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import ListHeader from "../ListHeader";
import {columns} from './columnasMejoresRegistros'
import ListadoDatos from "../ParteDiario/ListadoDatos";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { User } from "../../context/UserProvider";
import { DatosHistoricosZafraExcel } from "../../Excel/DatosHistoricosZafra";
import { tienePermiso } from "../../utils/permisos";

const DatosMejoresRegistros = ({
  dataZafraInicio,
  dataZafraFin,
  dataImport,
  setDataImport,
  setBanderaDataNull,
}) => {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const [datosMejores, setDatosMejores] = useState(undefined);
  const [datosAguilares, setDatosAguilares] = useState(undefined);
  const [datosBellaVista, setDatosBellaVista] = useState(undefined);
  const [datosConcepcion, setDatosConcepcion] = useState(undefined);
  const [datosCruzAlta, setDatosCruzAlta] = useState(undefined);
  const [datosFamailla, setDatosFamailla] = useState(undefined);
  const [datosCorona, setDatosCorona] = useState(undefined);
  const [datosFlorida, setDatosFlorida] = useState(undefined);
  const [datosProvidencia, setDatosProvidencia] = useState(undefined);
  const [datosTrinidad, setDatosTrinidad] = useState(undefined);
  const [datosLeales, setDatosLeales] = useState(undefined);
  const [datosMarapa, setDatosMarapa] = useState(undefined);
  const [datosNunorco, setDatosNunorco] = useState(undefined);
  const [datosBarbara, setDatosBarbara] = useState(undefined);
  const [datosRosa, setDatosRosa] = useState(undefined);

  const { dataUser } = useContext(User);

  const panelStyle = {
    marginBottom: 24,
    border: "none",
  };

  useEffect(() => {
    if (dataImport) {
      getDataMejoresRegistros();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataImport]);

  const getDataMejoresRegistros = async () => {
    const gruposPorIngenio = dataImport.reduce((acc, registro) => {
      const ingenio = registro.IngenioNombre;
      if (!acc[ingenio]) acc[ingenio] = [];
      acc[ingenio].push(registro);
      return acc;
    }, {});

    // Ordenar por CMB y tomar los 10 mejores
    const mejoresPorIngenio = Object.keys(gruposPorIngenio).map((ingenio) => {
      const registrosOrdenados = gruposPorIngenio[ingenio].sort(
        (a, b) => b.MoliendaCanaBruta - a.MoliendaCanaBruta
      );
      return {
        IngenioNombre: ingenio,
        mejoresRegistros: registrosOrdenados.slice(0, 10),
      };
    });
    setDatosMejores(mejoresPorIngenio);
  };
  useEffect(() => {
    if (datosMejores) {
      dataPorIngenio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datosMejores]);

  const dataPorIngenio = () => {
    datosMejores.forEach((d) => {
      if(d.IngenioNombre === "Aguilares") {
        setDatosAguilares(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "BellaVista") {
        setDatosBellaVista(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Concepción") {
        setDatosConcepcion(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Cruz Alta") {
        setDatosCruzAlta(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Famaillá") {
        setDatosFamailla(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "La Corona") {
        setDatosCorona(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "La Florida") {
        setDatosFlorida(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "La Providencia") {
        setDatosProvidencia(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "La Trinidad") {
        setDatosTrinidad(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Leales") {
        setDatosLeales(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Marapa") {
        setDatosMarapa(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Ñuñorco") {
        setDatosNunorco(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Santa Bárbara") {
        setDatosBarbara(d.mejoresRegistros)
      }
      if(d.IngenioNombre === "Santa Rosa") {
        setDatosRosa(d.mejoresRegistros)
      }
    })

  }
  
  const getItems = () => [
    {
      key: "1",
      label: "Aguilares",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosAguilares}
        />
      ),
    },
    {
      key: "2",
      label: "Bella Vista",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosBellaVista}
        />
      ),
    },
    {
      key: "3",
      label: "Concepción",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosConcepcion}
        />
      ),
    },
    {
      key: "4",
      label: "Cruz Alta",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosCruzAlta}
        />
      ),
    },
    {
      key: "5",
      label: "Famaillá",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosFamailla}
        />
      ),
    },
    {
      key: "6",
      label: "La Corona",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosCorona}
        />
      ),
    },
    {
      key: "7",
      label: "La Florida",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosFlorida}
        />
      ),
    },
    {
      key: "8",
      label: "La Providencia",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosProvidencia}
        />
      ),
    },
    {
      key: "9",
      label: "La Trinidad",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosTrinidad}
        />
      ),
    },
    {
      key: "10",
      label: "Leales",
      children: (
        <ListadoDatos columns={columns} scroll={500} data={datosLeales} />
      ),
    },
    {
      key: "11",
      label: "Marapa",
      children: (
        <ListadoDatos columns={columns} scroll={500} data={datosMarapa} />
      ),
    },
    {
      key: "12",
      label: "Santa Barbara",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosBarbara}
        />
      ),
    },
    {
      key: "13",
      label: "Santa Rosa",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosRosa}
        />
      ),
    },
    {
      key: "14",
      label: "Ñuñorco",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={500}
          data={datosNunorco}
        />
      ),
    },
  ]
  return (
    <Container fluid className="p-3">
      <p className="fw-bolder">Mejores registros históricos por ingenio</p>
      <span className="text-danger fw-bolder">*</span>
      <span className="text-legend">
        Informe de los mejores 10 registros de cada ingenio durante el periodo
        elegido.
      </span>
      {datosMejores && datosMejores.length > 0 && (
        <Row>
          <ListHeader title="Mejores registros por ingenio" />
          <Collapse
            bordered={false}
            size="small"
            expandIconPosition="end"
            defaultActiveKey={["0"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              width: "100%",
              fontSize: 17,
              fontWeight: 600,
            }}
            items={getItems(panelStyle)}
            />
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

export default DatosMejoresRegistros;
