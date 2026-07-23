export interface TopicItem {
  id: string;
  title: string;
  description: string;
  details: string; // Markdown or detailed explanation text
  codeExample?: string;
  codeExplanation?: string;
  commonMistake?: {
    code: string;
    explanation: string;
    fix: string;
  };
  exercise?: {
    question: string;
    starterCode: string;
    solution: string;
  };
}

export interface RoadmapStep {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  topics: string[];
}

export interface TutoringTier {
  name: string;
  price: string;
  frequency: string;
  features: string[];
}

export interface Lesson {
  title: string;
  slug: string;
  description: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ModuleData {
  number: number;
  slug: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: string[];
  lessons: Lesson[];
}

// Detailed Lesson Content Types
export type CalloutType = 'tip' | 'important' | 'warning' | 'remember' | 'did_you_know';

export interface TerminologyItem {
  keyword: string;
  definition: string;
  explanation: string;
}

export interface CodeExampleData {
  title?: string;
  language: string;
  code: string;
  explanation: string;
}

export interface VisualDiagramData {
  type: 'array' | 'memory' | 'object_relation' | 'class_diagram' | 'flow' | 'comparison_table';
  title: string;
  description: string;
  elements: any; // Component-specific configuration parameters
}

export interface MistakeItem {
  mistake: string;
  whyItHappens: string;
  howToAvoid: string;
  codeSnippet?: {
    bad: string;
    good: string;
  };
}

export interface PracticeExerciseData {
  title: string;
  tasks: string[];
}

export interface DetailedLessonContent {
  slug: string;
  title: string;
  moduleSlug: string;
  moduleName: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  introduction: string;
  whyThisTopicMatters: {
    whyItExists: string;
    problemSolved: string;
  };
  mainExplanation: Array<{
    type: 'paragraph' | 'bullet_list' | 'callout' | 'terminology_card' | 'info_card';
    title?: string;
    text?: string;
    items?: string[];
    calloutType?: CalloutType;
    terminology?: TerminologyItem;
  }>;
  codeExamples: CodeExampleData[];
  visualLearning: VisualDiagramData[];
  commonMistakes: MistakeItem[];
  practiceExercise: PracticeExerciseData;
  summary: string[];
}

export interface JavaExample {
  id: string;
  title: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  topic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  description: string;
  code: string;
  explanation: string;
}


