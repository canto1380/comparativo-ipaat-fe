import { api } from '../api.js'

export const COOKIES = {
  authToken: 'token'
}

const login = async (userLogin) => {
  try {
    const res = await api('POST', 'signin', userLogin)

    return res

  } catch (error) {
    console.error('🚀 ~ file: login.js ~ line 15 ~ error', error)
    return error
  }
}

export default login
