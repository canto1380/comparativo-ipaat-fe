import { Form, Input, Spin, Button, message } from "antd";
import { useState } from "react";
import MsgError from "../Messages/MsgError";
import { api } from "../../utils/api";

const FormAddEditUsuarios = ({ tokenAuth, routerAPI, dataRegisterEdit }) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editBand, setEditBand] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await updateUser(values);
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  const updateUser = async (values) => {
    const res = await api(
      "PATCH",
      `${routerAPI}/${dataRegisterEdit?.id}`,
      values,
      tokenAuth
    );
    if (res.status === 200) {
      setLoading(true);
      message.success("Datos actualizados");
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/admin/perfil";
      }, 1500);
      return;
    }
    if (res?.response?.status === 400) {
      const arraysError = res?.response?.data?.errors;
      setMessageError(arraysError || []);
      setDataError(true);
      setTimeout(() => {
        setDataError(false);
      }, 3000);
    }
  };

  const cancelarEdicion = () => {
    form.setFieldsValue({
      nombre: dataRegisterEdit?.nombre,
      apellido: dataRegisterEdit?.apellido,
      email: dataRegisterEdit?.email,
    });
    setEditBand(false);
  };

  return (
    <div className="perfil-card">
      <div className="perfil-card-header">
        <div>
          <h3 className="perfil-card-title">Datos personales</h3>
          <p className="perfil-card-subtitle">Nombre, apellido y correo de contacto</p>
        </div>
        <Button
          type={editBand ? "default" : "primary"}
          onClick={() => (editBand ? cancelarEdicion() : setEditBand(true))}
        >
          {editBand ? "Cancelar" : "Editar"}
        </Button>
      </div>
      <div className="perfil-card-body">
        <Form
          form={form}
          layout="vertical"
          size="middle"
          onFinish={handleSubmit}
          initialValues={{
            nombre: dataRegisterEdit?.nombre,
            apellido: dataRegisterEdit?.apellido,
            email: dataRegisterEdit?.email,
          }}
          disabled={!editBand}
        >
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Debe ingresar un nombre" }]}
          >
            <Input placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="apellido"
            rules={[{ required: true, message: "Debe ingresar un apellido" }]}
          >
            <Input placeholder="Apellido" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Debe ingresar un email" },
              { type: "email", message: "Ingrese un email válido" },
            ]}
          >
            <Input placeholder="correo@ejemplo.com" />
          </Form.Item>
          {editBand && (
            <div className="perfil-card-actions">
              {loading ? (
                <Button disabled type="primary" htmlType="submit">
                  <Spin size="small" />
                  <span className="ms-2">Guardando</span>
                </Button>
              ) : (
                <Button type="primary" htmlType="submit">
                  Guardar cambios
                </Button>
              )}
            </div>
          )}
          {dataError
            ? (Array.isArray(messageError) ? messageError : []).map((e, i) => (
                <MsgError key={i} text1={""} text2={e.msg} />
              ))
            : null}
          {serverError ? <MsgError text2="Error interno del servidor" /> : null}
        </Form>
      </div>
    </div>
  );
};

export default FormAddEditUsuarios;
