import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import { JAVA_EXAMPLES } from '../data/javaExamples';
import CodeBlock from '../components/CodeBlock';
import { JavaExample } from '../types';
import TutoringCTA from '../components/TutoringCTA';

/**
 * Intelligent helper function to transform static topic/title fields 
 * dynamically into natural-sounding programming exam questions.
 */
function formatExamQuestion(title: string, description: string, id: string): string {
  let cleanTitle = title.trim();
  
  // Custom hand-crafted questions for the first few main items and key advanced ones to guarantee perfection
  const customQuestions: Record<string, string> = {
    "beg-01": "Write a Java program that prints 'Hello, World!' to the console.",
    "beg-02": "Create a Java program that declares, assigns, and outputs standard variables and constant values of different types.",
    "beg-03": "Develop a Java program that demonstrates all primary primitive data types, their values, and displays them to the screen.",
    "beg-04": "Write a Java program that reads keyboard inputs dynamically from users using the java.util.Scanner class.",
    "adv-80": "Design a Java class structure to simulate a simple Hotel Reservation system that manages and books rooms.",
    "adv-81": "Create a Java class to simulate a simple Quiz Application that evaluates trivia submissions case-insensitively.",
    "adv-82": "Develop a Java program that implements a simple Lexer to tokenize mathematical expressions into typed compiler symbols.",
    "adv-83": "Implement a method that calculates massive Fibonacci numbers efficiently using recursion with memoization (Dynamic Programming).",
  };

  if (customQuestions[id]) {
    return customQuestions[id];
  }

  // If cleanTitle already starts with an exam-style verb
  if (/^(write|create|develop|implement|design|build|show|accept|calculate|find)\b/i.test(cleanTitle)) {
    return cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
  }

  let desc = description ? description.trim() : "";
  if (desc) {
    if (desc.endsWith(".")) {
      desc = desc.slice(0, -1);
    }
    
    if (/^(demonstrates how to|demonstrate how to|learn how to)\b/i.test(desc)) {
      const remaining = desc.replace(/^(demonstrates how to|demonstrate how to|learn how to)\b/i, "").trim();
      return `Write a Java program that ${remaining}.`;
    }
    if (desc.toLowerCase().startsWith("teaches you how to ")) {
      const remaining = desc.slice("teaches you how to ".length).trim();
      return `Write a Java program to ${remaining}.`;
    }
    if (/^(calculates|computes|performs|manages|coordinates|evaluates|parses)\b/i.test(desc)) {
      const remaining = desc.charAt(0).toLowerCase() + desc.slice(1);
      return `Create a Java program that ${remaining}.`;
    }
  }

  const lowerTitle = cleanTitle.toLowerCase();

  // Remove trailing " Demo", " Demonstration", " Basics", " Example"
  cleanTitle = cleanTitle.replace(/\b(demo|demonstration|basics|basic|example|simulation)\b/gi, "").replace(/\s+/g, " ").trim();

  if (!cleanTitle) {
    cleanTitle = title.trim();
  }

  let verb = "Write a Java program that";
  if (lowerTitle.includes("class") || lowerTitle.includes("interface") || lowerTitle.includes("oop") || lowerTitle.includes("object")) {
    verb = "Design a Java class structure that";
  } else if (lowerTitle.includes("method") || lowerTitle.includes("function") || lowerTitle.includes("factorial") || lowerTitle.includes("algorithm")) {
    verb = "Implement a method that";
  } else if (lowerTitle.includes("calculator") || lowerTitle.includes("app") || lowerTitle.includes("game")) {
    verb = "Develop a Java program to implement a";
  } else if (lowerTitle.includes("search") || lowerTitle.includes("sort") || lowerTitle.includes("vowel") || lowerTitle.includes("reverse")) {
    verb = "Create a Java program to";
  }

  const firstWord = cleanTitle.split(" ")[0].toLowerCase();
  const verbsToPreposition: Record<string, string> = {
    "print": "prints",
    "calculate": "calculates",
    "compute": "computes",
    "find": "finds",
    "reverse": "reverses",
    "check": "checks",
    "demonstrate": "demonstrates",
    "show": "shows",
    "use": "uses",
    "sort": "sorts",
    "search": "searches",
  };

  if (verbsToPreposition[firstWord]) {
    const remaining = cleanTitle.slice(firstWord.length).trim();
    return `${verb} ${verbsToPreposition[firstWord]} ${remaining}.`;
  }

  if (lowerTitle.includes("statement") || lowerTitle.includes("loop") || lowerTitle.includes("array") || lowerTitle.includes("operator")) {
    return `Create a Java program that demonstrates the use and execution of ${cleanTitle}.`;
  }

  return `Write a Java program to demonstrate ${cleanTitle.charAt(0).toLowerCase() + cleanTitle.slice(1)}.`;
}

export default function ExamplesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [visibleCount, setVisibleCount] = useState(15);

  // Tracks which examples have expanded code blocks
  const [expandedCodes, setExpandedCodes] = useState<Record<string, boolean>>({});

  // 1. Dynamic Filtering using Memoization for high performance
  const filteredExamples = useMemo(() => {
    return JAVA_EXAMPLES.filter((example) => {
      // Filter by Category Pill
      if (selectedCategory !== 'All' && example.category !== selectedCategory) {
        return false;
      }

      // Filter by Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = example.title.toLowerCase().includes(query);
        const matchesTopic = example.topic.toLowerCase().includes(query);
        const matchesDescription = example.description.toLowerCase().includes(query);
        const matchesDifficulty = example.difficulty.toLowerCase().includes(query);
        const matchesTags = example.tags.some((tag) => tag.toLowerCase().includes(query));

        return matchesTitle || matchesTopic || matchesDescription || matchesDifficulty || matchesTags;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  // 2. Visible items chunking (Pagination)
  const visibleExamples = useMemo(() => {
    return filteredExamples.slice(0, visibleCount);
  }, [filteredExamples, visibleCount]);

  // Reset pagination when search query or filter changes
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setVisibleCount(15);
  };

  const handleCategoryChange = (cat: 'All' | 'Beginner' | 'Intermediate' | 'Advanced') => {
    setSelectedCategory(cat);
    setVisibleCount(15);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 15, filteredExamples.length));
  };

  const toggleCodeExpand = (id: string) => {
    setExpandedCodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper stats
  const totalCount = JAVA_EXAMPLES.length;
  const beginnerCount = JAVA_EXAMPLES.filter(e => e.category === 'Beginner').length;
  const intermediateCount = JAVA_EXAMPLES.filter(e => e.category === 'Intermediate').length;
  const advancedCount = JAVA_EXAMPLES.filter(e => e.category === 'Advanced').length;

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-300">
      {/* Hero Section */}
      <section id="hero" className="relative py-8 md:py-12 border-b border-zinc-900 bg-gradient-to-b from-[#0B0B0F] to-[#07070a] overflow-hidden">
        {/* Decorative Grid Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white"
          >
            Java Worked <span className="text-[#FF0800]">Examples Library</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            Study high-quality Java programming questions and instant solution code. Perfect for exam preparation, university exercise practice, and code review.
          </motion.p>
        </div>
      </section>

      {/* Main Directory Hub Content */}
      <main id="directory" className="max-w-4xl mx-auto px-4 py-6 md:py-10">
        {/* Sticky Search and Compact Filter Panel */}
        <div className="sticky top-14 md:top-16 z-30 bg-[#07070a]/95 backdrop-blur-md py-3 border-b border-zinc-900 mb-8">
          <div className="flex flex-col gap-3">
            {/* Massive Prominent Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Java examples..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-xl pl-12 pr-10 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF0800] focus:ring-1 focus:ring-[#FF0800] transition-all h-12 md:h-13 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs cursor-pointer font-bold px-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Compact Filter Category Pills */}
            <div className="flex flex-row items-center justify-between gap-4 mt-1">
              {/* Swipeable Pills Container */}
              <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-full">
                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((cat) => {
                  const isSelected = selectedCategory === cat;
                  let count = totalCount;
                  if (cat === 'Beginner') count = beginnerCount;
                  if (cat === 'Intermediate') count = intermediateCount;
                  if (cat === 'Advanced') count = advancedCount;

                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-3 py-0.5 text-[10px] font-bold uppercase rounded-full border transition-all cursor-pointer whitespace-nowrap active:scale-95 flex items-center gap-1.5 shrink-0 h-6.5 ${
                        isSelected
                          ? 'bg-[#FF0800] border-[#FF0800] text-white shadow-sm shadow-[#FF0800]/10'
                          : 'bg-zinc-900/30 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-750'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[9px] px-1.5 py-0.1 rounded-full font-extrabold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-zinc-950 text-zinc-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Minimalist results counter on desktop */}
              <span className="hidden sm:inline text-[10px] text-zinc-500 font-bold uppercase tracking-wider whitespace-nowrap">
                {filteredExamples.length} Solutions found
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Exam-Style Exercise List */}
        <div className="flex flex-col gap-12 md:gap-16">
          <AnimatePresence mode="popLayout">
            {visibleExamples.length > 0 ? (
              visibleExamples.map((example, idx) => {
                const isCodeExpanded = !!expandedCodes[example.id];
                const linesCount = example.code.split('\n').length;
                const isLongCode = linesCount > 12;
                const exampleNumber = JAVA_EXAMPLES.findIndex((e) => e.id === example.id) + 1;

                // Determine compact difficulty badge color
                let diffStyle = "text-emerald-400 bg-emerald-500/5 border-emerald-500/10";
                if (example.difficulty === "Intermediate") {
                  diffStyle = "text-blue-400 bg-blue-500/5 border-blue-500/10";
                } else if (example.difficulty === "Advanced") {
                  diffStyle = "text-amber-400 bg-amber-500/5 border-amber-500/10";
                }

                return (
                  <motion.article
                    key={example.id}
                    id={`example-${example.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.3) }}
                    className="flex flex-col border-b border-zinc-900/80 pb-10 last:border-b-0 last:pb-0"
                  >
                    {/* 1. NUMBER + PROGRAMMING QUESTION */}
                    <div className="mb-2">
                      <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                        <span className="text-[#FF0800] font-black mr-2 select-none">{exampleNumber}.</span>
                        {formatExamQuestion(example.title, example.description, example.id)}
                      </h2>
                    </div>

                    {/* 2. DIFFICULTY TAG */}
                    <div className="mb-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${diffStyle}`}>
                        {example.difficulty}
                      </span>
                    </div>

                    {/* 3. CODE BLOCK WITH ACCORDION (to keep existing VS Code-style collapse mechanism) */}
                    <div className="relative my-1 overflow-hidden">
                      <div className={`transition-all duration-300 ${!isCodeExpanded && isLongCode ? 'max-h-64 overflow-hidden' : ''}`}>
                        <CodeBlock code={example.code} />
                      </div>

                      {/* Expand Overlay Gradient for long code blocks */}
                      {!isCodeExpanded && isLongCode && (
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07070a]/95 via-[#07070a]/80 to-transparent flex items-end justify-center pb-3 z-10 pointer-events-none">
                          <button
                            onClick={() => toggleCodeExpand(example.id)}
                            className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-zinc-800 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                          >
                            <Code2 className="w-3.5 h-3.5 text-[#FF0800]" />
                            Expand Code ({linesCount} Lines)
                          </button>
                        </div>
                      )}

                      {/* Collapse Button */}
                      {isCodeExpanded && isLongCode && (
                        <div className="flex justify-center py-2">
                          <button
                            onClick={() => toggleCodeExpand(example.id)}
                            className="flex items-center gap-1 px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-zinc-800 shadow-sm active:scale-95 transition-all cursor-pointer"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                            Collapse Code View
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })
            ) : (
              /* Empty Search Feedback */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900/10 border border-dashed border-zinc-800 rounded-2xl py-12 px-4 text-center max-w-lg mx-auto mt-4"
              >
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-855 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code2 className="w-6 h-6 text-zinc-500" />
                </div>
                <h3 className="text-base font-black text-white">No examples found</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  We couldn't find any code examples matching "<span className="text-white font-bold">{searchQuery}</span>" inside the <span className="text-[#FF0800] font-bold">{selectedCategory}</span> category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-3 py-1.5 text-xs font-bold tracking-wide uppercase bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg active:scale-95 transition-all cursor-pointer"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination / Subtle Secondary Load More Button */}
        {filteredExamples.length > visibleCount && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-zinc-900 pt-8">
            <span className="text-xs text-zinc-500 font-bold">
              Showing {visibleCount} of {filteredExamples.length} examples
            </span>
            <button
              onClick={handleLoadMore}
              className="px-3.5 py-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-200 bg-[#161b22] hover:bg-[#21262d] border border-zinc-800 hover:border-zinc-700 rounded-md active:scale-95 transition-all cursor-pointer flex items-center gap-1"
            >
              <span>Load More</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
            </button>
          </div>
        )}
      </main>

      {/* Embedded Premium Tutoring CTA */}
      <section className="bg-gradient-to-t from-[#0B0B0F] to-[#07070a] border-t border-zinc-900 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <TutoringCTA />
        </div>
      </section>
    </div>
  );
}
