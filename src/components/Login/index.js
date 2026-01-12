import React, { useState, useContext } from "react";
import { Button, Form, Input, Card, Alert } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { validaEmail, validaClave } from "../../utils/validations/validation";
import Cookies from "js-cookie";
import "./Login.css";
import { redirectBase } from "../../helpers/redirect";
import loginAPI from "../../utils/authentication/login.js";
import { User } from "../../context/UserProvider";

import IpaatLogo from '../../images/IPAAT-logos-horizontal.png';
import MinEconProdLogo from '../../images/MinEconomia-color.png'

export const COOKIES = {
  authToken: "token-ipaat-v2",
  authId: "idUser",
};

const Login = ({ banderaLogin, setBanderaLogin }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login: loginContext } = useContext(User);

  const onFinish = async (values) => {
    setLoading(true);
    setError('');

    try {
      if (validaClave(values.clave)) {
        login(values)
      } else {
        setError('Ingrese un email y clave válida.');
        setLoading(false);
      }
    } catch (error) {
      setError('Error de conexión. Por favor, intente más tarde.');
    } finally {
      setLoading(false);
    }
  };

  const claveCookie = process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION
  const login = async (values) => {
    try {
      const res = await loginAPI(values);
      if (res.status === 200) {
        const { token, user } = res.data;
        const { id } = user;
        
        // Guardar en cookies
        Cookies.set(COOKIES.authToken, token, claveCookie, { expires: 1 });
        Cookies.set(COOKIES.authId, id, claveCookie, { expires: 1 });
        
        // Actualizar el contexto con los datos del usuario
        loginContext(token, user);

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setBanderaLogin(!banderaLogin);
        }, 3000);
        redirectBase("admin/parte-diario");
      }
      if (res?.response?.status === 404) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } catch (error) {
      setError('Error en el servidor. Por favor, intente más tarde.')
    }
    finally {
      setLoading(false)
    }
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <Card className="login-card" bordered={false}>
          <div className="login-header">
            <img src={IpaatLogo} alt="Logo IPAAT" className="login-logo-main" />
            <h1 className="login-title">Sistema de Gestión</h1>
            <p className="login-subtitle">Partes Diarios y DDJJ</p>
          </div>

          <div className="login-form-wrapper">
            <h2 className="login-form-title">Iniciar Sesión</h2>
            <Form
              name="login_form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              size="large"
            >
              <Form.Item
                name="usuario"
                label="Usuario"
                rules={[
                  { required: true, message: 'Por favor ingrese su usuario' },
                  { type: 'text', message: 'El usuario no es válido' }
                ]}
              >
                <Input
                  prefix={<UserOutlined className="input-icon" />}
                  placeholder="Ingrese su usuario"
                />
              </Form.Item>

              <Form.Item
                name="clave"
                label="Contraseña"
                rules={[
                  { required: true, message: 'Por favor ingrese su contraseña' },
                  { min: 8, message: 'La contraseña debe tener al menos 8 caracteres' }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="input-icon" />}
                  placeholder="Ingrese su contraseña"
                />
              </Form.Item>

              {error && (
                <Alert
                  message={error}
                  type="error"
                  showIcon
                  className="login-alert"
                  closable
                  onClose={() => setError('')}
                />
              )}

              <Form.Item className="login-button-wrapper">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  loading={loading}
                >
                  {loading ? 'Ingresando...' : 'Ingresar'}
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="login-footer">
            <img src={MinEconProdLogo} alt="Logo Ministerio" className="login-footer-logo" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
