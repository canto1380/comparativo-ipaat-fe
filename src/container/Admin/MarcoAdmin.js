import { Container } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import Spinn from "../../components/Spinner";
import Title from "../../components/Title";
import { User } from "../../context/UserProvider";
import { SidebarContext } from "../../context/SidebarProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";

const MarcoAdmin = ({ title, children }) => {
  const [loading, setLoading] = useState(false);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const { dataUser } = useContext(User);
  const { sidebarStatus } = useContext(SidebarContext);

  useEffect(() => {
    const token = getToken();
    const tokenLS = getTokenLS();
    if (token === tokenLS) setTokenAuth(token);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tokenAuth === null && dataUser) {
      setTokenAuth(typeof dataUser === "string" ? dataUser : getTokenLS());
      setModalUnauthorized(false);
    }
    if (tokenAuth === null && !dataUser) setModalUnauthorized(true);
  }, [tokenAuth, dataUser]);

  useEffect(() => {
    inactivityTime(setModalUnauthorized);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center text-center divCenter">
          <Spinn />
        </div>
      ) : (
        <>
          <Title title={title} />
          <Container fluid className="containerAdmin p-0 d-flex justify-content-end">
            <Sidebar inactivo={sidebarStatus} tokenAuth={tokenAuth} dataUser={dataUser} />
            <div className={sidebarStatus ? "parte2Inactivo" : "parte2"}>
              {children(tokenAuth)}
            </div>
            {modalUnauthorized && <Unauthorized />}
          </Container>
        </>
      )}
    </div>
  );
};

export default MarcoAdmin;
