// ─── Anthropic API Helper ─────────────────────────────────────────────────────
// Centralises all fetch logic so components never call fetch() directly.

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL             = "claude-sonnet-4-20250514";
const MAX_TOKENS        = 1000;

/**
 * Send a conversation to the Claude API and return the assistant's reply.
 *
 * @param {Array<{role: string, content: string}>} messages  Full conversation history
 * @param {string} systemPrompt  System prompt (may include farm-profile context)
 * @returns {Promise<string>}  Assistant reply text
 */
export async function askClaude(messages, systemPrompt) {
  const response = await fetch(ANTHROPIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model:      MODEL,
      max_tokens: MAX_TOKENS,
      system:     systemPrompt,
      messages,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text ?? "Sorry, I could not process that. Please try again.";
}
