import { Col, Container, Row } from "react-bootstrap";
import { Tag } from "antd";
import TitlePage from "../../components/TitlePages";
import Spinn from "../../components/Spinner";
import FormAddEditUsuarios from "../../components/Usuarios/FormAddEdit";
import FormPass from "../../components/Usuarios/FormPassword";
import "../../components/Perfil/perfil.css";

const iniciales = (user) => {
  const n = String(user?.nombre || "").trim().charAt(0).toUpperCase();
  const a = String(user?.apellido || "").trim().charAt(0).toUpperCase();
  return `${n}${a}` || "?";
};

const PerfilContainer = ({ tokenAuth, userData }) => {
  const cargando = userData == null;

  return (
    <Container fluid className="perfil-page">
      <TitlePage titlePage="Mi cuenta" />
      <hr className="menu-divider" />
      {cargando ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <section className="perfil-resumen">
            <div className="perfil-avatar">{iniciales(userData)}</div>
            <div className="perfil-resumen-info">
              <h2 className="perfil-resumen-nombre">
                {[userData?.nombre, userData?.apellido].filter(Boolean).join(" ") || "Usuario"}
              </h2>
              <p className="perfil-resumen-meta">
                {userData?.usuario ? `@${userData.usuario}` : null}
                {userData?.email ? ` · ${userData.email}` : null}
              </p>
              <div className="perfil-resumen-tags">
                {userData?.nombre_rol ? <Tag color="blue">{userData.nombre_rol}</Tag> : null}
                {userData?.nombre_ingenio ? (
                  <Tag>{userData.nombre_ingenio}</Tag>
                ) : (
                  <Tag>Todos los ingenios</Tag>
                )}
              </div>
            </div>
          </section>

          <Row className="perfil-grid g-3">
            <Col xs={12} lg={6}>
              <FormAddEditUsuarios
                tokenAuth={tokenAuth}
                routerAPI="usuarios"
                dataRegisterEdit={userData}
              />
            </Col>
            <Col xs={12} lg={6}>
              <FormPass
                tokenAuth={tokenAuth}
                routerAPI="usuarios"
                dataRegisterEdit={userData}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default PerfilContainer;
