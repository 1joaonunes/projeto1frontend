import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
   const totalMessages = location.state?.totalMessages || 0;
  return (
    <div style={{ padding: "20px" }}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
 <h1>Dashboard</h1>
 <button onClick={() => window.history.back()} className="btn btn-secondary">Voltar</button>
      </div>
     

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>Mensagens totais</h3>
          <p style={valueStyle}>{totalMessages}</p>
        </div>

        <div style={cardStyle}>
          <h3>Tempo médio de resposta</h3>
          <p style={valueStyle}>?ms</p>
        </div>
      </div>

      {/* Gráfico */}
      <div style={chartCard}>
        <h3 style={{ marginBottom: "10px" }}>Gráfico não sei de quê
        </h3>
        <div style={chartPlaceholder}>
          [ Aqui vai o gráfico ]
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