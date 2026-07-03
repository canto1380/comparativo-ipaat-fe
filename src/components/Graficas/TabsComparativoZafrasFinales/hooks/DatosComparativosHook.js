import {
  anhidroLeales2023,
  anhidroBellaVista2023,
  anhidroConcepcion2023,
  anhidroBellaVista2024,
  anhidroConcepcion2024,
  anhidroLeales2024,
  anhidroBellaVista2025
} from "../../../../utils/data/AnhidroSinDeclarar";

// Mapeo de items (lo mismo para todos los ingenios)
const items = [
  "CMB",
  "CMN",
  "EQUIVALENTE",
  "BLANCOTOTAL",
  "CRUDOTOTAL",
  "MELAZA",
  "ALCPRODUCIDO",
  "ALCHIDRATADO",
  "ANHIDRO",
  "BLANCO",
  "REFINADO",
  "ORGANICO",
  "FISICOTOTAL",
  "OTROS",
  "CRUDO",
  'RCMB',
  'RCMN',
  'FinAnhidro',
  'FinDestileria',
  'FinZafra'
];

// Lista de ingenios
const ingenios = [
  "aguilares",
  "bellaVista",
  "concepcion",
  "cruzAlta",
  "destBellaVista",
  "famailla",
  "laCorona",
  "laFlorida",
  "laProvidencia",
  "laTrinidad",
  "leales",
  "marapa",
  "nunorco",
  "staBarbara",
  "staRosa",
  "laEsperanza",
  "ledesma",
  "rioGrande",
  "sanIsidro",
  "seaboard",
];

let dataZafraTucuman = {
  aguilaresInicioZafra: null,
  aguilaresFinZafra: null,
  aguilaresFinDatosZafra: null,
  bellaVistaInicioZafra: null,
  bellaVistaFinZafra: null,
  bellaVistaFinDatosZafra: null,
  concepcionInicioZafra: null,
  concepcionFinZafra: null,
  concepcionFinDatosZafra: null,
  cruzAltaInicioZafra: null,
  cruzAltaFinZafra: null,
  cruzAltaFinDatosZafra: null,
  famaillaInicioZafra: null,
  famaillaFinZafra: null,
  famaillaFinDatosZafra: null,
  laCoronaInicioZafra: null,
  laCoronaFinZafra: null,
  laCoronaFinDatosZafra: null,
  laFloridaInicioZafra: null,
  laFloridaFinZafra: null,
  laFloridaFinDatosZafra: null,
  laProvidenciaInicioZafra: null,
  laProvidenciaFinZafra: null,
  laProvidenciaFinDatosZafra: null,
  laTrinidadInicioZafra: null,
  laTrinidadFinZafra: null,
  laTrinidadFinDatosZafra: null,
  lealesInicioZafra: null,
  lealesFinZafra: null,
  lealesFinDatosZafra: null,
  marapaInicioZafra: null,
  marapaFinZafra: null,
  marapaFinDatosZafra: null,
  nunorcoInicioZafra: null,
  nunorcoFinZafra: null,
  nunorcoFinDatosZafra: null,
  staBarbaraInicioZafra: null,
  staBarbaraFinZafra: null,
  staBarbaraFinDatosZafra: null,
  staRosaInicioZafra: null,
  staRosaFinZafra: null,
  staRosaFinDatosZafra: null,
  sanJuanInicioZafra: null,
  sanJuanFinZafra: null,
  sanJuanFinDatosZafra: null,
};
let dataZafraTucumanEnd = {
  aguilaresInicioZafraEnd: null,
  aguilaresFinZafraEnd: null,
  aguilaresFinDatosZafraEnd: null,
  bellaVistaInicioZafraEnd: null,
  bellaVistaFinZafraEnd: null,
  bellaVistaFinDatosZafraEnd: null,
  concepcionInicioZafraEnd: null,
  concepcionFinZafraEnd: null,
  concepcionFinDatosZafraEnd: null,
  cruzAltaInicioZafraEnd: null,
  cruzAltaFinZafraEnd: null,
  cruzAltaFinDatosZafraEnd: null,
  famaillaInicioZafraEnd: null,
  famaillaFinZafraEnd: null,
  famaillaFinDatosZafraEnd: null,
  laCoronaInicioZafraEnd: null,
  laCoronaFinZafraEnd: null,
  laCoronaFinDatosZafraEnd: null,
  laFloridaInicioZafraEnd: null,
  laFloridaFinZafraEnd: null,
  laFloridaFinDatosZafraEnd: null,
  laProvidenciaInicioZafraEnd: null,
  laProvidenciaFinZafraEnd: null,
  laProvidenciaFinDatosZafraEnd: null,
  laTrinidadInicioZafraEnd: null,
  laTrinidadFinZafraEnd: null,
  laTrinidadFinDatosZafraEnd: null,
  lealesInicioZafraEnd: null,
  lealesFinZafraEnd: null,
  lealesFinDatosZafraEnd: null,
  marapaInicioZafraEnd: null,
  marapaFinZafraEnd: null,
  marapaFinDatosZafraEnd: null,
  nunorcoInicioZafraEnd: null,
  nunorcoFinZafraEnd: null,
  nunorcoFinDatosZafraEnd: null,
  staBarbaraInicioZafraEnd: null,
  staBarbaraFinZafraEnd: null,
  staBarbaraFinDatosZafraEnd: null,
  staRosaInicioZafraEnd: null,
  staRosaFinZafraEnd: null,
  staRosaFinDatosZafraEnd: null,
  sanJuanInicioZafraEnd: null,
  sanJuanFinZafraEnd: null,
  sanJuanFinDatosZafraEnd: null,
};
let dataZafraNorte = {
  laEsperanzaInicioZafra: null,
  laEsperanzaFinZafra: null,
  laEsperanzaFinDatosZafra: null,
  ledesmaInicioZafra: null,
  ledesmaFinZafra: null,
  ledesmaFinDatosZafra: null,
  rioGrandeInicioZafra: null,
  rioGrandeFinZafra: null,
  rioGrandeFinDatosZafra: null,
  sanIsidroInicioZafra: null,
  sanIsidroFinZafra: null,
  sanIsidroFinDatosZafra: null,
  seaboardInicioZafra: null,
  seaboardFinZafra: null,
  seaboardFinDatosZafra: null,
};
let dataZafraNorteEnd = {
  laEsperanzaInicioZafraEnd: null,
  laEsperanzaFinZafraEnd: null,
  laEsperanzaFinDatosZafraEnd: null,
  ledesmaInicioZafraEnd: null,
  ledesmaFinZafraEnd: null,
  ledesmaFinDatosZafraEnd: null,
  rioGrandeInicioZafraEnd: null,
  rioGrandeFinZafraEnd: null,
  rioGrandeFinDatosZafraEnd: null,
  sanIsidroInicioZafraEnd: null,
  sanIsidroFinZafraEnd: null,
  sanIsidroFinDatosZafraEnd: null,
  seaboardInicioZafraEnd: null,
  seaboardFinZafraEnd: null,
  seaboardFinDatosZafraEnd: null,
};

let dataDestileriaTucuman = {
  aguilaresInicioDestileria: null,
  aguilaresFinDestileria: null,
  bellaVistaInicioDestileria: null,
  bellaVistaFinDestileria: null,
  concepcionInicioDestileria: null,
  concepcionFinDestileria: null,
  cruzAltaInicioDestileria: null,
  cruzAltaFinDestileria: null,
  destBellaVistaInicioDestileria: null,
  destBellaVistaFinDestileria: null,
  famaillaInicioDestileria: null,
  famaillaFinDestileria: null,
  laCoronaInicioDestileria: null,
  laCoronaFinDestileria: null,
  laFloridaInicioDestileria: null,
  laFloridaFinDestileria: null,
  laProvidenciaInicioDestileria: null,
  laProvidenciaFinDestileria: null,
  laTrinidadInicioDestileria: null,
  laTrinidadFinDestileria: null,
  lealesInicioDestileria: null,
  lealesFinDestileria: null,
  marapaInicioDestileria: null,
  marapaFinDestileria: null,
  nunorcoInicioDestileria: null,
  nunorcoFinDestileria: null,
  staBarbaraInicioDestileria: null,
  staBarbaraFinDestileria: null,
  staRosaInicioDestileria: null,
  staRosaFinDestileria: null,
  sanJuanInicioDestileria: null,
  sanJuanFinDestileria: null,
};
let dataDestileriaTucumanEnd = {
  aguilaresInicioDestileriaEnd: null,
  aguilaresFinDestileriaEnd: null,
  bellaVistaInicioDestileriaEnd: null,
  bellaVistaFinDestileriaEnd: null,
  concepcionInicioDestileriaEnd: null,
  concepcionFinDestileriaEnd: null,
  cruzAltaInicioDestileriaEnd: null,
  cruzAltaFinDestileriaEnd: null,
  destBellaVistaInicioDestileriaEnd: null,
  destBellaVistaFinDestileriaEnd: null,
  famaillaInicioDestileriaEnd: null,
  famaillaFinDestileriaEnd: null,
  laCoronaInicioDestileriaEnd: null,
  laCoronaFinDestileriaEnd: null,
  laFloridaInicioDestileriaEnd: null,
  laFloridaFinDestileriaEnd: null,
  laProvidenciaInicioDestileriaEnd: null,
  laProvidenciaFinDestileriaEnd: null,
  laTrinidadInicioDestileriaEnd: null,
  laTrinidadFinDestileriaEnd: null,
  lealesInicioDestileriaEnd: null,
  lealesFinDestileriaEnd: null,
  marapaInicioDestileriaEnd: null,
  marapaFinDestileriaEnd: null,
  nunorcoInicioDestileriaEnd: null,
  nunorcoFinDestileriaEnd: null,
  staBarbaraInicioDestileriaEnd: null,
  staBarbaraFinDestileriaEnd: null,
  staRosaInicioDestileriaEnd: null,
  staRosaFinDestileriaEnd: null,
  sanJuanInicioDestileriaEnd: null,
  sanJuanFinDestileriaEnd: null,
};
let dataDestileriaNorte = {
  sanIsidroInicioDestileria: null,
  sanIsidroFinDestileria: null,
  seaboardInicioDestileria: null,
  seaboardFinDestileria: null,
  ledesmaInicioDestileria: null,
  ledesmaFinDestileria: null,
  rioGrandeInicioDestileria: null,
  rioGrandeFinDestileria: null,
  laEsperanzaInicioDestileria: null,
  laEsperanzaFinDestileria: null,
};
let dataDestileriaNorteEnd = {
  sanIsidroInicioDestileriaEnd: null,
  sanIsidroFinDestileriaEnd: null,
  seaboardInicioDestileriaEnd: null,
  seaboardFinDestileriaEnd: null,
  ledesmaInicioDestileriaEnd: null,
  ledesmaFinDestileriaEnd: null,
  rioGrandeInicioDestileriaEnd: null,
  rioGrandeFinDestileriaEnd: null,
  laEsperanzaInicioDestileriaEnd: null,
  laEsperanzaFinDestileriaEnd: null,
};

let dataAnhidroTucuman = {
  aguilaresInicioAnhidro: null,
  aguilaresFinAnhidro: null,
  bellaVistaInicioAnhidro: null,
  bellaVistaFinAnhidro: null,
  cruzAltaInicioAnhidro: null,
  cruzAltaFinAnhidro: null,
  laFloridaInicioAnhidro: null,
  laFloridaFinAnhidro: null,
  concepcionInicioAnhidro: null,
  concepcionFinAnhidro: null,
  marapaInicioAnhidro: null,
  marapaFinAnhidro: null,
  destBellaVistInicioAnhidro: null,
  destBellaVistaFinAnhidro: null,
  famaillaInicioAnhidro: null,
  famaillaFinAnhidro: null,
  laCoronaInicioAnhidro: null,
  laCoronaFinAnhidro: null,
  laProvidenciaInicioAnhidro: null,
  laProvidenciaFinAnhidro: null,
  laTrinidadInicioAnhidro: null,
  laTrinidadFinAnhidro: null,
  lealesInicioAnhidro: null,
  lealesFinAnhidro: null,
  nunorcoInicioAnhidro: null,
  nunorcoFinAnhidro: null,
  staBarbaraInicioAnhidro: null,
  staBarbaraFinAnhidro: null,
  staRosaInicioAnhidro: null,
  staRosaFinAnhidro: null,
  sanJuanInicioAnhidro: null,
  sanJuanFinAnhidro: null,
};
let dataAnhidroTucumanEnd = {
  aguilaresInicioAnhidroEnd: null,
  aguilaresFinAnhidroEnd: null,
  cruzAltaInicioAnhidroEnd: null,
  cruzAltaFinAnhidroEnd: null,
  laFloridaInicioAnhidroEnd: null,
  laFloridaFinAnhidroEnd: null,
  concepcionInicioAnhidroEnd: null,
  concepcionFinAnhidroEnd: null,
  marapaInicioAnhidroEnd: null,
  marapaFinAnhidroEnd: null,
  bellaVistaInicioAnhidroEnd: null,
  bellaVistaFinAnhidroEnd: null,
  famaillaInicioAnhidroEnd: null,
  famaillaFinAnhidroEnd: null,
  laCoronaInicioAnhidroEnd: null,
  laCoronaFinAnhidroEnd: null,
  LaProvidenciaInicioAnhidroEnd: null,
  LaProvidenciaFinAnhidroEnd: null,
  laTrinidadInicioAnhidroEnd: null,
  laTrinidadFinAnhidroEnd: null,
  lealesInicioAnhidroEnd: null,
  lealesFinAnhidroEnd: null,
  nunorcoInicioAnhidroEnd: null,
  nunorcoFinAnhidroEnd: null,
  staBarbaraInicioAnhidroEnd: null,
  staBarbaraFinAnhidroEnd: null,
  staRosaInicioAnhidroEnd: null,
  staRosaFinAnhidroEnd: null,
  sanJuanInicioAnhidroEnd: null,
  sanJuanFinAnhidroEnd: null,
  destBellaVistaInicioAnhidroEnd: null,
  destBellaVistaFinAnhidroEnd: null
};
let dataAnhidroNorte = {
  sanIsidroInicioAnhidro: null,
  sanIsidroFinAnhidro: null,
  seaboardInicioAnhidro: null,
  seaboardFinAnhidro: null,
  ledesmaInicioAnhidro: null,
  ledesmaFinAnhidro: null,
  rioGrandeInicioAnhidro: null,
  rioGrandeFinAnhidro: null,
  laEsperanzaInicioAnhidro: null,
  laEsperanzaFinAnhidro: null,
};
let dataAnhidroNorteEnd = {
  sanIsidroInicioAnhidroEnd: null,
  sanIsidroFinAnhidroEnd: null,
  seaboardInicioAnhidroEnd: null,
  seaboardFinAnhidroEnd: null,
  ledesmaInicioAnhidroEnd: null,
  ledesmaFinAnhidroEnd: null,
  rioGrandeInicioAnhidroEnd: null,
  rioGrandeFinAnhidroEnd: null,
  laEsperanzaInicioAnhidroEnd: null,
  laEsperanzaFinAnhidroEnd: null,
};





export const datosComparativosHook = (
  anioEnd,
  anioStart,
  periodosAnioStart,
  periodosAnioEnd,
  dataAnioStartZafraTucuman,
  dataAnioStartDestileriaTucuman,
  dataAnioStartAnhidroTucuman,
  dataAnioEndZafraTucuman,
  dataAnioEndDestileriaTucuman,
  dataAnioEndAnhidroTucuman,
  dataAnioStartZafraNorte,
  dataAnioStartDestileriaNorte,
  dataAnioStartAnhidroNorte,
  dataAnioEndZafraNorte,
  dataAnioEndDestileriaNorte,
  dataAnioEndAnhidroNorte,
  setAguilares,
  setBellavista,
  setBellavistaDestileria,
  setConcepcion,
  setCruzalta,
  setFamailla,
  setFlorida,
  setCorona,
  setProvincia,
  setTrinidad,
  setLeales,
  setMarapa,
  setNunorco,
  setSantabarbara,
  setSantarosa,
  setEsperanza,
  setLedesma,
  setRiogrande,
  setSanisidro,
  setSeaboard,

  setAguilaresComp,
  setBellavistaComp,
  setBellavistaDestileriaComp,
  setConcepcionComp,
  setCruzaltaComp,
  setFamaillaComp,
  setFloridaComp,
  setCoronaComp,
  setProvinciaComp,
  setTrinidadComp,
  setLealesComp,
  setMarapaComp,
  setNunorcoComp,
  setSantabarbaraComp,
  setSantarosaComp,
  setEsperanzaComp,
  setLedesmaComp,
  setRiograndeComp,
  setSanisidroComp,
  setSeaboardComp,

  setFechasInicioIngenios,
  setFechasAnioFinIngenios,
  setFechasInicioDestileriaIngenios,
  setFechasAnioFinDestileriaIngenios,
  setFechasInicioIngeniosNorte,
  setFechasAnioFinAnhidroIngenios,
  setFechasInicioDestileriaIngeniosNorte,
  setFechasAnioFinIngeniosNorte,
  setFechasInicioAnhidroIngenios,
  setFechasAnioFinDestileriaIngeniosNorte,
  setFechasInicioAnhidroIngeniosNorte,
  setFechasAnioFinAnhidroIngeniosNorte
) => {
  // 🔧 Generador de objetos para cada ingenio
  function generarDataIngenio(nombreIngenio) {
    const obj = {};
    for (let item of items) {
      obj[`${nombreIngenio}${item}`] = 0;
    }
    return obj;
  }

  // 🔄 Generamos todos los objetos automáticamente
  let data = {};
  let dataEnd = {}
  for (let ing of ingenios) {
    data[ing] = generarDataIngenio(ing);
    dataEnd[`${ing}End`] = generarDataIngenio(ing)
  }
  let {
    aguilares,
    bellaVista,
    concepcion,
    cruzAlta,
    destBellaVista,
    famailla,
    laCorona,
    laFlorida,
    laProvidencia,
    laTrinidad,
    leales,
    marapa,
    nunorco,
    staBarbara,
    staRosa,
    laEsperanza,
    ledesma,
    rioGrande,
    sanIsidro,
    seaboard
  } = data
  let {
    aguilaresEnd,
    bellaVistaEnd,
    concepcionEnd,
    cruzAltaEnd,
    destBellaVistaEnd,
    famaillaEnd,
    laCoronaEnd,
    laFloridaEnd,
    laProvidenciaEnd,
    laTrinidadEnd,
    lealesEnd,
    marapaEnd,
    nunorcoEnd,
    staBarbaraEnd,
    staRosaEnd,
    laEsperanzaEnd,
    ledesmaEnd,
    rioGrandeEnd,
    sanIsidroEnd,
    seaboardEnd
  } = dataEnd

  /*** FECHA DE INICIO Y FIN DE CADA INGENIOS ***/
  const aguilaresPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Aguilares"
  );
  const aguilaresPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Aguilares"
  );

  const cruzaltaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Cruz Alta"
  );
  const cruzaltaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Cruz Alta"
  );

  const floridaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "La Florida"
  );
  const floridaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "La Florida"
  );

  const concepcionPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Concepción"
  );
  const concepcionPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Concepción"
  );

  const marapaPeriodo = periodosAnioStart?.find((d) => d.nombre_ingenio === "Marapa");
  const marapaPeriodoEnd = periodosAnioEnd?.find((d) => d.nombre_ingenio === "Marapa");

  const bellaVistaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Bella Vista"
  );
  const bellaVistaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Bella Vista"
  );

  const famaillaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Famaillá"
  );
  const famaillaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Famaillá"
  );

  const coronaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "La Corona"
  );
  const coronaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "La Corona"
  );

  const providenciaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "La Providencia"
  );
  const providenciaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "La Providencia"
  );

  const trinidadPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "La Trinidad"
  );
  const trinidadPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "La Trinidad"
  );

  const lealesPeriodo = periodosAnioStart?.find((d) => d.nombre_ingenio === "Leales");
  const lealesPeriodoEnd = periodosAnioEnd?.find((d) => d.nombre_ingenio === "Leales");

  const nunorcoPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Ñuñorco"
  );
  const nunorcoPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Ñuñorco"
  );

  const stabarbaraPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Santa Bárbara"
  );
  const stabarbaraPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Santa Bárbara"
  );

  const starosaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Santa Rosa"
  );
  const starosaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Santa Rosa"
  );

  const sanjuanPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "San Juan"
  );
  const sanjuanPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "San Juan"
  );

  const destBellaVistaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Destilería Bella Vista"
  );
  const destBellaVistaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Destilería Bella Vista"
  );

  /** NORTE **/
  const sanisidroPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "San Isidro"
  );
  const sanisidroPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "San Isidro"
  );

  const seaboardPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Seaboard"
  );
  const seaboardPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Seaboard"
  );

  const ledesmaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Ledesma"
  );
  const ledesmaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Ledesma"
  );

  const riograndePeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "Río Grande"
  );
  const riograndePeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "Río Grande"
  );

  const laesperanzaPeriodo = periodosAnioStart?.find(
    (d) => d.nombre_ingenio === "La Esperanza"
  );
  const laesperanzaPeriodoEnd = periodosAnioEnd?.find(
    (d) => d.nombre_ingenio === "La Esperanza"
  );


  /** TUCUMAN **/
  dataZafraTucuman = {
    aguilaresInicioZafra: aguilaresPeriodo?.inicio_zafra,
    aguilaresFinZafra: aguilaresPeriodo?.fin_zafra,
    aguilaresFinDatosZafra: aguilaresPeriodo?.fin_datos_zafra,
    bellaVistaInicioZafra: bellaVistaPeriodo?.inicio_zafra,
    bellaVistaFinZafra: bellaVistaPeriodo?.fin_zafra,
    bellaVistaFinDatosZafra: bellaVistaPeriodo?.fin_datos_zafra,
    concepcionInicioZafra: concepcionPeriodo?.inicio_zafra,
    concepcionFinZafra: concepcionPeriodo?.fin_zafra,
    concepcionFinDatosZafra: concepcionPeriodo?.fin_datos_zafra,
    cruzAltaInicioZafra: cruzaltaPeriodo?.inicio_zafra,
    cruzAltaFinZafra: cruzaltaPeriodo?.fin_zafra,
    cruzAltaFinDatosZafra: cruzaltaPeriodo?.fin_datos_zafra,
    famaillaInicioZafra: famaillaPeriodo?.inicio_zafra,
    famaillaFinZafra: famaillaPeriodo?.fin_zafra,
    famaillaFinDatosZafra: famaillaPeriodo?.fin_datos_zafra,
    laCoronaInicioZafra: coronaPeriodo?.inicio_zafra,
    laCoronaFinZafra: coronaPeriodo?.fin_zafra,
    laCoronaFinDatosZafra: coronaPeriodo?.fin_datos_zafra,
    laFloridaInicioZafra: floridaPeriodo?.inicio_zafra,
    laFloridaFinZafra: floridaPeriodo?.fin_zafra,
    laFloridaFinDatosZafra: floridaPeriodo?.fin_datos_zafra,
    laProvidenciaInicioZafra: providenciaPeriodo?.inicio_zafra,
    laProvidenciaFinZafra: providenciaPeriodo?.fin_zafra,
    laProvidenciaFinDatosZafra: providenciaPeriodo?.fin_datos_zafra,
    laTrinidadInicioZafra: trinidadPeriodo?.inicio_zafra,
    laTrinidadFinZafra: trinidadPeriodo?.fin_zafra,
    laTrinidadFinDatosZafra: trinidadPeriodo?.fin_datos_zafra,
    lealesInicioZafra: lealesPeriodo?.inicio_zafra,
    lealesFinZafra: lealesPeriodo?.fin_zafra,
    lealesFinDatosZafra: lealesPeriodo?.fin_datos_zafra,
    marapaInicioZafra: marapaPeriodo?.inicio_zafra,
    marapaFinZafra: marapaPeriodo?.fin_zafra,
    marapaFinDatosZafra: marapaPeriodo?.fin_datos_zafra,
    nunorcoInicioZafra: nunorcoPeriodo?.inicio_zafra,
    nunorcoFinZafra: nunorcoPeriodo?.fin_zafra,
    nunorcoFinDatosZafra: nunorcoPeriodo?.fin_datos_zafra,
    staBarbaraInicioZafra: stabarbaraPeriodo?.inicio_zafra,
    staBarbaraFinZafra: stabarbaraPeriodo?.fin_zafra,
    staBarbaraFinDatosZafra: stabarbaraPeriodo?.fin_datos_zafra,
    staRosaInicioZafra: starosaPeriodo?.inicio_zafra,
    staRosaFinZafra: starosaPeriodo?.fin_zafra,
    staRosaFinDatosZafra: starosaPeriodo?.fin_datos_zafra,
    sanJuanInicioZafra: sanjuanPeriodo?.inicio_zafra,
    sanJuanFinZafra: sanjuanPeriodo?.fin_zafra,
    sanJuanFinDatosZafra: sanjuanPeriodo?.fin_datos_zafra,
  };
  dataZafraTucumanEnd = {
    aguilaresInicioZafraEnd: aguilaresPeriodoEnd?.inicio_zafra,
    aguilaresFinZafraEnd: aguilaresPeriodoEnd?.fin_zafra,
    aguilaresFinDatosZafraEnd: aguilaresPeriodoEnd?.fin_datos_zafra,
    bellaVistaInicioZafraEnd: bellaVistaPeriodoEnd?.inicio_zafra,
    bellaVistaFinZafraEnd: bellaVistaPeriodoEnd?.fin_zafra,
    bellaVistaFinDatosZafraEnd: bellaVistaPeriodoEnd?.fin_datos_zafra,
    concepcionInicioZafraEnd: concepcionPeriodoEnd?.inicio_zafra,
    concepcionFinZafraEnd: concepcionPeriodoEnd?.fin_zafra,
    concepcionFinDatosZafraEnd: concepcionPeriodoEnd?.fin_datos_zafra,
    cruzAltaInicioZafraEnd: cruzaltaPeriodoEnd?.inicio_zafra,
    cruzAltaFinZafraEnd: cruzaltaPeriodoEnd?.fin_zafra,
    cruzAltaFinDatosZafraEnd: cruzaltaPeriodoEnd?.fin_datos_zafra,
    famaillaInicioZafraEnd: famaillaPeriodoEnd?.inicio_zafra,
    famaillaFinZafraEnd: famaillaPeriodoEnd?.fin_zafra,
    famaillaFinDatosZafraEnd: famaillaPeriodoEnd?.fin_datos_zafra,
    laCoronaInicioZafraEnd: coronaPeriodoEnd?.inicio_zafra,
    laCoronaFinZafraEnd: coronaPeriodoEnd?.fin_zafra,
    laCoronaFinDatosZafraEnd: coronaPeriodoEnd?.fin_datos_zafra,
    laFloridaInicioZafraEnd: floridaPeriodoEnd?.inicio_zafra,
    laFloridaFinZafraEnd: floridaPeriodoEnd?.fin_zafra,
    laFloridaFinDatosZafraEnd: floridaPeriodoEnd?.fin_datos_zafra,
    laProvidenciaInicioZafraEnd: providenciaPeriodoEnd?.inicio_zafra,
    laProvidenciaFinZafraEnd: providenciaPeriodoEnd?.fin_zafra,
    laProvidenciaFinDatosZafraEnd: providenciaPeriodoEnd?.fin_datos_zafra,
    laTrinidadInicioZafraEnd: trinidadPeriodoEnd?.inicio_zafra,
    laTrinidadFinZafraEnd: trinidadPeriodoEnd?.fin_zafra,
    laTrinidadFinDatosZafraEnd: trinidadPeriodoEnd?.fin_datos_zafra,
    lealesInicioZafraEnd: lealesPeriodoEnd?.inicio_zafra,
    lealesFinZafraEnd: lealesPeriodoEnd?.fin_zafra,
    lealesFinDatosZafraEnd: lealesPeriodoEnd?.fin_datos_zafra,
    marapaInicioZafraEnd: marapaPeriodoEnd?.inicio_zafra,
    marapaFinZafraEnd: marapaPeriodoEnd?.fin_zafra,
    marapaFinDatosZafraEnd: marapaPeriodoEnd?.fin_datos_zafra,
    nunorcoInicioZafraEnd: nunorcoPeriodoEnd?.inicio_zafra,
    nunorcoFinZafraEnd: nunorcoPeriodoEnd?.fin_zafra,
    nunorcoFinDatosZafraEnd: nunorcoPeriodoEnd?.fin_datos_zafra,
    staBarbaraInicioZafraEnd: stabarbaraPeriodoEnd?.inicio_zafra,
    staBarbaraFinZafraEnd: stabarbaraPeriodoEnd?.fin_zafra,
    staBarbaraFinDatosZafraEnd: stabarbaraPeriodoEnd?.fin_datos_zafra,
    staRosaInicioZafraEnd: starosaPeriodoEnd?.inicio_zafra,
    staRosaFinZafraEnd: starosaPeriodoEnd?.fin_zafra,
    staRosaFinDatosZafraEnd: starosaPeriodoEnd?.fin_datos_zafra,
    sanJuanInicioZafraEnd: sanjuanPeriodoEnd?.inicio_zafra,
    sanJuanFinZafraEnd: sanjuanPeriodoEnd?.fin_zafra,
    sanJuanFinDatosZafraEnd: sanjuanPeriodoEnd?.fin_datos_zafra,
  };
  /** NORTE **/
  dataZafraNorte = {
    laEsperanzaInicioZafra: laesperanzaPeriodo?.inicio_zafra,
    laEsperanzaFinZafra: laesperanzaPeriodo?.fin_zafra,
    laEsperanzaFinDatosZafra: laesperanzaPeriodo?.fin_datos_zafra,
    ledesmaInicioZafra: ledesmaPeriodo?.inicio_zafra,
    ledesmaFinZafra: ledesmaPeriodo?.fin_zafra,
    ledesmaFinDatosZafra: ledesmaPeriodo?.fin_datos_zafra,
    rioGrandeInicioZafra: riograndePeriodo?.inicio_zafra,
    rioGrandeFinZafra: riograndePeriodo?.fin_zafra,
    rioGrandeFinDatosZafra: riograndePeriodo?.fin_datos_zafra,
    sanIsidroInicioZafra: sanisidroPeriodo?.inicio_zafra,
    sanIsidroFinZafra: sanisidroPeriodo?.fin_zafra,
    sanIsidroFinDatosZafra: sanisidroPeriodo?.fin_datos_zafra,
    seaboardInicioZafra: seaboardPeriodo?.inicio_zafra,
    seaboardFinZafra: seaboardPeriodo?.fin_zafra,
    seaboardFinDatosZafra: seaboardPeriodo?.fin_datos_zafra,
  };
  dataZafraNorteEnd = {
    laEsperanzaInicioZafraEnd: laesperanzaPeriodoEnd?.inicio_zafra,
    laEsperanzaFinZafraEnd: laesperanzaPeriodoEnd?.fin_zafra,
    laEsperanzaFinDatosZafraEnd: laesperanzaPeriodoEnd?.fin_datos_zafra,
    ledesmaInicioZafraEnd: ledesmaPeriodoEnd?.inicio_zafra,
    ledesmaFinZafraEnd: ledesmaPeriodoEnd?.fin_zafra,
    ledesmaFinDatosZafraEnd: ledesmaPeriodoEnd?.fin_datos_zafra,
    rioGrandeInicioZafraEnd: riograndePeriodoEnd?.inicio_zafra,
    rioGrandeFinZafraEnd: riograndePeriodoEnd?.fin_zafra,
    rioGrandeFinDatosZafraEnd: riograndePeriodoEnd?.fin_datos_zafra,
    sanIsidroInicioZafraEnd: sanisidroPeriodoEnd?.inicio_zafra,
    sanIsidroFinZafraEnd: sanisidroPeriodoEnd?.fin_zafra,
    sanIsidroFinDatosZafraEnd: sanisidroPeriodoEnd?.fin_datos_zafra,
    seaboardInicioZafraEnd: seaboardPeriodoEnd?.inicio_zafra,
    seaboardFinZafraEnd: seaboardPeriodoEnd?.fin_zafra,
    seaboardFinDatosZafraEnd: seaboardPeriodoEnd?.fin_datos_zafra,
  };

  /** DESTILERIA - TUCUMAN **/
  dataDestileriaTucuman = {
    aguilaresInicioDestileria: aguilaresPeriodo?.inicio_destileria,
    aguilaresFinDestileria: aguilaresPeriodo?.fin_destileria,
    bellaVistaInicioDestileria: bellaVistaPeriodo?.inicio_destileria,
    bellaVistaFinDestileria: bellaVistaPeriodo?.fin_destileria,
    concepcionInicioDestileria: concepcionPeriodo?.inicio_destileria,
    concepcionFinDestileria: concepcionPeriodo?.fin_destileria,
    cruzAltaInicioDestileria: cruzaltaPeriodo?.inicio_destileria,
    cruzAltaFinDestileria: cruzaltaPeriodo?.fin_destileria,
    destBellaVistaInicioDestileria: destBellaVistaPeriodo?.inicio_destileria,
    destBellaVistaFinDestileria: destBellaVistaPeriodo?.fin_destileria,
    famaillaInicioDestileria: famaillaPeriodo?.inicio_destileria,
    famaillaFinDestileria: famaillaPeriodo?.fin_destileria,
    laCoronaInicioDestileria: coronaPeriodo?.inicio_destileria,
    laCoronaFinDestileria: coronaPeriodo?.fin_destileria,
    laFloridaInicioDestileria: floridaPeriodo?.inicio_destileria,
    laFloridaFinDestileria: floridaPeriodo?.fin_destileria,
    laProvidenciaInicioDestileria: providenciaPeriodo?.inicio_destileria,
    laProvidenciaFinDestileria: providenciaPeriodo?.fin_destileria,
    laTrinidadInicioDestileria: trinidadPeriodo?.inicio_destileria,
    laTrinidadFinDestileria: trinidadPeriodo?.fin_destileria,
    lealesInicioDestileria: lealesPeriodo?.inicio_destileria,
    lealesFinDestileria: lealesPeriodo?.fin_destileria,
    marapaInicioDestileria: marapaPeriodo?.inicio_destileria,
    marapaFinDestileria: marapaPeriodo?.fin_destileria,
    nunorcoInicioDestileria: nunorcoPeriodo?.inicio_destileria,
    nunorcoFinDestileria: nunorcoPeriodo?.fin_destileria,
    staBarbaraInicioDestileria: stabarbaraPeriodo?.inicio_destileria,
    staBarbaraFinDestileria: stabarbaraPeriodo?.fin_destileria,
    staRosaInicioDestileria: starosaPeriodo?.inicio_destileria,
    staRosaFinDestileria: starosaPeriodo?.fin_destileria,
    sanJuanInicioDestileria: sanjuanPeriodo?.inicio_destileria,
    sanJuanFinDestileria: sanjuanPeriodo?.fin_destileria,
  };
  dataDestileriaTucumanEnd = {
    aguilaresInicioDestileriaEnd: aguilaresPeriodoEnd?.inicio_destileria,
    aguilaresFinDestileriaEnd: aguilaresPeriodoEnd?.fin_destileria,
    bellaVistaInicioDestileriaEnd: bellaVistaPeriodoEnd?.inicio_destileria,
    bellaVistaFinDestileriaEnd: bellaVistaPeriodoEnd?.fin_destileria,
    concepcionInicioDestileriaEnd: concepcionPeriodoEnd?.inicio_destileria,
    concepcionFinDestileriaEnd: concepcionPeriodoEnd?.fin_destileria,
    cruzAltaInicioDestileriaEnd: cruzaltaPeriodoEnd?.inicio_destileria,
    cruzAltaFinDestileriaEnd: cruzaltaPeriodoEnd?.fin_destileria,
    destBellaVistaInicioDestileriaEnd: destBellaVistaPeriodoEnd?.inicio_destileria,
    destBellaVistaFinDestileriaEnd: destBellaVistaPeriodoEnd?.fin_destileria,
    famaillaInicioDestileriaEnd: famaillaPeriodoEnd?.inicio_destileria,
    famaillaFinDestileriaEnd: famaillaPeriodoEnd?.fin_destileria,
    laCoronaInicioDestileriaEnd: coronaPeriodoEnd?.inicio_destileria,
    laCoronaFinDestileriaEnd: coronaPeriodoEnd?.fin_destileria,
    laFloridaInicioDestileriaEnd: floridaPeriodoEnd?.inicio_destileria,
    laFloridaFinDestileriaEnd: floridaPeriodoEnd?.fin_destileria,
    laProvidenciaInicioDestileriaEnd: providenciaPeriodoEnd?.inicio_destileria,
    laProvidenciaFinDestileriaEnd: providenciaPeriodoEnd?.fin_destileria,
    laTrinidadInicioDestileriaEnd: trinidadPeriodoEnd?.inicio_destileria,
    laTrinidadFinDestileriaEnd: trinidadPeriodoEnd?.fin_destileria,
    lealesInicioDestileriaEnd: lealesPeriodoEnd?.inicio_destileria,
    lealesFinDestileriaEnd: lealesPeriodoEnd?.fin_destileria,
    marapaInicioDestileriaEnd: marapaPeriodoEnd?.inicio_destileria,
    marapaFinDestileriaEnd: marapaPeriodoEnd?.fin_destileria,
    nunorcoInicioDestileriaEnd: nunorcoPeriodoEnd?.inicio_destileria,
    nunorcoFinDestileriaEnd: nunorcoPeriodoEnd?.fin_destileria,
    staBarbaraInicioDestileriaEnd: stabarbaraPeriodoEnd?.inicio_destileria,
    staBarbaraFinDestileriaEnd: stabarbaraPeriodoEnd?.fin_destileria,
    staRosaInicioDestileriaEnd: starosaPeriodoEnd?.inicio_destileria,
    staRosaFinDestileriaEnd: starosaPeriodoEnd?.fin_destileria,
    sanJuanInicioDestileriaEnd: sanjuanPeriodoEnd?.inicio_destileria,
    sanJuanFinDestileriaEnd: sanjuanPeriodoEnd?.fin_destileria,
  };

  /** DESTILERIA - NORTE **/
  dataDestileriaNorte = {
    laEsperanzaInicioDestileria: laesperanzaPeriodo?.inicio_destileria,
    laEsperanzaFinDestileria: laesperanzaPeriodo?.fin_destileria,
    ledesmaInicioDestileria: ledesmaPeriodo?.inicio_destileria,
    ledesmaFinDestileria: ledesmaPeriodo?.fin_destileria,
    rioGrandeInicioDestileria: riograndePeriodo?.inicio_destileria,
    rioGrandeFinDestileria: riograndePeriodo?.fin_destileria,
    seaboardInicioDestileria: seaboardPeriodo?.inicio_destileria,
    seaboardFinDestileria: seaboardPeriodo?.fin_destileria,
    sanIsidroInicioDestileria: sanisidroPeriodo?.inicio_destileria,
    sanIsidroFinDestileria: sanisidroPeriodo?.fin_destileria,
  };
  dataDestileriaNorteEnd = {
    laEsperanzaInicioDestileriaEnd: laesperanzaPeriodoEnd?.inicio_destileria,
    laEsperanzaFinDestileriaEnd: laesperanzaPeriodoEnd?.fin_destileria,
    ledesmaInicioDestileriaEnd: ledesmaPeriodoEnd?.inicio_destileria,
    ledesmaFinDestileriaEnd: ledesmaPeriodoEnd?.fin_destileria,
    rioGrandeInicioDestileriaEnd: riograndePeriodoEnd?.inicio_destileria,
    rioGrandeFinDestileriaEnd: riograndePeriodoEnd?.fin_destileria,
    seaboardInicioDestileriaEnd: seaboardPeriodoEnd?.inicio_destileria,
    seaboardFinDestileriaEnd: seaboardPeriodoEnd?.fin_destileria,
    sanIsidroInicioDestileriaEnd: sanisidroPeriodoEnd?.inicio_destileria,
    sanIsidroFinDestileriaEnd: sanisidroPeriodoEnd?.fin_destileria,
  };

  /** ANHIDRO - TUCUMAN **/
  dataAnhidroTucuman = {
    aguilaresInicioAnhidro: aguilaresPeriodo?.inicio_anhidro,
    aguilaresFinAnhidro: aguilaresPeriodo?.fin_anhidro,
    cruzAltaInicioAnhidro: cruzaltaPeriodo?.inicio_anhidro,
    cruzAltaFinAnhidro: cruzaltaPeriodo?.fin_anhidro,
    laFloridaInicioAnhidro: floridaPeriodo?.inicio_anhidro,
    laFloridaFinAnhidro: floridaPeriodo?.fin_anhidro,
    concepcionInicioAnhidro: concepcionPeriodo?.inicio_anhidro,
    concepcionFinAnhidro: concepcionPeriodo?.fin_anhidro,
    marapaInicioAnhidro: marapaPeriodo?.inicio_anhidro,
    marapaFinAnhidro: marapaPeriodo?.fin_anhidro,
    bellaVistInicioAnhidro: bellaVistaPeriodo?.inicio_anhidro,
    bellaVistaFinAnhidro: bellaVistaPeriodo?.fin_anhidro,
    famaillaInicioAnhidro: famaillaPeriodo?.inicio_anhidro,
    famaillaFinAnhidro: famaillaPeriodo?.fin_anhidro,
    laCoronaInicioAnhidro: coronaPeriodo?.inicio_anhidro,
    laCoronaFinAnhidro: coronaPeriodo?.fin_anhidro,
    laProvidenciaInicioAnhidro: providenciaPeriodo?.inicio_anhidro,
    laProvidenciaFinAnhidro: providenciaPeriodo?.fin_anhidro,
    laTrinidadInicioAnhidro: trinidadPeriodo?.inicio_anhidro,
    laTrinidadFinAnhidro: trinidadPeriodo?.fin_anhidro,
    lealesInicioAnhidro: lealesPeriodo?.inicio_anhidro,
    lealesFinAnhidro: lealesPeriodo?.fin_anhidro,
    nunorcoInicioAnhidro: nunorcoPeriodo?.inicio_anhidro,
    nunorcoFinAnhidro: nunorcoPeriodo?.fin_anhidro,
    staBarbaraInicioAnhidro: stabarbaraPeriodo?.inicio_anhidro,
    staBarbaraFinAnhidro: stabarbaraPeriodo?.fin_anhidro,
    staRosaInicioAnhidro: starosaPeriodo?.inicio_anhidro,
    staRosaFinAnhidro: starosaPeriodo?.fin_anhidro,
    sanJuanInicioAnhidro: sanjuanPeriodo?.inicio_anhidro,
    sanJuanFinAnhidro: sanjuanPeriodo?.fin_anhidro,
    desBbellaVistaAnhidroInicio: destBellaVistaPeriodo?.inicio_anhidro,
    desBbellaVistaAnhidroFin: destBellaVistaPeriodo?.fin_anhidro,
  };
  dataAnhidroTucumanEnd = {
    aguilaresInicioAnhidroEnd: aguilaresPeriodoEnd?.inicio_anhidro,
    aguilaresFinAnhidroEnd: aguilaresPeriodoEnd?.fin_anhidro,
    cruzAltaInicioAnhidroEnd: cruzaltaPeriodoEnd?.inicio_anhidro,
    cruzAltaFinAnhidroEnd: cruzaltaPeriodoEnd?.fin_anhidro,
    laFloridaInicioAnhidroEnd: floridaPeriodoEnd?.inicio_anhidro,
    laFloridaFinAnhidroEnd: floridaPeriodoEnd?.fin_anhidro,
    concepcionInicioAnhidroEnd: concepcionPeriodoEnd?.inicio_anhidro,
    concepcionFinAnhidroEnd: concepcionPeriodoEnd?.fin_anhidro,
    marapaInicioAnhidroEnd: marapaPeriodoEnd?.inicio_anhidro,
    marapaFinAnhidroEnd: marapaPeriodoEnd?.fin_anhidro,
    bellaVistaInicioAnhidroEnd: bellaVistaPeriodoEnd?.inicio_anhidro,
    bellaVistaFinAnhidroEnd: bellaVistaPeriodoEnd?.fin_anhidro,
    famaillaInicioAnhidroEnd: famaillaPeriodoEnd?.inicio_anhidro,
    famaillaFinAnhidroEnd: famaillaPeriodoEnd?.fin_anhidro,
    laCoronaInicioAnhidroEnd: coronaPeriodoEnd?.inicio_anhidro,
    laCoronaFinAnhidroEnd: coronaPeriodoEnd?.fin_anhidro,
    LaProvidenciaInicioAnhidroEnd: providenciaPeriodoEnd?.inicio_anhidro,
    LaProvidenciaFinAnhidroEnd: providenciaPeriodoEnd?.fin_anhidro,
    laTrinidadInicioAnhidroEnd: trinidadPeriodoEnd?.inicio_anhidro,
    laTrinidadFinAnhidroEnd: trinidadPeriodoEnd?.fin_anhidro,
    lealesInicioAnhidroEnd: lealesPeriodoEnd?.inicio_anhidro,
    lealesFinAnhidroEnd: lealesPeriodoEnd?.fin_anhidro,
    nunorcoInicioAnhidroEnd: nunorcoPeriodoEnd?.inicio_anhidro,
    nunorcoFinAnhidroEnd: nunorcoPeriodoEnd?.fin_anhidro,
    staBarbaraInicioAnhidroEnd: stabarbaraPeriodoEnd?.inicio_anhidro,
    staBarbaraFinAnhidroEnd: stabarbaraPeriodoEnd?.fin_anhidro,
    staRosaInicioAnhidroEnd: starosaPeriodoEnd?.inicio_anhidro,
    staRosaFinAnhidroEnd: starosaPeriodoEnd?.fin_anhidro,
    sanJuanInicioAnhidroEnd: sanjuanPeriodoEnd?.inicio_anhidro,
    sanJuanFinAnhidroEnd: sanjuanPeriodoEnd?.fin_anhidro,
    destBellaVistaInicioAnhidroEnd: destBellaVistaPeriodoEnd?.inicio_anhidro,
    destBellaVistaFinAnhidroEnd: destBellaVistaPeriodoEnd?.fin_anhidro,
  };

  /** ANHIDRO - NORTE **/
  dataAnhidroNorte = {
    laEsperanzaInicioAnhidro: laesperanzaPeriodo?.inicio_anhidro,
    laEsperanzaFinAnhidro: laesperanzaPeriodo?.fin_anhidro,
    ledesmaInicioAnhidro: ledesmaPeriodo?.inicio_anhidro,
    ledesmaFinAnhidro: ledesmaPeriodo?.fin_anhidro,
    rioGrandeInicioAnhidro: riograndePeriodo?.inicio_anhidro,
    rioGrandeFinAnhidro: riograndePeriodo?.fin_anhidro,
    seaboardInicioAnhidro: seaboardPeriodo?.inicio_anhidro,
    seaboardFinAnhidro: seaboardPeriodo?.fin_anhidro,
    sanIsidroInicioAnhidro: sanisidroPeriodo?.inicio_anhidro,
    sanIsidroFinAnhidro: sanisidroPeriodo?.fin_anhidro,
  };
  dataAnhidroNorteEnd = {
    laEsperanzaInicioAnhidroEnd: laesperanzaPeriodoEnd?.inicio_anhidro,
    laEsperanzaFinAnhidroEnd: laesperanzaPeriodoEnd?.fin_anhidro,
    ledesmaInicioAnhidroEnd: ledesmaPeriodoEnd?.inicio_anhidro,
    ledesmaFinAnhidroEnd: ledesmaPeriodoEnd?.fin_anhidro,
    rioGrandeInicioAnhidroEnd: riograndePeriodoEnd?.inicio_anhidro,
    rioGrandeFinAnhidroEnd: riograndePeriodoEnd?.fin_anhidro,
    seaboardInicioAnhidroEnd: seaboardPeriodoEnd?.inicio_anhidro,
    seaboardFinAnhidroEnd: seaboardPeriodoEnd?.fin_anhidro,
    sanIsidroInicioAnhidroEnd: sanisidroPeriodoEnd?.inicio_anhidro,
    sanIsidroFinAnhidroEnd: sanisidroPeriodoEnd?.fin_anhidro,
  };

  setFechasInicioIngenios(dataZafraTucuman);
  setFechasAnioFinIngenios(dataZafraTucumanEnd);
  setFechasInicioDestileriaIngenios(dataDestileriaTucuman);
  setFechasAnioFinDestileriaIngenios(dataDestileriaTucumanEnd);
  setFechasInicioAnhidroIngenios(dataAnhidroTucuman)
  setFechasAnioFinAnhidroIngenios(dataAnhidroTucumanEnd)
  setFechasInicioIngeniosNorte(dataZafraNorte);
  setFechasAnioFinIngeniosNorte(dataZafraNorteEnd);
  setFechasInicioDestileriaIngeniosNorte(dataDestileriaNorte);
  setFechasAnioFinDestileriaIngeniosNorte(dataDestileriaNorteEnd);
  setFechasInicioAnhidroIngeniosNorte(dataAnhidroNorte)
  setFechasAnioFinAnhidroIngeniosNorte(dataAnhidroNorteEnd)


  /** VARIABLES TUCUMAN (1-15) NORTE (16-20) **/
  // 🧩 Crear objeto contenedor
  const variables = {};
  const variablesEnd = {}

  // 🧮 Inicialización dinámica de las variables
  for (let i = 1; i <= 21; i++) {
    variables[`cmb${i}`] = 0;
    variables[`cmn${i}`] = 0;
    variables[`equivalente${i}`] = 0;
    variables[`melaza${i}`] = 0;
    variables[`producido${i}`] = 0;
    variables[`hidratado${i}`] = 0;
    variables[`anhidro${i}`] = 0;
    variables[`blanco${i}`] = 0;
    variables[`refinado${i}`] = 0;
    variables[`organico${i}`] = 0;
    variables[`otros${i}`] = 0;
    variables[`crudo${i}`] = 0;
    variables[`fisicoTotal${i}`] = 0;
  }
  for (let i = 1; i <= 21; i++) {
    variablesEnd[`cmb${i}`] = 0;
    variablesEnd[`cmn${i}`] = 0;
    variablesEnd[`equivalente${i}`] = 0;
    variablesEnd[`melaza${i}`] = 0;
    variablesEnd[`producido${i}`] = 0;
    variablesEnd[`hidratado${i}`] = 0;
    variablesEnd[`anhidro${i}`] = 0;
    variablesEnd[`blanco${i}`] = 0;
    variablesEnd[`refinado${i}`] = 0;
    variablesEnd[`organico${i}`] = 0;
    variablesEnd[`otros${i}`] = 0;
    variablesEnd[`crudo${i}`] = 0;
    variablesEnd[`fisicoTotal${i}`] = 0;
  }



  /****************************** DATOS DESTILERIA ALCOHOL ******************************/
  /********* TUCUMAN ANIO ACTUAL *********/
  dataAnioEndDestileriaTucuman?.forEach((d) => {
    if (
      d.ingenioNombre === "Aguilares" &&
      dataDestileriaTucumanEnd.aguilaresInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.aguilaresFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.aguilaresFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.aguilaresInicioDestileriaEnd)
    ) {
      variablesEnd.producido1 += d.alcoholProducido || 0;
      variablesEnd.hidratado1 += d.alcoholHidratado || 0;
      aguilaresEnd = {
        aguilaresALCPRODUCIDO: variablesEnd.producido1,
        aguilaresALCHIDRATADO: variablesEnd.hidratado1,
        aguilaresFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Bella Vista" &&
      dataDestileriaTucumanEnd.bellaVistaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.bellaVistaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.bellaVistaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.bellaVistaInicioDestileriaEnd)
    ) {

      variablesEnd.producido2 += d.alcoholProducido || 0;
      variablesEnd.hidratado2 += d.alcoholHidratado || 0;
      bellaVistaEnd = {
        bellaVistaALCPRODUCIDO: variablesEnd.producido2,
        bellaVistaALCHIDRATADO: variablesEnd.hidratado2,
        bellaVistaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Concepción" &&
      dataDestileriaTucumanEnd.concepcionInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.concepcionFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.concepcionFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.concepcionInicioDestileriaEnd)
    ) {

      variablesEnd.producido3 += d.alcoholProducido || 0;
      variablesEnd.hidratado3 += d.alcoholHidratado || 0;
      concepcionEnd = {
        concepcionALCPRODUCIDO: variablesEnd.producido3,
        concepcionALCHIDRATADO: variablesEnd.hidratado3,
        concepcionFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Cruz Alta" &&
      dataDestileriaTucumanEnd.cruzAltaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.cruzAltaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.cruzAltaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.cruzAltaInicioDestileriaEnd)
    ) {
      variablesEnd.producido4 += d.alcoholProducido || 0;
      variablesEnd.hidratado4 += d.alcoholHidratado || 0;
      cruzAltaEnd = {
        cruzAltaALCPRODUCIDO: variablesEnd.producido4,
        cruzAltaALCHIDRATADO: variablesEnd.hidratado4,
        cruzAltaFinDestileria: true,
      };
    }

    if (
      d.ingenioNombre === "Destilería Bella Vista" &&
      dataDestileriaTucumanEnd.destBellaVistaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.destBellaVistaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.destBellaVistaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.destBellaVistaInicioDestileriaEnd)
    ) {
      variablesEnd.producido5 += d.alcoholProducido || 0;
      variablesEnd.hidratado5 += d.alcoholHidratado || 0;
      destBellaVistaEnd = {
        destBellaVistaANHIDRO: variablesEnd.anhidro5 || 0,
        destBellaVistaALCPRODUCIDO: variablesEnd.producido5,
        destBellaVistaALCHIDRATADO: variablesEnd.hidratado5,
        destBellaVistaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Famaillá" &&
      dataDestileriaTucumanEnd.famaillaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.famaillaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.famaillaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.famaillaInicioDestileriaEnd)
    ) {
      variablesEnd.producido6 += d.alcoholProducido || 0;
      variablesEnd.hidratado6 += d.alcoholHidratado || 0;
      famaillaEnd = {
        famaillaALCPRODUCIDO: variablesEnd.producido6,
        famaillaALCHIDRATADO: variablesEnd.hidratado6,
        famaillaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "La Corona" &&
      dataDestileriaTucumanEnd.laCoronaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.laCoronaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.laCoronaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.laCoronaInicioDestileriaEnd)
    ) {
      variablesEnd.producido7 += d.alcoholProducido || 0;
      variablesEnd.hidratado7 += d.alcoholHidratado || 0;
      laCoronaEnd = {
        laCoronaALCPRODUCIDO: variablesEnd.producido7,
        laCoronaALCHIDRATADO: variablesEnd.hidratado7,
        laCoronaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "La Florida" &&
      dataDestileriaTucumanEnd.laFloridaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.laFloridaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.laFloridaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.laFloridaInicioDestileriaEnd)
    ) {
      variablesEnd.producido8 += d.alcoholProducido || 0;
      variablesEnd.hidratado8 += d.alcoholHidratado || 0;
      laFloridaEnd = {
        laFloridaALCPRODUCIDO: variablesEnd.producido8,
        laFloridaALCHIDRATADO: variablesEnd.hidratado8,
        laFloridaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "La Providencia" &&
      dataDestileriaTucumanEnd.laProvidenciaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.laProvidenciaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.laProvidenciaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.laProvidenciaInicioDestileriaEnd)
    ) {
      variablesEnd.producido9 += d.alcoholProducido || 0;
      variablesEnd.hidratado9 += d.alcoholHidratado || 0;
      laProvidenciaEnd = {
        laProvidenciaALCPRODUCIDO: variablesEnd.producido9,
        laProvidenciaALCHIDRATADO: variablesEnd.hidratado9,
        laProvidenciaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "La Trinidad" &&
      dataDestileriaTucumanEnd.laTrinidadInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.laTrinidadFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.laTrinidadFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.laTrinidadInicioDestileriaEnd)
    ) {
      variablesEnd.producido10 += d.alcoholProducido || 0;
      variablesEnd.hidratado10 += d.alcoholHidratado || 0;
      laTrinidadEnd = {
        laTrinidadALCPRODUCIDO: variablesEnd.producido10,
        laTrinidadALCHIDRATADO: variablesEnd.hidratado10,
        laTrinidadFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Leales" &&
      dataDestileriaTucumanEnd.lealesInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.lealesFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.lealesFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.lealesInicioDestileriaEnd)
    ) {
      variablesEnd.producido11 += d.alcoholProducido || 0;
      variablesEnd.hidratado11 += d.alcoholHidratado || 0;
      lealesEnd = {
        lealesALCPRODUCIDO: variablesEnd.producido11,
        lealesALCHIDRATADO: variablesEnd.hidratado11,
        lealesFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Marapa" &&
      dataDestileriaTucumanEnd.marapaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.marapaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.marapaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.marapaInicioDestileriaEnd)
    ) {
      variablesEnd.producido12 += d.alcoholProducido || 0;
      variablesEnd.hidratado12 += d.alcoholHidratado || 0;
      marapaEnd = {
        marapaALCPRODUCIDO: variablesEnd.producido12,
        marapaALCHIDRATADO: variablesEnd.hidratado12,
        marapaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Ñuñorco" &&
      dataDestileriaTucumanEnd.nunorcoInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.nunorcoFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.nunorcoFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.nunorcoInicioDestileriaEnd)
    ) {
      variablesEnd.producido13 += d.alcoholProducido || 0;
      variablesEnd.hidratado13 += d.alcoholHidratado || 0;
      nunorcoEnd = {
        nunorcoALCPRODUCIDO: variablesEnd.producido13,
        nunorcoALCHIDRATADO: variablesEnd.hidratado13,
        nunorcoFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Santa Barbara" &&
      dataDestileriaTucumanEnd.staBarbaraInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.staBarbaraFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.staBarbaraFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.staBarbaraInicioDestileriaEnd)
    ) {
      variablesEnd.producido14 += d.alcoholProducido || 0;
      variablesEnd.hidratado14 += d.alcoholHidratado || 0;
      staBarbaraEnd = {
        staBarbaraALCPRODUCIDO: variablesEnd.producido14,
        staBarbaraALCHIDRATADO: variablesEnd.hidratado14,
        staBarbaraFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Santa Rosa" &&
      dataDestileriaTucumanEnd.staRosaInicioDestileriaEnd &&
      dataDestileriaTucumanEnd.staRosaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucumanEnd.staRosaFinDestileriaEnd) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucumanEnd.staRosaInicioDestileriaEnd)
    ) {
      variablesEnd.producido15 += d.alcoholProducido || 0;
      variablesEnd.hidratado15 += d.alcoholHidratado || 0;
      staRosaEnd = {
        staRosaALCPRODUCIDO: variablesEnd.producido15,
        staRosaALCHIDRATADO: variablesEnd.hidratado15,
        staRosaFinDestileria: true,
      };
    }
  })
  /********* TUCUMAN ANIO COMPARATIVO *********/
  dataAnioStartDestileriaTucuman?.forEach((d) => {
    if (
      d.ingenioNombre === "Aguilares" &&
      dataDestileriaTucuman.aguilaresInicioDestileria &&
      dataDestileriaTucuman.aguilaresFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.aguilaresFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.aguilaresInicioDestileria)
    ) {
      variables.producido1 += d.alcoholProducido || 0;
      variables.hidratado1 += d.alcoholHidratado || 0;
      aguilares = {
        aguilaresALCPRODUCIDO: variables.producido1,
        aguilaresALCHIDRATADO: variables.hidratado1,
        aguilaresFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Bella Vista" &&
      dataDestileriaTucuman.bellaVistaInicioDestileria &&
      dataDestileriaTucuman.bellaVistaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.bellaVistaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.bellaVistaInicioDestileria)
    ) {

      variables.producido2 += d.alcoholProducido || 0;
      variables.hidratado2 += d.alcoholHidratado || 0;
      bellaVista = {
        bellaVistaALCPRODUCIDO: variables.producido2,
        bellaVistaALCHIDRATADO: variables.hidratado2,
        bellaVistaANHIDRO: 0,
        bellaVistaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Concepción" &&
      dataDestileriaTucuman.concepcionInicioDestileria &&
      dataDestileriaTucuman.concepcionFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.concepcionFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.concepcionInicioDestileria)
    ) {
      variables.producido3 += d.alcoholProducido || 0;
      variables.hidratado3 += d.alcoholHidratado || 0;
      concepcion = {
        concepcionALCPRODUCIDO: variables.producido3,
        concepcionALCHIDRATADO: variables.hidratado3,
        concepcionFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Cruz Alta" &&
      dataDestileriaTucuman.cruzAltaInicioDestileria &&
      dataDestileriaTucuman.cruzAltaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.cruzAltaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.cruzAltaInicioDestileria)
    ) {
      variables.producido4 += d.alcoholProducido || 0;
      variables.hidratado4 += d.alcoholHidratado || 0;
      cruzAlta = {
        cruzAltaALCPRODUCIDO: variables.producido4,
        cruzAltaALCHIDRATADO: variables.hidratado4,
        cruzAltaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Destilería Bella Vista" &&
      dataDestileriaTucuman.destBellaVistaInicioDestileria &&
      dataDestileriaTucuman.destBellaVistaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.destBellaVistaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.destBellaVistaInicioDestileria)
    ) {
      variables.producido5 += d.alcoholProducido || 0;
      variables.hidratado5 += d.alcoholHidratado || 0;
      destBellaVista = {
        destBellaVistaALCPRODUCIDO: variables.producido5,
        destBellaVistaALCHIDRATADO: variables.hidratado5,
        destBellaVistaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Famaillá" &&
      dataDestileriaTucuman.famaillaInicioDestileria &&
      dataDestileriaTucuman.famaillaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.famaillaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.famaillaInicioDestileria)
    ) {
      variables.producido6 += d.alcoholProducido || 0;
      variables.hidratado6 += d.alcoholHidratado || 0;
      famailla = {
        famaillaALCPRODUCIDO: variables.producido6,
        famaillaALCHIDRATADO: variables.hidratado6,
        famaillaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "La Corona" &&
      dataDestileriaTucuman.laCoronaInicioDestileria &&
      dataDestileriaTucuman.laCoronaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.laCoronaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.laCoronaInicioDestileria)
    ) {
      variables.producido7 += d.alcoholProducido || 0;
      variables.hidratado7 += d.alcoholHidratado || 0;
      laCorona = {
        laCoronaALCPRODUCIDO: variables.producido7,
        laCoronaALCHIDRATADO: variables.hidratado7,
        laCoronaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "La Florida" &&
      dataDestileriaTucuman.laFloridaInicioDestileria &&
      dataDestileriaTucuman.laFloridaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.laFloridaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.laFloridaInicioDestileria)
    ) {

      variables.producido8 += d.alcoholProducido || 0;
      variables.hidratado8 += d.alcoholHidratado || 0;
      laFlorida = {
        laFloridaALCPRODUCIDO: variables.producido8,
        laFloridaALCHIDRATADO: variables.hidratado8,
        laFloridaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "La Providencia" &&
      dataDestileriaTucuman.laProvidenciaInicioDestileria &&
      dataDestileriaTucuman.laProvidenciaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.laProvidenciaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.laProvidenciaInicioDestileria)
    ) {
      variables.producido9 += d.alcoholProducido || 0;
      variables.hidratado9 += d.alcoholHidratado || 0;
      laProvidencia = {
        laProvidenciaALCPRODUCIDO: variables.producido9,
        laProvidenciaALCHIDRATADO: variables.hidratado9,
        laProvidenciaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "La Trinidad" &&
      dataDestileriaTucuman.laTrinidadInicioDestileria &&
      dataDestileriaTucuman.laTrinidadFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.laTrinidadFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.laTrinidadInicioDestileria)
    ) {

      variables.producido10 += d.alcoholProducido || 0;
      variables.hidratado10 += d.alcoholHidratado || 0;
      laTrinidad = {
        laTrinidadALCPRODUCIDO: variables.producido10,
        laTrinidadALCHIDRATADO: variables.hidratado10,
        laTrinidadFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Leales" &&
      dataDestileriaTucuman.lealesInicioDestileria &&
      dataDestileriaTucuman.lealesFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.lealesFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.lealesInicioDestileria)
    ) {

      variables.producido11 += d.alcoholProducido || 0;
      variables.hidratado11 += d.alcoholHidratado || 0;
      leales = {
        lealesALCPRODUCIDO: variables.producido11,
        lealesALCHIDRATADO: variables.hidratado11,
        lealesFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Marapa" &&
      dataDestileriaTucuman.marapaInicioDestileria &&
      dataDestileriaTucuman.marapaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.marapaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.marapaInicioDestileria)
    ) {
      variables.producido12 += d.alcoholProducido || 0;
      variables.hidratado12 += d.alcoholHidratado || 0;
      marapa = {
        marapaALCPRODUCIDO: variables.producido12,
        marapaALCHIDRATADO: variables.hidratado12,
        marapaFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Ñuñorco" &&
      dataDestileriaTucuman.nunorcoInicioDestileria &&
      dataDestileriaTucuman.nunorcoFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.nunorcoFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.nunorcoInicioDestileria)
    ) {
      variables.producido13 += d.alcoholProducido || 0;
      variables.hidratado13 += d.alcoholHidratado || 0;
      nunorco = {
        nunorcoALCPRODUCIDO: variables.producido13,
        nunorcoALCHIDRATADO: variables.hidratado13,
        nunorcoFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Santa Barbara" &&
      dataDestileriaTucuman.staBarbaraInicioDestileria &&
      dataDestileriaTucuman.staBarbaraFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.staBarbaraFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.staBarbaraInicioDestileria)
    ) {
      variables.producido14 += d.alcoholProducido || 0;
      variables.hidratado14 += d.alcoholHidratado || 0;
      staBarbara = {
        staBarbaraALCPRODUCIDO: variables.producido14,
        staBarbaraALCHIDRATADO: variables.hidratado14,
        staBarbaraFinDestileria: true
      };
    }
    if (
      d.ingenioNombre === "Santa Rosa" &&
      dataDestileriaTucuman.staRosaInicioDestileria &&
      dataDestileriaTucuman.staRosaFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataDestileriaTucuman.staRosaFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataDestileriaTucuman.staRosaInicioDestileria)
    ) {
      variables.producido15 += d.alcoholProducido || 0;
      variables.hidratado15 += d.alcoholHidratado || 0;
      staRosa = {
        staRosaALCPRODUCIDO: variables.producido15,
        staRosaALCHIDRATADO: variables.hidratado15,
        staRosaFinDestileria: true
      };
    }
  })
  /****************************** DATOS ANHIDRO ALCOHOL ******************************/
  /********* TUCUMAN ANIO ACTUAL *********/
  dataAnioEndAnhidroTucuman?.forEach((d) => {
    if (
      d.ingenioNombre === "Aguilares" &&
      dataAnhidroTucumanEnd.aguilaresInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.aguilaresFinDestileria &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.aguilaresFinDestileria) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.aguilaresInicioAnhidroEnd)
    ) {
      
      variablesEnd.anhidro1 += d.alcoholAnhidro || 0;
      aguilaresEnd = {
        aguilaresANHIDRO: variablesEnd.anhidro1,
        aguilaresALCPRODUCIDO: aguilaresEnd.aguilaresALCPRODUCIDO,
        aguilaresALCHIDRATADO: aguilaresEnd.aguilaresALCHIDRATADO,
        aguilaresFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Bella Vista" &&
      dataAnhidroTucumanEnd.bellaVistaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.bellaVistaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.bellaVistaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.bellaVistaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro2 += d.alcoholAnhidro || 0;
      bellaVistaEnd = {
        ...bellaVistaEnd,
        bellaVistaANHIDRO: variablesEnd.anhidro2,
        // bellaVistaALCPRODUCIDO: bellaVistaEnd.bellaVistaALCPRODUCIDO,
        // bellaVistaALCHIDRATADO: bellaVistaEnd.bellaVistaALCPRODUCIDO,
        bellaVistaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Concepción" &&
      dataAnhidroTucumanEnd.concepcionInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.concepcionFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.concepcionFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.concepcionInicioAnhidroEnd)
    ) {

      variablesEnd.anhidro3 += d.alcoholAnhidro || 0;
      concepcionEnd = {
        concepcionANHIDRO: variablesEnd.anhidro3,
        concepcionALCPRODUCIDO: concepcionEnd.concepcionALCPRODUCIDO,
        concepcionALCHIDRATADO: concepcionEnd.concepcionALCPRODUCIDO,
        concepcionFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Cruz Alta" &&
      dataAnhidroTucumanEnd.cruzAltaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.cruzAltaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.cruzAltaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.cruzAltaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro4 += d.alcoholAnhidro || 0;
      cruzAltaEnd = {
        cruzAltaANHIDRO: variablesEnd.anhidro4,
        cruzAltaALCPRODUCIDO: cruzAltaEnd.cruzAltaALCPRODUCIDO,
        cruzAltaALCHIDRATADO: cruzAltaEnd.cruzAltaALCPRODUCIDO,
        cruzAltaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Destilería Bella Vista" &&
      dataAnhidroTucumanEnd.destBellaVistaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.destBellaVistaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.bellaVistaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.destBellaVistaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro5 += d.alcoholAnhidro || 0;
      destBellaVistaEnd = {
        destBellaVistaANHIDRO: variablesEnd.anhidro5 || 0,
        destBellaVistaALCPRODUCIDO: destBellaVistaEnd.destBellaVistaALCPRODUCIDO,
        destBellaVistaALCHIDRATADO: destBellaVistaEnd.destBellaVistaALCPRODUCIDO,
        destBellaVistaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Famaillá" &&
      dataAnhidroTucumanEnd.famaillaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.famaillaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.famaillaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.famaillaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro6 += d.alcoholAnhidro || 0;
      famaillaEnd = {
        famaillaANHIDRO: variablesEnd.anhidro6,
        famaillaALCPRODUCIDO: famaillaEnd.famaillaALCPRODUCIDO,
        famaillaALCHIDRATADO: famaillaEnd.famaillaALCPRODUCIDO,
        famaillaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Corona" &&
      dataAnhidroTucumanEnd.laCoronaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.laCoronaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.laCoronaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.laCoronaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro7 += d.alcoholAnhidro || 0;
      laCoronaEnd = {
        laCoronaANHIDRO: variablesEnd.anhidro7,
        laCoronaALCPRODUCIDO: laCoronaEnd.laCoronaALCPRODUCIDO,
        laCoronaALCHIDRATADO: laCoronaEnd.laCoronaALCPRODUCIDO,
        laCoronaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Florida" &&
      dataAnhidroTucumanEnd.laFloridaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.laFloridaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.laFloridaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.laFloridaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro8 += d.alcoholAnhidro || 0;
      laFloridaEnd = {
        laFloridaANHIDRO: variablesEnd.anhidro8,
        laFloridaALCPRODUCIDO: laFloridaEnd.laFloridaALCPRODUCIDO,
        laFloridaALCHIDRATADO: laFloridaEnd.laFloridaALCPRODUCIDO,
        laFloridaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Providencia" &&
      dataAnhidroTucumanEnd.LaProvidenciaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.LaProvidenciaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.LaProvidenciaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.LaProvidenciaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro9 += d.alcoholAnhidro || 0;
      laProvidenciaEnd = {
        laProvidenciaANHIDRO: variablesEnd.anhidro9,
        laProvidenciaALCPRODUCIDO: laProvidenciaEnd.laProvidenciaALCPRODUCIDO,
        laProvidenciaALCHIDRATADO: laProvidenciaEnd.laProvidenciaALCPRODUCIDO,
        laProvidenciaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Trinidad" &&
      dataAnhidroTucumanEnd.laTrinidadInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.laTrinidadFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.laTrinidadFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.laTrinidadInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro10 += d.alcoholAnhidro || 0;
      laTrinidadEnd = {
        laTrinidadANHIDRO: variablesEnd.anhidro10,
        laTrinidadALCPRODUCIDO: laTrinidadEnd.laTrinidadALCPRODUCIDO,
        laTrinidadALCHIDRATADO: laTrinidadEnd.laTrinidadALCPRODUCIDO,
        laTrinidadFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Leales" &&
      dataAnhidroTucumanEnd.lealesInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.lealesFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.lealesFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.lealesInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro11 += d.alcoholAnhidro || 0;
      lealesEnd = {
        lealesANHIDRO: variablesEnd.anhidro11,
        lealesALCPRODUCIDO: lealesEnd.lealesALCPRODUCIDO,
        lealesALCHIDRATADO: lealesEnd.lealesALCPRODUCIDO,
        lealesFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Marapa" &&
      dataAnhidroTucumanEnd.marapaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.marapaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.marapaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.marapaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro12 += d.alcoholAnhidro || 0;
      marapaEnd = {
        marapaANHIDRO: variablesEnd.anhidro12,
        marapaALCPRODUCIDO: marapaEnd.marapaALCPRODUCIDO,
        marapaALCHIDRATADO: marapaEnd.marapaALCPRODUCIDO,
        marapaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Ñuñorco" &&
      dataAnhidroTucumanEnd.nunorcoInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.nunorcoFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.nunorcoFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.nunorcoInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro13 += d.alcoholAnhidro || 0;
      nunorcoEnd = {
        nunorcoANHIDRO: variablesEnd.anhidro13,
        nunorcoALCPRODUCIDO: nunorcoEnd.nunorcoALCPRODUCIDO,
        nunorcoALCHIDRATADO: nunorcoEnd.nunorcoALCPRODUCIDO,
        nunorcoFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Santa Barbara" &&
      dataAnhidroTucumanEnd.staBarbaraInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.staBarbaraFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.staBarbaraFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.staBarbaraInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro14 += d.alcoholAnhidro || 0;
      staBarbaraEnd = {
        staBarbaraANHIDRO: variablesEnd.anhidro14,
        staBarbaraALCPRODUCIDO: staBarbaraEnd.staBarbaraALCPRODUCIDO,
        staBarbaraALCHIDRATADO: staBarbaraEnd.staBarbaraALCPRODUCIDO,
        staBarbaraFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Santa Rosa" &&
      dataAnhidroTucumanEnd.staRosaInicioAnhidroEnd &&
      dataAnhidroTucumanEnd.staRosaFinAnhidroEnd &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucumanEnd.staRosaFinAnhidroEnd) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucumanEnd.staRosaInicioAnhidroEnd)
    ) {
      variablesEnd.anhidro15 += d.alcoholAnhidro || 0;
      staRosaEnd = {
        staRosaANHIDRO: variablesEnd.anhidro15,
        staRosaALCPRODUCIDO: staRosaEnd.staRosaALCPRODUCIDO,
        staRosaALCHIDRATADO: staRosaEnd.staRosaALCPRODUCIDO,
        staRosaFinAnhidro: true
      };
    }
  })
  /********* TUCUMAN ANIO COMPARATIVO *********/
  dataAnioStartAnhidroTucuman?.forEach((d) => {
    if (
      d.ingenioNombre === "Aguilares" &&
      dataAnhidroTucuman.aguilaresInicioAnhidro &&
      dataAnhidroTucuman.aguilaresFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.aguilaresFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.aguilaresInicioAnhidro)
    ) {
      variables.anhidro1 += d.alcoholAnhidro || 0;
      aguilares = {
        aguilaresANHIDRO: variables.anhidro1,
        aguilaresALCPRODUCIDO: aguilares.aguilaresALCPRODUCIDO,
        aguilaresALCHIDRATADO: aguilares.aguilaresALCHIDRATADO,
        aguilaresFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Bella Vista" &&
      dataAnhidroTucuman.bellaVistaInicioAnhidro &&
      dataAnhidroTucuman.bellaVistaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.bellaVistaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.bellaVistaInicioAnhidro)
    ) {
      variables.anhidro2 += d.alcoholAnhidro || 0;
      bellaVista = {
        bellaVistaANHIDRO: variables.anhidro2,
        bellaVistaALCPRODUCIDO: bellaVista.bellaVistaALCPRODUCIDO,
        bellaVistaALCHIDRATADO: bellaVista.bellaVistaALCHIDRATADO,
        bellaVistaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Concepción" &&
      dataAnhidroTucuman.concepcionInicioAnhidro &&
      dataAnhidroTucuman.concepcionFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.concepcionFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.concepcionInicioAnhidro)
    ) {
      variables.anhidro3 += d.alcoholAnhidro || 0;
      concepcion = {
        concepcionANHIDRO: variables.anhidro3,
        concepcionALCPRODUCIDO: concepcion.concepcionALCPRODUCIDO,
        concepcionALCHIDRATADO: concepcion.concepcionALCHIDRATADO,
        concepcionFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Cruz Alta" &&
      dataAnhidroTucuman.cruzAltaInicioAnhidro &&
      dataAnhidroTucuman.cruzAltaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.cruzAltaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.cruzAltaInicioAnhidro)
    ) {
      variables.anhidro4 += d.alcoholAnhidro || 0;
      cruzAlta = {
        cruzAltaANHIDRO: variables.anhidro4,
        cruzAltaALCPRODUCIDO: cruzAlta.cruzAltaALCPRODUCIDO,
        cruzAltaALCHIDRATADO: cruzAlta.cruzAltaALCHIDRATADO,
        cruzAltaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Famaillá" &&
      dataAnhidroTucuman.famaillaInicioAnhidro &&
      dataAnhidroTucuman.famaillaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.famaillaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.famaillaInicioAnhidro)
    ) {
      variables.anhidro6 += d.alcoholAnhidro || 0;
      famailla = {
        famaillaANHIDRO: variables.anhidro6,
        famaillaALCPRODUCIDO: famailla.famaillaALCPRODUCIDO,
        famaillaALCHIDRATADO: famailla.famaillaALCHIDRATADO,
        famaillaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Corona" &&
      dataAnhidroTucuman.laCoronaInicioAnhidro &&
      dataAnhidroTucuman.laCoronaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.laCoronaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.laCoronaInicioAnhidro)
    ) {
      variables.anhidro7 += d.alcoholAnhidro || 0;
      laCorona = {
        laCoronaANHIDRO: variables.anhidro7,
        laCoronaALCPRODUCIDO: laCorona.laCoronaALCPRODUCIDO,
        laCoronaALCHIDRATADO: laCorona.laCoronaALCHIDRATADO,
        laCoronaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Florida" &&
      dataAnhidroTucuman.laFloridaInicioAnhidro &&
      dataAnhidroTucuman.laFloridaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.laFloridaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.laFloridaInicioAnhidro)
    ) {
      variables.anhidro8 += d.alcoholAnhidro || 0;
      laFlorida = {
        laFloridaANHIDRO: variables.anhidro8,
        laFloridaALCPRODUCIDO: laFlorida.laFloridaALCPRODUCIDO,
        laFloridaALCHIDRATADO: laFlorida.laFloridaALCHIDRATADO,
        laFloridaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Providencia" &&
      dataAnhidroTucuman.laProvidenciaInicioAnhidro &&
      dataAnhidroTucuman.laProvidenciaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.laProvidenciaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.laProvidenciaInicioAnhidro)
    ) {
      variables.anhidro9 += d.alcoholAnhidro || 0;
      laProvidencia = {
        laProvidenciaANHIDRO: variables.anhidro9,
        laProvidenciaALCPRODUCIDO: laProvidencia.laProvidenciaALCPRODUCIDO,
        laProvidenciaALCHIDRATADO: laProvidencia.laProvidenciaALCHIDRATADO,
        laProvidenciaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "La Trinidad" &&
      dataAnhidroTucuman.laTrinidadInicioAnhidro &&
      dataAnhidroTucuman.laTrinidadFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.laTrinidadFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.laTrinidadInicioAnhidro)
    ) {
      variables.anhidro10 += d.alcoholAnhidro || 0;
      laTrinidad = {
        laTrinidadANHIDRO: variables.anhidro10,
        laTrinidadALCPRODUCIDO: laTrinidad.laTrinidadALCPRODUCIDO,
        laTrinidadALCHIDRATADO: laTrinidad.laTrinidadALCHIDRATADO,
        laTrinidadFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Leales" &&
      dataAnhidroTucuman.lealesInicioAnhidro &&
      dataAnhidroTucuman.lealesFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.lealesFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.lealesInicioAnhidro)
    ) {
      variables.anhidro11 += d.alcoholAnhidro || 0;
      leales = {
        lealesANHIDRO: variables.anhidro11,
        lealesALCPRODUCIDO: leales.lealesALCPRODUCIDO,
        lealesALCHIDRATADO: leales.lealesALCHIDRATADO,
        lealesFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Marapa" &&
      dataAnhidroTucuman.marapaInicioAnhidro &&
      dataAnhidroTucuman.marapaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.marapaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.marapaInicioAnhidro)
    ) {
      variables.anhidro12 += d.alcoholAnhidro || 0;
      marapa = {
        marapaANHIDRO: variables.anhidro12,
        marapaALCPRODUCIDO: marapa.marapaALCPRODUCIDO,
        marapaALCHIDRATADO: marapa.marapaALCHIDRATADO,
        marapaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Ñuñorco" &&
      dataAnhidroTucuman.nunorcoInicioAnhidro &&
      dataAnhidroTucuman.nunorcoFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.nunorcoFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.nunorcoInicioAnhidro)
    ) {
      variables.anhidro13 += d.alcoholAnhidro || 0;
      nunorco = {
        nunorcoANHIDRO: variables.anhidro13,
        nunorcoALCPRODUCIDO: nunorco.nunorcoALCPRODUCIDO,
        nunorcoALCHIDRATADO: nunorco.nunorcoALCHIDRATADO,
        nunorcoFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Santa Bárbara" &&
      dataAnhidroTucuman.staBarbaraInicioAnhidro &&
      dataAnhidroTucuman.staBarbaraFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.staBarbaraFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.staBarbaraInicioAnhidro)
    ) {
      variables.anhidro14 += d.alcoholAnhidro || 0;
      staBarbara = {
        staBarbaraANHIDRO: variables.anhidro14,
        staBarbaraALCPRODUCIDO: staBarbara.staBarbaraALCPRODUCIDO,
        staBarbaraALCHIDRATADO: staBarbara.staBarbaraALCHIDRATADO,
        staBarbaraFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Santa Rosa" &&
      dataAnhidroTucuman.staRosaInicioAnhidro &&
      dataAnhidroTucuman.staRosaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroTucuman.staRosaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroTucuman.staRosaInicioAnhidro)
    ) {
      variables.anhidro15 += d.alcoholAnhidro || 0;
      staRosa = {
        staRosaANHIDRO: variables.anhidro15,
        staRosaALCPRODUCIDO: staRosa.staRosaALCPRODUCIDO,
        staRosaALCHIDRATADO: staRosa.staRosaALCHIDRATADO,
        staRosaFinAnhidro: true
      };
    }
  })



  /****************************** DATOS ZAFRA ******************************/
  /********* TUCUMAN ANIO ACTUAL *********/
  const ultimoRegistroAguilares = new Date(dataZafraTucumanEnd.aguilaresFinZafraEnd) >= new Date(dataZafraTucumanEnd.aguilaresFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.aguilaresFinZafraEnd)
    : new Date(dataZafraTucumanEnd.aguilaresFinDatosZafraEnd)

  const ultimoRegistroBellaVista = new Date(dataZafraTucumanEnd.bellaVistaFinZafraEnd) >= new Date(dataZafraTucumanEnd.bellaVistaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.bellaVistaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.bellaVistaFinDatosZafraEnd)

  const ultimoRegistroConcepcion = new Date(dataZafraTucumanEnd.concepcionFinZafraEnd) >= new Date(dataZafraTucumanEnd.concepcionFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.concepcionFinZafraEnd)
    : new Date(dataZafraTucumanEnd.concepcionFinDatosZafraEnd)

  const ultimoRegistroCruzAlta = new Date(dataZafraTucumanEnd.cruzAltaFinZafraEnd) >= new Date(dataZafraTucumanEnd.cruzAltaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.cruzAltaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.cruzAltaFinDatosZafraEnd)

  const ultimoRegistroFamailla = new Date(dataZafraTucumanEnd.famaillaFinZafraEnd) >= new Date(dataZafraTucumanEnd.famaillaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.famaillaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.famaillaFinDatosZafraEnd)

  const ultimoRegistroLaCorona = new Date(dataZafraTucumanEnd.laCoronaFinZafraEnd) >= new Date(dataZafraTucumanEnd.laCoronaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.laCoronaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.laCoronaFinDatosZafraEnd)

  const ultimoRegistroLaFlorida = new Date(dataZafraTucumanEnd.laFloridaFinZafraEnd) >= new Date(dataZafraTucumanEnd.laFloridaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.laFloridaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.laFloridaFinDatosZafraEnd)

  const ultimoRegistroLaProvidencia = new Date(dataZafraTucumanEnd.laProvidenciaFinZafraEnd) >= new Date(dataZafraTucumanEnd.laProvidenciaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.laProvidenciaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.laProvidenciaFinDatosZafraEnd)

  const ultimoRegistroLaTrinidad = new Date(dataZafraTucumanEnd.laTrinidadFinZafraEnd) >= new Date(dataZafraTucumanEnd.laTrinidadFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.laTrinidadFinZafraEnd)
    : new Date(dataZafraTucumanEnd.laTrinidadFinDatosZafraEnd)

  const ultimoRegistroLeales = new Date(dataZafraTucumanEnd.lealesFinZafraEnd) >= new Date(dataZafraTucumanEnd.lealesFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.lealesFinZafraEnd)
    : new Date(dataZafraTucumanEnd.lealesFinDatosZafraEnd)

  const ultimoRegistroMarapa = new Date(dataZafraTucumanEnd.marapaFinZafraEnd) >= new Date(dataZafraTucumanEnd.marapaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.marapaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.marapaFinDatosZafraEnd)

  const ultimoRegistroNunorco = new Date(dataZafraTucumanEnd.nunorcoFinZafraEnd) >= new Date(dataZafraTucumanEnd.nunorcoFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.nunorcoFinZafraEnd)
    : new Date(dataZafraTucumanEnd.nunorcoFinDatosZafraEnd)

  const ultimoRegistroStaBarbara = new Date(dataZafraTucumanEnd.staBarbaraFinZafraEnd) >= new Date(dataZafraTucumanEnd.staBarbaraFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.staBarbaraFinZafraEnd)
    : new Date(dataZafraTucumanEnd.staBarbaraFinDatosZafraEnd)

  const ultimoRegistroStaRosa = new Date(dataZafraTucumanEnd.staRosaFinZafraEnd) >= new Date(dataZafraTucumanEnd.staRosaFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.staRosaFinZafraEnd)
    : new Date(dataZafraTucumanEnd.staRosaFinDatosZafraEnd)

  const ultimoRegistroSanJuan = new Date(dataZafraTucumanEnd.sanJuanFinZafraEnd) >= new Date(dataZafraTucumanEnd.sanJuanFinDatosZafraEnd)
    ? new Date(dataZafraTucumanEnd.sanJuanFinZafraEnd)
    : new Date(dataZafraTucumanEnd.sanJuanFinDatosZafraEnd)

  dataAnioEndZafraTucuman?.forEach((d) => {
    if (
      d.ingenioNombre === "Aguilares" &&
      dataZafraTucumanEnd.aguilaresInicioZafraEnd &&
      dataZafraTucumanEnd.aguilaresFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.aguilaresInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroAguilares
    ) {
      variablesEnd.cmb1 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn1 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente1 += Number(Number(d.azucarEquivalente)) || 0;
      variablesEnd.melaza1 += d.melazaProducida || 0;
      variablesEnd.blanco1 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado1 += d.azucarRefinado || 0;
      variablesEnd.organico1 += d.azucarOrganico || 0;
      variablesEnd.crudo1 += d.azucarCrudoProducido || 0;
      variablesEnd.otros1 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal1 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      aguilaresEnd = {
        aguilaresCMB: variablesEnd.cmb1,
        aguilaresCMN: variablesEnd.cmn1,
        aguilaresEQUIVALENTE: variablesEnd.equivalente1,
        aguilaresMELAZA: variablesEnd.melaza1,
        aguilaresBLANCO: variablesEnd.blanco1,
        aguilaresREFINADO: variablesEnd.refinado1,
        aguilaresORGANICO: variablesEnd.organico1,
        aguilaresCRUDO: variablesEnd.crudo1,
        aguilaresOTROS: variablesEnd.otros1,
        aguilaresFISICOTOTAL: variablesEnd.fisicoTotal1,
        aguilaresALCPRODUCIDO: aguilaresEnd.aguilaresALCPRODUCIDO,
        aguilaresALCHIDRATADO: aguilaresEnd.aguilaresALCHIDRATADO,
        aguilaresANHIDRO: aguilaresEnd.aguilaresANHIDRO,
        aguilaresFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Bella Vista" &&
      dataZafraTucumanEnd.bellaVistaInicioZafraEnd &&
      dataZafraTucumanEnd.bellaVistaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.bellaVistaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroBellaVista
    ) {
      variablesEnd.cmb2 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn2 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente2 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza2 += d.melazaProducida || 0;
      variablesEnd.blanco2 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado2 += d.azucarRefinado || 0;
      variablesEnd.organico2 += d.azucarOrganico || 0;
      variablesEnd.crudo2 += d.azucarCrudoProducido || 0;
      variablesEnd.otros2 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal2 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      bellaVistaEnd = {
        bellaVistaCMB: variablesEnd.cmb2,
        bellaVistaCMN: variablesEnd.cmn2,
        bellaVistaEQUIVALENTE: variablesEnd.equivalente2,
        bellaVistaMELAZA: variablesEnd.melaza2,
        bellaVistaBLANCO: variablesEnd.blanco2,
        bellaVistaREFINADO: variablesEnd.refinado2,
        bellaVistaORGANICO: variablesEnd.organico2,
        bellaVistaCRUDO: variablesEnd.crudo2,
        bellaVistaOTROS: variablesEnd.otros2,
        bellaVistaFISICOTOTAL: variablesEnd.fisicoTotal2,
        bellaVistaALCPRODUCIDO: bellaVistaEnd.bellaVistaALCPRODUCIDO,
        bellaVistaALCHIDRATADO: bellaVistaEnd.bellaVistaALCPRODUCIDO,
        bellaVistaANHIDRO: bellaVistaEnd.bellaVistaANHIDRO,
        bellaVistaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Concepción" &&
      dataZafraTucumanEnd.concepcionInicioZafraEnd &&
      dataZafraTucumanEnd.concepcionFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.concepcionInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroConcepcion
    ) {

      variablesEnd.cmb3 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn3 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente3 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza3 += d.melazaProducida || 0;
      variablesEnd.blanco3 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado3 += d.azucarRefinado || 0;
      variablesEnd.organico3 += d.azucarOrganico || 0;
      variablesEnd.crudo3 += d.azucarCrudoProducido || 0;
      variablesEnd.otros3 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal3 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      concepcionEnd = {
        concepcionNHIDRO: variablesEnd.anhidro3,
        concepcionCMB: variablesEnd.cmb3,
        concepcionCMN: variablesEnd.cmn3,
        concepcionEQUIVALENTE: variablesEnd.equivalente3,
        concepcionMELAZA: variablesEnd.melaza3,
        concepcionBLANCO: variablesEnd.blanco3,
        concepcionREFINADO: variablesEnd.refinado3,
        concepcionORGANICO: variablesEnd.organico3,
        concepcionCRUDO: variablesEnd.crudo3,
        concepcionOTROS: variablesEnd.otros3,
        concepcionFISICOTOTAL: variablesEnd.fisicoTotal3,
        concepcionALCPRODUCIDO: concepcionEnd.concepcionALCPRODUCIDO,
        concepcionALCHIDRATADO: concepcionEnd.concepcionALCPRODUCIDO,
        concepcionANHIDRO: concepcionEnd.concepcionANHIDRO,
        concepcionFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Cruz Alta" &&
      dataZafraTucumanEnd.cruzAltaInicioZafraEnd &&
      dataZafraTucumanEnd.cruzAltaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.cruzAltaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroCruzAlta
    ) {
      variablesEnd.cmb4 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn4 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente4 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza4 += d.melazaProducida || 0;
      variablesEnd.blanco4 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado4 += d.azucarRefinado || 0;
      variablesEnd.organico4 += d.azucarOrganico || 0;
      variablesEnd.crudo4 += d.azucarCrudoProducido || 0;
      variablesEnd.otros4 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal4 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      cruzAltaEnd = {
        cruzAltaCMB: variablesEnd.cmb4,
        cruzAltaCMN: variablesEnd.cmn4,
        cruzAltaEQUIVALENTE: variablesEnd.equivalente4,
        cruzAltaMELAZA: variablesEnd.melaza4,
        cruzAltaBLANCO: variablesEnd.blanco4,
        cruzAltaREFINADO: variablesEnd.refinado4,
        cruzAltaORGANICO: variablesEnd.organico4,
        cruzAltaCRUDO: variablesEnd.crudo4,
        cruzAltaOTROS: variablesEnd.otros4,
        cruzAltaFISICOTOTAL: variablesEnd.fisicoTotal4,
        cruzAltaALCPRODUCIDO: cruzAltaEnd.cruzAltaALCPRODUCIDO,
        cruzAltaALCHIDRATADO: cruzAltaEnd.cruzAltaALCPRODUCIDO,
        cruzAltaANHIDRO: cruzAltaEnd.cruzAltaANHIDRO,
        cruzAltaFinZafra: true,
      };
    }

    if (
      d.ingenioNombre === "Famaillá" &&
      dataZafraTucumanEnd.famaillaInicioZafraEnd &&
      dataZafraTucumanEnd.famaillaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.famaillaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroFamailla
    ) {
      variablesEnd.cmb6 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn6 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente6 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza6 += d.melazaProducida || 0;
      variablesEnd.blanco6 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado6 += d.azucarRefinado || 0;
      variablesEnd.organico6 += d.azucarOrganico || 0;
      variablesEnd.crudo6 += d.azucarCrudoProducido || 0;
      variablesEnd.otros6 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal6 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      famaillaEnd = {
        famaillaCMB: variablesEnd.cmb6,
        famaillaCMN: variablesEnd.cmn6,
        famaillaEQUIVALENTE: variablesEnd.equivalente6,
        famaillaMELAZA: variablesEnd.melaza6,
        famaillaBLANCO: variablesEnd.blanco6,
        famaillaREFINADO: variablesEnd.refinado6,
        famaillaORGANICO: variablesEnd.organico6,
        famaillaCRUDO: variablesEnd.crudo6,
        famaillaOTROS: variablesEnd.otros6,
        famaillaFISICOTOTAL: variablesEnd.fisicoTotal6,
        famaillaALCPRODUCIDO: famaillaEnd.famaillaALCPRODUCIDO,
        famaillaALCHIDRATADO: famaillaEnd.famaillaALCPRODUCIDO,
        famaillaANHIDRO: famaillaEnd.famaillaANHIDRO,
        famaillaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "La Corona" &&
      dataZafraTucumanEnd.laCoronaInicioZafraEnd &&
      dataZafraTucumanEnd.laCoronaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.laCoronaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLaCorona
    ) {
      variablesEnd.cmb7 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn7 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente7 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza7 += d.melazaProducida || 0;
      variablesEnd.blanco7 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado7 += d.azucarRefinado || 0;
      variablesEnd.organico7 += d.azucarOrganico || 0;
      variablesEnd.crudo7 += d.azucarCrudoProducido || 0;
      variablesEnd.otros7 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal7 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laCoronaEnd = {
        laCoronaANHIDRO: variablesEnd.anhidro7,
        laCoronaCMB: variablesEnd.cmb7,
        laCoronaCMN: variablesEnd.cmn7,
        laCoronaEQUIVALENTE: variablesEnd.equivalente7,
        laCoronaMELAZA: variablesEnd.melaza7,
        laCoronaBLANCO: variablesEnd.blanco7,
        laCoronaREFINADO: variablesEnd.refinado7,
        laCoronaORGANICO: variablesEnd.organico7,
        laCoronaCRUDO: variablesEnd.crudo7,
        laCoronaOTROS: variablesEnd.otros7,
        laCoronaFISICOTOTAL: variablesEnd.fisicoTotal7,
        laCoronaALCPRODUCIDO: laCoronaEnd.laCoronaALCPRODUCIDO,
        laCoronaALCHIDRATADO: laCoronaEnd.laCoronaALCPRODUCIDO,
        laCoronaANHIDRO: laCoronaEnd.laCoronaANHIDRO,
        laCoronaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "La Florida" &&
      dataZafraTucumanEnd.laFloridaInicioZafraEnd &&
      dataZafraTucumanEnd.laFloridaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.laFloridaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLaFlorida
    ) {
      variablesEnd.cmb8 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn8 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente8 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza8 += d.melazaProducida || 0;
      variablesEnd.blanco8 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado8 += d.azucarRefinado || 0;
      variablesEnd.organico8 += d.azucarOrganico || 0;
      variablesEnd.crudo8 += d.azucarCrudoProducido || 0;
      variablesEnd.otros8 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal8 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laFloridaEnd = {
        laFloridaANHIDRO: variablesEnd.anhidro8,
        laFloridaCMB: variablesEnd.cmb8,
        laFloridaCMN: variablesEnd.cmn8,
        laFloridaEQUIVALENTE: variablesEnd.equivalente8,
        laFloridaMELAZA: variablesEnd.melaza8,
        laFloridaBLANCO: variablesEnd.blanco8,
        laFloridaREFINADO: variablesEnd.refinado8,
        laFloridaORGANICO: variablesEnd.organico8,
        laFloridaCRUDO: variablesEnd.crudo8,
        laFloridaOTROS: variablesEnd.otros8,
        laFloridaFISICOTOTAL: variablesEnd.fisicoTotal8,
        laFloridaALCPRODUCIDO: laFloridaEnd.laFloridaALCPRODUCIDO,
        laFloridaALCHIDRATADO: laFloridaEnd.laFloridaALCPRODUCIDO,
        laFloridaANHIDRO: laFloridaEnd.laFloridaANHIDRO,
        laFloridaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "La Providencia" &&
      dataZafraTucumanEnd.laProvidenciaInicioZafraEnd &&
      dataZafraTucumanEnd.laProvidenciaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.laProvidenciaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLaProvidencia
    ) {
      variablesEnd.cmb9 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn9 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente9 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza9 += d.melazaProducida || 0;
      variablesEnd.blanco9 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado9 += d.azucarRefinado || 0;
      variablesEnd.organico9 += d.azucarOrganico || 0;
      variablesEnd.crudo9 += d.azucarCrudoProducido || 0;
      variablesEnd.otros9 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal9 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laProvidenciaEnd = {
        laProvidenciaCMB: variablesEnd.cmb9,
        laProvidenciaCMN: variablesEnd.cmn9,
        laProvidenciaEQUIVALENTE: variablesEnd.equivalente9,
        laProvidenciaMELAZA: variablesEnd.melaza9,
        laProvidenciaBLANCO: variablesEnd.blanco9,
        laProvidenciaREFINADO: variablesEnd.refinado9,
        laProvidenciaORGANICO: variablesEnd.organico9,
        laProvidenciaCRUDO: variablesEnd.crudo9,
        laProvidenciaOTROS: variablesEnd.otros9,
        laProvidenciaFISICOTOTAL: variablesEnd.fisicoTotal9,
        laProvidenciaALCPRODUCIDO: laProvidenciaEnd.laProvidenciaALCPRODUCIDO,
        laProvidenciaALCHIDRATADO: laProvidenciaEnd.laProvidenciaALCPRODUCIDO,
        laProvidenciaANHIDRO: laProvidenciaEnd.laProvidenciaANHIDRO,
        laProvidenciaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "La Trinidad" &&
      dataZafraTucumanEnd.laTrinidadInicioZafraEnd &&
      dataZafraTucumanEnd.laTrinidadFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.laTrinidadInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLaTrinidad
    ) {
      variablesEnd.cmb10 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn10 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente10 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza10 += d.melazaProducida || 0;
      variablesEnd.blanco10 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado10 += d.azucarRefinado || 0;
      variablesEnd.organico10 += d.azucarOrganico || 0;
      variablesEnd.crudo10 += d.azucarCrudoProducido || 0;
      variablesEnd.otros10 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal10 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laTrinidadEnd = {
        laTrinidadCMB: variablesEnd.cmb10,
        laTrinidadCMN: variablesEnd.cmn10,
        laTrinidadEQUIVALENTE: variablesEnd.equivalente10,
        laTrinidadMELAZA: variablesEnd.melaza10,
        laTrinidadBLANCO: variablesEnd.blanco10,
        laTrinidadREFINADO: variablesEnd.refinado10,
        laTrinidadORGANICO: variablesEnd.organico10,
        laTrinidadCRUDO: variablesEnd.crudo10,
        laTrinidadOTROS: variablesEnd.otros10,
        laTrinidadFISICOTOTAL: variablesEnd.fisicoTotal10,
        laTrinidadALCPRODUCIDO: laTrinidadEnd.laTrinidadALCPRODUCIDO,
        laTrinidadALCHIDRATADO: laTrinidadEnd.laTrinidadALCPRODUCIDO,
        laTrinidadANHIDRO: laTrinidadEnd.laTrinidadANHIDRO,
        laTrinidadFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Leales" &&
      dataZafraTucumanEnd.lealesInicioZafraEnd &&
      dataZafraTucumanEnd.lealesFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.lealesInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLeales
    ) {
      variablesEnd.cmb11 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn11 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente11 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza11 += d.melazaProducida || 0;
      variablesEnd.blanco11 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado11 += d.azucarRefinado || 0;
      variablesEnd.organico11 += d.azucarOrganico || 0;
      variablesEnd.crudo11 += d.azucarCrudoProducido || 0;
      variablesEnd.otros11 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal11 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      lealesEnd = {
        lealesCMB: variablesEnd.cmb11,
        lealesCMN: variablesEnd.cmn11,
        lealesEQUIVALENTE: variablesEnd.equivalente11,
        lealesMELAZA: variablesEnd.melaza11,
        lealesBLANCO: variablesEnd.blanco11,
        lealesREFINADO: variablesEnd.refinado11,
        lealesORGANICO: variablesEnd.organico11,
        lealesCRUDO: variablesEnd.crudo11,
        lealesOTROS: variablesEnd.otros11,
        lealesFISICOTOTAL: variablesEnd.fisicoTotal11,
        lealesALCPRODUCIDO: lealesEnd.lealesALCPRODUCIDO,
        lealesALCHIDRATADO: lealesEnd.lealesALCPRODUCIDO,
        lealesANHIDRO: lealesEnd.lealesANHIDRO,
        lealesFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Marapa" &&
      dataZafraTucumanEnd.marapaInicioZafraEnd &&
      dataZafraTucumanEnd.marapaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.marapaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroMarapa
    ) {
      variablesEnd.cmb12 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn12 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente12 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza12 += d.melazaProducida || 0;
      variablesEnd.blanco12 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado12 += d.azucarRefinado || 0;
      variablesEnd.organico12 += d.azucarOrganico || 0;
      variablesEnd.crudo12 += d.azucarCrudoProducido || 0;
      variablesEnd.otros12 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal12 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      marapaEnd = {
        marapaCMB: variablesEnd.cmb12,
        marapaCMN: variablesEnd.cmn12,
        marapaEQUIVALENTE: variablesEnd.equivalente12,
        marapaMELAZA: variablesEnd.melaza12,
        marapaBLANCO: variablesEnd.blanco12,
        marapaREFINADO: variablesEnd.refinado12,
        marapaORGANICO: variablesEnd.organico12,
        marapaCRUDO: variablesEnd.crudo12,
        marapaOTROS: variablesEnd.otros12,
        marapaFISICOTOTAL: variablesEnd.fisicoTotal12,
        marapaALCPRODUCIDO: marapaEnd.marapaALCPRODUCIDO,
        marapaALCHIDRATADO: marapaEnd.marapaALCPRODUCIDO,
        marapaANHIDRO: marapaEnd.marapaANHIDRO,
        marapaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Ñuñorco" &&
      dataZafraTucumanEnd.nunorcoInicioZafraEnd &&
      dataZafraTucumanEnd.nunorcoFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.nunorcoInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroNunorco
    ) {
      variablesEnd.cmb13 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn13 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente13 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza13 += d.melazaProducida || 0;
      variablesEnd.blanco13 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado13 += d.azucarRefinado || 0;
      variablesEnd.organico13 += d.azucarOrganico || 0;
      variablesEnd.crudo13 += d.azucarCrudoProducido || 0;
      variablesEnd.otros13 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal13 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      nunorcoEnd = {
        nunorcoCMB: variablesEnd.cmb13,
        nunorcoCMN: variablesEnd.cmn13,
        nunorcoEQUIVALENTE: variablesEnd.equivalente13,
        nunorcoMELAZA: variablesEnd.melaza13,
        nunorcoBLANCO: variablesEnd.blanco13,
        nunorcoREFINADO: variablesEnd.refinado13,
        nunorcoORGANICO: variablesEnd.organico13,
        nunorcoCRUDO: variablesEnd.crudo13,
        nunorcoOTROS: variablesEnd.otros13,
        nunorcoFISICOTOTAL: variablesEnd.fisicoTotal13,
        nunorcoALCPRODUCIDO: nunorcoEnd.nunorcoALCPRODUCIDO,
        nunorcoALCHIDRATADO: nunorcoEnd.nunorcoALCPRODUCIDO,
        nunorcoANHIDRO: nunorcoEnd.nunorcoANHIDRO,
        nunorcoFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Santa Barbara" &&
      dataZafraTucumanEnd.staBarbaraInicioZafraEnd &&
      dataZafraTucumanEnd.staBarbaraFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.staBarbaraInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroStaBarbara
    ) {
      variablesEnd.cmb14 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn14 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente14 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza14 += d.melazaProducida || 0;
      variablesEnd.blanco14 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado14 += d.azucarRefinado || 0;
      variablesEnd.organico14 += d.azucarOrganico || 0;
      variablesEnd.crudo14 += d.azucarCrudoProducido || 0;
      variablesEnd.otros14 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal14 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      staBarbaraEnd = {
        staBarbaraCMB: variablesEnd.cmb14,
        staBarbaraCMN: variablesEnd.cmn14,
        staBarbaraEQUIVALENTE: variablesEnd.equivalente14,
        staBarbaraMELAZA: variablesEnd.melaza14,
        staBarbaraBLANCO: variablesEnd.blanco14,
        staBarbaraREFINADO: variablesEnd.refinado14,
        staBarbaraORGANICO: variablesEnd.organico14,
        staBarbaraCRUDO: variablesEnd.crudo14,
        staBarbaraOTROS: variablesEnd.otros14,
        staBarbaraFISICOTOTAL: variablesEnd.fisicoTotal14,
        staBarbaraALCPRODUCIDO: staBarbaraEnd.staBarbaraALCPRODUCIDO,
        staBarbaraALCHIDRATADO: staBarbaraEnd.staBarbaraALCPRODUCIDO,
        staBarbaraANHIDRO: staBarbaraEnd.staBarbaraANHIDRO,
        staBarbaraFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Santa Rosa" &&
      dataZafraTucumanEnd.staRosaInicioZafraEnd &&
      dataZafraTucumanEnd.staRosaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraTucumanEnd.staRosaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroStaRosa
    ) {
      variablesEnd.cmb15 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn15 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente15 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza15 += d.melazaProducida || 0;
      variablesEnd.blanco15 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado15 += d.azucarRefinado || 0;
      variablesEnd.organico15 += d.azucarOrganico || 0;
      variablesEnd.crudo15 += d.azucarCrudoProducido || 0;
      variablesEnd.otros15 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal15 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      staRosaEnd = {
        staRosaCMB: variablesEnd.cmb15,
        staRosaCMN: variablesEnd.cmn15,
        staRosaEQUIVALENTE: variablesEnd.equivalente15,
        staRosaMELAZA: variablesEnd.melaza15,
        staRosaBLANCO: variablesEnd.blanco15,
        staRosaREFINADO: variablesEnd.refinado15,
        staRosaORGANICO: variablesEnd.organico15,
        staRosaCRUDO: variablesEnd.crudo15,
        staRosaOTROS: variablesEnd.otros15,
        staRosaFISICOTOTAL: variablesEnd.fisicoTotal15,
        staRosaALCPRODUCIDO: staRosaEnd.staRosaALCPRODUCIDO,
        staRosaALCHIDRATADO: staRosaEnd.staRosaALCPRODUCIDO,
        staRosaANHIDRO: staRosaEnd.staRosaANHIDRO,
        staRosaFinZafra: true,
      };
    }
  })


  /********* TUCUMAN ANIO COMPARATIVO *********/
  const ultimoRegistroAguilareComparativo = new Date(dataZafraTucuman.aguilaresFinZafra) >= new Date(dataZafraTucuman.aguilaresFinDatosZafra)
    ? new Date(dataZafraTucuman.aguilaresFinZafra)
    : new Date(dataZafraTucuman.aguilaresFinDatosZafra)

  const ultimoRegistroBellaVistaComparativo = new Date(dataZafraTucuman.bellaVistaFinZafra) >= new Date(dataZafraTucuman.bellaVistaFinDatosZafra)
    ? new Date(dataZafraTucuman.bellaVistaFinZafra)
    : new Date(dataZafraTucuman.bellaVistaFinDatosZafra)

  const ultimoRegistroConcepcionComparativo = new Date(dataZafraTucuman.concepcionFinZafra) >= new Date(dataZafraTucuman.concepcionFinDatosZafra)
    ? new Date(dataZafraTucuman.concepcionFinZafra)
    : new Date(dataZafraTucuman.concepcionFinDatosZafra)

  const ultimoRegistroCruzAltaComparativo = new Date(dataZafraTucuman.cruzAltaFinZafra) >= new Date(dataZafraTucuman.cruzAltaFinDatosZafra)
    ? new Date(dataZafraTucuman.cruzAltaFinZafra)
    : new Date(dataZafraTucuman.cruzAltaFinDatosZafra)

  const ultimoRegistroFamaillaComparativo = new Date(dataZafraTucuman.famaillaFinZafra) >= new Date(dataZafraTucuman.famaillaFinDatosZafra)
    ? new Date(dataZafraTucuman.famaillaFinZafra)
    : new Date(dataZafraTucuman.famaillaFinDatosZafra)

  const ultimoRegistroLaCoronaComparativo = new Date(dataZafraTucuman.laCoronaFinZafra) >= new Date(dataZafraTucuman.laCoronaFinDatosZafra)
    ? new Date(dataZafraTucuman.laCoronaFinZafra)
    : new Date(dataZafraTucuman.laCoronaFinDatosZafra)

  const ultimoRegistroLaFloridaComparativo = new Date(dataZafraTucuman.laFloridaFinZafra) >= new Date(dataZafraTucuman.laFloridaFinDatosZafra)
    ? new Date(dataZafraTucuman.laFloridaFinZafra)
    : new Date(dataZafraTucuman.laFloridaFinDatosZafra)

  const ultimoRegistroLaProvidenciaComparativo = new Date(dataZafraTucuman.laProvidenciaFinZafra) >= new Date(dataZafraTucuman.laProvidenciaFinDatosZafra)
    ? new Date(dataZafraTucuman.laProvidenciaFinZafra)
    : new Date(dataZafraTucuman.laProvidenciaFinDatosZafra)

  const ultimoRegistroLaTrinidadComparativo = new Date(dataZafraTucuman.laTrinidadFinZafra) >= new Date(dataZafraTucuman.laTrinidadFinDatosZafra)
    ? new Date(dataZafraTucuman.laTrinidadFinZafra)
    : new Date(dataZafraTucuman.laTrinidadFinDatosZafra)

  const ultimoRegistroLealesComparativo = new Date(dataZafraTucuman.lealesFinZafra) >= new Date(dataZafraTucuman.lealesFinDatosZafra)
    ? new Date(dataZafraTucuman.lealesFinZafra)
    : new Date(dataZafraTucuman.lealesFinDatosZafra)

  const ultimoRegistroMarapaComparativo = new Date(dataZafraTucuman.marapaFinZafra) >= new Date(dataZafraTucuman.marapaFinDatosZafra)
    ? new Date(dataZafraTucuman.marapaFinZafra)
    : new Date(dataZafraTucuman.marapaFinDatosZafra)

  const ultimoRegistroNunorcoComparativo = new Date(dataZafraTucuman.nunorcoFinZafra) >= new Date(dataZafraTucuman.nunorcoFinDatosZafra)
    ? new Date(dataZafraTucuman.nunorcoFinZafra)
    : new Date(dataZafraTucuman.nunorcoFinDatosZafra)

  const ultimoRegistroStaBarbaraComparativo = new Date(dataZafraTucuman.staBarbaraFinZafra) >= new Date(dataZafraTucuman.staBarbaraFinDatosZafra)
    ? new Date(dataZafraTucuman.staBarbaraFinZafra)
    : new Date(dataZafraTucuman.staBarbaraFinDatosZafra)

  const ultimoRegistroStaRosaComparativo = new Date(dataZafraTucuman.staRosaFinZafra) >= new Date(dataZafraTucuman.staRosaFinDatosZafra)
    ? new Date(dataZafraTucuman.staRosaFinZafra)
    : new Date(dataZafraTucuman.staRosaFinDatosZafra)

  const ultimoRegistroSanJuanComparativo = new Date(dataZafraTucuman.sanJuanFinZafra) >= new Date(dataZafraTucuman.sanJuanFinDatosZafra)
    ? new Date(dataZafraTucuman.sanJuanFinZafra)
    : new Date(dataZafraTucuman.sanJuanFinDatosZafra)

  dataAnioStartZafraTucuman?.forEach((d) => {
    if (
      d.ingenioNombre === "Aguilares" &&
      dataZafraTucuman.aguilaresInicioZafra &&
      dataZafraTucuman.aguilaresFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.aguilaresInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroAguilareComparativo
    ) {
      variables.cmb1 += d.moliendaCanaBruta || 0;
      variables.cmn1 += d.moliendaCanaNeta || 0;
      variables.equivalente1 += Number(d.azucarEquivalente) || 0;
      variables.melaza1 += d.melazaProducida || 0;
      variables.blanco1 += d.azucarBlancoProducido || 0;
      variables.refinado1 += d.azucarRefinado || 0;
      variables.organico1 += d.azucarOrganico || 0;
      variables.crudo1 += d.azucarCrudoProducido || 0;
      variables.otros1 += d.otroAzucar || 0;
      variables.fisicoTotal1 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      aguilares = {
        aguilaresCMB: variables.cmb1,
        aguilaresCMN: variables.cmn1,
        aguilaresEQUIVALENTE: variables.equivalente1,
        aguilaresMELAZA: variables.melaza1,
        aguilaresBLANCO: variables.blanco1,
        aguilaresREFINADO: variables.refinado1,
        aguilaresORGANICO: variables.organico1,
        aguilaresCRUDO: variables.crudo1,
        aguilaresOTROS: variables.otros1,
        aguilaresFISICOTOTAL: variables.fisicoTotal1,
        aguilaresALCPRODUCIDO: aguilares.aguilaresALCPRODUCIDO,
        aguilaresALCHIDRATADO: aguilares.aguilaresALCHIDRATADO,
        aguilaresANHIDRO: aguilares.aguilaresANHIDRO,
        aguilaresfinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Bella Vista" &&
      dataZafraTucuman.bellaVistaInicioZafra &&
      dataZafraTucuman.bellaVistaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.bellaVistaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroBellaVistaComparativo
    ) {
      variables.cmb2 += d.moliendaCanaBruta || 0;
      variables.cmn2 += d.moliendaCanaNeta || 0;
      variables.equivalente2 += Number(d.azucarEquivalente) || 0;
      variables.melaza2 += d.melazaProducida || 0;
      variables.blanco2 += d.azucarBlancoProducido || 0;
      variables.refinado2 += d.azucarRefinado || 0;
      variables.organico2 += d.azucarOrganico || 0;
      variables.crudo2 += d.azucarCrudoProducido || 0;
      variables.otros2 += d.otroAzucar || 0;
      variables.fisicoTotal2 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      bellaVista = {
        bellaVistaCMB: variables.cmb2,
        bellaVistaCMN: variables.cmn2,
        bellaVistaEQUIVALENTE: variables.equivalente2,
        bellaVistaMELAZA: variables.melaza2,
        bellaVistaBLANCO: variables.blanco2,
        bellaVistaREFINADO: variables.refinado2,
        bellaVistaORGANICO: variables.organico2,
        bellaVistaCRUDO: variables.crudo2,
        bellaVistaOTROS: variables.otros2,
        bellaVistaFISICOTOTAL: variables.fisicoTotal2,
        bellaVistaALCPRODUCIDO: bellaVista.bellaVistaALCPRODUCIDO,
        bellaVistaALCHIDRATADO: bellaVista.bellaVistaALCHIDRATADO,
        bellaVistaANHIDRO: bellaVista.bellaVistaANHIDRO,
        bellaVistafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Concepción" &&
      dataZafraTucuman.concepcionInicioZafra &&
      dataZafraTucuman.concepcionFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.concepcionInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroConcepcionComparativo
    ) {

      variables.cmb3 += d.moliendaCanaBruta || 0;
      variables.cmn3 += d.moliendaCanaNeta || 0;
      variables.equivalente3 += Number(d.azucarEquivalente) || 0;
      variables.melaza3 += d.melazaProducida || 0;
      variables.blanco3 += d.azucarBlancoProducido || 0;
      variables.refinado3 += d.azucarRefinado || 0;
      variables.organico3 += d.azucarOrganico || 0;
      variables.crudo3 += d.azucarCrudoProducido || 0;
      variables.otros3 += d.otroAzucar || 0;
      variables.fisicoTotal3 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      concepcion = {
        concepcionCMB: variables.cmb3,
        concepcionCMN: variables.cmn3,
        concepcionEQUIVALENTE: variables.equivalente3,
        concepcionMELAZA: variables.melaza3,
        concepcionBLANCO: variables.blanco3,
        concepcionREFINADO: variables.refinado3,
        concepcionORGANICO: variables.organico3,
        concepcionCRUDO: variables.crudo3,
        concepcionOTROS: variables.otros3,
        concepcionFISICOTOTAL: variables.fisicoTotal3,
        concepcionALCPRODUCIDO: concepcion.concepcionALCPRODUCIDO,
        concepcionALCHIDRATADO: concepcion.concepcionALCHIDRATADO,
        concepcionANHIDRO: concepcion.concepcionANHIDRO,
        concepcionfinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Cruz Alta" &&
      dataZafraTucuman.cruzAltaInicioZafra &&
      dataZafraTucuman.cruzAltaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.cruzAltaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroCruzAltaComparativo
    ) {
      variables.cmb4 += d.moliendaCanaBruta || 0;
      variables.cmn4 += d.moliendaCanaNeta || 0;
      variables.equivalente4 += Number(d.azucarEquivalente) || 0;
      variables.melaza4 += d.melazaProducida || 0;
      variables.blanco4 += d.azucarBlancoProducido || 0;
      variables.refinado4 += d.azucarRefinado || 0;
      variables.organico4 += d.azucarOrganico || 0;
      variables.crudo4 += d.azucarCrudoProducido || 0;
      variables.otros4 += d.otroAzucar || 0;
      variables.fisicoTotal4 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      cruzAlta = {
        cruzAltaCMB: variables.cmb4,
        cruzAltaCMN: variables.cmn4,
        cruzAltaEQUIVALENTE: variables.equivalente4,
        cruzAltaMELAZA: variables.melaza4,
        cruzAltaBLANCO: variables.blanco4,
        cruzAltaREFINADO: variables.refinado4,
        cruzAltaORGANICO: variables.organico4,
        cruzAltaCRUDO: variables.crudo4,
        cruzAltaOTROS: variables.otros4,
        cruzAltaFISICOTOTAL: variables.fisicoTotal4,
        cruzAltaALCPRODUCIDO: cruzAlta.cruzAltaALCPRODUCIDO,
        cruzAltaALCHIDRATADO: cruzAlta.cruzAltaALCHIDRATADO,
        cruzAltaANHIDRO: cruzAlta.cruzAltaANHIDRO,
        cruzAltafinZafra: true
      };
    }

    if (
      d.ingenioNombre === "Famaillá" &&
      dataZafraTucuman.famaillaInicioZafra &&
      dataZafraTucuman.famaillaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.famaillaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroFamaillaComparativo
    ) {
      variables.cmb6 += d.moliendaCanaBruta || 0;
      variables.cmn6 += d.moliendaCanaNeta || 0;
      variables.equivalente6 += Number(d.azucarEquivalente) || 0;
      variables.melaza6 += d.melazaProducida || 0;
      variables.blanco6 += d.azucarBlancoProducido || 0;
      variables.refinado6 += d.azucarRefinado || 0;
      variables.organico6 += d.azucarOrganico || 0;
      variables.crudo6 += d.azucarCrudoProducido || 0;
      variables.otros6 += d.otroAzucar || 0;
      variables.fisicoTotal6 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      famailla = {
        famaillaCMB: variables.cmb6,
        famaillaCMN: variables.cmn6,
        famaillaEQUIVALENTE: variables.equivalente6,
        famaillaMELAZA: variables.melaza6,
        famaillaBLANCO: variables.blanco6,
        famaillaREFINADO: variables.refinado6,
        famaillaORGANICO: variables.organico6,
        famaillaCRUDO: variables.crudo6,
        famaillaOTROS: variables.otros6,
        famaillaFISICOTOTAL: variables.fisicoTotal6,
        famaillaALCPRODUCIDO: famailla.famaillaALCPRODUCIDO,
        famaillaALCHIDRATADO: famailla.famaillaALCHIDRATADO,
        famaillaANHIDRO: famailla.famaillaANHIDRO,
        famaillafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "La Corona" &&
      dataZafraTucuman.laCoronaInicioZafra &&
      dataZafraTucuman.laCoronaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.laCoronaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLaCoronaComparativo
    ) {
      variables.cmb7 += d.moliendaCanaBruta || 0;
      variables.cmn7 += d.moliendaCanaNeta || 0;
      variables.equivalente7 += Number(d.azucarEquivalente) || 0;
      variables.melaza7 += d.melazaProducida || 0;
      variables.blanco7 += d.azucarBlancoProducido || 0;
      variables.refinado7 += d.azucarRefinado || 0;
      variables.organico7 += d.azucarOrganico || 0;
      variables.crudo7 += d.azucarCrudoProducido || 0;
      variables.otros7 += d.otroAzucar || 0;
      variables.fisicoTotal7 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laCorona = {
        laCoronaCMB: variables.cmb7,
        laCoronaCMN: variables.cmn7,
        laCoronaEQUIVALENTE: variables.equivalente7,
        laCoronaMELAZA: variables.melaza7,
        laCoronaBLANCO: variables.blanco7,
        laCoronaREFINADO: variables.refinado7,
        laCoronaORGANICO: variables.organico7,
        laCoronaCRUDO: variables.crudo7,
        laCoronaOTROS: variables.otros7,
        laCoronaFISICOTOTAL: variables.fisicoTotal7,
        laCoronaALCPRODUCIDO: laCorona.laCoronaALCPRODUCIDO,
        laCoronaALCHIDRATADO: laCorona.laCoronaALCHIDRATADO,
        laCoronaANHIDRO: laCorona.laCoronaANHIDRO,
        laCoronafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "La Florida" &&
      dataZafraTucuman.laFloridaInicioZafra &&
      dataZafraTucuman.laFloridaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.laFloridaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLaFloridaComparativo
    ) {
      variables.cmb8 += d.moliendaCanaBruta || 0;
      variables.cmn8 += d.moliendaCanaNeta || 0;
      variables.equivalente8 += Number(d.azucarEquivalente) || 0;
      variables.melaza8 += d.melazaProducida || 0;
      variables.blanco8 += d.azucarBlancoProducido || 0;
      variables.refinado8 += d.azucarRefinado || 0;
      variables.organico8 += d.azucarOrganico || 0;
      variables.crudo8 += d.azucarCrudoProducido || 0;
      variables.otros8 += d.otroAzucar || 0;
      variables.fisicoTotal8 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laFlorida = {
        laFloridaCMB: variables.cmb8,
        laFloridaCMN: variables.cmn8,
        laFloridaEQUIVALENTE: variables.equivalente8,
        laFloridaMELAZA: variables.melaza8,
        laFloridaBLANCO: variables.blanco8,
        laFloridaREFINADO: variables.refinado8,
        laFloridaORGANICO: variables.organico8,
        laFloridaCRUDO: variables.crudo8,
        laFloridaOTROS: variables.otros8,
        laFloridaFISICOTOTAL: variables.fisicoTotal8,
        laFloridaALCPRODUCIDO: laFlorida.laFloridaALCPRODUCIDO,
        laFloridaALCHIDRATADO: laFlorida.laFloridaALCHIDRATADO,
        laFloridaANHIDRO: laFlorida.laFloridaANHIDRO,
        laFloridafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "La Providencia" &&
      dataZafraTucuman.laProvidenciaInicioZafra &&
      dataZafraTucuman.laProvidenciaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.laProvidenciaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLaProvidenciaComparativo
    ) {
      variables.cmb9 += d.moliendaCanaBruta || 0;
      variables.cmn9 += d.moliendaCanaNeta || 0;
      variables.equivalente9 += Number(d.azucarEquivalente) || 0;
      variables.melaza9 += d.melazaProducida || 0;
      variables.blanco9 += d.azucarBlancoProducido || 0;
      variables.refinado9 += d.azucarRefinado || 0;
      variables.organico9 += d.azucarOrganico || 0;
      variables.crudo9 += d.azucarCrudoProducido || 0;
      variables.otros9 += d.otroAzucar || 0;
      variables.fisicoTotal9 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laProvidencia = {
        laProvidenciaCMB: variables.cmb9,
        laProvidenciaCMN: variables.cmn9,
        laProvidenciaEQUIVALENTE: variables.equivalente9,
        laProvidenciaMELAZA: variables.melaza9,
        laProvidenciaBLANCO: variables.blanco9,
        laProvidenciaREFINADO: variables.refinado9,
        laProvidenciaORGANICO: variables.organico9,
        laProvidenciaCRUDO: variables.crudo9,
        laProvidenciaOTROS: variables.otros9,
        laProvidenciaFISICOTOTAL: variables.fisicoTotal9,
        laProvidenciaALCPRODUCIDO: laProvidencia.laProvidenciaALCPRODUCIDO,
        laProvidenciaALCHIDRATADO: laProvidencia.laProvidenciaALCHIDRATADO,
        laProvidenciaANHIDRO: laProvidencia.laProvidenciaANHIDRO,
        laProvidenciafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "La Trinidad" &&
      dataZafraTucuman.laTrinidadInicioZafra &&
      dataZafraTucuman.laTrinidadFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.laTrinidadInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLaTrinidadComparativo
    ) {
      variables.cmb10 += d.moliendaCanaBruta || 0;
      variables.cmn10 += d.moliendaCanaNeta || 0;
      variables.equivalente10 += Number(d.azucarEquivalente) || 0;
      variables.melaza10 += d.melazaProducida || 0;
      variables.blanco10 += d.azucarBlancoProducido || 0;
      variables.refinado10 += d.azucarRefinado || 0;
      variables.organico10 += d.azucarOrganico || 0;
      variables.crudo10 += d.azucarCrudoProducido || 0;
      variables.otros10 += d.otroAzucar || 0;
      variables.fisicoTotal10 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      laTrinidad = {
        laTrinidadCMB: variables.cmb10,
        laTrinidadCMN: variables.cmn10,
        laTrinidadEQUIVALENTE: variables.equivalente10,
        laTrinidadMELAZA: variables.melaza10,
        laTrinidadBLANCO: variables.blanco10,
        laTrinidadREFINADO: variables.refinado10,
        laTrinidadORGANICO: variables.organico10,
        laTrinidadCRUDO: variables.crudo10,
        laTrinidadOTROS: variables.otros10,
        laTrinidadFISICOTOTAL: variables.fisicoTotal10,
        laTrinidadALCPRODUCIDO: laTrinidad.laTrinidadALCPRODUCIDO,
        laTrinidadALCHIDRATADO: laTrinidad.laTrinidadALCHIDRATADO,
        laTrinidadANHIDRO: laTrinidad.laTrinidadANHIDRO,
        laTrinidadfinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Leales" &&
      dataZafraTucuman.lealesInicioZafra &&
      dataZafraTucuman.lealesFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.lealesInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLealesComparativo
    ) {
      variables.cmb11 += d.moliendaCanaBruta || 0;
      variables.cmn11 += d.moliendaCanaNeta || 0;
      variables.equivalente11 += Number(d.azucarEquivalente) || 0;
      variables.melaza11 += d.melazaProducida || 0;
      variables.blanco11 += d.azucarBlancoProducido || 0;
      variables.refinado11 += d.azucarRefinado || 0;
      variables.organico11 += d.azucarOrganico || 0;
      variables.crudo11 += d.azucarCrudoProducido || 0;
      variables.otros11 += d.otroAzucar || 0;
      variables.fisicoTotal11 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      leales = {
        lealesCMB: variables.cmb11,
        lealesCMN: variables.cmn11,
        lealesEQUIVALENTE: variables.equivalente11,
        lealesMELAZA: variables.melaza11,
        lealesBLANCO: variables.blanco11,
        lealesREFINADO: variables.refinado11,
        lealesORGANICO: variables.organico11,
        lealesCRUDO: variables.crudo11,
        lealesOTROS: variables.otros11,
        lealesFISICOTOTAL: variables.fisicoTotal11,
        lealesALCPRODUCIDO: leales.lealesALCPRODUCIDO,
        lealesALCHIDRATADO: leales.lealesALCHIDRATADO,
        lealesANHIDRO: leales.lealesANHIDRO,
        lealesfinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Marapa" &&
      dataZafraTucuman.marapaInicioZafra &&
      dataZafraTucuman.marapaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.marapaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroMarapaComparativo
    ) {
      variables.cmb12 += d.moliendaCanaBruta || 0;
      variables.cmn12 += d.moliendaCanaNeta || 0;
      variables.equivalente12 += Number(d.azucarEquivalente) || 0;
      variables.melaza12 += d.melazaProducida || 0;
      variables.blanco12 += d.azucarBlancoProducido || 0;
      variables.refinado12 += d.azucarRefinado || 0;
      variables.organico12 += d.azucarOrganico || 0;
      variables.crudo12 += d.azucarCrudoProducido || 0;
      variables.otros12 += d.otroAzucar || 0;
      variables.fisicoTotal12 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      marapa = {
        marapaCMB: variables.cmb12,
        marapaCMN: variables.cmn12,
        marapaEQUIVALENTE: variables.equivalente12,
        marapaMELAZA: variables.melaza12,
        marapaBLANCO: variables.blanco12,
        marapaREFINADO: variables.refinado12,
        marapaORGANICO: variables.organico12,
        marapaCRUDO: variables.crudo12,
        marapaOTROS: variables.otros12,
        marapaFISICOTOTAL: variables.fisicoTotal12,
        marapaALCPRODUCIDO: marapa.marapaALCPRODUCIDO,
        marapaALCHIDRATADO: marapa.marapaALCHIDRATADO,
        marapaANHIDRO: marapa.marapaANHIDRO,
        marapafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Ñuñorco" &&
      dataZafraTucuman.nunorcoInicioZafra &&
      dataZafraTucuman.nunorcoFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.nunorcoInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroNunorcoComparativo
    ) {
      variables.cmb13 += d.moliendaCanaBruta || 0;
      variables.cmn13 += d.moliendaCanaNeta || 0;
      variables.equivalente13 += Number(d.azucarEquivalente) || 0;
      variables.melaza13 += d.melazaProducida || 0;
      variables.blanco13 += d.azucarBlancoProducido || 0;
      variables.refinado13 += d.azucarRefinado || 0;
      variables.organico13 += d.azucarOrganico || 0;
      variables.crudo13 += d.azucarCrudoProducido || 0;
      variables.otros13 += d.otroAzucar || 0;
      variables.fisicoTotal13 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      nunorco = {
        nunorcoCMB: variables.cmb13,
        nunorcoCMN: variables.cmn13,
        nunorcoEQUIVALENTE: variables.equivalente13,
        nunorcoMELAZA: variables.melaza13,
        nunorcoBLANCO: variables.blanco13,
        nunorcoREFINADO: variables.refinado13,
        nunorcoORGANICO: variables.organico13,
        nunorcoCRUDO: variables.crudo13,
        nunorcoOTROS: variables.otros13,
        nunorcoFISICOTOTAL: variables.fisicoTotal13,
        nunorcoALCPRODUCIDO: nunorco.nunorcoALCPRODUCIDO,
        nunorcoALCHIDRATADO: nunorco.nunorcoALCHIDRATADO,
        nunorcoANHIDRO: nunorco.nunorcoANHIDRO,
        nunorcofinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Santa Barbara" &&
      dataZafraTucuman.staBarbaraInicioZafra &&
      dataZafraTucuman.staBarbaraFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.staBarbaraInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroStaBarbaraComparativo
    ) {
      variables.cmb14 += d.moliendaCanaBruta || 0;
      variables.cmn14 += d.moliendaCanaNeta || 0;
      variables.equivalente14 += Number(d.azucarEquivalente) || 0;
      variables.melaza14 += d.melazaProducida || 0;
      variables.blanco14 += d.azucarBlancoProducido || 0;
      variables.refinado14 += d.azucarRefinado || 0;
      variables.organico14 += d.azucarOrganico || 0;
      variables.crudo14 += d.azucarCrudoProducido || 0;
      variables.otros14 += d.otroAzucar || 0;
      variables.fisicoTotal14 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      staBarbara = {
        staBarbaraCMB: variables.cmb14,
        staBarbaraCMN: variables.cmn14,
        staBarbaraEQUIVALENTE: variables.equivalente14,
        staBarbaraMELAZA: variables.melaza14,
        staBarbaraBLANCO: variables.blanco14,
        staBarbaraREFINADO: variables.refinado14,
        staBarbaraORGANICO: variables.organico14,
        staBarbaraCRUDO: variables.crudo14,
        staBarbaraOTROS: variables.otros14,
        staBarbaraFISICOTOTAL: variables.fisicoTotal14,
        staBarbaraALCPRODUCIDO: staBarbara.staBarbaraALCPRODUCIDO,
        staBarbaraALCHIDRATADO: staBarbara.staBarbaraALCHIDRATADO,
        staBarbaraANHIDRO: staBarbara.staBarbaraANHIDRO,
        staBarbarafinZafra: true
      };
    }
    if (
      d.ingenioNombre === "Santa Rosa" &&
      dataZafraTucuman.staRosaInicioZafra &&
      dataZafraTucuman.staRosaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraTucuman.staRosaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroStaRosaComparativo
    ) {
      variables.cmb15 += d.moliendaCanaBruta || 0;
      variables.cmn15 += d.moliendaCanaNeta || 0;
      variables.equivalente15 += Number(d.azucarEquivalente) || 0;
      variables.melaza15 += d.melazaProducida || 0;
      variables.blanco15 += d.azucarBlancoProducido || 0;
      variables.refinado15 += d.azucarRefinado || 0;
      variables.organico15 += d.azucarOrganico || 0;
      variables.crudo15 += d.azucarCrudoProducido || 0;
      variables.otros15 += d.otroAzucar || 0;
      variables.fisicoTotal15 += d.azucarBlancoProducido + d.azucarRefinado + d.azucarOrganico + d.azucarCrudoProducido + d.otroAzucar
      staRosa = {
        staRosaCMB: variables.cmb15,
        staRosaCMN: variables.cmn15,
        staRosaEQUIVALENTE: variables.equivalente15,
        staRosaMELAZA: variables.melaza15,
        staRosaBLANCO: variables.blanco15,
        staRosaREFINADO: variables.refinado15,
        staRosaORGANICO: variables.organico15,
        staRosaCRUDO: variables.crudo15,
        staRosaOTROS: variables.otros15,
        staRosaFISICOTOTAL: variables.fisicoTotal15,
        staRosaALCPRODUCIDO: staRosa.staRosaALCPRODUCIDO,
        staRosaALCHIDRATADO: staRosa.staRosaALCHIDRATADO,
        staRosaANHIDRO: staRosa.staRosaANHIDRO,
        staRosafinZafra: true
      };
    }
  })

  if (anioStart === 2023) {
    leales.lealesANHIDRO = leales.lealesANHIDRO + anhidroLeales2023
    concepcion.concepcionANHIDRO = concepcion.concepcionANHIDRO + anhidroConcepcion2023
    bellaVista.bellaVistaANHIDRO = bellaVista.bellaVistaANHIDRO + anhidroBellaVista2023
  }
  if (anioEnd === 2023) {
    lealesEnd.lealesANHIDRO = lealesEnd.lealesANHIDRO + anhidroLeales2023
    concepcionEnd.concepcionANHIDRO = concepcionEnd.concepcionANHIDRO + anhidroConcepcion2023
    bellaVistaEnd.bellaVistaANHIDRO = bellaVistaEnd.bellaVistaANHIDRO + anhidroBellaVista2023
  }

  if (anioStart === 2024) {
    leales.lealesANHIDRO = leales.lealesANHIDRO + anhidroLeales2024
    concepcion.concepcionANHIDRO = concepcion.concepcionANHIDRO + anhidroConcepcion2024
    bellaVista.bellaVistaANHIDRO = bellaVista.bellaVistaANHIDRO + anhidroBellaVista2024
  }
  if (anioEnd === 2024) {
    lealesEnd.lealesANHIDRO = lealesEnd.lealesANHIDRO + anhidroLeales2024
    concepcionEnd.concepcionANHIDRO = concepcionEnd.concepcionANHIDRO + anhidroConcepcion2024
    bellaVistaEnd.bellaVistaANHIDRO = bellaVistaEnd.bellaVistaANHIDRO + anhidroBellaVista2024
  }
  if (anioStart === 2025) {
    // bellaVista.bellaVistaANHIDRO = bellaVista.bellaVistaANHIDRO + anhidroBellaVista2025
    destBellaVista.destBellaVistaANHIDRO = destBellaVista.destBellaVistaANHIDRO + anhidroBellaVista2025
  }
  if (anioEnd === 2025) {
    // bellaVistaEnd.bellaVistaANHIDRO = bellaVistaEnd.bellaVistaANHIDRO + anhidroBellaVista2025
    destBellaVistaEnd.destBellaVistaANHIDRO = destBellaVistaEnd.destBellaVistaANHIDRO + anhidroBellaVista2025
  }

  aguilares.aguilaresRCMB = Math.round((Number(aguilares?.aguilaresEQUIVALENTE) / aguilares?.aguilaresCMB) * 100 * 100) / 100
  aguilares.aguilaresRCMN = Math.round((Number(aguilares?.aguilaresEQUIVALENTE) / aguilares?.aguilaresCMN) * 100 * 100) / 100

  bellaVista.bellaVistaRCMB = Math.round((Number(bellaVista?.bellaVistaEQUIVALENTE) / bellaVista?.bellaVistaCMB) * 100 * 100) / 100
  bellaVista.bellaVistaRCMN = Math.round((Number(bellaVista?.bellaVistaEQUIVALENTE) / bellaVista?.bellaVistaCMN) * 100 * 100) / 100

  concepcion.concepcionRCMB = Math.round((Number(concepcion?.concepcionEQUIVALENTE) / concepcion?.concepcionCMB) * 100 * 100) / 100
  concepcion.concepcionRCMN = Math.round((Number(concepcion?.concepcionEQUIVALENTE) / concepcion?.concepcionCMN) * 100 * 100) / 100

  cruzAlta.cruzAltaRCMB = Math.round((Number(cruzAlta?.cruzAltaEQUIVALENTE) / cruzAlta?.cruzAltaCMB) * 100 * 100) / 100
  cruzAlta.cruzAltaRCMN = Math.round((Number(cruzAlta?.cruzAltaEQUIVALENTE) / cruzAlta?.cruzAltaCMN) * 100 * 100) / 100

  famailla.famaillaRCMB = Math.round((Number(famailla?.famaillaEQUIVALENTE) / famailla?.famaillaCMB) * 100 * 100) / 100
  famailla.famaillaRCMN = Math.round((Number(famailla?.famaillaEQUIVALENTE) / famailla?.famaillaCMN) * 100 * 100) / 100

  laCorona.laCoronaRCMB = Math.round((Number(laCorona?.laCoronaEQUIVALENTE) / laCorona?.laCoronaCMB) * 100 * 100) / 100
  laCorona.laCoronaRCMN = Math.round((Number(laCorona?.laCoronaEQUIVALENTE) / laCorona?.laCoronaCMN) * 100 * 100) / 100

  laFlorida.laFloridaRCMB = Math.round((Number(laFlorida?.laFloridaEQUIVALENTE) / laFlorida?.laFloridaCMB) * 100 * 100) / 100
  laFlorida.laFloridaRCMN = Math.round((Number(laFlorida?.laFloridaEQUIVALENTE) / laFlorida?.laFloridaCMN) * 100 * 100) / 100

  laProvidencia.laProvidenciaRCMB = Math.round((Number(laProvidencia?.laProvidenciaEQUIVALENTE) / laProvidencia?.laProvidenciaCMB) * 100 * 100) / 100
  laProvidencia.laProvidenciaRCMN = Math.round((Number(laProvidencia?.laProvidenciaEQUIVALENTE) / laProvidencia?.laProvidenciaCMN) * 100 * 100) / 100

  laTrinidad.laTrinidadRCMB = Math.round((Number(laTrinidad?.laTrinidadEQUIVALENTE) / laTrinidad?.laTrinidadCMB) * 100 * 100) / 100
  laTrinidad.laTrinidadRCMN = Math.round((Number(laTrinidad?.laTrinidadEQUIVALENTE) / laTrinidad?.laTrinidadCMN) * 100 * 100) / 100

  leales.lealesRCMB = Math.round((Number(leales?.lealesEQUIVALENTE) / leales?.lealesCMB) * 100 * 100) / 100
  leales.lealesRCMN = Math.round((Number(leales?.lealesEQUIVALENTE) / leales?.lealesCMN) * 100 * 100) / 100

  marapa.marapaRCMB = Math.round((Number(marapa?.marapaEQUIVALENTE) / marapa?.marapaCMB) * 100 * 100) / 100
  marapa.marapaRCMN = Math.round((Number(marapa?.marapaEQUIVALENTE) / marapa?.marapaCMN) * 100 * 100) / 100

  nunorco.nunorcoRCMB = Math.round((Number(nunorco?.nunorcoEQUIVALENTE) / nunorco?.nunorcoCMB) * 100 * 100) / 100
  nunorco.nunorcoRCMN = Math.round((Number(nunorco?.nunorcoEQUIVALENTE) / nunorco?.nunorcoCMN) * 100 * 100) / 100

  staBarbara.staBarbaraRCMB = Math.round((Number(staBarbara?.staBarbaraEQUIVALENTE) / staBarbara?.staBarbaraCMB) * 100 * 100) / 100
  staBarbara.staBarbaraRCMN = Math.round((Number(staBarbara?.staBarbaraEQUIVALENTE) / staBarbara?.staBarbaraCMN) * 100 * 100) / 100

  staRosa.staRosaRCMB = Math.round((Number(staRosa?.staRosaEQUIVALENTE) / staRosa?.staRosaCMB) * 100 * 100) / 100
  staRosa.staRosaRCMN = Math.round((Number(staRosa?.staRosaEQUIVALENTE) / staRosa?.staRosaCMN) * 100 * 100) / 100


  aguilaresEnd.aguilaresRCMB = Math.round((Number(aguilaresEnd?.aguilaresEQUIVALENTE) / aguilaresEnd?.aguilaresCMB) * 100 * 100) / 100
  aguilaresEnd.aguilaresRCMN = Math.round((Number(aguilaresEnd?.aguilaresEQUIVALENTE) / aguilaresEnd?.aguilaresCMN) * 100 * 100) / 100

  bellaVistaEnd.bellaVistaRCMB = Math.round((Number(bellaVistaEnd?.bellaVistaEQUIVALENTE) / bellaVistaEnd?.bellaVistaCMB) * 100 * 100) / 100
  bellaVistaEnd.bellaVistaRCMN = Math.round((Number(bellaVistaEnd?.bellaVistaEQUIVALENTE) / bellaVistaEnd?.bellaVistaCMN) * 100 * 100) / 100

  concepcionEnd.concepcionRCMB = Math.round((Number(concepcionEnd?.concepcionEQUIVALENTE) / concepcionEnd?.concepcionCMB) * 100 * 100) / 100
  concepcionEnd.concepcionRCMN = Math.round((Number(concepcionEnd?.concepcionEQUIVALENTE) / concepcionEnd?.concepcionCMN) * 100 * 100) / 100

  cruzAltaEnd.cruzAltaRCMB = Math.round((Number(cruzAltaEnd?.cruzAltaEQUIVALENTE) / cruzAltaEnd?.cruzAltaCMB) * 100 * 100) / 100
  cruzAltaEnd.cruzAltaRCMN = Math.round((Number(cruzAltaEnd?.cruzAltaEQUIVALENTE) / cruzAltaEnd?.cruzAltaCMN) * 100 * 100) / 100

  famaillaEnd.famaillaRCMB = Math.round((Number(famaillaEnd?.famaillaEQUIVALENTE) / famaillaEnd?.famaillaCMB) * 100 * 100) / 100
  famaillaEnd.famaillaRCMN = Math.round((Number(famaillaEnd?.famaillaEQUIVALENTE) / famaillaEnd?.famaillaCMN) * 100 * 100) / 100

  laCoronaEnd.laCoronaRCMB = Math.round((Number(laCoronaEnd?.laCoronaEQUIVALENTE) / laCoronaEnd?.laCoronaCMB) * 100 * 100) / 100
  laCoronaEnd.laCoronaRCMN = Math.round((Number(laCoronaEnd?.laCoronaEQUIVALENTE) / laCoronaEnd?.laCoronaCMN) * 100 * 100) / 100

  laFloridaEnd.laFloridaRCMB = Math.round((Number(laFloridaEnd?.laFloridaEQUIVALENTE) / laFloridaEnd?.laFloridaCMB) * 100 * 100) / 100
  laFloridaEnd.laFloridaRCMN = Math.round((Number(laFloridaEnd?.laFloridaEQUIVALENTE) / laFloridaEnd?.laFloridaCMN) * 100 * 100) / 100

  laProvidenciaEnd.laProvidenciaRCMB = Math.round((Number(laProvidenciaEnd?.laProvidenciaEQUIVALENTE) / laProvidenciaEnd?.laProvidenciaCMB) * 100 * 100) / 100
  laProvidenciaEnd.laProvidenciaRCMN = Math.round((Number(laProvidenciaEnd?.laProvidenciaEQUIVALENTE) / laProvidenciaEnd?.laProvidenciaCMN) * 100 * 100) / 100

  laTrinidadEnd.laTrinidadRCMB = Math.round((Number(laTrinidadEnd?.laTrinidadEQUIVALENTE) / laTrinidadEnd?.laTrinidadCMB) * 100 * 100) / 100
  laTrinidadEnd.laTrinidadRCMN = Math.round((Number(laTrinidadEnd?.laTrinidadEQUIVALENTE) / laTrinidadEnd?.laTrinidadCMN) * 100 * 100) / 100

  lealesEnd.lealesRCMB = Math.round((Number(lealesEnd?.lealesEQUIVALENTE) / lealesEnd?.lealesCMB) * 100 * 100) / 100
  lealesEnd.lealesRCMN = Math.round((Number(lealesEnd?.lealesEQUIVALENTE) / lealesEnd?.lealesCMN) * 100 * 100) / 100

  marapaEnd.marapaRCMB = Math.round((Number(marapaEnd?.marapaEQUIVALENTE) / marapaEnd?.marapaCMB) * 100 * 100) / 100
  marapaEnd.marapaRCMN = Math.round((Number(marapaEnd?.marapaEQUIVALENTE) / marapaEnd?.marapaCMN) * 100 * 100) / 100

  nunorcoEnd.nunorcoRCMB = Math.round((Number(nunorcoEnd?.nunorcoEQUIVALENTE) / nunorcoEnd?.nunorcoCMB) * 100 * 100) / 100
  nunorcoEnd.nunorcoRCMN = Math.round((Number(nunorcoEnd?.nunorcoEQUIVALENTE) / nunorcoEnd?.nunorcoCMN) * 100 * 100) / 100

  staBarbaraEnd.staBarbaraRCMB = Math.round((Number(staBarbaraEnd?.staBarbaraEQUIVALENTE) / staBarbaraEnd?.staBarbaraCMB) * 100 * 100) / 100
  staBarbaraEnd.staBarbaraRCMN = Math.round((Number(staBarbaraEnd?.staBarbaraEQUIVALENTE) / staBarbaraEnd?.staBarbaraCMN) * 100 * 100) / 100

  staRosaEnd.staRosaRCMB = Math.round((Number(staRosaEnd?.staRosaEQUIVALENTE) / staRosaEnd?.staRosaCMB) * 100 * 100) / 100
  staRosaEnd.staRosaRCMN = Math.round((Number(staRosaEnd?.staRosaEQUIVALENTE) / staRosaEnd?.staRosaCMN) * 100 * 100) / 100
  
  setAguilares(aguilares)
  setBellavista(bellaVista)
  setBellavistaDestileria(destBellaVista)
  setConcepcion(concepcion)
  setCruzalta(cruzAlta)
  setFamailla(famailla)
  setFlorida(laFlorida)
  setCorona(laCorona)
  setProvincia(laProvidencia)
  setTrinidad(laTrinidad)
  setLeales(leales)
  setMarapa(marapa)
  setNunorco(nunorco)
  setSantabarbara(staBarbara)
  setSantarosa(staRosa)

  setAguilaresComp(aguilaresEnd)
  setBellavistaComp(bellaVistaEnd)
  setBellavistaDestileriaComp(destBellaVistaEnd)
  setConcepcionComp(concepcionEnd)
  setCruzaltaComp(cruzAltaEnd)
  setFamaillaComp(famaillaEnd)
  setFloridaComp(laFloridaEnd)
  setCoronaComp(laCoronaEnd)
  setProvinciaComp(laProvidenciaEnd)
  setTrinidadComp(laTrinidadEnd)
  setLealesComp(lealesEnd)
  setMarapaComp(marapaEnd)
  setNunorcoComp(nunorcoEnd)
  setSantabarbaraComp(staBarbaraEnd)
  setSantarosaComp(staRosaEnd)

  /****************************** NORTE DATOS DESTILERIA ALCOHOL ******************************/
  /********* NORTE ANIO ACTUAL *********/
  dataAnioEndDestileriaNorte?.forEach((d) => {
    if (
      d.ingenioNombre === "La Esperanza" &&
      dataDestileriaNorteEnd.laEsperanzaInicioDestileriaEnd &&
      dataDestileriaNorteEnd.laEsperanzaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorteEnd.laEsperanzaFinDestileriaEnd)
    ) {
      variablesEnd.producido16 += d.alcoholProducido || 0;
      variablesEnd.hidratado16 += d.alcoholHidratado || 0;
      laEsperanzaEnd = {
        laEsperanzaALCPRODUCIDO: variablesEnd.producido16,
        laEsperanzaALCHIDRATADO: variablesEnd.hidratado16,
        laEsperanzaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Ledesma" &&
      dataDestileriaNorteEnd.ledesmaInicioDestileriaEnd &&
      dataDestileriaNorteEnd.ledesmaFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorteEnd.ledesmaFinDestileriaEnd)
    ) {
      variablesEnd.producido17 += d.alcoholProducido || 0;
      variablesEnd.hidratado17 += d.alcoholHidratado || 0;
      ledesmaEnd = {
        ledesmaALCPRODUCIDO: variablesEnd.producido17,
        ledesmaALCHIDRATADO: variablesEnd.hidratado17,
        ledesmaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Río Grande" &&
      dataDestileriaNorteEnd.rioGrandeInicioDestileriaEnd &&
      dataDestileriaNorteEnd.rioGrandeFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorteEnd.rioGrandeFinDestileriaEnd)
    ) {

      variablesEnd.producido18 += d.alcoholProducido || 0;
      variablesEnd.hidratado18 += d.alcoholHidratado || 0;
      rioGrandeEnd = {
        rioGrandeALCPRODUCIDO: variablesEnd.producido18,
        rioGrandeALCHIDRATADO: variablesEnd.hidratado18,
        rioGrandeFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "San Isidro" &&
      dataDestileriaNorteEnd.sanIsidroInicioDestileriaEnd &&
      dataDestileriaNorteEnd.sanIsidroFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorteEnd.sanIsidroFinDestileriaEnd)
    ) {
      variablesEnd.producido19 += d.alcoholProducido || 0;
      variablesEnd.hidratado19 += d.alcoholHidratado || 0;
      sanIsidroEnd = {
        sanIsidroALCPRODUCIDO: variablesEnd.producido19,
        sanIsidroALCHIDRATADO: variablesEnd.hidratado19,
        sanIsidroFinDestileria: true,
      };
    }

    if (
      d.ingenioNombre === "Seaboard" &&
      dataDestileriaNorteEnd.seaboardInicioDestileriaEnd &&
      dataDestileriaNorteEnd.seaboardFinDestileriaEnd &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorteEnd.seaboardFinDestileriaEnd)
    ) {
      variablesEnd.producido20 += d.alcoholProducido || 0;
      variablesEnd.hidratado20 += d.alcoholHidratado || 0;
      seaboardEnd = {
        seaboardALCPRODUCIDO: variablesEnd.producido20,
        seaboardALCHIDRATADO: variablesEnd.hidratado20,
        seaboardFinDestileria: true,
      };
    }

  })
  /********* NORTE ANIO COMPARATIVO *********/
  dataAnioStartDestileriaNorte?.forEach((d) => {
    if (
      d.ingenioNombre === "La Esperanza" &&
      dataDestileriaNorte.laEsperanzaInicioDestileria &&
      dataDestileriaNorte.laEsperanzaFinDestileria &&
      new Date(d.fechaParte) >= new Date(dataDestileriaNorte.laEsperanzaInicioDestileria) &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorte.laEsperanzaFinDestileria)
    ) {
      variables.producido16 += d.alcoholProducido || 0;
      variables.hidratado16 += d.alcoholHidratado || 0;
      laEsperanza = {
        laEsperanzaALCPRODUCIDO: variables.producido16,
        laEsperanzaALCHIDRATADO: variables.hidratado16,
        laEsperanzaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Ledesma" &&
      dataDestileriaNorte.ledesmaInicioDestileria &&
      dataDestileriaNorte.ledesmaFinDestileria &&
      new Date(d.fechaParte) >= new Date(dataDestileriaNorte.ledesmaInicioDestileria) &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorte.ledesmaFinDestileria)
    ) {
      variables.producido17 += d.alcoholProducido || 0;
      variables.hidratado17 += d.alcoholHidratado || 0;
      ledesma = {
        ledesmaALCPRODUCIDO: variables.producido17,
        ledesmaALCHIDRATADO: variables.hidratado17,
        ledesmaFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "Río Grande" &&
      dataDestileriaNorte.rioGrandeInicioDestileria &&
      dataDestileriaNorte.rioGrandeFinDestileria &&
      new Date(d.fechaParte) >= new Date(dataDestileriaNorte.rioGrandeInicioDestileria) &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorte.rioGrandeFinDestileria)
    ) {

      variables.producido18 += d.alcoholProducido || 0;
      variables.hidratado18 += d.alcoholHidratado || 0;
      rioGrande = {
        rioGrandeALCPRODUCIDO: variables.producido18,
        rioGrandeALCHIDRATADO: variables.hidratado18,
        rioGrandeFinDestileria: true,
      };
    }
    if (
      d.ingenioNombre === "San Isidro" &&
      dataDestileriaNorte.sanIsidroInicioDestileria &&
      dataDestileriaNorte.sanIsidroFinDestileria &&
      new Date(d.fechaParte) >= new Date(dataDestileriaNorte.sanIsidroInicioDestileria) &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorte.sanIsidroFinDestileria)
    ) {
      variables.producido19 += d.alcoholProducido || 0;
      variables.hidratado19 += d.alcoholHidratado || 0;
      sanIsidro = {
        sanIsidroALCPRODUCIDO: variables.producido19,
        sanIsidroALCHIDRATADO: variables.hidratado19,
        sanIsidroFinDestileria: true,
      };
    }

    if (
      d.ingenioNombre === "Seaboard" &&
      dataDestileriaNorte.seaboardInicioDestileria &&
      dataDestileriaNorte.seaboardFinDestileria &&
      new Date(d.fechaParte) >= new Date(dataDestileriaNorte.seaboardInicioDestileria) &&
      new Date(d.fechaParte) <= new Date(dataDestileriaNorte.seaboardFinDestileria)
    ) {
      variables.producido20 += d.alcoholProducido || 0;
      variables.hidratado20 += d.alcoholHidratado || 0;
      seaboard = {
        seaboardALCPRODUCIDO: variables.producido20,
        seaboardALCHIDRATADO: variables.hidratado20,
        seaboardFinDestileria: true,
      };
    }
  })

  /****************************** NORTE DATOS ANHIDRO ALCOHOL ******************************/
  /********* NORTE ANIO ACTUAL *********/
  dataAnioEndAnhidroNorte?.forEach((d) => {
    if (
      d.ingenioNombre === "La Esperanza" &&
      dataAnhidroNorteEnd.laEsperanzaInicioAnhidroEnd &&
      dataAnhidroNorteEnd.laEsperanzaFinAnhidroEnd &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorteEnd.laEsperanzaInicioAnhidroEnd) &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorteEnd.laEsperanzaFinAnhidroEnd)
    ) {
      variablesEnd.anhidro16 += d.alcoholAnhidro || 0;
      laEsperanzaEnd = {
        laEsperanzaANHIDRO: variablesEnd.anhidro16,
        laEsperanzaALCPRODUCIDO: laEsperanzaEnd.laEsperanzaALCPRODUCIDO,
        laEsperanzaALCHIDRATADO: laEsperanzaEnd.laEsperanzaALCHIDRATADO,
        laEsperanzaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Ledesma" &&
      dataAnhidroNorteEnd.ledesmaInicioAnhidroEnd &&
      dataAnhidroNorteEnd.ledesmaFinAnhidroEnd &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorteEnd.ledesmaInicioAnhidroEnd) &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorteEnd.ledesmaFinAnhidroEnd)
    ) {
      variablesEnd.anhidro17 += d.alcoholAnhidro || 0;
      ledesmaEnd = {
        ledesmaANHIDRO: variablesEnd.anhidro17,
        ledesmaALCPRODUCIDO: ledesmaEnd.ledesmaALCPRODUCIDO,
        ledesmaALCHIDRATADO: ledesmaEnd.ledesmaALCHIDRATADO,
        ledesmaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Río Grande" &&
      dataAnhidroNorteEnd.rioGrandeInicioAnhidroEnd &&
      dataAnhidroNorteEnd.rioGrandeFinAnhidroEnd &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorteEnd.rioGrandeInicioAnhidroEnd) &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorteEnd.rioGrandeFinAnhidroEnd)
    ) {
      variablesEnd.anhidro18 += d.alcoholAnhidro || 0;
      rioGrandeEnd = {
        rioGrandeANHIDRO: variablesEnd.anhidro18,
        rioGrandeALCPRODUCIDO: rioGrandeEnd.rioGrandeALCPRODUCIDO,
        rioGrandeALCHIDRATADO: rioGrandeEnd.rioGrandeALCHIDRATADO,
        rioGrandeFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "San Isidro" &&
      dataAnhidroNorteEnd.sanIsidroInicioAnhidroEnd &&
      dataAnhidroNorteEnd.sanIsidroFinAnhidroEnd &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorteEnd.sanIsidroInicioAnhidroEnd) &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorteEnd.sanIsidroFinAnhidroEnd)
    ) {
      variablesEnd.anhidro19 += d.alcoholAnhidro || 0;
      sanIsidroEnd = {
        sanIsidroANHIDRO: variablesEnd.anhidro19,
        sanIsidroALCPRODUCIDO: sanIsidroEnd.sanIsidroALCPRODUCIDO,
        sanIsidroALCHIDRATADO: sanIsidroEnd.sanIsidroALCHIDRATADO,
        sanIsidroFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Seaboard" &&
      dataAnhidroNorteEnd.seaboardInicioAnhidroEnd &&
      dataAnhidroNorteEnd.seaboardFinAnhidroEnd &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorteEnd.seaboardInicioAnhidroEnd) &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorteEnd.seaboardFinAnhidroEnd)
    ) {
      variablesEnd.anhidro20 += d.alcoholAnhidro || 0;
      seaboardEnd = {
        seaboardANHIDRO: variablesEnd.anhidro20,
        seaboardALCPRODUCIDO: seaboardEnd.seaboardALCPRODUCIDO,
        seaboardALCHIDRATADO: seaboardEnd.seaboardALCHIDRATADO,
        seaboardFinAnhidro: true
      };
    }
  })
  /********* NORTE ANIO COMPARATIVO *********/
  dataAnioStartAnhidroNorte?.forEach((d) => {
    if (
      d.ingenioNombre === "La Esperanza" &&
      dataAnhidroNorte.laEsperanzaInicioAnhidro &&
      dataAnhidroNorte.laEsperanzaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorte.laEsperanzaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorte.laEsperanzaInicioAnhidro)
    ) {
      variables.anhidro16 += d.alcoholAnhidro || 0;
      laEsperanza = {
        laEsperanzaANHIDRO: variables.anhidro16,
        laEsperanzaALCPRODUCIDO: laEsperanza.laEsperanzaALCPRODUCIDO,
        laEsperanzaALCHIDRATADO: laEsperanza.laEsperanzaALCHIDRATADO,
        laEsperanzaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Ledesma" &&
      dataAnhidroNorte.ledesmaInicioAnhidro &&
      dataAnhidroNorte.ledesmaFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorte.ledesmaFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorte.ledesmaInicioAnhidro)
    ) {
      variables.anhidro17 += d.alcoholAnhidro || 0;
      ledesma = {
        ledesmaANHIDRO: variables.anhidro17,
        ledesmaALCPRODUCIDO: ledesma.ledesmaALCPRODUCIDO,
        ledesmaALCHIDRATADO: ledesma.ledesmaALCHIDRATADO,
        ledesmaFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Río Grande" &&
      dataAnhidroNorte.rioGrandeInicioAnhidro &&
      dataAnhidroNorte.rioGrandeFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorte.rioGrandeFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorte.rioGrandeInicioAnhidro)
    ) {
      variables.anhidro18 += d.alcoholAnhidro || 0;
      rioGrande = {
        rioGrandeANHIDRO: variables.anhidro18,
        rioGrandeALCPRODUCIDO: rioGrande.rioGrandeALCPRODUCIDO,
        rioGrandeALCHIDRATADO: rioGrande.rioGrandeALCHIDRATADO,
        rioGrandeFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "San Isidro" &&
      dataAnhidroNorte.sanIsidroInicioAnhidro &&
      dataAnhidroNorte.sanIsidroFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorte.sanIsidroFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorte.sanIsidroInicioAnhidro)
    ) {
      variables.anhidro19 += d.alcoholAnhidro || 0;
      sanIsidro = {
        sanIsidroANHIDRO: variables.anhidro19,
        sanIsidroALCPRODUCIDO: sanIsidro.sanIsidroALCPRODUCIDO,
        sanIsidroALCHIDRATADO: sanIsidro.sanIsidroALCHIDRATADO,
        sanIsidroFinAnhidro: true
      };
    }
    if (
      d.ingenioNombre === "Seaboard" &&
      dataAnhidroNorte.seaboardInicioAnhidro &&
      dataAnhidroNorte.seaboardFinAnhidro &&
      new Date(d.fechaParte) <= new Date(dataAnhidroNorte.seaboardFinAnhidro) &&
      new Date(d.fechaParte) >= new Date(dataAnhidroNorte.seaboardInicioAnhidro)
    ) {
      variables.anhidro20 += d.alcoholAnhidro || 0;
      seaboard = {
        seaboardANHIDRO: variables.anhidro20,
        seaboardALCPRODUCIDO: seaboard.seaboardALCPRODUCIDO,
        seaboardALCHIDRATADO: seaboard.seaboardALCHIDRATADO,
        seaboardFinAnhidro: true
      };
    }
  })

  /****************************** NORTE DATOS ZAFRA ******************************/
  /********* NORTE ANIO ACTUAL *********/

  const ultimoRegistroLaEsperanza = new Date(dataZafraNorteEnd.laEsperanzaFinZafraEnd) >= new Date(dataZafraNorteEnd.laEsperanzaFinDatosZafraEnd)
    ? new Date(dataZafraNorteEnd.laEsperanzaFinZafraEnd)
    : new Date(dataZafraNorteEnd.laEsperanzaFinDatosZafraEnd)

  const ultimoRegistroLedesma = new Date(dataZafraNorteEnd.ledesmaFinZafraEnd) >= new Date(dataZafraNorteEnd.ledesmaFinDatosZafraEnd)
    ? new Date(dataZafraNorteEnd.ledesmaFinZafraEnd)
    : new Date(dataZafraNorteEnd.ledesmaFinDatosZafraEnd)

  const ultimoRegistroRioGrande = new Date(dataZafraNorteEnd.rioGrandeFinZafraEnd) >= new Date(dataZafraNorteEnd.rioGrandeFinDatosZafraEnd)
    ? new Date(dataZafraNorteEnd.rioGrandeFinZafraEnd)
    : new Date(dataZafraNorteEnd.rioGrandeFinDatosZafraEnd)

  const ultimoRegistroSanIsidro = new Date(dataZafraNorteEnd.sanIsidroFinZafraEnd) >= new Date(dataZafraNorteEnd.sanIsidroFinDatosZafraEnd)
    ? new Date(dataZafraNorteEnd.sanIsidroFinZafraEnd)
    : new Date(dataZafraNorteEnd.sanIsidroFinDatosZafraEnd)

  const ultimoRegistroSeaboard = new Date(dataZafraNorteEnd.seaboardFinZafraEnd) >= new Date(dataZafraNorteEnd.seaboardFinDatosZafraEnd)
    ? new Date(dataZafraNorteEnd.seaboardFinZafraEnd)
    : new Date(dataZafraNorteEnd.seaboardFinDatosZafraEnd)

  dataAnioEndZafraNorte?.forEach((d) => {
    if (
      d.ingenioNombre === "La Esperanza" &&
      dataZafraNorteEnd.laEsperanzaInicioZafraEnd &&
      dataZafraNorteEnd.laEsperanzaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraNorteEnd.laEsperanzaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLaEsperanza
    ) {
      variablesEnd.cmb16 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn16 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente16 += Number(Number(d.azucarEquivalente)) || 0;
      variablesEnd.melaza16 += d.melazaProducida || 0;
      variablesEnd.blanco16 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado16 += d.azucarRefinado || 0;
      variablesEnd.organico16 += d.azucarOrganico || 0;
      variablesEnd.crudo16 += d.azucarCrudoProducido || 0;
      variablesEnd.otros16 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal16 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      laEsperanzaEnd = {
        laEsperanzaCMB: variablesEnd.cmb16,
        laEsperanzaCMN: variablesEnd.cmn16,
        laEsperanzaEQUIVALENTE: variablesEnd.equivalente16,
        laEsperanzaMELAZA: variablesEnd.melaza16,
        laEsperanzaBLANCO: variablesEnd.blanco16,
        laEsperanzaREFINADO: variablesEnd.refinado16,
        laEsperanzaORGANICO: variablesEnd.organico16,
        laEsperanzaCRUDO: variablesEnd.crudo16,
        laEsperanzaOTROS: variablesEnd.otros16,
        laEsperanzaFISICOTOTAL: variablesEnd.fisicoTotal16,
        laEsperanzaALCPRODUCIDO: laEsperanzaEnd.laEsperanzaALCPRODUCIDO,
        laEsperanzaALCHIDRATADO: laEsperanzaEnd.laEsperanzaALCHIDRATADO,
        laEsperanzaANHIDRO: laEsperanzaEnd.laEsperanzaANHIDRO,
        laEsperanzaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Ledesma" &&
      dataZafraNorteEnd.ledesmaInicioZafraEnd &&
      dataZafraNorteEnd.ledesmaFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraNorteEnd.ledesmaInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroLedesma
    ) {
      variablesEnd.cmb17 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn17 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente17 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza17 += d.melazaProducida || 0;
      variablesEnd.blanco17 += d.azucarBlancoProducido || 0;
      /** PARCHE PARA ZAFRA 2024 y 2025  - AZUCAR REFINADO **/
      const calculoAntiguoRefinado = anioEnd < 2026
        ? variablesEnd.refinado17 + (new Date(d.fechaParte) <= new Date(dataZafraNorteEnd.ledesmaFinDatosZafraEnd) && d.azucarRefinado)
        : variablesEnd.refinado17 + d.azucarRefinado
      variablesEnd.refinado17 = calculoAntiguoRefinado
      // variablesEnd.refinado17 += d.azucarRefinado || 0;

      variablesEnd.organico17 += d.azucarOrganico || 0;

      /** PARCHE PARA ZAFRA 2024 y 2025  - AZUCAR CRUDO **/
      // variablesEnd.crudo17 += (d.azucarCrudoProducido <= 0 ? - d.azucarRefinado - d.otroAzucar : d.azucarCrudoProducido - d.azucarRefinado - d.otroAzucar);
      const calculoAntiguoCrudo = anioEnd < 2026
        ? variablesEnd.crudo17 + (new Date(d.fechaParte) <= new Date(dataZafraNorteEnd.ledesmaFinDatosZafraEnd) && d.azucarCrudoProducido - d.azucarRefinado - d.otroAzucar)
        : variablesEnd.crudo17 + d.azucarCrudoProducido

      variablesEnd.crudo17 = calculoAntiguoCrudo

      variablesEnd.otros17 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal17 += d.azucarCrudoProducido
      ledesmaEnd = {
        ledesmaCMB: variablesEnd.cmb17,
        ledesmaCMN: variablesEnd.cmn17,
        ledesmaEQUIVALENTE: variablesEnd.equivalente17,
        ledesmaMELAZA: variablesEnd.melaza17,
        ledesmaBLANCO: variablesEnd.blanco17,
        ledesmaREFINADO: variablesEnd.refinado17,
        ledesmaORGANICO: variablesEnd.organico17,
        ledesmaCRUDO: variablesEnd.crudo17,
        ledesmaOTROS: variablesEnd.otros17,
        ledesmaFISICOTOTAL: variablesEnd.fisicoTotal17,
        ledesmaALCPRODUCIDO: ledesmaEnd.ledesmaALCPRODUCIDO,
        ledesmaALCHIDRATADO: ledesmaEnd.ledesmaALCPRODUCIDO,
        ledesmaANHIDRO: ledesmaEnd.ledesmaANHIDRO,
        ledesmaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Río Grande" &&
      dataZafraNorteEnd.rioGrandeInicioZafraEnd &&
      dataZafraNorteEnd.rioGrandeFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraNorteEnd.rioGrandeInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroRioGrande
    ) {
      variablesEnd.cmb18 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn18 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente18 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza18 += d.melazaProducida || 0;
      variablesEnd.blanco18 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado18 += d.azucarRefinado || 0;
      variablesEnd.organico18 += d.azucarOrganico || 0;
      variablesEnd.crudo18 += d.azucarCrudoProducido || 0;
      variablesEnd.otros18 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal18 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      rioGrandeEnd = {
        rioGrandeCMB: variablesEnd.cmb18,
        rioGrandeCMN: variablesEnd.cmn18,
        rioGrandeEQUIVALENTE: variablesEnd.equivalente18,
        rioGrandeMELAZA: variablesEnd.melaza18,
        rioGrandeBLANCO: variablesEnd.blanco18,
        rioGrandeREFINADO: variablesEnd.refinado18,
        rioGrandeORGANICO: variablesEnd.organico18,
        rioGrandeCRUDO: variablesEnd.crudo18,
        rioGrandeOTROS: variablesEnd.otros18,
        rioGrandeFISICOTOTAL: variablesEnd.fisicoTotal18,
        rioGrandeALCPRODUCIDO: rioGrandeEnd.rioGrandeALCPRODUCIDO,
        rioGrandeALCHIDRATADO: rioGrandeEnd.rioGrandeALCPRODUCIDO,
        rioGrandeANHIDRO: rioGrandeEnd.rioGrandeANHIDRO,
        rioGrandeFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "San Isidro" &&
      dataZafraNorteEnd.sanIsidroInicioZafraEnd &&
      dataZafraNorteEnd.sanIsidroFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraNorteEnd.sanIsidroInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroSanIsidro
    ) {
      variablesEnd.cmb19 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn19 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente19 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza19 += d.melazaProducida || 0;
      variablesEnd.blanco19 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado19 += d.azucarRefinado || 0;
      variablesEnd.organico19 += d.azucarOrganico || 0;
      variablesEnd.crudo19 += d.azucarCrudoProducido || 0;
      variablesEnd.otros19 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal19 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      sanIsidroEnd = {
        sanIsidroCMB: variablesEnd.cmb19,
        sanIsidroCMN: variablesEnd.cmn19,
        sanIsidroEQUIVALENTE: variablesEnd.equivalente19,
        sanIsidroMELAZA: variablesEnd.melaza19,
        sanIsidroBLANCO: variablesEnd.blanco19,
        sanIsidroREFINADO: variablesEnd.refinado19,
        sanIsidroORGANICO: variablesEnd.organico19,
        sanIsidroCRUDO: variablesEnd.crudo19,
        sanIsidroOTROS: variablesEnd.otros19,
        sanIsidroFISICOTOTAL: variablesEnd.fisicoTotal19,
        sanIsidroALCPRODUCIDO: sanIsidroEnd.sanIsidroALCPRODUCIDO,
        sanIsidroALCHIDRATADO: sanIsidroEnd.sanIsidroALCPRODUCIDO,
        sanIsidroANHIDRO: sanIsidroEnd.sanIsidroANHIDRO,
        sanIsidroFinZafra: true,
      };
    }

    if (
      d.ingenioNombre === "Seaboard" &&
      dataZafraNorteEnd.seaboardInicioZafraEnd &&
      dataZafraNorteEnd.seaboardFinZafraEnd &&
      new Date(d.fechaParte) >= new Date(dataZafraNorteEnd.seaboardInicioZafraEnd) &&
      new Date(d.fechaParte) <= ultimoRegistroSeaboard
    ) {
      variablesEnd.cmb20 += d.moliendaCanaBruta || 0;
      variablesEnd.cmn20 += d.moliendaCanaNeta || 0;
      variablesEnd.equivalente20 += Number(d.azucarEquivalente) || 0;
      variablesEnd.melaza20 += d.melazaProducida || 0;
      variablesEnd.blanco20 += d.azucarBlancoProducido || 0;
      variablesEnd.refinado20 += d.azucarRefinado || 0;
      variablesEnd.organico20 += d.azucarOrganico || 0;
      variablesEnd.crudo20 += d.azucarCrudoProducido || 0;
      variablesEnd.otros20 += d.otroAzucar || 0;
      variablesEnd.fisicoTotal20 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      seaboardEnd = {
        seaboardCMB: variablesEnd.cmb20,
        seaboardCMN: variablesEnd.cmn20,
        seaboardEQUIVALENTE: variablesEnd.equivalente20,
        seaboardMELAZA: variablesEnd.melaza20,
        seaboardBLANCO: variablesEnd.blanco20,
        seaboardREFINADO: variablesEnd.refinado20,
        seaboardORGANICO: variablesEnd.organico20,
        seaboardCRUDO: variablesEnd.crudo20,
        seaboardOTROS: variablesEnd.otros20,
        seaboardFISICOTOTAL: variablesEnd.fisicoTotal20,
        seaboardALCPRODUCIDO: seaboardEnd.seaboardALCPRODUCIDO,
        seaboardALCHIDRATADO: seaboardEnd.seaboardALCPRODUCIDO,
        seaboardANHIDRO: seaboardEnd.seaboardANHIDRO,
        seaboardFinZafra: true,
      };
    }
  })

  /********* NORTE ANIO COMPARATIVO *********/

  const ultimoRegistroLaEsperanzaComparativo = new Date(dataZafraNorte.laEsperanzaFinZafra) >= new Date(dataZafraNorte.laEsperanzaFinDatosZafra)
    ? new Date(dataZafraNorte.laEsperanzaFinZafra)
    : new Date(dataZafraNorte.laEsperanzaFinDatosZafra)

  const ultimoRegistroLedesmaComparativo = new Date(dataZafraNorte.ledesmaFinZafra) >= new Date(dataZafraNorte.ledesmaFinDatosZafra)
    ? new Date(dataZafraNorte.ledesmaFinZafra)
    : new Date(dataZafraNorte.ledesmaFinDatosZafra)

  const ultimoRegistroRioGrandeComparativo = new Date(dataZafraNorte.rioGrandeFinZafra) >= new Date(dataZafraNorte.rioGrandeFinDatosZafra)
    ? new Date(dataZafraNorte.rioGrandeFinZafra)
    : new Date(dataZafraNorte.rioGrandeFinDatosZafra)

  const ultimoRegistroSanIsidroComparativo = new Date(dataZafraNorte.sanIsidroFinZafra) >= new Date(dataZafraNorte.sanIsidroFinDatosZafra)
    ? new Date(dataZafraNorte.sanIsidroFinZafra)
    : new Date(dataZafraNorte.sanIsidroFinDatosZafra)

  const ultimoRegistroSeaboardComparativo = new Date(dataZafraNorte.seaboardFinZafra) >= new Date(dataZafraNorte.seaboardFinDatosZafra)
    ? new Date(dataZafraNorte.seaboardFinZafra)
    : new Date(dataZafraNorte.seaboardFinDatosZafra)

  dataAnioStartZafraNorte?.forEach((d) => {
    if (
      d.ingenioNombre === "La Esperanza" &&
      dataZafraNorte.laEsperanzaInicioZafra &&
      dataZafraNorte.laEsperanzaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraNorte.laEsperanzaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLaEsperanzaComparativo
    ) {
      variables.cmb16 += d.moliendaCanaBruta || 0;
      variables.cmn16 += d.moliendaCanaNeta || 0;
      variables.equivalente16 += Number(Number(d.azucarEquivalente)) || 0;
      variables.melaza16 += d.melazaProducida || 0;
      variables.blanco16 += d.azucarBlancoProducido || 0;
      variables.refinado16 += d.azucarRefinado || 0;
      variables.organico16 += d.azucarOrganico || 0;
      variables.crudo16 += d.azucarCrudoProducido || 0;
      variables.otros16 += d.otroAzucar || 0;
      variables.fisicoTotal16 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      laEsperanza = {
        laEsperanzaCMB: variables.cmb16,
        laEsperanzaCMN: variables.cmn16,
        laEsperanzaEQUIVALENTE: variables.equivalente16,
        laEsperanzaMELAZA: variables.melaza16,
        laEsperanzaBLANCO: variables.blanco16,
        laEsperanzaREFINADO: variables.refinado16,
        laEsperanzaORGANICO: variables.organico16,
        laEsperanzaCRUDO: variables.crudo16,
        laEsperanzaOTROS: variables.otros16,
        laEsperanzaFISICOTOTAL: variables.fisicoTotal16,
        laEsperanzaALCPRODUCIDO: laEsperanza.laEsperanzaALCPRODUCIDO,
        laEsperanzaALCHIDRATADO: laEsperanza.laEsperanzaALCHIDRATADO,
        laEsperanzaANHIDRO: laEsperanza.laEsperanzaANHIDRO,
        laEsperanzaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Ledesma" &&
      dataZafraNorte.ledesmaInicioZafra &&
      dataZafraNorte.ledesmaFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraNorte.ledesmaInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroLedesmaComparativo
    ) {
      variables.cmb17 += d.moliendaCanaBruta || 0;
      variables.cmn17 += d.moliendaCanaNeta || 0;
      variables.equivalente17 += Number(d.azucarEquivalente) || 0;
      variables.melaza17 += d.melazaProducida || 0;
      variables.blanco17 += d.azucarBlancoProducido || 0;
      /** PARCHE PARA ZAFRA 2024 y 2025  - AZUCAR REFINADO **/
      const calculoAntiguoRefinado = anioStart < 2026
        ? variables.refinado17 + (new Date(d.fechaParte) <= new Date(dataZafraNorte.ledesmaFinDatosZafra) && d.azucarRefinado)
        : variables.refinado17 + d.azucarRefinado
      variables.refinado17 = calculoAntiguoRefinado
      // variables.refinado17 += d.azucarRefinado || 0;

      variables.organico17 += d.azucarOrganico || 0;
      /** PARCHE PARA ZAFRA 2024 y 2025  - AZUCAR CRUDO **/
      // variables.crudo17 += (d.azucarCrudoProducido <= 0 ? - d.azucarRefinado - d.otroAzucar : d.azucarCrudoProducido - d.azucarRefinado - d.otroAzucar);
      const calculoAntiguoCrudo = anioEnd < 2026
        ? variables.crudo17 + (new Date(d.fechaParte) <= new Date(dataZafraNorte.ledesmaFinDatosZafra) && d.azucarCrudoProducido - d.azucarRefinado - d.otroAzucar)
        : variables.crudo17 + d.azucarCrudoProducido

      variables.crudo17 = calculoAntiguoCrudo
      
      variables.otros17 += d.otroAzucar || 0;
      variables.fisicoTotal17 += d.azucarCrudoProducido
      ledesma = {
        ledesmaCMB: variables.cmb17,
        ledesmaCMN: variables.cmn17,
        ledesmaEQUIVALENTE: variables.equivalente17,
        ledesmaMELAZA: variables.melaza17,
        ledesmaBLANCO: variables.blanco17,
        ledesmaREFINADO: variables.refinado17,
        ledesmaORGANICO: variables.organico17,
        ledesmaCRUDO: variables.crudo17,
        ledesmaOTROS: variables.otros17,
        ledesmaFISICOTOTAL: variables.fisicoTotal17,
        ledesmaALCPRODUCIDO: ledesma.ledesmaALCPRODUCIDO,
        ledesmaALCHIDRATADO: ledesma.ledesmaALCPRODUCIDO,
        ledesmaANHIDRO: ledesma.ledesmaANHIDRO,
        ledesmaFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "Río Grande" &&
      dataZafraNorte.rioGrandeInicioZafra &&
      dataZafraNorte.rioGrandeFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraNorte.rioGrandeInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroRioGrandeComparativo
    ) {
      variables.cmb18 += d.moliendaCanaBruta || 0;
      variables.cmn18 += d.moliendaCanaNeta || 0;
      variables.equivalente18 += Number(d.azucarEquivalente) || 0;
      variables.melaza18 += d.melazaProducida || 0;
      variables.blanco18 += d.azucarBlancoProducido || 0;
      variables.refinado18 += d.azucarRefinado || 0;
      variables.organico18 += d.azucarOrganico || 0;
      variables.crudo18 += d.azucarCrudoProducido || 0;
      variables.otros18 += d.otroAzucar || 0;
      variables.fisicoTotal18 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      rioGrande = {
        rioGrandeNHIDRO: variables.anhidro18,
        rioGrandeCMB: variables.cmb18,
        rioGrandeCMN: variables.cmn18,
        rioGrandeEQUIVALENTE: variables.equivalente18,
        rioGrandeMELAZA: variables.melaza18,
        rioGrandeBLANCO: variables.blanco18,
        rioGrandeREFINADO: variables.refinado18,
        rioGrandeORGANICO: variables.organico18,
        rioGrandeCRUDO: variables.crudo18,
        rioGrandeOTROS: variables.otros18,
        rioGrandeFISICOTOTAL: variables.fisicoTotal18,
        rioGrandeALCPRODUCIDO: rioGrande.rioGrandeALCPRODUCIDO,
        rioGrandeALCHIDRATADO: rioGrande.rioGrandeALCPRODUCIDO,
        rioGrandeANHIDRO: rioGrande.rioGrandeANHIDRO,
        rioGrandeFinZafra: true,
      };
    }
    if (
      d.ingenioNombre === "San Isidro" &&
      dataZafraNorte.sanIsidroInicioZafra &&
      dataZafraNorte.sanIsidroFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraNorte.sanIsidroInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroSanIsidroComparativo
    ) {
      variables.cmb19 += d.moliendaCanaBruta || 0;
      variables.cmn19 += d.moliendaCanaNeta || 0;
      variables.equivalente19 += Number(d.azucarEquivalente) || 0;
      variables.melaza19 += d.melazaProducida || 0;
      variables.blanco19 += d.azucarBlancoProducido || 0;
      variables.refinado19 += d.azucarRefinado || 0;
      variables.organico19 += d.azucarOrganico || 0;
      variables.crudo19 += d.azucarCrudoProducido || 0;
      variables.otros19 += d.otroAzucar || 0;
      variables.fisicoTotal19 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      sanIsidro = {
        sanIsidroCMB: variables.cmb19,
        sanIsidroCMN: variables.cmn19,
        sanIsidroEQUIVALENTE: variables.equivalente19,
        sanIsidroMELAZA: variables.melaza19,
        sanIsidroBLANCO: variables.blanco19,
        sanIsidroREFINADO: variables.refinado19,
        sanIsidroORGANICO: variables.organico19,
        sanIsidroCRUDO: variables.crudo19,
        sanIsidroOTROS: variables.otros19,
        sanIsidroFISICOTOTAL: variables.fisicoTotal19,
        sanIsidroALCPRODUCIDO: sanIsidro.sanIsidroALCPRODUCIDO,
        sanIsidroALCHIDRATADO: sanIsidro.sanIsidroALCPRODUCIDO,
        sanIsidroANHIDRO: sanIsidro.sanIsidroANHIDRO,
        sanIsidroFinZafra: true,
      };
    }

    if (
      d.ingenioNombre === "Seaboard" &&
      dataZafraNorte.seaboardInicioZafra &&
      dataZafraNorte.seaboardFinZafra &&
      new Date(d.fechaParte) >= new Date(dataZafraNorte.seaboardInicioZafra) &&
      new Date(d.fechaParte) <= ultimoRegistroSeaboardComparativo
    ) {
      variables.cmb20 += d.moliendaCanaBruta || 0;
      variables.cmn20 += d.moliendaCanaNeta || 0;
      variables.equivalente20 += Number(d.azucarEquivalente) || 0;
      variables.melaza20 += d.melazaProducida || 0;
      variables.blanco20 += d.azucarBlancoProducido || 0;
      variables.refinado20 += d.azucarRefinado || 0;
      variables.organico20 += d.azucarOrganico || 0;
      variables.crudo20 += d.azucarCrudoProducido || 0;
      variables.otros20 += d.otroAzucar || 0;
      variables.fisicoTotal20 += d.azucarBlancoProducido + d.azucarCrudoProducido + d.azucarRefinado + d.azucarOrganico + d.otroAzucar
      seaboard = {
        seaboardCMB: variables.cmb20,
        seaboardCMN: variables.cmn20,
        seaboardEQUIVALENTE: variables.equivalente20,
        seaboardMELAZA: variables.melaza20,
        seaboardBLANCO: variables.blanco20,
        seaboardREFINADO: variables.refinado20,
        seaboardORGANICO: variables.organico20,
        seaboardCRUDO: variables.crudo20,
        seaboardOTROS: variables.otros20,
        seaboardFISICOTOTAL: variables.fisicoTotal20,
        seaboardALCPRODUCIDO: seaboard.seaboardALCPRODUCIDO,
        seaboardALCHIDRATADO: seaboard.seaboardALCPRODUCIDO,
        seaboardANHIDRO: seaboard.seaboardANHIDRO,
        seaboardFinZafra: true,
      };
    }
  })



  laEsperanza.laEsperanzaRCMB = Math.round((Number(laEsperanza?.laEsperanzaEQUIVALENTE) / laEsperanza?.laEsperanzaCMB) * 100 * 100) / 100
  laEsperanza.laEsperanzaRCMN = Math.round((Number(laEsperanza?.laEsperanzaEQUIVALENTE) / laEsperanza?.laEsperanzaCMN) * 100 * 100) / 100

  ledesma.ledesmaRCMB = Math.round((Number(ledesma?.ledesmaEQUIVALENTE) / ledesma?.ledesmaCMB) * 100 * 100) / 100
  ledesma.ledesmaRCMN = Math.round((Number(ledesma?.ledesmaEQUIVALENTE) / ledesma?.ledesmaCMN) * 100 * 100) / 100

  rioGrande.rioGrandeRCMB = Math.round((Number(rioGrande?.rioGrandeEQUIVALENTE) / rioGrande?.rioGrandeCMB) * 100 * 100) / 100
  rioGrande.rioGrandeRCMN = Math.round((Number(rioGrande?.rioGrandeEQUIVALENTE) / rioGrande?.rioGrandeCMN) * 100 * 100) / 100

  sanIsidro.sanIsidroRCMB = Math.round((Number(sanIsidro?.sanIsidroEQUIVALENTE) / sanIsidro?.sanIsidroCMB) * 100 * 100) / 100
  sanIsidro.sanIsidroRCMN = Math.round((Number(sanIsidro?.sanIsidroEQUIVALENTE) / sanIsidro?.sanIsidroCMN) * 100 * 100) / 100

  seaboard.seaboardRCMB = Math.round((Number(seaboard?.seaboardEQUIVALENTE) / seaboard?.seaboardCMB) * 100 * 100) / 100
  seaboard.seaboardRCMN = Math.round((Number(seaboard?.seaboardEQUIVALENTE) / seaboard?.seaboardCMN) * 100 * 100) / 100

  laEsperanzaEnd.laEsperanzaRCMB = Math.round((Number(laEsperanzaEnd?.laEsperanzaEQUIVALENTE) / laEsperanzaEnd?.laEsperanzaCMB) * 100 * 100) / 100
  laEsperanzaEnd.laEsperanzaRCMN = Math.round((Number(laEsperanzaEnd?.laEsperanzaEQUIVALENTE) / laEsperanzaEnd?.laEsperanzaCMN) * 100 * 100) / 100

  ledesmaEnd.ledesmaRCMB = Math.round((Number(ledesmaEnd?.ledesmaEQUIVALENTE) / ledesmaEnd?.ledesmaCMB) * 100 * 100) / 100
  ledesmaEnd.ledesmaRCMN = Math.round((Number(ledesmaEnd?.ledesmaEQUIVALENTE) / ledesmaEnd?.ledesmaCMN) * 100 * 100) / 100

  rioGrandeEnd.rioGrandeRCMB = Math.round((Number(rioGrandeEnd?.rioGrandeEQUIVALENTE) / rioGrandeEnd?.rioGrandeCMB) * 100 * 100) / 100
  rioGrandeEnd.rioGrandeRCMN = Math.round((Number(rioGrandeEnd?.rioGrandeEQUIVALENTE) / rioGrandeEnd?.rioGrandeCMN) * 100 * 100) / 100

  sanIsidroEnd.sanIsidroRCMB = Math.round((Number(sanIsidroEnd?.sanIsidroEQUIVALENTE) / sanIsidroEnd?.sanIsidroCMB) * 100 * 100) / 100
  sanIsidroEnd.sanIsidroRCMN = Math.round((Number(sanIsidroEnd?.sanIsidroEQUIVALENTE) / sanIsidroEnd?.sanIsidroCMN) * 100 * 100) / 100

  seaboardEnd.seaboardRCMB = Math.round((Number(seaboardEnd?.seaboardEQUIVALENTE) / seaboardEnd?.seaboardCMB) * 100 * 100) / 100
  seaboardEnd.seaboardRCMN = Math.round((Number(seaboardEnd?.seaboardEQUIVALENTE) / seaboardEnd?.seaboardCMN) * 100 * 100) / 100



  setEsperanza(laEsperanza)
  setLedesma(ledesma)
  setRiogrande(rioGrande)
  setSanisidro(sanIsidro)
  setSeaboard(seaboard)

  setEsperanzaComp(laEsperanzaEnd)
  setLedesmaComp(ledesmaEnd)
  setRiograndeComp(rioGrandeEnd)
  setSanisidroComp(sanIsidroEnd)
  setSeaboardComp(seaboardEnd)
}
