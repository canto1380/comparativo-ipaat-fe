import ExcelJS from "exceljs";
import moment from "moment";

export const DatosHistoricosZafraExcel = async ({
  dataUser,
  dataImport,
  setDataImport,
  setBanderaDataNull,
  setLoadingDownload,
}) => {
  setLoadingDownload(true)
  const informacionExporta = dataImport ? dataImport : undefined
  if(!informacionExporta) {
    setBanderaDataNull(true);
    setTimeout(() => {
      setBanderaDataNull(false);
    }, 2000);
  } else {
    const fechaHoy = new Date();
    const fechaHoyFormat = moment(fechaHoy).format('DD-MM-YYYY')
    const workbook = new ExcelJS.Workbook();
    workbook.creator = `${dataUser?.name} ${dataUser?.surname}`;
    workbook.created = fechaHoy;
    workbook.modified = fechaHoy;
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
  
    /***** ESTILOS GENERALES *****/
    const functionFont = (name, bold, size) => {
      return { name, bold, size };
    };
  
    /***** RELLENO *****/
  
    /***** BORDES *****/
    const borders = (t1, t2, l1, l2, b1, b2, r1, r2) => {
      return {
        top: { style: t1, color: { argb: t2 } },
        left: { style: l1, color: { argb: l2 } },
        bottom: { style: b1, color: { argb: b2 } },
        right: { style: r1, color: { argb: r2 } },
      };
    };
  
    for (let i = 1; i <= 19; i++) {
      page1.getCell(1, i).border = borders(
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
  
    /***** FORMATO DE NUMEROS *****/
  
    /*************** LIBRO GENERAL *******************/
  
    /** CELDAS ENCABEZADOS **/
    page1.mergeCells("A1:D4");
    page1.getCell("D4").value = "Icono IPAAT";
  
    page1.mergeCells("E1:O2");
    page1.getCell("O2").value = `DATOS HISTÓRICOS DE ZAFRA`;
    page1.getCell("O2").alignment = { horizontal: "center", vertical: "middle" };
    page1.getCell("O2").font = { name: "Calibri", bold: true, size: 24 };
  
    page1.mergeCells("E3:O4");
    page1.getCell("O4").value = `Caña Molida Bruta - Azùcar Equivalente`;
    page1.getCell("O4").font = functionFont("Calibri", true, 20);
    page1.getCell("O4").alignment = alignCenter;
  
    page1.mergeCells("P1:S4");
    page1.getCell("P1").value = "Icono Tucuman";
    page1.getCell("O4").alignment = alignStart;
  
    page1.mergeCells("A5:S5");
  
    page1.mergeCells("A6:A7");
    page1.getCell("A6").value = "Ingenios";
  
    page1.mergeCells("B6:S6");
    page1.getCell("B6").value = "Aguilares";
  
    page1.mergeCells("B7:J7");
    page1.getCell("B7").value = "CMB";
  
    page1.mergeCells("K7:S7");
    page1.getCell("K7").value = "Az. Equivalente";
  
    page1.getCell("A8").value = "Fecha/Zafra";


    /**** EXPORTACION A EXCEL ****/
    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const EXCEL_EXTENSION = ".xlsx";
      const blob = new Blob([buffer], { type: fileType });
      if (navigator.msSaveBlog) {
        navigator.msSaveBlog(
          blob,
          `Datos històricos zafra - ${fechaHoyFormat}` + EXCEL_EXTENSION
        );
        window.location.href = "/admin/home";
      } else {
        const link = document.createElement("a");
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute(
            "download",
            `Datos històricos zafra - ${fechaHoyFormat}` + EXCEL_EXTENSION
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
    } catch (error) {
      return error
    }
  }
};
