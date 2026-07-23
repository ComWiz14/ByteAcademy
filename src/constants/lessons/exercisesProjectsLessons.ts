import { DetailedLessonContent } from '../../types';

export interface BeginnerExercise {
  id: string;
  title: string;
  description: string;
}

export interface IntermediateChallenge {
  id: string;
  title: string;
  description: string;
}

export interface AdvancedChallenge {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  difficulty: string;
  description: string;
  features: string[];
}

export const BEGINNER_EXERCISES_DATA: BeginnerExercise[] = [
  { id: 'beg-01', title: 'Hello World Variables', description: 'Declare two integer variables, assign them arbitrary numbers, and display their values on the console.' },
  { id: 'beg-02', title: 'Interactive Greeting', description: 'Create a program that prompts the user for their name via Scanner and outputs a warm personal greeting.' },
  { id: 'beg-03', title: 'Simple Sum Reader', description: 'Read two floating-point numbers from console inputs and display their mathematical sum.' },
  { id: 'beg-04', title: 'Variable Swapper', description: 'Swap the values of two variables in-place without declaring any third helper variable.' },
  { id: 'beg-05', title: 'Even or Odd Validator', description: 'Take an integer input and print whether it is even or odd using the modulo (%) operator.' },
  { id: 'beg-06', title: 'Maximum of Three', description: 'Find and print the largest of three numbers entered by the user using conditional blocks.' },
  { id: 'beg-07', title: 'Centurial Number Sequence', description: 'Print all integers from 1 to 100 on a single line with space delimiters using a for loop.' },
  { id: 'beg-08', title: 'Multiplication Matrix Row', description: 'Display the multiplication table (1 to 12) for any number entered by the user.' },
  { id: 'beg-09', title: 'Factorial Product', description: 'Calculate the factorial of a user-specified integer N using a while loop.' },
  { id: 'beg-10', title: 'Int Reverse Order', description: 'Take an integer (e.g. 12345) and print its digits in reverse order (54321).' },
  { id: 'beg-11', title: 'Palindrome Int Checker', description: 'Check if an entered integer reads the same forwards and backwards (e.g., 121).' },
  { id: 'beg-12', title: 'Prime Number Validator', description: 'Determine whether a given number is prime by testing divisors up to its square root.' },
  { id: 'beg-13', title: 'Digital Count Analyzer', description: 'Count and print the number of individual digits in a user-provided integer.' },
  { id: 'beg-14', title: 'Even Aggregate Solver', description: 'Prompt for an integer N, then calculate and print the sum of all even numbers from 1 to N.' },
  { id: 'beg-15', title: 'Fibonacci Sequence Series', description: 'Output the first N numbers of the Fibonacci sequence, where N is entered by the user.' },
  { id: 'beg-16', title: 'Static Array Renderer', description: 'Store five arbitrary integers in an array and print each element with its index.' },
  { id: 'beg-17', title: 'Peak Element Finder', description: 'Iterate through an array of integers to locate and print the largest value.' },
  { id: 'beg-18', title: 'Minimum Element Finder', description: 'Iterate through an array of integers to find and print the smallest value.' },
  { id: 'beg-19', title: 'Array Average Solver', description: 'Calculate the mathematical average of all elements inside an array of doubles.' },
  { id: 'beg-20', title: 'Array Element Reverser', description: 'Reverse the order of elements in an array in-place using a single swap loop.' },
  { id: 'beg-21', title: 'Array Even Counter', description: 'Write a routine that iterates over an integer array and counts how many even values exist.' },
  { id: 'beg-22', title: 'Positive/Negative Counter', description: 'Traverse an array of integers and count the number of positive, negative, and zero values.' },
  { id: 'beg-23', title: 'Array Linear Locator', description: 'Read a target value from the user and search for its index position within a predefined array.' },
  { id: 'beg-24', title: 'Duplicate Value Scanner', description: 'Search an array of integers for duplicate values and print them.' },
  { id: 'beg-25', title: 'Right-Angled Star Grid', description: 'Print a right-angled triangle pattern of stars (*) with a height entered by the user.' },
  { id: 'beg-26', title: 'Centered Pyramid Star Grid', description: 'Print a centered pyramid pattern of stars (*) with a height entered by the user.' },
  { id: 'beg-27', title: 'Vowel Count Scanner', description: 'Count the total number of vowels (A, E, I, O, U) in an entered string.' },
  { id: 'beg-28', title: 'String Inverter', description: 'Take a string input from the user and print its characters in reverse order.' },
  { id: 'beg-29', title: 'Palindrome String Validator', description: 'Determine whether an entered word is a palindrome (case-insensitive).' },
  { id: 'beg-30', title: 'Basic Menu Calculator', description: 'Build a menu-driven program that performs addition, subtraction, multiplication, or division based on user selection.' }
];

export const INTERMEDIATE_CHALLENGES_DATA: IntermediateChallenge[] = [
  { id: 'int-01', title: 'Student Grade Reporter', description: 'Take student names and marks for 5 subjects, calculate total percentage, and print a formatted grade report card.' },
  { id: 'int-02', title: 'ATM Banking Menu', description: 'Implement an interactive console menu with deposit, withdraw, and check balance options. Protect against negative overdraft transactions.' },
  { id: 'int-03', title: 'Multiple Choice Java Quiz', description: 'Develop a terminal quiz with 5 multiple choice questions. Track scores and display correct answers at the end.' },
  { id: 'int-04', title: 'ArrayList Contact Registry', description: 'Implement a personal phone directory that supports adding, searching for, and deleting contacts.' },
  { id: 'int-05', title: 'ArrayList Student Database', description: 'Store student profiles in an ArrayList and support listings filtered by enrollment year or major.' },
  { id: 'int-06', title: 'Missing Student Exception', description: 'Build an ID lookup function that queries a list of student records and throws an Exception if the target ID is missing.' },
  { id: 'int-07', title: 'Sorted Marks Array', description: 'Read a list of exam scores from the console, store them in an array, and sort them in descending order.' },
  { id: 'int-08', title: 'Static Geometry Utility', description: 'Create a custom class with static overloaded methods to calculate area and perimeter for circles, rectangles, and triangles.' },
  { id: 'int-09', title: 'Book Object Class', description: 'Design a Book class with title, author, ISBN, and availability states, including custom loan/return methods.' },
  { id: 'int-10', title: 'Student GPA Tracker', description: 'Implement a Student class containing grades, with custom getter/setter validations and a method to calculate dynamic GPA.' },
  { id: 'int-11', title: 'Vehicle Inheritance Grid', description: 'Model a Vehicle base class and derive Car, Truck, and Motorcycle subclasses with custom speed and fuel capacities.' },
  { id: 'int-12', title: 'Polymorphic Employee Pay', description: 'Create an Employee base class with a calculatePay() method, and override it in FullTime and PartTime subclasses.' },
  { id: 'int-13', title: 'Input Mismatch Interceptor', description: 'Write a program that reads integers from console and catches InputMismatchException to handle invalid entries.' },
  { id: 'int-14', title: 'CSV Coordinate Reader', description: 'Write a program that opens, reads, and parses a comma-separated coordinate text file and outputs coordinate maps.' },
  { id: 'int-15', title: 'Timestamped Journal Writer', description: 'Develop a logger that appends user journal notes with precise current dates/timestamps to a external text file.' },
  { id: 'int-16', title: 'HashMap Library Locator', description: 'Design a book-tracking catalog using a HashMap to associate book titles with specific library shelf locations.' },
  { id: 'int-17', title: 'Age Boundary Custom Exception', description: 'Create an InvalidAgeException and throw it when a user enters an age less than 0 or greater than 150.' },
  { id: 'int-18', title: 'Word Frequency Map', description: 'Write a helper program that takes a sentence from user input and counts the frequency of each unique word.' },
  { id: 'int-19', title: '3x3 Matrix Calculator', description: 'Read two 3x3 matrices of integers from console and output their mathematical sum as a formatted grid.' },
  { id: 'int-20', title: 'Words-in-Place Inverter', description: 'Write a program that reverses the letters of each word in a sentence while keeping the overall word positions constant.' },
  { id: 'int-21', title: 'Shopping Cart Invoice', description: 'Create an Item class and a Cart class that aggregates items and calculates subtotal, taxes (8%), and final invoice total.' },
  { id: 'int-22', title: 'Abstract Shape Renderer', description: 'Define an abstract Shape class with draw() and calculateArea() methods, implementing them in Circle and Rectangle classes.' },
  { id: 'int-23', title: 'Payment Processor Interfaces', description: 'Define a PaymentProcessor interface with process(double) and implement it across CreditCard and PayPal classes.' },
  { id: 'int-24', title: 'Document Text Statistics', description: 'Read a local plain text file and count the total number of words, sentences, and non-space characters.' },
  { id: 'int-25', title: 'Secure Password Builder', description: 'Build an interactive password generator that takes length and criteria (numbers, symbols) to compile a randomized sequence.' }
];

export const ADVANCED_CHALLENGES_DATA: AdvancedChallenge[] = [
  { id: 'adv-01', title: 'Full ATM Simulation System', description: 'Model an ATM requiring login credentials. Track transaction histories, process deposits/withdrawals across savings and checking accounts, and save final balances to ledger files.' },
  { id: 'adv-02', title: 'Fine-Calculating Library Manager', description: 'Build a book-lending registry to manage books and members. Track loan/checkout dates and calculate daily late fines using Java Time APIs.' },
  { id: 'adv-03', title: 'Warehouse Stock Control Tracker', description: 'Create a product inventory tracker using HashMap. Throw indicators and alerts for low stock levels and record supplier details.' },
  { id: 'adv-04', title: 'Table-Based POS Restaurant Manager', description: 'Model dining tables. Build menus categorized by courses, compute orders with custom tips/taxes, and output formatted receipt files.' },
  { id: 'adv-05', title: 'Ward Patient Coordination System', description: 'Track patient check-ins, symptoms, and allergen profiles. Assign beds across clinical wards, link patients to duty doctor objects, and log views.' },
  { id: 'adv-06', title: 'Corporate HR Hierarchy & Payroll', description: 'Maintain a company employee roster. Implement hierarchical classes (Manager, FullTime, Contractor), calculate overtime rates, and output paychecks.' },
  { id: 'adv-07', title: 'Floor Reservation Collision Checker', description: 'Maintain a hotel floor booking grid. Check reservation dates to prevent overlapping booking collisions, and calculate stay quotes.' },
  { id: 'adv-08', title: 'Barcode Retail Cash Register', description: 'Build a terminal register simulating product barcode scanning. Coordinate shopping carts, apply promo codes, and output receipt text files.' },
  { id: 'adv-09', title: 'Secure Credential Hash Directory', description: 'Create an interactive login console. Validate email formats, enforce password complexity rules, and encrypt credentials using basic character shifting.' },
  { id: 'adv-10', title: 'CommandLine Social Media Simulator', description: 'Build a command-driven terminal network. Users can create profiles, follow accounts, post status updates, and search feeds.' },
  { id: 'adv-11', title: 'Virtual E-Commerce Terminal Storefront', description: 'Build a storefront with product catalogs, shopping carts, checkout billing forms, shipping calculators, and receipt exports.' },
  { id: 'adv-12', title: 'Registrar Course Selection Console', description: 'Manage student registries and catalogs. Support student registration for courses, enforcing prerequisite validations and credit hour limits.' },
  { id: 'adv-13', title: 'Fleet Car Rental Agreement Tracker', description: 'Model vehicle rentals (SUVs, Sedans, Trucks). Log agreement dates, calculate base and mileage rates, and track rental states.' },
  { id: 'adv-14', title: 'Personal Budgeting Analyzer & Alerts', description: 'Track income and expense logs. Category aggregates with Enum groupings, and warn if a budget limit is breached.' },
  { id: 'adv-15', title: 'Shared Chat Hub Command Shell', description: 'Create an event-driven terminal communications program. Simulate multiple users connecting, joining channels, and sending private direct messages.' },
  { id: 'adv-16', title: 'Kanban Task Priority Queue', description: 'Design a task board. Prioritize tasks (Low, Medium, High) with statuses (Todo, Doing, Done) and assign items to users.' },
  { id: 'adv-17', title: 'Movie Theater Seating Chart Grid', description: 'Model theater rows and seats using a 2D array of booleans. Allow users to select seats, check availability, and process bookings.' },
  { id: 'adv-18', title: 'Macro Nutrition & Fitness Log', description: 'Implement a fitness diary to log physical exercises (sets, reps) and meal macros. Generate daily calorie balances.' },
  { id: 'adv-19', title: 'CRM Pipeline Deal Flow Tracker', description: 'Manage business contacts and sales leads. Record deal milestones, track meeting notes, and analyze lead conversion rates.' },
  { id: 'adv-20', title: 'Unix Command-Line Terminal Mock', description: 'Build a program that simulates a Unix terminal. Implement shell mock commands like ls, cd, cat, mkdir, and exit.' }
];

export const PORTFOLIO_PROJECTS_DATA: PortfolioProject[] = [
  {
    id: 'port-01',
    title: 'Student Lifecycle Management System',
    difficulty: 'Intermediate to Advanced',
    description: 'A comprehensive school database system to manage student lifecycles. It registers students, tracks course enrollments, logs marks, calculates GPA, and manages tuition billing. This project challenges you to use structured object relationships and persistent data storage.',
    features: [
      'Unique 5-digit ID generator',
      'Course enrollment roster with max capacities',
      'Grade card generation with GPAs',
      'Text file persistence for saving/loading system state'
    ]
  },
  {
    id: 'port-02',
    title: 'Professional ATM Banking System',
    difficulty: 'Advanced',
    description: 'A high-integrity financial ledger system designed to simulate modern retail banking. It supports multiple accounts, transfer pipelines, credit structures, and transaction audits. This project focuses heavily on business rule validation and custom exception handling.',
    features: [
      'Account authentication with PIN',
      'Checking, savings, and loan account calculations',
      'Overdraft protection throwing custom exceptions',
      'Persistent statement ledger exporting'
    ]
  },
  {
    id: 'port-03',
    title: 'Clinical Hospital Operations Portal',
    difficulty: 'Advanced',
    description: 'A secure clinical tracking platform built to manage hospital operations. It links patient records, symptoms, and allergen alerts to active doctors on duty while coordinating ward resources. It requires deep knowledge of object relationships and audit logging.',
    features: [
      'Patient clinical records with allergen profiles',
      'Ward bed allocation maps',
      'Consult queues (using LinkedList or Queue structures)',
      'Access audit logger with timestamps'
    ]
  },
  {
    id: 'port-04',
    title: 'Digital Library Catalog & Reservation',
    difficulty: 'Intermediate',
    description: 'An organizational catalogue system that indexes physical and digital materials for a community library. It tracks lending states, member accounts, borrow limits, and dates. This is an excellent project to practice Java inheritance, interfaces, and the Java Time APIs.',
    features: [
      'Hierarchical book, magazine, and DVD items',
      'Member checkout eligibility checking',
      'Late fee calculation using LocalDate',
      'Search indices by ISBN or author'
    ]
  },
  {
    id: 'port-05',
    title: 'Boutique Hotel Allocation Manager',
    difficulty: 'Advanced',
    description: 'A booking agent and floor layout manager for a multi-floor boutique hotel. It processes guest reservations across different room tiers, computes seasonal rates, and coordinates checkout billing. It utilizes 2D arrays for visual layout representation and date validation algorithms.',
    features: [
      'Multi-floor grid maps for room allocation',
      'Conflict-free reservation date checker',
      'Room pricing engine (base rates + amenities)',
      'Invoice generation with taxes'
    ]
  },
  {
    id: 'port-06',
    title: 'Warehouse Stock Controller',
    difficulty: 'Intermediate',
    description: 'A backend warehouse coordinator designed to track retail merchandise. It tracks stock levels, monitors suppliers, analyzes asset values, and warns when stock drops below threshold boundaries. It serves as an excellent demonstration of key-value collections and CSV processing.',
    features: [
      'Dynamic lookup of items by unique codes',
      'Automatic restocking recommendation flags',
      'Warehouse total valuation logs',
      'CSV import/export of stock configurations'
    ]
  },
  {
    id: 'port-07',
    title: 'Personal Budget Analyzer',
    difficulty: 'Intermediate',
    description: 'An analytical budgeting console that tracks income streams and regular expenses. It groups transactions, calculates category percentages, and helps users visualize their spending habits. It leverages Enums and HashMap collections to aggregate financial logs.',
    features: [
      'Multi-category logs (Food, Rent, Salary, Entertainment)',
      'Budget limit alarms',
      'ASCII category percentage charts',
      'CSV monthly balance exporter'
    ]
  },
  {
    id: 'port-08',
    title: 'Employee & Payroll Dashboard',
    difficulty: 'Advanced',
    description: 'An enterprise HR system modeling corporate structures and salary distribution. It tracks employee rosters, performance files, and calculates monthly pay across various employee roles. It practices self-referencing relationships, list sorting, and polymorphism.',
    features: [
      'Parent class Employee with polymorphic pay methods',
      'Manager pointers referencing team members',
      'Multi-column sorting (by name or salary)',
      'Annual HR budget reporting'
    ]
  },
  {
    id: 'port-09',
    title: 'Interactive Chat Hub Console',
    difficulty: 'Advanced',
    description: 'An interactive terminal-based messaging client that simulates multiple users communicating on shared networks. It handles profile registrations, channel switching, and direct messaging pools. This project practices data caching, stream parsing, and text formatting.',
    features: [
      'Multi-client user registry',
      'Interactive chat command parsers (/join, /msg, /exit)',
      'Active 1-on-1 DM boxes',
      'Plain-text logging of server channels'
    ]
  },
  {
    id: 'port-10',
    title: 'Retail Cashier Register POS',
    difficulty: 'Advanced',
    description: 'A cashier terminal cash register application that processes purchases. It manages item scanning, supports shopping cart operations, applies promotional codes, and logs daily transaction totals. This project centers on robust math rounding and receipt formatting.',
    features: [
      'Product barcode inventory lookups',
      'Real-time shopping cart coordination',
      'Detailed receipts exported as text files',
      'Daily sales analytics dashboards'
    ]
  }
];

// Simple stubs to satisfy DETAILED_LESSONS type mapping
const createStubLesson = (slug: string, title: string, difficulty: 'Beginner' | 'Intermediate' | 'Advanced'): DetailedLessonContent => ({
  slug,
  title,
  moduleSlug: 'mini-projects',
  moduleName: 'Exercises & Projects',
  estimatedTime: '60 mins',
  difficulty,
  introduction: 'This page contains practice problems designed to challenge your Java skills.',
  whyThisTopicMatters: {
    whyItExists: 'Practicing solving problems is the only way to master programming.',
    problemSolved: 'Transforms conceptual learning into actual software engineering muscle memory.'
  },
  mainExplanation: [],
  codeExamples: [],
  visualLearning: [],
  commonMistakes: [],
  practiceExercise: {
    title: 'Solve all exercises',
    tasks: ['Implement the exercises locally on your IDE.']
  },
  summary: ['Practice leads to perfection.']
});

export const EXERCISES_PROJECTS_LESSONS: Record<string, DetailedLessonContent> = {
  'beginner-exercises': createStubLesson('beginner-exercises', 'Beginner Exercises', 'Beginner'),
  'intermediate-challenges': createStubLesson('intermediate-challenges', 'Intermediate Exercises', 'Intermediate'),
  'advanced-challenges': createStubLesson('advanced-challenges', 'Advanced Exercises', 'Advanced'),
  'portfolio-projects': createStubLesson('portfolio-projects', 'Portfolio Projects', 'Advanced')
};
