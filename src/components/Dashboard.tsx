import { ChatContext } from "./ChatContext";
import { useContext } from 'react';

function Dashboard() {
   const { messages, apiResponseTime } =
    useContext(ChatContext);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
 <h1>Dashboard</h1>
 <button onClick={() => window.history.back()} className="btn btn-secondary">Voltar</button>
      </div>
     

      <div
        style={{
          display: "flex",
          marginTop: "20px"
        }}
      >
        <div style={cardStyle}>
          <h3>Mensagens totais</h3>
          <p style={valueStyle}>{messages.length}</p>
          <h3>Tempo de resposta da API</h3>
          <p style={valueStyle}>{apiResponseTime} ms</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  minWidth: "200px",
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
};

const valueStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  margin: 0,
};

const chartCard = {
  marginTop: "20px",
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
};

const chartPlaceholder = {
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9ca3af",
  background: "#f9fafb",
  borderRadius: "8px",
};

export default Dashboard;