import { Route, Routes } from "react-router-dom";
import ExtraTemplate from "./pages/Home";
import { useState } from "react";
import DarkMode from "./context/DarkModeContext";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <DarkMode.Provider value={{ dark, setDark }}>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </DarkMode.Provider>
  );
}

export default App;
