// ─── AI System Prompt ─────────────────────────────────────────────────────────
export const SYSTEM_PROMPT = `You are AgriBot, an expert AI agricultural advisor
specializing in Indian farming. You help farmers with:

1. Crop recommendations based on soil type, season, region, and water availability
2. Pest & disease diagnosis from symptom descriptions
3. Weather-based farming advice
4. Market price guidance and when to sell
5. Organic vs chemical farming trade-offs
6. Government schemes for farmers (PM-KISAN, soil health card, crop insurance, etc.)

Guidelines:
- Always give practical, actionable advice a farmer can act on immediately
- Be concise but thorough — no unnecessary filler
- Use simple language that non-experts can understand
- Format responses with relevant emojis for visual clarity
- When recommending crops, always mention: expected yield, market demand,
  water requirement, and suitable states/regions
- Keep responses under 250 words unless the user asks for more detail
- If you don't know something specific (e.g. live prices), say so honestly
  and suggest where they can check (e.g. Agmarknet, eNAM portal)`;

// ─── Farm-profile-aware system prompt builder ─────────────────────────────────
export const buildSystemPrompt = (profile) => {
  if (!profile.state && !profile.soil && !profile.acres && !profile.crops) {
    return SYSTEM_PROMPT;
  }
  const profileBlock = [
    profile.state  && `State/Region: ${profile.state}`,
    profile.soil   && `Soil Type: ${profile.soil}`,
    profile.acres  && `Farm Size: ${profile.acres} acres`,
    profile.crops  && `Current/Last Crops: ${profile.crops}`,
  ]
    .filter(Boolean)
    .join("\n");

  return `${SYSTEM_PROMPT}\n\n---\nFarmer Profile (use this context for all answers):\n${profileBlock}`;
};

// ─── Quick-ask buttons shown in the chat tab ──────────────────────────────────
export const QUICK_QUERIES = [
  {
    icon: "🌾",
    label: "Crop Recommendation",
    query:
      "Suggest the best crops for black cotton soil in Maharashtra during Kharif season with moderate rainfall.",
  },
  {
    icon: "🐛",
    label: "Pest Diagnosis",
    query:
      "My tomato plants have yellow leaves with brown spots and small holes. There is white powdery residue underneath the leaves. What disease is this and how do I treat it?",
  },
  {
    icon: "💧",
    label: "Water Advisory",
    query:
      "What is the best irrigation method for wheat in Punjab during winter? I have 5 acres and a borewell.",
  },
  {
    icon: "📈",
    label: "Market Timing",
    query:
      "When is the best time to sell onions from Maharashtra to get the maximum price? Where should I sell?",
  },
  {
    icon: "🌿",
    label: "Organic Farming",
    query:
      "How do I start organic farming on 2 acres? What certification do I need and what is the realistic income potential?",
  },
  {
    icon: "🏛️",
    label: "Govt Schemes",
    query:
      "What government schemes are available for small and marginal farmers in India? How do I apply for PM-KISAN?",
  },
];

// ─── Farm profile field definitions ──────────────────────────────────────────
export const PROFILE_FIELDS = [
  {
    key: "state",
    label: "State / Region",
    placeholder: "e.g. Maharashtra, Punjab, Kerala...",
  },
  {
    key: "soil",
    label: "Soil Type",
    placeholder: "e.g. Black Cotton, Red Laterite, Alluvial...",
  },
  {
    key: "acres",
    label: "Farm Size (Acres)",
    placeholder: "e.g. 2.5",
  },
  {
    key: "crops",
    label: "Current / Last Crops",
    placeholder: "e.g. Wheat, Onion, Sugarcane...",
  },
];

// ─── About page feature list ──────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: "🌾",
    title: "Smart Crop Recommendation",
    desc: "AI analyses your soil, region, season, and water availability to recommend the most profitable crops for your land.",
  },
  {
    icon: "🐛",
    title: "Pest & Disease Diagnosis",
    desc: "Describe symptoms in plain language — AgriBot identifies diseases and provides both organic and chemical treatment options.",
  },
  {
    icon: "📊",
    title: "Market Intelligence",
    desc: "Know when to sell, where to sell, and what price to expect based on historical patterns and seasonal demand.",
  },
  {
    icon: "🏛️",
    title: "Government Schemes",
    desc: "Instantly access information on PM-KISAN, soil health cards, crop insurance, subsidies, and how to apply.",
  },
  {
    icon: "💧",
    title: "Resource Optimisation",
    desc: "Minimise water, fertiliser, and pesticide use while maximising yield through AI-driven recommendations.",
  },
  {
    icon: "🌿",
    title: "Organic Farming Guide",
    desc: "Step-by-step guidance on transitioning to organic farming, certification process, and expected income uplift.",
  },
];
