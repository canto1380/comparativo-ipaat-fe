jest.mock("../api", () => ({
  api: jest.fn(),
}));

import { api } from "../api";
import { actualizarRol, crearRol, eliminarRol, getRoles } from "./roles";

const token = "token-test";

beforeEach(() => {
  api.mockReset();
});

test("getRoles devuelve data solo con status 200", async () => {
  api.mockResolvedValue({ status: 200, data: [{ id: 1, nombre_rol: "Operador" }] });
  await expect(getRoles(token)).resolves.toEqual([{ id: 1, nombre_rol: "Operador" }]);
  expect(api).toHaveBeenCalledWith("GET", "roles", "", token);
});

test("getRoles no retorna data si el status no es 200", async () => {
  api.mockResolvedValue({ status: 403 });
  await expect(getRoles(token)).resolves.toBeUndefined();
});

test("crearRol hace POST a roles", async () => {
  api.mockResolvedValue({ status: 201 });
  await crearRol({ nombre_rol: "Consulta" }, token);
  expect(api).toHaveBeenCalledWith("POST", "roles", { nombre_rol: "Consulta" }, token);
});

test("actualizarRol hace PATCH con id", async () => {
  api.mockResolvedValue({ status: 200 });
  await actualizarRol(12, { nombre_rol: "Consulta" }, token);
  expect(api).toHaveBeenCalledWith("PATCH", "roles/12", { nombre_rol: "Consulta" }, token);
});

test("eliminarRol hace DELETE con id", async () => {
  api.mockResolvedValue({ status: 200 });
  await eliminarRol(12, token);
  expect(api).toHaveBeenCalledWith("DELETE", "roles/12", null, token);
});
