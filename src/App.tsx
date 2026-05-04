import { createContext } from "react";
import Homepage from "./components/Homepage";
import "./styles/theme.css";
import { useState } from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import AppGemini from "./components/AppGemini";
import MainContent from "./components/MainContent";

export const ThemeContext = createContext<any>(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Homepage />
    </ThemeContext.Provider>
  );
}

export default App;
