/**
 * ByteAcademy AI Assistant Client Service
 * Calls the secure backend API endpoint (/api/chat) to protect Gemini API keys.
 */

export interface ChatHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Sends a chat message to the backend proxy route (/api/chat), which safely
 * interacts with the Gemini API without exposing credentials to the browser.
 */
export async function sendChatMessage(
  message: string,
  history: ChatHistoryItem[],
  context?: string
): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
        context,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorText = data?.error || 'Failed to communicate with AI Assistant.';
      throw new Error(errorText);
    }

    if (!data.text) {
      throw new Error('Received an empty response from the AI Assistant.');
    }

    return data.text;
  } catch (error: any) {
    console.error('Client AI Service Error:', error);
    throw new Error(
      error.message ||
        'Something went wrong while contacting the AI Assistant. Please try again shortly.'
    );
  }
}

/**
 * Returns true indicating the service delegates auth to the secure backend.
 */
export const hasApiKeyConfigured = (): boolean => true;
