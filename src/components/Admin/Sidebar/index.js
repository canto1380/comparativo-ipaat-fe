import React, { useState, useEffect, useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsNewspaper,
  BsClipboardData
} from 'react-icons/bs'
import { FaChartBar } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BiUserCircle, BiLogOut } from 'react-icons/bi'
import { RiDatabaseLine, RiOpenaiFill } from "react-icons/ri"
import { TbBrandDjango } from "react-icons/tb";

import './Sidebar.css'
import {
  getDataToken,
} from '../../../helpers/helpers'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContext } from '../../../context/SidebarProvider';
import { User } from '../../../context/UserProvider';

const Sidebar = ({ inactivo, tokenAuth, dataUser }) => {
  const [initial, setInitial] = useState('')
  const [initialSurname, setInitialSurname] = useState('')
  const [nick, setNick] = useState('')

  const { changeStatus } = useContext(SidebarContext)
  const { logout } = useContext(User)
  const location = useLocation()

  const changeOnSubmit = (e) => {
    changeStatus(e)
  }

  useEffect(() => {
    const data = getDataToken()
    console.log('data: ', data)
    const a = data?.nombre?.toUpperCase()
    const b = data?.apellido?.toUpperCase()
    setInitial(a?.substr(0, 1))
    setInitialSurname(b?.substr(0, 1))
    setNick(data?.nombre)
  }, [dataUser])

  console.log('dataUser: ', dataUser)
  const cerrarSesion = async (e) => {
    logout()
    window.location.href = '/admin/login'
  }

  const itemsSideBar = [
    {
      title: 'parte-diario',
      iconName: <BsNewspaper className='sizeIcon' />,
      name: 'Parte diario',
    },
    {
      title: 'ddjj',
      iconName: <TbBrandDjango className='sizeIcon' />,
      name: 'Declaraciones juradas',
    },
    {
      title: 'datos-comparativos',
      iconName: <RiDatabaseLine className='sizeIcon' />,
      name: 'Datos comparativos',
    },
    {
      title: 'periodos-zafra',
      iconName: <BsClipboardData className='sizeIcon' />,
      name: 'Periodos Ingenios',
    },
    {
      title: 'dias-parada',
      iconName: <FaRegCalendarDays className='sizeIcon' />,
      name: 'Días Parada',
    },
    // {
    //   title: 'reportes',
    //   iconName: <BsClipboardData className='sizeIcon' />,
    //   name: 'Reportes',
    // },
    {
      title: 'graficos',
      iconName: <FaChartBar className='sizeIcon' />,
      name: 'Gráficos',
    },
    {
      title: 'IA',
      iconName: <RiOpenaiFill className='sizeIcon' />,
      name: 'IA',
    },
    {
      title: 'perfil',
      iconName: <BiUserCircle className='sizeIcon' />,
      name: 'Cuenta',
    },
  ]

  return (
    <div
      className={`${inactivo
        ? `sidebarInactivo text-light bg-dark h-100`
        : `sidebar text-light bg-dark h-100`
        }`}
    >
      <Row
        className='pt-4 pb-2 d-flex justify-content-center align-items-center m-0'
      >
        <Col
          xs={3}
          className={` ${inactivo
            ? `justify-content-center px-0 imgContainer`
            : `text-center px-0`
            }`}
        >
          <div className={`imgProfile text-center`}>
            {initial}
            {initialSurname}
          </div>
        </Col>
        <Col xs={6} className='px-1'>
          <p className={`${inactivo ? `inactivo` : 'mb-0'}`}>
            {nick}
          </p>
        </Col>

        {inactivo ? (
          <Col
            xs={12}
            className={`text-light mt-3 text-center px-0`}
            onClick={() => changeOnSubmit(!inactivo)}
          >
            {
              <BsFillCaretRightFill
                title='Desplegar'
                className={`sizeIcon cursorPointer`}
              />
            }
          </Col>
        ) : (
          <Col
            xs={2}
            className={`p-0 text-light`}
            onClick={() => changeOnSubmit(!inactivo)}
          >
            {
              <BsFillCaretLeftFill
                title='Minimizar'
                className='sizeIcon cursorPointer'
              />
            }
          </Col>
        )}
      </Row>
      <hr />
      <ul
        className={`text-decoration-none list-unstyled sidebarList`}
      >
        {itemsSideBar.map((items, i) => {
          const isActive = location.pathname.includes(items.title)
          return (
            <Link
              key={i}
              className='text-white text-decoration-none'
              to={`/admin/${items.title}`}
            >
              <li
                title={items.title}
                className={`
                  sidebarListRow 
                  ${isActive ? 'rowActive' : ''} 
                  ${inactivo
                    ? 'd-flex justify-content-center align-items-center'
                    : 'd-flex justify-content-start px-3 align-items-center'
                  }
                `}
              >
                <div className=''>{items.iconName}</div>
                <div className={` ${inactivo ? `inactivo` : 'ms-3'}`}>
                  {items.name}
                </div>
              </li>
            </Link>
          )
        })}



        <li
          onClick={() => cerrarSesion()}
          title='Salir'
          className={`${inactivo
            ? `sidebarListRow d-flex justify-content-center align-items-center`
            : `sidebarListRow d-flex justify-content-start px-3 align-items-center`
            }`}
        >
          <div className=''>
            <BiLogOut className={`sizeIcon`} />
          </div>
          <div className={` ${inactivo ? `inactivo` : 'ms-3'}`}>
            Salir
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
