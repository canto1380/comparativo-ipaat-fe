import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import { useEffect, useState } from "react";
import Spinn from "../../components/Spinner";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import { getDataComparativa } from "../../utils/queryAPI/dataComparativa";
import { api } from "../../utils/api";
import { Space, Button, Spin } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import Unauthorized from "../../components/Unauthorized";

const DataComparativaContainer = ({ tokenAuth, routeAPI }) => {
  const [dataComparativa, setDataComparativa] = useState(null);
  const [dataZafra, setDataZafra] = useState(null);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [band, setBand] = useState(false);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);

  useEffect(() => {
    dataComparativaGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dataZafra, band]);

  const dataComparativaGet = async () => {
    const params = { search, anio: dataZafra };
    const data = await getDataComparativa(params);
    setDataComparativa(data);
  };

  const handleDelete = async (deleted, id_anio_zafra, id_region_ingenios) => {
    try {
      if (deleted) {
        const res = await api(
          "PATCH",
          `${routeAPI}/restore/${id_anio_zafra}/${id_region_ingenios}`,
          null,
          tokenAuth
        );
        if (res.status === 200) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setBand(!band);
          }, 2500);
        }
        if (res.response.status === 401) {
          setModalUnauthorized(true);
        }
      } else {
        const res = await api(
          "PATCH",
          `${routeAPI}/delete/${id_anio_zafra}/${id_region_ingenios}`,
          null,
          tokenAuth
        );
        if (res.status === 200) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setBand(!band);
          }, 2500);
        }
        if (res.response.status === 401) {
          setModalUnauthorized(true);
        }
      }
    } catch (error) { }
  };

  const columnsData = [
    {
      key: "anio",
      title: "Año",
      dataIndex: "anio_zafra",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.anio_zafra > b.anio_zafra,
    },
    {
      key: "region",
      title: "Región",
      dataIndex: "nombre_region",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.nombre_region > b.nombre_region,
    },
    {
      key: "CMBPorDDJJIPAAT",
      title: "CMB por DDJJ",
      dataIndex: "CMB_DDJJ",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.CMB_DDJJ > b.CMB_DDJJ,
    },
    {
      key: "estimacionEEAOC",
      title: "Estimación EEAOC",
      dataIndex: "estimacion_EEAOC",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.estimacion_EEAOC > b.estimacion_EEAOC,
    },
    {
      key: "actions",
      title: "Acciones",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              className="bg-secondary btn-edit"
              key={record?._id}
              href={`/admin/datos-comparativos/editar/${record?.id_anio_zafra}/${record?.id_region_ingenios}`}
              style={{ color: "white" }}
              icon={<EditOutlined className="" />}
              title="Editar"
            ></Button>
            <Button
              key={record?._id}
              className={`${record?.deleted ? "bg-success" : "bg-danger"}`}
              onClick={() => handleDelete(record?.deleted, record?.id_anio_zafra, record?.id_region_ingenios)}
              type="primary"
              icon={
                record?.deleted ? (
                  <RollbackOutlined className="c-green" />
                ) : (
                  <DeleteOutlined className="c-red" />
                )
              }
              title={record?.deleted ? "Restaurar" : "Eliminar"}
            ></Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Container fluid>
      <TitlePage titlePage="Datos comparativos" />
      <hr className="mx-3 mt-1" />
      {dataComparativa === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            bandTitlePrincipal={true} // HABILITA TITULO PRINCIPAL
            setSearch={setSearch}
            setDataZafra={setDataZafra}
            bandFilterZafraAnio={true}
            bandFilterSearch={true}
            placeHolderSearch="Valor"
            zafraOpcionTodos={true}
          />
          <ListHeader
            title={"Datos comparativos"}
            btnLink={"/admin/datos-comparativos/nuevo"}
          />
          <div className="pb-1 pt-3 px-4">
            <ListadoDatos
              columns={columnsData}
              scroll={30}
              data={dataComparativa}
            />
          </div>
        </>
      )}
      {loading && (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
      {modalUnauthorized && (
        <div>
          <Unauthorized />
        </div>
      )}
    </Container>
  );
};
export default DataComparativaContainer;
