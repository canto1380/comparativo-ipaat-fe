import { ConfigProvider, Tabs } from "antd";
import PanelResumenRegion from "./PanelResumenRegion";
import { estimacionPorRegion, sumarPanelNorte } from "./panelRegion";

const PanelRegiones = ({
  dataEnd,
  zafraParteDiario,
  dataComparativa,
  dataDiasZafra,
  dataDiasDestileria,
  panelCMB,
  panelAzucarEquivalente,
  panelAzucar,
  panelAzucarCrudo,
  panelAzucarBlancoA,
  panelAzucarRefinado,
  panelAzucarOrganico,
  panelAlcohol,
  panelAlcoholAnhidro,
  dataDiasZafraNorte,
  dataDiasDestileriaNorte,
  n1,
  n2,
  n3,
  n4,
  n5,
}) => {
  const norte = sumarPanelNorte(n1, n2, n3, n4, n5);
  const estimacionTucuman = estimacionPorRegion(dataComparativa, zafraParteDiario, 1);
  const estimacionNorte = estimacionPorRegion(dataComparativa, zafraParteDiario, 2);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#011a4b" } }}>
      <Tabs
        className="panel-regiones"
        defaultActiveKey="tucuman"
        items={[
          {
            key: "tucuman",
            label: "Tucumán",
            children: (
              <PanelResumenRegion
                dataEnd={dataEnd}
                diasZafra={dataDiasZafra}
                diasDestileria={dataDiasDestileria}
                cmb={panelCMB}
                azucarEquivalente={panelAzucarEquivalente}
                azucar={panelAzucar}
                azucarCrudo={panelAzucarCrudo}
                azucarBlancoA={panelAzucarBlancoA}
                azucarRefinado={panelAzucarRefinado}
                azucarOrganico={panelAzucarOrganico}
                alcohol={panelAlcohol}
                alcoholAnhidro={panelAlcoholAnhidro}
                estimacion={estimacionTucuman}
              />
            ),
          },
          {
            key: "norte",
            label: "Norte",
            children: (
              <PanelResumenRegion
                dataEnd={dataEnd}
                diasZafra={dataDiasZafraNorte}
                diasDestileria={dataDiasDestileriaNorte}
                cmb={norte.cmb}
                azucarEquivalente={norte.azucarEquivalente}
                azucar={norte.azucar}
                azucarCrudo={norte.azucarCrudo}
                azucarBlancoA={norte.azucarBlancoA}
                azucarRefinado={norte.azucarRefinado}
                azucarOrganico={norte.azucarOrganico}
                alcohol={norte.alcohol}
                alcoholAnhidro={norte.alcoholAnhidro}
                estimacion={estimacionNorte}
              />
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default PanelRegiones;
