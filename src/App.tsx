import { createContext, useState } from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import "./styles/theme.css";
import Dashboard from "./components/Dashboard";
import Registo from "./components/Registo";
import { ChatContext } from "./components/ChatContext";

export const ThemeContext = createContext<any>(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [messages, setMessages] = useState([]);
  const [apiResponseTime, setApiResponseTime] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChatContext.Provider
        value={{
          messages,
          setMessages,
          apiResponseTime,
          setApiResponseTime,
          errorCount,
          setErrorCount
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Registo" element={<Registo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ChatContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
