import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Award,
  ChevronRight,
  HelpCircle,
  Play
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import { ROADMAP_STEPS, TOPIC_DETAILS } from '../constants/javaData';

export default function Learn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTopicId, setActiveTopicId] = useState('getting-started');
  const [showSolution, setShowSolution] = useState(false);

  // Synchronize topic state with URL parameters (e.g. ?topic=getting-started)
  useEffect(() => {
    const topicParam = searchParams.get('topic');
    if (topicParam && TOPIC_DETAILS[topicParam]) {
      setActiveTopicId(topicParam);
    }
  }, [searchParams]);

  const selectTopic = (id: string) => {
    setActiveTopicId(id);
    setSearchParams({ topic: id });
    setShowSolution(false); // Reset solution toggle on topic change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeTopic = TOPIC_DETAILS[activeTopicId] || TOPIC_DETAILS['getting-started'];

  return (
    <div className="bg-white dark:bg-[#0B0B0F] text-zinc-800 dark:text-zinc-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Page title area */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-bold text-[#FF0800] tracking-wider uppercase">Master Java Handbook</span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mt-1">Interactive Coding Guide</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-2xl">
            Click on any section in the roadmap sidebar to load comprehensive, concept-based lessons, code snippets, compiler guidelines, and practice problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Roadmap / Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm sticky top-20">
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm uppercase tracking-wider mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF0800]" />
              Learning Roadmap
            </h3>

            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
              {ROADMAP_STEPS.map((step, idx) => {
                const isActive = step.id === activeTopicId;
                const hasDetails = !!TOPIC_DETAILS[step.id];
                
                return (
                  <button
                    key={step.id}
                    onClick={() => hasDetails && selectTopic(step.id)}
                    disabled={!hasDetails}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FF0800] border-[#FF0800] text-white shadow-lg shadow-[#FF0800]/20'
                        : hasDetails
                        ? 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800/80 hover:border-[#FF0800] hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40'
                        : 'opacity-50 cursor-not-allowed border-dashed border-zinc-200 dark:border-zinc-800/40 bg-zinc-100/20 dark:bg-zinc-950/10'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold truncate leading-tight">{step.title}</h4>
                      <p className={`text-[10px] truncate ${isActive ? 'text-rose-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                        {step.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 p-3 bg-[#FF0800]/5 border border-[#FF0800]/10 rounded-xl text-[11px] text-zinc-600 dark:text-zinc-400">
              ⚡ Blue highlighted topics contain rich lesson notes, executable examples, and compiler corrections.
            </div>
          </div>

          {/* Tutorial Workspace / Article Pane (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTopicId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Topic Header Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#FF0800]/5 to-rose-500/5 border border-[#FF0800]/10">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#FF0800]/10 text-[#FF0800] text-[10px] font-bold uppercase tracking-wider mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    Handbook Article
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white">
                    {activeTopic.title}
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {activeTopic.description}
                  </p>
                </div>

                {/* Main Lesson Details */}
                <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap flex flex-col gap-4">
                  {/* Clean custom rendering for headings & highlights */}
                  {activeTopic.details.split('\n\n').map((paragraph, pIdx) => {
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={pIdx} className="text-lg font-bold text-zinc-900 dark:text-white mt-4 border-b border-zinc-100 dark:border-zinc-800 pb-1">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                      return (
                        <div key={pIdx} className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 py-1 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400">
                          {paragraph.split('\n').map((li, liIdx) => (
                            <p key={liIdx} className="m-0">{li}</p>
                          ))}
                        </div>
                      );
                    }
                    // Highlight bold markup
                    const formatted = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[#FF0800] font-semibold">$1</strong>')
                                               .replace(/`([^`]+)`/g, '<code class="bg-zinc-100 dark:bg-zinc-800 text-[#FF0800] px-1.5 py-0.5 rounded text-xs font-mono">$1</code>');

                    return (
                      <p key={pIdx} className="m-0" dangerouslySetInnerHTML={{ __html: formatted }} />
                    );
                  })}
                </div>

                {/* Code Snippet Card */}
                {activeTopic.codeExample && (
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Play className="w-4 h-4 text-[#FF0800]" />
                      Interactive Reference Code
                    </h3>
                    <CodeBlock code={activeTopic.codeExample} language="java" showLineNumbers={true} />
                    {activeTopic.codeExplanation && (
                      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                        <strong className="text-zinc-900 dark:text-white block mb-1">Code breakdown:</strong>
                        {activeTopic.codeExplanation}
                      </div>
                    )}
                  </div>
                )}

                {/* Common Mistakes Segment */}
                {activeTopic.commonMistake && (
                  <div className="border border-amber-500/20 bg-amber-500/5 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-amber-500/10 px-5 py-3 border-b border-amber-500/20 flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <AlertTriangle className="w-4.5 h-4.5" />
                      <h4 className="text-xs font-black uppercase tracking-wider">Common Beginner Mistake</h4>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      {/* Incorrect Sample */}
                      <div>
                        <span className="text-[10px] font-mono font-bold bg-rose-500/15 text-rose-500 px-2 py-0.5 rounded">
                          ❌ INCORRECT / BUGGY CODE
                        </span>
                        <CodeBlock code={activeTopic.commonMistake.code} language="java" showLineNumbers={false} />
                      </div>

                      {/* Explanation */}
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                        <strong className="text-amber-600 dark:text-amber-400 block mb-1">Why this fails:</strong>
                        {activeTopic.commonMistake.explanation}
                      </p>

                      {/* Corrected Sample */}
                      <div>
                        <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-500 px-2 py-0.5 rounded">
                          ✓ CORRECTED / OPTIMIZED CODE
                        </span>
                        <CodeBlock code={activeTopic.commonMistake.fix} language="java" showLineNumbers={false} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Exercise Segment */}
                {activeTopic.exercise && (
                  <div className="border border-[#FF0800]/20 bg-[#FF0800]/5 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-[#FF0800]/10 px-5 py-3 border-b border-[#FF0800]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#FF0800]">
                        <HelpCircle className="w-4.5 h-4.5" />
                        <h4 className="text-xs font-black uppercase tracking-wider">Practice Challenge</h4>
                      </div>
                      <span className="text-[10px] font-bold text-zinc-500">Apply Your Knowledge</span>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 font-bold leading-relaxed">
                        {activeTopic.exercise.question}
                      </p>

                      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs whitespace-pre text-zinc-500 select-none">
                        {activeTopic.exercise.starterCode}
                      </div>

                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => setShowSolution(!showSolution)}
                          className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs tracking-wider uppercase rounded-lg active:scale-95 transition-all cursor-pointer"
                        >
                          {showSolution ? 'Hide Solution' : 'Show Verified Solution'}
                        </button>
                      </div>

                      {/* Expandable solution */}
                      <AnimatePresence>
                        {showSolution && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden border-t border-zinc-200 dark:border-zinc-800 pt-4"
                          >
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-2">
                              ✓ Reference Solution Code
                            </span>
                            <CodeBlock code={activeTopic.exercise.solution} language="java" showLineNumbers={true} />
                            <p className="text-xs text-zinc-500 mt-2 italic pl-1">
                              Paste this inside your local editor to compile and inspect results!
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
