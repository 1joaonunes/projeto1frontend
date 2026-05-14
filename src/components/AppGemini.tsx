import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import { ChatContext } from "./ChatContext";
import { useContext } from "react";

const genAI = new GoogleGenerativeAI("AIzaSyCpfD-ECnDqbPK7sFZAPU8GM1uerDBcqfs");

export default function AppGemini({ handleSignout }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    messages,
    setMessages,
    apiResponseTime,
    setApiResponseTime,
    setErrorCount,
  } = useContext(ChatContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { role: "user", text: prompt };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setPrompt("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const history = updatedMessages
        .map((msg) => `${msg.role === "user" ? "User" : "AI"}: ${msg.text}`)
        .join("\n");

      const startTime = performance.now();

      const result = await model.generateContent(history);

      const endTime = performance.now();
      setApiResponseTime(((endTime - startTime) / 1000).toFixed(2));

      const aiText = result.response.text();

      setMessages([...updatedMessages, { role: "ai", text: aiText }]);
    } catch (error) {
      console.error("Erro completo:", error);
      setErrorCount((prev) => prev + 1);

      setMessages([
        ...updatedMessages,
        {
          role: "ai",
          text: error.message || "Erro ao gerar resposta.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        apiResponseTime,
        setApiResponseTime,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <LeftMenu data={messages} />

        <div
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
                    wordBreak: "break-all",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

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
              }}
            />

            <button
              type="submit"
              disabled={loading}
              className="buttonstyle btn btn-primary"
            >
              {loading ? "..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </ChatContext.Provider>
  );
}
