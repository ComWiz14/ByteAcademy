import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Terminal,
  Settings,
  ArrowRight,
  Laptop,
  Cpu,
  Package,
  FileText,
  Coffee
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

export default function Downloads() {
  const [activeOS, setActiveOS] = useState<'win' | 'mac' | 'lin'>('win');

  const tools = [
    {
      id: 'jdk',
      name: 'Java Development Kit (JDK 21 LTS)',
      icon: <Cpu className="w-6 h-6 text-[#FF0800]" />,
      desc: 'The official software development environment used to compile, document, and run Java applications. It includes the Java Virtual Machine (JVM) and the essential compiler (javac).',
      whyUse: 'Absolute requirement. You cannot write, compile, or execute any Java software on your computer without the JDK installed.',
      downloadLink: 'https://adoptium.net/temurin/releases/?version=21',
      guideId: 'os-setup-section'
    },
    {
      id: 'vscode',
      name: 'Visual Studio Code',
      icon: <Laptop className="w-6 h-6 text-[#FF0800]" />,
      desc: 'A lightweight, ultra-fast, and open-source code editor developed by Microsoft. It features code completion, visual debuggers, and an integrated terminal.',
      whyUse: 'Highly recommended for beginners. It starts instantly, consumes minimal RAM, and integrates seamlessly with terminal compile keys.',
      downloadLink: 'https://code.visualstudio.com/Download',
      guideId: 'vscode-guide-section'
    },
    {
      id: 'java-pack',
      name: 'Java Extension Pack',
      icon: <Package className="w-6 h-6 text-[#FF0800]" />,
      desc: 'An official curated collection of extensions by Microsoft for VS Code that equips your editor with code completion (IntelliSense), debugging, project management, and test tools.',
      whyUse: 'Turns VS Code from a raw text editor into a fully functional, smart Java IDE with automatic error underlines and instant run keys.',
      downloadLink: 'https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack',
      guideId: 'vscode-guide-section'
    },
    {
      id: 'notepad',
      name: 'Notepad++',
      icon: <FileText className="w-6 h-6 text-[#FF0800]" />,
      desc: 'A super lightweight, free, open-source tabbed text editor designed exclusively for Windows. It provides syntax highlighting for over 80 languages with absolute minimum resource usage.',
      whyUse: 'Perfect for pure beginners who want to learn how compilation works by compiling files from a raw, automation-free text environment.',
      downloadLink: 'https://notepad-plus-plus.org/downloads/',
      guideId: 'os-setup-section'
    },
    {
      id: 'intellij',
      name: 'IntelliJ IDEA Community',
      icon: <Settings className="w-6 h-6 text-[#FF0800]" />,
      desc: 'The premier heavy-duty Integrated Development Environment (IDE) built by JetBrains. It features deep static code analysis, structural refactoring, and advanced build automations.',
      whyUse: 'The industry-standard platform for enterprise developers. Highly recommended once you transition into larger multi-class packages.',
      downloadLink: 'https://www.jetbrains.com/idea/download/',
      guideId: 'os-setup-section'
    }
  ];

  const osSteps = {
    win: [
      {
        title: 'Download JDK installer',
        desc: 'Visit Adoptium.net or Oracle and download the **JDK 21 x64 Installer** executable (.exe) for Windows.'
      },
      {
        title: 'Run the Executable',
        desc: 'Launch the setup wizard. By default, Temurin OpenJDK installs inside your local `C:\\Program Files\\Eclipse Adoptium`.'
      },
      {
        title: 'Configure Environmental PATH',
        desc: 'Search "Environmental Variables" in Windows. Add `C:\\Program Files\\Eclipse Adoptium\\jdk-21...\\bin` to your System `Path` variable list.'
      }
    ],
    mac: [
      {
        title: 'Download macOS JDK pkg',
        desc: 'Select the **JDK 21 ARM64 pkg** installer (for Apple Silicon M1/M2/M3) or x64 DMG (for Intel processors).'
      },
      {
        title: 'Execute Installation',
        desc: 'Double-click the downloaded `.pkg` installer. Authorize macOS permissions to write utilities to standard `/Library/Java/JavaVirtualMachines/`.'
      },
      {
        title: 'Configure zsh profile path',
        desc: 'In Terminal, add the java home script by running: `echo "export JAVA_HOME=\$(/usr/libexec/java_home)" >> ~/.zshrc`.'
      }
    ],
    lin: [
      {
        title: 'Install via apt package manager',
        desc: 'On Linux Ubuntu or Debian, update package definitions: `sudo apt update`.'
      },
      {
        title: 'Select OpenJDK stable',
        desc: 'Download the complete OpenJDK build version 21 package by typing: `sudo apt install openjdk-21-jdk`.'
      },
      {
        title: 'Verify installation',
        desc: 'Confirm the command line references are operating correctly by checking your build using `java -version`.'
      }
    ]
  };

  const verifyCommands = `$ java -version
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment (build 21.0.2+13-LTS)
OpenJDK 64-Bit Server VM (build 21.0.2+13-LTS, mixed mode, sharing)`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* 1. Header welcome */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF0800]/10 text-[#FF0800] text-xs font-bold uppercase tracking-wider mb-2">
            <Download className="w-4 h-4" />
            Software Arsenal
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-none">
            Download Center
          </h1>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl leading-relaxed">
            Get the exact software tools, compilers, and text editors used by professional Java engineers. Learn why you need them and how to configure them on your operating system.
          </p>
        </div>

        {/* 2. PREMIUM SOFTWARE CARDS DIRECTORY */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-3">
            <div className="w-1.5 h-5 bg-[#FF0800] rounded-full" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-[#FF0800]" />
              Required & Recommended Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="p-6 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Upper Body */}
                <div className="flex flex-col gap-4">
                  {/* Tool Title Block */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {tool.name}
                      </h3>
                      <span className="inline-flex items-center text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                        Verified Secure Official Download
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {tool.desc}
                  </p>

                  {/* Why Use Box */}
                  <div className="p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800 text-[11px] leading-relaxed text-zinc-500">
                    <strong className="text-zinc-300 block mb-0.5 uppercase tracking-wider text-[9px]">Why you might use it:</strong>
                    {tool.whyUse}
                  </div>
                </div>

                {/* Lower Action buttons */}
                <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-zinc-800/60">
                  <a
                    href={tool.downloadLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-4 bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer text-center"
                  >
                    <Download className="w-4 h-4" />
                    <span>Get Official</span>
                  </a>
                  <button
                    onClick={() => scrollToSection(tool.guideId)}
                    className="flex items-center justify-center gap-1.5 py-3 px-4 bg-zinc-850 hover:bg-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 cursor-pointer text-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Read Guide</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LOCAL ENVIRONMENT COMPILATION OS SETUP */}
        <div id="os-setup-section" className="mb-20 pt-10 border-t border-zinc-800">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-lg font-black text-white uppercase tracking-wider text-xs">
              OS-Specific JDK Configuration Instructions
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Select your operating system and execute the clean, step-by-step setup guides to configure variables.
            </p>
          </div>

          {/* OS Selector Tabs */}
          <div className="flex justify-center border-b border-zinc-800 mb-8 max-w-sm mx-auto md:mx-0">
            {[
              { id: 'win', label: 'Windows OS' },
              { id: 'mac', label: 'macOS Apple/Intel' },
              { id: 'lin', label: 'Linux Debian' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveOS(tab.id as 'win' | 'mac' | 'lin')}
                className={`flex-1 text-center pb-3 text-xs font-bold uppercase tracking-wider transition-all relative cursor-pointer ${
                  activeOS === tab.id
                    ? 'text-[#FF0800]'
                    : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {tab.label}
                {activeOS === tab.id && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF0800] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* OS Walkthrough Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {osSteps[activeOS].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-sm flex flex-col gap-3 relative overflow-hidden"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF0800]/10 text-[#FF0800] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1.5 leading-snug text-xs">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{
                    __html: step.desc.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
                                      .replace(/`([^`]+)`/g, '<code class="bg-zinc-800 text-[#FF0800] px-1 py-0.5 rounded font-mono text-[10px]">$1</code>')
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Verification Command Shell */}
          <div className="bg-zinc-950/25 border border-zinc-800 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#FF0800]" />
                <h3 className="font-bold text-white text-xs uppercase tracking-wider">
                  Verifying Installation Console
                </h3>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Verifiable Commands
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Open your local OS Terminal or Command Prompt (cmd) and run the standard check. If configured properly, your shell will return the active JDK version:
            </p>
            <CodeBlock code={verifyCommands} language="bash" showLineNumbers={false} />
          </div>
        </div>

        {/* 4. VISUAL STUDIO CODE CONFIGURATION GUIDE */}
        <div id="vscode-guide-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-zinc-800">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-black text-[#FF0800] uppercase tracking-wider">Editor Tuning</span>
              <h3 className="text-2xl font-black text-white mt-1">Configuring VS Code for Java</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                While write-ups can be created in simple file pads, utilizing Microsoft VS Code installs rich compiler integrations, diagnostic warnings, instant run buttons, and smart auto-completions to avoid syntax traps.
              </p>
            </div>

            <ul className="flex flex-col gap-3.5 text-xs text-zinc-400">
              {[
                { title: 'Download & Install VS Code', desc: 'Visit code.visualstudio.com, fetch the latest package for your machine, and run the wizard.' },
                { title: 'Add the Java Extension Pack', desc: 'Click the Extension sidebar icon on the left (or press Ctrl+Shift+X), search for "Extension Pack for Java" by Microsoft, and trigger the install.' },
                { title: 'Launch Workspace folder', desc: 'Create a local directory folder named "ByteWorkspace" and open it in VS Code to unlock structural compilation paths.' }
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white font-bold">{step.title}</strong>: {step.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#0B0B0F] border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden font-mono text-xs text-zinc-400 select-none">
            <div className="absolute top-2 right-2 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-[#FF0800] border-b border-zinc-800 pb-2">
              <Settings className="w-4.5 h-4.5" />
              <span className="font-bold text-[9px] uppercase tracking-wider">VS Code Java Terminal</span>
            </div>
            <div className="flex flex-col gap-2 leading-relaxed text-[11px]">
              <div>
                <span className="text-zinc-600">$ cd ByteWorkspace</span>
              </div>
              <div>
                <span className="text-zinc-600">$ ls</span>
                <p className="text-emerald-500 font-bold mt-0.5">HelloWorld.java</p>
              </div>
              <div>
                <span className="text-zinc-600">$ javac HelloWorld.java</span>
              </div>
              <div>
                <span className="text-zinc-600">$ java HelloWorld</span>
                <p className="text-zinc-200 font-bold mt-0.5">&gt; Hello, World! Compiled successfully.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
