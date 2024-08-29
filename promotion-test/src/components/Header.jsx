import React, { useContext } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import logo from "../assets/saco-logo.svg";

import { MdOutlineFileDownload } from "react-icons/md";
import DarkModeButton from "./DarkModeButton";
import DarkMode from "../context/DarkModeContext";

const Header = ({ tableData }) => {
  const { dark } = useContext(DarkMode);
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

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

    // Adding rows
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

    const lastRowIndex = tableData.length + 1; // +1 because headers start at row 1
    const lastRow = worksheet.getRow(lastRowIndex);
    lastRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    lastRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF366092" },
    };
    lastRow.alignment = { horizontal: "center", vertical: "center" };

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
  // Re-organise classes structure below. Make it readable.
  return (
    <div
      style={{ boxShadow: "0px 0px 8px 0px gray" }}
      className={`w-full h-[64px] rounded-3xl flex flex-row items-center px-5 justify-between  ${
        dark ? "bg-[#2c2c2c] " : "bg-stone-100 border-b border-stone-200 "
      }`}
    >
      <img src={logo} alt="SACO-LOGO" className="w-[100px] h-[50px]" />
      <div className="flex flex-row items-center w-auto h-auto mr-2 gap-x-4">
        <DarkModeButton />
        <button
          onClick={handleExport}
          className={`flex items-center justify-center w-[30px] h-[30px] rounded-full   shadow-md  border  hover:shadow-none hover:translate-y-0.5  hover:duration-500 ${
            dark
              ? "bg-[#3700B3] shadow-stone-500 text-stone-50 hover:bg-[#241152] "
              : " bg-[#0f6cb5] shadow-stone-600 border-stone-300 hover:bg-blue-700 "
          } `}
        >
          <MdOutlineFileDownload size={19} className="text-stone-50" />
        </button>
      </div>
    </div>
  );
};

export default Header;
