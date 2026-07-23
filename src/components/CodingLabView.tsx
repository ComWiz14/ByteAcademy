import { useState, useEffect } from 'react';
import {
  Info,
  Check
} from 'lucide-react';
import {
  BEGINNER_EXERCISES_DATA,
  INTERMEDIATE_CHALLENGES_DATA,
  ADVANCED_CHALLENGES_DATA,
  PORTFOLIO_PROJECTS_DATA,
} from '../constants/lessons/exercisesProjectsLessons';

interface CodingLabViewProps {
  lessonSlug: string;
}

export default function CodingLabView({ lessonSlug }: CodingLabViewProps) {
  // Retrieve completion state from localStorage to maintain compatibility
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('byteacademy_lab_completed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('byteacademy_lab_completed', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItemCompletion = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Resolve current active sheet
  let title = '';
  let subTitle = '';
  let sheetType = '';
  let itemsList: any[] = [];
  let isPortfolio = false;

  if (lessonSlug === 'beginner-exercises') {
    title = 'Beginner Exercises';
    subTitle = 'Mastering Fundamental Syntax & Procedural Logic';
    sheetType = 'Problem Sheet 01';
    itemsList = BEGINNER_EXERCISES_DATA;
  } else if (lessonSlug === 'intermediate-challenges') {
    title = 'Intermediate Exercises';
    subTitle = 'Class Modeling, Data Collections & Exception Handling';
    sheetType = 'Problem Sheet 02';
    itemsList = INTERMEDIATE_CHALLENGES_DATA;
  } else if (lessonSlug === 'advanced-challenges') {
    title = 'Advanced Exercises';
    subTitle = 'System Architecture, Multi-layered CLI Applications & File I/O';
    sheetType = 'Problem Sheet 03';
    itemsList = ADVANCED_CHALLENGES_DATA;
  } else if (lessonSlug === 'portfolio-projects') {
    title = 'Portfolio Projects';
    subTitle = 'Integrated Production-Grade Software Capstones';
    sheetType = 'Capstone Project Sheet';
    itemsList = PORTFOLIO_PROJECTS_DATA;
    isPortfolio = true;
  } else {
    // Fallback if slug is incorrect
    title = 'Java Practice Worksheet';
    subTitle = 'Hands-on practice exercises';
    sheetType = 'General Sheet';
    itemsList = [];
  }

  // Calculate stats
  const totalCount = itemsList.length;
  const completedCount = itemsList.filter(item => completedItems[item.id]).length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div id="workbook-view" className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      
      {/* 1. UNIVERSITY-STYLE FORMAL TUTORIAL HEADER BANNER */}
      <div 
        id="workbook-header" 
        className="relative bg-zinc-900 border-2 border-zinc-800 p-6 md:p-8 rounded-none shadow-sm flex flex-col gap-4 overflow-hidden"
      >
        {/* Subtle physical worksheet grid paper background lines */}
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-zinc-800 pb-4 gap-3 z-10">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-widest text-[#FF0800] font-black uppercase">
              BYTEACADEMY • JAVA ROADMAP
            </span>
            <span className="font-mono text-xs text-zinc-400 font-bold uppercase mt-1">
              CS101: PROBLEM WORKBOOK
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-mono text-xs bg-zinc-800 text-zinc-200 px-3.5 py-1.5 uppercase font-bold tracking-wider">
              {sheetType}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 z-10">
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none uppercase">
            {title}
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed font-semibold">
            {subTitle}
          </p>
        </div>

        <div className="border-t border-dashed border-zinc-700 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-zinc-500 shrink-0" />
            <p className="text-xs text-zinc-400 font-medium">
              You have studied the modules. Prove your mastery by coding these problems locally on your IDE.
            </p>
          </div>
          
          {/* Minimalist workbook completion progress stats */}
          {totalCount > 0 && (
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs font-black text-zinc-100">
                SOLVED: {completedCount}/{totalCount} ({completionPercentage}%)
              </span>
              <div className="w-24 h-2 bg-zinc-800 border border-zinc-700 rounded-none overflow-hidden">
                <div 
                  className="h-full bg-[#FF0800] transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. THE PROBLEMS SHEET / LIST */}
      <div 
        id="workbook-sheet" 
        className="bg-zinc-900 border-2 border-zinc-800 p-6 md:p-8 rounded-none relative shadow-xs"
      >
        {/* Subtle margins mimicking binder / loose-leaf holes */}
        <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-12 pointer-events-none">
          <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-zinc-800 shadow-inner" />
          <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-zinc-800 shadow-inner" />
          <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-zinc-800 shadow-inner" />
        </div>

        {/* Vertical alignment line for sheet content */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-[1px] bg-rose-900/30 pointer-events-none" />

        <div className="pl-8 md:pl-10 flex flex-col divide-y divide-zinc-800/80">
          
          {totalCount === 0 ? (
            <div className="py-12 text-center text-zinc-500 font-semibold text-xs uppercase">
              No exercises available in this sheet.
            </div>
          ) : (
            itemsList.map((item, index) => {
              const isCompleted = !!completedItems[item.id];
              const sequenceNum = String(index + 1).padStart(2, '0');

              return (
                <div 
                  key={item.id} 
                  id={`exercise-item-${item.id}`}
                  className={`py-6 flex gap-4 transition-all duration-350 first:pt-0 last:pb-0 items-start ${
                    isCompleted ? 'opacity-60' : 'opacity-100'
                  }`}
                >
                  {/* Circular/Square physical workbook-style interactive toggle checkbox */}
                  <button
                    onClick={() => toggleItemCompletion(item.id)}
                    className={`mt-1.5 w-5 h-5 border-2 flex items-center justify-center cursor-pointer shrink-0 transition-colors duration-200 ${
                      isCompleted 
                        ? 'bg-[#FF0800] border-[#FF0800] text-white' 
                        : 'border-zinc-700 bg-transparent hover:border-[#FF0800]'
                    }`}
                    title={isCompleted ? "Mark as unsolved" : "Mark as solved"}
                  >
                    {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Math paper-style bold problem numbering */}
                      <span className="font-mono text-xs font-black text-zinc-500 shrink-0">
                        Q{sequenceNum}.
                      </span>
                      
                      {/* Title */}
                      <h3 className={`text-sm md:text-base font-black uppercase tracking-tight ${
                        isCompleted 
                          ? 'text-zinc-500 line-through' 
                          : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Difficulty Badge (Portfolio Projects only) */}
                      {item.difficulty && (
                        <span className="font-mono text-[9px] font-bold bg-zinc-800 text-zinc-300 px-2 py-0.5 border border-zinc-700 rounded-none uppercase">
                          {item.difficulty}
                        </span>
                      )}
                    </div>

                    {/* Description - high-contrast layout, constrained word characters */}
                    <p className={`text-xs md:text-sm font-medium leading-relaxed max-w-3xl ${
                      isCompleted 
                        ? 'text-zinc-500' 
                        : 'text-zinc-300'
                    }`}>
                      {item.description}
                    </p>

                    {/* Features to implement (Portfolio Projects only) */}
                    {isPortfolio && item.features && item.features.length > 0 && (
                      <div className="mt-2.5 pl-3 border-l-2 border-[#FF0800]/30 py-0.5 flex flex-col gap-1.5">
                        <span className="font-mono text-[10px] uppercase font-black text-[#FF0800] tracking-wide">
                          Core Features to Implement:
                        </span>
                        <ul className="list-disc pl-4 flex flex-col gap-1 text-xs text-zinc-400 font-semibold">
                          {item.features.map((feature: string, fIdx: number) => (
                            <li key={fIdx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 3. WORKBOOK METADATA FOOTER (Physical paper motif) */}
      <div 
        id="workbook-footer" 
        className="border-2 border-zinc-800 p-4 text-center font-mono text-[9px] font-bold tracking-wider text-zinc-500 uppercase rounded-none bg-zinc-900/10 flex flex-col sm:flex-row items-center justify-between gap-2"
      >
        <span>© BYTEACADEMY ROADMAP ASSIGNMENT GRID</span>
        <span>STATUS: ACTIVE STUDY LAB</span>
        <span>VERIFIED BY: JVM RUNTIME COMPILER</span>
      </div>
      
    </div>
  );
}
