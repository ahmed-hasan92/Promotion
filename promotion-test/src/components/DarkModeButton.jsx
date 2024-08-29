import React, { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import DarkMode from "../context/DarkModeContext";
const DarkModeButton = () => {
  const { dark, setDark } = useContext(DarkMode);
  const handleSwitchMode = () => {
    setDark(!dark);
  };
  return (
    <>
      {!dark ? (
        <button
          onClick={handleSwitchMode}
          className="w-[30px] h-[30px] bg-gray-500 rounded-full flex justify-center items-center border border-gray-200 shadow-md shadow-gray-600 "
        >
          <IoMoonOutline size={16} className="text-gray-100" />
        </button>
      ) : (
        <button
          onClick={handleSwitchMode}
          className="w-[30px] h-[30px] bg-[#bb86fc] rounded-full flex justify-center items-center border border-gray-200 shadow-md shadow-stone-500 "
        >
          <IoSunnyOutline size={18} className="text-stone-900" />
        </button>
      )}
    </>
  );
};

export default DarkModeButton;
