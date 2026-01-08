import Filtros from "../../components/Filtros";
import ReportesComparativoZafras from "../../components/Graficas/TabsComparativoZafrasFinales/ReporteComparativoZafra";
import GraficasLinealComponent from "../../components/Graficas/TabsGraficasPeriodos/GraficaLineal";

export const itemsRportes = (props = {}) => {
    const {
        anioZafra,
        setAnioZafra,
        setDatePeriodoStart,
        setDatePeriodoEnd,
        setIngenio,
        setAnioStart,
        setAnioEnd,
        setItemsComaprativosZafra,
        setRegion,
        dataZafraGraficaFilter,
        dataDestilacionGraficaFilter,
        dataAnhidroGraficaFilter,
        dataZafraGraficaNorteFilter,
        dataDestilacionGraficaNorteFilter,
        dataAnhidroGraficaNorteFilter,
        ingenio,
        datePeriodoStart,
        datePeriodoEnd,
        periodosAnioStart,
        periodosAnioEnd,
        dataAnioStartZafraTucuman,
        dataAnioStartDestileriaTucuman,
        dataAnioStartAnhidroTucuman,
        dataAnioEndZafraTucuman,
        dataAnioEndDestileriaTucuman,
        dataAnioEndAnhidroTucuman,
        dataAnioStartZafraNorte,
        dataAnioStartDestileriaNorte,
        dataAnioStartAnhidroNorte,
        dataAnioEndZafraNorte,
        dataAnioEndDestileriaNorte,
        dataAnioEndAnhidroNorte,
        anioStart,
        anioEnd,
        itemsComaprativosZafra,
        region,
        dataUserRegister,
        routeAPI,

    } = props;
    console.log(anioZafra)
    return [
        {
            key: '1',
            label: 'Gráficos por periodo',
            children: (
                <>
                    <Filtros
                        bandTitlePrincipal={true} // HABILITA TITULO PRINCIPAL
                        dataZafra={anioZafra}
                        setDataZafra={setAnioZafra}
                        setDatePeriodoStart={setDatePeriodoStart}
                        setDatePeriodoEnd={setDatePeriodoEnd}
                        setIngenio={setIngenio}
                        setRegion={setRegion}
                        bandFilterZafraAnio={true}
                        bandFilterPeriodo={true}
                        bandFilterIngenio={true}
                        bandFilterIngenioRegion={null}
                        fixedComponent={true}
                        bandFilterRegion={true}
                        zafraOpcionTodos={false}
                    />

                    <GraficasLinealComponent
                        dataZafraGrafica={dataZafraGraficaFilter}
                        dataDestilacionGrafica={dataDestilacionGraficaFilter}
                        dataAnhidroGrafica={dataAnhidroGraficaFilter}
                        dataZafraGraficaNorte={dataZafraGraficaNorteFilter}
                        dataDestilacionGraficaNorte={dataDestilacionGraficaNorteFilter}
                        dataAnhidroGraficaNorte={dataAnhidroGraficaNorteFilter}
                        dataUserRegister={dataUserRegister}
                        ingenio={ingenio}
                        datePeriodoStart={datePeriodoStart}
                        datePeriodoEnd={datePeriodoEnd}
                        routeAPI={routeAPI}
                        region={region}
                    />
                </>
            ),
        },
        {
            key: '2',
            label: 'Comparativo zafras',
            children: (
                <>
                    <Filtros
                        setAnioStart={setAnioStart}
                        setAnioEnd={setAnioEnd}
                        setItemsComaprativosZafra={setItemsComaprativosZafra}
                        setRegion={setRegion}
                        bandFilterPeriodoAnios={true}
                        bandFilterItemsComparativoFinal={true}
                        bandFilterRegion={true}
                    />

                    <ReportesComparativoZafras
                        periodosAnioStart={periodosAnioStart}
                        periodosAnioEnd={periodosAnioEnd}
                        dataAnioStartZafraTucuman={dataAnioStartZafraTucuman}
                        dataAnioStartDestileriaTucuman={dataAnioStartDestileriaTucuman}
                        dataAnioStartAnhidroTucuman={dataAnioStartAnhidroTucuman}
                        dataAnioEndZafraTucuman={dataAnioEndZafraTucuman}
                        dataAnioEndDestileriaTucuman={dataAnioEndDestileriaTucuman}
                        dataAnioEndAnhidroTucuman={dataAnioEndAnhidroTucuman}
                        dataAnioStartZafraNorte={dataAnioStartZafraNorte}
                        dataAnioStartDestileriaNorte={dataAnioStartDestileriaNorte}
                        dataAnioStartAnhidroNorte={dataAnioStartAnhidroNorte}
                        dataAnioEndZafraNorte={dataAnioEndZafraNorte}
                        dataAnioEndDestileriaNorte={dataAnioEndDestileriaNorte}
                        dataAnioEndAnhidroNorte={dataAnioEndAnhidroNorte}
                        anioStart={anioStart}
                        anioEnd={anioEnd}
                        itemsComaprativosZafra={itemsComaprativosZafra}
                        dataUserRegister={dataUserRegister}
                        routeAPI={routeAPI}
                        region={region}
                    />
                </>
            ),
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];
} 