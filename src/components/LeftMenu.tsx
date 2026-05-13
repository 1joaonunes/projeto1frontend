import { useContext } from "react";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";

interface LeftMenuProps {
  data: { role: string; text: string }[];
}

function LeftMenu({ data }: LeftMenuProps) {
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate();

  console.log("Context color is " + themeContext.theme);
  return (
    <div
      className="col-3"
      style={{
        borderRight: "1px solid grey",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div className="row">
        <button
          type="button"
          onClick={() =>
            navigate("/Dashboard")
          }
          className="btn btn-primary buttonstyle"
        >
          Dashboard
        </button>
      </div>
      <div
        style={{
          fontWeight: 600,
          marginBottom: "10px",
          fontSize: "14px",
          color: "#aaaaaa",
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        Mensagens recentes:
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
          {data
            .filter((msg) => msg.role === "user")
            .map((msg, index) => (
              <li key={index}>{msg.text}</li>
            ))}
        </ul>
      </div>
      <div className="row" style={{ marginTop: "auto" }}>
        <button
          type="button"
          onClick={() => {
            themeContext.setTheme("light");
          }}
          className="btn btn-primary buttonstyle"
        >
          Modo claro
        </button>
        <button
          type="button"
          onClick={() => {
            themeContext.setTheme("dark");
          }}
          className="btn btn-primary buttonstyle"
        >
          Modo escuro
        </button>
        <button
          type="button"
          onClick={() => {
            themeContext.setTheme("custom-made-theme");
          }}
          className="btn btn-primary buttonstyle"
        >
          Modo azul
        </button>
      </div>
    </div>
  );
}

export default LeftMenu;
