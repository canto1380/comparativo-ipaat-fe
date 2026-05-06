import { Form, Select, Spin, Button, Row, Col } from "antd";
import { useState } from "react";
import { api } from "../../utils/api";
import MsgError from "../Messages/MsgError";
import moment from "moment";
import "./periodoZafra.css";

const FormAddEditPeriodos = ({ dataRegisterEdit, aniosData, ingeniosData }) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [dataErrorPK, setDataErrorPK] = useState(false);
  const [errorPKDuplicate, setErrorPKDuplicate] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [inicioZafra, setInicioZafra] = useState(
    dataRegisterEdit?.inicio_zafra
  );
  const [finZafra, setFinZafra] = useState(dataRegisterEdit?.fin_zafra);
  const [finalDatos, setFinalDatos] = useState(dataRegisterEdit?.fin_datos_zafra)

  const [inicioDestileria, setInicioDestileria] = useState(
    dataRegisterEdit?.inicio_destileria
  );
  const [finDestileria, setFinDestileria] = useState(
    dataRegisterEdit?.fin_destileria
  );
  const [inicioAnhidro, setInicioAnhidro] = useState(
    dataRegisterEdit?.inicio_anhidro
  );
  const [finAnhidro, setFinAnhidro] = useState(dataRegisterEdit?.fin_anhidro);

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const changeDataInicio = (e) => {
    setInicioZafra(e.target.value);
  };
  const changeFinInicio = (e) => {
    setFinZafra(e.target.value);
  };
  const changeFinalDatos = (e) => {
    setFinalDatos(e.target.value);
  };

  const changeInicioDestileria = (e) => {
    setInicioDestileria(e.target.value);
  };
  const changeFinDestileria = (e) => {
    setFinDestileria(e.target.value);
  };

  const changeInicioAnhidro = (e) => {
    setInicioAnhidro(e.target.value);
  };
  const changeFinAnhidro = (e) => {
    setFinAnhidro(e.target.value);
  };

  const handleSubmit = async (values) => {
    if (!dataRegisterEdit) {
      createPeriodo(values);
    } else {
      updatePeriodo(values);
    }
  };
  const createPeriodo = async (values) => {
    values.inicio_zafra = inicioZafra;
    values.fin_zafra = finZafra;
    values.fin_datos_zafra = finalDatos;
    values.inicio_destileria = inicioDestileria;
    values.fin_destileria = finDestileria;
    values.inicio_anhidro = inicioAnhidro
    values.fin_anhidro = finAnhidro
    try {
      const res = await api("POST", "periodoZafra", values);
      if (res.status === 201) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.href = "/admin/periodos-zafra";
        }, 2500);
      }
      if (res?.response?.status === 400) {
        handleReset();
        const arraysError = res?.response?.data?.errors;
        setMessageError(arraysError);
        setDataError(true);
        setTimeout(() => {
          setDataError(false);
        }, 3000);
      }
      if (res?.response?.status === 401) {
        handleReset();
        const arraysError = res?.response?.data?.errors;
        setErrorPKDuplicate(arraysError);
        setDataErrorPK(true);
        setTimeout(() => {
          setDataErrorPK(false);
        }, 3000);
      }
    } catch (error) {
      handleReset();
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  const updatePeriodo = async (values) => {
    values.inicio_zafra = inicioZafra ?  moment(inicioZafra).format("YYYY-MM-DD") : null;
    values.fin_zafra = finZafra ?  moment(finZafra).format("YYYY-MM-DD") : null;
    values.fin_datos_zafra = finalDatos ? moment(finalDatos).format("YYYY-MM-DD") : null;
    values.inicio_destileria = inicioDestileria ?  moment(inicioDestileria).format("YYYY-MM-DD") : null;
    values.fin_destileria = finDestileria ?  moment(finDestileria).format("YYYY-MM-DD") : null;
    values.inicio_anhidro = inicioAnhidro ?  moment(inicioAnhidro).format("YYYY-MM-DD") : null;
    values.fin_anhidro = finAnhidro ? moment(finAnhidro).format("YYYY-MM-DD") : null;
    try {
      const res = await api(
        "PATCH",
        `periodoZafra/${dataRegisterEdit?.id}`,
        values
      );
      if (res.status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.href = "/admin/periodos-zafra";
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

  let optionsAnios = [{ value: "", label: "Todos" }];
  aniosData?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.anio_zafra,
    };
    optionsAnios.push(option);
  });

  let optionsIngenios = [{ value: "", label: "Todos" }];
  ingeniosData?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.nombre_ingenio,
    };
    optionsIngenios.push(option);
  });


  const dataEditInicio = new Date(dataRegisterEdit?.inicio_zafra);
  const dataInicioConvertido = moment(dataEditInicio).format("YYYY-MM-DD");
  const dataEditFin = new Date(dataRegisterEdit?.fin_zafra);
  const dataFinConvertido = moment(dataEditFin).format("YYYY-MM-DD");

  const dataEditFinalDatos = new Date(dataRegisterEdit?.fin_datos_zafra)
  const dataFinalDatosConvertido = moment(dataEditFinalDatos).format("YYYY-MM-DD")

  /*** FECHAS DESTILERIA ***/
  const dataEditInicioDestileria = new Date(
    dataRegisterEdit?.inicio_destileria
  );
  const dataInicioConvertidoDestileria = moment(
    dataEditInicioDestileria
  ).format("YYYY-MM-DD");

  const dataEditFinDestileria = new Date(dataRegisterEdit?.fin_destileria);
  const dataFinConvertidoDestileria = moment(dataEditFinDestileria).format(
    "YYYY-MM-DD"
  );

  /*** FECHAS ANHIDRO ***/
  const dataEditInicioAnhidro = new Date(dataRegisterEdit?.inicio_anhidro);
  const dataInicioConvertidoAnhidro = moment(dataEditInicioAnhidro).format(
    "YYYY-MM-DD"
  );

  const dataEditFinAnhidro = new Date(dataRegisterEdit?.fin_anhidro);
  const dataFinConvertidoAnhidro =
    moment(dataEditFinAnhidro).format("YYYY-MM-DD");

  return (
    <div className="menuContainer">
      <Form
        form={form}
        layout="vertical"
        labelCol={{
          span: 22,
        }}
        wrapperCol={{
          span: 22,
        }}
        style={{
          marginLeft: "2vh",
        }}
        onFinish={handleSubmit}
        initialValues={{
          id_anio_zafra: dataRegisterEdit?.anio_zafra,
          id_nombre_ingenio: dataRegisterEdit?.nombre_ingenio,
        }}
      >
        <Row>
          <Col xs={24} sm={11}>
            <Form.Item
              label="Año"
              name="id_anio_zafra"
              style={{ width: "100%" }}
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
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={11}>
            <Form.Item
              label="Ingenio"
              name="id_nombre_ingenio"
              style={{ width: "100%" }}
              rules={[{ required: true, message: "Debe ingresar un ingenio" }]}
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
                options={optionsIngenios}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={7}>
            <p className="mb-1">Inicio zafra</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date "
              type="date"
              defaultValue={`${dataInicioConvertido}`}
              onChange={changeDataInicio}
            />
          </Col>
          <Col xs={24} sm={7}>
            <p className="mb-1">Fin zafra</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date "
              type="date"
              defaultValue={`${dataFinConvertido}`}
              onChange={changeFinInicio}
            />
          </Col>
          <Col xs={24} sm={7}>
            <p className="mb-1">Final de datos</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date "
              type="date"
              defaultValue={`${dataFinalDatosConvertido}`}
              onChange={changeFinalDatos}
            />
          </Col>
        </Row>

        <Row className="my-4">
          <Col xs={24} sm={11}>
            <p className="mb-1">Inicio destileria</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date"
              type="date"
              defaultValue={`${dataInicioConvertidoDestileria}`}
              onChange={changeInicioDestileria}
            />
          </Col>
          <Col xs={24} sm={11}>
            <p className="mb-1">Fin destileria</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date"
              type="date"
              defaultValue={`${dataFinConvertidoDestileria}`}
              onChange={changeFinDestileria}
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Col xs={24} sm={11}>
            <p className="mb-1">Inicio anhidro</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date"
              type="date"
              defaultValue={`${dataInicioConvertidoAnhidro}`}
              onChange={changeInicioAnhidro}
            />
          </Col>
          <Col xs={24} sm={11}>
            <p className="mb-1">Fin anhidro</p>
            <input
              className="p-1 bg-white text-dark border border-1 input-date"
              type="date"
              defaultValue={`${dataFinConvertidoAnhidro}`}
              onChange={changeFinAnhidro}
            />
          </Col>
        </Row>
        <Form.Item
          className="text-end mt-5"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 21 }}
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
          ? messageError.map((e, i) => (
              <MsgError key={i} text2={e.path} text1={e.msg} />
            ))
          : null}
        {dataErrorPK && <MsgError text1={"Error"} text2={errorPKDuplicate} />}
        {serverError ? <MsgError text2="Server internal Error" /> : null}
      </Form>
    </div>
  );
};
export default FormAddEditPeriodos;
