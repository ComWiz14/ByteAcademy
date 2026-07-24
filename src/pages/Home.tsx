import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Code,
  Layers,
  Smartphone,
  Cpu,
  Users,
  Award,
  Zap,
  Target,
  FileCode,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Download,
  BookOpen,
  MessageCircle,
  Terminal,
  Share2,
  Check,
  Bot,
  Headphones
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import TutoringCTA from '../components/TutoringCTA';
import JavaLogo from '../components/JavaLogo';
import ExpandableMobileCards from '../components/ExpandableMobileCards';
import { ROADMAP_STEPS } from '../constants/javaData';
import { CONTACT } from '../constants/contact';
import meImg from '../assets/images/Me.png';

const HERO_SLIDES = [
  {
    headline: (
      <>
        Learn Java <span className="text-[#FF0800]">for Free</span>. Build Real Programming Skills.
      </>
    ),
    description: "Start your programming journey with structured Java lessons, visual explanations, practical examples, and hands-on projects designed for beginners.",
  },
  {
    headline: (
      <>
        Understand Java With <span className="text-[#FF0800]">Better Guidance</span>.
      </>
    ),
    description: "Learn difficult programming concepts through clear explanations, practical examples, and support from ByteAcademy AI Assistant whenever you need help.",
  },
  {
    headline: (
      <>
        Need Personal Support? <span className="text-[#FF0800]">Learn With a Mentor</span>.
      </>
    ),
    description: "Get personalized one-on-one Java mentorship with exam preparation, assignment guidance, and direct tutor support online or face-to-face.",
    showTutoringPromo: true,
  }
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const title = 'ByteAcademy - Learn Java From Beginner To Confident Programmer';
    const desc = 'Master Java through beginner-friendly lessons, practical examples, interactive tools, and AI-powered learning assistance.';
    const bannerUrl = `${window.location.origin}/Banner.png`;

    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', bannerUrl);

    const ogImgUrl = document.querySelector('meta[property="og:image:url"]');
    if (ogImgUrl) ogImgUrl.setAttribute('content', bannerUrl);

    const ogImgSecure = document.querySelector('meta[property="og:image:secure_url"]');
    if (ogImgSecure) ogImgSecure.setAttribute('content', bannerUrl);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', desc);

    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    if (twitterImg) twitterImg.setAttribute('content', bannerUrl);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      } else {
        setSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      }
    }
    touchStartX.current = null;
  };

  const handleShare = async () => {
    const shareData = {
      title: 'ByteAcademy - Learn Java From Beginner To Confident Programmer',
      text: '🚀 Learn Java for FREE with ByteAcademy.\n\nMaster Java through beginner-friendly lessons, practical examples, interactive exercises, AI-powered learning assistance, and visual explanations.\n\nWhether you\'re a complete beginner or preparing for exams, ByteAcademy helps you build real programming skills.\n\nStart learning today!',
      url: window.location.origin,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (e) {
        console.error('Failed to copy link:', e);
      }
    }
  };
  const whyLearnJava = [
    {
      title: 'Beginner Friendly',
      desc: 'Clean syntax rules, strict type structures, and highly readable, English-like execution formats make it excellent for learning core programming concepts.',
      icon: <Users className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Object-Oriented Programming (OOP)',
      desc: 'Encourages clean software design by modeling programs after real-world things using objects, inheritance, interfaces, and modular code structures.',
      icon: <Layers className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Cross Platform (WORA)',
      desc: '"Write Once, Run Anywhere." The compiled bytecode runs on any system with a Java Virtual Machine (JVM) without needing a rewrite.',
      icon: <Cpu className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Android Development',
      desc: 'Java is the structural foundation for Google Android application development, driving millions of mobile devices and applications globally.',
      icon: <Smartphone className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Enterprise Applications',
      desc: '90% of Fortune 500 companies rely on Java for back-end operations, making Java developers highly sought after in modern tech corporations.',
      icon: <Target className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Massive Developer Community',
      desc: 'With billions of devices running Java, you are supported by millions of open-source projects, active forums, libraries, and guides.',
      icon: <CheckCircle className="w-6 h-6 text-[#FF0800]" />
    }
  ];

  const whyByteAcademy = [
    {
      title: 'Beginner-Friendly Explanations',
      desc: 'We replace confusing computer science jargon with clear, real-world analogies that make sense.',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: 'No Syntax Memorization',
      desc: 'We teach you the foundational concepts so you can read and write Java code through genuine logical understanding.',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Practical Examples',
      desc: 'No theoretical algorithms that serve no purpose. Build real projects, manage user inputs, and process local text files.',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Visual Diagrams',
      desc: 'See how the compiler builds bytecode and how variables point to objects inside the String Pool with custom visual outlines.',
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: 'Copyable Code Examples',
      desc: 'Pristinely formatted code blocks mimicking modern VS Code editors, with built-in instant copy support.',
      icon: <FileCode className="w-5 h-5" />
    },
    {
      title: 'Common Mistakes Explained',
      desc: 'Understand exactly why your code throws compiler flags and how to avoid standard pitfalls before they compile.',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: 'Interactive Practice Exercises',
      desc: 'Apply your knowledge instantly with targeted, structured practice questions alongside immediate code answers.',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: '100% Free Resources',
      desc: 'Gain instant access to the entire standard handbook curriculum, guides, setups, and templates without a subscription.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Learn with ByteAcademy AI',
      desc: "Get instant help whenever you're stuck. Ask ByteAcademy AI programming questions, request explanations, debug code, and receive personalized guidance without leaving your lesson.",
      icon: <Bot className="w-5 h-5" />
    },
    {
      title: 'Listen While You Learn',
      desc: 'Turn lessons into audio with the built-in text-to-speech feature. Listen while relaxing, travelling, or multitasking and learn Java at your own pace.',
      icon: <Headphones className="w-5 h-5" />
    }
  ];

  const previewJavaCode = `/**
 * The entry point of a program that demonstrates basic loops,
 * string references, and console outputs.
 */
public class LoopDemonstration {
    public static void main(String[] args) {
        String academy = "ByteAcademy";
        System.out.println("Beginning countdown for " + academy + ":");

        for (int i = 3; i >= 1; i--) {
            System.out.println("Executing loop tick: " + i);
        }

        System.out.println("Let's master Java together!");
    }
}`;

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-800 overflow-hidden">
        {/* Hero Background Image & Responsive Dark Overlays */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Background Image Layer */}
          <img
            src="/Background.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('Background.png')) {
                target.src = '/background.png';
              }
            }}
            className="w-full h-full object-cover object-[75%_top] sm:object-[75%_center] lg:object-right opacity-65 sm:opacity-75 lg:opacity-80 transition-opacity duration-300"
          />

          {/* Horizontal dark gradient overlay: Pure background color on left for pristine text readability, fading to transparent on right for artwork */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/85 sm:via-[#0B0B0F]/65 lg:via-[#0B0B0F]/45 via-65% lg:via-50% to-[#0B0B0F]/15 lg:to-transparent" />

          {/* Gentle top and bottom vertical fade to blend seamlessly with navbar and section border without darkening the upper hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/30 via-transparent via-60% to-[#0B0B0F]/90" />

          {/* Ambient Brand Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-rose-500/15 to-[#FF0800]/15 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Col */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              {/* Logo Header without small badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start mb-2"
              >
                <JavaLogo className="w-20 h-20 text-white shrink-0" />
              </motion.div>

              {/* Animated Hero Content Carousel */}
              <div 
                id="hero-carousel-byteacademy"
                className="min-h-[290px] xs:min-h-[240px] sm:min-h-[210px] md:min-h-[180px] flex flex-col justify-center relative select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] max-w-2xl mx-auto lg:mx-0">
                      {HERO_SLIDES[slideIndex].headline}
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      {HERO_SLIDES[slideIndex].description}
                    </p>
                    {HERO_SLIDES[slideIndex].showTutoringPromo && (
                      <div className="flex flex-row flex-nowrap items-center gap-2 mt-2.5 justify-center lg:justify-start w-full">
                        {/* Price Display */}
                        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 font-extrabold text-[11px] sm:text-xs shadow-xs shrink-0 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                          <span>MWK 20,000 / month</span>
                        </div>
                        
                        {/* WhatsApp Action Button */}
                        <a
                          href={CONTACT.whatsappEnquiryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          referrerPolicy="no-referrer"
                          className="py-1.5 px-3 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase rounded-lg shadow-sm hover:shadow-md hover:shadow-emerald-500/25 flex items-center justify-center gap-1 transition-all cursor-pointer text-center whitespace-nowrap shrink-0"
                        >
                          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Enquire via WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Indicator Dots */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-6">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSlideIndex(idx);
                        setIsPaused(true);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === slideIndex 
                          ? 'bg-[#FF0800] w-5' 
                          : 'bg-zinc-700 hover:bg-zinc-650'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-lg mx-auto lg:mx-0 w-full"
              >
                <Link
                  to="/learn-java"
                  className="px-3 sm:px-8 py-3.5 sm:py-4 bg-[#FF0800] hover:bg-rose-700 text-white font-bold tracking-wide uppercase rounded-xl shadow-lg shadow-[#FF0800]/25 hover:shadow-xl hover:shadow-[#FF0800]/35 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer text-xs sm:text-sm text-center"
                >
                  <span className="truncate">Start Learning Java</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0 hidden xs:inline-block" />
                </Link>
                <Link
                  to="/downloads"
                  className="px-3 sm:px-8 py-3.5 sm:py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold tracking-wide uppercase rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-xs sm:text-sm text-center"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden xs:inline-block" />
                  <span className="truncate">Setup Guide</span>
                </Link>
              </motion.div>

              {/* Website Sharing CTA Banner */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="w-full max-w-lg mx-auto lg:mx-0"
              >
                <div className="border border-cyan-500/10 bg-cyan-500/5 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs leading-relaxed text-zinc-300 font-medium">
                      Help a friend learn Java. <strong className="font-semibold text-white">Share ByteAcademy with someone who wants to start coding.</strong>
                    </p>
                  </div>
                  <button
                    onClick={handleShare}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold text-xs tracking-wide uppercase transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shrink-0 border border-cyan-500/20"
                    title="Share ByteAcademy"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Graphic Illustration Col */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md bg-zinc-900/60 rounded-2xl p-6 border border-zinc-800/80 shadow-md overflow-hidden group">
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                
                {/* Visual Representation of compiler cycle */}
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Compiler Pipeline</h3>
                
                <div className="flex flex-col gap-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3.5 p-4 bg-zinc-950/60 rounded-xl shadow-xs">
                    <FileCode className="w-8 h-8 text-[#FF0800] shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Main.java</h4>
                      <p className="text-xs text-zinc-500">Human-readable source code</p>
                    </div>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#FF0800] to-teal-500" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3.5 p-4 bg-zinc-950/60 rounded-xl shadow-xs">
                    <Cpu className="w-8 h-8 text-teal-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Main.class (Bytecode)</h4>
                      <p className="text-xs text-zinc-500">Compiled platform-neutral binary</p>
                    </div>
                    <span className="ml-auto text-[10px] font-mono bg-teal-500/15 text-teal-500 px-2 py-0.5 rounded">javac</span>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-teal-500 to-indigo-500" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3.5 p-4 bg-zinc-950/60 rounded-xl shadow-xs">
                    <Smartphone className="w-8 h-8 text-indigo-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white">JVM Execution</h4>
                      <p className="text-xs text-zinc-500">Runs instantly on Windows, Mac, or Linux</p>
                    </div>
                    <span className="ml-auto text-[10px] font-mono bg-indigo-500/15 text-indigo-500 px-2 py-0.5 rounded">java</span>
                  </div>
                </div>

                <div className="mt-5 p-2 bg-[#FF0800]/5 border border-[#FF0800]/10 rounded-lg text-[11px] text-[#FF0800] text-center font-semibold">
                  Write Once, Run Anywhere. Handled by ByteAcademy.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium 1-on-1 Tutoring CTA */}
      <TutoringCTA variant="homepage" />

      {/* 2. Code Preview Section */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">Beautiful Interactive Snippets</h2>
            <h3 className="text-3xl font-black text-white">Pristine Visual Code Editor</h3>
            <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
              Our handbook guides feature customizable copyable code blocks styled like high-performance VS Code. Test the copying tool below!
            </p>
          </div>
          
          <div className="relative">
            <CodeBlock code={previewJavaCode} language="java" showLineNumbers={true} />
          </div>
        </div>
      </section>

      {/* 3. Why Learn Java? Section */}
      <section className="py-20 border-b border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">The Power of Java</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Why is Java Worth Learning?</h3>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              Java remains one of the world's most dominant, high-performing, and reliable software development environments. Here's why you should start your journey today.
            </p>
          </div>

          <ExpandableMobileCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyLearnJava.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF0800]/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </ExpandableMobileCards>
        </div>
      </section>

      {/* 4. Why ByteAcademy? Section */}
      <section className="py-20 border-b border-zinc-800 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">The ByteAcademy Difference</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Why Learn with ByteAcademy?</h3>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              We reject dry syntax tables and confusing documentation. ByteAcademy guides you through natural understanding, helping you think like an actual software architect.
            </p>
          </div>

          <ExpandableMobileCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" fadeBgClass="from-zinc-950/40">
            {whyByteAcademy.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF0800]/10 text-[#FF0800] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-md font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </ExpandableMobileCards>
        </div>
      </section>

      {/* 5. Roadmap Preview Section */}
      <section className="py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">Structured Roadmap</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Learning Roadmap Preview</h3>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
              Follow our sequential step-by-step curriculum path from complete beginner all the way to advanced Java applications.
            </p>
          </div>

          {/* Timeline Node Visualization */}
          <div className="relative border-l border-zinc-800 pl-6 ml-4 sm:ml-8 flex flex-col gap-10">
            {ROADMAP_STEPS.slice(0, 5).map((step, idx) => (
              <div key={step.id} className="relative">
                {/* Node dot icon */}
                <div className="absolute -left-[35px] top-1 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#0B0B0F] border-2 border-[#FF0800] z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF0800]" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-[#FF0800] uppercase tracking-wider">Step {idx + 1}</span>
                  <h4 className="text-lg font-bold text-white">{step.title}</h4>
                  <p className="text-sm text-zinc-400 max-w-xl">{step.description}</p>
                  
                  {/* Topics tag list */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {step.topics.map((t) => (
                      <span key={t} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Fading dot at the bottom of preview */}
            <div className="absolute left-[-2px] bottom-0 w-1 h-20 bg-gradient-to-b from-zinc-800 to-transparent" />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/learn-java"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Getting Started Preview */}
      <section className="py-20 border-b border-zinc-800 bg-zinc-950/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* List Col */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">Step One</h2>
                <h3 className="text-3xl font-black text-white">Getting Started Preview</h3>
                <p className="text-zinc-400 mt-2">
                  Learn exactly what you need before writing your very first program. We explain complex tools in straightforward, manageable steps:
                </p>
              </div>

              <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                {[
                  'What programming is & what Java actually is',
                  'Downloading and installing the Java Development Kit (JDK)',
                  'Configuring VS Code & running compiled code',
                  'Writing and saving your first code as HelloWorld.java',
                  'Compiling (javac) vs Executing (java) programs'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  to="/learn-java"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer"
                >
                  <span>Start with Getting Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Steps Col */}
            <div className="lg:col-span-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#FF0800]" />
                Your First Run Cycle
              </h4>
              <div className="flex flex-col gap-4 text-xs font-mono">
                <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-lg shadow-xs">
                  <span className="text-zinc-500">// 1. Write HelloWorld.java</span>
                  <div className="text-emerald-500 font-bold mt-1">System.out.println("Hello World!");</div>
                </div>
                <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-lg shadow-xs">
                  <span className="text-zinc-500">// 2. Compile via Terminal</span>
                  <div className="text-cyan-500 font-bold mt-1">$ javac HelloWorld.java</div>
                </div>
                <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-lg shadow-xs">
                  <span className="text-zinc-500">// 3. Execute platform binary</span>
                  <div className="text-[#FF0800] font-bold mt-1">$ java HelloWorld</div>
                  <div className="text-zinc-400 mt-1">&gt; Hello World!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Learning Philosophy Section */}
      <section className="py-20 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">Our Pedagogical Core</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">The Learning Philosophy</h3>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              We believe memorization is the enemy of software development. Our structured handbook articles break every single Java concept down into four core questions:
            </p>
          </div>

          <ExpandableMobileCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                q: 'What is it?',
                desc: 'A simple, direct definition devoid of unnecessary, complex academic jargon.',
                icon: <HelpCircle className="w-8 h-8 text-[#FF0800]" />
              },
              {
                q: 'Why does it exist?',
                desc: 'What actual programming problem does this feature solve? We justify its purpose.',
                icon: <Lightbulb className="w-8 h-8 text-[#FF0800]" />
              },
              {
                q: 'How does it work?',
                desc: 'Visual memory layouts, internal compilers, and deep computer cycles explained simply.',
                icon: <Cpu className="w-8 h-8 text-[#FF0800]" />
              },
              {
                q: 'How to use it correctly?',
                desc: 'Clean, production-level coding conventions and examples of what pitfalls to avoid.',
                icon: <CheckCircle className="w-8 h-8 text-[#FF0800]" />
              }
            ].map((p, idx) => (
              <motion.div
                key={p.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{p.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{p.q}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </ExpandableMobileCards>
        </div>
      </section>

      {/* 8. Private Tutoring Section (CTA) */}
      <TutoringCTA variant="homepage" />

      {/* Meet the Creator Section */}
      <section className="py-12 border-b border-zinc-800 bg-zinc-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
            {/* Background Accent Gradients */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FF0800]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-row items-start gap-4 sm:gap-6 relative z-10">
              {/* Profile Photo - Compact & Left Aligned */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full bg-gradient-to-tr from-[#FF0800]/20 to-rose-500/20 p-0.5 flex items-center justify-center shadow-md"
                >
                  <div className="w-full h-full rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                    <img
                      src={meImg}
                      alt="Chimango Mughogho - Creator of ByteAcademy"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FF0800]/10 text-[#FF0800] text-[8px] sm:text-[9px] font-black uppercase tracking-wider whitespace-nowrap">
                  Creator
                </span>
              </div>

              {/* Text Introduction & Button */}
              <div className="flex-grow flex flex-col min-w-0">
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-2">
                  Hi, I'm Chimango 👋
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                  I'm a Computer Science student at the University of Malawi and the creator of ByteAcademy. I enjoy building software, teaching programming, and exploring cybersecurity. I created ByteAcademy to help beginners learn Java through simple explanations, practical examples, and structured learning.
                </p>
                <div className="mt-3 sm:mt-4 flex justify-end">
                  <Link
                    to="/about#get-to-know-me"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <span>Read My Story</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. About ByteAcademy (Brief summary) */}
      <section className="py-20 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6">
          <div className="flex items-center justify-center gap-2.5 mx-auto">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF0800]">
              <Terminal className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              About Byte<span className="text-[#FF0800]">Academy</span>
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white">Bridging the Gap in Technical Education</h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            ByteAcademy was born out of a desire to simplify the process of learning Java. We realize that many university curriculums and online articles make programming feel unnecessarily abstract. By designing visual graphics, highlighting code pool mechanics, showing exact common mistakes, and structuring roadmaps logically, we aim to make high-quality software education fully accessible to anyone, anywhere.
          </p>
          <div className="mt-2">
            <Link
              to="/about"
              className="text-[#FF0800] hover:text-rose-700 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
