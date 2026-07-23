import { DetailedLessonContent } from '../../types';

export const FUNDAMENTALS_LESSONS: Record<string, DetailedLessonContent> = {
  'variables': {
    slug: 'variables',
    title: 'Variables',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `A variable is the absolute starting point of storing information in any software application. In simple terms, a variable is a named storage container in your computer's memory (RAM) that holds a value.

Whenever you create a social media profile, type a search query, or save a high score in a game, the computer is using variables to hold that data while the program is running. Since Java is a **strongly-typed** language, every single variable must be labeled with a specific data type from the moment it is declared.`,
    whyThisTopicMatters: {
      whyItExists: 'Computers store all information in temporary random-access memory (RAM). Without variables, developers would have to manually keep track of hexadecimal memory addresses (like 0x00F4) to retrieve data, which is virtually impossible and highly error-prone.',
      problemSolved: 'Variables solve this by acting as human-readable labels for memory locations. Instead of accessing an address, we simply use a friendly name like "studentAge" or "accountBalance". This allows code to be clean, readable, and highly dynamic.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand variables, imagine a physical mailroom with thousands of identical storage boxes. If you put a document inside one of the boxes, you need a way to find it later. You do this by pasting a label on the box. In Java, writing `int age = 21;` is like selecting a box, labeling it **age**, restricting it to only hold integers (`int`), and placing the number **21** inside it.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Declaration',
          definition: 'The act of defining a variable\'s name and data type, which instructs the computer to allocate the appropriate memory space.',
          explanation: 'Declaring a variable does not necessarily give it a value yet. It simply tells the compiler: "Hey, reserve space for a container of this type and name it this."'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Initialization',
          definition: 'The act of assigning an initial value to a declared variable for the first time.',
          explanation: 'In Java, local variables inside methods must be initialized before they are used, or else the compiler will refuse to compile the program.'
        }
      },
      {
        type: 'paragraph',
        text: 'You can declare and initialize a variable in separate steps, or combine them into a single, elegant line of code. Combining them is highly recommended because it keeps your code concise and prevents you from accidentally using uninitialized variables.'
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Think of the assignment operator (=) as an arrow pointing to the left. The value on the right-hand side is being poured or copied directly into the container on the left-hand side.'
      },
      {
        type: 'bullet_list',
        title: 'The Lifecycle of a Variable',
        items: [
          '**Declaration**: You state the type and name (e.g., `double balance;`). Memory is allocated.',
          '**Assignment**: You use the `=` operator to store a value (e.g., `balance = 1500.75;`).',
          '**Reassignment**: You change the value over time (e.g., `balance = balance - 200.00;`). The old value is discarded and replaced.',
          '**Read**: You access the stored value to perform operations or display it (e.g., `System.out.println(balance);`).'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Declaring, Initializing, and Changing Variables',
        language: 'java',
        code: `public class VariablesDemo {
    public static void main(String[] args) {
        // 1. Declaration and Initialization combined
        int speedLimit = 60;
        
        // 2. Declaration first, then Initialization later
        int currentSpeed; 
        currentSpeed = 45; // Initialized
        
        System.out.println("The limit is: " + speedLimit);
        System.out.println("Your speed is: " + currentSpeed);
        
        // 3. Changing variable values (Reassignment)
        currentSpeed = 75; // Old value (45) is overwritten
        
        System.out.println("New speed is: " + currentSpeed);
        
        // Using variables in calculations
        int overshoot = currentSpeed - speedLimit;
        System.out.println("You are over the limit by: " + overshoot + " mph");
    }
}`,
        explanation: 'We declare speedLimit and give it 60 immediately. We declare currentSpeed, then assign it 45 on a subsequent line. Later, we assign it 75, which safely overwrites the 45. Finally, we perform subtraction on the variables and store the result in a new variable called overshoot.'
      }
    ],
    visualLearning: [
      {
        type: 'memory',
        title: 'Memory Mapping (RAM Layout)',
        description: 'How Java translates your variable definitions into physical memory storage locations.',
        elements: {
          cells: [
            { address: '0x00F1', name: 'speedLimit', value: '60', type: 'int (4 bytes)' },
            { address: '0x00F5', name: 'currentSpeed', value: '75', type: 'int (4 bytes)' },
            { address: '0x00F9', name: 'overshoot', value: '15', type: 'int (4 bytes)' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using a local variable before initializing it.',
        whyItHappens: 'Java requires local variables to have an explicit starting value before they are read, as it cannot assume what default value you want.',
        howToAvoid: 'Always assign an initial value when you declare variables, or ensure you assign a value before any print or mathematical operation.',
        codeSnippet: {
          bad: `int score;
System.out.println(score); // ❌ Compile error! score is not initialized`,
          good: `int score = 0; // ✓ Initialized with a default
System.out.println(score); // Works perfectly!`
        }
      },
      {
        mistake: 'Re-declaring an existing variable in the same scope.',
        whyItHappens: 'You cannot declare two variables with the exact same name within the same block, as the computer won\'t know which one you are referencing.',
        howToAvoid: 'Omit the data type keyword when you want to change an existing variable\'s value.',
        codeSnippet: {
          bad: `int temperature = 25;
int temperature = 30; // ❌ Compile error! Duplicate variable declaration`,
          good: `int temperature = 25;
temperature = 30; // ✓ Correct reassignment (no "int" keyword)`
        }
      }
    ],
    practiceExercise: {
      title: 'Variable Declarations and Updates',
      tasks: [
        'Write a complete Java class named "Wallet" containing a main method.',
        'Declare an integer variable named "bankBalance" and initialize it with 500.',
        'Simulate spending 120 dollars by subtracting 120 from "bankBalance" and reassigning the result to itself.',
        'Simulate receiving a birthday gift of 50 dollars by adding 50 to "bankBalance".',
        'Print the final "bankBalance" value and predict what value will display.'
      ]
    },
    summary: [
      'A variable is a named storage container in memory restricted to a specific data type.',
      'To declare a variable, you specify its data type and name.',
      'To initialize a variable, you assign it an initial value using the "=" operator.',
      'Local variables must be initialized before they are read by any calculation or print statement.'
    ]
  },

  'data-types': {
    slug: 'data-types',
    title: 'Data Types',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `Because Java is a strongly-typed language, you must tell the compiler exactly what kind of data you plan to store in each variable. This is where data types come into play.

In computer systems, all data is ultimately stored as binary zeroes and ones (bits). Data types act as blueprints that tell the processor how to interpret those binary bits. Java separates its data types into two primary categories: **Primitive Types** (which store raw data directly) and **Reference Types** (which refer to complex objects in memory).`,
    whyThisTopicMatters: {
      whyItExists: 'Different categories of data require different amounts of electrical memory space. For example, a single yes/no flag needs only 1 bit of memory, while a high-precision scientific decimal needs 64 bits. Data types enable optimal RAM conservation and speed.',
      problemSolved: 'By enforcing strict data types, the Java compiler prevents illogical operations (like trying to multiply a character by a true/false value) before the program even runs, eliminating a massive source of runtime bugs.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Java contains eight built-in primitive data types. These primitives are highly optimized and are not objects. They form the core building blocks for arithmetic, logical evaluations, and characters.'
      },
      {
        type: 'bullet_list',
        title: 'The 8 Primitive Data Types',
        items: [
          '**byte**: Stores integers from -128 to 127 (1 byte). Great for saving memory in large arrays.',
          '**short**: Stores integers from -32,768 to 32,767 (2 bytes). Rarely used.',
          '**int**: Stores integers from -2 billion to +2 billion (4 bytes). This is the default choice for whole numbers.',
          '**long**: Stores huge integers from -9 quintillion to +9 quintillion (8 bytes). Append an "L" or "l" suffix (e.g., `7000000000L`).',
          '**float**: Stores fractional decimal numbers (4 bytes). Append an "f" suffix (e.g., `3.14f`).',
          '**double**: Stores high-precision decimals (8 bytes). Default choice for decimals.',
          '**char**: Stores a single character or ASCII/Unicode symbol (2 bytes). Enclosed in single quotes (e.g., `\'A\'`).',
          '**boolean**: Stores a logical state (either `true` or `false`) (1 bit).'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Reference Types',
          definition: 'Data types that do not store the actual value inside the variable, but instead store a memory address pointing to where an object resides in heap memory.',
          explanation: 'All non-primitive types are reference types. A classic example is the String class, used to store textual sentences. They are initialized using class constructs.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Always use single quotes (\'A\') for char variables, and double quotes ("A") for String variables. Swapping them will cause immediate compilation syntax failures.'
      }
    ],
    codeExamples: [
      {
        title: 'Using Primitives and References',
        language: 'java',
        code: `public class DataTypesDemo {
    public static void main(String[] args) {
        // Integers
        byte age = 19;
        int population = 1500000;
        long galaxyStars = 400000000000L; // Suffix 'L' required for long literals
        
        // Decimals
        float gasPrice = 3.59f; // Suffix 'f' required for float literals
        double piVal = 3.1415926535;
        
        // Characters & Booleans
        char gradeLetter = 'A'; // Single quotes only
        boolean isCoursePassed = true;
        
        // Reference Type (Object reference)
        String welcomeMsg = "Welcome to ByteAcademy!"; // Double quotes only
        
        System.out.println("Long Integer: " + galaxyStars);
        System.out.println("Float Decimal: $" + gasPrice);
        System.out.println("Grade: " + gradeLetter);
        System.out.println("Passed? " + isCoursePassed);
        System.out.println("Message: " + welcomeMsg);
    }
}`,
        explanation: 'We declare variables across various types. Notice that galaxyStars requires a trailing L, and gasPrice requires a trailing f. String is capitalized because it is a reference class, not a primitive keyword.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Primitive Types Comparison Chart',
        description: 'A detailed overview of byte size boundaries and typical use-cases in software engineering.',
        elements: {
          headers: ['Data Type', 'Memory Footprint', 'Typical Value Range', 'Ideal Use Case'],
          rows: [
            ['boolean', '1 bit', 'true or false', 'Toggle flags, status checks'],
            ['byte', '1 byte', '-128 to 127', 'Raw file streams, low memory buffers'],
            ['char', '2 bytes', 'Single Unicode symbol', 'Single letters, keyboard inputs'],
            ['int', '4 bytes', '-2.1B to +2.1B', 'Default counting, index loops'],
            ['long', '8 bytes', '-9Q to +9Q', 'Database IDs, high timestamps, astronomy'],
            ['double', '8 bytes', '15 decimal digits', 'Financial calculations, geometry calculations'],
            ['String (Reference)', '8 bytes (ref)', 'Dynamic sequence of chars', 'Names, descriptions, database text fields']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the suffix letters on long and float literals.',
        whyItHappens: 'By default, Java treats all whole numbers as int, and all decimal numbers as double. If you assign a larger number or float without a suffix, the compiler flags a type mismatch.',
        howToAvoid: 'Always append "L" to long variables and "f" to float variables.',
        codeSnippet: {
          bad: `long worldPopulation = 8000000000; // ❌ Compile error: integer number too large
float discountRate = 0.15; // ❌ Compile error: incompatible types: possible lossy conversion from double to float`,
          good: `long worldPopulation = 8000000000L; // ✓ Correct long literal
float discountRate = 0.15f; // ✓ Correct float literal`
        }
      },
      {
        mistake: 'Declaring a char with double quotes or multiple characters.',
        whyItHappens: 'Double quotes are reserved for String objects, while single quotes are for single character structures.',
        howToAvoid: 'Use single quotes and store exactly one character inside.',
        codeSnippet: {
          bad: `char grade = "A"; // ❌ Compile error: incompatible types: String cannot be converted to char
char initial = 'AB'; // ❌ Compile error: unclosed character literal`,
          good: `char grade = 'A'; // ✓ Correct single quotes and char length
String letter = "A"; // ✓ Correct String formatting`
        }
      }
    ],
    practiceExercise: {
      title: 'Determine the Best Data Type',
      tasks: [
        'Identify which of the 8 primitives is best suited to store: Whether a user is logged in.',
        'Identify which primitive is best suited to store: The exact number of milliseconds in 100 years.',
        'Identify which primitive is best suited to store: The price of a cup of coffee (e.g. 2.99).',
        'Identify which primitive is best suited to store: The first initial of a customer\'s name.',
        'Write a tiny Java file declaring these variables with your chosen types, compiling it with no errors.'
      ]
    },
    summary: [
      'Java separates data types into Primitives (raw value storage) and Reference Types (heap object references).',
      'There are exactly eight primitive data types in Java.',
      'The "int" type is the standard choice for whole numbers, and "double" is the standard choice for decimals.',
      'Floating-point decimals require a trailing "f" suffix, and long integer literals require a trailing "L" suffix.'
    ]
  },

  'operators': {
    slug: 'operators',
    title: 'Operators',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `An operator is a special symbol that instructs the compiler to perform specific mathematical, comparison, or logical operations.

Variables alone are just static containers. Operators are what bring your application to life—allowing you to add values, compare quantities, and evaluate logical conditions. We use them to build equations, increment loop indices, and construct advanced decision branches.`,
    whyThisTopicMatters: {
      whyItExists: 'In order for a computer processor to perform calculations and make logical decisions, it needs clear mathematical and logical instructions. Operators translate high-level formulas directly into CPU mathematical registers.',
      problemSolved: 'Operators allow programs to be computational. Rather than hardcoding static numbers, programs can calculate totals dynamically, evaluate user inputs, and check complex conditions like (age >= 18 && isRegistered).'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, operators are categorized based on their functional behavior. Understanding operator precedence (the order in which equations are resolved) is crucial to avoid mathematical bugs.'
      },
      {
        type: 'bullet_list',
        title: 'Core Operator Categories',
        items: [
          '**Arithmetic Operators**: Used for standard math calculations: `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division), and `%` (Modulo - calculates the remainder of a division).',
          '**Assignment Operators**: Used to assign values to variables: `=` (Simple assignment), `+=` (Add and assign), `-=` (Subtract and assign), and `*=` (Multiply and assign).',
          '**Comparison (Relational) Operators**: Used to compare two values, returning a boolean `true` or `false`: `==` (Equal to), `!=` (Not equal to), `>` (Greater than), `<` (Less than), `>=` (Greater or equal), and `<=` (Less or equal).',
          '**Logical Operators**: Used to chain multiple boolean comparisons together: `&&` (Logical AND - returns true if both sides are true), `||` (Logical OR - returns true if at least one side is true), and `!` (Logical NOT - inverts a boolean value).',
          '**Increment & Decrement**: Shorthand syntax to increase or decrease a value by 1: `++` (Increment) and `--` (Decrement).'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Modulo (%)',
          definition: 'An arithmetic operator that returns the remainder of a division operation.',
          explanation: 'For example, 10 % 3 equals 1. Because 10 divided by 3 is 3, with a remainder of 1. Modulo is extremely useful for checking if a number is even or odd (num % 2 == 0).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Operator Precedence',
          definition: 'The rules governing which operators are evaluated first in expressions containing multiple operations.',
          explanation: 'Just like in standard algebra, multiplication and division are performed before addition and subtraction. Parentheses can be used to override precedence.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Integer division in Java discards any remainder. For example, 5 / 2 will equal 2, not 2.5! To get a decimal, at least one of the numbers must be a double (e.g., 5.0 / 2).'
      }
    ],
    codeExamples: [
      {
        title: 'Demonstrating Diverse Java Operators',
        language: 'java',
        code: `public class OperatorsDemo {
    public static void main(String[] args) {
        // 1. Arithmetic Operators
        int items = 17;
        int boxSize = 5;
        int fullBoxes = items / boxSize; // Division
        int leftOvers = items % boxSize; // Modulo (Remainder)
        
        System.out.println("Full boxes: " + fullBoxes); // 3
        System.out.println("Leftovers: " + leftOvers);   // 2
        
        // 2. Assignment and Increment
        int score = 10;
        score += 5; // Equivalent to: score = score + 5
        score++;    // Equivalent to: score = score + 1
        System.out.println("Score: " + score); // 16
        
        // 3. Comparison and Logical
        int age = 20;
        boolean hasID = true;
        
        // Evaluates if age is 18 or older AND user has an ID
        boolean canEnterClub = (age >= 18) && hasID;
        System.out.println("Can enter? " + canEnterClub); // true
        
        // 4. Operator Precedence demonstration
        int result = 5 + 3 * 2; // Multiplication happens first! Result: 11
        int groupedResult = (5 + 3) * 2; // Parentheses happen first! Result: 16
        
        System.out.println("Math result: " + result);
        System.out.println("Grouped result: " + groupedResult);
    }
}`,
        explanation: 'This script shows arithmetic (including division and remainder), assignment additions, shorthand increments, logical AND, and algebraic precedence groups.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Operator Precedence & Hierarchy',
        description: 'Shows the chronological order in which the compiler parses math and logical expressions.',
        elements: {
          headers: ['Precedence Level', 'Operator Symbol', 'Operation Description', 'Example Syntax'],
          rows: [
            ['1 (Highest)', '()', 'Parentheses grouping', '(5 + 3) * 2 -> 16'],
            ['2', '++, --', 'Post/Pre Increment & Decrement', 'count++'],
            ['3', '*, /, %', 'Multiplicative operators', '10 % 3 -> 1'],
            ['4', '+, -', 'Additive operators', '5 + 3 * 2 -> 11'],
            ['5', '<, >, <=, >=', 'Relational operators', 'age >= 18'],
            ['6', '==, !=', 'Equality comparison checks', 'score == 100'],
            ['7', '&&', 'Logical AND operation', 'isSunny && isWarm'],
            ['8 (Lowest)', '||', 'Logical OR operation', 'isRainy || isCold']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using a single equals (=) instead of double equals (==) to compare.',
        whyItHappens: 'A single equals symbol represents the assignment operator. Using it inside an if statement makes an assignment, which throws a compilation error for numeric comparisons.',
        howToAvoid: 'Remember: "=" is for storing values, "==" is for comparing values.',
        codeSnippet: {
          bad: `int score = 50;
if (score = 100) { // ❌ Compile error: incompatible types: int cannot be converted to boolean
    System.out.println("Perfect!");
}`,
          good: `int score = 50;
if (score == 100) { // ✓ Correct comparison check
    System.out.println("Perfect!");
}`
        }
      },
      {
        mistake: 'Dividing two integers and expecting a decimal result.',
        whyItHappens: 'When Java performs arithmetic on two integers, the output is guaranteed to be an integer (truncated, dropping everything after the decimal).',
        howToAvoid: 'Use double values or decimals in your calculation if you expect a decimal result.',
        codeSnippet: {
          bad: `double result = 5 / 2; // ❌ result will be 2.0, because 5/2 is calculated as 2
System.out.println(result);`,
          good: `double result = 5.0 / 2; // ✓ result is 2.5, since 5.0 is a double
System.out.println(result);`
        }
      }
    ],
    practiceExercise: {
      title: 'Predict Operator Outputs',
      tasks: [
        'Predict the output of: `15 % 4` and describe why.',
        'Predict the output of: `10 + 20 / 5` and describe why.',
        'Predict the result of: `(true || false) && !true` and explain step-by-step.',
        'If `int count = 5;`, what does `count += 3;` do to the variable?',
        'Write a tiny program that declares `int x = 10; int y = 3;`, prints the result of `x / (double)y` and see if it outputs a decimal.'
      ]
    },
    summary: [
      'Operators perform arithmetic, comparison checks, and logical evaluations.',
      'Modulo "%" returns the division remainder, and integer division "/" discards decimal values.',
      'Always use "==" to compare quantities for equality, reserving "=" strictly for assignments.',
      'Parentheses hold the highest level of precedence, and can override default algebraic evaluations.'
    ]
  },

  'input-and-output': {
    slug: 'input-and-output',
    title: 'Input and Output',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '14 mins',
    difficulty: 'Beginner',
    introduction: `A program needs a channel to communicate. It must be able to output information to the user and accept input back to remain interactive.

So far, we have only displayed hardcoded information using print statements. In this lesson, we will learn how to print styled outputs and introduce the **Scanner** class—the primary utility tool used in Java console programs to collect inputs typed directly by users on their keyboards.`,
    whyThisTopicMatters: {
      whyItExists: 'Static software applications are highly limited. For programs to feel interactive (like ATM terminal menus, simple console games, or calculators), they need a stream to read text inputs from the operating system.',
      problemSolved: 'Input/Output (I/O) structures bridge the gap between computer logic and human interaction. They allow software to read keyboard inputs and display computed responses in real-time.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Java uses streams for communication. `System.out` is an output stream connected to the terminal console, and `System.in` is an input stream connected to the computer keyboard.'
      },
      {
        type: 'bullet_list',
        title: 'Core Output Methods',
        items: [
          '**System.out.println()**: Prints a message to the console and automatically inserts a line break (carriage return) at the end, causing the next print statement to start on a new line.',
          '**System.out.print()**: Prints a message but does not insert a line break. The next print statement will append text directly next to the end of this statement.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Scanner Class',
          definition: 'A simple text scanner utility in Java used to parse primitive types and strings from standard input streams.',
          explanation: 'To use Scanner, you must import it at the very top of your file with: `import java.util.Scanner;`. You then create a Scanner instance tracking `System.in`.'
        }
      },
      {
        type: 'bullet_list',
        title: 'Core Scanner Methods',
        items: [
          '**next()**: Reads the next single word (stops scanning when it hits a blank space).',
          '**nextLine()**: Reads an entire line of text (stops scanning when it hits the Enter key).',
          '**nextInt()**: Scans and returns the next integer.',
          '**nextDouble()**: Scans and returns the next decimal double.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Whenever you initialize a Scanner tracking a resource, it is a professional best-practice to close it with `scanner.close();` when you are done to release underlying system memory channels.'
      }
    ],
    codeExamples: [
      {
        title: 'Interactive User Interface Code',
        language: 'java',
        code: `import java.util.Scanner; // Import statement must sit at top

public class TerminalIO {
    public static void main(String[] args) {
        // Create scanner object to monitor standard system input
        Scanner scanner = new Scanner(System.in);
        
        // Output prompt using print() so the user types next to it
        System.out.print("Enter your full name: ");
        String name = scanner.nextLine(); // Reads complete line
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt(); // Reads integer
        
        System.out.print("Enter your GPA: ");
        double gpa = scanner.nextDouble(); // Reads decimal
        
        // Output confirmation using println()
        System.out.println("\\n--- Profile Loaded ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age + " years old");
        System.out.println("GPA Score: " + gpa);
        
        // Close scanner
        scanner.close();
    }
}`,
        explanation: 'We import Scanner from java.util. We prompt the user with print(), which leaves the terminal cursor next to our text. We capture inputs using nextLine(), nextInt(), and nextDouble(), and then print the values formatted using string concatenation.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Input / Output Stream Routing',
        description: 'How data travels between the physical keyboard, the Scanner buffer, and the System display console.',
        elements: {
          steps: [
            { id: '1', label: 'Keyboard Input', desc: 'User types "Chikondi" and presses Enter key.', type: 'start' },
            { id: '2', label: 'System.in Buffer', desc: 'Operating system captures bytes and streams them to JVM.', type: 'action' },
            { id: '3', label: 'Scanner.nextLine()', desc: 'Scanner parses bytes, converts them into a String, and returns it.', type: 'decision' },
            { id: '4', label: 'System.out Stream', desc: 'Prints processed output strings back to the terminal screen.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to import the Scanner class.',
        whyItHappens: 'Java keeps its core utilities isolated in packages. Scanner is stored inside "java.util", and is not imported automatically.',
        howToAvoid: 'Ensure the top-line of your code contains "import java.util.Scanner;" before your class definition.',
        codeSnippet: {
          bad: `// ❌ Missing import statement
public class BadInput {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); // ❌ Compile error: cannot find symbol
    }
}`,
          good: `import java.util.Scanner; // ✓ Added import statement

public class GoodInput {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); // Perfect!
    }
}`
        }
      },
      {
        mistake: 'The "Scanner Skip" bug when mixing numeric and String scans.',
        whyItHappens: 'Reading methods like nextInt() read only the number and ignore the "Enter" key newline character (\\n). When you call nextLine() next, it immediately reads that leftovers \\n and skips the prompt.',
        howToAvoid: 'Insert an extra empty "scanner.nextLine();" right after a nextInt() or nextDouble() call to clear the buffer before reading a real string.',
        codeSnippet: {
          bad: `System.out.print("Enter age: ");
int age = scanner.nextInt(); // Reads age but leaves '\\n' in buffer
System.out.print("Enter city: ");
String city = scanner.nextLine(); // ❌ Skips input! Immediately reads leftovers '\\n'`,
          good: `System.out.print("Enter age: ");
int age = scanner.nextInt(); 
scanner.nextLine(); // ✓ Consumes and clears leftovers '\\n' from buffer
System.out.print("Enter city: ");
String city = scanner.nextLine(); // ✓ Safely prompts and reads correctly!`
        }
      }
    ],
    practiceExercise: {
      title: 'Console Temperature Converter',
      tasks: [
        'Write an interactive class named "TempConverter".',
        'Import java.util.Scanner and construct a Scanner instance inside main.',
        'Prompt the user with print() to: "Enter Temperature in Celsius: ".',
        'Read the input as a double value and save it.',
        'Calculate Fahrenheit using the formula: `(celsius * 9/5) + 32`.',
        'Print the output Fahrenheit value to the screen using println().'
      ]
    },
    summary: [
      'System.out.println() prints text with a newline, whereas System.out.print() appends text on the current line.',
      'To capture terminal keyboard inputs, you must import and construct the java.util.Scanner class.',
      'Scanner provides specific methods like nextInt(), nextDouble(), and nextLine() to retrieve structured variables.',
      'Clearing buffer newline codes is required when mixing numeric reads with line text grabs.'
    ]
  },

  'comments': {
    slug: 'comments',
    title: 'Comments',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `A comment is special documentation text written inside your source code that is completely ignored by the Java compiler.

Comments are meant exclusively for human eyes. As programs grow in size, they can become highly complex and difficult to understand. Comments allow you to write notes explaining the logic behind your code, make placeholders for future tasks, or document APIs for other team members.`,
    whyThisTopicMatters: {
      whyItExists: 'Compilers translate raw code into machine bytecode. Humans, however, need contextual text to understand complex logic. Comments enable developers to communicate ideas directly inside the source code files.',
      problemSolved: 'Comments solve the problem of cryptic code. When you revisit a program you wrote six months ago, or when a teammate opens your files, comments explain the "why" behind your code choices, saving massive debugging time.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Java supports three distinct formatting styles of comments. Each style serves a specific purpose, from quick inline notes to official documentation generation.'
      },
      {
        type: 'bullet_list',
        title: 'The 3 Comment Formatting Styles',
        items: [
          '**Single-line Comments**: Start with two forward slashes `//`. Everything from the slashes to the end of that specific line is treated as a comment.',
          '**Multi-line Comments**: Start with `/*` and end with `*/`. Everything sandwiched between these boundary symbols is ignored, allowing you to write long paragraphs across multiple lines.',
          '**Javadoc Comments**: Start with `/**` and end with `*/`. These are specialized comments used by Java utility tools to automatically generate professional HTML documentation pages for your classes and methods.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Self-Documenting Code',
          definition: 'Code that is written so clearly, using logical class names and descriptive variables, that comments are barely needed to understand what it does.',
          explanation: 'Professional developers write clean, self-documenting code first, using comments only to explain complex algorithms, business rules, or non-obvious engineering decisions.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Do not over-comment obvious commands! Writing `int count = 0; // sets count to zero` is considered bad practice because it clutters the code with zero new context.'
      }
    ],
    codeExamples: [
      {
        title: 'Applying Clean Comment Styles',
        language: 'java',
        code: `/**
 * Javadoc Comment: This class demonstrates clean comment structures.
 * @author ByteAcademy Student
 * @version 1.0
 */
public class DocumentationDemo {

    /*
     * Multi-line Comment:
     * This main method serves as the core entry point.
     * We will test both single-line and Javadoc blocks below.
     */
    public static void main(String[] args) {
        // Single-line Comment: Initialize standard score values
        int score = 85;
        
        System.out.println("Score set to: " + score);
        
        // TODO: Implement calculation algorithm once database is ready
        // Underneath, we print out developer status
        System.out.println("Completed Comment Demo.");
    }
}`,
        explanation: 'This script contains Javadoc tags at the class level, multi-line blocks before the main method, standard single-line notes, and a TODO tag indicating future work.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Comment Type Comparison Chart',
        description: 'Comparing syntax, length guidelines, and standard developer applications.',
        elements: {
          headers: ['Comment Style', 'Opening Syntax', 'Closing Syntax', 'Standard Professional Use Case'],
          rows: [
            ['Single-line', '//', 'None (End of line)', 'Brief logical notes, temporary line disabling, TODO reminders'],
            ['Multi-line', '/*', '*/', 'Complex algorithms documentation, multi-line paragraph notes'],
            ['Javadoc', '/**', '*/', 'Generating official API documentation, documenting classes, parameters, and returns']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to nest multi-line comments inside each other.',
        whyItHappens: 'Java looks for the very first "*/" sequence to close the comment block. If you nest comments, the first closing sequence closes everything prematurely, triggering compile errors on the remaining text.',
        howToAvoid: 'Never write a /* comment inside another /* comment. Use single-line comments for nested disabling instead.',
        codeSnippet: {
          bad: `/* Outer multi-line comment
    /* Inner nested comment */
    This text is now treated as code by the compiler and causes an error!
*/`,
          good: `// Outer single line comment
// Another single line comment
// This disables code safe without boundary conflicts`
        }
      }
    ],
    practiceExercise: {
      title: 'Analyze and Document Code',
      tasks: [
        'Write a class named "CalculatorCode" with comments.',
        'Add a class-level Javadoc block with author and version parameters.',
        'Add a multi-line comment explaining how standard arithmetic works in Java.',
        'Write a line of code declaring a variable and explain it using a single-line comment.',
        'Intentionally add an unclosed comment block (e.g. `/* unclosed`) and observe the compiler output.'
      ]
    },
    summary: [
      'Comments are completely ignored by the compiler and exist solely for human readability.',
      'Single-line comments are formatted using "//" and run until the end of the line.',
      'Multi-line comments start with "/*" and end with "*/", and cannot be nested.',
      'Javadoc comments start with "/**" and are parsed by JDK tools to compile official HTML documentation.'
    ]
  },

  'type-casting': {
    slug: 'type-casting',
    title: 'Type Casting',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Type casting is the process of converting a variable from one data type into another.

Since Java is strongly-typed, you cannot simply mix variables of different types without respecting memory bounds. For example, trying to fit a large 'double' decimal into a small 'int' integer is physically impossible without converting the format first. In this lesson, we will cover when conversions happen automatically and how to force conversions explicitly.`,
    whyThisTopicMatters: {
      whyItExists: 'In many situations, you need to combine variables of different types in calculations. For instance, calculating average scores requires dividing an integer sum by an integer count, but returning a precise decimal result.',
      problemSolved: 'Type casting prevents compatibility errors and allows data to transition smoothly between formats, while providing clear syntax warnings to prevent accidental data truncation.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, data conversion falls into two categories based on direction and safety: **Widening Casting** (automatic) and **Narrowing Casting** (explicit).'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Widening Casting (Implicit)',
          definition: 'Converting a smaller data type to a larger data type size automatically.',
          explanation: 'Because the destination type has a larger memory footprint than the source type, there is zero risk of data loss. Java performs this automatically (e.g., passing an int into a double variable).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Narrowing Casting (Explicit)',
          definition: 'Converting a larger data type to a smaller data type size manually.',
          explanation: 'Because you are shrinking the data footprint, there is a risk of losing information or precision. Java requires you to explicitly state the cast in parentheses (e.g., converting a double to an int).'
        }
      },
      {
        type: 'bullet_list',
        title: 'The Conversion Flow Chains',
        items: [
          '**Widening Chain (Automatic)**: `byte` ➔ `short` ➔ `char` ➔ `int` ➔ `long` ➔ `float` ➔ `double` (Moves from left to right smoothly).',
          '**Narrowing Chain (Requires Explicit Cast)**: `double` ➔ `float` ➔ `long` ➔ `int` ➔ `char` ➔ `short` ➔ `byte` (Requires writing `(destinationType)` before the value).'
        ]
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Explicitly casting a decimal (double/float) to an integer (int/long) does not round the number! It completely chops off (truncates) the decimal digits. For example, (int)9.99 evaluates to 9, not 10.'
      }
    ],
    codeExamples: [
      {
        title: 'Automatic Widening and Explicit Narrowing Code',
        language: 'java',
        code: `public class CastingDemo {
    public static void main(String[] args) {
        // 1. Widening Casting (Automatic)
        int myInt = 9;
        double myDouble = myInt; // Automatic conversion int -> double
        
        System.out.println("Integer value: " + myInt);       // 9
        System.out.println("Double value: " + myDouble);     // 9.0
        
        // 2. Narrowing Casting (Explicit)
        double examPercentage = 87.75;
        int integerScore = (int) examPercentage; // Explicit conversion double -> int
        
        System.out.println("Percentage: " + examPercentage); // 87.75
        System.out.println("Truncated: " + integerScore);   // 87 (decimal chopped off!)
        
        // 3. Casting in operations (resolving integer division)
        int sum = 15;
        int count = 2;
        double exactAverage = (double) sum / count; // Sum casted to double first
        
        System.out.println("Exact Average: " + exactAverage); // 7.5
    }
}`,
        explanation: 'We demonstrate widening casting by copying an int (9) into a double, which yields 9.0 automatically. We perform explicit narrowing casting using (int) to force 87.75 into 87. Finally, we resolve integer division by casting sum to double, which converts the division to 15.0 / 2, producing 7.5.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Widening vs. Narrowing Comparison',
        description: 'A structural comparison outlining compile mechanics, safety, and operational results.',
        elements: {
          headers: ['Aspect', 'Widening Casting (Implicit)', 'Narrowing Casting (Explicit)'],
          rows: [
            ['Direction', 'Small Type ➔ Large Type', 'Large Type ➔ Small Type'],
            ['Compiler Action', 'Performs automatically behind the scenes', 'Requires developer syntax to pass verification'],
            ['Safety & Data Loss', '100% Safe (no information is lost)', 'Risk-prone (decimals are chopped, numbers can overflow)'],
            ['Example Syntax', 'double x = 10; (int 10 converted to 10.0)', 'int y = (int) 5.75; (decimal truncated, y is 5)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Failing to cast when storing a large type in a small type.',
        whyItHappens: 'Java protects you from loss of precision. If you try to store a double in an int without an explicit cast, the compiler flags an error to prevent silent data corruption.',
        howToAvoid: 'Use parentheses to write the destination cast type explicitly before assigning.',
        codeSnippet: {
          bad: `double price = 19.99;
int wholePrice = price; // ❌ Compile error: incompatible types: possible lossy conversion from double to int`,
          good: `double price = 19.99;
int wholePrice = (int) price; // ✓ Explicitly cast. wholePrice becomes 19`
        }
      }
    ],
    practiceExercise: {
      title: 'Analyze Casting Operations',
      tasks: [
        'Predict the final value stored inside "number" for: `int number = (int) 4.95;`.',
        'Predict the output of: `double result = 10 / 4;` and explain why.',
        'Predict the output of: `double result = 10.0 / 4;` and explain why.',
        'Write a tiny class that casts a long variable containing 500 into an int, printing the result.',
        'Attempt to cast a boolean into an integer and note down the resulting compiler warning.'
      ]
    },
    summary: [
      'Type casting converts a variable value from one format size to another.',
      'Widening casting (small to large) happens automatically and is completely safe.',
      'Narrowing casting (large to small) requires explicit syntax using parentheses (e.g., "(int)").',
      'Explicit casting from double to int chops off the decimal values entirely rather than rounding.'
    ]
  },

  'keywords': {
    slug: 'keywords',
    title: 'Keywords',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A keyword is a word in Java that has been reserved by the language for a specific, built-in purpose.

Keywords act as the vocabulary of the compiler. Because these words serve as logical markers for classes, loops, and data declarations, you are strictly forbidden from using them as identifiers (like variable or class names). In this lesson, we will introduce common beginner keywords that you will encounter frequently.`,
    whyThisTopicMatters: {
      whyItExists: 'In order for a compiler to parse code text without parsing conflicts, it needs a set of strictly reserved vocabulary words that always have one fixed logical meaning.',
      problemSolved: 'Keywords define structural limits. By reserving words like class, static, or if, Java guarantees that the compiler can easily determine when a class starts, where a method begins, and when a conditional check is requested.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Java reserves around 50 words as keywords. All Java keywords are written strictly in **lowercase**. If you capitalize one (like writing `Class` instead of `class`), the compiler will no longer recognize it as a keyword.'
      },
      {
        type: 'bullet_list',
        title: 'Common Beginner Keywords by Category',
        items: [
          '**Access Modifiers**: `public` (accessible anywhere), `private` (accessible only within this class), `protected` (accessible within package/subclasses).',
          '**Class & Modifiers**: `class` (defines a class), `static` (marks static members), `final` (declares unmodifiable constants).',
          '**Object Operators**: `new` (creates an object in memory), `this` (references the current object instance).',
          '**Control Flow Logic**: `if` (conditional branch), `else` (alternative branch), `return` (exits a method and yields a value).',
          '**Primitive Data Types**: `int`, `double`, `boolean`, `char`, `byte`, `short`, `long`, `float`.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Identifier',
          definition: 'A user-defined name given to a class, variable, method, or interface.',
          explanation: 'While identifiers can contain letters, numbers, and underscores, they cannot start with a number, and they CANNOT be a Java reserved keyword.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Keep in mind: "String" and "System" are NOT keywords! They are standard Java classes, which is why they are capitalized and why you are technically allowed to use them as variable names (though you shouldn\'t because it is highly confusing).'
      }
    ],
    codeExamples: [
      {
        title: 'Highlighting Java Keywords in Action',
        language: 'java',
        code: `public class KeywordsDemo {
    public static void main(String[] args) {
        // 'int', 'double', 'boolean' are primitive data keywords
        int count = 5;
        double price = 12.99;
        boolean isActive = true;
        
        // 'if' and 'else' are programming control keywords
        if (isActive) {
            System.out.println("Active items count: " + count);
        } else {
            // 'return' exits the method block
            return;
        }
        
        System.out.println("Price of item: $" + price);
    }
}`,
        explanation: 'In this code, public, class, static, void, int, double, boolean, if, else, and return are all reserved keywords that govern the class definition, variable types, and decision branches.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Common Keywords Classification',
        description: 'Categorizing major keywords by their respective functional roles within Java syntax.',
        elements: {
          headers: ['Category', 'Reserved Keywords', 'Functional Purpose', 'Syntax Casing'],
          rows: [
            ['Access Modifiers', 'public, private, protected', 'Control visibility bounds of code', 'All lowercase'],
            ['Structural Types', 'class, interface, enum', 'Define code blueprints', 'All lowercase'],
            ['Control Flow', 'if, else, switch, for, while', 'Direct conditional or loop flow', 'All lowercase'],
            ['Method Outcomes', 'void, return', 'Handle method exit behaviors', 'All lowercase'],
            ['Identifiers (Forbidden)', 'All of the above', 'Cannot be used as variable/class names', 'Case-sensitive']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring a variable named after a reserved keyword.',
        whyItHappens: 'The compiler gets confused because it expects a variable identifier, but instead finds a keyword that has a completely different built-in structural meaning.',
        howToAvoid: 'Use descriptive, unique compound names like "studentClass" instead of "class".',
        codeSnippet: {
          bad: `int class = 101; // ❌ Compile error: not a statement, expected variable identifier
double public = 5.5; // ❌ Compile error: illegal start of expression`,
          good: `int classRoom = 101; // ✓ Correct unique identifier
double publicRate = 5.5; // ✓ Correct name`
        }
      },
      {
        mistake: 'Capitalizing a keyword.',
        whyItHappens: 'Java is case-sensitive. It treats "class" as a reserved keyword, but "Class" as a regular identifier or custom type name.',
        howToAvoid: 'Always keep your primitive names, control flow tags, and visibility tags completely in lowercase.',
        codeSnippet: {
          bad: `Public class Main { // ❌ Compile error: cannot find symbol Public
    Int age = 15; // ❌ Compile error: cannot find symbol Int
}`,
          good: `public class Main { // ✓ Correct lowercase public
    int age = 15; // ✓ Correct lowercase int
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Analyze Keywords',
      tasks: [
        'Determine whether "main" is a reserved Java keyword (Tip: test using it as a variable name).',
        'Determine whether "String" is a reserved keyword or a class.',
        'Identify what access modifier keyword keeps a variable hidden from external classes.',
        'List 5 primitive type keywords.',
        'Write a tiny class where you intentionally try to name a double variable as `double boolean = 4.5;` and describe the compiler output.'
      ]
    },
    summary: [
      'Keywords are reserved words inside Java that serve dedicated syntactic behaviors.',
      'You are strictly forbidden from using any reserved keywords as variable, method, or class names.',
      'All Java keywords must be written completely in lowercase (e.g., "public", "class", "int").',
      'Capitalized terms like "String" or "System" are core classes, not language keywords.'
    ]
  },

  'naming-conventions': {
    slug: 'naming-conventions',
    title: 'Naming Conventions',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `In computer programming, style and readability are almost as important as logical correctness. This is where naming conventions come into play.

Unlike syntax rules, which are strictly checked by the compiler, naming conventions are guidelines established by the global developer community to ensure code remains standard, consistent, and easy to maintain. In this lesson, we will cover the core conventions that professional Java developers use daily.`,
    whyThisTopicMatters: {
      whyItExists: 'In the professional world, code is read far more often than it is written. Software teams contain multiple engineers who must read each other\'s files. A standard styling convention prevents chaos and saves massive review time.',
      problemSolved: 'Conventions eliminate cryptic code. Rather than deciphering shorthand tags like `int d;` or `double val;`, consistent names like `int daysSinceLastOrder;` or `double itemPriceUSD;` make program actions clear at a glance.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, we utilize three primary naming structures based on the logical component being declared: **camelCase**, **PascalCase**, and **SCREAMING_SNAKE_CASE**.'
      },
      {
        type: 'bullet_list',
        title: 'Core Java Naming Guidelines',
        items: [
          '**Variables and Methods (camelCase)**: Start with a lowercase letter. If the name consists of multiple words, capitalize the first letter of each subsequent word (e.g., `studentAge`, `accountBalance`, `calculateTotal()`).',
          '**Classes (PascalCase)**: Start with an uppercase letter. Capitalize the first letter of every word (e.g., `HelloWorld`, `BankAccount`, `DocumentationDemo`). Class names should always be singular nouns.',
          '**Constants (SCREAMING_SNAKE_CASE)**: Constants are variables marked with `final` that never change. They should be written entirely in uppercase with words separated by underscores (e.g., `PI`, `MAX_SPEED_LIMIT`, `TAX_RATE`).',
          '**Meaningful Names**: Avoid single letters (like `x`, `y`, `temp`) unless they are used in mathematical iterations. Use highly descriptive nouns.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Identifier Guidelines',
          definition: 'Syntax rules for identifiers: must begin with a letter, underscore, or currency sign, and cannot contain spaces or reserved keywords.',
          explanation: 'While the compiler permits underscores or dollar signs, professional developers avoid dollar signs entirely and use underscores exclusively inside uppercase constants.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Make your variable names self-documenting! Instead of adding comments to explain cryptic names, rewrite the variable names to be expressive of what they actually hold.'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing Java Naming Style Guidelines',
        language: 'java',
        code: `// Class name uses PascalCase
public class BankAccount {
    
    // Constant uses SCREAMING_SNAKE_CASE
    public static final double MONTHLY_MAINTENANCE_FEE = 12.50;

    public static void main(String[] args) {
        // Variables use camelCase and descriptive nouns
        int activeUserAge = 24;
        double checkingAccountBalanceUSD = 1500.75;
        
        System.out.println("User Age: " + activeUserAge);
        System.out.println("Balance: $" + checkingAccountBalanceUSD);
        System.out.println("Fee: $" + MONTHLY_MAINTENANCE_FEE);
    }
}`,
        explanation: 'The class is BankAccount (PascalCase). The constant fee uses final and all-uppercase with underscores. The variables inside use descriptive, clear camelCase (activeUserAge, checkingAccountBalanceUSD).'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Naming Style Guide Reference',
        description: 'A scannable directory of Java styling patterns across different program components.',
        elements: {
          headers: ['Component Type', 'Style Convention', 'Typical Pattern', 'Good Example', 'Bad Example'],
          rows: [
            ['Class Template', 'PascalCase', 'CapitalizedFirstLetters', 'StudentProfile', 'studentprofile'],
            ['Variable Data', 'camelCase', 'lowercaseFirstCapitalizedRest', 'daysWorked', 'Days_Worked'],
            ['Method Action', 'camelCase', 'lowercaseFirstCapitalizedRest', 'computeScore()', 'ComputeScore()'],
            ['Final Constant', 'SCREAMING_SNAKE_CASE', 'ALL_UPPERCASE_WITH_UNDERSCORES', 'MAX_CREDIT_LIMIT', 'MaxCreditLimit'],
            ['Loop Index', 'Single Letters', 'Single letter variables', 'i, j, k', 'loopCounterVar']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using cryptic, unreadable shorthand names.',
        whyItHappens: 'Shorthand is faster to type initially, but leads to massive confusion when reading the code files later.',
        howToAvoid: 'Use complete, descriptive terms. Let the editor\'s autocomplete do the typing for you!',
        codeSnippet: {
          bad: `int d = 30;
double val = d * 1.5; // What is d? What is val?`,
          good: `int daysOverdue = 30;
double lateFeeAccumulated = daysOverdue * 1.50; // Instantly understood!`
        }
      },
      {
        mistake: 'Violating case guidelines (e.g., starting a class with a lowercase letter).',
        whyItHappens: 'The compiler does not crash, so beginners assume it doesn\'t matter. However, it confuses other developers and breaks standard IDE syntax highlights.',
        howToAvoid: 'Always stick strictly to: Classes start with Uppercase, variables and methods start with lowercase.',
        codeSnippet: {
          bad: `public class profileViewer { // ❌ lowercase class name
    int Age = 21; // ❌ uppercase variable name
}`,
          good: `public class ProfileViewer { // ✓ PascalCase class
    int age = 21; // ✓ camelCase variable
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Apply Naming Conventions',
      tasks: [
        'Identify the styling convention violation in: `double ItemPrice = 12.99;`.',
        'Identify the styling convention violation in: `final int max_limit = 100;`.',
        'Identify the styling convention violation in: `class userProfile { ... }`.',
        'Suggest a highly meaningful variable name to store a customer\'s average order value.',
        'Write a tiny class containing a constant for the acceleration of gravity (9.81) named according to guidelines.'
      ]
    },
    summary: [
      'Naming conventions are community guidelines that make source files consistent and legible.',
      'Java classes always use PascalCase (starts with an Uppercase letter, e.g. "MainClass").',
      'Variables and methods always use camelCase (starts with a lowercase letter, e.g. "totalScore").',
      'Constants (final) should be written entirely in uppercase separated by underscores ("MAX_VALUE").'
    ]
  },

  'semicolons': {
    slug: 'semicolons',
    title: 'Semicolons',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '6 mins',
    difficulty: 'Beginner',
    introduction: `A semicolon is the explicit punctuation symbol used in Java to mark the boundary of an executable statement.

In spoken languages, we use periods to tell readers where a sentence ends. In Java, semicolons serve the exact same purpose for the compiler. Because Java ignores white spaces and line breaks during compilation, the semicolon is the ONLY way the computer knows when a specific instruction is complete.`,
    whyThisTopicMatters: {
      whyItExists: 'Since Java does not use newlines or line-breaks to identify statement ends (unlike languages like Python or JavaScript), it needs a dedicated delimiter symbol so the parser can safely translate code.',
      problemSolved: 'Semicolons allow you to spread single statements across multiple lines for readability, or write multiple short commands on a single line, without causing logical parsing ambiguity.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A good rule of thumb is: **You must add a semicolon to any statement that performs an action or declares a variable.** You must NEVER add semicolons to headers of structures that contain curly brace code blocks.'
      },
      {
        type: 'bullet_list',
        title: 'Where Semicolons Are STRICTLY Required',
        items: [
          '**Variable Declarations**: `int age = 21;`',
          '**Assignments & Calculations**: `score = score + 10;`',
          '**Console Print Actions**: `System.out.println("Hello");`',
          '**Return Operations**: `return result;`',
          '**Import Statements**: `import java.util.Scanner;`'
        ]
      },
      {
        type: 'bullet_list',
        title: 'Where Semicolons Are STRICTLY Forbidden',
        items: [
          '**Class Headers**: `public class Main { ... }` (Adding a semicolon here is a compile error).',
          '**Method Headers**: `public static void main(String[] args) { ... }`',
          '**Conditional Headers**: `if (score >= 50) { ... }`',
          '**Loop Control Headers**: `while (count > 0) { ... }`'
        ]
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Accidentally placing a semicolon at the end of an "if" condition or a loop header (like "if (age >= 18);") is a silent bug! It terminates the decision instantly, causing the subsequent curly-brace block to run unconditionally!'
      }
    ],
    codeExamples: [
      {
        title: 'Correct Punctuation vs. Multi-Line Statements',
        language: 'java',
        code: `public class SemicolonsDemo {
    public static void main(String[] args) {
        // Simple statements terminated with semicolons
        int age = 19;
        String name = "Alinafe";
        
        // Spreading a statement over multiple lines is perfectly valid!
        String message = "This text "
            + "is concatenated "
            + "across multiple lines safely.";
            
        System.out.println("Hello: " + name);
        System.out.println("Status: " + message);
    }
}`,
        explanation: 'Standard variable declarations end with a semicolon. The message assignment is split across three physical lines, but since there is no semicolon until the third line, Java treats it as a single contiguous command.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'How Compiler Parses Statement Boundaries',
        description: 'See how the compiler groups code commands purely by looking for semicolon anchors, ignoring white space.',
        elements: {
          steps: [
            { id: '1', label: 'Read: int age = 21', desc: 'No semicolon found yet. Scans next line for continuation.', type: 'start' },
            { id: '2', label: 'Read: + 5;', desc: 'Semicolon found! Compiler completes statement: int age = 26.', type: 'action' },
            { id: '3', label: 'Parse class Main', desc: 'Finds class keyword. Forbidden to look for semicolon; expects curly brace.', type: 'decision' },
            { id: '4', label: 'Parsing Completed', desc: 'Compilation successful with clean syntax bounds.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the semicolon at the end of simple statements.',
        whyItHappens: 'It is a classic typo for beginners who are transitioning from writing standard paragraphs to strict computer syntax.',
        howToAvoid: 'Analyze the error logs! The compiler will literally point to the line and say: "error: \';\' expected".',
        codeSnippet: {
          bad: `int points = 100 // ❌ Missing semicolon
System.out.println(points) // ❌ Missing semicolon`,
          good: `int points = 100; // ✓ Added semicolon
System.out.println(points); // ✓ Added semicolon`
        }
      },
      {
        mistake: 'Adding a semicolon at the end of an if condition header.',
        whyItHappens: 'Beginners tend to put semicolons at the end of every physical line of code without checking what the line is doing.',
        howToAvoid: 'Never put a semicolon directly after the closing parentheses of an if, while, or for header.',
        codeSnippet: {
          bad: `int waterLevel = 10;
if (waterLevel > 50); { // ❌ Bug! Semicolon terminates the check instantly!
    System.out.println("Water overflow!"); // This runs regardless of water level!
}`,
          good: `int waterLevel = 10;
if (waterLevel > 50) { // ✓ Removed semicolon, block is securely bound
    System.out.println("Water overflow!"); // Will NOT run, which is correct!
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Semicolon Error Hunting',
      tasks: [
        'Identify if a semicolon is needed at the end of: `import java.util.Scanner`.',
        'Identify if a semicolon is needed at the end of: `public static void main(String[] args)`.',
        'Explain the logical bug that occurs if you write: `while (count > 0); { count--; }`.',
        'Write a tiny Java file that intentionally lacks a semicolon on a variable assignment, compile it, and write down the exact compiler warning output.',
        'Fix the compiler warning from your test file and compile again.'
      ]
    },
    summary: [
      'Semicolons are mandatory statement terminators that define instructions boundaries.',
      'Java ignores carriage returns and whitespaces, relying entirely on the semicolon to compile commands.',
      'Semicolons are required on declarations, assignments, return commands, and import statements.',
      'Semicolons are strictly forbidden after class headers, method headers, or conditional check headers.'
    ]
  },

  'code-blocks': {
    slug: 'code-blocks',
    title: 'Code Blocks',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A code block is a collection of zero or more statements enclosed within opening and closing curly braces \`{ }\`.

While semicolons define the end of single instructions, curly braces define the boundaries of logical containers. Code blocks are used to group statements together, define class templates, establish method actions, and restrict the visibility and lifetime of variables inside system memory.`,
    whyThisTopicMatters: {
      whyItExists: 'In computer programming, logic must be structured hierarchically. There must be a clear way to state that certain instructions belong strictly inside a class, or that a group of statements should only execute if a conditional decision is met.',
      problemSolved: 'Code blocks solve this by creating defined scopes. They organize code into tidy nested structures and govern the "lifetime" of variables, ensuring memory is automatically freed when a code block finishes executing.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Code blocks can be nested inside other code blocks (for example, a method block sitting inside a class block, and an if-else block nested inside that method block). This nesting creates a clear visibility hierarchy called **scope**.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Scope',
          definition: 'The region of a program where a declared variable is recognized and can be accessed.',
          explanation: 'Variables declared inside a specific code block are localized to that block. They are created when the block is entered, and destroyed (garbage collected) the moment execution hits the closing curly brace.'
        }
      },
      {
        type: 'bullet_list',
        title: 'Core Rules of Variable Scopes',
        items: [
          '**Outer-to-Inner Access**: Code sitting inside an inner nested block can freely read and modify variables declared in outer blocks (like method parameters or class-level variables).',
          '**Inner-to-Outer Restriction**: Code sitting in an outer block CANNOT see or access variables declared inside an inner nested block. That data is effectively locked away.',
          '**Brace Pairing Rule**: For every opening curly brace `{` you write in your program, there must be a mathematically matching closing curly brace `}` written later.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Always indent your code by 4 spaces (or 1 tab) every time you open a new curly brace! Indentation makes nested structures instantly scannable and helps you spot missing braces in milliseconds.'
      }
    ],
    codeExamples: [
      {
        title: 'Demonstrating Lexical Block Scopes',
        language: 'java',
        code: `public class ScopeDemo { // Class block starts

    public static void main(String[] args) { // Method block starts
        // Declared in outer block (main method)
        int outerValue = 100;
        
        if (outerValue > 50) { // Conditional block starts
            // Declared in inner block (if statement)
            int innerValue = 500;
            
            System.out.println("Outer Value: " + outerValue); // ✓ Works! Outer is visible inside
            System.out.println("Inner Value: " + innerValue); // ✓ Works! Inner is visible here
            
        } // Conditional block ends. 'innerValue' is destroyed here!
        
        System.out.println("Final Outer: " + outerValue); // ✓ Works!
        
        // System.out.println("Final Inner: " + innerValue); 
        // ❌ Compile error! innerValue does not exist in this outer scope!
        
    } // Method block ends
} // Class block ends`,
        explanation: 'In this code, we demonstrate outer-to-inner access (outerValue is visible inside the if block) and inner-to-outer restriction (trying to access innerValue outside the if block throws an immediate compiler exception because the variable has been destroyed).'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Indentation & Nesting Standard',
        description: 'Visual representation of how developers structure code vertically to make scopes distinct.',
        elements: {
          headers: ['Nesting Level', 'Syntax Code Line', 'Scope Boundary', 'Standard Indentation'],
          rows: [
            ['Level 1 (Outer)', 'public class Main {', 'Entire Class File Boundary', '0 Spaces (No Indent)'],
            ['Level 2', '    public static void main(...) {', 'Main Method Boundary', '4 Spaces (1 Indent)'],
            ['Level 3', '        int score = 10;', 'Local Method State', '8 Spaces (2 Indents)'],
            ['Level 3', '        if (score > 5) {', 'Conditional Branch Boundary', '8 Spaces (2 Indents)'],
            ['Level 4 (Inner)', '            System.out.println(score);', 'Inside decision block action', '12 Spaces (3 Indents)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Mismatched or missing curly braces.',
        whyItHappens: 'It is incredibly common to lose track of opening and closing braces when nesting multiple structures like if statements and loops.',
        howToAvoid: 'Use an IDE like VS Code that highlights matching brackets, and enforce strict, uniform indentation on every single line of code.',
        codeSnippet: {
          bad: `public class BadBraces {
    public static void main(String[] args) {
        if (true) {
            System.out.println("Braces mismatch");
        }
    // ❌ Error: reached end of file while parsing (Missing class closing brace)`,
          good: `public class BadBraces {
    public static void main(String[] args) {
        if (true) {
            System.out.println("Braces mismatch");
        }
    } // ✓ Added matching method brace
} // ✓ Added matching class brace`
        }
      }
    ],
    practiceExercise: {
      title: 'Analyze Block Scopes',
      tasks: [
        'Write a class named "ScopeHunter" containing a main method.',
        'Declare an integer "level" at the method level and set it to 1.',
        'Write an if statement checking if level is 1. Inside, declare "power" and set it to 9000.',
        'Try to print "power" outside the if statement block and describe the resulting compiler exception.',
        'Comment out the invalid line, compile successfully, and run.'
      ]
    },
    summary: [
      'A code block is a grouping of commands enclosed in opening and closing curly braces "{}".',
      'Code blocks group logical instructions and define lexical boundaries called scopes.',
      'Variables declared inside a block are localized to that block and cannot be accessed outside.',
      'Strict indentation of 4 spaces is a professional rule to make nested blocks scannable and clean.'
    ]
  },

  'java-math-class': {
    slug: 'java-math-class',
    title: 'Java Math Class',
    moduleSlug: 'java-fundamentals',
    moduleName: 'Java Fundamentals',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `When writing software, you will frequently need to perform mathematical calculations that go beyond simple addition, subtraction, or multiplication. You might need to find the square root of a number, calculate exponents, round decimal values, or generate a random number.

Instead of writing complex formulas or building algorithms from scratch, Java provides a powerful, pre-built tool called the Math class. This class belongs to the java.lang package, which is automatically imported into every Java file, meaning you can start using it immediately without any extra setup.`,
    whyThisTopicMatters: {
      whyItExists: 'Standard arithmetic operators (+, -, *, /, %) only handle basic mathematics. Writing custom logic for complex calculations like square roots, rounding policies, or random generation would require advanced mathematical algorithms and result in slow, error-prone code.',
      problemSolved: 'The Java Math class solves this by providing a standardized, highly optimized, and mathematically precise toolbox. It ensures that developers can solve math problems instantly in a single line of code, ensuring both performance and accuracy.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The Math class consists entirely of static utility methods and constants. In Java, "static" means these tools belong to the class itself, not to instances of the class. Because of this, you never have to create a new Math object; you simply call the methods directly using the class name, like Math.sqrt().'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Static Utility Class',
          definition: 'A class that contains only static methods and constants, and is designed to act as a general-purpose helper rather than an object blueprint.',
          explanation: 'Since the Math class only contains calculations, creating multiple "Math" objects in memory would be a waste of resources. Thus, Java disables object creation for Math and makes everything static.'
        }
      },
      {
        type: 'bullet_list',
        title: 'Core Math Class Methods',
        items: [
          '**Math.max(a, b)**: Compares two numbers and returns the larger value. It is overloaded to work with int, long, float, and double.',
          '**Math.min(a, b)**: Compares two numbers and returns the smaller value.',
          '**Math.pow(base, exponent)**: Raises a base number to the power of an exponent. It takes double inputs and returns a double.',
          '**Math.sqrt(number)**: Calculates and returns the square root of a double value as a double.',
          '**Math.abs(number)**: Returns the absolute (positive) value of a number, effectively removing any negative signs.',
          '**Math.random()**: Generates a double decimal value greater than or equal to 0.0 and strictly less than 1.0.'
        ]
      },
      {
        type: 'info_card',
        title: 'Decimal Rounding Methods',
        text: 'Java provides three distinct ways to round fractional numbers depending on your needs:\n\n1. **Math.round(x)**: Standard rounding. Rounds to the nearest whole number (.5 and above rounds up, below rounds down). Returns an int or long.\n2. **Math.floor(x)**: Rounds DOWN toward negative infinity. For example, Math.floor(5.9) yields 5.0.\n3. **Math.ceil(x)**: Rounds UP toward positive infinity. For example, Math.ceil(5.1) yields 6.0.'
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Since Math.pow(), Math.sqrt(), Math.floor(), and Math.ceil() return double values, you must use narrowing type casting if you wish to store the final outcome in an integer variable. For example: int result = (int) Math.sqrt(25);'
      },
      {
        type: 'bullet_list',
        title: 'Mastering Random Number Ranges',
        items: [
          'By default, **Math.random()** returns a double between 0.0 and 0.999...',
          'To generate a random integer in a custom range, we multiply the random double by the size of our range, cast the result to an int, and then shift it using an offset.',
          '**Formula**: `(int)(Math.random() * rangeSize) + minimumValue`',
          '**Example**: To roll a standard 6-sided die (numbers 1 to 6), we use: `(int)(Math.random() * 6) + 1`.'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Using the Math Class Utility Toolbox',
        language: 'java',
        code: `public class MathDemo {
    public static void main(String[] args) {
        // 1. Finding Maximum and Minimum values
        int priceA = 150;
        int priceB = 220;
        System.out.println("Maximum price: " + Math.max(priceA, priceB)); // 220
        System.out.println("Minimum price: " + Math.min(priceA, priceB)); // 150

        // 2. Power and Square Root calculations
        double areaOfSquare = 49.0;
        double sideLength = Math.sqrt(areaOfSquare);
        System.out.println("Side length of square: " + sideLength); // 7.0

        double base = 2.0;
        double exponent = 3.0;
        double resultPower = Math.pow(base, exponent);
        System.out.println("2 raised to power of 3: " + resultPower); // 8.0

        // 3. Absolute values and constants
        int temperatureDrop = -15;
        System.out.println("Absolute change: " + Math.abs(temperatureDrop) + " degrees"); // 15

        double radius = 5.0;
        double circumference = 2 * Math.PI * radius; // Using Math.PI constant (~3.14159)
        System.out.println("Circumference of circle: " + circumference);

        // 4. Rounding decimals in three ways
        double value = 5.67;
        System.out.println("Standard round of 5.67: " + Math.round(value)); // 6 (returns long/int)
        System.out.println("Floor of 5.67: " + Math.floor(value));         // 5.0 (returns double)
        System.out.println("Ceiling of 5.67: " + Math.ceil(value));       // 6.0 (returns double)

        // 5. Generating random integers in a range (1 to 10 inclusive)
        int minRange = 1;
        int maxRange = 10;
        int rangeSize = (maxRange - minRange) + 1; // 10
        
        // Always wrap the multiplication in parentheses before casting to (int)!
        int randomRoll = (int) (Math.random() * rangeSize) + minRange;
        System.out.println("Random number between 1 and 10: " + randomRoll);
    }
}`,
        explanation: 'This comprehensive demonstration program showcases comparison methods (max and min), powers and square roots, absolute values, the Math.PI mathematical constant, the three primary decimal rounding policies, and random range scaling using proper parenthetical cast priority.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Math Utility Quick Reference Sheet',
        description: 'A reference summarizing the input requirements, return types, and expected behaviors of core Math class methods.',
        elements: {
          headers: ['Method Call', 'Description', 'Parameter Input', 'Return Type', 'Sample Evaluation'],
          rows: [
            ['Math.max(x, y)', 'Finds the higher value', 'int, long, float, double', 'Same as input type', 'Math.max(10, 4) ➔ 10'],
            ['Math.min(x, y)', 'Finds the lower value', 'int, long, float, double', 'Same as input type', 'Math.min(10, 4) ➔ 4'],
            ['Math.pow(b, e)', 'Raises b to power e', 'double, double', 'double', 'Math.pow(3, 2) ➔ 9.0'],
            ['Math.sqrt(x)', 'Calculates square root', 'double', 'double', 'Math.sqrt(16) ➔ 4.0'],
            ['Math.abs(x)', 'Finds absolute magnitude', 'int, long, float, double', 'Same as input type', 'Math.abs(-7) ➔ 7'],
            ['Math.random()', 'Generates random decimal', 'None', 'double', 'Returns e.g. 0.45719'],
            ['Math.round(x)', 'Nearest whole number', 'double or float', 'long or int', 'Math.round(4.5) ➔ 5'],
            ['Math.floor(x)', 'Rounds down towards negative', 'double', 'double', 'Math.floor(4.9) ➔ 4.0'],
            ['Math.ceil(x)', 'Rounds up towards positive', 'double', 'double', 'Math.ceil(4.1) ➔ 5.0']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to instantiate the Math class using the new keyword.',
        whyItHappens: 'As beginners learn about Object-Oriented Programming, they are taught that classes must be instantiated to create object instances (e.g., Scanner scanner = new Scanner(System.in)). They often assume the Math class works the same way.',
        howToAvoid: 'The Math class has a private constructor specifically designed to throw a compiler error if you attempt to instantiate it. Since all of its properties are static, you call them directly on the class itself: Math.pow(x, y).',
        codeSnippet: {
          bad: `// ❌ Compiler error! Math() has private access in java.lang.Math
Math calculations = new Math();
double root = calculations.sqrt(25.0);`,
          good: `// ✓ Use the class name directly without instantiation!
double root = Math.sqrt(25.0);`
        }
      },
      {
        mistake: 'Incorrect parenthesis grouping during random range scaling casting.',
        whyItHappens: 'In Java, the cast operator (int) has a higher precedence than the multiplication operator (*). If you do not group the random multiplication in parentheses, Java casts the raw Math.random() double (which is always 0.0 to 0.999...) to an int first. Truncating any decimal below 1.0 yields 0, which is then multiplied, resulting in the offset value every single time.',
        howToAvoid: 'Always wrap the Math.random() multiplication step inside outer parentheses before applying the (int) type cast operator.',
        codeSnippet: {
          bad: `// ❌ Broken! Casts random to int first (0.0 -> 0), then 0 * 6 + 1. Always returns 1!
int dieRoll = (int) Math.random() * 6 + 1;`,
          good: `// ✓ Correct! Multiplies first (e.g. 3.42), then casts to int (3), then shifts (+1 = 4).
int dieRoll = (int) (Math.random() * 6) + 1;`
        }
      }
    ],
    practiceExercise: {
      title: 'Using the Math Library Toolbox',
      tasks: [
        'Write a program that prompts the user to enter two decimal values using a Scanner. Use Math.max() to display the larger number, and Math.min() to display the smaller number.',
        'Calculate the hypotenuse of a right-angled triangle where the legs are a = 3.0 and b = 4.0. Utilize Math.pow() and Math.sqrt() to execute the Pythagorean theorem formula (hypotenuse = sqrt(a² + b²)).',
        'Use Math.random() to write a program that simulates a standard 6-sided dice roll. Ensure that the generated integer is dynamically between 1 and 6 inclusive, and print it to the console.',
        'Create a decimal variable set to 45.67. Print the output of Math.round(value), Math.floor(value), and Math.ceil(value) on separate lines, and observe the mathematical variations.'
      ]
    },
    summary: [
      'The Java Math class is a pre-built utility class in the java.lang package containing optimized, high-precision mathematical calculations.',
      'All variables and methods in the Math class are static, meaning they belong directly to the class and must be called without creating an object instance.',
      'Common methods cover extremes (max, min), arithmetic (abs, sqrt, pow), and rounding behaviors (round, floor, ceil).',
      'Casting decimals to integers drops all trailing digits without rounding. To convert double-returning calculations (like Math.pow or Math.random) into integers safely, explicit narrowing type casts must be utilized.',
      'Custom random integer ranges can be generated using: (int)(Math.random() * rangeSize) + minimumValue.'
    ]
  }
};
