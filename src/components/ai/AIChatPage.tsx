import React, { useRef, useEffect, useState } from 'react';
import { useAI } from './AIContext';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Terminal, RefreshCw, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import ClearConfirmDialog from './ClearConfirmDialog';

export default function AIChatPage() {
  const { messages, isSubmitting, sendMessage, clearConversation } = useAI();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const prevIsSubmitting = useRef(isSubmitting);
  const prevMessagesLength = useRef(messages.length);
  const navigate = useNavigate();

  // Intelligent scroll positioning when messages or isSubmitting updates
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
    }

    prevIsSubmitting.current = isSubmitting;
    prevMessagesLength.current = messages.length;
  }, [messages, isSubmitting]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-[#0B0B0F] text-zinc-100 h-[calc(100vh-4rem)] flex flex-col overflow-hidden select-none relative"
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
      
      {/* 1. Standardized Header (Identical visual structure as AIChatWindow) */}
      <div className="h-[54px] px-4 bg-zinc-955 border-b border-premium-subtle flex items-center justify-between shrink-0 z-20">
        {/* Title & Online Indicator */}
        <div className="flex items-center gap-2.5">
          {/* Glowing online indicator */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          
          <span className="text-sm font-bold text-white tracking-wide">
            ByteAcademy AI Assistant
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Reset Conversation */}
          <button
            onClick={() => setShowConfirmReset(true)}
            className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-rose-450 transition-colors text-xs font-bold cursor-pointer select-none"
            title="Clear Chat History"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin-hover" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <div className="h-4 w-px border-l border-premium" />

          {/* Close X Button */}
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-rose-400 transition-colors cursor-pointer flex items-center justify-center"
            title="Close Page"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Messages (Spacious Scroll Area - Fills entire remaining height) */}
      <div
        ref={scrollRef}
        className="flex-grow overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 bg-[#07070a]/40 scrollbar-thin flex flex-col"
      >
        <div className="w-full max-w-5xl xl:max-w-6xl mx-auto flex-grow flex flex-col justify-start select-text">
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
              <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <Terminal className="w-4.5 h-4.5 text-[#FF0800]" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-zinc-900 border border-premium-subtle text-xs flex items-center gap-1.5 text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800] animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800] animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Input Box (Clean bottom footer) */}
      <div className="bg-[#0c0c12] py-4 px-4 sm:px-6 lg:px-8 border-t border-premium shrink-0 z-20">
        <div className="max-w-5xl xl:max-w-6xl mx-auto w-full">
          <ChatInput onSendMessage={sendMessage} disabled={isSubmitting} />
        </div>
      </div>

    </motion.div>
  );
}
