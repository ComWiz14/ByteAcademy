import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import {
  Clock,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Layers
} from 'lucide-react';
import { JAVA_MODULES } from '../constants/javaModulesData';
import TutoringCTA from '../components/TutoringCTA';
import ShareButton from '../components/ShareButton';

export default function ModulePage() {
  const { moduleSlug } = useParams<{ moduleSlug: string }>();
  const navigate = useNavigate();

  // Find current module
  const currentModuleIndex = JAVA_MODULES.findIndex(mod => mod.slug === moduleSlug);
  const moduleData = JAVA_MODULES[currentModuleIndex];

  // Dynamically update page and open graph metadata for sharing
  useEffect(() => {
    if (moduleData) {
      const originalTitle = document.title;
      const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      const dynamicTitle = `Learn ${moduleData.title} | ByteAcademy`;
      const dynamicDesc = moduleData.description;
      
      document.title = dynamicTitle;
      
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', dynamicDesc);
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', dynamicTitle);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', dynamicDesc);

      const bannerUrl = `${window.location.origin}/image.jpeg`;

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
  }, [moduleData]);

  // If module not found, redirect or show error
  if (!moduleData) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-black text-white">Module Not Found</h2>
        <p className="text-sm text-zinc-500 mt-2">The module slug you requested could not be identified.</p>
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

  // Get next module
  const nextModule = currentModuleIndex < JAVA_MODULES.length - 1 ? JAVA_MODULES[currentModuleIndex + 1] : null;

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      
      {/* 1. Breadcrumb Navigation */}
      <div className="border-b border-zinc-900 bg-zinc-950/20 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            <Link to="/" className="hover:text-[#FF0800] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
            <Link to="/learn-java" className="hover:text-[#FF0800] transition-colors">Learn Java</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
            <span className="text-white truncate">{moduleData.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative py-12 md:py-16 border-b border-zinc-800 bg-gradient-to-tr from-[#FF0800]/5 to-rose-500/5 overflow-hidden">
        <div className="absolute top-12 left-1/4 w-[350px] h-[150px] bg-rose-500/5 blur-[80px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Header Left */}
            <div className="lg:col-span-8">
              <Link
                to="/learn-java"
                className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase text-[#FF0800] hover:underline mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Modules</span>
              </Link>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold bg-[#FF0800] text-white px-2 py-0.5 rounded">
                  Module {String(moduleData.number).padStart(2, '0')}
                </span>
                <span className="text-xs font-mono font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase">
                  {moduleData.difficulty}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  {moduleData.title}
                </h1>
                <ShareButton module={moduleData} />
              </div>
              
              <p className="text-sm md:text-base text-zinc-400 mt-3 leading-relaxed max-w-3xl">
                {moduleData.description}
              </p>
              
              <div className="mt-5 p-4 bg-zinc-900/40 rounded-xl border border-zinc-800 shadow-sm">
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Module Learning Goals</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {moduleData.objectives.map((goal, gidx) => (
                    <div key={gidx} className="flex gap-2 items-start">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-400 leading-tight">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Right */}
            <div className="lg:col-span-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-white pb-2 border-b border-zinc-800/40 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#FF0800]" />
                Module Parameters
              </h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-450 font-medium">Estimated Time:</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    {moduleData.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-450 font-medium">Lesson Count:</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                    {moduleData.lessons.length} lessons
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-450 font-medium">Topic Difficulty:</span>
                  <span className="font-bold text-white uppercase tracking-wider text-[10px]">
                    {moduleData.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Lesson Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-[#FF0800] rounded-full" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-xs">
              Module Curriculum Structure ({moduleData.lessons.length} Topics)
            </h2>
          </div>

          {/* Grid of Premium Lesson Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moduleData.lessons.map((lesson, index) => (
              <motion.div
                key={lesson.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Link
                  to={`/lesson/${lesson.slug}`}
                  className="group flex flex-col justify-between h-full p-6 bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 rounded-2xl hover:shadow-md hover:-translate-y-0.5 shadow-sm transition-all duration-300"
                >
                  <div>
                    {/* Header: Number and Level */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold text-zinc-400 bg-zinc-900 px-2 py-1 rounded">
                        LESSON {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-bold text-[#FF0800] uppercase tracking-wider">
                        {lesson.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF0800] transition-colors leading-snug">
                      {lesson.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800/50">
                    <span className="text-[10px] font-medium text-zinc-550 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.readingTime} read
                    </span>
                    
                    <div className="w-8 h-8 rounded-full bg-zinc-900 group-hover:bg-[#FF0800] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Private Tutoring CTA */}
      <TutoringCTA variant="module" />

      {/* 5. Next Module Preview Segment */}
      {nextModule && (
        <section className="py-12 bg-zinc-950/20 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 md:p-8 bg-zinc-950 border border-zinc-800/80 rounded-2xl shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="absolute top-0 right-0 w-[200px] h-[100px] bg-[#FF0800]/5 blur-[60px] pointer-events-none rounded-full" />
              
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-black uppercase text-[#FF0800] tracking-widest flex items-center gap-1 mb-2">
                  <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                  Next Up
                </span>
                <span className="text-xs font-mono font-bold text-zinc-450 block mb-1">
                  Module {String(nextModule.number).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-black text-white leading-tight">
                  {nextModule.title}
                </h3>
                <p className="text-xs text-zinc-550 mt-1 line-clamp-2">
                  {nextModule.description}
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  to={`/module/${nextModule.slug}`}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  <span>Advance to Next Module</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
