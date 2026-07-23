import { DetailedLessonContent } from '../../types';

export const ARRAYS_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-arrays': {
    slug: 'introduction-to-arrays',
    title: 'Introduction to Arrays',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Imagine you are building a gradebook system for a classroom. If you only have one student, storing their score is easy: you create a single variable like \`int score = 85;\`. 

But what if you have 30 students? Or 100? Or 1,000? Creating \`score1\`, \`score2\`, \`score3\`... all the way to \`score1000\` would be an absolute nightmare. Your code would become thousands of lines long, repetitive, and almost impossible to manage.

To solve this, programming languages introduced **Arrays**. An array is a single, continuous block of memory that lets you store multiple values of the exact same type under one single name.`,
    whyThisTopicMatters: {
      whyItExists: `Without arrays, managing collections of related information is incredibly tedious. If you wanted to print out every student score, calculate their class average, or find the highest mark, you would have to write separate mathematical statements for every single variable name. This is highly error-prone and completely impractical for real-world software.`,
      problemSolved: `Arrays solve this clutter. Instead of individual variables, you group all related data points (like a set of phone contacts, monthly household expenses, or student marks) into a structured collection. This lets you write one loop to process thousands of values in just a few lines of code.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'An array acts like a high-rise apartment building. The building itself has a single street address (the variable name). However, inside that building are multiple numbered apartments (slots or indexes), and each apartment can hold a resident (the stored value).'
      },
      {
        type: 'paragraph',
        text: 'In Java, all elements stored inside a single array must be of the **exact same data type**. For example, you can create an array containing only integers, or an array containing only booleans, but you cannot mix integers and booleans within the same array structure.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Array',
          definition: 'A fixed-size sequential container that stores multiple elements of the same data type.',
          explanation: 'Once an array is created in Java, its capacity cannot shrink or expand. It is locked to the size you specified during memory allocation.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Contiguous Memory',
          definition: 'Memory blocks stored right next to each other in physical computer hardware RAM.',
          explanation: 'Because array elements are stored contiguously, the computer can find any element instantly, making arrays extremely fast for reading and writing data.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'Since arrays have a fixed size, if your program runs out of space in an array, you must create a brand-new, larger array and copy all the old values over to the new one! In later modules, we will learn about dynamically resizing collections.'
      }
    ],
    codeExamples: [
      {
        title: 'The Repetitive Way: Individual Variables',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Individual variables become unmanageable quickly!
        int score1 = 95;
        int score2 = 88;
        int score3 = 76;
        int score4 = 91;
        
        // Calculating total requires manual summation
        int total = score1 + score2 + score3 + score4;
        System.out.println("Total: " + total);
    }
}`,
        explanation: 'Each value is trapped in its own variable. Adding a 5th student would require updating the declaration, updating the mathematical formula, and updating any print statements.'
      },
      {
        title: 'The Clean Way: Preparing to Use an Array',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // A single array variable holds all scores
        int[] scores = {95, 88, 76, 91};
        
        System.out.println("First student score: " + scores[0]);
    }
}`,
        explanation: 'By wrapping all four values inside the "scores" array, we can group them under a single container and refer to them dynamically using a number index.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Variables vs. Arrays',
        description: 'A comparison highlighting the structural differences between individual values and unified array blocks.',
        elements: {
          headers: ['Metric', 'Individual Variables', 'Arrays'],
          rows: [
            ['Name overhead', 'A unique, separate name for every single value stored.', 'One single, descriptive name for the entire collection.'],
            ['Memory layout', 'Scattered randomly across computer memory.', 'Stored sequentially in one unbroken contiguous memory block.'],
            ['Loop friendly', 'No. Loops cannot iterate over variable names dynamically.', 'Yes. Loops are perfectly optimized to traverse array elements.'],
            ['Type limits', 'Each variable can be declared with a different type.', 'All elements in the array must share the identical data type.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming arrays can automatically resize when new elements are added.',
        whyItHappens: 'Beginners are often used to real-world list apps where lists grow dynamically.',
        howToAvoid: 'Always remember that Java arrays are locked to their initial created size. Plan the capacity in advance, or allocate a larger array if expansion is needed.',
        codeSnippet: {
          bad: `// Trying to stretch an array after creation is not allowed in Java.
int[] ratings = new int[3]; // Max size is 3`,
          good: `// Create the array with the maximum expected size in advance.
int[] ratings = new int[10]; // Capacity for up to 10 ratings`
        }
      }
    ],
    practiceExercise: {
      title: 'Conceptualizing Collections',
      tasks: [
        'Write down three real-world examples of data collections that would be best modeled using arrays (e.g., weekly temperature logs).',
        'In your own words, explain the difference between contiguous memory and scattered memory.',
        'If you created a Java program to track student exam grades, explain what challenges you would face if you did not use arrays.'
      ]
    },
    summary: [
      'An array is a fixed-size container that stores elements sharing the identical data type.',
      'Array elements are packed together contiguously in RAM, making lookups incredibly fast.',
      'Using arrays eliminates repetitive variables and allows your code to scale to thousands of records cleanly.'
    ]
  },

  'creating-arrays': {
    slug: 'creating-arrays',
    title: 'Creating Arrays',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Now that you understand what arrays are, it is time to write the syntax to build them. In Java, creating an array is a two-part process: first, we **declare** the array variable, and second, we **allocate memory** to set its exact size. 

We will walk through the exact steps to declare and create arrays, detailing how the Java Virtual Machine reserves physical space for your items.`,
    whyThisTopicMatters: {
      whyItExists: `Java is a statically-typed language with rigid memory management. Unlike other languages that hide memory calculations, Java requires you to be explicit. The computer must know in advance exactly how much room to reserve in physical memory so it does not overwrite other running operations.`,
      problemSolved: `Defining explicit types and sizes prevents unexpected memory overflows. It ensures your programs run efficiently with a predictable memory footprint, protecting applications from performance drops or sudden crashes.`
    },
    mainExplanation: [
      {
        type: 'info_card',
        title: 'The Steps to Build an Array in Code'
      },
      {
        type: 'paragraph',
        text: 'Creating an array requires four precise steps. Let\'s look at them in sequence:'
      },
      {
        type: 'bullet_list',
        title: 'Step-by-step array creation process',
        items: [
          'Choose the data type: Select what type of values the array will contain (e.g., int, double, boolean).',
          'Add brackets []: Place empty square brackets next to the data type to indicate this is an array container, not a single variable.',
          'Use the "new" keyword: This keyword tells Java to reserve fresh space inside memory.',
          'Specify the size: Put an integer inside brackets at the end to dictate exactly how many slots the array has.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Array Declaration',
          definition: 'Telling Java the name of your array variable and what data type it is designed to hold.',
          explanation: 'Example: "int[] weights;" declares an array named weights, but does not allocate any physical memory slots yet.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'The "new" Keyword',
          definition: 'An operator used in Java to instantiate objects and allocate physical space on the memory Heap.',
          explanation: 'Without "new", an array variable remains "null" and cannot store any real values.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'The size of an array must be specified as a positive, non-negative whole integer. Declaring a size of 0 is technically legal but rarely useful, and using a negative number will cause a "NegativeArraySizeException" crash!'
      }
    ],
    codeExamples: [
      {
        title: 'Declaring and Creating in Separate Steps',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Step 1: Declare the array (no memory allocated yet)
        int[] scores;
        
        // Step 2: Allocate memory for 5 integers
        scores = new int[5];
        
        System.out.println("Array created successfully!");
    }
}`,
        explanation: 'First, we declare "scores" of type int[]. At this point, scores is a reference variable that points to nothing. On the second line, we allocate physical space for 5 integer slots.'
      },
      {
        title: 'Declaring and Creating in a Single Line',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Combine declaration and creation in one single statement
        double[] prices = new double[10];
        boolean[] flags = new boolean[3];
        
        System.out.println("Prices array size: " + prices.length);
    }
}`,
        explanation: 'This combined format is the standard convention used by Java programmers. It keeps code short, highly readable, and guarantees that variables are initialized immediately.'
      }
    ],
    visualLearning: [
      {
        type: 'memory',
        title: 'RAM Allocation Diagram',
        description: 'How Java sets up references pointing to allocated heap structures in computer memory.',
        elements: {
          cells: [
            { address: '0x3010', name: 'prices (Ref)', value: '0x99A0', type: 'Array reference pointer' },
            { address: '0x99A0', name: 'prices[0]', value: '0.0', type: 'Contiguous double block' },
            { address: '0x99A8', name: 'prices[1]', value: '0.0', type: 'Contiguous double block' },
            { address: '0x99B0', name: 'prices[2]', value: '0.0', type: 'Contiguous double block' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting the size inside the brackets during the initial declaration step.',
        whyItHappens: 'Programmers coming from other languages like C++ sometimes expect the size to belong to the type declaration.',
        howToAvoid: 'Keep the left-side brackets completely empty. The size belongs strictly inside the right-side creation brackets after the "new" keyword.',
        codeSnippet: {
          bad: `// ❌ WRONG: Syntax error, won't compile!
int[5] numbers;`,
          good: `// ✓ CORRECT: Brackets empty on the left, size specified on the right
int[] numbers = new int[5];`
        }
      }
    ],
    practiceExercise: {
      title: 'Creating Array Blueprints',
      tasks: [
        'Write Java statements to declare and create an array named "dailySteps" capable of holding 7 integer values.',
        'Write a single-line statement to create a double array named "temperatures" with a capacity of 365 slots.',
        'Explain what happens in computer memory when you execute the statement: "String[] usernames = new String[15];"'
      ]
    },
    summary: [
      'Array creation combines a type declaration with brackets "[]" and memory allocation via "new".',
      'The left-side brackets define the reference type, while the right-side brackets specify the actual capacity.',
      'The array capacity must be defined as a positive integer and cannot be modified once set.'
    ]
  },

  'initializing-arrays': {
    slug: 'initializing-arrays',
    title: 'Initializing Arrays',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `When you allocate space for an array, Java does not leave those slots empty. It automatically fills them with standard baseline defaults. However, you will usually want to load your own custom values. 

We will explore two primary methods for loading values into an array: manually assigning items one-by-one, or using "Array Literals" to declare and populate an array simultaneously in a single step.`,
    whyThisTopicMatters: {
      whyItExists: `Manually creating an array and assigning elements over dozens of repetitive lines is slow and cluttering. If you already know your dataset (like the names of the days of the week, or a pre-set list of prime numbers), you need a clean, rapid syntax to define them quickly.`,
      problemSolved: `Array Literals let you bypass the "new" keyword and explicit size declarations entirely. This streamlines your source code, making configuration lists highly compact and straightforward to read.`
    },
    mainExplanation: [
      {
        type: 'info_card',
        title: 'Java Default Values vs. Custom Assignments'
      },
      {
        type: 'paragraph',
        text: 'When you create an array using the \`new\` keyword, Java automatically initializes every slot with a built-in default value based on the data type:'
      },
      {
        type: 'bullet_list',
        title: 'Automatic background initializations',
        items: [
          'Integers (int, byte, short, long): Automatically initialize to 0.',
          'Decimals (double, float): Automatically initialize to 0.0.',
          'Booleans: Automatically initialize to "false".',
          'Objects (like String): Automatically initialize to "null" (meaning empty, pointing to no memory address).'
        ]
      },
      {
        type: 'paragraph',
        text: 'To avoid these default values, we use **Array Literals**. An array literal is a comma-separated list of items wrapped inside curly braces \`{}\`. This shortcut handles type declaration, memory allocation, size calculation, and item assignment behind the scenes in one elegant sweep.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Array Literal',
          definition: 'A concise syntax that populates an array with custom elements immediately during its declaration.',
          explanation: 'Example: "int[] primes = {2, 3, 5, 7};" creates an array of size 4 loaded with those prime values.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Default Initialization',
          definition: 'The automated process where Java fills newly allocated memory with standard baseline values.',
          explanation: 'This ensures safety; you will never read garbage values from uninitialized RAM.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'When using an array literal, do not specify an explicit size inside the brackets. Java counts the elements inside the curly braces and sets the size automatically!'
      }
    ],
    codeExamples: [
      {
        title: 'Relying on Default Values',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int[] numbers = new int[3];
        boolean[] activeUsers = new boolean[2];
        
        // Java automatically initialized numbers to 0, activeUsers to false
        System.out.println("numbers[0]: " + numbers[0]); 
        System.out.println("activeUsers[0]: " + activeUsers[0]);
    }
}`,
        explanation: 'Because we used "new", the slots are pre-filled. Running this prints "numbers[0]: 0" and "activeUsers[0]: false".'
      },
      {
        title: 'Using Array Literals for Compact Code',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Create and populate an array instantly
        String[] weekdays = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
        
        System.out.println("Weekdays length: " + weekdays.length);
        System.out.println("First weekday: " + weekdays[0]);
    }
}`,
        explanation: 'The compiler counts 5 String items inside the braces. It automatically allocates an array of size 5 and inserts the weekday names.'
      }
    ],
    visualLearning: [
      {
        type: 'array',
        title: 'Initialized String Array Layout',
        description: 'How array literal values reside sequentially inside the structured weekday container.',
        elements: {
          items: ['"Monday"', '"Tuesday"', '"Wednesday"', '"Thursday"', '"Friday"'],
          highlightIdx: 0
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring an array first, then attempting to assign an array literal on a separate line.',
        whyItHappens: 'Beginners sometimes separate variable declarations from assignments out of habit.',
        howToAvoid: 'The shortcut curly brace syntax is strictly reserved for the single statement where the array is first declared. If you must split declaration and assignment, you must use the "new" operator explicitly.',
        codeSnippet: {
          bad: `// ❌ WRONG: Syntax error, won't compile!
int[] scores;
scores = {90, 80, 70};`,
          good: `// ✓ CORRECT: Use the literal shortcut at declaration time
int[] scores = {90, 80, 70};

// OR use explicit instantiation on separate lines
int[] alternate;
alternate = new int[]{90, 80, 70};`
        }
      }
    ],
    practiceExercise: {
      title: 'Initializing Custom Datasets',
      tasks: [
        'Write a single-line declaration for a double array named "gasPrices" initialized with four decimal values representing fuel prices.',
        'Predict the output: what default values would be printed if you created "boolean[] tests = new boolean[4];" and printed its items?',
        'Identify why the statement "int[] items = new int[3]{1, 2, 3};" is incorrect, and explain how to fix it.'
      ]
    },
    summary: [
      'Java automatically initializes empty numeric arrays to 0, booleans to false, and objects to null.',
      'Array literals use curly braces "{}" to declare and load elements in one line, bypassing the "new" keyword.',
      'Curly-brace array literals must be written on the exact same line as the variable declaration.'
    ]
  },

  'accessing-array-elements': {
    slug: 'accessing-array-elements',
    title: 'Accessing Array Elements',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Once you have loaded data into your array, you need a way to pull those values back out to use in your calculations. To do this, Java uses a numerical system called **Indexing**. 

We will explain how to target individual elements inside your array, discuss how indexing works under the hood, and detail how to safely identify the first and last items without causing program errors.`,
    whyThisTopicMatters: {
      whyItExists: `An array is a collective unit, but computer programs process elements individually. To calculate a tax, check a user password, or render an image pixel, your code must pinpoint the exact slot in memory containing that specific data point.`,
      problemSolved: `Index calculations allow instant, direct access (O(1) complexity) to any item in the array. This keeps your lookups blazing fast regardless of whether your array holds 5 items or 5 million items.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To retrieve a value, you write the name of your array followed by square brackets enclosing the index number: \`arrayName[index]\`.'
      },
      {
        type: 'paragraph',
        text: 'In Java, **indexing always starts at 0**. This means the very first element in your array is sitting at index \`[0]\`, the second element is at index \`[1]\`, and the third element is at index \`[2]\`.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Index',
          definition: 'An integer representing the sequence position of an element inside an array.',
          explanation: 'Indexes start at 0 and terminate at (length - 1). Accessing any index outside this window causes a system crash.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Zero-Based Indexing',
          definition: 'A numbering convention where the initial element of a sequence is assigned the index 0.',
          explanation: 'Historically, the index represents the mathematical "offset" (distance) from the very beginning of the array memory address.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Because index offsets start at zero, an array containing 10 items does not have an index 10! The final valid index of a 10-item array is 9.'
      }
    ],
    codeExamples: [
      {
        title: 'Accessing First, Middle, and Last Elements',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int[] series = {100, 200, 300, 400};
        
        // Read the first element
        int first = series[0]; 
        
        // Read the second element
        int second = series[1]; 
        
        // Read the last element
        int last = series[3]; 
        
        System.out.println("First: " + first);
        System.out.println("Second: " + second);
        System.out.println("Last: " + last);
    }
}`,
        explanation: 'Since there are 4 items, the index options are 0, 1, 2, and 3. Accessing series[0] reads 100, while series[3] reads 400.'
      },
      {
        title: 'Using Variables as Index Locators',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String[] participants = {"Alice", "Bob", "Charlie"};
        
        // You can use a variable inside the square brackets!
        int locator = 2;
        String chosen = participants[locator];
        
        System.out.println("Chosen participant: " + chosen);
    }
}`,
        explanation: 'Instead of hardcoding a number inside the brackets, we pass the integer variable "locator". Since locator is 2, this accesses participants[2], returning Charlie.'
      }
    ],
    visualLearning: [
      {
        type: 'array',
        title: 'Index Matching Diagram',
        description: 'Demonstrating how elements sit within index positions inside a 4-slot array.',
        elements: {
          items: ['100', '200', '300', '400'],
          highlightIdx: 3
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to access index [size] to read the final element of an array.',
        whyItHappens: 'Natural human counting starts at 1, leading beginners to assume index 5 corresponds to the 5th item.',
        howToAvoid: 'Always remember the "Size minus One" rule. The last valid index is always one less than the total count of items.',
        codeSnippet: {
          bad: `// ❌ WRONG: Crashing with ArrayIndexOutOfBoundsException
int[] steps = {500, 1200, 800}; // size is 3
int last = steps[3]; // Error! Index 3 does not exist!`,
          good: `// ✓ CORRECT: The last valid index is (length - 1), which is 2
int[] steps = {500, 1200, 800};
int last = steps[2]; // Returns 800 safely`
        }
      }
    ],
    practiceExercise: {
      title: 'Index Investigation',
      tasks: [
        'Consider the array "char[] grades = {\'A\', \'B\', \'C\', \'D\', \'F\'};". What index holds the character \'C\'?',
        'Write a code snippet to print the first and last elements of an array named "weights" without hardcoding the final index number directly.',
        'Predict what happens if you try to run the code: "int[] nums = {5}; System.out.println(nums[-1]);"'
      ]
    },
    summary: [
      'Array elements are reached directly using index notation "arrayName[index]".',
      'Java uses zero-based indexing; the first slot is always [0].',
      'The highest accessible index in any array is always "array.length - 1".'
    ]
  },

  'modifying-array-elements': {
    slug: 'modifying-array-elements',
    title: 'Modifying Array Elements',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Arrays are not read-only static files; they are active workspaces. You can modify, overwrite, and swap the elements stored inside any index at any time. 

We will demonstrate how to assign new values to specific slots, explain what happens in computer memory when an element is modified, and discuss how Java protects arrays from receiving incompatible data types.`,
    whyThisTopicMatters: {
      whyItExists: `Real-world data is dynamic. If a player scores points in a game, a product price updates on a storefront, or a student retakes an exam, your software must update those precise entries in memory without altering the rest of your dataset.`,
      problemSolved: `Modifying elements in-place lets you change individual array items instantly without rebuilding the entire container, preserving processing efficiency and keeping memory operations clean.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Modifying an array element uses the same assignment operator (\`=\`) you use with normal variables. You write the index path on the left and the new value on the right: \`arrayName[index] = newValue;\`.'
      },
      {
        type: 'paragraph',
        text: 'When this line executes, the computer immediately locates the contiguous memory block corresponding to that index, erases the previous value, and writes the new value directly in its place. The old value is permanently gone.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Array Mutation',
          definition: 'The process of changing the contents of an array slot after creation.',
          explanation: 'While the array size is immutable, the elements inside the array slots are mutable and can be updated endlessly.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Type Homogeneity',
          definition: 'The rule requiring all elements in an array to strictly match the declared type of the array container.',
          explanation: 'If you have an integer array, you cannot assign a string or boolean to any of its slots. This is enforced during compilation.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'You can use mathematical operators directly on array slots! For example, "scores[0] += 5;" will read the current value at index 0, add 5, and save the result back into index 0.'
      }
    ],
    codeExamples: [
      {
        title: 'Updating specific index values',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String[] cart = {"Apples", "Milk", "Bread"};
        
        System.out.println("Original second item: " + cart[1]);
        
        // Overwrite the milk index with juice
        cart[1] = "Juice";
        
        System.out.println("Modified second item: " + cart[1]);
    }
}`,
        explanation: 'By executing cart[1] = "Juice", the value at index 1 is modified. The original string "Milk" is erased from the array and replaced by "Juice".'
      },
      {
        title: 'Applying Math Directly to Array Slots',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int[] coordinates = {10, 20, 30};
        
        // Double the value at index 0
        coordinates[0] = coordinates[0] * 2;
        
        // Increment the value at index 2 by 1
        coordinates[2]++;
        
        System.out.println("Coords: " + coordinates[0] + ", " + coordinates[2]);
    }
}`,
        explanation: 'We can treat coordinate[0] like any normal int variable. Doubling it turns 10 into 20, and incrementing coordinate[2] updates 30 to 31.'
      }
    ],
    visualLearning: [
      {
        type: 'array',
        title: 'Array Mutation Visualizer',
        description: 'How the second slot changes from "Milk" to "Juice" inside the sequential layout.',
        elements: {
          items: ['"Apples"', '"Juice" (Updated)', '"Bread"'],
          highlightIdx: 1
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to insert a value of the wrong type into an array slot.',
        whyItHappens: 'Beginners sometimes forget that Java enforces strict type homogeneity across the entire array container.',
        howToAvoid: 'Ensure that any value you assign to an array slot matches the array\'s declared type exactly.',
        codeSnippet: {
          bad: `// ❌ WRONG: Trying to put a decimal inside an integer array
int[] highScores = {100, 200, 300};
highScores[1] = 95.5; // Compiler error!`,
          good: `// ✓ CORRECT: Keep values matching the container type
int[] highScores = {100, 200, 300};
highScores[1] = 95; // Casts perfectly as an integer`
        }
      }
    ],
    practiceExercise: {
      title: 'Values Modification Labs',
      tasks: [
        'Create an integer array "scores" containing values {50, 60, 70}. Write code to increase the score at index 1 by 15 points.',
        'Given "String[] colors = {\"Red\", \"Green\", \"Blue\"};", write the exact Java statement to swap the elements at index 0 and index 2 so that Red and Blue change places.',
        'Explain what happens if you execute "int[] numbers = new int[3]; numbers[0] = null;" and why the compiler rejects it.'
      ]
    },
    summary: [
      'Array elements are overwritten using standard assignment notation "array[index] = newValue;".',
      'Updating a slot replaces its previous value permanently in computer RAM.',
      'All modified values must strictly conform to the type of the array declared at setup.'
    ]
  },

  'array-length': {
    slug: 'array-length',
    title: 'Array Length',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '6 mins',
    difficulty: 'Beginner',
    introduction: `When writing clean, professional Java code, you should avoid hardcoding numbers. If you hardcode the size of an array inside your logic, your code will break the moment the array size changes. 

To prevent this, Java arrays include a built-in property called **length**. This property lets you inspect the exact capacity of an array dynamically.`,
    whyThisTopicMatters: {
      whyItExists: `Programs often receive datasets whose sizes are completely unknown in advance (like loading a list of files from a folder, or downloading user comments from a web server). Your program must adapt dynamically to whatever data volume it receives.`,
      problemSolved: `Using the .length property prevents hardcoding index limits. It allows you to build generic algorithms that work flawlessly whether processing 3 elements or 300,000 elements without manual adjustments.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To get the size of an array, you append \`.length\` directly to the name of your array: \`arrayName.length\`.'
      },
      {
        type: 'paragraph',
        text: 'This returns an integer representing the exact total number of elements the array is capable of storing. The length is set when the array is created on the heap and remains read-only for the entire lifecycle of the program.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: '.length Property',
          definition: 'A built-in, read-only integer field attached to every Java array representing its maximum capacity.',
          explanation: 'Because it is a property and not a method, you do not write parentheses after "length".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Off-By-One Boundary',
          definition: 'A classic logic mistake where a program accesses an index equivalent to the length, triggering a crash.',
          explanation: 'The highest index is always length - 1. Accessing index [length] causes an out-of-bounds boundary crash.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'The length represents the maximum space reserved in memory, not the number of slots you have actively filled! If you create "int[] nums = new int[100];" but only fill 2 slots, "nums.length" still returns 100.'
      }
    ],
    codeExamples: [
      {
        title: 'Determining Capacity Dynamically',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String[] team = {"Alice", "Bob", "Charlie", "David"};
        
        // Find the length of the array
        int totalPlayers = team.length;
        
        System.out.println("Total players: " + totalPlayers);
        
        // Safely access the last element using length - 1
        String lastPlayer = team[team.length - 1];
        System.out.println("Last player: " + lastPlayer);
    }
}`,
        explanation: 'The length returns 4. To get the last player, we use index team.length - 1 (which is 3), safely returning "David".'
      },
      {
        title: 'Comparing String.length() vs Array.length',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String name = "ByteAcademy";
        int[] measurements = new int[10];
        
        // Strings use length() with parentheses
        int stringLen = name.length();
        
        // Arrays use length WITHOUT parentheses
        int arrayLen = measurements.length;
        
        System.out.println("String: " + stringLen + ", Array: " + arrayLen);
    }
}`,
        explanation: 'This is a common interview and test point. Strings use a method call "length()", while arrays use a native direct variable field "length".'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Array Capacity vs. Index Limits',
        description: 'Analyzing how length measurements correspond to sequential index positions.',
        elements: {
          headers: ['Array Size (length)', 'First Valid Index', 'Last Valid Index', 'Index that Causes Crash'],
          rows: [
            ['1 Element', 'Index [0]', 'Index [0]', 'Index [1]'],
            ['5 Elements', 'Index [0]', 'Index [4]', 'Index [5]'],
            ['100 Elements', 'Index [0]', 'Index [99]', 'Index [100]'],
            ['N Elements', 'Index [0]', 'Index [N-1]', 'Index [N]']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Adding parentheses after length when working with an array.',
        whyItHappens: 'Beginners get used to calling methods like "System.out.println()" or "string.length()" and naturally add parentheses everywhere.',
        howToAvoid: 'Remember that on arrays, length is a raw variable property, not a method. Keep parentheses off.',
        codeSnippet: {
          bad: `// ❌ WRONG: Won't compile!
int[] values = {10, 20, 30};
int size = values.length(); // Error!`,
          good: `// ✓ CORRECT: No parentheses
int[] values = {10, 20, 30};
int size = values.length; // Compiles perfectly`
        }
      }
    ],
    practiceExercise: {
      title: 'Safe Boundaries Analysis',
      tasks: [
        'Write code to find and print the middle element of any array named "data" dynamically (assume the array has an odd length).',
        'If an array is initialized as "int[] stats = new int[45];", what is the return value of "stats.length" and what is the last valid index?',
        'Describe why the Java language designers chose to make the "length" property read-only (final) rather than allowing programmers to change it.'
      ]
    },
    summary: [
      'The "length" property returns the total reserved size of an array container.',
      'Unlike Strings which use "length()", arrays use ".length" with zero parentheses.',
      'The last valid element of any array sits at index location "arrayName.length - 1".'
    ]
  },

  'looping-through-arrays': {
    slug: 'looping-through-arrays',
    title: 'Looping Through Arrays',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Arrays and loops are the ultimate programming power couple. An array provides a sequential container for data, and a loop provides a sequential engine to process it. By pairing them together, you can process millions of data points in less than ten lines of code.

We will master traversing arrays using standard index-controlled loops and explore Java's elegant, simplified "Enhanced For Loop" (also called the For-Each loop).`,
    whyThisTopicMatters: {
      whyItExists: `If you wanted to calculate the average of 50 student grades manually, accessing grades[0], grades[1], grades[2]... all the way to grades[49] would be extremely tedious. A loop automates this process by using an index variable that counts upwards automatically.`,
      problemSolved: `Traversals eliminate repetitive individual statements. They allow you to write generic, scalable algorithms that process any dataset size in a single execution sweep.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The most common way to traverse an array is using a standard **for loop**. We initialize our loop control variable \`i\` to 0, run the loop as long as \`i < array.length\`, and increment \`i\` by 1 on each pass.'
      },
      {
        type: 'paragraph',
        text: 'Inside the loop body, we write \`arrayName[i]\`. Because \`i\` starts at 0 and increments to 1, 2, 3, etc., this single statement accesses each element of the array in perfect sequence!'
      },
      {
        type: 'paragraph',
        text: 'For cases where you only need to read elements and do not care about the index positions, Java offers the **Enhanced For Loop (For-Each)**. This syntax reads as: "For each element of type X inside my array, do this action."'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Array Traversal',
          definition: 'The process of visiting every single element inside an array sequentially from start to finish.',
          explanation: 'Usually done using loops to inspect, print, or mathematically process each element in order.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Enhanced For Loop',
          definition: 'A simplified loop structure designed specifically to iterate through arrays and collections without using index numbers.',
          explanation: 'Syntax: "for (DataType element : arrayName) { ... }". This is safer as it makes out-of-bounds crashes impossible.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'While the enhanced for loop is cleaner, it cannot modify the array slots! If you need to rewrite elements or iterate backwards, you must use a standard index-controlled for loop.'
      }
    ],
    codeExamples: [
      {
        title: 'Traversing with a Standard For Loop',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int[] scores = {90, 85, 72, 98};
        
        System.out.println("Printing grades sequentially:");
        for (int i = 0; i < scores.length; i++) {
            System.out.println("Student " + i + " score: " + scores[i]);
        }
    }
}`,
        explanation: 'The loop control variable "i" starts at 0 (the first index). Since i < 4, it prints scores[0]. Then i becomes 1, printing scores[1], and so on, terminating after scores[3].'
      },
      {
        title: 'Traversing with an Enhanced For Loop',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Orange"};
        
        System.out.println("Shopping List:");
        // For each String "item" inside the "fruits" array
        for (String item : fruits) {
            System.out.println("- " + item);
        }
    }
}`,
        explanation: 'This code requires no index variable and no boundary math. On each iteration, Java automatically pulls the next String out of "fruits" and assigns it to "item".'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Loop Traversal Flowchart',
        description: 'The step-by-step decision sequence of an index-controlled array traversal.',
        elements: {
          steps: [
            { id: '1', label: 'Set index i = 0', desc: 'Initialize lookup index to the first slot.', type: 'start' },
            { id: '2', label: 'Is i < array.length?', desc: 'Check if index is within valid array bounds.', type: 'decision' },
            { id: '3', label: 'Process array[i]', desc: 'Read or update element at current index.', type: 'action' },
            { id: '4', label: 'Increment i++', desc: 'Advance index to target the next sequential slot.', type: 'action' },
            { id: '5', label: 'End Loop', desc: 'Exit loop safely once boundaries are exceeded.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "<=" instead of "<" in the standard loop termination condition.',
        whyItHappens: 'Programmers naturally think "I want to loop up to the length" and write "<=" without considering the zero-based index shift.',
        howToAvoid: 'Always use "< array.length" inside your standard loops. If you use "<=", the loop will try to read index [length], causing an ArrayIndexOutOfBoundsException.',
        codeSnippet: {
          bad: `// ❌ WRONG: Throws boundary exception on the final pass
int[] values = {10, 20, 30};
for (int i = 0; i <= values.length; i++) {
    System.out.println(values[i]);
}`,
          good: `// ✓ CORRECT: Strict less-than comparison prevents crashes
int[] values = {10, 20, 30};
for (int i = 0; i < values.length; i++) {
    System.out.println(values[i]);
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Loop Traversal Challenges',
      tasks: [
        'Write a standard for loop to print all elements of an integer array "numbers" in reverse order (from the last element to the first).',
        'Write an enhanced for loop to count how many times the value 100 appears inside an integer array named "milestones".',
        'Write a loop that prints only the elements stored at odd indexes (index 1, 3, 5, etc.) of an array.'
      ]
    },
    summary: [
      'Standard "for" loops use an integer counter to step through array indexes sequentially.',
      'Enhanced "for" loops provide a clean, index-free syntax to read elements without boundary risks.',
      'Always use strictly "i < array.length" inside index loops to avoid boundary crash errors.'
    ]
  },

  'arrays-and-methods': {
    slug: 'arrays-and-methods',
    title: 'Arrays and Methods',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `As you build larger, clean software projects, you should avoid dumping all your array operations inside the standard \`main()\` method. You should break your code into organized helper methods. 

We will learn how to pass arrays as arguments into methods, discuss how arrays are passed by reference under the hood, and detail how to return newly built arrays from methods.`,
    whyThisTopicMatters: {
      whyItExists: `If you write custom algorithms to search arrays, sort values, or calculate averages directly in main(), your code becomes cluttered and un-reusable. Moving these operations into dedicated methods lets you reuse the same algorithms across different arrays in your system.`,
      problemSolved: `Encapsulating array logic inside methods keeps code DRY (Don't Repeat Yourself). It isolates processing steps, making programs significantly easier to test, read, and maintain.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Passing an array into a method is simple. In your method signature, you define the parameter with brackets (e.g., \`int[] arr\`). When calling the method, you pass the array variable name as an argument.'
      },
      {
        type: 'paragraph',
        text: 'In Java, **arrays are reference types**. When you pass an array to a method, you are not passing a copy of the array; you are passing a pointer to the original array in memory! This means any modifications made to the array elements inside the method will affect the original array outside the method.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Array Parameters',
          definition: 'A method signature configuration designed to accept an array structure as input.',
          explanation: 'Syntax: "public static void process(double[] values)". It accepts any double array regardless of its size.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Pass-by-Reference Behavior',
          definition: 'Passing a memory address pointer to a method rather than copying the actual data values.',
          explanation: 'Because Java passes array references, helper methods can directly mutate your original datasets in-place, saving memory.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Be extremely careful! Because arrays are reference types, if a method accidentally updates "arr[0] = 999;", the array in your main method changes permanently too. Always document whether a method intends to modify its input array.'
      }
    ],
    codeExamples: [
      {
        title: 'Passing an Array to a Method',
        language: 'java',
        code: `public class Main {
    // Helper method to calculate average grade
    public static double calculateAverage(int[] marks) {
        int sum = 0;
        for (int score : marks) {
            sum += score;
        }
        return (double) sum / marks.length;
    }

    public static void main(String[] args) {
        int[] physicsGrades = {85, 90, 78, 92};
        
        // Pass the array to the helper method
        double average = calculateAverage(physicsGrades);
        
        System.out.println("Class Average: " + average);
    }
}`,
        explanation: 'The method calculateAverage accepts an integer array "marks". In main, we pass physicsGrades. The method processes the array and returns the calculated decimal average.'
      },
      {
        title: 'Modifying Array Contents Inside Methods',
        language: 'java',
        code: `public class Main {
    // Doubles every value inside the passed array
    public static void doubleElements(int[] numbers) {
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] * 2;
        }
    }

    public static void main(String[] args) {
        int[] scores = {10, 20, 30};
        
        doubleElements(scores);
        
        // The original array in main has been modified!
        System.out.println("scores[0] is now: " + scores[0]); // Prints 20
    }
}`,
        explanation: 'Since arrays are passed by reference, doubleElements updates the memory locations directly. The array in main is permanently changed.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Array Utility Blueprint',
        description: 'A structural overview of a helper utility class containing array processing operations.',
        elements: {
          classes: [
            {
              name: 'ArrayUtils',
              fields: [],
              methods: ['calculateAverage(int[] arr) : double', 'doubleElements(int[] arr) : void', 'findMax(int[] arr) : int']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Failing to realize that modifying an array inside a method permanently alters the original array.',
        whyItHappens: 'Beginners are used to primitive values (like normal integers) which are passed by copy and do not change outside the method.',
        howToAvoid: 'If you want to modify an array inside a method without changing the original, you must create a new array inside the method, copy the elements over, and modify the copy instead.',
        codeSnippet: {
          bad: `// Modifies the caller's array directly (destructive method)
public static void cleanData(int[] data) {
    data[0] = 0; // Overwrites original data!
}`,
          good: `// Safe method: leaves original intact and returns a new copy
public static int[] cleanDataCopy(int[] data) {
    int[] copy = new int[data.length];
    for (int i = 0; i < data.length; i++) {
        copy[i] = data[i];
    }
    copy[0] = 0; // Only modifies the copy
    return copy;
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Method Implementation Exercises',
      tasks: [
        'Write a Java method named "printArray" that accepts a String array and prints each element on a new line.',
        'Write a method named "makeIncrementedCopy" that accepts an integer array, creates a brand-new array where each element is 1 greater than the original, and returns the new array without modifying the original.',
        'Explain why passing an array of 10,000 integers to a method is extremely fast and does not slow down computer performance.'
      ]
    },
    summary: [
      'Methods can accept arrays as parameters and return arrays as results.',
      'Arrays are passed by reference; modifications inside a method directly affect the original array in memory.',
      'Create a copy inside the helper method if you want to perform operations without altering the original array.'
    ]
  },

  'searching-and-basic-array-operations': {
    slug: 'searching-and-basic-array-operations',
    title: 'Searching and Basic Array Operations',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Now that you have combined arrays, loops, and methods, you can build foundational software algorithms. The most common tasks in software development involve scanning sequences of data to extract insights.

We will learn how to write basic array operations: calculating mathematical totals, finding maximum and minimum values, and implementing "Linear Search" to find specific values inside a collection.`,
    whyThisTopicMatters: {
      whyItExists: `Data is only valuable if you can search and analyze it. If a user searches for an item on an online store, or your system needs to identify the coldest day of the month from a temperature log, your program must scan through your data collections to find the answer.`,
      problemSolved: `These fundamental operations serve as the building blocks for all complex data processing. Mastering these core search and comparison loops prepares you to handle professional databases and search engines.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Finding an element in an array is called **Searching**. The most straightforward search algorithm is **Linear Search**. To perform a Linear Search, you start at the first index [0] and inspect each element one-by-one in order. If you find a match, you return its index location. If the loop finishes and no match is found, you return \`-1\`.'
      },
      {
        type: 'paragraph',
        text: 'Another common operation is finding the **Maximum or Minimum** value in an array. To do this, you initialize a placeholder variable (e.g., \`max\`) with the value of the very first element \`array[0]\`. You then loop through the remaining elements, comparing each one to your placeholder. If you find a larger value, you update your placeholder.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Linear Search',
          definition: 'A simple search algorithm that checks every single element in an array sequentially until a match is found or the end is reached.',
          explanation: 'It is highly reliable and works on both sorted and unsorted arrays.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Accumulator Variable',
          definition: 'A temporary variable used inside loops to accumulate running totals, counts, or values.',
          explanation: 'Example: "int sum = 0;" acts as an accumulator when summing up array elements.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'When finding maximums or minimums, never initialize your placeholder variable to 0! If your array contains only negative numbers (like {-15, -22, -8}), initializing max to 0 would incorrectly report that 0 is the maximum, even though 0 is not in the array. Always initialize your placeholder to "array[0]".'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing Linear Search',
        language: 'java',
        code: `public class Main {
    // Returns the index of the target, or -1 if not found
    public static int linearSearch(String[] list, String target) {
        for (int i = 0; i < list.length; i++) {
            if (list[i].equals(target)) {
                return i; // Match found, exit method instantly
            }
        }
        return -1; // Scanned entire array, no match found
    }

    public static void main(String[] args) {
        String[] guests = {"Alice", "Bob", "Charlie", "David"};
        
        int index = linearSearch(guests, "Charlie");
        System.out.println("Charlie is at index: " + index); // Prints 2
        
        int missing = linearSearch(guests, "Zelda");
        System.out.println("Zelda is at: " + missing); // Prints -1
    }
}`,
        explanation: 'The method linearSearch steps through the array sequentially. It compares each element to "target" using .equals(). When "Charlie" is reached at index 2, it returns 2 immediately.'
      },
      {
        title: 'Finding the Maximum Value',
        language: 'java',
        code: `public class Main {
    public static int findMaximum(int[] numbers) {
        // Safe starting point: assume the first element is the largest
        int max = numbers[0];
        
        // Compare with the rest of the elements
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i]; // Update placeholder
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] scores = {45, 99, 12, 88, 76};
        int highest = findMaximum(scores);
        System.out.println("Highest score: " + highest); // Prints 99
    }
}`,
        explanation: 'We initialize max to scores[0] (45). The loop starts at index 1. When it inspects index 1 (99), it sees 99 > 45, so max becomes 99. The remaining comparisons do not exceed 99, so 99 is returned.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Linear Search Algorithm Decision Path',
        description: 'How a program systematically searches through array indices to locate a target.',
        elements: {
          steps: [
            { id: '1', label: 'Start search loop', desc: 'Set lookup pointer to index 0.', type: 'start' },
            { id: '2', label: 'Is array[i] == target?', desc: 'Compare the current element to the target search term.', type: 'decision' },
            { id: '3', label: 'Return index i', desc: 'Match located! Terminate search and return the current index.', type: 'action' },
            { id: '4', label: 'Increment index i++', desc: 'Advance search pointer to the next index.', type: 'action' },
            { id: '5', label: 'Return -1', desc: 'Entire array scanned with zero matches. Return -1.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Returning -1 inside the loop body before scanning is fully complete.',
        whyItHappens: 'Beginners sometimes write an "else" branch inside their search loop that returns -1 if the very first element is not a match.',
        howToAvoid: 'Always place the "return -1" statement outside and below the loop block. The method must finish scanning the entire array before declaring that the item is missing.',
        codeSnippet: {
          bad: `// ❌ WRONG: Exits prematurely on the very first mismatch
public static int badSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        } else {
            return -1; // Destroys the loop on index 0!
        }
    }
}`,
          good: `// ✓ CORRECT: Only returns -1 after loop finishes completely
public static int goodSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1; // Safely placed below the loop
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Algorithm Implementation Challenges',
      tasks: [
        'Write a Java method named "findMinimum" that accepts an integer array and returns the smallest value in the collection.',
        'Write a method named "countOccurrences" that accepts an integer array and a target value, returning how many times that target appears inside the array.',
        'Implement a method named "calculateSum" that sums all elements inside a double array and returns the final total.'
      ]
    },
    summary: [
      'Linear Search scans array elements sequentially, returning the index on match, or -1 on failure.',
      'Initialize min/max placeholders to "array[0]" to ensure comparison safety across all datasets.',
      'Search loops must complete their entire traversal before returning a "not found" value.'
    ]
  },

  'two-dimensional-arrays': {
    slug: 'two-dimensional-arrays',
    title: 'Two-Dimensional Arrays',
    moduleSlug: 'arrays',
    moduleName: 'Arrays in Java',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `So far, you have worked with Single-Dimensional arrays, which represent simple lines of data. But the real world is not always flat. Often, information is best organized into grids, matrices, or tables containing both **Rows** and **Columns**.

To handle this, Java supports **Two-Dimensional (2D) Arrays**. A 2D array is simply an array of arrays! We will walk through declaring, instantiating, and traversing grids using nested loops.`,
    whyThisTopicMatters: {
      whyItExists: `Representing coordinate systems (like game boards for Tic-Tac-Toe, Chess, or Minesweeper), spreadsheets, pixel maps, or theatre seating charts is impossible with a simple flat list. You need a data structure that mirrors physical two-dimensional layouts.`,
      problemSolved: `2D arrays introduce rows and columns, letting you store and access data points using coordinate pairs (e.g., seating[row][column]). This allows your software to model complex, grid-like structures naturally and intuitively.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, a 2D array is declared using two sets of square brackets: \`int[][] matrix;\`. The first bracket set represents the **Rows**, and the second set represents the **Columns**.'
      },
      {
        type: 'paragraph',
        text: 'Think of a 2D array as a spreadsheet grid. When you allocate memory using \`new int[3][4]\`, Java creates a table structure containing 3 Rows and 4 Columns, yielding a total of 12 contiguous slots.'
      },
      {
        type: 'paragraph',
        text: 'To access or modify an element, you must specify both indexes: \`matrix[rowIndex][columnIndex]\`. Like single arrays, row and column indexing starts at 0.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: '2D Array',
          definition: 'An array whose elements are themselves arrays, representing a tabular grid structure of rows and columns.',
          explanation: 'Essentially an "array of arrays" where each row is an independent single-dimensional array.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Nested Loops',
          definition: 'A programming structure where a loop is written inside the body of another loop.',
          explanation: 'Crucial for 2D arrays: the outer loop steps through rows while the inner loop steps through columns.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'When traversing a 2D array, "matrix.length" returns the total number of ROWS! To find the number of COLUMNS inside a specific row, you check "matrix[row].length". Keep this distinction clear inside your loop parameters.'
      }
    ],
    codeExamples: [
      {
        title: 'Creating and Traversing a 2D Grid',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Declare and create a 3x3 grid (like Tic-Tac-Toe)
        char[][] board = {
            {'X', 'O', 'X'},
            {'O', 'X', 'O'},
            {'O', 'O', 'X'}
        };
        
        // Loop through rows
        for (int row = 0; row < board.length; row++) {
            // Loop through columns in current row
            for (int col = 0; col < board[row].length; col++) {
                System.out.print(board[row][col] + " ");
            }
            System.out.println(); // Print newline after completing row
        }
    }
}`,
        explanation: 'Outer loop runs row from 0 to 2. Inside row 0, inner loop runs col from 0 to 2, printing board[0][0], board[0][1], board[0][2]. Then row increments, repeating column passes.'
      },
      {
        title: 'Instantiating and Modifying Grids',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Create an empty seating chart: 4 rows, 5 columns
        boolean[][] seats = new boolean[4][5];
        
        // Book a seat at Row 1, Column 3
        seats[1][3] = true; 
        
        // Check if seat is booked
        if (seats[1][3]) {
            System.out.println("Seat [1][3] is successfully reserved!");
        }
    }
}`,
        explanation: 'We instantiate seats as a boolean grid initialized to "false". Setting seats[1][3] = true marks that specific coordinate as booked.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: '2D Array Seating Coordinate Matrix',
        description: 'Visualizing grid indices as rows (horizontal) and columns (vertical).',
        elements: {
          headers: ['Row Index', 'Column [0]', 'Column [1]', 'Column [2]', 'Column [3]'],
          rows: [
            ['Row [0]', 'seat[0][0]', 'seat[0][1]', 'seat[0][2]', 'seat[0][3]'],
            ['Row [1]', 'seat[1][0]', 'seat[1][1]', 'seat[1][2]', 'seat[1][3]'],
            ['Row [2]', 'seat[2][0]', 'seat[2][1]', 'seat[2][2]', 'seat[2][3]']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Reversing row and column indexes inside the square brackets.',
        whyItHappens: 'Standard coordinate notation is often (X, Y) where X is horizontal and Y is vertical. In programming, 2D arrays are referenced as [row][col], which corresponds to vertical row step first, then horizontal column step.',
        howToAvoid: 'Always use the standard order [row][column] when accessing cells in 2D arrays.',
        codeSnippet: {
          bad: `// ❌ WRONG: Trying to access coordinate as [col][row]
int[][] grid = new int[3][10]; // 3 rows, 10 columns
int value = grid[9][2]; // Out of bounds! Index 9 doesn't exist in rows!`,
          good: `// ✓ CORRECT: Always index as [row][column]
int[][] grid = new int[3][10];
int value = grid[2][9]; // Safe and correct!`
        }
      }
    ],
    practiceExercise: {
      title: 'Matrix Mastery Challenges',
      tasks: [
        'Write nested loops to calculate the sum of all elements inside a 2D integer array named "matrix".',
        'Write code to print only the "diagonal" elements of a 3x3 matrix (elements at [0][0], [1][1], and [2][2]).',
        'Describe the difference in return outputs between "grid.length" and "grid[0].length" for a 2D array instantiated as "double[][] grid = new double[5][8];".'
      ]
    },
    summary: [
      '2D arrays represent grids or tables containing both horizontal Rows and vertical Columns.',
      'A 2D array is structured as an "array of arrays" where "array.length" returns the row count.',
      'Nested loops are used to traverse 2D grids, utilizing an outer loop for rows and an inner loop for columns.'
    ]
  }
};
