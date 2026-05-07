import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
const genAI = new GoogleGenerativeAI("AIzaSyAF1Vtu6XR3xQAEvYMGXVGBek6-_VA9yP4");

export default function AppGemini({ handleSignout }) {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { role: "user", text: prompt };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setPrompt("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      // Criar contexto com histórico
      const history = updatedMessages
        .map((msg) => `${msg.role === "user" ? "User" : "AI"}: ${msg.text}`)
        .join("\n");

      const result = await model.generateContent(history);
      const aiText = result.response.text();

      setMessages([...updatedMessages, { role: "ai", text: aiText }]);
    } catch (error) {
      console.error("Erro completo:", error);
      setMessages([
        ...updatedMessages,
        { role: "ai", text: error.message || "Erro ao gerar resposta." },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* 25% */}
        <LeftMenu data={messages} />

        {/* 75% */}
        <div style={{ width: "75%", display: "flex", flexDirection: "column" }}>
          <Header handleSignout={handleSignout} />

          <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
            {messages.length === 0 && <div>O que deseja saber?</div>}

            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "10px",
                    background: msg.role === "user" ? "#007bff" : "#eee",
                    color: msg.role === "user" ? "white" : "black",
                    maxWidth: "70%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              margin: "10px",
              gap: "8px",
            }}
          >
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Escreva uma mensagem..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                border: "none",
                background: "#4f46e5",
                color: "white"
              }}
            >
              {loading ? "..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
