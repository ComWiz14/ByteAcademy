import { DetailedLessonContent } from '../../types';

export const OOP_LESSONS: Record<string, DetailedLessonContent> = {
  'why-object-oriented-programming-exists': {
    slug: 'why-object-oriented-programming-exists',
    title: 'Why Object-Oriented Programming Exists',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `As you build more complex programs, managing code becomes a challenge. Up to this point, we have used procedural programming—writing lists of instructions, loose variables, and standalone methods. While this works for simple scripts, it becomes extremely difficult to maintain as your software grows.

Object-Oriented Programming (OOP) is a design philosophy that helps programmers organize code by grouping related data and behaviors together. Instead of having loose variables floating around, we pack them into neat, self-contained packages called **Objects**.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine writing a computer program to manage a school. You need to keep track of students, classes, scores, and attendance. Without OOP, you have to create separate, unrelated variables for every student's name, age, and grade, and write standalone methods that hope the data matches. If a student is removed, you must manually update dozens of independent variables, which leads to massive bugs.`,
      problemSolved: `OOP solves code complexity and data separation. By packing a student's name, age, and scores together into a single "Student" container, your code mirrors the real world. Managing, sorting, or sharing a student's profile becomes as simple as handling a single variable.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand the shift to OOP, let\'s look at how we represent multiple students without it. If we have three students, we are forced to declare loose, separate variables:'
      },
      {
        type: 'bullet_list',
        title: 'The procedural chaos (loose, unlinked variables)',
        items: [
          'String student1Name = "Limbani"; int student1Age = 19; double student1GPA = 3.8;',
          'String student2Name = "Chikondi"; int student2Age = 20; double student2GPA = 3.5;',
          'String student3Name = "Tiwonge"; int student3Age = 18; double student3GPA = 3.9;'
        ]
      },
      {
        type: 'paragraph',
        text: 'Now imagine writing a method to print a student\'s report card. You have to pass the name, age, and GPA variables separately to that method. What if you accidentally pass student1\'s name and student2\'s GPA? Java won\'t warn you because they are just raw types. Your data has no cohesive structure.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Procedural Programming',
          definition: 'A programming paradigm focused on writing sequential procedures or methods that perform operations on raw data.',
          explanation: 'In this model, data (variables) and behavior (methods) are separated, making code prone to misalignment as scope increases.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object-Oriented Programming (OOP)',
          definition: 'A design paradigm centered around "Objects" which integrate both data attributes and behavioral methods inside single packages.',
          explanation: 'Instead of dealing with loose variables, you create structured objects that coordinate and communicate with each other.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'Java was built from the ground up as an OOP language. In fact, you cannot write a single line of runnable code in Java without declaring a class!'
      }
    ],
    codeExamples: [
      {
        title: 'The Unstructured Procedural Way',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Loose variables with no real connection to each other
        String name = "Limbani";
        int age = 19;
        double gpa = 3.8;
        
        // Standalone method call requires passing everything separately
        printReport(name, age, gpa);
    }
    
    public static void printReport(String studentName, int studentAge, double studentGPA) {
        System.out.println("Student: " + studentName + ", Age: " + studentAge + ", GPA: " + studentGPA);
    }
}`,
        explanation: 'In this procedural example, the data is stored in individual, floating variables. There is no structural template protecting or grouping them.'
      },
      {
        title: 'Previewing the Clean OOP Way',
        language: 'java',
        code: `// A structured template containing both properties and behavior
class Student {
    String name;
    int age;
    double gpa;
    
    void printReport() {
        System.out.println("Student: " + name + ", Age: " + age + ", GPA: " + gpa);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create a single Student object!
        Student s = new Student();
        s.name = "Limbani";
        s.age = 19;
        s.gpa = 3.8;
        
        // Call the method that belongs directly to the student!
        s.printReport();
    }
}`,
        explanation: 'Here, we define a Student template. The data and behavior are bound together. The main program only has to manage a single student object reference "s".'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Loose Variables vs. Unified Object',
        description: 'Analyzing how data and operations are handled in different programming styles.',
        elements: {
          headers: ['Feature', 'Procedural Approach', 'Object-Oriented Approach'],
          rows: [
            ['Data Structure', 'Loose, unlinked variables floating in memory.', 'Encapsulated together inside a cohesive object.'],
            ['Method Connection', 'Methods are standalone and require arguments for every piece of data.', 'Methods are built into the object and access fields automatically.'],
            ['Scalability', 'Extremely difficult. Adding 50 items multiplies variables exponentially.', 'Clean and simple. You just instantiate more objects.'],
            ['Real-World Modeling', 'Abstract and numerical.', 'Directly mirrors real-world nouns and activities.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Thinking OOP is a separate programming language.',
        whyItHappens: 'Because OOP introduces classes and objects, beginners sometimes assume it is a new syntax or language rule.',
        howToAvoid: 'Remember that OOP is simply a logical way to *organize* your code. It still uses the exact same variables, methods, loops, and conditions you have already learned!',
        codeSnippet: {
          bad: `// There is no bad code here, just a structural mindset shift!`,
          good: `// Continue using loops and logic, but pack them cleanly inside objects!`
        }
      }
    ],
    practiceExercise: {
      title: 'Structural Design Thinking',
      tasks: [
        'Imagine you are building a banking system. Write down what fields (variables) and behaviors (methods) you would pack together to represent a "BankAccount" object.',
        'List 3 real-world entities (e.g., Car, Book, Product) and describe at least 3 properties (data) and 2 actions (behavior) for each.',
        'Explain why a standalone loop sorting an array of student names could accidentally mismatch them with an array of student ages if they get out of sync.'
      ]
    },
    summary: [
      'Procedural programming handles data and functions separately, leading to high complexity as projects grow.',
      'OOP solves this by binding related state (variables) and behavior (methods) together into a single unit called an Object.',
      'Objects keep code modular, readable, secure, and easily scalable.'
    ]
  },

  'understanding-classes': {
    slug: 'understanding-classes',
    title: 'Understanding Classes',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Before we can create and use objects, we must define their structure. In Java, this structure is defined using a **Class**. 

Instead of jumping straight into technical definitions like "a class is a blueprint", let's think of a class as a template form. Think of a physical medical form at a clinic: it has blank lines labeled "Patient Name", "Birth Year", and "Symptoms". The form template itself does not represent a real patient—it just dictates what details *every* patient must provide. A Class is that blank form.`,
    whyThisTopicMatters: {
      whyItExists: `To store complex data structures, basic primitives like 'int', 'double', and 'boolean' are insufficient. We need custom, user-defined types. By creating a Class, we are expanding Java's vocabulary and defining a brand-new data type tailored to our program's exact needs.`,
      problemSolved: `A class defines a structured template. It acts as a single point of definition, ensuring that every entity built from it contains exactly the same set of properties and follows the same behavioral rules.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A class is a custom template in Java that declares what kind of **data** (fields) and **actions** (methods) its objects will have. When you write a class, you are not allocating memory for any actual data yet; you are simply defining the shape of a new data type.'
      },
      {
        type: 'paragraph',
        text: 'Writing a class follows a clean, structured process:'
      },
      {
        type: 'bullet_list',
        title: 'Step-by-step Class declaration process',
        items: [
          'Step 1: Use the "class" keyword to tell the compiler you are declaring a custom type.',
          'Step 2: Give the class a clear, uppercase name (e.g., "Student", "BankAccount") matching PascalCase conventions.',
          'Step 3: Create the class body using opening and closing curly braces "{}".',
          'Step 4: Define the variables (fields) and methods inside those braces.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Class',
          definition: 'The user-defined template or outline that declares the fields and methods for a specific object type.',
          explanation: 'Writing "class Book { ... }" creates a custom template. It is not a live book; it is just the design guidelines.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'PascalCase',
          definition: 'A naming convention where every word in a variable or class name starts with a capital letter, with no spaces.',
          explanation: 'In Java, all class names must use PascalCase (e.g., "StudentProfile", "SavingAccount").'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'A class definition is static code written on your hard drive. It only acts as instructions. No memory is allocated in the RAM for student data until you actually create an object from that class!'
      }
    ],
    codeExamples: [
      {
        title: 'Writing Your Very First Class',
        language: 'java',
        code: `// Define the template representing a Book
class Book {
    // These are the properties every Book will have
    String title;
    String author;
    int pages;
    
    // Behaviors (methods) can be added here too!
}`,
        explanation: 'This code defines a new class named Book. We declare three empty slots: title, author, and pages. It has no main method because it is a template, not an executable script.'
      },
      {
        title: 'The Student Class Template',
        language: 'java',
        code: `class Student {
    // State (Data Fields)
    String name;
    int age;
    double grade;
    
    // We can leave this empty for now or add methods later!
}`,
        explanation: 'We declare a Student class with three characteristics. Any Student object we generate later will have its own copy of these three fields.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'The Class Structure Blueprint',
        description: 'How a Class organizes data definitions and behavior outlines in code.',
        elements: {
          classes: [
            {
              name: 'Student',
              fields: ['String name', 'int age', 'double grade'],
              methods: ['void study()', 'void takeExam()']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Writing class names starting with lowercase letters.',
        whyItHappens: 'Beginners are used to writing variables in camelCase (e.g., "studentName") and carry this habit over to class declarations.',
        howToAvoid: 'Always capitalize the first letter of a class name (e.g., "Student"). This helps both you and the Java compiler immediately distinguish classes from variables and methods.',
        codeSnippet: {
          bad: `// ❌ WRONG: Lowercase class name violates naming guidelines
class student {
    String name;
}`,
          good: `// ✓ CORRECT: Upper-case PascalCase class name
class Student {
    String name;
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Class Blueprint Construction',
      tasks: [
        'Write a complete Java class named "Product" containing three fields: "name" (String), "price" (double), and "stockQuantity" (int).',
        'In your own words, explain the difference between a primitive type (like "int") and a custom class type (like "Student").',
        'Write a class named "Movie" that contains fields for the movie\'s title, director, and rating.'
      ]
    },
    summary: [
      'A class is a custom, programmer-defined template that specifies properties and behaviors.',
      'Classes are written using the "class" keyword followed by a capital PascalCase name.',
      'Declaring a class defines the structure but does not allocate actual data in RAM memory yet.'
    ]
  },

  'creating-objects': {
    slug: 'creating-objects',
    title: 'Creating Objects',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `If a class is a blank application form, an **Object** is the physical, filled-out paper representing an actual person. When you instantiate a class, you create a living Object in your computer's memory.

We will learn how to instantiate classes using Java's \`new\` keyword, map out how objects reside in the Heap, and connect this to our previous discussions on pointers and reference memory.`,
    whyThisTopicMatters: {
      whyItExists: `A template is just instructions. To actually run a business, calculate calculations, or run games, you need concrete values loaded in memory. Creating objects allocates a safe block of space in RAM to hold live data.`,
      problemSolved: `The "new" operator tells Java to actively build an instance of your template. This creates a distinct, isolated block of memory so that modifying student1's grades never accidentally corrupts student2's grades.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Creating an object from a class is called **Instantiation**. In Java, this is done using the **new** keyword. The process involves three parts:'
      },
      {
        type: 'bullet_list',
        title: 'The object creation syntax decoded',
        items: [
          'Type Declaration: Write the class name (e.g., "Student") to specify the type of the reference variable.',
          'Variable Name: Create a variable name (e.g., "student1") in camelCase.',
          'The "new" Keyword: Writing "= new Student();" allocates memory in the Heap, executes initialization, and assigns the memory address back to the variable.'
        ]
      },
      {
        type: 'paragraph',
        text: 'When we learned about Strings and Arrays, we discussed that they are reference types. Standard objects behave exactly the same way. The variable "student1" does not actually store the student\'s name and age directly. Instead, it stores a **reference pointer** (a memory address) pointing to where the actual student object lives on the Heap.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object Instance',
          definition: 'A concrete memory entity created from a class template that holds active data in RAM.',
          explanation: 'If "Student" is the blueprint, "student1" pointing to the actual data is the object instance.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Heap Memory Allocation',
          definition: 'The process where Java reserves a block of RAM memory dynamically to store reference objects.',
          explanation: 'All objects created with the "new" keyword are stored on the Heap, while their pointers are managed on the Stack.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Since objects are reference types, if you declare "Student s1 = new Student(); Student s2 = s1;", both variables point to the exact same object in memory! Modifying s1 will instantly change s2.'
      }
    ],
    codeExamples: [
      {
        title: 'Instantiating Distinct Objects',
        language: 'java',
        code: `class Student {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        // Instantiate two completely independent student objects
        Student student1 = new Student();
        Student student2 = new Student();
        
        System.out.println("Student 1 address reference: " + student1);
        System.out.println("Student 2 address reference: " + student2);
    }
}`,
        explanation: 'Using the "new" keyword twice allocates two distinct blocks in Heap memory. Printing "student1" and "student2" directly shows their unique internal JVM reference identities.'
      },
      {
        title: 'Reference Pointer Sharing',
        language: 'java',
        code: `class Student {
    String name;
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Chikondi";
        
        // s2 shares the exact same pointer as s1!
        Student s2 = s1;
        
        System.out.println("S1 Name: " + s1.name); // Chikondi
        System.out.println("S2 Name: " + s2.name); // Chikondi
        
        // Changing s2 affects s1 because they point to the SAME object!
        s2.name = "Tiwonge";
        System.out.println("S1 Name after edit: " + s1.name); // Tiwonge!
    }
}`,
        explanation: 'Writing "s2 = s1" copies the reference address, not the object. Any modification to the object through s2 is instantly visible through s1.'
      }
    ],
    visualLearning: [
      {
        type: 'memory',
        title: 'Object Reference Memory Layout',
        description: 'How variables on the Stack store pointers to actual object states on the Heap.',
        elements: {
          cells: [
            { address: '0x00FF', name: 'student1 (Stack)', value: '0x77AA (Heap Pointer)', type: 'Pointer reference' },
            { address: '0x01A0', name: 'student2 (Stack)', value: '0x88BB (Heap Pointer)', type: 'Pointer reference' },
            { address: '0x77AA', name: 'Heap Object 1', value: 'Student { name: null, age: 0 }', type: 'student1 data' },
            { address: '0x88BB', name: 'Heap Object 2', value: 'Student { name: null, age: 0 }', type: 'student2 data' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the "new" keyword or writing it like a function.',
        whyItHappens: 'Beginners sometimes confuse object instantiation with standard method calls or forget to allocate Heap memory.',
        howToAvoid: 'Always use "= new ClassName();" with the "new" keyword when creating a fresh object. Writing "Student s = Student();" is a compile-time crash.',
        codeSnippet: {
          bad: `// ❌ WRONG: Missing "new" keyword, causes compiler error
Student s = Student();`,
          good: `// ✓ CORRECT: Always use "new" to allocate object space
Student s = new Student();`
        }
      }
    ],
    practiceExercise: {
      title: 'Object Instantiation Lab',
      tasks: [
        'Write code to instantiate three separate "Book" objects named "b1", "b2", and "b3" from a "Book" class.',
        'Predict what happens if you write: "Student s1 = null; s1.name = \"John\";". Try to explain what this crash means conceptually.',
        'If "Student x = new Student();" and "Student y = new Student();", does "x == y" evaluate to true or false? Why? (Think of memory addresses).'
      ]
    },
    summary: [
      'Creating an object is called instantiation and is triggered using the "new" keyword.',
      'Objects live inside Heap memory, and object variables store memory pointer references pointing to them.',
      'Assigning one object variable to another copies the memory address pointer, meaning both variables share the identical object instance.'
    ]
  },

  'fields-and-object-data': {
    slug: 'fields-and-object-data',
    title: 'Fields and Object Data',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Now that we have created objects in memory, how do we save data inside them? The variables defined inside a class are called **Fields** or **Instance Variables**.

Fields represent the **state** of an object. If you have two different cars, one might be "Red" and travel at "60mph", while the other is "Blue" and "0mph". These characteristics are stored directly inside each object's private memory slots. We will learn how to read and write data to these fields.`,
    whyThisTopicMatters: {
      whyItExists: `Every distinct real-world object has its own set of characteristics. A template forms the blueprint, but each individual entity needs to store its own state. Fields act as the variables dedicated to holding each object's unique properties.`,
      problemSolved: `Fields give objects memory. They allow multiple instances of the same class to exist concurrently while holding completely different information.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Fields (also called **Instance Variables**) are variables declared directly inside a class body but outside any method. They are called "instance" variables because their values are unique to each specific instance of the object.'
      },
      {
        type: 'paragraph',
        text: 'To access, read, or modify an object\'s fields, Java uses the **dot operator (.)** followed by the field name:'
      },
      {
        type: 'bullet_list',
        title: 'Using fields step-by-step',
        items: [
          'Create the object: "Student s = new Student();"',
          'Write data to a field: Use the dot operator followed by assignment: "s.name = \"Limbani\";"',
          'Read data from a field: Refer to the dot operator inside printing or calculation: "System.out.println(s.name);"'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Instance Variable (Field)',
          definition: 'A variable declared inside a class but outside methods. Each object instance gets its own copy of this variable.',
          explanation: 'In class Student, "String name;" is an instance variable. Every new student has a personal "name" slot.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object State',
          definition: 'The collective values stored inside all of an object\'s fields at any given moment.',
          explanation: 'If a student has name "Limbani" and age 19, that is their current state. States can change over time.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'Unlike local variables inside methods which must be initialized manually before use, instance variables get default values automatically (e.g., numbers default to 0, booleans to false, and objects/strings to null)!'
      }
    ],
    codeExamples: [
      {
        title: 'Writing and Reading Object Fields',
        language: 'java',
        code: `class Student {
    String name;
    int age;
    double grade;
}

public class Main {
    public static void main(String[] args) {
        // Step 1: Create the objects
        Student student1 = new Student();
        Student student2 = new Student();
        
        // Step 2: Write separate data into fields
        student1.name = "Limbani";
        student1.age = 19;
        student1.grade = 3.8;
        
        student2.name = "Chikondi";
        student2.age = 20;
        student2.grade = 3.5;
        
        // Step 3: Read and print the data
        System.out.println(student1.name + " is " + student1.age + " years old.");
        System.out.println(student2.name + " is " + student2.age + " years old.");
    }
}`,
        explanation: 'The JVM allocates two distinct areas of memory on the Heap. "student1" has its own name, age, and grade. "student2" has a separate set of name, age, and grade slots.'
      },
      {
        title: 'Analyzing Field Default Values',
        language: 'java',
        code: `class Student {
    String name;
    int age;
    boolean isEnrolled;
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        
        // We haven't assigned anything yet! Let's check defaults:
        System.out.println("Default Name: " + s.name);            // Prints null
        System.out.println("Default Age: " + s.age);              // Prints 0
        System.out.println("Default Enrolled: " + s.isEnrolled);  // Prints false
    }
}`,
        explanation: 'Because s is created in the heap, Java automatically clears and fills its fields with safe default initial values: null for objects (Strings), 0 for numbers, and false for booleans.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Local Variables vs. Instance Fields',
        description: 'Highlighting key structural differences between variables in methods and variables in classes.',
        elements: {
          headers: ['Feature', 'Local Variables', 'Instance Fields (Variables)'],
          rows: [
            ['Declared Where', 'Inside a method or block.', 'Inside a class, but outside any method.'],
            ['Life Cycle', 'Created when method runs; destroyed when method exits.', 'Created with the object; destroyed when object is cleared.'],
            ['Default Initial Values', 'No default! Will cause compiler error if read before initialization.', 'Automatic default values (0, false, null).'],
            ['How to Access', 'By variable name directly.', 'Using an object reference followed by the dot operator (e.g., s.name).']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to access fields on a variable that points to "null".',
        whyItHappens: 'If an object variable is declared but not initialized with "new", it defaults to "null". Trying to access its fields causes a NullPointerException crash.',
        howToAvoid: 'Always verify that your object variable has been instantiated with "new" before using the dot operator to read or write fields.',
        codeSnippet: {
          bad: `// ❌ WRONG: student is null, accessing fields will crash!
Student student;
student.name = "Tiwonge";`,
          good: `// ✓ CORRECT: Instantiate first, then assign fields safely
Student student = new Student();
student.name = "Tiwonge";`
        }
      }
    ],
    practiceExercise: {
      title: 'Field Management Lab',
      tasks: [
        'Create a class named "Car" with fields: "brand" (String), "speed" (int), and "isEngineRunning" (boolean). Write a main method that creates a car, sets its speed to 80, starts its engine, and prints its status.',
        'Write code to instantiate an array of 3 "Student" objects. Set the name of the student in the first slot to "Limbani".',
        'Predict the output of a program where "Student s1 = new Student();" is created and we run: "System.out.println(s1.age + 10);" without setting s1.age first.'
      ]
    },
    summary: [
      'Fields (instance variables) represent the data attributes and state of an object.',
      'You read and write to an object\'s fields using the dot operator (e.g., "s.name").',
      'Fields receive automatic default values (0, false, null) when the object is allocated on the heap.'
    ]
  },

  'object-methods': {
    slug: 'object-methods',
    title: 'Object Methods',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Objects are not just static data folders. Real objects can perform actions. In programming, these actions are called **Methods**.

"When we learned methods, we created reusable blocks of code. Now, methods belong to objects." Packing both data (fields) and behavior (methods) together into a single class template is the defining core of Object-Oriented Programming. We will learn how to add custom behaviors inside our classes.`,
    whyThisTopicMatters: {
      whyItExists: `A BankAccount object shouldn't just hold an "int balance" variable that anyone can change. It should have a "deposit()" and "withdraw()" method. This ensures that the math is done correctly inside the object, preserving data integrity.`,
      problemSolved: `Object methods eliminate the need to pass data fields as arguments. Since the method is written inside the class, it has direct, automatic access to all the instance variables of the current object.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'An **Object Method** is a method written inside a class definition (without the "static" keyword). It defines an action that any object created from that class can execute.'
      },
      {
        type: 'paragraph',
        text: 'Adding and calling object methods follows three straightforward steps:'
      },
      {
        type: 'bullet_list',
        title: 'Step-by-step object method execution',
        items: [
          'Declare inside class: Write the method signature and body directly inside the class curly braces.',
          'Access local fields: Inside the method body, write the names of your instance variables directly. You do not need parameters!',
          'Call on instance: In your main program, execute the method on your object using the dot operator: "s.introduce();"'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object Method (Instance Method)',
          definition: 'A non-static method declared inside a class that executes actions on behalf of a specific object instance.',
          explanation: 'In "s.study()", "study" is an instance method operating on the data stored in student "s".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Behavior',
          definition: 'The set of actions and operations an object is capable of performing, defined by its class methods.',
          explanation: 'An object binds State (fields) and Behavior (methods) together as a single conceptual model.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Do NOT use the keyword "static" when writing object methods! Static methods belong to the class as a whole and do not have access to an individual object\'s fields!'
      }
    ],
    codeExamples: [
      {
        title: 'Declaring and Calling Object Methods',
        language: 'java',
        code: `class Student {
    String name;
    int age;
    double grade;
    
    // Add behavior: an object method! Note: NO static keyword!
    void introduce() {
        // Can access instance variables directly!
        System.out.println("Hello, my name is " + name + " and I am " + age + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Limbani";
        s1.age = 19;
        
        Student s2 = new Student();
        s2.name = "Chikondi";
        s2.age = 20;
        
        // Execute the behavior!
        s1.introduce(); // Prints Limbani version
        s2.introduce(); // Prints Chikondi version
    }
}`,
        explanation: 'When s1.introduce() runs, the JVM executes the method in s1\'s context. "name" evaluates to "Limbani". When s2.introduce() runs, "name" evaluates to "Chikondi" automatically.'
      },
      {
        title: 'Interactive Methods with Parameters',
        language: 'java',
        code: `class Student {
    String name;
    double grade;
    
    // Method that accepts an input parameter to update state
    void updateGrade(double newGrade) {
        if (newGrade >= 0.0 && newGrade <= 4.0) {
            grade = newGrade;
            System.out.println(name + "'s GPA updated to: " + grade);
        } else {
            System.out.println("Invalid GPA value: " + newGrade);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Tiwonge";
        s.grade = 3.5;
        
        s.updateGrade(3.9);  // Valid grade, updates successfully
        s.updateGrade(-1.5); // Invalid grade, rejected by safety check!
    }
}`,
        explanation: 'The object method can accept input parameters, combining external calculations with internal fields to safeguard data modifications.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Encapsulating State and Behavior',
        description: 'How data fields and methods are packaged within a Student class definition.',
        elements: {
          classes: [
            {
              name: 'Student Class Template',
              fields: ['String name', 'double grade'],
              methods: ['void introduce()', 'void updateGrade(double newGrade)']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring object methods with the "static" keyword.',
        whyItHappens: 'In earlier modules, all main methods and utility procedures were written as "public static void". Beginners carry this modifier over by habit.',
        howToAvoid: 'When writing methods that need to access instance variables (fields), do not include the "static" keyword. Static methods cannot access non-static instance fields.',
        codeSnippet: {
          bad: `class Student {
    String name;
    // ❌ WRONG: Static method cannot access instance variable "name"
    static void sayHello() {
        System.out.println("Hi " + name); 
    }
}`,
          good: `class Student {
    String name;
    // ✓ CORRECT: Instance method can read "name" directly
    void sayHello() {
        System.out.println("Hi " + name);
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Behavior Implementation Lab',
      tasks: [
        'Add a method named "celebrateBirthday()" to your "Student" class that increases their age by 1 and prints a happy birthday message.',
        'Create a "BankAccount" class with a "balance" field (double). Add two methods: "deposit(double amount)" and "printBalance()". Write a main method that exercises both.',
        'Explain why a static method cannot use the "this" keyword or read standard instance fields directly.'
      ]
    },
    summary: [
      'Object methods are non-static actions defined inside a class that represent an object\'s behavior.',
      'Methods have automatic access to all fields (instance variables) inside the same class without needing them passed as arguments.',
      'Call an object method using the dot operator on an instantiated object variable (e.g., "s.study();").'
    ]
  },

  'constructors': {
    slug: 'constructors',
    title: 'Constructors',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `When we instantiate an object using \`new Student()\`, we often have to write multiple tedious lines of code immediately after just to initialize its fields (e.g., setting the name, age, and grade). This is repetitive and error-prone.

A **Constructor** is a special method designed to solve this problem. It runs automatically at the exact millisecond an object is created, letting you initialize fields with custom values instantly.`,
    whyThisTopicMatters: {
      whyItExists: `Setting object properties manually one-by-one is tedious. If an object is created but someone forgets to set its fields, the object remains in an incomplete, null state, leading to subsequent application crashes. Objects should be born complete.`,
      problemSolved: `Constructors force mandatory, clean initialization. They let you supply critical starting values directly inside the parentheses of the "new" command, ensuring every object is fully configured on birth.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A **Constructor** is a special block of code that resembles a method but is strictly used to initialize new objects. It has two unique rules:'
      },
      {
        type: 'bullet_list',
        title: 'The unique rules of Java Constructors',
        items: [
          'Rule 1: The constructor name MUST match the exact class name (including capitalization) with perfect precision.',
          'Rule 2: Constructors MUST NOT have any return type—not even "void"!'
        ]
      },
      {
        type: 'paragraph',
        text: 'When you do not write any constructor for your class, the Java compiler automatically inserts an invisible, empty "default constructor" with no parameters. However, the moment you write your own custom constructor, Java removes the default one.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Constructor',
          definition: 'A special initialization block that runs automatically when a new object instance is created with the "new" keyword.',
          explanation: 'In "new Student(\"Limbani\", 19)", "Student(...)" is calling the parameterized constructor of the Student class.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Default Constructor',
          definition: 'An automatic, parameterless constructor provided by Java if no explicit constructor is written in the class.',
          explanation: 'It takes zero arguments and simply initializes fields to their standard defaults (0, false, null).'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'If you write a parameterized constructor like "Student(String name)", you can no longer write "new Student();" with empty parentheses unless you also explicitly write a second, parameterless constructor block inside your class!'
      }
    ],
    codeExamples: [
      {
        title: 'Writing and Using a Constructor',
        language: 'java',
        code: `class Student {
    String name;
    int age;
    
    // Custom Constructor! Must match class name exactly. No return type!
    Student(String startingName, int startingAge) {
        name = startingName;
        age = startingAge;
        System.out.println("A Student object was successfully born!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Instantiate AND initialize in one single, elegant line!
        Student s1 = new Student("Limbani", 19);
        Student s2 = new Student("Chikondi", 20);
        
        System.out.println(s1.name + " is " + s1.age);
        System.out.println(s2.name + " is " + s2.age);
    }
}`,
        explanation: 'Writing "new Student(\"Limbani\", 19)" triggers the constructor. The string "Limbani" maps to startingName, and 19 maps to startingAge, setting the fields immediately.'
      },
      {
        title: 'The Constructor Overloading Pattern',
        language: 'java',
        code: `class Student {
    String name;
    int age;
    
    // Constructor 1: Takes name and age
    Student(String startingName, int startingAge) {
        name = startingName;
        age = startingAge;
    }
    
    // Constructor 2: Overloaded! Takes only a name, sets default age
    Student(String startingName) {
        name = startingName;
        age = 18; // Default age for new students
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Limbani", 21);
        Student s2 = new Student("Chikondi"); // Uses default age of 18
        
        System.out.println(s1.name + " age: " + s1.age); // Limbani age: 21
        System.out.println(s2.name + " age: " + s2.age); // Chikondi age: 18
    }
}`,
        explanation: 'Just like regular methods, constructors can be overloaded! Java decides which constructor block to run by matching the parameter counts and types.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Constructor Lifecycle Sequence',
        description: 'Tracing how memory allocation leads directly to constructor field setup when "new" is called.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Call "new Student(\"Limbani\", 19)"', desc: 'Main program requests a new Student instance.' },
            { id: '2', type: 'process', label: 'Heap Allocation', desc: 'Java reserves memory space for the object and initializes fields to defaults (null, 0).' },
            { id: '3', type: 'process', label: 'Constructor Execution', desc: 'The matching Constructor block runs, assigning "Limbani" to name and 19 to age.' },
            { id: '4', type: 'end', label: 'Reference Returned', desc: 'A pointer referencing the fully initialized object is assigned to your variable.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Adding a return type (like "void") to the constructor declaration.',
        whyItHappens: 'Beginners are highly accustomed to writing methods and naturally place a "void" or other return type in front of the constructor name.',
        howToAvoid: 'Remember that constructors have NO return type whatsoever. If you add "void", Java compiles it as a regular method rather than a constructor. It will not run during instantiation!',
        codeSnippet: {
          bad: `class Student {
    String name;
    // ❌ WRONG: Adding void turns this into a regular method! Will NOT run on creation.
    void Student(String n) {
        name = n;
    }
}`,
          good: `class Student {
    String name;
    // ✓ CORRECT: No return type, executes successfully as a constructor
    Student(String n) {
        name = n;
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Constructor Construction Lab',
      tasks: [
        'Write a constructor for your "Car" class that takes parameters to set "brand", "speed", and "isEngineRunning" immediately on creation.',
        'Predict the compiler error: "class Book { Book(String t){} } public class Test { public static void main(String[] args){ Book b = new Book(); } }". How do you fix it?',
        'Create a "Product" class with a constructor that takes "name" and "price". Add a validation rule: if the price parameter is negative, set the field to 0.0.'
      ]
    },
    summary: [
      'A constructor is a special initialization block called automatically when creating an object using "new".',
      'Constructors must match the exact name of the class and have no return type (not even void).',
      'You can overload constructors to offer multiple ways of initializing your objects (e.g., with different numbers of arguments).'
    ]
  },

  'the-this-keyword': {
    slug: 'the-this-keyword',
    title: 'The this Keyword',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `When writing constructors or methods, we often name our input parameters the exact same names as our fields (e.g., passing a parameter named \`name\` to set an instance variable named \`name\`). This leads to a conflict known as **Variable Shadowing**. 

To resolve this conflict, Java provides a special reference variable called **this**. We will explore why it is used and how it acts as a pointer pointing back to the active object.`,
    whyThisTopicMatters: {
      whyItExists: `Naming parameters cryptic names like "startingName", "n", or "theAge" is frustrating and ruins code readability. We want parameters to be clean and natural (like "name" and "age") without confusing the compiler.`,
      problemSolved: `The "this" keyword explicitly distinguishes between instance variables (fields) and local parameter variables, allowing you to use clear, identical names safely and cleanly.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, the **this** keyword is a reference variable that points directly to the **current active object** that is executing the code.'
      },
      {
        type: 'paragraph',
        text: 'When a method parameter has the identical name as an instance variable, the parameter "shadows" (hides) the instance variable. Writing \`this.fieldName\` explicitly tells the Java compiler: "I am talking about the field that belongs to this object, not the local method parameter."'
      },
      {
        type: 'bullet_list',
        title: 'Decoding "this.name = name"',
        items: [
          'this.name: Refers to the instance variable (field) belonging to the object on the Heap.',
          '=: The assignment operator copying the value.',
          'name: Refers to the local method or constructor parameter passed in as an argument.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'this Keyword',
          definition: 'A built-in reference pointer in Java pointing to the current object instance executing the active method or constructor.',
          explanation: 'Writing "this.age" gets the age field of whichever object is currently running the code.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Variable Shadowing',
          definition: 'A scope scenario where a local variable (like a parameter) shares the identical name as an instance variable, hiding it from direct reference.',
          explanation: 'Without "this", writing "name = name" just assigns the parameter variable to itself, leaving the field empty!'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'You can also use "this" to call other methods belonging to the same object, or even to chain constructors together! (e.g., using "this()" to call another constructor inside the same class).'
      }
    ],
    codeExamples: [
      {
        title: 'Resolving Variable Shadowing cleanly',
        language: 'java',
        code: `class Student {
    String name;
    int age;
    
    // We name parameters exactly like our instance variables!
    Student(String name, int age) {
        this.name = name; // Resolves conflict! Sets the object's name field.
        this.age = age;   // Resolves conflict! Sets the object's age field.
    }
    
    void introduce() {
        // "this" is optional here since there is no shadowing conflict!
        System.out.println("I am " + this.name + ", aged " + this.age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Limbani", 19);
        s.introduce();
    }
}`,
        explanation: 'Inside the constructor, writing "name = name;" would cause shadowed confusion. "this.name = name;" directs Java to copy the parameter "name" into the object field "name" safely.'
      },
      {
        title: 'The "this" Keyword in Object Methods',
        language: 'java',
        code: `class Student {
    String name;
    
    void setName(String name) {
        this.name = name; // Shadows local name parameter
    }
    
    void printDetails() {
        // Can call other methods on the same object using "this"!
        System.out.println("Details for: " + this.name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Chikondi");
        s.printDetails();
    }
}`,
        explanation: 'The "this" reference is always alive inside non-static methods, pointing dynamically to the specific object that called the method.'
      }
    ],
    visualLearning: [
      {
        type: 'memory',
        title: 'The Dynamic "this" Pointer',
        description: 'How "this" points to different locations depending on which object is currently running.',
        elements: {
          cells: [
            { address: '0x99AA', name: 'student1 Object', value: 'Student { name: "Limbani" }', type: 'Active when running student1 methods' },
            { address: '0xBBCC', name: 'student2 Object', value: 'Student { name: "Chikondi" }', type: 'Active when running student2 methods' },
            { address: 'this (active reference)', name: 'Keyword Pointer', value: 'Points dynamically to either 0x99AA or 0xBBCC', type: 'Contextual JVM execution variable' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using the "this" keyword inside static methods.',
        whyItHappens: 'Beginners sometimes think "this" is a universal shortcut to reference anything inside the class file.',
        howToAvoid: 'Remember that "static" methods belong to the class as a whole, not to any individual object. Because there is no active object when running a static method, the "this" keyword does not exist and will cause a compiler crash.',
        codeSnippet: {
          bad: `class Student {
    String name;
    // ❌ WRONG: Static method has no object context! "this" is illegal.
    static void printSchoolName() {
        System.out.println(this.name); 
    }
}`,
          good: `class Student {
    String name;
    // ✓ CORRECT: Non-static method can use "this" safely
    void printName() {
        System.out.println(this.name);
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'This Keyword Lab',
      tasks: [
        'Write a class "Product" with fields "name" and "price". Write a setter method "setDetails(String name, double price)" that resolves variable shadowing using the "this" keyword.',
        'Predict: if you write "name = name;" inside a constructor with a parameter "String name", what will the field "name" contain after instantiation? (Test it with a program!).',
        'In your own words, explain how the JVM determines what "this" points to when "s1.introduce()" runs vs when "s2.introduce()" runs.'
      ]
    },
    summary: [
      'The "this" keyword is a reference pointing to the current active object instance executing the code.',
      'It is primarily used to resolve variable shadowing when parameters share identical names with instance fields.',
      'Because static methods do not run in an object context, using "this" inside static blocks is strictly forbidden.'
    ]
  },

  'encapsulation': {
    slug: 'encapsulation',
    title: 'Encapsulation',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `In procedural programs, any part of code can read or modify any variable directly, which often leads to major data corruption. If any method can modify a student's age directly, someone could set it to a negative number or a million by accident.

**Encapsulation** is the protective shield of OOP. It involves hiding sensitive internal data behind secure walls, allowing access only through controlled "doors" called **Getters** and **Setters**.`,
    whyThisTopicMatters: {
      whyItExists: `Variables inside your classes represent real business data—like account balances, product prices, and ages. If other classes can modify these values without rules, your system is vulnerable to bugs. Data should never be exposed raw.`,
      problemSolved: `Encapsulation ensures that fields can only be modified under strict, pre-written validation rules. It lets you inspect and validate incoming updates, protecting the integrity of your objects.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Encapsulation is achieved in Java by following a strict two-step security layout:'
      },
      {
        type: 'bullet_list',
        title: 'The two steps of Encapsulation',
        items: [
          'Step 1: Hide the data. Mark all class variables (fields) with the "private" access modifier keyword. This blocks outside classes from reading or writing to them directly.',
          'Step 2: Expose controlled pathways. Create public methods called Getters (to read) and Setters (to write) to manage access safely.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Getter and Setter methods follow a very standard design format:'
      },
      {
        type: 'bullet_list',
        title: 'Getter and Setter naming conventions',
        items: [
          'Getter: A public method that returns the field value. Starts with "get" (e.g., "public String getName() { return this.name; }").',
          'Setter: A public void method that accepts an input parameter and assigns it to the field. Starts with "set" (e.g., "public void setName(String name) { this.name = name; }").'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'private Access Modifier',
          definition: 'A keyword making fields or methods accessible ONLY inside the class they are declared in.',
          explanation: 'Marking "private int age;" means other class files cannot write "s.age = 20" anymore.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Encapsulation',
          definition: 'The principle of grouping data and methods together while hiding internal details and exposing them via secure interfaces.',
          explanation: 'Getters and setters act as the controlled doors to read and write encapsulated properties.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'By omitting a Setter, you can create a read-only property! This is extremely helpful for secure, constant data like IDs or security codes.'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing Encapsulation with Validation',
        language: 'java',
        code: `class Student {
    // Step 1: Private fields hide the data!
    private String name;
    private int age;
    
    // Step 2: Public constructor initializes state
    public Student(String name, int age) {
        this.name = name;
        setAge(age); // Use setter to enforce validation rules!
    }
    
    // Getter for Name
    public String getName() {
        return this.name;
    }
    
    // Getter for Age
    public int getAge() {
        return this.age;
    }
    
    // Setter for Age with secure validation logic!
    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        } else {
            System.out.println("Invalid age value: " + age + ". Age set to default: 18");
            this.age = 18;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Limbani", 19);
        
        // s.age = -5; // ❌ COMPILER ERROR! Private fields are completely hidden.
        
        // We must use the public setter!
        s.setAge(-5); // Triggers validation error, falls back to 18
        
        System.out.println(s.getName() + " is " + s.getAge() + " years old.");
    }
}`,
        explanation: 'The age field is secure inside Student. Outside code cannot alter it directly. By routing updates through setAge(), we intercept and filter bad values.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Direct Field Access vs. Encapsulated Access',
        description: 'Contrasting the risks of raw property reads/writes with the protection of secure getter/setter pathways.',
        elements: {
          headers: ['Action', 'Direct Access (Raw Class)', 'Encapsulated Access (Secure Class)'],
          rows: [
            ['Syntax', 's.age = -20;', 's.setAge(-20);'],
            ['Safety', 'No safety checks! Allows corrupted, invalid, or illegal values.', 'Runs validation rules to filter or adjust incoming values.'],
            ['Read-Only Properties', 'Impossible. If a field is public, anyone can write to it.', 'Highly simple: declare a getter, omit the setter.'],
            ['Implementation Changes', 'Breaks other classes if variable name is modified.', 'Hides changes entirely. Inside code can change while getter/setter names stay identical.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring fields as private but failing to use getters and setters in main, expecting them to still be readable.',
        whyItHappens: 'Beginners forget that marking a field "private" makes it completely invisible to all outside classes, including your executable Main class.',
        howToAvoid: 'Once fields are marked private, you must always use ".getFieldName()" and ".setFieldName()" to interact with them in your main program.',
        codeSnippet: {
          bad: `// ❌ WRONG: Compiler error, cannot access age directly!
Student s = new Student("Limbani", 19);
System.out.println(s.age);`,
          good: `// ✓ CORRECT: Always use getter methods to retrieve private values
Student s = new Student("Limbani", 19);
System.out.println(s.getAge());`
        }
      }
    ],
    practiceExercise: {
      title: 'Encapsulation Defense Lab',
      tasks: [
        'Create a fully encapsulated class named "BankAccount" containing fields for "accountNumber" (String) and "balance" (double). Expose read-only access for accountNumber, and add a setter for balance that rejects negative deposits.',
        'Create a setter for GPA inside a "Student" class that rejects any values outside the range of "0.0" up to "4.0".',
        'Explain why encapsulating data keeps your code modular and prevents other developers from breaking your application when they update internal class names.'
      ]
    },
    summary: [
      'Encapsulation hides sensitive object data behind private walls to prevent direct, unvalidated alterations.',
      'Getters are public methods returning private field values, while Setters are public methods validating and writing values.',
      'Getters and setters enable read-only fields, separate implementation from interface, and enforce data correctness rules.'
    ]
  },

  'combining-classes-and-objects': {
    slug: 'combining-classes-and-objects',
    title: 'Combining Classes and Objects',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '12 mins',
    difficulty: 'Intermediate',
    introduction: `In real applications, you don't build software using single isolated classes. Instead, multiple distinct classes interact, send messages, and hold references to one another.

"When we learned arrays, we stored multiple simple values. Now we can store multiple custom objects inside arrays!" We will analyze a complete, practical Library system that links Book, Student, and Library classes together to demonstrate how object interactions work.`,
    whyThisTopicMatters: {
      whyItExists: `A school registration app, an online store, or a video game requires different concepts (e.g., Customer, Product, Invoice) to cooperate. Objects must be able to hold references to other objects to model these relationships accurately.`,
      problemSolved: `This approach lets you construct complex data webs. A Book object can store a reference to a Student object representing its current borrower, linking information seamlessly.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To build complex systems, we use **Composition**—where one object contains references to other objects as its fields. For instance, a "Car" object might contain an "Engine" object, and a "Library" object might contain an array of "Book" objects.'
      },
      {
        type: 'paragraph',
        text: 'When working with arrays of objects, remember that creating the array does not automatically create the objects inside it:'
      },
      {
        type: 'bullet_list',
        title: 'Managing arrays of custom objects safely',
        items: [
          'Declare and size the array: "Book[] list = new Book[5];" reserves 5 slots in memory, but they are all initialized to "null"!',
          'Instantiate individual slots: You must run "list[0] = new Book(\"Java 101\");" to allocate the actual book objects inside the slots.',
          'Verify with null checks: When looping through an object array, always check if a slot is "null" before accessing its methods to prevent crashes!'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Composition (Has-A Relationship)',
          definition: 'A design practice where a class contains references to instances of other classes as fields.',
          explanation: 'A Library class has a "Book[]" array, representing a has-a relation: "Library Has-A collection of Books".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Null Reference Slot',
          definition: 'An index slot inside an object array that does not point to any active memory block yet, holding the default value "null".',
          explanation: 'Accessing properties (e.g., list[i].getTitle()) on a null slot instantly crashes your code.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'When working with loops to search through object arrays, always place a "if (books[i] != null)" check first. If you omit this, scanning any half-empty array will crash your application on the very first empty slot!'
      }
    ],
    codeExamples: [
      {
        title: 'Building a Cooperative Library System',
        language: 'java',
        code: `// Class 1: Represents a Student borrower
class Student {
    private String name;
    
    public Student(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

// Class 2: Represents a Book which can be borrowed by a Student
class Book {
    private String title;
    private Student borrower; // Field stores a reference to a Student object!
    
    public Book(String title) {
        this.title = title;
        this.borrower = null; // Unborrowed by default
    }
    
    public String getTitle() { return title; }
    public Student getBorrower() { return borrower; }
    
    public void borrowBook(Student student) {
        this.borrower = student;
    }
}

// Class 3: Represents a Library containing an array of Books
class Library {
    private Book[] inventory;
    
    public Library(int capacity) {
        // Creates the array container (all slots are null initially!)
        this.inventory = new Book[capacity];
    }
    
    // Method to add a book to the next empty slot
    public void addBook(Book book, int slot) {
        if (slot >= 0 && slot < inventory.length) {
            inventory[slot] = book;
        }
    }
    
    // Method to display inventory and borrowing status
    public void printInventory() {
        System.out.println("--- Library Inventory ---");
        for (int i = 0; i < inventory.length; i++) {
            Book book = inventory[i];
            
            // 1. Safety check! Skip empty slots
            if (book == null) {
                System.out.println("Slot " + i + ": [Empty]");
                continue;
            }
            
            // 2. Read state and print
            if (book.getBorrower() == null) {
                System.out.println("Slot " + i + ": " + book.getTitle() + " (Available)");
            } else {
                System.out.println("Slot " + i + ": " + book.getTitle() + " (Borrowed by " + book.getBorrower().getName() + ")");
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Instantiate the library
        Library myLibrary = new Library(3);
        
        // Instantiate separate book and student objects
        Book b1 = new Book("Intro to Java");
        Book b2 = new Book("OOP Fundamentals");
        Student studentUser = new Student("Limbani");
        
        // Link them together!
        myLibrary.addBook(b1, 0);
        myLibrary.addBook(b2, 1);
        
        // Borrower operation
        b2.borrowBook(studentUser);
        
        // Display results
        myLibrary.printInventory();
    }
}`,
        explanation: 'We create separate objects: Library, Books, and a Student. We place the books inside the Library\'s array and point the book\'s borrower reference to the Student. The objects collaborate perfectly.'
      }
    ],
    visualLearning: [
      {
        type: 'object_relation',
        title: 'Inter-Object Composition Diagram',
        description: 'How objects hold references to other objects to build relational systems.',
        elements: {
          classes: [
            { name: 'Library', fields: ['Book[] inventory'], methods: ['void printInventory()'] },
            { name: 'Book', fields: ['String title', 'Student borrower'], methods: ['void borrowBook(Student s)'] },
            { name: 'Student', fields: ['String name'], methods: ['String getName()'] }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Failing to check for null inside a loop that traverses an object array.',
        whyItHappens: 'Beginners allocate an array of size 10, fill 3 slots, and run a loop up to 10. When the loop reaches index 3 (which is null) and calls a method, the JVM crashes.',
        howToAvoid: 'Always include a check: "if (array[i] != null)" inside any object array scanning loop before invoking dot-methods.',
        codeSnippet: {
          bad: `// ❌ WRONG: If slot 2 is empty, this line crashes with NullPointerException!
for (int i = 0; i < books.length; i++) {
    System.out.println(books[i].getTitle());
}`,
          good: `// ✓ CORRECT: Always verify that the slot is not null first
for (int i = 0; i < books.length; i++) {
    if (books[i] != null) {
        System.out.println(books[i].getTitle());
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Composition Architecture Lab',
      tasks: [
        'Modify the Library code snippet to add a search method: "public void searchBook(String title)" inside the Library class that prints the slot details if a book matches (use ".equals()" or ".equalsIgnoreCase()" to compare titles safely!).',
        'In your own words, explain why writing "Book[] list = new Book[5];" does not actually create 5 Book objects in the Heap.',
        'Create a "Course" class that contains an array of "Student" objects representing enrolled students. Add a method to add a student to the course.'
      ]
    },
    summary: [
      'Composition is the OOP design practice where classes hold variables pointing to other class instances.',
      'Object arrays hold memory reference addresses; they are initialized to "null" and must have their indexes populated manually with "new" objects.',
      'Always place a null-safety check inside loops traversing object arrays to avoid NullPointerException crashes.'
    ]
  },

  'mini-project-student-management-system': {
    slug: 'mini-project-student-management-system',
    title: 'Mini Project – Student Management System',
    moduleSlug: 'oop',
    moduleName: 'Object-Oriented Programming',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `It is time to put everything you have mastered together! In this mini-project, we will build an interactive, object-oriented Student Management System.

We will write multiple cooperative classes, implement robust data constructors, apply encapsulation getters and setters with secure validations, manage object arrays, and utilize loops, conditions, and search algorithms.`,
    whyThisTopicMatters: {
      whyItExists: `The ultimate goal of learning coding patterns is building complete, working software. Building a unified registrar registry teaches you how to coordinate classes, manage arrays, and implement search utilities within a single system.`,
      problemSolved: `This project binds all previous concepts (variables, conditions, loops, methods, arrays, strings, and encapsulation) into a single program, helping you transition from a beginner to a developer.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To build our Student Management System, we will implement three core parts:'
      },
      {
        type: 'bullet_list',
        title: 'Project architecture layout',
        items: [
          'Part 1: The Encapsulated "Student" Class: Holds name, ID, and score. Protects scores with setter limits.',
          'Part 2: The "StudentRegistry" Class: Manages a fixed-size array of Student objects, offering features to add, print, and search.',
          'Part 3: The Executable Driver Class: Instantiates the registry, registers students, and runs search operations.'
        ]
      },
      {
        type: 'paragraph',
        text: 'As we build this project, remember the lessons we learned about object arrays, the "this" keyword, and string comparison. We will use ".equalsIgnoreCase()" to ensure our search is robust and case-insensitive!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Registry Pattern',
          definition: 'A design layout where an object wraps and coordinates a database list or array of other objects, managing all additions and queries.',
          explanation: 'The StudentRegistry class encapsulates a "Student[] database" array, keeping list management separate from the Main program.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Interactive Search Algorithm',
          definition: 'A programmatic lookup loop that scans an array of objects to locate elements matching user parameters.',
          explanation: 'We loop through our students array, ignore nulls, and check if student.getName() matches our search query.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'This project is modular! It has clear separations of concern. The Student class manages student details, the StudentRegistry manages the collection of students, and the Main class drives the execution. This is how professional enterprise software is written!'
      }
    ],
    codeExamples: [
      {
        title: 'The Student Management System Code',
        language: 'java',
        code: `// PART 1: The secure, encapsulated Student class
class Student {
    private int id;
    private String name;
    private double grade; // Represented as GPA (0.0 to 4.0)
    
    // Constructor
    public Student(int id, String name, double grade) {
        this.id = id;
        this.name = name;
        setGrade(grade); // Use setter validation!
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public String getName() { return name; }
    public double getGrade() { return grade; }
    
    public void setGrade(double grade) {
        if (grade >= 0.0 && grade <= 4.0) {
            this.grade = grade;
        } else {
            System.out.println("Warning: Invalid grade " + grade + ". Defaulting to 2.0");
            this.grade = 2.0;
        }
    }
    
    // Custom display method
    public void displayStudent() {
        System.out.println("ID: " + id + " | Name: " + name + " | GPA: " + grade);
    }
}

// PART 2: The Registry class that wraps student arrays
class StudentRegistry {
    private Student[] students;
    private int count; // Tracks active enrolled students count
    
    public StudentRegistry(int capacity) {
        this.students = new Student[capacity];
        this.count = 0;
    }
    
    // Add a student safely
    public boolean addStudent(Student s) {
        if (count < students.length) {
            students[count] = s;
            count++;
            return true;
        } else {
            System.out.println("Error: Registry is full! Cannot add " + s.getName());
            return false;
        }
    }
    
    // Display all students in the list
    public void printAllStudents() {
        System.out.println("\\n--- Active Student Directory (" + count + " Enrolled) ---");
        if (count == 0) {
            System.out.println("No students registered yet.");
            return;
        }
        for (int i = 0; i < students.length; i++) {
            if (students[i] != null) {
                students[i].displayStudent();
            }
        }
    }
    
    // Search students by name case-insensitively!
    public void searchStudentByName(String queryName) {
        System.out.println("\\nSearching for student containing: \\"" + queryName + "\\"...");
        boolean found = false;
        
        for (int i = 0; i < students.length; i++) {
            Student s = students[i];
            
            // Safety check! Skip nulls
            if (s == null) {
                continue;
            }
            
            // Check if name contains search term, ignoring case!
            if (s.getName().toLowerCase().contains(queryName.toLowerCase())) {
                s.displayStudent();
                found = true;
            }
        }
        
        if (!found) {
            System.out.println("No registered students matched your search.");
        }
    }
}

// PART 3: The Test Driver class
public class Main {
    public static void main(String[] args) {
        // Create registry with space for 5 students
        StudentRegistry registry = new StudentRegistry(5);
        
        // Register students with various grades
        registry.addStudent(new Student(101, "Limbani Banda", 3.8));
        registry.addStudent(new Student(102, "Chikondi Phiri", 3.5));
        registry.addStudent(new Student(103, "Tiwonge Maseko", 4.5)); // Validates, defaults to 2.0!
        registry.addStudent(new Student(104, "Sarah Phiri", 3.9));
        
        // Display initial database
        registry.printAllStudents();
        
        // Execute queries
        registry.searchStudentByName("Phiri"); // Finds Chikondi and Sarah
        registry.searchStudentByName("Limbani"); // Finds Limbani Banda
        registry.searchStudentByName("Alex"); // Prints not found message
    }
}`,
        explanation: 'We build an elegant registry database. When we add Tiwonge with an illegal GPA of 4.5, our encapsulated setter intercepts it and defaults to 2.0. We then perform complex searches across our object collection safely using contains() and toLowerCase().'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Project Coordination Flow',
        description: 'How the Main program triggers registry lookups that safely scan the database array.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Call "registry.searchStudentByName(\"Phiri\")"', desc: 'The query begins.' },
            { id: '2', type: 'process', label: 'Loop Array', desc: 'Scan index 0 up to capacity limit.' },
            { id: '3', type: 'decision', label: 'Is Slot Null?', desc: 'Check if index points to an actual object.' },
            { id: '4', type: 'process', label: 'Match Name Query', desc: 'Run .toLowerCase().contains() check.' },
            { id: '5', type: 'end', label: 'Print Matches', desc: 'Display matched student profiles on console.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using the "==" operator to search or match string names in the registry lookup.',
        whyItHappens: 'Programmers forget that "==" checks memory addresses instead of checking character strings, which causes search lookups to fail for inputs loaded dynamically.',
        howToAvoid: 'Always use string methods like ".equals()", ".equalsIgnoreCase()", or ".contains()" for string lookups inside search loops.',
        codeSnippet: {
          bad: `// ❌ WRONG: Will fail if names are loaded from input streams
if (students[i].getName() == queryName) {
    students[i].displayStudent();
}`,
          good: `// ✓ CORRECT: Safe, robust string content matching
if (students[i].getName().equalsIgnoreCase(queryName)) {
    students[i].displayStudent();
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Project Extension Challenges',
      tasks: [
        'Modify the StudentRegistry class to add a method named "printHonorRoll()" that only loops through and displays students with a GPA of 3.5 or higher.',
        'Add a method "removeStudent(int id)" to the StudentRegistry class that searches for a student by ID, sets that index slot to "null", and decreases the count of registered students.',
        'Create an updated search method that searches for students by ID instead of by name, and returns the Student object directly if found.'
      ]
    },
    summary: [
      'The Registry Pattern manages collections of objects cleanly, isolating data storage from execution logic.',
      'Getters, setters, and constructors cooperate to build secure, robust data profiles.',
      'Loops, array lookups, and string searches must be designed with null-safety checks to run flawlessly in production.'
    ]
  }
};
