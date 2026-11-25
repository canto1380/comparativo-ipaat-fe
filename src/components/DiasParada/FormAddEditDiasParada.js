import { Form, Select, Spin, Button, Row, Col, InputNumber } from "antd";
import { useContext, useEffect, useState, useRef } from "react";
import { User } from "../../context/UserProvider";
import { ingenioFijo } from "../../utils/permisos";
import { api } from "../../utils/api";
import MsgError from "../Messages/MsgError";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";

const FormAddEditDiasParada = ({
  dataRegisterEdit,
  aniosData,
  ingeniosData,
  periodosData,
}) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [dataErrorPK, setDataErrorPK] = useState(false);
  const [errorPKDuplicate, setErrorPKDuplicate] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [diaParada, setDiaParada] = useState(dataRegisterEdit?.dia);
  const [horasParadas, setHorasParadas] = useState(
    dataRegisterEdit?.horas_paradas
  );
  const [porcentaje, setPorcentaje] = useState(
    dataRegisterEdit?.porcentaje_parada 
  );
  const { form } = Form.useForm();
  const { dataUser } = useContext(User);
  const idIngenioFijo = ingenioFijo(dataUser);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Establecer el foco en el input
    }
  }, []);

  const handleReset = () => {
    form.resetFields();
  };
  const changeDataDia = (e) => {
    setDiaParada(e.target.value);
  };
  const changeHoras = (e) => {
    setHorasParadas(e);
  };
  useEffect(() => {
    setPorcentaje((horasParadas / 24) * 100);
  }, [horasParadas]);

  const handleSubmit = async (values) => {
    try {
      if (!dataRegisterEdit) {
        createDiaParada(values);
      } else {
        updateDiaParada(values);
      }
    } catch (error) {
      handleReset();
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };
  const createDiaParada = async (values) => {
    const idPeriodo = periodosData.filter(
      (d) =>
        d.id_anio_zafra === values.id_anio_zafra &&
        d.id_nombre_ingenio === values.id_nombre_ingenio
    );
    values.id_periodo_zafra = idPeriodo[0].id;
    values.dia = diaParada;
    values.porcentaje_parada = porcentaje;
    const res = await api("POST", "diaParada", values);
    if (res.status === 201) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/admin/dias-parada";
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
  };
  const updateDiaParada = async (values) => {
    const dateConverted = moment(diaParada).format("YYYY-MM-DD")

    values.id_periodo_zafra = dataRegisterEdit.id_periodo_zafra;
    values.dia = dateConverted;
    values.porcentaje_parada = porcentaje;
    const res = await api("PATCH", `diaParada/${dataRegisterEdit?.id}`, values);
    if (res.status === 200) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/admin/dias-parada";
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
  };

  let optionsAnios = [];
  aniosData.forEach((d) => {
    const option = {
      value: d.id,
      label: d.anio_zafra,
    };
    optionsAnios.push(option);
  });
  let optionsIngenios = idIngenioFijo ? [] : [{ value: "", label: "Todos" }];
  const ingeniosVisibles = idIngenioFijo
    ? ingeniosData?.filter((d) => Number(d.id) === idIngenioFijo)
    : ingeniosData;
  ingeniosVisibles?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.nombre_ingenio,
    };
    optionsIngenios.push(option);
  });

  const onFinishFailed = (errorInfo) => {
    return errorInfo
  };

  const dataEditInicio = new Date(dataRegisterEdit?.dia);
  const dataInicioConvertido = moment(dataEditInicio).format("YYYY-MM-DD");
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
        onFinishFailed={onFinishFailed}
        initialValues={{
          id_anio_zafra: dataRegisterEdit?.anio_zafra,
          id_nombre_ingenio: dataRegisterEdit?.nombre_ingenio ?? idIngenioFijo ?? undefined,
          horas_paradas: dataRegisterEdit?.horas_paradas,
          motivo: dataRegisterEdit?.motivo,
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
                ref={inputRef}
                showSearch
                style={{
                  width: "100%",
                }}
                placeholder="Busque o seleccione"
                disabled={dataRegisterEdit ? true : false}
                optionFilterProp="label"
                // filterOption={(input, option) =>
                //   (option?.label ?? "").includes(input)
                // }
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
                disabled={Boolean(dataRegisterEdit) || Boolean(idIngenioFijo)}
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
            <span className="text-danger fw-bolder">* </span>
            <span className="">Día de parada</span>
            <input
              className="p-1 bg-white text-dark border border-1 input-date mt-2"
              type="date"
              defaultValue={`${dataInicioConvertido}`}
              onChange={changeDataDia}
            />
          </Col>
          <Col xs={24} sm={7}>
            <Form.Item
              label="Hs. parada"
              name="horas_paradas"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  message: "Debe ingresar una cantidad de horas",
                },
              ]}
            >
              <InputNumber
                min={1}
                max={24}
                placeholder="Horas"
                style={{ width: "100%" }}
                onChange={changeHoras}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={7}>
            <p className="mb-2">Porcentaje (%)</p>
            <input
              disabled={true}
              className="p-1 bg-white text-dark border border-1 input-date "
              type="number"
              value={porcentaje?.toFixed(2)}
              defaultValue={`${dataRegisterEdit?.porcentaje_parada}`}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={23}>
            <Form.Item
              label="Motivo parada"
              name="motivo"
              style={{ width: "100%" }}
            >
              <TextArea rows={4} />
            </Form.Item>
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
export default FormAddEditDiasParada;
