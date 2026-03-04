import ExcelJS from "exceljs";
import moment from "moment";

export const CreateExcelWorkbook = async (
  setLoadingDownload,
  dataEnd,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  dc1,
  dc2,
  dc3,
  dc4,
  dc5,
  dc6,
  dc7,
  dc8,
  dc9,
  dc10,
  dc11,
  dc12,
  dc13,
  dc14,
  dc15,
  dataImport,
  dataImportComparativa,
  dataUser,
  dataUserRegister,
  setBanderaDataNull,
  inicioZafra,
  inicioZafraComparativa,
  fechasInicioIngenios,
  dataDiasZafra,
  fechasInicioIngeniosComparativa,
  dataDiasZafraComparativa,
  setDataImport,
  setDataImportComparativa,
  setDataImportDestileria,
  setDataImportDestileriaComparativa,
  dataIngenios,
  finZafra,
  finZafraComparativa,
  dataComparativa,
  zafraParteDiario,
  fechasInicioDestileriaIngenios,
  fechasInicioDestileriaIngeniosComparativa,
  /**NORTE **/
  inicioZafraNorte,
  inicioZafraNorteComparativa,
  finZafraNorte,
  finZafraNorteComparativa,
  fechasInicioIngeniosNorte,
  fechasInicioIngeniosNorteComparativa,
  fechasInicioDestileriaIngeniosNorte,
  fechasInicioDestileriaIngeniosNorteComparativa,
  dataDiasZafraNorte,
  dataDiasZafraNorteComparativa,
  aguilDiasParada,
  bellavistaDiasParada,
  concepDiasParada,
  cruzaltaDiasParada,
  famaillaDiasParada,
  coronaDiasParada,
  floridaDiasParada,
  providDiasParada,
  trinidadDiasParada,
  lealesDiasParada,
  marapaDiasParada,
  nunorcoDiasParada,
  barbaraDiasParada,
  rosaDiasParada 
) => {
  setLoadingDownload(true);
  const parteDiarioData = dataImport ? dataImport : undefined;
  const parteDiarioDataComparativa = dataImportComparativa
    ? dataImportComparativa
    : undefined;
  if (!parteDiarioData || !parteDiarioDataComparativa) {
    setBanderaDataNull(true);
    setTimeout(() => {
      setBanderaDataNull(false);
    }, 2000);
  } else {
    const workbook = new ExcelJS.Workbook();
    /** Fecha Hasta parte Dairio **/
    const date = dataEnd !== null ? new Date(dataEnd) : new Date();
    const date1 = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = zafraParteDiario;
    const dateDatosProductivos = date1.setDate(date1.getDate() - 1);
    let dateDatosProductivosFormato = new Date(dateDatosProductivos)
    dateDatosProductivosFormato = moment(dateDatosProductivosFormato).format("DD-MM-YYYY")
    const dateFormat = moment(date).format("DD-MM-YYYY");

    /** Fecha hasta comparativa **/
    const anioDataComparativo = date.getFullYear();
    let dateComparativa = new Date(date);
    if (anioData === anioDataComparativo) {
      dateComparativa.setFullYear(anioData - 1);
    } else {
      dateComparativa.setFullYear(anioData);
    }
    const dateComparativaFormat = moment(dateComparativa).format("DD-MM-YYYY");
    workbook.creator = `${dataUserRegister?.nombre} ${dataUserRegister?.apellido}`;
    workbook.created = date;
    workbook.modified = date;
    workbook.views = [
      {
        x: 0,
        y: 0,
        width: 10000,
        height: 20000,
        firstSheet: 0,
        activeTab: 0,
        visibility: "visible",
      },
    ];
    const page1 = workbook.addWorksheet("Parte Diario Directorio", {
      pageSetup: {
        paperSize: 8,
        orientation: "landscape",
        scale: 75,
        fitToPage: false,
        fitToWidth: 1,
        
      },
    });
    page1.headerFooter.differentFirst = true;

    const page2 = workbook.addWorksheet("Azúcar y Alcohol discriminado", {
      pageSetup: {
        paperSize: 8,
        orientation: "landscape",
        scale: 75,
        fitToPage: false,
        fitToWidth: 1,
      },
    });
    page2.headerFooter.differentFirst = true;

    /***** FORMATO CONDICIONAL *****/
    const rulesFgRed = [
      {
        type: "cellIs",
        operator: "lessThan",
        formulae: ["0"],
        style: {
          fill: {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "CB6B6B" },
          },
          font: {
            color: { argb: "CB6B6B" },
          },
        },
      },
    ];
    page1.addConditionalFormatting({
      ref: "F31:O32",
      rules: rulesFgRed,
    });

    /***** ALINEACIONES *****/
    const alignStart = {
      wrapText: true,
      horizontal: "left",
      vertical: "middle",
    };
    const alignCenter = {
      wrapText: true,
      horizontal: "center",
      vertical: "middle",
    };
    const alignEnd = {
      wrapText: true,
      horizontal: "right",
      vertical: "middle",
    };

    /***** ESTILOS GENERALES *****/
    const functionFont = (name, bold, size) => {
      return { name, bold, size };
    };
    for (let i = 6; i <= 28; i++) {
      page1.getColumn(i).width = "17";
    }
    page1.getColumn(1).width = "13";
    page1.getColumn(2).width = "13";
    page1.getColumn(3).width = "18";
    page1.getColumn(4).width = "13";
    page1.getColumn(5).width = "13";
    page1.getColumn(11).width = "18";
    page1.getColumn(15).width = "20";
    page1.getColumn(16).width = "20";

    for (let i = 1; i <= 4; i++) {
      page1.getRow(i).height = "27";
    }
    page1.getRow(5).height = "28";
    page1.getRow(6).height = "25";
    page1.getRow(8).height = "44";
    for (let i = 10; i <= 25; i++) {
      page1.getRow(i).height = "28";
    }
    page1.getRow(26).height = "34";
    page1.getRow(27).height = "27";
    page1.getRow(28).height = "28";
    page1.getRow(30).height = "37";
    page1.getRow(31).height = "38";
    page1.getRow(32).height = "48";

    for (let i = 34; i <= 37; i++) {
      page1.getRow(i).height = "28";
    }

    page1.getRow(36).height = "48";
    page1.getCell(36, 1).alignment = { wrapText: true };
    page1.getCell(36, 16).alignment = { wrapText: true };

    for (let i = 34; i <= 37; i++) {
      page1.getCell(`A${i}`).font = { size: 15 };
      page1.getCell(`F${i}`).font = { size: 15 };
      page1.getCell(`G${i}`).font = { size: 15 };
      page1.getCell(`O${i}`).font = { size: 15 };
      page1.getCell(`V${i}`).font = { size: 15 };
      page1.getCell(`X${i}`).font = { size: 15 };
    }

    page1.getCell("F34").font = { bold: false, name: "Barlow", size: 18 };
    page1.getCell("F35").font = { bold: false, name: "Barlow", size: 18 };
    page1.getCell("F36").font = { bold: true, name: "Barlow", size: 20 };
    page1.getCell("F37").font = { bold: false, name: "Barlow", size: 18 };

    /***** RELLENO *****/
    const bgGris = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D9D9D9" },
    };
    const bgNaranja = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FABF8F" },
    };
    const bgAzul = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "B8CCE4" },
    };
    const bgCeleste = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DAEEF3" },
    };

    for (let i = 1; i <= 15; i++) {
      page1.getCell(7, i).fill = bgNaranja;
      page1.getCell(9, i).fill = bgNaranja;
    }

    for (let i = 16; i <= 28; i++) {
      page1.getCell(7, i).fill = bgAzul;
      page1.getCell(9, i).fill = bgAzul;
    }
    for (let i = 1; i < 15; i++) {
      page1.getCell(27, i).fill = bgNaranja;
    }
    for (let i = 16; i < 29; i++) {
      page1.getCell(27, i).fill = bgAzul;
    }

    /***** FILAS *****/
    page1.getRow(6).alignment = alignCenter;
    page1.getRow(7).alignment = alignCenter;
    page1.getRow(8).alignment = alignCenter;
    page1.getRow(9).alignment = alignCenter;
    for (let i = 10; i <= 26; i++) {
      page1.getRow(i).font = functionFont("Barlow", true, 15);
    }
    page1.getRow(26).font = functionFont("Barlow", true, 19);
    page1.getRow(26).alignment = alignCenter;
    page1.getRow(27).font = functionFont("Barlow", true, 18);
    page1.getRow(28).font = functionFont("Barlow", true, 18);
    page1.getRow(28).alignment = alignCenter;
    page1.getRow(31).font = functionFont("Barlow", true, 18);
    page1.getRow(31).alignment = alignCenter;
    page1.getRow(32).alignment = alignCenter;
    page1.getRow(32).font = functionFont("Barlow", true, 18);

    for (let i = 10; i <= 25; i++) {
      for (let j = 6; j <= 28; j++) {
        page1.getCell(i, j).font = functionFont("Barlow", false, 16);
        page1.getCell(i, j).alignment = alignCenter;
      }
    }
    page1.getRow(13).font = functionFont("Barlow", true, 16);
    page1.getRow(16).font = functionFont("Barlow", true, 16);

    /*** MERGE FILAS 28-29, 33 ***/
    page1.mergeCells("A29:AB29");
    page1.mergeCells("A33:AB33");

    /***** BORDES *****/
    const borders = (t1, t2, l1, l2, b1, b2, r1, r2) => {
      return {
        top: { style: t1, color: { argb: t2 } },
        left: { style: l1, color: { argb: l2 } },
        bottom: { style: b1, color: { argb: b2 } },
        right: { style: r1, color: { argb: r2 } },
      };
    };

    /** Todo el documento **/
    for (let j = 6; j < 37; j++) {
      for (let i = 1; i <= 28; i++) {
        page1.getCell(j, i).border = {
          top: { style: "thin", color: { argb: "000000" } },
          left: { style: "medium", color: { argb: "000000" } },
          bottom: { style: "thin", color: { argb: "000000" } },
          right: { style: "medium", color: { argb: "000000" } },
        };
      }
    }
    /** fila 6 a 37 - col E a N **/
    for (let i = 6; i <= 37; i++) {
      for (let j = 5; j <= 14; j++) {
        page1.getCell(i, j).border = {
          top: { style: "thin", color: { argb: "000000" } },
          left: { style: "thin", color: { argb: "000000" } },
          bottom: { style: "thin", color: { argb: "000000" } },
          right: { style: "thin", color: { argb: "000000" } },
        };
      }
    }

    /** fila 10 a 25 - col E a N **/
    for (let i = 10; i <= 25; i++) {
      for (let j = 5; j <= 14; j++) {
        page1.getCell(i, j).border = {
          top: { style: "thin", color: { argb: "000000" } },
          left: { style: "medium", color: { argb: "000000" } },
          bottom: { style: "thin", color: { argb: "000000" } },
          right: { style: "medium", color: { argb: "000000" } },
        };
      }
    }

    /*** NUEVOS ***/
    for (let i = 1; i <= 28; i++) {
      page1.getCell(5, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );

      page1.getCell(6, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(7, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(9, i).border = borders(
        "thin",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(13, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(16, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(26, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(27, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(28, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(30, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(37, i).border = borders(
        "thin",
        "000000",
        "thin",
        "000000",
        "medium",
        "000000",
        "thin",
        "000000"
      );
    }

    for (let i = 3; i < 6; i++) {
      page1.getCell(7, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 16; i < 19; i++) {
      page1.getCell(7, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    page1.getCell("A27").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "thin",
      "000000"
    );
    page1.getCell("A28").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );

    for (let i = 31; i <= 32; i++) {
      for (let j = 1; j <= 15; j++) {
        page1.getCell(i, j).border = borders(
          "thin",
          "000000",
          "thin",
          "000000",
          "thin",
          "000000",
          "thin",
          "000000"
        );
      }
    }
    page1.getCell("P30").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thin",
      "D9D9D9"
    );
    page1.getCell("W30").border = borders(
      "medium",
      "000000",
      "thin",
      "D9D9D9",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getCell("P32").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thin",
      "D9D9D9"
    );
    page1.getCell("U32").border = borders(
      "medium",
      "000000",
      "thin",
      "D9D9D9",
      "medium",
      "000000",
      "medium",
      "000000"
    );

    for (let i = 34; i <= 37; i++) {
      for (let j = 1; j <= 8; j++) {
        page1.getCell(i, j).border = borders(
          "thin",
          "000000",
          "thin",
          "000000",
          "thin",
          "000000",
          "thin",
          "000000"
        );
      }
    }

    for (let i = 34; i <= 37; i++) {
      for (let j = 15; j <= 24; j++) {
        page1.getCell(i, j).border = borders(
          "thin",
          "000000",
          "thin",
          "000000",
          "thin",
          "000000",
          "thin",
          "000000"
        );
      }
    }
    page1.getCell("A33").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getCell("I34").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "thin",
      "000000"
    );
    page1.getCell("K34").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "thin",
      "AEAEAE"
    );
    page1.getCell("L34").border = borders(
      "medium",
      "000000",
      "thin",
      "AEAEAE",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getCell("M34").border = borders(
      "medium",
      "000000",
      "thin",
      "AEAEAE",
      "medium",
      "000000",
      "thin",
      "AEAEAE"
    );
    page1.getCell("O34").border = borders(
      "medium",
      "000000",
      "thin",
      "AEAEAE",
      "medium",
      "000000",
      "thick",
      "00326C"
    );
    page1.getCell("Y34").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );

    for (let i = 1; i <= 28; i++) {
      page1.getCell(38, i).border = borders(
        "thick",
        "00326C",
        "thin",
        "D9D9D9",
        "thin",
        "D9D9D9",
        "thin",
        "D9D9D9"
      );
    }

    for (let i = 6; i <= 28; i++) {
      page1.getCell(i, 16).border = borders(
        "medium",
        "000000",
        "thick",
        "00326C",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    for (let i = 5; i <= 37; i++) {
      page1.getCell(i, 29).border = borders(
        "thin",
        "ffffff",
        "thick",
        "00326C",
        "thin",
        "ffffff",
        "thin",
        "D9D9D9"
      );
    }

    /*******/

    /***** FORMATO DE NUMEROS *****/
    /* Col 6 a 8*/
    for (let i = 10; i <= 26; i++) {
      for (let j = 6; j <= 8; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 19 a 21*/
    for (let i = 10; i <= 26; i++) {
      for (let j = 19; j <= 21; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 11 a 15*/
    for (let i = 10; i <= 26; i++) {
      for (let j = 11; j <= 15; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 24 a 28*/
    for (let i = 10; i <= 26; i++) {
      for (let j = 24; j <= 28; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }

    /* Col 9 a 10*/
    for (let i = 10; i <= 26; i++) {
      for (let j = 9; j <= 10; j++) {
        page1.getCell(i, j).numFmt = "0.#0";
      }
    }
    /* Col 22 a 23*/
    for (let i = 10; i <= 26; i++) {
      for (let j = 22; j <= 23; j++) {
        page1.getCell(i, j).numFmt = "0.##0";
      }
    }
    /* FILA 31 */
    for (let i = 6; i <= 8; i++) {
      page1.getCell(31, i).numFmt = "#,##0";
    }
    for (let i = 11; i <= 15; i++) {
      page1.getCell(31, i).numFmt = "#,##0";
    }
    for (let i = 9; i <= 10; i++) {
      page1.getCell(31, i).numFmt = "0.#0";
    }
    /* FILA 32 */
    for (let i = 6; i <= 15; i++) {
      page1.getCell(32, i).numFmt = "0.##%";
    }

    page1.getCell("U32").numFmt = "0.##%";
    page1.getCell("F34").numFmt = "#,##0";
    page1.getCell("F35").numFmt = "#,##0";
    page1.getCell("F36").numFmt = "0.00";
    page1.getCell("F37").numFmt = "0.00";
    page1.getCell("O34").numFmt = "#,#0";
    page1.getCell("V34").numFmt = "#,##0";
    page1.getCell("V35").numFmt = "#,##0";
    page1.getCell("V36").numFmt = "0.00";
    page1.getCell("V37").numFmt = "0.00";

    /** CELDAS ENCABEZADOS **/
    page1.mergeCells("A1:F4");
    page1.getCell("F4").value = "Icono IPAAT";

    page1.mergeCells("G1:W2");
    page1.getCell("W2").value = `COMPARATIVO ZAFRA ${anioData}/${
      anioDataComparativo - 1
    }`;
    page1.getCell("W2").alignment = { horizontal: "center" };
    page1.getCell("W2").font = { name: "Barlow", bold: true, size: 24 };

    page1.mergeCells("G3:W4");
    page1.getCell(
      "W4"
    ).value = `INFORME PRODUCTIVO AL ${dateFormat} - PARTE DIARIO ${Math.ceil(
      dataDiasZafra
    )}`;
    page1.getCell("W4").font = { name: "Barlow", bold: true, size: 20 };
    page1.getCell("W4").alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    page1.mergeCells("X1:AB4");
    page1.getCell("X1").value = "Icono Tucuman";

    page1.mergeCells("A5:AB5");
    page1.getCell("E5").value = `Datos Productivos Hasta: ${dateDatosProductivosFormato}`;
    page1.getCell("E5").font = { name: "Barlow", bold: true, size: 20 };
    page1.getCell("E5").alignment = {
      horizontal: "center",
      vertical: "center",
    };

    /** ENCABEZADOS Y COLUMNAS DE TABLA **/
    page1.mergeCells("A7:B9");
    page1.getCell("A9").value = "INGENIOS";
    page1.getCell("A9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("A6:O6");
    page1.getCell("O6").value = `ZAFRA ${anioData}`;
    page1.getCell("O6").font = { name: "Barlow", bold: true, size: 18 };

    page1.mergeCells("P6:AB6");
    page1.getCell("AB6").value = `ZAFRA ${zafraParteDiario - 1}`;
    page1.getCell("AB6").font = { name: "Barlow", bold: true, size: 18 };

    /** Zafra 2023 **/
    page1.mergeCells("C7:C9");
    page1.getCell("C9").value = `Inicio de Zafra ${anioData}`;
    page1.getCell("C9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("D7:D9");
    page1.getCell("D9").value = "Días de avance";
    page1.getCell("D9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("E7:E9");
    // page1.getCell("E9").value = `fin de zafra ${anioData}`;
    page1.getCell("E9").value = `Días efectivos de molienda`;

    page1.getCell("E9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("F7:F9");
    page1.getCell("F8").value = "Caña Molida Bruta [Tn]";
    page1.mergeCells("G7:G9");
    page1.getCell("G8").value = "Caña Molida Neta [Tn]";
    page1.mergeCells("H7:H9");
    page1.getCell("H8").value = "Azúcar Equivalente [Tn]";
    page1.mergeCells("I7:I9");
    page1.getCell("I8").value = `Rto CMB [%]`;
    page1.mergeCells("J7:J9");
    page1.getCell("J8").value = `Rto CMN [%]`;
    page1.mergeCells("K7:K9");
    page1.getCell("K8").value = "Azúcar Blanco [Tn]";
    page1.mergeCells("L7:L9");
    page1.getCell("L8").value = "Azúcar Crudo [Tn]";
    page1.mergeCells("M7:M9");
    page1.getCell("M8").value = "Azúcar Físico [Tn]";
    page1.mergeCells("N7:N9");
    page1.getCell("N8").value = "Melaza [Tn]";
    page1.mergeCells("O7:O9");
    page1.getCell("O8").value = "Alcohol Hidratado [m3]";

    /** Zafra 2022 **/
    page1.mergeCells("P7:P9");
    page1.getCell("P9").value = `Inicio de Zafra ${zafraParteDiario - 1}`;
    page1.getCell("P9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("Q7:Q9");
    page1.getCell("Q9").value = "Días de Avance";
    page1.getCell("Q9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("R7:R9");
    page1.getCell("R9").value = `Fin de Zafra ${zafraParteDiario - 1}`;
    page1.getCell("R9").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("S7:S9");
    page1.getCell("S9").value = "Caña Molida Bruta [Tn]";
    page1.mergeCells("T7:T9");
    page1.getCell("T9").value = "Caña Molida Neta [Tn]";
    page1.mergeCells("U7:U9");
    page1.getCell("U9").value = "Azúcar Equivalente [Tn]";
    page1.mergeCells("V7:V9");
    page1.getCell("V9").value = `Rto CMB %`;
    page1.mergeCells("W7:W9");
    page1.getCell("W9").value = `Rto CMN %`;
    page1.mergeCells("X7:X9");
    page1.getCell("X9").value = "Azúcar Blanco [Tn]";
    page1.mergeCells("Y7:Y9");
    page1.getCell("Y9").value = "Azúcar Crudo [Tn]";
    page1.mergeCells("Z7:Z9");
    page1.getCell("Z9").value = "Azúcar Físico [Tn]";
    page1.mergeCells("AA7:AA9");
    page1.getCell("AA9").value = "Melaza [Tn]";
    page1.mergeCells("AB7:AB9");
    page1.getCell("AB9").value = "Alcohol Hidratado [m3]";

    for (let i = 7; i <= 9; i++) {
      page1.getRow(i).font = { name: "Barlow", bold: true, size: 15 };
    }

    /** COLUMNA TABLA - INGENIOS **/
    for (let i = 10; i <= 25; i++) {
      page1.mergeCells(`A${i}:B${i}`);
    }
    page1.getCell("A10").value = "Aguilares";
    page1.getCell("A10").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A11").value = "Cruz Alta";
    page1.getCell("A11").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A12").value = "La Florida";
    page1.getCell("A12").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A13").value = "Gpo. Los Balcanes";
    page1.getCell("A14").value = "Concepción";
    page1.getCell("A14").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A15").value = "Marapa";
    page1.getCell("A15").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A16").value = "Gpo. CASS";
    page1.getCell("A17").value = "Bella Vista";
    page1.getCell("A17").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A18").value = "Famaillá";
    page1.getCell("A18").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A19").value = "La Corona";
    page1.getCell("A19").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A20").value = "La Providencia";
    page1.getCell("A20").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A21").value = "La Trinidad";
    page1.getCell("A21").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A22").value = "Leales";
    page1.getCell("A22").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A23").value = "Ñuñorco";
    page1.getCell("A23").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A24").value = "Santa Bárbara";
    page1.getCell("A24").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("A25").value = "Santa Rosa";
    page1.getCell("A25").font = { name: "Barlow", bold: false, size: 16 };

    /** COLUMNAS FECHA PROBABLE INICIO - INGENIOS **/
    /** COLUMNA FECHA INICIO 2023**/
    page1.getCell("C10").value = fechasInicioIngenios.Cell10
      ? moment(fechasInicioIngenios.Cell10).format("DD/MM/YYYY")
      : null;
    page1.getCell("C10").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C11").value = fechasInicioIngenios.Cell11
      ? moment(fechasInicioIngenios.Cell11).format("DD/MM/YYYY")
      : null;
    page1.getCell("C11").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C12").value = fechasInicioIngenios.Cell12
      ? moment(fechasInicioIngenios.Cell12).format("DD/MM/YYYY")
      : null;
    page1.getCell("C12").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C14").value = fechasInicioIngenios.Cell14
      ? moment(fechasInicioIngenios.Cell14).format("DD/MM/YYYY")
      : null;
    page1.getCell("C14").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C15").value = fechasInicioIngenios.Cell15
      ? moment(fechasInicioIngenios.Cell15).format("DD/MM/YYYY")
      : null;
    page1.getCell("C15").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C17").value = fechasInicioIngenios.Cell17
      ? moment(fechasInicioIngenios.Cell17).format("DD/MM/YYYY")
      : null;
    page1.getCell("C17").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C18").value = fechasInicioIngenios.Cell18
      ? moment(fechasInicioIngenios.Cell18).format("DD/MM/YYYY")
      : null;
    page1.getCell("C18").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C19").value = fechasInicioIngenios.Cell19
      ? moment(fechasInicioIngenios.Cell19).format("DD/MM/YYYY")
      : null;
    page1.getCell("C19").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C20").value = fechasInicioIngenios.Cell20
      ? moment(fechasInicioIngenios.Cell20).format("DD/MM/YYYY")
      : null;
    page1.getCell("C20").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C21").value = fechasInicioIngenios.Cell21
      ? moment(fechasInicioIngenios.Cell21).format("DD/MM/YYYY")
      : null;
    page1.getCell("C21").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C22").value = fechasInicioIngenios.Cell22
      ? moment(fechasInicioIngenios.Cell22).format("DD/MM/YYYY")
      : null;
    page1.getCell("C22").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C23").value = fechasInicioIngenios.Cell23
      ? moment(fechasInicioIngenios.Cell23).format("DD/MM/YYYY")
      : null;
    page1.getCell("C23").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C24").value = fechasInicioIngenios.Cell24
      ? moment(fechasInicioIngenios.Cell24).format("DD/MM/YYYY")
      : null;
    page1.getCell("C24").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C25").value = fechasInicioIngenios.Cell25
      ? moment(fechasInicioIngenios.Cell25).format("DD/MM/YYYY")
      : null;
    page1.getCell("C25").font = { name: "Barlow", bold: false, size: 16 };

    /** COLUMNA FIN DE ZAFRA 2023 **/
    page1.getCell("AZ10").value =
      fechasInicioIngenios?.Cell10 === undefined
        ? null
        : fechasInicioIngenios?.Cell10 && fechasInicioIngenios?.CellE10 === null
        ? null
        : moment(fechasInicioIngenios?.CellE10).format("DD/MM/YYYY");

    page1.getCell("AZ10").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ11").value =
      fechasInicioIngenios?.Cell11 === undefined
        ? null
        : fechasInicioIngenios?.Cell11 && fechasInicioIngenios?.CellE11 === null
        ? null
        : moment(fechasInicioIngenios?.CellE11).format("DD/MM/YYYY");
    page1.getCell("AZ11").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ12").value =
      fechasInicioIngenios?.Cell12 === undefined
        ? null
        : fechasInicioIngenios?.Cell12 && fechasInicioIngenios?.CellE12 === null
        ? null
        : moment(fechasInicioIngenios?.CellE12).format("DD/MM/YYYY");
    page1.getCell("AZ12").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ14").value =
      fechasInicioIngenios?.Cell14 === undefined
        ? null
        : fechasInicioIngenios?.Cell14 && fechasInicioIngenios?.CellE14 === null
        ? null
        : moment(fechasInicioIngenios?.CellE14).format("DD/MM/YYYY");
    page1.getCell("AZ14").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ15").value =
      fechasInicioIngenios?.Cell15 === undefined
        ? null
        : fechasInicioIngenios?.Cell15 && fechasInicioIngenios?.CellE15 === null
        ? null
        : moment(fechasInicioIngenios?.CellE15).format("DD/MM/YYYY");
    page1.getCell("AZ15").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ17").value =
      fechasInicioIngenios?.Cell17 === undefined
        ? null
        : fechasInicioIngenios?.Cell17 && fechasInicioIngenios?.CellE17 === null
        ? null
        : moment(fechasInicioIngenios?.CellE17).format("DD/MM/YYYY");
    page1.getCell("AZ17").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ18").value =
      fechasInicioIngenios?.Cell18 === undefined
        ? null
        : fechasInicioIngenios?.Cell18 && fechasInicioIngenios?.CellE18 === null
        ? null
        : moment(fechasInicioIngenios?.CellE18).format("DD/MM/YYYY");
    page1.getCell("AZ18").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ19").value =
      fechasInicioIngenios?.Cell19 === undefined
        ? null
        : fechasInicioIngenios?.Cell19 && fechasInicioIngenios?.CellE19 === null
        ? null
        : moment(fechasInicioIngenios?.CellE19).format("DD/MM/YYYY");
    page1.getCell("AZ19").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ20").value =
      fechasInicioIngenios?.Cell20 === undefined
        ? null
        : fechasInicioIngenios?.Cell20 && fechasInicioIngenios?.CellE20 === null
        ? null
        : moment(fechasInicioIngenios?.CellE20).format("DD/MM/YYYY");
    page1.getCell("AZ20").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ21").value =
      fechasInicioIngenios?.Cell21 === undefined
        ? null
        : fechasInicioIngenios?.Cell21 && fechasInicioIngenios?.CellE21 === null
        ? null
        : moment(fechasInicioIngenios?.CellE21).format("DD/MM/YYYY");
    page1.getCell("AZ21").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ22").value =
      fechasInicioIngenios?.Cell22 === undefined
        ? null
        : fechasInicioIngenios?.Cell22 && fechasInicioIngenios?.CellE22 === null
        ? null
        : moment(fechasInicioIngenios?.CellE22).format("DD/MM/YYYY");
    page1.getCell("AZ22").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ23").value =
      fechasInicioIngenios?.Cell23 === undefined
        ? null
        : fechasInicioIngenios?.Cell23 && fechasInicioIngenios?.CellE23 === null
        ? null
        : moment(fechasInicioIngenios?.CellE23).format("DD/MM/YYYY");
    page1.getCell("AZ23").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ24").value =
      fechasInicioIngenios?.Cell24 === undefined
        ? null
        : fechasInicioIngenios?.Cell24 && fechasInicioIngenios?.CellE24 === null
        ? null
        : moment(fechasInicioIngenios?.CellE24).format("DD/MM/YYYY");
    page1.getCell("AZ24").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ25").value =
      fechasInicioIngenios?.Cell25 === undefined
        ? null
        : fechasInicioIngenios?.Cell25 && fechasInicioIngenios?.CellE25 === null
        ? null
        : moment(fechasInicioIngenios?.CellE25).format("DD/MM/YYYY");
    page1.getCell("AZ25").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("AZ26").value = dateFormat;

    /** COLUMNA DIAS EFECTIVOS DE MOLIENDA **/
    for (let i = 10; i <= 25; i++) {
      page1.getCell(i, 5).font = { name: "Barlow", bold: false, size: 16 };
      page1.getCell(i, 5).alignment = alignCenter;
    }

    page1.getCell("E10").value = {
      formula: `=D10-${aguilDiasParada}`,
      result: 0,
    };
    page1.getCell("E11").value = {
      formula: `=D11-${cruzaltaDiasParada}`,
      result: 0,
    };
    page1.getCell("E12").value = {
      formula: `=D12-${floridaDiasParada}`,
      result: 0,
    };
    page1.getCell("E14").value = {
      formula: `=D14-${concepDiasParada}`,
      result: 0,
    };
    page1.getCell("E15").value = {
      formula: `=D15-${marapaDiasParada}`,
      result: 0,
    };
    page1.getCell("E17").value = {
      formula: `=D17-${bellavistaDiasParada}`,
      result: 0,
    };
    page1.getCell("E18").value = {
      formula: `=D18-${famaillaDiasParada}`,
      result: 0,
    };
    page1.getCell("E19").value = {
      formula: `=D19-${coronaDiasParada}`,
      result: 0,
    };
    page1.getCell("E20").value = {
      formula: `=D20-${providDiasParada}`,
      result: 0,
    };
    page1.getCell("E21").value = {
      formula: `=D21-${trinidadDiasParada}`,
      result: 0,
    };
    page1.getCell("E22").value = {
      formula: `=D22-${lealesDiasParada}`,
      result: 0,
    };
    page1.getCell("E23").value = {
      formula: `=D23-${nunorcoDiasParada}`,
      result: 0,
    };
    page1.getCell("E24").value = {
      formula: `=D24-${barbaraDiasParada}`,
      result: 0,
    };
    page1.getCell("E25").value = {
      formula: `=D25-${rosaDiasParada}`,
      result: 0,
    };

    /** COLUMNA DIAS DE AVANCE 2023**/
    for (let i = 10; i <= 25; i++) {
      page1.getCell(i, 4).font = { name: "Barlow", bold: false, size: 16 };
      page1.getCell(i, 4).alignment = alignCenter;
    }
    if (fechasInicioIngenios.Cell10) {
      page1.getCell("D10").value = {
        formula: `=if(AZ10="",(AZ26-C10)+1,(AZ10-C10)+1)`,
        result: 7,
      };
    }
    page1.getCell("D10").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell11) {
      page1.getCell("D11").value = {
        formula: '=if(AZ11="",(AZ26-C11)+1,(AZ11-C11)+1)',
        result: 7,
      };
    }
    page1.getCell("D11").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell12) {
      page1.getCell("D12").value = {
        formula: '=if(AZ12="",(AZ26-C12)+1,(AZ12-C12)+1)',
        result: 7,
      };
    }
    page1.getCell("D12").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("D13").value = "";

    if (fechasInicioIngenios.Cell14) {
      page1.getCell("D14").value = {
        formula: '=if(AZ14="",(AZ26-C14)+1,(AZ14-C14)+1)',
        result: 7,
      };
    }
    page1.getCell("D14").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell15) {
      page1.getCell("D15").value = {
        formula: '=if(AZ15="",(AZ26-C15)+1,(AZ15-C15)+1)',
        result: 7,
      };
    }
    page1.getCell("D15").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("D16").value = "";

    if (fechasInicioIngenios.Cell17) {
      page1.getCell("D17").value = {
        formula: '=if(AZ17="",(AZ26-C17)+1,(AZ17-C17)+1)',
        result: 7,
      };
    }
    page1.getCell("D17").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell18) {
      page1.getCell("D18").value = {
        formula: '=if(AZ18="",(AZ26-C18)+1,(AZ18-C18)+1)',
        result: 7,
      };
    }
    page1.getCell("D18").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell19) {
      page1.getCell("D19").value = {
        formula: '=if(AZ19="",(AZ26-C19)+1,(AZ19-C19)+1)',
        result: 7,
      };
    }
    page1.getCell("D19").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell20) {
      page1.getCell("D20").value = {
        formula: '=if(AZ20="",(AZ26-C20)+1,(AZ20-C20)+1)',
        result: 7,
      };
    }
    page1.getCell("D20").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell21) {
      page1.getCell("D21").value = {
        formula: '=if(AZ21="",(AZ26-C21)+1,(AZ21-C21)+1)',
        result: 7,
      };
    }
    page1.getCell("D21").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell22) {
      page1.getCell("D22").value = {
        formula: '=if(AZ22="",(AZ26-C22)+1,(AZ22-C22)+1)',
        result: 7,
      };
    }
    page1.getCell("D22").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell23) {
      page1.getCell("D23").value = {
        formula: '=if(AZ23="",(AZ26-C23)+1,(AZ23-C23)+1)',
        result: 7,
      };
    }
    page1.getCell("D23").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell24) {
      page1.getCell("D24").value = {
        formula: '=if(AZ24="",(AZ26-C24)+1,(AZ24-C24)+1)',
        result: 7,
      };
    }
    page1.getCell("D24").font = { name: "Barlow", bold: false, size: 16 };

    if (fechasInicioIngenios.Cell25) {
      page1.getCell("D25").value = {
        formula: '=if(AZ25="",(AZ26-C25)+1,(AZ25-C25)+1)',
        result: 7,
      };
    }
    page1.getCell("D25").font = { name: "Barlow", bold: false, size: 16 };

    /** COLUMNA FECHA INICIO 2022 **/
    page1.getCell("P10").value = moment(
      fechasInicioIngeniosComparativa.Cell10
    ).format("DD/MM/YYYY");
    page1.getCell("P10").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P11").value = moment(
      fechasInicioIngeniosComparativa.Cell11
    ).format("DD/MM/YYYY");
    page1.getCell("P11").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P12").value = moment(
      fechasInicioIngeniosComparativa.Cell12
    ).format("DD/MM/YYYY");
    page1.getCell("P12").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P14").value = moment(
      fechasInicioIngeniosComparativa.Cell14
    ).format("DD/MM/YYYY");
    page1.getCell("P14").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P15").value = moment(
      fechasInicioIngeniosComparativa.Cell15
    ).format("DD/MM/YYYY");
    page1.getCell("P15").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P17").value = moment(
      fechasInicioIngeniosComparativa.Cell17
    ).format("DD/MM/YYYY");
    page1.getCell("P17").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P18").value = moment(
      fechasInicioIngeniosComparativa.Cell18
    ).format("DD/MM/YYYY");
    page1.getCell("P18").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P19").value = moment(
      fechasInicioIngeniosComparativa.Cell19
    ).format("DD/MM/YYYY");
    page1.getCell("P19").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P20").value = moment(
      fechasInicioIngeniosComparativa.Cell20
    ).format("DD/MM/YYYY");
    page1.getCell("P20").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P21").value = moment(
      fechasInicioIngeniosComparativa.Cell21
    ).format("DD/MM/YYYY");
    page1.getCell("P21").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P22").value = moment(
      fechasInicioIngeniosComparativa.Cell22
    ).format("DD/MM/YYYY");
    page1.getCell("P22").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P23").value = moment(
      fechasInicioIngeniosComparativa.Cell23
    ).format("DD/MM/YYYY");
    page1.getCell("P23").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P24").value = moment(
      fechasInicioIngeniosComparativa.Cell24
    ).format("DD/MM/YYYY");
    page1.getCell("P24").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P25").value = moment(
      fechasInicioIngeniosComparativa.Cell25
    ).format("DD/MM/YYYY");
    page1.getCell("P25").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P26").value = "TOTALES";

    /** COLUMNA FIN DE ZAFRA 2022 **/
    page1.getCell("R10").value = moment(
      fechasInicioIngeniosComparativa?.CellR10
    ).format("DD/MM/YYYY");
    page1.getCell("R10").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R11").value = moment(
      fechasInicioIngeniosComparativa?.CellR11
    ).format("DD/MM/YYYY");
    page1.getCell("R11").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R12").value = moment(
      fechasInicioIngeniosComparativa?.CellR12
    ).format("DD/MM/YYYY");
    page1.getCell("R12").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R14").value = moment(
      fechasInicioIngeniosComparativa?.CellR14
    ).format("DD/MM/YYYY");
    page1.getCell("R14").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R15").value = moment(
      fechasInicioIngeniosComparativa?.CellR15
    ).format("DD/MM/YYYY");
    page1.getCell("R15").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R17").value = moment(
      fechasInicioIngeniosComparativa?.CellR17
    ).format("DD/MM/YYYY");
    page1.getCell("R17").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R18").value = moment(
      fechasInicioIngeniosComparativa?.CellR18
    ).format("DD/MM/YYYY");
    page1.getCell("R18").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R19").value = moment(
      fechasInicioIngeniosComparativa?.CellR19
    ).format("DD/MM/YYYY");
    page1.getCell("R19").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R20").value = moment(
      fechasInicioIngeniosComparativa?.CellR20
    ).format("DD/MM/YYYY");
    page1.getCell("R20").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R21").value = moment(
      fechasInicioIngeniosComparativa?.CellR21
    ).format("DD/MM/YYYY");
    page1.getCell("R21").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R22").value = moment(
      fechasInicioIngeniosComparativa?.CellR22
    ).format("DD/MM/YYYY");
    page1.getCell("R22").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R23").value = moment(
      fechasInicioIngeniosComparativa?.CellR23
    ).format("DD/MM/YYYY");
    page1.getCell("R23").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R24").value = moment(
      fechasInicioIngeniosComparativa?.CellR24
    ).format("DD/MM/YYYY");
    page1.getCell("R24").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R25").value = moment(
      fechasInicioIngeniosComparativa?.CellR25
    ).format("DD/MM/YYYY");
    page1.getCell("R25").font = { name: "Barlow", bold: false, size: 16 };

    // page1.getCell('R26').value = moment(
    //   fechasInicioIngeniosComparativa?.CellR26
    // ).format('DD/MM/YYYY')
    // page1.getCell('R26').font = { name: 'Barlow', bold: true, size: 13 }
    /************/

    /** COLUMNA DIAS DE AVANCE 2022**/
    page1.getCell("Q10").value = {
      formula: '=if(R10="",R27-P10,R10-P10)',
      result: 7,
    };
    page1.getCell("Q10").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q11").value = {
      formula: '=if(R11="",R27-P11,R11-P11)',
      result: 7,
    };
    page1.getCell("Q11").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q12").value = {
      formula: '=if(R12="",R27-P12,R12-P12)',
      result: 7,
    };
    page1.getCell("Q12").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q13").value = "";
    page1.getCell("Q14").value = {
      formula: '=if(R14="",R27-P14,R14-P14)',
      result: 7,
    };
    page1.getCell("Q14").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q15").value = {
      formula: '=if(R15="",R27-P15,R15-P15)',
      result: 7,
    };
    page1.getCell("Q15").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q16").value = "";
    page1.getCell("Q17").value = {
      formula: '=if(R17="",R27-P17,R17-P17)',
      result: 7,
    };
    page1.getCell("Q17").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q18").value = {
      formula: '=if(R18="",R27-P18,R18-P18)',
      result: 7,
    };
    page1.getCell("Q18").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q19").value = {
      formula: '=if(R19="",R27-P19,R19-P19)',
      result: 7,
    };
    page1.getCell("Q19").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q20").value = {
      formula: '=if(R20="",R27-P20,R20-P20)',
      result: 7,
    };
    page1.getCell("Q20").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q21").value = {
      formula: '=if(R21="",R27-P21,R21-P21)',
      result: 7,
    };
    page1.getCell("Q21").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q22").value = {
      formula: '=if(R22="",R27-P22,R22-P22)',
      result: 7,
    };
    page1.getCell("Q22").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q23").value = {
      formula: '=if(R23="",R27-P23,R23-P23)',
      result: 7,
    };
    page1.getCell("Q23").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q24").value = {
      formula: '=if(R24="",R27-P24,R24-P24)',
      result: 7,
    };
    page1.getCell("Q24").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("Q25").value = {
      formula: '=if(R25="",R27-P25,R25-P25)',
      result: 7,
    };
    page1.getCell("Q25").font = { name: "Barlow", bold: false, size: 16 };

    /*****************/

    /*** TOTAL AZUCAR ***/
    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }
    for (let i = 17; i <= 26; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }

    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }
    for (let i = 17; i <= 26; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }

    /** FILA LOS BALCANES **/
    page1.getCell("F13").value = { formula: "=SUM(F10:F12)", result: 7 };
    page1.getCell("G13").value = { formula: "=SUM(G10:G12)", result: 7 };
    page1.getCell("H13").value = { formula: "=SUM(H10:H12)", result: 7 };
    page1.getCell("K13").value = { formula: "=SUM(K10:K12)", result: 7 };
    page1.getCell("L13").value = { formula: "=SUM(L10:L12)", result: 7 };
    page1.getCell("M13").value = { formula: "=SUM(M10:M12)", result: 7 };
    page1.getCell("N13").value = { formula: "=SUM(N10:N12)", result: 7 };
    page1.getCell("O13").value = { formula: "=SUM(O10:O12)", result: 7 };

    page1.getCell("S13").value = { formula: "=SUM(S10:S12)", result: 7 };
    page1.getCell("T13").value = { formula: "=SUM(T10:T12)", result: 7 };
    page1.getCell("U13").value = { formula: "=SUM(U10:U12)", result: 7 };
    page1.getCell("X13").value = { formula: "=SUM(X10:X12)", result: 7 };
    page1.getCell("Y13").value = { formula: "=SUM(Y10:Y12)", result: 7 };
    page1.getCell("Z13").value = { formula: "=SUM(Z10:Z12)", result: 7 };
    page1.getCell("AA13").value = { formula: "=SUM(AA10:AA12)", result: 7 };
    page1.getCell("AB13").value = { formula: "=SUM(AB10:AB12)", result: 7 };

    /** FILA CASS **/
    page1.getCell("F16").value = { formula: "=SUM(F14:F15)", result: 7 };
    page1.getCell("G16").value = { formula: "=SUM(G14:G15)", result: 7 };
    page1.getCell("H16").value = { formula: "=SUM(H14:H15)", result: 7 };
    page1.getCell("K16").value = { formula: "=SUM(K14:K15)", result: 7 };
    page1.getCell("L16").value = { formula: "=SUM(L14:L15)", result: 7 };
    page1.getCell("M16").value = { formula: "=SUM(M14:M15)", result: 7 };
    page1.getCell("N16").value = { formula: "=SUM(N14:N15)", result: 7 };
    page1.getCell("O16").value = { formula: "=SUM(O14:O15)", result: 7 };

    page1.getCell("S16").value = { formula: "=SUM(S14:S15)", result: 7 };
    page1.getCell("T16").value = { formula: "=SUM(T14:T15)", result: 7 };
    page1.getCell("U16").value = { formula: "=SUM(U14:U15)", result: 7 };
    page1.getCell("X16").value = { formula: "=SUM(X14:X15)", result: 7 };
    page1.getCell("Y16").value = { formula: "=SUM(Y14:Y15)", result: 7 };
    page1.getCell("Z16").value = { formula: "=SUM(Z14:Z15)", result: 7 };
    page1.getCell("AA16").value = { formula: "=SUM(AA14:AA15)", result: 7 };
    page1.getCell("AB16").value = { formula: "=SUM(AB14:AB15)", result: 7 };

    /** FILA TOTALES  2023**/
    page1.mergeCells("A26:E26");
    page1.getCell("A26").value = "TOTALES";
    page1.getCell("F26").value = {
      formula: "=SUM(F10:F12,F14:F15,F17:F25)",
      result: 7,
    };
    page1.getCell("G26").value = {
      formula: "=SUM(G10:G12,G14:G15,G17:G25)",
      result: 7,
    };
    page1.getCell("H26").value = {
      formula: "=SUM(H10:H12,H14:H15,H17:H25)",
      result: 7,
    };
    page1.getCell("I26").value = {
      /***REVEEEER ***/ formula: "if(F27=0, 0,H27/F27*100)",
      result: 7,
    };
    page1.getCell("J26").value = {
      formula: "if(G27=0, 0,H27/G27*100)",
      result: 7,
    };
    page1.getCell("K26").value = {
      formula: "=SUM(K10:K12,K14:K15,K17:K25)",
      result: 7,
    };
    page1.getCell("L26").value = {
      formula: "=SUM(L10:L12,L14:L15,L17:L25)",
      result: 7,
    };
    page1.getCell("M26").value = {
      formula: "=SUM(M10:M12,M14:M15,M17:M25)",
      result: 7,
    };
    page1.getCell("N26").value = {
      formula: "=SUM(N10:N12,N14:N15,N17:N25)",
      result: 7,
    };
    page1.getCell("O26").value = {
      formula: "=O25+O24+O22+O21+O19+O18+O17+O15+O14+O12",
      result: 7,
    };
    /** FILAS TOTALES 2022 2*/
    page1.getCell("P26").value = "TOTALES";
    page1.getCell("Q26").value = Math.ceil(dataDiasZafraComparativa);
    page1.getCell("Q26").font = { name: "Barlow", bold: true, size: 15 };
    page1.getCell("S26").value = {
      formula: "=SUM(S10:S12,S14:S15,S17:S25)",
      result: 7,
    };
    page1.getCell("T26").value = {
      formula: "=SUM(T10:T12,T14:T15,T17:T25)",
      result: 7,
    };
    page1.getCell("U26").value = {
      formula: "=SUM(U10:U12,U14:U15,U17:U25)",
      result: 7,
    };
    page1.getCell("V26").value = {
      formula: "if(S26=0,0,U26/S26*100)",
      result: 7,
    };
    page1.getCell("W26").value = {
      formula: "if(T26=0,0,U26/T26*100)",
      result: 7,
    };
    page1.getCell("X26").value = {
      formula: "=SUM(X10:X12,X14:X15,X17:X25)",
      result: 7,
    };
    page1.getCell("Y26").value = {
      formula: "=Y24+Y22+Y21+Y20+Y19+Y18+Y17+Y15+Y14+Y12+Y11+Y10",
      result: 7,
    };
    page1.getCell("Z26").value = {
      formula: "=SUM(Z10:Z12,Z14:Z15,Z17:Z25)",
      result: 7,
    };
    page1.getCell("AA26").value = {
      formula: "=SUM(AA10:AA12,AA14:AA15,AA17:AA25)",
      result: 7,
    };
    page1.getCell("AB26").value = {
      formula: "=AB25+AB24+AB23+AB22+AB21+AB20+AB19+AB18+AB17+AB16+AB13",
      result: 7,
    };
    /***********/

    /***** FILA 27 *****/
    page1.mergeCells("A27:O27");
    page1.getCell(
      "A27"
    ).value = `Valores zafra ${anioData} hasta el ${dateFormat}`;
    page1.getCell("A27").font = { name: "Barlow", bold: true, size: 15 };
    page1.getCell("A27").alignment = alignCenter;
    page1.mergeCells("P27:AB27");
    page1.getCell("P27").value = `Valores zafra ${
      anioDataComparativo - 1
    } hasta el ${dateComparativaFormat}`;
    page1.getCell("P27").font = { name: "Barlow", bold: true, size: 15 };
    page1.getCell("P27").alignment = alignCenter;

    /**** FILA 28 ****/
    page1.mergeCells("A28:O28");
    page1.getCell(
      "O28"
    ).value = `Días transcurridos desde inicio de zafra: ${Math.ceil(
      dataDiasZafra
    )}`;

    page1.mergeCells("P28:AB28");
    page1.getCell(
      "AB28"
    ).value = `Días transcurridos desde inicio de zafra: ${Math.ceil(
      dataDiasZafraComparativa
    )}`;

    /** COMPARATIVOS **/
    page1.mergeCells("A30:O30");
    page1.getCell("A30").value = `COMPARATIVO ZAFRA ${anioData}/${
      zafraParteDiario - 1
    } - VARIACIÓN %  HASTA EL ${dateDatosProductivosFormato}`;
    page1.getCell("A30").alignment = alignCenter;
    page1.getCell("A30").font = functionFont("Barlow", true, 18);
    page1.getCell("A30").fill = bgGris;

    page1.mergeCells("A31:E31");
    page1.getCell("A31").value = "DIFERENCIA";

    page1.getCell("F31").value = { formula: "F26-S26" };
    page1.getCell("G31").value = { formula: "G26-T26" };
    page1.getCell("H31").value = { formula: "H26-U26" };
    page1.getCell("I31").value = { formula: "I26-V26" };
    page1.getCell("J31").value = { formula: "J26-W26" };
    page1.getCell("K31").value = { formula: "K26-X26" };
    page1.getCell("L31").value = { formula: "L26-Y26" };
    page1.getCell("M31").value = { formula: "M26-Z26" };
    page1.getCell("N31").value = { formula: "N26-AA26" };
    page1.getCell("O31").value = { formula: "O26-AB26" };

    page1.mergeCells("A32:E32");
    page1.getCell("A32").value = "%";
    page1.getCell("A32").alignment = alignCenter;

    page1.getCell("F32").value = {
      formula: '=if(S26=0,"100%",F31/S26)',
      result: 7,
    };
    page1.getCell("G32").value = {
      formula: '=if(T26=0,"100%",G31/T26)',
      result: 7,
    };
    page1.getCell("H32").value = {
      formula: '=if(U26=0,"100%",H31/U26)',
      result: 7,
    };
    page1.getCell("I32").value = {
      formula: '=if(V26=0,"100%",I31/V26)',
      result: 7,
    };
    page1.getCell("J32").value = {
      formula: '=if(W26=0,"100%",J31/W26)',
      result: 7,
    };
    page1.getCell("K32").value = {
      formula: '=if(X26=0,"100%",K31/X26)',
      result: 7,
    };
    page1.getCell("L32").value = {
      formula: '=if(Y26=0,"100%",L31/Y26)',
      result: 7,
    };
    page1.getCell("M32").value = {
      formula: '=if(Z26=0,"100%",M31/Z26)',
      result: 7,
    };
    page1.getCell("N32").value = {
      formula: '=if(AA26=0,"100%",N31/AA26)',
      result: 7,
    };
    page1.getCell("O32").value = {
      formula: '=if(AB26=0,"100%",O31/AB26)',
      result: 7,
    };

    page1.mergeCells("P30:V31");
    page1.getCell("P30").value = `Inicio de zafra ${anioData}: ${
      inicioZafra !== null ? moment(inicioZafra).format("DD/MM/YYYY") : ""
    }
Inicio de zafra ${zafraParteDiario - 1}: ${moment(
      inicioZafraComparativa
    ).format("DD/MM/YYYY")}`;
    page1.getCell("P30").alignment = alignStart;
    page1.getCell("P30").font = { name: "Barlow", bold: true, size: 16 };

    page1.mergeCells("W30:AB31");
    page1.getCell("W30").value = `Fin de zafra ${anioData}: ${
      finZafra !== "" ? moment(finZafra).format("DD/MM/YYYY") : ""
    }
Fin de zafra ${zafraParteDiario - 1}: ${moment(finZafraComparativa).format(
      "DD/MM/YYYY"
    )}`;
    page1.getCell("W30").alignment = alignStart;
    page1.getCell("W30").font = { name: "Barlow", bold: true, size: 16 };

    page1.mergeCells("P32:T32");
    page1.getCell("P32").value = "Diferencia de grado de avance entre zafras";
    page1.getCell("P32").font = functionFont("Barlow", true, 17);
    page1.getCell("P32").alignment = alignStart;
    page1.mergeCells("U32:V32");
    page1.getCell("U32").font = functionFont("Barlow", true, 18);
    page1.getCell("U32").value = { formula: "(V36-F36)/100" };
    page1.getCell("U32").alignment = alignStart;

    page1.mergeCells("W32:AB32");

    /*** ESTIMACIONES ***/
    let estimacionEEAOC;
    let CMBporDDJJ;
    dataComparativa?.forEach((d) => {
      if (d.anio_zafra === anioData) {
        estimacionEEAOC = d.estimacion_EEAOC;
      }
      if (d.anio_zafra === zafraParteDiario - 1) {
        CMBporDDJJ = d.CMB_DDJJ;
      }
    });

    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`A${i}:E${i}`);
      page1.mergeCells(`F${i}:G${i}`);
    }
    page1.getCell("A34").value = "Estimación EEAOC Materia prima bruta";
    page1.getCell("A35").value = `Caña Molida bruta hasta el ${dateFormat}`;
    page1.getCell("A36").value =
      "Grado de Avance respecto a la previsión por EEAOC";
    page1.getCell("A37").value = "Diferencia";
    page1.getCell("F34").value = parseInt(estimacionEEAOC);
    page1.getCell("F35").value = { formula: "F26" };
    page1.getCell("F36").value = { formula: "if(F34=0,0,F35/F34*100)" };
    page1.getCell("F37").value = { formula: "F36-100" };
    page1.getCell("H34").value = "Tn";
    page1.getCell("H35").value = "Tn";
    page1.getCell("H36").value = "%";
    page1.getCell("H37").value = "%";

    for (let i = 34; i <= 37; i++) {
      if (i === 36) {
        page1.getCell(i, 1).font = functionFont("Barlow", true, 16);
        page1.getCell(i, 6).font = functionFont("Barlow", true, 16);
        page1.getCell(i, 8).font = functionFont("Barlow", true, 16);

        page1.getCell(i, 16).font = functionFont("Barlow", true, 16);
        page1.getCell(i, 21).font = functionFont("Barlow", true, 16);
        page1.getCell(i, 23).font = functionFont("Barlow", true, 16);
      } else {
        page1.getCell(i, 1).font = functionFont("Barlow", false, 16);
        page1.getCell(i, 6).font = functionFont("Barlow", false, 16);
        page1.getCell(i, 8).font = functionFont("Barlow", false, 16);

        page1.getCell(i, 16).font = functionFont("Barlow", false, 16);
        page1.getCell(i, 21).font = functionFont("Barlow", false, 16);
        page1.getCell(i, 23).font = functionFont("Barlow", false, 16);
      }
    }

    page1.mergeCells("I34:L37");
    page1.getCell("I34").value = `ZAFRA ${anioData}`;
    page1.getCell("I34").font = functionFont("Barlow", true, 18);
    page1.getCell("I34").fill = bgNaranja;

    page1.mergeCells("M34:N37");
    page1.getCell("M34").value = "Producción Alcohol etílico anhidro [m3]";
    page1.getCell("M34").font = functionFont("Barlow", true, 16);
    page1.getCell("M34").fill = bgNaranja;

    page1.mergeCells("O34:O37");
    const alcoholTotal =
      parseInt(d1["R44"]) +
      parseInt(
        d6["R45"] +
          parseInt(d4["R46"]) +
          parseInt(d2["R47"]) +
          parseInt(d7["R48"]) +
          parseInt(d8["R49"]) +
          parseInt(d3["R50"]) +
          parseInt(d9["R51"]) +
          parseInt(d10["R52"]) +
          parseInt(d11["R53"]) +
          parseInt(d5["R54"]) +
          parseInt(d12["R55"]) +
          parseInt(d13["R56"]) +
          parseInt(d14["R57"])
      );
    page1.getCell("O34").value = alcoholTotal / 1000;
    page1.getCell("O34").font = functionFont("Barlow", true, 24);
    page1.getCell("O34").fill = bgNaranja;
    page1.getCell("O34").alignment = alignCenter;

    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`P${i}:U${i}`);
      page1.mergeCells(`V${i}:W${i}`);
    }
    page1.getCell("P34").value = "Total caña molida bruta por DDJJ";
    page1.getCell(
      "P35"
    ).value = `Caña molida bruta hasta el ${dateComparativaFormat} - Partes diarios`;
    page1.getCell(
      "P36"
    ).value = `Grado de avance respecto a lo declarado al IPAAT - Zafra ${
      zafraParteDiario - 1
    }`;
    page1.getCell("P37").value = "Diferencia";
    page1.getCell("V34").value = parseInt(CMBporDDJJ);
    page1.getCell("V35").value = { formula: "S26" };
    page1.getCell("V36").value = { formula: "V35/V34*100" };
    page1.getCell("V37").value = { formula: "100-V36" };
    page1.getCell("X34").value = "Tn";
    page1.getCell("X35").value = "Tn";
    page1.getCell("X36").value = "%";
    page1.getCell("X37").value = "%";

    for (let i = 34; i <= 37; i++) {
      page1.getCell(i, 16).font = functionFont("Barlow", false, 16);
      page1.getCell(i, 22).font = functionFont("Barlow", false, 16);
      page1.getCell(i, 24).font = functionFont("Barlow", false, 16);
    }

    page1.mergeCells("Y34:AB37");
    page1.getCell("Y34").value = `ZAFRA ${anioDataComparativo - 1}`;
    page1.getCell("Y34").font = functionFont("Barlow", true, 18);
    page1.getCell("Y34").fill = bgAzul;

    for (let i = 34; i <= 37; i++) {
      for (let j = 1; j <= 28; j++) {
        page1.getCell(i, j).alignment = {
          horizontal: "start",
          vertical: "middle",
        };
      }
    }
    page1.getCell("I34").alignment = alignCenter;
    page1.getCell("M34").alignment = alignCenter;
    page1.getCell("O34").alignment = alignCenter;
    page1.getCell("Y34").alignment = alignCenter;

    /*********  DATOS  *********/
    /** DATOS 2023 **/
    if (parteDiarioData.length > 0) {
      /** AGUILARES **/
      page1.getCell("F10").value = parseInt(d1["E10"]);
      page1.getCell("G10").value = parseInt(d1["F10"]);
      page1.getCell("H10").value = parseFloat(d1["G10"]);
      page1.getCell("K10").value = parseInt(d1["J10"]);
      page1.getCell("L10").value = parseInt(d1["K10"]);
      page1.getCell("N10").value = parseInt(d1["M10"]);
      page1.getCell("O10").value = parseInt(d1["N10"] / 1000);

      /** Cruz Alta **/
      page1.getCell("F11").value = parseInt(d2["E11"]);
      page1.getCell("G11").value = parseInt(d2["F11"]);
      page1.getCell("H11").value = parseFloat(d2["G11"]);
      page1.getCell("K11").value = parseInt(d2["J11"]);
      page1.getCell("L11").value = parseInt(d2["K11"]);
      page1.getCell("N11").value = parseInt(d2["M11"]);
      page1.getCell("O11").value = parseInt(d2["N11"] / 1000);

      /** La Florida **/
      page1.getCell("F12").value = parseInt(d3["E12"]);
      page1.getCell("G12").value = parseInt(d3["F12"]);
      page1.getCell("H12").value = parseFloat(d3["G12"]);
      page1.getCell("K12").value = parseInt(d3["J12"]);
      page1.getCell("L12").value = parseInt(d3["K12"]);
      page1.getCell("N12").value = parseInt(d3["M12"]);
      page1.getCell("O12").value = parseInt(d3["N12"] / 1000);

      /** Concepcion **/
      page1.getCell("F14").value = parseInt(d4["E14"]);
      page1.getCell("G14").value = parseInt(d4["F14"]);
      page1.getCell("H14").value = parseFloat(d4["G14"]);
      page1.getCell("K14").value = parseInt(d4["J14"]);
      page1.getCell("L14").value = parseInt(d4["K14"]);
      page1.getCell("N14").value = parseInt(d4["M14"]);
      page1.getCell("O14").value = parseInt(d4["N14"] / 1000);

      /** Marapa **/
      page1.getCell("F15").value = parseInt(d5["E15"]);
      page1.getCell("G15").value = parseInt(d5["F15"]);
      page1.getCell("H15").value = parseFloat(d5["G15"]);
      page1.getCell("K15").value = parseInt(d5["J15"]);
      page1.getCell("L15").value = parseInt(d5["K15"]);
      page1.getCell("N15").value = parseInt(d5["M15"]);
      page1.getCell("O15").value = parseInt(d5["N15"] / 1000);

      /** Bella Vista **/
      page1.getCell("F17").value = parseInt(d6["E17"]);
      page1.getCell("G17").value = parseInt(d6["F17"]);
      page1.getCell("H17").value = parseFloat(d6["G17"]);
      page1.getCell("K17").value = parseInt(d6["J17"]);
      page1.getCell("L17").value = parseInt(d6["K17"]);
      page1.getCell("N17").value = parseInt(d6["M17"]);
      page1.getCell("O17").value = parseInt(d6["N17"] / 1000);

      /** Famailla **/
      page1.getCell("F18").value = parseInt(d7["E18"]);
      page1.getCell("G18").value = parseInt(d7["F18"]);
      page1.getCell("H18").value = parseFloat(d7["G18"]);
      page1.getCell("K18").value = parseInt(d7["J18"]);
      page1.getCell("L18").value = parseInt(d7["K18"]);
      page1.getCell("N18").value = parseInt(d7["M18"]);
      page1.getCell("O18").value = parseInt(d7["N18"] / 1000);

      /** La Corona **/
      page1.getCell("F19").value = parseInt(d8["E19"]);
      page1.getCell("G19").value = parseInt(d8["F19"]);
      page1.getCell("H19").value = parseFloat(d8["G19"]);
      page1.getCell("K19").value = parseInt(d8["J19"]);
      page1.getCell("L19").value = parseInt(d8["K19"]);
      page1.getCell("N19").value = parseInt(d8["M19"]);
      page1.getCell("O19").value = parseInt(d8["N19"] / 1000);

      /** La Providencia **/
      page1.getCell("F20").value = parseInt(d9["E20"]);
      page1.getCell("G20").value = parseInt(d9["F20"]);
      page1.getCell("H20").value = parseFloat(d9["G20"]);
      page1.getCell("K20").value = parseInt(d9["J20"]);
      page1.getCell("L20").value = parseInt(d9["K20"]);
      // if(anioData === 2023) page1.getCell('L20').note = 'FALTA AZ ORGANICO Y OTOS AZ'
      page1.getCell("N20").value = parseInt(d9["M20"]);
      page1.getCell("O20").value = parseInt(d9["N20"] / 1000);

      /** La Trinidad **/
      page1.getCell("F21").value = parseInt(d10["E21"]);
      page1.getCell("G21").value = parseInt(d10["F21"]);
      page1.getCell("H21").value = parseFloat(d10["G21"]);
      page1.getCell("K21").value = parseInt(d10["J21"]);
      page1.getCell("L21").value = parseInt(d10["K21"]);
      page1.getCell("N21").value = parseInt(d10["M21"]);
      page1.getCell("O21").value = parseInt(d10["N21"] / 1000);

      /** Leales **/
      page1.getCell("F22").value = parseInt(d11["E22"]);
      page1.getCell("G22").value = parseInt(d11["F22"]);
      page1.getCell("H22").value = parseFloat(d11["G22"]);
      page1.getCell("K22").value = parseInt(d11["J22"]);
      page1.getCell("L22").value = parseInt(d11["K22"]);
      page1.getCell("N22").value = parseInt(d11["M22"]);
      page1.getCell("O22").value = parseInt(d11["N22"] / 1000);

      /** Nunorco **/
      page1.getCell("F23").value = parseInt(d12["E23"]);
      page1.getCell("G23").value = parseInt(d12["F23"]);
      page1.getCell("H23").value = parseFloat(d12["G23"]);
      page1.getCell("K23").value = parseInt(d12["J23"]);
      page1.getCell("L23").value = parseInt(d12["K23"]);
      page1.getCell("N23").value = parseInt(d12["M23"]);
      page1.getCell("O23").value = parseInt(d12["N23"] / 1000);

      /** Santa Barbara **/
      page1.getCell("F24").value = parseInt(d13["E24"]);
      page1.getCell("G24").value = parseInt(d13["F24"]);
      page1.getCell("H24").value = parseFloat(d13["G24"]);
      page1.getCell("K24").value = parseInt(d13["J24"]);
      page1.getCell("L24").value = parseInt(d13["K24"]);
      page1.getCell("N24").value = parseInt(d13["M24"]);
      page1.getCell("O24").value = parseInt(d13["N24"] / 1000);

      /** Sta Rosa **/
      page1.getCell("F25").value = parseInt(d14["E25"]);
      page1.getCell("G25").value = parseInt(d14["F25"]);
      page1.getCell("H25").value = parseFloat(d14["G25"]);
      page1.getCell("K25").value = parseInt(d14["J25"]);
      page1.getCell("L25").value = parseInt(d14["K25"]);
      page1.getCell("N25").value = parseInt(d14["M25"]);
      page1.getCell("O25").value = parseInt(d14["N25"] / 1000);

      /** San Juan */
      // page1.getCell('F26').value = parseInt(d15['E26'])
      // page1.getCell('G26').value = parseInt(d15['F26'])
      // page1.getCell('H26').value = parseFloat(d15['G26'])
      // page1.getCell('K26').value = parseInt(d15['J26'])
      // page1.getCell('L26').value = parseInt(d15['K26'])
      // page1.getCell('N26').value = parseInt(d15['M26'])
      // page1.getCell('O26').value = parseInt(d15['N26'])
    }

    /** DATOS 2022 **/
    /** AGUILARES **/
    page1.getCell("S10").value = parseInt(dc1["R10"]);
    page1.getCell("T10").value = parseInt(dc1["S10"]);
    page1.getCell("U10").value = parseFloat(dc1["T10"]);
    page1.getCell("X10").value = parseInt(dc1["W10"]);
    page1.getCell("Y10").value = parseInt(dc1["X10"]);
    page1.getCell("AA10").value = parseInt(dc1["Z10"]);
    page1.getCell("AB10").value = parseInt(dc1["AA10"] / 1000);

    /** Cruz Alta **/
    page1.getCell("S11").value = parseInt(dc2["R11"]);
    page1.getCell("T11").value = parseInt(dc2["S11"]);
    page1.getCell("U11").value = parseFloat(dc2["T11"]);
    page1.getCell("X11").value = parseInt(dc2["W11"]);
    page1.getCell("Y11").value = parseInt(dc2["X11"]);
    page1.getCell("AA11").value = parseInt(dc2["Z11"]);
    page1.getCell("AB11").value = parseInt(dc2["AA11"] / 1000);

    /** La Florida **/
    page1.getCell("S12").value = parseInt(dc3["R12"]);
    page1.getCell("T12").value = parseInt(dc3["S12"]);
    page1.getCell("U12").value = parseFloat(dc3["T12"]);
    page1.getCell("X12").value = parseInt(dc3["W12"]);
    page1.getCell("Y12").value = parseInt(dc3["X12"]);
    page1.getCell("AA12").value = parseInt(dc3["Z12"]);
    page1.getCell("AB12").value = parseInt(dc3["AA12"] / 1000);

    /** Concepcion **/
    page1.getCell("S14").value = parseInt(dc4["R14"]);
    page1.getCell("T14").value = parseInt(dc4["S14"]);
    page1.getCell("U14").value = parseFloat(dc4["T14"]);
    page1.getCell("X14").value = parseInt(dc4["W14"]);
    if (anioDataComparativo === 2023)
      page1.getCell("X14").note = "FALTA AZ REFINADO";
    page1.getCell("Y14").value = parseInt(dc4["X14"]);
    page1.getCell("AA14").value = parseInt(dc4["Z14"]);
    page1.getCell("AB14").value = parseInt(dc4["AA14"] / 1000);

    /** Marapa **/
    page1.getCell("S15").value = parseInt(dc5["R15"]);
    page1.getCell("T15").value = parseInt(dc5["S15"]);
    page1.getCell("U15").value = parseFloat(dc5["T15"]);
    page1.getCell("X15").value = parseInt(dc5["W15"]);
    page1.getCell("Y15").value = parseInt(dc5["X15"]);
    page1.getCell("AA15").value = parseInt(dc5["Z15"]);
    page1.getCell("AB15").value = parseInt(dc5["AA15"] / 1000);

    /** Bella Vista **/
    page1.getCell("S17").value = parseInt(dc6["R17"]);
    page1.getCell("T17").value = parseInt(dc6["S17"]);
    page1.getCell("U17").value = parseFloat(dc6["T17"]);
    page1.getCell("X17").value = parseInt(dc6["W17"]);
    page1.getCell("Y17").value = parseInt(dc6["X17"]);
    page1.getCell("AA17").value = parseInt(dc6["Z17"]);
    page1.getCell("AB17").value = parseInt(dc6["AA17"] / 1000);

    /** Famailla **/
    page1.getCell("S18").value = parseInt(dc7["R18"]);
    page1.getCell("T18").value = parseInt(dc7["S18"]);
    page1.getCell("U18").value = parseFloat(dc7["T18"]);
    page1.getCell("X18").value = parseInt(dc7["W18"]);
    if (anioDataComparativo === 2023)
      page1.getCell("X18").note = "FALTA AZ REFINADO";
    page1.getCell("Y18").value = parseInt(dc7["X18"]);
    page1.getCell("AA18").value = parseInt(dc7["Z18"]);
    page1.getCell("AB18").value = parseInt(dc7["AA18"] / 1000);

    /** La Corona **/
    page1.getCell("S19").value = parseInt(dc8["R19"]);
    page1.getCell("T19").value = parseInt(dc8["S19"]);
    page1.getCell("U19").value = parseFloat(dc8["T19"]);
    page1.getCell("X19").value = parseInt(dc8["W19"]);
    page1.getCell("Y19").value = parseInt(dc8["X19"]);
    page1.getCell("AA19").value = parseInt(dc8["Z19"]);
    page1.getCell("AB19").value = parseInt(dc8["AA19"] / 1000);

    /** La Providencia **/
    page1.getCell("S20").value = parseInt(dc9["R20"]);
    page1.getCell("T20").value = parseInt(dc9["S20"]);
    page1.getCell("U20").value = parseFloat(dc9["T20"]);
    page1.getCell("X20").value = parseInt(dc9["W20"]);
    page1.getCell("Y20").value = parseInt(dc9["X20"]);
    if (anioDataComparativo === 2023)
      page1.getCell("Y20").note = "FALTA AZ ORGANICO Y OTOS AZ";
    page1.getCell("AA20").value = parseInt(dc9["Z20"]);
    page1.getCell("AB20").value = parseInt(dc9["AA20"] / 1000);

    /** La Trinidad **/
    page1.getCell("S21").value = parseInt(dc10["R21"]);
    page1.getCell("T21").value = parseInt(dc10["S21"]);
    page1.getCell("U21").value = parseFloat(dc10["T21"]);
    page1.getCell("X21").value = parseInt(dc10["W21"]);
    page1.getCell("Y21").value = parseInt(dc10["X21"]);
    page1.getCell("AA21").value = parseInt(dc10["Z21"]);
    page1.getCell("AB21").value = parseInt(dc10["AA21"] / 1000);

    /** Leales **/
    page1.getCell("S22").value = parseInt(dc11["R22"]);
    page1.getCell("T22").value = parseInt(dc11["S22"]);
    page1.getCell("U22").value = parseFloat(dc11["T22"]);
    page1.getCell("X22").value = parseInt(dc11["W22"]);
    if (anioDataComparativo === 2023)
      page1.getCell("X22").note = "FALTA AZ REFINADO";
    page1.getCell("Y22").value = parseInt(dc11["X22"]);
    page1.getCell("AA22").value = parseInt(dc11["Z22"]);
    page1.getCell("AB22").value = parseInt(dc11["AA22"] / 1000);

    /** Nunorco **/
    page1.getCell("S23").value = parseInt(dc12["R23"]);
    page1.getCell("T23").value = parseInt(dc12["S23"]);
    page1.getCell("U23").value = parseFloat(dc12["T23"]);
    page1.getCell("X23").value = parseInt(dc12["W23"]);
    page1.getCell("Y23").value = parseInt(dc12["X23"]);
    page1.getCell("AA23").value = parseInt(dc12["Z23"]);
    page1.getCell("AB23").value = parseInt(dc12["AA23"] / 1000);

    /** Santa Barbara **/
    page1.getCell("S24").value = parseInt(dc13["R24"]);
    page1.getCell("T24").value = parseInt(dc13["S24"]);
    page1.getCell("U24").value = parseFloat(dc13["T24"]);
    page1.getCell("X24").value = parseInt(dc13["W24"]);
    page1.getCell("Y24").value = parseInt(dc13["X24"]);
    page1.getCell("AA24").value = parseInt(dc13["Z24"]);
    page1.getCell("AB24").value = parseInt(dc13["AA24"] / 1000);

    /** Sta Rosa **/
    page1.getCell("S25").value = parseInt(dc14["R25"]);
    page1.getCell("T25").value = parseInt(dc14["S25"]);
    page1.getCell("U25").value = parseFloat(dc14["T25"]);
    page1.getCell("X25").value = parseInt(dc14["W25"]);
    page1.getCell("Y25").value = parseInt(dc14["X25"]);
    page1.getCell("AA25").value = parseInt(dc14["Z25"]);
    page1.getCell("AB25").value = parseInt(dc14["AA25"] / 1000);
    /*******************/

    /**COLUMNA RTO CMB */
    for (let i = 10; i <= 26; i++) {
      if (page1.getCell(i, 6).value === 0) {
        page1.getCell(i, 9).value = 0;
        page1.getCell(i, 10).value = 0;
      } else {
        page1.getCell(i, 9).value = { formula: `=H${i}/F${i}*100`, result: 7 };
        page1.getCell(i, 10).value = { formula: `=H${i}/G${i}*100`, result: 7 };
      }
    }
    for (let i = 10; i <= 25; i++) {
      if (page1.getCell(i, 19).value === 0) {
        page1.getCell(i, 22).value = 0;
        page1.getCell(i, 23).value = 0;
      } else {
        page1.getCell(i, 22).value = { formula: `=U${i}/S${i}*100`, result: 7 };
        page1.getCell(i, 23).value = { formula: `=U${i}/T${i}*100`, result: 7 };
      }
    }

    page1.getCell("I13").value = {
      formula: "if(F13=0, 0,H13/F13*100)",
      result: 14,
    };
    page1.getCell("J13").value = {
      formula: "if(G13=0, 0,H13/G13*100)",
      result: 14,
    };

    page1.getCell("I16").value = {
      formula: "if(F16=0, 0,H16/F16*100)",
      result: 14,
    };
    page1.getCell("J16").value = {
      formula: "if(G16=0, 0,H16/G16*100)",
      result: 14,
    };

    page1.getCell("V13").value = {
      formula: "if(S13=0, 0,U13/S13*100)",
      result: 14,
    };
    page1.getCell("W13").value = {
      formula: "if(T13=0, 0,U13/T13*100)",
      result: 14,
    };

    page1.getCell("V16").value = {
      formula: "if(S16=0, 0,U16/S16*100)",
      result: 14,
    };
    page1.getCell("W16").value = {
      formula: "if(T16=0, 0,U16/T16*100)",
      result: 14,
    };

    /***** OCULTAR COLUMNAS *****/
    page1.getColumn(52).hidden = true;
    page1.getColumn(17).hidden = true;
    page1.getColumn(18).hidden = true;

    page1.getCell("P32").alignment = alignStart;
    page1.getCell("A34").alignment = alignStart;
    page1.getCell("A35").alignment = alignStart;
    page1.getCell("A36").alignment = alignStart;
    page1.getCell("M34").alignment = alignCenter;
    page1.getCell("P34").alignment = alignStart;
    page1.getCell("P35").alignment = alignStart;
    page1.getCell("P36").alignment = alignStart;

    /*** CONFIGURACION PAGINA ***/
    /* Fijar fila 1*/
    // page1.views = [
    //   { state: 'frozen', xSplit: 0, ySplit: 2, topLeftCell: 'A3', activeCell: 'A1' }
    // ];
    page1.pageSetup.printArea = "A1:AB59";
    page1.pageSetup.scale = 100;
    page1.pageSetup.margins = {
      left: 0.2,
      right: 0.1,
      top: 0.2,
      bottom: 0.2,
      header: 0.2,
      footer: 0.1,
    };

    /****************************** CUADRO NORTE ******************************/
    /** ESTILOS GENERALES **/
    page1.getRow(39).height = "28";
    page1.getRow(40).height = "25";
    page1.getRow(42).height = "44";
    for (let i = 44; i <= 48; i++) {
      page1.getRow(i).height = "28";
    }
    page1.getRow(49).height = "34";
    page1.getRow(50).height = "27";
    page1.getRow(51).height = "28";
    page1.getRow(53).height = "37";
    page1.getRow(54).height = "38";
    page1.getRow(55).height = "48";

    /** RELLENO **/
    for (let i = 1; i <= 15; i++) {
      page1.getCell(41, i).fill = bgNaranja;
      page1.getCell(43, i).fill = bgNaranja;
    }
    for (let i = 16; i <= 28; i++) {
      page1.getCell(41, i).fill = bgAzul;
      page1.getCell(43, i).fill = bgAzul;
    }
    for (let i = 1; i < 15; i++) {
      page1.getCell(50, i).fill = bgNaranja;
    }
    for (let i = 16; i < 29; i++) {
      page1.getCell(50, i).fill = bgAzul;
    }

    /** ALINEACION FILAS **/
    page1.getRow(39).alignment = alignCenter;
    page1.getRow(40).alignment = alignCenter;
    page1.getRow(41).alignment = alignCenter;
    page1.getRow(42).alignment = alignCenter;
    page1.getRow(43).alignment = alignCenter;
    for (let i = 44; i <= 48; i++) {
      page1.getRow(i).font = functionFont("Barlow", true, 15);
    }
    page1.getRow(49).font = functionFont("Barlow", true, 19);
    page1.getRow(49).alignment = alignCenter;
    page1.getRow(50).font = functionFont("Barlow", true, 18);
    page1.getRow(50).alignment = alignCenter;
    page1.getRow(51).font = functionFont("Barlow", true, 18);
    page1.getRow(51).alignment = alignCenter;

    page1.getRow(54).font = functionFont("Barlow", true, 18);
    page1.getRow(54).alignment = alignCenter;
    page1.getRow(55).alignment = alignCenter;
    page1.getRow(55).font = functionFont("Barlow", true, 18);

    for (let i = 44; i <= 48; i++) {
      for (let j = 3; j <= 28; j++) {
        page1.getCell(i, j).font = functionFont("Barlow", false, 16);
        page1.getCell(i, j).alignment = alignCenter;
      }
    }

    /** MERGE FILAS **/
    page1.mergeCells("A52:AB52");

    /** BORDES **/
    for (let i = 39; i <= 41; i++) {
      for (let j = 1; j <= 28; j++) {
        page1.getCell(i, j).border = borders(
          "medium",
          "000000",
          "medium",
          "000000",
          "medium",
          "000000",
          "medium",
          "000000"
        );
      }
    }
    for (let j = 45; j <= 47; j++) {
      for (let i = 1; i <= 28; i++) {
        page1.getCell(j, i).border = {
          top: { style: "thin", color: { argb: "000000" } },
          left: { style: "medium", color: { argb: "000000" } },
          bottom: { style: "thin", color: { argb: "000000" } },
          right: { style: "medium", color: { argb: "000000" } },
        };
      }
    }
    for (let i = 49; i <= 51; i++) {
      for (let j = 1; j <= 28; j++) {
        page1.getCell(i, j).border = borders(
          "medium",
          "000000",
          "medium",
          "000000",
          "medium",
          "000000",
          "medium",
          "000000"
        );
      }
    }
    for (let i = 1; i <= 28; i++) {
      page1.getCell(39, i).border = borders(
        "thick",
        "00326C",
        "medium",
        "000000",
        "thin",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(44, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "thin",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(48, i).border = borders(
        "thin",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(52, i).border = borders(
        "thin",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(53, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page1.getCell(54, i).border = borders(
        "medium",
        "000000",
        "thin",
        "000000",
        "thin",
        "000000",
        "thin",
        "000000"
      );
      page1.getCell(55, i).border = borders(
        "thin",
        "000000",
        "thin",
        "000000",
        "thick",
        "00326C",
        "thin",
        "000000"
      );
    }

    for (let i = 40; i <= 41; i++) {
      page1.getCell(i, 16).border = borders(
        "medium",
        "000000",
        "thick",
        "00326C",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 45; i <= 49; i++) {
      page1.getCell(i, 16).border = borders(
        "thin",
        "000000",
        "thick",
        "00326C",
        "thin",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 50; i <= 53; i++) {
      page1.getCell(i, 16).border = borders(
        "medium",
        "000000",
        "thick",
        "00326C",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    for (let i = 39; i <= 55; i++) {
      page1.getCell(i, 29).border = borders(
        "thin",
        "D9D9D9",
        "thick",
        "00326C",
        "thin",
        "D9D9D9",
        "thin",
        "D9D9D9"
      );
    }
    page1.getCell("P44").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "thin",
      "000000",
      "medium",
      "000000"
    );
    page1.getCell("P49").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "medium",
      "000000"
    );

    page1.getCell("P53").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C",
      "thin",
      "D9D9D9"
    );
    page1.getCell("W53").border = borders(
      "medium",
      "000000",
      "thin",
      "D9D9D9",
      "thick",
      "00326C",
      "thick",
      "00326C"
    );

    /** FORMATO NUMEROS **/
    /*Col 5 - Dias efectivos de zafra */
    for (let i = 10; i <= 25; i++) {
        page1.getCell(i, 5).numFmt = "#,##0";
    }
    /* Col 6 a 8*/
    for (let i = 44; i <= 49; i++) {
      for (let j = 6; j <= 8; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 19 a 21*/
    for (let i = 44; i <= 49; i++) {
      for (let j = 19; j <= 21; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 11 a 15*/
    for (let i = 44; i <= 49; i++) {
      for (let j = 11; j <= 15; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 24 a 28*/
    for (let i = 44; i <= 49; i++) {
      for (let j = 24; j <= 28; j++) {
        page1.getCell(i, j).numFmt = "#,##0";
      }
    }
    /* Col 9 a 10*/
    for (let i = 44; i <= 48; i++) {
      for (let j = 9; j <= 10; j++) {
        page1.getCell(i, j).numFmt = "0.#0";
      }
    }
    /* Col 22 a 23*/
    for (let i = 44; i <= 48; i++) {
      for (let j = 22; j <= 23; j++) {
        page1.getCell(i, j).numFmt = "0.##0";
      }
    }
    /* FILA 54 */
    for (let i = 6; i <= 8; i++) {
      page1.getCell(54, i).numFmt = "#,##0";
    }
    for (let i = 11; i <= 15; i++) {
      page1.getCell(54, i).numFmt = "#,##0";
    }
    for (let i = 9; i <= 10; i++) {
      page1.getCell(54, i).numFmt = "0.#0";
    }
    /* FILA 55 */
    for (let i = 6; i <= 15; i++) {
      page1.getCell(55, i).numFmt = "0.#0%";
    }

    /** ENCABEZADO **/
    page1.mergeCells("A39:AB39");
    page1.getCell(
      "E39"
    ).value = `Avance Parte Diario Norte Comparativo ${anioData}/${
      anioDataComparativo - 1
    }`;
    page1.getCell("E39").alignment = {
      horizontal: "center",
      vertical: "center",
    };
    page1.getCell("A39").font = { name: "Barlow", bold: true, size: 18 };

    /** ENCABEZADOS Y COLUMNAS **/
    page1.mergeCells("A41:B43");
    page1.getCell("A43").value = "INGENIOS";
    page1.getCell("A43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("A40:O40");
    page1.getCell("O40").value = `ZAFRA ${anioData}`;
    page1.getCell("O40").font = { name: "Barlow", bold: true, size: 18 };

    page1.mergeCells("P40:AB40");
    page1.getCell("AB40").value = `ZAFRA ${zafraParteDiario - 1}`;
    page1.getCell("AB40").font = { name: "Barlow", bold: true, size: 18 };

    /*** ZAFRA 2023 ***/
    page1.mergeCells("C41:C43");
    page1.getCell("C43").value = `Inicio de Zafra ${anioData}`;
    page1.getCell("C43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("D41:D43");
    page1.getCell("D43").value = "Días de avance";
    page1.getCell("D43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("E41:E43");
    // page1.getCell("E43").value = `fin de zafra ${anioData}`;
    page1.getCell("E43").value = `Días efectivos de molienda`;
    page1.getCell("E43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("F41:F43");
    page1.getCell("F43").value = "Caña Molida Bruta [Tn]";
    page1.mergeCells("G41:G43");
    page1.getCell("G43").value = "Caña Molida Neta [Tn]";
    page1.mergeCells("H41:H43");
    page1.getCell("H43").value = "Azúcar Equivalente [Tn]";
    page1.mergeCells("I41:I43");
    page1.getCell("I43").value = `Rto CMB [%]`;
    page1.mergeCells("J41:J43");
    page1.getCell("J43").value = `Rto CMN [%]`;
    page1.mergeCells("K41:K43");
    page1.getCell("K43").value = "Azúcar Blanco [Tn]";
    page1.mergeCells("L41:L43");
    page1.getCell("L43").value = "Azúcar Crudo [Tn]";
    page1.mergeCells("M41:M43");
    page1.getCell("M43").value = "Azúcar Físico [Tn]";
    page1.mergeCells("N41:N43");
    page1.getCell("N43").value = "Melaza [Tn]";
    page1.mergeCells("O41:O43");
    page1.getCell("O43").value = "Alcohol Hidratado [m3]";

    /*** Zafra 2022 ***/
    page1.mergeCells("P41:P43");
    page1.getCell("P43").value = `Inicio de Zafra ${zafraParteDiario - 1}`;
    page1.getCell("P43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("Q41:Q43");
    page1.getCell("Q43").value = "Días de Avance";
    page1.getCell("Q43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("R41:R43");
    page1.getCell("R43").value = `Fin de Zafra ${zafraParteDiario - 1}`;
    page1.getCell("R43").font = { name: "Barlow", bold: true, size: 15 };

    page1.mergeCells("S41:S43");
    page1.getCell("S43").value = "Caña Molida Bruta [Tn]";
    page1.mergeCells("T41:T43");
    page1.getCell("T43").value = "Caña Molida Neta [Tn]";
    page1.mergeCells("U41:U43");
    page1.getCell("U43").value = "Azúcar Equivalente [Tn]";
    page1.mergeCells("V41:V43");
    page1.getCell("V43").value = `Rto CMB Total [%]`;
    page1.mergeCells("W41:W43");
    page1.getCell("W43").value = `Rto CMN Total [%]`;
    page1.mergeCells("X41:X43");
    page1.getCell("X43").value = "Azúcar Blanco [Tn]";
    page1.mergeCells("Y41:Y43");
    page1.getCell("Y43").value = "Azúcar Crudo [Tn]";
    page1.mergeCells("Z41:Z43");
    page1.getCell("Z43").value = "Azúcar Físico [Tn]";
    page1.mergeCells("AA41:AA43");
    page1.getCell("AA43").value = "Melaza [Tn]";
    page1.mergeCells("AB41:AB43");
    page1.getCell("AB43").value = "Alcohol Hidratado [m3]";

    for (let i = 41; i <= 43; i++) {
      page1.getRow(i).font = { name: "Barlow", bold: true, size: 15 };
    }

    /** COLUMNAS INGENIOS **/
    for (let i = 44; i <= 48; i++) {
      page1.mergeCells(`A${i}:B${i}`);
    }
    const ingeniosNorte = dataIngenios.filter(
      (d) => d.id_region_ingenios === 2
    );
    ingeniosNorte.sort((a, b) => {
      if (a.nombre_ingenio < b.nombre_ingenio) {
        return -1;
      }
      if (a.nombre_ingenio > b.nombre_ingenio) {
        return 1;
      }
      return 0;
    });
    ingeniosNorte.forEach((d, i) => {
      page1.getCell(`A${i + 44}`).value = d?.nombre_ingenio;
      page1.getCell(`A${i + 44}`).font = functionFont("Barlow", false, 18);
      page1.getCell(`A${i + 44}`).alignment = alignStart;
    });

    /** FECHA INICIO ZAFRA 2023 **/
    page1.getCell("C44").value = fechasInicioIngeniosNorte.Cell44
      ? moment(fechasInicioIngeniosNorte.Cell44).format("DD/MM/YYYY")
      : null;
    page1.getCell("C44").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C45").value = fechasInicioIngeniosNorte.Cell45
      ? moment(fechasInicioIngeniosNorte.Cell45).format("DD/MM/YYYY")
      : null;
    page1.getCell("C45").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C46").value = fechasInicioIngeniosNorte.Cell46
      ? moment(fechasInicioIngeniosNorte.Cell46).format("DD/MM/YYYY")
      : null;
    page1.getCell("C46").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C47").value = fechasInicioIngeniosNorte.Cell47
      ? moment(fechasInicioIngeniosNorte.Cell47).format("DD/MM/YYYY")
      : null;
    page1.getCell("C47").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("C48").value = fechasInicioIngeniosNorte.Cell48
      ? moment(fechasInicioIngeniosNorte.Cell48).format("DD/MM/YYYY")
      : null;
    page1.getCell("C48").font = { name: "Barlow", bold: false, size: 16 };

    /** FIN DE ZAFRA 2023 **/
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 5).font = { name: "Barlow", bold: false, size: 16 };
      page1.getCell(i, 5).alignment = alignCenter;
    }
    page1.getCell("AZ44").value =
      fechasInicioIngeniosNorte?.Cell44 === undefined
        ? null
        : fechasInicioIngeniosNorte?.Cell44 &&
          fechasInicioIngeniosNorte?.CellE44 === null
        ? null
        : moment(fechasInicioIngeniosNorte?.CellE44).format("DD/MM/YYYY");

    page1.getCell("AZ45").value =
      fechasInicioIngeniosNorte?.Cell45 === undefined
        ? null
        : fechasInicioIngeniosNorte?.Cell45 &&
          fechasInicioIngeniosNorte?.CellE45 === null
        ? null
        : moment(fechasInicioIngeniosNorte?.CellE45).format("DD/MM/YYYY");

    page1.getCell("AZ46").value =
      fechasInicioIngeniosNorte?.Cell46 === undefined
        ? null
        : fechasInicioIngeniosNorte?.Cell46 &&
          fechasInicioIngeniosNorte?.CellE46 === null
        ? null
        : moment(fechasInicioIngeniosNorte?.CellE46).format("DD/MM/YYYY");

    page1.getCell("AZ47").value =
      fechasInicioIngeniosNorte?.Cell47 === undefined
        ? null
        : fechasInicioIngeniosNorte?.Cell47 &&
          fechasInicioIngeniosNorte?.CellE47 === null
        ? null
        : moment(fechasInicioIngeniosNorte?.CellE47).format("DD/MM/YYYY");

    page1.getCell("AZ48").value =
      fechasInicioIngeniosNorte?.Cell48 === undefined
        ? null
        : fechasInicioIngeniosNorte?.Cell48 &&
          fechasInicioIngeniosNorte?.CellE48 === null
        ? null
        : moment(fechasInicioIngeniosNorte?.CellE48).format("DD/MM/YYYY");

    /** COLUMNA DIAS EFECTIVOS DE AVANCE **/
    page1.getCell("E44").value = 48;
    page1.getCell("E45").value = 49;
    page1.getCell("E46").value = 33;
    page1.getCell("E47").value = 55;
    page1.getCell("E48").value = 56;

    /** DIAS DE AVANCE 2023 **/
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 4).font = { name: "Barlow", bold: false, size: 16 };
      page1.getCell(i, 4).alignment = alignCenter;
    }
    if (fechasInicioIngeniosNorte.Cell44) {
      page1.getCell("D44").value = {
        formula: `=if(AZ44="",(AZ26-C44)+1,(AZ44-C44)+1)`,
        result: 7,
      };
    }

    if (fechasInicioIngeniosNorte.Cell45) {
      page1.getCell("D45").value = {
        formula: `=if(AZ45="",(AZ26-C45)+1,(AZ45-C45)+1)`,
        result: 7,
      };
    }

    if (fechasInicioIngeniosNorte.Cell46) {
      page1.getCell("D46").value = {
        formula: `=if(AZ46="",(AZ26-C46)+1,(AZ46-C46)+1)`,
        result: 7,
      };
    }

    if (fechasInicioIngeniosNorte.Cell47) {
      page1.getCell("D47").value = {
        formula: `=if(AZ47="",(AZ26-C47)+1,(AZ47-C47)+1)`,
        result: 7,
      };
    }

    if (fechasInicioIngeniosNorte.Cell48) {
      page1.getCell("D48").value = {
        formula: `=if(AZ48="",(AZ26-C48)+1,(AZ48-C48)+1)`,
        result: 7,
      };
    }

    /** FECHA INICIO ZAFRA 2022 **/
    page1.getCell("P44").value = moment(
      fechasInicioIngeniosNorteComparativa.Cell44
    ).format("DD/MM/YYYY");
    page1.getCell("P44").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P45").value = moment(
      fechasInicioIngeniosNorteComparativa.Cell45
    ).format("DD/MM/YYYY");
    page1.getCell("P45").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P46").value = moment(
      fechasInicioIngeniosNorteComparativa.Cell46
    ).format("DD/MM/YYYY");
    page1.getCell("P46").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P47").value = moment(
      fechasInicioIngeniosNorteComparativa.Cell47
    ).format("DD/MM/YYYY");
    page1.getCell("P47").font = { name: "Barlow", bold: false, size: 16 };
    page1.getCell("P48").value = moment(
      fechasInicioIngeniosNorteComparativa.Cell48
    ).format("DD/MM/YYYY");
    page1.getCell("P48").font = { name: "Barlow", bold: false, size: 16 };

    /** FECHA FIN ZAFRA 2022 **/
    page1.getCell("R44").value = moment(
      fechasInicioIngeniosNorteComparativa?.CellR44
    ).format("DD/MM/YYYY");
    page1.getCell("R44").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R45").value = moment(
      fechasInicioIngeniosNorteComparativa?.CellR45
    ).format("DD/MM/YYYY");
    page1.getCell("R45").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R46").value = moment(
      fechasInicioIngeniosNorteComparativa?.CellR46
    ).format("DD/MM/YYYY");
    page1.getCell("R46").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R47").value = moment(
      fechasInicioIngeniosNorteComparativa?.CellR47
    ).format("DD/MM/YYYY");
    page1.getCell("R47").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("R48").value = moment(
      fechasInicioIngeniosNorteComparativa?.CellR48
    ).format("DD/MM/YYYY");
    page1.getCell("R48").font = { name: "Barlow", bold: false, size: 16 };

    /** DIAS DE AVANCE 2022 **/
    page1.getCell("Q44").value = {
      formula: '=if(R44="",R50-P44,R44-P44)',
      result: 7,
    };
    page1.getCell("Q44").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("Q45").value = {
      formula: '=if(R45="",R50-P45,R45-P45)',
      result: 7,
    };
    page1.getCell("Q45").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("Q46").value = {
      formula: '=if(R46="",R50-P46,R46-P46)',
      result: 7,
    };
    page1.getCell("Q46").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("Q47").value = {
      formula: '=if(R47="",R50-P47,R47-P47)',
      result: 7,
    };
    page1.getCell("Q47").font = { name: "Barlow", bold: false, size: 16 };

    page1.getCell("Q48").value = {
      formula: '=if(R48="",R50-P48,R48-P48)',
      result: 7,
    };
    page1.getCell("Q48").font = { name: "Barlow", bold: false, size: 16 };

    /**TOTAL AZUCAR **/
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }

    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }

    /** Columna Rendimientos 2023 **/
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 9).value = {
        formula: `=if(F${i}=0,0,H${i}/F${i}*100)`,
        result: 7,
      };
    }
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 10).value = {
        formula: `=if(G${i}=0,0,H${i}/G${i}*100)`,
        result: 7,
      };
    }

    /** FILA TOTALES 2023 **/
    page1.mergeCells("A49:E49");
    page1.getCell("A49").value = "TOTALES";
    page1.getCell("F49").value = {
      formula: "=SUM(F44:F48)",
      result: 7,
    };
    page1.getCell("G49").value = {
      formula: "=SUM(G44:G48)",
      result: 7,
    };
    page1.getCell("H49").value = {
      formula: "=SUM(H44:H48)",
      result: 7,
    };
    page1.getCell("I49").value = {
      formula: "if(F49=0, 0,H49/F49*100)",
      result: 7,
    };
    page1.getCell("J49").value = {
      formula: "if(G49=0, 0,H49/G49*100)",
      result: 7,
    };
    page1.getCell("K49").value = {
      formula: "=SUM(K44:K48)",
      result: 7,
    };
    page1.getCell("L49").value = {
      formula: "=SUM(L44:L48)",
      result: 7,
    };
    page1.getCell("M49").value = {
      formula: "=SUM(M44:M48)",
      result: 7,
    };
    page1.getCell("N49").value = {
      formula: "=SUM(N44:N48)",
      result: 7,
    };
    page1.getCell("O49").value = {
      formula: "=SUM(O44:O48)",
      result: 7,
    };

    /** FILAS TOTALES 2022 **/
    page1.getCell("P49").value = "TOTALES";
    // page1.getCell("Q49").value = Math.ceil(dataDiasZafraComparativa);
    // page1.getCell("Q49").font = { name: "Barlow", bold: true, size: 15 };

    page1.getCell("S49").value = {
      formula: "=SUM(S44:S48)",
      result: 7,
    };
    page1.getCell("T49").value = {
      formula: "=SUM(T44:T48)",
      result: 7,
    };
    page1.getCell("U49").value = {
      formula: "=SUM(U44:U48)",
      result: 7,
    };

    page1.getCell("V49").value = {
      formula: "if(S49=0,0,U49/S49*100)",
      result: 7,
    };
    page1.getCell("W49").value = {
      formula: "if(T49=0,0,U49/T49*100)",
      result: 7,
    };

    page1.getCell("X49").value = {
      formula: "=SUM(X44:X48)",
      result: 7,
    };
    page1.getCell("Y49").value = {
      formula: "=SUM(Y44:Y48)",
      result: 7,
    };
    page1.getCell("Z49").value = {
      formula: "=SUM(Z44:Z48)",
      result: 7,
    };
    page1.getCell("AA49").value = {
      formula: "=SUM(AA44:AA48)",
      result: 7,
    };
    page1.getCell("AB49").value = {
      formula: "=SUM(AB44:AB48)",
      result: 7,
    };

    /** Columna Rendimientos 2022 **/
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 22).value = {
        formula: `=if(S${i}=0,0,U${i}/S${i}*100)`,
        result: 7,
      };
    }
    for (let i = 44; i <= 48; i++) {
      page1.getCell(i, 23).value = {
        formula: `=if(T${i}=0,0,U${i}/T${i}*100)`,
        result: 7,
      };
    }

    /** FILA 50 **/
    page1.mergeCells("A50:O50");
    page1.getCell(
      "A50"
    ).value = `Valores zafra ${anioData} hasta el ${dateFormat}`;

    page1.mergeCells("P50:AB50");
    page1.getCell("P50").value = `Valores zafra ${
      anioDataComparativo - 1
    } hasta el ${dateComparativaFormat}`;

    /** FILA 51 **/
    page1.mergeCells("A51:O51");
    page1.getCell(
      "O51"
    ).value = `Días transcurridos desde inicio de zafra: ${Math.ceil(
      dataDiasZafraNorte
    )}`;

    page1.mergeCells("P51:AB51");
    page1.getCell(
      "AB51"
    ).value = `Días transcurridos desde inicio de zafra: ${Math.ceil(
      dataDiasZafraNorteComparativa
    )}`;

    /** COMPARATIVOS **/
    page1.mergeCells("A53:O53");
    page1.getCell("A53").value = `COMPARATIVO NORTE ZAFRA ${anioData}/${
      zafraParteDiario - 1
    } - VARIACIÓN %  HASTA EL ${dateDatosProductivosFormato}`;

    page1.getCell("A53").fill = bgGris;
    page1.getCell("A53").font = functionFont("Barlow", true, 18);
    page1.getCell("A53").alignment = alignCenter;
    page1.mergeCells("A54:E54");
    page1.getCell("A54").value = "DIFERENCIA";

    page1.getCell("F54").value = { formula: "F49-S49" };
    page1.getCell("G54").value = { formula: "G49-T49" };
    page1.getCell("H54").value = { formula: "H49-U49" };
    page1.getCell("I54").value = { formula: "I49-V49" };
    page1.getCell("J54").value = { formula: "J49-W49" };
    page1.getCell("K54").value = { formula: "K49-X49" };
    page1.getCell("L54").value = { formula: "L49-Y49" };
    page1.getCell("M54").value = { formula: "M49-Z49" };
    page1.getCell("N54").value = { formula: "N49-AA49" };
    page1.getCell("O54").value = { formula: "O49-AB49" };

    page1.mergeCells("A55:E55");
    page1.getCell("A55").value = "%";

    page1.getCell("F55").value = {
      formula: '=if(S49=0,"100%",F54/S49)',
      result: 7,
    };
    page1.getCell("G55").value = {
      formula: '=if(T49=0,"100%",G54/T49)',
      result: 7,
    };
    page1.getCell("H55").value = {
      formula: '=if(U49=0,"100%",H54/U49)',
      result: 7,
    };
    page1.getCell("I55").value = {
      formula: '=if(V49=0,"100%",I54/V49)',
      result: 7,
    };
    page1.getCell("J55").value = {
      formula: '=if(W49=0,"100%",J54/W49)',
      result: 7,
    };
    page1.getCell("K55").value = {
      formula: '=if(X49=0,"100%",K54/X49)',
      result: 7,
    };
    page1.getCell("L55").value = {
      formula: '=if(Y49=0,"100%",L54/Y49)',
      result: 7,
    };
    page1.getCell("M55").value = {
      formula: '=if(Z49=0,"100%",M54/Z49)',
      result: 7,
    };
    page1.getCell("N55").value = {
      formula: '=if(AA49=0,"100%",N54/AA49)',
      result: 7,
    };
    page1.getCell("O55").value = {
      formula: '=if(AB49=0,"100%",O54/AB49)',
      result: 7,
    };

    /** INICIO / FIN ZAFRA **/
    page1.mergeCells("P53:V55");
    page1.getCell("P53").value = `Inicio de zafra ${anioData}: ${
      inicioZafraNorte !== null
        ? moment(inicioZafraNorte).format("DD/MM/YYYY")
        : ""
    }
Inicio de zafra ${zafraParteDiario - 1}: ${moment(
      inicioZafraNorteComparativa
    ).format("DD/MM/YYYY")}`;
    page1.getCell("P53").alignment = {
      wrapText: true,
      horizontal: "start",
      vertical: "middle",
    };
    page1.getCell("P53").font = { name: "Barlow", bold: true, size: 16 };

    page1.mergeCells("W53:AB55");
    page1.getCell("W53").value = `Fin de zafra ${anioData}: ${
      finZafraNorte !== null ? moment(finZafraNorte).format("DD/MM/YYYY") : ""
    }
Fin de zafra ${zafraParteDiario - 1}: ${moment(finZafraNorteComparativa).format(
      "DD/MM/YYYY"
    )}`;
    page1.getCell("W53").alignment = {
      wrapText: true,
      horizontal: "start",
      vertical: "middle",
    };
    page1.getCell("W53").font = { name: "Barlow", bold: true, size: 16 };
/********************************************/

/*** TOTAL ARGENTINA ***/
page1.mergeCells("A57:O57");
page1.mergeCells("A58:B60");
page1.mergeCells("C58:C60");
page1.mergeCells("D58:D60");
page1.mergeCells("E58:E60");
page1.mergeCells("F58:F60");
page1.mergeCells("G58:G60");
page1.mergeCells("H58:H60");
page1.mergeCells("I58:I60");
page1.mergeCells("J58:J60");
page1.mergeCells("K58:K60");
page1.mergeCells("L58:L60");
page1.mergeCells("M58:M60");
page1.mergeCells("N58:N60");
page1.mergeCells("O58:O60");
page1.mergeCells("A61:B61");
page1.mergeCells("A62:O63");

/** ALINEACION **/
for(let i = 57;i <= 62;i++) {
  page1.getRow(i).alignment = alignCenter
}

/** RELLENO **/
for (let i = 1; i <= 15; i++) {
  page1.getCell(58, i).fill = bgNaranja;
}

/** FORMATOS **/
page1.getCell("A57").font = functionFont("Barlow", true, 20)
for(let i=1; i<=15; i++) {
  page1.getCell(58,i).font = functionFont("Barlow", true, 16)
}
page1.getCell("A61").font = functionFont("Barlow", true, 16)
for(let i=1; i<=15; i++) {
  page1.getCell(61,i).font = functionFont("Barlow", true, 16)
}
page1.getCell("A62").font = functionFont("Barlow", true, 18)

/** TAMANO FILAS Y COLUMNAS **/
page1.getRow(57).height = "28";
page1.getRow(58).height = "35";
page1.getRow(59).height = "35";
page1.getRow(61).height = "30";
page1.getRow(62).height = "10";
page1.getRow(63).height = "10";

/** BORDES **/
for (let i = 57; i <= 62; i++) {
  for (let j = 1; j <= 15; j++) {
    page1.getCell(i, j).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
  }
}
page1.getCell("A57").border = borders(
  "thick",
  "00326c",
  "thick",
  "00326c",
  "medium",
  "000000",
  "thick",
  "00326c",
);

page1.getCell("A58").border = borders(
  "medium",
  "000000",
  "thick",
  "00326c",
  "thin",
  "000000",
  "medium",
  "000000",
);
for(let i=3;i<=14;i++) { 
  page1.getCell(58, i).border = borders(
    "medium",
    "000000",
    "medium",
    "000000",
    "thin",
    "000000",
    "medium",
    "000000",
  );
}
page1.getCell("O58").border = borders(
  "medium",
  "000000",
  "medium",
  "000000",
  "thin",
  "000000",
  "thick",
  "00326c",
);

page1.getCell("A61").border = borders(
  "thin",
  "000000",
  "thick",
  "00326c",
  "thick",
  "00326c",
  "medium",
  "000000",
);
for(let i=3;i<=14;i++) { 
  page1.getCell(61, i).border = borders(
    "thin",
    "000000",
    "medium",
    "000000",
    "thick",
    "00326c",
    "medium",
    "000000",
  );
}
page1.getCell("O61").border = borders(
  "thin",
  "000000",
  "medium",
  "000000",
  "thick",
  "00326c",
  "thick",
  "00326c",
);

page1.getCell("A62").border = borders(
  "thick",
  "00326c",
  "thin",
  "FFFFFF",
  "thick",
  "00326c",
  "thin",
  "FFFFFF",
);

/** FORMATO NUMEROS **/
  for (let j = 5; j <= 7; j++) {
    page1.getCell(61, j).numFmt = "#,##0";
  }
  for (let j = 10; j <= 15; j++) {
    page1.getCell(61, j).numFmt = "#,##0";
  }
  for (let j = 8; j <= 9; j++) {
    page1.getCell(61, j).numFmt = "#.#0";
  }

/** ENCABEZADOS **/
page1.getCell(
  "A57"
).value = `Avance Total Argentina ${anioData}`;

page1.getCell("A58").value = "";
page1.getCell("C58").value = `Inicio de Zafra ${anioData}`;
page1.getCell("D58").value = "Días de avance";
page1.getCell("E58").value = "Días efectivos de molienda";
page1.getCell("F58").value = "Caña Molida Bruta [Tn]";
page1.getCell("G58").value = "Caña Molida Neta [Tn]";
page1.getCell("H58").value = "Azúcar Equivalente [Tn]";
page1.getCell("I58").value = `Rto CMB [%]`;
page1.getCell("J58").value = `Rto CMN [%]`;
page1.getCell("K58").value = "Azúcar Blanco [Tn]";
page1.getCell("L58").value = "Azúcar Crudo [Tn]";
page1.getCell("M58").value = "Azúcar Fisico [Tn]";
page1.getCell("N58").value = "Melaza [Tn]";
page1.getCell("O58").value = "Alcohol Hidratado [m3]";

page1.getCell("A61").value = "Totales"

/** VALORES **/
page1.getCell("F61").value = {
  formula: `F26+F49`,
  result: 7
}
page1.getCell("G61").value = {
  formula: `G26+G49`,
  result: 7
}
page1.getCell("H61").value = {
  formula: `H26+H49`,
  result: 7
}

page1.getCell("I61").value = {
  formula: `=if(F61=0, 0,H61/F61*100)`,
  result: 7
}
page1.getCell("J61").value = {
  formula: `=if(G61=0, 0,H61/G61*100)`,
  result: 7
}

page1.getCell("K61").value = {
  formula: `K26+K49`,
  result: 7
}
page1.getCell("L61").value = {
  formula: `L26+L49`,
  result: 7
}
page1.getCell("M61").value = {
  formula: `M26+M49`,
  result: 7
}
page1.getCell("N61").value = {
  formula: `N26+N49`,
  result: 7
}
page1.getCell("O61").value = {
  formula: `O26+O49`,
  result: 7
}

/***********************************************/

    /*** OBSERVACIONES ***/
    page1.mergeCells("A64:AB64");
    page1.getCell("A64").border = borders(
      "thick",
      "00326C",
      "thick",
      "00326C",
      "thick",
      "00326C",
      "thick",
      "00326C"
    );
    page1.getRow(64).height ="80"
    page1.getCell("A64").value ={
      richText: [
        { text: 'Observaciones:', font: { bold: true, name: "Barlow", size: 13 } },  // Parte en negrita
        { text: '\nTotal Azúcar Blanco: Azúcar Tipo A + Azúcar Refinada\nTotal Azúcar Crudo: Azúcar Crudo + Azúcar Orgánico + Otros Azcúcares.', font: { bold: false, name: "Barlow", size: 13 } },
        {text: '\nEn el reverso están las azúcares discriminada por tipo.', font: { bold: false, name: "Barlow", size: 13 }}
      ]
    }    
    page1.getCell("A64").alignment = { wrapText: true };

    /******************************** PAGINA 2 ********************************/

    page2.getRow(20).font = functionFont("Barlow", true, 22);

    /** Tamanos filas y columnas **/
    page2.getColumn(1).width = "15";
    for (let i = 2; i <= 27; i++) {
      page2.getColumn(i).width = "19";
    }
    for (let i = 8; i <= 14; i++) {
      page2.getColumn(i).width = "14";
    }
    for (let i = 15; i <= 24; i++) {
      page2.getColumn(i).width = "18";
    }

    page2.getRow(1).height = "24";
    page2.getRow(2).height = "57";
    page2.getRow(3).height = "45";
    page2.getRow(5).height = "26";
    for (let i = 6; i <= 19; i++) {
      page2.getRow(i).height = "42";
    }
    page2.getRow(20).height = "70";

    /** Fuente **/
    page2.getRow(4).font = functionFont("Barlow", true, 16);
    for (let i = 6; i <= 19; i++) {
      page2.getRow(i).font = { name: "Barlow", size: 18 };
    }

    /** Fill **/
    for (let i = 1; i <= 25; i++) {
      page2.getCell(3, i).fill = bgGris;
      page2.getCell(4, i).fill = bgGris;
    }
    for (let i = 6; i <= 9; i++) {
      page2.getCell(i, 20).fill = bgGris;
    }

    /*** Alineaciones ***/
    page2.getRow(4).alignment = alignStart;
    for (let i = 6; i <= 20; i++) {
      page2.getRow(i).alignment = alignCenter;
    }

    /*** Formato de numeros ***/
    for (let i = 6; i <= 19; i++) {
      for (let j = 3; j <= 7; j++) {
        page2.getCell(i, j).numFmt = "#,##0";
      }
    }

    for (let i = 6; i <= 20; i++) {
      for (let j = 8; j <= 20; j++) {
        page2.getCell(i, j).numFmt = "#,##0";
      }
    }
    for (let i = 6; i <= 9; i++) {
      for (let j = 21; j <= 25; j++) {
        page2.getCell(i, j).numFmt = "#,##0";
      }
    }
    page2.getCell("V20").numFmt = "#,##0";
    /*** Merge ***/
    page2.mergeCells("T10:Y19");

    /** Bordes **/

    page2.getCell("H3").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "thin",
      "000000",
      "thin",
      "000000"
    );
    /*** Bordes datos de azucar ***/
    for (let i = 6; i <= 20; i++) {
      for (let j = 3; j <= 7; j++) {
        page2.getCell(i, j).border = borders(
          "thin",
          "000000",
          "medium",
          "000000",
          "thin",
          "000000",
          "medium",
          "000000"
        );
      }
    }

    /*** Bordes datos de alochol ***/
    for (let i = 6; i <= 20; i++) {
      for (let j = 8; j <= 14; j++) {
        page2.getCell(i, j).border = borders(
          "thin",
          "000000",
          "medium",
          "000000",
          "thin",
          "000000",
          "medium",
          "000000"
        );
      }
    }
    /*** Bordes datos de exportacion por tipo ***/
    for (let i = 6; i <= 20; i++) {
      for (let j = 15; j <= 19; j++) {
        page2.getCell(i, j).border = borders(
          "thin",
          "000000",
          "medium",
          "000000",
          "thin",
          "000000",
          "medium",
          "000000"
        );
      }
    }
    /*** Bordes datos de destino de exportacion ***/
    for (let i = 6; i <= 20; i++) {
      for (let j = 20; j <= 25; j++) {
        page2.getCell(i, j).border = borders(
          "thin",
          "000000",
          "medium",
          "000000",
          "thin",
          "000000",
          "medium",
          "000000"
        );
      }
    }

    /*** Encabezados ***/
    for (let i = 1; i <= 25; i++) {
      page2.getCell(1, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
      page2.getCell(3, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "thin",
        "000000",
        "medium",
        "000000"
      );
      page2.getCell(4, i).border = borders(
        "thin",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    page2.getCell("A3").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );

    /*** Columna 1**/
    for (let i = 1; i <= 20; i++) {
      page2.getCell(i, 1).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 6; i <= 19; i++) {
      page2.getCell(i, 1).border = borders(
        "thin",
        "000000",
        "thick",
        "00326C",
        "thin",
        "000000",
        "medium",
        "000000"
      );
    }

    /**** BORDES AZULES SEPARATIVOS ****/
    for (let i = 6; i <= 20; i++) {
      page2.getCell(i, 8).border = borders(
        "thin",
        "000000",
        "thick",
        "00326C",
        "thin",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 6; i <= 20; i++) {
      page2.getCell(i, 15).border = borders(
        "thin",
        "000000",
        "thick",
        "00326C",
        "thin",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 6; i <= 20; i++) {
      page2.getCell(i, 25).border = borders(
        "thin",
        "000000",
        "medium",
        "000000",
        "thin",
        "000000",
        "thick",
        "00326C"
      );
    }
    /*** Bordes fila 20 ***/
    for (let i = 1; i <= 25; i++) {
      page2.getCell(20, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "thick",
        "00326C",
        "medium",
        "000000"
      );
    }

    page2.getCell("H1").border = borders(
      "thick",
      "00326C",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thick",
      "00326C"
    );
    page2.getCell("H3").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "thin",
      "000000",
      "thick",
      "00326C"
    );
    page2.getCell("H4").border = borders(
      "thin",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page2.getCell("G20").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C"
    );

    page2.getCell("O1").border = borders(
      "thick",
      "00326C",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thick",
      "00326C"
    );
    page2.getCell("O4").border = borders(
      "thin",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page2.getCell("T3").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "thin",
      "D9D9D9",
      "thick",
      "00326C"
    );
    page2.getCell("O20").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C",
      "medium",
      "000000"
    );

    page2.getCell("V20").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C"
    );
    page2.getCell("X4").border = borders(
      "thin",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
    );
    page2.getCell("Y4").border = borders(
      "thin",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "thick",
      "003026C",
    );

    page2.getCell("A1").border = borders(
      "thick",
      "00326C",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thick",
      "00326c"
    );
    page2.getCell("A3").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page2.getCell("A20").border = borders(
      "thin",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C",
      "thin",
      "000000",
    );

    /**** AZUCARES ****/
    page2.mergeCells("A1:G2");
    page2.getCell(
      "A1"
    ).value = `PRODUCCIÓN POR TIPO DE AZÚCARES  |  HASTA  ${dateDatosProductivosFormato}`;
    page2.getCell("A1").font = functionFont("Barlow", true, 18);
    page2.getCell("A1").alignment = alignCenter;
    page2.getCell("A1").fill = bgNaranja;

    page2.mergeCells("A3:B5");
    page2.getCell("A3").value = "Ingenios";
    page2.getCell("A3").font = functionFont("Barlow", true, 18);
    page2.getCell("A3").alignment = alignCenter;
    page2.getCell("A3").fill = bgGris;

    page2.mergeCells("C3:G3");
    page2.getCell("C3").value = `TIPOS DE AZÚCARES (Tn)`;
    page2.getCell("C3").font = functionFont("Barlow", true, 16);
    page2.getCell("C3").alignment = alignCenter;
    page2.getCell("C3").fill = bgGris;

    page2.mergeCells("C4:C5");
    page2.getCell("C4").value = `Común Tipo "A"`;
    page2.getCell("C4").font = functionFont("Barlow", true, 16);
    page2.getCell("C4").alignment = alignCenter;

    page2.mergeCells("D4:D5");
    page2.getCell("D4").value = "Refinado";
    page2.getCell("D4").font = functionFont("Barlow", true, 16);
    page2.getCell("D4").alignment = alignCenter;

    page2.mergeCells("E4:E5");
    page2.getCell("E4").value = "Crudo";
    page2.getCell("E4").font = functionFont("Barlow", true, 16);
    page2.getCell("E4").alignment = alignCenter;

    page2.mergeCells("F4:F5");
    page2.getCell("F4").value = "Orgánico";
    page2.getCell("F4").font = functionFont("Barlow", true, 16);
    page2.getCell("F4").alignment = alignCenter;

    page2.mergeCells("G4:G5");
    page2.getCell("G4").value = "Otros";
    page2.getCell("G4").font = functionFont("Barlow", true, 16);
    page2.getCell("G4").alignment = alignCenter;

    for (let i = 6; i <= 20; i++) {
      page2.mergeCells(`A${i}:B${i}`);
    }
    const ingenios = dataIngenios.filter(
      (d) => d.nombre_ingenio !== "San Juan" && d.id_region_ingenios === 1
    );
    ingenios.forEach((d, i) => {
      page2.getCell(`A${i + 6}`).value = d?.nombre_ingenio;
      page2.getCell(`A${i + 6}`).font = functionFont("Barlow", false, 18);
      page2.getCell(`A${i + 6}`).alignment = alignStart;
    });
    page2.getCell("A20").value = "Valores Acumulados";
    page2.getCell("A20").font = functionFont("Barlow", true, 20);
    page2.getCell("A20").alignment = alignCenter;
    page2.getCell("A20").fill = bgNaranja;

    for (let i = 3; i <= 7; i++) {
      const asd = ["n", "A", "B", "C", "D", "E", "F", "G"];
      page2.getCell(20, i).value = { formula: `SUM(${asd[i]}6:${asd[i]}19)` };
      page2.getCell(20, i).numFmt = "#,##0";
    }

    /**** ALCOHOL ****/
    page2.mergeCells("H1:N2");
    page2.getCell(
      "H1"
    ).value = `PRODUCCIÓN DE ALCOHOL ETÍLICO  |  HASTA ${dateDatosProductivosFormato}`;
    page2.getCell("H1").font = functionFont("Barlow", true, 18);
    page2.getCell("H1").alignment = alignCenter;
    page2.getCell("H1").fill = bgAzul;

    page2.mergeCells("H3:N3");
    // page2.getCell("H3").value = `TIPOS DE ALCOHOLES (M3) | INICIO: ${
    //   fechaInicioDestileria !== null
    //     ? moment(fechaInicioDestileria).format("DD/MM/YYYY")
    //     : ""
    // }`;
    page2.getCell("H3").font = functionFont("Barlow", true, 16);
    page2.getCell("H3").alignment = alignCenter;
    page2.getCell("H3").fill = bgGris;

    page2.mergeCells("H4:I5");
    page2.getCell("H4").alignment = alignCenter;
    page2.mergeCells("J4:L5");
    page2.getCell("J4").alignment = alignCenter;
    page2.mergeCells("M4:N5");
    page2.getCell("M4").alignment = alignCenter;
    for (let i = 6; i <= 20; i++) {
      page2.mergeCells(`H${i}:I${i}`);
      page2.getCell(`H${i}`).alignment = alignCenter;
      page2.mergeCells(`J${i}:L${i}`);
      page2.getCell(`J${i}`).alignment = alignCenter;
      page2.mergeCells(`M${i}:N${i}`);
      page2.getCell(`J${i}`).alignment = alignCenter;
    }
    // page2.getCell("H5").value = "Destilería";
    // page2.getCell("H5").font = functionFont("Barlow", true, 20);
    // page2.getCell("J5").value = "Anhidradora";
    // page2.getCell("J5").font = functionFont("Barlow", true, 20);

    // page2.getCell("H6").value = "No posee";
    // page2.getCell("H6").font = functionFont("Barlow", false, 16);
    // page2.getCell("J6").value = "No posee";
    // page2.getCell("J6").font = functionFont("Barlow", false, 16);

    // page2.getCell("H7").value = "José Minetti y Cía. Ltda. SACI";
    // page2.getCell("H7").font = functionFont("Barlow", false, 16);
    // page2.getCell("J7").value = "Fronterita Energía S.A.";
    // page2.getCell("J7").font = functionFont("Barlow", false, 16);

    // page2.getCell("H8").value =
    //   "Complejo Alimenticio San Salvador S.A.-Banda de Río Salí";
    // page2.getCell("H8").font = functionFont("Barlow", false, 16);
    // page2.getCell("J8").value = "Bio Atar  S.A.";
    // page2.getCell("J8").font = functionFont("Barlow", false, 16);

    // page2.getCell("H9").value = "No posee";
    // page2.getCell("H9").font = functionFont("Barlow", false, 16);
    // page2.getCell("J9").value = "No posee";
    // page2.getCell("J9").font = functionFont("Barlow", false, 16);

    // page2.getCell("H10").value = "Destilería Salta Refrescos S.A.";
    // page2.getCell("H10").font = functionFont("Barlow", false, 16);
    // page2.getCell("J10").value = "No posee";
    // page2.getCell("J10").font = functionFont("Barlow", false, 16);

    // page2.getCell("H11").value = "Sucroalcoholera del Sur S.A.";
    // page2.getCell("H11").font = functionFont("Barlow", false, 16);
    // page2.getCell("J11").value = "Bioenergía La Corona S.A.";
    // page2.getCell("J11").font = functionFont("Barlow", false, 16);

    // page2.getCell("H12").value = "Compañía Azucarera Los Balcanes S.A.";
    // page2.getCell("H12").font = functionFont("Barlow", false, 16);
    // page2.getCell("J12").value = "Compañía Azucarera Los Balcanes S.A.";
    // page2.getCell("J12").font = functionFont("Barlow", false, 16);

    // page2.getCell("H13").value = "No posee";
    // page2.getCell("H13").font = functionFont("Barlow", false, 16);
    // page2.getCell("J13").value = "No posee";
    // page2.getCell("J13").font = functionFont("Barlow", false, 16);

    // page2.getCell("H14").value = "Ansonnaud, Ricardo Sixto";
    // page2.getCell("H14").font = functionFont("Barlow", false, 16);
    // page2.getCell("J14").value = "Bio Trinidad S.A.";
    // page2.getCell("J14").font = functionFont("Barlow", false, 16);

    // page2.getCell("H15").value = "Compañía Inversora Industrial S.A.";
    // page2.getCell("H15").font = functionFont("Barlow", false, 16);
    // page2.getCell("J15").value = "Bioenergética Leales S.A.";
    // page2.getCell("J15").font = functionFont("Barlow", false, 16);

    // page2.getCell("H16").value =
    //   "Complejo Alimenticio San Salvador S.A. Juan Bautista Alberdi (Sin funcionar)";
    // page2.getCell("H16").font = functionFont("Barlow", false, 16);
    // page2.getCell("H16").alignment = alignCenter;
    // page2.getCell("J16").value = "No posee";
    // page2.getCell("J16").font = functionFont("Barlow", false, 16);

    // page2.getCell("H17").value = "Industrias Santa Bárbara S.R.L.";
    // page2.getCell("H17").font = functionFont("Barlow", false, 16);
    // page2.getCell("J17").value =
    //   "Energías Ecológicas del Tucumán S.A. (Sin funcionar)";
    // page2.getCell("J17").font = functionFont("Barlow", false, 16);

    // page2.getCell("H18").value = "No posee";
    // page2.getCell("H18").font = functionFont("Barlow", false, 16);
    // page2.getCell("J18").value = "Anhidradora Bioenergía Santa Rosa S.A. (*)";
    // page2.getCell("J18").font = functionFont("Barlow", false, 16);

    // page2.getCell("H19").value = "No posee";
    // page2.getCell("H19").font = functionFont("Barlow", false, 16);
    // page2.getCell("J19").value = "No posee";
    // page2.getCell("J19").font = functionFont("Barlow", false, 16);

    // page2.mergeCells("H20:K20");
    // page2.getCell("H20").value = "Acumulado";
    // page2.getCell("H20").font = functionFont("Barlow", true, 24);
    // page2.getCell("H20").alignment = alignCenter;
    // page2.getCell('H20').fill = bgAzul

    page2.getCell("H4").value = "Alcohol Total";
    page2.getCell("H4").font = functionFont("Barlow", true, 16);
    page2.getCell("H4").alignment = alignCenter;

    page2.getCell("J4").value = "Alcohol Hidratado";
    page2.getCell("J4").font = functionFont("Barlow", true, 16);
    page2.getCell("J4").alignment = alignCenter;

    page2.getCell("M4").value = "Alcohol Anhidro";
    page2.getCell("M4").font = functionFont("Barlow", true, 16);
    page2.getCell("M4").alignment = alignCenter;

    page2.getCell("H20").value = { formula: `=SUM(H6:H19)` };
    page2.getCell("H20").numFmt = "#,##0";
    page2.getCell("J20").value = {
      formula: `=J19+J18+J16+J15+J14+J12+J11+J10+J8+J7`,
    };
    page2.getCell("J20").numFmt = "#,##0";
    page2.getCell("M20").value = {
      formula: `=M19+M18+M16+M15+M14+M12+M11+M10+M8+M7`,
    };
    page2.getCell("M20").numFmt = "#,##0";

    /**** EXPORTACIONES ****/
    page2.mergeCells("O1:Y2");
    page2.getCell("O1").value = `MERCADO EXTERNO  |  HASTA ${dateFormat}`;
    page2.getCell("O1").font = functionFont("Barlow", true, 18);
    page2.getCell("O1").alignment = alignCenter;
    page2.getCell("O1").fill = bgCeleste;

    /*** Exportacion por tipo de azucares ***/
    page2.mergeCells("O3:S3");
    page2.getCell("O3").value = `EXPORTACIÓN TIPO DE AZÚCARES (Tn)`;
    page2.getCell("O3").font = functionFont("Barlow", true, 16);
    page2.getCell("O3").alignment = alignCenter;
    page2.getCell("O3").fill = bgGris;

    page2.mergeCells("O4:O5");
    page2.getCell("O4").value = `Crudo`;
    page2.getCell("O4").font = functionFont("Barlow", true, 16);
    page2.getCell("O4").alignment = alignCenter;

    page2.mergeCells("P4:P5");
    page2.getCell("P4").value = `Orgánico`;
    page2.getCell("P4").font = functionFont("Barlow", true, 16);
    page2.getCell("P4").alignment = alignCenter;

    page2.mergeCells("Q4:Q5");
    page2.getCell("Q4").value = `Rubio`;
    page2.getCell("Q4").font = functionFont("Barlow", true, 16);
    page2.getCell("Q4").alignment = alignCenter;

    page2.mergeCells("R4:R5");
    page2.getCell("R4").value = `Blanco`;
    page2.getCell("R4").font = functionFont("Barlow", true, 16);
    page2.getCell("R4").alignment = alignCenter;

    page2.mergeCells("S4:S5");
    page2.getCell("S4").value = `Otros`;
    page2.getCell("S4").font = functionFont("Barlow", true, 16);
    page2.getCell("S4").alignment = alignCenter;

    /** Formulas totales **/
    page2.getCell("O20").value = { formula: `=SUM(O6:O19)` };
    page2.getCell("O20").numFmt = "#,##0";

    page2.getCell("P20").value = { formula: `=SUM(P6:P19)` };
    page2.getCell("P20").numFmt = "#,##0";

    page2.getCell("Q20").value = { formula: `=SUM(Q6:Q19)` };
    page2.getCell("Q20").numFmt = "#,##0";

    page2.getCell("R20").value = { formula: `=SUM(R6:R19)` };
    page2.getCell("R20").numFmt = "#,##0";

    page2.getCell("S20").value = { formula: `=SUM(S6:S19)` };
    page2.getCell("S20").numFmt = "#,##0";

    /*** Destino de las exportaciones ***/
    page2.mergeCells("T3:Y3");
    page2.getCell("T3").value = `DESTINO DE LAS EXPORTACIONES (Tn)`;
    page2.getCell("T3").font = functionFont("Barlow", true, 16);
    page2.getCell("T3").alignment = alignCenter;
    page2.getCell("T3").fill = bgGris;

    page2.mergeCells("T4:T5");
    page2.getCell("T4").value = `Países`;
    page2.getCell("T4").font = functionFont("Barlow", true, 16);
    page2.getCell("T4").alignment = alignCenter;

    page2.mergeCells("U4:U5");
    page2.getCell("U4").value = `Uruguay`;
    page2.getCell("U4").font = functionFont("Barlow", true, 16);
    page2.getCell("U4").alignment = alignCenter;

    page2.mergeCells("V4:V5");
    page2.getCell("V4").value = `Chile`;
    page2.getCell("V4").font = functionFont("Barlow", true, 16);
    page2.getCell("V4").alignment = alignCenter;

    page2.mergeCells("W4:W5");
    page2.getCell("W4").value = `EE.UU`;
    page2.getCell("W4").font = functionFont("Barlow", true, 16);
    page2.getCell("W4").alignment = alignCenter;

    page2.mergeCells("X4:X5");
    page2.getCell("X4").value = `Nueva Zelanda`;
    page2.getCell("X4").font = functionFont("Barlow", true, 16);
    page2.getCell("X4").alignment = alignCenter;

    page2.mergeCells("Y4:Y5");
    page2.getCell("Y4").value = `Canadá`;
    page2.getCell("Y4").font = functionFont("Barlow", true, 16);
    page2.getCell("Y4").alignment = alignCenter;

    page2.getCell("T6").value = `Crudo`;
    page2.getCell("T6").font = functionFont("Barlow", true, 16);
    page2.getCell("T6").alignment = alignCenter;

    page2.getCell("T7").value = `Orgánico`;
    page2.getCell("T7").font = functionFont("Barlow", true, 16);
    page2.getCell("T7").alignment = alignCenter;

    page2.getCell("T8").value = `Rubio`;
    page2.getCell("T8").font = functionFont("Barlow", true, 16);
    page2.getCell("T8").alignment = alignCenter;

    page2.getCell("T9").value = `Blanco`;
    page2.getCell("T9").font = functionFont("Barlow", true, 16);
    page2.getCell("T9").alignment = alignCenter;

    page2.mergeCells("T20:U20");
    page2.getCell("T20").value = "Total Exportado";
    page2.getCell("T20").font = functionFont("Barlow", true, 20);
    page2.getCell("T20").alignment = alignCenter;
    page2.getCell("T20").fill = bgNaranja;

    page2.mergeCells("V20:Y20");
    page2.getCell("V20").value = { formula: `=SUM(U6:Y9)` };
    page2.getCell("V20").font = functionFont("Barlow", true, 22);
    page2.getCell("V20").alignment = alignCenter;

    /*******************************/
    /*** Exportaciones Jujuy y Salta ***/
    /* Merge cell */
    page2.mergeCells("R23:Y24");
    page2.mergeCells("R25:Y25");
    page2.mergeCells("R26:S27");
    page2.mergeCells("T26:T27");
    page2.mergeCells("U26:U27");
    page2.mergeCells("V26:V27");
    page2.mergeCells("W26:W27");
    page2.mergeCells("X26:X27");
    page2.mergeCells("Y26:Y27");
    page2.mergeCells("R28:S28");
    page2.mergeCells("R30:X30");

    /* Tamano filas y columas */
    page2.getRow(28).height = "32";
    page2.getRow(30).height = "32";

    /*Fuente*/
    page2.getCell("R23").font = functionFont("Barlow", true, 18);
    page2.getCell("R25").font = functionFont("Barlow", true, 16);
    for (let i = 20; i <= 25; i++) {
      page2.getCell(26, i).font = functionFont("Barlow", true, 18);
    }
    for (let i = 19; i <= 25; i++) {
      page2.getCell(28, i).font = functionFont("Barlow", false, 18);
    }
    page2.getCell("R30").font = functionFont("Barlow", true, 20);
    page2.getCell("Y30").font = functionFont("Barlow", true, 20);

    /*Fill*/
    page2.getCell("R23").fill = bgCeleste;
    page2.getCell("R25").fill = bgGris;
    for (let i = 20; i <= 25; i++) {
      page2.getCell(26, i).fill = bgGris;
    }
    page2.getCell("R30").fill = bgNaranja;
    page2.getCell("Y30").fill = bgNaranja;

    /*Alineaciones*/
    page2.getCell("R23").alignment = alignCenter;
    page2.getCell("R25").alignment = alignCenter;
    page2.getCell("R28").alignment = alignStart;
    for (let i = 20; i <= 25; i++) {
      page2.getCell(26, i).alignment = alignCenter;
      page2.getCell(28, i).alignment = alignCenter;
    }
    page2.getCell("R30").alignment = alignEnd;
    page2.getCell("Y30").alignment = alignStart;

    /*Formato de numeros*/
    for (let i = 20; i <= 25; i++) {
      page2.getCell(28, i).numFmt = "#,##0";
    }
    page2.getCell("Y30").numFmt = "#,##0";

    /*Bordes*/
    page2.getCell("R23").border = borders(
      "thick",
      "00326C",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thick",
      "00326C"
    );
    page2.getCell("R25").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "medium",
      "000000",
      "thick",
      "00326C",
    );
    page2.getCell("R26").border = borders(
      "medium",
      "000000",
      "thick",
      "00326C",
      "thin",
      "000000",
      "medium",
      "000000"
    );
    for (let i = 20; i <= 24; i++) {
      page2.getCell(26, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "thin",
        "000000",
        "medium",
        "000000"
      );
    }
    page2.getCell("Y26").border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "thin",
      "000000",
      "thick",
      "00326C"
    );
    page2.getCell("R28").border = borders(
      "thin",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C",
      "medium",
      "000000"
    );
    for (let i = 20; i <= 24; i++) {
      page2.getCell(28, i).border = borders(
        "thin",
        "000000",
        "medium",
        "000000",
        "thick",
        "00326C",
        "medium",
        "000000"
      );
    }
    page2.getCell("Y28").border = borders(
      "thin",
      "000000",
      "medium",
      "000000",
      "thick",
      "00326C",
      "thick",
      "00326C"
    );
    page2.getCell("R30").border = borders(
      "thick",
      "00326C",
      "thick",
      "00326C",
      "thick",
      "00326C",
      "thin",
      "FABF8F"
    );
    page2.getCell("Y30").border = borders(
      "thick",
      "00326C",
      "thin",
      "FABF8F",
      "thick",
      "00326C",
      "thick",
      "00326C"
    );

    /* Encabezados */
    page2.getCell("R23").value = `NORTE | MERCADO EXTERNO HASTA `;
    page2.getCell("R25").value = `EXPORTACIÓN DE AZÚCARES (Tn)`;

    /*Ingenios*/
    page2.getCell("T26").value = `La Esperanza`;
    page2.getCell("T26").value = `Ledesma`;
    page2.getCell("T26").value = `Río Grande`;
    page2.getCell("T26").value = `Seaboard`;
    page2.getCell("T26").value = `San Isidro`;
    page2.getCell("T26").value = `Total`;

    /*Valores*/
    page2.getCell("R28").value = `Azúcar exportada`;

    /*Calculo Total*/
    page2.getCell("Y28").value = {
      formula: `=T28+U28+V28+W28+X28`
    }

    /*Total Argentina*/
    page2.getCell("R30").value = `TOTAL EXPORTACIÓN TUCUMÁN, SALTA Y JUJUY`;
    page2.getCell("Y30").value = { formula: `=Y28+V20`}

    /*******************************/

    /**** PRODUCCION AZUCAR DISCRIMINADA ****/
    page2.getCell("C6").value = parseInt(d1["J10"]);
    page2.getCell("D6").value = parseInt(d1["D43"]);
    page2.getCell("E6").value = parseFloat(d1["K10"]);
    page2.getCell("F6").value = parseInt(d1["F43"]);
    page2.getCell("G6").value = parseInt(d1["G43"]);

    page2.getCell("C7").value = parseInt(d6["J17"]);
    page2.getCell("D7").value = parseInt(d6["D45"]);
    page2.getCell("E7").value = parseFloat(d6["K17"]);
    page2.getCell("F7").value = parseInt(d6["F45"]);
    page2.getCell("G7").value = parseInt(d6["G45"]);

    page2.getCell("C8").value = parseInt(d4["C46"]);
    page2.getCell("D8").value = parseInt(d4["D46"]);
    page2.getCell("E8").value = parseFloat(d4["K14"]);
    page2.getCell("F8").value = parseInt(d4["F46"]);
    page2.getCell("G8").value = parseInt(d4["G46"]);

    page2.getCell("C9").value = parseInt(d2["J11"]);
    page2.getCell("D9").value = parseInt(d2["D47"]);
    page2.getCell("E9").value = parseFloat(d2["K11"]);
    page2.getCell("F9").value = parseInt(d2["F47"]);
    page2.getCell("G9").value = parseInt(d2["G47"]);

    page2.getCell("C10").value = parseInt(d7["C48"]);
    page2.getCell("D10").value = parseInt(d7["D48"]);
    page2.getCell("E10").value = parseFloat(d7["K18"]);
    page2.getCell("F10").value = parseInt(d7["F48"]);
    page2.getCell("G10").value = parseInt(d7["G48"]);

    page2.getCell("C11").value = parseInt(d8["J19"]);
    page2.getCell("D11").value = parseInt(d8["D49"]);
    page2.getCell("E11").value = parseFloat(d8["K19"]);
    page2.getCell("F11").value = parseInt(d8["F49"]);
    page2.getCell("G11").value = parseInt(d8["G49"]);

    page2.getCell("C12").value = parseInt(d3["J12"]);
    page2.getCell("D12").value = parseInt(d3["D50"]);
    page2.getCell("E12").value = parseFloat(d3["K12"]);
    page2.getCell("F12").value = parseInt(d3["F50"]);
    page2.getCell("G12").value = parseInt(d3["G50"]);

    page2.getCell("C13").value = parseInt(d9["J20"]);
    page2.getCell("D13").value = parseInt(d9["D51"]);
    page2.getCell("E13").value = parseFloat(d9["E51"]);
    page2.getCell("F13").value = parseInt(d9["F51"]);
    page2.getCell("G13").value = parseInt(d9["G51"]);

    page2.getCell("C14").value = parseInt(d10["J21"]);
    page2.getCell("D14").value = parseInt(d10["D52"]);
    page2.getCell("E14").value = parseFloat(d10["K21"]);
    page2.getCell("F14").value = parseInt(d10["F52"]);
    page2.getCell("G14").value = parseInt(d10["G52"]);

    page2.getCell("C15").value = parseInt(d11["C53"]);
    page2.getCell("D15").value = parseInt(d11["D53"]);
    page2.getCell("E15").value = parseFloat(d11["K22"]);
    page2.getCell("F15").value = parseInt(d11["F53"]);
    page2.getCell("G15").value = parseInt(d11["G53"]);

    page2.getCell("C16").value = parseInt(d5["J15"]);
    page2.getCell("D16").value = parseInt(d5["D54"]);
    page2.getCell("E16").value = parseFloat(d5["K15"]);
    page2.getCell("F16").value = parseInt(d5["F54"]);
    page2.getCell("G16").value = parseInt(d5["G54"]);

    page2.getCell("C17").value = parseInt(d13["J24"]);
    page2.getCell("D17").value = parseInt(d13["D56"]);
    page2.getCell("E17").value = parseFloat(d13["K24"]);
    page2.getCell("F17").value = parseInt(d13["F56"]);
    page2.getCell("G17").value = parseInt(d13["G56"]);

    page2.getCell("C18").value = parseInt(d14["J25"]);
    page2.getCell("D18").value = parseInt(d14["D57"]);
    page2.getCell("E18").value = parseFloat(d14["K25"]);
    page2.getCell("F18").value = parseInt(d14["F57"]);
    page2.getCell("G18").value = parseInt(d14["G57"]);

    page2.getCell("C19").value = parseInt(d12["J23"]);
    page2.getCell("D19").value = parseInt(d12["D55"]);
    page2.getCell("E19").value = parseFloat(d12["K23"]);
    page2.getCell("F19").value = parseInt(d12["F55"]);
    page2.getCell("G19").value = parseInt(d12["G55"]);
    /************/

    /****** PRODUCCION DE ALCOHOL ******/
    page2.getCell("H6").value = parseInt(d1["N10"] / 1000);
    page2.getCell("J6").value = parseInt(d1["O44"] / 1000);
    page2.getCell("M6").value = parseFloat(d1["R44"] / 1000);

    page2.getCell("H7").value = parseInt(d6["N17"] / 1000);
    page2.getCell("J7").value = parseInt(d6["O45"] / 1000);
    page2.getCell("M7").value = parseFloat(d6["R45"] / 1000);

    page2.getCell("H8").value = parseInt(d4["N14"] / 1000);
    page2.getCell("J8").value = parseInt(d4["O46"] / 1000);
    page2.getCell("M8").value = parseFloat(d4["R46"] / 1000);

    page2.getCell("H9").value = parseInt(d2["N11"] / 1000);
    page2.getCell("J9").value = parseInt(d2["O47"] / 1000);
    page2.getCell("M9").value = parseFloat(d2["R47"] / 1000);

    page2.getCell("H10").value = parseInt(d7["N18"] / 1000);
    page2.getCell("J10").value = parseInt(d7["O48"] / 1000);
    page2.getCell("M10").value = parseFloat(d7["R48"] / 1000);

    page2.getCell("H11").value = parseInt(d8["N19"] / 1000);
    page2.getCell("J11").value = parseInt(d8["O49"] / 1000);
    page2.getCell("M11").value = parseFloat(d8["R49"] / 1000);

    page2.getCell("H12").value = parseInt(d3["N12"] / 1000);
    page2.getCell("J12").value = parseInt(d3["O50"] / 1000);
    page2.getCell("M12").value = parseFloat(d3["R50"] / 1000);

    page2.getCell("H13").value = parseInt(d9["N20"] / 1000);
    page2.getCell("J13").value = parseInt(d9["O51"] / 1000);
    page2.getCell("M13").value = parseFloat(d9["R51"] / 1000);

    page2.getCell("H14").value = parseInt(d10["N21"] / 1000);
    page2.getCell("J14").value = parseInt(d10["O52"] / 1000);
    page2.getCell("M14").value = parseFloat(d10["R52"] / 1000);

    page2.getCell("H15").value = parseInt(d11["N22"] / 1000);
    page2.getCell("J15").value = parseInt(d11["O53"] / 1000);
    page2.getCell("M15").value = parseFloat(d11["R53"] / 1000);

    page2.getCell("H16").value = parseInt(d5["N15"] / 1000);
    page2.getCell("J16").value = parseInt(d5["O54"] / 1000);
    page2.getCell("M16").value = parseFloat(d5["R54"] / 1000);

    page2.getCell("H17").value = parseInt(d12["N23"] / 1000);
    page2.getCell("J17").value = parseInt(d12["O55"] / 1000);
    page2.getCell("M17").value = parseFloat(d12["R55"] / 1000);

    page2.getCell("H18").value = parseInt(d13["N24"] / 1000);
    page2.getCell("J18").value = parseInt(d13["O56"] / 1000);
    page2.getCell("M18").value = parseFloat(d13["R56"] / 1000);

    page2.getCell("H19").value = parseInt(d14["N25"] / 1000);
    page2.getCell("J19").value = parseInt(d14["O57"] / 1000);
    page2.getCell("M19").value = parseFloat(d14["R57"] / 1000);


    page2.getCell("Y4").fill = bgGris;
    /****************************************************************************************/

    /****** EXPORTACIONES ******/

    /*** CONFIGURACION PAGINA ***/
    page2.pageSetup.printArea = "A1:Y30";
    page2.pageSetup.scale = 100;
    page2.pageSetup.margins = {
      left: 0.3,
      right: 0.1,
      top: 0.2,
      bottom: 0.2,
      header: 0.2,
      footer: 0.1,
    };

    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const EXCEL_EXTENSION = ".xlsx";
      const blob = new Blob([buffer], { type: fileType });
      if (navigator.msSaveBlog) {
        navigator.msSaveBlog(
          blob,
          `Parte diario directorio - ${dateFormat}` + EXCEL_EXTENSION
        );
        window.location.href = "/admin/home";
      } else {
        const link = document.createElement("a");
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute(
            "download",
            `Parte diario directorio - ${dateFormat}` + EXCEL_EXTENSION
          );
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        window.location.href = "/admin/home";
      }
      setLoadingDownload(false);
      setDataImport(null);
      setDataImportComparativa(null);
      setDataImportDestileria(null);
      setDataImportDestileriaComparativa(null);
    } catch (error) {
      return error;
    }
  }
};
