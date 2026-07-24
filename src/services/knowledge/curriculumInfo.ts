export interface LessonSummary {
  slug: string;
  title: string;
  description: string;
  coveredConcepts: string[];
}

export interface ModuleSummary {
  moduleNumber: number;
  slug: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: LessonSummary[];
}

export const curriculumInfo: ModuleSummary[] = [
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
        slug: "command-line-arguments",
        title: "Command-Line Arguments",
        description: "Learn how to pass dynamic inputs to the main method at program launch using the args array.",
        coveredConcepts: ["main method args", "String[] args", "ArrayIndexOutOfBoundsException", "Integer.parseInt()", "Double.parseDouble()", "NumberFormatException"]
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

/**
 * Returns a quick lookup map of where concepts are taught to answer queries.
 */
export function getConceptMap(): Record<string, { moduleTitle: string; moduleSlug: string; lessonTitle: string; lessonSlug: string }> {
  const map: Record<string, { moduleTitle: string; moduleSlug: string; lessonTitle: string; lessonSlug: string }> = {};
  
  curriculumInfo.forEach(mod => {
    mod.lessons.forEach(les => {
      // Index by slug
      map[les.slug] = {
        moduleTitle: mod.title,
        moduleSlug: mod.slug,
        lessonTitle: les.title,
        lessonSlug: les.slug
      };
      
      // Index by covered concepts
      les.coveredConcepts.forEach(concept => {
        map[concept.toLowerCase()] = {
          moduleTitle: mod.title,
          moduleSlug: mod.slug,
          lessonTitle: les.title,
          lessonSlug: les.slug
        };
      });
      
      // Index by common synonyms or terms
      const titleLower = les.title.toLowerCase();
      map[titleLower] = {
        moduleTitle: mod.title,
        moduleSlug: mod.slug,
        lessonTitle: les.title,
        lessonSlug: les.slug
      };
    });
  });
  
  // Specific important overrides to guarantee 100% accurate responses
  map["arrays"] = { moduleTitle: "Arrays in Java", moduleSlug: "arrays", lessonTitle: "Array Basics", lessonSlug: "array-basics" };
  map["array"] = { moduleTitle: "Arrays in Java", moduleSlug: "arrays", lessonTitle: "Array Basics", lessonSlug: "array-basics" };
  map["loops"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "For Loops / While Loops", lessonSlug: "for-loops" };
  map["loop"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "For Loops / While Loops", lessonSlug: "for-loops" };
  map["for loop"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "For Loops", lessonSlug: "for-loops" };
  map["while loop"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "While Loops", lessonSlug: "while-loops" };
  map["do while"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "Do-While Loops", lessonSlug: "do-while-loops" };
  map["if else"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "Conditional Statements", lessonSlug: "conditional-statements" };
  map["switch"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "Switch Case", lessonSlug: "switch-case" };
  map["methods"] = { moduleTitle: "Methods in Java", moduleSlug: "methods", lessonTitle: "Method Structure", lessonSlug: "method-structure" };
  map["method"] = { moduleTitle: "Methods in Java", moduleSlug: "methods", lessonTitle: "Method Structure", lessonSlug: "method-structure" };
  map["variables"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Variables & Constants", lessonSlug: "variables" };
  map["variable"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Variables & Constants", lessonSlug: "variables" };
  map["primitives"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Primitive Data Types", lessonSlug: "data-types" };
  map["data types"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Primitive Data Types", lessonSlug: "data-types" };
  map["type casting"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Type Casting", lessonSlug: "type-casting" };
  map["command line"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Command-Line Arguments", lessonSlug: "command-line-arguments" };
  map["command line arguments"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Command-Line Arguments", lessonSlug: "command-line-arguments" };
  map["args"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Command-Line Arguments", lessonSlug: "command-line-arguments" };
  map["math"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Java Math Class", lessonSlug: "java-math-class" };
  map["math class"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Java Math Class", lessonSlug: "java-math-class" };
  map["inheritance"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Inheritance", lessonSlug: "inheritance" };
  map["polymorphism"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Polymorphism", lessonSlug: "polymorphism" };
  map["encapsulation"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Encapsulation", lessonSlug: "encapsulation" };
  map["abstraction"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Abstraction", lessonSlug: "abstraction" };
  map["interfaces"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Interfaces", lessonSlug: "interfaces" };
  map["abstract class"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Abstract Classes", lessonSlug: "abstract-classes" };
  map["collections"] = { moduleTitle: "Collections Framework", moduleSlug: "collections", lessonTitle: "Collections Overview", lessonSlug: "collections-overview" };
  map["arraylist"] = { moduleTitle: "Collections Framework", moduleSlug: "collections", lessonTitle: "ArrayList Class", lessonSlug: "arraylist" };
  map["hashmap"] = { moduleTitle: "Collections Framework", moduleSlug: "collections", lessonTitle: "HashMap Class", lessonSlug: "hashmap" };
  map["exceptions"] = { moduleTitle: "Exception Handling", moduleSlug: "exceptions", lessonTitle: "Exceptions Overview", lessonSlug: "exceptions-overview" };
  map["try catch"] = { moduleTitle: "Exception Handling", moduleSlug: "exceptions", lessonTitle: "Try-Catch Blocks", lessonSlug: "try-catch" };
  map["files"] = { moduleTitle: "File Handling", moduleSlug: "file-handling", lessonTitle: "File Handling Basics", lessonSlug: "file-handling-basics" };
  map["file handling"] = { moduleTitle: "File Handling", moduleSlug: "file-handling", lessonTitle: "File Handling Basics", lessonSlug: "file-handling-basics" };
  map["generics"] = { moduleTitle: "Java Generics", moduleSlug: "generics", lessonTitle: "Generics Overview", lessonSlug: "generics-overview" };
  
  return map;
}
