import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAt01gB_VhVxNx0EHwsxI8JMx8RPc7gb10");

export default function AppGemini() {
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
      const model = genAI.getGenerativeModel({ model: "gemini-flash" });

      // Criar contexto com histórico
      const history = updatedMessages
        .map((msg) => `${msg.role === "user" ? "User" : "AI"}: ${msg.text}`)
        .join("\n");

      const result = await model.generateContent(history);
      const aiText = result.response.text();

      setMessages([...updatedMessages, { role: "ai", text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...updatedMessages,
        { role: "ai", text: "Erro ao gerar resposta." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ padding: "10px" }}>A1Pr0ject</h2>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.length === 0 && <div>What's on your mind today?</div>}

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

      <form onSubmit={handleSubmit} style={{ display: "flex", margin: "10px" }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
          placeholder="Type a message..."
        />

        <button
          type="submit"
          style={{ padding: "10px", height: "50px" }}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
