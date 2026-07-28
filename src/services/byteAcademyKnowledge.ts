/**
 * ByteAcademy AI Assistant - Backward Compatible Knowledge Base Bridge
 * Imports all domain knowledge from modular sub-files and exposes the unified KNOWLEDGE_BASE.
 */

import { platformInfo } from "./knowledge/platformInfo";
import { curriculumInfo } from "./knowledge/curriculumInfo";
import { pageInfo } from "./knowledge/pageInfo";
import { creatorInfo } from "./knowledge/creatorInfo";
import { featureInfo } from "./knowledge/featureInfo";
import { aiRulesInfo } from "./knowledge/aiRulesInfo";

// Reconstruct KNOWLEDGE_BASE for full backward compatibility
export const KNOWLEDGE_BASE = {
  platform: {
    name: platformInfo.name,
    tagline: platformInfo.tagline,
    description: platformInfo.description,
    mission: platformInfo.purpose,
    philosophy: [
      "Conceptual Grounding: Always explain the 'why' and 'how' behind compiler rules and JVM runtime memory before writing code.",
      "Analogies Over Abstract Syntax: Use clear, real-world physical analogies to ground code structures.",
      "Gradual Progression: Build complexity incrementally—moving step-by-step from raw syntax to structured control flow.",
      "Practice-First: Consolidate every conceptual block with interactive worksheets and quizzes."
    ]
  },
  
  about: {
    summary: pageInfo.about.purpose,
    targetAudience: platformInfo.targetUsers
  },

  tutor: {
    name: creatorInfo.name,
    role: creatorInfo.role,
    education: creatorInfo.education.program,
    bio: creatorInfo.bio
  },

  mentorship: {
    title: featureInfo.tutoringMentorship.name,
    description: featureInfo.tutoringMentorship.description,
    delivery: "Available as either face-to-face sessions in Zomba, Malawi (at the University of Malawi), or interactive online sessions worldwide.",
    features: [
      "Personalized 1-on-1 Tutoring with tutor Chimango Mughogho.",
      "Assignment Support: In-depth guidance explaining concepts rather than just providing copy-paste solutions.",
      "Detailed Homework Reviews to build professional coding habits.",
      "Comprehensive Exam Preparation for computer science courses.",
      "Direct WhatsApp support with the tutor for answers to programming roadblocks."
    ],
    enrollment: "Interested students can easily apply or inquire using the contact form on the Contact page."
  },

  downloads: {
    pageName: "Downloads Page",
    location: "Downloads Page on the website",
    description: "The dedicated hub where learners find curated setup tools, compilers, and cheat sheets.",
    curatedTools: [
      {
        name: "OpenJDK (Java Development Kit)",
        purpose: "Compiler and runtime required to run Java locally.",
        recommendation: "Eclipse Temurin OpenJDK 17 or 21 (LTS)."
      },
      {
        name: "Visual Studio Code (VS Code)",
        purpose: "A lightweight, fast, and modern code editor.",
        extensionPack: "Extension Pack for Java by Microsoft."
      }
    ]
  },

  curriculum: curriculumInfo.map(mod => ({
    moduleNumber: mod.moduleNumber,
    title: mod.title,
    description: mod.description,
    highlights: mod.lessons.map(l => `${l.title}: ${l.description}`)
  })),

  contact: {
    address: pageInfo.contact.contactChannels[3].replace("Physical Address: ", ""),
    email: "chimangomughogho22@gmail.com",
    purpose: "Direct submission of inquiries about premium 1-on-1 tutoring, assignment support, and feedback."
  },

  faqs: [
    {
      question: "Is ByteAcademy suitable for complete beginners?",
      answer: "Absolutely. ByteAcademy is custom-designed from the ground up for absolute beginners. We skip confusing academic jargon and instead explain ideas using visual analogies, diagrams, and gradual step-by-step conceptual progressions."
    },
    {
      question: "What is the Premium Monthly Mentorship?",
      answer: "Our mentorship is a premium monthly service offering intensive 1-on-1 coaching with tutor Chimango Mughogho. It includes personalized sessions, priority homework assistance, test/exam preparation, and a direct WhatsApp hotline."
    },
    {
      question: "Where can I find setup downloads and compilers?",
      answer: "You should visit the Downloads page on our website. There, we provide curated links and guides to install the OpenJDK (Java Development Kit) compiler and the VS Code text editor."
    }
  ],

  aiRules: {
    identity: aiRulesInfo.identity.roleName,
    rules: aiRulesInfo.coreDirectives.concat(aiRulesInfo.bannedBehaviors)
  }
};

/**
 * Returns a prompt-ready Markdown representation of ByteAcademy knowledge
 * to inject into the Gemini system instructions.
 */
export function getKnowledgeMarkdownContext(): string {
  let context = `--- BYTEACADEMY MASTER KNOWLEDGE BASE ---\n\n`;
  
  context += `1. PLATFORM IDENTITY & MISSION:\n`;
  context += `- Name: ${KNOWLEDGE_BASE.platform.name}\n`;
  context += `- Tagline: ${KNOWLEDGE_BASE.platform.tagline}\n`;
  context += `- Description: ${KNOWLEDGE_BASE.platform.description}\n`;
  context += `- Platform Mission: ${KNOWLEDGE_BASE.platform.mission}\n`;
  context += `- Core Pedagogical Principles:\n`;
  KNOWLEDGE_BASE.platform.philosophy.forEach(p => {
    context += `  * ${p}\n`;
  });
  
  context += `\n2. ABOUT BYTEACADEMY:\n`;
  context += `- ${KNOWLEDGE_BASE.about.summary}\n`;
  context += `- Target Audience: ${KNOWLEDGE_BASE.about.targetAudience}\n`;

  context += `\n3. TUTOR PROFILE:\n`;
  context += `- Name: ${KNOWLEDGE_BASE.tutor.name}\n`;
  context += `- Role: ${KNOWLEDGE_BASE.tutor.role}\n`;
  context += `- Education: ${KNOWLEDGE_BASE.tutor.education}\n`;
  context += `- Background: ${KNOWLEDGE_BASE.tutor.bio}\n`;

  context += `\n4. PREMIUM MONTHLY MENTORSHIP PROGRAM:\n`;
  context += `- Program Title: ${KNOWLEDGE_BASE.mentorship.title}\n`;
  context += `- Summary: ${KNOWLEDGE_BASE.mentorship.description}\n`;
  context += `- Delivery Modes: ${KNOWLEDGE_BASE.mentorship.delivery}\n`;
  context += `- Key Mentorship Features:\n`;
  KNOWLEDGE_BASE.mentorship.features.forEach(f => {
    context += `  * ${f}\n`;
  });
  context += `- Enrollment Guidelines: ${KNOWLEDGE_BASE.mentorship.enrollment}\n`;

  context += `\n5. CURATED DOWNLOADS & SYSTEM SETUP:\n`;
  context += `- Public Page Name: ${KNOWLEDGE_BASE.downloads.pageName}\n`;
  context += `- Location: ${KNOWLEDGE_BASE.downloads.location}\n`;
  context += `- Description: ${KNOWLEDGE_BASE.downloads.description}\n`;
  context += `- Featured Tools:\n`;
  KNOWLEDGE_BASE.downloads.curatedTools.forEach(tool => {
    context += `  * Tool Name: ${tool.name}\n`;
    context += `    - Purpose: ${tool.purpose}\n`;
    if (tool.recommendation) context += `    - Recommendation: ${tool.recommendation}\n`;
  });

  context += `\n6. COMPREHENSIVE 14-MODULE JAVA CURRICULUM:\n`;
  curriculumInfo.forEach(mod => {
    context += `- Module #${mod.moduleNumber}: ${mod.title} (${mod.difficulty})\n`;
    context += `  * Summary: ${mod.description}\n`;
    context += `  * Core Lessons:\n`;
    mod.lessons.forEach(l => {
      context += `    - ${l.title} (Slug: ${l.slug}): ${l.description}\n`;
    });
  });

  context += `\n7. CONTACT & GENERAL INQUIRIES:\n`;
  context += `- Tutor Physical Address: ${KNOWLEDGE_BASE.contact.address}\n`;
  context += `- Direct Email Contact: ${KNOWLEDGE_BASE.contact.email}\n`;
  context += `- Contact Form Purpose: ${KNOWLEDGE_BASE.contact.purpose}\n`;

  context += `\n8. FREQUENTLY ASKED QUESTIONS (FAQs):\n`;
  KNOWLEDGE_BASE.faqs.forEach((faq, idx) => {
    context += `FAQ #${idx + 1}: ${faq.question}\n`;
    context += `  Answer: ${faq.answer}\n`;
  });

  context += `\n9. ASSISTANT GUIDELINES & BEHAVIOR RULES:\n`;
  KNOWLEDGE_BASE.aiRules.rules.forEach(rule => {
    context += `- ${rule}\n`;
  });

  context += `\n------------------------------------\n`;

  return context;
}
