import { estimacionPorRegion, sumarPanelNorte } from "./panelRegion";

test("suma caña, azúcar y alcohol de los cinco ingenios del norte", () => {
  const norte = sumarPanelNorte(
    { E44: 100, G44: 10, Z44: 4, V44: 3, W44: 2, X44: 1, Y44: 1, N44: 20, P44: 5 },
    { E45: 200, G45: 20, Z45: 8, V45: 6, W45: 4, X45: 2, Y45: 1, N45: 30, P45: 7 },
    { E46: 0, G46: 0, Z46: 0, V46: 0, W46: 0, X46: 0, Y46: 0, N46: 0, P46: 0 },
    {},
    null
  );

  expect(norte.cmb).toBe(300);
  expect(norte.azucarEquivalente).toBe(30);
  expect(norte.azucarCrudo).toBe(12);
  expect(norte.azucarBlancoA).toBe(9);
  expect(norte.azucarRefinado).toBe(6);
  expect(norte.azucarOrganico).toBe(3);
  expect(norte.azucar).toBe(32);
  expect(norte.alcohol).toBe(50);
  expect(norte.alcoholAnhidro).toBe(12);
});

test("toma la estimación de la región pedida", () => {
  const datos = [
    { anio_zafra: 2026, id_region_ingenios: 1, estimacion_EEAOC: 4000 },
    { anio_zafra: 2026, id_region_ingenios: 2, estimacion_EEAOC: 1500 },
    { anio_zafra: 2025, id_region_ingenios: 2, estimacion_EEAOC: 900 },
  ];

  expect(estimacionPorRegion(datos, 2026, 1)).toBe(4000);
  expect(estimacionPorRegion(datos, 2026, 2)).toBe(1500);
  expect(estimacionPorRegion(datos, 2024, 2)).toBe(0);
});
