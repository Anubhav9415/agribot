// ─── Design Tokens ────────────────────────────────────────────────────────────
// All colours and reusable style objects live here so every component
// stays visually consistent without duplicating magic strings.

export const colors = {
  darkBg:      "#0A1628",
  darkCard:    "#0D2137",
  cardBg:      "#122B1E",
  forestGreen: "#1B4332",
  midGreen:    "#2D6A4F",
  leafGreen:   "#52B788",
  accent:      "#95D5B2",
  lightGreen:  "#A8E6CF",
  muted:       "#74C69D",
  offWhite:    "#D8F3DC",
  white:       "#FFFFFF",
};

// Reusable card style (spread into inline style objects)
export const card = {
  background:  colors.cardBg,
  borderRadius: 16,
  border:      `1px solid ${colors.midGreen}33`,
  padding:     16,
};

// Input base style
export const inputBase = {
  background:  "rgba(255,255,255,0.07)",
  border:      `1px solid ${colors.leafGreen}4D`,
  borderRadius: 12,
  color:       colors.offWhite,
  fontSize:    14,
  outline:     "none",
  width:       "100%",
  boxSizing:   "border-box",
  padding:     "12px 14px",
};

// Pill / badge style
export const pill = (active = false) => ({
  background:  active ? colors.midGreen : "rgba(255,255,255,0.06)",
  color:       active ? colors.lightGreen : colors.muted,
  border:      "none",
  borderRadius: 12,
  padding:     "10px 0",
  fontWeight:  700,
  fontSize:    13,
  cursor:      "pointer",
  flex:        1,
  transition:  "all 0.2s",
  boxShadow:   active ? `0 4px 12px ${colors.midGreen}66` : "none",
});
