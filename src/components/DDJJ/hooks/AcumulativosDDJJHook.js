import { listadoIngenios } from "../../../utils/data/ListadoIngenios"

const items = [
  "cmb",
  "azCrudo",
  "azBlanco",
  "azRefinado",
  "azOrganico",
  "azFisico",
  "azEquivalente",
  "rtoAzEquivalente",
  "alcoholElaborado",
  "melaza",
  "alcoholEtilicoAnhidroBiocombustible"
]

export const datosAcumuladosDDJJHook = (
  ddjjInformacionFilter,
  periodosZafra = []
) => {

  const diccionarioDeItem = {
    cmb: "canaBrutaMolidaTotal",
    azCrudo: "azucarCrudoProducido",
    azBlanco: "azucarBlancoProducido",
    azRefinado: "azucarRefinado",
    azOrganico: "azucarOrganico",
    azFisico: "azucarFisicoTotal",
    azEquivalente: "azucarEquivalenteDj",
    alcoholElaborado: "alcoholTotalProducido",
    melaza: "melazaProducidoTotal",
    alcoholEtilicoAnhidroBiocombustible: 'alcoholEtilicoAnhidroBiocombustible'
  }

  function normalizar(nombre) {
    return nombre.replace(/\s+/g, '').toLowerCase()
  }

  function generarKeyPeriodo(nombreIngenio, anioZafra) {
    return `${normalizar(nombreIngenio)}-${anioZafra}`
  }

  function esDjPosteriorInicioAnhidro(dj, periodosPorIngenio) {
    // console.log(dj, periodosPorIngenio)
    const periodo = periodosPorIngenio[generarKeyPeriodo(dj.ingenioNombre, dj.anioZafra)]
      || periodosPorIngenio[normalizar(dj.ingenioNombre)]

    if (!periodo?.inicio_anhidro || !dj?.fechaHasta) return false

    const fechaHasta = new Date(dj.fechaHasta)
    const inicioAnhidro = new Date(periodo.inicio_anhidro)

    if (Number.isNaN(fechaHasta.getTime()) || Number.isNaN(inicioAnhidro.getTime())) return false

    return fechaHasta >= inicioAnhidro
  }

  function generarObjetoIngenio(nombreIngenio) {
    const obj = {}
    for (let item of items) {
      obj[`${nombreIngenio}${item}`] = 0
    }
    return obj
  }

  let data = {}
  let dataEnd = {}
  for (let ing of listadoIngenios) {
    data[ing] = generarObjetoIngenio(ing)
  }

  const periodosPorIngenio = periodosZafra?.reduce((acc, periodo) => {
    if (!periodo?.nombre_ingenio) return acc

    acc[normalizar(periodo.nombre_ingenio)] = periodo

    if (periodo.anio_zafra) {
      acc[generarKeyPeriodo(periodo.nombre_ingenio, periodo.anio_zafra)] = periodo
    }

    return acc
  }, {}) || {}

  let {
    aguilares,
    bellavista,
    concepción,
    cruzalta,
    destileríabellavista,
    famaillá,
    lacorona,
    laflorida,
    laprovidencia,
    latrinidad,
    leales,
    marapa,
    ñuñorco,
    santabarbara,
    santarosa,
    laesperanza,
    ledesma,
    ríogrande,
    sanisidro,
    seaboard
  } = data

  const totales = {}
  items.forEach(item => {
    totales[item] = 0
  })

  ddjjInformacionFilter?.forEach((d, i) => {
    const ing = normalizar(d.ingenioNombre)
    // Si el ingenio no existe en tu data, lo ignoramos
    if (!data[ing]) return
    // Para cada item definido dinámicamente
    for (const item of items) {
      if (item === "alcoholEtilicoAnhidroBiocombustible" && !esDjPosteriorInicioAnhidro(d, periodosPorIngenio)) {
        continue
      }

      const campoOrigen = diccionarioDeItem[item]  // ej: azCrudo → azucarCrudoProducido
      const valor = Number(d[campoOrigen]) || 0
      data[ing][`${ing}${item}`] += valor

      totales[item] += Number(d[campoOrigen]) || 0
    }
  })

  /** CALCULO RENDIMIENTOS **/
  aguilares.aguilaresrtoAzEquivalente =  Math.round((Number(aguilares?.aguilaresazEquivalente) / aguilares?.aguilarescmb) * 100 * 100) / 100
  bellavista.bellavistartoAzEquivalente =  Math.round((Number(bellavista?.bellavistaazEquivalente) / bellavista?.bellavistacmb) * 100 * 100) / 100
  concepción.concepciónrtoAzEquivalente =  Math.round((Number(concepción?.concepciónazEquivalente) / concepción?.concepcióncmb) * 100 * 100) / 100
  cruzalta.cruzaltartoAzEquivalente =  Math.round((Number(cruzalta?.cruzaltaazEquivalente) / cruzalta?.cruzaltacmb) * 100 * 100) / 100
  destileríabellavista.destileríabellavistartoAzEquivalente =  Math.round((Number(destileríabellavista?.destileríabellavistaazEquivalente) / destileríabellavista?.destileríabellavistacmb) * 100 * 100) / 100
  famaillá.famaillártoAzEquivalente =  Math.round((Number(famaillá?.famailláazEquivalente) / famaillá?.famaillácmb) * 100 * 100) / 100
  lacorona.lacoronartoAzEquivalente =  Math.round((Number(lacorona?.lacoronaazEquivalente) / lacorona?.lacoronacmb) * 100 * 100) / 100
  laflorida.lafloridartoAzEquivalente =  Math.round((Number(laflorida?.lafloridaazEquivalente) / laflorida?.lafloridacmb) * 100 * 100) / 100
  laprovidencia.laprovidenciartoAzEquivalente =  Math.round((Number(laprovidencia?.laprovidenciaazEquivalente) / laprovidencia?.laprovidenciacmb) * 100 * 100) / 100
  latrinidad.latrinidadrtoAzEquivalente =  Math.round((Number(latrinidad?.latrinidadazEquivalente) / latrinidad?.latrinidadcmb) * 100 * 100) / 100
  leales.lealesrtoAzEquivalente =  Math.round((Number(leales?.lealesazEquivalente) / leales?.lealescmb) * 100 * 100) / 100
  marapa.marapartoAzEquivalente =  Math.round((Number(marapa?.marapaazEquivalente) / marapa?.marapacmb) * 100 * 100) / 100
  ñuñorco.ñuñorcortoAzEquivalente =  Math.round((Number(ñuñorco?.ñuñorcoazEquivalente) / ñuñorco?.ñuñorcocmb) * 100 * 100) / 100
  santabarbara.santabarbarartoAzEquivalente =  Math.round((Number(santabarbara?.santabarbaraazEquivalente) / santabarbara?.santabarbaracmb) * 100 * 100) / 100
  santarosa.santarosartoAzEquivalente =  Math.round((Number(santarosa?.santarosaazEquivalente) / santarosa?.santarosacmb) * 100 * 100) / 100
  laesperanza.laesperanzartoAzEquivalente =  Math.round((Number(laesperanza?.laesperanzaazEquivalente) / laesperanza?.laesperanzacmb) * 100 * 100) / 100
  ledesma.ledesmartoAzEquivalente =  Math.round((Number(ledesma?.ledesmaazEquivalente) / ledesma?.ledesmacmb) * 100 * 100) / 100
  ríogrande.ríograndertoAzEquivalente =  Math.round((Number(ríogrande?.ríograndeazEquivalente) / ríogrande?.ríograndecmb) * 100 * 100) / 100
  sanisidro.sanisidrortoAzEquivalente =  Math.round((Number(sanisidro?.sanisidroazEquivalente) / sanisidro?.sanisidrocmb) * 100 * 100) / 100
  seaboard.seaboardrtoAzEquivalente =  Math.round((Number(seaboard?.seaboardazEquivalente) / seaboard?.seaboardcmb) * 100 * 100) / 100
  


  return {
    aguilares,
    bellavista,
    concepción,
    cruzalta,
    destileríabellavista,
    famaillá,
    lacorona,
    laflorida,
    laprovidencia,
    latrinidad,
    leales,
    marapa,
    ñuñorco,
    santabarbara,
    santarosa,
    laesperanza,
    ledesma,
    ríogrande,
    sanisidro,
    seaboard, 
    totales
  }
}
