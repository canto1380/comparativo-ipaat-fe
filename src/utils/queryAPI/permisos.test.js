jest.mock("../api", () => ({
  api: jest.fn(),
}));

import { api } from "../api";
import { crearPermiso, eliminarPermiso, getPermisos } from "./permisos";

const token = "token-test";

beforeEach(() => {
  api.mockReset();
});

test("getPermisos devuelve data solo con status 200", async () => {
  api.mockResolvedValue({
    status: 200,
    data: [{ id: 1, nombre_permiso: "usuarios.ver" }],
  });
  await expect(getPermisos(token)).resolves.toEqual([
    { id: 1, nombre_permiso: "usuarios.ver" },
  ]);
  expect(api).toHaveBeenCalledWith("GET", "permisos", "", token);
});

test("getPermisos no retorna data si el status no es 200", async () => {
  api.mockResolvedValue({ status: 500 });
  await expect(getPermisos(token)).resolves.toBeUndefined();
});

test("crearPermiso hace POST a permisos", async () => {
  api.mockResolvedValue({ status: 201 });
  await crearPermiso({ nombre_permiso: "roles.editar" }, token);
  expect(api).toHaveBeenCalledWith(
    "POST",
    "permisos",
    { nombre_permiso: "roles.editar" },
    token
  );
});

test("eliminarPermiso hace DELETE con id", async () => {
  api.mockResolvedValue({ status: 200 });
  await eliminarPermiso(8, token);
  expect(api).toHaveBeenCalledWith("DELETE", "permisos/8", null, token);
});
