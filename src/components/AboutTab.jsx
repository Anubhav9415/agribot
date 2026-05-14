import { FEATURES } from "../constants/prompts";
import { colors }   from "../constants/styles";

/**
 * About tab — product description and feature list for judges / reviewers.
 */
export default function AboutTab() {
  return (
    <div
      style={{
        background:   "rgba(255,255,255,0.04)",
        borderRadius: 16,
        padding:      24,
        border:       `1px solid ${colors.leafGreen}26`,
      }}
    >
      <h2 style={{ color: colors.lightGreen, marginTop: 0 }}>
        ℹ️ About AgriBot
      </h2>

      <p style={{ color: colors.offWhite, lineHeight: 1.8, fontSize: 14 }}>
        AgriBot is an{" "}
        <strong style={{ color: colors.lightGreen }}>
          AI-powered agricultural advisory platform
        </strong>{" "}
        designed to democratise farming expertise for Indian farmers. Powered by
        Claude AI, it provides real-time, personalised guidance across all
        aspects of farming.
      </p>

      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        {FEATURES.map((f, i) => (
          <div
            key={i}
            style={{
              display:      "flex",
              gap:          14,
              background:   `${colors.midGreen}26`,
              borderRadius: 12,
              padding:      14,
              border:       `1px solid ${colors.leafGreen}26`,
            }}
          >
            <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
            <div>
              <div
                style={{
                  color:        colors.lightGreen,
                  fontWeight:   700,
                  fontSize:     14,
                  marginBottom: 4,
                }}
              >
                {f.title}
              </div>
              <div style={{ color: colors.muted, fontSize: 13, lineHeight: 1.6 }}>
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hackathon badge */}
      <div
        style={{
          textAlign:    "center",
          marginTop:    20,
          padding:      14,
          background:   `${colors.leafGreen}1A`,
          borderRadius: 12,
          border:       `1px solid ${colors.leafGreen}33`,
        }}
      >
        <div style={{ color: colors.leafGreen, fontSize: 13, fontWeight: 700 }}>
          🏆 Built for AI Hackathon 2026
        </div>
        <div style={{ color: colors.muted, fontSize: 12, marginTop: 4 }}>
          Phase 2: Build Sprint Prototype Submission
        </div>
      </div>
    </div>
  );
}
