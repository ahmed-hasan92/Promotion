import React, { useContext, useEffect, useState } from "react";
import data from "../promotionData";
import DarkMode from "../context/DarkModeContext";
import Content from "../components/Content";
import Header from "../components/Header";
const Home = () => {
  // This template has been approved.
  const [myData, setMyData] = useState([]);
  const { dark } = useContext(DarkMode);

  useEffect(() => {
    data ? setMyData([...data]) : setMyData([]);
  }, []);

  return (
    <main
      className={`flex flex-col items-center w-full h-screen px-2 md:px-6 py-2 gap-y-4 ${
        dark ? "bg-[#121212]" : "bg-gray-50 "
      }`}
    >
      <Header tableData={myData} />
      <Content tableData={myData} />
    </main>
  );
};

export default Home;
