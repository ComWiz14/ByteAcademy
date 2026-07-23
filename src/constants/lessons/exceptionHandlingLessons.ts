import { DetailedLessonContent } from '../../types';

export const EXCEPTION_HANDLING_LESSONS: Record<string, DetailedLessonContent> = {
  'understanding-errors-and-exceptions': {
    slug: 'understanding-errors-and-exceptions',
    title: 'Understanding Errors and Exceptions',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `In software development, things rarely go perfectly. Users might type letters when you expect numbers, files you need to load might be missing, or internet connections might suddenly drop.

Before learning how to handle these situations, we must understand why programs fail and distinguish between different types of software anomalies. Understanding the difference between Syntax, Runtime, and Logic errors is the key to writing safer, crash-proof programs.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine a banking application. If a user inputs text like "one hundred" in an transfer field, and the program is not prepared, the computer gets confused and crashes. In finance, a system crash means lost customer trust and broken transactions.`,
      problemSolved: `By categorizing failures early, we can write defensive code. This prevents the program from unexpectedly quitting and allows us to report issues gracefully to users.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When we write programs, we encounter three primary categories of defects. Each behaves differently and is caught at different stages of the development cycle:'
      },
      {
        type: 'bullet_list',
        title: 'The three major types of program failures',
        items: [
          'Syntax Errors: Grammatical mistakes that violate the rules of the Java language (e.g., forgetting a semicolon or misspelled keywords). The compiler catches these instantly, and your code cannot compile.',
          'Runtime Errors (Anomalies): General problems that occur while the program is executing. The code is written in perfect Java syntax, but some dynamic situation causes an immediate failure (e.g., dividing by zero or reading a file that doesn\'t exist).',
          'Logic Errors: The program compiles and runs without any crashes, but produces incorrect outputs (e.g., using a plus sign instead of a minus sign in a tax calculator). These are also known as bugs.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Syntax Error',
          definition: 'A violation of the grammatical rules of a programming language, preventing compile-time completion.',
          explanation: 'Java requires all statements to end with semicolons. Forgetting one is a classic compile-time syntax error.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Logic Error (Bug)',
          definition: 'An error that occurs when a program compiles and runs but produces incorrect or unexpected results.',
          explanation: 'Since the syntax is perfectly valid, the compiler cannot detect logic errors. They must be found by testing the application.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'The first recorded computer "bug" was an actual moth trapped inside an electromechanical computer relay in 1947. Ever since, programming errors have been called bugs!'
      }
    ],
    codeExamples: [
      {
        title: 'Comparing Syntax, Logic, and Runtime Anomalies',
        language: 'java',
        code: `public class ErrorComparison {
    public static void main(String[] args) {
        // 1. SYNTAX ERROR (Will not compile!)
        // System.out.println("Hello World") // Missing semicolon!
        
        // 2. LOGIC ERROR (Compiles and runs, but output is wrong!)
        int age = 15;
        if (age > 18) { // Should be >= 18!
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }
        
        // 3. RUNTIME ERROR (Compiles perfectly, but crashes here!)
        int result = 10 / 0; 
        System.out.println("Result: " + result);
    }
}`,
        explanation: 'The syntax error blocks compilation. The logic error runs but fails the comparison test. The runtime division-by-zero crashes the app instantly.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Error Comparison Table',
        description: 'Analyzing when and how different types of errors are detected in Java.',
        elements: {
          headers: ['Error Category', 'When Detected', 'Blocks Compilation?', 'Primary Cause', 'How to Fix'],
          rows: [
            ['Syntax Error', 'Compile-time', 'Yes', 'Misspelled keywords, missing punctuation.', 'Correct grammatical syntax.'],
            ['Logic Error', 'Testing/Usage', 'No', 'Flawed algorithm design, mathematical typos.', 'Careful code review & debugging.'],
            ['Runtime Anomaly', 'Runtime', 'No', 'Invalid user input, resource unavailability.', 'Use try-catch exception handling.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming that because a program compiles, it is completely free of errors.',
        whyItHappens: 'Beginners often feel that getting a "Build Successful" message means their code is flawless.',
        howToAvoid: 'Compilation only proves your syntax is grammatically correct. You must test your program with negative inputs to check for logic and runtime defects.',
        codeSnippet: {
          bad: `// ❌ Compiles fine, but crashes if length is 0!
public double calculateAverage(int[] values) {
    int total = 0;
    for (int v : values) total += v;
    return total / values.length; 
}`,
          good: `// ✓ CORRECT: Guard against runtime crashes
public double calculateAverage(int[] values) {
    if (values == null || values.length == 0) {
        return 0.0;
    }
    int total = 0;
    for (int v : values) total += v;
    return (double) total / values.length;
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Anomalies Classification Lab',
      tasks: [
        'Examine this statement: "int score = Double.parseDouble(\"95.5\");". What error does this trigger and why?',
        'Write a simple method "int divide(int a, int b)" that returns "a / b". Add control flow to prevent a runtime crash if "b" is zero.',
        'Define in your own words the main difference between syntax errors and runtime exceptions.'
      ]
    },
    summary: [
      'Syntax errors are grammatical mistakes detected by the compiler.',
      'Logic errors are flaws in programming math or logic that yield incorrect data outputs without crashing.',
      'Runtime errors represent unexpected occurrences that interrupt active thread execution, which can be mitigated with robust handling.'
    ]
  },

  'introduction-to-exceptions': {
    slug: 'introduction-to-exceptions',
    title: 'Introduction to Exceptions',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `In Java, exceptions are objects. When an unexpected error occurs during runtime, the Java Virtual Machine (JVM) creates a special Exception object containing the diagnostic details of the crash and "throws" it.

If your code doesn't catch and handle this thrown object, the program comes to an abrupt halt. In this lesson, we will explore why Java represents failures as objects and look at the structure of Java's Exception Hierarchy.`,
    whyThisTopicMatters: {
      whyItExists: `In basic languages, errors are represented as plain error codes (like "Error -5"). This is vague. Java packages everything—the error type, a description message, and the exact code line that failed—into a single object structure.`,
      problemSolved: `Representing errors as objects lets developers inspect details programmatically, print trace trails, and bubble errors safely back to calling methods.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Java uses an Object-Oriented Exception Hierarchy. All exception objects derive from a shared parent class named **Throwable**. Let\'s examine the subdivisions:'
      },
      {
        type: 'bullet_list',
        title: 'The core Throwable subdivisions',
        items: [
          'Error: Severe, fatal problems related to the system or JVM (e.g., OutOfMemoryError, StackOverflowError). Your programs should NEVER try to catch these, as recovery is impossible.',
          'Exception: Operational conditions that normal programs can and should anticipate, capture, and recover from (e.g., FileNotFoundException, ArithmeticException).'
        ]
      },
      {
        type: 'paragraph',
        text: 'Inside the Exception class, there is another critical division:'
      },
      {
        type: 'bullet_list',
        title: 'Checked vs Unchecked Exceptions',
        items: [
          'Unchecked Exceptions (RuntimeExceptions): Issues that arise due to programmatic errors (e.g., NullPointerException). The compiler does not force you to declare or handle these explicitly.',
          'Checked Exceptions: Environmental conditions that the compiler forces you to handle at write-time (e.g., IOException). If you do not handle these, the program refuses to compile.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Exception Object',
          definition: 'An instance of an Exception class that encapsulates details about a runtime failure.',
          explanation: 'It includes the stack trace, description string, and optional causal exceptions.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Checked Exception',
          definition: 'An exception that must be declared or handled at compile-time.',
          explanation: 'If your code opens a file, Java forces you to handle a potential FileNotFoundException because file systems are outside the JVM\'s direct control.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'OOP Connection: Because exceptions are standard objects, they can have constructor parameters, custom methods, and inherit from other class structures!'
      }
    ],
    codeExamples: [
      {
        title: 'Exemplifying an Unchecked Exception Object',
        language: 'java',
        code: `public class ExceptionDemo {
    public static void main(String[] args) {
        String name = null;
        
        // This triggers a NullPointerException because name is null!
        // The JVM creates an instance of NullPointerException on the Heap.
        int length = name.length(); 
        
        System.out.println("Length: " + length);
    }
}`,
        explanation: 'When JVM hits "name.length()", it halts execution, constructs a NullPointerException object, and prints its stack trace indicating line 7 as the failure point.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Java Exception Hierarchy',
        description: 'Analyzing the tree of Throwable classes inside Java.',
        elements: {
          classes: [
            {
              name: 'Throwable (Superclass)',
              fields: ['String detailMessage', 'StackTraceElement[] stackTrace'],
              methods: ['String getMessage()', 'void printStackTrace()']
            },
            {
              name: 'Error [Severe system issues]',
              fields: ['OutOfMemoryError', 'StackOverflowError'],
              methods: ['(Do not catch!)']
            },
            {
              name: 'Exception [Application level issues]',
              fields: ['IOException (Checked)', 'SQLException (Checked)'],
              methods: ['RuntimeException (Unchecked sub-branch)']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to catch and recover from fatal JVM Errors.',
        whyItHappens: 'A beginner might write "catch (Error e)" hoping to recover from a StackOverflowError or OutOfMemoryError.',
        howToAvoid: 'Never attempt to capture Error subclasses. If the system is out of RAM memory, your recovery code cannot run anyway. Allow the JVM to shut down safely.',
        codeSnippet: {
          bad: `// ❌ WRONG: Swallowing fatal system errors
try {
    triggerDeepRecursion();
} catch (StackOverflowError err) {
    System.out.println("Recovered!"); 
}`,
          good: `// ✓ CORRECT: Refactor the recursive algorithm to use standard loops
public void repeatAction(int iterations) {
    for (int i = 0; i < iterations; i++) {
        doSomething();
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Hierarchy Concept Lab',
      tasks: [
        'Draw a simple flowchart representing how a compiler processes Checked vs Unchecked exceptions.',
        'Why does Java require you to handle Checked Exceptions (like IOException) but doesn\'t force you to handle Unchecked ones (like NullPointerException)? Explain the design intent.',
        'Name the immediate parent class of both "Error" and "Exception".'
      ]
    },
    summary: [
      'In Java, exceptions are represented as standard, inspectable Objects.',
      'All anomalies originate from the Throwable class, which branches into fatal Errors and handleable Exceptions.',
      'Unchecked Exceptions inherit from RuntimeException, while Checked Exceptions require compile-time declarations.'
    ]
  },

  'common-java-exceptions': {
    slug: 'common-java-exceptions',
    title: 'Common Java Exceptions',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `As a beginner, you will encounter the same set of exceptions repeatedly. Rather than fearing them, you should view them as helpful diagnostic tools. 

In this lesson, we will look at four of the most common exceptions in Java, what causes them, and how to read their diagnostic signatures.`,
    whyThisTopicMatters: {
      whyItExists: `Every developer spends time fixing bugs. If you can read an exception name and instantly know what coding flaw triggered it, you can fix your software in seconds instead of guessing.`,
      problemSolved: `By understanding common conditions like ArrayIndexOutOfBoundsException or NumberFormatException, we can construct guard gates to validate our data before these issues trigger.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s break down the mechanics of the four most common runtime exceptions encountered during development:'
      },
      {
        type: 'bullet_list',
        title: 'The four common beginner exceptions',
        items: [
          'ArithmeticException: Thrown when an illegal mathematical operation occurs, such as dividing an integer by zero.',
          'NullPointerException (NPE): Thrown when you try to access fields, execute methods, or index an object reference that is currently null (empty).',
          'ArrayIndexOutOfBoundsException: Thrown when you request an array index that is negative, or greater than/equal to the array\'s length.',
          'NumberFormatException: Thrown when you try to convert a String with invalid characters (e.g., "apple") into a numeric data type.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'NullPointerException',
          definition: 'An exception triggered when attempting to manipulate an unallocated object reference.',
          explanation: 'If a variable points to null, invoking methods on it is impossible and crashes the active thread.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'NumberFormatException',
          definition: 'An exception that occurs when attempting to parse non-numeric strings into numeric wrappers.',
          explanation: 'Methods like Integer.parseInt("123") succeed, but Integer.parseInt("12a3") throws a NumberFormatException.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Curriculum Connection: Array exceptions happen when invalid indexes are used. String exception issues occur during conversion parsing.'
      }
    ],
    codeExamples: [
      {
        title: 'Triggers of Common Exceptions',
        language: 'java',
        code: `public class ExceptionTriggers {
    public static void main(String[] args) {
        // 1. ArithmeticException
        // int oops = 10 / 0; 
        
        // 2. ArrayIndexOutOfBoundsException
        int[] scores = { 90, 85, 95 };
        // int fail = scores[5]; // Array only has indexes 0, 1, and 2!
        
        // 3. NullPointerException
        String username = null;
        // String upper = username.toUpperCase(); 
        
        // 4. NumberFormatException
        String userInput = "twenty";
        int value = Integer.parseInt(userInput); // Cannot parse "twenty" as an int!
    }
}`,
        explanation: 'Each commented-out line represents a major, distinct runtime error. Uncommenting any single line will halt program execution with that exact exception.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Identifying Common Exceptions',
        description: 'A quick-lookup guide for what causes common beginner exceptions.',
        elements: {
          headers: ['Exception', 'Category', 'Typical Cause', 'Prevention Code'],
          rows: [
            ['ArithmeticException', 'Unchecked', 'Integer division by zero.', 'Check if divisor is != 0 before dividing.'],
            ['NullPointerException', 'Unchecked', 'Using method on null object reference.', 'Check if object != null first.'],
            ['ArrayIndexOutOfBoundsException', 'Unchecked', 'Using an index >= length or negative.', 'Verify index is >= 0 and < array.length.'],
            ['NumberFormatException', 'Unchecked', 'Parsing characters as raw integers.', 'Use regular expressions or check character values first.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using hardcoded numbers for array iterations, which causes index errors.',
        whyItHappens: 'Writing a loop with "<= 5" when the array only has 5 elements (indexes 0 to 4).',
        howToAvoid: 'Always use the array\'s dynamic ".length" property in loops and check boundary values.',
        codeSnippet: {
          bad: `int[] arr = { 1, 2, 3 };
// ❌ WRONG: Index 3 does not exist! Throws ArrayIndexOutOfBoundsException
for (int i = 0; i <= arr.length; i++) {
    System.out.println(arr[i]);
}`,
          good: `int[] arr = { 1, 2, 3 };
// ✓ CORRECT: Always use strict less-than (<) with array lengths
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exception Spotting Lab',
      tasks: [
        'Look at this line: "String[] words = new String[2]; System.out.println(words[0].toLowerCase());". What exception occurs and why?',
        'Write code that accepts a String "input", checks if it can be safely converted to an integer, and returns -1 if it is invalid.',
        'Explain what happens to variables declared after a crash line if the exception is not handled.'
      ]
    },
    summary: [
      'ArithmeticException occurs when dividing integer values by zero.',
      'NullPointerException is caused by executing operations on references pointing to empty memory.',
      'ArrayIndexOutOfBoundsException and NumberFormatException are triggered by index defects and parsing non-numerical strings.'
    ]
  },

  'try-catch-block': {
    slug: 'try-catch-block',
    title: 'The try-catch Block',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `When a runtime anomaly occurs, we do not want our application to crash. We want to catch the error, handle it gracefully, and keep the application running.

This is where the **try-catch** block comes in. In this lesson, we will learn how to create a "safety zone" around risky lines of code to handle exceptions programmatically.`,
    whyThisTopicMatters: {
      whyItExists: `Think of a web browser. If you try to open a website that does not exist, the browser doesn't crash and disappear from your desktop. It catches the network exception and displays a friendly offline page.`,
      problemSolved: `The try-catch block allows programmers to intercept exception objects. Instead of shutting down, the program diverts execution into a fallback catch block, maintaining full program stability.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The **try-catch** block is the primary syntax for capturing runtime exceptions. It divides code into a monitored zone and a rescue zone:'
      },
      {
        type: 'bullet_list',
        title: 'Core components of try-catch',
        items: [
          'The try Block: Wraps the statements that might throw an exception. The JVM monitors these statements closely.',
          'The catch Block: Runs ONLY if an exception is thrown inside the try block. It captures the exception object, providing a variable (like "e") to inspect the error and execute recovery steps.'
        ]
      },
      {
        type: 'paragraph',
        text: 'If code inside the try block runs successfully without any exceptions, the catch block is completely skipped, and normal program execution continues.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'try block',
          definition: 'A code block containing statements that are monitored by the JVM for potential runtime exceptions.',
          explanation: 'It acts as an execution buffer. If any line inside fails, execution halts and jumps directly to the matching catch.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'catch block',
          definition: 'A block of code that handles a specific thrown exception, preventing thread termination.',
          explanation: 'The catch block header defines what exception class it is listening for (e.g., catch (ArithmeticException e)).'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Curriculum Connection: The try-catch block acts as a control flow mechanism, changing which lines of code run next when a failure is detected.'
      }
    ],
    codeExamples: [
      {
        title: 'Gracefully Intercepting Division by Zero',
        language: 'java',
        code: `public class TryCatchDemo {
    public static void main(String[] args) {
        int numerator = 10;
        int denominator = 0;
        
        System.out.println("Program starting...");
        
        try {
            // Risky operation! Throws ArithmeticException
            int result = numerator / denominator; 
            System.out.println("This line will never print!");
        } catch (ArithmeticException e) {
            // Recovery operation! Runs only if exception occurs
            System.out.println("Caught an error: Cannot divide by zero!");
            System.out.println("Diagnostic Message: " + e.getMessage());
        }
        
        System.out.println("Program finished successfully!");
    }
}`,
        explanation: 'When the division fails, the JVM halts the try block and instantly passes control to the catch block. After handling the issue, the program continues executing to print the final success line.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'try-catch Execution Path',
        description: 'How the JVM redirects control when an exception is thrown.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Try Block Starts', desc: 'Control enters the monitored try block.' },
            { id: '2', type: 'process', label: 'Failure Occurs!', desc: 'An exception object is instantiated on a line.' },
            { id: '3', type: 'process', label: 'Try Block Halts', desc: 'Subsequent lines in the try block are completely abandoned.' },
            { id: '4', type: 'process', label: 'Catch Block Executes', desc: 'Control jumps to the catch block to run recovery actions.' },
            { id: '5', type: 'end', label: 'Execution Continues', desc: 'Program resumes after the try-catch structure, skipping a crash.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Leaving the catch block completely empty (Swallowing Exceptions).',
        whyItHappens: 'To avoid seeing annoying red crash text, beginners write empty catch blocks like "catch (Exception e) {}".',
        howToAvoid: 'Never write empty catches! This hides bugs, making them impossible to find. Always print a log, show an error message, or output the stack trace.',
        codeSnippet: {
          bad: `try {
    int data = Integer.parseInt("invalid");
} catch (NumberFormatException e) {
    // ❌ WRONG: Silent failure. The developer will never know why this failed!
}`,
          good: `try {
    int data = Integer.parseInt("invalid");
} catch (NumberFormatException e) {
    // ✓ CORRECT: Print diagnostics or fall back safely
    System.out.println("Invalid numeric format: " + e.getMessage());
    e.printStackTrace(); 
}`
        }
      }
    ],
    practiceExercise: {
      title: 'try-catch Integration Lab',
      tasks: [
        'Write a program that declares a null String variable and calls its length inside a try block. Catch NullPointerException and print a friendly notice.',
        'Can you catch an ArithmeticException using a catch block looking for "NullPointerException"? Explain why or why not.',
        'Observe how the rest of the program remains running when a try-catch blocks a crash.'
      ]
    },
    summary: [
      'The try-catch block acts as an execution safety buffer to intercept runtime failures.',
      'The try block wraps monitored code, and the catch block acts as the handler for thrown exceptions.',
      'Swallowing exceptions with empty catch blocks is a dangerous anti-pattern that conceals bugs.'
    ]
  },

  'multiple-catch-blocks': {
    slug: 'multiple-catch-blocks',
    title: 'Multiple Catch Blocks',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A single block of code inside your try block can fail for multiple reasons. For instance, parsing user input might fail with a \`NumberFormatException\`, and using that parsed index might fail with an \`ArrayIndexOutOfBoundsException\`.

In this lesson, we will learn how to write multiple catch blocks to handle different exceptions differently, and explore the critical rules of catch ordering.`,
    whyThisTopicMatters: {
      whyItExists: `Different program failures require different remedies. If a user inputs bad data, we ask them to retype it. If a network call fails, we retry. If an internal index fails, we log a developer diagnostic report. Multi-catch lets us tailor our responses.`,
      problemSolved: `Writing multiple catch blocks allows a single try block to route different failures to specialized handlers, maintaining robust code architecture.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, a single `try` block can be followed by any number of `catch` blocks. The JVM will search through the catch blocks from **top to bottom** and execute the first catch block that matches the thrown exception type.'
      },
      {
        type: 'paragraph',
        text: 'This top-to-bottom search introduces a critical rule: **Specialized subclasses must be caught BEFORE generalized superclasses!**'
      },
      {
        type: 'bullet_list',
        title: 'Rules of Catch block ordering',
        items: [
          'Most Specific First: Catch narrow exception classes (like ArithmeticException) first.',
          'Most General Last: Catch broad exception classes (like Exception) last as a safety net.',
          'Unreachable Code Crash: If you place a parent exception (Exception) above a child exception (ArithmeticException), the child block can never be reached, triggering a compilation error.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Multi-catch ordering',
          definition: 'The requirement to order catch blocks from specific subclasses to general superclasses.',
          explanation: 'Because Exception is the parent of ArithmeticException, putting "catch (Exception e)" first blocks the subclass catch from compiling.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Exception Safety Net',
          definition: 'Using a general "catch (Exception e)" block at the very bottom of a multi-catch chain to catch unforeseen issues.',
          explanation: 'It guarantees that no matter what unexpected exception occurs, the program will not crash.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Only ONE catch block will execute per try block failure! Once a match is found and executed, the remaining catch blocks are skipped.'
      }
    ],
    codeExamples: [
      {
        title: 'Specialized Multi-Catch Implementation',
        language: 'java',
        code: `public class MultiCatchDemo {
    public static void main(String[] args) {
        int[] data = { 10, 20, 30 };
        String input = "abc"; // Will fail conversion!
        
        try {
            // Potential failure 1: NumberFormatException
            int index = Integer.parseInt(input); 
            
            // Potential failure 2: ArrayIndexOutOfBoundsException
            int value = data[index]; 
            
            System.out.println("Parsed Value: " + value);
        } 
        catch (NumberFormatException e) {
            System.out.println("Handling input error: Please type an integer!");
        } 
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Handling boundary error: Index is out of bounds!");
        } 
        catch (Exception e) {
            // Safety Net! Captures any other unexpected exceptions
            System.out.println("Unexpected failure occurred: " + e.getMessage());
        }
        
        System.out.println("Done processing.");
    }
}`,
        explanation: 'Because input is "abc", a NumberFormatException is thrown. The JVM checks catch blocks, matches the first block, executes it, and skips the rest.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Multi-Catch Search Sequence',
        description: 'How Java matches a thrown exception against a list of catch blocks.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'ArrayIndexOutOfBoundsException Thrown', desc: 'The try block halts due to an index violation.' },
            { id: '2', type: 'process', label: 'Check Catch #1: NumberFormatException', desc: 'No match. JVM skips this block.' },
            { id: '3', type: 'process', label: 'Check Catch #2: ArrayIndexOutOfBoundsException', desc: 'Match found! JVM halts search and executes this block.' },
            { id: '4', type: 'process', label: 'Check Catch #3: Exception (Safety Net)', desc: 'Skipped. Search is already complete.' },
            { id: '5', type: 'end', label: 'Resume Main Code', desc: 'Control continues past the entire try-catch structure.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Placing Exception or RuntimeException at the top of the catch list.',
        whyItHappens: 'Thinking it is easier to catch everything broad first before handling specific ones.',
        howToAvoid: 'Always position "catch (Exception e)" as the final block. Let the compiler verify your code hierarchy.',
        codeSnippet: {
          bad: `try {
    int num = Integer.parseInt("invalid");
} catch (Exception e) { // ❌ WRONG: Catches everything!
    System.out.println("General exception");
} catch (NumberFormatException e) { // ❌ Compile Error: Unreachable code!
    System.out.println("Number format error");
}`,
          good: `try {
    int num = Integer.parseInt("invalid");
} catch (NumberFormatException e) { // ✓ CORRECT: Specific exception caught first
    System.out.println("Number format error");
} catch (Exception e) { // ✓ CORRECT: Safety net at the bottom
    System.out.println("General exception");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Catch Ordering Challenge',
      tasks: [
        'Write a program with an integer array of size 3. Inside a try block, divide an element by 0 AND trigger an index out-of-bounds. Observe which catch block triggers.',
        'Explain why a child exception (like FileNotFoundException) cannot compile if placed after its parent exception (like IOException).',
        'Re-write a multi-catch statement using the modern Java pipe operator: "catch (NumberFormatException | NullPointerException e)".'
      ]
    },
    summary: [
      'A single try block can support multiple specialized catch blocks to handle different failures uniquely.',
      'Catch blocks must be arranged from specific subclass to general superclass to prevent compilation errors.',
      'An Exception block at the bottom acts as a safety net for any unanticipated runtime issues.'
    ]
  },

  'finally-block': {
    slug: 'finally-block',
    title: 'Finally Block',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `When programs open external resources (like files on a hard drive, database channels, or internet ports), these channels must be closed when finished. If a crash halts the program, files can remain open and locked in memory.

To prevent this resource leakage, Java provides the **finally** block. The \`finally\` block guarantees execution of cleanup actions, regardless of whether a crash occurred.`,
    whyThisTopicMatters: {
      whyItExists: `If you open 1,000 files in an application, and the program crashes on file 500 without closing them, your computer eventually runs out of file system handles. The OS will block the app from opening any more files.`,
      problemSolved: `The finally block is guaranteed to execute. No matter if the try block finishes perfectly or a catch block intercepts a critical error, the finally block runs to clean up resources.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The `finally` block is placed immediately after the catch blocks. It acts as a final cleanup gate:'
      },
      {
        type: 'bullet_list',
        title: 'Key rules of the finally block',
        items: [
          'Guaranteed Run: Executes under all conditions: when no exception is thrown, when an exception is caught, and even when an exception is NOT caught (before the app crashes!).',
          'Runs after try/catch: Control enters finally after leaving either the try or catch block.',
          'Bypasses Return: Even if your try or catch block contains a "return" statement, the finally block is executed BEFORE the method actually exits back to the caller!'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'finally block',
          definition: 'A code block appended to try-catch structures that is guaranteed to run, typically used for cleanup actions.',
          explanation: 'It guarantees that connection closes, file streams end, and memory locks are released.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Resource Leak',
          definition: 'An issue where a computer program fails to release system resources it has allocated, degrading system performance.',
          explanation: 'Resource leaks are prevented by placing close() statements in the finally block.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'The only situation where finally does not run is if you call System.exit(0) to shut down the JVM manually, or if the power is cut from the computer!'
      }
    ],
    codeExamples: [
      {
        title: 'Demonstrating Guaranteed Finally Execution',
        language: 'java',
        code: `public class FinallyDemo {
    public static void main(String[] args) {
        System.out.println("Initializing system resources...");
        
        try {
            System.out.println("Reading resource...");
            int error = 10 / 0; // Runtime crash!
            System.out.println("Finished reading!"); // Skipped!
        } catch (ArithmeticException e) {
            System.out.println("Error intercepted: " + e.getMessage());
        } finally {
            // Guaranteed to run, even though try block crashed!
            System.out.println("FINALLY BLOCK: Releasing system resources safely.");
        }
        
        System.out.println("System back online.");
    }
}`,
        explanation: 'Even though the try block crashes and routes to catch, the finally block is guaranteed to execute. This ensures resources are safely cleaned up.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'try vs catch vs finally Roles',
        description: 'Detailing the distinct purpose of each block in exception handling.',
        elements: {
          headers: ['Block', 'Optional?', 'Purpose', 'Execution Condition'],
          rows: [
            ['try', 'Mandatory', 'Monitors risky code for potential failures.', 'Always executes.'],
            ['catch', 'Optional (Needs either catch or finally)', 'Handles specific intercepted exception events.', 'Executes ONLY if a matching exception is thrown.'],
            ['finally', 'Optional (Needs either catch or finally)', 'Executes mandatory cleanup actions.', 'Always executes, regardless of errors or returns.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Placing critical cleanup code at the end of the try block instead of inside the finally block.',
        whyItHappens: 'Thinking that if there is no crash, code runs fine, and if there is, we can just close in catch.',
        howToAvoid: 'Never place cleanup statements inside try. If a crash occurs on line 1 of try, the cleanup on line 10 of try is completely skipped, causing resource leaks. Place them in finally.',
        codeSnippet: {
          bad: `try {
    openDatabase();
    performQuery(); // If this crashes, closeDatabase is never called!
    closeDatabase(); 
} catch (Exception e) {
    System.out.println("Query failed!");
}`,
          good: `try {
    openDatabase();
    performQuery();
} catch (Exception e) {
    System.out.println("Query failed!");
} finally {
    // ✓ CORRECT: Database is guaranteed to close under all circumstances!
    closeDatabase(); 
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Finally Block Lab',
      tasks: [
        'Write a method that returns an integer. Inside, open a try block, return 100, and add a finally block that prints "Finally!". Confirm that the print runs before the return completes.',
        'Explain what happens to an open database socket if your program crashes and there is no finally block to close it.',
        'Is "try {} finally {}" a valid structure in Java? Try compiling it and note what it accomplishes.'
      ]
    },
    summary: [
      'The finally block is guaranteed to execute under all possible scenarios (with or without exceptions, and before return calls).',
      'It is the standard architecture for releasing external memory pointers, closing files, and database connections.',
      'Placing cleanup inside the try block leads to resource leaks when intermediate lines throw exceptions.'
    ]
  },

  'throwing-exceptions': {
    slug: 'throwing-exceptions',
    title: 'Throwing Exceptions',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `So far, we have only caught exceptions generated by Java or the JVM. However, as an application developer, you will often need to intentionally create and launch exception events yourself.

We do this using the **throw** keyword. In this lesson, we will learn how to throw exception objects to enforce business rules and safeguard our program state.`,
    whyThisTopicMatters: {
      whyItExists: `Java does not know the business rules of your banking software. Java has no problem with a customer withdrawing -$500 or transferring money to a blank name. These are logical boundary violations that YOU must enforce.`,
      problemSolved: `By using the "throw" keyword, you can instantly halt a method if a business constraint is violated, returning an explicit, clear error object to the caller.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'We throw exceptions using the `throw` keyword followed by an **instance** of a Throwable class. The process works as follows:'
      },
      {
        type: 'bullet_list',
        title: 'Steps for throwing exceptions',
        items: [
          'Detect Constraint Violation: Use an if statement to check if an input is invalid (e.g., negative amount).',
          'Instantiate Exception: Create a new exception object on the Heap, passing a descriptive message: "new IllegalArgumentException(\"Message\")".',
          'Launch the Event: Use the "throw" keyword to actively throw it, halting current method execution immediately.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'throw keyword',
          definition: 'A Java keyword used to explicitly throw an exception object, halting current method execution.',
          explanation: 'Syntax: "throw new ExceptionObject();". It instantly transfers execution control to the nearest matching catch block.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'IllegalArgumentException',
          definition: 'A standard Java exception thrown to indicate that a method has been passed an illegal or inappropriate argument.',
          explanation: 'It is the most common unchecked exception used to reject invalid parameter values.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Curriculum Connection: Exceptions allow methods to communicate problems. Instead of returning bad values like -1, we throw exceptions to indicate failures.'
      }
    ],
    codeExamples: [
      {
        title: 'Enforcing Bank Account Constraints with throw',
        language: 'java',
        code: `class BankAccount {
    private double balance = 100.0;
    
    public void withdraw(double amount) {
        if (amount <= 0) {
            // Intentionally throw an exception for invalid inputs!
            throw new IllegalArgumentException("Withdrawal amount must be greater than zero!");
        }
        if (amount > balance) {
            // Throw an exception for balance violations!
            throw new IllegalArgumentException("Insufficient funds! Balance: " + balance);
        }
        
        balance -= amount;
        System.out.println("Successfully withdrew $" + amount);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        
        try {
            account.withdraw(-50); // Risky action!
        } catch (IllegalArgumentException e) {
            System.out.println("Transaction Failed: " + e.getMessage());
        }
    }
}`,
        explanation: 'Inside withdraw(), checking "amount <= 0" fails. The method immediately creates and throws a new IllegalArgumentException, preventing the balance from being modified.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Throwing Exception Flow',
        description: 'Tracking how an exception flows from detection to handler.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Call withdraw(-50)', desc: 'Main method invokes the withdraw method.' },
            { id: '2', type: 'process', label: 'Constraint Check Fails', desc: 'if (amount <= 0) evaluates to true.' },
            { id: '3', type: 'process', label: 'throw new IllegalArgumentException()', desc: 'The exception object is created and actively thrown.' },
            { id: '4', type: 'process', label: 'Method Halts', desc: 'Withdraw balances subtraction is completely skipped.' },
            { id: '5', type: 'end', label: 'Catch in Main Handles It', desc: 'The exception bubbles back to main\'s catch block safely.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using generic Exceptions for business logic instead of specific exception types.',
        whyItHappens: 'Writing "throw new Exception()" for everything, making it impossible for callers to identify what went wrong.',
        howToAvoid: 'Use specific descriptive standard exception classes (like IllegalArgumentException, IllegalStateException) or create your own custom exceptions.',
        codeSnippet: {
          bad: `public void setAge(int age) {
    if (age < 0) {
        // ❌ Too generic! Callers cannot easily handle this specifically.
        throw new Exception("Age cannot be negative!"); 
    }
}`,
          good: `public void setAge(int age) {
    if (age < 0) {
        // ✓ CORRECT: Highly specific standard exception type!
        throw new IllegalArgumentException("Age cannot be negative: " + age); 
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Custom Logic Throwing Lab',
      tasks: [
        'Create a class "User" with a method "setUsername(String name)". Throw an "IllegalArgumentException" if the name length is less than 3 characters.',
        'Write a main method that instantiates "User" and tests both valid and invalid username inputs inside a try-catch block.',
        'Contrast the role of "throw" (instigating a crash event) with "catch" (intercepting a crash event).'
      ]
    },
    summary: [
      'The throw keyword is used to actively launch an exception object on demand.',
      'Throwing exceptions is the industry-standard technique for enforcing object constraints and method preconditions.',
      'Always prefer throwing specialized exception objects over returning arbitrary error code placeholders (like -1).'
    ]
  },

  'the-throws-keyword': {
    slug: 'the-throws-keyword',
    title: 'The Throws Keyword',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `If a method contains code that can cause a Checked Exception, Java forces you to deal with it. However, a helper method might not know how to handle the error. For example, a method loading database profiles shouldn't display an error pop-up on screen—that is the UI's job.

To resolve this, Java allows methods to delegate responsibility upward to their callers using the **throws** clause.`,
    whyThisTopicMatters: {
      whyItExists: `A clean software architecture splits responsibilities. Database loaders shouldn't print things to screens. By declaring "throws", we allow low-level methods to report problems back to high-level controllers, which decide how to present the error.`,
      problemSolved: `The "throws" keyword declares potential checked exceptions in a method's signature. This warns any developer calling the method that they must write a try-catch block to handle those potential issues.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The **throws** keyword is placed in the method signature, following the parentheses and preceding the curly braces. It acts as a formal warning:'
      },
      {
        type: 'bullet_list',
        title: 'Core concepts of throws',
        items: [
          'Warning Sign: It declares a list of checked exceptions that a method might throw but does not handle internally.',
          'Responsibility Shift: Any other method that calls this method is now forced to either handle the exception with try-catch, or declare throws in its own signature too!',
          'Checked Exceptions Only: It is primarily used for checked exceptions (like IOException). Unchecked exceptions do not need to be declared in throws clauses.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'throws clause',
          definition: 'A declaration in a method signature indicating that the method might propagate specified checked exceptions.',
          explanation: 'Syntax: "public void readFile() throws IOException { ... }". It acts as a compiler contract.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Exception Propagation',
          definition: 'The process where a thrown exception bubbles backward through the active method call stack until a catch is found.',
          explanation: 'If main() calls check(), and check() throws an exception, it travels from check() to main() to be handled.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Difference: "throw" is an ACTION keyword used to actively launch an exception. "throws" is a DECLARATION keyword used in method headers to declare propagation.'
      }
    ],
    codeExamples: [
      {
        title: 'Checked Exception Delegation using throws',
        language: 'java',
        code: `import java.io.IOException;

public class ThrowsDemo {
    // low-level method: does NOT catch IOException. It delegates it!
    public static void loadFile(String filename) throws IOException {
        if (filename.equals("missing.txt")) {
            // IOException is a checked exception
            throw new IOException("File not found on system drive: " + filename);
        }
        System.out.println("File loaded successfully!");
    }

    public static void main(String[] args) {
        // High-level controller method: handles the delegated error!
        try {
            loadFile("missing.txt");
        } catch (IOException e) {
            System.out.println("UI Notice: Could not open file. " + e.getMessage());
        }
    }
}`,
        explanation: 'Because loadFile() declares "throws IOException", the compiler allows it to compile without internal try-catch blocks, forcing main() to handle it instead.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Exception Propagation Stack',
        description: 'How a delegated exception travels back through the method layers.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Line Failure in loadFile()', desc: 'An IOException occurs deep inside the method.' },
            { id: '2', type: 'process', label: 'loadFile() has throws IOException', desc: 'Since it doesn\'t catch it, loadFile() instantly terminates.' },
            { id: '3', type: 'process', label: 'Bubble Up to Caller (main)', desc: 'The exception travels backward to main() which invoked loadFile().' },
            { id: '4', type: 'process', label: 'Main Try-Catch Intercepts', desc: 'The catch block in main() captures the propagated object.' },
            { id: '5', type: 'end', label: 'Crash Prevented', desc: 'Main handles the error gracefully and program terminates cleanly.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Adding throws to main() instead of actually handling exceptions.',
        whyItHappens: 'To satisfy the compiler quickly, beginners write "public static void main(String[] args) throws Exception", propagating exceptions to the JVM and crashing the program.',
        howToAvoid: 'Never declare throws on main() in real software. Main is the final line of defense; if exceptions propagate past main, the JVM crashes.',
        codeSnippet: {
          bad: `// ❌ WRONG: Passing the buck to the JVM! The program will still crash.
public static void main(String[] args) throws IOException {
    loadFile("missing.txt"); 
}`,
          good: `// ✓ CORRECT: Catch and handle the error at the entry point!
public static void main(String[] args) {
    try {
        loadFile("missing.txt");
    } catch (IOException e) {
        System.out.println("Graceful terminal shutdown: " + e.getMessage());
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Propagation Delegation Lab',
      tasks: [
        'Create a method "void checkBalance(double bal) throws Exception". Throw an Exception if the balance is below zero.',
        'Write a main method that calls "checkBalance(-10.0)". Try calling it without a try-catch block and observe the compile-time error.',
        'Then, wrap the call inside a try-catch block to fix the compilation error.'
      ]
    },
    summary: [
      'The throws keyword declares that a method propagates checked exceptions back to its callers.',
      'This delegates error-handling responsibility upward, enabling clear separation of logic and presentation.',
      'Propagating exceptions past the main() method results in immediate JVM application termination.'
    ]
  },

  'creating-custom-exceptions': {
    slug: 'creating-custom-exceptions',
    title: 'Creating Custom Exceptions',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `While Java has dozens of pre-built exception classes, complex software often needs specific error descriptions. For example, in a medical app, throwing an \`IllegalArgumentException\` is vague compared to throwing an \`InvalidHeartRateException\`.

In this lesson, we will learn how to build our own custom exception classes to model specific real-world domain requirements cleanly.`,
    whyThisTopicMatters: {
      whyItExists: `Enterprise code needs to be highly readable. If an ATM throws an \`InsufficientFundsException\`, developers reading the catch blocks can immediately understand the failure case, leading to cleaner codebases.`,
      problemSolved: `By creating custom exception classes, we can attach domain-specific variables (like saving a customer\'s id or card status inside the exception object) to assist with debugging.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Creating a custom exception is incredibly simple: you write a new Java class that inherits from an existing Exception class.'
      },
      {
        type: 'paragraph',
        text: 'Follow these rules to design professional exceptions:'
      },
      {
        type: 'bullet_list',
        title: 'Steps to build custom exceptions',
        items: [
          'Choose the parent: Inherit from "Exception" to make it a Checked exception, or inherit from "RuntimeException" to make it Unchecked. (Modern Java strongly prefers RuntimeException!).',
          'Add constructor with message: Create a constructor that accepts a String message and passes it to the parent constructor using "super(message)".',
          'Add custom properties: You can optionally add fields and methods specific to your business domain (e.g., storing the user\'s current balance).'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Custom Exception',
          definition: 'A user-defined exception class designed to model specific business rules or domain failures.',
          explanation: 'It extends RuntimeException or Exception and can house custom properties and debug data.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'super(message)',
          definition: 'A constructor call that passes the custom message string back up to Java\'s base Exception constructor.',
          explanation: 'This ensures methods like e.getMessage() can retrieve and print your message seamlessly.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Unchecked Exceptions (extending RuntimeException) are preferred in modern frameworks because they reduce boilerplate try-catch code and make codebases easier to maintain.'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing and Throwing a Custom Exception',
        language: 'java',
        code: `// 1. Define the custom Unchecked exception!
class InsufficientFundsException extends RuntimeException {
    private double currentBalance;
    private double attemptedWithdrawal;
    
    public InsufficientFundsException(double balance, double attempted) {
        // Pass a descriptive message to the parent class!
        super("Cannot withdraw $" + attempted + "! Current balance: $" + balance);
        this.currentBalance = balance;
        this.attemptedWithdrawal = attempted;
    }
    
    public double getCurrentBalance() {
        return currentBalance;
    }
}

// 2. Use it in business classes!
class ATM {
    private double balance = 50.0;
    
    public void withdraw(double amount) {
        if (amount > balance) {
            throw new InsufficientFundsException(balance, amount);
        }
        balance -= amount;
        System.out.println("Dispensed: $" + amount);
    }
}

public class CustomExceptionDemo {
    public static void main(String[] args) {
        ATM atm = new ATM();
        try {
            atm.withdraw(100.0);
        } catch (InsufficientFundsException e) {
            System.out.println("ATM ERROR: " + e.getMessage());
            System.out.println("Remaining cash in account: $" + e.getCurrentBalance());
        }
    }
}`,
        explanation: 'We create InsufficientFundsException by extending RuntimeException. It stores additional fields like currentBalance. ATM throws it, and main() catches it, logging specific details.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Custom Exception Hierarchy',
        description: 'How user-defined exception classes fit into Java\'s OOP architecture.',
        elements: {
          classes: [
            {
              name: 'RuntimeException (Java Built-In)',
              fields: ['[Inherited trace data]'],
              methods: ['String getMessage()']
            },
            {
              name: 'InsufficientFundsException [Custom Exception]',
              fields: ['double currentBalance', 'double attemptedWithdrawal'],
              methods: ['InsufficientFundsException(balance, attempted)', 'double getCurrentBalance()']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to call super(message) inside the custom constructor.',
        whyItHappens: 'If you do not call super(message), the base Exception class never receives the message, and calling "e.getMessage()" will return null.',
        howToAvoid: 'Always invoke "super(message)" on the very first line of your custom exception constructor.',
        codeSnippet: {
          bad: `class InvalidAgeException extends RuntimeException {
    public InvalidAgeException(String msg) {
        // ❌ WRONG: message is ignored. getMessage() will be blank!
    }
}`,
          good: `class InvalidAgeException extends RuntimeException {
    public InvalidAgeException(String msg) {
        // ✓ CORRECT: Passes message to parent Exception class
        super(msg); 
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Custom Exception Design Lab',
      tasks: [
        'Create an Unchecked custom exception named "InvalidPasswordException" that takes a String message.',
        'Write a method "void checkPassword(String pass)" that throws this exception if the password length is less than 8 characters.',
        'Write a main method that calls "checkPassword" with "123" and catches your custom exception.'
      ]
    },
    summary: [
      'Custom exceptions are created by extending Exception (checked) or RuntimeException (unchecked).',
      'They make code bases self-documenting and easier to debug by providing domain-specific error types.',
      'Always use "super(message)" inside custom constructors to ensure error logs are populated.'
    ]
  },

  'exception-handling-mini-project': {
    slug: 'exception-handling-mini-project',
    title: 'Exception Handling Mini Project',
    moduleSlug: 'exception-handling',
    moduleName: 'Exception Handling',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `In this module, we have learned that real-world programs must withstand unexpected errors. It is time to put our skills to the test!

You will build a fully functional, highly robust **Interactive ATM Console Application**. This project combines classes, methods, arrays, loops, and custom exceptions to construct a safe program that handles bad user inputs and boundary errors without crashing.`,
    whyThisTopicMatters: {
      whyItExists: `In real finance, software defects cost millions of dollars. ATMs must run 24/7. Even if a user enters characters where they should enter numbers, or requests more money than they have, the ATM must process the event safely and remain active.`,
      problemSolved: `This project teaches you how to construct defensive code around console scanning systems, intercept multiple error channels, and keep execution active using loops and try-catch structures.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The ATM application consists of three main parts, which are combined inside a single runnable file:'
      },
      {
        type: 'bullet_list',
        title: 'ATM System Architecture',
        items: [
          'Custom Exception Classes: "InvalidAmountException" (for negative inputs) and "InsufficientFundsException" (for balance breaches).',
          'The Account Object: Encapsulates balance data and implements "deposit" and "withdraw" methods that throw exceptions.',
          'The Controller Loop: An interactive console loop that reads user selections and wraps parsing and transaction triggers inside robust try-catch blocks.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Console Scanner Handling',
          definition: 'Wrapping Scanner.nextLine() and Integer.parseInt() inside try-catch to protect against input characters crashing numeric entries.',
          explanation: 'If a user types "exit" instead of a number, we catch the NumberFormatException, reset the scanner buffer, and let them retry.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Defensive Programming',
          definition: 'A design practice aimed at ensuring continuous program execution despite unexpected user interactions or inputs.',
          explanation: 'It focuses on safeguarding all entry points with validation checks and exception blocks.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Curriculum Connection: Notice how this project brings together Variables, Methods, Arrays, Loops, Classes, Objects, and Exception Handling into a unified, high-quality application.'
      }
    ],
    codeExamples: [
      {
        title: 'The Crash-Proof ATM Application',
        language: 'java',
        code: `import java.util.Scanner;

// 1. Custom Exceptions
class InvalidAmountException extends RuntimeException {
    public InvalidAmountException(String msg) { super(msg); }
}

class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String msg) { super(msg); }
}

// 2. Bank Account Class
class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public double getBalance() { return balance; }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new InvalidAmountException("Deposit amount must be positive! Received: $" + amount);
        }
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new InvalidAmountException("Withdrawal amount must be positive! Received: $" + amount);
        }
        if (amount > balance) {
            throw new InsufficientFundsException("Insufficient funds! Attempted withdrawal of $" + amount + " but balance is $" + balance);
        }
        balance -= amount;
    }
}

// 3. Interactive Main Program Loop
public class RobustATM {
    public static void main(String[] args) {
        BankAccount userAccount = new BankAccount("MW-8839", 500.0);
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        System.out.println("=== Welcome to ByteAcademy Robust ATM ===");

        while (running) {
            System.out.println("\\nChoose an option:");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Exit");
            System.out.print("Enter your choice (1-4): ");

            try {
                // Read selection and handle conversion failures!
                String input = scanner.nextLine();
                int choice = Integer.parseInt(input);

                switch (choice) {
                    case 1:
                        System.out.println("Current Balance: $" + userAccount.getBalance());
                        break;
                    case 2:
                        System.out.print("Enter deposit amount: $");
                        double depAmount = Double.parseDouble(scanner.nextLine());
                        userAccount.deposit(depAmount);
                        System.out.println("Deposit Successful! New Balance: $" + userAccount.getBalance());
                        break;
                    case 3:
                        System.out.print("Enter withdrawal amount: $");
                        double withdrawAmount = Double.parseDouble(scanner.nextLine());
                        userAccount.withdraw(withdrawAmount);
                        System.out.println("Withdrawal Successful! New Balance: $" + userAccount.getBalance());
                        break;
                    case 4:
                        System.out.println("Thank you for using ByteAcademy ATM. Goodbye!");
                        running = false;
                        break;
                    default:
                        System.out.println("Invalid option! Please enter a number between 1 and 4.");
                }
            } 
            catch (NumberFormatException e) {
                // Prevents alphabetic user input from crashing the console loop!
                System.out.println("Input Error: Please enter valid digits. Letters are not allowed!");
            } 
            catch (InvalidAmountException | InsufficientFundsException e) {
                // Intercepts custom business violations safely!
                System.out.println("Transaction Rejected: " + e.getMessage());
            }
            catch (Exception e) {
                // Safety net catch for any other unexpected failures!
                System.out.println("General Error: An unexpected failure occurred: " + e.getMessage());
            }
        }
        scanner.close();
    }
}`,
        explanation: 'The code implements Scanner reading inside a loop wrapped in a massive try-catch structure. Converting character errors like "ten" triggers NumberFormatException, custom failures trigger specific business warnings, and the ATM remains running.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Project Exception Flow Matrix',
        description: 'Analyzing how different user failures are processed dynamically.',
        elements: {
          headers: ['User Interaction Failure', 'Thrown Exception Type', 'Halt Action', 'System Recovery Step'],
          rows: [
            ['Typing letters in menus', 'NumberFormatException', 'Halts menu switch conversion', 'Catches error, prints warning, prompts loop re-entry.'],
            ['Typing negative cash value', 'InvalidAmountException', 'Halts deposit() or withdraw() execution', 'Intercepts error, alerts user of sign issue, skips arithmetic.'],
            ['Withdrawing more than balance', 'InsufficientFundsException', 'Halts withdraw() execution', 'Alerts user of insufficient funds, rolls back debit.'],
            ['System disconnected', 'Exception (generic)', 'Halts current transaction task', 'Logs generic trace, alerts of backend issue, rolls back state safely.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using Scanner.nextDouble() or Scanner.nextInt() directly inside loops without safety catch blocks.',
        whyItHappens: 'NextDouble() hangs and loops infinitely if the user enters letters, causing a console freeze.',
        howToAvoid: 'Always read user inputs as Strings using "scanner.nextLine()", and parse them manually with Double.parseDouble() inside a try-catch block.',
        codeSnippet: {
          bad: `// ❌ WRONG: Causes infinite loop freeze if user enters letters!
Scanner scanner = new Scanner(System.in);
System.out.print("Enter amount: ");
double amount = scanner.nextDouble(); `,
          good: `// ✓ CORRECT: Read string and parse inside try-catch securely
Scanner scanner = new Scanner(System.in);
System.out.print("Enter amount: ");
try {
    double amount = Double.parseDouble(scanner.nextLine());
} catch (NumberFormatException e) {
    System.out.println("Invalid number!");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'ATM Extension Challenge',
      tasks: [
        'Compile and run the ATM code locally or in your imagination. Detail what happens to the balance if a withdrawal triggers an InsufficientFundsException.',
        'Add a "transaction limit" property (e.g., $200) to the BankAccount class. Create a custom "OverLimitException" and throw it if a single withdrawal exceeds this limit.',
        'Explain how loops allow interactive software to keep prompting users for valid actions after a validation exception is caught.'
      ]
    },
    summary: [
      'Interactive console applications are highly vulnerable to user input crashes.',
      'Defensive programming handles scanner inputs safely by reading Strings and parsing manually in try-catch blocks.',
      'Integrating custom exception types inside business classes prevents state corruption and keeps services online.'
    ]
  }
};
