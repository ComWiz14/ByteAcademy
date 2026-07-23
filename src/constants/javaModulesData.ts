import { ModuleData } from '../types';

export const JAVA_MODULES: ModuleData[] = [
  {
    number: 1,
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Establish the foundations of computer programming, install the Java development environment, and compile your first live software program.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    objectives: [
      'Understand how computer software translates instructions into binary execution.',
      'Configure the Java Development Kit (JDK) on your local computer.',
      'Configure VS Code with the Java Extension Pack for development.',
      'Write, compile using javac, and run a complete Java program.'
    ],
    lessons: [
      {
        title: 'What is Programming?',
        slug: 'what-is-programming',
        description: 'Understand the concept of writing code to give precise instructions to a computer.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'What is a Programming Language?',
        slug: 'what-is-a-programming-language',
        description: 'Discover the differences between low-level assembly, compiled languages, and interpreted environments.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Why Learn Java?',
        slug: 'why-learn-java',
        description: 'Explore the power of Java, its platform independence (WORA), and why it remains a global standard.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Installing Java (JDK)',
        slug: 'installing-java-jdk',
        description: 'Step-by-step guide to installing the OpenJDK and verifying your local installation via CLI.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Installing VS Code',
        slug: 'installing-vs-code',
        description: 'Download and set up Visual Studio Code as your primary lightweight Java workspace.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Using a Text Editor',
        slug: 'using-a-text-editor',
        description: 'Learn how to write raw code inside standard text editors and understand formatting structures.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Compiling Java Programs',
        slug: 'compiling-java-programs',
        description: 'Learn about javac, compilation stages, and how your source code is transformed into JVM bytecode.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Running Java Programs',
        slug: 'running-java-programs',
        description: 'Use the java launcher to execute compiled bytecode files directly inside the Virtual Machine.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Your First Java Program',
        slug: 'your-first-java-program',
        description: 'Deconstruct the syntax of a standard HelloWorld class and understand each required keyword.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    number: 2,
    slug: 'java-fundamentals',
    title: 'Java Fundamentals',
    description: 'Learn the foundational building blocks of the Java language including variables, operators, memory allocation, and code blocks.',
    duration: '4 hours',
    difficulty: 'Beginner',
    objectives: [
      'Master the 8 primitive data types and reference variables.',
      'Perform calculation arithmetic, comparisons, and logic assignments.',
      'Collect interactive keyboard input and write styled text outputs.',
      'Enforce proper naming guidelines and formatting structures.'
    ],
    lessons: [
      {
        title: 'Variables',
        slug: 'variables',
        description: 'Learn how variables act as named storage containers in system memory.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Data Types',
        slug: 'data-types',
        description: 'Understand the distinct sizes, values, and characteristics of Java primitives and reference classes.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Operators',
        slug: 'operators',
        description: 'Perform equations and evaluations using arithmetic, assignment, relational, and logical syntax.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Input and Output',
        slug: 'input-and-output',
        description: 'Read input from users using Scanner and print formatted output strings to the system console.',
        readingTime: '14 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Comments',
        slug: 'comments',
        description: 'Document your code cleanly using single-line, multi-line, and Javadoc comments.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Type Casting',
        slug: 'type-casting',
        description: 'Safely convert data between compatible numeric types using widening and narrowing syntax.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Java Math Class',
        slug: 'java-math-class',
        description: 'Perform advanced calculations with ease using Java\'s built-in Math methods and constants.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Keywords',
        slug: 'keywords',
        description: 'Familiarize yourself with Java reserved keywords that have dedicated, fixed language behaviors.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Naming Conventions',
        slug: 'naming-conventions',
        description: 'Apply industry standard camelCase, PascalCase, and SCREAMING_SNAKE_CASE styles.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Semicolons',
        slug: 'semicolons',
        description: 'Understand statement boundaries and avoid common compilation syntax errors.',
        readingTime: '6 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Code Blocks',
        slug: 'code-blocks',
        description: 'Define block structures using curly braces to govern variable lifetime and visibility scopes.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    number: 3,
    slug: 'control-flow',
    title: 'Control Flow in Java',
    description: 'Direct program execution dynamically using logical decision blocks and repeating loop systems.',
    duration: '3.5 hours',
    difficulty: 'Beginner',
    objectives: [
      'Write conditional code branches using if, else if, and else logic.',
      'Simplify multi-branch scenarios with robust switch statements.',
      'Implement repeating operations using for, while, and do-while loops.',
      'Control loop cycles with break and continue statements.'
    ],
    lessons: [
      {
        title: 'Introduction to Control Flow',
        slug: 'introduction-to-control-flow',
        description: 'Learn how programs make decisions and repeat tasks instead of executing straight down.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'if Statements',
        slug: 'if-statements',
        description: 'Execute blocks of code selectively based on boolean conditions.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'if-else Statements',
        slug: 'if-else-statements',
        description: 'Provide fallback execution paths for alternative logical scenarios.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'else-if Statements',
        slug: 'else-if-statements',
        description: 'Chain multiple logical checks in sequence to handle various paths.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Nested if Statements',
        slug: 'nested-if-statements',
        description: 'Place conditional structures inside other conditionals for complex logic.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'switch Statements',
        slug: 'switch-statements',
        description: 'Simplify multi-branch scenarios when testing a single expression.',
        readingTime: '14 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'while Loops',
        slug: 'while-loops',
        description: 'Repeat operations dynamically as long as a target condition is true.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'do-while Loops',
        slug: 'do-while-loops',
        description: 'Guarantee a block of code runs at least once before validating conditions.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'for Loops',
        slug: 'for-loops',
        description: 'Perform count-controlled iterations with localized index variables.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Nested Loops',
        slug: 'nested-loops',
        description: 'Iterate loops within loops to manage complex coordinates and tables.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'break and continue',
        slug: 'break-and-continue',
        description: 'Control and alter normal iteration cycles programmatically.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    number: 4,
    slug: 'methods',
    title: 'Methods in Java',
    description: 'Organize your algorithms into reusable, functional blocks that accept parameters, return values, and simplify your program structure.',
    duration: '4 hours',
    difficulty: 'Beginner',
    objectives: [
      'Deconstruct methods into signatures, parameters, and return statements.',
      'Understand the visual execution flow when calling methods.',
      'Differentiate between method parameters (definitions) and arguments (inputs).',
      'Overload methods to handle diverse data arguments under a single name.',
      'Organize code blocks into highly readable, clean modular programs.'
    ],
    lessons: [
      {
        title: 'Introduction to Methods',
        slug: 'introduction-to-methods',
        description: 'Understand what a method is, why programmers use them, and the problems with writing everything inside main().',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Creating Methods',
        slug: 'creating-methods',
        description: 'Learn the returnType methodName() structure and how to create your own custom methods step-by-step.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Calling Methods',
        slug: 'calling-methods',
        description: 'Learn the difference between creating a method and executing it, and how Java handles calling code.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Parameters and Arguments',
        slug: 'parameters-and-arguments',
        description: 'Pass actual live data variables into methods as input parameters for flexible calculations.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Return Values',
        slug: 'return-values',
        description: 'Understand the return keyword and how to return and store calculated results from methods.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Void Methods',
        slug: 'void-methods',
        description: 'Learn what void means, and when to create methods that perform actions without returning data.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Method Scope and Local Variables',
        slug: 'method-scope-and-local-variables',
        description: 'Understand variable visibility, local variables, and why local names are isolated within methods.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Method Overloading',
        slug: 'method-overloading',
        description: 'Write multiple methods with identical names but different parameters to process diverse input types.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Passing Values to Methods',
        slug: 'passing-values-to-methods',
        description: 'Learn how primitive values are passed by copy and explore a beginner-friendly overview of reference types.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Writing Clean Programs Using Methods',
        slug: 'writing-clean-programs-using-methods',
        description: 'Deconstruct a larger program into clean, well-organized helper methods to build good programming habits.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Debugging Java Programs',
        slug: 'debugging-java-programs',
        description: 'Learn to systematically identify, understand, and resolve syntax, runtime, and logical errors in your Java programs.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    number: 5,
    slug: 'programming-problem-solving',
    title: 'Programming Problem Solving',
    description: 'Learn to develop systematic problem-solving thinking, analyze constraints, design algorithms, write pseudocode, and debug logically before typing Java code.',
    duration: '3.5 hours',
    difficulty: 'Beginner',
    objectives: [
      'Deconstruct vague specifications into concrete Inputs, Outputs, and Constraints.',
      'Apply Decomposition to break complex, scary problems into simple checklists.',
      'Formulate clear, unambiguous algorithms and draft clean pseudocode logic.',
      'Create visual program flowcharts and dry run code using Trace Tables.',
      'Think systematically and apply the scientific method to debug compile, runtime, and logic errors.'
    ],
    lessons: [
      {
        title: 'Introduction to Problem Solving in Programming',
        slug: 'introduction-to-problem-solving',
        description: 'Understand why programming is about solving problems, and the difference between syntax rules and logical designs.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Understanding Problems Before Coding',
        slug: 'understanding-problems',
        description: 'Learn how to extract inputs, outputs, and boundary rules/constraints from requirements before coding.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Breaking Problems Into Smaller Steps',
        slug: 'breaking-problems-down',
        description: 'Master decomposition and build programs incrementally to tackle complex tasks step-by-step.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Algorithms and Step-by-Step Thinking',
        slug: 'algorithms-thinking',
        description: 'Discover how to formulate clear, unambiguous recipe instructions to solve any dynamic problem.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Pseudocode Fundamentals',
        slug: 'pseudocode-fundamentals',
        description: 'Draft your logic using simple English-like fake code to focus 100% on logical flows.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Flowcharts and Program Logic',
        slug: 'flowcharts-logic',
        description: 'Map out step-by-step branching execution paths visually using standard shapes and arrows.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Tracing Code and Dry Running Programs',
        slug: 'tracing-code-dry-running',
        description: 'Trace variable values manually using trace tables to unmask and fix logical bugs on paper.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Debugging Thinking',
        slug: 'debugging-thinking',
        description: 'Categorize errors into syntax, runtime, and logical bugs, and troubleshoot systematically.',
        readingTime: '15 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Problem Solving Mini Project',
        slug: 'problem-solving-mini-project',
        description: 'Apply the full engineering pipeline to design and implement a Student Performance Analyzer.',
        readingTime: '25 mins',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    number: 6,
    slug: 'arrays',
    title: 'Arrays',
    description: 'Learn to store and manage contiguous, fixed-size indexed sequences of data elements efficiently.',
    duration: '3 hours',
    difficulty: 'Beginner',
    objectives: [
      'Initialize single-dimensional arrays with explicit capacities or initial lists.',
      'Read and write elements securely using index-based notation.',
      'Traverse arrays using standard indexed loops and compact for-each iteration.',
      'Design multidimensional grid systems and prevent boundary crashes.'
    ],
    lessons: [
      {
        title: 'Introduction to Arrays',
        slug: 'introduction-to-arrays',
        description: 'Understand what arrays are, why they exist, and the problems they solve compared to normal variables.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Creating Arrays',
        slug: 'creating-arrays',
        description: 'Learn to declare and allocate memory for arrays of a fixed size.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Initializing Arrays',
        slug: 'initializing-arrays',
        description: 'Explore array literals, default values, and how arrays are structured in memory.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Accessing Array Elements',
        slug: 'accessing-array-elements',
        description: 'Retrieve stored values from an array using zero-indexed notation.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Modifying Array Elements',
        slug: 'modifying-array-elements',
        description: 'Learn how to safely update and manage values stored at specific positions in your arrays.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Array Length',
        slug: 'array-length',
        description: 'Determine the total capacity of an array dynamically using the .length property.',
        readingTime: '6 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Looping Through Arrays',
        slug: 'looping-through-arrays',
        description: 'Iterate over array sequences using standard index-controlled and enhanced for-each loops.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Arrays and Methods',
        slug: 'arrays-and-methods',
        description: 'Master passing arrays as parameters and returning arrays from reusable methods.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Searching and Basic Array Operations',
        slug: 'searching-and-basic-array-operations',
        description: 'Perform common calculations like totals, averages, minimums, maximums, and item searches.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Two-Dimensional Arrays',
        slug: 'two-dimensional-arrays',
        description: 'Introduce rows and columns to organize complex table or matrix datasets using nested loops.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 7,
    slug: 'strings',
    title: 'Strings',
    description: 'Master the String object class, its background immutability, and efficient sequence building.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    objectives: [
      'Understand how the JVM manages string literals in the String Constant Pool.',
      'Compare textual contents safely using string-specific equals() methods.',
      'Manipulate text efficiently using popular built-in search and mutation tools.',
      'Optimize performance when performing mass concatenations using StringBuilder.'
    ],
    lessons: [
      {
        title: 'Introduction to Strings',
        slug: 'introduction-to-strings',
        description: 'Understand what strings are, why we need them, and how text is represented in programs.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Creating and Storing Strings',
        slug: 'creating-and-storing-strings',
        description: 'Explore string variables, literals, and how Java represents text as objects.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'String Concatenation',
        slug: 'string-concatenation',
        description: 'Master combining strings together and mixing text with numeric variables.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'String Methods',
        slug: 'string-methods',
        description: 'Introduce essential built-in methods like length(), toUpperCase(), and trim().',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Accessing Characters in Strings',
        slug: 'accessing-characters-in-strings',
        description: 'Retrieve individual characters from strings using index positions and charAt().',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Comparing Strings',
        slug: 'comparing-strings',
        description: 'Learn the critical difference between reference matching (==) and content matching (.equals()).',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Searching Inside Strings',
        slug: 'searching-inside-strings',
        description: 'Use methods like contains(), indexOf(), startsWith(), and endsWith() to search text.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Changing and Replacing Text',
        slug: 'changing-and-replacing-text',
        description: 'Learn how to generate modified text versions using replace() and substring().',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Strings and User Input',
        slug: 'strings-and-user-input',
        description: 'Read textual input dynamically using Scanner with next() and nextLine().',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'String Processing Mini Project',
        slug: 'string-processing-mini-project',
        description: 'Apply variables, loops, methods, and strings to build an interactive Text Analyzer project.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 8,
    slug: 'oop',
    title: 'Object-Oriented Programming',
    description: 'Develop software matching real-world concepts by structuring blueprints with properties, actions, and key OOP principles.',
    duration: '5 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Write custom templates (classes) and generate real instances (objects) from them.',
      'Protect variables with private access and provide secure getters and setters.',
      'Derive child templates from parent classes to reuse fields and behaviors.',
      'Leverage polymorphism and abstraction via methods, abstract classes, and interfaces.'
    ],
    lessons: [
      {
        title: 'Why Object-Oriented Programming Exists',
        slug: 'why-object-oriented-programming-exists',
        description: 'Discover the limitations of procedural programming and how objects help organize complex data and behaviors.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Understanding Classes',
        slug: 'understanding-classes',
        description: 'Learn what a class represents, its structural components, and how to define one in Java.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Creating Objects',
        slug: 'creating-objects',
        description: 'Understand how to instantiate objects in memory from your classes using the new keyword.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Fields and Object Data',
        slug: 'fields-and-object-data',
        description: 'Explore instance variables, object state, and how to store data inside individual objects.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Object Methods',
        slug: 'object-methods',
        description: 'Combine data with actions by defining custom behaviors and methods inside your classes.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Constructors',
        slug: 'constructors',
        description: 'Master constructor methods to initialize object properties with custom values on creation.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'The this Keyword',
        slug: 'the-this-keyword',
        description: 'Learn how to resolve variable shadowing and reference the active object using Java’s this keyword.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Encapsulation',
        slug: 'encapsulation',
        description: 'Secure class fields behind private boundaries and expose them safely with public getters and setters.',
        readingTime: '12 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Combining Classes and Objects',
        slug: 'combining-classes-and-objects',
        description: 'Examine a practical library system that integrates multiple interacting classes and arrays of objects.',
        readingTime: '12 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Mini Project – Student Management System',
        slug: 'mini-project-student-management-system',
        description: 'Build an interactive program to create, store, display, and search student records using core OOP.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 9,
    slug: 'advanced-oop',
    title: 'Advanced Object-Oriented Programming',
    description: 'Master advanced architectural designs by learning inheritance, polymorphism, abstract templates, behavioral contracts, and composition.',
    duration: '4 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Share common variables and methods down class trees using inheritance.',
      'Refine or replace inherited behaviors dynamically using method overriding.',
      'Treat different subclasses identically under one parent type using polymorphism.',
      'Design incomplete structures and contract APIs via abstract classes and interfaces.'
    ],
    lessons: [
      {
        title: 'The Need for Advanced OOP',
        slug: 'need-for-advanced-oop',
        description: 'Understand the challenges of building large systems with redundant class definitions.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Inheritance Basics',
        slug: 'inheritance-basics',
        description: 'Establish clear parent-child class hierarchies using the extends keyword.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Using Inherited Methods and Variables',
        slug: 'using-inherited-methods-and-variables',
        description: 'Learn how child classes consume parent fields and interact with protected and private access controls.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Method Overriding',
        slug: 'method-overriding',
        description: 'Customize or rewrite parent class actions safely using the @Override annotation.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'The super Keyword',
        slug: 'the-super-keyword',
        description: 'Invoke hidden parent class methods and chain constructors correctly from child contexts.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Polymorphism',
        slug: 'polymorphism',
        description: 'Store diverse child objects under unified parent reference variables to create highly flexible loops.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Abstract Classes',
        slug: 'abstract-classes',
        description: 'Create protected blueprint classes containing abstract methods that child subclasses must complete.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Interfaces',
        slug: 'interfaces',
        description: 'Sign pure behavioral contracts that enable completely unrelated classes to share identical actions.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Composition vs. Inheritance',
        slug: 'composition-vs-inheritance',
        description: 'Learn when to model code using "Is-A" family structures versus "Has-A" reference properties.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'OOP Mini Project',
        slug: 'oop-mini-project',
        description: 'Build a fully-functional simple Banking System combining inheritance, polymorphism, and composition.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 10,
    slug: 'collections',
    title: 'Collections',
    description: 'Manage dynamic collections of data elements using lists, lookup maps, and non-duplicate sets.',
    duration: '4 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Construct resizable list structures utilizing ArrayList and LinkedList.',
      'Store fast key-value maps with HashMap and understand lookup hashing.',
      'Prevent value duplications in collections using HashSet.',
      'Implement data structures like Queues and Stacks and traverse elements using Iterators.'
    ],
    lessons: [
      {
        title: 'Introduction to Collections Framework',
        slug: 'introduction-to-collections-framework',
        description: 'Discover why collections exist, the limitations of standard arrays, and a high-level overview of List, Set, and Map.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'ArrayList Basics',
        slug: 'arraylist-basics',
        description: 'Learn how to create ArrayLists, add elements, access elements by index, and remove items dynamically.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Working with ArrayList Methods',
        slug: 'working-with-arraylist-methods',
        description: 'Explore built-in methods like add(), get(), set(), remove(), size(), and contains() to simplify coding.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Looping Through Collections',
        slug: 'looping-through-collections',
        description: 'Master traversing collection elements using traditional loops and modern enhanced for-each loops.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'LinkedList',
        slug: 'linkedlist',
        description: 'Understand doubly-linked nodes, how they compare to ArrayLists, and when to use each.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'HashSet',
        slug: 'hashset',
        description: 'Store unique, unordered collections of elements and automatically discard duplicate entries.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'HashMap',
        slug: 'hashmap',
        description: 'Map unique keys to values to implement fast, powerful associative lookups.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Iterators',
        slug: 'iterators',
        description: 'Learn how to safely traverse and modify collection structures using explicit Iterator cursors.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Collections with Objects',
        slug: 'collections-with-objects',
        description: 'Combine object-oriented principles by storing custom Class objects inside dynamic Collections.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Collections Mini Project',
        slug: 'collections-mini-project',
        description: 'Construct a complete Student Management System combining OOP and ArrayLists with error guards.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 11,
    slug: 'exception-handling',
    title: 'Exception Handling',
    description: 'Safeguard your programs from crashing by catching errors, handling exceptions, and ensuring safe resource recovery.',
    duration: '4 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Understand the difference between compilation errors, logic defects, and dynamic runtime exceptions.',
      'Intercept errors cleanly with try, catch, and finally blocks without crashing execution.',
      'Differentiate common exceptions like ArithmeticException, NullPointerException, and NumberFormatException.',
      'Propagate exceptions cleanly using throw and throws, and create custom exception classes for domain logic.'
    ],
    lessons: [
      {
        title: 'Understanding Errors and Exceptions',
        slug: 'understanding-errors-and-exceptions',
        description: 'Distinguish between syntax errors, logic errors, and exceptional runtime occurrences in your code.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Introduction to Exceptions',
        slug: 'introduction-to-exceptions',
        description: 'Discover how Java represents program failures as objects and the hierarchy behind exceptions.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Common Java Exceptions',
        slug: 'common-java-exceptions',
        description: 'Examine typical runtime failures like ArithmeticException and NullPointerException and what triggers them.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'The try-catch Block',
        slug: 'try-catch-block',
        description: 'Establish safety zones to intercept potential crashes and handle them gracefully.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Multiple Catch Blocks',
        slug: 'multiple-catch-blocks',
        description: 'Handle different types of errors with specialized diagnostic paths and understand catch order.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Finally Block',
        slug: 'finally-block',
        description: 'Guarantee files and system hooks close correctly, regardless of whether failures occurred.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Throwing Exceptions',
        slug: 'throwing-exceptions',
        description: 'Actively generate and launch exception events when software boundaries are breached.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'The Throws Keyword',
        slug: 'the-throws-keyword',
        description: 'Explicitly delegate exception handling responsibility backward to method callers.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Creating Custom Exceptions',
        slug: 'creating-custom-exceptions',
        description: 'Extend Java\'s core exception classes to represent specific domain issues like insufficient balances.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Exception Handling Mini Project',
        slug: 'exception-handling-mini-project',
        description: 'Construct an interactive, robust ATM simulation that handles bad inputs and invalid withdrawals safely.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 12,
    slug: 'file-handling',
    title: 'File Handling',
    description: 'Connect with local hard drives to read text documents, write logs, and persist user parameters.',
    duration: '3 hours',
    difficulty: 'Intermediate',
    objectives: [
      'Understand the difference between RAM and permanent storage.',
      'Create and check file existences programmatically using the File class.',
      'Read data from text files using FileReader and BufferedReader.',
      'Write data into files cleanly using FileWriter and BufferedWriter.',
      'Handle potential file system errors robustly using try-catch blocks.'
    ],
    lessons: [
      {
        title: 'Introduction to File Handling',
        slug: 'introduction-to-file-handling',
        description: 'Understand the difference between temporary memory (RAM) and permanent storage, and how programs interact with files.',
        readingTime: '8 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Working with Files in Java',
        slug: 'working-with-files-in-java',
        description: 'Learn how to represent, create, and inspect files using Java\'s File class.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Reading Data From Files',
        slug: 'reading-data-from-files',
        description: 'Master reading text streams dynamically using FileReader and BufferedReader.',
        readingTime: '12 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Writing Data Into Files',
        slug: 'writing-data-into-files',
        description: 'Save variables and student profiles permanently to disk using FileWriter and BufferedWriter.',
        readingTime: '12 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Handling File Exceptions',
        slug: 'handling-file-exceptions',
        description: 'Protect against path errors and missing permissions using robust exception guards.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'File Handling Mini Project',
        slug: 'file-handling-mini-project',
        description: 'Construct a complete Student Records System that integrates files, classes, and collections.',
        readingTime: '15 mins',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    number: 13,
    slug: 'advanced-java',
    title: 'Java Generics',
    description: 'Master reusable, type-safe data structures using Java Generics.',
    duration: '4 hours',
    difficulty: 'Advanced',
    objectives: [
      'Learn how type safety prevents runtime ClassCastException crashes.',
      'Create custom generic classes with type parameter placeholders.',
      'Implement custom generic methods to process diverse argument types.',
      'Understand how professional Collections work using type variables.',
      'Apply wildcard bounds like extends and super to maximize API flexibility.'
    ],
    lessons: [
      {
        title: 'Introduction to Generics',
        slug: 'introduction-to-generics',
        description: 'Discover the purpose of generics, how they enforce type safety, and how Java worked before them.',
        readingTime: '10 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Generic Classes',
        slug: 'generic-classes',
        description: 'Build flexible classes that accept type parameters as data container placeholders.',
        readingTime: '12 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Generic Methods',
        slug: 'generic-methods',
        description: 'Author methods that accept diverse argument types safely using their own generic type variables.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Generics With Collections',
        slug: 'generics-with-collections',
        description: 'Connect generics with dynamic lists, sets, and maps to store structured custom objects.',
        readingTime: '12 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Understanding Type Safety',
        slug: 'understanding-type-safety',
        description: 'Dive deep into compiler verification, casting prevention, and how generics save developer time.',
        readingTime: '10 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Wildcards in Generics',
        slug: 'wildcards-in-generics',
        description: 'Harness upper, lower, and unbounded wildcard bounds to write incredibly flexible generic API interfaces.',
        readingTime: '12 mins',
        difficulty: 'Advanced'
      },
      {
        title: 'Generics Practice',
        slug: 'generics-practice',
        description: 'Complete hands-on programming challenges combining generic storages, classes, and helper methods.',
        readingTime: '15 mins',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    number: 14,
    slug: 'mini-projects',
    title: 'Exercises & Projects',
    description: 'Apply everything you have learned throughout the Java roadmap in a practical, hands-on coding lab. Master concepts from basic loops to full portfolio-ready software architectures.',
    duration: '12 hours',
    difficulty: 'Advanced',
    objectives: [
      'Solve fundamental syntax exercises to lock in procedural programming muscle memory.',
      'Integrate Object-Oriented design patterns, exception protection, and collection managers.',
      'Construct complete, self-contained terminal-based enterprise system prototypes.',
      'Design fully realized production-grade software applications fit for developer portfolios.'
    ],
    lessons: [
      {
        title: 'Beginner Exercises',
        slug: 'beginner-exercises',
        description: 'Warm up your coding muscles with 15+ focused exercises covering loops, casting, control flow, and arrays.',
        readingTime: '20 mins',
        difficulty: 'Beginner'
      },
      {
        title: 'Intermediate Exercises',
        slug: 'intermediate-challenges',
        description: 'Design algorithmic and Object-Oriented solutions for 10+ real-world interactive components.',
        readingTime: '30 mins',
        difficulty: 'Intermediate'
      },
      {
        title: 'Advanced Exercises',
        slug: 'advanced-challenges',
        description: 'Architect multi-layered command-line application prototypes combining core Java subsystems.',
        readingTime: '45 mins',
        difficulty: 'Advanced'
      },
      {
        title: 'Portfolio Projects',
        slug: 'portfolio-projects',
        description: 'Develop enterprise-ready, professional Java applications designed to stand out in your resume.',
        readingTime: '60 mins',
        difficulty: 'Advanced'
      }
    ]
  }
];
