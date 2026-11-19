import { Table } from "antd";
// import './listadoDatos.css'

const ListadoDatos = ({ columns, scroll, data }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        locale={{ emptyText: "Sin registros" }}
        style={{
          fontSize: 10,
        }}
        rowKey={(record) => `${record?.fechaParte} ${record?.ingenioNombre} ${record?.id} ${record?.anio} ${record?.identificadorDeclaracion}`}

        size="small"
        pagination={{ defaultPageSize: "1000", hideOnSinglePage: true }}
      />
    </>
  );
};
export default ListadoDatos;
