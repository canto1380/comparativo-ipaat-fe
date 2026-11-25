import { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Modal, Select, Space, Tag, message } from "antd";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Container } from "react-bootstrap";
import moment from "moment";
import TitlePage from "../../components/TitlePages";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import Spinn from "../../components/Spinner";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { getRoles } from "../../utils/queryAPI/roles";
import { getTiposDocumento } from "../../utils/queryAPI/tipoDocumento";
import {
  actualizarUsuario,
  crearUsuario,
  deshabilitarUsuario,
  eliminarUsuario,
  getUsuarios,
  habilitarUsuario,
} from "../../utils/queryAPI/usuarios";

const UsuariosContainer = ({ tokenAuth }) => {
  const [usuarios, setUsuarios] = useState(null);
  const [roles, setRoles] = useState([]);
  const [ingenios, setIngenios] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [search, setSearch] = useState(null);
  const [abierto, setAbierto] = useState(false);
  const [editando, setEditando] = useState(null);
  const [form] = Form.useForm();

  const cargar = async () => {
    const [lista, rolesData, ingeniosData, tiposData] = await Promise.all([
      getUsuarios(tokenAuth),
      getRoles(tokenAuth),
      getIngenios({}),
      getTiposDocumento(tokenAuth),
    ]);
    setUsuarios(lista || []);
    setRoles(rolesData || []);
    setIngenios(ingeniosData || []);
    setTipos(Array.isArray(tiposData) ? tiposData : tiposData?.data || []);
  };

  useEffect(() => {
    if (tokenAuth) cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  const usuariosFiltrados = useMemo(() => {
    if (!usuarios) return [];
    if (!search) return usuarios;
    const q = String(search).toLowerCase();
    return usuarios.filter((u) =>
      [u.usuario, u.nombre, u.apellido, u.nombre_rol, u.nombre_ingenio]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [usuarios, search]);

  const abrirNuevo = () => {
    setEditando(null);
    form.resetFields();
    setAbierto(true);
  };

  const abrirEdicion = (registro) => {
    setEditando(registro);
    form.setFieldsValue({
      usuario: registro.usuario,
      id_role: registro.id_role,
      id_ingenio: registro.id_ingenio,
    });
    setAbierto(true);
  };

  const guardar = async (values) => {
    const body = editando
      ? { usuario: values.usuario, id_role: values.id_role, id_ingenio: values.id_ingenio || null }
      : {
          ...values,
          fechaNacimiento: values.fechaNacimiento
            ? moment(values.fechaNacimiento).format("YYYY-MM-DD")
            : null,
          id_ingenio: values.id_ingenio || null,
        };
    const res = editando
      ? await actualizarUsuario(editando.id, body, tokenAuth)
      : await crearUsuario(body, tokenAuth);
    if (res.status === 200 || res.status === 201) {
      message.success(editando ? "Usuario actualizado" : "Usuario creado");
      setAbierto(false);
      cargar();
      return;
    }
    message.error(
      res?.response?.data?.message ||
        res?.response?.data?.Mensaje ||
        res?.response?.data?.error ||
        "No se pudo guardar el usuario"
    );
  };

  const estaActivo = (registro) => registro.activo === true || registro.activo === 1;

  const confirmarDeshabilitar = (registro) => {
    Modal.confirm({
      title: "Deshabilitar usuario",
      content: `¿Deshabilitar a "${registro.usuario}"? No podrá iniciar sesión hasta que se lo habilite.`,
      okText: "Deshabilitar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: async () => {
        const res = await deshabilitarUsuario(registro.id, tokenAuth);
        if (res.status === 200) {
          message.success("Usuario deshabilitado");
          cargar();
          return;
        }
        message.error(
          res?.response?.data?.message ||
            res?.response?.data?.Mensaje ||
            "No se pudo deshabilitar el usuario"
        );
      },
    });
  };

  const confirmarHabilitar = (registro) => {
    Modal.confirm({
      title: "Habilitar usuario",
      content: `¿Habilitar a "${registro.usuario}"?`,
      okText: "Habilitar",
      cancelText: "Cancelar",
      onOk: async () => {
        const res = await habilitarUsuario(registro.id, tokenAuth);
        if (res.status === 200) {
          message.success("Usuario habilitado");
          cargar();
          return;
        }
        message.error(
          res?.response?.data?.message ||
            res?.response?.data?.Mensaje ||
            "No se pudo habilitar el usuario"
        );
      },
    });
  };

  const confirmarEliminar = (registro) => {
    Modal.confirm({
      title: "Eliminar usuario",
      content: `¿Eliminar permanentemente a "${registro.usuario}"? Esta acción no se puede deshacer.`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: async () => {
        const res = await eliminarUsuario(registro.id, tokenAuth);
        if (res.status === 200) {
          message.success("Usuario eliminado");
          cargar();
          return;
        }
        message.error(
          res?.response?.data?.message ||
            res?.response?.data?.Mensaje ||
            "No se pudo eliminar el usuario"
        );
      },
    });
  };

  const columnsData = [
    {
      key: "usuario",
      title: "Usuario",
      dataIndex: "usuario",
      sorter: (a, b) => String(a.usuario || "").localeCompare(String(b.usuario || ""), "es"),
    },
    {
      key: "nombre",
      title: "Nombre",
      dataIndex: "nombre",
      sorter: (a, b) => String(a.nombre || "").localeCompare(String(b.nombre || ""), "es"),
    },
    {
      key: "apellido",
      title: "Apellido",
      dataIndex: "apellido",
      sorter: (a, b) => String(a.apellido || "").localeCompare(String(b.apellido || ""), "es"),
    },
    {
      key: "nombre_rol",
      title: "Rol",
      dataIndex: "nombre_rol",
      sorter: (a, b) => String(a.nombre_rol || "").localeCompare(String(b.nombre_rol || ""), "es"),
    },
    {
      key: "nombre_ingenio",
      title: "Ingenio",
      dataIndex: "nombre_ingenio",
      sorter: (a, b) => String(a.nombre_ingenio || "").localeCompare(String(b.nombre_ingenio || ""), "es"),
      render: (valor) => valor || "Todos",
    },
    {
      key: "activo",
      title: "Estado",
      dataIndex: "activo",
      sorter: (a, b) => Number(estaActivo(a)) - Number(estaActivo(b)),
      render: (_, registro) =>
        estaActivo(registro) ? (
          <Tag color="success">Activo</Tag>
        ) : (
          <Tag color="default">Deshabilitado</Tag>
        ),
    },
    {
      key: "actions",
      title: "Acciones",
      align: "right",
      className: "acciones-columna",
      render: (_, record) => (
        <Space size="small" className="d-flex justify-content-end">
          <Button
            className="bg-secondary btn-edit"
            style={{ color: "white" }}
            icon={<EditOutlined />}
            title="Editar"
            onClick={() => abrirEdicion(record)}
          />
          {estaActivo(record) ? (
            <Button
              className="bg-warning"
              style={{ color: "white" }}
              icon={<StopOutlined />}
              title="Deshabilitar"
              onClick={() => confirmarDeshabilitar(record)}
            />
          ) : (
            <Button
              className="bg-success"
              style={{ color: "white" }}
              icon={<CheckCircleOutlined />}
              title="Habilitar"
              onClick={() => confirmarHabilitar(record)}
            />
          )}
          <Button
            className="bg-danger"
            type="primary"
            icon={<DeleteOutlined />}
            title="Eliminar"
            onClick={() => confirmarEliminar(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <Container fluid>
      <TitlePage titlePage="Usuarios" />
      <hr className="menu-divider" />
      {usuarios === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            setSearch={setSearch}
            bandFilterSearch={true}
            placeHolderSearch="Usuario, nombre, rol..."
          />
          <ListHeader title="Usuarios" btnOnClick={abrirNuevo} />
          <div className="menu-table-wrap">
            <ListadoDatos columns={columnsData} scroll={30} data={usuariosFiltrados} />
          </div>
        </>
      )}
      <Modal
        title={editando ? "Editar usuario" : "Nuevo usuario"}
        open={abierto}
        onCancel={() => setAbierto(false)}
        onOk={() => form.submit()}
        okText="Guardar"
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={guardar}>
          {!editando && (
            <>
              <Form.Item name="nombre" label="Nombre" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item name="apellido" label="Apellido" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}><Input /></Form.Item>
              <Form.Item name="fechaNacimiento" label="Fecha de nacimiento" rules={[{ required: true }]}>
                <Input type="date" />
              </Form.Item>
              <Form.Item name="sexo" label="Sexo">
                <Select options={[{ value: "M", label: "M" }, { value: "F", label: "F" }, { value: "X", label: "X" }]} />
              </Form.Item>
              <Form.Item name="idTipoDocumento" label="Tipo de documento" rules={[{ required: true }]}>
                <Select options={tipos.map((tipo) => ({ value: tipo.id, label: tipo.tipo_documento }))} />
              </Form.Item>
              <Form.Item name="nroDocumento" label="Número de documento" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item name="clave" label="Clave" rules={[{ required: true }]}><Input.Password /></Form.Item>
            </>
          )}
          <Form.Item name="usuario" label="Usuario" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="id_role" label="Rol" rules={[{ required: true }]}>
            <Select options={roles.map((rol) => ({ value: rol.id, label: rol.nombre_rol }))} />
          </Form.Item>
          <Form.Item name="id_ingenio" label="Ingenio">
            <Select allowClear options={ingenios.map((ingenio) => ({ value: ingenio.id, label: ingenio.nombre_ingenio }))} />
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  );
};

export default UsuariosContainer;
