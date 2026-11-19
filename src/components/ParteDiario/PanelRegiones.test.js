import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PanelRegiones from "./PanelRegiones";

const comparativa = [
  { anio_zafra: 2026, id_region_ingenios: 1, estimacion_EEAOC: 4000 },
  { anio_zafra: 2026, id_region_ingenios: 2, estimacion_EEAOC: 2000 },
];

const props = {
  dataEnd: "2026-11-16",
  zafraParteDiario: 2026,
  dataComparativa: comparativa,
  dataDiasZafra: 148.8,
  dataDiasDestileria: 121,
  panelCMB: 1000,
  panelAzucarEquivalente: 100,
  panelAzucar: 90,
  panelAzucarCrudo: 40,
  panelAzucarBlancoA: 30,
  panelAzucarRefinado: 10,
  panelAzucarOrganico: 5,
  panelAlcohol: 8000,
  panelAlcoholAnhidro: 3000,
  dataDiasZafraNorte: 133,
  dataDiasDestileriaNorte: 140,
  n1: { E44: 500, G44: 50, Z44: 20, V44: 10, W44: 5, X44: 2, Y44: 1, N44: 70, P44: 15 },
  n2: {},
  n3: {},
  n4: {},
  n5: {},
};

test("muestra Tucumán y cambia al panel del Norte", async () => {
  render(<PanelRegiones {...props} />);

  const tucuman = screen.getByRole("tabpanel");
  expect(tucuman).toHaveTextContent("Datos hasta: 16-11-2026");
  expect(tucuman).toHaveTextContent("Días de zafra: 148");
  expect(tucuman).toHaveTextContent("Rto CMB(%): 10.00");
  expect(tucuman).toHaveTextContent("Avance de zafra(%): 25.00");
  expect(tucuman.textContent).toMatch(/1[.\s]?000 \[tn\]/);

  await userEvent.click(screen.getByRole("tab", { name: "Norte" }));

  const norte = screen.getByRole("tabpanel");
  expect(norte).toHaveTextContent("Datos hasta: 16-11-2026");
  expect(norte).toHaveTextContent("Días de zafra: 133");
  expect(norte).toHaveTextContent("Días de Destilería: 140");
  expect(norte).toHaveTextContent("Rto CMB(%): 10.00");
  expect(norte).toHaveTextContent("Avance de zafra(%): 25.00");
  expect(norte).toHaveTextContent("500 [tn]");
  expect(norte).toHaveTextContent("38 [tn]");
  expect(norte).toHaveTextContent("70 [L]");
  expect(norte).toHaveTextContent("15 [L]");
});
