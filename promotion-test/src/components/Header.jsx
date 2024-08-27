import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import logo from "../assets/saco-logo.svg";
import { SiMicrosoftexcel } from "react-icons/si";

const Header = ({ tableData }) => {
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Define headers with styling
    worksheet.columns = [
      { header: "Division", key: "division", width: 20 },
      { header: "SKU Count", key: "skuCount", width: 10 },
      { header: "Basket Cost Regular", key: "basketCostRegular", width: 20 },
      { header: "Basket Cost Promo", key: "basketCostPromo", width: 20 },
      { header: "Cost Variance %", key: "costVariance", width: 15 },
      { header: "Basket RSP Regular", key: "basketRSPRegular", width: 20 },
      { header: "Basket RSP Promo", key: "basketRSPPromo", width: 20 },
      { header: "Customer Saving %", key: "customerSaving", width: 20 },
      {
        header: "Basket Margin Regular",
        key: "basketMarginRegular",
        width: 20,
      },
      { header: "Basket Margin Promo", key: "basketMarginPromo", width: 20 },
      { header: "Projected Sales", key: "salesProjected", width: 20 },
      { header: "GP Value", key: "gpValue", width: 20 },
      { header: "GP%", key: "gpPercent", width: 10 },
    ];

    // Add data rows
    tableData.forEach((row) => {
      worksheet.addRow(row);
    });

    // Apply styles to the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF366092" },
    };
    worksheet.getRow(1).alignment = {
      horizontal: "center",
      vertical: "center",
    };

    // Apply border to all cells
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
        if (rowNumber === 1) {
          cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FF366092" },
          };
          cell.alignment = { horizontal: "center", vertical: "center" };
        }
      });
    });

    // Save the file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "data_export.xlsx");
  };

  return (
    <div className="w-full h-[64px] bg-stone-100 border-b border-stone-200 shadow-md shadow-stone-500 rounded-b-3xl flex flex-row items-center px-5 justify-between">
      <img src={logo} alt="SACO-LOGO" className="w-[100px] h-[50px]" />
      <button
        onClick={handleExport}
        className="flex flex-row items-center px-3 py-2 bg-green-700 rounded-lg text-stone-200 font-semibold gap-x-2 text-[1rem] shadow-md shadow-stone-600 border border-stone-300 hover:shadow-none hover:translate-y-0.5 hover:bg-green-800 hover:duration-500"
      >
        Export <SiMicrosoftexcel size={22} className="text-stone-200" />
      </button>
    </div>
  );
};

export default Header;
