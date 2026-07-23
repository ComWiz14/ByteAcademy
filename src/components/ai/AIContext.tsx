import React, { createContext, useContext, useState, useEffect } from 'react';
import { sendChatMessage } from '../../services/aiService';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
}

interface AIContextType {
  messages: Message[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSubmitting: boolean;
  sendMessage: (content: string) => void;
  clearConversation: () => void;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `Hi, I'm **ByteAcademy AI Assistant** 👋

I can help you understand Java, programming concepts, and guide you through ByteAcademy.

How can I help you today?

*Tip: Feel free to ask about loops, OOP design, methods, or debug an error!*`,
  timestamp: new Date(),
};

// ============================================================================
// GEMA-TIER PROTECTION & RATE LIMITING CONSTANTS
// ============================================================================
const DAILY_LIMIT = 15;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES_SENT = 10;
const STORAGE_KEY_USAGE = 'byteacademy-ai-daily-usage';

interface UsageData {
  count: number;
  date: string; // YYYY-MM-DD
}

/**
 * Helper to retrieve today's date string in YYYY-MM-DD format
 */
const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Daily Limit Protection: Checks if the device has exceeded 15 messages for today
 */
export const checkDailyLimit = (): { allowed: boolean; remaining: number } => {
  try {
    const today = getTodayDateString();
    const raw = localStorage.getItem(STORAGE_KEY_USAGE);
    if (!raw) {
      return { allowed: true, remaining: DAILY_LIMIT };
    }
    const data: UsageData = JSON.parse(raw);
    if (data.date !== today) {
      // Date has changed, automatically reset counter
      return { allowed: true, remaining: DAILY_LIMIT };
    }
    return {
      allowed: data.count < DAILY_LIMIT,
      remaining: Math.max(0, DAILY_LIMIT - data.count),
    };
  } catch (e) {
    console.error('Error checking daily AI usage limit:', e);
    return { allowed: true, remaining: DAILY_LIMIT };
  }
};

/**
 * Increments the daily message usage count stored in localStorage
 */
export const incrementDailyCount = (): number => {
  try {
    const today = getTodayDateString();
    const raw = localStorage.getItem(STORAGE_KEY_USAGE);
    let count = 0;
    if (raw) {
      const data: UsageData = JSON.parse(raw);
      if (data.date === today) {
        count = data.count;
      }
    }
    const newCount = count + 1;
    localStorage.setItem(
      STORAGE_KEY_USAGE,
      JSON.stringify({ date: today, count: newCount })
    );
    return newCount;
  } catch (e) {
    console.error('Error incrementing daily AI count:', e);
    return 0;
  }
};

const generateUUID = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const sanitizeMessages = (msgs: Message[]): Message[] => {
  const seen = new Set<string>();
  return msgs.filter((m) => {
    if (!m || !m.id) return false;
    if (seen.has(m.id)) return false;
    seen.add(m.id);
    return true;
  });
};

export const AIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load chat history from localStorage with defensive ID sanitization and recovery
  useEffect(() => {
    try {
      const saved = localStorage.getItem('byteacademy-chat-history');
      if (saved) {
        let parsed: any;
        try {
          parsed = JSON.parse(saved);
        } catch (jsonErr) {
          console.error('Failed to parse chat history JSON, recovering with welcome message:', jsonErr);
          setMessages([WELCOME_MESSAGE]);
          return;
        }

        if (!Array.isArray(parsed)) {
          setMessages([WELCOME_MESSAGE]);
          return;
        }

        const validated: Message[] = [];
        const seenIds = new Set<string>();

        parsed.forEach((m: any) => {
          if (!m || typeof m !== 'object') return;
          if (m.role !== 'user' && m.role !== 'assistant') return;
          if (typeof m.content !== 'string') return;

          let id = m.id;
          if (!id || typeof id !== 'string' || seenIds.has(id)) {
            id = `${m.role}_${generateUUID()}`;
          }
          seenIds.add(id);

          let timestamp = new Date();
          if (m.timestamp) {
            const parsedDate = new Date(m.timestamp);
            if (!isNaN(parsedDate.getTime())) {
              timestamp = parsedDate;
            }
          }

          validated.push({
            id,
            role: m.role,
            content: m.content,
            timestamp,
            isError: !!m.isError
          });
        });

        if (validated.length === 0) {
          setMessages([WELCOME_MESSAGE]);
        } else {
          const hasWelcome = validated.some(m => m.id === 'welcome');
          if (!hasWelcome) {
            const firstTimestamp = validated[0].timestamp;
            const welcomeTimestamp = new Date(firstTimestamp.getTime() - 1000);
            validated.unshift({
              ...WELCOME_MESSAGE,
              timestamp: welcomeTimestamp,
            });
          }

          const sanitizedAndLimited = sanitizeMessages(validated).slice(-20);
          setMessages(sanitizedAndLimited);
        }
      } else {
        setMessages([WELCOME_MESSAGE]);
      }
    } catch (e) {
      console.error('Failed to load or clean chat history:', e);
      setMessages([WELCOME_MESSAGE]);
    }
  }, []);

  const saveHistory = (newMessages: Message[]) => {
    try {
      const limited = newMessages.slice(-20);
      localStorage.setItem('byteacademy-chat-history', JSON.stringify(limited));
    } catch (e) {
      console.error('Failed to save chat history to localStorage:', e);
    }
  };

  const getCurrentContextDescription = (): string => {
    if (typeof window === 'undefined') return '';
    const path = window.location.pathname;
    
    if (path === '/') return 'The homepage of ByteAcademy.';
    if (path === '/learn-java') return 'The main curriculum roadmap page (Learn Java), listing modules 1-13.';
    if (path === '/worked-examples') return 'The Worked Examples Library page, where students view exam-style programming challenges and solutions.';
    if (path === '/bytecode-ai') return 'The full-page ByteAcademy AI Assistant chat room.';
    if (path === '/about') return 'The About page describing Chimango Mughogho and pedagogical values.';
    if (path === '/contact') return 'The Contact page with options for premium monthly coaching signup and contact details.';
    if (path === '/downloads') return 'The Downloads page with compilers (OpenJDK) and VS Code installation links.';
    
    if (path.startsWith('/lesson/')) {
      const slug = path.split('/lesson/')[1];
      return `An active interactive Java lesson on the topic of: "${slug}". They are reading explanations, analyzing visual diagrams/memory layouts, working on a practice exercise, or trying out mistake cards.`;
    }
    
    if (path.startsWith('/module/')) {
      const slug = path.split('/module/')[1];
      return `The overview page for Module: "${slug}". They are browsing the list of lessons within this module.`;
    }
    
    return `Page with URL path: ${path}`;
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isSubmitting) return;

    // --------------------------------------------------------------------------
    // 1. MESSAGE LENGTH PROTECTION
    // Ensure input does not exceed 1000 characters to prevent API token spikes
    // --------------------------------------------------------------------------
    if (content.length > MAX_MESSAGE_LENGTH) {
      const userMsg: Message = {
        id: `user_${generateUUID()}`,
        role: 'user',
        content,
        timestamp: new Date(),
      };
      const lengthErrorMsg: Message = {
        id: `error_${generateUUID()}`,
        role: 'assistant',
        content: 'Your message is too long. Please shorten it and try again.',
        timestamp: new Date(),
        isError: true,
      };

      setMessages((prev) => {
        const combined = [...prev, userMsg, lengthErrorMsg];
        const sanitized = sanitizeMessages(combined);
        const limited = sanitized.slice(-20);
        saveHistory(limited);
        return limited;
      });
      return;
    }

    // --------------------------------------------------------------------------
    // 2. DAILY USAGE LIMIT PROTECTION
    // Ensure the user/device does not exceed 15 AI messages per day
    // --------------------------------------------------------------------------
    const { allowed } = checkDailyLimit();
    if (!allowed) {
      const userMsg: Message = {
        id: `user_${generateUUID()}`,
        role: 'user',
        content,
        timestamp: new Date(),
      };
      const limitErrorMsg: Message = {
        id: `error_${generateUUID()}`,
        role: 'assistant',
        content: 'Daily AI limit reached. Please try again tomorrow.',
        timestamp: new Date(),
        isError: true,
      };

      setMessages((prev) => {
        const combined = [...prev, userMsg, limitErrorMsg];
        const sanitized = sanitizeMessages(combined);
        const limited = sanitized.slice(-20);
        saveHistory(limited);
        return limited;
      });
      return;
    }

    // --------------------------------------------------------------------------
    // 3. PROCESS VALID MESSAGE
    // --------------------------------------------------------------------------
    const userMsg: Message = {
      id: `user_${generateUUID()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setIsSubmitting(true);

    let updatedMessages: Message[] = [];
    setMessages((prev) => {
      const combined = [...prev, userMsg];
      const sanitized = sanitizeMessages(combined);
      const limited = sanitized.slice(-20);
      updatedMessages = limited;
      saveHistory(limited);
      return limited;
    });

    try {
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        throw new Error('NO_INTERNET');
      }

      // --------------------------------------------------------------------------
      // 4. CONVERSATION HISTORY TOKEN PROTECTION
      // Display full conversation in UI (up to 20 messages saved in state),
      // but only send the LATEST 10 messages to the Gemini API backend proxy.
      // --------------------------------------------------------------------------
      const apiHistory = updatedMessages
        .filter((m) => m.id !== 'welcome' && !m.isError && m.id !== userMsg.id)
        .slice(-MAX_HISTORY_MESSAGES_SENT)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      // Call the Gemini API service with dynamic page context
      const currentContext = getCurrentContextDescription();
      const assistantResponse = await sendChatMessage(content, apiHistory, currentContext);

      // Increment daily usage count after successfully sending the request
      incrementDailyCount();

      const assistantMsg: Message = {
        id: `assistant_${generateUUID()}`,
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => {
        const combined = [...prev, assistantMsg];
        const sanitized = sanitizeMessages(combined);
        const limited = sanitized.slice(-20);
        saveHistory(limited);
        return limited;
      });
    } catch (error: any) {
      console.error('Error in sendMessage context flow:', error);

      let friendlyMessage = 'Something went wrong while generating a response.';
      if (error.message === 'NO_INTERNET') {
        friendlyMessage = 'No internet connection. Please check your connection and try again.';
      } else if (
        error.message?.includes('API_KEY_MISSING') ||
        error.message?.includes('unavailable') ||
        error.message?.includes('temporarily') ||
        error.status === 503 ||
        error.status === 403 ||
        error.status === 401
      ) {
        friendlyMessage = 'The AI Assistant is temporarily unavailable. Please try again shortly.';
      } else if (error.message) {
        friendlyMessage = error.message;
      }

      const errorMsg: Message = {
        id: `error_${generateUUID()}`,
        role: 'assistant',
        content: friendlyMessage,
        timestamp: new Date(),
        isError: true,
      };

      setMessages((prev) => {
        const combined = [...prev, errorMsg];
        const sanitized = sanitizeMessages(combined);
        const limited = sanitized.slice(-20);
        saveHistory(limited);
        return limited;
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearConversation = () => {
    try {
      setMessages([WELCOME_MESSAGE]);
      localStorage.removeItem('byteacademy-chat-history');
    } catch (e) {
      console.error('Failed to clear chat history:', e);
      setMessages([WELCOME_MESSAGE]);
    }
  };

  return (
    <AIContext.Provider
      value={{
        messages,
        isOpen,
        setIsOpen,
        isSubmitting,
        sendMessage,
        clearConversation,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};

