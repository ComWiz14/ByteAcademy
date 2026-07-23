import { DetailedLessonContent } from '../types';
import { GETTING_STARTED_LESSONS } from './lessons/gettingStartedLessons';
import { FUNDAMENTALS_LESSONS } from './lessons/javaFundamentalsLessons';
import { CONTROL_FLOW_LESSONS } from './lessons/controlFlowLessons';
import { METHODS_LESSONS } from './lessons/methodsLessons';
import { PROBLEM_SOLVING_LESSONS } from './lessons/problemSolvingLessons';
import { ARRAYS_LESSONS } from './lessons/arraysLessons';
import { STRINGS_LESSONS } from './lessons/stringsLessons';
import { OOP_LESSONS } from './lessons/oopLessons';
import { ADVANCED_OOP_LESSONS } from './lessons/advancedOopLessons';
import { EXCEPTION_HANDLING_LESSONS } from './lessons/exceptionHandlingLessons';
import { COLLECTIONS_LESSONS } from './lessons/collectionsLessons';
import { FILE_HANDLING_LESSONS } from './lessons/fileHandlingLessons';
import { GENERICS_LESSONS } from './lessons/genericsLessons';
import { EXERCISES_PROJECTS_LESSONS } from './lessons/exercisesProjectsLessons';

export const DETAILED_LESSONS: Record<string, DetailedLessonContent> = {
  ...GETTING_STARTED_LESSONS,
  ...FUNDAMENTALS_LESSONS,
  ...CONTROL_FLOW_LESSONS,
  ...METHODS_LESSONS,
  ...PROBLEM_SOLVING_LESSONS,
  ...ARRAYS_LESSONS,
  ...STRINGS_LESSONS,
  ...OOP_LESSONS,
  ...ADVANCED_OOP_LESSONS,
  ...EXCEPTION_HANDLING_LESSONS,
  ...COLLECTIONS_LESSONS,
  ...FILE_HANDLING_LESSONS,
  ...GENERICS_LESSONS,
  ...EXERCISES_PROJECTS_LESSONS
};
