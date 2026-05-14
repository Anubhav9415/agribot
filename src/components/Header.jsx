import { colors } from "../constants/styles";

/**
 * Top banner with branding and live status badge.
 */
export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 760,
        background: `linear-gradient(135deg, ${colors.forestGreen}, ${colors.midGreen})`,
        borderRadius: 20,
        padding: "20px 28px",
        marginBottom: 16,
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${colors.leafGreen}33`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: logo + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            fontSize: 40,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 12,
            width: 56,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🌱
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: -0.5,
              color: colors.lightGreen,
            }}
          >
            AgriBot
          </h1>
          <p style={{ margin: 0, fontSize: 13, color: colors.muted }}>
            AI Agricultural Advisory System
          </p>
        </div>
      </div>

      {/* Right: status badge */}
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontSize: 11,
            color: colors.leafGreen,
            background: `${colors.leafGreen}26`,
            padding: "4px 10px",
            borderRadius: 20,
            border: `1px solid ${colors.leafGreen}4D`,
          }}
        >
          🟢 AI Powered · Live
        </div>
        <div style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>
          Powered by Claude AI
        </div>
      </div>
    </div>
  );
}
