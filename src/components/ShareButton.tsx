import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  module: {
    slug: string;
    title: string;
    description: string;
  };
}

export default function ShareButton({ module }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Direct module URL
    const url = `${window.location.origin}/#/module/${module.slug}`;
    let shareText = '';

    // Message mapping matching specific requirements
    if (module.slug === 'getting-started' || module.slug === 'java-fundamentals') {
      shareText = `🚀 Start your Java journey with ByteAcademy.\n\nLearn Java setup, installation, and your first programs step by step.\n\nStart learning:\n${url}`;
    } else if (module.slug === 'arrays') {
      shareText = `🚀 Learn Java Arrays on ByteAcademy.\n\nMaster storing, accessing, and processing collections of data using Java arrays.\n\nStart learning:\n${url}`;
    } else if (module.slug === 'oop') {
      shareText = `🚀 Learn Object-Oriented Programming in Java on ByteAcademy.\n\nUnderstand classes, objects, inheritance, and real-world programming design.\n\nStart learning:\n${url}`;
    } else if (module.slug === 'methods') {
      shareText = `🚀 Learn Java Methods on ByteAcademy.\n\nUnderstand methods, parameters, return values, and how to write cleaner Java programs.\n\nStart learning:\n${url}`;
    } else {
      shareText = `🚀 Learn ${module.title} on ByteAcademy.\n\n${module.description}\n\nStart learning:\n${url}`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Learn ${module.title} | ByteAcademy`,
          text: shareText,
          url: url,
        });
      } catch (err) {
        // Fallback to clipboard if user cancels or if security restrictions prevent it
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard(shareText);
        }
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy sharing content: ', err);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleShare}
        className="text-zinc-500 hover:text-[#FF0800] active:scale-90 transition-all duration-200 cursor-pointer p-1 focus:outline-none flex items-center justify-center rounded-lg"
        title="Share this module"
        aria-label="Share this module"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-500 animate-in fade-in zoom-in duration-200" />
        ) : (
          <Share2 className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
        )}
      </button>

      {copied && (
        <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 text-[9px] font-black text-white bg-emerald-600 rounded shadow-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-150 z-10">
          Copied link!
        </span>
      )}
    </div>
  );
}
