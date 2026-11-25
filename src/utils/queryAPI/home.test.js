jest.mock("../api", () => ({
  api: jest.fn(),
}));

import { api } from "../api";
import { getHomeDashboard } from "./home";

const token = "token-test";

beforeEach(() => {
  api.mockReset();
});

test("getHomeDashboard devuelve data solo con status 200", async () => {
  const data = { anioZafra: 2024, estadisticas: { diasZafra: 10 } };
  api.mockResolvedValue({ status: 200, data });
  await expect(getHomeDashboard(token)).resolves.toEqual(data);
  expect(api).toHaveBeenCalledWith("GET", "home/dashboard", "", token);
});

test("getHomeDashboard no retorna data si el status no es 200", async () => {
  api.mockResolvedValue({ status: 500 });
  await expect(getHomeDashboard(token)).resolves.toBeUndefined();
});
