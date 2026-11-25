import { render, screen, waitFor } from "@testing-library/react";
import HomeContainer from "./HomeContainer";
import { User } from "../../context/UserProvider";

jest.mock("../../context/UserProvider", () => {
  const React = require("react");
  return { User: React.createContext({ dataUser: null, state: {} }) };
});

jest.mock("../../utils/queryAPI/home", () => ({
  getHomeDashboard: jest.fn(),
}));

jest.mock("../../utils/permisos", () => ({
  tienePermiso: jest.fn(),
}));

jest.mock("../../helpers/helpers", () => ({
  getTokenLS: jest.fn(() => null),
  getRefreshToken: jest.fn(() => null),
  getDataToken: jest.fn(() => ({
    nombre: "Sesion",
    apellido: "Fallback",
    usuario: "sesion.user",
    nombre_rol: "Consulta",
  })),
}));

import { getHomeDashboard } from "../../utils/queryAPI/home";
import { tienePermiso } from "../../utils/permisos";

const token = "token-test";

const dashboardMock = {
  anioZafra: 2024,
  alcance: "general",
  usuario: {
    nombre: "Ana",
    apellido: "Perez",
    usuario: "aperez",
    nombre_rol: "Operador",
    nombre_ingenio: null,
  },
  estadisticas: {
    hasta: "2024-06-15",
    diasZafra: 40.7,
    diasDestileria: 20,
    diasDeshidratacion: 12,
    zafraFinalizada: true,
    destileriaFinalizada: true,
    deshidratacionFinalizada: false,
    rtoCmb: 10.5,
    canaMolidaBruta: 1500000,
    azucarTotal: 120000,
    azucarCrudo: 50000,
    azucarBlanco: 40000,
    azucarRefinado: 20000,
    azucarOrganico: 10000,
    alcoholHidratado: 800000,
    alcoholAnhidro: 300000,
  },
  documentacionFaltante: {
    partesDiarios: [
      {
        ingenioId: 1,
        ingenioNombre: "Aguilares",
        detalle: "Falta parte del 10/06",
        ultimaFecha: "2024-06-09",
      },
    ],
    ddjj: [
      {
        id: 11,
        ingenioNombre: "Cruz Alta",
        estado: "Vencida",
        fechaDesde: "2024-05-01",
        fechaHasta: "2024-05-15",
      },
    ],
  },
  documentacionPendiente: [
    {
      id: 22,
      ingenioNombre: "La Florida",
      estado: "Presentada",
      fechaDesde: "2024-06-01",
      fechaHasta: "2024-06-15",
    },
  ],
};

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
  getHomeDashboard.mockResolvedValue(dashboardMock);
  tienePermiso.mockImplementation((_user, permiso) =>
    ["parte_diario.ver", "ddjj.ver"].includes(permiso)
  );
});

const renderHome = (dataUser = { nombre_rol: "Operador", permisos: [] }) =>
  render(
    <User.Provider value={{ dataUser, state: { user: dataUser } }}>
      <HomeContainer tokenAuth={token} />
    </User.Provider>
  );

test("renderiza saludo y estadísticas con getHomeDashboard", async () => {
  renderHome();

  expect(await screen.findByText(/Hola, Ana Perez/i)).toBeInTheDocument();
  expect(screen.getByText(/@aperez/)).toBeInTheDocument();
  expect(screen.getByText(/Zafra 2024/)).toBeInTheDocument();
  expect(screen.getByText("Datos hasta: 15-06-2024")).toBeInTheDocument();
  expect(screen.getByText(/Rto CMB\(%\): 10[,.]50/)).toBeInTheDocument();
  expect(getHomeDashboard).toHaveBeenCalledWith(token);
});

test("muestra días con (finalizada) según flags de zafra/destilería/deshidratación", async () => {
  renderHome();

  expect(await screen.findByText("Días de zafra: 40 (finalizada)")).toBeInTheDocument();
  expect(screen.getByText("Días de destilería: 20 (finalizada)")).toBeInTheDocument();
  expect(screen.getByText("Días de deshidratación: 12")).toBeInTheDocument();
  expect(screen.queryByText(/Días de deshidratación: 12 \(finalizada\)/)).not.toBeInTheDocument();
  expect(screen.getByText("Zafra finalizada")).toBeInTheDocument();
  expect(screen.getByText("Destilería finalizada")).toBeInTheDocument();
  expect(screen.queryByText("Deshidratación finalizada")).not.toBeInTheDocument();
});

test("renderiza tarjetas KPI con col-valores", async () => {
  const { container } = renderHome();

  await screen.findByText(/Hola, Ana Perez/i);
  await waitFor(() => {
    expect(screen.getByText("1.500.000 [tn]")).toBeInTheDocument();
  });
  const tarjetas = container.querySelectorAll(".col-valores");
  expect(tarjetas.length).toBe(8);
  expect(screen.getByText("Azúcar Total")).toBeInTheDocument();
  expect(screen.getByText("Alcohol Anhidro")).toBeInTheDocument();
  expect(screen.getAllByText(/\[[tnL]+\]/).length).toBeGreaterThan(0);
});

test("muestra tablas de documentación faltante según permisos", async () => {
  renderHome();

  expect(await screen.findByText("Aguilares")).toBeInTheDocument();
  expect(screen.getByText("Documentación faltante — Partes diarios")).toBeInTheDocument();
  expect(screen.getByText("Documentación faltante — DDJJ")).toBeInTheDocument();
  expect(screen.getByText("Documentación pendiente de procesamiento")).toBeInTheDocument();

  expect(screen.getByText("Falta parte del 10/06")).toBeInTheDocument();
  expect(screen.getByText("09-06-2024")).toBeInTheDocument();

  expect(screen.getByText("Cruz Alta")).toBeInTheDocument();
  expect(screen.getByText("Vencida")).toBeInTheDocument();
  expect(screen.getByText("01-05-2024 → 15-05-2024")).toBeInTheDocument();

  expect(screen.getByText("La Florida")).toBeInTheDocument();
  expect(screen.getByText("Presentada")).toBeInTheDocument();

  expect(tienePermiso).toHaveBeenCalledWith(expect.anything(), "parte_diario.ver");
  expect(tienePermiso).toHaveBeenCalledWith(expect.anything(), "ddjj.ver");
});

test("oculta tablas de partes y DDJJ si no hay permisos", async () => {
  tienePermiso.mockReturnValue(false);
  renderHome();

  await screen.findByText(/Hola, Ana Perez/i);

  expect(screen.queryByText("Documentación faltante — Partes diarios")).not.toBeInTheDocument();
  expect(screen.queryByText("Documentación faltante — DDJJ")).not.toBeInTheDocument();
  expect(screen.queryByText("Documentación pendiente de procesamiento")).not.toBeInTheDocument();
});

test("muestra solo partes cuando el permiso de DDJJ está denegado", async () => {
  tienePermiso.mockImplementation((_user, permiso) => permiso === "parte_diario.ver");
  renderHome();

  expect(await screen.findByText("Aguilares")).toBeInTheDocument();
  expect(screen.getByText("Documentación faltante — Partes diarios")).toBeInTheDocument();
  expect(screen.queryByText("Documentación faltante — DDJJ")).not.toBeInTheDocument();
  expect(screen.queryByText("Documentación pendiente de procesamiento")).not.toBeInTheDocument();
  expect(screen.queryByText("Cruz Alta")).not.toBeInTheDocument();
});
