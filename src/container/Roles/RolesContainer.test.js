import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../../utils/api", () => ({
  api: jest.fn(),
  apiParams: jest.fn(),
}));

jest.mock("../../components/Filtros", () => () => <div data-testid="filtros" />);

jest.mock("../../utils/queryAPI/roles", () => ({
  getRoles: jest.fn(),
  crearRol: jest.fn(),
  actualizarRol: jest.fn(),
  eliminarRol: jest.fn(),
}));

jest.mock("../../utils/queryAPI/permisos", () => ({
  getPermisos: jest.fn(),
}));

jest.mock("../../utils/queryAPI/rolesPermisos", () => ({
  getRolesPermisos: jest.fn(),
  asignarRolPermiso: jest.fn(),
}));


import { message } from "antd";
import RolesContainer from "./RolesContainer";
import { actualizarRol, eliminarRol, getRoles } from "../../utils/queryAPI/roles";
import { getPermisos } from "../../utils/queryAPI/permisos";
import { getRolesPermisos } from "../../utils/queryAPI/rolesPermisos";

const token = "token-test";


const rolesMock = [
  { id: 1, nombre_rol: "Administrador" },
  { id: 2, nombre_rol: "Operador" },
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
  getRoles.mockResolvedValue(rolesMock);
  getPermisos.mockResolvedValue([{ id: 10, nombre_permiso: "usuarios.ver" }]);
  getRolesPermisos.mockResolvedValue([]);
  eliminarRol.mockResolvedValue({ status: 200 });
  actualizarRol.mockResolvedValue({ status: 200 });
});


test("lista roles y deshabilita editar/eliminar de Administrador", async () => {
  render(<RolesContainer tokenAuth={token} />);
  expect(await screen.findByText("Administrador")).toBeInTheDocument();
  expect(screen.getByText("Operador")).toBeInTheDocument();

  const filaAdmin = screen.getByText("Administrador").closest("tr");
  expect(within(filaAdmin).getByTitle("Editar nombre")).toBeDisabled();
  expect(within(filaAdmin).getByTitle("Eliminar")).toBeDisabled();

  const filaOp = screen.getByText("Operador").closest("tr");
  expect(within(filaOp).getByTitle("Editar nombre")).not.toBeDisabled();
  expect(within(filaOp).getByTitle("Eliminar")).not.toBeDisabled();
});

test("edita el nombre de un rol", async () => {
  render(<RolesContainer tokenAuth={token} />);
  await screen.findByText("Operador");

  const fila = screen.getByText("Operador").closest("tr");
  await userEvent.click(within(fila).getByTitle("Editar nombre"));

  expect(await screen.findByText("Editar rol")).toBeInTheDocument();
  const input = screen.getByPlaceholderText("Nombre del rol");
  await userEvent.clear(input);
  await userEvent.type(input, "Consulta");
  await userEvent.click(screen.getByRole("button", { name: "Guardar" }));

  await waitFor(() => {
    expect(actualizarRol).toHaveBeenCalledWith(2, { nombre_rol: "Consulta" }, token);
  });
});

test("confirma eliminar rol y llama eliminarRol", async () => {
  render(<RolesContainer tokenAuth={token} />);
  await screen.findByText("Operador");

  const fila = screen.getByText("Operador").closest("tr");
  await userEvent.click(within(fila).getByTitle("Eliminar"));

  expect(await screen.findByText("Eliminar rol")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));

  await waitFor(() => {
    expect(eliminarRol).toHaveBeenCalledWith(2, token);
  });
});
