import { Container } from "react-bootstrap"
import TitlePage from "../../components/TitlePages"
import { useEffect, useState } from "react"
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra"
import Spinn from "../../components/Spinner"
import { obtenerPeriodos } from "../ParteDiario/hooks/ObtenerPeriodos"
import { filtrarRegistrosPorPeriodos } from "../ParteDiario/hooks/RegistrosPorPeriodo"
import { getParteDiariosNorte } from "../../utils/queryAPI/ParteDiariosNorte"
import { getParteDiarios } from "../../utils/queryAPI/parteDiarios"
import { Tabs } from "antd"
import { itemsRportes } from "./ItemsGraficas"
import { procesarTodosLosIngenios } from "../../utils/hooks/procesarIngeniosHooks"
import { getAnios } from "../../utils/queryAPI/anios"

const GraficasDataContainer = ({ tokenAuth, dataUserRegister, routeAPI }) => {
  /** Filtros tab 1 **/
  const [ingenio, setIngenio] = useState(undefined)
  const [anioZafra, setAnioZafra] = useState(null)
  const [datePeriodoEnd, setDatePeriodoEnd] = useState(undefined)
  const [datePeriodoStart, setDatePeriodoStart] = useState(undefined)

  /** Filtros tabs 2 */
  const [anioStart, setAnioStart] = useState(undefined)
  const [anioEnd, setAnioEnd] = useState(undefined)
  const [itemsComaprativosZafra, setItemsComaprativosZafra] = useState(['CMB'])

  /** Filtros tab 1 y 2**/
  const [region, setRegion] = useState(undefined)

  /** state para guardar los periodos tab 1 */
  const [periodosZafra, setPeriodosZafra] = useState(undefined)

  /** State para guardar todos los partes diarios del norte y tucuman (tab 1 y 2) */
  const [dataParteDiarios, setDataParteDiarios] = useState([]);
  const [dataParteDiariosNorte, setDataParteDiariosNorte] = useState([]);

  /**State de datos de tucuman para graficas (tab 1) **/
  const [dataZafraGrafica, setDataZafraGrafica] = useState(undefined)
  const [dataDestilacionGrafica, setDataDestilacionGrafica] = useState(undefined)
  const [dataAnhidroGrafica, setDataAnhidroGrafica] = useState(undefined)
  const [dataZafraGraficaFilter, setDataZafraGraficaFilter] = useState(undefined)
  const [dataDestilacionGraficaFilter, setDataDestilacionGraficaFilter] = useState(undefined)
  const [dataAnhidroGraficaFilter, setDataAnhidroGraficaFilter] = useState(undefined)

  /**State de datos del norte para graficas (tab 1) **/
  const [dataZafraGraficaNorte, setDataZafraGraficaNorte] = useState(undefined)
  const [dataDestilacionGraficaNorte, setDataDestilacionGraficaNorte] = useState(undefined)
  const [dataAnhidroGraficaNorte, setDataAnhidroGraficaNorte] = useState(undefined)
  const [dataZafraGraficaNorteFilter, setDataZafraGraficaNorteFilter] = useState(undefined)
  const [dataDestilacionGraficaNorteFilter, setDataDestilacionGraficaNorteFilter] = useState(undefined)
  const [dataAnhidroGraficaNorteFilter, setDataAnhidroGraficaNorteFilter] = useState(undefined)

  /** State para periodos de anios (tab 2) **/
  const [periodosAnioStart, setPeriodosAnioStart] = useState(undefined)
  const [periodosAnioEnd, setPeriodosAnioEnd] = useState(undefined)

  /** State de datos para comparativos tucuman (tab 2) **/
  const [dataAnioStartZafraTucuman, setDataAnioStartZafraTucuman] = useState(undefined)
  const [dataAnioStartDestileriaTucuman, setDataAnioStartDestileriaTucuman] = useState(undefined)
  const [dataAnioStartAnhidroTucuman, setDataAnioStartAnhidroTucuman] = useState(undefined)
  const [dataAnioEndZafraTucuman, setDataAnioEndZafraTucuman] = useState(undefined)
  const [dataAnioEndDestileriaTucuman, setDataAnioEndDestileriaTucuman] = useState(undefined)
  const [dataAnioEndAnhidroTucuman, setDataAnioEndAnhidroTucuman] = useState(undefined)

  /** State de datos para comparativos norte (tab 2) **/
  const [dataAnioStartZafraNorte, setDataAnioStartZafraNorte] = useState(undefined)
  const [dataAnioStartDestileriaNorte, setDataAnioStartDestileriaNorte] = useState(undefined)
  const [dataAnioStartAnhidroNorte, setDataAnioStartAnhidroNorte] = useState(undefined)
  const [dataAnioEndZafraNorte, setDataAnioEndZafraNorte] = useState(undefined)
  const [dataAnioEndDestileriaNorte, setDataAnioEndDestileriaNorte] = useState(undefined)
  const [dataAnioEndAnhidroNorte, setDataAnioEndAnhidroNorte] = useState(undefined)



  /*** PARTES DIARIOS DB - TUCUMAN Y NORTE ***/
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


  /*** PERIODOS Y DATOS POR ZAFRA ELEGIDA ***/
  useEffect(() => {
    periodosPorZafra()
  }, [anioZafra])

  /** POR DEFECTO ANIO ACTUAL **/
  useEffect(() => {
    fetchAnioZafra()
  }, [])
  const fetchAnioZafra = async () => {
    const aniosData = await getAnios()
    setAnioZafra(aniosData[0].anio_zafra)
  }


  /********************************************************* TABS 1 *******************************************************/
  const periodosPorZafra = async () => {
    if (!anioZafra) return; // evitar consulta sin año definido
    const params = { anio: anioZafra };
    const data = await getPeriodoZafra(params);
    setPeriodosZafra(data);
  }


  /** FILTRA PERIODO Y DATOS EN PERIODO ELEGIDO POR ANIO **/
  useEffect(() => {
    if (dataParteDiarios && periodosZafra) {
      const regionId = typeof region === 'string' && region !== 'Todos' ? parseInt(region) : region;

      // Si no hay región seleccionada o es 'Todos', mostrar ambas regiones
      const mostrarTucuman = !region || region === 'Todos' || regionId === 1;
      const mostrarNorte = !region || region === 'Todos' || regionId === 2;

      /** TUCUMAN **/
      if (mostrarTucuman) {
        const periodoActualTucuman = obtenerPeriodos(periodosZafra, 1)
        const { dataZafra1, dataDestileria1, dataAnhidro1 } =
          filtrarRegistrosPorPeriodos(periodoActualTucuman, dataParteDiarios, new Date())
        setDataZafraGrafica(dataZafra1)
        setDataDestilacionGrafica(dataDestileria1)
        setDataAnhidroGrafica(dataAnhidro1)

        setDataZafraGraficaFilter(dataZafra1)
        setDataDestilacionGraficaFilter(dataDestileria1)
        setDataAnhidroGraficaFilter(dataAnhidro1)

        const resultado = procesarTodosLosIngenios(
          periodosZafra,
          dataZafra1,
          dataDestileria1,
          dataAnhidro1,
          1
        )
      } else {
        setDataZafraGraficaFilter(undefined)
        setDataDestilacionGraficaFilter(undefined)
        setDataAnhidroGraficaFilter(undefined)
      }

      /** NORTE **/
      if (mostrarNorte) {
        const periodosActualNorte = obtenerPeriodos(periodosZafra, 2)
        const { dataZafra1, dataDestileria1, dataAnhidro1 } =
          filtrarRegistrosPorPeriodos(periodosActualNorte, dataParteDiariosNorte, new Date())

        setDataZafraGraficaNorte(dataZafra1)
        setDataDestilacionGraficaNorte(dataDestileria1)
        setDataAnhidroGraficaNorte(dataAnhidro1)

        setDataZafraGraficaNorteFilter(dataZafra1)
        setDataDestilacionGraficaNorteFilter(dataDestileria1)
        setDataAnhidroGraficaNorteFilter(dataAnhidro1)
      } else {
        setDataZafraGraficaNorteFilter(undefined)
        setDataDestilacionGraficaNorteFilter(undefined)
        setDataAnhidroGraficaNorteFilter(undefined)
      }

    }
  }, [periodosZafra, dataParteDiarios, region])

  const normalize = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  /** FILTRA POR INGENIO / FECHAS (TAB 1) **/
  useEffect(() => {
    const regionId = typeof region === 'string' && region !== 'Todos' ? parseInt(region) : region;
    const mostrarTucuman = !region || region === 'Todos' || regionId === 1;
    const mostrarNorte = !region || region === 'Todos' || regionId === 2;

    const aplicarFiltros = (zafraData, destData, anhidroData) => {
      if (!Array.isArray(zafraData) || !Array.isArray(destData) || !Array.isArray(anhidroData)) {
        return {
          zafra: undefined,
          destilacion: undefined,
          anhidro: undefined
        };
      }

      let zafraFiltered = [...zafraData];
      let destilacionFiltered = [...destData];
      let anhidroFiltered = [...anhidroData];

      if (ingenio && periodosZafra) {
        const periodoIngenioSeleccionado = periodosZafra.filter(
          (d) => normalize(d.nombre_ingenio) === normalize(ingenio)
        );

        if (periodoIngenioSeleccionado.length) {
          const inicioZafra = new Date(periodoIngenioSeleccionado[0].inicio_zafra);
          const finZafra = periodoIngenioSeleccionado[0].fin_zafra
            ? new Date(periodoIngenioSeleccionado[0].fin_zafra) >= periodoIngenioSeleccionado[0].fin_datos_zafra
              ? new Date(periodoIngenioSeleccionado[0].fin_zafra)
              : new Date(periodoIngenioSeleccionado[0].fin_datos_zafra)
            : new Date();

          const inicioDestileria = new Date(periodoIngenioSeleccionado[0].inicio_destileria);
          const finDestileria = periodoIngenioSeleccionado[0].fin_destileria
            ? new Date(periodoIngenioSeleccionado[0].fin_destileria)
            : new Date();

          const inicioAnhidro = new Date(periodoIngenioSeleccionado[0].inicio_anhidro);
          const finAnhidro = periodoIngenioSeleccionado[0].fin_anhidro
            ? new Date(periodoIngenioSeleccionado[0].fin_anhidro)
            : new Date();

          const filtrarPorIngenioYPeriodo = (arr, inicio, fin) =>
            arr.filter((item) => {
              const registroFecha = new Date(item.fechaParte);
              return (
                normalize(item.ingenioNombre) === normalize(ingenio) &&
                registroFecha >= inicio &&
                registroFecha <= fin
              );
            });

          zafraFiltered = filtrarPorIngenioYPeriodo(zafraFiltered, inicioZafra, finZafra);
          destilacionFiltered = filtrarPorIngenioYPeriodo(destilacionFiltered, inicioDestileria, finDestileria);
          anhidroFiltered = filtrarPorIngenioYPeriodo(anhidroFiltered, inicioAnhidro, finAnhidro);
        }
      }

      if (datePeriodoStart && datePeriodoEnd) {
        const start = new Date(datePeriodoStart);
        const end = new Date(datePeriodoEnd);

        const byDate = (a) => {
          const fecha = new Date(a.fechaParte);
          return fecha >= start && fecha <= end;
        };

        zafraFiltered = zafraFiltered.filter(byDate);
        destilacionFiltered = destilacionFiltered.filter(byDate);
        anhidroFiltered = anhidroFiltered.filter(byDate);
      }

      const sortByDate = (arr) =>
        [...arr].sort((a, b) => new Date(a.fechaParte) - new Date(b.fechaParte));

      return {
        zafra: sortByDate(zafraFiltered),
        destilacion: sortByDate(destilacionFiltered),
        anhidro: sortByDate(anhidroFiltered)
      };
    };

    const { zafra: zafraTucuman, destilacion: destTucuman, anhidro: anhidroTucuman } =
      mostrarTucuman
        ? aplicarFiltros(dataZafraGrafica, dataDestilacionGrafica, dataAnhidroGrafica)
        : { zafra: undefined, destilacion: undefined, anhidro: undefined };

    const { zafra: zafraNorte, destilacion: destNorte, anhidro: anhidroNorte } =
      mostrarNorte
        ? aplicarFiltros(dataZafraGraficaNorte, dataDestilacionGraficaNorte, dataAnhidroGraficaNorte)
        : { zafra: undefined, destilacion: undefined, anhidro: undefined };

    setDataZafraGraficaFilter(zafraTucuman);
    setDataDestilacionGraficaFilter(destTucuman);
    setDataAnhidroGraficaFilter(anhidroTucuman);

    setDataZafraGraficaNorteFilter(zafraNorte);
    setDataDestilacionGraficaNorteFilter(destNorte);
    setDataAnhidroGraficaNorteFilter(anhidroNorte);
  }, [
    ingenio,
    datePeriodoStart,
    datePeriodoEnd,
    dataZafraGrafica,
    dataDestilacionGrafica,
    dataAnhidroGrafica,
    dataZafraGraficaNorte,
    dataDestilacionGraficaNorte,
    dataAnhidroGraficaNorte,
    periodosZafra,
    region
  ])

  /********************************************************* TABS 2 *******************************************************/

  useEffect(() => {
    periodosZafraCadaAnio()
  }, [anioEnd])

  const periodosZafraCadaAnio = async () => {
    if (!anioStart || !anioEnd) return; // evitar consulta sin año definido
    const params1 = { anio: anioStart };
    const data1 = await getPeriodoZafra(params1);
    setPeriodosAnioStart(data1);

    const params2 = { anio: anioEnd };
    const data2 = await getPeriodoZafra(params2);
    setPeriodosAnioEnd(data2);
  }

  /** FILTRA PERIODO Y DATOS EN PERIODO ELEGIDO POR ANIO **/
  useEffect(() => {

    if (dataParteDiarios && periodosAnioStart && periodosAnioEnd) {
      // Normalizar el valor de región (puede venir como string o número)
      const regionId = typeof region === 'string' && region !== 'Todos' ? parseInt(region) : region;

      // Si no hay región seleccionada o es 'Todos', mostrar ambas regiones
      const mostrarTucuman = !region || region === 'Todos' || regionId === 1;
      const mostrarNorte = !region || region === 'Todos' || regionId === 2;

      /** TUCUMAN  **/
      if (mostrarTucuman) {
        const periodoStartTucuman = obtenerPeriodos(periodosAnioStart, 1)
        const { dataZafra1, dataDestileria1, dataAnhidro1 } =
          filtrarRegistrosPorPeriodos(periodoStartTucuman, dataParteDiarios, new Date())

        setDataAnioStartZafraTucuman(dataZafra1)
        setDataAnioStartDestileriaTucuman(dataDestileria1)
        setDataAnioStartAnhidroTucuman(dataAnhidro1)

        const periodoEndTucuman = obtenerPeriodos(periodosAnioEnd, 1)
        const { dataZafra1: dataZafra2, dataDestileria1: dataDestileria2, dataAnhidro1: dataAnhidro2 } =
          filtrarRegistrosPorPeriodos(periodoEndTucuman, dataParteDiarios, new Date())

        setDataAnioEndZafraTucuman(dataZafra2)
        setDataAnioEndDestileriaTucuman(dataDestileria2)
        setDataAnioEndAnhidroTucuman(dataAnhidro2)
      } else {
        // Limpiar datos de Tucumán si no se debe mostrar
        setDataAnioStartZafraTucuman(undefined)
        setDataAnioStartDestileriaTucuman(undefined)
        setDataAnioStartAnhidroTucuman(undefined)
        setDataAnioEndZafraTucuman(undefined)
        setDataAnioEndDestileriaTucuman(undefined)
        setDataAnioEndAnhidroTucuman(undefined)
      }

      /** NORTE **/
      if (mostrarNorte) {
        const periodoStartNorte = obtenerPeriodos(periodosAnioStart, 2)
        const { dataZafra1: dataZafra3, dataDestileria1: dataDestileria3, dataAnhidro1: dataAnhidro3 } =
          filtrarRegistrosPorPeriodos(periodoStartNorte, dataParteDiariosNorte, new Date())

        setDataAnioStartZafraNorte(dataZafra3)
        setDataAnioStartDestileriaNorte(dataDestileria3)
        setDataAnioStartAnhidroNorte(dataAnhidro3)

        const periodoEndNorte = obtenerPeriodos(periodosAnioEnd, 2)
        const { dataZafra1: dataZafra4, dataDestileria1: dataDestileria4, dataAnhidro1: dataAnhidro4 } =
          filtrarRegistrosPorPeriodos(periodoEndNorte, dataParteDiariosNorte, new Date())

        setDataAnioEndZafraNorte(dataZafra4)
        setDataAnioEndDestileriaNorte(dataDestileria4)
        setDataAnioEndAnhidroNorte(dataAnhidro4)
      } else {
        // Limpiar datos del Norte si no se debe mostrar
        setDataAnioStartZafraNorte(undefined)
        setDataAnioStartDestileriaNorte(undefined)
        setDataAnioStartAnhidroNorte(undefined)
        setDataAnioEndZafraNorte(undefined)
        setDataAnioEndDestileriaNorte(undefined)
        setDataAnioEndAnhidroNorte(undefined)
      }

    }
  }, [dataParteDiarios, periodosAnioEnd, periodosAnioStart, region])
  return (
    <Container fluid>
      <TitlePage titlePage="Gráficos" />
      <hr className="mx-3 mt-1" />
      {!periodosZafra || !dataZafraGrafica || !dataDestilacionGrafica || !dataAnhidroGrafica || !anioZafra ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Tabs
            defaultActiveKey="1"
            items={itemsRportes({
              anioZafra, // Filtro 1
              setAnioZafra, // Filtro 1
              setDatePeriodoStart, // Filtro 1
              setDatePeriodoEnd, // Filtro 1
              setIngenio, // Filtro 1
              setAnioStart, // Filtro 2
              setAnioEnd, // Filtro 2
              setItemsComaprativosZafra, // Filtro 2
              setRegion, // Filtro 1 y 2
              dataZafraGraficaFilter, // TAB 1
              dataDestilacionGraficaFilter, // TAB 1
              dataAnhidroGraficaFilter, // TAB 1
              dataZafraGraficaNorteFilter, // TAB 1
              dataDestilacionGraficaNorteFilter, // TAB 1
              dataAnhidroGraficaNorteFilter, // TAB 1
              ingenio, // TAB 1
              datePeriodoStart, // TAB 1
              datePeriodoEnd, // TAB 1
              periodosAnioStart, // TAB 2
              periodosAnioEnd, // TAB 2
              dataAnioStartZafraTucuman, // TAB 2
              dataAnioStartDestileriaTucuman, // TAB 2
              dataAnioStartAnhidroTucuman, // TAB 2
              dataAnioEndZafraTucuman, // TAB 2
              dataAnioEndDestileriaTucuman, // TAB 2
              dataAnioEndAnhidroTucuman, // TAB 2
              dataAnioStartZafraNorte, // TAB 2
              dataAnioStartDestileriaNorte, // TAB 2
              dataAnioStartAnhidroNorte, // TAB 2
              dataAnioEndZafraNorte, // TAB 2
              dataAnioEndDestileriaNorte, // TAB 2
              dataAnioEndAnhidroNorte, // TAB 2
              anioStart, // TAB 2
              anioEnd, // TAB 2
              itemsComaprativosZafra, // TAB 2
              region, // TAB 2
              dataUserRegister, // TAB 1 y 2
              routeAPI, // TAB 1 y 2
            })}
          />
        </>
      )}
    </Container>
  )
}

export default GraficasDataContainer