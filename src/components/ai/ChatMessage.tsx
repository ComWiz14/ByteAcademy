import React, { useState } from 'react';
import { Terminal, User, Copy, Check } from 'lucide-react';
import { Message } from './AIContext';

interface ChatMessageProps {
  message: Message;
  key?: string | number;
}

// Custom code block with state to handle copying
function CopyableCodeBlock({ code, language = 'java' }: { code: string; language?: string; key?: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code block: ', err);
    }
  };

  return (
    <div className="relative my-4 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-md">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-b border-zinc-800/40 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF0800] animate-pulse" />
          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest font-mono">
            {language === 'java' ? 'Java Compiler Target' : language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all text-[10px] uppercase font-bold cursor-pointer border border-transparent hover:border-zinc-600/30"
          title="Copy Code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code Area */}
      <pre className="p-4 overflow-x-auto font-mono text-xs text-zinc-200 leading-relaxed scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Parse markdown custom elements (bold, inline code, blocks, lists)
const renderMessageContent = (content: string) => {
  const parts = content.split(/(\`\`\`java[\s\S]*?\`\`\`|\`\`\`[\s\S]*?\`\`\`|\`[^\`]+\`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    // Java Code blocks
    if (part.startsWith('```java') && part.endsWith('```')) {
      const code = part.slice(7, -3).trim();
      return <CopyableCodeBlock key={index} code={code} language="java" />;
    }
    
    // Generic Code blocks
    if (part.startsWith('```') && part.endsWith('```')) {
      const code = part.slice(3, -3).trim();
      return <CopyableCodeBlock key={index} code={code} language="code" />;
    }

    // Inline code ticks
    if (part.startsWith('`') && part.endsWith('`')) {
      const code = part.slice(1, -1);
      return (
        <code key={index} className="px-1.5 py-0.5 mx-0.5 rounded-md bg-zinc-800/80 font-mono text-xs text-[#FF0800] border border-zinc-700/50 font-bold">
          {code}
        </code>
      );
    }

    // Bold text
    if (part.startsWith('**') && part.endsWith('**')) {
      const text = part.slice(2, -2);
      return <strong key={index} className="font-extrabold text-white">{text}</strong>;
    }

    // Regular text (handle newlines and bullet points)
    return (
      <span key={index} className="whitespace-pre-line">
        {part}
      </span>
    );
  });
};

// Safely format timestamps, supporting Date objects, ISO strings, and invalid dates
const formatTimestamp = (timestamp: any): string => {
  if (!timestamp) return '';
  try {
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    if (isNaN(date.getTime())) {
      return '';
    }
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch (e) {
    return '';
  }
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';
  const formattedTime = formatTimestamp(message.timestamp);

  return (
    <div
      className={`flex w-full gap-3 sm:gap-4 ${
        isAssistant ? 'justify-start' : 'justify-end'
      } mb-4 sm:mb-5 animate-fadeIn`}
    >
      {isAssistant && (
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF0800] to-rose-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF0800]/15 mt-1 select-none">
          <Terminal className="w-4.5 h-4.5" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl py-3.5 px-4 sm:px-5 leading-relaxed transition-all shadow-sm ${
          isAssistant
            ? 'bg-zinc-900 text-zinc-200 border border-zinc-800/60'
            : 'bg-[#FF0800] text-white rounded-tr-sm border border-[#FF0800]/20'
        }`}
      >
        <div className="flex flex-col gap-1">
          <div className="prose dark:prose-invert max-w-none text-sm sm:text-[14.5px] leading-relaxed select-text">
            {renderMessageContent(message.content)}
          </div>
          {formattedTime && (
            <span
              className={`text-[9px] mt-2 block select-none self-end font-mono tracking-wider ${
                isAssistant ? 'text-zinc-500' : 'text-rose-100/80'
              }`}
            >
              {formattedTime}
            </span>
          )}
        </div>
      </div>

      {!isAssistant && (
        <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-300 shrink-0 mt-1 border border-zinc-800 shadow-sm select-none">
          <User className="w-4.5 h-4.5 text-[#FF0800]" />
        </div>
      )}
    </div>
  );
}
