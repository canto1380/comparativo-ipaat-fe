/* eslint-disable no-undef */

import { anhidroBellaVista, anhidroBellaVista2023, anhidroConcepcion, anhidroConcepcion2023, anhidroLeales, anhidroLeales2023 } from "../../utils/data/AnhidroSinDeclarar";

let dataAguilares = {
  E10: 0,
  F10: 0,
  G10: 0,
  J10: 0,
  K10: 0,
  M10: 0,
  N10: 0,
  C43: 0,
  D43: 0,
  F43: 0,
  G43: 0,
  L44: 0,
  O44: 0,
  R44: 0,
},
  dataCruzAlta = {
    E11: 0,
    F11: 0,
    G11: 0,
    J11: 0,
    K11: 0,
    M11: 0,
    N11: 0,
    C47: 0,
    D47: 0,
    F47: 0,
    G47: 0,
    L47: 0,
    O47: 0,
    R47: 0,
  },
  dataLaFlorida = {
    E12: 0,
    F12: 0,
    G12: 0,
    J12: 0,
    K12: 0,
    M12: 0,
    N12: 0,
    C50: 0,
    D50: 0,
    F50: 0,
    G50: 0,
    L50: 0,
    O50: 0,
    R50: 0,
  },
  dataConcepcion = {
    E14: 0,
    F14: 0,
    G14: 0,
    J14: 0,
    K14: 0,
    M14: 0,
    N14: 0,
    C46: 0,
    D46: 0,
    F46: 0,
    G46: 0,
    L46: 0,
    O46: 0,
    R46: 0,
  },
  dataMarapa = {
    E15: 0,
    F15: 0,
    G15: 0,
    J15: 0,
    K15: 0,
    M15: 0,
    N15: 0,
    C54: 0,
    D54: 0,
    F54: 0,
    G54: 0,
    L54: 0,
    O54: 0,
    R54: 0,
  },
  dataBellaVista = {
    E17: 0,
    F17: 0,
    G17: 0,
    J17: 0,
    K17: 0,
    M17: 0,
    N17: 0,
    C45: 0,
    D45: 0,
    F45: 0,
    G45: 0,
    L45: 0,
    O45: 0,
    R45: 0,
  },
  dataFamailla = {
    E18: 0,
    F18: 0,
    G18: 0,
    J18: 0,
    K18: 0,
    M18: 0,
    N18: 0,
    C48: 0,
    D48: 0,
    F48: 0,
    G48: 0,
    L48: 0,
    O48: 0,
    R48: 0,
  },
  dataLaCorona = {
    E19: 0,
    F19: 0,
    G19: 0,
    J19: 0,
    K19: 0,
    M19: 0,
    N19: 0,
    C49: 0,
    D49: 0,
    F49: 0,
    G49: 0,
    L49: 0,
    O49: 0,
    R49: 0,
  },
  dataLaProvidencia = {
    E20: 0,
    F20: 0,
    G20: 0,
    J20: 0,
    K20: 0,
    M20: 0,
    N20: 0,
    C51: 0,
    D51: 0,
    F51: 0,
    G51: 0,
    L51: 0,
    O51: 0,
    R51: 0,
  },
  dataLaTrinidad = {
    E21: 0,
    F21: 0,
    G21: 0,
    J21: 0,
    K21: 0,
    M21: 0,
    N21: 0,
    C52: 0,
    D52: 0,
    F52: 0,
    G52: 0,
    L52: 0,
    O52: 0,
    R52: 0,
  },
  dataLeales = {
    E22: 0,
    F22: 0,
    G22: 0,
    J22: 0,
    K22: 0,
    M22: 0,
    N22: 0,
    C53: 0,
    D53: 0,
    F53: 0,
    G53: 0,
    L53: 0,
    O53: 0,
    R53: 0,
  },
  dataÑuñorco = {
    E23: 0,
    F23: 0,
    G23: 0,
    J23: 0,
    K23: 0,
    M23: 0,
    N23: 0,
    C55: 0,
    D55: 0,
    F55: 0,
    G55: 0,
    L55: 0,
    O55: 0,
    R55: 0,
  },
  dataStaBarbara = {
    E24: 0,
    F24: 0,
    G24: 0,
    J24: 0,
    K24: 0,
    M24: 0,
    N24: 0,
    C56: 0,
    D56: 0,
    F56: 0,
    G56: 0,
    L56: 0,
    O56: 0,
    R56: 0,
  },
  dataStaRosa = {
    E25: 0,
    F25: 0,
    G25: 0,
    J25: 0,
    K25: 0,
    M25: 0,
    N25: 0,
    C57: 0,
    D57: 0,
    F57: 0,
    G57: 0,
    L57: 0,
    O57: 0,
    R57: 0,
  },
  dataSanJuan = {
    E26: 0,
    F26: 0,
    G26: 0,
    J26: 0,
    K26: 0,
    M26: 0,
    N26: 0,
    C58: 0,
    D58: 0,
    F58: 0,
    G58: 0,
    L58: 0,
    O58: 0,
    R58: 0,
  },
  dataDestBellaVista = {
    E27: 0,
    F27: 0,
    G27: 0,
    J27: 0,
    K27: 0,
    M27: 0,
    N27: 0,
    C59: 0,
    D59: 0,
    F59: 0,
    G59: 0,
    L59: 0,
    O59: 0,
    R59: 0,
  },

  /** Norte **/
  dataLaEsperanza = {
    E44: 0, //CMB
    F44: 0, //CMN
    G44: 0, //EQUIVALENTE
    J44: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K44: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M44: 0, //MELAZA
    N44: 0, //AlCOHOL PRODUCIDO
    O44: 0, //HIDRATADO
    P44: 0, //ANHIDRO
    V44: 0, //BLANCO
    W44: 0, //REFINADO
    X44: 0, //ORGANICO
    Y44: 0, //OTROS
    Z44: 0, //CRUDO
  },
  dataLedesma = {
    E45: 0, //CMB
    F45: 0, //CMN
    G45: 0, //EQUIVALENTE
    J45: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K45: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M45: 0, //MELAZA
    N45: 0, //ALCOHOL PRODUCIDO
    O45: 0, //HIDRATADO
    P45: 0, //ANHIDRO
    V45: 0, //BLANCO
    W45: 0, //REFINADO
    X45: 0, //ORGANICO
    Y45: 0, //OTROS
    Z45: 0, //CRUDO
  },
  dataRioGrande = {
    E46: 0, //CMB
    F46: 0, //CMN
    G46: 0, //EQUIVALENTE
    J46: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K46: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M46: 0, //MELAZA
    N46: 0, //ALCOHOL PRODUCIDO
    O46: 0, //HIDRATADO
    P46: 0, //ANHIDRO
    V46: 0, //BLANCO
    W46: 0, //REFINADO
    X46: 0, //ORGANICO
    Y46: 0, //OTROS
    Z46: 0, //CRUDO
  },
  dataSanIsidro = {
    E47: 0, //CMB
    F47: 0, //CMN
    G47: 0, //EQUIVALENTE
    J47: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K47: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M47: 0, //MELAZA
    N47: 0, //ALCOHOL PRODUCIDO
    O47: 0, //HIDRATADO
    P47: 0, //ANHIDRO
    V47: 0, //BLANCO
    W47: 0, //REFINADO
    X47: 0, //ORGANICO
    Y47: 0, //OTROS
    Z47: 0, //CRUDO
  },
  dataSeaboard = {
    E48: 0, //CMB
    F48: 0, //CMN
    G48: 0, //EQUIVALENTE
    J48: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K48: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M48: 0, //MELAZA
    N48: 0, //ALCOHOL PRODUCIDO
    O48: 0, //HIDRATADO
    P48: 0, //ANHIDRO
    V48: 0, //BLANCO
    W48: 0, //REFINADO
    X48: 0, //ORGANICO
    Y48: 0, //OTROS
    Z48: 0, //CRUDO
  },

  /***** FECHAS *****/
  /** ZAFRA - TUCUMAN **/
  dataInicioIngenios = {
    Cell10: 0,
    CellE10: 0,
    CellF10: 0,
    Cell11: 0,
    CellE11: 0,
    CellF11: 0,
    Cell12: 0,
    CellE12: 0,
    CellF12: 0,
    Cell14: 0,
    CellE14: 0,
    CellF14: 0,
    Cell15: 0,
    CellE15: 0,
    CellF15: 0,
    Cell17: 0,
    CellE17: 0,
    CellF17: 0,
    Cell18: 0,
    CellE18: 0,
    CellF18: 0,
    Cell19: 0,
    CellE19: 0,
    CellF19: 0,
    Cell20: 0,
    CellE20: 0,
    CellF20: 0,
    Cell21: 0,
    CellE21: 0,
    CellF21: 0,
    Cell22: 0,
    CellE22: 0,
    CellF22: 0,
    Cell23: 0,
    CellE23: 0,
    CellF23: 0,
    Cell24: 0,
    CellE24: 0,
    CellF24: 0,
    Cell25: 0,
    CellE25: 0,
    CellF25: 0,
    Cell26: 0,
    CellE26: 0,
    CellF26: 0,
    bellaVistaInicio: 0,
    bellaVistaFin: 0,
    bellaVistaFinDatos: 0
  },
  /** ZAFRA - NORTE **/
  dataInicioIngeniosNorte = {
    Cell44: 0,
    CellE44: 0,
    CellF44: 0,
    Cell45: 0,
    CellE45: 0,
    CellF45: 0,
    Cell46: 0,
    CellE46: 0,
    CellF46: 0,
    Cell47: 0,
    CellE47: 0,
    CellF47: 0,
    Cell48: 0,
    CellE48: 0,
    CellF48: 0,
  },

  /** DESTILERIA - TUCUMAN **/
  dataInicioDestileriaIngenios = {
    aguilInicio: null,
    aguilFin: null,
    cruzInicio: null,
    cruzFin: null,
    floridaInicio: null,
    floridaFin: null,
    concepInicio: null,
    concepFin: null,
    marapaInicio: null,
    marapaFin: null,
    bellaInicio: null,
    bellaFin: null,
    famaillaInicio: null,
    famaillaFin: null,
    coronaInicio: null,
    coronaFin: null,
    provInicio: null,
    provFin: null,
    trinInicio: null,
    trinFin: null,
    lealesInicio: null,
    lealesFin: null,
    nunorcoInicio: null,
    nunorcoFin: null,
    staBarInicio: null,
    staBarFin: null,
    staRosaInicio: null,
    staRosaFin: null,
    sanJuanInicio: null,
    sanJuanFin: null,
    bellaVistaDestInicio: null,
    bellaVistaDestFin: null,
  },
  /** DESTILERIA - NORTE **/
  dataInicioDestileriaIngeniosNorte = {
    sanisidroInicio: null,
    sanisidroFin: null,
    seaboardInicio: null,
    seaboardFin: null,
    ledesmaInicio: null,
    ledesmaFin: null,
    riograndeInicio: null,
    riograndeFin: null,
    esperanzaInicio: null,
    esperanzaFin: null,
  },
  /** ANHIDRO - TUCUMAN **/
  dataInicioAnhidroIngenios = {
    aguilInicioAnhidro: null,
    aguilFinAnhidro: null,
    cruzInicioAnhidro: null,
    cruzFinAnhidro: null,
    floridaInicioAnhidro: null,
    floridaFinAnhidro: null,
    concepInicioAnhidro: null,
    concepFinAnhidro: null,
    marapaInicioAnhidro: null,
    marapaFinAnhidro: null,
    bellaInicioAnhidro: null,
    bellaFinAnhidro: null,
    famaillaInicioAnhidro: null,
    famaillaFinAnhidro: null,
    coronaInicioAnhidro: null,
    coronaFinAnhidro: null,
    provInicioAnhidro: null,
    provFinAnhidro: null,
    trinInicioAnhidro: null,
    trinFinAnhidro: null,
    lealesInicioAnhidro: null,
    lealesFinAnhidro: null,
    nunorcoInicioAnhidro: null,
    nunorcoFinAnhidro: null,
    staBarInicioAnhidro: null,
    staBarFinAnhidro: null,
    staRosaInicioAnhidro: null,
    staRosaFinAnhidro: null,
    sanJuanInicioAnhidro: null,
    sanJuanFinAnhidro: null,
    bellaVistaAnhidroInicio: null,
    bellaVistaAnhidroFin: null
  },

  /** ANHIDRO - NORTE **/
  dataInicioAnhidroIngeniosNorte = {
    sanisidroInicioAnhidro: null,
    sanisidroFinAnhidro: null,
    seaboardInicioAnhidro: null,
    seaboardFinAnhidro: null,
    ledesmaInicioAnhidro: null,
    ledesmaFinAnhidro: null,
    riograndeInicioAnhidro: null,
    riograndeFinAnhidro: null,
    esperanzaInicioAnhidro: null,
    esperanzaFinAnhidro: null,
  };

export const dataPorTipo = (
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
) => {
  let cmbPanel = 0;
  let azucarPanel = 0;
  let azucarPanelEquivalente = 0;
  let azucarPanelCrudo = 0;
  let azucarPanelBlancoA = 0
  let azucarPanelRefinado = 0
  let azucarPanelOrganico = 0
  let azucarPanelOtros = 0
  let alcoholPanel = 0;
  let alcoholAnhidroPanel
  /****  FECHAS INICIO  ****/
  const aguil = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Aguilares"
  );

  const cruz = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Cruz Alta"
  );

  const florida = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Florida"
  );

  const concep = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Concepción"
  );

  const marapa = dateInicioIngenios?.find((d) => d.nombre_ingenio === "Marapa");

  const bellaVista = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Bella Vista"
  );

  const famail = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Famaillá"
  );

  const corona = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Corona"
  );

  const providencia = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Providencia"
  );

  const trinidad = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Trinidad"
  );

  const leales = dateInicioIngenios?.find((d) => d.nombre_ingenio === "Leales");

  const nunorco = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Ñuñorco"
  );
  const stabarbara = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Santa Bárbara"
  );
  const starosa = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Santa Rosa"
  );
  const sanjuan = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "San Juan"
  );
  const destBellaVista = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Destilería Bella Vista"
  );

  /** NORTE **/
  const sanisidro = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "San Isidro"
  );
  const seaboard = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Seaboard"
  );
  const ledesma = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Ledesma"
  );
  const riogrande = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Río Grande"
  );
  const laesperanza = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Esperanza"
  );

  /** TUCUMAN **/
  dataInicioIngenios = {
    Cell10: aguil?.inicio_zafra,
    CellE10: aguil?.fin_zafra,
    CellF10: aguil?.fin_datos_zafra,
    Cell11: cruz?.inicio_zafra,
    CellE11: cruz?.fin_zafra,
    CellF11: cruz?.fin_datos_zafra,
    Cell12: florida?.inicio_zafra,
    CellE12: florida?.fin_zafra,
    CellF12: florida?.fin_datos_zafra,
    Cell14: concep?.inicio_zafra,
    CellE14: concep?.fin_zafra,
    CellF14: concep?.fin_datos_zafra,
    Cell15: marapa?.inicio_zafra,
    CellE15: marapa?.fin_zafra,
    CellF15: marapa?.fin_datos_zafra,
    Cell17: bellaVista?.inicio_zafra,
    CellE17: bellaVista?.fin_zafra,
    CellF17: bellaVista?.fin_datos_zafra,
    Cell18: famail?.inicio_zafra,
    CellE18: famail?.fin_zafra,
    CellF18: famail?.fin_datos_zafra,
    Cell19: corona?.inicio_zafra,
    CellE19: corona?.fin_zafra,
    CellF19: corona?.fin_datos_zafra,
    Cell20: providencia?.inicio_zafra,
    CellE20: providencia?.fin_zafra,
    CellF20: providencia?.fin_datos_zafra,
    Cell21: trinidad?.inicio_zafra,
    CellE21: trinidad?.fin_zafra,
    CellF21: trinidad?.fin_datos_zafra,
    Cell22: leales?.inicio_zafra,
    CellE22: leales?.fin_zafra,
    CellF22: leales?.fin_datos_zafra,
    Cell23: nunorco?.inicio_zafra,
    CellE23: nunorco?.fin_zafra,
    CellF23: nunorco?.fin_datos_zafra,
    Cell24: stabarbara?.inicio_zafra,
    CellE24: stabarbara?.fin_zafra,
    CellF24: stabarbara?.fin_datos_zafra,
    Cell25: starosa?.inicio_zafra,
    CellE25: starosa?.fin_zafra,
    CellF25: starosa?.fin_datos_zafra,
    Cell26: sanjuan?.inicio_zafra,
    CellE26: sanjuan?.fin_zafra,
    CellF26: sanjuan?.fin_datos_zafra,
    bellaVistaInicio: destBellaVista?.inicio_zafra,
    bellaVistaFin: destBellaVista?.fin_zafra,
    bellaVistaFinDatos: destBellaVista?.fin_datos_zafra,
  };
  /** NORTE **/
  dataInicioIngeniosNorte = {
    Cell44: laesperanza?.inicio_zafra,
    CellE44: laesperanza?.fin_zafra,
    CellF44: laesperanza?.fin_datos_zafra,
    Cell45: ledesma?.inicio_zafra,
    CellE45: ledesma?.fin_zafra,
    CellF45: ledesma?.fin_datos_zafra,
    Cell46: riogrande?.inicio_zafra,
    CellE46: riogrande?.fin_zafra,
    CellF46: riogrande?.fin_datos_zafra,
    Cell47: sanisidro?.inicio_zafra,
    CellE47: sanisidro?.fin_zafra,
    CellF47: sanisidro?.fin_datos_zafra,
    Cell48: seaboard?.inicio_zafra,
    CellE48: seaboard?.fin_zafra,
    CellF48: seaboard?.fin_datos_zafra
  };

  /** DESTILERIA - TUCUMAN **/
  dataInicioDestileriaIngenios = {
    aguilInicio: aguil?.inicio_destileria,
    aguilFin: aguil?.fin_destileria,
    cruzInicio: cruz?.inicio_destileria,
    cruzFin: cruz?.fin_destileria,
    floridaInicio: florida?.inicio_destileria,
    floridaFin: florida?.fin_destileria,
    concepInicio: concep?.inicio_destileria,
    concepFin: concep?.fin_destileria,
    marapaInicio: marapa?.inicio_destileria,
    marapaFin: marapa?.fin_destileria,
    bellaInicio: bellaVista?.inicio_destileria,
    bellaFin: bellaVista?.fin_destileria,
    famaillaInicio: famail?.inicio_destileria,
    famaillaFin: famail?.fin_destileria,
    coronaInicio: corona?.inicio_destileria,
    coronaFin: corona?.fin_destileria,
    provInicio: providencia?.inicio_destileria,
    provFin: providencia?.fin_destileria,
    trinInicio: trinidad?.inicio_destileria,
    trinFin: trinidad?.fin_destileria,
    lealesInicio: leales?.inicio_destileria,
    lealesFin: leales?.fin_destileria,
    nunorcoInicio: nunorco?.inicio_destileria,
    nunorcoFin: nunorco?.fin_destileria,
    staBarInicio: stabarbara?.inicio_destileria,
    staBarFin: stabarbara?.fin_destileria,
    staRosaInicio: starosa?.inicio_destileria,
    staRosaFin: starosa?.fin_destileria,
    sanJuanInicio: sanjuan?.inicio_destileria,
    sanJuanFin: sanjuan?.fin_destileria,
    bellaVistaDestInicio: destBellaVista?.inicio_destileria,
    bellaVistaDestFin: destBellaVista?.fin_destileria,
  };

  /** DESTILERIA - NORTE **/
  dataInicioDestileriaIngeniosNorte = {
    esperanzaInicio: laesperanza?.inicio_destileria,
    esperanzaFin: laesperanza?.fin_destileria,
    ledesmaInicio: ledesma?.inicio_destileria,
    ledesmaFin: ledesma?.fin_destileria,
    riograndeInicio: riogrande?.inicio_destileria,
    riograndeFin: riogrande?.fin_destileria,
    seaboardInicio: seaboard?.inicio_destileria,
    seaboardFin: seaboard?.fin_destileria,
    sanisidroInicio: sanisidro?.inicio_destileria,
    sanisidroFin: sanisidro?.fin_destileria,
  };

  /** ANHIDRO - TUCUMAN **/
  dataInicioAnhidroIngenios = {
    aguilInicioAnhidro: aguil?.inicio_anhidro,
    aguilFinAnhidro: aguil?.fin_anhidro,
    cruzInicioAnhidro: cruz?.inicio_anhidro,
    cruzFinAnhidro: cruz?.fin_anhidro,
    floridaInicioAnhidro: florida?.inicio_anhidro,
    floridaFinAnhidro: florida?.fin_anhidro,
    concepInicioAnhidro: concep?.inicio_anhidro,
    concepFinAnhidro: concep?.fin_anhidro,
    marapaInicioAnhidro: marapa?.inicio_anhidro,
    marapaFinAnhidro: marapa?.fin_anhidro,
    bellaInicioAnhidro: bellaVista?.inicio_anhidro,
    bellaFinAnhidro: bellaVista?.fin_anhidro,
    famaillaInicioAnhidro: famail?.inicio_anhidro,
    famaillaFinAnhidro: famail?.fin_anhidro,
    coronaInicioAnhidro: corona?.inicio_anhidro,
    coronaFinAnhidro: corona?.fin_anhidro,
    provInicioAnhidro: providencia?.inicio_anhidro,
    provFinAnhidro: providencia?.fin_anhidro,
    trinInicioAnhidro: trinidad?.inicio_anhidro,
    trinFinAnhidro: trinidad?.fin_anhidro,
    lealesInicioAnhidro: leales?.inicio_anhidro,
    lealesFinAnhidro: leales?.fin_anhidro,
    nunorcoInicioAnhidro: nunorco?.inicio_anhidro,
    nunorcoFinAnhidro: nunorco?.fin_anhidro,
    staBarInicioAnhidro: stabarbara?.inicio_anhidro,
    staBarFinAnhidro: stabarbara?.fin_anhidro,
    staRosaInicioAnhidro: starosa?.inicio_anhidro,
    staRosaFinAnhidro: starosa?.fin_anhidro,
    sanJuanInicioAnhidro: sanjuan?.inicio_anhidro,
    sanJuanFinAnhidro: sanjuan?.fin_anhidro,
    bellaVistaAnhidroInicio: destBellaVista?.inicio_anhidro,
    bellaVistaAnhidroFin: destBellaVista?.fin_anhidro,
  };

  /** ANHIDRO - NORTE **/
  dataInicioAnhidroIngeniosNorte = {
    esperanzaInicioAnhidro: laesperanza?.inicio_anhidro,
    esperanzaFinAnhidro: laesperanza?.fin_anhidro,
    ledesmaInicioAnhidro: ledesma?.inicio_anhidro,
    ledesmaFinAnhidro: ledesma?.fin_anhidro,
    riograndeInicioAnhidro: riogrande?.inicio_anhidro,
    riograndeFinAnhidro: riogrande?.fin_anhidro,
    seaboardInicioAnhidro: seaboard?.inicio_anhidro,
    seaboardFinAnhidro: seaboard?.fin_anhidro,
    sanisidroInicioAnhidro: sanisidro?.inicio_anhidro,
    sanisidroFinAnhidro: sanisidro?.fin_anhidro,
  };

  setFechasInicioDestileriaIngeniosNorte(dataInicioDestileriaIngeniosNorte);
  setFechasInicioAnhidroIngeniosNorte(dataInicioAnhidroIngeniosNorte)
  /************/

  /** VARIABLES TUCUMAN (1-15) NORTE (16-20) **/
  for (let i = 1; i <= 21; i++) {
    let varName1 = "a" + i;
    let varName2 = "b" + i;
    let varName3 = "c" + i;
    let varName4 = "z" + i;
    let varName5 = "e" + i;
    let varName6 = "f" + i;
    let varName7 = "g" + i;
    let varName8 = "h" + i;
    let varName9 = "i" + i;
    let varName10 = "j" + i;
    let varName11 = "k" + i;
    let varName12 = "l" + i;
    let varName13 = "o" + i;
    let varName14 = "r" + i;

    window[varName1] = 0;
    window[varName2] = 0;
    window[varName3] = 0;
    window[varName4] = 0;
    window[varName5] = 0;
    window[varName6] = 0;
    window[varName7] = 0;
    window[varName8] = 0;
    window[varName9] = 0;
    window[varName10] = 0;
    window[varName11] = 0;
    window[varName12] = 0;
    window[varName13] = 0;
    window[varName14] = 0;
  }

  /****************************** DATOS DESTILERIA ALCOHOL ******************************/
  /** TUCUMAN **/
  dataImportDestileria?.forEach((data) => {
    const newDate = new Date(data.fechaParte)

    const fechaParametroAguilares = dataInicioDestileriaIngenios.aguilFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.aguilFin)
        ? new Date(dataInicioDestileriaIngenios.aguilFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroBellaVista = dataInicioDestileriaIngenios.bellaFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.bellaFin)
        ? new Date(dataInicioDestileriaIngenios.bellaFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroConcepcion = dataInicioDestileriaIngenios.concepFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.concepFin)
        ? new Date(dataInicioDestileriaIngenios.concepFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroCruzAlta = dataInicioDestileriaIngenios.cruzFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.cruzFin)
        ? new Date(dataInicioDestileriaIngenios.cruzFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroDestileriaBellaVista = dataInicioDestileriaIngenios.bellaVistaDestFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.bellaVistaDestFin)
        ? new Date(dataInicioDestileriaIngenios.bellaVistaDestFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroFamailla = dataInicioDestileriaIngenios.famaillaFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.famaillaFin)
        ? new Date(dataInicioDestileriaIngenios.famaillaFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaCorona = dataInicioDestileriaIngenios.coronaFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.coronaFin)
        ? new Date(dataInicioDestileriaIngenios.coronaFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaFlorida = dataInicioDestileriaIngenios.floridaFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.floridaFin)
        ? new Date(dataInicioDestileriaIngenios.floridaFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaProvidencia = dataInicioDestileriaIngenios.provFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.provFin)
        ? new Date(dataInicioDestileriaIngenios.provFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaTrinidad = dataInicioDestileriaIngenios.trinFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.trinFin)
        ? new Date(dataInicioDestileriaIngenios.trinFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLeales = dataInicioDestileriaIngenios.lealesFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.lealesFin)
        ? new Date(dataInicioDestileriaIngenios.lealesFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroMarapa = dataInicioDestileriaIngenios.marapaFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.marapaFin)
        ? new Date(dataInicioDestileriaIngenios.marapaFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroNunorco = dataInicioDestileriaIngenios.nunorcoFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.nunorcoFin)
        ? new Date(dataInicioDestileriaIngenios.nunorcoFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroStaBarbara = dataInicioDestileriaIngenios.staBarFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.staBarFin)
        ? new Date(dataInicioDestileriaIngenios.staBarFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroStaRosa = dataInicioDestileriaIngenios.staRosaFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.staRosaFin)
        ? new Date(dataInicioDestileriaIngenios.staRosaFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroSanJuan = dataInicioDestileriaIngenios.sanJuanFin
      ? (dataEnd > new Date(dataInicioDestileriaIngenios.sanJuanFin)
        ? new Date(dataInicioDestileriaIngenios.sanJuanFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    if (
      data.ingenioNombre === "Aguilares" &&
      newDate <= fechaParametroAguilares &&
      newDate >= new Date(dataInicioDestileriaIngenios.aguilInicio)
    ) {
      g1 = g1 + data.alcoholProducido;
      o1 = o1 + data.alcoholHidratado || 0;
      dataAguilares = {
        N10: g1,
        O44: o1,
      };
    }

    if (
      data.ingenioNombre === "Destilería Bella Vista" &&
      newDate <= fechaParametroDestileriaBellaVista &&
      newDate >= new Date(dataInicioDestileriaIngenios.bellaVistaDestInicio)
    ) {
      g21 = g21 + data.alcoholProducido;
      o21 = o21 + data.alcoholHidratado || 0;
      dataDestBellaVista = {
        N27: g21,
        O59: o21,
      };
    }


    if (
      data.ingenioNombre === "Cruz Alta" &&
      newDate <= fechaParametroCruzAlta &&
      newDate >= new Date(dataInicioDestileriaIngenios.cruzInicio)
    ) {
      g2 = g2 + data.alcoholProducido || 0;
      o2 = o2 + data.alcoholHidratado || 0;
      dataCruzAlta = {
        N11: g2,
        O47: o2,
      };
    }

    if (
      data.ingenioNombre === "La Florida" &&
      newDate <= fechaParametroLaFlorida &&
      newDate >= new Date(dataInicioDestileriaIngenios.floridaInicio)
    ) {
      g3 = g3 + data.alcoholProducido;
      o3 = o3 + data.alcoholHidratado || 0;
      dataLaFlorida = {
        N12: g3,
        O50: o3,
      };
    }

    if (
      data.ingenioNombre === "Concepción" &&
      newDate <= fechaParametroConcepcion &&
      newDate >= new Date(dataInicioDestileriaIngenios.concepInicio)
    ) {
      g4 = g4 + data.alcoholProducido;
      o4 = o4 + data.alcoholHidratado || 0;
      dataConcepcion = {
        N14: g4,
        O46: o4,
      };
    }
    if (
      data.ingenioNombre === "Marapa" &&
      newDate <= fechaParametroMarapa &&
      newDate >= new Date(dataInicioDestileriaIngenios.marapaInicio)
    ) {
      g5 = g5 + data.alcoholProducido;
      o5 = o5 + data.alcoholHidratado || 0;
      dataMarapa = {
        N15: g5,
        O54: o5,
      };
    }

    if (
      data.ingenioNombre === "Bella Vista" &&
      newDate <= fechaParametroBellaVista &&
      newDate >= new Date(dataInicioDestileriaIngenios.bellaInicio)
    ) {
      g6 = g6 + data.alcoholProducido;
      o6 = o6 + data.alcoholHidratado || 0;
      dataBellaVista = {
        N17: g6,
        O45: o6,
      };
    }

    if (
      data.ingenioNombre === "Famaillá" &&
      newDate <= fechaParametroFamailla &&
      newDate >= new Date(dataInicioDestileriaIngenios.famaillaInicio)
    ) {
      g7 = g7 + data.alcoholProducido;
      o7 = o7 + data.alcoholHidratado || 0;
      dataFamailla = {
        N18: g7,
        O48: o7,
      };
    }
    if (
      data.ingenioNombre === "La Corona" &&
      newDate <= fechaParametroLaCorona &&
      newDate >= new Date(dataInicioDestileriaIngenios.coronaInicio)
    ) {
      g8 = g8 + data.alcoholProducido;
      o8 = o8 + data.alcoholHidratado || 0;
      dataLaCorona = {
        N19: g8,
        O49: o8,
      };
    }

    if (
      data.ingenioNombre === "La Providencia" &&
      newDate <= fechaParametroLaProvidencia &&
      newDate >= new Date(dataInicioDestileriaIngenios.provInicio)
    ) {
      g9 = g9 + data.alcoholProducido;
      o9 = o9 + data.alcoholHidratado || 0;
      dataLaProvidencia = {
        N20: g9,
        O51: o9,
      };
    }

    if (
      data.ingenioNombre === "La Trinidad" &&
      newDate <= fechaParametroLaTrinidad &&
      newDate >= new Date(dataInicioDestileriaIngenios.trinInicio)
    ) {
      g10 = g10 + data.alcoholProducido;
      o10 = o10 + data.alcoholHidratado || 0;
      dataLaTrinidad = {
        N21: g10,
        O52: o10,
      };
    }

    if (
      data.ingenioNombre === "Leales" &&
      newDate <= fechaParametroLeales &&
      newDate >= new Date(dataInicioDestileriaIngenios.lealesInicio)
    ) {
      g11 = g11 + data.alcoholProducido;
      o11 = o11 + data.alcoholHidratado || 0;
      dataLeales = {
        N22: g11,
        O53: o11,
      };
    }

    if (
      data.ingenioNombre === "Ñuñorco" &&
      newDate <= fechaParametroNunorco &&
      newDate >= new Date(dataInicioDestileriaIngenios.nunorcoInicio)
    ) {
      g12 = g12 + data.alcoholProducido;
      o12 = o12 + data.alcoholHidratado || 0;
      dataÑuñorco = {
        N23: g12,
        O55: o12,
      };
    }

    if (
      data.ingenioNombre === "Santa Barbara" &&
      newDate <= fechaParametroStaBarbara &&
      newDate >= new Date(dataInicioDestileriaIngenios.staBarInicio)
    ) {
      g13 = g13 + data.alcoholProducido;
      o13 = o13 + data.alcoholHidratado || 0;
      dataStaBarbara = {
        N24: g13,
        O56: o13,
      };
    }

    if (
      data.ingenioNombre === "Santa Rosa" &&
      newDate <= fechaParametroStaRosa &&
      newDate >= new Date(dataInicioDestileriaIngenios.staRosaInicio)
    ) {
      g14 = g14 + data.alcoholProducido;
      o14 = o14 + data.alcoholHidratado || 0;
      dataStaRosa = {
        N25: g14,
        O57: o14,
      };
    }

    if (
      data.ingenioNombre === "San Juan" &&
      newDate <= fechaParametroSanJuan &&
      newDate >= new Date(dataInicioDestileriaIngenios.sanJuanInicio)
    ) {
      g15 = g15 + data.alcoholProducido;
      o15 = o15 + data.alcoholHidratado || 0;
      dataSanJuan = {
        N26: g15,
        O58: o15,
      };
    }
  });

  alcoholPanel =
    dataAguilares.N10 +
    dataDestBellaVista.N27 +
    dataCruzAlta.N11 +
    dataLaFlorida.N12 +
    dataConcepcion.N14 +
    dataMarapa.N15 +
    dataBellaVista.N17 +
    dataFamailla.N18 +
    dataLaCorona.N19 +
    dataLaProvidencia.N20 +
    dataLaTrinidad.N21 +
    dataLeales.N22 +
    dataÑuñorco.N23 +
    dataStaBarbara.N24 +
    dataStaRosa.N25 +
    dataSanJuan.N26

  /** NORTE **/
  dataImportDestileriaNorte?.forEach((data) => {
    const newDate = new Date(data.fechaParte)
    // const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const fechaParametroEsperanza = dataInicioDestileriaIngeniosNorte.esperanzaFin ? (dataEnd > new Date(dataInicioDestileriaIngeniosNorte.esperanzaFin) ? new Date(dataInicioDestileriaIngeniosNorte.esperanzaFin) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroLedesma = dataInicioDestileriaIngeniosNorte.ledesmaFin ? (dataEnd > new Date(dataInicioDestileriaIngeniosNorte.ledesmaFin) ? new Date(dataInicioDestileriaIngeniosNorte.ledesmaFin) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroRioGrande = dataInicioDestileriaIngeniosNorte.riograndeFin ? (dataEnd > new Date(dataInicioDestileriaIngeniosNorte.riograndeFin) ? new Date(dataInicioDestileriaIngeniosNorte.riograndeFin) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroSanIsidro = dataInicioDestileriaIngeniosNorte.sanisidroFin ? (dataEnd > new Date(dataInicioDestileriaIngeniosNorte.sanisidroFin) ? new Date(dataInicioDestileriaIngeniosNorte.sanisidroFin) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroSeaboard = dataInicioDestileriaIngeniosNorte.seaboardFin ? (dataEnd > new Date(dataInicioDestileriaIngeniosNorte.seaboardFin) ? new Date(dataInicioDestileriaIngeniosNorte.seaboardFin) : new Date(dataEnd)) : new Date(dataEnd);
    if (
      data.ingenioNombre === "La Esperanza" &&
      newDate <= fechaParametroEsperanza &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.esperanzaInicio)
    ) {
      g16 = g16 + data.alcoholProducido;
      o16 = o16 + data.alcoholHidratado || 0;
      dataLaEsperanza = {
        N44: g16,
        O44: o16,
      };
    }
    if (
      data.ingenioNombre === "Ledesma" &&
      newDate <= fechaParametroLedesma &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.ledesmaInicio)
    ) {
      g17 = g17 + data.alcoholProducido;
      o17 = o17 + data.alcoholHidratado || 0;
      dataLedesma = {
        N45: g17,
        O45: o17,
      };
    }
    if (
      data.ingenioNombre === "Río Grande" &&
      newDate <= fechaParametroRioGrande &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.riograndeInicio)
    ) {
      g18 = g18 + data.alcoholProducido;
      o18 = o18 + data.alcoholHidratado || 0;
      dataRioGrande = {
        N46: g18,
        O46: o18,
      };
    }
    if (
      data.ingenioNombre === "San Isidro" &&
      newDate <= fechaParametroSanIsidro &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.sanisidroInicio)
    ) {
      g19 = g19 + data.alcoholProducido;
      o19 = o19 + data.alcoholHidratado || 0;
      dataSanIsidro = {
        N47: g19,
        O47: o19,
      };
    }
    if (
      data.ingenioNombre === "Seaboard" &&
      newDate <= fechaParametroSeaboard &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.seaboardInicio)
    ) {

      g20 = g20 + data.alcoholProducido;
      o20 = o20 + data.alcoholHidratado || 0;
      dataSeaboard = {
        N48: g20,
        O48: o20,
      };
    }
  });

  /*********************************************************************************/
  /****************************** DATOS ANHIDRO ALCOHOL ******************************/
  /** TUCUMAN **/

  dataImportAnhidro?.forEach((data) => {
    const newDate = new Date(data.fechaParte)

    const fechaParametroAguilares = dataInicioAnhidroIngenios.aguilFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.aguilFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.aguilFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroBellaVista = dataInicioAnhidroIngenios.bellaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.bellaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.bellaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroConcepcion = dataInicioAnhidroIngenios.concepFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.concepFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.concepFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroCruzAlta = dataInicioAnhidroIngenios.cruzFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.cruzFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.cruzFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroDestileriaBellaVista = dataInicioAnhidroIngenios.bellaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.bellaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.bellaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroFamailla = dataInicioAnhidroIngenios.famaillaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.famaillaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.famaillaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaCorona = dataInicioAnhidroIngenios.coronaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.coronaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.coronaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaFlorida = dataInicioAnhidroIngenios.floridaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.floridaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.floridaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaProvidencia = dataInicioAnhidroIngenios.provFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.provFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.provFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLaTrinidad = dataInicioAnhidroIngenios.trinFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.trinFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.trinFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroLeales = dataInicioAnhidroIngenios.lealesFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.lealesFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.lealesFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroMarapa = dataInicioAnhidroIngenios.marapaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.marapaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.marapaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroNunorco = dataInicioAnhidroIngenios.nunorcoFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.nunorcoFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.nunorcoFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroStaBarbara = dataInicioAnhidroIngenios.staBarFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.staBarFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.staBarFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroStaRosa = dataInicioAnhidroIngenios.staRosaFinAnhidro
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.staRosaFinAnhidro)
        ? new Date(dataInicioAnhidroIngenios.staRosaFinAnhidro)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametroSanJuan = dataInicioAnhidroIngenios.bellaVistaAnhidroFin
      ? (dataEnd > new Date(dataInicioAnhidroIngenios.bellaVistaAnhidroFin)
        ? new Date(dataInicioAnhidroIngenios.bellaVistaAnhidroFin)
        : new Date(dataEnd))
      : new Date(dataEnd)

    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    if (
      data.ingenioNombre === "Aguilares" &&
      newDate <= fechaParametroAguilares &&
      newDate >= new Date(dataInicioAnhidroIngenios.aguilInicioAnhidro)
    ) {
      r1 = r1 + data.alcoholAnhidro || 0;
      dataAguilares = {
        R44: r1,
        N10: dataAguilares.N10,
        O44: dataAguilares.O44,
      };
    }

    if (
      data.ingenioNombre === "Destilería Bella Vista" &&
      newDate <= fechaParametroDestileriaBellaVista &&
      newDate >= new Date(dataInicioAnhidroIngenios.bellaVistaAnhidroInicio)
    ) {
      r21 = r21 + data.alcoholAnhidro || 0;
      dataDestBellaVista = {
        R59: r21,
        N27: dataDestBellaVista.N27,
        O59: dataDestBellaVista.O59
      };
    }

    if (
      data.ingenioNombre === "Cruz Alta" &&
      newDate <= fechaParametroCruzAlta &&
      newDate >= new Date(dataInicioAnhidroIngenios.cruzInicioAnhidro)
    ) {
      r2 = r2 + data.alcoholAnhidro || 0;
      dataCruzAlta = {
        R47: r2,
        N11: dataCruzAlta.N11,
        O47: dataCruzAlta.O47
      };
    }

    if (
      data.ingenioNombre === "La Florida" &&
      newDate <= fechaParametroLaFlorida &&
      newDate >= new Date(dataInicioAnhidroIngenios.floridaInicioAnhidro)
    ) {

      r3 = r3 + data.alcoholAnhidro || 0;
      dataLaFlorida = {
        R50: r3,
        N12: dataLaFlorida.N12,
        O50: dataLaFlorida.O50
      };
    }

    if (
      data.ingenioNombre === "Concepción" &&
      newDate <= fechaParametroConcepcion &&
      newDate >= new Date(dataInicioAnhidroIngenios.concepInicioAnhidro)
    ) {
      r4 = r4 + data.alcoholAnhidro || 0;
      dataConcepcion = {
        R46: r4,
        N14: dataConcepcion.N14,
        O46: dataConcepcion.O46
      };
    }

    if (
      data.ingenioNombre === "Marapa" &&
      newDate <= fechaParametroMarapa &&
      newDate >= new Date(dataInicioAnhidroIngenios.marapaInicioAnhidro)
    ) {
      r5 = r5 + data.alcoholAnhidro || 0;
      dataMarapa = {
        R54: r5,
        N15: dataMarapa.N15,
        O54: dataMarapa.O54
      };
    }

    if (
      data.ingenioNombre === "Bella Vista" &&
      newDate <= fechaParametroBellaVista &&
      newDate >= new Date(dataInicioAnhidroIngenios.bellaInicioAnhidro)
    ) {
      r6 = r6 + data.alcoholAnhidro || 0;
      dataBellaVista = {
        R45: r6,
        N17: dataBellaVista.N17,
        O45: dataBellaVista.O45
      };
    }

    if (
      data.ingenioNombre === "Famaillá" &&
      newDate <= fechaParametroFamailla &&
      newDate >= new Date(dataInicioAnhidroIngenios.famaillaInicioAnhidro)
    ) {
      r7 = r7 + data.alcoholAnhidro || 0;
      dataFamailla = {
        R48: r7,
        N18: dataFamailla.N18,
        O48: dataFamailla.O48
      };
    }
    if (
      data.ingenioNombre === "La Corona" &&
      newDate <= fechaParametroLaCorona &&
      newDate >= new Date(dataInicioAnhidroIngenios.coronaInicioAnhidro)
    ) {
      r8 = r8 + data.alcoholAnhidro || 0;
      dataLaCorona = {
        R49: r8,
        N19: dataLaCorona.N19,
        O49: dataLaCorona.O49
      };
    }

    if (
      data.ingenioNombre === "La Providencia" &&
      newDate <= fechaParametroLaProvidencia &&
      newDate >= new Date(dataInicioAnhidroIngenios.provInicioAnhidro)
    ) {
      r9 = r9 + data.alcoholAnhidro || 0;
      dataLaProvidencia = {
        R51: r9,
        N20: dataLaProvidencia.N20,
        O51: dataLaProvidencia.O51
      };
    }

    if (
      data.ingenioNombre === "La Trinidad" &&
      newDate <= fechaParametroLaTrinidad &&
      newDate >= new Date(dataInicioAnhidroIngenios.trinInicioAnhidro)
    ) {

      r10 = r10 + data.alcoholAnhidro || 0;
      dataLaTrinidad = {
        R52: r10,
        N21: dataLaTrinidad.N21,
        O52: dataLaTrinidad.O52
      };
    }

    if (
      data.ingenioNombre === "Leales" &&
      newDate <= fechaParametroLeales &&
      newDate >= new Date(dataInicioAnhidroIngenios.lealesInicioAnhidro)
    ) {
      r11 = r11 + data.alcoholAnhidro || 0;
      dataLeales = {
        R53: r11,
        N22: dataLeales.N22,
        O53: dataLeales.O53
      };
    }

    if (
      data.ingenioNombre === "Ñuñorco" &&
      newDate <= fechaParametroNunorco &&
      newDate >= new Date(dataInicioAnhidroIngenios.nunorcoInicioAnhidro)
    ) {
      r12 = r12 + data.alcoholAnhidro || 0;
      dataÑuñorco = {
        R55: r12,
        N23: dataÑuñorco.N23,
        O55: dataÑuñorco.O55
      };
    }

    if (
      data.ingenioNombre === "Santa Barbara" &&
      newDate <= fechaParametroStaBarbara &&
      newDate >= new Date(dataInicioAnhidroIngenios.staBarInicioAnhidro)
    ) {
      r13 = r13 + data.alcoholAnhidro || 0;
      dataStaBarbara = {
        R56: r13,
        N24: dataStaBarbara.N24,
        O56: dataStaBarbara.O56
      };
    }

    if (
      data.ingenioNombre === "Santa Rosa" &&
      newDate <= fechaParametroStaRosa &&
      newDate >= new Date(dataInicioAnhidroIngenios.staRosaInicioAnhidro)
    ) {
      r14 = r14 + data.alcoholAnhidro || 0;
      dataStaRosa = {
        R57: r14,
        N25: dataStaRosa.N25,
        O57: dataStaRosa.O57
      };
    }

    if (
      data.ingenioNombre === "San Juan" &&
      newDate <= fechaParametroSanJuan &&
      newDate >= new Date(dataInicioAnhidroIngenios.sanJuanInicioAnhidro)
    ) {
      r15 = r15 + data.alcoholAnhidro || 0;
      dataSanJuan = {
        R58: r15,
        N26: dataSanJuan.N26,
        O58: dataSanJuan.O58
      };
    }
  });

  // AGREGAR ANHIDRO POR DOCUMENTO PARA AÑOS 2025 2024 Y 2023
  if (zafraParteDiario === 2025 && dataEnd !== null) {
    const currentDate = dataEnd !== null ? new Date(dataEnd) : new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() devuelve 0-11
    const currentDay = currentDate.getDate();

    if (dataEnd.getFullYear() === 2025) {
      // Bella Vista - Zafra 2025
      anhidroBellaVista.forEach((anhidro) => {
        if (anhidro.anio === 2025 && anhidro.zafra === 2025 && anhidro.mesNumero < currentMonth) {
          r21 = r21 + anhidro.valor;
          dataDestBellaVista = {
            R59: r21,
            N27: dataDestBellaVista.N27,
            O59: dataDestBellaVista.O59
          }
        }
        if (anhidro.anio === 2025 && anhidro.zafra === 2025 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r21 = r21 + valorPorcentualPorDia;
          dataDestBellaVista = {
            R59: r21,
            N27: dataDestBellaVista.N27,
            O59: dataDestBellaVista.O59
          }
        }
      })
    }
    if (dataEnd.getFullYear() === 2026) {
      // Bella Vista - Zafra 2024 Anio 2026
      anhidroBellaVista.forEach((anhidro) => {
        if (anhidro.anio === 2025 && anhidro.zafra === zafraParteDiario) {
          r21 = r21 + anhidro.valor;
          dataDestBellaVista = {
            R59: r21,
            N27: dataDestBellaVista.N27,
            O59: dataDestBellaVista.O59
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2026 && anhidro.mesNumero < currentMonth) {
          r21 = r21 + anhidro.valor;
          dataDestBellaVista = {
            R59: r21,
            N27: dataDestBellaVista.N27,
            O59: dataDestBellaVista.O59
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2026 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r21 = r21 + valorPorcentualPorDia;
          dataDestBellaVista = {
            R59: r21,
            N27: dataDestBellaVista.N27,
            O59: dataDestBellaVista.O59
          }
        }
      })
    }

  }

  if (zafraParteDiario === 2024 && dataEnd !== null) {
    const currentDate = dataEnd !== null ? new Date(dataEnd) : new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() devuelve 0-11
    const currentDay = currentDate.getDate();

    if (dataEnd.getFullYear() === 2024) {
      // Leales - Zafra 2024
      anhidroLeales.forEach((anhidro) => {
        if (anhidro.anio === 2024 && anhidro.mesNumero < currentMonth) {
          r11 = r11 + anhidro.valor;

          dataLeales = {
            R53: r11,
            N22: dataLeales.N22,
            O53: dataLeales.O53
          }
        }
        if (anhidro.anio === 2024 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r11 = r11 + valorPorcentualPorDia;
          dataLeales = {
            R53: r11,
            N22: dataLeales.N22,
            O53: dataLeales.O53
          }
        }
      });
      // Concepción - Zafra 2024
      anhidroConcepcion.forEach((anhidro) => {
        if (anhidro.anio === 2024 && anhidro.mesNumero < currentMonth) {
          r4 = r4 + anhidro.valor;
          dataConcepcion = {
            R46: r4,
            N14: dataConcepcion.N14,
            O46: dataConcepcion.O46
          }
        }
        if (anhidro.anio === 2024 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r4 = r4 + valorPorcentualPorDia;
          dataConcepcion = {
            R46: r4,
            N14: dataConcepcion.N14,
            O46: dataConcepcion.O46
          }
        }
      })

      // Bella Vista - Zafra 2024
      anhidroBellaVista.forEach((anhidro) => {
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2024 && anhidro.mesNumero < currentMonth) {
          r6 = r6 + anhidro.valor;
          dataBellaVista = {
            R45: r6,
            N17: dataBellaVista.N17,
            O45: dataBellaVista.O45
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2024 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r6 = r6 + valorPorcentualPorDia;
          dataBellaVista = {
            R45: r6,
            N17: dataBellaVista.N17,
            O45: dataBellaVista.O45
          }
        }
      })
    }
    if (dataEnd.getFullYear() === 2025) {
      // Leales - Zafra 2024 Anio 2025
      anhidroLeales.forEach((anhidro) => {
        if (anhidro.anio === 2024) {
          r11 = r11 + anhidro.valor;
          dataLeales = {
            R53: r11,
            N22: dataLeales.N22,
            O53: dataLeales.O53
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2025 && anhidro.mesNumero < currentMonth) {
          r11 = r11 + anhidro.valor;
          dataLeales = {
            R53: r11,
            N22: dataLeales.N22,
            O53: dataLeales.O53
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2025 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r11 = r11 + valorPorcentualPorDia;
          dataLeales = {
            R53: r11,
            N22: dataLeales.N22,
            O53: dataLeales.O53
          }
        }
      });


      // Concepción - Zafra 2024 Anio 2025
      anhidroConcepcion.forEach((anhidro) => {
        if (anhidro.anio === 2024) {
          r4 = r4 + anhidro.valor;
          dataConcepcion = {
            R46: r4,
            N14: dataConcepcion.N14,
            O46: dataConcepcion.O46
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2025 && anhidro.mesNumero < currentMonth) {
          r4 = r4 + anhidro.valor;
          dataConcepcion = {
            R46: r4,
            N14: dataConcepcion.N14,
            O46: dataConcepcion.O46
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2025 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r4 = r4 + valorPorcentualPorDia;
          dataConcepcion = {
            R46: r4,
            N14: dataConcepcion.N14,
            O46: dataConcepcion.O46
          }
        }
      })

      // Bella Vista - Zafra 2024 Anio 2025
      anhidroBellaVista.forEach((anhidro) => {
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2024) {
          r6 = r6 + anhidro.valor;
          dataBellaVista = {
            R45: r6,
            N17: dataBellaVista.N17,
            O45: dataBellaVista.O45
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2025 && anhidro.mesNumero < currentMonth) {
          r6 = r6 + anhidro.valor;
          dataBellaVista = {
            R45: r6,
            N17: dataBellaVista.N17,
            O45: dataBellaVista.O45
          }
        }
        if (anhidro.zafra === zafraParteDiario && anhidro.anio === 2025 && anhidro.mesNumero === currentMonth) {
          let valorPorcentualPorDia = (anhidro.valor / 30) * currentDay;
          r6 = r6 + valorPorcentualPorDia;
          dataBellaVista = {
            R45: r6,
            N17: dataBellaVista.N17,
            O45: dataBellaVista.O45
          }
        }
      })
    }
  }

  if (zafraParteDiario === 2023) {
    const currentDate = dataEnd !== null ? new Date(dataEnd) : new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Para 2023 usamos valores acumulados distribuidos proporcionalmente
    const diasEnAno = 365;
    const diasTranscurridos = Math.min(
      (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / (1000 * 60 * 60 * 24),
      diasEnAno
    );

    // Leales - Zafra 2023
    const valorLeales2023 = (anhidroLeales2023 / diasEnAno) * diasTranscurridos;
    r11 = r11 + valorLeales2023;
    dataLeales = {
      R53: r11,
      N22: dataLeales.N22,
      O53: dataLeales.O53
    };

    // Concepción - Zafra 2023
    const valorConcepcion2023 = (anhidroConcepcion2023 / diasEnAno) * diasTranscurridos;
    r4 = r4 + valorConcepcion2023;
    dataConcepcion = {
      R46: r4,
      N14: dataConcepcion.N14,
      O46: dataConcepcion.O46
    };

    // Bella Vista - Zafra 2023
    const valorBellaVista2023 = (anhidroBellaVista2023 / diasEnAno) * diasTranscurridos;
    r6 = r6 + valorBellaVista2023;
    dataBellaVista = {
      R45: r6,
      N17: dataBellaVista.N17,
      O45: dataBellaVista.O45
    };
  }

  alcoholAnhidroPanel =
    dataAguilares.R44 +
    dataDestBellaVista.R59 +
    dataCruzAlta.R47 +
    dataLaFlorida.R50 +
    dataConcepcion.R46 +
    dataMarapa.R54 +
    dataBellaVista.R45 +
    dataFamailla.R48 +
    dataLaCorona.R49 +
    dataLaProvidencia.R51 +
    dataLaTrinidad.R52 +
    dataLeales.R53 +
    dataÑuñorco.R55 +
    dataStaBarbara.R56 +
    dataStaRosa.R57 +
    dataSanJuan.R58

  /** NORTE **/
  dataImportAnhidroNorte?.forEach((data) => {
    const newDate = new Date(data.fechaParte)
    // const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const fechaParametroEsperanza = dataInicioAnhidroIngeniosNorte.esperanzaFinAnhidro ? (dataEnd > new Date(dataInicioAnhidroIngeniosNorte.esperanzaFinAnhidro) ? new Date(dataInicioAnhidroIngeniosNorte.esperanzaFinAnhidro) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroLedesma = dataInicioAnhidroIngeniosNorte.ledesmaFinAnhidro ? (dataEnd > new Date(dataInicioAnhidroIngeniosNorte.ledesmaFinAnhidro) ? new Date(dataInicioAnhidroIngeniosNorte.ledesmaFinAnhidro) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroRioGrande = dataInicioAnhidroIngeniosNorte.riograndeFinAnhidro ? (dataEnd > new Date(dataInicioAnhidroIngeniosNorte.riograndeFinAnhidro) ? new Date(dataInicioAnhidroIngeniosNorte.riograndeFinAnhidro) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroSanIsidro = dataInicioAnhidroIngeniosNorte.sanisidroFinAnhidro ? (dataEnd > new Date(dataInicioAnhidroIngeniosNorte.sanisidroFinAnhidro) ? new Date(dataInicioAnhidroIngeniosNorte.sanisidroFinAnhidro) : new Date(dataEnd)) : new Date(dataEnd);
    const fechaParametroSeaboard = dataInicioAnhidroIngeniosNorte.seaboardFinAnhidro ? (dataEnd > new Date(dataInicioAnhidroIngeniosNorte.seaboardFinAnhidro) ? new Date(dataInicioAnhidroIngeniosNorte.seaboardFinAnhidro) : new Date(dataEnd)) : new Date(dataEnd);
    if (
      data.ingenioNombre === "La Esperanza" &&
      newDate <= fechaParametroEsperanza &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.esperanzaInicioAnhidro)
    ) {
      r16 = r16 + data.alcoholAnhidro || 0;
      dataLaEsperanza = {
        P44: r16,
        N44: dataLaEsperanza.N44,
        O44: dataLaEsperanza.O44,
      };
    }

    if (
      data.ingenioNombre === "Ledesma" &&
      newDate <= fechaParametroLedesma &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.ledesmaInicioAnhidro)
    ) {
      r17 = r17 + data.alcoholAnhidro || 0;
      dataLedesma = {
        P45: r17,
        O45: dataLedesma.O45,
        N45: dataLedesma.N45
      };
    }
    if (
      data.ingenioNombre === "Río Grande" &&
      newDate <= fechaParametroRioGrande &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.riograndeInicioAnhidro)
    ) {
      r18 = r18 + data.alcoholAnhidro || 0;
      dataRioGrande = {
        P46: r18,
        N46: dataRioGrande.N46,
        O46: dataRioGrande.O46,
      };
    }
    if (
      data.ingenioNombre === "San Isidro" &&
      newDate <= fechaParametroSanIsidro &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.sanisidroInicioAnhidro)
    ) {
      r19 = r19 + data.alcoholAnhidro || 0;
      dataSanIsidro = {
        P47: r19,
        N47: dataSanIsidro.N47,
        O47: dataSanIsidro.O47,
      };
    }
    if (
      data.ingenioNombre === "Seaboard" &&
      newDate <= fechaParametroSeaboard &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.seaboardInicioAnhidro)
    ) {
      r20 = r20 + data.alcoholAnhidro || 0;
      dataSeaboard = {
        P48: r20,
        N48: dataSeaboard.N48,
        O48: dataSeaboard.O48,
      };
    }
  });

  /*********************************************************************************/
  /*********************************** DATOS ZAFRA ***********************************/
  /** TUCUMAN **/
  dataImport?.forEach((data) => {
    const newDate = new Date(data.fechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    // if (newDate <= fechaParametro) {
    //   // cmbPanel = cmbPanel + data.moliendaCanaBruta;
    //   azucarPanel =
    //     azucarPanel +
    //     data.azucarBlancoProducido +
    //     data.azucarCrudoProducido +
    //     data.azucarRefinado +
    //     data.azucarOrganico +
    //     data.otroAzucar;
    //   azucarPanelEquivalente = azucarPanelEquivalente + Number(data.azucarEquivalente.replace(/\./g, ''))
    //   azucarPanelCrudo = azucarPanelCrudo + data?.azucarCrudoProducido
    //   azucarPanelBlancoA = azucarPanelBlancoA + data?.azucarBlancoProducido
    //   azucarPanelRefinado = azucarPanelRefinado + data?.azucarRefinado
    //   azucarPanelOrganico = azucarPanelOrganico + data?.azucarOrganico
    //   azucarPanelOtros = azucarPanelOtros + data?.otroAzucar

    // }


    /** Aguilares **/
    const ultimoRegistrosAguilares = new Date(dataInicioIngenios.CellE10) >= new Date(dataInicioIngenios.CellF10)
      ? new Date(dataInicioIngenios.CellE10)
      : new Date(dataInicioIngenios.CellF10)

    const fechaParametroAguilares = dataInicioIngenios.CellE10
      ? (dataEnd > ultimoRegistrosAguilares
        ? ultimoRegistrosAguilares
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** BellaVista **/
    const ultimoRegistrosBellaVista = new Date(dataInicioIngenios.CellE17) >= new Date(dataInicioIngenios.CellF17)
      ? new Date(dataInicioIngenios.CellE17)
      : new Date(dataInicioIngenios.CellF17)

    const fechaParametroBellaVista = dataInicioIngenios.CellE17
      ? (dataEnd > ultimoRegistrosBellaVista
        ? ultimoRegistrosBellaVista
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** Concepcion **/
    const ultimoRegistrosConcepcion = new Date(dataInicioIngenios.CellE14) >= new Date(dataInicioIngenios.CellF14)
      ? new Date(dataInicioIngenios.CellE14)
      : new Date(dataInicioIngenios.CellF14)

    const fechaParametroConcepcion = dataInicioIngenios.CellE14
      ? (dataEnd > ultimoRegistrosConcepcion
        ? ultimoRegistrosConcepcion
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** CruzAlta **/
    const ultimoRegistrosCruzAlta = new Date(dataInicioIngenios.CellE11) >= new Date(dataInicioIngenios.CellF11)
      ? new Date(dataInicioIngenios.CellE11)
      : new Date(dataInicioIngenios.CellF11)

    const fechaParametroCruzAlta = dataInicioIngenios.CellE11
      ? (dataEnd > ultimoRegistrosCruzAlta
        ? ultimoRegistrosCruzAlta
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** Famailla **/
    const ultimoRegistrosFamailla = new Date(dataInicioIngenios.CellE18) >= new Date(dataInicioIngenios.CellF18)
      ? new Date(dataInicioIngenios.CellE18)
      : new Date(dataInicioIngenios.CellF18)

    const fechaParametroFamailla = dataInicioIngenios.CellE18
      ? (dataEnd > ultimoRegistrosFamailla
        ? ultimoRegistrosFamailla
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** LaCorona **/
    const ultimoRegistrosLaCorona = new Date(dataInicioIngenios.CellE19) >= new Date(dataInicioIngenios.CellF19)
      ? new Date(dataInicioIngenios.CellE19)
      : new Date(dataInicioIngenios.CellF19)

    const fechaParametroLaCorona = dataInicioIngenios.CellE19
      ? (dataEnd > ultimoRegistrosLaCorona
        ? ultimoRegistrosLaCorona
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** LaFlorida **/
    const ultimoRegistrosLaFlorida = new Date(dataInicioIngenios.CellE12) >= new Date(dataInicioIngenios.CellF12)
      ? new Date(dataInicioIngenios.CellE12)
      : new Date(dataInicioIngenios.CellF12)

    const fechaParametroLaFlorida = dataInicioIngenios.CellE12
      ? (dataEnd > ultimoRegistrosLaFlorida
        ? ultimoRegistrosLaFlorida
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** LaProvidencia **/
    const ultimoRegistrosLaProvidencia = new Date(dataInicioIngenios.CellE20) >= new Date(dataInicioIngenios.CellF20)
      ? new Date(dataInicioIngenios.CellE20)
      : new Date(dataInicioIngenios.CellF20)

    const fechaParametroLaProvidencia = dataInicioIngenios.CellE20
      ? (dataEnd > ultimoRegistrosLaProvidencia
        ? ultimoRegistrosLaProvidencia
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** LaTrinidad **/
    const ultimoRegistrosLaTrinidad = new Date(dataInicioIngenios.CellE21) >= new Date(dataInicioIngenios.CellF21)
      ? new Date(dataInicioIngenios.CellE21)
      : new Date(dataInicioIngenios.CellF21)

    const fechaParametroLaTrinidad = dataInicioIngenios.CellE21
      ? (dataEnd > ultimoRegistrosLaTrinidad
        ? ultimoRegistrosLaTrinidad
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** Leales **/
    const ultimoRegistrosLeales = new Date(dataInicioIngenios.CellE22) >= new Date(dataInicioIngenios.CellF22)
      ? new Date(dataInicioIngenios.CellE22)
      : new Date(dataInicioIngenios.CellF22)

    const fechaParametroLeales = dataInicioIngenios.CellE22
      ? (dataEnd > ultimoRegistrosLeales
        ? ultimoRegistrosLeales
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** Marapa **/
    const ultimoRegistrosMarapa = new Date(dataInicioIngenios.CellE15) >= new Date(dataInicioIngenios.CellF15)
      ? new Date(dataInicioIngenios.CellE15)
      : new Date(dataInicioIngenios.CellF15)

    const fechaParametroMarapa = dataInicioIngenios.CellE15
      ? (dataEnd > ultimoRegistrosMarapa
        ? ultimoRegistrosMarapa
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** Nunorco **/
    const ultimoRegistrosNunorco = new Date(dataInicioIngenios.CellE23) >= new Date(dataInicioIngenios.CellF23)
      ? new Date(dataInicioIngenios.CellE23)
      : new Date(dataInicioIngenios.CellF23)

    const fechaParametroNunorco = dataInicioIngenios.CellE23
      ? (dataEnd > ultimoRegistrosNunorco
        ? ultimoRegistrosNunorco
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** StaBarbara **/
    const ultimoRegistrosStaBarbara = new Date(dataInicioIngenios.CellE24) >= new Date(dataInicioIngenios.CellF24)
      ? new Date(dataInicioIngenios.CellE24)
      : new Date(dataInicioIngenios.CellF24)

    const fechaParametroStaBarbara = dataInicioIngenios.CellE24
      ? (dataEnd > ultimoRegistrosStaBarbara
        ? ultimoRegistrosStaBarbara
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** StaRosa **/
    const ultimoRegistrosStaRosa = new Date(dataInicioIngenios.CellE25) >= new Date(dataInicioIngenios.CellF25)
      ? new Date(dataInicioIngenios.CellE25)
      : new Date(dataInicioIngenios.CellF25)

    const fechaParametroStaRosa = dataInicioIngenios.CellE25
      ? (dataEnd > ultimoRegistrosStaRosa
        ? ultimoRegistrosStaRosa
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** SanJuan **/
    const ultimoRegistrosSanJuan = new Date(dataInicioIngenios.CellE26) >= new Date(dataInicioIngenios.CellF26)
      ? new Date(dataInicioIngenios.CellE26)
      : new Date(dataInicioIngenios.CellF26)

    const fechaParametroSanJuan = dataInicioIngenios.CellE26
      ? (dataEnd > ultimoRegistrosSanJuan
        ? ultimoRegistrosSanJuan
        : new Date(dataEnd))
      : new Date(dataEnd)

    /** Destileria Bella Vista **/
    const ultimoRegistrosDestBellaVista = new Date(dataInicioIngenios.bellaVistaFin) >= new Date(dataInicioIngenios.bellaVistaFinDatos)
      ? new Date(dataInicioIngenios.bellaVistaFin)
      : new Date(dataInicioIngenios.bellaVistaFinDatos)

    const fechaParametroDestBellaVista = dataInicioIngenios.bellaVistaFin
      ? (dataEnd > ultimoRegistrosDestBellaVista
        ? ultimoRegistrosDestBellaVista
        : new Date(dataEnd))
      : new Date(dataEnd)



    if (
      data.ingenioNombre === "Aguilares" &&
      newDate <= fechaParametroAguilares &&
      newDate >= new Date(dataInicioIngenios.Cell10)
    ) {
      a1 = a1 + data.moliendaCanaBruta || 0;
      b1 = b1 + data.moliendaCanaNeta || 0;
      c1 = c1 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z1 = z1 + data.azucarBlancoProducido + data?.azucarRefinado;
      e1 = e1 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f1 = f1 + data.melazaProducida || 0;
      h1 = h1 + data.azucarRefinado || 0;
      i1 = i1 + data.azucarOrganico || 0;
      j1 = j1 + data.otroAzucar || 0;
      k1 = k1 + data.azucarBlancoProducido;
      l1 = l1 + data.azucarCrudoProducido;

      dataAguilares = {
        E10: a1,
        F10: b1,
        G10: c1 / 1000,
        J10: z1,
        K10: e1,
        M10: f1,
        N10: dataAguilares.N10,
        C43: k1,
        D43: h1,
        F43: i1,
        G43: j1,
        L44: l1,
        O44: dataAguilares.O44,
        R44: dataAguilares.R44,
      };
    }

    if (
      data.ingenioNombre === "Destilería Bella Vista" &&
      newDate <= fechaParametroDestBellaVista &&
      newDate >= new Date(dataInicioIngenios.bellaVistaInicio)
    ) {
      a21 = a21 + data?.moliendaCanaBruta || 0;
      b21 = b21 + data?.moliendaCanaNeta || 0;
      c21 = c21 + Number(data?.azucarEquivalente.replace(/\./g, '')) || 0;
      z21 = z21 + data?.azucarBlancoProducido + data?.azucarRefinado;
      e21 = e21 +
        (data?.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f21 = f21 + data?.melazaProducida;
      h21 = h21 + data?.azucarRefinado || 0;
      i21 = i21 + data?.azucarOrganico || 0;
      j21 = j21 + data?.otroAzucar || 0;
      k21 = k21 + data?.azucarBlancoProducido || 0;
      l21 = l21 + data?.azucarCrudoProducido || 0;
      dataDestBellaVista = {
        E27: a21,
        F27: b21,
        G27: c21 / 1000,
        J27: z21,
        K27: e21,
        M27: f21,
        N27: dataDestBellaVista.N27,
        C59: k21,
        D59: h21,
        F59: i21,
        G59: j21,
        L59: l21,
        O59: dataDestBellaVista.O59,
        R59: dataDestBellaVista.R59,
      };
    }

    if (
      data.ingenioNombre === "Cruz Alta" &&
      newDate <= fechaParametroCruzAlta &&
      newDate >= new Date(dataInicioIngenios.Cell11)
    ) {
      a2 = a2 + data.moliendaCanaBruta || 0;
      b2 = b2 + data.moliendaCanaNeta || 0;
      c2 = c2 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z2 = z2 + data.azucarBlancoProducido + data?.azucarRefinado;
      e2 = e2 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f2 = f2 + data.melazaProducida;
      h2 = h2 + data.azucarRefinado || 0;
      i2 = i2 + data.azucarOrganico || 0;
      j2 = j2 + data.otroAzucar || 0;
      k2 = k2 + data.azucarBlancoProducido || 0;
      l2 = l2 + data.azucarCrudoProducido || 0;
      dataCruzAlta = {
        E11: a2,
        F11: b2,
        G11: c2 / 1000,
        J11: z2,
        K11: e2,
        M11: f2,
        N11: dataCruzAlta.N11,
        C47: k2,
        D47: h2,
        F47: i2,
        G47: j2,
        L47: l2,
        O47: dataCruzAlta.O47,
        R47: dataCruzAlta.R47,
      };
    }

    if (
      data.ingenioNombre === "La Florida" &&
      newDate <= fechaParametroLaFlorida &&
      newDate >= new Date(dataInicioIngenios.Cell12)
    ) {
      a3 = a3 + data.moliendaCanaBruta || 0;
      b3 = b3 + data.moliendaCanaNeta || 0;
      c3 = c3 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z3 = z3 + data.azucarBlancoProducido + data?.azucarRefinado;
      e3 = e3 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f3 = f3 + data.melazaProducida;
      h3 = h3 + data.azucarRefinado || 0;
      i3 = i3 + data.azucarOrganico || 0;
      j3 = j3 + data.otroAzucar || 0;
      k3 = k3 + data.azucarBlancoProducido || 0;
      l3 = l3 + data.azucarCrudoProducido || 0;
      dataLaFlorida = {
        E12: a3,
        F12: b3,
        G12: c3 / 1000,
        J12: z3,
        K12: e3,
        M12: f3,
        N12: dataLaFlorida.N12,
        C50: k3,
        D50: h3,
        F50: i3,
        G50: j3,
        L50: l3,
        O50: dataLaFlorida.O50,
        R50: dataLaFlorida.R50 || 0,
      };
    }

    if (
      data.ingenioNombre === "Concepción" &&
      newDate <= fechaParametroConcepcion &&
      newDate >= new Date(dataInicioIngenios.Cell14)
    ) {
      a4 = a4 + data.moliendaCanaBruta || 0;
      b4 = b4 + data.moliendaCanaNeta || 0;
      c4 = c4 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z4 = z4 + data.azucarBlancoProducido + (data.azucarRefinado || 0);
      e4 = e4 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f4 = f4 + data.melazaProducida;
      h4 = h4 + data.azucarRefinado || 0;
      i4 = i4 + data.azucarOrganico || 0;
      j4 = j4 + data.otroAzucar || 0;
      k4 = k4 + data.azucarBlancoProducido || 0;
      l4 = l4 + data.azucarCrudoProducido || 0;

      dataConcepcion = {
        E14: a4,
        F14: b4,
        G14: c4 / 1000,
        J14: z4,
        K14: e4,
        M14: f4,
        N14: dataConcepcion.N14,
        C46: k4,
        D46: h4,
        F46: i4,
        G46: j4,
        L46: l4,
        O46: dataConcepcion.O46,
        R46: dataConcepcion.R46,
      };
    }

    if (
      data.ingenioNombre === "Marapa" &&
      newDate <= fechaParametroMarapa &&
      newDate >= new Date(dataInicioIngenios.Cell15)
    ) {
      a5 = a5 + data.moliendaCanaBruta || 0;
      b5 = b5 + data.moliendaCanaNeta || 0;
      c5 = c5 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z5 = z5 + data.azucarBlancoProducido + data?.azucarRefinado;
      e5 = e5 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f5 = f5 + data.melazaProducida;
      h5 = h5 + data.azucarRefinado || 0;
      i5 = i5 + data.azucarOrganico || 0;
      j5 = j5 + data.otroAzucar || 0;
      k5 = k5 + data.azucarBlancoProducido || 0;
      l5 = l5 + data.azucarCrudoProducido || 0;
      dataMarapa = {
        E15: a5,
        F15: b5,
        G15: c5 / 1000,
        J15: z5,
        K15: e5,
        M15: f5,
        N15: dataMarapa.N15,
        C54: k5,
        D54: h5,
        F54: i5,
        G54: j5,
        L54: l5,
        O54: dataMarapa.O54,
        R54: dataMarapa.R54,
      };
    }

    if (
      data.ingenioNombre === "Bella Vista" &&
      newDate <= fechaParametroBellaVista &&
      newDate >= new Date(dataInicioIngenios.Cell17)
    ) {
      a6 = a6 + data.moliendaCanaBruta || 0;
      b6 = b6 + data.moliendaCanaNeta || 0;
      c6 = c6 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z6 = z6 + data.azucarBlancoProducido + data?.azucarRefinado;
      e6 = e6 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f6 = f6 + data.melazaProducida;
      h6 = h6 + data.azucarRefinado || 0;
      i6 = i6 + data.azucarOrganico || 0;
      j6 = j6 + data.otroAzucar || 0;
      k6 = k6 + data.azucarBlancoProducido || 0;
      l6 = l6 + data.azucarCrudoProducido || 0;

      dataBellaVista = {
        E17: a6,
        F17: b6,
        G17: c6 / 1000,
        J17: z6,
        K17: e6,
        M17: f6,
        N17: dataBellaVista.N17,
        C45: k6,
        D45: h6,
        F45: i6,
        G45: j6,
        L45: l6,
        O45: dataBellaVista.O45,
        R45: dataBellaVista.R45,
      };
    }
    if (
      data.ingenioNombre === "Famaillá" &&
      newDate <= fechaParametroFamailla &&
      newDate >= new Date(dataInicioIngenios.Cell18)
    ) {
      a7 = a7 + data.moliendaCanaBruta || 0;
      b7 = b7 + data.moliendaCanaNeta || 0;
      c7 = c7 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z7 = z7 + data.azucarBlancoProducido + (data.azucarRefinado || 0);
      e7 = e7 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f7 = f7 + data.melazaProducida;
      h7 = h7 + data.azucarRefinado || 0;
      i7 = i7 + data.azucarOrganico || 0;
      j7 = j7 + data.otroAzucar || 0;
      k7 = k7 + data.azucarBlancoProducido || 0;
      l7 = l7 + data.azucarCrudoProducido || 0;

      dataFamailla = {
        E18: a7,
        F18: b7,
        G18: c7 / 1000,
        J18: z7,
        K18: e7,
        M18: f7,
        N18: dataFamailla.N18,
        C48: k7,
        D48: h7,
        F48: i7,
        G48: j7,
        L48: l7,
        O48: dataFamailla.O48,
        R48: dataFamailla.R48,
      };
    }

    if (
      data.ingenioNombre === "La Corona" &&
      newDate <= fechaParametroLaCorona &&
      newDate >= new Date(dataInicioIngenios.Cell19)
    ) {
      a8 = a8 + data.moliendaCanaBruta || 0;
      b8 = b8 + data.moliendaCanaNeta || 0;
      c8 = c8 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z8 = z8 + data.azucarBlancoProducido + data?.azucarRefinado;
      e8 = e8 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f8 = f8 + data.melazaProducida;
      h8 = h8 + data.azucarRefinado || 0;
      i8 = i8 + data.azucarOrganico || 0;
      j8 = j8 + data.otroAzucar || 0;
      k8 = k8 + data.azucarBlancoProducido || 0;
      l8 = l8 + data.azucarCrudoProducido || 0;

      dataLaCorona = {
        E19: a8,
        F19: b8,
        G19: c8 / 1000,
        J19: z8,
        K19: e8,
        M19: f8,
        N19: dataLaCorona.N19,
        C49: k8,
        D49: h8,
        F49: i8,
        G49: j8,
        L49: l8,
        O49: dataLaCorona.O49,
        R49: dataLaCorona.R49,
      };
    }

    if (
      data.ingenioNombre === "La Providencia" &&
      newDate <= fechaParametroLaProvidencia &&
      newDate >= new Date(dataInicioIngenios.Cell20)
    ) {
      a9 = a9 + data.moliendaCanaBruta || 0;
      b9 = b9 + data.moliendaCanaNeta || 0;
      c9 = c9 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z9 = z9 + data.azucarBlancoProducido + data?.azucarRefinado;
      e9 =
        e9 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f9 = f9 + data.melazaProducida;
      h9 = h9 + data.azucarRefinado || 0;
      i9 = i9 + data.azucarOrganico || 0;
      j9 = j9 + data.otroAzucar || 0;
      k9 = k9 + data.azucarBlancoProducido || 0;
      l9 = l9 + data.azucarCrudoProducido || 0;


      dataLaProvidencia = {
        E20: a9,
        F20: b9,
        G20: c9 / 1000,
        J20: z9,
        K20: e9,
        M20: f9,
        N20: dataLaProvidencia.N20,
        C51: k9,
        D51: h9,
        F51: i9,
        G51: j9,
        L51: l9,
        O51: dataLaProvidencia.O51,
        R51: dataLaProvidencia.R51,
      };
    }

    if (
      data.ingenioNombre === "La Trinidad" &&
      newDate <= fechaParametroLaTrinidad &&
      newDate >= new Date(dataInicioIngenios.Cell21)
    ) {
      a10 = a10 + data.moliendaCanaBruta || 0;
      b10 = b10 + data.moliendaCanaNeta || 0;
      c10 = c10 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z10 = z10 + data.azucarBlancoProducido + data?.azucarRefinado;
      e10 = e10 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f10 = f10 + data.melazaProducida;
      h10 = h10 + data.azucarRefinado || 0;
      i10 = i10 + data.azucarOrganico || 0;
      j10 = j10 + data.otroAzucar || 0;
      k10 = k10 + data.azucarBlancoProducido || 0;
      l10 = l10 + data.azucarCrudoProducido || 0;
      dataLaTrinidad = {
        E21: a10,
        F21: b10,
        G21: c10 / 1000,
        J21: z10,
        K21: e10,
        M21: f10,
        N21: dataLaTrinidad.N21,
        C52: k10,
        D52: h10,
        F52: i10,
        G52: j10,
        L52: l10,
        O52: dataLaTrinidad.O52,
        R52: dataLaTrinidad.R52,
      };
    }

    if (
      data.ingenioNombre === "Leales" &&
      newDate <= fechaParametroLeales &&
      newDate >= new Date(dataInicioIngenios.Cell22)
    ) {
      a11 = a11 + data.moliendaCanaBruta;
      b11 = b11 + data.moliendaCanaNeta;
      c11 = c11 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z11 = z11 + data.azucarBlancoProducido + (data.azucarRefinado || 0);
      e11 = e11 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f11 = f11 + data.melazaProducida;
      h11 = h11 + data.azucarRefinado || 0;
      i11 = i11 + data.azucarOrganico || 0;
      j11 = j11 + data.otroAzucar || 0;
      k11 = k11 + data.azucarBlancoProducido;
      l11 = l11 + data.azucarCrudoProducido;

      dataLeales = {
        E22: a11,
        F22: b11,
        G22: c11 / 1000,
        J22: z11,
        K22: e11,
        M22: f11,
        N22: dataLeales.N22,
        C53: k11,
        D53: h11,
        F53: i11,
        G53: j11,
        L53: l11,
        O53: dataLeales.O53,
        R53: dataLeales.R53,
      };
    }

    if (
      data.ingenioNombre === "Ñuñorco" &&
      newDate <= fechaParametroNunorco &&
      newDate >= new Date(dataInicioIngenios.Cell23)
    ) {
      a12 = a12 + data?.moliendaCanaBruta;
      b12 = b12 + data?.moliendaCanaNeta;
      c12 = c12 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z12 = z12 + data?.azucarBlancoProducido + data?.azucarRefinado;
      e12 = e12 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f12 = f12 + data?.melazaProducida;
      h12 = h12 + data.azucarRefinado || 0;
      i12 = i12 + data.azucarOrganico || 0;
      j12 = j12 + data.otroAzucar || 0;
      k12 = k12 + data.azucarBlancoProducido;
      l12 = l12 + data.azucarCrudoProducido;

      dataÑuñorco = {
        E23: a12,
        F23: b12,
        G23: c12 / 1000,
        J23: z12,
        K23: e12,
        M23: f12,
        N23: dataÑuñorco.N23,
        C55: k12,
        D55: h12,
        F55: i12,
        G55: j12,
        L55: l12,
        O55: dataÑuñorco.O55,
        R55: dataÑuñorco.R55,
      };
    }

    if (
      data.ingenioNombre === "Santa Barbara" &&
      newDate <= fechaParametroStaBarbara &&
      newDate >= new Date(dataInicioIngenios.Cell24)
    ) {
      a13 = a13 + data.moliendaCanaBruta;
      b13 = b13 + data.moliendaCanaNeta;
      c13 = c13 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z13 = z13 + data.azucarBlancoProducido + data?.azucarRefinado;
      e13 = e13 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f13 = f13 + data.melazaProducida;
      h13 = h13 + data.azucarRefinado || 0;
      i13 = i13 + data.azucarOrganico || 0;
      j13 = j13 + data.otroAzucar || 0;
      k13 = k13 + data.azucarBlancoProducido;
      l13 = l13 + data.azucarCrudoProducido;

      dataStaBarbara = {
        E24: a13,
        F24: b13,
        G24: c13 / 1000,
        J24: z13,
        K24: e13,
        M24: f13,
        N24: dataStaBarbara.N24,
        C56: k13,
        D56: h13,
        F56: i13,
        G56: j13,
        L56: l13,
        O56: dataStaBarbara.O56,
        R56: dataStaBarbara.R56,
      };
    }

    if (
      data.ingenioNombre === "Santa Rosa" &&
      newDate <= fechaParametroStaRosa &&
      newDate >= new Date(dataInicioIngenios.Cell25)
    ) {
      a14 = a14 + data.moliendaCanaBruta;
      b14 = b14 + data.moliendaCanaNeta;
      c14 = c14 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z14 = z14 + data.azucarBlancoProducido + data?.azucarRefinado;
      e14 = e14 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f14 = f14 + data.melazaProducida;
      h14 = h14 + data.azucarRefinado || 0;
      i14 = i14 + data.azucarOrganico || 0;
      j14 = j14 + data.otroAzucar || 0;
      k14 = k14 + data.azucarBlancoProducido;
      l14 = l14 + data.azucarCrudoProducido;

      dataStaRosa = {
        E25: a14,
        F25: b14,
        G25: c14 / 1000,
        J25: z14,
        K25: e14,
        M25: f14,
        N25: dataStaRosa.N25,
        C57: k14,
        D57: h14,
        F57: i14,
        G57: j14,
        L57: l14,
        O57: dataStaRosa.O57,
        R57: dataStaRosa.R57,
      };
    }

    if (
      data.ingenioNombre === "San Juan" &&
      newDate <= fechaParametroSanJuan &&
      newDate >= new Date(dataInicioIngenios.Cell26)
    ) {
      a15 = a15 + data.moliendaCanaBruta;
      b15 = b15 + data.moliendaCanaNeta;
      c15 = c15 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z15 = z15 + data.azucarBlancoProducido;
      e15 = e15 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f15 = f15 + data.melazaProducida;
      h15 = h15 + data.azucarRefinado || 0;
      i15 = i15 + data.azucarOrganico || 0;
      j15 = j15 + data.otroAzucar || 0;
      k15 = k15 + data.azucarBlancoProducido;
      l15 = l15 + data.azucarCrudoProducido;

      dataSanJuan = {
        E26: a15,
        F26: b15,
        G26: c15 / 1000,
        J26: z15,
        K26: e15,
        L26: l15,
        M26: f15,
        N26: dataSanJuan.N26,
        C58: k15,
        D58: h15,
        F58: i15,
        G58: j15,
        O58: dataSanJuan.O58,
        R58: dataSanJuan.R58,
      };
    }
  });
  cmbPanel =
    dataAguilares.E10 +
    dataCruzAlta.E11 +
    dataLaFlorida.E12 +
    dataConcepcion.E14 +
    dataMarapa.E15 +
    dataBellaVista.E17 +
    dataFamailla.E18 +
    dataLaCorona.E19 +
    dataLaProvidencia.E20 +
    dataLaTrinidad.E21 +
    dataLeales.E22 +
    dataÑuñorco.E23 +
    dataStaBarbara.E24 +
    dataStaRosa.E25 +
    dataSanJuan.E26

  azucarPanelEquivalente =
    dataAguilares.G10 +
    dataCruzAlta.G11 +
    dataLaFlorida.G12 +
    dataConcepcion.G14 +
    dataMarapa.G15 +
    dataBellaVista.G17 +
    dataFamailla.G18 +
    dataLaCorona.G19 +
    dataLaProvidencia.G20 +
    dataLaTrinidad.G21 +
    dataLeales.G22 +
    dataÑuñorco.G23 +
    dataStaBarbara.G24 +
    dataStaRosa.G25 +
    dataSanJuan.G26

  azucarPanelCrudo =
    dataAguilares.L44 +
    dataCruzAlta.L47 +
    dataLaFlorida.L50 +
    dataConcepcion.L46 +
    dataMarapa.L54 +
    dataBellaVista.L45 +
    dataFamailla.L48 +
    dataLaCorona.L49 +
    dataLaProvidencia.L51 +
    dataLaTrinidad.L52 +
    dataLeales.L53 +
    dataÑuñorco.L55 +
    dataStaBarbara.L56 +
    dataStaRosa.L57 +
    dataSanJuan.L58

  azucarPanelBlancoA =
    dataAguilares.C43 +
    dataCruzAlta.C47 +
    dataLaFlorida.C50 +
    dataConcepcion.C46 +
    dataMarapa.C54 +
    dataBellaVista.C45 +
    dataFamailla.C48 +
    dataLaCorona.C49 +
    dataLaProvidencia.C51 +
    dataLaTrinidad.C52 +
    dataLeales.C53 +
    dataÑuñorco.C55 +
    dataStaBarbara.C56 +
    dataStaRosa.C57 +
    dataSanJuan.C58

  azucarPanelRefinado =
    dataAguilares.D43 +
    dataCruzAlta.D47 +
    dataLaFlorida.D50 +
    dataConcepcion.D46 +
    dataMarapa.D54 +
    dataBellaVista.D45 +
    dataFamailla.D48 +
    dataLaCorona.D49 +
    dataLaProvidencia.D51 +
    dataLaTrinidad.D52 +
    dataLeales.D53 +
    dataÑuñorco.D55 +
    dataStaBarbara.D56 +
    dataStaRosa.D57 +
    dataSanJuan.D58

  azucarPanelOtros =
    dataAguilares.G43 +
    dataCruzAlta.G47 +
    dataLaFlorida.G50 +
    dataConcepcion.G46 +
    dataMarapa.G54 +
    dataBellaVista.G45 +
    dataFamailla.G48 +
    dataLaCorona.G49 +
    dataLaProvidencia.G51 +
    dataLaTrinidad.G52 +
    dataLeales.G53 +
    dataÑuñorco.G55 +
    dataStaBarbara.G56 +
    dataStaRosa.G57 +
    dataSanJuan.G58


  azucarPanelOrganico =
    dataAguilares.F43 +
    dataCruzAlta.F47 +
    dataLaFlorida.F50 +
    dataConcepcion.F46 +
    dataMarapa.F54 +
    dataBellaVista.F45 +
    dataFamailla.F48 +
    dataLaCorona.F49 +
    dataLaProvidencia.F51 +
    dataLaTrinidad.F52 +
    dataLeales.F53 +
    dataÑuñorco.F55 +
    dataStaBarbara.F56 +
    dataStaRosa.F57 +
    dataSanJuan.F58

  azucarPanel = azucarPanelCrudo + azucarPanelBlancoA + azucarPanelRefinado + azucarPanelOrganico + azucarPanelOtros
  /** NORTE **/

  dataImportNorte?.forEach((data) => {
    const newDate = new Date(data.fechaParte)

    /** La Esperanza **/
    const ultimoRegistroLaEsperanza = new Date(dataInicioIngeniosNorte.CellE44) >= new Date(dataInicioIngeniosNorte.CellF44)
      ? new Date(dataInicioIngeniosNorte.CellE44)
      : new Date(dataInicioIngeniosNorte.CellF44)

    const fechaParametroLaEsperanza = dataInicioIngeniosNorte.CellE44
      ? (dataEnd > ultimoRegistroLaEsperanza
        ? ultimoRegistroLaEsperanza
        : new Date(dataEnd))
      : new Date(dataEnd);


    /** Ledesma **/
    const ultimoRegistroLedesma = new Date(dataInicioIngeniosNorte.CellE45) >= new Date(dataInicioIngeniosNorte.CellF45)
      ? new Date(dataInicioIngeniosNorte.CellE45)
      : new Date(dataInicioIngeniosNorte.CellF45)

    const fechaParametroLedesma = dataInicioIngeniosNorte.CellE45
      ? (dataEnd > ultimoRegistroLedesma
        ? ultimoRegistroLedesma
        : new Date(dataEnd))
      : new Date(dataEnd);

    /** Rio Grande **/
    const ultimoRegistroRiogrande = new Date(dataInicioIngeniosNorte.CellE46) >= new Date(dataInicioIngeniosNorte.CellF46)
      ? new Date(dataInicioIngeniosNorte.CellE46)
      : new Date(dataInicioIngeniosNorte.CellF46)

    const fechaParametroRioGrande = dataInicioIngeniosNorte.CellE46
      ? (dataEnd > ultimoRegistroRiogrande
        ? ultimoRegistroRiogrande
        : new Date(dataEnd))
      : new Date(dataEnd);

    /** San Isidro **/
    const ultimoRegistroSanIsidro = new Date(dataInicioIngeniosNorte.CellE47) >= new Date(dataInicioIngeniosNorte.CellF47)
      ? new Date(dataInicioIngeniosNorte.CellE47)
      : new Date(dataInicioIngeniosNorte.CellF47)

    const fechaParametroSanIsidro = dataInicioIngeniosNorte.CellE47
      ? (dataEnd > ultimoRegistroSanIsidro
        ? ultimoRegistroSanIsidro
        : new Date(dataEnd))
      : new Date(dataEnd);

    /** Seaboard **/
    const ultimoRegistroSeaboard = new Date(dataInicioIngeniosNorte.CellE48) >= new Date(dataInicioIngeniosNorte.CellF48)
      ? new Date(dataInicioIngeniosNorte.CellE48)
      : new Date(dataInicioIngeniosNorte.CellF48)

    const fechaParametroSeaboard = dataInicioIngeniosNorte.CellE48
      ? (dataEnd > ultimoRegistroSeaboard
        ? ultimoRegistroSeaboard
        : new Date(dataEnd))
      : new Date(dataEnd);

    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    if (
      data.ingenioNombre === "La Esperanza" &&
      newDate >= new Date(dataInicioIngeniosNorte.Cell44) &&
      newDate <= fechaParametroLaEsperanza
    ) {
      a16 = a16 + data.moliendaCanaBruta || 0;
      b16 = b16 + data.moliendaCanaNeta || 0;
      c16 = c16 + Number(data.azucarEquivalente || 0);
      // c16 = c16 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z16 = z16 + data.azucarBlancoProducido + data?.azucarRefinado;
      e16 = e16 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f16 = f16 + data.melazaProducida || 0;
      h16 = h16 + data.azucarRefinado || 0;
      i16 = i16 + data.azucarOrganico || 0;
      j16 = j16 + data.otroAzucar || 0;
      k16 = k16 + data.azucarBlancoProducido;
      l16 = l16 + data.azucarCrudoProducido;
      dataLaEsperanza = {
        E44: a16,
        F44: b16,
        G44: c16,
        J44: z16,
        K44: e16,
        M44: f16,
        N44: dataLaEsperanza.N44,
        O44: dataLaEsperanza.O44,
        P44: dataLaEsperanza.P44,
        V44: k16,
        W44: h16,
        X44: i16,
        Y44: j16,
        Z44: l16,
      };
    }
    if (
      data.ingenioNombre === "Ledesma" &&
      newDate >= new Date(dataInicioIngeniosNorte.Cell45) &&
      newDate <= fechaParametroLedesma
    ) {
      a17 = a17 + data.moliendaCanaBruta || 0;
      b17 = b17 + data.moliendaCanaNeta || 0;
      c17 = c17 + Number(data.azucarEquivalente || 0);
      z17 = z17 + data.azucarBlancoProducido + data?.azucarRefinado;
      e17 = e17 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f17 = f17 + data.melazaProducida || 0;
      h17 = h17 + data.azucarRefinado || 0;
      i17 = i17 + data.azucarOrganico || 0;
      j17 = j17 + data.otroAzucar || 0;
      k17 = k17 + data.azucarBlancoProducido;
      l17 = l17 + (data.azucarCrudoProducido <= 0 ? - data.azucarRefinado - data.otroAzucar : data.azucarCrudoProducido - data.azucarRefinado - data.otroAzucar);
      dataLedesma = {
        E45: a17,
        F45: b17,
        G45: c17,
        J45: z17,
        K45: e17,
        M45: f17,
        N45: dataLedesma.N45,
        O45: dataLedesma.O45,
        P45: dataLedesma.P45,
        V45: k17,
        W45: h17,
        X45: i17,
        Y45: j17,
        Z45: l17,
      };
    }
    if (
      data.ingenioNombre === "Río Grande" &&
      newDate >= new Date(dataInicioIngeniosNorte.Cell46) &&
      newDate <= fechaParametroRioGrande
    ) {
      a18 = a18 + data.moliendaCanaBruta || 0;
      b18 = b18 + data.moliendaCanaNeta || 0;
      c18 = c18 + Number(data.azucarEquivalente || 0);
      z18 = z18 + data.azucarBlancoProducido + data?.azucarRefinado;
      e18 = e18 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f18 = f18 + data.melazaProducida || 0;
      h18 = h18 + data.azucarRefinado || 0;
      i18 = i18 + data.azucarOrganico || 0;
      j18 = j18 + data.otroAzucar || 0;
      k18 = k18 + data.azucarBlancoProducido;
      l18 = l18 + data.azucarCrudoProducido;

      dataRioGrande = {
        E46: a18,
        F46: b18,
        G46: c18,
        J46: z18,
        K46: e18,
        M46: f18,
        N46: dataRioGrande.N46,
        O46: dataRioGrande.O46,
        P46: dataRioGrande.P46,
        V46: k18,
        W46: h18,
        X46: i18,
        Y46: j18,
        Z46: l18,
      };
    }
    if (
      data.ingenioNombre === "San Isidro" &&
      newDate >= new Date(dataInicioIngeniosNorte.Cell47) &&
      newDate <= fechaParametroSanIsidro
    ) {
      a19 = a19 + data.moliendaCanaBruta || 0;
      b19 = b19 + data.moliendaCanaNeta || 0;
      c19 = c19 + Number(data.azucarEquivalente || 0);
      z19 = z19 + data.azucarBlancoProducido + data?.azucarRefinado;
      e19 = e19 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f19 = f19 + data.melazaProducida || 0;
      h19 = h19 + data.azucarRefinado || 0;
      i19 = i19 + data.azucarOrganico || 0;
      j19 = j19 + data.otroAzucar || 0;
      k19 = k19 + data.azucarBlancoProducido;
      l19 = l19 + data.azucarCrudoProducido;

      dataSanIsidro = {
        E47: a19,
        F47: b19,
        G47: c19,
        J47: z19,
        K47: e19,
        M47: f19,
        N47: dataSanIsidro.N47,
        O47: dataSanIsidro.O47,
        P47: dataSanIsidro.P47,
        V47: k19,
        W47: h19,
        X47: i19,
        Y47: j19,
        Z47: l19,
      };
    }
    if (
      data.ingenioNombre === "Seaboard" &&
      newDate >= new Date(dataInicioIngeniosNorte.Cell48) &&
      newDate <= fechaParametroSeaboard
    ) {
      a20 = a20 + data.moliendaCanaBruta || 0;
      b20 = b20 + data.moliendaCanaNeta || 0;
      c20 = c20 + Number(data.azucarEquivalente || 0);
      z20 = z20 + data.azucarBlancoProducido + data?.azucarRefinado;
      e20 = e20 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f20 = f20 + data.melazaProducida || 0;
      h20 = h20 + data.azucarRefinado || 0;
      i20 = i20 + data.azucarOrganico || 0;
      j20 = j20 + data.otroAzucar || 0;
      k20 = k20 + data.azucarBlancoProducido;
      l20 = l20 + data.azucarCrudoProducido;

      dataSeaboard = {
        E48: a20,
        F48: b20,
        G48: c20,
        J48: z20,
        K48: e20,
        M48: f20,
        N48: dataSeaboard.N48,
        O48: dataSeaboard.O48,
        P48: dataSeaboard.P48,
        V48: k20,
        W48: h20,
        X48: i20,
        Y48: j20,
        Z48: l20,
      };
    }
  })

  setPanelAlcohol(alcoholPanel);
  setPanelAlcoholAnhidro(alcoholAnhidroPanel);
  setPanelCMB(cmbPanel);
  setPanelAzucar(azucarPanel);
  setPanelAzucarEquivalente(azucarPanelEquivalente);
  setPanelAzucarCrudo(azucarPanelCrudo);
  setPanelAzucarBlancoA(azucarPanelBlancoA);
  setPanelAzucarRefinado(azucarPanelRefinado);
  setPanelAzucarOrganico(azucarPanelOrganico);
  setPanelAzucarOtros(azucarPanelOtros);

  /*********************************************************************************/
  /*** ALCOHOL ANHIDRO QUE QUEDO DEFASADO ENTRE EL 5/05/2024 y 15/05/2024
   * QUE PERTENECE A LA ZAFRA 2023 ***/
  // if (zafraParteDiario === 2024) {
  //   dataLaFlorida.R50 = dataLaFlorida.R50 - 2526587;
  // }
  // if (zafraParteDiario === 2023) {
  //   dataLaFlorida.R50 = dataLaFlorida.R50 + 2526587;
  // }
  // /****************/


  /****************************** ANHIDRO 2025 ******************************/
  /****** CONCEPCION *****/
  /*EMPEZO A DECLARAR EN EL PARTE DIARIO
  *
  *
  * Mayo: 1.775.189
  
  ACUMULADO: 1.775.189
  */
  //  if ( zafraParteDiario === 2025) {
  //   dataConcepcion.R46 = dataConcepcion.R46 + 1775189
  //  }
  /**************************************************************************/

  /****************************** ANHIDRO 2024 ******************************/
  /*** ALCOHOL ANHIDRO ZAFRA 2024 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/

  /*LEALES
  Junio: 2.194.476
  Julio: 2.052.522
  Agosto: 4.971.944
  Septiembre: 2.963.470
  Octubre: 1.460.000
  Noviembre: 5.347.000
  Diciembre: 235.750
  Enero: 4.770.000
  Febrero: 3.412.785
  Acumulado: 27.407.947
  */
  // if (zafraParteDiario === 2024) {
  //   // dataLeales.R53 = dataLeales.R53 + 2194476 + 2052522 + 4133790 + 4971944 + 2963470 + 1460000 + 5347000 + 235750 + 4770000 + 3412785;
  //   // dataLeales.R53 = dataLeales.R53 + 31541737
  // }

  /* CONCEPCION 
  Junio:2.986.603
  Julio: 8.049.602
  Agosto: 6.083.561
  Septiembre: 6.163.307
  Octubre: 5.436.241
  Noviembre:5.290.243
  Diciembre: 5.819.557
  Enero 2025: 6.522.224
  Febrero: 5.677.674
  Marzo: 5.928.463
  abril: 5.551.377
  Acumulado: 63.508.852
  */
  // if (zafraParteDiario === 2024) {
  //   // dataConcepcion.R46 = dataConcepcion.R46 + 2986603;
  //   dataConcepcion.R46 = dataConcepcion.R46 + 63509259;
  // }

  /* BELLA VISTA 
  Junio: 880.968
  Julio: 2.099.136
  Agosto:3.135.585
  Septiembre: 253.748
  Octubre: 2.483.843
  Noviembre: 1.098.950
  Diciembre: 2.031.615
  Enero:
  Febrero: 2.269.182
  Marzo: 543.734 
  Acumulado: 14.796.761
  */
  // if (zafraParteDiario === 2024) {
  //   // dataBellaVista.R45 = dataBellaVista.R45 + 880968 + 2099136 + 3135585 + 253748 + 2483843 + 1098950 + 2031615 + 2269182 + 543734;
  //   dataBellaVista.R45 = dataBellaVista.R45 + 14796761
  // }
  /************************************************************************/

  /*** ALCOHOL ANHIDRO ZAFRA 2023 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/
  // if (zafraParteDiario === 2023) {
  //   dataBellaVista.R45 = dataBellaVista.R45 + 9669715;
  // }
  // if (zafraParteDiario === 2023) {
  //   dataConcepcion.R46 = dataConcepcion.R46 + 35668460;
  // }
  // if (zafraParteDiario === 2023) {
  //   dataLeales.R53 = dataLeales.R53 + 26464761;
  // }
  /**********/

  setD1(dataAguilares);
  setD2(dataCruzAlta);
  setD3(dataLaFlorida);
  setD4(dataConcepcion);
  setD5(dataMarapa);
  setD6(dataBellaVista);
  setD7(dataFamailla);
  setD8(dataLaCorona);
  setD9(dataLaProvidencia);
  setD10(dataLaTrinidad);
  setD11(dataLeales);
  setD12(dataÑuñorco);
  setD13(dataStaBarbara);
  setD14(dataStaRosa);
  setD15(dataSanJuan);
  setDataDestBellaVista(dataDestBellaVista);
  setN1(dataLaEsperanza);
  setN2(dataLedesma);
  setN3(dataRioGrande);
  setN4(dataSanIsidro);
  setN5(dataSeaboard);
};

// /***************** MEJORAS REGISTROS GLOBALES *********************/
// SELECT Ingenio, Fecha, Origen, Valor
// FROM (
//     SELECT [Ingenio], [Fecha], 'MOL CB Z15' AS Origen, [Mol CB Z15] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z16' AS Origen, [Mol CB Z16] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z17' AS Origen, [Mol CB Z17] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z18' AS Origen, [Mol CB Z18] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z19' AS Origen, [Mol CB Z19] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z20' AS Origen, [Mol CB Z20] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z21' AS Origen, [Mol CB Z21] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z22' AS Origen, [Mol CB Z22] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z23' AS Origen, [Mol CB Z23] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z24' AS Origen, [Mol CB Z24] AS Valor FROM [DB original]
// ) AS Datos
// WHERE Valor IS NOT NULL
// ORDER BY Valor DESC;


// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z15' AS Origen, [DB original].[Mol CB Z15] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z16' AS Origen, [DB original].[Mol CB Z16] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z17' AS Origen, [DB original].[Mol CB Z17] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z18' AS Origen, [DB original].[Mol CB Z18] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z19' AS Origen, [DB original].[Mol CB Z19] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z20' AS Origen, [DB original].[Mol CB Z20] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z21' AS Origen, [DB original].[Mol CB Z21] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z22' AS Origen, [DB original].[Mol CB Z22] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z23' AS Origen, [DB original].[Mol CB Z23] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z24' AS Origen, [DB original].[Mol CB Z24] AS Valor FROM [DB original]
// order by Valor desc;




// /********************* 10 mejores registros por CMB ingresando nombre ingenio *****************************/
// SELECT top 10 Ingenio, Fecha, Zafra, CMB, [Az Equivalente]
// FROM (
//     SELECT [Ingenio], [Fecha], 'Zafra 15' AS Zafra, [Mol CB Z15] AS CMB, [Az Eq Z15] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 16' AS Zafra, [Mol CB Z16] AS CMB, [Az Eq Z16] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 17' AS Zafra, [Mol CB Z17] AS CMB, [Az Eq Z17] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 18' AS Zafra, [Mol CB Z18] AS CMB, [Az Eq Z18] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 19' AS Zafra, [Mol CB Z19] AS CMB, [Az Eq Z19] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 20' AS Zafra, [Mol CB Z20] AS CMB, [Az Eq Z20] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 21' AS Zafra, [Mol CB Z21] AS CMB, [Az Eq Z21] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 22' AS Zafra, [Mol CB Z22] AS CMB, [Az Eq Z22] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 23' AS Zafra, [Mol CB Z23] AS CMB, [Az Eq Z23] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 24' AS Zafra, [Mol CB Z24] AS CMB, [Az Eq Z24] AS [Az Equivalente] FROM [DB original]
// ) AS Datos
// WHERE CMB IS NOT NULL and Ingenio = nombreIngenio
// ORDER BY CMB DESC;



// /******************* ZAFRA HISTORICOS ****************************/
// SELECT TOP 10 * FROM (
//   SELECT  'Zafra 15' AS Origen, [DB original].[Mol CB Z15] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 16' AS Origen, [DB original].[Mol CB Z16] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 17' AS Origen, [DB original].[Mol CB Z17] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 18' AS Origen, [DB original].[Mol CB Z18] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 19' AS Origen, [DB original].[Mol CB Z19] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 20' AS Origen, [DB original].[Mol CB Z20] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 21' AS Origen, [DB original].[Mol CB Z21] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 22' AS Origen, [DB original].[Mol CB Z22] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 23' AS Origen, [DB original].[Mol CB Z23] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 24' AS Origen, [DB original].[Mol CB Z24] AS CMB FROM [DB original]
// ) AS Datos
// WHERE CMB IS NOT NULL AND CMB > 0
// ORDER BY Origen DESC;


// SELECT TOP 10  Zafra, CMB
// FROM (
//     SELECT 'Zafra 2015' AS Zafra, [Mol CB Z15] AS CMB FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2016', [Mol CB Z16] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2017', [Mol CB Z17] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2018', [Mol CB Z18] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2019', [Mol CB Z19] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2020', [Mol CB Z20] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2021', [Mol CB Z21] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2022', [Mol CB Z22] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2023', [Mol CB Z23] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2024', [Mol CB Z24] FROM [DB original]
// ) AS Datos
// WHERE CMB IS NOT NULL
// ORDER BY CMB DESC;