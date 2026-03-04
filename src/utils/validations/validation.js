import {emailER, claveER} from '../RegularExpression'

export const validaEmail = (email) => {
  if(email.trim() !== '' && emailER.test(email)) return true
    return false
}

export const validaClave = (clave) => {
  if(clave.trim() !== '' && claveER.test(clave)) return true
    return false
}