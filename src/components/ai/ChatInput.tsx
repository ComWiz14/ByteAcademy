import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Send, CornerDownLeft } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, disabled = false }: ChatInputProps) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!text.trim() || disabled) return;
    onSendMessage(text);
    setText('');
    
    // Auto-reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  // Handle Enter key for submission (Shift+Enter for new line)
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize input height up to a max value as user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  }, [text]);

  return (
    <div className="flex items-end gap-2.5 sm:gap-3 w-full">
      <div className="relative flex-grow flex items-end bg-zinc-950/40 border border-zinc-800 rounded-2xl transition-all duration-300 focus-within:border-[#FF0800] focus-within:ring-2 focus-within:ring-[#FF0800]/10 focus-within:bg-zinc-950 px-3 sm:px-4 py-2">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask ByteAcademy AI Assistant anything about Java..."
          rows={1}
          disabled={disabled}
          className="w-full text-sm bg-transparent border-0 outline-none focus:ring-0 resize-none max-h-[140px] text-white placeholder-zinc-500 overflow-y-auto leading-relaxed py-1 focus:outline-none select-text"
          style={{ minHeight: '32px' }}
        />
        <div className="absolute right-4 bottom-2.5 hidden sm:flex items-center gap-1 text-[10px] text-zinc-500 select-none font-mono font-medium pb-0.5">
          <span>Enter</span>
          <CornerDownLeft className="w-2.5 h-2.5" />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSend}
        disabled={!text.trim() || disabled}
        className="h-[44px] w-[44px] rounded-2xl bg-[#FF0800] hover:bg-rose-700 disabled:bg-zinc-800 text-white disabled:text-zinc-600 flex items-center justify-center shadow-lg shadow-[#FF0800]/10 hover:shadow-xl hover:shadow-[#FF0800]/20 disabled:shadow-none transition-all active:scale-95 cursor-pointer shrink-0"
        title="Send Message"
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
