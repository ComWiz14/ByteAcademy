import { motion } from 'motion/react';
import { Terminal, Award, Lightbulb, Users, ShieldCheck, Heart, GraduationCap, Laptop, BookOpen, Rocket } from 'lucide-react';
import meImg from '../assets/images/Me.png';

export default function About() {
  const values = [
    {
      title: 'Analogy-Driven Learning',
      desc: 'We replace confusing computer science jargon with highly intuitive real-world metaphors that help you grasp concepts visually and contextually.',
      icon: <Lightbulb className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Zero Memorization',
      desc: 'We train your mind to focus on computational logic and the "why" behind compilation rules rather than forcing dry syntax memorization.',
      icon: <Users className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: 'Mistakes-First Debugging',
      desc: 'We do not just show perfect code. We proactively display common compiler errors and memory pitfalls so you learn how to debug files on your own.',
      icon: <Terminal className="w-6 h-6 text-[#FF0800]" />
    },
    {
      title: '100% Open & Free Access',
      desc: 'High-quality software engineering education should be accessible to everyone. The standard handbook curriculum and resources are 100% free.',
      icon: <Award className="w-6 h-6 text-[#FF0800]" />
    }
  ];

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300">
      
      {/* 1. Header / Intro banner */}
      <section className="relative py-16 md:py-24 border-b border-zinc-800 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF0800]/10 text-[#FF0800] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4" />
            Our Core Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Who We Are & Why We Exist
          </h1>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-2xl">
            At ByteAcademy, our goal is to revolutionize how programming languages are taught. We believe that coding is not about memorizing braces and semicolons—it is about training your mind to model problems logically.
          </p>
        </div>
      </section>

      {/* 2. Detailed story / core concept text */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black text-white leading-snug">
                The Problem With Modern Tutorials
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Most online tutorials fall into two extremes: either they are dry, academic documentation sheets containing pages of unreadable specifications, or they are fast-paced "cheat-sheets" that teach you how to copy syntax without explaining why.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                When students learn this way, they hit a wall. As soon as they have to build an assignment or face an interview question that differs from the tutorial, they get stuck. They have memorized syntax, but have not mastered the computational concepts.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-sm">
              <h4 className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                The ByteAcademy Solution
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ByteAcademy bridges this gap. By focusing on a four-tiered teaching approach—establishing exactly **What** something is, **Why** it was designed, **How** it executes inside the computer's memory, and **How** to write it cleanly—we guide learners toward authentic understanding.
              </p>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 font-mono text-[10px] text-zinc-500 whitespace-pre shadow-sm">
                {`// Thought Process of a ByteAcademy graduate:
if (problemExists) {
    analyzeVariables();
    designOptimalClassStructure();
    writeCleanReadableJava();
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">Our Foundation</h2>
            <h3 className="text-3xl font-black text-white">Our Pedagogical Values</h3>
            <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
              Every card, roadmap step, and explanation we compile on ByteAcademy is governed by our core quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm hover:border-[#FF0800]/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF0800]/10 flex items-center justify-center mb-4 shrink-0">
                  {val.icon}
                </div>
                <h4 className="text-md font-bold text-white mb-2 leading-tight">{val.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet Your Tutor Section */}
      <section className="py-16 md:py-24 border-t border-zinc-800 bg-zinc-950/25">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#FF0800] tracking-wider uppercase mb-2">The Creator</h2>
            <h3 className="text-3xl font-black text-white">Meet Your Tutor</h3>
            <p className="text-zinc-400 mt-2 max-w-xl mx-auto text-sm">
              Get to know the mind behind ByteAcademy and the vision for structured Java instruction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Avatar and Role */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#FF0800]/20 to-rose-500/20 p-1 flex items-center justify-center mb-4"
              >
                <div className="w-full h-full rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden relative shadow-inner">
                  <img
                    src={meImg}
                    alt="Chimango Mughogho - Java Tutor"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0800] text-white text-xs font-black uppercase tracking-widest shadow-sm">
                Java Tutor
              </span>
            </div>

            {/* Right side: Information and Story */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Introduction Content */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Hi, I'm Chimango Mughogho.
                </h4>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                  <p>
                    I am currently studying for a <span className="text-white font-semibold">Bachelor of Education in Computer Science</span>. Combining my background in pedagogical theory with my technical training, I am passionate about software development, building useful technology, and exploring cybersecurity.
                  </p>
                  <p>
                    I enjoy breaking down difficult programming concepts into simple explanations that beginners can understand. ByteAcademy was created to provide a structured and beginner-friendly way for anyone interested in learning Java.
                  </p>
                </div>
              </motion.div>

              {/* Personal Learning Journey */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm flex flex-col gap-4"
              >
                <h4 className="text-md font-black text-white uppercase tracking-wider text-xs border-b border-zinc-800 pb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#FF0800] rounded-full" />
                  My Learning Journey
                </h4>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                  <p>
                    When I started learning programming, I also experienced moments where concepts felt confusing and difficult to understand. Many programming topics only became clearer when they were explained step by step with practical examples.
                  </p>
                  <p>
                    This experience inspired me to create ByteAcademy — a platform that explains Java concepts in a simple, structured way so that beginners can avoid feeling overwhelmed and can build confidence as they learn.
                  </p>
                </div>
              </motion.div>

              {/* Short Personal Message (Highlighted quote card) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950/60 border border-zinc-800 text-white shadow-md overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-[#FF0800]/20 font-serif text-8xl pointer-events-none select-none">
                  “
                </div>
                <p className="text-zinc-300 italic text-sm sm:text-base leading-relaxed relative z-10 font-medium">
                  "Programming is not about memorizing code. It is about understanding how things work, solving problems, and improving through practice."
                </p>
              </motion.div>

              {/* Personal Highlights (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Education */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF0800]/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#FF0800]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Education</h5>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Bachelor of Education in Computer Science
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Interests */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF0800]/10 flex items-center justify-center shrink-0">
                    <Laptop className="w-5 h-5 text-[#FF0800]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Interests</h5>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Software Engineering and Cybersecurity
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: Teaching Style */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF0800]/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-[#FF0800]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Teaching Style</h5>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Simple explanations, practical examples, and structured learning
                    </p>
                  </div>
                </motion.div>

                {/* Card 4: Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF0800]/10 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5 text-[#FF0800]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Mission</h5>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Helping beginners build a strong foundation in Java programming
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Final Encouraging Message */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-5 rounded-2xl bg-[#FF0800]/5 border border-[#FF0800]/10 text-center md:text-left"
              >
                <p className="text-sm font-semibold text-[#FF0800] mb-1">A Quick Note to Learners:</p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Whether you are completely new to programming or trying to strengthen your Java skills, ByteAcademy is designed to guide you step by step. Stay curious, practice consistently, and enjoy the journey of learning programming.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
