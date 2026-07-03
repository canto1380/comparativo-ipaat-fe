export function filtrarRegistrosPorPeriodos(periodos, registros, dataEnd) {
  const dataFin = new Date(dataEnd)
  const filtrar = (inicioStr, finStr) => {
    if (!inicioStr) return [];
    const inicio = new Date(inicioStr);
    const fin = finStr ? new Date(finStr) : dataFin;
    return registros.filter(registro => {
      const fecha = new Date(registro.fechaParte);
      return fecha >= inicio && fecha <= fin;
    });
  };
  return {
    dataZafra1: filtrar(periodos.inicio_zafra, new Date(periodos.fin_zafra) >= new Date(periodos.fin_datos_zafra) ? periodos.fin_zafra : periodos.fin_datos_zafra),
    dataDestileria1: filtrar(periodos.inicio_destileria, periodos.fin_destileria),
    dataAnhidro1: filtrar(periodos.inicio_anhidro, periodos.fin_anhidro)
  };
}

export function filtrarRegistrosPorPeriodosIngenio(
  periodosZafra,
  registros,
  regionId,
  dataEnd,
  anioZafra
) {
  const dataFin = new Date(dataEnd);
  const dataZafra = [];
  const dataDestileria = [];
  const dataAnhidro = [];

  const periodosRegion = periodosZafra.filter(
    p => p.id_region_ingenios === regionId
  );

  for (const periodo of periodosRegion) {
    const registrosIngenio = registros.filter(
      r => r.ingenioCodigo === periodo.id_nombre_ingenio
    );
    // ZAFRA
    if (periodo.inicio_zafra) {
      const inicio = new Date(periodo.inicio_zafra);

      const fin = periodo.fin_zafra
        ? new Date(periodo.fin_zafra)
        : dataFin;

      dataZafra.push(
        ...registrosIngenio.filter(r => {
          const fecha = new Date(r.fechaParte);
          return fecha >= inicio && fecha <= fin;
        })
      );
    }

    // DESTILERIA
    if (periodo.inicio_destileria) {
      const inicio = new Date(periodo.inicio_destileria);

      const fin = periodo.fin_destileria
        ? new Date(periodo.fin_destileria)
        : dataFin;

      dataDestileria.push(
        ...registrosIngenio.filter(r => {
          const fecha = new Date(r.fechaParte);
          return fecha >= inicio && fecha <= fin;
        })
      );
    }

    // ANHIDRO
    if (periodo.inicio_anhidro) {
      const inicio = new Date(periodo.inicio_anhidro);

      const fin = periodo.fin_anhidro
        ? new Date(periodo.fin_anhidro)
        : dataFin;

      dataAnhidro.push(
        ...registrosIngenio.filter(r => {
          const fecha = new Date(r.fechaParte);
          return fecha >= inicio && fecha <= fin;
        })
      );
    }
  }

  return {
    dataZafra1: dataZafra,
    dataDestileria1: dataDestileria,
    dataAnhidro1: dataAnhidro
  };
}