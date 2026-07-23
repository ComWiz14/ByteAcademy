import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Award,
  ChevronRight,
  Search,
  Terminal,
  CheckCircle,
  TrendingUp,
  Coffee,
  BookMarked,
  ExternalLink
} from 'lucide-react';
import { JAVA_MODULES } from '../constants/javaModulesData';
import TutoringCTA from '../components/TutoringCTA';

const JAVA_RESOURCES = [
  {
    title: 'Introduction to Programming in Java',
    author: 'Robert Sedgewick & Kevin Wayne',
    description: 'A beginner-friendly introduction to programming concepts using Java. Learn problem solving, algorithms, data structures, and programming fundamentals.',
    difficulty: 'Beginner',
    link: 'https://introcs.cs.princeton.edu/java/home/'
  },
  {
    title: 'Head First Java',
    author: 'Kathy Sierra & Bert Bates',
    description: 'A visual and beginner-friendly Java book that explains programming concepts through practical examples.',
    difficulty: 'Beginner',
    link: 'https://www.oreilly.com/library/view/head-first-java/'
  },
  {
    title: 'Effective Java',
    author: 'Joshua Bloch',
    description: 'A recommended advanced resource for writing cleaner, safer, and more professional Java programs.',
    difficulty: 'Advanced',
    link: 'https://www.oreilly.com/library/view/effective-java-3rd/'
  },
  {
    title: 'Official Java Documentation',
    author: 'Oracle',
    description: 'The official Java reference documentation for learning the Java language, APIs, and development tools.',
    difficulty: 'All Levels',
    link: 'https://docs.oracle.com/en/java/'
  }
];

export default function LearnJava() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter modules locally by title and description
  const filteredModules = JAVA_MODULES.filter(mod => 
    mod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    mod.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalLessonsCount = JAVA_MODULES.reduce((acc, curr) => acc + curr.lessons.length, 0);

  // Calculate dynamic estimated study duration based on reading time + coding practice & review
  const totalStudyHours = JAVA_MODULES.reduce((sum, mod) => {
    return sum + mod.lessons.reduce((lSum, les) => {
      const readingMins = parseInt(les.readingTime) || 10;
      // Include time for: reading, concept understanding, code practice, exercises, and review
      const lessonStudyMins = readingMins * 2 + 15;
      return lSum + lessonStudyMins;
    }, 0);
  }, 0) / 60;

  const studyHoursPerWeek = 6; // Midpoint of 5-7 hours
  const estimatedWeeks = totalStudyHours / studyHoursPerWeek;
  const estimatedMonths = Math.round(estimatedWeeks / 4);
  const dynamicEstTime = `≈ ${estimatedMonths} Month${estimatedMonths !== 1 ? 's' : ''}`;

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300">
      
      {/* 1. Hero / Course Overview Section */}
      <section className="relative py-12 md:py-16 border-b border-zinc-800 bg-zinc-950/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[250px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Intro Text */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF0800]/10 text-[#FF0800] text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Coffee className="w-3.5 h-3.5" />
                  Official Curriculum
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  The Java learning handbook.
                </h1>
                <p className="text-sm md:text-base text-zinc-400 mt-2 max-w-xl leading-relaxed">
                  Welcome to ByteAcademy. This handbook is structured mathematically to take you from a absolute beginner to an advanced, industry-ready software engineer without unnecessary jargon or syntax memorization.
                </p>
              </div>

              {/* Course Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {[
                  { label: 'Modules', val: `${JAVA_MODULES.length} Modules`, desc: 'Conceptual blocks', icon: <BookOpen className="w-4 h-4 text-[#FF0800]" /> },
                  { label: 'Lessons', val: `${totalLessonsCount} Lessons`, desc: 'Premium topics', icon: <BookMarked className="w-4 h-4 text-[#FF0800]" /> },
                  { label: 'Level', val: 'Beginner → Adv', desc: 'No-prior-reqs path', icon: <TrendingUp className="w-4 h-4 text-[#FF0800]" /> },
                  { 
                    label: 'Est. Time', 
                    val: dynamicEstTime, 
                    desc: 'Self-paced learning', 
                    subdesc: 'Based on approximately 5–7 hours of study per week.',
                    icon: <Clock className="w-4 h-4 text-[#FF0800]" /> 
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-1.5 shadow-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      {stat.icon}
                      <span>{stat.label}</span>
                    </div>
                    <div className="text-sm font-black text-white leading-none">{stat.val}</div>
                    <div className="text-[9px] text-zinc-500">{stat.desc}</div>
                    {stat.subdesc && (
                      <div className="text-[8px] text-zinc-500 leading-normal mt-0.5">{stat.subdesc}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes Box */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-[#FF0800]" />
                Expected Outcomes
              </h3>
              <div className="flex flex-col gap-3.5 text-xs">
                {[
                  'Master Object-Oriented software design principles (Classes, OOP pillars)',
                  'Build real interactive CLI applications (Student database, banking portals)',
                  'Understand Java RAM allocations (Garbage collection, constant pools)',
                  'Handle files, capture exceptions, and code functional streams and Lambdas'
                ].map((outcome, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 leading-normal">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Curriculum Roadmap Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Compact Mentorship CTA */}
          <div className="mb-10">
            <TutoringCTA variant="compact" />
          </div>

          {/* Header & Local Search bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#FF0800]" />
                Learning Path Roadmap
              </h2>
              <p className="text-xs text-zinc-500 mt-1">
                Select a module below to view its curriculum and start learning.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#FF0800]/50 transition-all placeholder:text-zinc-400 shadow-xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-zinc-400 hover:text-[#FF0800] uppercase font-bold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Module Cards */}
          <div className="flex flex-col gap-4">
            {filteredModules.length > 0 ? (
              filteredModules.map((mod) => {
                return (
                  <Link
                    key={mod.slug}
                    to={`/module/${mod.slug}`}
                    id={`module-card-${mod.number}`}
                    className="bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block group"
                  >
                    {/* Header bar */}
                    <div
                      className="p-6 flex items-center justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        {/* Number Icon */}
                        <div className="w-11 h-11 rounded-xl bg-zinc-950 flex flex-col items-center justify-center font-mono shrink-0 shadow-sm">
                          <span className="text-[9px] text-zinc-500 font-bold leading-none">MOD</span>
                          <span className="text-base font-black text-white leading-none mt-0.5">
                            {String(mod.number).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title & metadata */}
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-white group-hover:text-[#FF0800] transition-colors">
                              {mod.title}
                            </h3>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 font-bold text-zinc-500 uppercase tracking-wider">
                              {mod.difficulty}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-medium">
                            {mod.description}
                          </p>
                          
                          {/* Duration and lesson count row */}
                          <div className="flex items-center gap-3 mt-2 text-[10px] text-zinc-400 font-medium">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {mod.duration}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-3.5 h-3.5" />
                              {mod.lessons.length} lessons
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Chevron icon indicating navigation */}
                      <div className="text-zinc-400 p-2 rounded-lg bg-zinc-950 group-hover:bg-[#FF0800] group-hover:text-white transition-colors shrink-0 shadow-sm">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="p-8 text-center bg-zinc-900/40 border border-dashed border-zinc-800 rounded-2xl flex flex-col justify-center items-center gap-3">
                <span className="text-zinc-400 text-sm">No topics match your query "{searchQuery}".</span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 text-xs font-bold bg-[#FF0800] hover:bg-rose-700 text-white uppercase rounded-xl transition-all"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Recommended Java Resources Section */}
      <section className="py-12 border-t border-zinc-900/60 bg-zinc-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1 mb-8">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-[#FF0800]" />
              Recommended Java Resources
            </h2>
            <p className="text-xs text-zinc-500">
              Continue your Java journey with these carefully selected books and learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JAVA_RESOURCES.map((res, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF0800] transition-colors line-clamp-1">
                      {res.title}
                    </h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 font-bold text-zinc-400 uppercase tracking-wider shrink-0">
                      {res.difficulty}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-medium mt-0.5">
                    By {res.author}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-800/60">
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-zinc-950 hover:bg-[#FF0800] text-zinc-300 hover:text-white text-[10px] font-bold uppercase tracking-wider rounded-xl border border-zinc-800 hover:border-[#FF0800] transition-all group/btn"
                  >
                    Read Resource
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-white transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
