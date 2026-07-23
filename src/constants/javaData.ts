import { RoadmapStep, TopicItem } from '../types';

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    status: 'current',
    description: 'Set up your environment and write your very first line of Java code.',
    topics: ['What is Programming?', 'What is Java?', 'Installing JDK', 'First Program']
  },
  {
    id: 'java-fundamentals',
    title: 'Java Fundamentals',
    status: 'upcoming',
    description: 'Learn the basic building blocks: variables, data types, and simple operations.',
    topics: ['Variables', 'Data Types', 'Operators', 'Input/Output']
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    status: 'upcoming',
    description: 'Make decisions and repeat code blocks with conditionals and loops.',
    topics: ['If-Else Conditionals', 'Switch-Case', 'For Loops', 'While Loops']
  },
  {
    id: 'methods',
    title: 'Methods',
    status: 'upcoming',
    description: 'Break your code down into reusable, functional blocks.',
    topics: ['Method Declaration', 'Parameters & Arguments', 'Return Values', 'Method Overloading']
  },
  {
    id: 'arrays',
    title: 'Arrays',
    status: 'upcoming',
    description: 'Store and manage sequences of data efficiently.',
    topics: ['Single-Dimensional Arrays', 'Multi-Dimensional Arrays', 'For-Each Iteration']
  },
  {
    id: 'strings',
    title: 'Strings',
    status: 'upcoming',
    description: 'Master text manipulation, formatting, and memory concepts.',
    topics: ['String Pool', 'Immutability', 'String Methods', 'StringBuilder']
  },
  {
    id: 'oop',
    title: 'Object-Oriented Programming (OOP)',
    status: 'upcoming',
    description: 'Think in terms of objects, classes, inheritance, and interfaces.',
    topics: ['Classes & Objects', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Interfaces']
  },
  {
    id: 'collections',
    title: 'Collections',
    status: 'upcoming',
    description: 'Manage dynamic lists, key-value pairs, and sets of unique items.',
    topics: ['ArrayList', 'HashMap', 'HashSet', 'Generics']
  },
  {
    id: 'exception-handling',
    title: 'Exception Handling',
    status: 'upcoming',
    description: 'Build robust programs that fail gracefully and handle errors.',
    topics: ['Try-Catch Blocks', 'Checked vs Unchecked', 'Throw/Throws', 'Custom Exceptions']
  },
  {
    id: 'file-handling',
    title: 'File Handling',
    status: 'upcoming',
    description: 'Learn how to read from, write to, and manage files on the system.',
    topics: ['Working with Files', 'Reading Files', 'Writing Files', 'Handling File Exceptions', 'File Project']
  },
  {
    id: 'advanced-java',
    title: 'Java Generics',
    status: 'upcoming',
    description: 'Master reusable, type-safe data structures using Generics.',
    topics: ['Generic Classes', 'Generic Methods', 'Generics & Collections', 'Type Safety', 'Wildcards']
  },
  {
    id: 'mini-projects',
    title: 'Mini Projects',
    status: 'upcoming',
    description: 'Apply everything you have learned by building functional CLI projects.',
    topics: ['Student Management System', 'Text RPG Game', 'ATM Simulator']
  }
];

export const TOPIC_DETAILS: Record<string, TopicItem> = {
  'getting-started': {
    id: 'getting-started',
    title: 'Getting Started with Java',
    description: 'Learn the core concepts of programming, install the Java Development Kit (JDK), and run your first "Hello World" application.',
    details: `Java is a powerful, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It runs on the philosophy of **"Write Once, Run Anywhere" (WORA)**, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.

To begin writing Java, you need two main tools:
1. **JDK (Java Development Kit)**: The software development environment used to compile and run Java applications. It includes the JRE (Java Runtime Environment) and development tools (like the 'javac' compiler).
2. **IDE or Text Editor**: A program to write your code. We highly recommend **VS Code** or **IntelliJ IDEA** for beginners.

### Compiling and Running Java Programs
When you write a Java program, you save it with a \`.java\` extension. The process of executing it involves:
1. **Compilation**: The Java compiler (\`javac\`) translates your human-readable Java source code into bytecode (\`.class\` files). Bytecode is an intermediate representation.
2. **Execution**: The Java Virtual Machine (JVM) interprets and executes the bytecode on your specific operating system.`,
    codeExample: `/**
 * My first Java application.
 * Filename MUST match the public class name exactly: HelloWorld.java
 */
public class HelloWorld {
    // The main method is the entry point of any Java application
    public static void main(String[] args) {
        // Output text to the console
        System.out.println("Hello, World!");
        System.out.println("Welcome to ByteAcademy!");
    }
}`,
    codeExplanation: `Let's break down this code step-by-step:
- \`public class HelloWorld\`: Defines a class named HelloWorld. In Java, all code must reside inside a class. The filename must be \`HelloWorld.java\`.
- \`public static void main(String[] args)\`: This is the starting point (entry point) of your program. The JVM looks for this exact signature to start execution.
  - \`public\`: Accessible from anywhere.
  - \`static\`: Can be run without creating an object of the class first.
  - \`void\`: Does not return any value.
  - \`main\`: The name of the method.
  - \`String[] args\`: Command-line arguments.
- \`System.out.println(...)\`: Prints a line of text to the console.`,
    commonMistake: {
      code: `// Filename: Main.java
public class Hello { // ❌ Error! Class name does not match filename
    public static void main(string[] args) { // ❌ Error! 'string' must be uppercase 'String'
        system.out.println("No semicolons") // ❌ Error! 'system' must be capitalized, and needs a semicolon
    }
}`,
      explanation: 'Java is highly sensitive to case formatting and requires absolute consistency. The public class name must match the filename exactly. Also, primitive vs class casing matters: `String` is a class, so it must start with an uppercase letter, as must `System`. Every statement inside a method must end with a semicolon `;`.',
      fix: `// Filename: Hello.java
public class Hello {
    public static void main(String[] args) { // Fixed 'String'
        System.out.println("With semicolons"); // Fixed 'System' and added ';'
    }
}`
    },
    exercise: {
      question: 'Modify the "Hello World" application to print your name and a greeting message on two separate lines.',
      starterCode: `public class Greeting {
    public static void main(String[] args) {
        // Write your code here to print your name and greeting
    }
}`,
      solution: `public class Greeting {
    public static void main(String[] args) {
        System.out.println("Hello, my name is Alex!");
        System.out.println("I am mastering Java with ByteAcademy.");
    }
}`
    }
  },
  'java-fundamentals': {
    id: 'java-fundamentals',
    title: 'Java Fundamentals: Variables & Operators',
    description: 'Understand variables, master primitive and reference data types, and learn arithmetic, comparison, and logical operators.',
    details: `In Java, a variable is a container that holds data while a program is running. Since Java is a **strongly-typed** language, every variable must be declared with a specific data type.

### Primitive Data Types
Java has 8 built-in primitive data types designed for high performance:
- **Integers**: \`byte\` (1 byte), \`short\` (2 bytes), \`int\` (4 bytes), \`long\` (8 bytes). Use \`int\` by default.
- **Floating Points**: \`float\` (4 bytes), \`double\` (8 bytes). Use \`double\` by default for precise decimal numbers.
- **Characters**: \`char\` (2 bytes) - stores a single Unicode character, enclosed in single quotes (e.g., \`'A'\`).
- **Booleans**: \`boolean\` (1 bit) - stores either \`true\` or \`false\`.

### Reference Data Types
Reference types hold references (memory addresses) to objects. The most common reference type is \`String\`, used to store text. Reference types are initialized with the \`new\` keyword (or directly, in the case of Strings).`,
    codeExample: `public class VariablesDemo {
    public static void main(String[] args) {
        // Primitive variable declarations
        int age = 21;
        double price = 19.99;
        char grade = 'A';
        boolean isJavaFun = true;

        // Reference variable declaration
        String academyName = "ByteAcademy";

        // Simple arithmetic and combination
        double discountedPrice = price * 0.9; 

        System.out.println("Academy: " + academyName);
        System.out.println("Age: " + age);
        System.out.println("Discount Price: MWK " + discountedPrice);
        System.out.println("Is Java fun? " + isJavaFun);
    }
}`,
    codeExplanation: `- \`int age = 21;\` declares an integer variable named \`age\` and assigns it the value \`21\`.
- \`double price = 19.99;\` declares a double-precision floating-point number.
- \`String academyName = "ByteAcademy";\` stores text inside double quotes.
- \`"Academy: " + academyName\` uses the \`+\` operator for **String concatenation**, joining the text and the variable into a single String.`,
    commonMistake: {
      code: `int rating = 4.5; // ❌ Type mismatch error! Can't store double in int
char grade = "A"; // ❌ Type mismatch error! Double quotes denote a String, char needs single quotes
float temperature = 98.6; // ❌ Error! Floating-point literals are double by default`,
      explanation: 'You cannot assign a double decimal value directly to an integer without type casting because it leads to data loss. Also, floating-point numbers in Java are treated as double-precision (`double`) by default; to declare a float literal, you must append an `f` or `F` suffix (e.g., `98.6f`). Single quotes `\'` are reserved exclusively for single characters, while double quotes `"` are for Strings.',
      fix: `double rating = 4.5; // Fixed: used double for decimals
char grade = 'A'; // Fixed: single quotes for char
float temperature = 98.6f; // Fixed: appended 'f' suffix`
    },
    exercise: {
      question: 'Declare variables for a book title (String), number of pages (int), and price in USD (double). Calculate and print the average cost per page.',
      starterCode: `public class BookStats {
    public static void main(String[] args) {
        // Declare your book variables here
        
        // Calculate average cost per page
        
        // Print results
    }
}`,
      solution: `public class BookStats {
    public static void main(String[] args) {
        String title = "Java Concepts";
        int pages = 400;
        double price = 49.99;

        double costPerPage = price / pages;

        System.out.println("Book Title: " + title);
        System.out.println("Average Cost per Page: $" + costPerPage);
    }
}`
    }
  },
  'control-flow': {
    id: 'control-flow',
    title: 'Control Flow: Conditionals & Loops',
    description: 'Learn how programs make decisions and repeat processes using if-else logic, switch expressions, for loops, and while loops.',
    details: `Control flow statements change the order of program execution. By default, programs run sequentially (top-to-bottom). Conditionals and loops allow your program to react dynamically to different data inputs.

### Decision Making: If-Else & Switch
- **If-Else**: Evaluates a boolean expression. If true, runs one block; otherwise, moves to another.
- **Switch**: Evaluates a single value against multiple cases. Modern Java supports **Switch Expressions** which can yield values directly using the arrow operator (\`->\`).

### Repetition: Loops
- **For Loop**: Best when you know in advance how many times you want to iterate.
- **While Loop**: Iterates as long as a condition remains true. Best when the termination condition is dynamic.
- **Do-While Loop**: Executes the block once before evaluating the condition. Reassures that code runs at least once.`,
    codeExample: `public class ControlFlowDemo {
    public static void main(String[] args) {
        int score = 85;

        // If-Else Conditional
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }

        System.out.println("Counting to 3 with a For Loop:");
        // For loop
        for (int i = 1; i <= 3; i++) {
            System.out.println("Count: " + i);
        }

        System.out.println("Countdown with a While Loop:");
        // While loop
        int count = 3;
        while (count > 0) {
            System.out.println("Timer: " + count);
            count--; // Decrement to avoid infinite loop
        }
    }
}`,
    codeExplanation: `- \`score >= 80\` is a boolean comparison returning true. Since \`score\` is 85, the second block executes.
- \`for (int i = 1; i <= 3; i++)\` initializes \`i = 1\`, checks if \`i <= 3\`, executes the code, and increments \`i\` by 1 after each loop.
- \`count--\` decrements \`count\` by 1, which eventually causes the \`count > 0\` check to fail, terminating the loop and preventing a crash.`,
    commonMistake: {
      code: `// Infinite loop danger
int x = 5;
while (x > 0) {
    System.out.println("x is " + x);
    // ❌ Error! Forgot to decrement/change x. This loop runs forever!
}

// Assignment inside if
int value = 10;
if (value = 20) { // ❌ Error! Using '=' (assignment) instead of '==' (comparison)
    System.out.println("Equal");
}`,
      explanation: 'An infinite loop occurs when a loop condition never becomes false, exhausting CPU resources. Always ensure the variable in your condition is updated. Also, in conditionals, make sure you use `==` for testing equality. A single `=` is an assignment operator and will cause a compilation error inside an `if` expression for numeric types.',
      fix: `int x = 5;
while (x > 0) {
    System.out.println("x is " + x);
    x--; // Fixed: added decrement
}

int value = 10;
if (value == 20) { // Fixed: used comparison operator
    System.out.println("Equal");
}`
    },
    exercise: {
      question: 'Write a program that uses a loop to print all even numbers between 1 and 20.',
      starterCode: `public class EvenNumbers {
    public static void main(String[] args) {
        // Write a for loop to print even numbers from 1 to 20
    }
}`,
      solution: `public class EvenNumbers {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }
}`
    }
  },
  'methods': {
    id: 'methods',
    title: 'Methods: Reusable Logic',
    description: 'Learn how to define methods, pass arguments, return values, and understand the core concept of method overloading.',
    details: `Methods are blocks of code that perform specific tasks and only run when called. They allow you to write clean, modular, dry (Don't Repeat Yourself) code.

### Anatomy of a Java Method
A method definition consists of:
- **Modifier**: Defines access level (e.g., \`public\`, \`private\`, \`static\`).
- **Return Type**: The data type of the value returned by the method. Use \`void\` if no value is returned.
- **Method Name**: Follows \`camelCase\` convention.
- **Parameter List**: Input variables enclosed in parentheses. If empty, keep parentheses blank.
- **Method Body**: The block of statements executing the task.

### Method Overloading
In Java, multiple methods can have the **same name** as long as their parameter lists are different (either in number of parameters or parameter types). This allows you to perform similar operations with different inputs without inventing new method names.`,
    codeExample: `public class MethodsDemo {
    
    // Method with a return value and parameters
    public static int add(int num1, int num2) {
        return num1 + num2;
    }

    // Overloaded method supporting double parameters
    public static double add(double num1, double num2) {
        return num1 + num2;
    }

    // Method with void return type (prints directly)
    public static void greetUser(String name) {
        System.out.println("Hello, " + name + "! Welcome back.");
    }

    public static void main(String[] args) {
        int integerSum = add(10, 25);
        double decimalSum = add(5.5, 4.2);

        greetUser("Chikondi");
        System.out.println("Sum of ints: " + integerSum);
        System.out.println("Sum of doubles: " + decimalSum);
    }
}`,
    codeExplanation: `- \`public static int add(int num1, int num2)\` declares a static method returning an \`int\`. It is called via \`add(10, 25)\`.
- \`public static double add(double num1, double num2)\` is an overloaded version that handles floating-point numbers. Java automatically selects the correct method signature at compile-time based on the arguments supplied.
- \`greetUser\` returns nothing (\`void\`) and takes a single String parameter to display a personalized greeting.`,
    commonMistake: {
      code: `public class BadMethod {
    public static int square(int x) {
        int result = x * x;
        // ❌ Error! Missing return statement. This method promised to return an 'int'!
    }

    public static void printSum(int a, int b) {
        return a + b; // ❌ Error! Cannot return a value from a 'void' method
    }
}`,
      explanation: 'A method declaring a return type other than `void` MUST contain a `return` statement that yields a matching data type on every possible execution path. Conversely, a `void` method cannot return any value. If you want to return a value, adjust the return type accordingly.',
      fix: `public class FixedMethod {
    public static int square(int x) {
        return x * x; // Fixed: added return statement
    }

    public static void printSum(int a, int b) {
        System.out.println("Sum: " + (a + b)); // Fixed: print value instead of returning it
    }
}`
    },
    exercise: {
      question: 'Create a method named "isEven" that takes an integer parameter and returns a boolean (true if the number is even, false if odd). Test it in your main method.',
      starterCode: `public class TestEven {
    // Define the isEven method here

    public static void main(String[] args) {
        // Call isEven and print the result for numbers 7 and 12
    }
}`,
      solution: `public class TestEven {
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println("Is 7 even? " + isEven(7));
        System.out.println("Is 12 even? " + isEven(12));
    }
}`
    }
  },
  'arrays': {
    id: 'arrays',
    title: 'Arrays: Storing Sequences',
    description: 'Learn how to declare, initialize, and manipulate static arrays. Master the compact For-Each loop for simple iteration.',
    details: `An array is a container object that holds a fixed number of values of a single data type. The length of an array is established when the array is created and cannot be altered dynamically.

### Declaring & Initializing Arrays
You can declare an array by specifying the type followed by brackets \`[]\`. There are two main ways to initialize an array:
1. **Specifying the size**: \`int[] numbers = new int[5];\` (allocates space for 5 integers, defaults to zero values).
2. **Providing initial values**: \`int[] scores = {90, 85, 78, 92, 88};\`.

### Accessing Elements & Indexes
Java arrays are **0-indexed**, meaning the first element is at index \`0\` and the last element is at index \`length - 1\`. Attempting to access indexes outside this range will throw an \`ArrayIndexOutOfBoundsException\`.`,
    codeExample: `public class ArraysDemo {
    public static void main(String[] args) {
        // Declaration and initialization
        String[] languages = {"Java", "Python", "C++", "JavaScript"};

        System.out.println("Total languages: " + languages.length);
        System.out.println("First language: " + languages[0]);

        // Modifying an element
        languages[1] = "Kotlin";

        System.out.println("Iterating with standard For Loop:");
        for (int i = 0; i < languages.length; i++) {
            System.out.println("Index " + i + ": " + languages[i]);
        }

        System.out.println("Iterating with For-Each Loop:");
        // The For-Each loop is cleaner when you don't need index access
        for (String lang : languages) {
            System.out.println("Language: " + lang);
        }
    }
}`,
    codeExplanation: `- \`languages.length\` returns the total number of items inside the array (4).
- \`languages[1] = "Kotlin"\` overwrites "Python" with "Kotlin" at index 1.
- \`for (String lang : languages)\` iterates through every item inside the array. On each cycle, it copies the current string value into the local variable \`lang\`.`,
    commonMistake: {
      code: `int[] scores = {95, 88, 72};
System.out.println(scores[3]); // ❌ Runtime crash! ArrayIndexOutOfBoundsException

int[] numbers = new int[5];
numbers = {1, 2, 3, 4, 5}; // ❌ Compilation error! Bracket initialization only allowed at declaration`,
      explanation: 'Array indexes are zero-based. For an array with a length of 3 (scores), the valid indexes are 0, 1, and 2. Index 3 is out of bounds. Also, shortcut array assignments using curly braces `{}` can only be done during the declaration line.',
      fix: `int[] scores = {95, 88, 72};
System.out.println(scores[2]); // Fixed: Access last index safely

int[] numbers = new int[]{1, 2, 3, 4, 5}; // Fixed: declared and populated with full keyword expression`
    },
    exercise: {
      question: 'Write a program that takes an array of integers and calculates the average value of its elements.',
      starterCode: `public class ArrayAverage {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        // Calculate the sum, then divide by numbers.length to get the average
        
    }
}`,
      solution: `public class ArrayAverage {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        double sum = 0;

        for (int num : numbers) {
            sum += num;
        }

        double average = sum / numbers.length;
        System.out.println("Average: " + average);
    }
}`
    }
  },
  'strings': {
    id: 'strings',
    title: 'Strings in Java: The Pool & Immutability',
    description: 'Master String immutability, discover how the String Pool works, and learn when to use StringBuilder for efficient performance.',
    details: `In Java, Strings are objects that represent sequences of characters. Unlike other programming languages, Java treats Strings in a highly unique way to save memory and improve performance.

### String Immutability
Strings in Java are **immutable**, meaning once a String object is created in memory, its contents **cannot be altered**.
When you modify a String (e.g., adding text), Java does not change the existing object. Instead, it leaves the old string in memory, creates an entirely new String object, and updates the reference to point to the new location.

### The String Pool
To optimize memory, the JVM maintains a special area in the heap memory called the **String Pool**. When you declare a string literal, the JVM checks if that exact sequence of characters already exists in the pool.
- If it does, your reference points directly to the existing instance.
- If not, a new instance is created and placed inside the pool.

Using \`new String("text")\` forces Java to bypass the pool and create a new object in the heap memory, which wastes memory.`,
    codeExample: `public class StringsDemo {
    public static void main(String[] args) {
        // Pool assignments (Reference pointing to same object)
        String s1 = "Java";
        String s2 = "Java";
        
        // Bypassing the pool (Heap allocation)
        String s3 = new String("Java");

        System.out.println("s1 == s2: " + (s1 == s2)); // true (Same object reference)
        System.out.println("s1 == s3: " + (s1 == s3)); // false (Different references)
        System.out.println("s1.equals(s3): " + s1.equals(s3)); // true (Compares contents)

        // Using StringBuilder for high-performance concatenation
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 3; i++) {
            builder.append("Byte");
        }
        String finalResult = builder.toString();
        System.out.println("Concatenated result: " + finalResult);
    }
}`,
    codeExplanation: `- \`s1 == s2\` evaluates to \`true\` because both literals use the String Pool, so they share the exact same memory address.
- \`s1 == s3\` is \`false\` because \`s3\` is forced onto the heap via the \`new\` keyword, creating a new address.
- \`s1.equals(s3)\` is \`true\` because the \`equals()\` method compares the actual textual content inside the objects, which is identical. Always use \`.equals()\` for string comparison.
- \`StringBuilder\` performs concatenation without creating intermediate objects in memory, which is essential inside loops to prevent memory bloat.`,
    commonMistake: {
      code: `String name1 = "Chikondi";
String name2 = new String("Chikondi");

if (name1 == name2) { // ❌ Error! Compares memory addresses, NOT content.
    System.out.println("Names match!");
}

String original = "Hello";
original.concat(" World"); // ❌ Error! Trying to append text directly. Original string is unchanged!
System.out.println(original); // Prints "Hello"`,
      explanation: 'Using `==` on reference objects compares whether they point to the exact same memory address. Since `name2` is on the heap, this evaluates to false. Also, because strings are immutable, methods like `concat` or `toUpperCase` do not modify the original string; they return a brand new string which you must capture.',
      fix: `String name1 = "Chikondi";
String name2 = new String("Chikondi");

if (name1.equals(name2)) { // Fixed: used .equals() for content matching
    System.out.println("Names match!");
}

String original = "Hello";
original = original.concat(" World"); // Fixed: captured the returned brand new String reference
System.out.println(original); // Prints "Hello World"`
    },
    exercise: {
      question: 'Write a program that takes a sentence, counts the total number of characters, and converts the text into all-uppercase letters.',
      starterCode: `public class TextStats {
    public static void main(String[] args) {
        String sentence = "Learning Java with ByteAcademy is rewarding!";
        // Print character count and uppercase version
    }
}`,
      solution: `public class TextStats {
    public static void main(String[] args) {
        String sentence = "Learning Java with ByteAcademy is rewarding!";

        int len = sentence.length();
        String upper = sentence.toUpperCase();

        System.out.println("Length: " + len + " characters");
        System.out.println("Uppercase: " + upper);
    }
}`
    }
  },
  'oop': {
    id: 'oop',
    title: 'Object-Oriented Programming (OOP)',
    description: 'Master classes, objects, and the 4 core pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
    details: `Java is a pure Object-Oriented Programming language. Everything in Java is built around classes and objects, mimicking real-world relationships.

### The Four Pillars of OOP
1. **Encapsulation**: Hiding internal data from direct access and providing safety gates through getter and setter methods. Variables should be marked as \`private\`.
2. **Inheritance**: Allowing a class (child class) to inherit variables and methods from another class (parent class) using the \`extends\` keyword, promoting reuse.
3. **Polymorphism**: The ability of an object to take on many forms. This is achieved via **Method Overriding** (redefining parent methods inside child classes).
4. **Abstraction**: Hiding complex implementation details and showing only the essential structure to the user. This is achieved using \`abstract\` classes or \`interfaces\`.`,
    codeExample: `// Parent Class
class Animal {
    private String name; // Encapsulation: private variable

    public Animal(String name) {
        this.name = name;
    }

    // Getter
    public String getName() {
        return name;
    }

    public void makeSound() {
        System.out.println("Some general animal sound");
    }
}

// Child Class using Inheritance
class Dog extends Animal {
    public Dog(String name) {
        super(name); // Call parent constructor
    }

    // Polymorphism: Method Overriding
    @Override
    public void makeSound() {
        System.out.println(getName() + " barks: Woof! Woof!");
    }
}

public class OOPDemo {
    public static void main(String[] args) {
        Animal myDog = new Dog("Buddy"); // Polymorphic reference
        myDog.makeSound(); // Invokes Dog's overridden method at runtime
    }
}`,
    codeExplanation: `- \`private String name;\` cannot be modified directly by external code, protecting the data integrity of the Animal class (Encapsulation).
- \`class Dog extends Animal\` inherits the variables and behaviors from Animal (Inheritance).
- \`super(name)\` invokes the parent constructor to correctly initialize variables.
- \`Animal myDog = new Dog("Buddy");\` declares a variable of parent type Animal but instantiates it as Dog. When \`makeSound()\` is called, the JVM identifies the actual object type (Dog) and runs Dog's version of the method. This is **dynamic polymorphism** (runtime polymorphism).`,
    commonMistake: {
      code: `class User {
    public String username; // ❌ Violation of Encapsulation! Anyone can edit this directly
}

class Cat extends Animal {
    public Cat(String name) {
        // ❌ Error! Forgot to call super() constructor when parent lacks default constructor
    }
}`,
      explanation: 'Keeping class variables public allows any external class to bypass boundaries and corrupt your class internal state (e.g., setting age to -5). Variables should always be marked as private and configured with validated getters/setters. Also, if a parent class lacks a default empty constructor, child class constructors must call `super(...)` on the first line.',
      fix: `class User {
    private String username; // Fixed: encapsulated with private variable

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        if (username != null && !username.trim().isEmpty()) {
            this.username = username;
        }
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name); // Fixed: invoked parent constructor correctly
    }
}`
    },
    exercise: {
      question: 'Create a child class of Animal named "Cat" that overrides the "makeSound()" method to print that the cat meows.',
      starterCode: `// Assume Animal class from example is accessible
class Cat extends Animal {
    // Write constructor and override makeSound
}`,
      solution: `class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " meows: Meow! Meow!");
    }
}`
    }
  },
  'collections': {
    id: 'collections',
    title: 'Collections & Dynamic Lists',
    description: 'Learn how to store and manage dynamic data with ArrayList, HashMap, and HashSet. Discover when and how to utilize each.',
    details: `While standard Java arrays are incredibly fast, their static size can make them highly restrictive when handling dynamic data. The **Java Collections Framework** provides clean, built-in classes to handle resizable structures, key-value maps, and unique items.

### The Core Three Collections
1. **List (ArrayList)**: An ordered collection that allows duplicates. Resizes automatically as you add items.
2. **Map (HashMap)**: A collection of key-value pairs. Each key is mapped to exactly one value. Keys must be unique, values can repeat.
3. **Set (HashSet)**: An unordered collection that contains **no duplicate elements**. Excellent for checking membership.`,
    codeExample: `import java.util.ArrayList;
import java.util.HashMap;

public class CollectionsDemo {
    public static void main(String[] args) {
        System.out.println("--- ArrayList Demo (Dynamic List) ---");
        // Creating an ArrayList of Strings
        ArrayList<String> students = new ArrayList<>();
        students.add("Alinafe");
        students.add("Brave");
        students.add("Chikondi");

        // Accessing and iterating
        System.out.println("Student count: " + students.size());
        for (String student : students) {
            System.out.println("Active Student: " + student);
        }

        System.out.println("\\n--- HashMap Demo (Key-Value) ---");
        // Creating a map of Student names to their final exam scores
        HashMap<String, Integer> grades = new HashMap<>();
        grades.put("Alinafe", 95);
        grades.put("Brave", 88);
        grades.put("Chikondi", 92);

        System.out.println("Alinafe's Grade: " + grades.get("Alinafe"));
    }
}`,
    codeExplanation: `- \`ArrayList<String> students = new ArrayList<>();\` uses **Generics** (\`<String>\`) to restrict the list to String objects only.
- \`students.add(...)\` appends items, and \`students.size()\` checks list size dynamically (no need to track capacity).
- \`HashMap<String, Integer> grades\` maps a String key to an Integer value. We store connections with \`put(key, value)\` and query them instantaneously with \`get(key)\`.`,
    commonMistake: {
      code: `// Try to store primitive in Collection
ArrayList<int> list = new ArrayList<>(); // ❌ Error! Cannot use primitives as Generic types

// Duplicate key overwrite
HashMap<String, String> capitals = new HashMap<>();
capitals.put("Malawi", "Zomba");
capitals.put("Malawi", "Lilongwe"); // Overwrites original value without warning!`,
      explanation: 'Java Collections do not support primitive data types (like `int`, `double`, `boolean`) as type parameters. You must use their equivalent **Wrapper Classes** (`Integer`, `Double`, `Boolean`). Also, HashMaps cannot contain duplicate keys; putting a key that already exists will overwrite the old value.',
      fix: `ArrayList<Integer> list = new ArrayList<>(); // Fixed: used Integer wrapper class

HashMap<String, String> capitals = new HashMap<>();
capitals.put("Malawi", "Lilongwe"); // Correct final value`
    },
    exercise: {
      question: 'Create an ArrayList of Integers, add the values 5, 10, 15, and 20, remove the item at index 1, and print the remaining list.',
      starterCode: `import java.util.ArrayList;

public class ListPractice {
    public static void main(String[] args) {
        // Create dynamic list, populate and modify
    }
}`,
      solution: `import java.util.ArrayList;

public class ListPractice {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(10);
        numbers.add(15);
        numbers.add(20);

        numbers.remove(1); // Removes index 1 (value 10)

        for (int num : numbers) {
            System.out.println(num);
        }
    }
}`
    }
  },
  'exception-handling': {
    id: 'exception-handling',
    title: 'Exception Handling: Crash Prevention',
    description: 'Learn how to safeguard your programs from crashing using try-catch blocks, throw exceptions, and the finally block.',
    details: `An **Exception** is an event that occurs during the execution of a program, disrupting the normal flow of instructions. If an exception is not caught and handled, the JVM terminates, crashing the application.

Exception handling allows us to anticipate potential error conditions (like file not found, bad network connections, or divide by zero) and recover gracefully.

### Try-Catch Blocks
We wrap risk-prone statements in a \`try\` block. If an error occurs, the JVM stops executing the try block and jumps directly to the matching \`catch\` block.

### The Finally Block
A \`finally\` block runs **unconditionally** after the try and catch blocks finish, regardless of whether an exception was thrown or handled. This is critical for releasing resources (like closing active files or network sockets) to avoid memory leaks.`,
    codeExample: `public class ExceptionsDemo {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30};

        try {
            System.out.println("Accessing index 5...");
            int value = numbers[5]; // Risk: Index does not exist!
            System.out.println("This statement will NOT run");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error caught: Requested index is out of bounds!");
        } finally {
            System.out.println("Finally block: Running safe cleanup code.");
        }

        System.out.println("Program successfully recovered and continues execution!");
    }
}`,
    codeExplanation: `- The program attempts to execute \`numbers[5]\`. Since the array only goes up to index 2, the JVM halts and creates an \`ArrayIndexOutOfBoundsException\`.
- Instead of crashing the program, the JVM searches for a catch block matching this exception type. It matches \`ArrayIndexOutOfBoundsException e\`, and runs the safety logic.
- The \`finally\` block executes immediately after, ensuring that crucial system tasks take place.
- The program resumes execution outside the try-catch block, printing the final line.`,
    commonMistake: {
      code: `try {
    int result = 10 / 0; // Throws ArithmeticException
} catch (NullPointerException e) { // ❌ Error! This catch block does not match the thrown exception!
    System.out.println("Caught NPE");
} // ❌ Result: Program crashes because exception was not matched!`,
      explanation: 'A catch block will only execute if the exception thrown matches the catch parameter type or is a subclass of it. If you throw an `ArithmeticException` but only catch `NullPointerException`, the exception remains unhandled and will crash the application. You can use multiple catch blocks or catch the base `Exception` class to make a broad catch.',
      fix: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) { // Fixed: correct specific exception type
    System.out.println("Caught arithmetic error: " + e.getMessage());
} catch (Exception e) { // Catch-all for other unexpected errors
    System.out.println("Caught generic error: " + e.getMessage());
}`
    },
    exercise: {
      question: 'Write a program that wraps a division operation inside a try-catch block to catch "ArithmeticException" when dividing by zero. Print a user-friendly message.',
      starterCode: `public class SafeDivision {
    public static void main(String[] args) {
        int numerator = 10;
        int denominator = 0;
        // Attempt division within try-catch block
    }
}`,
      solution: `public class SafeDivision {
    public static void main(String[] args) {
        int numerator = 10;
        int denominator = 0;

        try {
            int result = numerator / denominator;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Safety Guard: Cannot divide an integer by zero!");
        }
    }
}`
    }
  },
  'file-handling': {
    id: 'file-handling',
    title: 'File Handling: Local Storage Access',
    description: 'Learn how to read from and write to text files safely using FileWriter, BufferedReader, and resource management.',
    details: `File handling allows Java programs to interact with local files on the computer's hard drive. This is crucial for saving application state, persisting user data, and loading program configurations.

To work with files, Java uses **Streams** of data. Since files may not exist or could be locked by other system processes, file operations are risk-prone and **compile-time checked** (Checked Exceptions). You must always handle or declare these exceptions.

### Try-With-Resources (Modern Java Style)
Opening streams to read or write files leaves system connections active. In the past, we had to close them manually inside a \`finally\` block. Modern Java introduces **Try-With-Resources**, which automatically closes files when the try block exits, avoiding memory and resource leaks.`,
    codeExample: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileHandlingDemo {
    public static void main(String[] args) {
        String filepath = "demo.txt";

        // Writing to a file (automatically closed by try-with-resources)
        try (FileWriter writer = new FileWriter(filepath)) {
            writer.write("Hello from ByteAcademy!\\n");
            writer.write("File handling in Java is very simple.\\n");
            System.out.println("Successfully wrote to " + filepath);
        } catch (IOException e) {
            System.out.println("An error occurred while writing: " + e.getMessage());
        }

        // Reading from a file (automatically closed)
        try (BufferedReader reader = new BufferedReader(new FileReader(filepath))) {
            String line;
            System.out.println("Reading contents of " + filepath + ":");
            while ((line = reader.readLine()) != null) {
                System.out.println("> " + line);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading: " + e.getMessage());
        }
    }
}`,
    codeExplanation: `- \`import java.io.*\` imports crucial input/output classes.
- \`try (FileWriter writer = new FileWriter(filepath))\`: The resource is initialized in parentheses inside \`try\`. This is a try-with-resources statement, guaranteeing that \`writer.close()\` is called automatically.
- \`BufferedReader\` reads text from a character-input stream, buffering characters to provide efficient reading of single characters, arrays, and lines.
- \`reader.readLine()\` reads a single line of text and returns \`null\` when the end of the file is reached, which gracefully terminates our reading loop.`,
    commonMistake: {
      code: `public void badWrite() {
    FileWriter writer = new FileWriter("output.txt"); // ❌ Compile error! Exception not handled or declared
    writer.write("No close called");
    // ❌ Error! Resource is leaked in memory and never written to disk because close() wasn't called
}`,
      explanation: 'File operations throw checked `IOException` exceptions which must either be wrapped in a try-catch block or declared in the method signature with the `throws` keyword. Also, omitting the `close()` call will keep the file locked by Java, and data in the write-buffer might never be committed to disk.',
      fix: `public void fixedWrite() {
    // Fixed: wrapped inside try-with-resources for automatic close and caught IOException
    try (FileWriter writer = new FileWriter("output.txt")) {
        writer.write("Data securely written to disk.");
    } catch (IOException e) {
        System.out.println("Error writing: " + e.getMessage());
    }
}`
    },
    exercise: {
      question: 'Write a program that reads a file named "grades.txt" and prints each line. If the file does not exist, capture the exception and print an appropriate warning.',
      starterCode: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadGrades {
    public static void main(String[] args) {
        // Try reading "grades.txt" with BufferedReader
    }
}`,
      solution: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadGrades {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("grades.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Warning: Could not read grades.txt. Please verify the file exists.");
        }
    }
}`
    }
  },
  'advanced-java': {
    id: 'advanced-java',
    title: 'Java Generics: Reusable & Type-Safe Code',
    description: 'Learn why Java allows reusable and type-safe code using Generics, and how to create generic classes, methods, and wildcard constraints.',
    details: `In early versions of Java, collections like \`ArrayList\` stored everything as generic \`Object\` types. This meant you had to manually cast elements back to their original type (e.g., \`(String) list.get(0)\`). If you accidentally added an \`Integer\` to a list meant for strings, your program would compile perfectly but crash at runtime with a \`ClassCastException\`!

Generics solve this by introducing compile-time **Type Safety**. By specifying types inside angle brackets (e.g., \`<String>\`), the compiler enforces that only strings can be added, and retrieves them as strings automatically without any manual casting.

### Key Concepts of Generics:
1. **Generic Classes**: Classes declared with a type parameter, like \`class Box<T>\`, where \`T\` acts as a placeholder for a future type.
2. **Generic Methods**: Methods that declare their own type parameters, allowing them to accept diverse types dynamically.
3. **Generics with Collections**: Working with type-safe lists, maps, and sets (like \`ArrayList<Student>\` or \`HashMap<String, Integer>\`).
4. **Wildcards (\`?\`)**: Allows a generic parameter to represent any type, or a restricted family of types (using \`extends\` for upper bounds and \`super\` for lower bounds).`,
    codeExample: `public class GenericBox<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }

    public static void main(String[] args) {
        // Create a box for Strings
        GenericBox<String> nameBox = new GenericBox<>();
        nameBox.setItem("Alinafe");
        String name = nameBox.getItem(); // No casting needed!
        System.out.println("Stored Name: " + name);

        // Create a box for Integers
        GenericBox<Integer> scoreBox = new GenericBox<>();
        scoreBox.setItem(95);
        int score = scoreBox.getItem(); // Automatically unboxed!
        System.out.println("Stored Score: " + score);
    }
}`,
    codeExplanation: `- \`<T>\` on \`GenericBox<T>\` declares a type parameter. \`T\` acts as a placeholder for any Object type.
- \`private T item;\` creates an instance variable of type \`T\`, which becomes \`String\` or \`Integer\` when instantiated.
- \`new GenericBox<>()\` uses the Diamond Operator to infer the correct type parameter from the variable declaration.
- No type casting is required when calling \`getItem()\`. Java resolves the type at compile-time, guaranteeing type safety and preventing runtime casting crashes.`,
    commonMistake: {
      code: `// ❌ Raw types: using ArrayList without specifying a type!
ArrayList list = new ArrayList();
list.add("Hello");
list.add(123); // Compiles fine, but highly dangerous!

for (Object obj : list) {
    String s = (String) obj; // ❌ Throws ClassCastException for Integer 123 at runtime!
}`,
      explanation: 'Using collections without Generics is known as using raw types. It disables compiler type checking, forcing you to use manual casts and exposing your code to runtime crashes.',
      fix: `// ✓ Fixed: Enforce String type at compile time!
ArrayList<String> list = new ArrayList<>();
list.add("Hello");
// list.add(123); // ✓ Compiler will catch this error instantly and prevent build!

for (String s : list) {
    System.out.println(s); // No casting required!
}`
    },
    exercise: {
      question: 'Create a Generic method printArray that accepts an array of any type and prints each element inside the console.',
      starterCode: `public class ArrayPrinter {
    // Write your generic printArray method here

    public static void main(String[] args) {
        String[] words = {"Java", "Generics", "Are", "Cool"};
        Integer[] numbers = {1, 2, 3, 4};
        
        // printArray(words);
        // printArray(numbers);
    }
}`,
      solution: `public class ArrayPrinter {
    public static <E> void printArray(E[] elements) {
        for (E element : elements) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        String[] words = {"Java", "Generics", "Are", "Cool"};
        Integer[] numbers = {1, 2, 3, 4};
        
        printArray(words);
        printArray(numbers);
    }
}`
    }
  },
  'mini-projects': {
    id: 'mini-projects',
    title: 'Mini Projects: Putting It Together',
    description: 'Learn how to combine variables, lists, objects, file streams, and conditionals into a complete CLI Java application.',
    details: `The absolute best way to learn programming is to build real applications. Once you have mastered variables, methods, arrays, lists, loops, object-oriented concepts, exceptions, and files, you have the full power to create complete tools.

Here we highlight the complete architectural outline of a **Student Management System** CLI application that lets you:
1. Add new students with unique grades.
2. View the full list of students.
3. Calculate and display class grade averages.
4. Catch exceptions for invalid user inputs (Scanner crashes).`,
    codeExample: `import java.util.ArrayList;
import java.util.Scanner;

class Student {
    private String name;
    private double grade;

    public Student(String name, double grade) {
        this.name = name;
        this.grade = grade;
    }

    public String getName() { return name; }
    public double getGrade() { return grade; }
}

public class StudentSystem {
    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        System.out.println("=== Student System ===");

        while (true) {
            System.out.println("\\n1. Add Student  2. View Students  3. Exit");
            System.out.print("Choose: ");
            String choice = scanner.nextLine();

            if (choice.equals("1")) {
                System.out.print("Name: ");
                String name = scanner.nextLine();
                System.out.print("Grade: ");
                double grade = Double.parseDouble(scanner.nextLine());
                list.add(new Student(name, grade));
                System.out.println("Student added!");
            } else if (choice.equals("2")) {
                System.out.println("\\nStudent Directory:");
                for (Student s : list) {
                    System.out.println("- " + s.getName() + ": " + s.getGrade());
                }
            } else if (choice.equals("3")) {
                System.out.println("Goodbye!");
                break;
            }
        }
        scanner.close();
    }
}`,
    codeExplanation: `- \`class Student\` defines our structured object with private variables (Encapsulation) representing each student record.
- \`ArrayList<Student> list\` manages the collection dynamically, allowing students to be appended indefinitely.
- \`Scanner scanner = new Scanner(System.in)\` opens standard system console inputs.
- \`while (true)\` establishes an active application loop that keeps running until the user enters choice \`3\`, which executes a \`break\` to terminate the loop.
- \`Double.parseDouble(scanner.nextLine())\` parses decimals from string buffers securely, which prevents the scanner from leaving newline markers that corrupt subsequent inputs.`,
    commonMistake: {
      code: `Scanner scanner = new Scanner(System.in);
System.out.print("Enter Age: ");
int age = scanner.nextInt(); // ❌ Reading integer directly
System.out.print("Enter Name: ");
String name = scanner.nextLine(); // ❌ Bug! Skips name input completely!`,
      explanation: 'The `nextInt()` and `nextDouble()` scanner methods only read the number value and do NOT consume the trailing newline character (when you press Enter). That left-over newline character is immediately consumed by the next `nextLine()` call, skipping user entry completely. To fix this, always read lines via `nextLine()` and manually convert them to integers or doubles.',
      fix: `Scanner scanner = new Scanner(System.in);
System.out.print("Enter Age: ");
int age = Integer.parseInt(scanner.nextLine()); // Fixed: consumed newline and parsed manually
System.out.print("Enter Name: ");
String name = scanner.nextLine(); // Fixed: runs perfectly now!`
    },
    exercise: {
      question: 'Extend this Student System CLI program to check if the grade is between 0 and 100 before adding the student. Show a warning for invalid entries.',
      starterCode: `// Use the StudentSystem class code.
// Inside choice 1, wrap grade validation.`,
      solution: `if (choice.equals("1")) {
    System.out.print("Name: ");
    String name = scanner.nextLine();
    System.out.print("Grade: ");
    double grade = Double.parseDouble(scanner.nextLine());
    
    if (grade >= 0 && grade <= 100) {
        list.add(new Student(name, grade));
        System.out.println("Student added!");
    } else {
        System.out.println("Validation Error: Grade must be between 0 and 100!");
    }
}`
    }
  }
};
