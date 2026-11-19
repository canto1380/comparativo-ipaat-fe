import { render, screen } from "@testing-library/react";
import ListadoDatos from "./ListadoDatos";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

const columns = [
  { title: "Ingenio", dataIndex: "ingenioNombre" },
  {
    title: "Fecha",
    dataIndex: "fechaParte",
    render: (date) => (date ? "01-06-2024" : null),
  },
];

const data = [
  {
    id: 1,
    ingenioNombre: "Aguilares",
    fechaParte: "2024-06-01",
    anio: "2024",
    identificadorDeclaracion: "A",
  },
];

test("muestra el ingenio y no pinta fecha nula", () => {
  const { rerender } = render(<ListadoDatos columns={columns} data={data} />);
  expect(screen.getByText("Aguilares")).toBeInTheDocument();

  rerender(
    <ListadoDatos
      columns={columns}
      data={[{ ...data[0], fechaParte: null, ingenioNombre: "Sin fecha" }]}
    />
  );
  expect(screen.getByText("Sin fecha")).toBeInTheDocument();
});

test("muestra Sin registros cuando no hay datos", () => {
  render(<ListadoDatos columns={columns} data={[]} />);
  expect(screen.getByText("Sin registros")).toBeInTheDocument();
});
