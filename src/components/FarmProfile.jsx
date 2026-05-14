import { PROFILE_FIELDS } from "../constants/prompts";
import { colors, inputBase } from "../constants/styles";

/**
 * Farm profile tab — saves farmer context used by ChatWindow automatically.
 * @prop {{ state, soil, acres, crops }} profile
 * @prop {Function} setProfile
 */
export default function FarmProfile({ profile, setProfile }) {
  const handleChange = (key, value) =>
    setProfile((prev) => ({ ...prev, [key]: value }));

  const isComplete =
    profile.state && profile.soil && profile.acres && profile.crops;

  return (
    <div
      style={{
        background:   "rgba(255,255,255,0.04)",
        borderRadius: 16,
        padding:      24,
        border:       `1px solid ${colors.leafGreen}26`,
      }}
    >
      <h2 style={{ color: colors.lightGreen, marginTop: 0, fontSize: 18 }}>
        🧑‍🌾 Your Farm Profile
      </h2>
      <p style={{ color: colors.muted, fontSize: 13, marginBottom: 20 }}>
        Fill this once and AgriBot will personalise every answer to your farm —
        no need to repeat your details each time.
      </p>

      {PROFILE_FIELDS.map((field) => (
        <div key={field.key} style={{ marginBottom: 16 }}>
          <label
            style={{
              display:       "block",
              color:         colors.leafGreen,
              fontSize:      12,
              fontWeight:    700,
              marginBottom:  6,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {field.label}
          </label>
          <input
            value={profile[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            style={inputBase}
          />
        </div>
      ))}

      {/* Status banner */}
      <div
        style={{
          background:   `${colors.midGreen}33`,
          borderRadius: 10,
          padding:      14,
          border:       `1px solid ${colors.leafGreen}33`,
          marginTop:    8,
        }}
      >
        {isComplete ? (
          <p style={{ margin: 0, color: colors.lightGreen, fontSize: 13 }}>
            ✅ Profile saved! AgriBot will use this context in all your chat
            sessions automatically.
          </p>
        ) : (
          <p style={{ margin: 0, color: colors.muted, fontSize: 13 }}>
            💡 Fill in your details above to get personalised recommendations
            tailored to your farm.
          </p>
        )}
      </div>
    </div>
  );
}
