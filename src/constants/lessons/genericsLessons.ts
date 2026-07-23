import { DetailedLessonContent } from '../../types';

export const GENERICS_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-generics': {
    slug: 'introduction-to-generics',
    title: 'Introduction to Generics',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `In previous modules, we explored the Java Collections Framework, using structures like \`ArrayList<String>\` and \`HashMap<String, Integer>\`. But have you ever wondered what those letters inside the angle brackets (\`<String>\`, \`<Integer>\`) actually do?

Those angle brackets represent **Generics**, a powerful feature introduced in Java 5 that allows us to write single, reusable classes and methods that work safely across different data types.`,
    whyThisTopicMatters: {
      whyItExists: `In early versions of Java (before 2004), lists stored all data as generic "Object" references. This meant a list could hold strings, integers, and custom student files all at once, leading to chaotic type conversions and constant program crashes.`,
      problemSolved: `Generics introduce compile-time **Type Safety**. It tells the compiler exactly what type of item is allowed inside a collection, helping catch mistakes instantly during development rather than crashing your program in production.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand why Generics are so revolutionary, let\'s examine how Java collections stored information before Generics existed:'
      },
      {
        type: 'bullet_list',
        title: 'The Pre-Generic Era (Java 1.4 and older)',
        items: [
          'No Type Restrictions: Every collection stored items as the parent "Object" class.',
          'Manual Type Casting: When you retrieved an item from a list, you had to manually cast it back to its original type (e.g., "(String) list.get(0)").',
          'The ClassCastException: If you accidentally put an Integer into a list meant for strings, you would not see any compiler warning. But when your program tried to cast it to a String at runtime, it would crash instantly.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Generics solved this by parameterizing types. Just like methods accept parameters inside parentheses, Generics allow classes and methods to accept **Type Parameters** inside angle brackets!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Generics',
          definition: 'A facility that enables types (classes and interfaces) to be parameters when defining classes, interfaces, and methods.',
          explanation: 'It acts as a placeholder for a specific type of object, which is supplied by the developer when instantiating the class.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'ClassCastException',
          definition: 'A runtime exception thrown when code attempts to cast an object to a subclass of which it is not an instance.',
          explanation: 'For example, trying to force an Integer variable into a String variable slot.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Learning Connection: Generics only work with Reference Types (Objects)! You cannot use primitives like int, double, or boolean inside angle brackets. Instead, you must use their Wrapper Classes: Integer, Double, and Boolean.'
      }
    ],
    codeExamples: [
      {
        title: 'Before vs. After Generics',
        language: 'java',
        code: `import java.util.ArrayList;

public class PreGenericDemo {
    public static void main(String[] args) {
        // 1. THE OLD DANGEROUS WAY (No Generics)
        ArrayList oldList = new ArrayList();
        oldList.add("Alinafe");
        oldList.add(100); // ❌ No warning! Java happily allows mix-and-matching.

        // Retrieval requires manual casting
        String name1 = (String) oldList.get(0); 
        System.out.println("Name: " + name1);

        try {
            String name2 = (String) oldList.get(1); // ❌ Crash! Throws ClassCastException
        } catch (ClassCastException e) {
            System.out.println("Caught crash: Can't cast Integer to String!");
        }

        // 2. THE MODERN SAFE WAY (With Generics)
        ArrayList<String> newList = new ArrayList<>();
        newList.add("Brie");
        // newList.add(100); // ❌ COMPILER ERROR! Java blocks this code before it can compile.

        // Retrieval is automatic and safe! No casting needed!
        String name3 = newList.get(0); 
        System.out.println("Safe Name: " + name3);
    }
}`,
        explanation: 'In the pre-generic example, adding an Integer to a raw list compiles fine, but manual casting results in a ClassCastException runtime crash. In the generic example, the compiler blocks non-string additions immediately, keeping code completely type-safe.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Pre-Generic vs. Generic Style',
        description: 'How code readability and safety evolved with Generics.',
        elements: {
          headers: ['Feature', 'Old Style (Java 1.4)', 'Modern Style (Java 5+)'],
          rows: [
            ['Declaration Syntax', 'ArrayList names = new ArrayList();', 'ArrayList<String> names = new ArrayList<>();'],
            ['Type Restrictions', 'None (stores any Object)', 'Enforced (stores only specified type)'],
            ['Error Discovery', 'Runtime (during execution crash)', 'Compile-time (flagged in code editor)'],
            ['Retrieval Casting', 'Required: String s = (String) names.get(0);', 'Automatic: String s = names.get(0);'],
            ['Data Stability', 'Unstable (vulnerable to type corruption)', 'Solid (guarantees uniform data values)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to declare a generic collection using primitive data types.',
        whyItHappens: 'Forgetting that Generics operate on references and objects, meaning primitives are not allowed.',
        howToAvoid: 'Always use the uppercase wrapper class equivalents (e.g., Double instead of double, Character instead of char).',
        codeSnippet: {
          bad: `// ❌ Will fail to compile! Primitives not allowed as type parameters.
ArrayList<int> scores = new ArrayList<>();`,
          good: `// ✓ CORRECT: Use the Wrapper class representation!
ArrayList<Integer> scores = new ArrayList<>();
scores.add(95); // Autoboxing converts primitive 95 to Integer automatically!`
        }
      }
    ],
    practiceExercise: {
      title: 'Identify the Type Errors',
      tasks: [
        'Write down which of the following lines will compile, and which will throw errors:',
        '1) ArrayList<String> list = new ArrayList<>(); list.add("Hello");',
        '2) ArrayList<double> decimals = new ArrayList<>();',
        '3) ArrayList<Object> mixed = new ArrayList<>(); mixed.add("A"); mixed.add(1);',
        'In your own words, explain how compile-time type safety saves developer debugging time.'
      ]
    },
    summary: [
      'Generics let you parameterize data types, enabling classes and collections to be reusable with different formats.',
      'Before Generics, lists stored generic Objects and required manual casting, making programs vulnerable to runtime crashes.',
      'Generics prevent runtime ClassCastException bugs by enforcing type-checking directly at compile-time.'
    ]
  },

  'generic-classes': {
    slug: 'generic-classes',
    title: 'Generic Classes',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '12 mins',
    difficulty: 'Intermediate',
    introduction: `Now that we understand the benefits of Generics, let's learn how to design our own custom generic classes.

A **Generic Class** is a class that declares one or more type parameters (placeholders) at its class header level. These placeholder variables are filled with real class types when a developer instantiates the class in their code.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine writing a class to hold database responses. You want one response class that can carry Student objects, another that carries Teacher objects, and another that carries Assignment objects. Without generics, you would have to write three identical copy-pasted classes!`,
      problemSolved: `Generic classes let you write a single container class that can hold any object type while maintaining complete type safety.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To make a class generic, we add angle brackets after the class name and specify a **Type Parameter** (commonly represented by capital letters like T, E, K, V):'
      },
      {
        type: 'bullet_list',
        title: 'Common Type Parameter Conventions',
        items: [
          'T (Type): Represents any general object type.',
          'E (Element): Used heavily by collections to denote a list element.',
          'K, V (Key, Value): Used by maps to denote key-value pair types.',
          'N (Number): Used for numeric parameters.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Let\'s analyze the syntax of declaring a generic class:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Type Parameter',
          definition: 'A placeholder variable used in generic declarations that represents a type to be specified later.',
          explanation: 'In "class Box<T>", the letter "T" is the type parameter.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Type Argument',
          definition: 'The actual concrete class type supplied when creating an instance of a generic class.',
          explanation: 'In "Box<String> b = new Box<>();", "String" is the type argument.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Multiple Placeholders: You are not limited to one placeholder. You can declare multiple parameters separated by commas: class Pair<K, V> { private K key; private V value; }.'
      }
    ],
    codeExamples: [
      {
        title: 'Building a Generic Storage Box',
        language: 'java',
        code: `// T acts as a placeholder for any object type
public class Box<T> {
    private T item; // Declare a variable of type T

    // Constructor accepts a T parameter
    public Box(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }

    public void setItem(T item) {
        this.item = item;
    }

    public static void main(String[] args) {
        // 1. Instantiate the box for String types
        Box<String> textBox = new Box<>("Hello World");
        String message = textBox.getItem(); // No casting required!
        System.out.println("Stored text: " + message);

        // 2. Instantiate the box for Integer types
        Box<Integer> numberBox = new Box<>(123);
        int val = numberBox.getItem(); // Automatic unboxing
        System.out.println("Stored number: " + val);
    }
}`,
        explanation: 'We declare class Box<T> where T represents an arbitrary type. This T is used for the instance variable "item", the constructor parameter, and the return type of getItem(). When instantiating, Box<String> binds T as String, while Box<Integer> binds T as Integer.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Class State Transitions during Instantiation',
        description: 'How the Java compiler conceptually visualizes Box<T> when concrete types are supplied.',
        elements: {
          headers: ['Code Line', 'Compiled Representation of T', 'Internal Item Datatype'],
          rows: [
            ['Box<String> b = new Box<>("Java");', 'T -> String', 'private String item;'],
            ['Box<Integer> b = new Box<>(42);', 'T -> Integer', 'private Integer item;'],
            ['Box<Student> b = new Box<>(new Student());', 'T -> Student', 'private Student item;'],
            ['Box<Double> b = new Box<>(3.14);', 'T -> Double', 'private Double item;']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to use static members with the class type parameter T.',
        whyItHappens: 'Forgetting that static variables and methods belong to the class itself, not individual instances. Since different instances can declare different types for T, a static variable cannot have a single type T.',
        howToAvoid: 'Never declare static fields or static methods using the type parameter placeholder of the outer class.',
        codeSnippet: {
          bad: `public class Box<T> {
    // ❌ Compiler Error! Static fields cannot be generic type parameters!
    private static T defaultItem;
}`,
          good: `public class Box<T> {
    // ✓ CORRECT: Keep generic parameters bound to instance members!
    private T item;
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Create a Type-Safe Key-Value Pair',
      tasks: [
        'Write a custom generic class named Pair<K, V> that holds a key of type K and a value of type V.',
        'Implement a constructor Pair(K key, V value), and getter methods for both variables.',
        'In your main method, instantiate a Pair storing a Student ID (Integer) and Student Name (String), and print both out.'
      ]
    },
    summary: [
      'A generic class declares a placeholder type parameter like <T> in its class declaration header.',
      'This placeholder represents a real class type supplied by developers during object creation.',
      'Using generic classes prevents duplicate copy-paste classes and keeps properties safe without manual casting.'
    ]
  },

  'generic-methods': {
    slug: 'generic-methods',
    title: 'Generic Methods',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `Sometimes, you don't need an entire class to be generic. You might just want a single method inside a regular class to operate over variable data types safely.

To achieve this, Java allows us to write **Generic Methods**. These methods declare their own independent type parameters, which are evaluated dynamically based on the arguments passed during execution.`,
    whyThisTopicMatters: {
      whyItExists: `Utility classes (like Java's Collections class) often need simple helper methods to search, swap, or print collections of any type. Writing individual methods for String arrays, Integer arrays, and User arrays would result in massive boilerplate duplication.`,
      problemSolved: `Generic methods let you write a single algorithm that accepts variable types, keeping your code exceptionally dry and modular.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The syntax of a generic method can look a bit unusual at first. The type parameter placeholder **must** be declared before the return type of the method:'
      },
      {
        type: 'paragraph',
        text: 'Let\'s break down the declaration of a generic method:'
      },
      {
        type: 'bullet_list',
        title: 'Generic Method Structure',
        items: [
          'Type Parameter Declaration: <E> - Placed immediately after the modifiers (e.g., public static) and before the return type. This lets the compiler know that "E" represents a generic type variable, not an actual class name.',
          'Return Type: E or void or boolean - The method returns data of type E, or standard data structures.',
          'Parameters: (E[] elements) - The method accepts arguments using the generic type placeholder.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Generic Method',
          definition: 'A method that introduces its own type parameters, independent of the class in which it is declared.',
          explanation: 'Both static and non-static methods can be generic.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Type Inference',
          definition: 'The compiler\'s ability to automatically figure out the concrete type argument of a generic call by analyzing the method argument types.',
          explanation: 'When calling swap(names, 0, 1), the compiler inspects "names" and infers that the type parameter is String.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Class Context: A generic method can exist inside either a generic class or a completely non-generic class!'
      }
    ],
    codeExamples: [
      {
        title: 'Building a Generic Array Swapper',
        language: 'java',
        code: `public class MethodUtility {

    // 1. Generic method declared with <E> placeholder before the return type "void"
    public static <E> void swap(E[] array, int index1, int index2) {
        E temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    public static void main(String[] args) {
        // Concrete arrays of different types
        String[] words = {"Java", "Generics", "Are", "Tricky"};
        Integer[] scores = {100, 85, 90, 75};

        // 2. Call swap on String arrays (Compiler infers E as String)
        swap(words, 0, 3);
        System.out.println("Swapped words: " + words[0] + " ... " + words[3]);

        // 3. Call swap on Integer arrays (Compiler infers E as Integer)
        swap(scores, 0, 1);
        System.out.println("Swapped scores: " + scores[0] + ", " + scores[1]);
    }
}`,
        explanation: 'The static method swap declares <E> to represent a generic array element. Inside, we use a standard bubble swap logic using E temp. When invoked, Java uses Type Inference to dynamically evaluate E as String or Integer based on the array argument.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Generic Method vs. Regular Method',
        description: 'Comparing syntactic layouts of standard vs. parameterized methods.',
        elements: {
          headers: ['Method Style', 'Declaration Syntax', 'How Types are Resolved'],
          rows: [
            ['Standard Method', 'public void print(String text)', 'Fixed to String at compile-time.'],
            ['Generic Method', 'public <T> void print(T item)', 'Inferred dynamically based on what you pass in.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to declare the type parameter <T> before the return type.',
        whyItHappens: 'Assuming that just placing T inside the parameter list is sufficient for the compiler to understand what it is.',
        howToAvoid: 'Always declare the type parameter bracket (e.g., <T>) immediately before the return type. Otherwise, the compiler will assume "T" is the name of a real class that does not exist, causing compilation failures.',
        codeSnippet: {
          bad: `// ❌ Will fail to compile! Compiler thinks "T" is an actual class name!
public static void printItem(T item) {
    System.out.println(item);
}`,
          good: `// ✓ CORRECT: Added <T> declaration!
public static <T> void printItem(T item) {
    System.out.println(item);
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Develop a Generic Array Printer',
      tasks: [
        'Write a generic method named printArray that takes an array of type E[] as a parameter.',
        'The method should use a for-each loop to print each item followed by a space.',
        'Test your method inside a main method by passing a String array and a Double array.'
      ]
    },
    summary: [
      'Generic methods declare their own type parameters before the return type, independent of the outer class.',
      'They can be static or non-static, and can operate within regular non-generic classes.',
      'Java uses Type Inference to figure out the type parameter dynamically, making method invocations clean.'
    ]
  },

  'generics-with-collections': {
    slug: 'generics-with-collections',
    title: 'Generics With Collections',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '12 mins',
    difficulty: 'Intermediate',
    introduction: `In previous modules, we introduced Java Collections like ArrayList, HashSet, and HashMap. Now that we understand how Generics work, we can fully appreciate how Java's collections use type parameterization to organize groups of custom objects.

In this lesson, we will explore how Generics empower collections to manage complex, custom classes while safeguarding type stability.`,
    whyThisTopicMatters: {
      whyItExists: `A real registry app needs to manage hundreds of student records. Using raw collections, you run the risk of introducing a corrupted teacher object or administrative class file into your student list.`,
      problemSolved: `Generics with collections enforce that a list can only receive custom object models (like Student) that your program is ready to handle.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When we declare a standard collection, we pass a custom class name inside the angle brackets. For example:'
      },
      {
        type: 'bullet_list',
        title: 'Common Collections Syntax',
        items: [
          'ArrayList<Student> list = new ArrayList<>(); - This instantiates a dynamic array list designed to hold only Student objects.',
          'HashMap<String, Course> courses = new HashMap<>(); - Instantiates a key-value map where keys are strings (Course Codes) and values are custom Course objects.'
        ]
      },
      {
        type: 'paragraph',
        text: 'This parameterization allows us to write clean Object-Oriented flows without tedious casts.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Parameterized Collection',
          definition: 'A collection class declared with a generic type parameter limiting its scope to a specific class.',
          explanation: 'Like ArrayList<Student>, locking the list to student files.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Diamond Operator',
          definition: 'The empty angle brackets (<>) used in Java 7+ to let the compiler infer type arguments during instantiation.',
          explanation: 'Allows writing "new ArrayList<>()" instead of repeating "new ArrayList<String>()".'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Polymorphism with Collections: If class Student has a subclass GraduateStudent, you CAN add GraduateStudent instances into an ArrayList<Student>. Generics allow objects matching the specified class or any of its subclasses.'
      }
    ],
    codeExamples: [
      {
        title: 'Managing Custom Objects in collections Safely',
        language: 'java',
        code: `import java.util.ArrayList;

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

public class RosterManager {
    public static void main(String[] args) {
        // Enforce ArrayList to hold Student object references
        ArrayList<Student> roster = new ArrayList<>();
        
        roster.add(new Student("Alinafe", 92.5));
        roster.add(new Student("Brie", 87.0));
        
        // ❌ Compiler blocks this! Cannot add String to Student collection.
        // roster.add("Chikondi"); 

        System.out.println("ByteAcademy Class Roster:");
        // Loop directly retrieves Student objects safely!
        for (Student s : roster) {
            System.out.println("- " + s.getName() + " (Grade: " + s.getGrade() + ")");
        }
    }
}`,
        explanation: 'We declare ArrayList<Student>. Because the collection is parameterized, we can use a standard for-each loop "for (Student s : roster)" and directly invoke student methods without manual casting or worrying about corrupted elements.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Collections Constraints Comparison',
        description: 'How different collections handle parameterized types.',
        elements: {
          headers: ['Collection Type', 'Syntax Style', 'Type Enforcements'],
          rows: [
            ['ArrayList', 'ArrayList<Student> list', 'Index entries must be Student references.'],
            ['HashSet', 'HashSet<Double> grades', 'Stores unique, non-duplicate Double wrapper values.'],
            ['HashMap', 'HashMap<String, Student> map', 'Keys must be String; values must be Student objects.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to cast a collection type itself polymorphically based on its generic parameters.',
        whyItHappens: 'Assuming that since Integer is a subclass of Number, an ArrayList<Integer> can be cast to an ArrayList<Number>. In Java Generics, collections are invariant, meaning their types must match exactly.',
        howToAvoid: 'Remember that ArrayList<Integer> is NOT an ArrayList<Number>. If you need parameters that accept both, you must use Wildcards.',
        codeSnippet: {
          bad: `// ❌ Compiler Error! Type mismatch: cannot convert ArrayList<Integer> to ArrayList<Number>
ArrayList<Integer> ints = new ArrayList<>();
ArrayList<Number> nums = ints;`,
          good: `// ✓ CORRECT: Declare exact matching parameters or use Wildcards!
ArrayList<Integer> ints = new ArrayList<>();
ArrayList<? extends Number> nums = ints; // Wildcard allows safe reference read-only!`
        }
      }
    ],
    practiceExercise: {
      title: 'Build a Course Registry Map',
      tasks: [
        'Define a Class Course with a courseName property and courseId.',
        'Declare a HashMap using Course IDs (String) as keys, and Course objects as values.',
        'Populate the map with two courses, retrieve one using its Key, and print the Course details.'
      ]
    },
    summary: [
      'Java Collections rely on Generics to restrict data stores to safe, predictable object types.',
      'Using typed collections avoids manual casting during iteration, making logic highly readable.',
      'Collections are invariant: an ArrayList of children cannot be cast directly to an ArrayList of parents.'
    ]
  },

  'understanding-type-safety': {
    slug: 'understanding-type-safety',
    title: 'Understanding Type Safety',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `To master Generics, we must peek under the hood of the Java Virtual Machine.

Java implements Generics using a concept called **Type Erasure**. In this lesson, we will explore how Java maintains backward compatibility while enforcing type safety, and the strict limitations this model imposes on developers.`,
    whyThisTopicMatters: {
      whyItExists: `When Generics were added in Java 5, Java already had millions of lines of active legacy code. To prevent breaking older programs, the language designers had to implement generics in a way that compiled code could still run on older Java Virtual Machines.`,
      problemSolved: `Type Erasure allows modern, type-safe Java code to compile and run on any version of the Java Virtual Machine without duplicating runtime code.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'How does the compiler process Generics? Let\'s look at the lifecycle of compile-time code:'
      },
      {
        type: 'bullet_list',
        title: 'The Type Erasure Lifecycle',
        items: [
          'Compile-Time Verification: The Java compiler inspects your generic brackets (e.g., Box<String>). It ensures only Strings are added and automatically inserts the correct casts for you.',
          'Type Stripping (Erasure): Once verified, the compiler strips (erases) all type parameter information between the angle brackets, replacing placeholders with the general "Object" class.',
          'JVM Execution: At runtime, the JVM knows absolutely nothing about Generics! Inside the compiled bytecode, Box<String> simply becomes a regular non-generic Box class operating over Object types.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Because the generic type is completely erased at runtime, there are several strict limitations you must follow:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Type Erasure',
          definition: 'The process where the compiler removes all generic type parameter information during compilation, replacing them with Object or bounding types.',
          explanation: 'It ensures backward compatibility with pre-generic bytecode.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Non-Reifiable Type',
          definition: 'A type whose type representation is not fully available at runtime due to erasure.',
          explanation: 'Generic types like Box<String> are non-reifiable because the string type parameter is erased.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Classic Mistake: You cannot write "new T()" or "new T[10]" inside a generic class. Because T is erased to Object at runtime, the JVM wouldn\'t know what class constructor to call!'
      }
    ],
    codeExamples: [
      {
        title: 'Syntactic Restrictions of Type Erasure',
        language: 'java',
        code: `public class ErasedBox<T> {
    private T item;

    public void inspect() {
        // ❌ Compiler Error! Cannot use 'instanceof' with generic type parameters!
        // if (item instanceof T) { }

        // ❌ Compiler Error! Cannot instantiate type parameters directly!
        // T newItem = new T(); 

        // ❌ Compiler Error! Cannot create generic arrays!
        // T[] array = new T[5];
    }

    public static void main(String[] args) {
        Box<String> b1 = new Box<>("A");
        Box<Integer> b2 = new Box<>(1);

        // Conceptually, at runtime:
        // b1.getClass() is identical to b2.getClass() (both are Box.class!)
        System.out.println("Are class references identical at runtime?");
        System.out.println(b1.getClass() == b2.getClass()); // Prints true!
    }
}`,
        explanation: 'Due to Type Erasure, generic parameters cannot be instantiated, checked via instanceof, or turned into arrays. At runtime, Box<String> and Box<Integer> are erased to the raw class Box, meaning their runtime class identifiers are identical.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Java Generics: Compile vs. Bytecode',
        description: 'Visualizing how your generic source code is translated during compile cycles.',
        elements: {
          headers: ['Code Element', 'Your Source Code (.java)', 'Compiled Bytecode (.class)'],
          rows: [
            ['Class Declaration', 'class Box<T> { private T item; }', 'class Box { private Object item; }'],
            ['Instantiation', 'Box<String> b = new Box<>("Java");', 'Box b = new Box("Java");'],
            ['Retrieval Value', 'String s = b.getItem();', 'String s = (String) b.getItem();']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to create a generic array directly.',
        whyItHappens: 'Assuming that standard array declarations work normally with generic parameter variables.',
        howToAvoid: 'Do not attempt to declare generic arrays. If you need a resizable generic list structure, always use ArrayList<T> instead.',
        codeSnippet: {
          bad: `// ❌ Will fail to compile! Cannot create generic arrays.
public class Storage<T> {
    private T[] elements = new T[10];
}`,
          good: `// ✓ CORRECT: Use parameterized ArrayList structures!
import java.util.ArrayList;

public class Storage<T> {
    private ArrayList<T> elements = new ArrayList<>();
}`
        }
      }
    ],
    practiceExercise: {
      title: 'The Erasure Riddle',
      tasks: [
        'Explain in your own words why b1.getClass() == b2.getClass() returns true even though one was created with String and the other with Integer.',
        'Why does Java prohibit instantiating "new T()"? Describe how backward compatibility relates to this rule.'
      ]
    },
    summary: [
      'Java Generics compile for type safety, but erase type arguments during byte transition to maintain backward compatibility.',
      'At runtime, all generic parameters are stripped and replaced with Object or upper bound equivalents.',
      'You cannot instantiate generic variables (new T()), check instanceof T, or create generic arrays.'
    ]
  },

  'wildcards-in-generics': {
    slug: 'wildcards-in-generics',
    title: 'Wildcards in Generics',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '12 mins',
    difficulty: 'Advanced',
    introduction: `In previous lessons, we discovered that generic collections are invariant—meaning an ArrayList<Integer> is not compatible with an ArrayList<Number>. But what if we want to write a method that can process elements of any number subclass?

To build highly flexible APIs, Java introduces the **Wildcard** parameter (represented by a question mark \`?\`), allowing us to define safe, variable bounds for our generic variables.`,
    whyThisTopicMatters: {
      whyItExists: `A professional math utility needs to sum lists of Integers, lists of Doubles, and lists of Floats. Writing three separate methods violates DRY principles.`,
      problemSolved: `Wildcards allow you to declare method arguments that accept a restricted family of related classes safely.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'There are three different ways to use the wildcard character in your generic parameters:'
      },
      {
        type: 'bullet_list',
        title: 'The Three Wildcard Styles',
        items: [
          'Unbounded Wildcard (?): List<?> - Represents a list of any completely unknown type. Useful for methods that only read general Object attributes.',
          'Upper Bounded Wildcard (? extends Type): List<? extends Number> - Restricts the type to "Number or any subclass of Number" (Integer, Double). This is perfect for reading numeric values.',
          'Lower Bounded Wildcard (? super Type): List<? super Integer> - Restricts the type to "Integer or any parent class of Integer" (Number, Object). This is perfect for writing data.'
        ]
      },
      {
        type: 'paragraph',
        text: 'The best way to remember when to use extends vs super is the PECS rule:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'PECS Rule',
          definition: 'Producer Extends, Consumer Super.',
          explanation: 'If your collection produces data (you only read from it), use "? extends". If your collection consumes data (you write to it), use "? super".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Upper Bounded Wildcard',
          definition: 'Limits the generic type to a specified class or its subclasses.',
          explanation: 'Declared using "? extends MyClass", allowing safe, polymorphic reading.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Read-only rules: Collections declared with "? extends" are treated as read-only. Why? Because if you have List<? extends Number>, Java doesn\'t know if the actual list is an ArrayList<Double> or ArrayList<Integer>, so it blocks you from writing elements to prevent type corruption!'
      }
    ],
    codeExamples: [
      {
        title: 'Harnessing Wildcard bounds',
        language: 'java',
        code: `import java.util.List;

public class WildcardDemo {

    // 1. UPPER BOUNDED WILDCARD (? extends Number)
    // Produces numbers: we can read them safely as Numbers!
    public static double sumOfList(List<? extends Number> list) {
        double sum = 0.0;
        for (Number n : list) {
            sum += n.doubleValue(); // Safe because everything is a subclass of Number!
        }
        return sum;
    }

    // 2. LOWER BOUNDED WILDCARD (? super Integer)
    // Consumes integers: we can safely append Integers to this list!
    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i); // Safe to write because list supports Integer or parents
        }
    }

    public static void main(String[] args) {
        List<Integer> intList = List.of(1, 2, 3);
        List<Double> doubleList = List.of(1.5, 2.5, 3.5);

        // sumOfList accepts List of Integers AND List of Doubles!
        System.out.println("Integer Sum: " + sumOfList(intList));
        System.out.println("Double Sum: " + sumOfList(doubleList));
    }
}`,
        explanation: 'The sumOfList method uses "? extends Number" to accept both List<Integer> and List<Double>. Inside, we can safely loop them as Number. The addNumbers method uses "? super Integer" to safely write Integer values to any compatible parent list.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Wildcard Styles Reference',
        description: 'Choosing the correct wildcard constraint for your method arguments.',
        elements: {
          headers: ['Wildcard Syntax', 'Readable as...', 'Writable as...', 'Best Use Case'],
          rows: [
            ['List<?>', 'Object', 'Nothing (except null)', 'Generic counts or general metadata prints.'],
            ['List<? extends T>', 'Type T', 'Nothing (read-only)', 'Reading values of a specific subclass family.'],
            ['List<? super T>', 'Object', 'Type T', 'Writing values into a collection of parent slots.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Attempting to add elements to a collection declared with "? extends".',
        whyItHappens: 'Assuming that since Integer extends Number, you can add an Integer to List<? extends Number>.',
        howToAvoid: 'Remember: List<? extends Number> is read-only! Java blocks writes because the actual physical list might be a List<Double>, and adding an Integer would corrupt it.',
        codeSnippet: {
          bad: `// ❌ Compiler Error! Cannot add Integer to ? extends Number stream
public void append(List<? extends Number> list) {
    list.add(10); 
}`,
          good: `// ✓ CORRECT: Use "? super" if you need write capabilities!
public void append(List<? super Integer> list) {
    list.add(10); // Perfectly safe!
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Wildcard Strategist',
      tasks: [
        'Write a static method named printObjectList that takes a List<?> as an argument.',
        'The method should print each item inside the list on a new line (use Object methods).',
        'Test your method by passing a List<String> and a List<Integer>.'
      ]
    },
    summary: [
      'Wildcards (?) denote unknown generic parameters, granting flexibility to generic API structures.',
      'Upper bounded (? extends T) restricts types to subclasses of T, enabling polymorphic reading.',
      'Lower bounded (? super T) restricts types to parents of T, enabling safe data writes.',
      'Apply the PECS rule: Producer Extends, Consumer Super.'
    ]
  },

  'generics-practice': {
    slug: 'generics-practice',
    title: 'Generics Practice',
    moduleSlug: 'advanced-java',
    moduleName: 'Java Generics',
    estimatedTime: '15 mins',
    difficulty: 'Advanced',
    introduction: `Congratulations on mastering Java Generics! You have progressed from simple variables to building type-safe, reusable modules.

In this final lessons practice, we will bring together generic classes, lists, type safety rules, and wildcard constraints to build a fully functional **Data Repository System**. This system will mimic a professional database connector, storing, filtering, and displaying items of diverse types with robust type safety.`,
    whyThisTopicMatters: {
      whyItExists: `Professional frameworks (like Spring, Hibernate, or Android Jetpack) use a centralized Repository Pattern to retrieve database entities. Writing a separate repository class for each table leads to immense code bloat.`,
      problemSolved: `This practice consolidates your knowledge, proving you can design a single reusable Repository that acts as a secure database bridge for any data model.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Our Data Repository will manage entities in a secure list. Let\'s explore the architectural steps we will follow:'
      },
      {
        type: 'bullet_list',
        title: 'Registry Architecture Steps',
        items: [
          'The Generic Interface (Repository<T>): Declares core operations like add, retrieve, and filter.',
          'The Concrete Generic Class (InMemoryRepository<T>): Implements our interface using a parameterized ArrayList.',
          'Subclass Modeling (Student and VIPStudent): Provides custom data entities to test polymorphism and wildcard bounds.',
          'Central Execution: Validates that our repository keeps records isolated, stores entries securely, and filters data with zero casting errors.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Generic Interface',
          definition: 'An interface declared with type parameters that must be satisfied by implementing classes.',
          explanation: 'For example, Repository<T> forces implementing classes to handle matching types.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Bounded Parameter',
          definition: 'Restricting a class\'s type parameter using the "extends" keyword in its header declaration.',
          explanation: 'e.g., class MathBox<T extends Number> restricts T strictly to numbers.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Craftsmanship Rule: Notice how our code utilizes pristine spacing, descriptive variable names, and clear separation of interfaces. This represents the high-quality modular design expected of professional Java developers!'
      }
    ],
    codeExamples: [
      {
        title: 'Building a Complete Type-Safe Data Repository',
        language: 'java',
        code: `import java.util.ArrayList;
import java.util.List;

// 1. Generic Interface
interface Repository<T> {
    void save(T item);
    T findByIndex(int index);
    List<T> getAll();
}

// 2. Concrete Generic Implementation
class InMemoryRepository<T> implements Repository<T> {
    private ArrayList<T> storage = new ArrayList<>();

    @Override
    public void save(T item) {
        storage.add(item);
    }

    @Override
    public T findByIndex(int index) {
        if (index >= 0 && index < storage.size()) {
            return storage.get(index);
        }
        return null;
    }

    @Override
    public List<T> getAll() {
        return storage;
    }
}

// 3. Simple Entities
class Student {
    private String name;

    public Student(String name) { this.name = name; }
    public String getName() { return name; }
    @Override
    public String toString() { return "Student: " + name; }
}

class Course {
    private String title;

    public Course(String title) { this.title = title; }
    public String getTitle() { return title; }
    @Override
    public String toString() { return "Course: " + title; }
}

public class RepositoryRunner {
    
    // 4. Helper method utilizing Bounded Wildcard (PECS)
    // Reads elements safely from any repository of Student or subclasses
    public static void printRoster(Repository<? extends Student> repo) {
        System.out.println("\\n--- Current Student Registry ---");
        for (Student s : repo.getAll()) {
            System.out.println(s);
        }
    }

    public static void main(String[] args) {
        // Create an isolated student repository
        Repository<Student> studentRepo = new InMemoryRepository<>();
        studentRepo.save(new Student("Alinafe"));
        studentRepo.save(new Student("Brie"));

        // Create an isolated course repository
        Repository<Course> courseRepo = new InMemoryRepository<>();
        courseRepo.save(new Course("Advanced Java Generics"));

        // Run rosters using our wildcard helper
        printRoster(studentRepo);
        
        // ❌ Compiler blocks this! A Course repository is not compatible with Student bounds!
        // printRoster(courseRepo); 

        System.out.println("\\nOperation complete! Both databases are isolated and 100% type-safe.");
    }
}`,
        explanation: 'We declare a Repository<T> interface and implement it in InMemoryRepository<T>. We instantiate separate studentRepo and courseRepo stores. The helper method printRoster uses "? extends Student" wildcard bounds, allowing it to read student lists while preventing unrelated repositories like courseRepo from compiling.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Central Sandbox Verification',
        description: 'How our compiled repository guarantees type-safety.',
        elements: {
          headers: ['Action', 'Type Checks Enforced', 'Safety Outcome'],
          rows: [
            ['studentRepo.save(...)', 'Must be a Student subclass reference.', 'Prevents course elements from contaminating the student list.'],
            ['studentRepo.findByIndex(...)', 'Automatically returns a Student reference.', 'No casting required; zero chance of ClassCastException.'],
            ['printRoster(courseRepo)', 'Fails bounds check (Course does not extend Student).', 'Compilation blocks mismatched database prints instantly.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Failing to satisfy interface generic placeholders during implementation.',
        whyItHappens: 'Writing "class CustomRepo implements Repository" and forgetting that the interface requires a bound parameter.',
        howToAvoid: 'Always pass the type parameter T down when declaring implementing classes: class MyClass<T> implements Interface<T>.',
        codeSnippet: {
          bad: `// ❌ Compiler Warning! Raw type usage of interface Repository
class BadRepo implements Repository {
    // Methods default to using Object parameters!
}`,
          good: `// ✓ CORRECT: Properly bind and pass the type parameters!
class SafeRepo<T> implements Repository<T> {
    // Methods use type T cleanly!
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Extend the Repository',
      tasks: [
        'Run the RepositoryRunner code, and verify that the Student and Course databases work completely isolated on your console.',
        'Add a new subclass of Student named GraduateStudent (with an additional "thesisTopic" property).',
        'Save a GraduateStudent to your studentRepo, and verify that printRoster reads and prints it successfully (testing covariance bounds!).'
      ]
    },
    summary: [
      'The Repository Pattern combines generic interfaces and generic classes to manage diverse database entities.',
      'Covariant wildcard bounds (? extends T) allow helper methods to read entries of a parent class or any child subclasses.',
      'Satisfying type parameter lines across interfaces and implementations guarantees 100% compile-time security.'
    ]
  }
};
