import {
  anhidroBellaVista,
  anhidroConcepcion,
  anhidroLeales,
  anhidroLeales2023,
  anhidroBellaVista2023,
  anhidroConcepcion2023,
  anhidroLeales2024,
  anhidroBellaVista2024,
  anhidroConcepcion2024,
  anhidroBellaVista2025,
} from "../data/AnhidroSinDeclarar"
import { getMesAnio } from "../../helpers/helpers"

export const procesarAnhidroSinDeclarar = (
  datePeriodoStart,
  datePeriodoEnd,
  zafra,
  lealesAnhidro,
  bellaVistaAnhidro,
  concepcionAnhidro,
) => {
  if (Number(zafra) === 2023) {
    lealesAnhidro = anhidroLeales2023
    bellaVistaAnhidro = anhidroBellaVista2023
    concepcionAnhidro = anhidroConcepcion2023
    return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
  }

  if (Number(zafra) === 2024) {
    if (!datePeriodoEnd) {
      lealesAnhidro = anhidroLeales2024
      bellaVistaAnhidro = anhidroBellaVista2024
      concepcionAnhidro = anhidroConcepcion2024
      return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
    }
    if (!datePeriodoStart) {
      return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
    }

    const periodoInicio = getMesAnio(datePeriodoStart)
    const periodoFin = getMesAnio(datePeriodoEnd)

    if (datePeriodoEnd.getFullYear() === 2024) {
      anhidroBellaVista
        .filter((d) => d.zafra === zafra && d.anio === zafra)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes && d.mesNumero <= periodoFin.mes) {
            bellaVistaAnhidro += d.valor
          }
        })

      anhidroConcepcion
        .filter((d) => d.zafra === zafra && d.anio === zafra)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes && d.mesNumero <= periodoFin.mes) {
            concepcionAnhidro += d.valor
          }
        })

      anhidroLeales
        .filter((d) => d.zafra === zafra && d.anio === zafra)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes && d.mesNumero <= periodoFin.mes) {
            lealesAnhidro += d.valor
          }
        })
    }

    if (datePeriodoStart.getFullYear() === 2025) {
      anhidroBellaVista
        .filter((d) => d.zafra === 2024 && d.anio === 2025)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes) {
            bellaVistaAnhidro += d.valor
          }
        })
      anhidroConcepcion
        .filter((d) => d.zafra === 2024 && d.anio === 2025)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes) {
            concepcionAnhidro += d.valor
          }
        })
      anhidroLeales
        .filter((d) => d.zafra === 2024 && d.anio === 2025)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes) {
            lealesAnhidro += d.valor
          }
        })
    }

    if (datePeriodoStart.getFullYear() === 2024 && datePeriodoEnd.getFullYear() === 2025) {
      anhidroBellaVista
        .filter((d) => d.zafra === 2024)
        .forEach((d) => {
          if (d.anio === 2024 && d.mesNumero >= periodoInicio.mes) {
            bellaVistaAnhidro += d.valor
          }
          if (d.anio === 2025 && d.mesNumero <= periodoFin.mes) {
            bellaVistaAnhidro += d.valor
          }
        })
      anhidroConcepcion
        .filter((d) => d.zafra === 2024)
        .forEach((d) => {
          if (d.anio === 2024 && d.mesNumero >= periodoInicio.mes) {
            concepcionAnhidro += d.valor
          }
          if (d.anio === 2025 && d.mesNumero <= periodoFin.mes) {
            concepcionAnhidro += d.valor
          }
        })
      anhidroLeales
        .filter((d) => d.zafra === 2024)
        .forEach((d) => {
          if (d.anio === 2024 && d.mesNumero >= periodoInicio.mes) {
            lealesAnhidro += d.valor
          }
          if (d.anio === 2025 && d.mesNumero <= periodoFin.mes) {
            lealesAnhidro += d.valor
          }
        })
    }
  }

  if (Number(zafra) === 2025) {
    if (!datePeriodoEnd) {
      bellaVistaAnhidro = anhidroBellaVista2025
      return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
    }
    if (!datePeriodoStart) {
      return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
    }

    const periodoInicio = getMesAnio(datePeriodoStart)
    const periodoFin = getMesAnio(datePeriodoEnd)

    if (datePeriodoEnd.getFullYear() === 2025) {
      anhidroBellaVista
        .filter((d) => d.zafra === zafra && d.anio === zafra)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes && d.mesNumero <= periodoFin.mes) {
            bellaVistaAnhidro += d.valor
          }
        })
    }
    if (datePeriodoStart.getFullYear() === 2026) {
      anhidroBellaVista
        .filter((d) => d.zafra === 2025 && d.anio === 2026)
        .forEach((d) => {
          if (d.mesNumero >= periodoInicio.mes) {
            bellaVistaAnhidro += d.valor
          }
        })
    }
    if (datePeriodoStart.getFullYear() === 2025 && datePeriodoEnd.getFullYear() === 2026) {
      anhidroBellaVista
        .filter((d) => d.zafra === 2025)
        .forEach((d) => {
          if (d.anio === 2025 && d.mesNumero >= periodoInicio.mes) {
            bellaVistaAnhidro += d.valor
          }
          if (d.anio === 2026 && d.mesNumero <= periodoFin.mes) {
            bellaVistaAnhidro += d.valor
          }
        })
    }
    return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
  }

  return { lealesAnhidro, bellaVistaAnhidro, concepcionAnhidro }
}