import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import ParteDiario from "../../components/ParteDiario/ParteDiario";
import Filtros from "../../components/Filtros";
import { getDataPartesDiariosBE } from "../../utils/queryAPI/partesDiariosQuery";
import Spinn from "../../components/Spinner";
import MsgError from "../../components/Messages/MsgError";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import MsgErrorServerJSON from "../../components/Messages/MsgErrorServerJSON";
import { getParteDiarios } from "../../utils/queryAPI/parteDiarios";
import "./ParteDiarioContainer.css";
import { getActualizarPartesDiarios } from "../../utils/queryAPI/actualizarPartesDiarios";
import { getActualizarPartesDiariosNorte } from "../../utils/queryAPI/actualizarPartesDiarios";
import { getLastUpdated } from "../../utils/queryAPI/lastUpdated";
import { toast } from "react-toastify";
import { obtenerPeriodos } from "./hooks/ObtenerPeriodos";
import { filtrarRegistrosPorPeriodos } from "./hooks/RegistrosPorPeriodo";
import { getParteDiariosNorte } from "../../utils/queryAPI/ParteDiariosNorte";
import { procesarTodosLosIngenios } from "../../utils/hooks/procesarIngeniosHooks";

const ParteDiarioContainer = () => {
  const [errorServer, setErrorServer] = useState(false);
  const [msgErrorServer, setMsgErrorServer] = useState("");
  const [dataEnd, setDataEnd] = useState(null);
  const [dataZafra, setDataZafra] = useState(null);
  const [dataAnio, setDataAnio] = useState(null);
  const [dataMes, setDataMes] = useState(null);
  const [dataQuincena, setDataQuincena] = useState(null);
  const [dataParteDiariosHistoricos, setDataParteDiariosHistoricos] = useState(null);
  const [dataParteDiariosHistoricosNorte, setDataParteDiariosHistoricosNorte] = useState(null);

  const [dataImport, setDataImport] = useState(null);
  const [dataImportComparativa, setDataImportComparativa] = useState(null);
  const [dataImportDestileria, setDataImportDestileria] = useState(null);
  const [dataImportDestileriaComparativa, setDataImportDestileriaComparativa] =
    useState(null);
  const [dataImportAnhidro, setDataImportAnhidro] = useState(null);
  const [dataImportAnhidroComparativa, setDataImportAnhidroComparativa] =
    useState(null);
  const [dataImportNorte, setDataImportNorte] = useState(null);
  const [dataImportComparativaNorte, setDataImportComparativaNorte] = useState(null);
  const [dataImportDestileriaNorte, setDataImportDestileriaNorte] = useState(null);
  const [dataImportDestileriaComparativaNorte, setDataImportDestileriaComparativaNorte] =
    useState(null);
  const [dataImportAnhidroNorte, setDataImportAnhidroNorte] = useState(null);
  const [dataImportAnhidroComparativaNorte, setDataImportAnhidroComparativaNorte] =
    useState(null);

  const [banderaDataNull, setBanderaDataNull] = useState(false);
  const [dateInicioIngenios, setDateInicioIngenios] = useState(null);
  const [dateFinIngenios, setDateFinIngenios] = useState(null);
  const [dataIngenios, setDataIngenios] = useState(null);
  const [zafraParteDiario, setZafraParteDiario] = useState(null);
  const [dateInicioIngeniosItemCollapse, setDateInicioIngeniosItemCollapse] = useState(null);

  const [loading, setLoading] = useState(false);
  const [dataParteDiarios, setDataParteDiarios] = useState([]);
  const [dataParteDiariosNorte, setDataParteDiariosNorte] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");

  const [periodosTucumanActual, setPeriodosTucumanActual] = useState(null)
  const [periodosTucumanComparativo, setPeriodosTucumanComparativo] = useState(null)
  const [periodosNorteActual, setPeriodosNorteActual] = useState(null)
  const [periodosNorteComparativo, setPeriodosNorteComparativo] = useState(null)

  useEffect(() => {
    if (dataZafra !== null && dateInicioIngeniosItemCollapse !== null) {
      getDataTucuman();
      getDataNorte()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra, dateInicioIngeniosItemCollapse, dataParteDiarios, dataParteDiariosNorte]);

  useEffect(() => {
    getDataParteDiarios();
    getDataParteDiariosNorte();
  }, []);
  const getDataParteDiarios = async () => {
    const data = await getParteDiarios();
    setDataParteDiarios(data);
  };
  const getDataParteDiariosNorte = async () => {
    const data = await getParteDiariosNorte();
    setDataParteDiariosNorte(data);
  };

  useEffect(() => {
    dataLastUpdated();
  }, [loading]);

  const dataLastUpdated = async () => {
    const data = await getLastUpdated();
    const fecha = new Date(data[0]?.fechaParte).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setLastUpdated(fecha);
  };


  const getDataNorte = async () => {
    const periodoActualNorte = obtenerPeriodos(dateInicioIngeniosItemCollapse, 2)
    const { dataZafra1, dataDestileria1, dataAnhidro1 } = filtrarRegistrosPorPeriodos(periodoActualNorte, dataParteDiariosNorte, new Date())
    const resultado = procesarTodosLosIngenios(
      dateInicioIngeniosItemCollapse,
      dataZafra1,
      dataDestileria1,
      dataAnhidro1,
      2
    );
    setDataParteDiariosHistoricosNorte(resultado)
  }

  const getDataTucuman = async () => {
    const periodoActual = obtenerPeriodos(dateInicioIngeniosItemCollapse, 1);
    const { dataZafra1, dataDestileria1, dataAnhidro1 } = filtrarRegistrosPorPeriodos(periodoActual, dataParteDiarios, new Date());
    const resultado = procesarTodosLosIngenios(
      dateInicioIngeniosItemCollapse,
      dataZafra1,
      dataDestileria1,
      dataAnhidro1,
      1
    );
    setDataParteDiariosHistoricos(resultado)
  };

  /************************** DATOS OBTENIDOS PARA SER USADOS EN EL REPORTE PARTE DIARIO COMPARATIVO *****************************/
  useEffect(() => {
    if (dataEnd && dataParteDiarios && dataParteDiariosNorte && dateInicioIngenios && dateFinIngenios) {

      /** TUCUMAN **/
      const periodosActual = obtenerPeriodos(dateInicioIngenios, 1);
      setPeriodosTucumanActual(periodosActual)
      const periodoComparativo = obtenerPeriodos(dateFinIngenios, 1);
      setPeriodosTucumanComparativo(periodoComparativo)

      const { dataZafra1, dataDestileria1, dataAnhidro1 } =
        filtrarRegistrosPorPeriodos(periodosActual, dataParteDiarios, dataEnd);
      const {
        dataZafra1: dataZafraComparativa,
        dataDestileria1: dataDestileriaComparativa,
        dataAnhidro1: dataZafraAnhidroComparativa,
      } = filtrarRegistrosPorPeriodos(
        periodoComparativo,
        dataParteDiarios,
        dataEnd
      );

      setDataImport(dataZafra1);
      setDataImportComparativa(dataZafraComparativa);
      setDataImportDestileria(dataDestileria1);
      setDataImportDestileriaComparativa(dataDestileriaComparativa);
      setDataImportAnhidro(dataAnhidro1);
      setDataImportAnhidroComparativa(dataZafraAnhidroComparativa);


      /**NORTE **/
      const periodosActualNorte = obtenerPeriodos(dateInicioIngenios, 2);
      setPeriodosNorteActual(periodosActualNorte)
      const periodoComparativoNorte = obtenerPeriodos(dateFinIngenios, 2);
      setPeriodosNorteComparativo(periodoComparativoNorte)

      const { dataZafra1: dataZafraNorte, dataDestileria1: dataDestileriaNorte, dataAnhidro1: dataAnhidroNorte } =
        filtrarRegistrosPorPeriodos(periodosActualNorte, dataParteDiariosNorte, dataEnd);
      const {
        dataZafra1: dataZafraComparativaNorte,
        dataDestileria1: dataDestileriaComparativaNorte,
        dataAnhidro1: dataZafraAnhidroComparativaNorte,
      } = filtrarRegistrosPorPeriodos(
        periodoComparativoNorte,
        dataParteDiariosNorte,
        dataEnd
      );

      setDataImportNorte(dataZafraNorte);
      setDataImportComparativaNorte(dataZafraComparativaNorte);
      setDataImportDestileriaNorte(dataDestileriaNorte);
      setDataImportDestileriaComparativaNorte(dataDestileriaComparativaNorte);
      setDataImportAnhidroNorte(dataAnhidroNorte);
      setDataImportAnhidroComparativaNorte(dataZafraAnhidroComparativaNorte);

    }
  }, [dataEnd, dataParteDiarios, dateInicioIngenios, dateFinIngenios]);
  /**************************************************************************************************************************/

  useEffect(() => {
    const dataNow = new Date();
    if (dataZafra === null) {
      setDataZafra(dataNow.getFullYear());
    }

    if (dataAnio === null) {
      setDataAnio(dataNow.getFullYear());
    }
    if (dataMes === null) {
      setDataMes(dataNow.getMonth() + 1);
    }
    if (dataQuincena === null) {
      if (dataNow.getDate() <= 15) {
        setDataQuincena(1);
      } else {
        setDataQuincena(2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*** LISTADO INGENIOS ***/
  useEffect(() => {
    getDataIngenios();
  }, []);
  const getDataIngenios = async () => {
    const data = await getIngenios();
    setDataIngenios(data);
  };
  /******/

  /*** PERIODOS INGENIOS - ACTUAL Y COMPARATIVO ***/
  useEffect(() => {
    if (dataEnd) {
      getDataPeriodos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEnd, zafraParteDiario]);
  const getDataPeriodos = async () => {
    const params = {
      limit: 10000000,
      anio: zafraParteDiario,
      deleted: 0,
    };
    const data = await getPeriodoZafra(params);
    setDateInicioIngenios(data);
    const params1 = { limit: 10000000, anio: zafraParteDiario - 1 };
    const data1 = await getPeriodoZafra(params1);
    setDateFinIngenios(data1);
  };
  /******/

  /*** PERIODOS INGENIOS - ITEM COLLAPSE ***/
  useEffect(() => {
    if (dataZafra) {
      getDataPeriodosItemCollapse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra]);
  const getDataPeriodosItemCollapse = async () => {
    const params = {
      limit: 10000000,
      anio: dataZafra,
      deleted: 0,
    };
    const data = await getPeriodoZafra(params);
    setDateInicioIngeniosItemCollapse(data);

  };
  /******/

  const actualizarPartesDiarios = async () => {
    try {
      setLoading(true);

      // Primero actualizar partes diarios de Tucumán
      const data = await getActualizarPartesDiarios();

      if (data.status === 200) {
        toast.success(data?.data?.message);
        await getDataParteDiarios()

        // Si es exitoso, actualizar partes diarios del Norte
        try {
          const dataNorte = await getActualizarPartesDiariosNorte();

          if (dataNorte.status === 200) {
            toast.success("Partes diarios del Norte actualizados correctamente");
            await getDataParteDiariosNorte()
          } else {
            toast.error(`Error al actualizar partes diarios del Norte: ${dataNorte?.response?.data?.error || 'Error desconocido'}`);
          }
        } catch (errorNorte) {
          toast.error(`Error al actualizar partes diarios del Norte: ${errorNorte?.response?.data?.error || 'Error desconocido'}`);
        }
      } else {
        toast.error(`Error al actualizar partes diarios: ${data?.response?.data?.error || 'Error desconocido'}`);
      }
    } catch (error) {
      toast.error(`Error al actualizar partes diarios: ${error?.response?.data?.error || 'Error desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      {banderaDataNull && (
        <MsgError
          text1="Estamos procesando la información."
          text2="Intente de nuevo."
        />
      )}

      <TitlePage
        titlePage="Parte Diario Directorio"
        btnOnClick={true}
        titleBtnOnClick="Actualizar partes diarios"
        functionOnClick={actualizarPartesDiarios}
        lastUpdated={lastUpdated}
        type='parteDiario'
      />
      <hr className="mx-3 mt-1" />
      {dataParteDiariosHistoricos === null || !dataParteDiariosHistoricos ? (
        errorServer ? (
          <MsgErrorServerJSON
            msg1={msgErrorServer}
            btnLink="/admin/parte-diario"
          />
        ) : (
          <div className="d-flex justify-content-center align-items-center text-center">
            <Spinn type="data" />
          </div>
        )
      ) : (
        <>
          {/* <div className="px-4">
            <span className="text-danger fw-bolder">*</span>
            <span className="text-legend">
              Periodos desde 01/04 al 31/03 del siguiente año
            </span>
          </div> */}
          <Filtros
            bandTitlePrincipal={true} // HABILITA TITULO PRINCIPAL
            setDataEnd={setDataEnd}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            bandFilterZafraAnio={true}
            bandFilterAnio={true}
            bandFilterMes={true}
            bandFilterQuincena={true}
            BandFilterDiaParteDirectorio={true}
            zafraParteDiario={zafraParteDiario}
            setZafraParteDiario={setZafraParteDiario}
            zafraOpcionTodos={false}
          />
          <ParteDiario
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
            dataParteDiariosHistoricosNorte={dataParteDiariosHistoricosNorte}
            dateInicioIngeniosItemCollapse={dateInicioIngeniosItemCollapse}
            dataImport={dataImport}
            dataImportComparativa={dataImportComparativa}
            dataImportDestileria={dataImportDestileria}
            dataImportDestileriaComparativa={dataImportDestileriaComparativa}
            dataImportAnhidro={dataImportAnhidro}
            dataImportAnhidroComparativa={dataImportAnhidroComparativa}
            dataImportNorte={dataImportNorte}
            dataImportComparativaNorte={dataImportComparativaNorte}
            dataImportDestileriaNorte={dataImportDestileriaNorte}
            dataImportDestileriaComparativaNorte={dataImportDestileriaComparativaNorte}
            dataImportAnhidroNorte={dataImportAnhidroNorte}
            dataImportAnhidroComparativaNorte={dataImportAnhidroComparativaNorte}
            periodosTucumanActual={periodosTucumanActual}
            periodosTucumanComparativo={periodosTucumanComparativo}
            periodosNorteActual={periodosNorteActual}
            periodosNorteComparativo={periodosNorteComparativo}
            setBanderaDataNull={setBanderaDataNull}
            setDataImport={setDataImport}
            setDataImportComparativa={setDataImportComparativa}
            setDataImportDestileria={setDataImportDestileria}
            setDataImportDestileriaComparativa={
              setDataImportDestileriaComparativa
            }
            setDataImportAnhidro={setDataImportAnhidro}
            setDataImportAnhidroComparativa={setDataImportAnhidroComparativa}
            setDataImportNorte={setDataImportNorte}
            setDataImportComparativaNorte={setDataImportComparativaNorte}
            setDataImportDestileriaNorte={setDataImportDestileriaNorte}
            setDataImportDestileriaComparativaNorte={setDataImportDestileriaComparativaNorte}
            setDataImportAnhidroNorte={setDataImportAnhidroNorte}
            setDataImportAnhidroComparativaNorte={setDataImportAnhidroComparativaNorte}
            dateInicioIngenios={dateInicioIngenios}
            dateFinIngenios={dateFinIngenios}
            dataIngenios={dataIngenios}
            zafraParteDiario={zafraParteDiario}
          />
        </>
      )}
      {loading && (
        <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </Container>
  );
};
export default ParteDiarioContainer;
