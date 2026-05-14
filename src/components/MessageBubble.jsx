import { colors } from "../constants/styles";

/**
 * Single chat bubble — renders differently for "user" vs "assistant".
 * @prop {{ role: "user"|"assistant", content: string }} message
 */
export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display:        "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth:     "82%",
          background:   isUser
            ? `linear-gradient(135deg, ${colors.forestGreen}, ${colors.midGreen})`
            : "rgba(255,255,255,0.07)",
          border:       isUser ? "none" : `1px solid ${colors.midGreen}33`,
          borderRadius: isUser
            ? "18px 18px 4px 18px"
            : "18px 18px 18px 4px",
          padding:      "12px 16px",
          fontSize:     14,
          lineHeight:   1.7,
          color:        isUser ? colors.lightGreen : colors.offWhite,
          boxShadow:    "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Bot label */}
        {!isUser && (
          <span
            style={{
              fontSize:    11,
              color:       colors.leafGreen,
              fontWeight:  700,
              display:     "block",
              marginBottom: 6,
            }}
          >
            🌱 AgriBot
          </span>
        )}

        {/* Message text — preserve line breaks */}
        {message.content.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
}
