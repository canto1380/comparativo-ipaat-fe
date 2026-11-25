import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card, ConfigProvider, Empty, Spin, Table, Tag } from "antd";
import moment from "moment";
import TitlePage from "../../components/TitlePages";
import { User } from "../../context/UserProvider";
import { getDataToken } from "../../helpers/helpers";
import { getHomeDashboard } from "../../utils/queryAPI/home";
import { tienePermiso } from "../../utils/permisos";
import "../../components/ParteDiario/parteDiario.css";
import "./home.css";

const formato = (valor, digitos = 0) => {
  if (valor === null || valor === undefined || Number.isNaN(Number(valor))) return "—";
  return Number(valor).toLocaleString("es-AR", {
    maximumFractionDigits: digitos,
    minimumFractionDigits: digitos,
  });
};

const TarjetaHome = ({ titulo, valor, unidad }) => (
  <Col className="align-items-center col-valores p-2 mx-2 mb-2">
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

const HomeContainer = ({ tokenAuth }) => {
  const { dataUser } = useContext(User);
  const sesion = getDataToken() || {};
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tokenAuth) return;
    const cargar = async () => {
      setLoading(true);
      const res = await getHomeDashboard(tokenAuth);
      setData(res || null);
      setLoading(false);
    };
    cargar();
  }, [tokenAuth]);

  const usuario = data?.usuario || {};
  const stats = data?.estadisticas || {};
  const puedePartes = tienePermiso(dataUser, "parte_diario.ver");
  const puedeDdjj = tienePermiso(dataUser, "ddjj.ver");

  const etiquetaDias = (label, dias, finalizada) => {
    if (!dias && !finalizada) return null;
    if (finalizada) return `${label}: ${Math.trunc(Number(dias) || 0)} (finalizada)`;
    return `${label}: ${Math.trunc(Number(dias) || 0)}`;
  };

  const encabezados = [
    stats.hasta ? `Datos hasta: ${moment(stats.hasta).format("DD-MM-YYYY")}` : null,
    etiquetaDias("Días de zafra", stats.diasZafra, stats.zafraFinalizada),
    etiquetaDias("Días de destilería", stats.diasDestileria, stats.destileriaFinalizada),
    etiquetaDias("Días de deshidratación", stats.diasDeshidratacion, stats.deshidratacionFinalizada),
    stats.rtoCmb != null ? `Rto CMB(%): ${formato(stats.rtoCmb, 2)}` : null,
  ].filter(Boolean);

  const tarjetas = [
    { titulo: "Caña molida bruta", valor: formato(stats.canaMolidaBruta), unidad: "tn" },
    { titulo: "Azúcar Total", valor: formato(stats.azucarTotal), unidad: "tn" },
    { titulo: "Azúcar Crudo", valor: formato(stats.azucarCrudo), unidad: "tn" },
    { titulo: "Azúcar Blanco", valor: formato(stats.azucarBlanco), unidad: "tn" },
    { titulo: "Azúcar Refinado", valor: formato(stats.azucarRefinado), unidad: "tn" },
    { titulo: "Azúcar Orgánico", valor: formato(stats.azucarOrganico), unidad: "tn" },
    { titulo: "Alcohol hidratado", valor: formato(stats.alcoholHidratado), unidad: "L" },
    { titulo: "Alcohol Anhidro", valor: formato(stats.alcoholAnhidro), unidad: "L" },
  ];

  const partesCols = [
    { title: "Ingenio", dataIndex: "ingenioNombre", key: "ingenioNombre" },
    { title: "Detalle", dataIndex: "detalle", key: "detalle" },
    {
      title: "Última fecha",
      dataIndex: "ultimaFecha",
      key: "ultimaFecha",
      render: (f) => (f ? moment(f).format("DD-MM-YYYY") : "—"),
    },
  ];

  const ddjjCols = [
    { title: "Ingenio", dataIndex: "ingenioNombre", key: "ingenioNombre" },
    { title: "Estado", dataIndex: "estado", key: "estado", render: (e) => <Tag>{e}</Tag> },
    {
      title: "Período",
      key: "periodo",
      render: (_, row) =>
        row.fechaDesde && row.fechaHasta
          ? `${moment(row.fechaDesde).format("DD-MM-YYYY")} → ${moment(row.fechaHasta).format("DD-MM-YYYY")}`
          : "—",
    },
  ];

  const alcanceLabel =
    data?.alcance === "ingenio"
      ? usuario.nombre_ingenio || "Su ingenio"
      : "Totales Tucumán + Norte";

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#011a4b" } }}>
      <Container fluid className="home-page">
        <TitlePage titlePage="Inicio" />
        <hr className="menu-divider" />

        <Spin spinning={loading}>
          <section className="home-resumen">
            <div>
              <h2 className="home-saludo mb-1">
                Hola, {[usuario.nombre || sesion.nombre, usuario.apellido || sesion.apellido]
                  .filter(Boolean)
                  .join(" ") || usuario.usuario || sesion.usuario || "usuario"}
              </h2>
              <p className="home-meta mb-0">
                {usuario.usuario ? `@${usuario.usuario}` : null}
                {data?.anioZafra ? ` · Zafra ${data.anioZafra}` : null}
              </p>
              <div className="home-tags mt-2">
                <Tag color="blue">{usuario.nombre_rol || sesion.nombre_rol || "Sin rol"}</Tag>
                <Tag>{alcanceLabel}</Tag>
                {usuario.nombre_ingenio ? (
                  <Tag color="geekblue">Ingenio: {usuario.nombre_ingenio}</Tag>
                ) : (
                  <Tag color="geekblue">Ámbito: general / administrador</Tag>
                )}
                {stats.zafraFinalizada ? <Tag color="green">Zafra finalizada</Tag> : null}
                {stats.destileriaFinalizada ? <Tag color="green">Destilería finalizada</Tag> : null}
                {stats.deshidratacionFinalizada ? <Tag color="green">Deshidratación finalizada</Tag> : null}
              </div>
            </div>
          </section>

          <section className="home-section">
            <h3 className="home-section-title">Estadísticas principales</h3>
            <Row className="justify-content-start align-items-center mb-2">
              {encabezados.map((texto) => (
                <Col key={texto} xs={12} md={6} lg={4} className="mb-1 encabezados-panel fw-bolder">
                  {texto}
                </Col>
              ))}
            </Row>
            <Row className="justify-content-start align-items-center">
              {tarjetas.map((t) => (
                <TarjetaHome key={t.titulo} titulo={t.titulo} valor={t.valor} unidad={t.unidad} />
              ))}
            </Row>
          </section>

          <Row className="g-3 home-section">
            {puedePartes && (
              <Col xs={12} lg={6}>
                <Card title="Documentación faltante — Partes diarios" className="home-panel-card">
                  <Table
                    size="small"
                    rowKey={(r) => `${r.ingenioId}-${r.ultimaFecha}`}
                    columns={partesCols}
                    dataSource={data?.documentacionFaltante?.partesDiarios || []}
                    pagination={{ pageSize: 5, hideOnSinglePage: true }}
                    locale={{ emptyText: <Empty description="Sin pendientes" /> }}
                  />
                </Card>
              </Col>
            )}
            {puedeDdjj && (
              <Col xs={12} lg={6}>
                <Card title="Documentación faltante — DDJJ" className="home-panel-card">
                  <Table
                    size="small"
                    rowKey={(r) => `falt-${r.id}`}
                    columns={ddjjCols}
                    dataSource={data?.documentacionFaltante?.ddjj || []}
                    pagination={{ pageSize: 5, hideOnSinglePage: true }}
                    locale={{ emptyText: <Empty description="Sin pendientes" /> }}
                  />
                </Card>
              </Col>
            )}
          </Row>

          {puedeDdjj && (
            <section className="home-section">
              <Card title="Documentación pendiente de procesamiento" className="home-panel-card">
                <p className="home-hint">
                  DDJJ presentadas que aún no fueron aprobadas o procesadas por el IPAAT.
                </p>
                <Table
                  size="small"
                  rowKey={(r) => `pend-${r.id}`}
                  columns={ddjjCols}
                  dataSource={data?.documentacionPendiente || []}
                  pagination={{ pageSize: 8, hideOnSinglePage: true }}
                  locale={{ emptyText: <Empty description="No hay DDJJ pendientes de aprobación" /> }}
                />
              </Card>
            </section>
          )}
        </Spin>
      </Container>
    </ConfigProvider>
  );
};

export default HomeContainer;
