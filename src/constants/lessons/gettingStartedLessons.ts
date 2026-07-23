import { DetailedLessonContent } from '../../types';

export const GETTING_STARTED_LESSONS: Record<string, DetailedLessonContent> = {
  'what-is-programming': {
    slug: 'what-is-programming',
    title: 'What Is Programming?',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Welcome to the world of programming! Before writing complex lines of code in Java, we need to understand the big picture. What are we actually doing when we write software?

In short, programming is the act of instructing a computer to perform tasks. But unlike humans, computers are incredibly literal and require instructions to be broken down into absolute, unambiguous steps. Learning to program is more about training your brain to think with logical precision than just learning vocabulary words.`,
    whyThisTopicMatters: {
      whyItExists: 'Computers are incredibly fast and capable of storing massive amounts of data, but they lack human intuition. They cannot "figure out" what we want. To build software, websites, apps, or games, we must learn to think like a computer and speak their language with absolute clarity.',
      problemSolved: 'Programming bridges the gap between human ideas and silicon hardware. It translates high-level concepts (like "send a text message" or "calculate the shortest delivery route") into electrical impulses and instructions that processor chips can execute in microseconds.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Think of a computer program as a recipe. If you tell a human chef to "add a pinch of salt," they intuitively know how much that is based on experience. If you tell a computer, it will stop and error. It needs to know: What is salt? Where is the salt? What exact weight in grams constitutes a pinch? Which hand should pick up the shaker? Under what conditions should we stop shaking?'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Algorithm',
          definition: 'A step-by-step set of operations or rules to be followed in calculations or other problem-solving operations.',
          explanation: 'An algorithm is like a blueprint or recipe. It is the logical plan to solve a problem, independent of any specific programming language.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'The term "bug" for a computer glitch originates from 1947 when Grace Hopper, a pioneering computer scientist, found a literal moth trapped in a physical relay of the Harvard Mark II computer. She taped the moth into her logbook with the entry: "First actual case of bug being found."'
      },
      {
        type: 'paragraph',
        text: 'In computer science, we use programming languages to write our algorithms. Languages like Java act as translators. We write instructions that look somewhat like English (high-level source code), and the programming environment translates them into binary instruction sets that computer chips can read.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Binary Code',
          definition: 'A coding system using the binary digits 0 and 1 to represent letters, numbers, or other characters in a computer.',
          explanation: 'At their lowest level, computer chips only understand on and off switches. Binary 1 represents ON (electrical charge), and 0 represents OFF (no charge).'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Always remember: Computers are extremely fast, but extremely dumb. They will do exactly what you tell them to do, even if it causes a crash. The art of programming is anticipating every edge case.'
      },
      {
        type: 'bullet_list',
        title: 'The Three Core Structures of Programming',
        items: [
          '**Sequence**: Executing instructions one after another, in order, from top to bottom (like reading a book).',
          '**Selection**: Making decisions and branching execution paths based on conditions (e.g., IF it is raining, open an umbrella; ELSE walk normally).',
          '**Iteration**: Repeating a set of instructions multiple times (loops), which allows computers to do repetitive chores in milliseconds.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'When writing code, focus first on understanding the logical flow. Write it down in plain English (pseudocode) before trying to translate it to Java syntax.'
      }
    ],
    codeExamples: [
      {
        title: 'A Simple Procedural Program in Java',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Step 1: Initialize variables (Sequence)
        int temperature = 24; // Degrees Celsius
        boolean isRainy = true;

        // Step 2: Make a decision based on conditions (Selection)
        if (isRainy) {
            System.out.println("Step 1: Grab an umbrella!");
        }

        if (temperature > 30) {
            System.out.println("Step 2: Wear a t-shirt!");
        } else {
            System.out.println("Step 2: Wear a jacket!");
        }

        // Step 3: Iterate / Repeat a process (Iteration)
        System.out.println("Step 3: Taking 3 steps outside:");
        for (int step = 1; step <= 3; step++) {
            System.out.println(" - Walked step number " + step);
        }
    }
}`,
        explanation: 'This simple Java program demonstrates the three core structures of programming. First, it runs sequentially. Second, it uses "if" and "else" statements to select different instructions based on weather conditions. Third, it uses a "for" loop to repeat the walking sequence exactly three times.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Program Execution Flow',
        description: 'See how the CPU routes control step-by-step through our example program based on initial conditions.',
        elements: {
          steps: [
            { id: '1', label: 'Start Program', desc: 'Initialize variables (temperature = 24, isRainy = true)', type: 'start' },
            { id: '2', label: 'Condition: isRainy?', desc: 'Checks if isRainy is true. Since it is, execute the true path.', type: 'decision' },
            { id: '3', label: 'Action: Grab Umbrella', desc: 'Prints "Step 1: Grab an umbrella!" to the screen.', type: 'action' },
            { id: '4', label: 'Condition: temp > 30?', desc: 'Checks if 24 > 30. It is false, so it takes the else branch.', type: 'decision' },
            { id: '5', label: 'Action: Wear Jacket', desc: 'Prints "Step 2: Wear a jacket!" to the screen.', type: 'action' },
            { id: '6', label: 'Loop: Walk 1 to 3', desc: 'Initializes loop counter, repeats the walk step printout.', type: 'loop' },
            { id: '7', label: 'End Program', desc: 'Program terminates successfully.', type: 'end' }
          ]
        }
      },
      {
        type: 'memory',
        title: 'System Memory Allocation (RAM)',
        description: 'An abstract visualization of how variables are mapped into memory addresses when the program starts.',
        elements: {
          cells: [
            { address: '0x00A1', name: 'temperature', value: '24', type: 'integer (4 bytes)' },
            { address: '0x00A5', name: 'isRainy', value: 'true', type: 'boolean (1 bit)' },
            { address: '0x00A6', name: 'args', value: 'Reference to String[]', type: 'reference (8 bytes)' }
          ]
        }
      },
      {
        type: 'comparison_table',
        title: 'Human vs. Computer Instructions',
        description: 'Comparing how humans interpret loose commands versus how literal computers require them.',
        elements: {
          headers: ['Human Instruction Style', 'Computer Instruction Style'],
          rows: [
            ['"Make some tea."', '1. Locate kettle. 2. Verify water level > 100ml. 3. Turn kettle on. 4. Wait until temperature = 100°C.'],
            ['"Clean up the room."', '1. Identify objects on floor. 2. If object is book, put on shelf. 3. If trash, throw in bin. Repeat for all objects.'],
            ['"Check if number is even."', '1. Divide number by 2. 2. Calculate the remainder. 3. If remainder is equal to 0, result is true.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming the computer knows what you mean without explicit statements.',
        whyItHappens: 'As humans, we are highly accustomed to conversational contexts where our peers fill in logic gaps or interpret general intent.',
        howToAvoid: 'Break down your logic into the absolute lowest level of steps. Never write an action unless you have defined all its variables and instructions first.',
        codeSnippet: {
          bad: `// ❌ ERROR pseudocode that fails
if (userIsHappy) {
    smile(); // Java doesn't know what userIsHappy is, or what smile() does!
}`,
          good: `// ✓ CORRECT Java code with explicit definitions
boolean userIsHappy = true;

if (userIsHappy) {
    System.out.println(":)"); // Executable line the computer understands
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Logical Instruction Sequencing',
      tasks: [
        'Write a detailed logical pseudocode algorithm to brew a cup of coffee. Ensure you do not skip any steps (e.g., checking water level, boiling kettle, adding sugar, inserting mug).',
        'Identify which parts of your coffee brewing algorithm represent a Sequence, which represent a Selection (if-else condition), and which represent Iteration (a loop).',
        'Translate your algorithm into a plain numbered list of instructions so literal that a robot could follow them without spilling water or getting stuck.',
        'Describe what would happen if a single instruction (e.g. "place the mug on the tray before pouring") was forgotten, and explain how that constitutes a "bug" in your algorithm.',
        'Identify an everyday computerized device (such as a microwave, traffic light, or vending machine) and write down a detailed step-by-step algorithm it might use to process a single user request.'
      ]
    },
    summary: [
      'Programming is the discipline of authoring clear, unambiguous, step-by-step algorithms to solve problems.',
      'Computers are highly capable and fast, but completely literal; they do exactly what is coded, with no context guessing.',
      'All software logic is built using three essential pillars: Sequence, Selection (decision paths), and Iteration (repetition loop cycles).',
      'Developing a logical, systematic problem-solving mindset is far more critical than simply memorizing the syntax of any language.'
    ]
  },

  'what-is-a-programming-language': {
    slug: 'what-is-a-programming-language',
    title: 'What Is a Programming Language?',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Just like humans use English, Spanish, or Japanese to communicate with one another, programmers use programming languages to communicate with computers. 

But there is a major difference: human languages are fluid and tolerate ambiguity, whereas computer languages must be mathematically precise. A programming language is a structured system of notation designed to describe algorithms in a form that both humans can read and computer microchips can execute.`,
    whyThisTopicMatters: {
      whyItExists: 'At their lowest level, computer processors can only understand binary code (streams of 0s and 1s representing electrical currents). Writing software directly in binary is incredibly slow, error-prone, and practically impossible for complex applications. Programming languages were invented to let humans write instructions in an English-like format.',
      problemSolved: 'They solve the problem of human productivity. Instead of flipping physical switches or writing millions of binary digits, we write high-level code. Specialized tools called compilers and interpreters then translate this human-readable code into raw machine instructions.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Programming languages exist on a spectrum from low-level to high-level, depending on how close they are to the computer hardware versus human speech.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Machine Code',
          definition: 'The lowest-level language of a computer, consisting entirely of binary numbers (0s and 1s) that the CPU runs directly.',
          explanation: 'Each type of processor chip (Intel, AMD, Apple Silicon) has its own native Machine Code instructions, called an instruction set architecture.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Compiler',
          definition: 'A program that translates high-level source code into low-level machine code or bytecode all at once before the program runs.',
          explanation: 'Java uses a compiler (javac) to check for syntax errors and build optimized code files that run extremely fast.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Compiled languages like C++ and Java perform syntax checks before launching. If you have an error, the compiler will refuse to build, catching bugs before your users ever run the app!'
      },
      {
        type: 'paragraph',
        text: 'Other languages use an **Interpreter**. Instead of translating the entire program beforehand, an interpreter reads and executes the source code line-by-line during runtime. For example, Python and JavaScript are typically interpreted. While this makes testing quick and easy, it is generally slower than running compiled code.'
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'Java is unique: it combines both methods! It compiles source code into an intermediate format called Bytecode, and then the Java Virtual Machine (JVM) interprets and compiles that bytecode into machine code on-the-fly when running.'
      }
    ],
    codeExamples: [
      {
        title: 'High-Level Code vs. Low-Level Output',
        language: 'java',
        code: `// High-level human-readable Java code
int sum = 5 + 10;
System.out.println("The result is: " + sum);`,
        explanation: 'This high-level code is clear to us. But the computer compiler translates it into bytecode, which consists of operations like "iload", "bipush", and "iadd" to load variables, push integers onto the execution stack, and execute hardware addition.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Compiled vs. Interpreted Languages',
        description: 'How different translation systems process and execute your programming commands.',
        elements: {
          headers: ['Feature', 'Compiled Languages (e.g., Java, C++)', 'Interpreted Languages (e.g., Python, JS)'],
          rows: [
            ['Translation Speed', 'Slow (takes time to build the whole app)', 'Instant (starts running right away)'],
            ['Execution Speed', 'Extremely Fast (pre-translated for the CPU)', 'Slower (translated line-by-line while running)'],
            ['Error Detection', 'Caught early during the compilation phase', 'Caught only when that specific line runs'],
            ['Output File', 'Generates a standalone executable (.class or .exe)', 'No standalone file; requires raw source code']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming a program will run even if it has minor syntax errors.',
        whyItHappens: 'In written human languages, minor spelling mistakes are ignored. In a compiled language like Java, a single missing semicolon will cause the compiler to halt completely.',
        howToAvoid: 'Treat the compiler as a friendly assistant rather than an enemy. Carefully read compiler error messages—they tell you exactly which line has an issue and what is missing.',
        codeSnippet: {
          bad: `// ❌ Syntax Error: Semicolon missing at the end
int balance = 500`,
          good: `// ✓ Correct Syntax: Semicolon terminates the statement
int balance = 500;`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Comparing Translators',
      tasks: [
        'Explain in your own words the difference between a Compiler and an Interpreter using a real-world translation analogy (e.g., translating a novel vs. translating a live speech).',
        'If a program has a syntax error on line 50, explain when a Compiler would notice it versus when an Interpreter would notice it.',
        'Why do you think high-level languages like Java use English words (like class, public, system, out) instead of mathematical codes?',
        'Research or brainstorm to identify three popular high-level programming languages other than Java, and note down one major area of use for each.',
        'Explain what "machine code" is and why software developers do not write programs directly in machine code today.'
      ]
    },
    summary: [
      'Programming languages translate high-level human ideas into low-level binary code (0s and 1s).',
      'Compiled languages translate the entire file first, catching spelling and structure errors before execution.',
      'Interpreted languages translate code line-by-line as the program runs, offering rapid development cycles but slower runtimes.',
      'Java uses a hybrid model: compiling into bytecode first, then executing it via the Java Virtual Machine interpreter.'
    ]
  },

  'why-learn-java': {
    slug: 'why-learn-java',
    title: 'Why Learn Java?',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Java is one of the most popular, robust, and influential programming languages in the history of computer science. Released in 1995 by Sun Microsystems (under the leadership of James Gosling), it has grown to run on billions of devices globally.

From mobile applications and cloud-hosted systems to high-performance financial systems and enterprise microservices, Java is the silent engine powering the modern world. But what makes it so special, and why is it the ideal language to start your journey?`,
    whyThisTopicMatters: {
      whyItExists: 'In the early 1990s, software had to be re-written or compiled separately for every single hardware setup (Windows PC, Macintosh, Unix server). This made writing commercial software incredibly expensive and tedious. Java was built to solve this problem.',
      problemSolved: 'Java introduced the concept of "Write Once, Run Anywhere" (WORA). Instead of compiling to a specific physical operating system, Java compiles into a universal format called bytecode. Any computer with the Java Virtual Machine (JVM) installed can execute this bytecode instantly, with no modifications.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Beyond platform independence, Java has several key features that have secured its place as an industry standard for decades:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'WORA',
          definition: 'Write Once, Run Anywhere. The software development philosophy that compiled Java code can run on all platforms supporting Java without recompilation.',
          explanation: 'Whether your user runs Windows, macOS, Linux, or a smart toaster, your compiled Java class executes perfectly without changes.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Garbage Collection',
          definition: 'The automatic process of identifying and deleting unused objects in system memory to free up RAM.',
          explanation: 'In older languages like C, developers had to manually release memory. Forgetting to do so causes a memory leak that crashes computers. Java does this automatically!'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'Java was originally named "Oak" after an oak tree that stood outside James Gosling\'s office window. It was later renamed "Java" during a brainstorming session at a local coffee shop, inspired by the high-quality coffee bean grown on the island of Java.'
      },
      {
        type: 'paragraph',
        text: 'Because Java forces clean, object-oriented habits, it is the primary language taught at top universities worldwide. Learning Java trains your brain to structure programs professionally, making it extremely easy to learn other languages like C#, C++, Python, or Swift later on.'
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Career Potential: Over 90% of Fortune 500 companies use Java backends. It powers corporate banking databases, massive servers, and is the core language behind Android app development.'
      }
    ],
    codeExamples: [
      {
        title: 'Java Safety in Action',
        language: 'java',
        code: `// Java prevents you from accessing invalid memory, avoiding fatal hardware crashes
int[] numbers = {1, 2, 3};
try {
    int invalidElement = numbers[5]; // Out of bounds
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Java caught the mistake safely before a hardware crash!");
}`,
        explanation: 'In legacy languages, accessing index 5 on a 3-element list might read raw physical RAM memory, causing an operating system blue-screen. Java intercepts this error safely at runtime.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Java vs. Legacy Languages (C/C++)',
        description: 'Comparing structural capabilities that make Java a safer, more robust workspace.',
        elements: {
          headers: ['Feature', 'Java', 'C / C++'],
          rows: [
            ['Platform Dependence', 'Platform Independent (bytecode runs on JVM)', 'Platform Dependent (compiled for specific CPU)'],
            ['Memory Management', 'Automatic (Garbage Collector handles RAM)', 'Manual (developer must allocate/deallocate)'],
            ['Pointers / Hardware Access', 'Hidden (cannot access raw hardware RAM addresses)', 'Exposed (direct access to computer memory)'],
            ['Syntax Style', 'Strict Object-Oriented (everything lives inside a class)', 'Procedural or Object-Oriented (more flexible but messy)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Thinking Java is related to JavaScript because of the name.',
        whyItHappens: 'In 1995, Netscape renamed their scripting language "JavaScript" to ride on the marketing popularity wave of Java, despite having completely different designs.',
        howToAvoid: 'Never mix up the two: Java is a strongly typed, compiled language used for backends and enterprise apps; JavaScript is a lightweight, dynamically typed scripting language used for web pages.',
        codeSnippet: {
          bad: `// ❌ JavaScript (runs dynamically inside browsers)
let myVariable = "hello";
myVariable = 42; // Allowed in JS, illegal in Java!`,
          good: `// ✓ Java (compiled, strictly checked)
String message = "hello";
// message = 42; // ❌ COMPILE ERROR! Types cannot change.`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Exploring the JVM Philosophy',
      tasks: [
        'Explain why "Write Once, Run Anywhere" is highly beneficial for a company building software that needs to run on Windows PCs, Android phones, and server farms.',
        'What is a memory leak, and how does Java\'s automatic Garbage Collection help protect computer performance?',
        'Look up three major technology companies or websites that utilize Java for their backend infrastructure and list them.',
        'Explain the core difference between Java and JavaScript in terms of their purpose, compilation, and execution environments.',
        'What does the Java Virtual Machine (JVM) do, and how does it contribute to the "Write Once, Run Anywhere" philosophy?'
      ]
    },
    summary: [
      'Java was built in 1995 to provide secure, cross-platform software systems.',
      'Platform independence is achieved via bytecode, which runs on the Java Virtual Machine (JVM).',
      'Automatic memory management (Garbage Collection) frees developers from managing raw system RAM.',
      'Java\'s strict type systems and object-oriented structure make it a global educational standard.'
    ]
  },

  'installing-java-jdk': {
    slug: 'installing-java-jdk',
    title: 'Installing Java (JDK)',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `To write and execute Java programs, you need to set up the necessary tools on your computer. 

If you download regular Java to play games like Minecraft, you only get the JRE (Java Runtime Environment). As a developer, you need the complete **JDK (Java Development Kit)**, which contains the compiler (javac) and debugging tools necessary to build software from scratch.`,
    whyThisTopicMatters: {
      whyItExists: 'A computer needs to know how to translate your high-level text files into active processor instructions. The JDK contains the translators, virtual environments, and system libraries required to compile, monitor, and run Java code.',
      problemSolved: 'Installing the JDK provides command-line utilities like "javac" (the Java Compiler) and "java" (the Bytecode launcher). It maps these utilities into your operating system terminal pathways, allowing you to build software locally.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Before installing, we must understand the three primary components of Java\'s infrastructure:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'JDK',
          definition: 'Java Development Kit. The full software development suite containing the compiler, JRE, and standard libraries needed to build Java programs.',
          explanation: 'This is the toolbox of a developer. Always install a modern JDK version (e.g., LTS 17 or LTS 21) to write Java.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'JRE',
          definition: 'Java Runtime Environment. The collection of libraries and files needed to run compiled Java programs.',
          explanation: 'The JRE is a subset of the JDK. End-users who only want to run Java games or applications without coding only need a JRE.'
        }
      },
      {
        type: 'paragraph',
        text: 'Let\'s follow the simple step-by-step installation instructions:'
      },
      {
        type: 'bullet_list',
        title: 'Step-by-Step JDK Installation',
        items: [
          '**Step 1: Download the JDK**: Go to official download pages like Adoptium (adoptium.net) and download the installer for **Eclipse Temurin JDK 21 (LTS)** matching your Operating System (Windows, macOS, or Linux).',
          '**Step 2: Run the Installer**: Open the downloaded package and follow the installation wizard. On Windows, make sure to check the option: "Add to PATH" and "Set JAVA_HOME".',
          '**Step 3: Open Terminal**: Open Command Prompt (Windows) or Terminal (macOS/Linux).',
          '**Step 4: Verify Installation**: Type the verification commands into your console.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Make sure you install JDK 17 or JDK 21 (Long-Term Support versions). They are standard in the professional industry and guarantee maximum stability.'
      }
    ],
    codeExamples: [
      {
        title: 'Verifying JDK via Command Line',
        language: 'java',
        code: `// Execute these commands in your operating system Terminal or Command Prompt (not Java!)
$ java --version
openjdk 21.0.2 2024-01-16 LTS
OpenJDK Runtime Environment Temurin (build 21.0.2+13)

$ javac --version
javac 21.0.2`,
        explanation: 'Running these commands tests if your operating system can locate the Java runtime and compiler. If both return a matching version number, your installation is successful!'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'The JDK Hierarchy',
        description: 'See how the different Java components nest inside each other.',
        elements: {
          steps: [
            { id: '1', label: 'JDK (Java Development Kit)', desc: 'Contains Compiler (javac) + Debugging Tools + JRE. Everything developers need.', type: 'start' },
            { id: '2', label: 'JRE (Java Runtime Environment)', desc: 'Contains core Class Libraries + JVM. Everything needed to run compiled programs.', type: 'action' },
            { id: '3', label: 'JVM (Java Virtual Machine)', desc: 'The physical engine that executes bytecode on your computer chip.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Receiving the error: "javac is not recognized as an internal or external command".',
        whyItHappens: 'Your operating system doesn\'t know where the JDK is stored because the system PATH environment variable wasn\'t configured during installation.',
        howToAvoid: 'Re-run the Adoptium installer and check "Set JAVA_HOME" and "Add to PATH", or manually add the JDK "bin" directory to your computer\'s Environment Variables.',
        codeSnippet: {
          bad: `// ❌ Windows CMD error
C:\\> javac MyClass.java
'javac' is not recognized as an internal or external command`,
          good: `// ✓ Correct output after fixing PATH
C:\\> javac -version
javac 21.0.2`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Local Machine Verification',
      tasks: [
        'Open your command terminal (Command Prompt on Windows, Terminal on macOS) and run "java --version" and "javac --version". Verify they are correctly recognized.',
        'If they fail, investigate if the JDK was installed or if you need to configure your environment paths manually.',
        'Describe in your own words why a software developer needs a JDK, whereas a standard computer user only needs a JRE.',
        'What is the role of the environmental PATH variable when setting up development kits like the JDK on an operating system?',
        'If your computer terminal can run the "java" command successfully but throws an error when running "javac", what does this tell you about your local Java configuration?'
      ]
    },
    summary: [
      'The JDK contains developer tools like the compiler (javac), while JRE only runs compiled bytecode.',
      'Verify installation in your terminal using "java --version" and "javac --version".',
      'The environment PATH tells your operating system where the JDK executables live on your hard drive.'
    ]
  },

  'installing-vs-code': {
    slug: 'installing-vs-code',
    title: 'Setting Up VS Code',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Writing code in a standard text editor is a great learning exercise, but professional software developers use powerful text editors called IDEs (Integrated Development Environments).

Visual Studio Code (VS Code) is a lightweight, extremely popular code editor built by Microsoft. By installing the Java Extension Pack, we can transform VS Code into a professional Java development workspace with code autocomplete, error highlighting, and direct run buttons.`,
    whyThisTopicMatters: {
      whyItExists: 'Writing code without helper tools is slow. Typing names of libraries, classes, and methods manually increases syntax errors. VS Code offers smart autocomplete (IntelliSense) that suggests code suggestions as you type.',
      problemSolved: 'VS Code provides instant syntax coloring, highlights errors on your screen before compiling, and lets you run programs with a single click. This significantly speeds up learning and development.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s follow the standard steps to configure VS Code for your Java coding projects:'
      },
      {
        type: 'bullet_list',
        title: 'VS Code Java Configuration Guide',
        items: [
          '**Step 1: Download VS Code**: Visit code.visualstudio.com and install the version for Windows, macOS, or Linux.',
          '**Step 2: Install Java Extension Pack**: Launch VS Code, click the Extensions tab on the left sidebar (looks like four blocks), search for "Extension Pack for Java" by Microsoft, and click Install.',
          '**Step 3: Create a Java File**: Create a folder on your desktop called "ByteAcademyProjects", open it in VS Code (File -> Open Folder), create a new file named "Main.java", and start writing code.',
          '**Step 4: Run the Code**: Click the small "Run" button appearing directly above the "public static void main" line of your file.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'IDE',
          definition: 'Integrated Development Environment. A software application that provides comprehensive facilities to computer programmers for software development, typically combining an editor, compiler, and debugger.',
          explanation: 'Examples of Java IDEs include VS Code (lightweight), IntelliJ IDEA (industry standard), and Eclipse.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'IntelliSense',
          definition: 'Visual Studio Code\'s general term for a variety of code editing features including code completion, parameter info, quick info, and member lists.',
          explanation: 'This autocomplete feature saves you from memorizing every method name and typing long lines of code manually.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'The "Extension Pack for Java" installs everything you need automatically, including Language Support by Red Hat, Debugger, Test Runner, and Maven tools.'
      }
    ],
    codeExamples: [
      {
        title: 'Running Your First File in VS Code',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Coding in VS Code!");
    }
}`,
        explanation: 'Write this code in VS Code. Once the Extension Pack is fully loaded, a tiny "Run" and "Debug" hyperlink will appear directly above the line "public static void main". Clicking "Run" will automatically compile and output the text directly in the VS Code integrated terminal below!'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'VS Code vs. Standard Text Editors',
        description: 'Why developers use professional programming environments.',
        elements: {
          headers: ['Feature', 'VS Code (with Extensions)', 'Standard Text Editor (Notepad)'],
          rows: [
            ['Syntax Highlighting', 'Yes (multi-colored elements for variables, classes)', 'No (plain black-and-white text)'],
            ['Auto-Completion', 'Yes (smartly predicts what you want to type)', 'No (must write everything character by character)'],
            ['Integrated Terminal', 'Yes (run commands directly inside the editor)', 'No (must launch external Command Prompt)'],
            ['Error Warnings', 'Yes (displays red squiggly lines on syntax errors)', 'No (errors are only shown during compilation)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'The "Run" button does not appear in VS Code.',
        whyItHappens: 'This usually means the Extension Pack is still loading, or the file was not named with the extension ".java" (e.g., named "Main" instead of "Main.java").',
        howToAvoid: 'Always check that your file extension ends with ".java", and wait a few seconds on startup for the Red Hat Java language server to boot up in the background.',
        codeSnippet: {
          bad: `// ❌ Incorrect filename in VS Code editor
Main.txt
public class Main { ... }`,
          good: `// ✓ Correct filename with .java extension
Main.java
public class Main { ... }`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Setting Up VS Code',
      tasks: [
        'Install VS Code on your computer and install the "Extension Pack for Java" by Microsoft.',
        'Create a folder named "ByteAcademy" on your computer, open it in VS Code, and create a new file named "Main.java".',
        'Type a simple Java class and verify that the "Run" option appears above the main method.',
        'Explain what an IDE is and list two major features that differentiate an IDE or code editor from a basic text editor or word processor.',
        'Describe what the "Extension Pack for Java" does behind the scenes when you open a .java file in VS Code.'
      ]
    },
    summary: [
      'VS Code is a lightweight, highly extensible developer code editor.',
      'The Java Extension Pack adds essential tools like compiler triggers, debuggers, and autocomplete.',
      'Always ensure Java files are saved with the ".java" file extension, allowing VS Code to activate its language engines.'
    ]
  },

  'using-a-text-editor': {
    slug: 'using-a-text-editor',
    title: 'Using a Text Editor',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Before modern IDEs with clickable "Run" buttons existed, programmers wrote code using simple text editors and compiled and executed them manually using command terminals.

While this may seem old-fashioned, learning this manual workflow is an incredibly valuable exercise. It demystifies what IDEs do behind the scenes, helping you understand directory paths, files, compilation, and execution.`,
    whyThisTopicMatters: {
      whyItExists: 'IDEs hide the mechanical compilation steps from you. When you click the "Run" button, the IDE is actually executing commands in a terminal behind the scenes. If your IDE breaks, you must know how to build your software manually.',
      problemSolved: 'Learning this method gives you total independence. It allows you to write and run Java code on any computer—even standard servers that lack a graphical screen or visual IDE interface.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s explore the classic terminal-based development workflow that computer science departments teach worldwide:'
      },
      {
        type: 'bullet_list',
        title: 'The Manual Text Editor Workflow',
        items: [
          '**Step 1: Write Raw Code**: Open a simple, unformatted text editor (such as Notepad on Windows, TextEdit on macOS, or Nano in a terminal).',
          '**Step 2: Save File**: Save the file with the exact name of your public class followed by \`.java\`. For example, if your class is \`public class MyCode\`, you must save it as \`MyCode.java\`. Case-sensitivity matters!',
          '**Step 3: Launch Terminal**: Open Command Prompt (Windows) or Terminal (macOS).',
          '**Step 4: Navigate to Folder**: Use the \`cd\` (Change Directory) command to navigate to the folder containing your file (e.g., \`cd Desktop\`).',
          '**Step 5: Compile Code**: Execute \`javac MyCode.java\` to build your bytecode.',
          '**Step 6: Run Code**: Execute \`java MyCode\` to run your application.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Source File',
          definition: 'A text file containing programming instructions written in a high-level language, saved with a language-specific extension (like .java).',
          explanation: 'Source files are written in standard plain-text (UTF-8) and can be opened or modified by any basic editor.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Terminal',
          definition: 'A text-based interface used to input commands directly to the operating system, bypassing graphical windows.',
          explanation: 'Command Prompt (Windows) and Terminal (macOS/Linux) are standard terminal interfaces.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Do not use formatted text editors like Microsoft Word! Word processors insert hidden formatting tags and metadata (like fonts, margins, page breaks) that completely destroy Java code compilation.'
      }
    ],
    codeExamples: [
      {
        title: 'The Text Terminal Compilation Sequence',
        language: 'java',
        code: `// Step 1: Write code in a text file and save as "Demo.java"
public class Demo {
    public static void main(String[] args) {
        System.out.println("Running code manually!");
    }
}

// Step 2: Open terminal, navigate to directory, and compile:
$ javac Demo.java

// Step 3: Run the compiled class (note: no file extension here!)
$ java Demo
Running code manually!`,
        explanation: 'First, we run the "javac" command with the file name to compile. This builds a "Demo.class" file in the same directory. Then, we use the "java" command with only the class name to execute the compiled program.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Manual Terminal vs. IDE clicker',
        description: 'How manual coding differs from using an automated IDE.',
        elements: {
          headers: ['Action', 'Manual Terminal Method', 'IDE Method ("Run" Button)'],
          rows: [
            ['Writing Code', 'Written in plain text editor (Notepad, nano)', 'Written inside rich IDE editor pane'],
            ['Compilation', 'Manual shell command: "javac File.java"', 'Automatic (IDE compiles in background on click)'],
            ['Execution', 'Manual launcher command: "java File"', 'Automatic (IDE runs the JVM inside an integrated panel)'],
            ['Learning Value', 'Excellent (teaches how tools connect to Operating System)', 'Low (hides the underlying compiler actions)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Filenames saved with hidden formatting, e.g., "Demo.java.txt" instead of "Demo.java".',
        whyItHappens: 'Many text editors default to saving files as plain text (.txt) and hide file extensions in settings.',
        howToAvoid: 'When saving, choose "All Files (*.*)" in the text editor dropdown list, manually type ".java" at the end, and verify the file extension in your desktop directory.',
        codeSnippet: {
          bad: `// ❌ Hidden TXT file extension
Demo.java.txt`,
          good: `// ✓ Correct plain java extension
Demo.java`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Write Code in Notepad/TextEdit',
      tasks: [
        'Open Notepad (Windows) or TextEdit (macOS). Ensure TextEdit is configured to "Plain Text" mode (Format -> Make Plain Text).',
        'Type a simple Java class and save it as "Demo.java" in a new folder on your Desktop.',
        'Open your command terminal, navigate to your desktop folder using "cd Desktop", compile it, and run it using raw terminal commands.',
        'What command do you type in your console to change your terminal\'s current directory, and why is this navigation step necessary before compiling?',
        'Explain what happens if you try to compile a Java file that was written and saved in a rich text format (.rtf or .docx) instead of plain text (.java).'
      ]
    },
    summary: [
      'Learning the terminal-based workflow removes magic and reveals how compilers interact with operating systems.',
      'Java source files must be saved as plain text (.java) and case-matched to their public class names.',
      'Do not use word processors like MS Word to write code; they insert formatting metadata that blocks compiler parsing.'
    ]
  },

  'compiling-java-programs': {
    slug: 'compiling-java-programs',
    title: 'Compiling Java Programs',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `What actually happens when we compile a Java program? Compilation is the process of translating human-readable text into a structured, low-level language that computer engines can understand.

In Java, code is compiled into an intermediate form called **Bytecode**, saved inside '.class' files. This step acts as a powerful safety barrier, verifying that your spelling, capitalization, syntax, and logic structure comply with Java's strict rules before any execution happens.`,
    whyThisTopicMatters: {
      whyItExists: 'Processor chips cannot read English words. We need an automated translator to map terms like "public class" into machine instructions. The Java compiler (javac) is that translator.',
      problemSolved: 'The compiler catches syntax errors early. If you write buggy code, the compiler will refuse to build, protecting your systems from running faulty, unstable logic.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The compilation phase processes your high-level instructions through several critical steps:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Bytecode',
          definition: 'The intermediate, platform-independent instruction set generated by compiling Java source code, designed to be executed by the JVM.',
          explanation: 'Bytecode acts as a universal computer language. It is not tied to any physical hardware; it runs on the Virtual Machine.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'javac',
          definition: 'The official command-line Java Compiler utility included in the JDK.',
          explanation: 'Running "javac" processes a .java file and outputs a matching .class bytecode file.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Compilation is strict. If your code has even a single error, the compiler outputs diagnostic logs and halts—meaning no compiled class file is generated.'
      },
      {
        type: 'bullet_list',
        title: 'What the Compiler Checks',
        items: [
          '**Syntax Integrity**: Confirms every open bracket \`{\` has a matching closing bracket \`}\`, and every statement ends with a semicolon \`;\`.',
          '**Type Security**: Checks that you aren\'t performing illegal operations (like trying to subtract a word from a number).',
          '**Identifier Validation**: Verifies that all variables, methods, and libraries you reference actually exist and are spelled correctly.'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Compiling From the Command Line',
        language: 'java',
        code: `// Command to compile the source code:
$ javac Main.java

// If compilation succeeds, no output is shown, and a new file is created:
$ ls
Main.java   Main.class`,
        explanation: 'Running "javac Main.java" processes the source file. When successful, the directory contains both "Main.java" (human code) and "Main.class" (JVM bytecode).'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'The Compilation Process',
        description: 'See how code is processed from text file to virtual executable.',
        elements: {
          steps: [
            { id: '1', label: 'Source Code (Main.java)', desc: 'Human-writable, plain text containing Java statements.', type: 'start' },
            { id: '2', label: 'Java Compiler (javac)', desc: 'Scans syntax, performs safety checks, and translates code.', type: 'decision' },
            { id: '3', label: 'JVM Bytecode (Main.class)', desc: 'Universal binary instructions ready for JVM execution.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to compile files using the "java" command instead of "javac".',
        whyItHappens: 'Beginners frequently confuse the compilation utility (javac) with the execution runtime (java).',
        howToAvoid: 'Remember: C is for Compiler! Always use "javac" to compile first, then use "java" to execute.',
        codeSnippet: {
          bad: `// ❌ Fails to compile
$ java Main.java`,
          good: `// ✓ Correct: Compile first, then Run
$ javac Main.java
$ java Main`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Observing Compiler Output',
      tasks: [
        'Describe in your own words what Java Bytecode is and why it is stored in a .class file.',
        'Why does the Java compiler refuse to generate a compiled file if there is a spelling mistake in your source code?',
        'If you modify your "Main.java" file to change a print statement, what happens if you run "java Main" without compiling it first?',
        'Identify which command-line utility compiles Java files and write down the exact terminal command to compile a file named "Calculator.java".',
        'What three main structural things does the Java compiler verify during its validation phase before successfully generating bytecode?'
      ]
    },
    summary: [
      'Compilation translates human-readable source code (.java) into machine-independent bytecode (.class).',
      'The "javac" utility in the JDK is the official Java compiler.',
      'The compiler validates syntax rules, bracket pairing, and spelling before producing any outputs.'
    ]
  },

  'running-java-programs': {
    slug: 'running-java-programs',
    title: 'Running Java Programs',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Once your code compiles successfully into bytecode, the next step is execution! 

In Java, programs are not run directly by your computer's operating system. Instead, they are executed inside a highly secure sandbox environment called the **Java Virtual Machine (JVM)**. This extra virtual layer is what gives Java its massive safety, security, and portability advantages.`,
    whyThisTopicMatters: {
      whyItExists: 'Different computer processors (Intel Core, AMD Ryzen, Apple Silicon) read different machine instructions. If Java ran directly on your hardware, you would need to build a different version of your program for every device. The JVM standardizes this process.',
      problemSolved: 'The JVM acts as a universal buffer, reading your platform-independent bytecode (.class files) and translating those instructions into specific machine languages on-the-fly. This allows software to run on Windows, Mac, or Linux without change.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s explore how the JVM executes your software instructions during runtime:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'JVM',
          definition: 'Java Virtual Machine. The virtual execution engine that loads, verifies, and runs Java bytecode on physical hardware.',
          explanation: 'The JVM is the engine behind Java\'s portability slogan: Write Once, Run Anywhere.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'JIT Compiler',
          definition: 'Just-In-Time Compiler. A component of the JVM that translates bytecode into physical machine instructions dynamically as the program runs, dramatically increasing execution speed.',
          explanation: 'Instead of slowly interpreting bytecode line-by-line, the JIT compiler compiles frequently used blocks of code into native machine code on-the-fly.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'When executing a program, run the "java" command with the name of your class only. Never include the ".class" file extension in this command!'
      },
      {
        type: 'bullet_list',
        title: 'The JVM Runtime Lifecycle',
        items: [
          '**Class Loading**: The JVM loads your \`.class\` bytecode file into system memory.',
          '**Bytecode Verification**: The JVM checks the bytecode for safety rules to ensure it does not bypass security barriers or modify system memory maliciously.',
          '**Execution**: The JVM interpreter and JIT compiler translate the bytecode into native machine instructions for your computer\'s CPU.'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'The Launch Command Structure',
        language: 'java',
        code: `// Assuming "Main.class" has been compiled in your current directory:

// ❌ INCORRECT launcher execution
$ java Main.class
Error: Could not find or load main class Main.class

// ✓ CORRECT launcher execution
$ java Main
Hello, World!`,
        explanation: 'The "java" command expects the logical name of your Java class (e.g. Main), not the physical file name (Main.class).'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'The Full Java Lifecycle',
        description: 'See the complete journey of code from your keyboard to active screen output.',
        elements: {
          steps: [
            { id: '1', label: 'Write Code (Main.java)', desc: 'You write Java source code inside a text editor.', type: 'start' },
            { id: '2', label: 'Compile (javac)', desc: 'Compiler translates text code into compiled bytecode.', type: 'action' },
            { id: '3', label: 'Bytecode (Main.class)', desc: 'Platform-independent bytecode file is generated.', type: 'action' },
            { id: '4', label: 'JVM Execution (java)', desc: 'The JVM loads the bytecode, verifies safety, and runs the program.', type: 'decision' },
            { id: '5', label: 'Native Machine Code', desc: 'The physical hardware runs binary commands and displays outputs.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to run a class file with the ".class" extension, e.g. "java Main.class".',
        whyItHappens: 'It seems logical to specify the file extension, but the Java launcher expects a class identifier, which is part of its internal package namespace rules.',
        howToAvoid: 'Always omit the ".class" extension. Type "java Main" to run your class.',
        codeSnippet: {
          bad: `// ❌ Causes load errors
$ java HelloWorld.class`,
          good: `// ✓ Executable command
$ java HelloWorld`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Explaining the JVM',
      tasks: [
        'Explain why Java bytecode is called "platform-independent" and how the JVM makes it run on multiple operating systems.',
        'Why does the Java launcher command (java) throw an error if you append ".class" to the class name?',
        'What is the role of the Just-In-Time (JIT) compiler inside the JVM?',
        'Differentiate between the compilation stage (javac) and the execution stage (java) in terms of their inputs, processes, and outputs.',
        'What is the role of the bytecode verifier inside the JVM during the loading of a class?'
      ]
    },
    summary: [
      'The Java Virtual Machine (JVM) executes compiled bytecode safely inside a sandbox environment.',
      'The JVM makes Java cross-platform by translating bytecode to native machine instructions on-the-fly.',
      'The JIT (Just-In-Time) compiler optimizes performance by compiling hot spots into raw machine instructions.'
    ]
  },

  'your-first-java-program': {
    slug: 'your-first-java-program',
    title: 'Your First Java Program',
    moduleSlug: 'getting-started',
    moduleName: 'Getting Started',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `It is time to write the classic rite of passage for every developer: the "Hello, World!" program! 

This simple exercise is designed to test your entire workspace configuration. It contains only five lines of code, but it introduces several critical syntax conventions that form the skeleton of every Java application you will build.`,
    whyThisTopicMatters: {
      whyItExists: 'Every software language has boilerplate code—setup requirements that establish the boundaries of your program. In Java, every line of code must live inside a structured class container.',
      problemSolved: 'This lesson explains the minimum set of instructions required to get a program up and running in Java, allowing you to print outputs to the console screen.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s write and dissect the classic Hello World class program in detail:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Class',
          definition: 'The fundamental building block of Java programs that defines the structure and behavior of objects.',
          explanation: 'In Java, all executable statements must reside inside a class. Class names must match their file names exactly.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method',
          definition: 'A named block of code that performs specific operations when called.',
          explanation: 'Methods are the active verbs of your program. The "main" method is the primary entry point where Java begins execution.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Java is highly case-sensitive! Spelled words like "class", "Main", or "System" must maintain their exact upper and lowercase letters, or the compiler will fail.'
      },
      {
        type: 'bullet_list',
        title: 'Boilerplate Breakdown',
        items: [
          '**public class Main**: Declares a public class named Main. Your file must be saved as \`Main.java\`.',
          '**public static void main**: This line is the required main method signature. It is the starting line where the JVM begins running your code.',
          '**System.out.println**: This command instructs the computer to output text onto your command console screen.',
          '**Braces { }**: Curly braces are used to group code blocks together. The outermost braces define the class block, and the inner braces define the main method block.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Don\'t worry about memorizing static, void, or String[] just yet! Think of them as boilerplate text for now—a standard template you need to include in every program.'
      }
    ],
    codeExamples: [
      {
        title: 'The Classic Java Hello World Program',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // This command prints a greeting message to the console
        System.out.println("Hello, World!");
    }
}`,
        explanation: 'This complete, executable program defines a class named Main, containing a main method that prints "Hello, World!" to your terminal screen.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Anatomy of a Java Program',
        description: 'See how the components of our Hello World program are organized.',
        elements: {
          classes: [
            {
              name: 'Main (Class Container)',
              fields: ['[Encasing brackets define class scope]'],
              methods: ['main(String[] args) [The Entry Point Method]', '  ↳ System.out.println("Hello, World!") [Console Action]']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Mismatched filenames, e.g. class name is "Main", but the file is saved as "program.java".',
        whyItHappens: 'Java requires the public class name to match the file name exactly.',
        howToAvoid: 'If your class name is "Main", save your file as "Main.java". If your class name is "HelloWorld", save your file as "HelloWorld.java". Case-sensitivity matters!',
        codeSnippet: {
          bad: `// ❌ Saved in file "MyFirst.java" (mismatched name)
public class Main {
    public static void main(String[] args) { ... }
}`,
          good: `// ✓ Saved in file "Main.java" (matching name)
public class Main {
    public static void main(String[] args) { ... }
}`
        }
      },
      {
        mistake: 'Spelling mistakes in the print command, such as system.out.println (lowercase s) or Println.',
        whyItHappens: 'Java is case-sensitive. The compiler treats "System" and "system" as completely different words.',
        howToAvoid: 'Ensure "System" starts with an uppercase S, and "String" in String[] starts with an uppercase S.',
        codeSnippet: {
          bad: `// ❌ Case-sensitivity errors
system.out.println("hello"); // lowercase S`,
          good: `// ✓ Correct case usage
System.out.println("hello"); // uppercase S`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Build Hello World Locally',
      tasks: [
        'Create a file named "Main.java" in your code editor.',
        'Write the exact Hello World code structure, compile it, and verify that it outputs "Hello, World!" to your screen.',
        'Modify the print statement to display your name instead: e.g. "Hello, ByteAcademy Student!"',
        'Intentionally delete the semicolon at the end of the print line, compile the program, observe the error message, and then fix it.',
        'Predict what would happen if you changed "public class Main" to "public class MyProgram" but left the filename as "Main.java". Try compiling this to test your prediction.'
      ]
    },
    summary: [
      'Every executable statement in Java must reside inside a class structure.',
      'The "public static void main" method is the starting point of every Java application.',
      'System.out.println prints a line of text to the terminal console.',
      'Public class names must match their file names exactly (including case-sensitivity).'
    ]
  }
};
