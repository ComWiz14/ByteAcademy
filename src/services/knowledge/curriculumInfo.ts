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
    title: "Getting Started",
    description: "Establish the foundations of computer programming, install the Java development environment, and compile your first live software program.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "what-is-programming",
        title: "What is Programming?",
        description: "Understand the concept of writing code to give precise instructions to a computer.",
        coveredConcepts: ["Algorithms", "Binary", "Source code", "Logic", "Computer execution"]
      },
      {
        slug: "what-is-a-programming-language",
        title: "What is a Programming Language?",
        description: "Discover the differences between low-level assembly, compiled languages, and interpreted environments.",
        coveredConcepts: ["High-level language", "Assembly language", "Machine instructions", "Compilers vs Interpreters"]
      },
      {
        slug: "why-learn-java",
        title: "Why Learn Java?",
        description: "Explore the power of Java, its platform independence (WORA), and why it remains a global standard.",
        coveredConcepts: ["Write Once Run Anywhere", "Platform independence", "WORA", "Enterprise applications", "Android development"]
      },
      {
        slug: "installing-java-jdk",
        title: "Installing Java (JDK)",
        description: "Step-by-step guide to installing the OpenJDK and verifying your local installation via CLI.",
        coveredConcepts: ["JDK (Java Development Kit)", "JRE", "JVM", "Environment variables", "PATH variable", "Command line verification", "javac version"]
      },
      {
        slug: "installing-vs-code",
        title: "Installing VS Code",
        description: "Download and set up Visual Studio Code as your primary lightweight Java workspace.",
        coveredConcepts: ["IDE vs Text Editor", "Visual Studio Code", "Extension Pack for Java", "Coding Workspace setup"]
      },
      {
        slug: "using-a-text-editor",
        title: "Using a Text Editor",
        description: "Learn how to write raw code inside standard text editors and understand formatting structures.",
        coveredConcepts: ["Plaintext editing", "File encodings", "Tab spaces", "Syntax indentation"]
      },
      {
        slug: "compiling-java-programs",
        title: "Compiling Java Programs",
        description: "Learn about javac, compilation stages, and how your source code is transformed into JVM bytecode.",
        coveredConcepts: ["javac compiler", "Compiler stages", "Syntax verification", "Bytecode", "class file generation"]
      },
      {
        slug: "running-java-programs",
        title: "Running Java Programs",
        description: "Use the java launcher to execute compiled bytecode files directly inside the Virtual Machine.",
        coveredConcepts: ["java command", "JVM execution", "Runtime environment", "Standard memory allocation"]
      },
      {
        slug: "your-first-java-program",
        title: "Your First Java Program",
        description: "Deconstruct the syntax of a standard HelloWorld class and understand each required keyword.",
        coveredConcepts: ["public class", "public static void main", "String[] args", "System.out.println", "Curly braces", "Semicolons", "Anatomy of HelloWorld"]
      }
    ]
  },
  {
    moduleNumber: 2,
    slug: "java-fundamentals",
    title: "Java Fundamentals",
    description: "Learn the foundational building blocks of the Java language including variables, operators, memory allocation, and code blocks.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "variables",
        title: "Variables",
        description: "Learn how variables act as named storage containers in system memory.",
        coveredConcepts: ["Variable declaration", "Variable initialization", "System memory", "final keyword", "Constants"]
      },
      {
        slug: "data-types",
        title: "Data Types",
        description: "Understand the distinct sizes, values, and characteristics of Java primitives and reference classes.",
        coveredConcepts: ["Primitive data types", "Reference types", "byte", "short", "int", "long", "float", "double", "char", "boolean", "Stack vs Heap memory basics"]
      },
      {
        slug: "operators",
        title: "Operators",
        description: "Perform equations and evaluations using arithmetic, assignment, relational, and logical syntax.",
        coveredConcepts: ["Arithmetic operators (+, -, *, /, %)", "Assignment operators", "Relational operators (==, !=, <, >)", "Logical operators (&&, ||, !)", "Operator precedence"]
      },
      {
        slug: "input-and-output",
        title: "Input and Output",
        description: "Read input from users using Scanner and print formatted output strings to the system console.",
        coveredConcepts: ["System.out.print", "System.out.println", "java.util.Scanner", "System.in", "nextLine()", "nextInt()", "nextDouble()", "Buffer flushing"]
      },
      {
        slug: "command-line-arguments",
        title: "Command-Line Arguments",
        description: "Learn how to pass dynamic inputs to the main method at program launch using the args array.",
        coveredConcepts: ["public static void main", "String[] args", "args[0]", "args.length", "ArrayIndexOutOfBoundsException", "Integer.parseInt()", "Double.parseDouble()", "NumberFormatException"]
      },
      {
        slug: "comments",
        title: "Comments",
        description: "Document your code cleanly using single-line, multi-line, and Javadoc comments.",
        coveredConcepts: ["Single-line comments (//)", "Multi-line comments (/* */)", "Javadoc comments (/** */)", "Code documentation", "Readable code design"]
      },
      {
        slug: "type-casting",
        title: "Type Casting",
        description: "Safely convert data between compatible numeric types using widening and narrowing syntax.",
        coveredConcepts: ["Widening casting (automatic)", "Narrowing casting (explicit)", "Type compatibility", "Data truncation", "Explicit cast operator"]
      },
      {
        slug: "java-math-class",
        title: "Java Math Class",
        description: "Perform advanced calculations with ease using Java's built-in Math methods and constants.",
        coveredConcepts: ["Math.max()", "Math.min()", "Math.pow()", "Math.sqrt()", "Math.abs()", "Math.random()", "Math.round()", "Math.floor()", "Math.ceil()", "Math.PI", "Scaling random integers"]
      },
      {
        slug: "keywords",
        title: "Keywords",
        description: "Familiarize yourself with Java reserved keywords that have dedicated, fixed language behaviors.",
        coveredConcepts: ["Reserved words", "class keyword", "public", "static", "void", "Identifiers constraints"]
      },
      {
        slug: "naming-conventions",
        title: "Naming Conventions",
        description: "Apply industry standard camelCase, PascalCase, and SCREAMING_SNAKE_CASE styles.",
        coveredConcepts: ["camelCase", "PascalCase", "SCREAMING_SNAKE_CASE", "Class naming", "Method naming", "Variable naming", "Constant naming"]
      },
      {
        slug: "semicolons",
        title: "Semicolons",
        description: "Understand statement boundaries and avoid common compilation syntax errors.",
        coveredConcepts: ["Statement boundary", "Compilation errors", "Syntax delimiters", "Empty statements"]
      },
      {
        slug: "code-blocks",
        title: "Code Blocks",
        description: "Define block structures using curly braces to govern variable lifetime and visibility scopes.",
        coveredConcepts: ["Curly braces", "Block structure", "Variable lifetime", "Variable scope", "Nested blocks"]
      }
    ]
  },
  {
    moduleNumber: 3,
    slug: "control-flow",
    title: "Control Flow in Java",
    description: "Direct program execution dynamically using logical decision blocks and repeating loop systems.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "introduction-to-control-flow",
        title: "Introduction to Control Flow",
        description: "Learn how programs make decisions and repeat tasks instead of executing straight down.",
        coveredConcepts: ["Sequential execution", "Decision making", "Iteration", "Branching"]
      },
      {
        slug: "if-statements",
        title: "if Statements",
        description: "Execute blocks of code selectively based on boolean conditions.",
        coveredConcepts: ["if keyword", "Boolean condition evaluation", "Conditional block"]
      },
      {
        slug: "if-else-statements",
        title: "if-else Statements",
        description: "Provide fallback execution paths for alternative logical scenarios.",
        coveredConcepts: ["if-else structure", "Fallback execution path", "Mutual exclusivity"]
      },
      {
        slug: "else-if-statements",
        title: "else-if Statements",
        description: "Chain multiple logical checks in sequence to handle various paths.",
        coveredConcepts: ["else-if chains", "Multiple conditions", "Sequential evaluation rules"]
      },
      {
        slug: "nested-if-statements",
        title: "Nested if Statements",
        description: "Place conditional structures inside other conditionals for complex logic.",
        coveredConcepts: ["Nesting conditionals", "Inner conditions", "Complex branching filters"]
      },
      {
        slug: "switch-statements",
        title: "switch Statements",
        description: "Simplify multi-branch scenarios when testing a single expression.",
        coveredConcepts: ["switch keyword", "case labels", "break statement", "default label", "Variable compatibility"]
      },
      {
        slug: "while-loops",
        title: "while Loops",
        description: "Repeat operations dynamically as long as a target condition is true.",
        coveredConcepts: ["while loop", "Pre-test condition", "Loop control variables", "Infinite loops"]
      },
      {
        slug: "do-while-loops",
        title: "do-while Loops",
        description: "Guarantee a block of code runs at least once before validating conditions.",
        coveredConcepts: ["do-while loop", "Post-test condition", "Guaranteed single iteration", "Loop syntax differences"]
      },
      {
        slug: "for-loops",
        title: "for Loops",
        description: "Perform count-controlled iterations with localized index variables.",
        coveredConcepts: ["for loop", "Loop initialization", "Loop termination check", "Increment/decrement step", "Localized index scope"]
      },
      {
        slug: "nested-loops",
        title: "Nested Loops",
        description: "Iterate loops within loops to manage complex coordinates and tables.",
        coveredConcepts: ["Nesting loops", "Inner loop iterations", "Outer loop iterations", "Coordinate systems", "Matrix coordinates"]
      },
      {
        slug: "break-and-continue",
        title: "break and continue",
        description: "Control and alter normal iteration cycles programmatically.",
        coveredConcepts: ["break statement", "continue statement", "Loop termination override", "Skip current iteration"]
      }
    ]
  },
  {
    moduleNumber: 4,
    slug: "methods",
    title: "Methods in Java",
    description: "Organize your algorithms into reusable, functional blocks that accept parameters, return values, and simplify your program structure.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "introduction-to-methods",
        title: "Introduction to Methods",
        description: "Understand what a method is, why programmers use them, and the problems with writing everything inside main().",
        coveredConcepts: ["Code reusability", "Modular design", "Procedural abstractions", "Main method limitations"]
      },
      {
        slug: "creating-methods",
        title: "Creating Methods",
        description: "Learn the returnType methodName() structure and how to create your own custom methods step-by-step.",
        coveredConcepts: ["Method header", "Method body", "Method return type", "static modifier basics"]
      },
      {
        slug: "calling-methods",
        title: "Calling Methods",
        description: "Learn the difference between creating a method and executing it, and how Java handles calling code.",
        coveredConcepts: ["Method invocation", "Call stack mechanics", "Program execution flow"]
      },
      {
        slug: "parameters-and-arguments",
        title: "Parameters and Arguments",
        description: "Pass actual live data variables into methods as input parameters for flexible calculations.",
        coveredConcepts: ["Parameters vs Arguments", "Parameter data types", "Multiple parameters", "Order of parameters"]
      },
      {
        slug: "return-values",
        title: "Return Values",
        description: "Understand the return keyword and how to return and store calculated results from methods.",
        coveredConcepts: ["return keyword", "Non-void methods", "Return values", "Capturing return data"]
      },
      {
        slug: "void-methods",
        title: "Void Methods",
        description: "Learn what void means, and when to create methods that perform actions without returning data.",
        coveredConcepts: ["void keyword", "Action-only methods", "Early return inside void"]
      },
      {
        slug: "method-scope-and-local-variables",
        title: "Method Scope and Local Variables",
        description: "Understand variable visibility, local variables, and why local names are isolated within methods.",
        coveredConcepts: ["Local variables", "Method scope", "Name isolation", "Field shadowing"]
      },
      {
        slug: "method-overloading",
        title: "Method Overloading",
        description: "Write multiple methods with identical names but different parameters to process diverse input types.",
        coveredConcepts: ["Overloading signature", "Parameter count difference", "Parameter type difference", "Compile-time resolution"]
      },
      {
        slug: "passing-values-to-methods",
        title: "Passing Values to Methods",
        description: "Learn how primitive values are passed by copy and explore a beginner-friendly overview of reference types.",
        coveredConcepts: ["Pass-by-value", "Copy of primitive data", "Reference parameters", "Address copying"]
      },
      {
        slug: "writing-clean-programs-using-methods",
        title: "Writing Clean Programs Using Methods",
        description: "Deconstruct a larger program into clean, well-organized helper methods to build good programming habits.",
        coveredConcepts: ["Decomposition", "Helper methods", "Readability design", "Code organization"]
      },
      {
        slug: "debugging-java-programs",
        title: "Debugging Java Programs",
        description: "Learn to systematically identify, understand, and resolve syntax, runtime, and logical errors in your Java programs.",
        coveredConcepts: ["Syntax errors", "Runtime exceptions", "Logical bugs", "System.out.println tracing", "Call stack traces", "Systematic debugging"]
      }
    ]
  },
  {
    moduleNumber: 5,
    slug: "programming-problem-solving",
    title: "Programming Problem Solving",
    description: "Learn to develop systematic problem-solving thinking, analyze constraints, design algorithms, write pseudocode, and debug logically before typing Java code.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "introduction-to-problem-solving",
        title: "Introduction to Problem Solving in Programming",
        description: "Understand why programming is about solving problems, and the difference between syntax rules and logical designs.",
        coveredConcepts: ["Computational thinking", "Logic design vs Language syntax", "Decomposition", "Abstractions"]
      },
      {
        slug: "understanding-problems",
        title: "Understanding Problems Before Coding",
        description: "Learn how to extract inputs, outputs, and boundary rules/constraints from requirements before coding.",
        coveredConcepts: ["Problem analysis", "Inputs extracting", "Outputs extracting", "Constraints", "Boundary rules"]
      },
      {
        slug: "breaking-problems-down",
        title: "Breaking Problems Into Smaller Steps",
        description: "Master decomposition and build programs incrementally to tackle complex tasks step-by-step.",
        coveredConcepts: ["Decomposition", "Incremental development", "Stepwise refinement", "Scaffolding"]
      },
      {
        slug: "algorithms-thinking",
        title: "Algorithms and Step-by-Step Thinking",
        description: "Discover how to formulate clear, unambiguous recipe instructions to solve any dynamic problem.",
        coveredConcepts: ["Algorithm design", "Unambiguous instructions", "Recipe model", "Efficiency basics"]
      },
      {
        slug: "pseudocode-fundamentals",
        title: "Pseudocode Fundamentals",
        description: "Draft your logic using simple English-like fake code to focus 100% on logical flows.",
        coveredConcepts: ["Pseudocode syntax", "Fake-coding rules", "Logic formulation", "Language-independent drafts"]
      },
      {
        slug: "flowcharts-logic",
        title: "Flowcharts and Program Logic",
        description: "Map out step-by-step branching execution paths visually using standard shapes and arrows.",
        coveredConcepts: ["Flowcharts symbols", "Process box", "Decision diamond", "Input/output parallelogram", "Start/end ovals"]
      },
      {
        slug: "tracing-code-dry-running",
        title: "Tracing Code and Dry Running Programs",
        description: "Trace variable values manually using trace tables to unmask and fix logical bugs on paper.",
        coveredConcepts: ["Dry running", "Code tracing", "Trace tables", "Tracking variables step-by-step"]
      },
      {
        slug: "debugging-thinking",
        title: "Debugging Thinking",
        description: "Categorize errors into syntax, runtime, and logical bugs, and troubleshoot systematically.",
        coveredConcepts: ["Syntax errors", "Runtime exceptions", "Logical bugs", "The scientific debugging method"]
      },
      {
        slug: "problem-solving-mini-project",
        title: "Problem Solving Mini Project",
        description: "Apply the full engineering pipeline to design and implement a Student Performance Analyzer.",
        coveredConcepts: ["Engineering pipeline", "Design and analysis", "Pseudocode draft", "Implementation check", "Dry run tracing"]
      }
    ]
  },
  {
    moduleNumber: 6,
    slug: "arrays",
    title: "Arrays",
    description: "Learn to store and manage contiguous, fixed-size indexed sequences of data elements efficiently.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "introduction-to-arrays",
        title: "Introduction to Arrays",
        description: "Understand what arrays are, why they exist, and the problems they solve compared to normal variables.",
        coveredConcepts: ["Contiguous memory", "Array purpose", "Collection of items", "Homogeneous data types"]
      },
      {
        slug: "creating-arrays",
        title: "Creating Arrays",
        description: "Learn to declare and allocate memory for arrays of a fixed size.",
        coveredConcepts: ["Array declaration", "new keyword", "Memory allocation size", "Fixed sizing constraints"]
      },
      {
        slug: "initializing-arrays",
        title: "Initializing Arrays",
        description: "Explore array literals, default values, and how arrays are structured in memory.",
        coveredConcepts: ["Array initializers", "Array literals", "Default values (0, null, false)", "Heap references"]
      },
      {
        slug: "accessing-array-elements",
        title: "Accessing Array Elements",
        description: "Retrieve stored values from an array using zero-indexed notation.",
        coveredConcepts: ["Array index", "Zero-based indexing", "Value retrieval", "ArrayIndexOutOfBoundsException"]
      },
      {
        slug: "modifying-array-elements",
        title: "Modifying Array Elements",
        description: "Learn how to safely update and manage values stored at specific positions in your arrays.",
        coveredConcepts: ["Array assignment", "Index-based modification", "Element updates"]
      },
      {
        slug: "array-length",
        title: "Array Length",
        description: "Determine the total capacity of an array dynamically using the .length property.",
        coveredConcepts: ["length field", "Array size check", "Dynamic index constraints", "Constant size"]
      },
      {
        slug: "looping-through-arrays",
        title: "Looping Through Arrays",
        description: "Iterate over array sequences using standard index-controlled and enhanced for-each loops.",
        coveredConcepts: ["Indexed loops", "Enhanced for-each loop", "Read-only iteration limits", "Index access comparisons"]
      },
      {
        slug: "arrays-and-methods",
        title: "Arrays and Methods",
        description: "Master passing arrays as parameters and returning arrays from reusable methods.",
        coveredConcepts: ["Array parameters", "Returning arrays", "Reference copy mechanics", "In-place modifications"]
      },
      {
        slug: "searching-and-basic-array-operations",
        title: "Searching and Basic Array Operations",
        description: "Perform common calculations like totals, averages, minimums, maximums, and item searches.",
        coveredConcepts: ["Linear search", "Array calculations", "Sum accumulation", "Min/Max tracking"]
      },
      {
        slug: "two-dimensional-arrays",
        title: "Two-Dimensional Arrays",
        description: "Introduce rows and columns to organize complex table or matrix datasets using nested loops.",
        coveredConcepts: ["2D arrays", "Grid rows and columns", "Nested loops iteration", "Jagged array designs"]
      }
    ]
  },
  {
    moduleNumber: 7,
    slug: "strings",
    title: "Strings",
    description: "Master the String object class, its background immutability, and efficient sequence building.",
    difficulty: "Beginner",
    lessons: [
      {
        slug: "introduction-to-strings",
        title: "Introduction to Strings",
        description: "Understand what strings are, why we need them, and how text is represented in programs.",
        coveredConcepts: ["java.lang.String", "Character sequences", "Objects", "Text values"]
      },
      {
        slug: "creating-and-storing-strings",
        title: "Creating and Storing Strings",
        description: "Explore string variables, literals, and how Java represents text as objects.",
        coveredConcepts: ["String literals", "String Constant Pool", "new String() allocation", "Heap memory structure"]
      },
      {
        slug: "string-concatenation",
        title: "String Concatenation",
        description: "Master combining strings together and mixing text with numeric variables.",
        coveredConcepts: ["Concatenation operator (+)", "concat() method", "Type coercion", "String conversion"]
      },
      {
        slug: "string-methods",
        title: "String Methods",
        description: "Introduce essential built-in methods like length(), toUpperCase(), and trim().",
        coveredConcepts: ["length()", "toUpperCase()", "toLowerCase()", "trim()", "String utilities"]
      },
      {
        slug: "accessing-characters-in-strings",
        title: "Accessing Characters in Strings",
        description: "Retrieve individual characters from strings using index positions and charAt().",
        coveredConcepts: ["charAt() method", "Character indexing", "StringIndexOutOfBoundsException"]
      },
      {
        slug: "comparing-strings",
        title: "Comparing Strings",
        description: "Learn the critical difference between reference matching (==) and content matching (.equals()).",
        coveredConcepts: ["== operator vs equals()", "Reference equality", "Logical content equality", "equalsIgnoreCase()"]
      },
      {
        slug: "searching-inside-strings",
        title: "Searching Inside Strings",
        description: "Use methods like contains(), indexOf(), startsWith(), and endsWith() to search text.",
        coveredConcepts: ["contains()", "indexOf()", "lastIndexOf()", "startsWith()", "endsWith()"]
      },
      {
        slug: "changing-and-replacing-text",
        title: "Changing and Replacing Text",
        description: "Learn how to generate modified text versions using replace() and substring().",
        coveredConcepts: ["replace()", "substring() bounds", "String immutability impact"]
      },
      {
        slug: "strings-and-user-input",
        title: "Strings and User Input",
        description: "Read textual input dynamically using Scanner with next() and nextLine().",
        coveredConcepts: ["Scanner.next()", "Scanner.nextLine()", "Token reading vs line reading", "New-line buffer clearing"]
      },
      {
        slug: "string-processing-mini-project",
        title: "String Processing Mini Project",
        description: "Apply variables, loops, methods, and strings to build an interactive Text Analyzer project.",
        coveredConcepts: ["Text Analyzer", "Character counting", "Word parsing", "Pattern checking", "Synthesis of concepts"]
      }
    ]
  },
  {
    moduleNumber: 8,
    slug: "oop",
    title: "Object-Oriented Programming",
    description: "Develop software matching real-world concepts by structuring blueprints with properties, actions, and key OOP principles.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "why-object-oriented-programming-exists",
        title: "Why Object-Oriented Programming Exists",
        description: "Discover the limitations of procedural programming and how objects help organize complex data and behaviors.",
        coveredConcepts: ["Procedural limitations", "Spaghetti code danger", "Object-oriented modeling", "State and Behavior integration"]
      },
      {
        slug: "understanding-classes",
        title: "Understanding Classes",
        description: "Learn what a class represents, its structural components, and how to define one in Java.",
        coveredConcepts: ["Class blueprint", "Class structure", "Defining a class"]
      },
      {
        slug: "creating-objects",
        title: "Creating Objects",
        description: "Understand how to instantiate objects in memory from your classes using the new keyword.",
        coveredConcepts: ["Object instantiation", "new keyword", "Heap allocation", "Reference variables"]
      },
      {
        slug: "fields-and-object-data",
        title: "Fields and Object Data",
        description: "Explore instance variables, object state, and how to store data inside individual objects.",
        coveredConcepts: ["Instance variables", "Object state", "Field definitions", "Default field values"]
      },
      {
        slug: "object-methods",
        title: "Object Methods",
        description: "Combine data with actions by defining custom behaviors and methods inside your classes.",
        coveredConcepts: ["Instance methods", "Object behaviors", "Accessing fields inside methods", "Dot operator (.) context"]
      },
      {
        slug: "constructors",
        title: "Constructors",
        description: "Master constructor methods to initialize object properties with custom values on creation.",
        coveredConcepts: ["Constructor method", "No return type rule", "Constructor overloading", "Default compiler constructor"]
      },
      {
        slug: "the-this-keyword",
        title: "The this Keyword",
        description: "Learn how to resolve variable shadowing and reference the active object using Java’s this keyword.",
        coveredConcepts: ["this reference", "Field shadowing resolution", "Chaining constructors with this()"]
      },
      {
        slug: "encapsulation",
        title: "Encapsulation",
        description: "Secure class fields behind private boundaries and expose them safely with public getters and setters.",
        coveredConcepts: ["Data hiding", "private modifier", "public getters and setters", "Encapsulation validation"]
      },
      {
        slug: "combining-classes-and-objects",
        title: "Combining Classes and Objects",
        description: "Examine a practical library system that integrates multiple interacting classes and arrays of objects.",
        coveredConcepts: ["Class integration", "Arrays of objects", "Object cooperation", "Complex state aggregation"]
      },
      {
        slug: "mini-project-student-management-system",
        title: "Mini Project – Student Management System",
        description: "Build an interactive program to create, store, display, and search student records using core OOP.",
        coveredConcepts: ["Student Management System", "Record instantiation", "ArrayList of custom objects", "OOP synthesis"]
      }
    ]
  },
  {
    moduleNumber: 9,
    slug: "advanced-oop",
    title: "Advanced Object-Oriented Programming",
    description: "Master advanced architectural designs by learning inheritance, polymorphism, abstract templates, behavioral contracts, and composition.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "need-for-advanced-oop",
        title: "The Need for Advanced OOP",
        description: "Understand the challenges of building large systems with redundant class definitions.",
        coveredConcepts: ["Code duplication", "Maintainability bottlenecks", "Design patterns overview"]
      },
      {
        slug: "inheritance-basics",
        title: "Inheritance Basics",
        description: "Establish clear parent-child class hierarchies using the extends keyword.",
        coveredConcepts: ["extends keyword", "Superclass (Parent)", "Subclass (Child)", "Single inheritance constraint"]
      },
      {
        slug: "using-inherited-methods-and-variables",
        title: "Using Inherited Methods and Variables",
        description: "Learn how child classes consume parent fields and interact with protected and private access controls.",
        coveredConcepts: ["Inherited variables", "Inherited methods", "protected modifier", "private boundaries in subclass"]
      },
      {
        slug: "method-overriding",
        title: "Method Overriding",
        description: "Customize or rewrite parent class actions safely using the @Override annotation.",
        coveredConcepts: ["Method overriding", "@Override annotation", "Signature matching rules", "Overriding vs Overloading"]
      },
      {
        slug: "the-super-keyword",
        title: "The super Keyword",
        description: "Invoke hidden parent class methods and chain constructors correctly from child contexts.",
        coveredConcepts: ["super keyword", "super() constructor call", "Parent method calling", "Constructor chaining order"]
      },
      {
        slug: "polymorphism",
        title: "Polymorphism",
        description: "Store diverse child objects under unified parent reference variables to create highly flexible loops.",
        coveredConcepts: ["Polymorphism", "Polymorphic references", "Upcasting", "Dynamic method dispatch", "Runtime method resolution"]
      },
      {
        slug: "abstract-classes",
        title: "Abstract Classes",
        description: "Create protected blueprint classes containing abstract methods that child subclasses must complete.",
        coveredConcepts: ["abstract class keyword", "Abstract methods without body", "Concrete methods in abstract class", "Preventing direct instantiation"]
      },
      {
        slug: "interfaces",
        title: "Interfaces",
        description: "Sign pure behavioral contracts that enable completely unrelated classes to share identical actions.",
        coveredConcepts: ["interface keyword", "implements keyword", "Multiple interface implementations", "Contractual design", "Constant fields"]
      },
      {
        slug: "composition-vs-inheritance",
        title: "Composition vs. Inheritance",
        description: "Learn when to model code using \"Is-A\" family structures versus \"Has-A\" reference properties.",
        coveredConcepts: ["Is-A relationship", "Has-A relationship", "Composition design", "Loose coupling"]
      },
      {
        slug: "oop-mini-project",
        title: "OOP Mini Project",
        description: "Build a fully-functional simple Banking System combining inheritance, polymorphism, and composition.",
        coveredConcepts: ["Polymorphic Bank Accounts", "Account inheritance hierarchies", "System composition", "Polymorphic iterations"]
      }
    ]
  },
  {
    moduleNumber: 10,
    slug: "collections",
    title: "Collections",
    description: "Manage dynamic collections of data elements using lists, lookup maps, and non-duplicate sets.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "introduction-to-collections-framework",
        title: "Introduction to Collections Framework",
        description: "Discover why collections exist, the limitations of standard arrays, and a high-level overview of List, Set, and Map.",
        coveredConcepts: ["java.util.Collection", "Array limitations", "Resizable collections", "List, Set, Map interfaces"]
      },
      {
        slug: "arraylist-basics",
        title: "ArrayList Basics",
        description: "Learn how to create ArrayLists, add elements, access elements by index, and remove items dynamically.",
        coveredConcepts: ["ArrayList declaration", "Generics placeholder syntax (<E>)", "Wrapper classes", "Auto-boxing"]
      },
      {
        slug: "working-with-arraylist-methods",
        title: "Working with ArrayList Methods",
        description: "Explore built-in methods like add(), get(), set(), remove(), size(), and contains() to simplify coding.",
        coveredConcepts: ["add()", "get()", "set()", "remove() by index/object", "size()", "contains()", "clear()"]
      },
      {
        slug: "looping-through-collections",
        title: "Looping Through Collections",
        description: "Master traversing collection elements using traditional loops and modern enhanced for-each loops.",
        coveredConcepts: ["Collection traversal", "Indexed loop", "Enhanced for-each loop", "Read-only iteration rules"]
      },
      {
        slug: "linkedlist",
        title: "LinkedList",
        description: "Understand doubly-linked nodes, how they compare to ArrayLists, and when to use each.",
        coveredConcepts: ["Doubly linked list model", "ArrayList vs LinkedList", "Insert/delete complexity", "Pointer references"]
      },
      {
        slug: "hashset",
        title: "HashSet",
        description: "Store unique, unordered collections of elements and automatically discard duplicate entries.",
        coveredConcepts: ["java.util.HashSet", "Unique keys", "Duplicate elimination", "Unordered iteration"]
      },
      {
        slug: "hashmap",
        title: "HashMap",
        description: "Map unique keys to values to implement fast, powerful associative lookups.",
        coveredConcepts: ["java.util.HashMap", "Key-Value pairs", "put()", "get()", "containsKey()", "keySet()", "Unique keys rule"]
      },
      {
        slug: "iterators",
        title: "Iterators",
        description: "Learn how to safely traverse and modify collection structures using explicit Iterator cursors.",
        coveredConcepts: ["java.util.Iterator", "hasNext()", "next()", "remove() during iteration", "ConcurrentModificationException avoidance"]
      },
      {
        slug: "collections-with-objects",
        title: "Collections with Objects",
        description: "Combine object-oriented principles by storing custom Class objects inside dynamic Collections.",
        coveredConcepts: ["ArrayList of objects", "Object searches inside lists", "Object mappings", "Custom comparison checks"]
      },
      {
        slug: "collections-mini-project",
        title: "Collections Mini Project",
        description: "Construct a complete Student Management System combining OOP and ArrayLists with error guards.",
        coveredConcepts: ["Robust collections synthesis", "Input validations", "Arraylist management", "Records lookup functions"]
      }
    ]
  },
  {
    moduleNumber: 11,
    slug: "exception-handling",
    title: "Exception Handling",
    description: "Safeguard your programs from crashing by catching errors, handling exceptions, and ensuring safe resource recovery.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "understanding-errors-and-exceptions",
        title: "Understanding Errors and Exceptions",
        description: "Distinguish between syntax errors, logic errors, and exceptional runtime occurrences in your code.",
        coveredConcepts: ["Syntax defects", "Runtime errors", "Logical glitches", "Dynamic execution issues"]
      },
      {
        slug: "introduction-to-exceptions",
        title: "Introduction to Exceptions",
        description: "Discover how Java represents program failures as objects and the hierarchy behind exceptions.",
        coveredConcepts: ["java.lang.Throwable", "Error class", "Exception class", "Checked vs Unchecked Exceptions", "RuntimeException class"]
      },
      {
        slug: "common-java-exceptions",
        title: "Common Java Exceptions",
        description: "Examine typical runtime failures like ArithmeticException and NullPointerException and what triggers them.",
        coveredConcepts: ["ArithmeticException", "NullPointerException", "ArrayIndexOutOfBoundsException", "NumberFormatException", "ClassCastException"]
      },
      {
        slug: "try-catch-block",
        title: "The try-catch Block",
        description: "Establish safety zones to intercept potential crashes and handle them gracefully.",
        coveredConcepts: ["try block", "catch block", "Stack trace dumps", "Graceful system recovery"]
      },
      {
        slug: "multiple-catch-blocks",
        title: "Multiple Catch Blocks",
        description: "Handle different types of errors with specialized diagnostic paths and understand catch order.",
        coveredConcepts: ["Multiple catches", "Exceptions order constraint", "Child-to-Parent catching rule"]
      },
      {
        slug: "finally-block",
        title: "Finally Block",
        description: "Guarantee files and system hooks close correctly, regardless of whether failures occurred.",
        coveredConcepts: ["finally keyword", "Mandatory cleanup execution", "Resource release validation"]
      },
      {
        slug: "throwing-exceptions",
        title: "Throwing Exceptions",
        description: "Actively generate and launch exception events when software boundaries are breached.",
        coveredConcepts: ["throw keyword", "Instantiating Throwable", "Active validation barriers"]
      },
      {
        slug: "the-throws-keyword",
        title: "The Throws Keyword",
        description: "Explicitly delegate exception handling responsibility backward to method callers.",
        coveredConcepts: ["throws keyword in header", "Checked exception delegation", "Call-stack propagation"]
      },
      {
        slug: "creating-custom-exceptions",
        title: "Creating Custom Exceptions",
        description: "Extend Java's core exception classes to represent specific domain issues like insufficient balances.",
        coveredConcepts: ["extends Exception", "extends RuntimeException", "Custom error constructors", "Domain assertions"]
      },
      {
        slug: "exception-handling-mini-project",
        title: "Exception Handling Mini Project",
        description: "Construct an interactive, robust ATM simulation that handles bad inputs and invalid withdrawals safely.",
        coveredConcepts: ["ATM simulation logic", "Withdraw exception validation", "Keyboard inputs validation", "Nested try-catches"]
      }
    ]
  },
  {
    moduleNumber: 12,
    slug: "file-handling",
    title: "File Handling",
    description: "Connect with local hard drives to read text documents, write logs, and persist user parameters.",
    difficulty: "Intermediate",
    lessons: [
      {
        slug: "introduction-to-file-handling",
        title: "Introduction to File Handling",
        description: "Understand the difference between temporary memory (RAM) and permanent storage, and how programs interact with files.",
        coveredConcepts: ["Volatile RAM vs non-volatile storage", "File streams", "Persistence basics"]
      },
      {
        slug: "working-with-files-in-java",
        title: "Working with Files in Java",
        description: "Learn how to represent, create, and inspect files using Java's File class.",
        coveredConcepts: ["java.io.File", "exists()", "createNewFile()", "delete()", "getName()", "getAbsolutePath()"]
      },
      {
        slug: "reading-data-from-files",
        title: "Reading Data From Files",
        description: "Master reading text streams dynamically using FileReader and BufferedReader.",
        coveredConcepts: ["FileReader", "BufferedReader", "readLine() loop", "try-with-resources", "AutoCloseable"]
      },
      {
        slug: "writing-data-into-files",
        title: "Writing Data Into Files",
        description: "Save variables and student profiles permanently to disk using FileWriter and BufferedWriter.",
        coveredConcepts: ["FileWriter", "BufferedWriter", "write()", "newLine()", "appendMode parameter"]
      },
      {
        slug: "handling-file-exceptions",
        title: "Handling File Exceptions",
        description: "Protect against path errors and missing permissions using robust exception guards.",
        coveredConcepts: ["IOException", "FileNotFoundException", "Permission errors handling", "Path resolution checks"]
      },
      {
        slug: "file-handling-mini-project",
        title: "File Handling Mini Project",
        description: "Construct a complete Student Records System that integrates files, classes, and collections.",
        coveredConcepts: ["Files storage mapping", "CSV parser implementation", "Saves state on exit", "Reads database on start"]
      }
    ]
  },
  {
    moduleNumber: 13,
    slug: "advanced-java",
    title: "Java Generics",
    description: "Master reusable, type-safe data structures using Java Generics.",
    difficulty: "Advanced",
    lessons: [
      {
        slug: "introduction-to-generics",
        title: "Introduction to Generics",
        description: "Discover the purpose of generics, how they enforce type safety, and how Java worked before them.",
        coveredConcepts: ["Generics need", "Type safety enforcement", "ClassCastException elimination", "Pre-generics Object casting"]
      },
      {
        slug: "generic-classes",
        title: "Generic Classes",
        description: "Build flexible classes that accept type parameters as data container placeholders.",
        coveredConcepts: ["Generic Class <T>", "Type parameters naming (T, E, K, V)", "Dynamic instances type allocation"]
      },
      {
        slug: "generic-methods",
        title: "Generic Methods",
        description: "Author methods that accept diverse argument types safely using their own generic type variables.",
        coveredConcepts: ["Generic method header", "Type parameter list prefix", "Bounded type parameters (<T extends Number>)"]
      },
      {
        slug: "generics-with-collections",
        title: "Generics With Collections",
        description: "Connect generics with dynamic lists, sets, and maps to store structured custom objects.",
        coveredConcepts: ["List<T> declarations", "Type safety validation", "Collections interoperability"]
      },
      {
        slug: "understanding-type-safety",
        title: "Understanding Type Safety",
        description: "Dive deep into compiler verification, casting prevention, and how generics save developer time.",
        coveredConcepts: ["Compile-time checking", "Type Erasure mechanics", "Runtime backward compatibility"]
      },
      {
        slug: "wildcards-in-generics",
        title: "Wildcards in Generics",
        description: "Harness upper, lower, and unbounded wildcard bounds to write incredibly flexible generic API interfaces.",
        coveredConcepts: ["Wildcard symbol (?)", "Upper bounded wildcards (? extends T)", "Lower bounded wildcards (? super T)", "Unbounded wildcards (?)"]
      },
      {
        slug: "generics-practice",
        title: "Generics Practice",
        description: "Complete hands-on programming challenges combining generic storages, classes, and helper methods.",
        coveredConcepts: ["Generic containers", "Polymorphic generic arrays", "Type bounded sorting challenges"]
      }
    ]
  },
  {
    moduleNumber: 14,
    slug: "mini-projects",
    title: "Exercises & Projects",
    description: "Apply everything you have learned throughout the Java roadmap in a practical, hands-on coding lab. Master concepts from basic loops to full portfolio-ready software architectures.",
    difficulty: "Advanced",
    lessons: [
      {
        slug: "beginner-exercises",
        title: "Beginner Exercises",
        description: "Warm up your coding muscles with 15+ focused exercises covering loops, casting, control flow, and arrays.",
        coveredConcepts: ["Basic math logic", "Decision chains", "Single dimensional arrays iteration", "Simple console IO"]
      },
      {
        slug: "intermediate-challenges",
        title: "Intermediate Exercises",
        description: "Design algorithmic and Object-Oriented solutions for 10+ real-world interactive components.",
        coveredConcepts: ["Method designs", "OOP structures", "String processing logic", "Simple exception recoveries"]
      },
      {
        slug: "advanced-challenges",
        title: "Advanced Exercises",
        description: "Architect multi-layered command-line application prototypes combining core Java subsystems.",
        coveredConcepts: ["Subsystem integration", "File streams mapping", "ArrayLists indexing", "Custom error boundaries"]
      },
      {
        slug: "portfolio-projects",
        title: "Portfolio Projects",
        description: "Develop enterprise-ready, professional Java applications designed to stand out in your resume.",
        coveredConcepts: ["Multi-class systems architecture", "Generics caching modules", "Robust persistence layers", "Portfolio ready assets"]
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
  map["arrays"] = { moduleTitle: "Arrays", moduleSlug: "arrays", lessonTitle: "Introduction to Arrays", lessonSlug: "introduction-to-arrays" };
  map["array"] = { moduleTitle: "Arrays", moduleSlug: "arrays", lessonTitle: "Introduction to Arrays", lessonSlug: "introduction-to-arrays" };
  map["loops"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "while Loops / for Loops", lessonSlug: "for-loops" };
  map["loop"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "while Loops / for Loops", lessonSlug: "for-loops" };
  map["for loop"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "for Loops", lessonSlug: "for-loops" };
  map["while loop"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "while Loops", lessonSlug: "while-loops" };
  map["do while"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "do-while Loops", lessonSlug: "do-while-loops" };
  map["if else"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "if-else Statements", lessonSlug: "if-else-statements" };
  map["switch"] = { moduleTitle: "Control Flow in Java", moduleSlug: "control-flow", lessonTitle: "switch Statements", lessonSlug: "switch-statements" };
  map["methods"] = { moduleTitle: "Methods in Java", moduleSlug: "methods", lessonTitle: "Introduction to Methods", lessonSlug: "introduction-to-methods" };
  map["method"] = { moduleTitle: "Methods in Java", moduleSlug: "methods", lessonTitle: "Introduction to Methods", lessonSlug: "introduction-to-methods" };
  map["variables"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Variables", lessonSlug: "variables" };
  map["variable"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Variables", lessonSlug: "variables" };
  map["primitives"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Data Types", lessonSlug: "data-types" };
  map["data types"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Data Types", lessonSlug: "data-types" };
  map["type casting"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Type Casting", lessonSlug: "type-casting" };
  map["command line"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Command-Line Arguments", lessonSlug: "command-line-arguments" };
  map["command line arguments"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Command-Line Arguments", lessonSlug: "command-line-arguments" };
  map["args"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Command-Line Arguments", lessonSlug: "command-line-arguments" };
  map["math"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Java Math Class", lessonSlug: "java-math-class" };
  map["math class"] = { moduleTitle: "Java Fundamentals", moduleSlug: "java-fundamentals", lessonTitle: "Java Math Class", lessonSlug: "java-math-class" };
  map["debugging"] = { moduleTitle: "Methods in Java", moduleSlug: "methods", lessonTitle: "Debugging Java Programs", lessonSlug: "debugging-java-programs" };
  map["debugging java programs"] = { moduleTitle: "Methods in Java", moduleSlug: "methods", lessonTitle: "Debugging Java Programs", lessonSlug: "debugging-java-programs" };
  map["inheritance"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Inheritance Basics", lessonSlug: "inheritance-basics" };
  map["polymorphism"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Polymorphism", lessonSlug: "polymorphism" };
  map["encapsulation"] = { moduleTitle: "Object-Oriented Programming", moduleSlug: "oop", lessonTitle: "Encapsulation", lessonSlug: "encapsulation" };
  map["abstraction"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Abstract Classes", lessonSlug: "abstract-classes" };
  map["interfaces"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Interfaces", lessonSlug: "interfaces" };
  map["abstract class"] = { moduleTitle: "Advanced Object-Oriented Programming", moduleSlug: "advanced-oop", lessonTitle: "Abstract Classes", lessonSlug: "abstract-classes" };
  map["collections"] = { moduleTitle: "Collections", moduleSlug: "collections", lessonTitle: "Introduction to Collections Framework", lessonSlug: "introduction-to-collections-framework" };
  map["arraylist"] = { moduleTitle: "Collections", moduleSlug: "collections", lessonTitle: "ArrayList Basics", lessonSlug: "arraylist-basics" };
  map["hashmap"] = { moduleTitle: "Collections", moduleSlug: "collections", lessonTitle: "HashMap", lessonSlug: "hashmap" };
  map["exceptions"] = { moduleTitle: "Exception Handling", moduleSlug: "exception-handling", lessonTitle: "Understanding Errors and Exceptions", lessonSlug: "understanding-errors-and-exceptions" };
  map["try catch"] = { moduleTitle: "Exception Handling", moduleSlug: "exception-handling", lessonTitle: "The try-catch Block", lessonSlug: "try-catch-block" };
  map["files"] = { moduleTitle: "File Handling", moduleSlug: "file-handling", lessonTitle: "Introduction to File Handling", lessonSlug: "introduction-to-file-handling" };
  map["file handling"] = { moduleTitle: "File Handling", moduleSlug: "file-handling", lessonTitle: "Introduction to File Handling", lessonSlug: "introduction-to-file-handling" };
  map["generics"] = { moduleTitle: "Java Generics", moduleSlug: "advanced-java", lessonTitle: "Introduction to Generics", lessonSlug: "introduction-to-generics" };
  
  return map;
}
