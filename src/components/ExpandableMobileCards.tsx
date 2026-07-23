import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ExpandableMobileCardsProps {
  children: React.ReactNode;
  className?: string;
  fadeBgClass?: string;
  collapsedHeight?: number;
}

export default function ExpandableMobileCards({
  children,
  className = '',
  fadeBgClass = 'from-[#0B0B0F]',
  collapsedHeight = 350
}: ExpandableMobileCardsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center">
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : collapsedHeight,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1] // Elegant easeOutExpo curve
        }}
        className="overflow-hidden w-full relative"
      >
        <div className={className}>
          {children}
        </div>

        {/* Smooth gradient fade overlay when collapsed to indicate more content below */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${fadeBgClass} to-transparent pointer-events-none transition-opacity duration-300 ${
            isExpanded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
      </motion.div>

      {/* Centered expandable trigger button */}
      <div className="flex justify-center mt-6 relative z-20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-black uppercase tracking-wider text-zinc-300 hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none"
          aria-expanded={isExpanded}
        >
          <ChevronDown
            className={`w-4 h-4 text-[#FF0800] transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        </button>
      </div>
    </div>
  );
}
