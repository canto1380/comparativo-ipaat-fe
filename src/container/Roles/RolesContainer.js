import { useEffect, useMemo, useState } from "react";
import { Button, Checkbox, Collapse, Form, Input, Modal, Space, message } from "antd";
import { DeleteOutlined, EditOutlined, KeyOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import Spinn from "../../components/Spinner";
import { actualizarRol, crearRol, eliminarRol, getRoles } from "../../utils/queryAPI/roles";
import { getPermisos } from "../../utils/queryAPI/permisos";
import { asignarRolPermiso, getRolesPermisos } from "../../utils/queryAPI/rolesPermisos";
import { agruparPermisosPorCategoria } from "../../utils/permisos";

const RolesContainer = ({ tokenAuth }) => {
  const [roles, setRoles] = useState(null);
  const [permisos, setPermisos] = useState([]);
  const [asignados, setAsignados] = useState([]);
  const [rolId, setRolId] = useState(null);
  const [search, setSearch] = useState(null);
  const [abierto, setAbierto] = useState(false);
  const [editando, setEditando] = useState(null);
  const [modalPermisos, setModalPermisos] = useState(false);
  const [form] = Form.useForm();

  const cargar = async () => {
    const [rolesData, permisosData, relaciones] = await Promise.all([
      getRoles(tokenAuth),
      getPermisos(tokenAuth),
      getRolesPermisos(tokenAuth),
    ]);
    setRoles(rolesData || []);
    setPermisos(permisosData || []);
    setAsignados(relaciones || []);
  };

  useEffect(() => {
    if (tokenAuth) cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  const rolesFiltrados = useMemo(() => {
    if (!roles) return [];
    if (!search) return roles;
    const q = String(search).toLowerCase();
    return roles.filter((rol) => String(rol.nombre_rol || "").toLowerCase().includes(q));
  }, [roles, search]);

  const permisosAgrupados = useMemo(
    () => agruparPermisosPorCategoria(permisos),
    [permisos]
  );

  const marcar = async (permiso, checked) => {
    const res = await asignarRolPermiso(
      { id_rol: rolId, id_permiso: permiso.id, checked },
      tokenAuth
    );
    if (res.status === 201 || res.status === 200) {
      cargar();
      return;
    }
    message.error("No se pudo actualizar el permiso del rol");
  };

  const abrirNuevo = () => {
    setEditando(null);
    form.resetFields();
    setAbierto(true);
  };

  const abrirEdicion = (rol) => {
    setEditando(rol);
    form.setFieldsValue({ nombre_rol: rol.nombre_rol });
    setAbierto(true);
  };

  const guardar = async (values) => {
    const nombre_rol = String(values.nombre_rol || "").trim();
    if (!nombre_rol) {
      message.error("Ingrese el nombre del rol");
      return;
    }
    if (editando) {
      const res = await actualizarRol(editando.id, { nombre_rol }, tokenAuth);
      if (res.status === 200) {
        message.success("Rol actualizado");
        form.resetFields();
        setAbierto(false);
        setEditando(null);
        cargar();
        return;
      }
      message.error(
        res?.response?.data?.message ||
          res?.response?.data?.Mensaje ||
          "No se pudo actualizar el rol"
      );
      return;
    }
    const res = await crearRol({ nombre_rol }, tokenAuth);
    if (res.status === 201) {
      message.success("Rol creado");
      form.resetFields();
      setAbierto(false);
      cargar();
      return;
    }
    message.error(
      res?.response?.data?.message ||
        res?.response?.data?.Mensaje ||
        "No se pudo crear el rol"
    );
  };

  const abrirPermisos = (rol) => {
    setRolId(rol.id);
    setModalPermisos(true);
  };

  const cerrarPermisos = () => {
    setModalPermisos(false);
    setRolId(null);
  };

  const confirmarEliminar = (rol) => {
    Modal.confirm({
      title: "Eliminar rol",
      content: `¿Eliminar el rol "${rol.nombre_rol}"? No debe tener usuarios asignados.`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: async () => {
        const res = await eliminarRol(rol.id, tokenAuth);
        if (res.status === 200) {
          message.success("Rol eliminado");
          if (rolId === rol.id) cerrarPermisos();
          cargar();
          return;
        }
        message.error(
          res?.response?.data?.message ||
            res?.response?.data?.Mensaje ||
            "No se pudo eliminar el rol"
        );
      },
    });
  };

  const activos = new Set(
    asignados.filter((item) => item.id_rol === rolId).map((item) => item.id_permiso)
  );

  const rolSeleccionado = roles?.find((rol) => rol.id === rolId);

  const columnsData = [
    {
      key: "nombre_rol",
      title: "Rol",
      dataIndex: "nombre_rol",
      sorter: (a, b) => String(a.nombre_rol || "").localeCompare(String(b.nombre_rol || ""), "es"),
    },
    {
      key: "actions",
      title: "Acciones",
      align: "right",
      className: "acciones-columna",
      render: (_, rol) => (
        <Space size="small" className="d-flex justify-content-end">
          <Button
            className="bg-secondary btn-edit"
            style={{ color: "white" }}
            icon={<EditOutlined />}
            title="Editar nombre"
            disabled={rol.nombre_rol === "Administrador"}
            onClick={() => abrirEdicion(rol)}
          />
          <Button
            className="bg-secondary btn-edit"
            style={{ color: "white" }}
            icon={<KeyOutlined />}
            title="Asignar permisos"
            onClick={() => abrirPermisos(rol)}
          />
          <Button
            className="bg-danger"
            type="primary"
            icon={<DeleteOutlined />}
            title="Eliminar"
            disabled={rol.nombre_rol === "Administrador"}
            onClick={() => confirmarEliminar(rol)}
          />
        </Space>
      ),
    },
  ];

  return (
    <Container fluid>
      <TitlePage titlePage="Roles" />
      <hr className="menu-divider" />
      {roles === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            setSearch={setSearch}
            bandFilterSearch={true}
            placeHolderSearch="Nombre del rol"
          />
          <ListHeader title="Roles" btnOnClick={abrirNuevo} />
          <div className="menu-table-wrap">
            <ListadoDatos columns={columnsData} scroll={30} data={rolesFiltrados} />
          </div>
        </>
      )}

      <Modal
        title={editando ? "Editar rol" : "Nuevo rol"}
        open={abierto}
        onCancel={() => {
          setAbierto(false);
          setEditando(null);
          form.resetFields();
        }}
        onOk={() => form.submit()}
        okText={editando ? "Guardar" : "Crear"}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={guardar}>
          <Form.Item
            name="nombre_rol"
            label="Nombre del rol"
            rules={[{ required: true, message: "Ingrese el nombre" }]}
          >
            <Input placeholder="Nombre del rol" maxLength={30} />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        className="roles-permisos-modal"
        title={`Permisos — ${rolSeleccionado?.nombre_rol || ""}`}
        open={modalPermisos}
        onCancel={cerrarPermisos}
        footer={[
          <Button key="cerrar" onClick={cerrarPermisos}>
            Cerrar
          </Button>,
        ]}
        width={640}
        destroyOnClose
      >
        <Collapse
          bordered={false}
          defaultActiveKey={permisosAgrupados.slice(0, 2).map((g) => g.key)}
          items={permisosAgrupados.map((grupo) => ({
            key: grupo.key,
            label: `${grupo.titulo} (${grupo.permisos.length})`,
            children: (
              <div>
                {grupo.permisos.map((permiso) => (
                  <div key={permiso.id} className="roles-permiso-item">
                    <Checkbox
                      checked={activos.has(permiso.id)}
                      onChange={(event) => marcar(permiso, event.target.checked)}
                    >
                      <span className="permiso-fila-nombre">{permiso.nombre_permiso}</span>
                    </Checkbox>
                    {permiso.descripcion ? (
                      <p className="permiso-fila-desc mb-0">{permiso.descripcion}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ),
          }))}
        />
      </Modal>
    </Container>
  );
};

export default RolesContainer;
