import { api } from '../api.js'

export const COOKIES = {
  authToken: 'token'
}

const login = async (userLogin) => {
  try {
    console.log('userLogin: ', userLogin)
    const res = await api('POST', 'signin', userLogin)

    return res

  } catch (error) {
    console.log('🚀 ~ file: login.js ~ line 15 ~ error', error)
  }
}

export default login
