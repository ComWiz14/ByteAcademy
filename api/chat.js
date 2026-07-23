// src/api/chat.ts
import { GoogleGenAI } from "@google/genai";

// src/services/knowledge/platformInfo.ts
var platformInfo = {
  name: "ByteAcademy",
  tagline: "Learn Java Through Understanding, Not Memorization",
  description: "A modern, specialized handbook and learning platform that guides complete beginners from their first introduction to Java to advanced software engineering concepts.",
  purpose: "To solve the critical educational bottlenecks that beginners experience when learning static compiled programming languages. It bridges the gap between dry, academic specifications and superficial 'cheat-sheet' tutorials by focusing on deep computational understanding and practical problem-solving.",
  targetUsers: "Absolute beginners, college students learning Java, self-taught developers transitioning to object-oriented programming (OOP), and aspiring software engineers wanting to build strong computer science foundations.",
  learningGoals: [
    "Master the core syntax and semantics of the Java programming language.",
    "Develop strong visual mental models of JVM (Java Virtual Machine) memory, stack/heap storage, and runtime mechanics.",
    "Cultivate authentic OOP problem-solving skills rather than copying-and-pasting code.",
    "Gain confidence in reading and debugging complex compiler and runtime errors."
  ],
  mainFeatures: [
    "13-module comprehensive visual curriculum",
    "Interactive lesson system with live coding worksheets",
    "Text-to-speech (TTS) lesson reading for auditory learners",
    "Comprehensive worked Java examples library categorized by difficulty",
    "Structured, mistake-first debugging guides with visual cards",
    "Integration with an official AI assistant built specifically for the platform"
  ],
  technologyUsed: "Built using React 18 with Vite, TypeScript for full type safety, Tailwind CSS for premium responsive visual layout, lucide-react for icons, and motion (motion/react) for fluid page/module transitions.",
  overallVision: "To be the premier, high-quality, free and open interactive resource for learning computer science and static object-oriented programming languages, empowering learners globally with structured mental models."
};

// src/services/knowledge/curriculumInfo.ts
var curriculumInfo = [
  {
    moduleNumber: 1,
    slug: "getting-started",
    title: "Getting Started with Java",
    description: "Understand the fundamentals of programming languages, compilation, and setting up your local computer for development.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "programming-compilers",
        title: "Introduction to Programming",
        description: "What programming is, how compilers translate human code to machine instructions, and compilers vs interpreters.",
        coveredConcepts: ["Source code", "Compilation", "Machine code", "Compilers vs interpreters"]
      },
      {
        slug: "java-platform",
        title: "Java Platform Independence",
        description: "The 'Write Once, Run Anywhere' (WORA) philosophy. Roles of JDK, JRE, and JVM in execution.",
        coveredConcepts: ["Bytecode", "JVM (Java Virtual Machine)", "JDK (Java Development Kit)", "JRE (Java Runtime Environment)", "Platform independence"]
      },
      {
        slug: "local-setup",
        title: "Local Setup Guide",
        description: "How to install the OpenJDK (Java Development Kit) and configure Visual Studio Code with Java Extension Pack.",
        coveredConcepts: ["JDK installation", "Environment variables", "VS Code setup", "Java extensions"]
      },
      {
        slug: "hello-world",
        title: "Hello World Syntax",
        description: "Analyzing the anatomy of a minimal Java program, main method entry point, public class, and statements.",
        coveredConcepts: ["public class", "public static void main", "System.out.println", "Curly braces", "Semicolons", "String literal arguments"]
      }
    ]
  },
  {
    moduleNumber: 2,
    slug: "java-fundamentals",
    title: "Java Fundamentals",
    description: "Master variables, data types, memory allocation, console input/output, type casting, and standard naming conventions.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "variables",
        title: "Variables & Constants",
        description: "Declaring, initializing, and using typed memory locations to hold data, and constants via the final keyword.",
        coveredConcepts: ["Variable declaration", "Initialization", "Constants", "final keyword", "Memory allocation"]
      },
      {
        slug: "data-types",
        title: "Primitive Data Types",
        description: "Detailed overview of Java's 8 built-in primitive data types (byte, short, int, long, float, double, char, boolean), their sizes, and default values.",
        coveredConcepts: ["byte", "short", "int", "long", "float", "double", "char", "boolean", "Bits and Bytes in memory"]
      },
      {
        slug: "reference-types",
        title: "Reference Data Types",
        description: "Understanding reference data types, objects, classes, arrays, and how they differ from primitive types in stack and heap memory.",
        coveredConcepts: ["Reference types", "Heap memory", "Stack memory", "Memory addresses", "Null values"]
      },
      {
        slug: "operators",
        title: "Operators & Expressions",
        description: "Arithmetic, relational, logical, assignment, and unary operators. Operator precedence rules.",
        coveredConcepts: ["Arithmetic operators", "Relational operators", "Logical operators (&&, ||, !)", "Modulo (%) operator", "Operator precedence"]
      },
      {
        slug: "scanner",
        title: "User Input with Scanner",
        description: "Using the java.util.Scanner utility to capture keyboard inputs from users via the terminal.",
        coveredConcepts: ["Scanner class", "System.in", "nextLine()", "nextInt()", "nextDouble()", "Buffer flushing issues"]
      },
      {
        slug: "type-casting",
        title: "Type Casting",
        description: "Widening type casting (automatic conversion from smaller to larger data types) and narrowing type casting (explicit manual conversion).",
        coveredConcepts: ["Widening casting", "Narrowing casting", "Data truncation", "Explicit casting syntax"]
      },
      {
        slug: "java-math-class",
        title: "Java Math Class",
        description: "Perform advanced calculations with ease using Java's built-in Math methods and constants. Covers max, min, sqrt, pow, abs, random, round, floor, ceil, and PI.",
        coveredConcepts: ["Math.max", "Math.min", "Math.pow", "Math.sqrt", "Math.abs", "Math.random", "Math.round", "Math.floor", "Math.ceil", "Math.PI constant", "Random integer range scaling"]
      },
      {
        slug: "keywords",
        title: "Keywords",
        description: "An overview of Java reserved keywords that have dedicated, fixed language behaviors and cannot be used as identifiers.",
        coveredConcepts: ["Reserved words", "class keyword", "public keyword", "static keyword", "void keyword", "Identifiers"]
      },
      {
        slug: "naming-conventions",
        title: "Naming Conventions",
        description: "Familiarize yourself with Java's standard casing rules to write clean, professional, and readable code.",
        coveredConcepts: ["camelCase", "PascalCase", "SCREAMING_SNAKE_CASE", "Class naming", "Method naming", "Variable naming", "Constant naming"]
      },
      {
        slug: "code-structure",
        title: "Basic Code Structure",
        description: "The syntax layout rules, code blocks, indentation, comments, package statements, and structural hierarchy of a Java file.",
        coveredConcepts: ["Curly braces nesting", "Indentation standards", "Single-line comments", "Multi-line comments", "Package declarations"]
      }
    ]
  },
  {
    moduleNumber: 3,
    slug: "control-flow",
    title: "Control Flow in Java",
    description: "Direct the execution path of your software dynamically using conditional branching and loop structures.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "conditional-statements",
        title: "Conditional Statements",
        description: "Direct code execution branches using if, else if, and else blocks based on boolean conditions.",
        coveredConcepts: ["if statements", "else if statements", "else statements", "Boolean logic evaluation"]
      },
      {
        slug: "switch-case",
        title: "Switch Case",
        description: "Select one of many code blocks to execute using switch statements. Ideal alternative to multiple if-else blocks.",
        coveredConcepts: ["switch keyword", "case statements", "break statement", "default branch", "Switch expression values"]
      },
      {
        slug: "while-loops",
        title: "While Loops",
        description: "Repeatedly execute a block of code as long as a specified boolean condition remains true (pre-test loop).",
        coveredConcepts: ["while loop", "Loop condition", "Infinite loop danger", "Counter updates"]
      },
      {
        slug: "do-while-loops",
        title: "Do-While Loops",
        description: "Execute a block of code at least once, and then repeat as long as a condition is true (post-test loop).",
        coveredConcepts: ["do-while loop", "Guaranteed single run", "Post-condition evaluation"]
      },
      {
        slug: "for-loops",
        title: "For Loops",
        description: "Use counted loops when the exact number of iterations is known beforehand.",
        coveredConcepts: ["for loop", "Initialization expression", "Termination condition", "Increment/decrement step"]
      },
      {
        slug: "break-continue",
        title: "Break and Continue",
        description: "Control loop behaviors by exiting immediately (break) or skipping the rest of the current iteration (continue).",
        coveredConcepts: ["break keyword", "continue keyword", "Loop control override", "Nested loop breakout"]
      }
    ]
  },
  {
    moduleNumber: 4,
    slug: "methods",
    title: "Methods in Java",
    description: "Organize reusable algorithms into modular functions that accept parameters and return values.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "method-structure",
        title: "Method Structure",
        description: "Anatomy of a method declaration, static vs instance modifiers, return types, and method names.",
        coveredConcepts: ["Access modifiers", "static modifier", "Return type", "Method signature"]
      },
      {
        slug: "arguments-parameters",
        title: "Arguments & Parameters",
        description: "Declaring parameters inside method headers and passing actual arguments of correct types during invocation.",
        coveredConcepts: ["Parameters vs arguments", "Type checking", "Pass-by-value mechanics", "Multiple parameters"]
      },
      {
        slug: "return-values",
        title: "Return Values",
        description: "How to return calculated values back to the caller using the return keyword, and void return types.",
        coveredConcepts: ["return keyword", "Return data type", "Void methods", "Early method termination"]
      },
      {
        slug: "variable-scope",
        title: "Variable Scope",
        description: "Understanding where variables are accessible inside methods, local scope vs global fields, and blocks.",
        coveredConcepts: ["Local variables", "Method scope", "Block scope", "Shadowing fields"]
      },
      {
        slug: "method-overloading",
        title: "Method Overloading",
        description: "Creating multiple methods in the same class with the same name but different parameters (parameter count or types).",
        coveredConcepts: ["Overloading", "Unique parameter lists", "Compile-time polymorphism", "Return type limits"]
      }
    ]
  },
  {
    moduleNumber: 5,
    slug: "arrays",
    title: "Arrays in Java",
    description: "Learn how to store static, indexed collections of homogeneous data in contiguous memory blocks.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "array-basics",
        title: "Array Basics",
        description: "Declaring, sizing, and initializing single-dimensional arrays. Accessing elements using indices.",
        coveredConcepts: ["Array declaration", "new keyword", "Sizing arrays", "Index system (0-based)", "ArrayIndexOutOfBoundsException"]
      },
      {
        slug: "array-iteration",
        title: "Array Iteration",
        description: "Looping through array elements using standard indexed for loops and enhanced for-each loops.",
        coveredConcepts: ["Standard for loop", "array.length", "Enhanced for-each loop", "Read-only iteration limits"]
      },
      {
        slug: "multidimensional-arrays",
        title: "Multidimensional Arrays",
        description: "Creating arrays of arrays (2D arrays) to represent matrices, rows, and columns. Iterating using nested loops.",
        coveredConcepts: ["2D arrays", "Grid rows and columns", "Nested loops for matrices", "Jagged arrays"]
      }
    ]
  },
  {
    moduleNumber: 6,
    slug: "strings",
    title: "Strings in Java",
    description: "Examine character sequences, string manipulation, heap vs pool memory storage, and mutable buffers.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "string-basics",
        title: "String Basics",
        description: "Strings as objects, string literals, heap storage, the String Literal Pool, and immutability.",
        coveredConcepts: ["String literals", "String Pool", "Immutability", "Memory savings", "new String() heap allocation"]
      },
      {
        slug: "string-methods",
        title: "Common String Methods",
        description: "Using standard String methods to manipulate and query text (length, charAt, substring, equals, indexOf).",
        coveredConcepts: ["length()", "charAt()", "substring()", "equals() vs == operator", "indexOf()", "toLowerCase() & toUpperCase()"]
      },
      {
        slug: "stringbuilder",
        title: "StringBuilder Class",
        description: "Using the StringBuilder utility for highly efficient, mutable string manipulation to prevent memory leaks.",
        coveredConcepts: ["StringBuilder", "Mutability", "append() method", "insert() method", "toString() conversion", "Performance benefits"]
      }
    ]
  },
  {
    moduleNumber: 7,
    slug: "oop-basics",
    title: "Object-Oriented Programming Basics",
    description: "Unlock modular software architecture by modeling computer programs using real-world blueprints.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "classes-objects",
        title: "Classes & Objects",
        description: "The difference between classes (blueprints) and objects (active instances in memory).",
        coveredConcepts: ["Class definition", "Object instantiation", "new keyword", "Instance reference state"]
      },
      {
        slug: "fields-methods",
        title: "Fields & Methods",
        description: "Defining state via instance fields (attributes) and behavior via instance methods.",
        coveredConcepts: ["Instance fields", "State", "Instance methods", "Behavior", "Dot operator (.) access"]
      },
      {
        slug: "constructors",
        title: "Constructors",
        description: "Special constructor methods used to initialize the state of new object instances during instantiation.",
        coveredConcepts: ["Constructor declaration", "Default constructor", "Parameterized constructors", "Constructor overloading"]
      },
      {
        slug: "this-keyword",
        title: "The 'this' Keyword",
        description: "Using the 'this' reference to refer to the current object instance and resolve naming shadowing.",
        coveredConcepts: ["this keyword", "Parameter shadowing", "Current instance reference", "Chaining constructors via this()"]
      }
    ]
  },
  {
    moduleNumber: 8,
    slug: "advanced-oop",
    title: "Advanced Object-Oriented Programming",
    description: "Deep dive into the 4 Pillars of OOP, abstract contracts, interface designs, accessibility, static and final modifiers.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "encapsulation",
        title: "Encapsulation",
        description: "Data hiding. Restricting direct access to object fields and exposing them safely through public getter and setter methods.",
        coveredConcepts: ["Encapsulation", "private fields", "Getters and setters", "Data validation", "Pillar 1 of OOP"]
      },
      {
        slug: "inheritance",
        title: "Inheritance",
        description: "Creating a subclass that inherits fields and methods from a superclass using the extends keyword. Promotes code reuse.",
        coveredConcepts: ["extends keyword", "Superclass", "Subclass", "super keyword", "Method overriding", "Pillar 2 of OOP"]
      },
      {
        slug: "polymorphism",
        title: "Polymorphism",
        description: "Ability of an object to take on many forms. Standard compile-time (overloading) and runtime (overriding) polymorphism.",
        coveredConcepts: ["Polymorphism", "Upcasting", "Dynamic method dispatch", "Runtime resolution", "Pillar 3 of OOP"]
      },
      {
        slug: "abstraction",
        title: "Abstraction",
        description: "Hiding internal implementation details and showing only essential operations to the user.",
        coveredConcepts: ["Abstraction", "Interface design", "Implementation hiding", "Pillar 4 of OOP"]
      },
      {
        slug: "abstract-classes",
        title: "Abstract Classes",
        description: "Declaring abstract classes using the abstract keyword. Can contain abstract methods without body and concrete methods.",
        coveredConcepts: ["abstract class", "Abstract methods", "Non-abstract methods", "Subclass implementation requirements"]
      },
      {
        slug: "interfaces",
        title: "Interfaces",
        description: "Defining standard contracts using interfaces. Enables multiple inheritance behaviors in Java classes.",
        coveredConcepts: ["interface keyword", "implements keyword", "Multiple interface implementation", "Default and static methods"]
      },
      {
        slug: "access-modifiers",
        title: "Access Modifiers",
        description: "Controlling class, field, and method visibility across packages (public, protected, package-private/default, private).",
        coveredConcepts: ["public", "protected", "default access", "private", "Information hiding", "Encapsulation rules"]
      },
      {
        slug: "static-keyword",
        title: "The Static Keyword",
        description: "Declaring class-level variables and methods that belong to the class itself rather than object instances.",
        coveredConcepts: ["static variable", "static method", "Shared memory space", "Utility classes", "No instance context limits"]
      },
      {
        slug: "final-keyword",
        title: "The Final Keyword",
        description: "Using the final modifier to create unchangeable variables, non-overridable methods, and non-inheritable classes.",
        coveredConcepts: ["final variables (constants)", "final methods", "final classes", "Immutability", "Preventing extension"]
      }
    ]
  },
  {
    moduleNumber: 9,
    slug: "collections",
    title: "Collections Framework",
    description: "Implement dynamic, flexible data structures that grow automatically to manage collections of items.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "collections-overview",
        title: "Collections Overview",
        description: "Introduction to java.util collections. Why arrays are limiting and how dynamic structures solve it.",
        coveredConcepts: ["Collections hierarchy", "List", "Set", "Map", "Dynamic sizing vs static arrays"]
      },
      {
        slug: "arraylist",
        title: "ArrayList Class",
        description: "Using the ArrayList class to store dynamic, self-resizing, ordered lists of objects.",
        coveredConcepts: ["ArrayList declaration", "add()", "get()", "set()", "remove()", "size()", "Generics syntax (<Type>)"]
      },
      {
        slug: "hashmap",
        title: "HashMap Class",
        description: "Storing data as key-value pairs using hash tables for rapid lookup and storage.",
        coveredConcepts: ["HashMap declaration", "put()", "get()", "remove()", "containsKey()", "Unique keys", "Key-Value pairs"]
      }
    ]
  },
  {
    moduleNumber: 10,
    slug: "exceptions",
    title: "Exception Handling",
    description: "Build robust, fault-tolerant programs that handle runtime crashes gracefully using try-catch blocks.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "exceptions-overview",
        title: "Exceptions Overview",
        description: "Understanding abnormal runtime events. Difference between critical Errors and catchable Exceptions (Checked vs Unchecked).",
        coveredConcepts: ["Throwable", "Error", "Exception", "Checked exceptions", "Unchecked exceptions (Runtime)"]
      },
      {
        slug: "try-catch",
        title: "Try-Catch Blocks",
        description: "Catching exceptions at runtime using try, catch, and finally blocks to avoid immediate crashes.",
        coveredConcepts: ["try block", "catch block", "finally block for cleanup", "Multi-catch statements"]
      },
      {
        slug: "throw-throws",
        title: "Throw & Throws Keywords",
        description: "Manually instigating exceptions using the throw keyword and declaring exceptions in method signatures using throws.",
        coveredConcepts: ["throw keyword", "throws clause", "Exception propagation", "Checked exception rules"]
      },
      {
        slug: "custom-exceptions",
        title: "Custom Exceptions",
        description: "Writing specialized exception classes that extend Exception or RuntimeException to handle domain-specific errors.",
        coveredConcepts: ["extends Exception", "extends RuntimeException", "Constructor matching", "Custom error states"]
      }
    ]
  },
  {
    moduleNumber: 11,
    slug: "file-handling",
    title: "File Handling",
    description: "Read from and write to text files on physical storage for durable data persistence.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "file-handling-basics",
        title: "File Handling Basics",
        description: "Using the java.io.File class to represent files and directories, checking existence, and path handling.",
        coveredConcepts: ["File class", "isFile() & isDirectory()", "exists()", "createNewFile()", "File path systems"]
      },
      {
        slug: "reading-files",
        title: "Reading Files",
        description: "Reading text data from local files using FileReader, BufferedReader, or Scanner, and handling resource leaks.",
        coveredConcepts: ["FileReader", "BufferedReader", "readLine()", "Scanner for files", "try-with-resources auto-cleanup"]
      },
      {
        slug: "writing-files",
        title: "Writing Files",
        description: "Writing text records to physical text documents on disk using FileWriter and BufferedWriter.",
        coveredConcepts: ["FileWriter", "BufferedWriter", "write()", "newLine()", "flush()", "File appending mode"]
      }
    ]
  },
  {
    moduleNumber: 12,
    slug: "generics",
    title: "Java Generics",
    description: "Establish compile-time type-safe collections and classes to maximize code reuse and avoid casting errors.",
    difficulty: "Advanced",
    lessons: [
      {
        slug: "generics-overview",
        title: "Generics Overview",
        description: "Introduction to parameterized types. Eliminating explicit casting and enabling compile-time checks.",
        coveredConcepts: ["Generics advantage", "Type safety", "Casting errors", "Type erasure"]
      },
      {
        slug: "generic-classes",
        title: "Generic Classes",
        description: "Designing custom classes that accept generic type parameters to hold any type of object.",
        coveredConcepts: ["Generic class <T>", "Type parameters", "Multiple type parameters", "Container design"]
      },
      {
        slug: "generic-methods",
        title: "Generic Methods",
        description: "Writing independent static or instance methods that operate on type parameters defined at call-time.",
        coveredConcepts: ["Generic method signature", "Bounded type parameters (<T extends Number>)", "Type inference"]
      }
    ]
  },
  {
    moduleNumber: 13,
    slug: "exercises-projects",
    title: "Exercises & Mini-Projects",
    description: "Consolidate your visual skills by building complete end-to-end console programs from scratch.",
    difficulty: "Advanced",
    lessons: [
      {
        slug: "interactive-quizzes",
        title: "Interactive Quizzes",
        description: "A comprehensive review of the entire Java core syntax, OOP rules, and algorithms.",
        coveredConcepts: ["Quiz worksheet", "Conceptual consolidation", "Diagnostic tests"]
      },
      {
        slug: "student-grading",
        title: "Student Grading System",
        description: "Build a program that reads student details, tracks multiple grades, and calculates averages and letters.",
        coveredConcepts: ["Data records", "ArrayList of student objects", "Average calculation", "Console interface"]
      },
      {
        slug: "cli-calculator",
        title: "Command-Line Calculator",
        description: "Design a console calculator that accepts inputs and carries out operations, including math functions.",
        coveredConcepts: ["Operator switching", "Math methods", "Loop evaluation", "Scanner handling"]
      },
      {
        slug: "banking-system",
        title: "Simple Banking System",
        description: "Create an object-oriented banking simulation managing deposit, withdrawal, balance checks, and logs.",
        coveredConcepts: ["Account encapsulation", "Transaction validation", "Durable logs", "Custom Exception checks"]
      },
      {
        slug: "inventory-manager",
        title: "Inventory Manager",
        description: "Create a warehouse manager that maps product barcodes or keys to stock details and updates values dynamically.",
        coveredConcepts: ["HashMap mapping", "Product objects", "Stock additions and deductions", "Formatted output reporting"]
      }
    ]
  }
];

// src/services/knowledge/pageInfo.ts
var pageInfo = {
  homepage: {
    purpose: "The main portal introducing learners to ByteAcademy's visual, intuitive learning philosophy without any marketing fluff.",
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
      "Mentorship Spotlight: Introduces the monthly 1-on-1 premium coaching by tutor Chimango Mughogho."
    ]
  },
  learnJava: {
    purpose: "The structured learning center that lists the sequential 13-module curriculum, acting as the primary hub for a student's educational progression.",
    structure: "Thirteen distinct modules numbered 1 through 13. Each module has a difficulty label (Beginner, Intermediate, or Advanced) and estimated study duration.",
    progression: "Students are advised to progress sequentially from Module 1 (Getting Started) up to Module 13 (Exercises & Projects) to build an unbreakable foundation in programming logic.",
    sections: [
      "Learning Roadmap Banner: Encourages gradual, consistent study habits.",
      "13-Module Grid: Dynamic, responsive layout displaying each module's number, title, difficulty, time commitment, conceptual description, and key lesson links.",
      "Mentorship Callout Banner: Invites users needing structured personal tutoring to join the premium mentorship program."
    ]
  },
  workedExamples: {
    purpose: "A comprehensive database of worked programming questions, implementation codes, and step-by-step logic walks to build coding skills.",
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
  aiAssistant: {
    purpose: "An integrated AI programming tutor designed to clarify Java concepts, resolve compiler errors, explain lesson blocks, and recommend modules.",
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
      heading: "Meet Your Tutor",
      content: "Details the personal story, learning journey, and pedagogical philosophy of Chimango Mughogho."
    }
  },
  contact: {
    purpose: "A dedicated channel for sending feedback, asking curriculum questions, or applying for the premium monthly coaching program.",
    contactChannels: [
      "Official Form: Submits inquiries directly to the creator's inbox using EmailJS integration or automated FormSubmit routing.",
      "Official Email: direct channel via chimangomughogho22@gmail.com",
      "Official Phone & WhatsApp Hotline: Direct communication link with the tutor.",
      "Physical Address: Chikwawa Road, Blantyre, Malawi."
    ],
    workingHours: "Monday through Saturday (8:00 AM to 6:00 PM Central African Time - CAT)."
  }
};

// src/services/knowledge/creatorInfo.ts
var creatorInfo = {
  name: "Chimango Mughogho",
  role: "Creator of ByteAcademy",
  education: {
    program: "Currently studying Bachelor of Education in Computer Science",
    institution: "University of Malawi",
    campus: "Chancellor College",
    location: "Zomba"
  },
  currentResidence: "Lilongwe",
  interests: [
    "Software development",
    "Building useful technology",
    "Exploring cybersecurity"
  ],
  bio: "Chimango Mughogho is the creator of ByteAcademy. He combines educational pedagogical theory with technical computer science training. He is highly passionate about software development, secure application designs, and exploring cybersecurity. He created ByteAcademy to provide a structured, beginner-friendly platform that turns complex computer science concepts into simple, visual, and logical milestones.",
  personalMessage: "Programming is not about memorizing code. It is about understanding how things work, solving problems, and improving through practice."
};

// src/services/knowledge/featureInfo.ts
var featureInfo = {
  javaLessons: {
    name: "Interactive Java Lessons",
    description: "Detailed, visual lesson guides covering core Java from basic setup to advanced concepts like generic types and exception structures.",
    pedagogy: "Each lesson focuses on: What (the concept), Why (the underlying purpose), How (JVM memory mechanics), and clean code examples with mistake-first debugging."
  },
  interactiveLessonSystem: {
    name: "Interactive Lesson Workspace & Coding Lab",
    description: "Lessons feature interactive workspace controls allowing students to explore conceptual flows, toggle visual blocks, and work with interactive widgets directly on the page."
  },
  byteAcademyAI: {
    name: "ByteAcademy AI assistant",
    description: "A customized intelligent programming tutor integrated into the platform. It can analyze the current page's lesson context, explain concepts step-by-step using beginner-friendly language, recommend resources, and assist in debugging compile errors.",
    availability: "Available both as a Floating Chatbot on all lesson pages and as a full-page chat interface (/bytecode-ai)."
  },
  textToSpeech: {
    name: "Text-to-Speech (TTS) Lesson Reader",
    description: "An integrated audio feature present on lesson pages that reads lesson content aloud using browser synthesis, complete with playback speed controls and pause/stop options. Perfect for auditory and multi-modal learners."
  },
  workedExamples: {
    name: "Worked Java Examples Library",
    description: "A searchable database of real-world Java coding prompts, containing fully written, standard-compliant solution codes alongside step-by-step logic and reasoning walkthroughs, filterable by Beginner, Intermediate, and Advanced difficulties."
  },
  programmingExercises: {
    name: "Hands-on Console Projects & Quizzes",
    description: "Practical exercises and quizzes at the end of each lesson module, culminating in Module 13, which guides students through writing real console apps like calculators, student gradebooks, bank managers, and warehouse inventory tools."
  },
  sharingFeatures: {
    name: "Integrated Lesson Sharing",
    description: "A one-click sharing utility available on lesson headers that copies clean, formatted links of the active lesson or page directly to the clipboard, allowing students to share milestones with friends or study groups."
  },
  tutoringMentorship: {
    name: "Premium Monthly Mentorship Program",
    description: "A highly personalized 1-on-1 coaching program designed to accelerate learning, assist in school assignments, and prepare for academic or professional programming exams. Offers face-to-face sessions in Blantyre, Malawi, or Zoom/Google Meet sessions worldwide, plus direct WhatsApp tutor hotline."
  },
  learningResources: {
    name: "Curated Setup Downloads & Syntax Sheets",
    description: "Direct links and guides on the Downloads page to install correct compilers (OpenJDK LTS releases), lightweight editors (VS Code with Java Extension Pack), and handy printable PDF syntax cheat sheets for offline revision."
  }
};

// src/services/knowledge/aiRulesInfo.ts
var aiRulesInfo = {
  identity: {
    roleName: "ByteAcademy AI Assistant",
    tagline: "Your Visual Java Programming Tutor",
    personality: "Patient, clear, encouraging, structured, and pedagogical. Avoids dry academic jargon; instead, relies on physical real-world analogies (e.g., variables as boxes, heap memory as coordinates)."
  },
  coreDirectives: [
    "Prioritize ByteAcademy platform knowledge. When a user asks about lessons, pages, modules, or features, consult the provided knowledge base first.",
    "Never invent information. If a user asks a question about the platform, curriculum, features, or the creator that is not covered in this knowledge base, clearly and politely state that the information is unavailable.",
    "No unauthorized creator claims. Strictly describe Chimango Mughogho only as the creator currently studying a Bachelor of Education in Computer Science at the University of Malawi. Never call him a graduate, doctor, professor, senior software engineer, or any other unauthorized title.",
    "Beginner-friendly pedagogy. When teaching Java syntax, break down concepts step-by-step. Present a clear explanation of 'What', 'Why', 'How (Memory Mechanics)', and 'Clean Code'.",
    "Connect to ByteAcademy lessons. Whenever a user asks to learn a concept, tell them exactly which ByteAcademy module and lesson covers it. Use the Curriculum Info list for referencing slugs and titles."
  ],
  bannedBehaviors: [
    "Do NOT confuse your identity. Never introduce yourself as 'Gemini', 'Google AI', or any generic LLM. You are strictly the 'ByteAcademy AI Assistant'.",
    "Do NOT expose React routes, internal code paths, component file names (e.g., 'AIChatPage.tsx'), or other technical developer details of the website's engineering, unless explicitly asked about the codebase itself. Focus on user-facing lessons and features.",
    "Do NOT suggest copying and pasting complete solutions for school homework without explaining the logic first. Guide the student so they learn."
  ],
  responseStructure: {
    greeting: "Start with a helpful, context-appropriate welcoming tone.",
    conceptualExplanation: "First explain the concept using a clear analogy or real-world model.",
    curriculumReference: "Mention the exact Module Number and Lesson name where they can learn this concept on ByteAcademy.",
    codeExample: "Provide a minimal, highly commented Java code block demonstrating the concept cleanly.",
    warningOrCommonMistake: "Highlight a common bug or compiler error that beginners encounter with this specific concept."
  }
};

// src/services/byteAcademyKnowledge.ts
var KNOWLEDGE_BASE = {
  platform: {
    name: platformInfo.name,
    tagline: platformInfo.tagline,
    description: platformInfo.description,
    mission: platformInfo.purpose,
    philosophy: [
      "Conceptual Grounding: Always explain the 'why' and 'how' behind compiler rules and JVM runtime memory before writing code.",
      "Analogies Over Abstract Syntax: Use clear, real-world physical analogies to ground code structures.",
      "Gradual Progression: Build complexity incrementally\u2014moving step-by-step from raw syntax to structured control flow.",
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
    delivery: "Available as either face-to-face sessions in Blantyre, Malawi, or interactive online sessions worldwide.",
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
  curriculum: curriculumInfo.map((mod) => ({
    moduleNumber: mod.moduleNumber,
    title: mod.title,
    description: mod.description,
    highlights: mod.lessons.map((l) => `${l.title}: ${l.description}`)
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
function getKnowledgeMarkdownContext() {
  let context = `--- BYTEACADEMY MASTER KNOWLEDGE BASE ---

`;
  context += `1. PLATFORM IDENTITY & MISSION:
`;
  context += `- Name: ${KNOWLEDGE_BASE.platform.name}
`;
  context += `- Tagline: ${KNOWLEDGE_BASE.platform.tagline}
`;
  context += `- Description: ${KNOWLEDGE_BASE.platform.description}
`;
  context += `- Platform Mission: ${KNOWLEDGE_BASE.platform.mission}
`;
  context += `- Core Pedagogical Principles:
`;
  KNOWLEDGE_BASE.platform.philosophy.forEach((p) => {
    context += `  * ${p}
`;
  });
  context += `
2. ABOUT BYTEACADEMY:
`;
  context += `- ${KNOWLEDGE_BASE.about.summary}
`;
  context += `- Target Audience: ${KNOWLEDGE_BASE.about.targetAudience}
`;
  context += `
3. TUTOR PROFILE:
`;
  context += `- Name: ${KNOWLEDGE_BASE.tutor.name}
`;
  context += `- Role: ${KNOWLEDGE_BASE.tutor.role}
`;
  context += `- Education: ${KNOWLEDGE_BASE.tutor.education}
`;
  context += `- Background: ${KNOWLEDGE_BASE.tutor.bio}
`;
  context += `
4. PREMIUM MONTHLY MENTORSHIP PROGRAM:
`;
  context += `- Program Title: ${KNOWLEDGE_BASE.mentorship.title}
`;
  context += `- Summary: ${KNOWLEDGE_BASE.mentorship.description}
`;
  context += `- Delivery Modes: ${KNOWLEDGE_BASE.mentorship.delivery}
`;
  context += `- Key Mentorship Features:
`;
  KNOWLEDGE_BASE.mentorship.features.forEach((f) => {
    context += `  * ${f}
`;
  });
  context += `- Enrollment Guidelines: ${KNOWLEDGE_BASE.mentorship.enrollment}
`;
  context += `
5. CURATED DOWNLOADS & SYSTEM SETUP:
`;
  context += `- Public Page Name: ${KNOWLEDGE_BASE.downloads.pageName}
`;
  context += `- Location: ${KNOWLEDGE_BASE.downloads.location}
`;
  context += `- Description: ${KNOWLEDGE_BASE.downloads.description}
`;
  context += `- Featured Tools:
`;
  KNOWLEDGE_BASE.downloads.curatedTools.forEach((tool) => {
    context += `  * Tool Name: ${tool.name}
`;
    context += `    - Purpose: ${tool.purpose}
`;
    if (tool.recommendation) context += `    - Recommendation: ${tool.recommendation}
`;
  });
  context += `
6. COMPREHENSIVE 13-MODULE JAVA CURRICULUM:
`;
  curriculumInfo.forEach((mod) => {
    context += `- Module #${mod.moduleNumber}: ${mod.title} (${mod.difficulty})
`;
    context += `  * Summary: ${mod.description}
`;
    context += `  * Core Lessons:
`;
    mod.lessons.forEach((l) => {
      context += `    - ${l.title} (Slug: ${l.slug}): ${l.description}
`;
    });
  });
  context += `
7. CONTACT & GENERAL INQUIRIES:
`;
  context += `- Tutor Physical Address: ${KNOWLEDGE_BASE.contact.address}
`;
  context += `- Direct Email Contact: ${KNOWLEDGE_BASE.contact.email}
`;
  context += `- Contact Form Purpose: ${KNOWLEDGE_BASE.contact.purpose}
`;
  context += `
8. FREQUENTLY ASKED QUESTIONS (FAQs):
`;
  KNOWLEDGE_BASE.faqs.forEach((faq, idx) => {
    context += `FAQ #${idx + 1}: ${faq.question}
`;
    context += `  Answer: ${faq.answer}
`;
  });
  context += `
9. ASSISTANT GUIDELINES & BEHAVIOR RULES:
`;
  KNOWLEDGE_BASE.aiRules.rules.forEach((rule) => {
    context += `- ${rule}
`;
  });
  context += `
------------------------------------
`;
  return context;
}

// src/api/chat.ts
var KNOWLEDGE_CONTEXT = getKnowledgeMarkdownContext();
var BASE_SYSTEM_INSTRUCTION = `You are "ByteAcademy AI Assistant", an intelligent programming tutor integrated into the ByteAcademy online platform.

Your responsibilities:
- Explain programming concepts clearly, step-by-step, making them highly approachable for absolute beginners.
- Help beginners understand Java syntax, classes, methods, and general logic.
- Explain programming errors, compilation issues, and debugging strategies.
- Provide clean, well-commented, and professional Java code examples when they are useful to illustrate a concept.
- Answer general programming questions. You are not restricted only to ByteAcademy content.

Style and Tone guidelines:
- Be encouraging, concise, patient, informative, and professional.
- Do NOT respond with: "You will learn this in Module X" or restrict learning.
- Instead: Explain the concept normally and thoroughly using real-world analogies, then optionally suggest related ByteAcademy modules, lessons, or roadmaps as resources.
- Utilize clear, standard Markdown formatting. Always wrap Java code blocks using triple backticks with the 'java' language flag for elegant rendering.
- For coding questions, prefer: Explanation -> Example -> Reasoning (not just raw code).
- Encourage learners to practice, try problems, and build confidence. Do not just solve homework assignments for them - explain the underlying concept first.
- If you do not know something or if it refers to private platform systems that are not in your knowledge base, admit it honestly. Avoid pretending to have access to unavailable live user data or grades.

CRITICAL COMMUNICATION RULES (NO INTERNAL ROUTES OR FILE PATHS):
- NEVER output raw URL paths, React routes, or slash-based slugs (e.g., NEVER say "/downloads", "/module/arrays", "/contact", or "/bytecode-ai").
- NEVER mention file paths (e.g., "/src/components", "AIContext.tsx"), directory structures, or internal code implementations.
- NEVER expose developer details or framework internals to learners.
- ALWAYS refer to pages, sections, and modules using their natural, human-readable names.
  * Wrong: "You can visit /downloads." -> Correct: "You can visit the Downloads page."
  * Wrong: "Open /module/arrays." -> Correct: "Open the Arrays module."
  * Wrong: "Go to /contact." -> Correct: "Go to the Contact page."
- Maintain clear, helpful navigation guidance, but strictly frame all references in clean, human-readable names.

Below is the structured knowledge base about ByteAcademy's learning structure, available modules, tutor information, and mission. Use this data to accurately recommend lessons or answer questions about the platform:`;
function getFullSystemInstruction(context) {
  let instruction = `${BASE_SYSTEM_INSTRUCTION}

${KNOWLEDGE_CONTEXT}`;
  if (context) {
    instruction += `

=========================================
CURRENT LIVE CONTEXT:
=========================================
The student is currently active on: ${context}
Use this specific context to formulate your response, connect concepts directly to what is on their screen, or help them solve issues related to this active area.`;
  }
  return instruction;
}
async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "The ByteAcademy AI Assistant is currently unavailable. GEMINI_API_KEY is not configured on the server environment."
      });
    }
    const { message, history = [], context } = req.body || {};
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Validation Error: Message content is required." });
    }
    if (message.length > 1e3) {
      return res.status(400).json({ error: "Your message is too long. Please shorten it and try again." });
    }
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    const contents = Array.isArray(history) ? history.slice(-10).map((item) => ({
      role: item.role === "user" ? "user" : "model",
      parts: [{ text: item.content }]
    })) : [];
    contents.push({
      role: "user",
      parts: [{ text: message.trim() }]
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: getFullSystemInstruction(context),
        temperature: 0.7
      }
    });
    if (!response || !response.text) {
      return res.status(500).json({ error: "Empty response received from Gemini." });
    }
    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Error in /api/chat serverless handler:", error);
    return res.status(500).json({
      error: "ByteAcademy AI is temporarily unavailable. Please try again shortly."
    });
  }
}
export {
  handler as default,
  getFullSystemInstruction
};
