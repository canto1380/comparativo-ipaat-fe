import "moment/locale/es";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { DownOutlined } from "@ant-design/icons";
import { CreateExcelWorkbook } from "../../Excel/ParteDiarioDirectorio";
import ItemCollpse from "./ItemsCollpase";
import { User } from "../../context/UserProvider";
import { dataComparativaPorTipo } from "./DataComparativa";
import { dataPorTipo } from "./DataOriginal";
import { getDataComparativa } from "../../utils/queryAPI/dataComparativa";
import { getDataToken } from "../../helpers/helpers";
import "./parteDiario.css";
import moment from "moment";
import { apiExportExcel } from "../../utils/apiExportExcel";
import { Dropdown, message, Space } from "antd";
import { getDiasParadas } from "../../utils/queryAPI/diaParadas";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";
import '../Botones/botones.css'
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";

const ParteDiario = ({
  dataEnd,
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  dataParteDiariosHistoricos,
  dataParteDiariosHistoricosNorte,
  dateInicioIngeniosItemCollapse,
  dataImport,
  dataImportComparativa,
  dataImportDestileria,
  dataImportDestileriaComparativa,
  dataImportAnhidro,
  dataImportAnhidroComparativa,
  setBanderaDataNull,
  dataImportNorte,
  dataImportComparativaNorte,
  dataImportDestileriaNorte,
  dataImportDestileriaComparativaNorte,
  dataImportAnhidroNorte,
  dataImportAnhidroComparativaNorte,
  periodosTucumanActual,
  periodosNorteActual,
  periodosTucumanComparativo,
  periodosNorteComparativo,
  setDataImport,
  setDataImportComparativa,
  setDataImportDestileria,
  setDataImportDestileriaComparativa,
  setDataImportAnhidro,
  setDataImportAnhidroComparativa,
  setDataImportNorte,
  setDataImportComparativaNorte,
  setDataImportDestileriaNorte,
  setDataImportDestileriaComparativaNorte,
  setDataImportAnhidroNorte,
  setDataImportAnhidroComparativaNorte,
  dateInicioIngenios,
  dateFinIngenios,
  dataIngenios,
  zafraParteDiario,

}) => {
  /***** TUCUMAN *****/
  /** D - Data Periodo actual **/
  const [d1, setD1] = useState([]);
  const [d2, setD2] = useState([]);
  const [d3, setD3] = useState([]);
  const [d4, setD4] = useState([]);
  const [d5, setD5] = useState([]);
  const [d6, setD6] = useState([]);
  const [d7, setD7] = useState([]);
  const [d8, setD8] = useState([]);
  const [d9, setD9] = useState([]);
  const [d10, setD10] = useState([]);
  const [d11, setD11] = useState([]);
  const [d12, setD12] = useState([]);
  const [d13, setD13] = useState([]);
  const [d14, setD14] = useState([]);
  const [d15, setD15] = useState([]);
  const [dataDestBellaVista, setDataDestBellaVista] = useState([]);
  /** DC - Data Comparativa **/
  const [dc1, setDc1] = useState([]);
  const [dc2, setDc2] = useState([]);
  const [dc3, setDc3] = useState([]);
  const [dc4, setDc4] = useState([]);
  const [dc5, setDc5] = useState([]);
  const [dc6, setDc6] = useState([]);
  const [dc7, setDc7] = useState([]);
  const [dc8, setDc8] = useState([]);
  const [dc9, setDc9] = useState([]);
  const [dc10, setDc10] = useState([]);
  const [dc11, setDc11] = useState([]);
  const [dc12, setDc12] = useState([]);
  const [dc13, setDc13] = useState([]);
  const [dc14, setDc14] = useState([]);
  const [dc15, setDc15] = useState([]);
  const [dataDestBellaVistaComparativa, setDataDestBellaVistaComparativa] = useState([]);

  /***** NORTE *****/
  /** N - Data Periodo actual **/
  const [n1, setN1] = useState([]);
  const [n2, setN2] = useState([]);
  const [n3, setN3] = useState([]);
  const [n4, setN4] = useState([]);
  const [n5, setN5] = useState([]);

  /** NC - Data Comparativa **/
  const [nc1, setNc1] = useState([]);
  const [nc2, setNc2] = useState([]);
  const [nc3, setNc3] = useState([]);
  const [nc4, setNc4] = useState([]);
  const [nc5, setNc5] = useState([]);

  const [observaciones, setObservaciones] = useState('')

  /** Fecha de inicio y fin de zafras TUCUMAN **/
  const [inicioZafra, setInicioZafra] = useState(null);
  const [finZafra, setFinZafra] = useState("");
  const [inicioDestileria, setInicioDestileria] = useState(null);
  const [finDestileria, setFinDestileria] = useState("");
  const [inicioAnhidro, setInicioAnhidro] = useState(null);
  const [finAnhidro, setFinAnhidro] = useState("");
  const [inicioZafraComparativa, setInicioZafraComparativa] = useState(null);
  const [finZafraComparativa, setFinZafraComparativa] = useState("");
  const [inicioDestileriaComparativa, setInicioDestileriaComparativa] = useState(null);
  const [finDestileriaComparativa, setFinDestileriaComparativa] = useState("");
  const [inicioAnhidroComparativa, setInicioAnhidroComparativa] = useState(null);
  const [finAnhidroComparativa, setFinAnhidroComparativa] = useState("");

  /** Fecha de inicio y fin de zafras NORTE **/
  const [inicioZafraNorte, setInicioZafraNorte] = useState(null);
  const [finZafraNorte, setFinZafraNorte] = useState("");
  const [inicioDestileriaNorte, setInicioDestileriaNorte] = useState(null);
  const [finDestileriaNorte, setFinDestileriaNorte] = useState("");
  const [inicioAnhidroNorte, setInicioAnhidroNorte] = useState(null);
  const [finAnhidroNorte, setFinAnhidroNorte] = useState("");

  const [inicioZafraNorteComparativa, setInicioZafraNorteComparativa] = useState(null);
  const [finZafraNorteComparativa, setFinZafraNorteComparativa] = useState("");
  const [inicioDestileriaNorteComparativa, setInicioDestileriaNorteComparativa] = useState(null);
  const [finDestileriaNorteComparativa, setFinDestileriaNorteComparativa] = useState("");
  const [inicioAnhidroNorteComparativa, setInicioAnhidroNorteComparativa] = useState(null);
  const [finAnhidroNorteComparativa, setFinAnhidroNorteComparativa] = useState("");

  /** FECHAS DE TODOS LOS INGENIOS DE INICIO Y FIN TUCUMAN **/

  /** FECHAS DE TODOS LOS INGENIOS DE INICIO Y FIN NORTE **/

  const [
    fechasInicioDestileriaIngeniosNorte,
    setFechasInicioDestileriaIngeniosNorte,
  ] = useState(null);
  const [
    fechasInicioAnhidroIngeniosNorte,
    setFechasInicioAnhidroIngeniosNorte,
  ] = useState(null);

  const [
    fechasInicioIngeniosNorteComparativa,
    setFechasInicioIngeniosNorteComparativa,
  ] = useState(null);
  const [
    fechasInicioDestileriaIngeniosNorteComparativa,
    setFechasInicioDestileriaIngeniosNorteComparativa,
  ] = useState(null);
  const [
    fechasInicioAnhidroIngeniosNorteComparativa,
    setFechasInicioAnhidroIngeniosNorteComparativa,
  ] = useState(null);

  /** Cantidad de dias de zafra TUCUMAN **/
  const [dataDiasZafra, setDataDiasZafra] = useState(null);
  const [dataDiasDestileria, setDataDiasDestileria] = useState(null);
  const [dataDiasAnhidro, setDataDiasAnhidro] = useState(null);
  const [dataDiasZafraComparativa, setDataDiasZafraComparativa] = useState(null);
  const [dataDiasDestileriaComparativa, setDataDiasDestileriaComparativa] = useState(null);
  const [dataDiasAnhidroComparativa, setDataDiasAnhidroComparativa] = useState(null);

  /** Cantidad de dias de zafra NORTE **/
  const [dataDiasZafraNorte, setDataDiasZafraNorte] = useState(null);
  const [dataDiasZafraNorteComparativa, setDataDiasZafraNorteComparativa] = useState(null);
  const [dataDiasDestileriaNorte, setDataDiasDestileriaNorte] = useState(null);
  const [dataDiasDestileriaNorteComparativa, setDataDiasDestileriaNorteComparativa] = useState(null);
  const [dataDiasAnhidroNorte, setDataDiasAnhidroNorte] = useState(null);
  const [dataDiasAnhidroNorteComparativa, setDataDiasAnhidroNorteComparativa] = useState(null);

  /** DATOS TOTALES AL DIA ELEGIDO **/
  const [panelCMB, setPanelCMB] = useState(null);
  const [panelAzucar, setPanelAzucar] = useState(null);
  const [panelAzucarEquivalente, setPanelAzucarEquivalente] = useState(null);
  const [panelAzucarCrudo, setPanelAzucarCrudo] = useState(null);
  const [panelAzucarBlancoA, setPanelAzucarBlancoA] = useState(null);
  const [panelAzucarRefinado, setPanelAzucarRefinado] = useState(null);
  const [panelAzucarOrganico, setPanelAzucarOrganico] = useState(null);
  const [panelAzucarOtros, setPanelAzucarOtros] = useState(null);
  const [panelAlcohol, setPanelAlcohol] = useState(null);
  const [panelAlcoholAnhidro, setPanelAlcoholAnhidro] = useState(null);

  /** DATOS DIAS PARADAS **/
  const [diasParadaExport, setDiasParadaExport] = useState(null);

  const [loadingDownload, setLoadingDownload] = useState(false);
  const [dataComparativa, setDataComparativa] = useState(undefined);
  const [dataUserRegister, setDataUserRegister] = useState(undefined);

  const [periodosZafra, setPeriodosZafra] = useState(null);
  const [periodosZafraComparativa, setPeriodosZafraComparativa] = useState(null)

  const { dataUser } = useContext(User);

  /** PERIODOS ZAFRA - TABLA DB **/
  useEffect(() => {
    dataPeriodosZafra();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zafraParteDiario]);

  const dataPeriodosZafra = async () => {
    const params = { anio: zafraParteDiario }
    const paramsComparativa = { anio: zafraParteDiario - 1 }

    const data = await getPeriodoZafra(params)
    setPeriodosZafra(data)
    const dataComparativa = await getPeriodoZafra(paramsComparativa)
    setPeriodosZafraComparativa(dataComparativa)
  }

  useEffect(() => {
    dataComparativaGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataComparativaGet = async () => {
    const params = { deleted: false };
    const data = await getDataComparativa(params);
    setDataComparativa(data);
  };

  useEffect(() => {
    getDataUserRegister();
  }, [dataUser]);
  const getDataUserRegister = () => {
    const data = getDataToken();
    setDataUserRegister(data);
  };
  useEffect(() => {
    dataPorTipo(
      dataImport,
      dataImportDestileria,
      dataImportAnhidro,
      dataImportNorte,
      dataImportDestileriaNorte,
      dataImportAnhidroNorte,
      dataEnd,
      dateInicioIngenios,
      zafraParteDiario,
      setD1,
      setD2,
      setD3,
      setD4,
      setD5,
      setD6,
      setD7,
      setD8,
      setD9,
      setD10,
      setD11,
      setD12,
      setD13,
      setD14,
      setD15,
      setDataDestBellaVista,
      setN1,
      setN2,
      setN3,
      setN4,
      setN5,
      setFechasInicioDestileriaIngeniosNorte,
      setFechasInicioAnhidroIngeniosNorte,
      setPanelCMB,
      setPanelAzucar,
      setPanelAzucarEquivalente,
      setPanelAzucarCrudo,
      setPanelAzucarBlancoA,
      setPanelAzucarRefinado,
      setPanelAzucarOrganico,
      setPanelAzucarOtros,
      setPanelAlcohol,
      setPanelAlcoholAnhidro
    );
    dataComparativaPorTipo(
      dataImportComparativa,
      dataImportDestileriaComparativa,
      dataImportAnhidroComparativa,
      dataImportComparativaNorte,
      dataImportDestileriaComparativaNorte,
      dataImportAnhidroComparativaNorte,
      dataEnd,
      dateFinIngenios,
      zafraParteDiario,
      setDc1,
      setDc2,
      setDc3,
      setDc4,
      setDc5,
      setDc6,
      setDc7,
      setDc8,
      setDc9,
      setDc10,
      setDc11,
      setDc12,
      setDc13,
      setDc14,
      setDc15,
      setDataDestBellaVistaComparativa,
      setNc1,
      setNc2,
      setNc3,
      setNc4,
      setNc5,
      setFechasInicioIngeniosNorteComparativa,
      setFechasInicioDestileriaIngeniosNorteComparativa,
      setFechasInicioAnhidroIngeniosNorteComparativa
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dataImport,
    dataImportComparativa,
    dataImportDestileria,
    dataImportDestileriaComparativa,
    dataImportAnhidro,
    dataImportAnhidroComparativa,
    dataImportNorte,
    dataImportComparativaNorte,
    dataImportDestileriaNorte,
    dataImportDestileriaComparativaNorte,
    dataImportAnhidroNorte,
    dataImportAnhidroComparativaNorte,
    zafraParteDiario,
  ]);
  console.log('panel 3: ', panelCMB)
  /*** DATOS DIAS PARADAS ***/
  useEffect(() => {
    if (dataAnio !== null && dataEnd !== null) {
      dataDiasParadaExport();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAnio, dataEnd]);
  const dataDiasParadaExport = async () => {
    const params = { anio: zafraParteDiario };
    const data = await getDiasParadas(params);
    setDiasParadaExport(data);
  };

  /************* CALCULO PARA OBTENER FECHA DE INICIO Y FIN DE ZAFRAS TUCUMAN *************/
  useEffect(() => {
    if (periodosTucumanActual && periodosTucumanComparativo) {
      fechasInicioYFinTucuman()
    }
  }, [periodosTucumanActual, periodosTucumanComparativo])

  const fechasInicioYFinTucuman = () => {
    const fechaInicioZafra = periodosTucumanActual.inicio_zafra && periodosTucumanActual.inicio_zafra !== null
      ? new Date(periodosTucumanActual.inicio_zafra)
      : null
    const fechaFinZafra = periodosTucumanActual.fin_datos_zafra && periodosTucumanActual.fin_datos_zafra !== null
      ? new Date(periodosTucumanActual.fin_datos_zafra)
      : null

    const fechaInicioDestileria = periodosTucumanActual.inicio_destileria && periodosTucumanActual.inicio_destileria !== null
      ? new Date(periodosTucumanActual.inicio_destileria)
      : null
    const fechaFinDestileria = periodosTucumanActual.fin_destileria && periodosTucumanActual.fin_destileria !== null
      ? new Date(periodosTucumanActual.fin_destileria)
      : null

    const fechaInicioAnhidro = periodosTucumanActual.inicio_anhidro && periodosTucumanActual.inicio_anhidro !== null
      ? new Date(periodosTucumanActual.inicio_anhidro)
      : null
    const fechaFinAnhidro = periodosTucumanActual.fin_anhidro && periodosTucumanActual.fin_anhidro !== null
      ? new Date(periodosTucumanActual.fin_anhidro)
      : null

    setInicioZafra(fechaInicioZafra)
    setFinZafra(fechaFinZafra)
    setInicioDestileria(fechaInicioDestileria)
    setFinDestileria(fechaFinDestileria)
    setInicioAnhidro(fechaInicioAnhidro)
    setFinAnhidro(fechaFinAnhidro)


    const fechaInicioZafraComparativo = periodosTucumanComparativo.inicio_zafra && periodosTucumanComparativo.inicio_zafra !== null
      ? new Date(periodosTucumanComparativo.inicio_zafra)
      : null
    const fechaFinZafraComparativo = periodosTucumanComparativo.fin_datos_zafra && periodosTucumanComparativo.fin_datos_zafra !== null
      ? new Date(periodosTucumanComparativo.fin_datos_zafra)
      : null

    const fechaInicioDestileriaComparativo = periodosTucumanComparativo.inicio_destileria && periodosTucumanComparativo.inicio_destileria !== null
      ? new Date(periodosTucumanComparativo.inicio_destileria)
      : null
    const fechaFinDestileriaComparativo = periodosTucumanComparativo.fin_destileria && periodosTucumanComparativo.fin_destileria !== null
      ? new Date(periodosTucumanComparativo.fin_destileria)
      : null

    const fechaInicioAnhidroComparativo = periodosTucumanComparativo.inicio_anhidro && periodosTucumanComparativo.inicio_anhidro !== null
      ? new Date(periodosTucumanComparativo.inicio_anhidro)
      : null
    const fechaFinAnhidroComparativo = periodosTucumanComparativo.fin_anhidro && periodosTucumanComparativo.fin_anhidro !== null
      ? new Date(periodosTucumanComparativo.fin_anhidro)
      : null

    setInicioZafraComparativa(fechaInicioZafraComparativo)
    setFinZafraComparativa(fechaFinZafraComparativo)
    setInicioDestileriaComparativa(fechaInicioDestileriaComparativo)
    setFinDestileriaComparativa(fechaFinDestileriaComparativo)
    setInicioAnhidroComparativa(fechaInicioAnhidroComparativo)
    setFinAnhidroComparativa(fechaFinAnhidroComparativo)

  }
  /***************************************************************************************/
  /************* CALCULO PARA OBTENER FECHA DE INICIO Y FIN DE ZAFRAS NORTE *************/
  useEffect(() => {
    if (periodosNorteActual && periodosNorteComparativo) {
      fechasInicioYFinNorte()
    }
  }, [periodosNorteActual, periodosNorteComparativo])

  const fechasInicioYFinNorte = () => {
    const fechaInicioZafra = periodosNorteActual.inicio_zafra && periodosNorteActual.inicio_zafra !== null
      ? new Date(periodosNorteActual.inicio_zafra)
      : null
    const fechaFinZafra = periodosNorteActual.fin_datos_zafra && periodosNorteActual.fin_datos_zafra !== null
      ? new Date(periodosNorteActual.fin_datos_zafra)
      : null

    const fechaInicioDestileria = periodosNorteActual.inicio_destileria && periodosNorteActual.inicio_destileria !== null
      ? new Date(periodosNorteActual.inicio_destileria)
      : null
    const fechaFinDestileria = periodosNorteActual.fin_destileria && periodosNorteActual.fin_destileria !== null
      ? new Date(periodosNorteActual.fin_destileria)
      : null

    const fechaInicioAnhidro = periodosNorteActual.inicio_anhidro && periodosNorteActual.inicio_anhidro !== null
      ? new Date(periodosNorteActual.inicio_anhidro)
      : null
    const fechaFinAnhidro = periodosNorteActual.fin_anhidro && periodosNorteActual.fin_anhidro !== null
      ? new Date(periodosNorteActual.fin_anhidro)
      : null

    setInicioZafraNorte(fechaInicioZafra)
    setFinZafraNorte(fechaFinZafra)
    setInicioDestileriaNorte(fechaInicioDestileria)
    setFinDestileriaNorte(fechaFinDestileria)
    setInicioAnhidroNorte(fechaInicioAnhidro)
    setFinAnhidroNorte(fechaFinAnhidro)


    const fechaInicioZafraComparativo = periodosNorteComparativo.inicio_zafra && periodosNorteComparativo.inicio_zafra !== null
      ? new Date(periodosNorteComparativo.inicio_zafra)
      : null
    const fechaFinZafraComparativo = periodosNorteComparativo.fin_datos_zafra && periodosNorteComparativo.fin_datos_zafra !== null
      ? new Date(periodosNorteComparativo.fin_datos_zafra)
      : null

    const fechaInicioDestileriaComparativo = periodosNorteComparativo.inicio_destileria && periodosNorteComparativo.inicio_destileria !== null
      ? new Date(periodosNorteComparativo.inicio_destileria)
      : null
    const fechaFinDestileriaComparativo = periodosNorteComparativo.fin_destileria && periodosNorteComparativo.fin_destileria !== null
      ? new Date(periodosNorteComparativo.fin_destileria)
      : null

    const fechaInicioAnhidroComparativo = periodosNorteComparativo.inicio_anhidro && periodosNorteComparativo.inicio_anhidro !== null
      ? new Date(periodosNorteComparativo.inicio_anhidro)
      : null
    const fechaFinAnhidroComparativo = periodosNorteComparativo.fin_anhidro && periodosNorteComparativo.fin_anhidro !== null
      ? new Date(periodosNorteComparativo.fin_anhidro)
      : null

    setInicioZafraNorteComparativa(fechaInicioZafraComparativo)
    setFinZafraNorteComparativa(fechaFinZafraComparativo)
    setInicioDestileriaNorteComparativa(fechaInicioDestileriaComparativo)
    setFinDestileriaNorteComparativa(fechaFinDestileriaComparativo)
    setInicioAnhidroNorteComparativa(fechaInicioAnhidroComparativo)
    setFinAnhidroNorteComparativa(fechaFinAnhidroComparativo)
  }

  /***************************************************************************************/

  /************************** CANTIDAD DIAS DE ZAFRA **************************/
  /***** TUCUMAN *****/
  useEffect(() => {
    cantidadDiasZafraTucuman()
    cantidadDiasZafraComparativaTucuman()
  }, [inicioZafra, finZafra, inicioZafraComparativa, finZafraComparativa])

  const cantidadDiasZafraTucuman = () => {
    let diasZafra = 0
    const fin = new Date(finZafra)
    const inicio = new Date(inicioZafra)
    const fechaParteSeleccionada = new Date(dataEnd)

    if (inicioZafra && finZafra) {
      if (fechaParteSeleccionada < finZafra) {
        diasZafra = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteSeleccionada >= finZafra) {
        diasZafra = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioZafra && (!finZafra || finZafra === null)) {
      diasZafra = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioZafra || inicioZafra === null) {
      diasZafra = 0
    }
    setDataDiasZafra(diasZafra)
  }

  const cantidadDiasZafraComparativaTucuman = () => {
    let diasZafra = 0
    const fin = new Date(finZafraComparativa)
    const inicio = new Date(inicioZafraComparativa)
    const fechaParteSeleccionada = new Date(dataEnd)
    const anioFechaParteComparativaSeleccionada = fechaParteSeleccionada.getFullYear() - 1
    const fechaParteComparativaSeleccionada = new Date(fechaParteSeleccionada)
    fechaParteComparativaSeleccionada.setFullYear(anioFechaParteComparativaSeleccionada)

    if (inicioZafraComparativa && finZafraComparativa) {
      if (fechaParteComparativaSeleccionada < finZafraComparativa) {
        diasZafra = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteComparativaSeleccionada >= finZafraComparativa) {
        diasZafra = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioZafraComparativa && (!finZafraComparativa || finZafraComparativa === null)) {
      diasZafra = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioZafraComparativa || inicioZafraComparativa === null) {
      diasZafra = 0
    }
    setDataDiasZafraComparativa(diasZafra)
  }

  useEffect(() => {
    cantidadDiasDestileriaTucuman()
    cantidadDiasDestileriaComparativaTucuman()
  }, [inicioDestileria, finDestileria, inicioDestileriaComparativa, finDestileriaComparativa])

  const cantidadDiasDestileriaTucuman = () => {
    let diasDestileria = 0
    const fin = new Date(finDestileria)
    const inicio = new Date(inicioDestileria)
    const fechaParteSeleccionada = new Date(dataEnd)

    if (inicioDestileria && finDestileria) {
      if (fechaParteSeleccionada < finDestileria) {
        diasDestileria = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteSeleccionada >= finDestileria) {
        diasDestileria = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioDestileria && (!finDestileria || finDestileria === null)) {
      diasDestileria = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioDestileria || inicioDestileria === null) {
      diasDestileria = 0
    }
    setDataDiasDestileria(diasDestileria)
  }
  const cantidadDiasDestileriaComparativaTucuman = () => {
    let diasDestileria = 0
    const fin = new Date(finDestileriaComparativa)
    const inicio = new Date(inicioDestileriaComparativa)
    const fechaParteSeleccionada = new Date(dataEnd)
    const anioFechaParteComparativaSeleccionada = fechaParteSeleccionada.getFullYear() - 1
    const fechaParteComparativaSeleccionada = new Date(fechaParteSeleccionada)
    fechaParteComparativaSeleccionada.setFullYear(anioFechaParteComparativaSeleccionada)

    if (inicioDestileriaComparativa && finDestileriaComparativa) {
      if (fechaParteComparativaSeleccionada < finDestileriaComparativa) {
        diasDestileria = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteComparativaSeleccionada >= finDestileriaComparativa) {
        diasDestileria = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioDestileriaComparativa && (!finDestileriaComparativa || finDestileriaComparativa === null)) {
      diasDestileria = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1

    }
    if (!inicioDestileriaComparativa || inicioDestileriaComparativa === null) {
      diasDestileria = 0
    }
    setDataDiasDestileriaComparativa(diasDestileria)
  }

  useEffect(() => {
    cantidadDiasAnhidroTucuman()
    cantidadDiasAnhidroComparativaTucuman()
  }, [inicioAnhidro, finAnhidro, inicioAnhidroComparativa, finAnhidroComparativa])

  const cantidadDiasAnhidroTucuman = () => {
    let diasAnhidro = 0
    const fin = new Date(finAnhidro)
    const inicio = new Date(inicioAnhidro)
    const fechaParteSeleccionada = new Date(dataEnd)

    if (inicioAnhidro && finAnhidro) {
      if (fechaParteSeleccionada < finAnhidro) {
        diasAnhidro = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteSeleccionada >= finAnhidro) {
        diasAnhidro = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioAnhidro && (!finAnhidro || finAnhidro === null)) {
      diasAnhidro = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioAnhidro || inicioAnhidro === null) {
      diasAnhidro = 0
    }
    setDataDiasAnhidro(diasAnhidro)
  }
  const cantidadDiasAnhidroComparativaTucuman = () => {
    let diasAnhidro = 0
    const fin = new Date(finAnhidroComparativa)
    const inicio = new Date(inicioAnhidroComparativa)
    const fechaParteSeleccionada = new Date(dataEnd)
    const anioFechaParteComparativaSeleccionada = fechaParteSeleccionada.getFullYear() - 1
    const fechaParteComparativaSeleccionada = new Date(fechaParteSeleccionada)
    fechaParteComparativaSeleccionada.setFullYear(anioFechaParteComparativaSeleccionada)

    if (inicioAnhidroComparativa && finAnhidroComparativa) {
      if (fechaParteComparativaSeleccionada < finAnhidroComparativa) {
        diasAnhidro = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteComparativaSeleccionada >= finAnhidroComparativa) {
        diasAnhidro = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioAnhidroComparativa && (!finAnhidroComparativa || finAnhidroComparativa === null)) {
      diasAnhidro = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1

    }
    if (!inicioAnhidroComparativa || inicioAnhidroComparativa === null) {
      diasAnhidro = 0
    }
    setDataDiasAnhidroComparativa(diasAnhidro)
  }

  /********** NORTE **********/
  useEffect(() => {
    cantidadDiasZafraNorte()
    cantidadDiasZafraComparativaNorte()
  }, [inicioZafraNorte, finZafraNorte, inicioZafraNorteComparativa, finZafraNorteComparativa])

  const cantidadDiasZafraNorte = () => {
    let diasZafra = 0
    const fin = new Date(finZafraNorte)
    const inicio = new Date(inicioZafraNorte)
    const fechaParteSeleccionada = new Date(dataEnd)

    if (inicioZafraNorte && finZafraNorte) {
      if (fechaParteSeleccionada < finZafraNorte) {
        diasZafra = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteSeleccionada >= finZafraNorte) {
        diasZafra = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioZafraNorte && (!finZafraNorte || finZafraNorte === null)) {
      diasZafra = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioZafraNorte || inicioZafraNorte === null) {
      diasZafra = 0
    }
    setDataDiasZafraNorte(diasZafra)
  }

  const cantidadDiasZafraComparativaNorte = () => {
    let diasZafra = 0
    const fin = new Date(finZafraNorteComparativa)
    const inicio = new Date(inicioZafraNorteComparativa)
    const fechaParteSeleccionada = new Date(dataEnd)
    const anioFechaParteComparativaSeleccionada = fechaParteSeleccionada.getFullYear() - 1
    const fechaParteComparativaSeleccionada = new Date(fechaParteSeleccionada)
    fechaParteComparativaSeleccionada.setFullYear(anioFechaParteComparativaSeleccionada)

    if (inicioZafraNorteComparativa && finZafraNorteComparativa) {
      if (fechaParteComparativaSeleccionada < finZafraNorteComparativa) {
        diasZafra = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteComparativaSeleccionada >= finZafraNorteComparativa) {
        diasZafra = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioZafraNorteComparativa && (!finZafraNorteComparativa || finZafraNorteComparativa === null)) {
      diasZafra = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioZafraNorteComparativa || inicioZafraNorteComparativa === null) {
      diasZafra = 0
    }
    setDataDiasZafraNorteComparativa(diasZafra)
  }

  useEffect(() => {
    cantidadDiasDestileriaNorte()
    cantidadDiasDestileriaComparativaNorte()
  }, [inicioDestileriaNorte, finDestileriaNorte, inicioDestileriaNorteComparativa, finDestileriaNorteComparativa])

  const cantidadDiasDestileriaNorte = () => {
    let diasDestileria = 0
    const fin = new Date(finDestileriaNorte)
    const inicio = new Date(inicioDestileriaNorte)
    const fechaParteSeleccionada = new Date(dataEnd)

    if (inicioDestileriaNorte && finDestileriaNorte) {
      if (fechaParteSeleccionada < finDestileriaNorte) {
        diasDestileria = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteSeleccionada >= finDestileriaNorte) {
        diasDestileria = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioDestileriaNorte && (!finDestileriaNorte || finDestileriaNorte === null)) {
      diasDestileria = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioDestileriaNorte || inicioDestileriaNorte === null) {
      diasDestileria = 0
    }
    setDataDiasDestileriaNorte(diasDestileria)
  }
  const cantidadDiasDestileriaComparativaNorte = () => {
    let diasDestileria = 0
    const fin = new Date(finDestileriaNorteComparativa)
    const inicio = new Date(inicioDestileriaNorteComparativa)
    const fechaParteSeleccionada = new Date(dataEnd)
    const anioFechaParteComparativaSeleccionada = fechaParteSeleccionada.getFullYear() - 1
    const fechaParteComparativaSeleccionada = new Date(fechaParteSeleccionada)
    fechaParteComparativaSeleccionada.setFullYear(anioFechaParteComparativaSeleccionada)

    if (inicioDestileriaNorteComparativa && finDestileriaNorteComparativa) {
      if (fechaParteComparativaSeleccionada < finDestileriaNorteComparativa) {
        diasDestileria = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteComparativaSeleccionada >= finDestileriaNorteComparativa) {
        diasDestileria = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioDestileriaNorteComparativa && (!finDestileriaNorteComparativa || finDestileriaNorteComparativa === null)) {
      diasDestileria = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1

    }
    if (!inicioDestileriaNorteComparativa || inicioDestileriaNorteComparativa === null) {
      diasDestileria = 0
    }
    setDataDiasDestileriaNorteComparativa(diasDestileria)
  }

  useEffect(() => {
    cantidadDiasAnhidroNorte()
    cantidadDiasAnhidroComparativaNorte()
  }, [inicioAnhidroNorte, finAnhidroNorte, inicioAnhidroNorteComparativa, finAnhidroNorteComparativa])

  const cantidadDiasAnhidroNorte = () => {
    let diasAnhidro = 0
    const fin = new Date(finAnhidroNorte)
    const inicio = new Date(inicioAnhidroNorte)
    const fechaParteSeleccionada = new Date(dataEnd)

    if (inicioAnhidroNorte && finAnhidroNorte) {
      if (fechaParteSeleccionada < finAnhidroNorte) {
        diasAnhidro = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteSeleccionada >= finAnhidroNorte) {
        diasAnhidro = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioAnhidroNorte && (!finAnhidroNorte || finAnhidroNorte === null)) {
      diasAnhidro = ((fechaParteSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
    }
    if (!inicioAnhidroNorte || inicioAnhidroNorte === null) {
      diasAnhidro = 0
    }
    setDataDiasAnhidroNorte(diasAnhidro)
  }
  const cantidadDiasAnhidroComparativaNorte = () => {
    let diasAnhidro = 0
    const fin = new Date(finAnhidroNorteComparativa)
    const inicio = new Date(inicioAnhidroNorteComparativa)
    const fechaParteSeleccionada = new Date(dataEnd)
    const anioFechaParteComparativaSeleccionada = fechaParteSeleccionada.getFullYear() - 1
    const fechaParteComparativaSeleccionada = new Date(fechaParteSeleccionada)
    fechaParteComparativaSeleccionada.setFullYear(anioFechaParteComparativaSeleccionada)

    if (inicioAnhidroNorteComparativa && finAnhidroNorteComparativa) {
      if (fechaParteComparativaSeleccionada < finAnhidroNorteComparativa) {
        diasAnhidro = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
      if (fechaParteComparativaSeleccionada >= finAnhidroNorteComparativa) {
        diasAnhidro = ((fin - inicio) / (1000 * 60 * 60 * 24)) + 1
      }
    }

    if (inicioAnhidroNorteComparativa && (!finAnhidroNorteComparativa || finAnhidroNorteComparativa === null)) {
      diasAnhidro = ((fechaParteComparativaSeleccionada - inicio) / (1000 * 60 * 60 * 24)) + 1

    }
    if (!inicioAnhidroNorteComparativa || inicioAnhidroNorteComparativa === null) {
      diasAnhidro = 0
    }
    setDataDiasAnhidroNorteComparativa(diasAnhidro)
  }
  /*******************************************************************/
  /*** ESTIMACIONES ***/
  let estimacionEEAOC;
  dataComparativa?.forEach((d) => {
    if (d.anio_zafra === zafraParteDiario) {
      estimacionEEAOC = d.estimacion_EEAOC;
    } else {
      estimacionEEAOC = 0
    }
  });
  /** Exportacion ZAFRA ACTUAL **/
  const exportarParteComparativo = async () => {
    try {
      setLoadingDownload(true);
      const dateFormat = moment(dataEnd).format("DD-MM-YYYY");
      const dataSend = [
        {
          /** DATOS TUCUMAN **/
          d1,
          d2,
          d3,
          d4,
          d5,
          d6,
          d7,
          d8,
          d9,
          d10,
          d11,
          d12,
          d13,
          d14,
          d15,
          dataDestBellaVista,
          /** DATOS TUCUMAN - COMPARATIVA **/
          dc1,
          dc2,
          dc3,
          dc4,
          dc5,
          dc6,
          dc7,
          dc8,
          dc9,
          dc10,
          dc11,
          dc12,
          dc13,
          dc14,
          dc15,
          dataDestBellaVistaComparativa,
          /** DATOS NORTE **/
          n1,
          n2,
          n3,
          n4,
          n5,
          /** DATOS NORTE - COMPARATIVA **/
          nc1,
          nc2,
          nc3,
          nc4,
          nc5,
          /*********************/
          /** GENERALES **/
          zafraParteDiario,   // Anio de fecha actual
          dataEnd,  // fecha elegida del parte
          dataUser,   // TOKEN
          dataUserRegister,   // Datos del usuario en sesion 
          observaciones,   // 

          /** FECHAS TUCUMAN **/
          /*zafra*/
          inicioZafra,   //  FEcha Inicio de zafra actual
          inicioZafraComparativa,   // Fecha Inicio de zafra comparativa
          finZafra,   // fin zafra actual
          finZafraComparativa,   //  fin zafra comparativa
          dataDiasZafra,   // dias de zafra actual
          dataDiasZafraComparativa,   // Dias de zafra comparativa

          /* destileria */
          inicioDestileria,
          inicioDestileriaComparativa,
          finDestileria,
          finDestileriaComparativa,
          dataDiasDestileria,
          dataDiasDestileriaComparativa,

          /*anhidro*/
          inicioAnhidro,
          inicioAnhidroComparativa,
          finAnhidro,
          finAnhidroComparativa,
          dataDiasAnhidro,
          dataDiasAnhidroComparativa,

          /** FECHAS NORTE **/
          /*zafra*/
          inicioZafraNorte,   //  Inicio zafra actual del norte
          inicioZafraNorteComparativa,   // Inicio de zafra comparativa del norte
          finZafraNorte,   //  fin zafra actual del norte
          finZafraNorteComparativa,   //  fin zafra comparativa del norte
          dataDiasZafraNorte,   // dias de zafra actual del norte
          dataDiasZafraNorteComparativa,   // dias de zafra comparativa dle norte

          fechasInicioIngeniosNorteComparativa,   // fechas incio, fin y fin_datos zafra comparativa del norte
          /*destileria*/
          inicioDestileriaNorte,
          inicioDestileriaNorteComparativa,
          finDestileriaNorte,
          finDestileriaNorteComparativa,
          dataDiasDestileriaNorte,
          dataDiasDestileriaNorteComparativa,
          // fechas inicio y fin destileria comparativa del norte
          /*anhidro*/
          inicioAnhidroNorte,
          inicioAnhidroNorteComparativa,
          finAnhidroNorte,
          finAnhidroNorteComparativa,
          dataDiasAnhidroNorte,
          dataDiasAnhidroNorteComparativa,

          fechasInicioAnhidroIngeniosNorte,
          fechasInicioAnhidroIngeniosNorteComparativa,

          /** REPORTE DIAS PARADAS **/
          diasParadaExport,   // Registros de dias de parada

          /** DATOS GENERALES TUCUMAN Y NORTE ***/
          dataImport,   // Datos de tucuman - Usado para verificar si hay datos desde el backend
          dataImportComparativa,   // Datos comparativas de tucuman
          dataImportNorte,   // Datos del norte

          /** INGENIOS LISTADO **/
          dataIngenios,   // Informacion de ingenios. Listado basico

          /** ESTIMACIONES EEAOC Y CAA **/
          dataComparativa,   // Datos de estimaciones de EEAOC
          periodosZafra, // Periodos de los ingenios de la zafra elegida
          periodosZafraComparativa, // Periodos de los ingenios de la zafra comparativa
        },
      ];

      const res = await apiExportExcel("POST", "descargar", dataSend);
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `Zafra ${zafraParteDiario} - Parte diario directorio - ${dateFormat}`;
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
        setDataImport(null);
        setDataImportComparativa(null);
        setDataImportDestileria(null);
        setDataImportDestileriaComparativa(null);
        setDataImportAnhidro(null)
        setDataImportAnhidroComparativa(null)
        setLoadingDownload(false);
        message.success("Descarga realizada correctamente", 5);
        window.location.reload();
      } else {
        toast.error("Error al generar el excel");
      }
    } catch (error) {
      toast.error("Error en el servidor:", error);
    }
  };

  /*** DIAS EFECTIVOS DE ZAFRA ***/
  useEffect(() => {
    if (dataAnio !== null && dataEnd !== null && diasParadaExport !== null) {
      getCalculoDiasParada();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAnio, dataEnd, diasParadaExport]);

  /** DIAS PARADA **/
  const [aguilDiasParada, setAguilDiasParada] = useState(0);
  const [bellavistaDiasParada, setBellavistaDiasParada] = useState(0);
  const [concepDiasParada, setConcepDiasParada] = useState(0);
  const [cruzaltaDiasParada, setCruzaltaDiasParada] = useState(0);
  const [famaillaDiasParada, setFamaillaDiasParada] = useState(0);
  const [coronaDiasParada, setCoronaDiasParada] = useState(0);
  const [floridaDiasParada, setFloridaDiasParada] = useState(0);
  const [providDiasParada, setProvidDiasParada] = useState(0);
  const [trinidadDiasParada, setTrinidadDiasParada] = useState(0);
  const [lealesDiasParada, setLealesDiasParada] = useState(0);
  const [marapaDiasParada, setMarapaDiasParada] = useState(0);
  const [nunorcoDiasParada, setNunorcoDiasParada] = useState(0);
  const [barbaraDiasParada, setBarbaraDiasParada] = useState(0);
  const [rosaDiasParada, setRosaDiasParada] = useState(0);

  const getCalculoDiasParada = () => {
    let aguilDiasParada = 0,
      bellavistaDiasParada = 0,
      concepDiasParada = 0,
      cruzaltaDiasParada = 0,
      famaillaDiasParada = 0,
      coronaDiasParada = 0,
      floridaDiasParada = 0,
      providDiasParada = 0,
      trinidadDiasParada = 0,
      lealesDiasParada = 0,
      marapaDiasParada = 0,
      nunorcoDiasParada = 0,
      barbaraDiasParada = 0,
      rosaDiasParada = 0;
    const calculoDiasParada = diasParadaExport;
    for (const p of calculoDiasParada) {
      switch (p.nombre_ingenio) {
        case "Aguilares":
          aguilDiasParada = aguilDiasParada + p.horas_paradas;
          break;
        case "Bella Vista":
          bellavistaDiasParada = bellavistaDiasParada + p.horas_paradas;
          break;
        case "Concepción":
          concepDiasParada = concepDiasParada + p.horas_paradas;
          break;
        case "Cruz Alta":
          cruzaltaDiasParada = cruzaltaDiasParada + p.horas_paradas;
          break;
        case "Famaillá":
          famaillaDiasParada = famaillaDiasParada + p.horas_paradas;
          break;
        case "La Corona":
          coronaDiasParada = coronaDiasParada + p.horas_paradas;
          break;
        case "La Florida":
          floridaDiasParada = floridaDiasParada + p.horas_paradas;
          break;
        case "La Providencia":
          providDiasParada = providDiasParada + p.horas_paradas;
          break;
        case "La Trinidad":
          trinidadDiasParada = trinidadDiasParada + p.horas_paradas;
          break;
        case "Leales":
          lealesDiasParada = lealesDiasParada + p.horas_paradas;
          break;
        case "Marapa":
          marapaDiasParada = marapaDiasParada + p.horas_paradas;
          break;
        case "Ñuñorco":
          nunorcoDiasParada = nunorcoDiasParada + p.horas_paradas;
          break;
        case "Santa Bárbara":
          barbaraDiasParada = barbaraDiasParada + p.horas_paradas;
          break;
        case "Santa Rosa":
          rosaDiasParada = rosaDiasParada + p.horas_paradas;
          break;
        default:
          break;
      }
    }
    setAguilDiasParada(aguilDiasParada / 24);
    setBellavistaDiasParada(bellavistaDiasParada / 24);
    setConcepDiasParada(concepDiasParada / 24);
    setCruzaltaDiasParada(cruzaltaDiasParada / 24);
    setFamaillaDiasParada(famaillaDiasParada / 24);
    setCoronaDiasParada(coronaDiasParada / 24);
    setFloridaDiasParada(floridaDiasParada / 24);
    setProvidDiasParada(providDiasParada / 24);
    setTrinidadDiasParada(trinidadDiasParada / 24);
    setLealesDiasParada(lealesDiasParada / 24);
    setMarapaDiasParada(marapaDiasParada / 24);
    setNunorcoDiasParada(nunorcoDiasParada / 24);
    setBarbaraDiasParada(barbaraDiasParada / 24);
    setRosaDiasParada(rosaDiasParada / 24);
  };
  /*********************/

  /** Boton desplegable **/
  const handleMenuClick = (e) => {
    if (e.key === 1) {
    }
    if (e.key === 2) {
      exportarParteComparativo();
    }
  };

  const items = [
    {
      label: (
        <button
          disabled
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "0px solid white",
            cursor: "not-allowed",
          }}
          onClick={() =>
            CreateExcelWorkbook(
              setLoadingDownload,
              dataEnd,
              d1,
              d2,
              d3,
              d4,
              d5,
              d6,
              d7,
              d8,
              d9,
              d10,
              d11,
              d12,
              d13,
              d14,
              d15,
              dc1,
              dc2,
              dc3,
              dc4,
              dc5,
              dc6,
              dc7,
              dc8,
              dc9,
              dc10,
              dc11,
              dc12,
              dc13,
              dc14,
              dc15,
              dataImport,
              dataImportComparativa,
              dataUser,
              dataUserRegister,
              setBanderaDataNull,
              inicioZafra,
              inicioZafraComparativa,
              dataDiasZafra,
              dataDiasZafraComparativa,
              setDataImport,
              setDataImportComparativa,
              setDataImportDestileria,
              setDataImportDestileriaComparativa,
              dataIngenios,
              finZafra,
              finZafraComparativa,
              dataComparativa,
              zafraParteDiario,

              /**NORTE **/
              inicioZafraNorte,
              inicioZafraNorteComparativa,
              finZafraNorte,
              finZafraNorteComparativa,
              fechasInicioIngeniosNorteComparativa,

              dataDiasZafraNorte,
              dataDiasZafraNorteComparativa,
              aguilDiasParada,
              bellavistaDiasParada,
              concepDiasParada,
              cruzaltaDiasParada,
              famaillaDiasParada,
              coronaDiasParada,
              floridaDiasParada,
              providDiasParada,
              trinidadDiasParada,
              lealesDiasParada,
              marapaDiasParada,
              nunorcoDiasParada,
              barbaraDiasParada,
              rosaDiasParada
            )
          }
        >
          Zafra comparativa
        </button>
      ),
      key: "1",
      // icon: <UserOutlined />,
    },
    {
      label: (
        <button
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "0px solid white",
          }}
          onClick={() => exportarParteComparativo()}
        >
          Zafra actual
        </button>
      ),
      key: "2",
      // icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Row className="d-flex justify-content-start align-items-center px-4 pb-0 pt-2">
        <Col xs={12} className="mb-3 mt-0">
          <p className="me-4 mb-0">Observaciones:</p>
          <TextArea row={3} disabled={!zafraParteDiario ? true : false} onChange={(e) => setObservaciones(e.target.value)} />
        </Col>
        <Col xs={12} className="mb-2">
          <Row className="justify-content-start">
            <Col className="mb-1 encabezados-panel fw-bolder">
              Datos hasta: {dataEnd ? moment(dataEnd).format("DD-MM-YYYY") : ""}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Días de zafra: {Math.trunc(dataDiasZafra)}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Días de Destilería: {Math.trunc(dataDiasDestileria)}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Rto CMB(%):{" "}
              {panelCMB
                ? ((panelAzucarEquivalente / panelCMB) * 100).toFixed(2)
                : ""}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Avance de zafra(%):{" "}
              {(panelCMB && estimacionEEAOC !== 0) ? ((panelCMB / estimacionEEAOC) * 100).toFixed(2) : 0}
            </Col>
          </Row>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Caña molida bruta
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelCMB?.toLocaleString("es-ES")} [tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Azúcar Total</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucar?.toLocaleString("es-ES")} [tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Azúcar Crudo</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarCrudo?.toLocaleString("es-ES")} [tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Azúcar Blanco A
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarBlancoA?.toLocaleString("es-ES")} [tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Azúcar Refinado
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarRefinado?.toLocaleString("es-ES")} [tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Azúcar Orgánico
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarOrganico?.toLocaleString("es-ES")} [tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Alcohol</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAlcohol?.toLocaleString("es-ES")} [L]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Alcohol Anhidro</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAlcoholAnhidro?.toLocaleString("es-ES")} [L]
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col xs={12} className="text-start mb-5 mt-4">
          <Dropdown menu={menuProps}>
            <Button
              className={`btn-descargar ${(dataEnd === null ||
                dataImport === null ||
                dataImportComparativa === null ||
                loadingDownload === true) &&
                "disabled"
                }`}
            >
              <Space>
                {dataEnd === null &&
                  dataImport === null &&
                  dataImportComparativa === null ? (
                  "Elija Fecha"
                ) : dataEnd !== null &&
                  (dataImport === null || dataImportComparativa === null) ? (
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
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col>
          <ItemCollpse
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
            dataParteDiariosHistoricosNorte={dataParteDiariosHistoricosNorte}
            dateInicioIngeniosItemCollapse={dateInicioIngeniosItemCollapse}
          />
        </Col>
      </Row>
    </>
  );
};
export default ParteDiario;