import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../../utils/api", () => ({
  api: jest.fn(),
  apiParams: jest.fn(),
}));

jest.mock("../../components/Filtros", () => () => <div data-testid="filtros" />);

jest.mock("../../utils/queryAPI/usuarios", () => ({
  getUsuarios: jest.fn(),
  crearUsuario: jest.fn(),
  actualizarUsuario: jest.fn(),
  deshabilitarUsuario: jest.fn(),
  habilitarUsuario: jest.fn(),
  eliminarUsuario: jest.fn(),
}));

jest.mock("../../utils/queryAPI/roles", () => ({
  getRoles: jest.fn(),
}));

jest.mock("../../utils/queryAPI/ingenios", () => ({
  getIngenios: jest.fn(),
}));

jest.mock("../../utils/queryAPI/tipoDocumento", () => ({
  getTiposDocumento: jest.fn(),
}));


import { message } from "antd";
import UsuariosContainer from "./UsuariosContainer";
import {
  deshabilitarUsuario,
  eliminarUsuario,
  getUsuarios,
  habilitarUsuario,
} from "../../utils/queryAPI/usuarios";
import { getRoles } from "../../utils/queryAPI/roles";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { getTiposDocumento } from "../../utils/queryAPI/tipoDocumento";

const token = "token-test";


const usuariosMock = [
  {
    id: 1,
    usuario: "activo1",
    nombre: "Ana",
    apellido: "Perez",
    nombre_rol: "Operador",
    nombre_ingenio: "Aguilares",
    id_role: 2,
    id_ingenio: 1,
    activo: 1,
  },
  {
    id: 2,
    usuario: "inactivo2",
    nombre: "Luis",
    apellido: "Gomez",
    nombre_rol: "Consulta",
    nombre_ingenio: null,
    id_role: 3,
    id_ingenio: null,
    activo: 0,
  },
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
  getUsuarios.mockResolvedValue(usuariosMock);
  getRoles.mockResolvedValue([{ id: 2, nombre_rol: "Operador" }]);
  getIngenios.mockResolvedValue([{ id: 1, nombre_ingenio: "Aguilares" }]);
  getTiposDocumento.mockResolvedValue([{ id: 1, tipo_documento: "DNI" }]);
  deshabilitarUsuario.mockResolvedValue({ status: 200 });
  habilitarUsuario.mockResolvedValue({ status: 200 });
  eliminarUsuario.mockResolvedValue({ status: 200 });
});


const renderContainer = () => render(<UsuariosContainer tokenAuth={token} />);

test("lista usuarios y muestra estados Activo y Deshabilitado", async () => {
  renderContainer();
  expect(await screen.findByText("activo1")).toBeInTheDocument();
  expect(screen.getByText("inactivo2")).toBeInTheDocument();
  expect(screen.getByText("Activo")).toBeInTheDocument();
  expect(screen.getByText("Deshabilitado")).toBeInTheDocument();
  expect(getUsuarios).toHaveBeenCalledWith(token);
});

test("abre modal de edición al pulsar Editar", async () => {
  renderContainer();
  await screen.findByText("activo1");

  const fila = screen.getByText("activo1").closest("tr");
  await userEvent.click(within(fila).getByTitle("Editar"));

  expect(await screen.findByText("Editar usuario")).toBeInTheDocument();
  expect(screen.getByDisplayValue("activo1")).toBeInTheDocument();
});

test("confirma deshabilitar y llama deshabilitarUsuario", async () => {
  renderContainer();
  await screen.findByText("activo1");

  const fila = screen.getByText("activo1").closest("tr");
  await userEvent.click(within(fila).getByTitle("Deshabilitar"));

  expect(await screen.findByText("Deshabilitar usuario")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Deshabilitar" }));

  await waitFor(() => {
    expect(deshabilitarUsuario).toHaveBeenCalledWith(1, token);
  });
});

test("confirma habilitar y llama habilitarUsuario", async () => {
  renderContainer();
  await screen.findByText("inactivo2");

  const fila = screen.getByText("inactivo2").closest("tr");
  await userEvent.click(within(fila).getByTitle("Habilitar"));

  expect(await screen.findByText("Habilitar usuario")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Habilitar" }));

  await waitFor(() => {
    expect(habilitarUsuario).toHaveBeenCalledWith(2, token);
  });
});

test("confirma eliminar y llama eliminarUsuario", async () => {
  renderContainer();
  await screen.findByText("activo1");

  const fila = screen.getByText("activo1").closest("tr");
  await userEvent.click(within(fila).getByTitle("Eliminar"));

  expect(await screen.findByText("Eliminar usuario")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));

  await waitFor(() => {
    expect(eliminarUsuario).toHaveBeenCalledWith(1, token);
  });
});
