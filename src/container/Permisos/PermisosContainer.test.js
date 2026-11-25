import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../../utils/api", () => ({
  api: jest.fn(),
  apiParams: jest.fn(),
}));

jest.mock("../../components/Filtros", () => () => <div data-testid="filtros" />);

jest.mock("../../utils/queryAPI/permisos", () => ({
  getPermisos: jest.fn(),
  crearPermiso: jest.fn(),
  eliminarPermiso: jest.fn(),
}));


import { message } from "antd";
import PermisosContainer from "./PermisosContainer";
import { eliminarPermiso, getPermisos } from "../../utils/queryAPI/permisos";

const token = "token-test";


const permisosMock = [
  { id: 5, nombre_permiso: "usuarios.ver", descripcion: "Ver usuarios" },
  { id: 6, nombre_permiso: "roles.editar", descripcion: "Editar roles" },
];

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

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(message, "success").mockImplementation(() => {});
  jest.spyOn(message, "error").mockImplementation(() => {});
  getPermisos.mockResolvedValue(permisosMock);
  eliminarPermiso.mockResolvedValue({ status: 200 });
});


test("lista permisos cargados", async () => {
  render(<PermisosContainer tokenAuth={token} />);
  expect(await screen.findByText("usuarios.ver")).toBeInTheDocument();
  expect(screen.getByText("roles.editar")).toBeInTheDocument();
  expect(getPermisos).toHaveBeenCalledWith(token);
});

test("confirma eliminar permiso y llama eliminarPermiso", async () => {
  render(<PermisosContainer tokenAuth={token} />);
  await screen.findByText("usuarios.ver");

  const fila = screen.getByText("usuarios.ver").closest("tr");
  await userEvent.click(within(fila).getByTitle("Eliminar"));

  expect(await screen.findByText("Eliminar permiso")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));

  await waitFor(() => {
    expect(eliminarPermiso).toHaveBeenCalledWith(5, token);
  });
});
