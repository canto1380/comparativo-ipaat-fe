import React, { createContext, useEffect, useReducer } from 'react'
import { getTokenLS, getDataToken, getRefreshToken, setToken, setDataToken, setRefreshToken, deleteToken, deleteCookies } from '../helpers/helpers'
export const User = createContext()

// Inicializar el estado desde localStorage
const tokenLS = getTokenLS()
const userDataLS = getDataToken()

const initialState = {
  token: tokenLS || null,
  user: userDataLS || null,
  refreshToken: getRefreshToken() || null,
  userToken: tokenLS || '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN': {
      const { token, user, refreshToken } = action.payload
      setToken(token)
      if (user) setDataToken(user)
      if (refreshToken) setRefreshToken(refreshToken)
      return {
        ...state,
        token,
        user: user || state.user,
        refreshToken: refreshToken || state.refreshToken,
        userToken: token,
      }
    }
    case 'LOGOUT': {
      // Limpiar localStorage
      deleteToken()
      deleteCookies()
      return {
        token: null,
        user: null,
        userToken: '',
      }
    }
    default:
      return state
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const onSession = (event) => {
      const { token, refreshToken, user } = event.detail || {}
      if (!token) return
      dispatch({ type: 'LOGIN', payload: { token, refreshToken, user } })
    }
    window.addEventListener('ipaat-session', onSession)
    return () => window.removeEventListener('ipaat-session', onSession)
  }, [])
  
  // Funciones helper para login y logout
  const login = (token, user, refreshToken) => {
    dispatch({ type: 'LOGIN', payload: { token, user, refreshToken } })
  }
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }
  
  const value = { 
    state, 
    dispatch, 
    login,
    logout,
    // Mantener compatibilidad con código existente
    dataUser: state.user,
  }
  
  return <User.Provider value={value}>{children}</User.Provider>
}

export default UserProvider
