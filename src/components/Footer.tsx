import { useContext } from "react";
import { ThemeContext } from "../App";
import { ChatContext } from "./ChatContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { messages, apiResponseTime } = useContext(ChatContext);

  return (
    <div data-bs-theme={theme}>
      <div
        className="row"
        style={{
          padding: "12px",
          textAlign: "center",
          borderTop: "1px solid grey",
          fontSize: "14px",
        }}
      >
        <div className="col-12">
          João Nunes | Frontend 25/26 | 
          Mensagens: {messages.length} | 
          Tempo de resposta: {apiResponseTime} ms | 
          Tema: {theme}
        </div>
      </div>
    </div>
  );
}

export default Footer;