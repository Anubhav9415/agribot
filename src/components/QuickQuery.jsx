import { useState } from "react";
import { QUICK_QUERIES } from "../constants/prompts";
import { colors } from "../constants/styles";

/**
 * Grid of quick-ask buttons.
 * @prop {Function} onSelect(queryString) – called when a button is tapped
 */
export default function QuickQuery({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: 16,
        padding: 16,
        border: `1px solid ${colors.leafGreen}26`,
      }}
    >
      <p
        style={{
          margin: "0 0 12px",
          fontSize: 12,
          color: colors.leafGreen,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Quick Ask
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        {QUICK_QUERIES.map((q, i) => (
          <button
            key={i}
            onClick={() => onSelect(q.query)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background:
                hovered === i
                  ? `${colors.midGreen}80`
                  : `${colors.midGreen}40`,
              border:      `1px solid ${colors.leafGreen}40`,
              borderRadius: 10,
              padding:     "8px 12px",
              cursor:      "pointer",
              textAlign:   "left",
              color:       colors.lightGreen,
              fontSize:    12,
              fontWeight:  600,
              display:     "flex",
              alignItems:  "center",
              gap:         6,
              transition:  "background 0.2s",
            }}
          >
            <span>{q.icon}</span>
            {q.label}
          </button>
        ))}
      </div>
    </div>
  );
}
