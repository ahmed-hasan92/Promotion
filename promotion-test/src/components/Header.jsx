import React from "react";
import logo from "../assets/saco-logo.svg";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from "xlsx";

const Header = ({ tableDate }) => {
  const handleExport = () => {
    const workSheet = XLSX.utils.json_to_sheet(tableDate);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");
    XLSX.writeFile(workBook, "data_export.xlsx");
  };
  return (
    <div className="w-full h-[64px] bg-stone-100 border-b border-stone-200 shadow-sm shadow-stone-400 rounded-b-3xl flex flex-row items-center px-5 justify-between">
      <img src={logo} alt="SACO-LOGO" className="w-[100px] h-[50px] " />
      <button
        onClick={handleExport}
        className="flex flex-row items-center px-4 py-2 bg-green-700 rounded-lg text-stone-50 font-semibold gap-x-2 text-[1rem] shadow-md shadow-stone-600 border border-stone-300 hover:shadow-none hover:translate-y-0.5 hover:bg-green-800 hover:duration-500"
      >
        Export <SiMicrosoftexcel size={22} className="text-stone-50" />
      </button>
    </div>
  );
};

export default Header;
