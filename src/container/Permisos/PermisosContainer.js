import { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import Spinn from "../../components/Spinner";
import { crearPermiso, eliminarPermiso, getPermisos } from "../../utils/queryAPI/permisos";
import { agruparPermisosPorCategoria } from "../../utils/permisos";

const PermisosContainer = ({ tokenAuth }) => {
  const [permisos, setPermisos] = useState(null);
  const [search, setSearch] = useState(null);
  const [abierto, setAbierto] = useState(false);
  const [form] = Form.useForm();

  const cargar = async () => {
    setPermisos((await getPermisos(tokenAuth)) || []);
  };

  useEffect(() => {
    if (tokenAuth) cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  const permisosFiltrados = useMemo(() => {
    if (!permisos) return [];
    if (!search) return permisos;
    const q = String(search).toLowerCase();
    return permisos.filter((p) =>
      [p.nombre_permiso, p.descripcion]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [permisos, search]);

  const grupos = useMemo(
    () => agruparPermisosPorCategoria(permisosFiltrados),
    [permisosFiltrados]
  );

  const crear = async (values) => {
    const res = await crearPermiso(values, tokenAuth);
    if (res.status === 201) {
      message.success("Permiso creado");
      form.resetFields();
      setAbierto(false);
      cargar();
      return;
    }
    message.error(
      res?.response?.data?.message ||
        res?.response?.data?.Mensaje ||
        "No se pudo crear el permiso"
    );
  };

  const confirmarEliminar = (permiso) => {
    Modal.confirm({
      title: "Eliminar permiso",
      content: `¿Eliminar el permiso "${permiso.nombre_permiso}"? Se quitará de todos los roles.`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: async () => {
        const res = await eliminarPermiso(permiso.id, tokenAuth);
        if (res.status === 200) {
          message.success("Permiso eliminado");
          cargar();
          return;
        }
        message.error(
          res?.response?.data?.message ||
            res?.response?.data?.Mensaje ||
            "No se pudo eliminar el permiso"
        );
      },
    });
  };

  return (
    <Container fluid>
      <TitlePage titlePage="Permisos" />
      <hr className="menu-divider" />
      {permisos === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            setSearch={setSearch}
            bandFilterSearch={true}
            placeHolderSearch="Permiso o descripción"
          />
          <ListHeader
            title="Permisos"
            btnOnClick={() => {
              form.resetFields();
              setAbierto(true);
            }}
          />
          <div className="menu-table-wrap">
            {grupos.length === 0 ? (
              <p className="text-muted mb-0 px-1">Sin registros</p>
            ) : (
              grupos.map((grupo) => (
                <section key={grupo.key} className="permisos-categoria">
                  <h4 className="permisos-categoria-titulo">
                    {grupo.titulo}
                    <span className="text-muted fw-normal ms-2">
                      {grupo.permisos.length}
                    </span>
                  </h4>
                  {grupo.permisos.map((permiso) => (
                    <div key={permiso.id} className="permiso-fila">
                      <div className="permiso-fila-info">
                        <p className="permiso-fila-nombre">{permiso.nombre_permiso}</p>
                        {permiso.descripcion ? (
                          <p className="permiso-fila-desc">{permiso.descripcion}</p>
                        ) : null}
                      </div>
                      <Button
                        className="bg-danger"
                        type="primary"
                        size="small"
                        icon={<DeleteOutlined />}
                        title="Eliminar"
                        onClick={() => confirmarEliminar(permiso)}
                      />
                    </div>
                  ))}
                </section>
              ))
            )}
          </div>
        </>
      )}

      <Modal
        title="Nuevo permiso"
        open={abierto}
        onCancel={() => setAbierto(false)}
        onOk={() => form.submit()}
        okText="Crear"
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={crear}>
          <Form.Item name="nombre_permiso" label="Nombre" rules={[{ required: true }]}>
            <Input placeholder="modulo.accion" />
          </Form.Item>
          <Form.Item name="descripcion" label="Descripción">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  );
};

export default PermisosContainer;
