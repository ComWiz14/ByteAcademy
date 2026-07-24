import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  BookMarked,
  HelpCircle,
  AlertTriangle,
  Play,
  ChevronRight,
  ChevronDown,
  Lightbulb,
  Info,
  CornerDownRight,
  Cpu,
  BookOpen,
  Terminal,
  MessageSquare,
  Volume2,
  VolumeX
} from 'lucide-react';
import { JAVA_MODULES } from '../constants/javaModulesData';
import { TOPIC_DETAILS } from '../constants/javaData';
import { DETAILED_LESSONS } from '../constants/lessonsData';
import CodeBlock from '../components/CodeBlock';
import { DetailedLessonContent, CalloutType, TerminologyItem, VisualDiagramData, MistakeItem, QuizQuestion } from '../types';
import TutoringCTA from '../components/TutoringCTA';
import CodingLabView from '../components/CodingLabView';

// REUSABLE CALLOUT COMPONENT
function CalloutCard({ type, text }: { type: CalloutType; text: string; key?: any }) {
  const config = {
    tip: {
      border: 'border-emerald-500/10',
      bg: 'bg-emerald-500/2',
      text: 'text-emerald-300',
      icon: <Lightbulb className="w-4.5 h-4.5 text-emerald-500 shrink-0" />,
      label: 'Tip'
    },
    important: {
      border: 'border-rose-500/10',
      bg: 'bg-rose-500/2',
      text: 'text-rose-300',
      icon: <AlertTriangle className="w-4.5 h-4.5 text-rose-500 shrink-0" />,
      label: 'Important'
    },
    warning: {
      border: 'border-amber-500/10',
      bg: 'bg-amber-500/2',
      text: 'text-amber-300',
      icon: <AlertTriangle className="w-4.5 h-4.5 text-amber-500 shrink-0" />,
      label: 'Warning'
    },
    remember: {
      border: 'border-violet-500/10',
      bg: 'bg-violet-500/2',
      text: 'text-violet-300',
      icon: <BookMarked className="w-4.5 h-4.5 text-violet-500 shrink-0" />,
      label: 'Remember'
    },
    did_you_know: {
      border: 'border-cyan-500/10',
      bg: 'bg-cyan-500/2',
      text: 'text-cyan-300',
      icon: <Info className="w-4.5 h-4.5 text-cyan-500 shrink-0" />,
      label: 'Did You Know?'
    }
  };

  const item = config[type] || config.tip;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border ${item.border} ${item.bg} rounded-xl p-4.5 my-4 flex gap-3 shadow-xs`}
    >
      {item.icon}
      <div className="flex-1">
        <span className={`text-[10px] font-mono uppercase tracking-widest font-black block mb-0.5 ${item.text}`}>
          {item.label}
        </span>
        <p className="text-xs leading-relaxed text-zinc-300 font-medium">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

// REUSABLE TERMINOLOGY CARD COMPONENT
function TerminologyCard({ term }: { term: TerminologyItem; key?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-5 my-5 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[9px] font-mono font-bold bg-[#FF0800]/10 text-[#FF0800] px-2 py-0.5 rounded uppercase">
          Key Terminology
        </span>
        <h4 className="text-sm font-black text-white uppercase tracking-tight">
          {term.keyword}
        </h4>
      </div>
      <div className="pl-3 border-l-2 border-zinc-700 py-0.5">
        <p className="text-xs font-semibold text-zinc-200 leading-relaxed italic">
          "{term.definition}"
        </p>
      </div>
      <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
        {term.explanation}
      </p>
    </motion.div>
  );
}

// REUSABLE VISUAL LEARNING COMPONENT
function VisualLearningComponent({ diagram }: { diagram: VisualDiagramData; key?: any }) {
  const renderFlow = () => {
    const steps = diagram.elements?.steps || [];
    return (
      <div className="flex flex-col items-center gap-4 py-4 w-full">
        {steps.map((step: any, idx: number) => (
          <div key={step.id} className="flex flex-col items-center w-full">
            <div className={`p-4.5 rounded-xl border max-w-md w-full transition-all duration-300 ${
              step.type === 'start' || step.type === 'end'
                ? 'bg-zinc-950 text-white border-zinc-800'
                : step.type === 'decision'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                : 'bg-zinc-950 border-zinc-800 text-zinc-150'
            } shadow-sm hover:shadow-md relative`}>
              <div className="flex items-center gap-2.5">
                <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-black ${
                  step.type === 'start' || step.type === 'end'
                    ? 'bg-white/10 text-white'
                    : 'bg-[#FF0800]/10 text-[#FF0800]'
                }`}>
                  {step.type.toUpperCase()}
                </span>
                <h5 className="text-xs font-black uppercase tracking-tight">{step.label}</h5>
              </div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <div className="w-0.5 h-6 bg-zinc-800 border-dashed border-l" />
                <ChevronDown className="w-4 h-4 text-[#FF0800] shrink-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderMemory = () => {
    const cells = diagram.elements?.cells || [];
    return (
      <div className="border border-zinc-800 rounded-xl overflow-hidden shadow-sm my-4 max-w-full overflow-x-auto">
        <div className="grid grid-cols-4 bg-zinc-900 text-[10px] font-black uppercase tracking-wider text-zinc-400 border-b border-zinc-800 px-4 py-2.5 min-w-[500px]">
          <span>Memory Address</span>
          <span>Variable Reference</span>
          <span>Value in RAM</span>
          <span>Data Footprint</span>
        </div>
        <div className="divide-y divide-zinc-800 min-w-[500px]">
          {cells.map((cell: any, idx: number) => (
            <div key={idx} className="grid grid-cols-4 px-4 py-3 text-xs font-mono items-center hover:bg-zinc-900/30 transition-colors">
              <span className="text-rose-400 font-bold">{cell.address}</span>
              <span className="text-white font-semibold">{cell.name || 'N/A'}</span>
              <span className="text-emerald-400 font-black">{cell.value}</span>
              <span className="text-zinc-500 text-[10px]">{cell.type}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderArray = () => {
    const items = diagram.elements?.items || ['Slot 0', 'Slot 1', 'Slot 2', 'Slot 3'];
    const highlightIdx = diagram.elements?.highlightIdx ?? -1;
    return (
      <div className="flex flex-col gap-4 py-4 w-full">
        <div className="flex flex-wrap gap-3 justify-center items-stretch">
          {items.map((item: string, idx: number) => {
            const isHighlighted = idx === highlightIdx;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-22 h-22 rounded-xl border flex flex-col items-center justify-center p-2 text-center transition-all duration-300 shadow-xs ${
                  isHighlighted 
                    ? 'bg-[#FF0800]/10 border-[#FF0800] ring-2 ring-[#FF0800]/20 scale-105' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase font-black">Value</span>
                  <span className="text-xs font-black text-white truncate max-w-full mt-1.5">{item}</span>
                </div>
                <div className="mt-1.5 text-[10px] font-mono font-black text-zinc-500">
                  Index [{idx}]
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderClassDiagram = () => {
    const classes = diagram.elements?.classes || [];
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4 w-full">
        {classes.map((cls: any, idx: number) => (
          <div key={idx} className="flex flex-col items-center w-full md:w-auto">
            <div className="border border-zinc-800 bg-zinc-900 rounded-xl overflow-hidden shadow-sm w-56">
              <div className="bg-zinc-950 p-3 text-center border-b border-zinc-800">
                <span className="text-[8px] font-mono text-[#FF0800] uppercase font-black tracking-widest block mb-0.5">Blueprint Class</span>
                <span className="text-xs font-black text-white uppercase tracking-tight">{cls.name}</span>
              </div>
              <div className="p-4 flex flex-col gap-3 font-mono text-[11px]">
                <div>
                  <span className="text-[8px] font-black text-zinc-500 block uppercase mb-1">Fields (State)</span>
                  <div className="flex flex-col gap-0.5 text-zinc-300">
                    {cls.fields.map((f: string) => <div key={f} className="truncate">- {f}</div>)}
                  </div>
                </div>
                <div className="border-t border-zinc-800/60 pt-2">
                  <span className="text-[8px] font-black text-zinc-500 block uppercase mb-1">Methods (Behavior)</span>
                  <div className="flex flex-col gap-0.5 text-zinc-300">
                    {cls.methods.map((m: string) => <div key={m} className="truncate">+ {m}</div>)}
                  </div>
                </div>
              </div>
            </div>
            {cls.inherits && (
              <div className="mt-2 text-[9px] font-black text-rose-500 uppercase tracking-wider flex items-center gap-1 bg-[#FF0800]/5 px-2 py-0.5 rounded border border-[#FF0800]/10">
                <CornerDownRight className="w-3 h-3" />
                <span>extends {cls.inherits}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderComparison = () => {
    const headers = diagram.elements?.headers || [];
    const rows = diagram.elements?.rows || [];
    return (
      <div className="border border-zinc-800 rounded-xl overflow-hidden shadow-sm my-4 max-w-full overflow-x-auto">
        <table className="w-full text-left text-xs min-w-[450px]">
          <thead className="bg-zinc-900 text-zinc-400 font-black border-b border-zinc-800 text-[10px] uppercase tracking-wider">
            <tr>
              {headers.map((h: string, i: number) => (
                <th key={i} className="px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {rows.map((row: string[], rIdx: number) => (
              <tr key={rIdx} className="hover:bg-zinc-900/30 transition-colors">
                {row.map((cell: string, cIdx: number) => (
                  <td key={cIdx} className="px-4 py-3 leading-relaxed text-zinc-300 font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-zinc-800 rounded-2xl bg-zinc-950 p-5 md:p-6 my-6 shadow-sm flex flex-col gap-4"
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Cpu className="w-4.5 h-4.5 text-[#FF0800]" />
          <h4 className="text-xs font-black uppercase tracking-wider text-white">
            {diagram.title}
          </h4>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {diagram.description}
        </p>
      </div>

      <div className="bg-zinc-900/20 p-4 rounded-xl border border-zinc-800 flex justify-center items-center overflow-hidden">
        {diagram.type === 'flow' && renderFlow()}
        {diagram.type === 'memory' && renderMemory()}
        {diagram.type === 'array' && renderArray()}
        {diagram.type === 'object_relation' && renderClassDiagram()}
        {diagram.type === 'class_diagram' && renderClassDiagram()}
        {diagram.type === 'comparison_table' && renderComparison()}
      </div>
    </motion.div>
  );
}

// REUSABLE COMMON MISTAKES COMPONENT
function CommonMistakesSection({ mistakes }: { mistakes: MistakeItem[] }) {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div id="common-mistakes" className="flex flex-col gap-5 scroll-mt-20 my-8">
      <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-2">
        <span className="w-1.5 h-4.5 bg-[#FF0800] rounded-full" />
        <h3 className="text-lg font-black text-white uppercase tracking-tight">
          Common Beginner Mistakes
        </h3>
      </div>

      {mistakes.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-amber-500/10 bg-amber-500/1 rounded-2xl overflow-hidden shadow-xs"
        >
          <div className="bg-amber-500/5 px-5 py-3 border-b border-amber-500/10 flex items-center gap-2 text-amber-400">
            <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
            <h4 className="text-xs font-black uppercase tracking-wider">{item.mistake}</h4>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div className="text-xs text-zinc-300 leading-relaxed font-medium">
              <strong className="text-amber-400 block mb-1 font-bold">Why it happens:</strong>
              {item.whyItHappens}
            </div>

            {item.codeSnippet && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <span className="text-[9px] font-mono font-bold bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded uppercase block w-max mb-1.5">
                    ❌ Incorrect / Buggy
                  </span>
                  <CodeBlock code={item.codeSnippet.bad} language="java" showLineNumbers={false} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded uppercase block w-max mb-1.5">
                    ✓ Corrected / Fixed
                  </span>
                  <CodeBlock code={item.codeSnippet.good} language="java" showLineNumbers={false} />
                </div>
              </div>
            )}

            <div className="text-xs text-zinc-300 leading-relaxed font-medium mt-1">
              <strong className="text-emerald-400 block mb-1 font-bold">How to avoid it:</strong>
              {item.howToAvoid}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// INTERACTIVE MINI QUIZ COMPONENT
function MiniQuiz({ quiz }: { quiz: QuizQuestion[]; key?: string }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div className="flex flex-col gap-5 mt-4">
      {quiz.map((q, qIdx) => {
        const selectedIdx = answers[qIdx];
        const isAnswered = selectedIdx !== undefined;

        return (
          <div key={qIdx} className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-5 shadow-xs">
            <div className="flex gap-2.5 items-start mb-4">
              <span className="w-5 h-5 rounded-full bg-[#FF0800]/10 text-[#FF0800] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 select-none">
                Q{qIdx + 1}
              </span>
              <h4 className="text-xs font-black text-white leading-relaxed">{q.question}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((opt, optIdx) => {
                const isSelected = selectedIdx === optIdx;
                const isCorrect = optIdx === q.correctAnswerIndex;
                let optStyle = "bg-zinc-950/60 border-zinc-800/80 text-zinc-350 hover:bg-zinc-900/50 hover:border-zinc-700/80";

                if (isAnswered) {
                  if (isSelected) {
                    optStyle = isCorrect
                      ? "bg-emerald-500/10 border-emerald-500 text-emerald-300 font-bold"
                      : "bg-rose-500/10 border-rose-500 text-rose-300 font-bold";
                  } else if (isCorrect) {
                    optStyle = "bg-emerald-500/5 border-emerald-500/30 text-emerald-400/90";
                  } else {
                    optStyle = "bg-zinc-950/20 border-zinc-900/60 text-zinc-500 opacity-50 pointer-events-none";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isAnswered}
                    onClick={() => setAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold leading-snug transition-all cursor-pointer ${optStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/60 text-xs text-zinc-300 leading-relaxed font-medium"
              >
                <div className="flex items-center gap-2 mb-2 font-black uppercase tracking-tight">
                  {selectedIdx === q.correctAnswerIndex ? (
                    <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">✓ Correct Answer</span>
                  ) : (
                    <span className="text-rose-400 text-[10px] bg-rose-500/10 px-2 py-0.5 rounded">❌ Incorrect Selection</span>
                  )}
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-400">
                  <strong className="text-white">Explanation: </strong>
                  {q.explanation}
                </p>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// LESSON PAGE COMPONENT
export default function LessonPage() {
  const { lessonSlug } = useParams<{ lessonSlug: string }>();

  // Find active lesson and module
  let activeModule = JAVA_MODULES[0];
  let activeLesson = JAVA_MODULES[0].lessons[0];
  let found = false;

  for (const mod of JAVA_MODULES) {
    const les = mod.lessons.find(l => l.slug === lessonSlug);
    if (les) {
      activeModule = mod;
      activeLesson = les;
      found = true;
      break;
    }
  }

  // Load lesson detailed content from lessonsData or generate dynamically
  let lesson: DetailedLessonContent;

  if (lessonSlug && DETAILED_LESSONS[lessonSlug]) {
    lesson = DETAILED_LESSONS[lessonSlug];
  } else {
    // FALLBACK GENERATOR: Convert other topics on the fly to support all features cleanly
    const richFallback = lessonSlug ? TOPIC_DETAILS[lessonSlug] : null;
    
    // Choose appropriate visual component based on topic content
    let visualType: 'array' | 'memory' | 'object_relation' | 'class_diagram' | 'flow' | 'comparison_table' = 'comparison_table';
    let visualData: any = { headers: ['Concept', 'Utility'], rows: [['Interactive Lessons', 'Visual blueprints'], ['Direct execution', 'Copied to local IDE']] };

    if (lessonSlug?.includes('array') || lessonSlug?.includes('list')) {
      visualType = 'array';
      visualData = { items: ['"Element A"', '"Element B"', '"Element C"', '"Element D"'], highlightIdx: 1 };
    } else if (lessonSlug?.includes('string') || lessonSlug?.includes('variable') || lessonSlug?.includes('type')) {
      visualType = 'memory';
      visualData = {
        cells: [
          { address: '0x10AA', name: 'myValue', value: '100', type: 'integer' },
          { address: '0x10AE', name: 'textReference', value: '0x22BC', type: 'reference' }
        ]
      };
    } else if (lessonSlug?.includes('oop') || lessonSlug?.includes('class') || lessonSlug?.includes('object') || lessonSlug?.includes('inheritance') || lessonSlug?.includes('polymorphism')) {
      visualType = 'object_relation';
      visualData = {
        classes: [
          { name: 'BaseStructure', fields: ['id', 'name'], methods: ['initialize()'] },
          { name: 'DerivedClass', fields: ['uniqueId'], methods: ['initialize() overridden'], inherits: 'BaseStructure' }
        ]
      };
    } else if (lessonSlug?.includes('if') || lessonSlug?.includes('loop') || lessonSlug?.includes('control') || lessonSlug?.includes('methods') || lessonSlug?.includes('exception')) {
      visualType = 'flow';
      visualData = {
        steps: [
          { id: '1', label: 'Start Instruction', desc: 'Read parameters from console.', type: 'start' },
          { id: '2', label: 'Condition Logic', desc: 'Examine values to select true or false branches.', type: 'decision' },
          { id: '3', label: 'Perform Action', desc: 'Execute block statements.', type: 'action' },
          { id: '4', label: 'Terminator', desc: 'Safely close streams and yield results.', type: 'end' }
        ]
      };
    }

    lesson = {
      slug: lessonSlug || 'unknown',
      title: activeLesson.title,
      moduleSlug: activeModule.slug,
      moduleName: activeModule.title,
      estimatedTime: activeLesson.readingTime,
      difficulty: activeLesson.difficulty,
      introduction: richFallback?.description || activeLesson.description,
      whyThisTopicMatters: {
        whyItExists: `The concept of ${activeLesson.title} serves as a cornerstone in Java's structural system. Writing programs that grow in scale requires standardizing how we handle ${activeLesson.title.toLowerCase()} securely.`,
        problemSolved: `It solves the core problem of managing ${activeLesson.title.toLowerCase()} complexity, reducing runtime crashes, and keeping source code highly maintainable.`
      },
      mainExplanation: richFallback?.details ? richFallback.details.split('\n\n').map(p => {
        if (p.startsWith('### ')) {
          return { type: 'info_card' as const, title: p.replace('### ', ''), text: '' };
        }
        if (p.startsWith('- ') || p.startsWith('1. ')) {
          return { type: 'bullet_list' as const, items: p.split('\n').map(li => li.replace(/^[-1234567890.\s]+/, '')) };
        }
        return { type: 'paragraph' as const, text: p };
      }) : [
        { type: 'paragraph', text: `This lesson examines the core syntax, use cases, and guidelines for managing ${activeLesson.title} in Java applications.` },
        { type: 'callout', calloutType: 'remember', text: 'Double check your capitalization! Java remains highly sensitive to exact lower and uppercase keyword definitions.' }
      ],
      codeExamples: richFallback?.codeExample ? [
        {
          title: `Demonstration code for ${activeLesson.title}`,
          language: 'java',
          code: richFallback.codeExample,
          explanation: richFallback.codeExplanation || 'Review the sequence layout above. It demonstrates clean definitions, robust syntax bounds, and correct console execution commands.'
        }
      ] : [],
      visualLearning: [
        {
          type: visualType,
          title: 'Topic Structural Blueprint',
          description: `An abstract learning diagram depicting how the system manages ${activeLesson.title} instructions.`,
          elements: visualData
        }
      ],
      commonMistakes: richFallback?.commonMistake ? [
        {
          mistake: `Syntax or logic issues in ${activeLesson.title}`,
          whyItHappens: 'Common mistakes happen due to capitalization typos, missing semicolons, or improper reference handling.',
          howToAvoid: richFallback.commonMistake.explanation,
          codeSnippet: {
            bad: richFallback.commonMistake.code,
            good: richFallback.commonMistake.fix
          }
        }
      ] : [],
      practiceExercise: richFallback?.exercise ? {
        title: `Challenge: Master ${activeLesson.title}`,
        tasks: [richFallback.exercise.question]
      } : {
        title: `Independent Exercise: ${activeLesson.title} Practice`,
        tasks: [
          `Write a simple class that implements the core syntax structure of ${activeLesson.title} in your local IDE.`,
          'Introduce intentional mistakes like changing capitalization or removing a brace, observe the compiler error, and fix it.',
          'Execute the compiled class manually in your text terminal and verify its logical execution steps.'
        ]
      },
      summary: [
        `${activeLesson.title} forms a fundamental concept to design reusable, logical blocks in Java.`,
        'Using correct syntax conventions prevents immediate compiler exceptions and simplifies logic bounds.',
        'Practicing step-by-step in your own localized workspace reinforces core programming muscle memory.'
      ]
    };
  }

  // Find index of current lesson within active module's lessons
  const currentLessonIndex = activeModule.lessons.findIndex(l => l.slug === lessonSlug);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentSegmentIdx, setCurrentSegmentIdx] = useState(-1);
  const currentSegmentIdxRef = useRef(-1);
  const isSpeakingRef = useRef(false);

  // Dynamically update page and open graph metadata for lesson sharing
  useEffect(() => {
    if (lesson) {
      const originalTitle = document.title;
      const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      const dynamicTitle = `${lesson.title} | ByteAcademy`;
      const dynamicDesc = lesson.introduction || `Learn ${lesson.title} on ByteAcademy. Master Java step by step with clear explanations and practical examples.`;
      
      document.title = dynamicTitle;
      
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', dynamicDesc);
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', dynamicTitle);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', dynamicDesc);

      const bannerUrl = `${window.location.origin}/Banner.png`;

      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) ogImg.setAttribute('content', bannerUrl);

      const ogImgUrl = document.querySelector('meta[property="og:image:url"]');
      if (ogImgUrl) ogImgUrl.setAttribute('content', bannerUrl);

      const ogImgSecure = document.querySelector('meta[property="og:image:secure_url"]');
      if (ogImgSecure) ogImgSecure.setAttribute('content', bannerUrl);
      
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', dynamicTitle);
      
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', dynamicDesc);

      const twitterImg = document.querySelector('meta[name="twitter:image"]');
      if (twitterImg) twitterImg.setAttribute('content', bannerUrl);

      return () => {
        document.title = originalTitle;
        if (descMeta) descMeta.setAttribute('content', originalDescription);
        if (ogTitle) ogTitle.setAttribute('content', originalTitle);
        if (ogDesc) ogDesc.setAttribute('content', originalDescription);
        if (twitterTitle) twitterTitle.setAttribute('content', originalTitle);
        if (twitterDesc) twitterDesc.setAttribute('content', originalDescription);
      };
    }
  }, [lessonSlug, lesson]);

  const getSegments = (): { id: string; text: string }[] => {
    if (!lesson) return [];
    const segments: { id: string; text: string }[] = [];

    // 1. Title & Intro
    if (lesson.title || lesson.introduction) {
      let introText = "";
      if (lesson.title) introText += `${lesson.title}. `;
      if (lesson.introduction) introText += `${lesson.introduction}`;
      segments.push({ id: 'introduction', text: introText });
    }

    // 2. Why This Topic Matters
    if (lesson.whyThisTopicMatters) {
      let text = "Why This Topic Matters. ";
      if (lesson.whyThisTopicMatters.whyItExists) {
        text += `Why does it exist? ${lesson.whyThisTopicMatters.whyItExists}. `;
      }
      if (lesson.whyThisTopicMatters.problemSolved) {
        text += `What problem does it solve? ${lesson.whyThisTopicMatters.problemSolved}`;
      }
      segments.push({ id: 'why-this-topic-matters', text });
    }

    // 3. Main Explanation
    if (lesson.mainExplanation && lesson.mainExplanation.length > 0) {
      let text = "Main Explanation. ";
      lesson.mainExplanation.forEach((element) => {
        if (element.type === 'paragraph' && element.text) {
          const clean = element.text.replace(/\*\*|`|__|_/g, "");
          text += `${clean}. `;
        } else if (element.type === 'bullet_list') {
          if (element.title) text += `${element.title}. `;
          if (element.items) {
            element.items.forEach(item => {
              const clean = item.replace(/\*\*|`|__|_/g, "");
              text += `${clean}. `;
            });
          }
        } else if (element.type === 'callout' && element.text) {
          text += `Important. ${element.text}. `;
        } else if (element.type === 'terminology_card' && element.terminology) {
          text += `Terminology. ${element.terminology.keyword} is defined as ${element.terminology.definition}. `;
        } else if (element.type === 'info_card' && element.title) {
          text += `${element.title}. `;
        }
      });
      segments.push({ id: 'main-explanation', text });
    }

    // 4. Code Examples & Explanation
    if (lesson.codeExamples && lesson.codeExamples.length > 0) {
      let exampleText = "Code Examples. ";
      lesson.codeExamples.forEach(item => {
        if (item.title) exampleText += `${item.title}. `;
      });
      segments.push({ id: 'code-examples', text: exampleText });

      let explanationText = "Code Explanation. ";
      lesson.codeExamples.forEach(item => {
        if (item.title) explanationText += `Explanation for ${item.title}. `;
        if (item.explanation) {
          explanationText += `${item.explanation}. `;
        }
      });
      segments.push({ id: 'code-explanation', text: explanationText });
    }

    // 5. Visual Learning
    if (lesson.visualLearning && lesson.visualLearning.length > 0) {
      let text = "Visual Learning. ";
      lesson.visualLearning.forEach(diagram => {
        if (diagram.title) text += `${diagram.title}. `;
        if (diagram.description) text += `${diagram.description}. `;
      });
      segments.push({ id: 'visual-learning', text });
    }

    // 6. Common Mistakes
    if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
      let text = "Common Beginner Mistakes. ";
      lesson.commonMistakes.forEach(mistake => {
        if (mistake.mistake) text += `${mistake.mistake}. `;
        if (mistake.whyItHappens) text += `Why it happens. ${mistake.whyItHappens}. `;
        if (mistake.howToAvoid) text += `How to avoid it. ${mistake.howToAvoid}. `;
      });
      segments.push({ id: 'common-mistakes', text });
    }

    // 7. Practice Exercises
    if (lesson.practiceExercise) {
      let text = `Practice Exercise: ${lesson.practiceExercise.title}. `;
      if (lesson.practiceExercise.tasks) {
        lesson.practiceExercise.tasks.forEach((task, idx) => {
          text += `Task ${idx + 1}: ${task}. `;
        });
      }
      segments.push({ id: 'practice-exercise', text });
    }

    // 8. Summary Takeaways
    if (lesson.summary && lesson.summary.length > 0) {
      let text = "Lesson Summary. ";
      lesson.summary.forEach(point => {
        text += `${point}. `;
      });
      segments.push({ id: 'summary', text });
    }

    return segments;
  };

  // Stop active speech
  const stopSpeech = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    isSpeakingRef.current = false;
    setCurrentSegmentIdx(-1);
    currentSegmentIdxRef.current = -1;
  };

  const speakSegment = (idx: number, allSegments: { id: string; text: string }[]) => {
    if (!window.speechSynthesis) return;

    if (idx >= allSegments.length || !isSpeakingRef.current) {
      stopSpeech();
      return;
    }

    setCurrentSegmentIdx(idx);
    currentSegmentIdxRef.current = idx;

    const segment = allSegments[idx];

    // Smoothly scroll the container to center the segment
    const element = document.getElementById(segment.id);
    if (element) {
      const navbarOffset = -95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY ?? window.pageYOffset ?? 0) + navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    const utterance = new SpeechSynthesisUtterance(segment.text);
    utterance.onend = () => {
      if (isSpeakingRef.current && currentSegmentIdxRef.current === idx) {
        speakSegment(idx + 1, allSegments);
      }
    };
    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') {
        stopSpeech();
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const startSpeech = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const allSegments = getSegments();
    if (allSegments.length === 0) return;

    setIsSpeaking(true);
    isSpeakingRef.current = true;
    speakSegment(0, allSegments);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      startSpeech();
    }
  };

  // Stop any active speech when lesson slug changes or on unmount
  useEffect(() => {
    stopSpeech();
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [lessonSlug]);

  // Navigate to previous lesson
  const getPrevLessonPath = () => {
    if (currentLessonIndex > 0) {
      return `/lesson/${activeModule.lessons[currentLessonIndex - 1].slug}`;
    } else {
      const prevModIdx = JAVA_MODULES.findIndex(m => m.slug === activeModule.slug) - 1;
      if (prevModIdx >= 0) {
        const prevMod = JAVA_MODULES[prevModIdx];
        return `/lesson/${prevMod.lessons[prevMod.lessons.length - 1].slug}`;
      }
    }
    return null;
  };

  // Navigate to next lesson
  const getNextLessonPath = () => {
    if (currentLessonIndex < activeModule.lessons.length - 1) {
      return `/lesson/${activeModule.lessons[currentLessonIndex + 1].slug}`;
    } else {
      const nextModIdx = JAVA_MODULES.findIndex(m => m.slug === activeModule.slug) + 1;
      if (nextModIdx < JAVA_MODULES.length) {
        const nextMod = JAVA_MODULES[nextModIdx];
        return `/lesson/${nextMod.lessons[0].slug}`;
      }
    }
    return null;
  };

  const prevPath = getPrevLessonPath();
  const nextPath = getNextLessonPath();

  // CTA Placement determination logic
  const hasExamples = lesson && lesson.codeExamples && lesson.codeExamples.length > 0;
  const hasMistakesOrVisual = lesson && ((lesson.commonMistakes && lesson.commonMistakes.length > 0) || (lesson.visualLearning && lesson.visualLearning.length > 0));

  let ctaPlacement: 'after-examples' | 'inside-explanation' | 'before-practice' = 'before-practice';

  if (hasExamples && hasMistakesOrVisual) {
    ctaPlacement = 'after-examples';
  } else if (lesson && lesson.mainExplanation && lesson.mainExplanation.length >= 4) {
    ctaPlacement = 'inside-explanation';
  } else {
    ctaPlacement = 'before-practice';
  }

  const ctaExplanationIndex = 2; // Insert after the 3rd element in mainExplanation (0-indexed 2)

  const isFirstRender = useRef(true);

  // Dedicated lesson scroll behavior handler
  useEffect(() => {
    const scrollToLessonStart = (behavior: ScrollBehavior) => {
      const startEl = document.getElementById('lesson-article-container');
      if (startEl) {
        const navbarOffset = -95; // Height of fixed navbar plus visual breathing space
        const elementPosition = startEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + (window.scrollY ?? window.pageYOffset ?? 0) + navbarOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: behavior
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    // Use a small timeout to allow AnimatePresence and layout shift to settle
    const timer = setTimeout(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        scrollToLessonStart('auto');
      } else {
        scrollToLessonStart('smooth');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [lessonSlug]);

  if (!found) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-black text-white">Lesson Not Found</h2>
        <p className="text-sm text-zinc-500 mt-2">The requested topic slug could not be located in our index.</p>
        <Link
          to="/learn-java"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#FF0800] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-rose-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Curriculum</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300">
      
      {/* Breadcrumb Header Bar */}
      <div className="border-b border-zinc-800 bg-zinc-950/20 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            <Link to="/" className="hover:text-[#FF0800] transition-colors">Home</Link>
            <span className="text-zinc-300">«»</span>
            <Link to="/learn-java" className="hover:text-[#FF0800] transition-colors">Learn Java</Link>
            <span className="text-zinc-300">«»</span>
            <Link to={`/module/${activeModule.slug}`} className="hover:text-[#FF0800] transition-colors truncate">
              {activeModule.title}
            </Link>
            <span className="text-zinc-300">«»</span>
            <span className="text-white truncate font-black">{activeLesson.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: LEFT SIDEBAR - Module Lessons Index List (3 cols) */}
          <div className="lg:col-span-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-20 max-h-[85vh] flex flex-col">
            <div className="pb-3 border-b border-zinc-800 mb-3.5">
              <Link
                to={`/module/${activeModule.slug}`}
                className="text-[9px] font-black text-[#FF0800] uppercase tracking-wider hover:underline flex items-center gap-1 mb-1.5"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Return to Module overview</span>
              </Link>
              <h3 className="font-black text-white text-xs uppercase tracking-tight flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-[#FF0800] shrink-0" />
                Module {activeModule.number}: {activeModule.title}
              </h3>
            </div>

            {/* List of lessons inside this module */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin max-h-[50vh] lg:max-h-[55vh]">
              {activeModule.lessons.map((les, idx) => {
                const isCurrent = les.slug === lessonSlug;
                return (
                  <Link
                    key={les.slug}
                    to={`/lesson/${les.slug}`}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                      isCurrent
                        ? 'bg-[#FF0800] border-[#FF0800] text-white shadow-md shadow-[#FF0800]/15'
                        : 'bg-zinc-950 border border-zinc-800/85 hover:border-[#FF0800]/30 hover:bg-zinc-900/30'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded font-mono text-[9px] font-bold flex items-center justify-center shrink-0 ${
                      isCurrent 
                        ? 'bg-white/20 text-white' 
                        : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-black truncate leading-tight">{les.title}</h4>
                      <p className={`text-[8px] truncate mt-0.5 ${isCurrent ? 'text-rose-100' : 'text-zinc-500'}`}>
                        {les.readingTime} • {les.difficulty}
                      </p>
                    </div>
                    
                    <ChevronRight className={`w-3 h-3 shrink-0 transition-transform ${isCurrent ? 'rotate-90 text-white' : 'text-zinc-400'}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: CENTER - Reading Pane / Interactive Lesson Canvas (9 cols) */}
          <div id="lesson-article-container" className="lg:col-span-9 flex flex-col gap-6 max-w-full">
            
            {activeModule.slug === 'mini-projects' ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={lessonSlug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  <CodingLabView lessonSlug={lessonSlug || ''} />
                  
                  {/* NAVIGATION CONTROLS FOR MINI-PROJECTS */}
                  <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 pt-6 mt-6 gap-4">
                    {prevPath ? (
                      <Link
                        to={prevPath}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs active:scale-98"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous Section</span>
                      </Link>
                    ) : (
                      <div className="hidden sm:block opacity-0 pointer-events-none" />
                    )}

                    <div className="flex gap-4 items-center">
                      <Link
                        to={`/module/${activeModule.slug}`}
                        className="text-[10px] font-black text-zinc-400 hover:text-[#FF0800] uppercase tracking-widest hover:underline whitespace-nowrap"
                      >
                        Return to Module
                      </Link>
                      <span className="text-zinc-300">|</span>
                      <Link
                        to="/learn-java"
                        className="text-[10px] font-black text-zinc-400 hover:text-[#FF0800] uppercase tracking-widest hover:underline whitespace-nowrap"
                      >
                        Java Roadmap
                      </Link>
                    </div>

                    {nextPath ? (
                      <Link
                        to={nextPath}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-98"
                      >
                        <span>Next Section</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        to="/learn-java"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-98"
                      >
                        <span>Complete Course</span>
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <AnimatePresence mode="wait">
                <motion.article
                  key={lessonSlug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6 leading-relaxed max-w-none text-zinc-300"
                >
                
                {/* 1. LESSON HEADER HERO PANEL */}
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#FF0800]/5 to-rose-500/5 border border-[#FF0800]/10 flex flex-col gap-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[150px] h-[80px] bg-rose-500/5 blur-[40px] pointer-events-none rounded-full" />
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[8px] font-mono font-black bg-[#FF0800]/10 text-[#FF0800] px-2 py-0.5 rounded uppercase">
                      {lesson.moduleName}
                    </span>
                    <span className="text-[8px] font-mono font-black bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase">
                      {lesson.difficulty}
                    </span>
                    <span className="text-[8px] font-mono font-bold text-zinc-400 ml-auto flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.estimatedTime} read
                    </span>
                  </div>
                  
                  <h1 className="text-2xl md:text-3.5xl font-black text-white tracking-tight leading-none mt-1">
                    {lesson.title}
                  </h1>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      {prevPath ? (
                        <Link
                          to={prevPath}
                          className="p-1.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-[#FF0800] hover:border-[#FF0800]/30 transition-colors"
                          title="Previous Lesson"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Link>
                      ) : null}
                      
                      {nextPath ? (
                        <Link
                          to={nextPath}
                          className="p-1.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-[#FF0800] hover:border-[#FF0800]/30 transition-colors"
                          title="Next Lesson"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : null}
                    </div>

                    {/* Text-To-Speech Control */}
                    <button
                      onClick={toggleSpeech}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                        isSpeaking
                          ? 'bg-[#FF0800] border-[#FF0800] text-white hover:bg-rose-700'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                      }`}
                      title={isSpeaking ? "Stop Lesson Reader" : "Listen to Lesson"}
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 shrink-0" />
                          <span>Stop Reader</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 shrink-0" />
                          <span>Listen Lesson</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>



                {/* 2. INTRODUCTION */}
                <section id="introduction" className="scroll-mt-20 border-b border-zinc-800 pb-5">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2.5 flex items-center gap-2">
                    <BookOpen className="w-4.5 h-4.5 text-[#FF0800]" />
                    Introduction
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal whitespace-pre-wrap">
                    {lesson.introduction}
                  </p>
                </section>

                {/* 3. WHY THIS TOPIC MATTERS */}
                <section id="why-this-topic-matters" className="scroll-mt-20 border-b border-zinc-800 pb-5">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4.5 h-4.5 text-[#FF0800]" />
                    Why This Topic Matters
                  </h3>
                  <div className="flex flex-col gap-3.5 text-sm leading-relaxed text-zinc-300">
                    <div>
                      <strong className="text-white block mb-0.5 text-xs uppercase tracking-wider font-extrabold">
                        Why does it exist?
                      </strong>
                      <p className="text-xs font-medium">{lesson.whyThisTopicMatters.whyItExists}</p>
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5 text-xs uppercase tracking-wider font-extrabold">
                        What problem does it solve?
                      </strong>
                      <p className="text-xs font-medium">{lesson.whyThisTopicMatters.problemSolved}</p>
                    </div>
                  </div>
                </section>

                {/* 4. MAIN EXPLANATION CONTENT AREA */}
                <section id="main-explanation" className="scroll-mt-20 flex flex-col gap-4 border-b border-zinc-800 pb-5">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1 flex items-center gap-2">
                    <Terminal className="w-4.5 h-4.5 text-[#FF0800]" />
                    Main Explanation
                  </h3>
                  
                  <div className="flex flex-col gap-4.5">
                    {lesson.mainExplanation.map((element, elIdx) => {
                      let node = null;
                      if (element.type === 'paragraph') {
                        // Support high contrast formatting markers
                        const formatted = (element.text || '')
                          .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-extrabold">$1</strong>')
                          .replace(/`([^`]+)`/g, '<code class="bg-zinc-800 text-[#FF0800] px-1.5 py-0.5 rounded text-[11px] font-mono font-bold">$1</code>');
                        node = (
                          <p
                            key={elIdx}
                            className="text-xs leading-relaxed text-zinc-300 font-medium m-0"
                            dangerouslySetInnerHTML={{ __html: formatted }}
                          />
                        );
                      } else if (element.type === 'bullet_list') {
                        node = (
                          <div key={elIdx} className="my-1.5 flex flex-col gap-2">
                            {element.title && (
                              <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                                {element.title}
                              </h5>
                            )}
                            <ul className="list-disc pl-5 flex flex-col gap-1.5 text-xs text-zinc-400 font-medium">
                              {element.items?.map((li, idx) => {
                                const formattedLi = li
                                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-extrabold">$1</strong>')
                                  .replace(/`([^`]+)`/g, '<code class="bg-zinc-800 text-[#FF0800] px-1.5 py-0.5 rounded text-[11px] font-mono font-bold">$1</code>');
                                return (
                                  <li key={idx} dangerouslySetInnerHTML={{ __html: formattedLi }} />
                                );
                              })}
                            </ul>
                          </div>
                        );
                      } else if (element.type === 'callout') {
                        node = (
                          <CalloutCard
                            key={elIdx}
                            type={element.calloutType || 'tip'}
                            text={element.text || ''}
                          />
                        );
                      } else if (element.type === 'terminology_card') {
                        node = element.terminology ? (
                          <TerminologyCard key={elIdx} term={element.terminology} />
                        ) : null;
                      } else if (element.type === 'info_card') {
                        node = (
                          <div key={elIdx} className="border-b border-zinc-800/60 pb-1 mt-4 first:mt-0">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                              <span className="w-1.5 h-3.5 bg-[#FF0800] rounded-full" />
                              {element.title}
                            </h4>
                          </div>
                        );
                      }

                      const isCtaHere = ctaPlacement === 'inside-explanation' && elIdx === ctaExplanationIndex;

                      return (
                        <div key={elIdx} className="contents">
                          {node}
                          {isCtaHere && <TutoringCTA variant="lesson" />}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* 5 & 6. CODE EXAMPLES AND CODE EXPLANATION */}
                {lesson.codeExamples && lesson.codeExamples.length > 0 && (
                  <>
                    <section id="code-examples" className="scroll-mt-20 border-b border-zinc-800 pb-5">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2.5 flex items-center gap-2">
                        <Play className="w-4.5 h-4.5 text-[#FF0800]" />
                        Code Examples
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        {lesson.codeExamples.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            {item.title && (
                              <h4 className="text-xs font-black text-zinc-200 uppercase tracking-wide">
                                {item.title}
                              </h4>
                            )}
                            
                            <div className="relative">
                              <CodeBlock code={item.code} language={item.language} showLineNumbers={true} />
                            </div>

                            <div className="p-3.5 bg-[#FF0800]/5 border border-[#FF0800]/10 rounded-xl text-[10px] text-zinc-500 italic text-center">
                              💡 <strong>Independent Execution:</strong> Click the copy button, paste this snippet into your local text editor or IDE workspace, and compile using <code>javac</code> to verify the outputs.
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section id="code-explanation" className="scroll-mt-20 border-b border-zinc-800 pb-5">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2.5 flex items-center gap-2">
                        <Terminal className="w-4.5 h-4.5 text-[#FF0800]" />
                        Code Explanation
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        {lesson.codeExamples.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            {item.title && (
                              <h4 className="text-xs font-black text-zinc-200 uppercase tracking-wide">
                                Explanation for: {item.title}
                              </h4>
                            )}
                            
                            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-400 leading-relaxed font-medium">
                              <strong className="text-white block mb-1.5 text-xs uppercase tracking-tight font-extrabold">
                                Line-by-Line Breakdown:
                              </strong>
                              <div className="whitespace-pre-line text-zinc-400">
                                {item.explanation}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </>
                )}

                {ctaPlacement === 'after-examples' && (
                  <TutoringCTA variant="lesson" />
                )}

                {/* 7. VISUAL LEARNING CONTAINER */}
                {lesson.visualLearning && lesson.visualLearning.length > 0 && (
                  <section id="visual-learning" className="scroll-mt-20 border-b border-zinc-800 pb-5">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 flex items-center gap-2">
                      <Cpu className="w-4.5 h-4.5 text-[#FF0800]" />
                      Visual Learning
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                      {lesson.visualLearning.map((diagram, idx) => (
                        <VisualLearningComponent key={idx} diagram={diagram} />
                      ))}
                    </div>
                  </section>
                )}

                {/* 8. COMMON MISTAKES WARNING PANELS */}
                {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                  <CommonMistakesSection mistakes={lesson.commonMistakes} />
                )}

                {ctaPlacement === 'before-practice' && (
                  <TutoringCTA variant="lesson" />
                )}

                {/* 9. PRACTICE EXERCISES CHALLENGES (No Answers) */}
                <section id="practice-exercise" className="scroll-mt-20 border-b border-zinc-800 pb-5">
                  <div className="border border-[#FF0800]/10 bg-[#FF0800]/1 rounded-2xl overflow-hidden shadow-xs">
                    <div className="bg-[#FF0800]/5 px-5 py-3 border-b border-[#FF0800]/10 flex items-center gap-2 text-[#FF0800]">
                      <HelpCircle className="w-4.5 h-4.5 shrink-0" />
                      <h4 className="text-xs font-black uppercase tracking-wider">Practice Challenge: {lesson.practiceExercise.title}</h4>
                    </div>

                    <div className="p-5 flex flex-col gap-4">
                      <p className="text-xs text-zinc-450 leading-relaxed font-semibold">
                        Complete the following steps independently inside your own code editor or IDE. You must verify and debug your outputs manually to reinforce your learning.
                      </p>

                      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4.5 font-mono text-xs text-zinc-300">
                        <span className="text-zinc-500 block mb-2.5 select-none">// Exercise Steps:</span>
                        <div className="flex flex-col gap-2">
                          {lesson.practiceExercise.tasks.map((task, idx) => (
                            <div key={idx} className="flex gap-2 items-start">
                              <span className="text-[#FF0800] font-black">{idx + 1}.</span>
                              <span className="leading-relaxed font-semibold text-zinc-200">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-[11px] text-zinc-500 italic leading-relaxed">
                        ⚠️ <strong>Educational Policy Notice:</strong> There is no solution toggle or visible code answers on this screen. To master software development, you must construct and execute algorithms on your own.
                      </div>
                    </div>
                  </div>
                </section>

                {/* 10. SUMMARY TAKEAWAYS */}
                <section id="summary" className="scroll-mt-20">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2.5 flex items-center gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                    Lesson Summary
                  </h3>
                  
                  <div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/10">
                    <ul className="space-y-3">
                      {lesson.summary.map((point, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-zinc-300 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 11. MINI QUIZ SECTION */}
                {lesson.quiz && lesson.quiz.length > 0 && (
                  <section id="quiz" className="scroll-mt-20 border-t border-zinc-800/80 pt-6 mt-2">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2.5 flex items-center gap-2">
                      <HelpCircle className="w-4.5 h-4.5 text-[#FF0800]" />
                      Interactive Lesson Quiz
                    </h3>
                    <p className="text-xs text-zinc-400 mb-4 font-semibold">
                      Test your knowledge of the concepts covered in this lesson. Your selections will reveal immediate explanations.
                    </p>
                    <MiniQuiz key={lessonSlug} quiz={lesson.quiz} />
                  </section>
                )}

                {/* 12. CONTINUE LEARNING NAVIGATION CONTROLS */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 pt-6 mt-6 gap-4">
                  {prevPath ? (
                    <Link
                      to={prevPath}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs active:scale-98"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous Lesson</span>
                    </Link>
                  ) : (
                    <div className="hidden sm:block opacity-0 pointer-events-none" />
                  )}

                  <div className="flex gap-4 items-center">
                    <Link
                      to={`/module/${activeModule.slug}`}
                      className="text-[10px] font-black text-zinc-400 hover:text-[#FF0800] uppercase tracking-widest hover:underline whitespace-nowrap"
                    >
                      Return to Module
                    </Link>
                    <span className="text-zinc-300">|</span>
                    <Link
                      to="/learn-java"
                      className="text-[10px] font-black text-zinc-400 hover:text-[#FF0800] uppercase tracking-widest hover:underline whitespace-nowrap"
                    >
                      Java Roadmap
                    </Link>
                  </div>

                  {nextPath ? (
                    <Link
                      to={nextPath}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-98"
                    >
                      <span>Next Lesson</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      to="/learn-java"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-98"
                    >
                      <span>Complete Course</span>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </Link>
                  )}
                </div>

              </motion.article>
            </AnimatePresence>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
