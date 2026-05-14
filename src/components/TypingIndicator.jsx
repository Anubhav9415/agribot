import { colors } from "../constants/styles";

/**
 * Animated three-dot typing indicator shown while the AI is thinking.
 */
export default function TypingIndicator() {
  return (
    <>
      <style>{`
        @keyframes agribot-bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-8px); }
        }
      `}</style>

      <div
        style={{
          display:      "flex",
          gap:          6,
          padding:      "12px 16px",
          background:   "rgba(255,255,255,0.05)",
          borderRadius: 16,
          width:        "fit-content",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width:               8,
              height:              8,
              borderRadius:        "50%",
              background:          colors.leafGreen,
              animation:           "agribot-bounce 1.2s infinite",
              animationDelay:      `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
