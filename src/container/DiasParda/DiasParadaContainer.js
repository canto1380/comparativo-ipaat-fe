import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import { useState, useEffect, useContext } from "react";
import { getDiasParadas } from "../../utils/queryAPI/diaParadas";
import { api } from "../../utils/api";
import { Button, message, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Spinn from "../../components/Spinner";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import Unauthorized from "../../components/Unauthorized";
import moment from "moment";
import { apiExportExcel } from "../../utils/apiExportExcel";
import { User } from "../../context/UserProvider";
import { getDataToken } from "../../helpers/helpers";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import { toast } from "react-toastify";
import BtnDescargar from "../../components/Botones/BtnDescargar";

const DiasParadaContainer = ({ tokenAuth, routeAPI }) => {
  const [diasParadas, setDiasParadas] = useState(null);
  const [anioZafra, setAnioZafra] = useState(null);
  const [ingenio, setIngenio] = useState(null);
  const [search, setSearch] = useState(null);
  const [region, setRegion] = useState(null)
  const [loading, setLoading] = useState(true);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loadingDownloadReport, setLoadingDownloadReport] = useState(false);
  const [dataUserRegister, setDataUserRegister] = useState(undefined);
  const [ingeniosData, setIngeniosData] = useState(undefined);
  const [fechaInicioIngenios, setFechaInicioIngenios] = useState(undefined);
  const [dataMes, setDataMes] = useState(null);
  const [dataQuincena, setDataQuincena] = useState(null);

  const { dataUser } = useContext(User);

  useEffect(() => {
    getDataUserRegister();
  }, [dataUser]);
  const getDataUserRegister = () => {
    try {
      const data = getDataToken();
      setDataUserRegister(data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataDiasParadas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, anioZafra, ingenio, dataMes, dataQuincena, region]);

  const dataDiasParadas = async () => {
    try {
      const params = {
        search,
        anio: anioZafra,
        ingenio,
        dataMes,
        dataQuincena,
        region
      };
      const Data = await getDiasParadas(params);
      setDiasParadas(Data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  };

  const dataIngenios = ingenio ? ingeniosData?.filter((d) => d.nombre_ingenio === ingenio) : ingeniosData
  /** LISTADO INGENIOS TUCUMAN**/
  useEffect(() => {
    getIngeniosData();
  }, []);
  
  const getIngeniosData = async () => {
    const params = { region };
    const data = await getIngenios(params);
    const res = data.filter((d) => d.nombre_ingenio !== "San Juan" && d.nombre_ingenio !== 'Destilería Bella Vista');
    setIngeniosData(res);
  };

  /** INICIO Y FIN PERIODOS **/
  useEffect(() => {
    if (anioZafra) {
      getDataPeriodos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anioZafra]);
  const getDataPeriodos = async () => {
    const params = {
      limit: 10000000,
      anio: anioZafra,
      deleted: 0,
    };
    const data = await getPeriodoZafra(params);
    const res = data.filter((d) => d.nombre_ingenio !== "San Juan");
    setFechaInicioIngenios(res);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const res = await api(
        "DELETE",
        `${routeAPI}/delete/${id}`,
        null,
        tokenAuth
      );
      if (res.status === 200) {
        toast.success("Registro eliminado.");
      } else if (res.response.status === 401) {
        setModalUnauthorized(true);
      } else {
        message.error("no se pudo borrar. Recargue e intente nuevamente", 5);
      }
    } catch (error) {
      message.error("Error en el servidor. Recargue e intente nuevamente", 5);
    } finally {
      setLoading(false);
    }
  };

  const columnsData = [
    {
      key: "nombre_ingenio",
      title: "Ingenio",
      dataIndex: "nombre_ingenio",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.nombre_ingenio - b.nombre_ingenio,
    },
    {
      key: "dia",
      title: "Fecha",
      dataIndex: "dia",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.dia) - new Date(b.dia),
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
    },
    {
      key: "motivo",
      title: "Motivo",
      dataIndex: "motivo",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.motivo - b.motivo,
    },
    {
      key: "horas_paradas",
      title: "Parada (hs)",
      dataIndex: "horas_paradas",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.horas_paradas - b.horas_paradas,
    },
    {
      key: "porcentaje_parada",
      title: "Parada (%)",
      dataIndex: "porcentaje_parada",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.porcentaje_parada - b.porcentaje_parada,
    },
    {
      key: "actions",
      tittle: "Acciones",
      render: (record) => {
        return (
          <Space size="middle">
            <Button
              className="bg-secondary btn-edit"
              href={`/admin/dias-parada/editar/${record?.id}`}
              style={{ color: "white" }}
              icon={<EditOutlined className="" />}
              title="Editar"
            ></Button>
            <Button
              key={record?.id}
              className={"bg-danger"}
              onClick={() => handleDelete(record?.id)}
              type="primary"
              icon={<DeleteOutlined className="c-red" />}
              title={"Eliminar"}
            ></Button>
          </Space>
        );
      },
    },
  ];
  const exportarDiasParadas = async () => {
    try {
      setLoadingDownloadReport(true);
      const date = new Date();
      const dateFormat = moment(date).format("DD-MM-YYYY");
      const dataSend = [
        {
          diasParadas: diasParadas,
          usuario: dataUserRegister,
          ingenios: ingeniosData,
          fechaInicioFin: fechaInicioIngenios,
          anioZafra: anioZafra,
          ingenio: dataIngenios,
          region,
          dataMes,
          dataQuincena
        },
      ];
      const res = await apiExportExcel("POST", "diaParada/descargar", dataSend);
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `Dias paradas ${dateFormat} - Zafra ${anioZafra}`; // Nombre del archivo
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
        setAnioZafra("");
        setDiasParadas(null);
        message.success("Descarga realizada correctamente", 5);
        window.location.reload();
      } else {
        toast.error(`Error al descargar el archivo: ${res?.data?.response?.data?.error || 'Error desconocido'}`)
      }
    } catch (error) {
      toast.error(`Error al descargar el archivo: ${error?.data?.response?.data?.error || 'Error desconocido'}`)
    } finally {
      setLoadingDownloadReport(false);
    }
  };
  return (
    <Container fluid>
      <TitlePage titlePage={"Días Parada"} />
      <hr className="mx-3 mt-1" />
      {diasParadas === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            bandTitlePrincipal={true} // HABILITA TITULO PRINCIPAL
            setSearch={setSearch}
            dataZafra={anioZafra}
            setDataZafra={setAnioZafra}
            setRegion={setRegion}
            setIngenio={setIngenio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            bandFilterZafraAnio={true}
            bandFilterSearch={true}
            bandFilterIngenio={true}
            bandFilterRegion={true}
            bandFilterMes={true}
            bandFilterQuincena={true}
            placeHolderSearch="Valor"
            diasParadas={diasParadas}
            zafraOpcionTodos={true}
          />

          <BtnDescargar
            enabled={!!anioZafra && !!diasParadas}
            loading={loadingDownloadReport}
            processing={!diasParadas}
            onClick={exportarDiasParadas}
            text="Descargar informe"
          />

          <ListHeader
            title={"Paradas de los ingenios"}
            btnLink={"/admin/dias-parada/nuevo"}
          />
          <div className="pb-1 pt-3 px-4">
            <ListadoDatos
              columns={columnsData}
              scroll={100}
              data={diasParadas}
            />
          </div>
        </>
      )}
      {modalUnauthorized && (
        <div>
          <Unauthorized />
        </div>
      )}
    </Container>
  );
};
export default DiasParadaContainer;
