export const pageInfo = {
  homepage: {
    purpose: "The main portal introducing learners to ByteAcademy's visual, intuitive learning philosophy. It features the core value proposition, bottleneck breakdowns, learning pillars, and the new 'Meet the Creator' introduction section.",
    heroSection: {
      title: "Learn Java Through Understanding, Not Memorization",
      subtitle: "We replace confusing jargon with highly visual models, helping complete beginners build professional computer science foundations.",
      primaryCTA: "Start Learning (navigates to Learn Java Page)",
      secondaryCTA: "Explore Examples (navigates to Worked Examples Page)"
    },
    sections: [
      "Hero Header: Displays core value proposition and interactive navigation shortcuts.",
      "The Bottleneck Breakdown: Illustrates why traditional rote memorization fails students and how ByteAcademy's concept-first approach bridges that gap.",
      "Visual Learning Pillars: Explains the four core educational steps we follow: What is it, Why does it exist, How does it run in memory, and How to write it cleanly.",
      "Interactive Highlights: Bullet points showing key platform benefits like 100% free accessibility, hands-on console mini-projects, and visual checklists.",
      "Meet the Creator: Introduces creator Chimango Mughogho on the homepage, linking directly to the full About page.",
      "Mentorship Spotlight: Introduces the monthly 1-on-1 premium coaching by tutor Chimango Mughogho."
    ]
  },
  learnJava: {
    purpose: "The structured learning center that lists the sequential 14-module curriculum, acting as the primary hub for a student's educational progression.",
    structure: "Fourteen distinct modules numbered 1 through 14. Each module has a difficulty label (Beginner, Intermediate, or Advanced) and estimated study duration.",
    progression: "Students are advised to progress sequentially from Module 1 (Getting Started) up to Module 14 (Exercises & Projects) to build an unbreakable foundation in programming logic.",
    sections: [
      "Learning Roadmap Banner: Encourages gradual, consistent study habits.",
      "14-Module Grid: Dynamic, responsive layout displaying each module's number, title, difficulty, time commitment, conceptual description, and key lesson links.",
      "Mentorship Callout Banner: Invites users needing structured personal tutoring to join the premium mentorship program."
    ]
  },
  modules: {
    purpose: "Dedicated landing pages for each of the 14 modules, providing comprehensive learning objectives, detailed lists of specific lessons, and module-specific study resources.",
    sections: [
      "Module Objective Cards: Lists 4-5 core takeaways for that module.",
      "Sequential Lesson List: Direct pathways to the interactive lesson modules."
    ]
  },
  lessons: {
    purpose: "Interactive lecture sheets where students read actual core content. Lessons are packed with clear physical analogies, code blocks, checklists, and dynamic tools.",
    sections: [
      "Interactive Workspace & Coding Lab: Allows toggling visual state blocks or code blocks.",
      "Text-to-Speech (TTS) Lesson Reader: Built-in audio controller that reads the lesson text aloud to support auditory learning.",
      "Mistake-First Debugging Cards: Highlights exact compile/runtime errors, explaining how to debug them.",
      "Concept Consolidation: Practical exercises and mini quiz reviews at the end of lessons."
    ]
  },
  workedExamples: {
    purpose: "A dedicated database of worked programming questions, implementation codes, and step-by-step logic walks. This is a separate page from lesson exercises, containing exam-style programming questions followed by complete Java solutions.",
    organization: "Questions are grouped and filterable by difficulty: Beginner, Intermediate, and Advanced.",
    filteringOptions: {
      all: "Show all worked examples in the database.",
      beginner: "Show basic syntactic questions (e.g., calculations, console input, simple branches).",
      intermediate: "Show structural and algorithmic challenges (e.g., loops, methods, arrays, classes).",
      advanced: "Show complex OOP, generics, exceptions, and collection designs."
    },
    features: [
      "Search bar to instantly filter examples by keywords, tags, or concepts.",
      "Interactive code display tabs showing the problem description, Java solution code, and line-by-line logical reasoning.",
      "One-click copy button to copy solution code directly to clipboard."
    ]
  },
  downloads: {
    purpose: "The dedicated resource hub where learners find curated software installations, compiler links, and offline revision guides.",
    toolsFeatured: [
      "OpenJDK compiler (LTS versions like 17 or 21) with complete environment path configuration guidelines.",
      "Visual Studio Code text editor complete with Microsoft Java Extension Pack installation guidance.",
      "Handy printable syntax cheat sheets for offline revision."
    ]
  },
  aiAssistant: {
    purpose: "An integrated AI programming tutor designed to clarify Java concepts, resolve compiler errors, explain lesson blocks, and recommend modules. Accessible from any page on the site.",
    howToUse: [
      "Use the Floating AI Chatbot trigger button present on the bottom-right of every curriculum page for quick, context-aware assistance.",
      "Expand the chatbot to the Full-Page AI Assistant view (/bytecode-ai) for dedicated, large-canvas dialogue and detailed code analysis.",
      "Request line-by-line explanations of any active lesson content or ask for debugging advice on compiler error messages."
    ]
  },
  about: {
    purpose: "A page dedicated to describing the educational mission, teaching philosophy, and background of ByteAcademy and its creator.",
    pedagogicalValues: [
      "Analogy-Driven Learning: Replacing computer science jargon with intuitive, physical real-world metaphors.",
      "Zero Memorization: Training students' minds to master computational logic rather than brute-forcing syntax.",
      "Mistakes-First Debugging: Displaying common mistakes, memory hazards, and compiler pitfalls rather than only presenting ideal code.",
      "100% Free Access: Commitment to keeping core educational materials fully open and free for everyone."
    ],
    creatorSection: {
      heading: "Meet the Creator",
      content: "Details the personal story, learning journey, education at the University of Malawi, interests, and teaching philosophy of Chimango Mughogho."
    }
  },
  contact: {
    purpose: "A dedicated channel for sending feedback, asking curriculum questions, or applying for the premium monthly coaching program.",
    contactChannels: [
      "Official Form: Submits inquiries directly to the creator's inbox.",
      "Official Email: direct channel via chimangomughogho22@gmail.com",
      "Official Phone & WhatsApp Hotline: Direct communication link with the tutor.",
      "Physical Address: Chikwawa Road, Blantyre, Malawi."
    ],
    workingHours: "Monday through Saturday (8:00 AM to 6:00 PM Central African Time - CAT)."
  }
};
