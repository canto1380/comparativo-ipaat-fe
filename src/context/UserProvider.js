import React, { createContext, useReducer } from 'react'
import { getTokenLS, getDataToken, setToken, setDataToken, deleteToken, deleteCookies } from '../helpers/helpers'
export const User = createContext()

// Inicializar el estado desde localStorage
const tokenLS = getTokenLS()
const userDataLS = getDataToken()

const initialState = {
  token: tokenLS || null,
  user: userDataLS || null,
  // Mantener compatibilidad con código existente que verifica userToken
  userToken: tokenLS || '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN': {
      const { token, user } = action.payload
      // Guardar en localStorage
      setToken(token)
      setDataToken(user)
      return {
        ...state,
        token,
        user,
        userToken: token, // Mantener compatibilidad
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
  
  // Funciones helper para login y logout
  const login = (token, user) => {
    dispatch({ type: 'LOGIN', payload: { token, user } })
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
