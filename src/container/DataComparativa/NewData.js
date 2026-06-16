import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Spinn from "../../components/Spinner";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import DataComparativaHistorica from "../../components/DataComparativa";
import { getDataComparativa } from "../../utils/queryAPI/dataComparativa";
import { getAnios } from "../../utils/queryAPI/anios";
import { getRegion } from "../../utils/queryAPI/region";
import { SidebarContext } from "../../context/SidebarProvider";
import { api } from "../../utils/api";

const NewData = () => {
  const [dataComparativaData, setDataComparativaData] = useState(undefined);
  const [dataRegisterEdit, setDataRegisterEdit] = useState(undefined);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aniosData, setAniosData] = useState(undefined);
  const [regionData, setRegionData] = useState(undefined)


  const { anio, region } = useParams();
  const { dataUser } = useContext(User);
  const { sidebarStatus } = useContext(SidebarContext)

  useEffect(() => {
  }, [sidebarStatus])

  useEffect(() => {
    const token = getToken();
    const tokenLS = getTokenLS();
    if (token === tokenLS) {
      setTokenAuth(token);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tokenAuth === null && dataUser) {
      setTokenAuth(dataUser);
      setModalUnauthorized(false);
    }
    if (tokenAuth === null && !dataUser) {
      setModalUnauthorized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  useEffect(() => {
    inactivityTime(setModalUnauthorized);
  }, []);

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anio, region]);
  const getData = async () => {
    const data = await getDataComparativa();
    setDataComparativaData(data);
    if (anio && region) {
      const dataEdit = await api("GET", `dataComparativa/${anio}/${region}`)
      setDataRegisterEdit(dataEdit.data[0]);
    }
  };

  useEffect(() => {
    dataAnios();
    dataRegion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataAnios = async () => {
    const data = await getAnios();
    setAniosData(data);
  };
  const dataRegion = async () => {
    const data = await getRegion();
    setRegionData(data);
  };

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center text-center divCenter">
          <Spinn />
        </div>
      ) : (
        <>
          <Container
            fluid
            className={`containerAdmin p-0 d-flex justify-content-end`}
          >
            <Sidebar
              inactivo={sidebarStatus}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${sidebarStatus ? `parte2Inactivo` : `parte2`} `}>
              <DataComparativaHistorica
                dataRegisterEdit={dataRegisterEdit}
                dataComparativaData={dataComparativaData}
                aniosData={aniosData}
                regionData={regionData}
              />
            </div>
            {modalUnauthorized && (
              <div className="">
                <Unauthorized />
              </div>
            )}
          </Container>
        </>
      )}
    </div>
  );
};
export default NewData;
