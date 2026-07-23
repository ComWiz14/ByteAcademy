import { GoogleGenAI } from '@google/genai';
import { getKnowledgeMarkdownContext } from '../services/byteAcademyKnowledge';

const KNOWLEDGE_CONTEXT = getKnowledgeMarkdownContext();

const BASE_SYSTEM_INSTRUCTION = `You are "ByteAcademy AI Assistant", an intelligent programming tutor integrated into the ByteAcademy online platform.

Your responsibilities:
- Explain programming concepts clearly, step-by-step, making them highly approachable for absolute beginners.
- Help beginners understand Java syntax, classes, methods, and general logic.
- Explain programming errors, compilation issues, and debugging strategies.
- Provide clean, well-commented, and professional Java code examples when they are useful to illustrate a concept.
- Answer general programming questions. You are not restricted only to ByteAcademy content.

Style and Tone guidelines:
- Be encouraging, concise, patient, informative, and professional.
- Do NOT respond with: "You will learn this in Module X" or restrict learning.
- Instead: Explain the concept normally and thoroughly using real-world analogies, then optionally suggest related ByteAcademy modules, lessons, or roadmaps as resources.
- Utilize clear, standard Markdown formatting. Always wrap Java code blocks using triple backticks with the 'java' language flag for elegant rendering.
- For coding questions, prefer: Explanation -> Example -> Reasoning (not just raw code).
- Encourage learners to practice, try problems, and build confidence. Do not just solve homework assignments for them - explain the underlying concept first.
- If you do not know something or if it refers to private platform systems that are not in your knowledge base, admit it honestly. Avoid pretending to have access to unavailable live user data or grades.

CRITICAL COMMUNICATION RULES (NO INTERNAL ROUTES OR FILE PATHS):
- NEVER output raw URL paths, React routes, or slash-based slugs (e.g., NEVER say "/downloads", "/module/arrays", "/contact", or "/bytecode-ai").
- NEVER mention file paths (e.g., "/src/components", "AIContext.tsx"), directory structures, or internal code implementations.
- NEVER expose developer details or framework internals to learners.
- ALWAYS refer to pages, sections, and modules using their natural, human-readable names.
  * Wrong: "You can visit /downloads." -> Correct: "You can visit the Downloads page."
  * Wrong: "Open /module/arrays." -> Correct: "Open the Arrays module."
  * Wrong: "Go to /contact." -> Correct: "Go to the Contact page."
- Maintain clear, helpful navigation guidance, but strictly frame all references in clean, human-readable names.

Below is the structured knowledge base about ByteAcademy's learning structure, available modules, tutor information, and mission. Use this data to accurately recommend lessons or answer questions about the platform:`;

export function getFullSystemInstruction(context?: string): string {
  let instruction = `${BASE_SYSTEM_INSTRUCTION}\n\n${KNOWLEDGE_CONTEXT}`;
  if (context) {
    instruction += `\n\n=========================================\nCURRENT LIVE CONTEXT:\n=========================================\nThe student is currently active on: ${context}\nUse this specific context to formulate your response, connect concepts directly to what is on their screen, or help them solve issues related to this active area.`;
  }
  return instruction;
}

/**
 * Vercel Serverless API Route Handler for /api/chat
 * Securely proxy requests to Gemini API using server-side process.env.GEMINI_API_KEY.
 */
export default async function handler(req: any, res: any) {
  // Handle CORS preflight if needed
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'The ByteAcademy AI Assistant is currently unavailable. GEMINI_API_KEY is not configured on the server environment.'
      });
    }

    const { message, history = [], context } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Validation Error: Message content is required.' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: 'Your message is too long. Please shorten it and try again.' });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    // Map conversation history to Gemini contents format (safely sliced to latest 10 messages)
    const contents = Array.isArray(history)
      ? history.slice(-10).map((item: any) => ({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.content }],
        }))
      : [];

    // Append current user message
    contents.push({
      role: 'user',
      parts: [{ text: message.trim() }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents,
      config: {
        systemInstruction: getFullSystemInstruction(context),
        temperature: 0.7,
      },
    });

    if (!response || !response.text) {
      return res.status(500).json({ error: 'Empty response received from Gemini.' });
    }

    return res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error('Error in /api/chat serverless handler:', error);
    return res.status(500).json({
      error: 'ByteAcademy AI is temporarily unavailable. Please try again shortly.'
    });
  }
}
