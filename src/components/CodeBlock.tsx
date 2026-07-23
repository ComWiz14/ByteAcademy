import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language = 'java', showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  // Basic syntax highlighter for Java to make it look premium
  const highlightJava = (rawCode: string) => {
    const lines = rawCode.split('\n');
    return lines.map((line) => {
      const escaped = escapeHtml(line);
      const trimmed = escaped.trim();

      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.endsWith('*/')) {
        return `<span class="text-zinc-500 italic">${escaped}</span>`;
      }

      // Regex for Java components:
      // Group 1: Comments (//...)
      // Group 2: Double quoted strings ("...")
      // Group 3: Single quoted chars ('...')
      // Group 4: Annotations (@...)
      // Group 5: Keywords (public, class, static, etc.)
      // Group 6: Capitalized Class/Type Names (String, System, etc.)
      // Group 7: Numbers
      const regex = /(\/\/.*)|("[^"\\]*(?:\\.[^"\\]*)*")|('[^'\\]*(?:\\.[^'\\]*)*')|(@[A-Za-z0-9_]+)|\b(public|class|static|void|private|return|new|if|else|for|while|true|false|super|extends|try|catch|finally|import|double|int|char|boolean|float|byte|short|long|break|continue|switch|case|throws|throw|interface|abstract)\b|\b([A-Z][A-Za-z0-9_]*)\b|\b(\d+)\b/g;

      return escaped.replace(regex, (match, comment, str, char, annotation, keyword, className, number) => {
        if (comment !== undefined) {
          return `<span class="text-zinc-500 italic">${comment}</span>`;
        }
        if (str !== undefined) {
          return `<span class="text-emerald-400">${str}</span>`;
        }
        if (char !== undefined) {
          return `<span class="text-amber-400">${char}</span>`;
        }
        if (annotation !== undefined) {
          return `<span class="text-yellow-500 font-medium">${annotation}</span>`;
        }
        if (keyword !== undefined) {
          return `<span class="text-rose-500 font-semibold">${keyword}</span>`;
        }
        if (className !== undefined) {
          return `<span class="text-cyan-400 font-medium">${className}</span>`;
        }
        if (number !== undefined) {
          return `<span class="text-purple-400">${number}</span>`;
        }
        return match;
      });
    });
  };

  const highlightedLines = highlightJava(code.trim());

  return (
    <div className="relative border border-zinc-800 bg-[#0B0B0F] rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm max-w-full my-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-[10px] sm:text-xs text-zinc-400 select-none">
        <div className="flex items-center gap-2">
          {/* Editor dots */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
          </div>
          <span className="ml-2 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all text-white font-medium cursor-pointer"
          title="Copy Code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 text-[10px] sm:text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="text-[10px] sm:text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code contents */}
      <div className="overflow-x-auto p-2.5 sm:p-4 leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800">
        <table className="border-collapse w-full">
          <tbody>
            {highlightedLines.map((lineContent, index) => (
              <tr key={index} className="hover:bg-zinc-900/40 transition-colors">
                {showLineNumbers && (
                  <td className="w-6 pr-2 sm:w-8 sm:pr-4 text-right text-zinc-600 select-none border-r border-zinc-800/40 text-[10px] sm:text-[11px] align-top">
                    {index + 1}
                  </td>
                )}
                <td className="pl-2.5 sm:pl-4 text-zinc-300 whitespace-pre-wrap break-words [word-break:break-word] text-[11px] sm:text-xs md:text-sm">
                  <span dangerouslySetInnerHTML={{ __html: lineContent || '&nbsp;' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
