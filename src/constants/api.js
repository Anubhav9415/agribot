// ─── Gemini API Helper ─────────────────────────────────────────────────────

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

// 🔑 API KEY
const API_KEY =
  process.env.REACT_APP_GEMINI_API_KEY ||
  "AIzaSyC38AcMMn04uzxm3NmE2xbEErDxt8UtiiI";

/**
 * Send conversation to Gemini and return reply
 *
 * @param {Array<{role: string, content: string}>} messages
 * @param {string} systemPrompt
 */
export async function askGemini(messages, systemPrompt) {
  if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY") {
    throw new Error(
      "API key missing. Set REACT_APP_GEMINI_API_KEY in .env file."
    );
  }

  // Convert messages into Gemini format
  const formattedMessages = messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${systemPrompt}\n\n${formattedMessages
                .map((m) => m.parts[0].text)
                .join("\n")}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I could not process that."
  );
}