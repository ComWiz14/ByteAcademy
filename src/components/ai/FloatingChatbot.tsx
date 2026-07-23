import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Maximize2, X, Terminal, RefreshCw } from 'lucide-react';
import { useAI } from './AIContext';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ClearConfirmDialog from './ClearConfirmDialog';

export default function FloatingChatbot() {
  const { messages, isOpen, setIsOpen, isSubmitting, sendMessage, clearConversation } = useAI();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const prevIsSubmitting = useRef(isSubmitting);
  const prevMessagesLength = useRef(messages.length);
  const navigate = useNavigate();
  const location = useLocation();

  const isFullPage = location.pathname === '/bytecode-ai';

  // Intelligent scroll positioning when messages, isSubmitting, or isOpen updates
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const hasNewMessages = messages.length > prevMessagesLength.current;
    const lastMessage = messages[messages.length - 1];

    if (hasNewMessages && lastMessage) {
      if (lastMessage.role === 'user') {
        // User sent a message -> scroll to bottom instantly so they see their message
        container.scrollTop = container.scrollHeight;
      } else if (lastMessage.role === 'assistant') {
        // AI responded -> position the scroll smoothly at the top of the new AI message
        setTimeout(() => {
          if (lastMessageRef.current && scrollRef.current) {
            const element = lastMessageRef.current;
            const scrollContainer = scrollRef.current;
            const absoluteTop = element.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top + scrollContainer.scrollTop;
            scrollContainer.scrollTo({
              top: Math.max(0, absoluteTop - 16),
              behavior: 'smooth'
            });
          }
        }, 50);
      }
    } else if (isSubmitting) {
      // When user is typing / waiting, keep scroll at bottom for typing indicator
      container.scrollTop = container.scrollHeight;
    } else if (isOpen) {
      // When the chat window is opened, ensure it's scrolled to bottom of current context
      container.scrollTop = container.scrollHeight;
    }

    prevIsSubmitting.current = isSubmitting;
    prevMessagesLength.current = messages.length;
  }, [messages, isSubmitting, isOpen]);

  // Freeze background scrolling while the chatbot is open on mobile/desktop
  useEffect(() => {
    if (isOpen && !isFullPage) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen, isFullPage]);

  // Do not show anything on the full-page AI Assistant view
  if (isFullPage) return null;

  return (
    <div className="select-none">
      {/* 1. Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-24 right-6 z-40">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="flex flex-col items-center justify-center w-14 h-14 rounded-full shadow-xl select-none cursor-pointer border border-[#FF0800] bg-[#FF0800] text-white hover:bg-[#D60700] transition-colors duration-300 relative z-40"
              aria-label="Open AI Assistant"
            >
              <div className="relative flex flex-col items-center justify-center">
                <Bot className="w-5 h-5 mb-0.5" />
                <span className="text-[9px] font-black tracking-widest uppercase leading-none">AI</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Chatbot Backdrop & Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbot-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="fixed inset-0 bg-black/45 backdrop-blur-[4px] z-[100] transition-colors duration-300"
          />
        )}

        {isOpen && (
          <motion.div
            key="chatbot-window"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed z-[110] flex flex-col bg-zinc-900 border border-premium shadow-2xl rounded-2xl overflow-hidden transition-colors duration-300 bottom-[12px] left-[12px] right-[12px] w-[calc(100vw-24px)] h-[85vh] max-h-[85vh] sm:bottom-24 sm:right-6 sm:left-auto sm:translate-x-0 sm:w-[420px] sm:h-[700px] sm:max-h-[700px]"
          >
              {/* Reset Confirmation Overlay */}
              <ClearConfirmDialog
                isOpen={showConfirmReset}
                onCancel={() => setShowConfirmReset(false)}
                onConfirm={() => {
                  clearConversation();
                  setShowConfirmReset(false);
                }}
              />

              {/* Header - Identical visual structure as full AI Assistant page */}
              <div className="h-[54px] px-4 bg-zinc-955 border-b border-premium-subtle flex items-center justify-between shrink-0 z-20">
                {/* Title & Online Indicator */}
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">
                    ByteAcademy AI Assistant
                  </span>
                </div>

                {/* Action Controls */}
                <div className="flex items-center gap-1.5">
                  {/* Reset Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowConfirmReset(true);
                    }}
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-rose-450 transition-colors cursor-pointer flex items-center justify-center"
                    title="Clear Chat History"
                    aria-label="Clear chat"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>

                  {/* Expand Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                      navigate('/bytecode-ai');
                    }}
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer flex items-center justify-center"
                    title="Expand to Full Page"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-rose-400 transition-colors cursor-pointer flex items-center justify-center"
                    title="Close Chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div
                ref={scrollRef}
                className="flex-grow p-3 sm:p-4 overflow-y-auto bg-zinc-950/10 flex flex-col space-y-1 scrollbar-thin animate-fadeIn select-text"
              >
                {(() => {
                  const seen = new Set<string>();
                  const filtered = messages.filter((msg) => {
                    if (!msg || !msg.id) return false;
                    if (seen.has(msg.id)) return false;
                    seen.add(msg.id);
                    return true;
                  });
                  return filtered.map((msg, idx) => {
                    const isLast = idx === filtered.length - 1;
                    return (
                      <div key={msg.id} ref={isLast ? lastMessageRef : null}>
                        <ChatMessage message={msg} />
                      </div>
                    );
                  });
                })()}

                {isSubmitting && (
                  <div className="flex gap-3 justify-start items-center animate-pulse py-2 px-1">
                    <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0 select-none">
                      <Terminal className="w-4 h-4 text-[#FF0800]" />
                    </div>
                    <div className="px-3.5 py-2.5 rounded-2xl bg-zinc-900 border border-premium-subtle text-xs flex items-center gap-1 text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800] animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800] animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800] animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-3 sm:p-4 bg-[#0c0c12] border-t border-premium-subtle z-10 shrink-0">
                <ChatInput onSendMessage={sendMessage} disabled={isSubmitting} />
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
