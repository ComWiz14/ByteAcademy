import { platformInfo } from "./platformInfo";
import { curriculumInfo, getConceptMap } from "./curriculumInfo";
import { pageInfo } from "./pageInfo";
import { creatorInfo } from "./creatorInfo";
import { featureInfo } from "./featureInfo";
import { aiRulesInfo } from "./aiRulesInfo";

export {
  platformInfo,
  curriculumInfo,
  getConceptMap,
  pageInfo,
  creatorInfo,
  featureInfo,
  aiRulesInfo
};

/**
 * Aggregates all modular knowledge bases and compiles them into a unified system instruction string.
 * Supports injecting active page/lesson context dynamically to ensure context-aware AI conversations.
 * 
 * @param currentContext Optional description of the user's active page or lesson context
 * @returns The fully formatted system instruction for Gemini
 */
export function getFullSystemInstruction(currentContext?: string): string {
  // Build a concise curriculum list
  const formattedCurriculum = curriculumInfo.map(mod => {
    const lessonsList = mod.lessons.map(les => `   - ${les.title} (Slug: ${les.slug}): ${les.description}`).join("\n");
    return `[Module ${mod.moduleNumber}] ${mod.title} (${mod.difficulty})\n  Description: ${mod.description}\n  Lessons:\n${lessonsList}`;
  }).join("\n\n");

  // Format main features
  const formattedFeatures = Object.entries(featureInfo).map(([key, value]) => {
    return `- **${value.name}**: ${value.description}`;
  }).join("\n");

  // Format pages overview
  const formattedPages = Object.entries(pageInfo).map(([key, value]) => {
    const sectionsStr = 'sections' in value ? ` Sections: ${value.sections.join(", ")}` : '';
    return `- **${key.toUpperCase()}**: ${value.purpose}.${sectionsStr}`;
  }).join("\n");

  // Assemble the ultimate knowledge instruction block
  let instruction = `You are the ${aiRulesInfo.identity.roleName} (${aiRulesInfo.identity.tagline}).
Your personality is ${aiRulesInfo.identity.personality}

=========================================
CORE AI RULES & IDENTITY INSTRUCTIONS:
=========================================
${aiRulesInfo.coreDirectives.map((d, i) => `${i + 1}. ${d}`).join("\n")}

BANNED BEHAVIORS:
${aiRulesInfo.bannedBehaviors.map(b => `- ${b}`).join("\n")}

=========================================
1. PLATFORM KNOWLEDGE:
=========================================
- **Name**: ${platformInfo.name}
- **Tagline**: ${platformInfo.tagline}
- **Description**: ${platformInfo.description}
- **Purpose**: ${platformInfo.purpose}
- **Target Audience**: ${platformInfo.targetUsers}
- **Overall Vision**: ${platformInfo.overallVision}
- **Technology Stack**: ${platformInfo.technologyUsed}

=========================================
2. FEATURES KNOWLEDGE:
=========================================
${formattedFeatures}

=========================================
3. PAGES STRUCTURE:
=========================================
${formattedPages}

=========================================
4. CREATOR PROFILE (VERIFIED):
=========================================
- **Name**: ${creatorInfo.name}
- **Role**: ${creatorInfo.role}
- **Education**: ${creatorInfo.education.program} at ${creatorInfo.education.institution} (${creatorInfo.education.campus} Campus, ${creatorInfo.education.location})
- **Residence**: ${creatorInfo.currentResidence}
- **Interests**: ${creatorInfo.interests.join(", ")}
- **Bio**: ${creatorInfo.bio}
- **Creator's Philosophy**: "${creatorInfo.personalMessage}"

=========================================
5. CURRICULUM KNOWLEDGE (13 MODULES):
=========================================
${formattedCurriculum}

=========================================
RECOMMENDED RESPONSE STRUCTURE:
=========================================
- **Greeting**: ${aiRulesInfo.responseStructure.greeting}
- **Analogy**: ${aiRulesInfo.responseStructure.conceptualExplanation}
- **Curriculum Match**: ${aiRulesInfo.responseStructure.curriculumReference}
- **Clean Code Example**: ${aiRulesInfo.responseStructure.codeExample}
- **Common Mistakes Alert**: ${aiRulesInfo.responseStructure.warningOrCommonMistake}

=========================================
CURRENT LIVE CONTEXT:
=========================================
`;

  if (currentContext) {
    instruction += `The student is currently active on: ${currentContext}\nUse this specific context to formulate your response, connect concepts directly to what is on their screen, or help them solve issues related to this active area.`;
  } else {
    instruction += `The student is currently browsing the platform. Ask them what they are working on, or recommend starting with Module 1!`;
  }

  return instruction;
}
