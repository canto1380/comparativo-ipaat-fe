import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Col, Container, Row } from 'react-bootstrap';
import '../graficas.css'
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import GraficaLinealComponent from './GraficaLinealComponent';
import moment from 'moment';
import { apiExportExcel } from '../../../utils/apiExportExcel';
import { Button, message } from 'antd';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    // backgroundPlugin
);

const GraficasLinealComponent = ({
    dataZafraGrafica,
    dataDestilacionGrafica,
    dataAnhidroGrafica,
    dataZafraGraficaNorte,
    dataDestilacionGraficaNorte,
    dataAnhidroGraficaNorte,
    dataUserRegister,
    ingenio,
    datePeriodoStart,
    datePeriodoEnd,
    routeAPI,
    region,
    anhidroLealesSinDeclarar,
    anhidroBellaVistaSinDeclarar,
    anhidroConcepcionSinDeclarar,
}) => {
    const graficasRefs = useRef([]); // guardamos refs a los componentes hijos
    const [graficasSeleccionadas, setGraficasSeleccionadas] = useState([]);

    const regionId = !region || region === 'Todos'
        ? 'Todos'
        : typeof region === 'string'
            ? parseInt(region, 10)
            : region;

    const mostrarTucuman = regionId === 'Todos' || regionId === undefined || regionId === 1;
    const mostrarNorte = regionId === 'Todos' || regionId === undefined || regionId === 2;

    const registrosZafra = [
        ...(mostrarTucuman && Array.isArray(dataZafraGrafica) ? dataZafraGrafica : []),
        ...(mostrarNorte && Array.isArray(dataZafraGraficaNorte) ? dataZafraGraficaNorte : []),
    ];
    const registrosDestilacion = [
        ...(mostrarTucuman && Array.isArray(dataDestilacionGrafica) ? dataDestilacionGrafica : []),
        ...(mostrarNorte && Array.isArray(dataDestilacionGraficaNorte) ? dataDestilacionGraficaNorte : []),
    ];
    const registrosAnhidro = [
        ...(mostrarTucuman && Array.isArray(dataAnhidroGrafica) ? dataAnhidroGrafica : []),
        ...(mostrarNorte && Array.isArray(dataAnhidroGraficaNorte) ? dataAnhidroGraficaNorte : []),
    ];

    /**** PROCESAMIENTO DE DATOS DE ZAFRA ****/
    // Agrupar por fecha y sumar todas las métricas
    const agrupadoPorFechaZafra = registrosZafra.reduce((acc, r) => {
        const fecha = new Date(r.fechaParte).toLocaleDateString("es-AR");

        if (!acc[fecha]) {
            acc[fecha] = {
                moliendaCanaBruta: 0,
                moliendaCanaNeta: 0,
                azucarBlanco: 0,
                azucarCrudo: 0,
                azucarEquivalente: 0,
                azucarOrganico: 0,
                azucarRefinado: 0,
                azucarTotal: 0,
                otroAzucar: 0,
                rendimientoCanaBruta: 0,
                rendimientoCanaNeta: 0,
            };
        }

        acc[fecha].moliendaCanaBruta += Number(r?.moliendaCanaBruta || 0);
        acc[fecha].moliendaCanaNeta += Number(r?.moliendaCanaNeta || 0);
        acc[fecha].azucarBlanco += Number(r?.azucarBlancoProducido || 0);
        if (r.ingenioNombre === 'Ledesma') {
            acc[fecha].azucarCrudo += Number(r?.azucarCrudoProducido < 0 ? r?.azucarRefinado - r?.otroAzucar : r?.azucarCrudoProducido - r?.azucarRefinado - r?.otroAzucar);
        } else {
            acc[fecha].azucarCrudo += Number(r?.azucarCrudoProducido || 0);
        }
        acc[fecha].azucarEquivalente += Number(r?.azucarEquivalente || 0);
        acc[fecha].azucarOrganico += Number(r?.azucarOrganico || 0);
        acc[fecha].azucarRefinado += Number(r?.azucarRefinado || 0);
        acc[fecha].azucarTotal += Number(r?.azucarTotal || 0);
        acc[fecha].otroAzucar += Number(r?.otroAzucar || 0);
        // acc[fecha].rendimientoCanaBruta += Number(r?.rendimientoCanaBruta || 0);
        acc[fecha].rendimientoCanaBruta = acc[fecha].azucarEquivalente / acc[fecha].moliendaCanaBruta * 100
        acc[fecha].rendimientoCanaNeta = acc[fecha].azucarEquivalente / acc[fecha].moliendaCanaNeta * 100
        return acc;
    }, {});

    // Ordenar las fechas
    const fechasOrdenadas = Object.keys(agrupadoPorFechaZafra).sort(
        (a, b) => new Date(a) - new Date(b)
    );

    // Labels
    const labelsZafra = fechasOrdenadas;
    // Series
    const serieCanaMolidaBruta = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].moliendaCanaBruta);
    const serieMoliendaCanaNeta = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].moliendaCanaNeta);
    const serieAzucarBlanco = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarBlanco);
    const serieAzucarCrudo = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarCrudo);
    const serieAzucarEquivalente = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarEquivalente);
    const serieAzucarOrganico = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarOrganico);
    const serieAzucarRefinado = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarRefinado);
    const serieAzucarTotal = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].otroAzucar + agrupadoPorFechaZafra[f].azucarRefinado + agrupadoPorFechaZafra[f].azucarOrganico + agrupadoPorFechaZafra[f].azucarCrudo + agrupadoPorFechaZafra[f].azucarBlanco);
    const serieAzucarOtros = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].otroAzucar);
    const serieRendimientoCanaBruta = fechasOrdenadas.map(f => (agrupadoPorFechaZafra[f].moliendaCanaBruta !== 0 ? agrupadoPorFechaZafra[f].azucarEquivalente / agrupadoPorFechaZafra[f].moliendaCanaBruta * 100 : 0))
    const serieRendimientoCanaNeta = fechasOrdenadas.map(f => (agrupadoPorFechaZafra[f].moliendaCanaNeta !== 0 ? agrupadoPorFechaZafra[f].azucarEquivalente / agrupadoPorFechaZafra[f].moliendaCanaNeta * 100 : 0));

    // Acumulados 
    let acumuladoCMB = 0;
    let acumuladoCMN = 0;
    let acumuladoRCMB = 0;
    let acumuladoRCMN = 0;
    let acumuladoEquivalente = 0;
    let acumuladoOrganico = 0;
    let acumuladoRefinado = 0;
    let acumuladoTotal = 0;
    let acumuladoBlanco = 0;
    let acumuladoCrudo = 0;
    let acumuladoOtros = 0;

    const serieAcumuladoCMB = fechasOrdenadas.map((f) => {
        acumuladoCMB += agrupadoPorFechaZafra[f].moliendaCanaBruta || 0
        return acumuladoCMB;
    });
    const serieAcumuladoCMN = fechasOrdenadas.map((f) => {
        acumuladoCMN += agrupadoPorFechaZafra[f].moliendaCanaNeta || 0;
        return acumuladoCMN;
    });
    const serieAcumuladoEquivalente = fechasOrdenadas.map((f) => {
        acumuladoEquivalente += agrupadoPorFechaZafra[f].azucarEquivalente || 0;
        return acumuladoEquivalente;
    });
    const serieAcumuladoRCMB = fechasOrdenadas.map((f, idx) => {
        const equivHastaHoy = serieAcumuladoEquivalente[idx]; // acumulado hasta el día idx
        const cmbHastaHoy = serieAcumuladoCMB[idx];           // acumulado hasta el día idx
        if (cmbHastaHoy === 0) return 0; // evitar división por 0
        return (equivHastaHoy / cmbHastaHoy) * 100;

    });
    const serieAcumuladoRCMN = fechasOrdenadas.map((f, idx) => {
        const equivHastaHoy = serieAcumuladoEquivalente[idx];
        const cmnHastaHoy = serieAcumuladoCMN[idx];
        if (cmnHastaHoy === 0) return 0;
        return (equivHastaHoy / cmnHastaHoy) * 100;
    });
    const serieAcumuladoOrganico = fechasOrdenadas.map((f) => {
        acumuladoOrganico += agrupadoPorFechaZafra[f].azucarOrganico || 0;
        return acumuladoOrganico;
    });
    const serieAcumuladoRefinado = fechasOrdenadas.map((f) => {
        acumuladoRefinado += agrupadoPorFechaZafra[f].azucarRefinado || 0;
        return acumuladoRefinado;
    });
    const serieAcumuladoBlanco = fechasOrdenadas.map((f) => {
        acumuladoBlanco += agrupadoPorFechaZafra[f].azucarBlanco || 0;
        return acumuladoBlanco;
    });
    const serieAcumuladoCrudo = fechasOrdenadas.map((f) => {
        acumuladoCrudo += agrupadoPorFechaZafra[f].azucarCrudo || 0;
        return acumuladoCrudo;
    });
    const serieAcumuladoOtros = fechasOrdenadas.map((f) => {
        acumuladoOtros += agrupadoPorFechaZafra[f].otroAzucar || 0;
        return acumuladoOtros;
    });
    const serieAcumuladoTotal = fechasOrdenadas.map((f) => {
        acumuladoTotal += agrupadoPorFechaZafra[f].azucarOrganico + agrupadoPorFechaZafra[f].azucarBlanco + agrupadoPorFechaZafra[f].azucarCrudo + agrupadoPorFechaZafra[f].otroAzucar + agrupadoPorFechaZafra[f].azucarRefinado;
        return acumuladoTotal;
    });
    /*******************************************************************************/


    /**** PROCESAMIENTO DE DATOS DE DESTILERIA ****/
    // Agrupar por fecha y sumar todas las métricas
    const agrupadoPorFechaDestileria = registrosDestilacion.reduce((acc, r) => {
        const fecha = new Date(r.fechaParte).toLocaleDateString("es-AR");

        if (!acc[fecha]) {
            acc[fecha] = {
                alcoholProducido: 0,
            };
        }
        acc[fecha].alcoholProducido += Number(r?.alcoholProducido || 0);
        return acc;
    }, {});

    // Ordenar las fechas
    const fechasOrdenadasDestileria = Object.keys(agrupadoPorFechaDestileria).sort(
        (a, b) => new Date(a) - new Date(b)
    );

    // Labels
    const labelsDestilacion = fechasOrdenadasDestileria

    // Series
    const serieAlcoholProducido = fechasOrdenadasDestileria.map(f => agrupadoPorFechaDestileria[f].alcoholProducido);

    // Acumulados 
    let acumuluadoProducido = 0;


    const serieAcumuladoProducido = fechasOrdenadasDestileria.map((f) => {
        acumuluadoProducido += agrupadoPorFechaDestileria[f].alcoholProducido || 0;
        return acumuluadoProducido;
    });

    /**** PROCESAMIENTO DE DATOS DE ANHIDRO ****/
    // Agrupar por fecha y sumar todas las métricas
    const agrupadoPorFechaAnhidro = registrosAnhidro.reduce((acc, r) => {
        const fecha = new Date(r.fechaParte).toLocaleDateString("es-AR");

        if (!acc[fecha]) {
            acc[fecha] = {
                alcoholAnhidro: 0,
            };
        }
        acc[fecha].alcoholAnhidro += Number(r?.alcoholAnhidro || 0);
        return acc;
    }, {});
    // Ordenar las fechas
    const fechasOrdenadasAnhidro = Object.keys(agrupadoPorFechaAnhidro).sort(
        (a, b) => new Date(a) - new Date(b)
    );

    // Labels
    const labelsAnhidro = fechasOrdenadasAnhidro

    // Series
    const serieAlcoholAnhidro = fechasOrdenadasAnhidro.map(f => agrupadoPorFechaAnhidro[f].alcoholAnhidro);

    // Acumulados 
    let acumuluadoAnhidro = 0;


    const serieAcumuladoAnhidro = fechasOrdenadasAnhidro.map((f) => {
        acumuluadoAnhidro += agrupadoPorFechaAnhidro[f].alcoholAnhidro || 0;
        return acumuluadoAnhidro;
    });

    // const labelsAnhidro = registrosAnhidro.map((r) => new Date(r?.fechaParte).toLocaleDateString('es-AR'));
    // const hayDatos = (labelsDestilacion.length > 0 || labelsAnhidro.length > 0 || labelsZafra.length > 0) && (serieCanaMolidaBruta.some(v => v) || serieAzucarBlanco.some(v => v));
    const hayDatos = (labelsDestilacion.length > 0 || labelsAnhidro.length > 0 || labelsZafra.length > 0)

    // Resetea selección cuando cambia el ingenio
    useEffect(() => {
        setGraficasSeleccionadas([]);
        graficasRefs.current.forEach(ref => {
            if (ref && ref.resetCheckbox) ref.resetCheckbox();
        });
    }, [ingenio, datePeriodoStart, datePeriodoEnd, region]);

    const handleSeleccionGrafica = (graficaInfo, checked) => {
        setGraficasSeleccionadas(prev => {
            if (checked) {
                // se agrega
                return [...prev, graficaInfo];
            } else {
                // se quita
                return prev.filter(g => g.titulo !== graficaInfo.titulo);
            }
        });
    };
    // Exportar todas las seleccionadas
    const exportarGraficasSeleccionadas = async () => {
        if (graficasSeleccionadas.length === 0) return;

        try {
            const dateNow = new Date()
            const dateFormat = moment(dateNow).format("DD-MM-YYYY")
            const res = await apiExportExcel("POST", `${routeAPI}/descargarGraficasSeleccionadas`, graficasSeleccionadas);
            if (res.status === 200) {
                const blob = new Blob([res.data], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                });
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = `${dateFormat} - Informe ${ingenio ? `${ingenio}` : ""}`
                link.click();
                link.remove();
                window.URL.revokeObjectURL(link);
                message.success("Descarga realizada correctamente", 5);
                window.location.reload();
            }
        } catch (error) {
            toast.error("Error exportando gráficas seleccionadas");
        }
    };
    return (
        <>
            {!hayDatos ? (
                <div className="px-3 py-2">No hay datos para mostrar con los filtros actuales.</div>
            ) : (
                <Container fluid>
                    {graficasSeleccionadas.length > 1 && (
                        <div className="text-end my-3">
                            <Button variant="success" onClick={exportarGraficasSeleccionadas}>
                                📦 Exportar {graficasSeleccionadas.length} gráficas seleccionadas
                            </Button>
                        </div>
                    )}
                    {serieCanaMolidaBruta.some(num => num !== 0) && (
                        <>
                            {/* CMB */}
                            <Row className="mt-3 g-4">
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[0] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo="Caña Molida Bruta"
                                        labels={labelsZafra}
                                        valores={serieCanaMolidaBruta}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />

                                </Col>
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[1] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Caña Molida Bruta Acumulada'
                                        labels={labelsZafra}
                                        valores={serieAcumuladoCMB}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                            </Row>
                            {/* RCMB */}
                            <Row className="mt-3 g-4">
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[2] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Rto. Caña Molida Bruta'
                                        labels={labelsZafra}
                                        valores={serieRendimientoCanaBruta}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[3] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Rto. Caña Molida Bruta Acumulada'
                                        labels={labelsZafra}
                                        valores={serieAcumuladoRCMB}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                            </Row>
                        </>
                    )}
                    {serieMoliendaCanaNeta.some(num => num !== 0) && (
                        <>
                            {/* CMN */}
                            < Row className="mt-3 g-4">
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[4] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Caña Molida Neta'
                                        labels={labelsZafra}
                                        valores={serieMoliendaCanaNeta}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[5] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Caña Molida Neta Acumulada'
                                        labels={labelsZafra}
                                        valores={serieAcumuladoCMN}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                            </Row>
                            {/* RCMN */}
                            <Row className="mt-3 g-4">
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[6] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Rto. Caña Molida Neta'
                                        labels={labelsZafra}
                                        valores={serieRendimientoCanaNeta}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                                <Col xs={12} xl={6}>
                                    <GraficaLinealComponent
                                        ref={el => graficasRefs.current[7] = el}
                                        dataUserRegister={dataUserRegister}
                                        ingenio={ingenio}
                                        datePeriodoStart={datePeriodoStart}
                                        datePeriodoEnd={datePeriodoEnd}
                                        titulo='Rto. Caña Molida Neta Acumulada'
                                        labels={labelsZafra}
                                        valores={serieAcumuladoRCMN}
                                        routeAPI={routeAPI}
                                        onSeleccionarGrafica={handleSeleccionGrafica}
                                    />
                                </Col>
                            </Row>
                        </>
                    )}

                    {/* EQUIVALENTE */}
                    {serieAzucarEquivalente.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[8] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Equivalente'
                                    labels={labelsZafra}
                                    valores={serieAzucarEquivalente}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[9] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Equivalente Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoEquivalente}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* CRUDO */}
                    {serieAzucarCrudo.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[10] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Crudo'
                                    labels={labelsZafra}
                                    valores={serieAzucarCrudo}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[11] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Crudo Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoCrudo}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* BLANCO */}
                    {serieAzucarBlanco.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[12] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Blanco'
                                    labels={labelsZafra}
                                    valores={serieAzucarBlanco}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[13] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Blanco Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoBlanco}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>
                    )}
                    {/* ORGANICO */}
                    {serieAzucarOrganico.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[14] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Orgánico'
                                    labels={labelsZafra}
                                    valores={serieAzucarOrganico}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[15] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Orgánico Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoOrganico}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* REFINADO */}
                    {serieAzucarRefinado.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[16] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Refinado'
                                    labels={labelsZafra}
                                    valores={serieAzucarRefinado}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[17] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Refinado Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoRefinado}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* OTROS */}
                    {serieAzucarOtros.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[18] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Otros Azúcares'
                                    labels={labelsZafra}
                                    valores={serieAzucarOtros}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[19] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Otros Azúcares Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoOtros}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* TOTAL */}
                    {serieAzucarTotal.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[20] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Total'
                                    labels={labelsZafra}
                                    valores={serieAzucarTotal}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[21] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Azúcar Total Acumulada'
                                    labels={labelsZafra}
                                    valores={serieAcumuladoTotal}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* ALCOHOL HIDRATADO */}
                    {serieAlcoholProducido.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[0] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Alcohol Producido'
                                    labels={labelsDestilacion}
                                    valores={serieAlcoholProducido}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[0] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Alcohol Producido Acumulado'
                                    labels={labelsDestilacion}
                                    valores={serieAcumuladoProducido}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                        </Row>

                    )}
                    {/* ALCOHOL ANHIDRO */}
                    {serieAlcoholAnhidro.some(num => num !== 0) && (
                        <Row className="mt-3 g-4">
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[0] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Alcohol Anhidro'
                                    labels={labelsAnhidro}
                                    valores={serieAlcoholAnhidro}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                />
                            </Col>
                            <Col xs={12} xl={6}>
                                <GraficaLinealComponent
                                    ref={el => graficasRefs.current[0] = el}
                                    dataUserRegister={dataUserRegister}
                                    ingenio={ingenio}
                                    datePeriodoStart={datePeriodoStart}
                                    datePeriodoEnd={datePeriodoEnd}
                                    titulo='Alcohol Anhidro Acumulado'
                                    labels={labelsAnhidro}
                                    valores={serieAcumuladoAnhidro}
                                    routeAPI={routeAPI}
                                    onSeleccionarGrafica={handleSeleccionGrafica}
                                    anhidroLealesSinDeclarar={anhidroLealesSinDeclarar}
                                    anhidroBellaVistaSinDeclarar={anhidroBellaVistaSinDeclarar}
                                    anhidroConcepcionSinDeclarar={anhidroConcepcionSinDeclarar}
                                />
                            </Col>
                        </Row>

                    )}

                </Container >
            )
            }
        </>
    )
}

export default GraficasLinealComponent
