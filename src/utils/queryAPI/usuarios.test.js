jest.mock("../api", () => ({
  api: jest.fn(),
}));

import { api } from "../api";
import {
  actualizarUsuario,
  crearUsuario,
  deshabilitarUsuario,
  eliminarUsuario,
  getUsuarios,
  getUsuariosById,
  habilitarUsuario,
} from "./usuarios";

const token = "token-test";

beforeEach(() => {
  api.mockReset();
});

test("getUsuarios devuelve data solo con status 200", async () => {
  api.mockResolvedValue({ status: 200, data: [{ id: 1, usuario: "juan" }] });
  await expect(getUsuarios(token)).resolves.toEqual([{ id: 1, usuario: "juan" }]);
  expect(api).toHaveBeenCalledWith("GET", "usuarios/allUser", "", token);
});

test("getUsuarios no retorna data si el status no es 200", async () => {
  api.mockResolvedValue({ status: 500 });
  await expect(getUsuarios(token)).resolves.toBeUndefined();
});

test("getUsuariosById llama el endpoint con id", async () => {
  api.mockResolvedValue({ status: 200, data: { id: 3 } });
  await expect(getUsuariosById(3, token)).resolves.toEqual({ id: 3 });
  expect(api).toHaveBeenCalledWith("GET", "usuarios/3", "", token);
});

test("crearUsuario y actualizarUsuario delegan en api", async () => {
  api.mockResolvedValue({ status: 201 });
  await crearUsuario({ usuario: "nuevo" }, token);
  expect(api).toHaveBeenCalledWith("POST", "usuarios/createUser", { usuario: "nuevo" }, token);

  api.mockResolvedValue({ status: 200 });
  await actualizarUsuario(9, { usuario: "edit" }, token);
  expect(api).toHaveBeenCalledWith("PATCH", "usuarios/9", { usuario: "edit" }, token);
});

test("eliminarUsuario, deshabilitarUsuario y habilitarUsuario usan PUT", async () => {
  api.mockResolvedValue({ status: 200 });

  await eliminarUsuario(4, token);
  expect(api).toHaveBeenCalledWith("PUT", "usuarios/delete/4", null, token);

  await deshabilitarUsuario(4, token);
  expect(api).toHaveBeenCalledWith("PUT", "usuarios/disable/4", null, token);

  await habilitarUsuario(4, token);
  expect(api).toHaveBeenCalledWith("PUT", "usuarios/restore/4", null, token);
});
