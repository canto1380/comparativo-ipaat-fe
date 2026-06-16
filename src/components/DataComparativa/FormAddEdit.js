import { Button, Form, Input, Select, Spin } from "antd";
import MsgError from "../Messages/MsgError";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

const FormAddEditDataComparativa = ({
  dataRegisterEdit,
  dataComparativaData,
  aniosData,
  regionData
}) => {

  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [anioSeleccionado, setAnioSeleccionado] = useState(null);
  let array21

  /** 
   * Filtrar años basándose en si ya existen registros para ambas regiones.
   * Solo excluye un año si ya tiene registros para Tucumán Y Norte.
   * Si solo tiene una región, permite seleccionar el año para agregar la otra región.
   */
  const eliminarAniosRepetidos = (
    aniosData,
    dataComparativaData,
    regionData
  ) => {
    if(dataRegisterEdit) return aniosData
    // Validar que los datos existan
    if (!aniosData || !dataComparativaData) {
      return aniosData || [];
    }

    // Crear un mapa de años con sus regiones existentes
    const aniosConRegiones = {};

    dataComparativaData.forEach((registro) => {
      const anio = registro.anio_zafra;
      const region = registro.nombre_region;

      if (!aniosConRegiones[anio]) {
        aniosConRegiones[anio] = new Set();
      }
      aniosConRegiones[anio].add(region);
    });

    // Filtrar años que ya tienen ambas regiones (Tucumán y Norte)
    return aniosData.filter((anioObj) => {
      const anio = anioObj.anio_zafra;
      const regionesExistentes = aniosConRegiones[anio] || new Set();

      // Verificar si ya existen registros para ambas regiones
      // Considerar diferentes variaciones de escritura
      const tieneTucuman = Array.from(regionesExistentes).some(region =>
        region.toLowerCase().includes('tucumán') || region.toLowerCase().includes('tucuman')
      );
      const tieneNorte = Array.from(regionesExistentes).some(region =>
        region.toLowerCase().includes('norte')
      );

      // Excluir el año solo si ya tiene ambas regiones
      return !(tieneTucuman && tieneNorte);
    });
  };

  /**
   * Filtrar regiones basándose en el año seleccionado.
   * Si el año ya tiene una región registrada, solo muestra la región faltante.
   */
  const filtrarRegionesPorAnio = (regionData, dataComparativaData, anioSeleccionado) => {
    // Si no hay año seleccionado, mostrar todas las regiones
    if (!anioSeleccionado || !dataComparativaData) {
      return regionData || [];
    }

    // Buscar qué regiones ya están registradas para el año seleccionado
    const regionesExistentes = new Set();
    dataComparativaData.forEach((registro) => {
      if (registro.anio_zafra === anioSeleccionado) {
        regionesExistentes.add(registro.nombre_region);
      }
    });

    // Si ya tiene ambas regiones, no mostrar ninguna (esto no debería pasar por el filtro de años)
    if (regionesExistentes.size >= 2) {
      return [];
    }

    // Si tiene una región, mostrar solo la que falta
    if (regionesExistentes.size === 1) {
      return regionData.filter((region) => {
        const nombreRegion = region.nombre_region;
        // Verificar si esta región ya existe para el año
        return !Array.from(regionesExistentes).some(regionExistente =>
          regionExistente.toLowerCase() === nombreRegion.toLowerCase()
        );
      });
    }

    // Si no tiene ninguna región, mostrar todas
    return regionData || [];
  };

  array21 = dataComparativaData &&
    eliminarAniosRepetidos(aniosData, dataComparativaData, regionData);
  /*****/

  let optionsAnios = [];
  array21?.forEach((d) => {
    const option = { value: d.id, label: d.anio_zafra };
    optionsAnios.push(option);
  });

  // Filtrar regiones basándose en el año seleccionado
  const regionesFiltradas = filtrarRegionesPorAnio(regionData, dataComparativaData, anioSeleccionado);

  let optionsRegiones = [];
  regionesFiltradas?.forEach((d) => {
    const option = { value: d.id, label: d.nombre_region };
    optionsRegiones.push(option);
  });

  const handleSubmit = async (values) => {
    if (!dataRegisterEdit) {
      createDataComparativa(values);
    } else {
      updateDataComparativa(values);
    }
  };
  const createDataComparativa = async (values) => {
    try {
      const res = await api("POST", "dataComparativa", values);
      if (res.status === 201) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.href = "/admin/datos-comparativos";
        }, 2500);
      }
      if (res?.response?.status === 400) {
        const arraysError = res?.response?.data?.errors;
        setMessageError(arraysError);
        setDataError(true);
        setTimeout(() => {
          setDataError(false);
        }, 3000);
      }
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };
  const updateDataComparativa = async (values) => {
    try {
      values.id_anio_zafra = dataRegisterEdit.id_anio_zafra
      const res = await api("PATCH", `dataComparativa/${dataRegisterEdit?.id_anio_zafra}/${dataRegisterEdit?.id_region_ingenios}`, values)
      if (res.status === 200) {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          window.location.href = "/admin/datos-comparativos"
        }, 2500);
      }
      if (res?.response?.status === 400) {
        const arraysError = res?.response?.data?.errors;
        setMessageError(arraysError);
        setDataError(true);
        setTimeout(() => {
          setDataError(false);
        }, 3000);
      }
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  const onFinishFailed = (errorInfo) => {
    return errorInfo;
  };

  // Manejador para cuando se selecciona un año
  const handleAnioChange = (value, option) => {
    setAnioSeleccionado(option.label); // Guardar el año seleccionado
    // Limpiar la región seleccionada cuando cambia el año
    if (form) {
      form.setFieldValue('id_region_ingenios', undefined);
    }
  };

  // Obtener referencia al formulario para poder limpiar campos
  const [form] = Form.useForm();
  useEffect(() => {
    if (dataRegisterEdit) {
      form.setFieldsValue({
        id_anio_zafra: dataRegisterEdit.id_anio_zafra,
        id_region_ingenios: dataRegisterEdit.id_region_ingenios,
        CMB_DDJJ: dataRegisterEdit.CMB_DDJJ,
        estimacion_EEAOC: dataRegisterEdit.estimacion_EEAOC,
      });

      setAnioSeleccionado(dataRegisterEdit.anio_zafra);
    }
  }, [dataRegisterEdit, form]);
  return (
    <div className="menuContainer">

      <Form
        form={form}
        labelCol={{
          span: 22,
        }}
        wrapperCol={{
          span: 22,
        }}
        layout="vertical"
        style={{
          marginLeft: "2vh",
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        initialValues={{
          id_anio_zafra: dataRegisterEdit?.id_anio_zafra,
          CMB_DDJJ: dataRegisterEdit?.CMB_DDJJ,
          estimacion_EEAOC: dataRegisterEdit?.estimacion_EEAOC,
          id_region_ingenios: dataRegisterEdit?.nombre_region
        }}
      >
        <Form.Item
          label="Año"
          name="id_anio_zafra"
          rules={[{ required: true, message: "Debe ingresar un año" }]}
        >
          <Select
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Busque o seleccione"
            disabled={dataRegisterEdit ? true : false}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={optionsAnios}
            onChange={handleAnioChange}
          />
        </Form.Item>
        <Form.Item
          label="Región"
          name="id_region_ingenios"
          rules={[{ required: true, message: "Debe ingresar una región" }]}
        >
          <Select
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Busque o seleccione"
            disabled={dataRegisterEdit ? true : false}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={optionsRegiones}
          />
        </Form.Item>
        <Form.Item
          label="CMB por DDJJ"
          name="CMB_DDJJ"
          // rules={[{ required: true, message: "Debe ingresar un valor" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Estimación EEAOC"
          name="estimacion_EEAOC"
          rules={[{ required: true, message: "Debe ingresar un valor" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          className="text-end"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 22 }}
        >
          {loading ? (
            <Button disabled type="primary" htmlType="submit">
              <Spin
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">
                {dataRegisterEdit ? "Actualizando" : "Agregando"}
              </span>
            </Button>
          ) : (
            <Button type="primary" htmlType="submit">
              {dataRegisterEdit ? "Actualizar" : "Agregar"}
            </Button>
          )}
        </Form.Item>
        {dataError
          ? messageError.map((e, i) => <MsgError key={i} text1={''} text2={e.msg} />)
          : null}
        {serverError ? <MsgError text2="Server internal Error" /> : null}
      </Form>
    </div>
  );
};
export default FormAddEditDataComparativa;
