/**
 * REFERENCIAS
 * 1- todo lo que diga `informacion` (state, funciones, etc.) son para obtener el informe estatico de DDJJ
 * 2- Todo lo que diga `reporte` (state, funciones, etc.) son para obtener el reporte dinamico de DDJJ.
 * Todo lo que se va filtrando para el reporte dinamico es lo que se va mostrando en pantalla
 **/


import { useState, useEffect, useMemo } from "react"
import { getDDJJ, getDDJJHistorico } from "../../utils/queryAPI/ddjjQuery"
import MsgError from "../../components/Messages/MsgError"
import TitlePage from "../../components/TitlePages"
import { Container } from "react-bootstrap"
import Spinn from "../../components/Spinner"
import Filtros from "../../components/Filtros"
import { getDateFromQuincena, getMesYQuincena, parseQuincenaLabel, tieneItemSeleccionado } from "../../helpers/helpers"
import '../ParteDiario/ParteDiarioContainer.css'
import DdjjComponent from "../../components/DDJJ/Ddjj"
import BtnDescargar from "../../components/Botones/BtnDescargar"
import { apiExportExcel } from "../../utils/apiExportExcel"
import { message } from "antd"
import { toast } from "react-toastify"
import { getActualizarDDJJTucuman } from "../../utils/queryAPI/actualizarDDJJ"
import { getLastUpdatedDDJJ } from "../../utils/queryAPI/lastUpdatedDDJJ"
import FiltrosReporteDDJJ from "../../components/DDJJ/ReporteDinamico/FiltrosReporteDDJJ"
import DdjjReporteComponent from "../../components/DDJJ/ReporteDinamico/DdjjReporteComponent"
import { optionsQuincenal } from "../../components/Filtros/dataFilter"
import { DDJJ_ITEMS_REPORTE } from "../../components/DDJJ/ReporteDinamico/ItemsFilter"
import moment from "moment"

const DDJJContainer = ({ tokenAuth, dataUserRegister }) => {
  const [errorServer, setErrorServer] = useState(false)
  const [msgErrorServer, setMsgErrorServer] = useState('')

  /** FILTROS DE BUSQUEDA **/
  const [zafraInformacion, setZafraInformacion] = useState(2025)
  const [quincenaDesdeInformacion, setQuincenaDesdeInformacion] = useState(undefined)
  const [quincenaHastaInformacion, setQuincenaHastaInformacion] = useState(undefined)
  // Estados para las fechas reales calculadas (Date)
  const [fechaDesdeInformacion, setFechaDesdeInformacion] = useState(undefined)
  const [fechaHastaInformacion, setFechaHastaInformacion] = useState(undefined)
  const [estadoDDJJInformacion, setEstadoDDJJInformacion] = useState('Aprobado')

  /** FILTROS PARA REPORTE **/
  const [zafraReportes, setZafraReportes] = useState([])
  const [itemsReporte, setItemsReporte] = useState([]); // items seleccionados
  const [quincenasReporte, setQuincenasReporte] = useState([]); // quincenas seleccionadas
  const [ingeniosReporte, setIngeniosReporte] = useState([]); // ingenios seleccionados

  /** INFORMACION DE DDJJ TRAIDAS DESDE LA DB **/
  const [ddjjInformacion, setDdjjInformacion] = useState(undefined) // para info mostrada en la pagina
  const [ddjjInformacionFilter, setDdjjInformacionFilter] = useState(undefined) // para info mostrada en la pagina
  const [ddjjReporte, setDdjjReporte] = useState(undefined) // para info a exportar

  /** STATE DE DATOS PARSEADOS PARA EXPORTAR **/
  const [ddjjInformacionParseada, setDdjjInformacionParseada] = useState(undefined)

  const [loadingUpdated, setLoadingUpdated] = useState(false)
  const [loadingDownloadDynamicReport, setLoadingDownloadDynamicReport] = useState(false)
  const [loadingDownloadReport, setLoadingDownloadReport] = useState(false);
  const [banderaDataNull, setBanderaDataNull] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(undefined)

  /**
   * Datos para DDJJ Infomres
   */
  useEffect(() => {
    if (zafraInformacion && zafraInformacion !== null) {
      getDataDDJJInformacion()
    }
    setQuincenaDesdeInformacion(undefined)
    setQuincenaHastaInformacion(undefined)
  }, [zafraInformacion])

  const getDataDDJJInformacion = async () => {
    const params = { anioZafra: zafraInformacion }
    const dataDDJJ = await getDDJJ(params)
    if (dataDDJJ.status === 200) {
      setDdjjInformacion(dataDDJJ.data)
      setDdjjInformacionFilter(dataDDJJ.data)
    } else {
      setErrorServer(dataDDJJ.response.status)
      setMsgErrorServer(dataDDJJ.response.data.error.message)
    }
  }

  const quincenasOptions = useMemo(() => {
    if (!ddjjInformacion || !Array.isArray(ddjjInformacion)) return [{ label: 'Seleccione quincena', value: undefined }];
    const unique = new Set();
    const options = [{ label: 'Seleccione quincena', value: undefined }];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Ordenar cronológicamente
    const sorted = [...ddjjInformacion].sort((a, b) => new Date(a.fechaDesde) - new Date(b.fechaDesde));
    sorted.forEach(d => {
      const m = moment(d.fechaDesde);
      const year = m.year();
      const month = m.month();
      const day = m.date();
      const q = day <= 15 ? 1 : 2;

      const key = `${year}-${month}-${q}`;
      if (!unique.has(key)) {
        unique.add(key);
        options.push({
          label: `${q}° quincena de ${meses[month]} ${year}`,
          value: `${q}-${month + 1}-${year}`
        });
      }
    });
    return options;
  }, [ddjjInformacion]);

  const quincenasHastaOptions = useMemo(() => {
    if (!quincenaDesdeInformacion) {
      return quincenasOptions;
    }
    const { month: desdeM, quincena: desdeQ, anio: desdeY } = quincenaDesdeInformacion
    const desdeDate = new Date(desdeY, desdeM - 1, desdeQ === 1 ? 1 : 16);

    return quincenasOptions.map(option => {
      if (!option.value) return option;

      const [hastaQ, hastaM, hastaY] = option.value.split('-').map(Number);
      const hastaDate = new Date(hastaY, hastaM - 1, hastaQ === 1 ? 1 : 16);

      return {
        ...option,
        disabled: hastaDate < desdeDate
      };
    });
  }, [quincenasOptions, quincenaDesdeInformacion]);

  useEffect(() => {
    if (quincenaDesdeInformacion && quincenaHastaInformacion) {
      const { month: desdeM, quincena: desdeQ, anio: desdeY } = quincenaDesdeInformacion
      const desdeDate = new Date(desdeY, desdeM - 1, desdeQ === 1 ? 1 : 16);

      const { month: hastaM, quincena: hastaQ, anio: hastaY } = quincenaHastaInformacion
      const hastaDate = new Date(hastaY, hastaM - 1, hastaQ === 1 ? 1 : 16);

      if (hastaDate < desdeDate) {
        setQuincenaHastaInformacion(undefined);
      }
    }
  }, [quincenaDesdeInformacion, quincenaHastaInformacion]);

  /**
  * FILTROS DE INFORMACION
  * USEEFFECT PARA PARSEAR LAS FECHAS DE DDJJ INFORMACION SEGUN LAS QUINCENAS ELEGIDAS
  **/
  useEffect(() => {
    if (quincenaDesdeInformacion && quincenaHastaInformacion) {
      // Calcular fecha desde: inicio de la quincena seleccionada en "desde"
      const yearDesde = quincenaDesdeInformacion.anio || zafraInformacion;
      const fechaDesde = getDateFromQuincena({
        year: yearDesde,
        month: quincenaDesdeInformacion.month,
        quincena: quincenaDesdeInformacion.quincena
      });

      // // Calcular fecha hasta: final de la quincena seleccionada en "hasta"
      const yearHasta = quincenaHastaInformacion.anio || zafraInformacion;
      const fechaHasta = getDateFromQuincena({
        year: yearHasta,
        month: quincenaHastaInformacion.month,
        quincena: quincenaHastaInformacion.quincena
      });

      if (fechaDesde && fechaHasta) {
        // Guardar el inicio de la quincena "desde"
        setFechaDesdeInformacion(fechaDesde.from);
        // Guardar el final de la quincena "hasta"
        setFechaHastaInformacion(fechaHasta.to);
      } else {
        // Si no hay quincenas seleccionadas, limpiar las fechas
        setFechaDesdeInformacion(undefined);
        setFechaHastaInformacion(undefined);
      }
    }
  }, [quincenaDesdeInformacion, quincenaHastaInformacion, zafraInformacion])

  /** 
   * FILTROS DE INFORMACION
   * FILTROS DE DDJJ INFORMACION AL CAMBIAR FECHA DESDE, FECHA HASTA Y ESTADO 
   * **/
  useEffect(() => {
    // si no hay datos originales, nada que filtrar
    if (!ddjjInformacion || !Array.isArray(ddjjInformacion)) {
      setDdjjInformacionFilter([]);
      return;
    }

    // si no hay rango definido, resetea al original
    if ((!fechaDesdeInformacion || !fechaHastaInformacion) && !estadoDDJJInformacion) {
      setDdjjInformacionFilter(ddjjInformacion);
      return;
    }
    filterDDJJInformacion();
  }, [fechaDesdeInformacion, fechaHastaInformacion, ddjjInformacion, estadoDDJJInformacion]);

  const filterDDJJInformacion = () => {
    if (!ddjjInformacion || ddjjInformacion.length === 0) return;

    const tieneRango = fechaDesdeInformacion && fechaHastaInformacion;
    const tieneEstado = estadoDDJJInformacion && estadoDDJJInformacion !== "" && estadoDDJJInformacion !== undefined;

    const desde = tieneRango ? new Date(fechaDesdeInformacion) : null;
    const hasta = tieneRango ? new Date(fechaHastaInformacion) : null;

    if (desde) desde.setHours(0, 0, 0, 0);
    if (hasta) hasta.setHours(23, 59, 59, 999);

    const filtered = ddjjInformacion.filter((item) => {
      const fechaDesde = new Date(item.fechaDesde);
      const fechaHasta = new Date(item.fechaHasta);

      // 1) Si hay rango, validar rango
      const inRange = tieneRango
        ? fechaDesde >= desde && fechaHasta <= hasta
        : true; // si NO hay rango, pasa todo

      // 2) Si hay estado, validar estado
      const inEstado = tieneEstado
        ? item.estado === estadoDDJJInformacion
        : true; // si NO hay estado, pasa todo
      return inRange && inEstado;
    });

    setDdjjInformacionFilter(filtered);
  };


  useEffect(() => {
    dataLastUpdated();
  }, [loadingUpdated]);

  const dataLastUpdated = async () => {
    const data = await getLastUpdatedDDJJ();
    const fecha = new Date(data[0]?.fechaHasta).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setLastUpdated(fecha);
  };

  const actualizarDDJJ = async () => {
    try {
      setLoadingUpdated(true)
      const data = await getActualizarDDJJTucuman()
      if (data.status === 200) {
        toast.success(data?.data?.message)
      } else {
        toast.error(`Error al actualizar DDJJ: ${data?.response?.data?.error || 'Error desconocido'}`);
      }
    } catch (error) {
      toast.error(`Error al actualizar partes diarios: ${error?.response?.data?.error || 'Error desconocido'}`);
    } finally {
      setLoadingUpdated(false)
    }
  }
  const exportarDDJJInformes = async () => {
    try {
      setLoadingDownloadReport(true)
      const titulo = `DDJJ informativo - Zafra ${zafraInformacion}`
      const dataSend = [
        {
          dataDDJJ: ddjjInformacionParseada,
          usuario: dataUserRegister,
          anioZafra: zafraInformacion,
          periodoDesde: fechaDesdeInformacion,
          periodoHasta: fechaHastaInformacion,
          titulo: titulo,
        }
      ]
      const res = await apiExportExcel("POST", 'declaracionJurada/descargarInforme', dataSend)
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `DDJJ informativo - Zafra ${zafraInformacion}`; // Nombre del archivo
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
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
  }

  /*********************************** MODULO DE REPORTE DINAMICO ***************************************/
  /**
  * Datos para DDJJ Reportes
  // */
  useEffect(() => {
    getDataDDJJReporte()
  }, [])

  const getDataDDJJReporte = async () => {
    const dataDDJJ = await getDDJJHistorico()
    if (dataDDJJ.status === 200) {
      const ddjjAprobadas = dataDDJJ.data.filter((d) => d.estado === 'Aprobado')
      setDdjjReporte(ddjjAprobadas)
      // setDdjjReporteFilter(dataDDJJ.data)
    } else {
      setErrorServer(dataDDJJ.response.status)
      setMsgErrorServer(dataDDJJ.response.data.error.message)
    }
  }

  const zafrasDisponibles = useMemo(() => {
    if (!ddjjReporte) return []
    return [...new Set(ddjjReporte.map(r => r.anioZafra))].sort()
  }, [ddjjReporte])
  const ingeniosDisponibles = useMemo(() => {
    if (!ddjjReporte) return []
    return [...new Set(ddjjReporte.map(r => r.ingenioNombre))]
  }, [ddjjReporte])

  const quincenasDisponibles = useMemo(() => {
    if (!ddjjReporte) return []
    return [...new Set(optionsQuincenal.map(r => r.label))]
  }, [ddjjReporte])

  const itemsDisponibles = useMemo(() => {
    if (!Array.isArray(ddjjReporte) || ddjjReporte.length === 0) return []

    return DDJJ_ITEMS_REPORTE.filter(item =>
      ddjjReporte.some(r => r[item.key] !== null && r[item.key] !== undefined)
    )
  }, [ddjjReporte])


  /** SANEAR ITEMREPORTE PARA FILTRO CHECKBOX **/
  const itemsReporteValidos = useMemo(() => {
    return itemsReporte.filter(i =>
      itemsDisponibles.some(d => d.key === i)
    )
  }, [itemsReporte, itemsDisponibles])


  const puedeMostrarReporte = useMemo(() => (
    zafraReportes.length > 0 &&
    ingeniosReporte.length > 0 &&
    quincenasReporte.length > 0 &&
    itemsReporte.length > 0
  ), [
    zafraReportes,
    ingeniosReporte,
    quincenasReporte,
    itemsReporte
  ])

  const quincenasSeleccionadas = useMemo(() => {
    return quincenasReporte
      .map(label => {
        const parsed = parseQuincenaLabel(label)
        if (!parsed) return null
        return {
          month: parsed.month,
          quincena: parsed.quincena
        }
      })
      .filter(Boolean)
  }, [quincenasReporte])


  const ddjjReporteFilter = useMemo(() => {
    if (!ddjjReporte) return []
    if (!puedeMostrarReporte) return []

    let filtered = [...ddjjReporte]

    filtered = filtered.filter(r =>
      zafraReportes.includes(r.anioZafra)
    )

    filtered = filtered.filter(r =>
      ingeniosReporte.includes(r.ingenioNombre)
    )

    filtered = filtered.filter(ddjj => {
      const desde = getMesYQuincena(ddjj.fechaDesde)
      const hasta = getMesYQuincena(ddjj.fechaHasta)

      return quincenasSeleccionadas.some(q =>
        (desde.month === q.month && desde.quincena === q.quincena) ||
        (hasta.month === q.month && hasta.quincena === q.quincena)
      )
    })

    filtered = filtered.filter(r =>
      tieneItemSeleccionado(r, itemsReporte)
    )
    return filtered
  }, [
    ddjjReporte,
    zafraReportes,
    ingeniosReporte,
    quincenasReporte,
    itemsReporte,
    puedeMostrarReporte
  ])

  const filtrosReporte = useMemo(() => ({
    zafras: zafraReportes,
    ingenios: ingeniosReporte,
    quincenas: quincenasReporte,
    items: itemsReporte
  }), [
    zafraReportes,
    ingeniosReporte,
    quincenasReporte,
    itemsReporte
  ])



  const exportarReporteDinamico = async () => {
    try {
      setLoadingDownloadDynamicReport(true)
      const date = new Date()
      const dateFormatted = moment(date).format("DD-MM-YYYY")
      const titulo = `${dateFormatted} - Reporte DDJJ`
      const dataSend = [{
        dataDDJJ: ddjjReporteFilter,
        usuario: dataUserRegister,
        anioZafra: zafraReportes,
        titulo,
        dateFormatted,
        filtros: filtrosReporte
      }]
      const res = await apiExportExcel("POST", 'declaracionJurada/descargarReporte', dataSend)
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${dateFormatted} - Reporte DDJJ`; // Nombre del archivo
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
        message.success("Descarga realizada correctamente", 5);
        window.location.reload();
      } else {
        toast.error(`Error al descargar el archivo: ${res?.data?.response?.data?.error || 'Error desconocido'}`)
      }

    } catch (error) {
      toast.error(`Error al descargar el archivo: ${error?.data?.response?.data?.error || 'Error desconocido'}`)
    } finally {
      setLoadingDownloadDynamicReport(false);
    }


  }
  /*****************************************************************************************************/
  return (
    <Container fluid>
      {banderaDataNull && (
        <MsgError
          text1='Estamos procesando la información.'
          text2='Intente de nuevo.'
        />
      )}
      <TitlePage
        titlePage="Declaraciones juradas"
        btnOnClick={true}
        titleBtnOnClick="Actualizar DDJJ"
        functionOnClick={actualizarDDJJ}
        lastUpdated={lastUpdated}
        type='ddjj'
      />
      <hr className="mx-3 mt-1" />
      {!ddjjInformacion || ddjjInformacion === null ? (
        errorServer && msgErrorServer ? (
          <MsgError
            text1="Error en el servidor."
            text2={msgErrorServer}
          />
        ) : (
          <div className="d-flex justify-content-center align-items-center text-center">
            <Spinn type="data" />
          </div>
        )
      ) : (
        <>
          <Filtros
            bandTitlePrincipal={true} // HABILITA TITULO PRINCIPAL
            bandFilterDDJJ={true} // HABILITA A MOSTRAR FILTROS DE DDJJ
            bandFilterZafraAnio={true} // FILTRO GENERAL

            /** ESTADOS **/
            fechaDesdeInformacion={quincenaDesdeInformacion}
            fechaHastaInformacion={quincenaHastaInformacion}
            setFechaDesdeInformacion={setQuincenaDesdeInformacion}
            setFechaHastaInformacion={setQuincenaHastaInformacion}
            setEstadoDDJJInformacion={setEstadoDDJJInformacion}

            dataZafra={zafraInformacion} // ESTADO DE ANIO ZAFRA. VALOR POR DEFECTO
            estadoDDJJInformacion={estadoDDJJInformacion} // STATE DE ESTADO DE DDJJ. VALOR POR DEFECTO
            setDataZafra={setZafraInformacion}
            quincenasOptions={quincenasOptions}
            quincenasHastaOptions={quincenasHastaOptions}

            zafraOpcionTodos={false}
          />
          <DdjjComponent
            anioZafra={zafraInformacion}
            fechaDesdeInformacion={fechaDesdeInformacion}
            fechaHastaInformacion={fechaHastaInformacion}
            ddjjInformacion={ddjjInformacion}
            ddjjInformacionFilter={ddjjInformacionFilter}
            ddjjInformacionParseada={ddjjInformacionParseada}
            estadoDDJJInformacion={estadoDDJJInformacion}
            setDdjjInformacionParseada={setDdjjInformacionParseada}
          />

          {estadoDDJJInformacion === "Aprobado" && (
            <BtnDescargar
              enabled={!!zafraInformacion && !!ddjjInformacionFilter}
              loading={loadingDownloadReport}
              processing={!ddjjInformacionFilter}
              onClick={exportarDDJJInformes}
              text="Descargar informe"
            />
          )}

          {/* REPORTE DINAMICO  */}
          <hr className="mx-3 mt-4" />

          <FiltrosReporteDDJJ
            zafras={zafrasDisponibles}
            ingenios={ingeniosDisponibles}
            quincenas={quincenasDisponibles}
            items={itemsDisponibles}

            zafraReportes={zafraReportes}
            setZafraReportes={setZafraReportes}

            ingeniosReporte={ingeniosReporte}
            setIngeniosReporte={setIngeniosReporte}

            quincenasReporte={quincenasReporte}
            setQuincenasReporte={setQuincenasReporte}

            itemsReporte={itemsReporte}
            setItemsReporte={setItemsReporte}
            itemsReporteValidos={itemsReporteValidos}
          />

          {!puedeMostrarReporte ? (
            <p className='px-4'>Debe seleccionar los filtros.</p>
          ) : (

            <DdjjReporteComponent
              data={ddjjReporteFilter}
              filtros={filtrosReporte}
            />
          )}

          <BtnDescargar
            enabled={puedeMostrarReporte && ddjjReporteFilter.length > 0}
            loading={loadingDownloadDynamicReport}
            processing={!ddjjReporteFilter}
            onClick={exportarReporteDinamico}
            text="Descargar reporte"
          />
        </>
      )

      }
      {loadingUpdated && (
        <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </Container>
  )
}

export default DDJJContainer