import { useState, useRef, useEffect } from "react";
import { askGemini }       from "../constants/api";
import { buildSystemPrompt } from "../constants/prompts";
import { colors }           from "../constants/styles";
import QuickQuery           from "./QuickQuery";
import MessageBubble        from "./MessageBubble";
import TypingIndicator      from "./TypingIndicator";

/**
 * Full chat tab: quick-ask buttons, scrollable messages, text input.
 * @prop {{ state, soil, acres, crops }} farmProfile
 */
export default function ChatWindow({ farmProfile }) {
  const [messages, setMessages] = useState([]);
  const [input,    setInput]    = useState("");
  const [loading,  setLoading]  = useState("");   // "" | "thinking"
  const [error,    setError]    = useState(null);
  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    setInput("");
    setError(null);
    const updated = [...messages, { role: "user", content: userText }];
    setMessages(updated);
    setLoading("thinking");

    try {
      const systemPrompt = buildSystemPrompt(farmProfile);
      const reply = await askGemini(updated, systemPrompt);
      setMessages([...updated, { role: "assistant", content: reply }]);
    } catch (err) {
      setError(err.message || "Connection error. Please try again.");
    } finally {
      setLoading("");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Quick ask */}
      <QuickQuery onSelect={sendMessage} />

      {/* Message list */}
      <div
        style={{
          background:   "rgba(255,255,255,0.03)",
          borderRadius: 16,
          border:       `1px solid ${colors.midGreen}1A`,
          minHeight:    320,
          maxHeight:    420,
          overflowY:    "auto",
          padding:      16,
          display:      "flex",
          flexDirection: "column",
          gap:          12,
        }}
      >
        {messages.length === 0 && (
          <div
            style={{
              textAlign:  "center",
              marginTop:  60,
              color:      colors.leafGreen,
              opacity:    0.6,
            }}
          >
            <div style={{ fontSize: 48 }}>🌿</div>
            <p style={{ fontSize: 14, marginTop: 8 }}>
              Ask AgriBot anything about farming!
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {loading && <TypingIndicator />}

        {error && (
          <div
            style={{
              background:   "#E6394622",
              border:       "1px solid #E6394644",
              borderRadius: 10,
              padding:      "10px 14px",
              color:        "#FF6B6B",
              fontSize:     13,
            }}
          >
            ⚠️ {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask about crops, pests, weather, market prices..."
          style={{
            flex:         1,
            background:   "rgba(255,255,255,0.07)",
            border:       `1px solid ${colors.leafGreen}4D`,
            borderRadius: 14,
            padding:      "14px 18px",
            color:        colors.offWhite,
            fontSize:     14,
            outline:      "none",
          }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          style={{
            background:   `linear-gradient(135deg, ${colors.forestGreen}, ${colors.midGreen})`,
            border:       "none",
            borderRadius: 14,
            padding:      "0 20px",
            color:        colors.lightGreen,
            fontWeight:   700,
            fontSize:     15,
            cursor:       loading || !input.trim() ? "not-allowed" : "pointer",
            opacity:      loading || !input.trim() ? 0.5 : 1,
            transition:   "opacity 0.2s",
          }}
        >
          Send →
        </button>
      </div>

      <style>{`
        input::placeholder { color: ${colors.muted}66; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${colors.leafGreen}4D; border-radius: 3px; }
      `}</style>
    </div>
  );
}
