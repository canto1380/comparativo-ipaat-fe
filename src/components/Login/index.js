import React, { useState, useContext } from "react";
import { Button, Form, Input, Card } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { validaClave } from "../../utils/validations/validation";
import Cookies from "js-cookie";
import "./Login.css";
import { redirectBase } from "../../helpers/redirect";
import loginAPI from "../../utils/authentication/login.js";
import { User } from "../../context/UserProvider";
import { toast } from "react-toastify";

import IpaatLogo from '../../images/IPAAT-logos-horizontal.png';
import MinEconProdLogo from '../../images/MinEconomia-color.png';

export const COOKIES = {
  authToken: "token-ipaat-v2",
  authId: "idUser",
};

const Login = ({ banderaLogin, setBanderaLogin }) => {
  const [loading, setLoading] = useState(false);
  const { login: loginContext } = useContext(User);

  const claveCookie =
    process.env.REACT_APP_API || process.env.REACT_APP_PRODUCTION;

  const onFinish = async (values) => {
    if (loading) return;

    setLoading(true);

    if (!validaClave(values.clave)) {
      toast.error("Ingrese un usuario y contraseña válidos.", {
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    await login(values);
  };

  const login = async (values) => {
    try {
      const res = await loginAPI(values);

      if (res.status === 200) {
        const { token, user } = res.data;
        const { id } = user;
        toast.success(`Bienvenido ${values.usuario}`);
        // Cookies
        Cookies.set(COOKIES.authToken, token, { expires: 1 });
        Cookies.set(COOKIES.authId, id, { expires: 1 });

        // Contexto
        loginContext(token, user);
        // Redirección
        redirectBase("admin/parte-diario");
        return;
      }
      if(res.status !== 200) {
        toast.error(`${res?.response?.data?.error || 'Error en los datos del usuario.' }`)
      }

    } catch (error) {
      const msg =
        error?.response?.data?.error ||
        "Error en el servidor. Intente nuevamente.";

      toast.error(msg, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    return errorInfo;
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
            <h2 className="login-form-title">Bienvenido</h2>

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
                className=""
                rules={[
                  { required: true, message: 'Por favor ingrese su usuario' }
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
                  { min: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="input-icon" />}
                  placeholder="Ingrese su contraseña"
                />
              </Form.Item>

              <Form.Item className="login-button-wrapper">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  loading={loading}
                  disabled={loading}
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