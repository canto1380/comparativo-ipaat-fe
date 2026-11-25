import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Perfil from '../container/Perfil/index'
import ContainerIndexParteDiario from '../container/ParteDiario'
import DataComparativa from '../container/DataComparativa'
import NewData from '../container/DataComparativa/NewData'
import PeriodosZafra from '../container/PeriodosZafra'
import AddEditPeriodoContainer from '../container/PeriodosZafra/AddEditPeriodo'
import ReportesContainer from '../container/Reportes'
import DiasParada from '../container/DiasParda'
import AddEditDiasParada from '../container/DiasParda/AddEditDiasParada'
import GraficasContainer from '../container/GraficasYReportes'
import IAContainer from '../container/IA'
import DDJJIndex from '../container/DDJJ'
import Usuarios from '../container/Usuarios'
import Roles from '../container/Roles'
import Permisos from '../container/Permisos'
import Home from '../container/Home'
import { User } from '../context/UserProvider'
import { primeraRutaPermitida, tienePermiso } from '../utils/permisos'

const PrivateRoutes = () => {
  const { dataUser } = useContext(User)
  const inicio = primeraRutaPermitida(dataUser)
  const rutas = [
    { path: '/admin/home', element: <Home />, permiso: null },
    { path: '/admin/perfil', element: <Perfil />, permiso: null },
    { path: '/admin/parte-diario', element: <ContainerIndexParteDiario />, permiso: 'parte_diario.ver' },
    { path: '/admin/ddjj', element: <DDJJIndex />, permiso: 'ddjj.ver' },
    { path: '/admin/datos-comparativos', element: <DataComparativa />, permiso: 'datos_comparativos.ver' },
    { path: '/admin/datos-comparativos/nuevo', element: <NewData />, permiso: 'datos_comparativos.editar' },
    { path: '/admin/datos-comparativos/editar/:anio/:region', element: <NewData />, permiso: 'datos_comparativos.editar' },
    { path: '/admin/periodos-zafra', element: <PeriodosZafra />, permiso: 'periodos.ver' },
    { path: '/admin/periodos-zafra/nuevo', element: <AddEditPeriodoContainer />, permiso: 'periodos.editar' },
    { path: '/admin/periodos-zafra/editar/:id', element: <AddEditPeriodoContainer />, permiso: 'periodos.editar' },
    { path: '/admin/reportes', element: <ReportesContainer />, permiso: 'reportes.ver' },
    { path: '/admin/dias-parada', element: <DiasParada />, permiso: 'dias_parada.ver' },
    { path: '/admin/dias-parada/nuevo', element: <AddEditDiasParada />, permiso: 'dias_parada.editar' },
    { path: '/admin/dias-parada/editar/:id', element: <AddEditDiasParada />, permiso: 'dias_parada.editar' },
    { path: '/admin/graficos', element: <GraficasContainer />, permiso: 'graficas.ver' },
    { path: '/admin/IA', element: <IAContainer />, permiso: 'ia.usar' },
    { path: '/admin/usuarios', element: <Usuarios />, permiso: 'admin.usuarios' },
    { path: '/admin/roles', element: <Roles />, permiso: 'admin.roles' },
    { path: '/admin/permisos', element: <Permisos />, permiso: 'admin.permisos' },
  ]

  return (
    <Routes>
      {(window?.location?.pathname === "/" || window?.location?.pathname === "/login") ? (
        <Route path="*" element={<Navigate to={inicio} replace />} />
      ) : null}
      {rutas.map((ruta) => (
        <Route
          key={ruta.path}
          path={ruta.path}
          element={ruta.permiso && !tienePermiso(dataUser, ruta.permiso)
            ? <Navigate to={inicio} replace />
            : ruta.element}
        />
      ))}
      <Route path='*' element={<Navigate to={inicio} replace />} />
    </Routes>
  )
}

export default PrivateRoutes
