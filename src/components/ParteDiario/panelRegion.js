const numero = (valor) => Number(valor) || 0;

const sumarCampos = (ingenios, campos) =>
  ingenios.reduce(
    (total, ingenio, indice) => total + numero(ingenio?.[campos[indice]]),
    0
  );

export const sumarPanelNorte = (n1, n2, n3, n4, n5) => {
  const ingenios = [n1, n2, n3, n4, n5];
  const azucarCrudo = sumarCampos(ingenios, ["Z44", "Z45", "Z46", "Z47", "Z48"]);
  const azucarBlancoA = sumarCampos(ingenios, ["V44", "V45", "V46", "V47", "V48"]);
  const azucarRefinado = sumarCampos(ingenios, ["W44", "W45", "W46", "W47", "W48"]);
  const azucarOrganico = sumarCampos(ingenios, ["X44", "X45", "X46", "X47", "X48"]);
  const azucarOtros = sumarCampos(ingenios, ["Y44", "Y45", "Y46", "Y47", "Y48"]);

  return {
    cmb: sumarCampos(ingenios, ["E44", "E45", "E46", "E47", "E48"]),
    azucarEquivalente: sumarCampos(ingenios, ["G44", "G45", "G46", "G47", "G48"]),
    azucarCrudo,
    azucarBlancoA,
    azucarRefinado,
    azucarOrganico,
    azucar: azucarCrudo + azucarBlancoA + azucarRefinado + azucarOrganico + azucarOtros,
    alcohol: sumarCampos(ingenios, ["N44", "N45", "N46", "N47", "N48"]),
    alcoholAnhidro: sumarCampos(ingenios, ["P44", "P45", "P46", "P47", "P48"]),
  };
};

export const estimacionPorRegion = (dataComparativa, anio, regionId) => {
  const registro = dataComparativa?.find(
    (item) => item.anio_zafra === anio && item.id_region_ingenios === regionId
  );
  return numero(registro?.estimacion_EEAOC);
};
