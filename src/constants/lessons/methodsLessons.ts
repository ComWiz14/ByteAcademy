import { DetailedLessonContent } from '../../types';

export const METHODS_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-methods': {
    slug: 'introduction-to-methods',
    title: 'Introduction to Methods',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `As you write increasingly complex Java programs, you will notice a frustrating pattern: your code starts getting longer, harder to read, and cluttered with repetitive statements. If you write everything inside the standard \`main()\` block, your application quickly turns into an unmanageable "spaghetti" of code.

To solve this, professional programmers divide their code into small, organized, self-contained packages. In Java, these reusable packages of code are called **Methods**. A method is simply a named block of code that performs one specific task. You can think of it as a mini-program residing inside your larger program.`,
    whyThisTopicMatters: {
      whyItExists: 'Writing all instructions inside a single, giant block makes software impossible to test, debug, or maintain. If a program needs to print a receipt 50 different times, copying and pasting the same 10 lines of code across your file creates a maintenance nightmare—if you need to change a single word in the receipt, you have to find and modify all 50 duplicates.',
      problemSolved: 'Methods solve the problem of code duplication and unreadability. Instead of writing identical lines multiple times, you write them once inside a method, give it a meaningful name, and then "call" (execute) that name whenever you need it. If you need to make changes, you modify the code in just one place, and every part of your program updates instantly.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand methods, let\'s use a real-world analogy. Think of your physical smart TV remote control. When you press the **Volume Up** button, a complex sequence of electronic operations occurs: your television receives an infrared signal, decodes the request, increases the audio power level, and renders an overlay graphic showing the new level on the screen.'
      },
      {
        type: 'paragraph',
        text: 'As a user, you do not need to understand or rebuild that complex wiring every time you want to raise the volume. You simply press the single button labeled **Volume Up**. In programming, that button is a **method**. The complex wiring is the code inside the method, and pressing the button is "calling" the method.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method',
          definition: 'A named, self-contained block of statements designed to perform a specific action or calculation.',
          explanation: 'Sometimes referred to as a "function" or "subroutine" in other programming languages. In Java, because all functions must belong to a class, they are strictly called methods.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'DRY Principle',
          definition: 'An acronym standing for "Don\'t Repeat Yourself" — a foundational software engineering philosophy.',
          explanation: 'If you find yourself copying and pasting the same lines of code in multiple places, you are violating the DRY principle. Wrap those statements inside a single reusable method instead.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Methods also help partition your work. When working in teams, one programmer can build a method to handle tax calculations while another builds a method to print invoices, allowing parallel progress without overlapping code!'
      }
    ],
    codeExamples: [
      {
        title: 'The Problem: Repeating Code in main()',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // First user login
        System.out.println("********************************");
        System.out.println("Welcome to ByteAcademy Java!");
        System.out.println("Please log in to continue.");
        System.out.println("********************************");
        
        // ... some other game logic runs ...
        
        // Second user login
        System.out.println("********************************");
        System.out.println("Welcome to ByteAcademy Java!");
        System.out.println("Please log in to continue.");
        System.out.println("********************************");
    }
}`,
        explanation: 'In this example, we have a decorative greeting printed twice. If we want to change the border asterisks to dashes, we have to manually edit the code in two separate locations. This is highly inefficient.'
      },
      {
        title: 'The Solution: Using a Reusable Method',
        language: 'java',
        code: `public class Main {
    // 1. Defining the reusable method
    public static void printWelcomeMessage() {
        System.out.println("********************************");
        System.out.println("Welcome to ByteAcademy Java!");
        System.out.println("Please log in to continue.");
        System.out.println("********************************");
    }

    public static void main(String[] args) {
        // 2. Calling the method instead of duplicating code
        printWelcomeMessage();
        
        // ... some other game logic runs ...
        
        printWelcomeMessage();
    }
}`,
        explanation: 'We have defined a new custom method named "printWelcomeMessage". Inside main(), we call the method twice simply by writing its name followed by parentheses. Now, if we need to modify the greeting, we only edit the printWelcomeMessage block once.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Monolithic Code vs. Modular Code',
        description: 'Comparing programs written inside a single block against programs organized with clean methods.',
        elements: {
          headers: ['Metric', 'Monolithic Code (Everything in main)', 'Modular Code (Divided into Methods)'],
          rows: [
            ['Readability', 'Extremely low. Code looks like a dense wall of text.', 'High. Methods act as clear, labeled chapters of a book.'],
            ['Maintenance', 'Very tedious. Changes require searching and replacing multiple duplicates.', 'Instant. Modifying a method updates its behavior everywhere.'],
            ['Reusability', 'Impossible. Code is trapped inside one specific layout.', 'High. Methods can be executed hundreds of times across your program.'],
            ['Debugging', 'Hard. Finding which variable mutated unexpectedly is a challenge.', 'Easy. You can isolate and test each method individually.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring a method inside another method.',
        whyItHappens: 'Beginners sometimes think that helper methods must be written inside the main() block because that is where execution occurs.',
        howToAvoid: 'In Java, methods cannot be nested. All methods must be declared as independent siblings directly inside the class curly braces, outside of other methods.',
        codeSnippet: {
          bad: `public class Main {
    public static void main(String[] args) {
        // ❌ WRONG: Nesting methods causes compilation failure
        public static void greet() {
            System.out.println("Hello!");
        }
    }
}`,
          good: `public class Main {
    // ✓ CORRECT: Sibling method declared directly inside the class
    public static void greet() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        greet(); // Run it
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Deconstructing Program Clutter',
      tasks: [
        'In your own words, describe the relationship between a method definition and a method call.',
        'Consider a program that calculates discounts for three different shopping carts. Without methods, list at least two negative side effects of writing all calculations inside main().',
        'Analyze the DRY principle. Why is "repeating yourself" considered one of the leading causes of security bugs and software failures in production systems?',
        'Look up why Java classes are structured as containers for methods, and explain why a method cannot exist purely "on its own" without being wrapped in a class boundary.',
        'Sketch a logical outline of a simple Text Adventure game. Write down at least four helper methods you would create to organize the game logic (e.g., printMap, checkPlayerHealth).'
      ]
    },
    summary: [
      'A method is a named, reusable code block created to perform one distinct action.',
      'Methods help enforce the DRY (Don\'t Repeat Yourself) design principle, eliminating duplicate lines.',
      'Using methods makes your codebase modular, turning dense spaghetti structures into simple, labeled procedures.',
      'In Java, all methods must be siblings written inside a class container, never nested inside each other.'
    ]
  },

  'creating-methods': {
    slug: 'creating-methods',
    title: 'Creating Methods',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Now that we know *why* methods are important, let\'s learn how to construct one from scratch. Java is a strongly typed language, which means the compiler requires you to be very precise when declaring a method. You must tell Java exactly what name the method has, what kind of input data it expects, and what kind of result it will return.

Once you master this structure, creating methods will become second nature, acting as the fundamental building blocks for everything you build in Java.`,
    whyThisTopicMatters: {
      whyItExists: 'Computers require strict structural layouts to translate human code into reliable execution paths. Without a standardized declaration layout, the Java compiler wouldn\'t know where a method starts, what data format it outputs, or how to allocate system resources to execute it.',
      problemSolved: 'The method header provides a clear "contract" for your code. It tells both the compiler and other programmers exactly what the method needs, what it does, and what it yields, making code integration completely predictable.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s dissect the formal structure of a Java method. Every method is composed of a **Method Header** (which contains key declarations and details) and a **Method Body** (which contains the actual code statements written inside curly braces).'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method Header',
          definition: 'The introductory line of a method that declares its visibility, return type, name, and input parameters.',
          explanation: 'Also referred to as a "Method Signature" when considering just the name and parameter list. It tells Java how to interact with the method.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Return Type',
          definition: 'The specific data type of the value that a method sends back to the code that called it.',
          explanation: 'If a method completes an action but does not output any data value, we must specify the keyword "void" as the return type.'
        }
      },
      {
        type: 'info_card',
        title: 'Step-by-Step Method Creation Process'
      },
      {
        type: 'bullet_list',
        title: 'Constructing your method header from left to right:',
        items: [
          '**Step 1: Choose Access Modifiers** — Start with keywords like \`public static\`. For now, we will always include \`public static\` so our methods can be run directly from our \`main()\` block without creating complex object structures.',
          '**Step 2: Choose the Return Type** — Determine if this method outputs a value. If it calculates an integer sum, use \`int\`. If it prints text and returns nothing, use \`void\`.',
          '**Step 3: Choose a Descriptive Name** — Choose a verb name in camelCase (e.g., \`calculateInterest\`, \`printInvoice\`). Always make your names clear and action-oriented.',
          '**Step 4: Add Parentheses** — Write open and close parentheses \`()\` immediately following the name. These will hold input variables if needed.',
          '**Step 5: Write the Code Block** — Open a curly brace \`{\`, write your execution statements, and close the brace \`}\` to establish the method body.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Java is strictly case-sensitive. If you name your method `calculateScore()`, calling it as `calculatescore()` or `CalculateScore()` will trigger a compilation error.'
      }
    ],
    codeExamples: [
      {
        title: 'Anatomy of a Standard Method Declaration',
        language: 'java',
        code: `public class Example {
    
    // Header components:
    // [public static] -> Access Modifiers
    // [void]          -> Return Type (outputs nothing)
    // [sayHello]      -> Method Name (camelCase action verb)
    // [()]            -> Parameter List (currently empty)
    public static void sayHello() {
        // Method Body: Actual execution block
        System.out.println("Hello, welcome to ByteAcademy!");
    }
    
}`,
        explanation: 'This code shows a complete, valid method structure. It belongs directly to the "Example" class and stands alongside other method blocks.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Method Structure Blueprint',
        description: 'How Java splits a method declaration into grammatical components.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Access Modifiers', desc: 'Determines visibility. We use "public static" for utility functions.' },
            { id: '2', type: 'process', label: 'Return Type', desc: 'Declares what type of data is returned (e.g., void, int, String).' },
            { id: '3', type: 'process', label: 'Method Name', desc: 'An action verb in camelCase that describes the operation.' },
            { id: '4', type: 'process', label: 'Parameters ()', desc: 'Optional input placeholders placed inside parentheses.' },
            { id: '5', type: 'end', label: 'Method Body {}', desc: 'The physical block of executable statements between curly braces.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the return type in the method header.',
        whyItHappens: 'Other languages like Python or JavaScript do not require stating return types. Beginners transitioning to Java often forget to declare them.',
        howToAvoid: 'Remember that EVERY method header in Java must explicitly declare a return type (such as void, int, double, boolean) right before the method name.',
        codeSnippet: {
          bad: `// ❌ Syntax Error: Missing return type keyword
public static showNotification() {
    System.out.println("Alert!");
}`,
          good: `// ✓ Correct: Explicit "void" return type added
public static void showNotification() {
    System.out.println("Alert!");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Constructing Method Headers',
      tasks: [
        'Write out the exact method header (just the first line) for a public static method named "calculateGpa" that returns a decimal number (double) and takes no inputs.',
        'Write out the method header for a public static method named "sendEmail" that returns nothing (void) and takes no inputs.',
        'Explain why using descriptive camelCase verbs (like "printReport") is superior to generic abbreviations (like "pr") when naming methods.',
        'Identify all syntax errors in this snippet: "public static printData{} { System.out.println("Data"); }"',
        'Create a fully valid Java class containing a public static method that prints your favorite programming quote inside a decorated frame. Ensure correct curly brace balancing.'
      ]
    },
    summary: [
      'A method is composed of a header (declaring details) and a body (containing code).',
      'The return type declares what data type is emitted back; use "void" if no data is output.',
      'Java method names should use camelCase naming rules, starting with a descriptive action verb.',
      'Never skip return types or parentheses in method headers; they are mandatory grammatical structures.'
    ]
  },

  'calling-methods': {
    slug: 'calling-methods',
    title: 'Calling Methods',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A crucial concept to understand is that **creating a method is not the same as executing it**. When you write a method, you are simply providing Java with a blueprint or recipe. The statements inside that method will sit dormant, waiting in memory, and will never run unless you explicitly tell Java to execute them.

This process of invoking a method is called **Calling a Method**. In this lesson, we will learn how to trigger our custom methods and trace exactly how Java jumps around your program files to execute code.`,
    whyThisTopicMatters: {
      whyItExists: 'If a program ran every instruction sequentially from top to bottom, every feature in your system would trigger all at once. Methods allow your system to stand ready—loading procedures into memory and firing them selectively only when specific actions are triggered.',
      problemSolved: 'Calling methods lets programmers direct the flow of execution dynamically. It lets us reuse the same 10-line calculation 1,000 times by writing single-word call statements, drastically reducing file sizes and improving execution speed.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When a Java application runs, the computer begins executing statements at the very first line of the special \`main()\` method. It executes lines inside \`main()\` sequentially. When Java encounters a **method call**, it temporarily pauses its progress in \`main()\` and "jumps" directly to the header of the called method.'
      },
      {
        type: 'paragraph',
        text: 'Java then executes all code statements inside that method\'s body, from its opening curly brace \`{\` to its closing curly brace \`}\`. Once it reaches the end of that method, Java "jumps" back to the exact line in \`main()\` where it left off, resuming its sequential execution down the page.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method Call',
          definition: 'A statement that instructs the Java Virtual Machine to jump to and execute a specified method block.',
          explanation: 'Written as the method name followed by parentheses and a terminating semicolon, for example: `myMethod();`.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Execution Flow',
          definition: 'The precise order in which individual statements are evaluated and run during a program\'s lifecycle.',
          explanation: 'With methods, execution is no longer strictly top-to-bottom; it branches out, jumping to separate helper blocks before returning.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'A method can call other methods! It is very common for `main()` to call `methodA()`, and then inside `methodA()`, a statement executes calling `methodB()`.'
      }
    ],
    codeExamples: [
      {
        title: 'Tracing Execution Flow Step-by-Step',
        language: 'java',
        code: `public class ExecutionTrace {
    
    public static void greetUser() {
        System.out.println("[Step 2] Execution is inside greetUser method!");
        System.out.println("[Step 3] Welcome to the program!");
    }

    public static void main(String[] args) {
        System.out.println("[Step 1] Program starts inside main!");
        
        // Calling our custom sibling method
        greetUser(); 
        
        System.out.println("[Step 4] Back in main! Program completes successfully.");
    }
}`,
        explanation: 'Line-by-line breakdown:\n1. Java starts at the first line of main(), printing "[Step 1]".\n2. Java hits "greetUser();". It pauses main() and jumps up to line 3.\n3. Java runs greetUser(), printing "[Step 2]" and "[Step 3]".\n4. greetUser() ends. Java jumps back to main(), right after the call statement.\n5. Java executes the next line in main(), printing "[Step 4]".'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Calling Execution Flow Journey',
        description: 'How Java pauses, branches, and returns during a method invocation.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Start in main()', desc: 'Execution begins at the top of the main method.' },
            { id: '2', type: 'process', label: 'Method Call Encountered', desc: 'Java hits "greetUser();", pauses main(), and saves the return address.' },
            { id: '3', type: 'process', label: 'Jump to Method Header', desc: 'Execution control jumps instantly to the greetUser() block.' },
            { id: '4', type: 'process', label: 'Execute Method Body', desc: 'Statements inside greetUser() execute line-by-line.' },
            { id: '5', type: 'end', label: 'Return to main()', desc: 'Reaching the closing brace, execution control returns to main() right after the call.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting parentheses when calling a method.',
        whyItHappens: 'Other assets (like variables) do not require parentheses. Beginners sometimes treat method calls like variable calls, omitting the brackets.',
        howToAvoid: 'Always append open and close parentheses `()` to the method name during a call, even if the method expects no inputs. Parentheses tell Java to "execute this action."',
        codeSnippet: {
          bad: `public static void main(String[] args) {
    // ❌ Error: Treated as a variable check rather than a function run
    showWelcome; 
}`,
          good: `public static void main(String[] args) {
    // ✓ Correct: Parentheses instruct Java to trigger execution
    showWelcome(); 
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Tracing and Predicting Outputs',
      tasks: [
        'Predict the exact console output of this code sequence: "main starts; callMethod(); main ends;".',
        'What error message does the compiler display if you attempt to call a method that was never declared anywhere in your class?',
        'If "methodOne" calls "methodTwo", and "methodTwo" calls "methodThree", explain the order in which these methods will finish executing.',
        'Create a Java program with three separate methods: "morning()", "afternoon()", and "night()", each printing a custom greeting. Call them inside main() in order.',
        'What occurs if you write a method call inside its own body? (e.g., calling "greet()" inside the "greet()" method). Explain how this might crash the system.'
      ]
    },
    summary: [
      'Creating a method merely registers a blueprint; calling a method actually runs its instructions.',
      'A method call is written as the method\'s name followed by parentheses and a semicolon.',
      'Java pauses progress in the calling method, jumps to the target method, runs it, and returns.',
      'Always include empty parentheses \`()\` when calling a method that accepts no inputs.'
    ]
  },

  'parameters-and-arguments': {
    slug: 'parameters-and-arguments',
    title: 'Parameters and Arguments',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Up to this point, our custom methods have been completely static—doing the exact same thing every single time they are called. To make methods truly powerful, they need to be dynamic and accept inputs. For example, a calculator's \`calculateTax()\` method shouldn't be hardcoded to just one number; it should let us pass in any amount we want to calculate.

In this lesson, we will learn how to send live data into our methods using **Parameters** and **Arguments**.`,
    whyThisTopicMatters: {
      whyItExists: 'Without inputs, we would have to write separate methods for every possible scenario. If we wanted to greet a user, we would need \`greetAlice()\`, \`greetBob()\`, \`greetCharlie()\`. This completely defeats the goal of reusing code.',
      problemSolved: 'Parameters act as versatile inputs. We write a single, robust method called \`greetUser(String name)\`, and pass any name we want when we run it. The single method can now personalize its behavior for billions of different inputs.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand inputs, we must clarify a common source of confusion: the difference between a **Parameter** and an **Argument**.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Parameter',
          definition: 'A variable placeholder declared in the method header that specifies the type and name of input data the method expects.',
          explanation: 'Think of parameters as "empty buckets" waiting to be filled. They exist inside the method\'s definition, like: `void greet(String name)`.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Argument',
          definition: 'The actual, live data value that you pass into the method when you write the method call.',
          explanation: 'Arguments are the physical "contents" poured into the bucket. They exist inside the method call statement, like: `greet("Alice");`.'
        }
      },
      {
        type: 'info_card',
        title: 'Step-by-Step: Writing Methods with Inputs'
      },
      {
        type: 'bullet_list',
        title: 'How to configure and call a method with parameters:',
        items: [
          '**Step 1: Declare Parameters in the Header** — Inside the parentheses of your method header, write the data type followed by a variable name, e.g., \`public static void greetPlayer(String username)\`.',
          '**Step 2: Use the Parameter Inside the Method Body** — Treat the parameter variable as if it is already declared and filled with data, e.g., \`System.out.println("Hello " + username);\`.',
          '**Step 3: Call and Pass Arguments** — When calling the method, write the values you want to pass inside the parentheses, e.g., \`greetPlayer("PixelKnight");\`.',
          '**Step 4: Keep Multiple Inputs Organized** — Separate multiple parameters with commas: \`public static void showSum(int a, int b)\`. When calling, pass arguments in the exact same order: \`showSum(5, 10);\`.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'The argument types passed in must exactly match the data types of the parameters in the method definition. Trying to pass a String into an integer parameter will trigger a compilation crash!'
      }
    ],
    codeExamples: [
      {
        title: 'Defining and Calling Parameters',
        language: 'java',
        code: `public class MathService {

    // 1. "a" and "b" are integer PARAMETERS (placeholders)
    public static void showSum(int a, int b) {
        int sum = a + b;
        System.out.println("The calculated sum is: " + sum);
    }

    public static void main(String[] args) {
        // 2. "5" and "10" are ARGUMENTS passed into "a" and "b"
        showSum(5, 10); 
        
        // 3. We can reuse the method with different arguments!
        showSum(25, 75);
    }
}`,
        explanation: 'Line-by-line breakdown:\n1. Inside main(), showSum(5, 10) is called.\n2. Java copies the value 5 into parameter "a" and copies 10 into parameter "b".\n3. Inside showSum, "sum" is calculated as 5 + 10 = 15, and printed.\n4. Control returns to main(). showSum(25, 75) is called.\n5. Java copies 25 into "a" and 75 into "b", prints 100, and returns.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Parameters vs. Arguments',
        description: 'Direct comparison to keep these key programming concepts separate and clear.',
        elements: {
          headers: ['Metric', 'Parameter', 'Argument'],
          rows: [
            ['Definition', 'The placeholder variable in the method header.', 'The actual live value sent during the call.'],
            ['Location', 'Found in the method header declaration.', 'Found inside the method call statement.'],
            ['Name', 'Always has a variable name (e.g., "String email").', 'Can be a raw literal ("a@b.com") or a variable.'],
            ['State', 'Acts as a blueprint template.', 'Provides the actual active runtime data.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring types during the method call.',
        whyItHappens: 'Beginners are so used to writing types (like int, double) when defining methods that they carry this syntax over to the call statement.',
        howToAvoid: 'Never write data type keywords inside the parentheses of a method call. Only pass raw values or existing variable names.',
        codeSnippet: {
          bad: `public static void main(String[] args) {
    // ❌ Error: Cannot write variable types during a method call
    calculateTax(double 150.0); 
}`,
          good: `public static void main(String[] args) {
    // ✓ Correct: Pass only the raw argument value
    calculateTax(150.0); 
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Mapping Parameters and Arguments',
      tasks: [
        'If a method is defined as "void process(String name, int age)", list which parameters are defined, and provide a valid call statement with arguments.',
        'What occurs if you call "process(18, "Bob")" for the method above? Explain why order matters.',
        'Why does Java require you to declare the data types of parameters in the header instead of letting you omit them?',
        'Create a public static method named "printProduct" that accepts two inputs: an integer quantity and a decimal price. Inside, calculate and print the total cost.',
        'Analyze what happens if you declare a parameter inside a method signature but never use that parameter variable inside the method body.'
      ]
    },
    summary: [
      'Parameters are variable placeholders written in the method header.',
      'Arguments are the actual data values passed into those placeholders during a call.',
      'Multiple inputs are separated by commas and must be called in the exact order declared.',
      'Never write data type keywords in the parentheses of a method call.'
    ]
  },

  'return-values': {
    slug: 'return-values',
    title: 'Return Values',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `So far, all our methods have printed results directly to the console. While this is great for learning, real-world programs don\'t just print things out. Often, you want a method to calculate a result and **send that result back** to the caller so you can save it, use it in another calculation, or display it on a web page.

This process of sending data back is called **Returning a Value**. In this lesson, we will master the \`return\` keyword and learn how to receive results from methods.`,
    whyThisTopicMatters: {
      whyItExists: 'If helper methods can only print text, the rest of your program has no way to access the answers they calculate. If a method calculates a tax rate, but can\'t send that tax rate back to the checkout module, the program can\'t complete the purchase.',
      problemSolved: 'The \`return\` keyword lets methods act as calculation engines. They accept input, perform heavy math or logic behind the scenes, and output a clean result variable right back to the caller for immediate use.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To write a method that returns a value, we must make two critical adjustments to our code structure:'
      },
      {
        type: 'paragraph',
        text: 'First, we must change the **Return Type** in our method header from \`void\` to the specific type of data we plan to output (e.g., \`int\`, \`double\`, \`String\`, or \`boolean\`).'
      },
      {
        type: 'paragraph',
        text: 'Second, we must use the **return** keyword inside our method body, followed by the actual data value or variable we want to send back, e.g., \`return result;\`.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Return Statement',
          definition: 'A code statement ending with the "return" keyword that stops method execution and sends a value back to the caller.',
          explanation: 'Once a return statement executes, the method exits instantly. Any statements written below it are completely unreachable.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Returned Value Storage',
          definition: 'The process of capturing the output of a method call inside a variable in the calling block.',
          explanation: 'Written as: `int answer = add(5, 3);` where "answer" stores the returned value.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Think of a return method like calling a helper to get a document. You ask them (call the method), they fetch it (perform the logic), and hand it to you (return the value). Now you have the document in your hands to do whatever you need!'
      }
    ],
    codeExamples: [
      {
        title: 'Writing and Capturing a Return Value',
        language: 'java',
        code: `public class ReturnExample {

    // Header says "int", meaning this method MUST return an integer
    public static int multiply(int num1, int num2) {
        int product = num1 * num2;
        
        // Output the result back to whoever called us
        return product; 
    }

    public static void main(String[] args) {
        // Capture the output inside a local variable named "result"
        int result = multiply(4, 5);
        
        System.out.println("The saved result is: " + result);
        
        // We can use the result in further math!
        int doubled = result * 2;
        System.out.println("Doubled: " + doubled);
    }
}`,
        explanation: 'Line-by-line breakdown:\n1. Program triggers multiply(4, 5) inside main().\n2. Inside multiply, num1 gets 4, num2 gets 5.\n3. product is calculated as 4 * 5 = 20.\n4. "return product;" executes. Execution control returns instantly to main().\n5. The call "multiply(4,5)" is replaced by the value 20, which is stored inside "result".\n6. The program prints "The saved result is: 20".'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Return Value Pipeline Journey',
        description: 'Tracing how data flows from parameters, through calculation, and back to storage.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Inputs Passed', desc: 'Call statement sends arguments into method parameters.' },
            { id: '2', type: 'process', label: 'Calculate', desc: 'Statements inside the method process the data.' },
            { id: '3', type: 'process', label: 'Return Statement', desc: 'Java hits "return result;", exiting the method instantly.' },
            { id: '4', type: 'end', label: 'Variable Storage', desc: 'The calling block assigns the output directly into a local variable.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting statements after a return statement.',
        whyItHappens: 'Beginners sometimes write return statements mid-method, thinking they can perform cleanups or final print statements afterward.',
        howToAvoid: 'A return statement exits the method instantly. The compiler knows that any statement written below it can never run, and will reject the code as "unreachable."',
        codeSnippet: {
          bad: `public static int add(int x, int y) {
    int total = x + y;
    return total;
    // ❌ Error: Unreachable code. Method has already exited!
    System.out.println("Finished adding"); 
}`,
          good: `public static int add(int x, int y) {
    int total = x + y;
    System.out.println("Finished adding"); // Print first
    return total; // Then exit
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Capturing and Returning Calculations',
      tasks: [
        'Create a method named "cube" that takes an integer "x" and returns its cube (x * x * x). Write a main() method to test and print the output.',
        'Why does a compilation error occur if your header declares "int" but your method body has no return statement?',
        'Predict what happens if your return statement returns a double (like 4.5) but your header return type is declared as "int".',
        'Write a public static method named "isEven" that takes an integer input and returns a boolean (true if the number is even, false otherwise).',
        'Create a method named "getGreeting" that takes a String "name" and returns a full greeting String (e.g., "Hello, name!").'
      ]
    },
    summary: [
      'Return methods yield a computed value back to the caller instead of printing it.',
      'The return type in the header must match the data type of the value being returned.',
      'Once a return statement executes, the method exits instantly; subsequent statements are unreachable.',
      'Returned values can be captured and stored in variables inside the calling block for further processing.'
    ]
  },

  'void-methods': {
    slug: 'void-methods',
    title: 'Void Methods',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `In our last lesson, we saw how methods can calculate and return data values. But what if a method doesn't need to return anything? What if its entire purpose is simply to perform an action—like printing text to the console, showing an alert, or saving a file?

In Java, we represent methods that perform actions without outputting data values using the special keyword **void**. Understanding void methods is crucial to organizing structural tasks in your programs.`,
    whyThisTopicMatters: {
      whyItExists: 'If Java forced every method to return data, programmers would have to invent "fake" return values (like returning a useless 0 or false) just to satisfy the compiler whenever they wanted to perform simple actions like printing a decorative line.',
      problemSolved: 'The \`void\` keyword tells the compiler: "This method performs an action and does its job, but it does not produce a data value to save." This keeps code clean and prevents unnecessary variables from cluttering memory.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A **void method** is declared by placing the keyword \`void\` in the return type position of the method header.'
      },
      {
        type: 'paragraph',
        text: 'Because void methods do not return values, they are called as complete, standalone statements. You cannot assign their output to a variable, and you cannot print them directly.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'void Keyword',
          definition: 'A special return type modifier in Java indicating that a method does not return any value to its caller.',
          explanation: 'Used for methods whose sole responsibility is to print messages, mutate class states, or run sequences of tasks.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Action-oriented Method',
          definition: 'A method focused on performing procedures or side-effects rather than calculating values.',
          explanation: 'Perfect for drawing borders, clearing screens, playing sound effects, or outputting data logs.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Can you use the "return" keyword inside a void method? Yes! You can write "return;" with no value after it to exit the method early, which is extremely useful for error recovery or input validation!'
      }
    ],
    codeExamples: [
      {
        title: 'Action Procedures vs. Value Calculation',
        language: 'java',
        code: `public class VoidExample {

    // 1. VOID Method: Performs an action (printing), returns nothing
    public static void printStars(int count) {
        for (int i = 0; i < count; i++) {
            System.out.print("*");
        }
        System.out.println(); // newline
        // No return statement needed!
    }

    public static void main(String[] args) {
        // Called as a standalone statement
        printStars(5); 
        
        // ❌ WRONG: Trying to store a void output will crash the compiler:
        // int result = printStars(5); 
    }
}`,
        explanation: 'In this example, printStars is a void helper. It takes an integer parameter to print a specific number of stars. Because its return type is void, we call it directly. Trying to assign its result to a variable triggers a compilation failure.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Void Methods vs. Return Methods',
        description: 'Key structural differences to remember.',
        elements: {
          headers: ['Feature', 'Void Methods', 'Return Methods (int, String, etc.)'],
          rows: [
            ['Keyword in Header', 'Must use the "void" keyword.', 'Must specify a data type (e.g., int, boolean).'],
            ['Body Requirement', 'No return statement is required.', 'Must contain "return" followed by a matching value.'],
            ['Calling Syntax', 'Called as a standalone statement: printStars(5);', 'Assigned or embedded: int ans = multiply(4,5);'],
            ['Primary Objective', 'Performs procedures or side effects.', 'Calculates and yields a specific data output.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to return a value from a void method.',
        whyItHappens: 'Beginners sometimes get confused and try to return values from void methods, or include a value with a return statement.',
        howToAvoid: 'If a method header specifies void, you cannot return a value. You can use "return;" alone to exit early, but adding any variable or constant afterward will cause an error.',
        codeSnippet: {
          bad: `public static void printDouble(double x) {
    System.out.println(x * 2);
    // ❌ Error: Cannot return a value from a method with void return type
    return x * 2; 
}`,
          good: `public static void printDouble(double x) {
    System.out.println(x * 2);
    // ✓ Correct: Simply omit the return statement (or write "return;" alone)
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Action Procedures Practice',
      tasks: [
        'Write a void method named "printSeparator" that prints a line of 20 dashes "--------------------" to the console.',
        'Why does trying to print "System.out.println(printSeparator());" cause a compilation crash?',
        'Under what logical condition would a developer want to use "return;" inside a void method?',
        'Create a void method named "printProfile" that accepts two parameters: a String username and an integer highscore, and prints them in a tidy profile layout.',
        'What occurs in memory if a void method loops infinitely? Explain why void return types do not protect against infinite loops.'
      ]
    },
    summary: [
      'Void methods perform actions or procedures but do not return a data value.',
      'Declared using the "void" keyword in the return type position of the method header.',
      'Void methods are called as standalone statements, never assigned to variables.',
      'You can use a blank "return;" statement to exit a void method early if needed.'
    ]
  },

  'method-scope-and-local-variables': {
    slug: 'method-scope-and-local-variables',
    title: 'Method Scope and Local Variables',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `When you create variables, they don\'t just float around in your program forever. Every variable you declare inside a Java program has a restricted "territory" where it lives, is accessible, and can be used. This territory is called **Variable Scope**.

In Java, any variable declared inside a method is called a **Local Variable**. In this lesson, we will learn how variable scope governs our code and why methods act as secure isolation shields for variables.`,
    whyThisTopicMatters: {
      whyItExists: 'If every variable in a program could be seen and changed by every other part of the system, software would be incredibly fragile. A small modification in one part of the program could accidentally change a variable being used elsewhere, causing random crashes.',
      problemSolved: 'Variable scope solves this by confining variable lifespans. Local variables inside a method are completely hidden from the rest of the world. Two different programmers can use the variable name "count" in their respective helper methods, and Java will keep them completely separate, with zero risk of name clashes.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The fundamental rule of Java scope is: **A variable is only visible and accessible inside the block of curly braces \`{}\` where it was declared.**'
      },
      {
        type: 'paragraph',
        text: 'Because methods are defined by blocks of curly braces, any variable you declare inside a method belongs strictly to that method. It is a **local variable**. It is created when the method is called and is instantly destroyed when the method finishes executing.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Local Variable',
          definition: 'A variable declared inside the body of a method or block, accessible only within that specific block.',
          explanation: 'Local variables are completely invisible to other sibling methods, including the main() block.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Scope Boundary',
          definition: 'The region of program text where a declared variable can be referenced by its simple name.',
          explanation: 'Governed by curly braces. Trying to reference a variable outside its curly brace boundary triggers a "cannot find symbol" compilation error.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'This rule also applies to parameters! Parameters (like "int x" in a header) act as local variables inside the method body. They are created when the method starts and destroyed when it ends.'
      }
    ],
    codeExamples: [
      {
        title: 'Variable Isolation in Sibling Methods',
        language: 'java',
        code: `public class ScopeDemo {

    public static void setBalance() {
        // "balance" is LOCAL to setBalance. It only lives here!
        double balance = 5000.0;
        System.out.println("Balance inside method: " + balance);
    }

    public static void main(String[] args) {
        setBalance();
        
        // ❌ Error: balance is not defined inside main()!
        // System.out.println("Balance inside main: " + balance); 
    }
}`,
        explanation: 'In this example, "balance" is declared inside setBalance(). It is a local variable. If we uncomment the print statement inside main(), the compiler will crash because main() has no access to the "balance" variable inside setBalance().'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Lifetime of a Local Variable',
        description: 'Tracing how a local variable is created, used, and cleared from system memory.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Method Called', desc: 'Execution jumps to the helper method block.' },
            { id: '2', type: 'process', label: 'Variable Born', desc: 'Line declaring the local variable is executed; memory is allocated.' },
            { id: '3', type: 'process', label: 'Active Usage', desc: 'Variable is read or updated within the method body.' },
            { id: '4', type: 'end', label: 'Method Exits', desc: 'Reaching the closing brace, the variable is instantly destroyed; memory is freed.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to access variables across methods directly.',
        whyItHappens: 'Beginners often think that because variables are in the same class file, they can be accessed anywhere without passing them as arguments.',
        howToAvoid: 'If a method needs information from another method, you must pass that information into the method as an **argument** in the call, rather than trying to access it directly.',
        codeSnippet: {
          bad: `public class Main {
    public static void printAge() {
        // ❌ Error: "age" is local to main, invisible here!
        System.out.println("Age is: " + age); 
    }
    public static void main(String[] args) {
        int age = 21;
        printAge();
    }
}`,
          good: `public class Main {
    // ✓ Correct: Pass age as a parameter variable
    public static void printAge(int age) {
        System.out.println("Age is: " + age);
    }
    public static void main(String[] args) {
        int age = 21;
        printAge(age); // Pass it in!
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Scoping Boundaries Challenge',
      tasks: [
        'Define "local variable" in your own words, noting when its memory is allocated and when it is destroyed.',
        'Why does Java allow two different methods in the same class to declare local variables with the exact same name (e.g., "int x")?',
        'Look at this statement: "Variables declared inside the initialization block of a for loop are local to that loop." Predict if they are visible after the loop ends.',
        'Write a class with a main method declaring "int score = 100". Create a helper method "modifyScore" that declares its own local "score = 50", and explain why running it doesn\'t alter main\'s score.',
        'What error message does your IDE or the Java compiler display when you attempt to access a variable outside its scope boundary?'
      ]
    },
    summary: [
      'Scope is the region of code where a variable can be seen and accessed.',
      'Variables declared inside a method are local variables, isolated from other methods.',
      'Local variables are born when the method is called and destroyed when the method exits.',
      'To share data between methods, you must pass arguments or return values.'
    ]
  },

  'method-overloading': {
    slug: 'method-overloading',
    title: 'Method Overloading',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Imagine you are building a math utility class. You want a method that adds numbers together. You create a method \`add(int a, int b)\`. But what if the user wants to add decimals? You would have to write a second method like \`addDouble(double a, double b)\`. What if they want to add three integers? You\'d need \`addThree(int a, int b, int c)\`. 

This constant inventing of new names is tedious. To solve this, Java provides a feature called **Method Overloading**. It lets you write multiple methods with the exact same name, as long as they expect different input parameters.`,
    whyThisTopicMatters: {
      whyItExists: 'In older programming languages, every function required a completely unique name. This forced developers to memorize hundreds of variations of the same basic operation, leading to messy, unreadable, and complex codebases.',
      problemSolved: 'Method overloading solves this by focusing on intent. If the action is "adding," we should simply call the method \`add\`. Java will figure out behind the scenes exactly which code block to execute based on the inputs we pass, keeping our interface clean and unified.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, you can overload a method as long as its **parameter list is unique**.'
      },
      {
        type: 'paragraph',
        text: 'A parameter list is considered unique if it differs in one of three ways:'
      },
      {
        type: 'bullet_list',
        title: 'Ways to create unique overloaded parameters:',
        items: [
          '**Different Number of Parameters** — e.g., \`add(int a, int b)\` vs. \`add(int a, int b, int c)\`.',
          '**Different Data Types of Parameters** — e.g., \`add(int a, int b)\` vs. \`add(double a, double b)\`.',
          '**Different Sequence of Types** — e.g., \`introduce(String name, int age)\` vs. \`introduce(int age, String name)\`.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method Overloading',
          definition: 'Creating multiple methods within the same class that share the same name but have different parameter lists.',
          explanation: 'Java matches the method call to the correct overloaded block during the compilation phase.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method Signature',
          definition: 'The combination of a method\'s name and its parameter list (number, order, and types of parameters).',
          explanation: 'Java uses the signature to differentiate between overloaded methods. Note: The return type is NOT part of the signature.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Crucial rule: You cannot overload methods by changing ONLY the return type. If two methods have the exact same name and parameter list, changing one from void to int will trigger a compilation crash because Java won\'t be able to tell them apart during a call.'
      }
    ],
    codeExamples: [
      {
        title: 'Overloading the add() Method',
        language: 'java',
        code: `public class Calculator {

    // Overload 1: Takes two integers
    public static int add(int a, int b) {
        System.out.println("Running integer addition...");
        return a + b;
    }

    // Overload 2: Takes three integers
    public static int add(int a, int b, int c) {
        System.out.println("Running three-integer addition...");
        return a + b + c;
    }

    // Overload 3: Takes two doubles (decimals)
    public static double add(double a, double b) {
        System.out.println("Running double addition...");
        return a + b;
    }

    public static void main(String[] args) {
        // Calls Overload 1
        int sum1 = add(5, 10); 
        
        // Calls Overload 2
        int sum2 = add(5, 10, 15); 
        
        // Calls Overload 3
        double sum3 = add(5.5, 4.5); 
    }
}`,
        explanation: 'Here, we have three methods named "add". Java handles this gracefully. When we call add(5.5, 4.5), the compiler inspects the arguments, identifies them as doubles, and executes Overload 3 automatically.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Overloading Signature Rules',
        description: 'Understanding what counts as valid overloading versus what triggers compile crashes.',
        elements: {
          headers: ['Method Header Pairs', 'Is Overloading Valid?', 'Reason'],
          rows: [
            ['add(int x) & add(double x)', '✅ Yes (Valid)', 'Data types of parameters are different.'],
            ['add(int x, double y) & add(double x, int y)', '✅ Yes (Valid)', 'Order of parameter types is different.'],
            ['add(int x) & add(int y)', '❌ No (Invalid)', 'Parameter names do not matter; signatures are identical.'],
            ['int add(int x) & void add(int x)', '❌ No (Invalid)', 'Return types do not count toward unique signatures.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to overload by changing only the return type.',
        whyItHappens: 'Beginners think that because they are changing the return type, the compiler can tell the methods apart.',
        howToAvoid: 'Remember that when Java resolves a method call (like `add(5, 10)`), it does not look at what the method returns—only what is passed in. Signatures must be unique in their parameters.',
        codeSnippet: {
          bad: `public class Main {
    // ❌ Error: Duplicate method declared because signatures are identical
    public static void calculate(int x) {}
    public static int calculate(int x) { return x; } 
}`,
          good: `public class Main {
    // ✓ Correct: Parameter lists are unique
    public static void calculate(int x) {}
    public static void calculate(double x) {} 
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Designing Overloaded Signatures',
      tasks: [
        'Write two valid overloaded headers for a method named "printReceipt" (one for single items, one for custom bulk lists).',
        'Why does changing a parameter name (e.g., "add(int x)" to "add(int y)") fail to create a valid overloaded method?',
        'If you call "add(5, 10.5)" for our overloaded calculator example, explain which method Java will choose and why.',
        'Create a public static method named "describe" that is overloaded to accept either a String name, an int score, or a boolean status, printing a custom explanation for each.',
        'Analyze how overloading improves the user experience for other programmers using your libraries.'
      ]
    },
    summary: [
      'Method overloading lets multiple methods share a name, with unique parameter lists.',
      'Signatures are unique if parameters differ in number, type, or ordering sequence.',
      'The return type of a method is completely ignored during signature resolution.',
      'Overloading focuses on programmer intent, eliminating the need to memorize arbitrary names.'
    ]
  },

  'passing-values-to-methods': {
    slug: 'passing-values-to-methods',
    title: 'Passing Values to Methods',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A major question beginners have when learning methods is: **"When I pass a variable into a method, what happens to my original variable?"** If the method modifies its parameter variable inside, does my original variable in the caller change too?

The answer to this lies in how Java handles memory during method calls. In Java, **all values are passed by copy**. In this lesson, we will explore this mechanic using primitive values and gain a beginner-friendly understanding of references.`,
    whyThisTopicMatters: {
      whyItExists: 'If variables were directly shared across methods, running a helper calculation could accidentally corrupt your main program state, leading to bugs that are incredibly difficult to isolate.',
      problemSolved: 'Java enforces a strict copy policy. When you pass a variable, Java creates a "photocopy" of the value and hands it to the method. The method can scribble on, change, or destroy its copy, and your original variable remains perfectly untouched and safe.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In computer science, this mechanism is called **Pass-by-Value**. In Java, everything is Pass-by-Value.'
      },
      {
        type: 'paragraph',
        text: 'When you pass a primitive variable (like an \`int\` or \`double\`) to a method, Java looks at the variable\'s value, creates an exact duplicate copy, and assigns that copy to the method\'s parameter variable.'
      },
      {
        type: 'paragraph',
        text: 'Because they reside in separate memory locations, any changes made to the parameter inside the method body have **zero effect** on the original variable in your \`main()\` block.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Pass-by-Value',
          definition: 'A parameter passing mechanism where a copy of an argument\'s value is passed into the method, isolating the original variable.',
          explanation: 'Java utilizes pass-by-value exclusively. You are always passing duplicates of primitive data values.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object Reference (Preview)',
          definition: 'An address or pointer in memory indicating where a complex object\'s data is physically stored.',
          explanation: 'For complex items (like arrays or objects), Java passes a copy of the reference. This means both the caller and the method point to the same shared object, but the reference variable itself is still passed by copy.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Think of primitives as cash. If you make a photocopy of a $20 bill and give it to a friend, and they draw a mustache on their paper copy, your original physical bill in your pocket is completely unchanged!'
      }
    ],
    codeExamples: [
      {
        title: 'Verifying Pass-by-Value Protection',
        language: 'java',
        code: `public class CopyDemo {

    public static void increment(int value) {
        System.out.println("[Method start] value is: " + value);
        
        // Modifying the local parameter copy
        value = value + 10; 
        
        System.out.println("[Method end] value copy is: " + value);
    }

    public static void main(String[] args) {
        int x = 5;
        System.out.println("[Before call] x is: " + x);
        
        // Pass x into the method
        increment(x); 
        
        System.out.println("[After call] x is still: " + x);
    }
}`,
        explanation: 'Line-by-line breakdown:\n1. Program starts in main() with x = 5.\n2. increment(x) is called. Java copies the value 5 and hands it to the parameter "value".\n3. Inside increment, "value" is changed to 15. The photocopy is scribbled on.\n4. increment finishes. We jump back to main().\n5. main() prints "x is still: 5". The original variable remained completely isolated!'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Pass-by-Value Copy Process',
        description: 'How Java isolates values across scope boundaries.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Original: x = 5', desc: 'Variable x holds the value 5 inside the main scope.' },
            { id: '2', type: 'process', label: 'Photocopy created', desc: 'Java creates a duplicate copy of the number 5.' },
            { id: '3', type: 'process', label: 'Value parameter = 5', desc: 'The duplicate value is handed to the method parameter.' },
            { id: '4', type: 'end', label: 'Value changes to 15', desc: 'Method updates value, but x remains safely 5.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Expecting a method to modify original variables directly.',
        whyItHappens: 'Beginners write void methods expecting them to alter inputs directly, like writing `doubleValue(num);` and expecting `num` to double automatically.',
        howToAvoid: 'If you want a method to modify a primitive variable, you should have the method return the calculated result, and then re-assign it to your original variable inside main().',
        codeSnippet: {
          bad: `public static void doubleValue(int n) {
    n = n * 2;
}
public static void main(String[] args) {
    int score = 10;
    doubleValue(score); // ❌ Does NOT change score in main!
}`,
          good: `public static int doubleValue(int n) {
    return n * 2; // Return the value
}
public static void main(String[] args) {
    int score = 10;
    // ✓ Correct: Assign the returned copy back to score
    score = doubleValue(score); 
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Value Copy Mechanics Challenge',
      tasks: [
        'Describe the "photocopy analogy" of pass-by-value in your own words.',
        'If you pass a variable declared as "int temp = 32" to a method that has a parameter "int temp", are these variables stored in the same memory location?',
        'Explain how to rewrite a method that fails to update its input variable so that it successfully updates the caller\'s variable using a return statement.',
        'Predict the output of this sequence: main starts, calls "halve(num)" where num is 100, then prints num. Explain your prediction.',
        'Research the fundamental difference in how Java stores primitives in stack memory versus complex objects in heap memory, and write a paragraph on why references must be treated with caution.'
      ]
    },
    summary: [
      'Java passes all parameters by value, which means passing an exact copy of the data.',
      'Modifying parameter variables inside a method has zero effect on caller variables.',
      'Primitive variables are fully isolated in separate memory locations during a call.',
      'To modify a caller variable, return the result and re-assign it in the caller.'
    ]
  },

  'writing-clean-programs-using-methods': {
    slug: 'writing-clean-programs-using-methods',
    title: 'Writing Clean Programs Using Methods',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `You have mastered the mechanics of methods: creating, calling, parameters, return values, void, scope, overloading, and passing parameters. Now, we must transition from merely understanding the syntax to **thinking like a software architect**. 

In this lesson, we will learn how to design clean programs. We will study the "Single Responsibility Principle" for beginners and see how decomposing a large program into small, organized methods turns chaotic code into professional software.`,
    whyThisTopicMatters: {
      whyItExists: 'As programs scale to thousands or millions of lines of code, the biggest challenge isn\'t getting the code to run—it is understanding it. A program written inside one massive block becomes a house of cards: a single change can cause unrelated parts to break in confusing ways.',
      problemSolved: 'Dividing programs into short, single-purpose methods isolates logic. It lets you write, test, and polish one small feature at a time. It also makes your code read like a storybook, allowing any developer to understand the logical progression instantly.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When organizing a program, professional developers follow a key guideline called the **Single Responsibility Principle (SRP)**. For methods, this means: **A method should do exactly ONE job, and do it exceptionally well.**'
      },
      {
        type: 'paragraph',
        text: 'If you have a method named \`calculateAndPrintInvoiceAndSendEmail()\`, it has three separate responsibilities. If the email system breaks, the calculation logic is frozen too. You should break this monster method into three separate helper methods: \`calculateInvoice()\`, \`printInvoice()\`, and \`sendEmail()\`.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Decomposition',
          definition: 'The process of breaking a complex program down into smaller, highly manageable, and focused sub-tasks.',
          explanation: 'A fundamental problem-solving technique in computer science. It turns overwhelming challenges into small, trivial steps.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Helper Method',
          definition: 'A small, focused method created to assist other methods by completing one specific repetitive or isolated task.',
          explanation: 'Helper methods keep main logic clean by sweeping administrative details (like checking if input is valid) under the rug.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Rule of thumb: If a method takes up more than one screen or is longer than 20-30 lines, it is likely doing too many tasks. Look for ways to split it into helper methods!'
      }
    ],
    codeExamples: [
      {
        title: 'Project Case Study: A Clean ATM Program',
        language: 'java',
        code: `public class BankProgram {

    // Helper 1: Formats and displays a stylized balance screen
    public static void printBalance(double balance) {
        System.out.println("================================");
        System.out.println("      CURRENT ATM BALANCE       ");
        System.out.println("  Value: $" + balance);
        System.out.println("================================");
    }

    // Helper 2: Safely handles a deposit action and returns the new total
    public static double makeDeposit(double currentBalance, double depositAmount) {
        if (depositAmount <= 0) {
            System.out.println("❌ Error: Invalid deposit amount.");
            return currentBalance; // Return unchanged balance
        }
        double newBalance = currentBalance + depositAmount;
        System.out.println("✓ Deposit of $" + depositAmount + " successful!");
        return newBalance;
    }

    // Main controller: Coordinates the helpers in a clean layout
    public static void main(String[] args) {
        double myAccountBalance = 1000.00;
        
        // Show starting status
        printBalance(myAccountBalance);
        
        // Perform a deposit
        myAccountBalance = makeDeposit(myAccountBalance, 250.50);
        
        // Show updated status
        printBalance(myAccountBalance);
    }
}`,
        explanation: 'This code shows an ATM application. Notice how clean main() is. Instead of cluttering main with validation if-statements and print lines, we delegate tasks to printBalance() and makeDeposit(). Each helper has one single job, making the code extremely readable, easy to test, and clean.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Spaghetti Code vs. Modular Architecture',
        description: 'Visual comparison of program design structures.',
        elements: {
          headers: ['Design Element', 'Spaghetti Code', 'Modular Architecture (SRP)'],
          rows: [
            ['Main Method Size', 'Hundreds of lines, doing all calculations, prints, and checks.', 'Very short, acting as a high-level manager coordinating helpers.'],
            ['Testing', 'You must run the entire application to check if a single math formula works.', 'You can isolate and test each helper method individually.'],
            ['Readability', 'Confusing branches, hard to find where data is edited.', 'Reads like a checklist of logical steps.'],
            ['Maintenance', 'Modifying one line can break unexpected parts of the program.', 'Changes are fully isolated inside the method\'s body.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Creating massive "monster" methods that do multiple tasks.',
        whyItHappens: 'Programmers are eager to see results. They keep adding code to whatever method they are currently editing, accumulating tasks.',
        howToAvoid: 'Frequently step back and inspect your methods. If you see comments separating sections of a method (e.g., "// Print header", "// Calculate tax"), those are perfect candidates to be extracted into independent helper methods.',
        codeSnippet: {
          bad: `public static void runProgram() {
    // ❌ Bad: One method handling three unrelated tasks
    System.out.println("Starting Program...");
    int sum = 5 + 10;
    System.out.println("Sum is " + sum);
    // sending email logic here...
}`,
          good: `// ✓ Correct: Divided into small single-purpose siblings
public static void logStart() {
    System.out.println("Starting Program...");
}
public static int getSum(int x, int y) {
    return x + y;
}
public static void sendEmail(String content) {
    // sending email logic...
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Architecting Clean Programs',
      tasks: [
        'Analyze your favorite computer game or application. List at least five distinct helper methods that represent individual features.',
        'Why does the Single Responsibility Principle improve the security of complex banking and commerce software?',
        'Look at the bank case study code. If we wanted to add a "withdraw" feature, write out the complete method header and body, ensuring it prevents withdrawing more money than exists in the balance.',
        'Create a fully modular program to calculate GPA. Create a helper method "getGradePoints(char letterGrade)" returning the numeric value (A=4, B=3, etc.), and a manager method calculating average points.',
        'Refactor this monolithic block: "int x = 5; int y = 10; System.out.println(x+y); System.out.println("Finished!");" into clean helper methods.'
      ]
    },
    summary: [
      'The Single Responsibility Principle (SRP) states that a method should do exactly one job.',
      'Decomposition involves breaking large, complex programs down into small, highly focused sub-methods.',
      'Helper methods keep main() extremely short, acting as a clean controller rather than a dense engine.',
      'Modular code is dramatically easier to read, test, debug, and maintain over time.'
    ]
  },
  'debugging-java-programs': {
    slug: 'debugging-java-programs',
    title: 'Debugging Java Programs',
    moduleSlug: 'methods',
    moduleName: 'Methods in Java',
    estimatedTime: '45 mins',
    difficulty: 'Beginner',
    introduction: `Even the most experienced developers in the world do not write perfect code on their first try. When programs crash or output incorrect results, it is easy to feel frustrated or assume that you aren't cut out for coding. 

But here is the truth: **errors are a completely normal and healthy part of software development.** Debugging is the process of finding and fixing these mistakes. It is not an interruption to the job of programming; debugging *is* programming. In this lesson, we will equip you with a logical debugging mindset and the techniques needed to find and fix errors with confidence.`,
    whyThisTopicMatters: {
      whyItExists: 'A single misplaced character, incorrect comparison symbol, or unexpected input can make an entire program crash or misbehave. To write software that people can actually use, you must know how to inspect your program and fix these defects systematically.',
      problemSolved: 'Learning how to debug turns frustrating "guess-and-check" attempts into a structured, calm, and scientific investigation. You will learn to read error messages as helpful roadmaps rather than scary warnings.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Debugging is very similar to detective work. You are given a set of clues—a program crash, a strange error message, or an incorrect final calculation—and you must work backwards to find the exact line of code that caused the crime. To do this, you first need to identify which type of error you are dealing with.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Syntax Error',
          definition: 'A spelling, punctuation, or grammar violation of Java\'s strict language rules that prevents the compiler from compiling your code.',
          explanation: 'Examples include missing semicolons (;), unmatched curly braces ({}), or using a lowercase "s" in "system.out.println". The compiler will find and flag these instantly.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Runtime Error',
          definition: 'An error (or Exception) that occurs while the program is actively running, causing it to crash unexpectedly.',
          explanation: 'Your code is syntactically perfect, but it attempts to perform an impossible operation at runtime, such as dividing by zero or accessing an array item that doesn\'t exist.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Logical Error',
          definition: 'A mistake in your programming logic where the code compiles and runs completely fine but produces incorrect results.',
          explanation: 'These are the hardest to find because the computer does exactly what you wrote, not what you intended. For example, using a greater-than symbol (>) instead of greater-than-or-equal-to (>=).'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'The computer is a literal machine. It has no common sense and cannot guess your intentions. It executes your instructions exactly as they are written, even if those instructions are logically flawed.'
      },
      {
        type: 'paragraph',
        text: 'When a Java program crashes or fails to compile, it generates an **Error Message** or a **Stack Trace**. Beginners often panic and ignore these messages, but they are actually the most valuable clues you have. They tell you: 1) What went wrong, and 2) Exactly which file and line number the error occurred on.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Stack Trace',
          definition: 'A report showing the sequence of method calls that were active at the exact moment a program crashed.',
          explanation: 'By reading a stack trace from the top down, you can trace the path the computer took through your methods and find the exact line that triggered the crash.'
        }
      }
    ],
    codeExamples: [
      {
        title: 'Anatomy of the Three Error Types',
        language: 'java',
        code: `public class ErrorTypesDemo {
    public static void main(String[] args) {
        
        // 1. SYNTAX ERROR (Will not compile!)
        // int number = 10 // Missing semicolon!
        
        // 2. RUNTIME ERROR (Compiles, but crashes when executed!)
        int x = 10;
        int y = 0;
        // int result = x / y; // Throws ArithmeticException: / by zero
        
        // 3. LOGICAL ERROR (Compiles and runs, but output is wrong!)
        double subtotal = 100.0;
        double taxRate = 0.05; // 5% tax
        
        // Goal: Calculate total price with tax (expected: 105.0)
        double total = subtotal + taxRate; // Logical error: added tax rate directly instead of (subtotal * taxRate)
        
        System.out.println("Total Price: $" + total); // Prints: $100.05 (Incorrect!)
    }
}`,
        explanation: 'Notice how the compiler protects you from Syntax Errors. Runtime errors crash immediately. Logical errors require you to trace the arithmetic calculations manually or print intermediate values.'
      },
      {
        title: 'Debugging with Print Statements (Print Debugging)',
        language: 'java',
        code: `public class PriceDebugger {
    public static double calculateDiscount(double price, int age) {
        // We suspect a bug in this method
        System.out.println("[DEBUG] Entered calculateDiscount with price=" + price + ", age=" + age);
        
        double discount = 0.0;
        if (age >= 60) {
            discount = 0.20; // 20% senior citizen discount
        } else if (age < 18) {
            discount = 0.10; // 10% student discount
        }
        
        System.out.println("[DEBUG] Calculated discount factor: " + discount);
        double finalPrice = price - (price * discount);
        
        System.out.println("[DEBUG] Final calculated price: " + finalPrice);
        return finalPrice;
    }

    public static void main(String[] args) {
        double result = calculateDiscount(200.0, 65);
        System.out.println("Result: " + result);
    }
}`,
        explanation: 'Adding temporary "System.out.println" statements inside your methods lets you peer into the running memory of the JVM. You can verify if the variables hold the expected values at each critical step.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Comparing the Three Error Categories',
        description: 'Knowing which error family you are facing determines your strategy for finding and resolving it.',
        elements: {
          headers: ['Error Family', 'Discovered By', 'System Behavior', 'How to Fix'],
          rows: [
            ['Syntax Error', 'Java Compiler', 'Refuses to compile or start the program.', 'Read the compiler output, locate the line number, and fix typos or punctuation.'],
            ['Runtime Error', 'Java Virtual Machine (JVM)', 'Crashes the application with an Exception report.', 'Read the Stack Trace, find the line number, and add validation if-guards.'],
            ['Logical Error', 'The Learner / User', 'Runs perfectly but produces incorrect or unexpected results.', 'Add temporary debug prints, run a trace table, or use a debugger step tool.']
          ]
        }
      },
      {
        type: 'flow',
        title: 'The Scientific Debugging Loop',
        description: 'Follow this calm, repeatable procedure whenever your code behaves unexpectedly.',
        elements: {
          steps: [
            { id: '1', label: '1. Observe the Bug', desc: 'Note the exact symptom: crash, compiler error, or bad result.', type: 'start' },
            { id: '2', label: '2. Formulate a Hypothesis', desc: 'Read the code and guess which variable or line is misbehaving.', type: 'action' },
            { id: '3', label: '3. Isolate & Test', desc: 'Add debug prints or set a breakpoint at that line.', type: 'decision' },
            { id: '4', label: '4. Change One Thing', desc: 'Modify exactly one line or value, compile, and check again.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Guessing and changing multiple lines of code randomly when a bug occurs.',
        whyItHappens: 'Beginners feel panicked and hope that by swapping characters or symbols, the code will magically start working.',
        howToAvoid: 'Never make a change unless you can explain exactly why that change should fix the problem. Changing multiple things at once makes it impossible to know which change worked or what new bugs you introduced.'
      },
      {
        mistake: 'Ignoring the line numbers provided in compiler messages or stack traces.',
        whyItHappens: 'Error logs can look like giant blocks of scary text, so beginners ignore them and scan the entire project blindly.',
        howToAvoid: 'The very first thing you should look for in an error log is your class name (e.g., "Main.java") followed by a colon and a number (e.g., "Main.java:24"). This tells you the exact line number to look at!'
      }
    ],
    practiceExercise: {
      title: 'Debugging Lab',
      tasks: [
        'Read this compiler message: "Main.java:12: error: \';\' expected". Explain exactly what this means, which file is affected, and what line number you should inspect.',
        'Consider this method: "public static double getAverage(double a, double b) { return a + b / 2.0; }". There is a logical bug here. If a = 10 and b = 20, what does it return, what should it return, and how do you fix it?',
        'Look up the difference between VS Code "Step Over" and "Step Into" debug commands. When would you want to use "Step Into" when tracing a method call?',
        'Identify the runtime error in this block: "String name = null; System.out.println(name.length());". What Exception will the JVM throw when executing this?'
      ]
    },
    summary: [
      'Errors are a natural milestone in development, and debugging is a key professional skill.',
      'Syntax errors prevent compilation, runtime errors crash mid-execution, and logical errors yield wrong results.',
      'Always inspect the line number and class file named in a stack trace or compiler warning first.',
      'Use debug print statements to inspect variables, and change only one thing at a time when troubleshooting.'
    ]
  }
};
