import { DetailedLessonContent } from '../../types';

export const STRINGS_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-strings': {
    slug: 'introduction-to-strings',
    title: 'Introduction to Strings',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Up to this point, we have focused heavily on storing numbers—such as grades, scores, coordinates, and loops. But a computer application is rarely just numbers. Modern software must communicate with humans, and humans communicate using text.

In Java, any sequence of letters, numbers, symbols, or punctuation is represented as a **String**. A String is essentially a container for text. We will explore how text is represented in programs, why it differs from numbers, and how to write basic text variables.`,
    whyThisTopicMatters: {
      whyItExists: `Without text representation, computers could only show raw numerical values. Try to imagine a login page without usernames, a messaging app without words, or a navigation app without street names. We need a way to group characters together to represent human-readable messages.`,
      problemSolved: `Strings solve the challenge of managing multi-character text. Instead of handling individual letters one-by-one, a String lets you represent full words, sentences, or even entire books under a single variable name, ready to be processed by your code.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A String is a sequence of characters wrapped inside **double quotation marks** (e.g., \`"Hello"\`). This is different from a single character (char), which represents only one symbol and is wrapped in single quotes (e.g., \`\'A\'\`).'
      },
      {
        type: 'paragraph',
        text: 'It is important to understand that Java treats numbers and text completely differently. For example, \`123\` is an integer. You can add it, subtract it, and multiply it. However, \`"123"\` is a String. To the computer, it is not a mathematical value—it is just three characters grouped together, like the word "cat".'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'String Literal',
          definition: 'A sequence of characters enclosed in double quotes that is written directly into your code.',
          explanation: 'Example: "Lilongwe" is a string literal. The double quotes tell the compiler that this is text data, not a variable name.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'String Type',
          definition: 'The reference data type in Java used to hold sequences of characters.',
          explanation: 'Unlike primitives (int, double, char), the type "String" starts with a capital letter "S" because it is a Class in Java.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'Even an empty pair of double quotes "" is considered a valid String of length 0! It is often used as a placeholder before a user types in their actual text.'
      }
    ],
    codeExamples: [
      {
        title: 'Numbers vs. Strings',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int zipNumber = 10111;
        String zipString = "10111";
        
        System.out.println("Integer value: " + zipNumber);
        System.out.println("String representation: " + zipString);
        
        // You can do math on the integer:
        int nextZip = zipNumber + 1; // Returns 10112
        System.out.println("Next ZIP code: " + nextZip);
        
        // You cannot do mathematical addition on zipString!
    }
}`,
        explanation: 'The integer variable is stored as a binary number, allowing mathematical operations. The String variable is a sequence of five character codes ("1", "0", "1", "1", "1") and cannot be used for math.'
      },
      {
        title: 'Declaring Text Variables',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String city = "Lilongwe";
        String greeting = "Welcome to ByteAcademy!";
        
        System.out.println(city);
        System.out.println(greeting);
    }
}`,
        explanation: 'We declare two text variables using the String class. Double quotes enclose the text. Printing them sends the characters straight to the console.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Primitive Char vs. String Object',
        description: 'Analyzing the differences between single character storage and full text containers.',
        elements: {
          headers: ['Feature', 'char', 'String'],
          rows: [
            ['Capacity', 'Can store exactly ONE character.', 'Can store zero, one, or millions of characters.'],
            ['Quotation Marks', 'Uses single quotes (e.g., \'a\').', 'Uses double quotes (e.g., "a").'],
            ['Category', 'Primitive type (starts with lowercase: char).', 'Reference/Class type (starts with uppercase: String).'],
            ['Empty State', 'Cannot be empty. Must hold a character.', 'Can be completely empty (e.g., "").']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using single quotes to declare a String.',
        whyItHappens: 'Beginners sometimes confuse single and double quotes, especially if they have worked with other languages like Python or JavaScript where they are interchangeable.',
        howToAvoid: 'In Java, single quotes are strictly for individual characters (\'a\'). Double quotes are strictly for Strings ("hello"). Mixing them will cause a compilation crash.',
        codeSnippet: {
          bad: `// ❌ WRONG: Single quotes cannot hold multiple characters
String name = 'Zambia';`,
          good: `// ✓ CORRECT: Always use double quotes for strings
String name = "Zambia";`
        }
      }
    ],
    practiceExercise: {
      title: 'Text Fundamentals Check',
      tasks: [
        'Write a Java statement to declare a String variable named "favoriteSport" and initialize it with your favorite sport.',
        'If you have "String x = \"50\";" and "String y = \"20\";", what do you predict will happen if you attempt to add them? Discuss.',
        'Explain why "char symbol = "X";" will cause a compiler error, and write the corrected version.'
      ]
    },
    summary: [
      'A String stores a sequence of characters wrapped in double quotes.',
      'Unlike single-character chars (\'x\'), Strings are robust objects ("x").',
      'Java treats numbers inside text quotes (e.g., "45") as characters, meaning you cannot perform math operations on them.'
    ]
  },

  'creating-and-storing-strings': {
    slug: 'creating-and-storing-strings',
    title: 'Creating and Storing Strings',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `In Java, Strings are not primitives. When you declare a variable like \`int score = 100;\`, the number is saved directly in a simple stack slot. But when you create a String, you are creating an **Object**.

Understanding how Java sets up and references text objects in memory is a key milestone for writing professional, crash-free code. We will explore how to declare String variables and literals, and explain what happens under the hood.`,
    whyThisTopicMatters: {
      whyItExists: `Since programs use text continuously, storing thousands of repetitive strings in memory could slow down an application. Java was designed to manage text efficiently using a special memory structure called the String Constant Pool, which shares text instances in the background.`,
      problemSolved: `Treating Strings as objects allows Java to attach powerful built-in functions (methods) to every piece of text. It also allows the computer to save memory by reusing matching text blocks rather than creating duplicates.`
    },
    mainExplanation: [
      {
        type: 'info_card',
        title: 'Step-by-Step String Creation'
      },
      {
        type: 'paragraph',
        text: 'Creating a string involves three steps:'
      },
      {
        type: 'bullet_list',
        title: 'The three-step process for text variables',
        items: [
          'Declare: Write the type "String" (with a capital S) followed by a descriptive variable name.',
          'Assign: Use the assignment operator "=".',
          'Value: Provide a string literal wrapped in double quotes (e.g., "Hello") followed by a semicolon.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Because String is a class, you can technically also create strings using the standard object constructor syntax: \`String message = new String("Hello");\`. However, Java developers almost always prefer string literals because they are cleaner and run faster in memory.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'String Object',
          definition: 'An instance of the Java String class that represents a sequence of characters stored in memory.',
          explanation: 'Because it is an object, a String variable actually stores a memory pointer pointing to the characters on the Heap.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'String Constant Pool',
          definition: 'A special designated storage area inside the JVM Heap where matching string literals are stored to save memory.',
          explanation: 'If you create ten different variables containing the literal "Java", Java points all ten references to the exact same pool object!'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Strings in Java are immutable! This means once a String object is created in memory, its characters can never be changed. Any operation that appears to modify a string actually creates a brand-new string object.'
      }
    ],
    codeExamples: [
      {
        title: 'The Standard Literal Method',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Standard way: points to the String Constant Pool
        String course = "Java Programming";
        
        System.out.println("Course: " + course);
    }
}`,
        explanation: 'The JVM checks the Pool for "Java Programming". If missing, it creates it. It then assigns the reference address to the variable "course".'
      },
      {
        title: 'The "new" Keyword Method (Object Constructor)',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Explicitly forces a brand-new object on the heap
        String word1 = new String("Apple");
        String word2 = new String("Apple");
        
        System.out.println("Word 1: " + word1);
        System.out.println("Word 2: " + word2);
    }
}`,
        explanation: 'Even though both strings contain the same letters, using "new" forces Java to skip the pool and create two separate, duplicate objects at different memory addresses.'
      }
    ],
    visualLearning: [
      {
        type: 'memory',
        title: 'String Memory reference Layout',
        description: 'How literal pointer assignments compare to forced "new String" constructor heap allocations.',
        elements: {
          cells: [
            { address: '0x1010', name: 'str1 (Ref)', value: '0x88AA (Pool)', type: 'Points to Pool' },
            { address: '0x1018', name: 'str2 (Ref)', value: '0x88AA (Pool)', type: 'Points to same Pool address' },
            { address: '0x1020', name: 'str3 (Ref)', value: '0x99BB (Heap)', type: 'Points to separate Heap object' },
            { address: '0x88AA', name: 'Pool: "Java"', value: '"Java"', type: 'Shared pool literal value' },
            { address: '0x99BB', name: 'Heap: "Java"', value: '"Java"', type: 'Duplicate heap instance' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting that String variables default to "null" if declared without an initial value.',
        whyItHappens: 'Primitives like "int" automatically default to "0" inside classes, but because Strings are objects, they default to "null" (no memory address).',
        howToAvoid: 'Always initialize your string variables to an empty string "" if you do not have text for them yet. This prevents "NullPointerException" crashes later.',
        codeSnippet: {
          bad: `// ❌ DANGEROUS: Stays null, calling methods on this will crash!
String message;`,
          good: `// ✓ SAFE: Initialized to a clean empty string
String message = "";`
        }
      }
    ],
    practiceExercise: {
      title: 'Memory Mapping Analysis',
      tasks: [
        'Write Java code to declare three different string variables: "name", "username", and "email", initializing them with literal values.',
        'In your own words, explain why the String Constant Pool is helpful for server-side applications processing thousands of messages.',
        'Predict: if you declare "String s1 = \"Book\"; String s2 = s1;", do s1 and s2 point to the same memory slot or separate ones? Why?'
      ]
    },
    summary: [
      'Strings are objects in Java, meaning variable names are reference pointers to heap locations.',
      'String literals are saved inside the String Constant Pool to prevent duplicating identical text.',
      'Java strings are immutable; any text change operation produces an entirely new memory block.'
    ]
  },

  'string-concatenation': {
    slug: 'string-concatenation',
    title: 'String Concatenation',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `In real applications, you rarely display hardcoded text. Instead, you build text dynamically—such as putting a user's first and last name together, or displaying a custom greeting containing a player's score. 

Combining strings together is called **Concatenation**. In Java, this is done using the addition operator (\`+\`). We will learn how to stitch text blocks together and mix numbers into your textual outputs.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine if your banking application could only display generic text like "Your current balance is: " and was unable to attach your actual balance variable directly to the end of the sentence. Combining text templates with variables is critical for dynamic user interfaces.`,
      problemSolved: `Concatenation links variables and raw text literals together seamlessly. It allows you to construct fluid, informative sentences dynamically at runtime.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When used with integers, the \`+\` operator performs mathematical addition. But when at least **one side** of the \`+\` operator is a String, Java changes its behavior and performs **String Concatenation** instead, pasting the two values together side-by-side.'
      },
      {
        type: 'paragraph',
        text: 'If you combine a String and a primitive number (like an int or double), Java automatically converts the number into text behind the scenes before linking them together.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Concatenation',
          definition: 'The operation of joining two character strings end-to-end to create a single, unified string.',
          explanation: 'Example: "Java" + "11" results in the unified string "Java11".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Automatic Type Coercion',
          definition: 'The process where Java automatically translates non-string values (like ints) into strings during concatenation.',
          explanation: 'Allows statements like "Age: " + 25 to evaluate safely to "Age: 25".'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'You can also use the shorthand compound assignment operator "+=" to append text to the end of an existing string! For example, "message += \"!\"" adds an exclamation mark to your variable.'
      }
    ],
    codeExamples: [
      {
        title: 'Joining Strings with Spaces',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String firstName = "Maria";
        String lastName = "Banda";
        
        // Combine them! Don't forget the manual space string!
        String fullName = firstName + " " + lastName;
        
        System.out.println("Employee loaded: " + fullName);
    }
}`,
        explanation: 'If we wrote firstName + lastName, the output would be "MariaBanda". We insert a literal string containing a single space " " in the middle to keep the name readable.'
      },
      {
        title: 'Mixing Text and Numbers',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String player = "Tariq";
        int score = 450;
        
        // Java converts score to "450" automatically
        String report = "Player " + player + " has scored " + score + " points!";
        
        System.out.println(report);
    }
}`,
        explanation: 'Java processes this left-to-right. It combines "Player " and "Tariq", then adds " has scored ", then converts 450 to text and appends it, and finally links " points!".'
      }
    ],
    visualLearning: [
      {
        type: 'array',
        title: 'Concatenation Flow Diagram',
        description: 'How three separate string items are merged end-to-end into a single contiguous block.',
        elements: {
          items: ['"Maria"', '" "', '"Banda"'],
          highlightIdx: 0
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting mathematical operator precedence when combining math and text in the same print statement.',
        whyItHappens: 'Java reads from left to right. If a string is encountered first, everything following it is concatenated as text rather than added mathematically.',
        howToAvoid: 'Use parentheses around your mathematical calculations to force Java to evaluate the math before converting the result into text.',
        codeSnippet: {
          bad: `// ❌ WRONG: Prints "Score: 105" instead of "Score: 15"
System.out.println("Score: " + 10 + 5);`,
          good: `// ✓ CORRECT: Parentheses force addition first, printing "Score: 15"
System.out.println("Score: " + (10 + 5));`
        }
      }
    ],
    practiceExercise: {
      title: 'Concatenation Calculations',
      tasks: [
        'Write code to build a complete address string by concatenating variables: "street" (String), "houseNumber" (int), and "country" (String).',
        'Predict the exact console output of: "System.out.println(10 + 20 + \" equals \" + 10 + 20);". Explain your answer.',
        'Write a loop that appends a star symbol "*" to an initially empty string "String stars = \"\";" on each pass, running 5 times.'
      ]
    },
    summary: [
      'The "+" operator concatenates strings end-to-end when at least one side is a String.',
      'Java automatically converts numbers to text when they are added to a String.',
      'Use parentheses around arithmetic operations inside concatenation lines to avoid unexpected text-formatting bugs.'
    ]
  },

  'string-methods': {
    slug: 'string-methods',
    title: 'String Methods',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Since Strings are objects, they are more than just raw text data. Every String comes equipped with an extensive suite of built-in functions—called **Methods**—pre-written by the Java creators.

Instead of writing complex loops to count letters, remove spaces, or change capitalization, you can call these methods with a single line of code. We will introduce the most popular string methods used in daily software development.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine having to write a custom loop every time you wanted to count how many letters are in a password or convert a username to lowercase. It would result in tedious, duplicated code. Common utilities should be unified into accessible, built-in operations.`,
      problemSolved: `String methods provide standard, optimized operations for common tasks. They reduce development time, eliminate bugs, and keep your code exceptionally clean.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To call a method on a String, you write the name of your string variable, followed by a dot (\`.\`), the method name, and parentheses: \`variableName.methodName()\`. Let\'s look at five essential tools:'
      },
      {
        type: 'bullet_list',
        title: 'Essential built-in string methods',
        items: [
          'length(): Returns the total number of characters (including spaces and punctuation) inside the string as an integer.',
          'toUpperCase(): Returns a brand-new string with all letters converted to uppercase.',
          'toLowerCase(): Returns a brand-new string with all letters converted to lowercase.',
          'trim(): Returns a brand-new string with any leading (front) and trailing (back) spaces removed. (Extremely useful for cleaning user input!)',
          'isEmpty(): Returns "true" if the string has a length of 0, otherwise returns "false".'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method',
          definition: 'A block of code attached to an object class that performs a specific action when called.',
          explanation: 'In "name.toUpperCase()", "toUpperCase" is the method executing on the data inside the "name" object.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Immutability Verification',
          definition: 'The behavior where string methods return a newly created string rather than modifying the original variable directly.',
          explanation: 'Calling "text.trim()" does not change "text". You must assign the output to a variable to save it.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Unlike arrays where we check size using the read-only variable "length" (no parentheses), strings are methods, so you MUST include empty parentheses: "name.length()".'
      }
    ],
    codeExamples: [
      {
        title: 'Inspecting and Changing Case',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String title = "ByteAcademy Java";
        
        // Find the length
        int count = title.length();
        System.out.println("Total characters: " + count); // Prints 16
        
        // Convert cases
        String upper = title.toUpperCase();
        System.out.println("Uppercase: " + upper); // "BYTEACADEMY JAVA"
        
        // The original variable remains completely unchanged!
        System.out.println("Original title: " + title); // "ByteAcademy Java"
    }
}`,
        explanation: 'We fetch the length (16, which includes the space). We generate an uppercase version. Because strings are immutable, "title" itself stays unchanged.'
      },
      {
        title: 'Cleaning User Input with trim() and isEmpty()',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // User typed spaces around their input
        String usernameInput = "   alex_dev_99   ";
        
        // Clean off the spaces
        String cleanUsername = usernameInput.trim();
        
        System.out.println("Original: [" + usernameInput + "]");
        System.out.println("Cleaned: [" + cleanUsername + "]");
        
        // Check if clean username is empty
        if (cleanUsername.isEmpty()) {
            System.out.println("Input is invalid and empty!");
        } else {
            System.out.println("Input accepted.");
        }
    }
}`,
        explanation: 'The trim() method slices off the leading and trailing spaces, turning "   alex_dev_99   " into "alex_dev_99". It leaves middle spaces completely alone.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'String Method Transformations',
        description: 'Predicting output results from common string operations.',
        elements: {
          headers: ['Original String', 'Method Called', 'Returned Value', 'Memory Impact'],
          rows: [
            ['"Java Code"', 'length()', '9 (integer)', 'No new objects. Reads internal character count.'],
            ['"Java Code"', 'toUpperCase()', '"JAVA CODE"', 'Allocates a brand-new modified String object on Heap.'],
            ['"   Java   "', 'trim()', '"Java"', 'Allocates a brand-new String object with padding removed.'],
            ['""', 'isEmpty()', 'true (boolean)', 'No new objects. Evaluates if internal count is zero.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming a method like "toLowerCase()" modifies the original string variable directly.',
        whyItHappens: 'In other aspects of coding, calling a function can modify state in place. Beginners write "str.toLowerCase();" and expect "str" to be updated.',
        howToAvoid: 'Always remember that strings are immutable. You must assign the returned output back to your variable if you want to store the changes.',
        codeSnippet: {
          bad: `// ❌ WRONG: Text stays capitalized! Original variable is untouched.
String word = "HELLO";
word.toLowerCase(); 
System.out.println(word); // Prints "HELLO"`,
          good: `// ✓ CORRECT: Capture the returned string back into the variable
String word = "HELLO";
word = word.toLowerCase(); 
System.out.println(word); // Prints "hello"`
        }
      }
    ],
    practiceExercise: {
      title: 'Method Mastery Labs',
      tasks: [
        'Write a code snippet that takes a string "String phrase = \"   Learn Java   \";", trims it, converts it to uppercase, and prints the result.',
        'Given "String key = \"\";", predict the results of "key.isEmpty()" and "key.length()".',
        'Write code that checks if a user-entered password "String pass = \"   secret   \";" is longer than 5 characters after removing leading/trailing spaces.'
      ]
    },
    summary: [
      'Methods are dot-accessed functions that perform operations on your string contents.',
      'Unlike arrays, the string length calculation is a method call requiring parentheses: ".length()".',
      'String methods never alter the original memory block; they output newly created results.'
    ]
  },

  'accessing-characters-in-strings': {
    slug: 'accessing-characters-in-strings',
    title: 'Accessing Characters in Strings',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `A String is essentially an ordered collection of characters. Just like arrays, Java organizes characters inside a String using a sequential, zero-based **Index** system.

We will learn how to extract individual letters from any position inside a string using the \`charAt()\` method, look at how indexing mirrors arrays, and detail how to safely fetch boundary elements.`,
    whyThisTopicMatters: {
      whyItExists: `Sometimes you need to inspect individual letters instead of processing the entire block. For example, verifying if a username starts with a letter, checking if a phone number starts with a "+", or extracting initials from a name requires isolating specific characters.`,
      problemSolved: `Index tracking provides instant, precise access to any character inside your text, allowing you to parse, validate, and analyze text at a microscopic level.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Because strings are objects and encapsulate their internal data, you cannot use square brackets to access characters (like \`str[0]\` in some other languages). Instead, Java requires you to use the **charAt()** method: \`str.charAt(index)\`.'
      },
      {
        type: 'paragraph',
        text: 'The index parameter you pass to \`charAt()\` must be a non-negative integer. Just like arrays, indexing is **zero-based**:'
      },
      {
        type: 'bullet_list',
        title: 'Zero-based character locations',
        items: [
          'The 1st character is sitting at index "0".',
          'The 2nd character is sitting at index "1".',
          'The last character is sitting at index "length() - 1".'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'charAt(int index)',
          definition: 'A String method that returns the primitive "char" value located at the specified index position.',
          explanation: 'Example: "Java".charAt(2) returns the character \'v\'.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'StringIndexOutOfBoundsException',
          definition: 'The crash exception thrown by Java if you pass an index that is negative, or greater than/equal to the string length.',
          explanation: 'This is the textual equivalent of an array boundary exception.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'The returned value of charAt() is a primitive "char", not a "String"! This means it must be compared using single quotes (e.g., \'A\') and cannot use string methods.'
      }
    ],
    codeExamples: [
      {
        title: 'Retrieving Boundary Characters Safely',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String word = "Computer";
        
        // Retrieve first character
        char firstLetter = word.charAt(0);
        
        // Retrieve last character dynamically
        char lastLetter = word.charAt(word.length() - 1);
        
        System.out.println("First: " + firstLetter); // Prints 'C'
        System.out.println("Last: " + lastLetter);   // Prints 'r'
    }
}`,
        explanation: 'The length of "Computer" is 8. The first index is 0. The last index is 8 - 1 (7). Accessing index 7 returns \'r\' safely.'
      },
      {
        title: 'Looping Through String Characters',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String language = "Java";
        
        // Loop from 0 up to length() - 1
        for (int i = 0; i < language.length(); i++) {
            char letter = language.charAt(i);
            System.out.println("Index " + i + " holds: " + letter);
        }
    }
}`,
        explanation: 'The loop control variable "i" acts as a dynamic index, advancing from 0 to 3. Inside the loop, language.charAt(i) extracts \'J\', \'a\', \'v\', then \'a\' sequentially.'
      }
    ],
    visualLearning: [
      {
        type: 'array',
        title: 'String Index Layout',
        description: 'Mapping out indices for the word "Java" sequentially in memory.',
        elements: {
          items: ["'J' (Index 0)", "'a' (Index 1)", "'v' (Index 2)", "'a' (Index 3)"],
          highlightIdx: 0
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using square brackets to read characters from a String.',
        whyItHappens: 'In languages like JavaScript, Python, C++, and C#, text characters are accessed using array brackets (e.g., "word[0]"). Beginners bring this habit to Java.',
        howToAvoid: 'Remember that Java arrays use brackets "[]", but Java Strings are classes and must use the "charAt(index)" method instead.',
        codeSnippet: {
          bad: `// ❌ WRONG: Compiler error, brackets not allowed on Strings!
String country = "Kenya";
char letter = country[0];`,
          good: `// ✓ CORRECT: Always use the charAt method
String country = "Kenya";
char letter = country.charAt(0);`
        }
      }
    ],
    practiceExercise: {
      title: 'Char Extraction Lab',
      tasks: [
        'Write code to find and print the middle character of any string variable named "word" dynamically (assume the word has an odd length).',
        'Identify the mistake and predict the exact crash error: "String str = \"Hi\"; char c = str.charAt(2);"',
        'Write a loop that counts how many times the character \'e\' appears inside the string "String sentence = \"excellent\";".'
      ]
    },
    summary: [
      'Strings use zero-based indexing to organize characters sequentially.',
      'Extract characters using the ".charAt(index)" method, which returns a primitive char.',
      'The highest valid index is "string.length() - 1". Exceeding this triggers a boundary crash.'
    ]
  },

  'comparing-strings': {
    slug: 'comparing-strings',
    title: 'Comparing Strings',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Comparing values is one of the most common actions in software. If you are comparing two integers, writing \`x == y\` is perfect. But if you try to compare two Strings using \`==\`, you are introducing a silent, dangerous bug that will break your program.

We will master the correct way to compare strings in Java, explain why \`==\` behaves differently from \`.equals()\`, and learn how to perform case-insensitive comparisons.`,
    whyThisTopicMatters: {
      whyItExists: `When validating usernames, matching search keywords, or verifying passwords, accuracy is everything. Since Strings are objects, comparing them requires checking the characters inside the container, not just checking where the container is stored in RAM.`,
      problemSolved: `Using string comparison methods ensures your programs match textual content with mathematical precision, preventing security leaks or false mismatches in your logic.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, there is a massive difference between comparing **Primitives** and comparing **Objects**:'
      },
      {
        type: 'bullet_list',
        title: 'Reference Comparison vs. Content Comparison',
        items: [
          'The comparison operator "==" compares identity: it checks if two variables point to the exact same location in computer RAM.',
          'The method ".equals()" compares content: it steps inside the memory containers and checks if the sequences of characters are identical, letter-for-letter.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Because Java uses the String Constant Pool, \`==\` might sometimes return "true" for identical string literals. However, the moment one of those strings is constructed dynamically (like user input or from a file), \`==\` will return "false" even if the text matches exactly! Therefore, you must **never** use \`==\` to compare text.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'equals(String other)',
          definition: 'A String method that returns "true" if two strings have the exact same length and character sequence, case-sensitively.',
          explanation: '"Java".equals("java") returns "false" because of the capital "J".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'equalsIgnoreCase(String other)',
          definition: 'A String method that compares content while ignoring uppercase/lowercase differences.',
          explanation: '"Java".equalsIgnoreCase("java") returns "true" safely.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Never use "==" for String content validation! It is the number-one bug made by Java beginners.'
      }
    ],
    codeExamples: [
      {
        title: 'The "==" Trap vs. the ".equals()" Solution',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String s1 = "Banana";
        String s2 = new String("Banana"); // Forces separate heap object
        
        // Let's compare using == (Checks memory address)
        boolean sameMemory = (s1 == s2); 
        
        // Let's compare using .equals() (Checks letters)
        boolean sameLetters = s1.equals(s2);
        
        System.out.println("Compare with == : " + sameMemory);  // Prints FALSE!
        System.out.println("Compare with .equals(): " + sameLetters); // Prints TRUE!
    }
}`,
        explanation: 'Because s2 was created with the "new" keyword, it resides at a different RAM address. Therefore, s1 == s2 is false. However, both containers hold "Banana", so s1.equals(s2) is true.'
      },
      {
        title: 'Case-Insensitive Validations',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String savedStatus = "ACTIVE";
        String userInput = "active";
        
        if (userInput.equalsIgnoreCase(savedStatus)) {
            System.out.println("Status matches! User is active.");
        } else {
            System.out.println("Mismatched status.");
        }
    }
}`,
        explanation: 'By calling equalsIgnoreCase(), we ignore capitalizations. "ACTIVE" matches "active" perfectly, making our authentication systems user-friendly.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Operator "==" vs. Method ".equals()"',
        description: 'Analyzing how Java evaluates identity matching versus content matching.',
        elements: {
          headers: ['Comparison System', 'What it measures', 'Recommended Use Case', 'Result for identical literals', 'Result for dynamic heap objects'],
          rows: [
            ['Operator ==', 'Checks if both variables share the identical memory address.', 'Comparing primitives (int, double, boolean).', 'Often true (due to String Constant Pool sharing).', 'Strictly false (different heap memory addresses).'],
            ['Method .equals()', 'Checks if both objects contain identical characters sequential-wise.', 'Comparing all object data types, especially Strings.', 'Strictly true (character sequence matches).', 'Strictly true (character sequence matches).']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "==" to compare a variable against a string literal inside an if-statement.',
        whyItHappens: 'Programmers are highly accustomed to writing "if (count == 10)" and naturally replicate the pattern as "if (status == \"Admin\")".',
        howToAvoid: 'Convert every text comparison to use the dot-method format: "if (status.equals(\"Admin\"))".',
        codeSnippet: {
          bad: `// ❌ DANGEROUS: Might fail at runtime if status is loaded dynamically!
if (status == "Admin") {
    System.out.println("Access granted.");
}`,
          good: `// ✓ SECURE: Always compares character contents accurately
if (status.equals("Admin")) {
    System.out.println("Access granted.");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Comparison Debugging',
      tasks: [
        'Write an if-statement that checks if a variable "String command" is equal to "QUIT" or "EXIT", ignoring case differences.',
        'Predict the output of the following sequence: "String a = \"test\"; String b = \"TEST\"; System.out.println(a.equals(b.toLowerCase()));".',
        'In your own words, explain how using the "==" operator to validate a user password could let correct inputs fail.'
      ]
    },
    summary: [
      'The "==" operator compares memory addresses (identity), which often fail for strings created dynamically.',
      'The ".equals()" method compares the actual characters stored inside the strings (content).',
      'Use ".equalsIgnoreCase()" to match letters while ignoring capitalization differences.'
    ]
  },

  'searching-inside-strings': {
    slug: 'searching-inside-strings',
    title: 'Searching Inside Strings',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `You will often need to search within strings rather than just checking if they match exactly. For example, you might want to verify if an email contains an "@" symbol, check if a website URL starts with "https", or locate where a specific word starts in a document.

We will explore Java's built-in text search tools, introducing search queries like \`contains()\`, \`indexOf()\`, \`startsWith()\`, and \`endsWith()\`.`,
    whyThisTopicMatters: {
      whyItExists: `Writing custom search loops to scan strings character-by-character is tedious and slow. Having pre-written, highly optimized search methods allows you to inspect complex string patterns in a single line of code.`,
      problemSolved: `Search methods let you easily filter usernames, sanitize chat rooms, analyze file extensions, and parse text inputs efficiently.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Java provides four primary search methods that you can call on any String object:'
      },
      {
        type: 'bullet_list',
        title: 'String search operations',
        items: [
          'contains(CharSequence sequence): Returns "true" if the target sequence exists anywhere inside the string, otherwise returns "false".',
          'startsWith(String prefix): Returns "true" if the string starts with the specified prefix characters.',
          'endsWith(String suffix): Returns "true" if the string ends with the specified suffix characters. (Perfect for checking file types!)',
          'indexOf(String term): Scans the string and returns the integer index position where the search term FIRST starts. If the term is not found, it returns -1.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Substring',
          definition: 'A smaller sequence of contiguous characters residing inside a larger string.',
          explanation: 'In the string "JavaProgramming", "Programming" is a valid substring.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Negative Index Flag (-1)',
          definition: 'The standard return value used by search functions to signify that the searched element is completely missing.',
          explanation: 'If "name.indexOf(\"z\")" returns -1, it guarantees that \'z\' is not present in the name.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'All search methods are case-sensitive! Searching for "java" inside "Java Programming" will return false. If you want a case-insensitive search, convert your string to lowercase first (e.g., "str.toLowerCase().contains(...)").'
      }
    ],
    codeExamples: [
      {
        title: 'Verifying Inputs and File Extensions',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String email = "student@byteacademy.co";
        String filename = "lesson6_notes.pdf";
        
        // Check if email contains "@"
        boolean isValidEmail = email.contains("@");
        
        // Check file extension
        boolean isPdf = filename.endsWith(".pdf");
        
        System.out.println("Email contains @ : " + isValidEmail);
        System.out.println("Is PDF document: " + isPdf);
    }
}`,
        explanation: 'We verify inputs in one line. email.contains("@") scans the text and returns true. filename.endsWith(".pdf") checks if the tail matches ".pdf" exactly.'
      },
      {
        title: 'Locating Index Positions',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String sentence = "Learn Java with ByteAcademy";
        
        // Find where "Java" starts
        int location = sentence.indexOf("Java");
        System.out.println("Java starts at index: " + location); // Prints 6
        
        // Search for a word that doesn't exist
        int missing = sentence.indexOf("Python");
        System.out.println("Python locator: " + missing); // Prints -1
    }
}`,
        explanation: 'sentence.indexOf("Java") counts offsets: "L" (0), "e" (1), etc. "Java" starts at index 6. Since "Python" is not in the text, its lookup returns -1.'
      }
    ],
    visualLearning: [
      {
        type: 'array',
        title: 'Sub-string Lookup Index Map',
        description: 'Demonstrating how indexOf() locates the starting character offset of a substring.',
        elements: {
          items: ['L (0)', 'e (1)', 'a (2)', 'r (3)', 'n (4)', '  (5)', 'J (6)', 'a (7)', 'v (8)', 'a (9)'],
          highlightIdx: 6
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming "indexOf()" returns a boolean "true" or "false" value.',
        whyItHappens: 'In everyday conversation, "searching" sounds like a yes/no question. Beginners write "if (email.indexOf(\"@\"))" expecting a boolean.',
        howToAvoid: 'Remember that "indexOf()" returns an integer representing a location, not a boolean. To use it in a condition, compare it against -1: "if (email.indexOf(\"@\") != -1)".',
        codeSnippet: {
          bad: `// ❌ WRONG: Compiler error! Integers cannot be used directly in Java if-conditions.
if (email.indexOf("@")) {
    System.out.println("Found!");
}`,
          good: `// ✓ CORRECT: Compare index against -1 to verify presence
if (email.indexOf("@") != -1) {
    System.out.println("Found!");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Search System Implementation',
      tasks: [
        'Write an if-statement that checks if a string variable "url" starts with "https://" and ends with ".com".',
        'Write code to find the index of the first space character " " inside a string named "fullName".',
        'Create a search helper method that checks if a sentence contains the word "spam" in a case-insensitive way (hint: convert the sentence to lowercase first).'
      ]
    },
    summary: [
      'Use ".contains()" to check if a word or character exists anywhere inside a string.',
      'Use ".startsWith()" and ".endsWith()" to check prefix and suffix boundaries.',
      'The ".indexOf()" method returns the index where a term begins, or -1 if the term is completely missing.'
    ]
  },

  'changing-and-replacing-text': {
    slug: 'changing-and-replacing-text',
    title: 'Changing and Replacing Text',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Since Java strings are immutable, we can never change their internal characters. However, we can use built-in methods to generate newly modified copies of our text. This process is essential for cleaning data, censoring words, or extracting specific sections of text.

We will explore how to swap characters using \`replace()\` and learn how to extract specific parts of a string using the powerful \`substring()\` method.`,
    whyThisTopicMatters: {
      whyItExists: `When displaying preview snippets, masking credit card digits, or updating text in a file, you need tools to safely slice and re-arrange characters without corrupting your original data in memory.`,
      problemSolved: `Text alteration methods let you safely format text dynamically, ensuring your database reads clean records and your frontend displays safe, truncated text.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The two primary methods used to slice and dice text in Java are:'
      },
      {
        type: 'bullet_list',
        title: 'Core string alteration operations',
        items: [
          'replace(char target, char replacement): Scans the entire string and swaps all occurrences of a target character with a new one.',
          'substring(int startIndex): Cuts the string, returning a new copy starting from the startIndex all the way to the very end.',
          'substring(int startIndex, int endIndex): Cuts a specific window, starting at startIndex (inclusive) and stopping right before endIndex (exclusive).'
        ]
      },
      {
        type: 'paragraph',
        text: 'The "inclusive/exclusive" behavior of \`substring(start, end)\` is critical to understand. The character at the \`startIndex\` is included in your output, but the character at \`endIndex\` is left out! Think of it as: "Grab characters from index \`start\` up to, but not including, index \`end\`."'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Substring Window',
          definition: 'The specified range of characters sliced out of a parent string.',
          explanation: 'In "String sub = name.substring(0, 3);", the characters at indices 0, 1, and 2 are sliced, yielding a length of exactly (3 - 0 = 3).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'String Immutability',
          definition: 'The rigid Java memory rule stating that String contents cannot be altered once created.',
          explanation: 'Because of immutability, "replace" and "substring" never alter the parent variable; they always allocate a brand-new String object.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'When using "substring(start, end)", the length of the resulting string is always exactly equal to: (endIndex - startIndex). This is a helpful mathematical rule of thumb!'
      }
    ],
    codeExamples: [
      {
        title: 'Replacing Letters and Words',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String template = "I like Python. Python is great!";
        
        // Swap Python for Java
        String cleanTemplate = template.replace("Python", "Java");
        
        System.out.println("Original: " + template);
        System.out.println("Cleaned: " + cleanTemplate);
    }
}`,
        explanation: 'We replace all occurrences of "Python" with "Java". The replace() method scans the string, swaps the words, and returns a newly allocated String.'
      },
      {
        title: 'Slicing Text with Substring',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        String greeting = "Hello World";
        
        // Slice from index 0 up to (but not including) index 5
        String firstWord = greeting.substring(0, 5); 
        
        // Slice from index 6 to the end
        String secondWord = greeting.substring(6); 
        
        System.out.println("First Word: " + firstWord);   // Prints "Hello"
        System.out.println("Second Word: " + secondWord); // Prints "World"
    }
}`,
        explanation: 'greeting.substring(0, 5) extracts indices 0, 1, 2, 3, and 4 (yielding "Hello"). greeting.substring(6) slices from index 6 all the way to the end of the text (yielding "World").'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Substring Range Calculations',
        description: 'Analyzing output results from inclusive/exclusive indexing windows.',
        elements: {
          headers: ['Parent String', 'Method Call', 'Range Indexed', 'Resulting Output', 'Output Length'],
          rows: [
            ['"ByteAcademy"', 'substring(0, 4)', 'Indices 0, 1, 2, 3', '"Byte"', '4 (4 - 0)'],
            ['"ByteAcademy"', 'substring(4, 11)', 'Indices 4, 5, 6, 7, 8, 9, 10', '"Academy"', '7 (11 - 4)'],
            ['"Java"', 'substring(1, 3)', 'Indices 1, 2', '"av"', '2 (3 - 1)'],
            ['"Java"', 'substring(2)', 'Index 2 to end', '"va"', '2 (4 - 2)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming the second parameter in "substring(start, end)" is the count of characters to extract.',
        whyItHappens: 'In some programming languages (like PHP or basic SQL), substring structures take a start index and a length count instead of a stop index.',
        howToAvoid: 'Remember that in Java, the second parameter is strictly the stop index location. It is exclusive.',
        codeSnippet: {
          bad: `// ❌ WRONG: Trying to extract 3 letters starting from index 1
String code = "Java";
String result = code.substring(1, 3); // Expected "ava", but prints "av"!`,
          good: `// ✓ CORRECT: The end parameter is the stopping index (1 + 3 = 4)
String code = "Java";
String result = code.substring(1, 4); // Safely returns "ava"`
        }
      }
    ],
    practiceExercise: {
      title: 'Text Transformation Laboratory',
      tasks: [
        'Write code to extract the first three characters of a string "String input = \"Excellent\";" and append "..." to create a truncated preview.',
        'Given "String phone = \"265-997-064-278\";", write a statement using "replace()" to remove all hyphens so it reads as a solid block of numbers.',
        'Predict: what is the output of "String s = \"Java\"; System.out.println(s.substring(4));"? Explain.'
      ]
    },
    summary: [
      'The "replace" method swaps all matches of characters or words with a new sequence.',
      'The "substring" method cuts string windows, where the start index is inclusive and the end index is exclusive.',
      'Since strings are immutable, modification methods always return newly built text blocks.'
    ]
  },

  'strings-and-user-input': {
    slug: 'strings-and-user-input',
    title: 'Strings and User Input',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Up to this point, our code examples have been completely static—the program already knows the variable contents before it runs. To build interactive, real-world apps, your code must read dynamic inputs from real users.

We will learn how to read user text inputs from the terminal using Java\'s standard \`Scanner\` class, and explore the critical differences between reading individual words versus reading full sentences.`,
    whyThisTopicMatters: {
      whyItExists: `Applications need to listen to user commands. If a user logs in, searches for a product, or writes a message, your program must wait, capture their keystrokes, and load that text dynamically into a String variable to be processed.`,
      problemSolved: `The Scanner class establishes a listening channel between your console and your program, letting you build interactive terminal utilities and responsive menus easily.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To read inputs, we import and use the **Scanner** class from Java\'s utility package: \`import java.util.Scanner;\`.'
      },
      {
        type: 'paragraph',
        text: 'When reading text, Scanner offers two primary methods, and choosing the wrong one can cause major bugs:'
      },
      {
        type: 'bullet_list',
        title: 'Scanner string reading operations',
        items: [
          'next(): Reads characters until it hits a whitespace (like a space, tab, or newline). It only returns the first single word typed.',
          'nextLine(): Reads everything typed by the user up until they press the Enter key. It returns the entire line, including spaces.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Scanner Class',
          definition: 'A utility class in the java.util package used to parse primitive types and strings using regular expressions.',
          explanation: 'Usually initialized as "Scanner input = new Scanner(System.in);", where "System.in" represents console input.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Buffer Clearing',
          definition: 'The necessary step of consuming trailing newline characters left in memory after reading numbers before reading strings.',
          explanation: 'Failing to clear the scanner buffer will make your nextLine() statement skip entirely!'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Always close your Scanner objects using "scanner.close();" at the very end of your program to release system resources!'
      }
    ],
    codeExamples: [
      {
        title: 'Reading words vs. full sentences',
        language: 'java',
        code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter your first name (one word): ");
        String firstName = input.next(); // Reads until the first space
        
        // Consume the trailing newline
        input.nextLine(); 
        
        System.out.print("Enter a full quote: ");
        String quote = input.nextLine(); // Reads the whole line
        
        System.out.println("First name captured: " + firstName);
        System.out.println("Quote captured: " + quote);
        
        input.close(); // Close resource
    }
}`,
        explanation: 'If the user types "John Doe" into input.next(), only "John" is captured. The remaining " Doe" sits in memory. Calling nextLine() captures a whole sentence, spaces included.'
      },
      {
        title: 'The Buffer Skip Trap',
        language: 'java',
        code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter your age: ");
        int age = input.nextInt(); // Reads only the integer
        
        // CRITICAL: Consume the leftover enter key press!
        input.nextLine(); 
        
        System.out.print("Enter your full name: ");
        String name = input.nextLine(); // Would skip without buffer clear!
        
        System.out.println("Age: " + age + ", Name: " + name);
        input.close();
    }
}`,
        explanation: 'nextInt() reads the number but leaves the Enter key newline (\\n) in memory. When nextLine() runs, it immediately reads that leftover newline and terminates, skipping the user input completely! We insert a dummy input.nextLine() to absorb the newline.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Scanner Method Breakdown',
        description: 'Analyzing how different Scanner operations read characters from the console stream.',
        elements: {
          headers: ['Scanner Method', 'What it reads', 'When it stops reading', 'Expected Result for typing "Java Rules!"'],
          rows: [
            ['next()', 'Reads a single, isolated word.', 'On hitting any space or tab.', '"Java" (leaves " Rules!" in stream)'],
            ['nextLine()', 'Reads the entire text typed.', 'On hitting the Enter key (\\n).', '"Java Rules!" (consumes entire buffer)'],
            ['nextInt()', 'Reads a single integer.', 'On hitting a non-digit character.', 'Fails with InputMismatchException']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Failing to clear the Scanner buffer after calling nextInt() or nextDouble() before calling nextLine().',
        whyItHappens: 'Beginners expect nextLine() to always pause and wait for keyboard input, unaware that leftovers in the memory stream are consumed instantly.',
        howToAvoid: 'Whenever you read a number followed by a string, always insert an extra "input.nextLine();" to clear the leftover newline character out of the buffer.',
        codeSnippet: {
          bad: `// ❌ WRONG: nextLine() will skip entirely, name stays blank!
int score = input.nextInt();
String name = input.nextLine(); `,
          good: `// ✓ CORRECT: Dummy nextLine() clears the leftover enter key safely
int score = input.nextInt();
input.nextLine(); // Clear buffer
String name = input.nextLine(); `
        }
      }
    ],
    practiceExercise: {
      title: 'Dynamic Input Lab',
      tasks: [
        'Write a complete Java program that asks the user for a word, then prints its length and its first character.',
        'Write an interactive greeting program that prompts for user age, clears the buffer, reads their favorite color, and prints a customized greeting.',
        'Describe in your own words why reading text with "next()" is safer for username fields but dangerous for street addresses.'
      ]
    },
    summary: [
      'Use the Scanner class to read user key inputs dynamically in terminal environments.',
      'The "next()" method reads a single word, while "nextLine()" reads an entire text sentence.',
      'Always clear your memory stream using a dummy "nextLine()" when transition-matching from numbers to text inputs.'
    ]
  },

  'string-processing-mini-project': {
    slug: 'string-processing-mini-project',
    title: 'String Processing Mini Project',
    moduleSlug: 'strings',
    moduleName: 'Strings in Java',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `You have mastered all the fundamentals of Java Strings! You know how to create them, concatenate them, access individual characters, compare them safely, search within them, alter their content, and read them dynamically from users.

Now, we will put all these puzzle pieces together. We will build a complete, interactive **Text Analyzer** terminal application that processes human paragraphs and outputs detailed analytics.`,
    whyThisTopicMatters: {
      whyItExists: `Isolated syntax drills help you understand concepts, but true software development is about integration. Building a complete mini-project teaches you how to coordinate variables, methods, scanner inputs, strings, loops, and conditions to solve a real-world problem.`,
      problemSolved: `This mini-project deconstructs how search engines parse articles, how word processors calculate document metrics, and how validation engines analyze username structures.`
    },
    mainExplanation: [
      {
        type: 'info_card',
        title: 'Project Requirements: The Text Analyzer'
      },
      {
        type: 'paragraph',
        text: 'Our terminal application will prompt the user to input a sentence or paragraph. Once submitted, our program will analyze the text and output:'
      },
      {
        type: 'bullet_list',
        title: 'Text Analyzer Core Metrics',
        items: [
          'Total Character Count: including spaces.',
          'Clean Character Count: excluding leading and trailing spaces.',
          'Word Count: counting individual words accurately.',
          'Case Converter: printing full uppercase and lowercase versions.',
          'Vowel Counter: using a loop to count how many vowels (a, e, i, o, u) are present.',
          'Term Locator: searching if a specific keyword exists and returning its index position.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Let\'s write the complete Java code and deconstruct its logic step-by-step.'
      }
    ],
    codeExamples: [
      {
        title: 'Complete Text Analyzer Program',
        language: 'java',
        code: `import java.util.Scanner;

public class TextAnalyzer {
    
    // Helper method to count vowels in a text
    public static int countVowels(String text) {
        int count = 0;
        String clean = text.toLowerCase(); // Ignore capitalization
        
        for (int i = 0; i < clean.length(); i++) {
            char ch = clean.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.println("=== ByteAcademy Text Analyzer ===");
        System.out.print("Please enter a sentence or paragraph:\\n> ");
        String paragraph = input.nextLine();
        
        // 1. Total characters (with spaces)
        int rawLen = paragraph.length();
        
        // 2. Trimmed characters (cleaned spaces)
        String trimmed = paragraph.trim();
        int cleanLen = trimmed.length();
        
        // 3. Simple word counter (split by spaces)
        String[] words = trimmed.split(" ");
        int wordCount = paragraph.isEmpty() ? 0 : words.length;
        
        // 4. Case analysis
        String upperText = paragraph.toUpperCase();
        String lowerText = paragraph.toLowerCase();
        
        // 5. Vowels processing using helper method
        int vowelCount = countVowels(paragraph);
        
        // 6. Search functionality
        System.out.print("\\nEnter a keyword to search for: ");
        String searchWord = input.nextLine();
        int searchLocation = paragraph.indexOf(searchWord);
        
        // Print detailed report
        System.out.println("\\n=== ANALYSIS REPORT ===");
        System.out.println("Original text: \\"" + paragraph + "\\"");
        System.out.println("1. Total characters (with padding): " + rawLen);
        System.out.println("2. Total characters (trimmed): " + cleanLen);
        System.out.println("3. Approximate word count: " + wordCount);
        System.out.println("4. Uppercase format: " + upperText);
        System.out.println("5. Lowercase format: " + lowerText);
        System.out.println("6. Total vowels present: " + vowelCount);
        
        if (searchLocation != -1) {
            System.out.println("7. Keyword \\"" + searchWord + "\\" was located starting at index: " + searchLocation);
        } else {
            System.out.println("7. Keyword \\"" + searchWord + "\\" was not found in the text.");
        }
        
        System.out.println("=======================");
        input.close();
    }
}`,
        explanation: 'We declare a helper method "countVowels" using a loop to analyze characters individually. In main, we read input with nextLine(), run length, trim, and split calculations, run the helper, perform index searching, and output a clean summary report.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Text Analyzer Flowchart',
        description: 'How data progresses from raw terminal input to detailed structural metrics.',
        elements: {
          steps: [
            { id: '1', label: 'Prompt User', desc: 'Display invitation in terminal.', type: 'start' },
            { id: '2', label: 'Read nextLine()', desc: 'Read entire input into paragraph variable.', type: 'action' },
            { id: '3', label: 'Perform Metrics', desc: 'Process length(), trim(), and countVowels().', type: 'action' },
            { id: '4', label: 'Perform search', desc: 'Locate search term using indexOf().', type: 'decision' },
            { id: '5', label: 'Print report', desc: 'Display final analytical summaries to console.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Simple word count calculations crashing if the user submits an empty line.',
        whyItHappens: 'If paragraph is empty, splitting it still returns an array containing one empty element, leading wordCount to mistakenly output "1".',
        howToAvoid: 'Use a conditional check to verify if the text is empty before splitting, assigning a hardcoded word count of 0 if empty.',
        codeSnippet: {
          bad: `// ❌ WRONG: Returns 1 word for an empty string!
String[] words = "".split(" ");
int count = words.length; `,
          good: `// ✓ CORRECT: Safe check handles empty fields flawlessly
String text = "";
int count = text.isEmpty() ? 0 : text.split(" ").length; `
        }
      }
    ],
    practiceExercise: {
      title: 'Project Customization Lab',
      tasks: [
        'Modify the Text Analyzer program to count occurrences of the space character " " inside the user sentence, returning the exact blank space count.',
        'Add a feature that censors the word "Java" inside the paragraph, replacing it with "****" before printing the report.',
        'Write code to print the sentence completely in reverse character-by-character (e.g., "Hi" becomes "iH").'
      ]
    },
    summary: [
      'The Text Analyzer leverages loops, methods, variables, and string functions to process and analyze text blocks.',
      'Split arrays must be guarded against empty string inputs to prevent inaccurate metrics.',
      'Combining custom helper methods with standard string operations keeps large, data-heavy programs structured and organized.'
    ]
  }
};
