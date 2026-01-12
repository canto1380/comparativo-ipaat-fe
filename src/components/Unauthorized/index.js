import React, { useEffect, useState, useContext } from 'react'
import { Modal } from 'antd'
import { redirectBase } from '../../helpers/redirect'
import { User } from '../../context/UserProvider'

const Unauthorized = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { logout } = useContext(User)
  
  const redirectLogin = async () => {
    redirectBase('login')
  }
  
  useEffect(() => {
    setIsModalOpen(true)
    logout()
  }, [logout])
  return (
    <div>
      <>
        <Modal
          title='Sesion Expirada'
          open={isModalOpen}
          closable={false}
          centered={true}
          cancelButtonProps={{ disabled: true }}
          okText='Redirigir ahora'
          onOk={redirectLogin}
        >
          <p>Su sesión ha expirado. Redirigiendo..</p>
        </Modal>
      </>
    </div>
  )
}

export default Unauthorized
