import Cookies from 'js-cookie'
// import serverCookies from 'cookies'
import moment from 'moment'

export const setDataToken = (data) => {
  return localStorage.setItem('data-security-ipaat-2.0', JSON.stringify(data))
}
export const getDataToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('data-security-ipaat-2.0'))
  }
}
export const setToken = (token) => {
  return localStorage.setItem('jwt-security-ipaat-2.0', JSON.stringify(token))
}
export const getTokenLS = () => {
  let tok = localStorage.getItem('jwt-security-ipaat-2.0')
  if (tok !== null) {
    tok = tok.replace(/['"]+/g, '')
    return tok
  }
}

export const getToken = (ctx) => {
  let token
  token = Cookies.get('token-ipaat-v2')
  return token || undefined
}

export const deleteToken = () => {
  localStorage.removeItem('data-security-ipaat-2.0')
  return localStorage.removeItem('jwt-security-ipaat-2.0')
}

export const deleteCookies = () => {
  Cookies.remove('token-ipaat-v2')
  Cookies.remove('idUser')
}

export const setStateSidebar = (state) => {
  return localStorage.setItem('state-menu', state)
}
export const getStateSidebar = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('state-menu'))
  }
}

/**
 * CONVIERTE FECHA DE FORMATO DD/MM/YYYY DE LOS PARTE DIARIOS
 * EN  (OBJECT):  Sat Sep 16 2023 00:00:00 GMT-0300 (hora estándar de Argentina)
 * **/
export const dateConverted = (date) => {
  if (!date) return
  const fechaAConvertir = date
  const fechaDividida = fechaAConvertir.split('/')
  const fechaNueva = new Date(
    +fechaDividida[2],
    fechaDividida[1] - 1,
    fechaDividida[0]
  )
  const fechaFormato = moment(fechaNueva).format('MM/DD/YYYY')
  const newDate = new Date(fechaFormato)
  return newDate
}
/**
 * CONVIERTE MES Y QUINCENA A FECHA REAL
 * RECIBE {year: 2025, month: 5, quincena: 1} → {from: Date, to: Date}
 * quincena 1: del día 1 al 15
 * quincena 2: del día 16 al último día del mes
 */
export const getDateFromQuincena = ({ year, month, quincena }) => {
  if (!month || !quincena || !year) return null;

  const startDay = quincena === 1 ? 1 : 16;
  const endDay =
    quincena === 1
      ? 15
      : new Date(year, month, 0).getDate(); // último día del mes

  return {
    from: new Date(year, month - 1, startDay, 0, 0, 0, 0),
    to: new Date(year, month - 1, endDay, 23, 59, 59, 999)
  };
};

export const parseQuincenaLabel = (label) => {
  if (!label) return null

  // "2° quincena Julio"
  const regex = /(\d)° quincena (\w+)/i
  const match = label.match(regex)

  if (!match) return null

  const quincena = Number(match[1])
  const mesTexto = match[2].toLowerCase()

  const meses = {
    enero: 1,
    febrero: 2,
    marzo: 3,
    abril: 4,
    mayo: 5,
    junio: 6,
    julio: 7,
    agosto: 8,
    septiembre: 9,
    octubre: 10,
    noviembre: 11,
    diciembre: 12
  }

  return {
    month: meses[mesTexto],
    quincena
  }
}


/**
 * RECIBE UN REGISTRO E ITEM SELECCIONADO
 * VALIDA QUE EL ITEM SELECCIONADO SEA UNA FILA DEL REGISTRO
 * 
 * 
 **/
export const tieneItemSeleccionado = (registro, itemsSeleccionados) => {
  return itemsSeleccionados.some(item => {
    const valor = registro[item]

    if (valor === null || valor === undefined) return false

    // strings numéricos tipo "0.000"
    if (typeof valor === 'string') {
      return Number(valor) !== 0
    }

    // números
    if (typeof valor === 'number') {
      return valor !== 0
    }

    return false
  })
}

/**
 * RECIBE UNA FECHA
 * DEVUELVE PERIODO 1` DE OCTUBRE
 * 
 **/
export const getPeriodoQuincenal = (fecha) => {
  if (!fecha) return "-";

  const m = moment(fecha);
  const dia = m.date();
  const quincena = dia < 16 ? "1°" : "2°";
  const mes = m.format("MMMM");
  const anio = m.format("YYYY")

  return `${quincena} de ${mes} de ${anio}`;
};


/**
 * FUNCION QUE RECIBE UNA FECHA 
 * DEVUELVE UNA QUINCENA DE LA FECHA RECIBIDA, SIN CONTEMPLAR EL ANIO
 * 
 * "2023-01-16T03:00:00.000Z" >>>>>>>>>>>>>>>>>>>>> {month: 1, quincena: 2}
 * 
 **/
export const getMesYQuincena = (date) => {
  const d = new Date(date)
  const month = d.getMonth() + 1 // 1–12
  const day = d.getDate()
  const quincena = day <= 15 ? 1 : 2

  return { month, quincena }
}


/**
 * FUNCION QUE CONVIERTE UN NUMERO EN FORMATO ESPANOL
 * 
 **/
export const formatValue = (value) => {
  if (value === null || value === undefined) return "–"
  if (typeof value !== "number") return value
  return value.toLocaleString("es-ES", {
    maximumFractionDigits: 2
  })
}

export const diasEntreFechas = (fecha1, fecha2) => {
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.floor(
    ((new Date(fecha2) - new Date(fecha1)) / msPorDia) + 1
  );
}