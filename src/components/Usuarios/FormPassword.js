import { Form, Input, Spin, Button, message } from "antd";
import { useState } from "react";
import MsgError from "../Messages/MsgError";
import { api } from "../../utils/api";

const FormPass = ({ tokenAuth, routerAPI, dataRegisterEdit }) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editBand, setEditBand] = useState(false);
  const [form] = Form.useForm();

  const userId = dataRegisterEdit?.id ?? dataRegisterEdit?.[0]?.id;

  const handleSubmit = async (values) => {
    try {
      await updatePass(values);
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  const updatePass = async (values) => {
    const res = await api(
      "PATCH",
      `${routerAPI}/updatePass/${userId}`,
      values,
      tokenAuth
    );
    if (res.status === 200) {
      setLoading(true);
      message.success("Clave actualizada con éxito");
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/admin/perfil";
      }, 1500);
      return;
    }
    if (res?.response?.status === 400) {
      const msgError = res?.response?.data?.message;
      setMessageError(msgError);
      setDataError(true);
      setTimeout(() => {
        setDataError(false);
      }, 3000);
    }
  };

  const cancelarEdicion = () => {
    form.resetFields();
    setEditBand(false);
  };

  return (
    <div className="perfil-card">
      <div className="perfil-card-header">
        <div>
          <h3 className="perfil-card-title">Seguridad</h3>
          <p className="perfil-card-subtitle">Actualizá tu clave de acceso</p>
        </div>
        <Button
          type={editBand ? "default" : "primary"}
          onClick={() => (editBand ? cancelarEdicion() : setEditBand(true))}
        >
          {editBand ? "Cancelar" : "Cambiar clave"}
        </Button>
      </div>
      <div className="perfil-card-body">
        {!editBand ? (
          <p className="mb-0" style={{ color: "#8c8c8c", fontSize: 13 }}>
            Por seguridad, la clave actual no se muestra. Usá “Cambiar clave” para actualizarla.
          </p>
        ) : (
          <Form
            form={form}
            layout="vertical"
            size="middle"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Clave actual"
              name="claveActual"
              rules={[{ required: true, message: "Debe ingresar la clave actual" }]}
            >
              <Input.Password placeholder="Clave actual" />
            </Form.Item>
            <Form.Item
              label="Nueva clave"
              name="claveNueva"
              rules={[
                { required: true, message: "Debe ingresar una clave nueva" },
                { min: 6, message: "Mínimo 6 caracteres" },
              ]}
            >
              <Input.Password placeholder="Nueva clave" />
            </Form.Item>
            <Form.Item
              label="Repetir nueva clave"
              name="claveNueva1"
              dependencies={["claveNueva"]}
              rules={[
                { required: true, message: "Debe repetir la clave" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("claveNueva") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Las claves no coinciden"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Repetir nueva clave" />
            </Form.Item>
            <div className="perfil-card-actions">
              {loading ? (
                <Button disabled type="primary" htmlType="submit">
                  <Spin size="small" />
                  <span className="ms-2">Guardando</span>
                </Button>
              ) : (
                <Button type="primary" htmlType="submit">
                  Guardar clave
                </Button>
              )}
            </div>
            {dataError ? <MsgError text1="Error" text2={messageError} /> : null}
            {serverError ? <MsgError text2="Error interno del servidor" /> : null}
          </Form>
        )}
      </div>
    </div>
  );
};

export default FormPass;
