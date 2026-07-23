import { DetailedLessonContent } from '../../types';

export const ADVANCED_OOP_LESSONS: Record<string, DetailedLessonContent> = {
  'need-for-advanced-oop': {
    slug: 'need-for-advanced-oop',
    title: 'The Need for Advanced OOP',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `We already know how to create individual classes, instantiate objects, and use fields and methods. However, what happens when your software starts growing? If you are building a simulation game or a rich system, you will quickly find yourself writing dozens of classes that are incredibly similar.

Without advanced OOP structures, you end up repeating the exact same fields and methods in multiple files. Let's explore the problems with writing standalone classes and how advanced OOP concepts help us design robust, interconnected systems.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine you are building an animal simulation game. You need to model a Dog, a Cat, and a Bird. Each needs a "name" field, an "age" field, and a "sleep()" method. If you write these independently, you have to type the exact same code three times. If you decide to change how sleep works, you must hunt down and edit all three files individually, which is a recipe for typos and bugs.`,
      problemSolved: `Advanced OOP lets you define relationships between classes. It allows you to write shared code once in a central location, enabling child classes to automatically inherit that code. This prevents redundancy and keeps your codebase easy to maintain.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s start with a real-world problem. Imagine writing a game with multiple animal characters:'
      },
      {
        type: 'bullet_list',
        title: 'Common fields and behaviors shared by game characters',
        items: [
          'Dog: Has name, age, and eats, sleeps, and barks.',
          'Cat: Has name, age, and eats, sleeps, and meows.',
          'Bird: Has name, age, and eats, sleeps, and chirps.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Notice that Dog, Cat, and Bird all share "name" and "age" attributes, and they all "eat" and "sleep" exactly the same way. The only difference is how they make sounds. Writing separate classes for each means copy-pasting the "eat" and "sleep" methods again and again.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Code Redundancy',
          definition: 'The duplication of identical or highly similar source code across multiple files in a software project.',
          explanation: 'Redundancy increases project file sizes and makes code extremely difficult to debug, as a change to one feature requires making changes in multiple places.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'DRY Principle (Don\'t Repeat Yourself)',
          definition: 'A fundamental software design principle aimed at reducing repetition of patterns, replacing it with single-point-of-truth definitions.',
          explanation: 'Advanced OOP is designed specifically to enforce the DRY principle by allowing classes to share code seamlessly.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'In enterprise development, up to 70% of maintenance time is spent tracking down and updating duplicate code. Advanced OOP was created to solve this exact problem!'
      }
    ],
    codeExamples: [
      {
        title: 'The Problem: Duplicate and Redundant Code',
        language: 'java',
        code: `// Notice the massive code repetition across these files!
class Dog {
    String name;
    int age;
    
    void sleep() {
        System.out.println(name + " is sleeping...");
    }
    void bark() {
        System.out.println("Woof!");
    }
}

class Cat {
    String name;
    int age;
    
    void sleep() {
        System.out.println(name + " is sleeping...");
    }
    void meow() {
        System.out.println("Meow!");
    }
}`,
        explanation: 'Both classes declare the same name, age, and sleep() methods. If we had 50 different animals, we would have 50 identical copies of this code!'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Procedural vs. Basic OOP vs. Advanced OOP',
        description: 'Comparing how code reuse and organization evolve across different paradigms.',
        elements: {
          headers: ['Feature', 'Procedural Style', 'Basic OOP Style', 'Advanced OOP Style'],
          rows: [
            ['Data & Actions', 'Separate loose variables and procedures.', 'Grouped together inside single templates.', 'Interconnected templates with shared behaviors.'],
            ['Code Reuse', 'None (copy-paste blocks or call loose functions).', 'Reusable within a single class template.', 'Reusable across multiple related class hierarchies.'],
            ['Maintenance', 'Difficult; variable name collisions are common.', 'Good for small apps, but redundant for multiple classes.', 'Excellent; edit shared code once to update all child classes.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Creating a massive single class containing every possible variable to avoid writing multiple classes.',
        whyItHappens: 'To avoid copy-pasting, beginners might create one huge "Animal" class with variables like "isDog", "isCat", "canFly", and write long, messy if-else branches inside methods.',
        howToAvoid: 'Use advanced OOP instead of boolean flags! Create a clean parent-child relationship so each animal subclass only contains what makes it unique.',
        codeSnippet: {
          bad: `// ❌ WRONG: Monolithic class using flag checks
class Animal {
    String name;
    boolean isDog;
    void makeSound() {
        if (isDog) System.out.println("Woof!");
        else System.out.println("Meow!");
    }
}`,
          good: `// ✓ CORRECT: Separate, clean child classes (detailed in next lessons)
class Dog extends Animal {
    void makeSound() { System.out.println("Woof!"); }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Identifying Redundancy Challenges',
      tasks: [
        'Suppose you are building an online shop. You have "PhysicalProduct" (has name, price, weight, and ship()) and "DigitalProduct" (has name, price, downloadSize, and download()). List the redundant properties.',
        'Draw or write down a structural plan of how you could combine the redundant elements into a single shared "Product" template.',
        'Explain how methods inside objects can use control flow (like loops) to operate on arrays of other objects.'
      ]
    },
    summary: [
      'As programs grow, writing independent classes leads to massive code replication and redundancy.',
      'Advanced OOP solves redundancy by establishing logical connections and structures between related classes.',
      'By organizing classes in hierarchical groups, we write shared code once and reuse it across multiple object types.'
    ]
  },

  'inheritance-basics': {
    slug: 'inheritance-basics',
    title: 'Inheritance Basics',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `The primary mechanism for sharing fields and methods between classes is **Inheritance**. 

Inheritance allows a new class to automatically absorb all the features (variables and behaviors) of an existing class. In this lesson, we will learn about the Parent class, the Child class, and how to use Java's \`extends\` keyword to link them together.`,
    whyThisTopicMatters: {
      whyItExists: `Without inheritance, every time you want to create a specific kind of entity, you have to build it from scratch. In the real world, biological organisms inherit traits from their parents, and vehicles inherit standard properties from their generic type. Java mirrors this hierarchy to prevent developers from writing duplicate code.`,
      problemSolved: `The "extends" keyword establishes a parent-child connection. By declaring "class Dog extends Animal", the Dog class automatically gains the name, age, and sleep behavior of the Animal class, leaving you to only write Dog-specific actions.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'In Java, inheritance works by defining a generic class first, and then deriving more specific classes from it. We use special terminology to describe these:'
      },
      {
        type: 'bullet_list',
        title: 'Core inheritance terminology',
        items: [
          'Superclass (Parent Class): The general, base class that contains the shared fields and methods (e.g., "Animal").',
          'Subclass (Child Class): The specialized class that inherits from the superclass and adds custom details (e.g., "Dog").',
          'The "extends" keyword: The Java command placed in the class header that triggers inheritance.'
        ]
      },
      {
        type: 'paragraph',
        text: 'When a subclass extends a superclass, it acquires all non-private fields and methods automatically. You do not write them again inside the child class. They are simply there, ready to be used!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'extends',
          definition: 'The Java keyword used in a class declaration to establish an inheritance relationship with a parent class.',
          explanation: 'Writing "class Dog extends Animal" tells the compiler that Dog is a subclass of Animal.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Is-A Relationship',
          definition: 'A conceptual test used in OOP to verify if inheritance is appropriate.',
          explanation: 'Since a Dog "is an" Animal, establishing inheritance is highly logical. However, a Car "is not" an Engine, so inheritance should not be used there.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'In Java, a class can only extend ONE parent class. Multiple inheritance (inheriting from more than one class directly) is not allowed in Java to prevent method collision conflicts!'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing Basic Inheritance',
        language: 'java',
        code: `// Parent Class (Superclass)
class Animal {
    String name;
    int age;
    
    void sleep() {
        System.out.println(name + " is sleeping...");
    }
}

// Child Class (Subclass) inherits from Animal
class Dog extends Animal {
    // Dog automatically has name, age, and sleep()!
    void bark() {
        System.out.println(name + " says: Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        
        // We can access fields defined in the parent class directly!
        myDog.name = "Limbani";
        myDog.age = 3;
        
        // We can execute methods defined in the parent class!
        myDog.sleep(); // Output: Limbani is sleeping...
        
        // We can execute methods defined in the child class!
        myDog.bark();  // Output: Limbani says: Woof!
    }
}`,
        explanation: 'Even though the Dog class looks completely empty of name, age, and sleep(), it inherits them all from the Animal class because of the "extends" keyword.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Inheritance Class Hierarchy',
        description: 'Visualizing how properties flow down from a general parent class to a specific child class.',
        elements: {
          classes: [
            {
              name: 'Animal (Superclass)',
              fields: ['String name', 'int age'],
              methods: ['void sleep()']
            },
            {
              name: 'Dog (Subclass)',
              fields: ['[Inherited fields]'],
              methods: ['void bark()', '[Inherited methods]']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to extend multiple classes in a single header.',
        whyItHappens: 'Developers coming from C++ or attempting to merge multiple shared profiles might write "class Dog extends Animal, Mammal".',
        howToAvoid: 'Remember that Java only supports single class inheritance. You can only put one class name after the "extends" keyword.',
        codeSnippet: {
          bad: `// ❌ WRONG: Java does not allow multiple class inheritance
class Dog extends Animal, Mammal {
    void bark() {}
}`,
          good: `// ✓ CORRECT: Inherit from a single parent class
class Dog extends Animal {
    void bark() {}
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Inheritance Foundation Lab',
      tasks: [
        'Create a parent class named "Vehicle" with fields: "brand" and "speed", and a method "honk()".',
        'Create a subclass named "Car" that extends "Vehicle" and adds a field "numberOfDoors" (int).',
        'In a main method, instantiate a "Car" object, write values into both the inherited fields and the child-specific field, and execute "honk()".'
      ]
    },
    summary: [
      'Inheritance permits a subclass to acquire variables and methods from a superclass.',
      'Java utilizes the "extends" keyword to declare a parent-child inheritance relationship.',
      'Subclasses can only inherit from a single parent class, maintaining a clean "Is-A" structural relationship.'
    ]
  },

  'using-inherited-methods-and-variables': {
    slug: 'using-inherited-methods-and-variables',
    title: 'Using Inherited Methods and Variables',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Now that we understand the basics of inheritance, let's explore how child classes interact with inherited methods and variables in detail. 

We will learn how subclasses can reuse code, how access modifiers impact what can be inherited, and how this reduces duplication across your software projects.`,
    whyThisTopicMatters: {
      whyItExists: `When you write code in a superclass, you want all child classes to use it without modification. This establishes a central "single point of truth" so that fixing a bug in the superclass instantly repairs it for all subclasses in your program.`,
      problemSolved: `By grouping shared behaviors like "eat()" or "breathe()" in the parent class, subclasses can immediately call these methods or read these fields, eliminating duplicate code and saving hours of development time.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When a subclass extends a superclass, it inherits its members. However, whether a child class can access a field or method depends heavily on its **Access Modifier**:'
      },
      {
        type: 'bullet_list',
        title: 'How access modifiers affect inheritance',
        items: [
          'public: Members are fully inherited and accessible by the child class and any other class.',
          'protected: Members are fully inherited and accessible inside the child class and within the same package.',
          'default (no modifier): Members are only inherited if both parent and child classes are in the same package.',
          'private: Private members are NOT directly accessible by the child class. They belong strictly to the parent!'
        ]
      },
      {
        type: 'paragraph',
        text: 'This leads to an interesting question: If a parent class has private fields, how does a child class use them? The answer is **Encapsulation**! The subclass must use the parent\'s public getter and setter methods to read or write to private parent variables safely.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'protected modifier',
          definition: 'An access modifier that restricts visibility to the containing class, subclasses, and other classes in the same package.',
          explanation: 'Using protected allows child classes to directly read or write variables while keeping them hidden from the rest of the world.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Code Reusability',
          definition: 'The practice of writing code once and using it multiple times across different classes and contexts without rewriting.',
          explanation: 'Inheritance is the ultimate enabler of code reusability in object-oriented architectures.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Private variables still exist inside the child object memory space! They are just locked away behind access barriers, requiring public or protected methods to read or modify them.'
      }
    ],
    codeExamples: [
      {
        title: 'Accessing Private Parent Data via Encapsulation',
        language: 'java',
        code: `class Animal {
    // Private field - secure and hidden!
    private String name;
    
    // Public constructor and getter/setter channels
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating food.");
    }
}

class Dog extends Animal {
    void bark() {
        // Cannot write: System.out.println(name); // Compile Error!
        // Instead, we use the inherited public getter method!
        System.out.println(getName() + " says: Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        
        // Set the name using the inherited public setter
        dog.setName("Chikondi");
        
        // Execute inherited and subclass methods
        dog.eat(); // Output: Chikondi is eating food.
        dog.bark(); // Output: Chikondi says: Woof!
    }
}`,
        explanation: 'The Dog class cannot read or write directly to the private variable "name". It uses the inherited public getters and setters, maintaining strict data security.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Access Modifiers & Inheritance Permissions',
        description: 'Analyzing what subclass components can directly access from their parent classes.',
        elements: {
          headers: ['Modifier', 'Inherited by Subclass?', 'Direct Subclass Access?', 'Visible Outside Package?'],
          rows: [
            ['public', 'Yes', 'Yes', 'Yes'],
            ['protected', 'Yes', 'Yes', 'No (Only packages & subclasses)'],
            ['default', 'Yes (if in same package)', 'Yes (if in same package)', 'No'],
            ['private', 'No', 'No', 'No']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to access private fields of a parent class directly inside a subclass method.',
        whyItHappens: 'Because inheritance makes a child class, beginners assume they have total, unrestricted access to everything written inside the parent class file.',
        howToAvoid: 'Use public/protected getters and setters, or change the parent variables access modifier to "protected" if direct child access is required.',
        codeSnippet: {
          bad: `class Parent {
    private int secretCode;
}
class Child extends Parent {
    void printSecret() {
        // ❌ WRONG: Compile Error! secretCode is private
        System.out.println(secretCode); 
    }
}`,
          good: `class Parent {
    protected int secretCode; // Change to protected!
}
class Child extends Parent {
    void printSecret() {
        // ✓ CORRECT: Child has direct access to protected fields
        System.out.println(secretCode);
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Inherited Access Challenge',
      tasks: [
        'Create a class "Employee" with private variables "name" and "salary" (double), along with public getters and setters.',
        'Create a subclass "Manager" that inherits from "Employee" and add a method "printSalaryDetails()" that prints the manager\'s salary using getters.',
        'Write code to store multiple "Manager" objects inside an array and use a loop to print all of their salaries.'
      ]
    },
    summary: [
      'Subclasses inherit all non-private fields and methods from their superclass.',
      'Private superclass variables must be accessed via inherited public/protected methods like getters and setters.',
      'The protected modifier grants direct access to subclasses while locking out unrelated classes.'
    ]
  },

  'method-overriding': {
    slug: 'method-overriding',
    title: 'Method Overriding',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Inheritance is fantastic for reusing code, but what if a child class needs to perform an inherited action differently? For example, while every Animal makes a sound, a Dog barks, a Cat meows, and a Snake hisses.

This is where **Method Overriding** comes in. Method overriding allows a child class to rewrite an inherited method to provide its own customized behavior. We will explore how to use Java's \`@Override\` annotation and why overriding is critical for building flexible programs.`,
    whyThisTopicMatters: {
      whyItExists: `If subclasses could only use parent behaviors exactly as written, inheritance would be extremely rigid. You would be forced to create custom method names like "dogMakeSound()" and "catMakeSound()", which ruins code predictability.`,
      problemSolved: `Method overriding allows different objects to share the exact same method signature (like "makeSound()") while executing completely different, custom behaviors under the hood.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Method Overriding occurs when a subclass defines a method with the **exact same name, return type, and parameters** as a method in its superclass.'
      },
      {
        type: 'paragraph',
        text: 'To override a method cleanly in Java, follow these requirements:'
      },
      {
        type: 'bullet_list',
        title: 'Rules for overriding methods',
        items: [
          'Same Signature: The method name and parameters must match the parent method exactly.',
          'Same Return Type: The return type must be identical (or a compatible subclass type).',
          'Use @Override: Write the "@Override" annotation above the child method. This tells the compiler to check for typos and verify that you are actually overriding a parent method.',
          'Access Permissions: The child method cannot have a more restrictive access modifier than the parent method (e.g., if parent is public, child must be public).'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method Overriding',
          definition: 'Redefining a superclass method inside a subclass to supply specialized, child-specific execution behavior.',
          explanation: 'Overriding lets a Dog override Animal\'s generic "makeSound()" method with a custom "Woof!" print.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: '@Override Annotation',
          definition: 'A compiler instruction tag verifying that a subclass method is successfully replacing a superclass method.',
          explanation: 'If you make a spelling typo (like writing "makesound()" instead of "makeSound()"), the compiler will flag it as an error because of @Override.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Do not confuse Overriding with Overloading! Overloading happens inside the same class and requires different parameter lists. Overriding happens between parent and child classes and requires identical signatures!'
      }
    ],
    codeExamples: [
      {
        title: 'Overriding Inherited Behavior',
        language: 'java',
        code: `class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound...");
    }
}

class Dog extends Animal {
    // Rewrite parent method to bark!
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    // Rewrite parent method to meow!
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal generic = new Animal();
        Dog dog = new Dog();
        Cat cat = new Cat();
        
        generic.makeSound(); // Output: Some generic animal sound...
        dog.makeSound();     // Output: Woof! Woof! (Custom behavior)
        cat.makeSound();     // Output: Meow! (Custom behavior)
    }
}`,
        explanation: 'Each subclass calls the exact same method signature: makeSound(). However, the JVM runs the overridden child method, resulting in distinct behaviors.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Method Overriding vs. Method Overloading',
        description: 'Analyzing the differences between these two core OOP concepts.',
        elements: {
          headers: ['Feature', 'Method Overriding', 'Method Overloading'],
          rows: [
            ['Classes Involved', 'Two classes (parent-child relationship).', 'A single class definition.'],
            ['Method Name', 'Must be identical.', 'Must be identical.'],
            ['Method Parameters', 'Must be completely identical.', 'MUST be different (different counts or types).'],
            ['Compile vs Runtime', 'Resolved at Runtime (dynamic binding).', 'Resolved at Compile-time (static binding).'],
            ['Keywords Used', 'Marked with @Override annotation.', 'No specific keywords required.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Spelling the method name incorrectly when trying to override.',
        whyItHappens: 'Because Java is case-sensitive, writing "makesound()" instead of "makeSound()" creates a completely brand-new method rather than overriding the parent method.',
        howToAvoid: 'Always place the "@Override" annotation above your overridden methods. If you make a spelling or parameter typo, the compiler will instantly warn you of the error.',
        codeSnippet: {
          bad: `class Dog extends Animal {
    // ❌ WRONG: Typo "makesound" creates a new method. No overriding happens!
    void makesound() {
        System.out.println("Woof!");
    }
}`,
          good: `class Dog extends Animal {
    // ✓ CORRECT: @Override verifies spelling and overrides successfully
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Method Overriding Challenge',
      tasks: [
        'Create a superclass "Printer" with a method "printDetails()" that outputs "Generic Print Job".',
        'Create a subclass "ColorPrinter" that overrides "printDetails()" to output "High-Quality Color Print Job".',
        'Write down in your own words why using the "@Override" annotation is considered an industry-wide best practice.'
      ]
    },
    summary: [
      'Method overriding enables child classes to redefine inherited behaviors with custom implementations.',
      'Overridden methods must maintain the identical name, return type, and parameters as the parent method.',
      'The @Override annotation is a critical tool that lets the compiler verify overriding safety and eliminate spelling bugs.'
    ]
  },

  'the-super-keyword': {
    slug: 'the-super-keyword',
    title: 'The super Keyword',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `When overriding a parent method, we sometimes don't want to completely discard the parent's work. Instead, we want to run the parent's logic first, and then add our subclass-specific logic on top of it.

To achieve this, Java provides the **super** keyword. The \`super\` keyword acts as a reference pointer pointing directly to the parent class context. We will learn how to use it to invoke parent methods and trigger parent constructors.`,
    whyThisTopicMatters: {
      whyItExists: `When you override a method, the parent method is hidden. If the parent method did 10 lines of complex calculations, and the subclass just needs to print a success log at the end, copying those 10 lines of code into the subclass violates the DRY principle and duplicates logic.`,
      problemSolved: `The "super" keyword allows subclasses to call parent methods ("super.method()") and parent constructors ("super()") directly. This lets you build on top of existing parent logic, enhancing code reuse and cohesion.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The **super** keyword in Java is a reference variable used to refer to an object\'s immediate parent class. It has two primary uses in child classes:'
      },
      {
        type: 'bullet_list',
        title: 'The two major roles of the super keyword',
        items: [
          'Accessing Parent Methods: Writing "super.makeSound()" executes the parent class\'s version of the overridden method.',
          'Triggering Parent Constructors: Writing "super(name, age)" inside a subclass constructor executes the matching parent constructor first.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Using "super()" inside child constructors follows a strict, mandatory rule: **It must be the absolute first line of code inside the subclass constructor!** If you do not call super() explicitly, Java automatically tries to call an empty, parameterless super() constructor behind the scenes.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'super keyword',
          definition: 'A reference variable in Java pointing directly to the parent class instance of the active object.',
          explanation: 'It is used to access parent methods, fields, and constructors that have been hidden or overridden.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Constructor Chaining',
          definition: 'The process of calling a sequence of constructors in an inheritance hierarchy when a child object is instantiated.',
          explanation: 'When you create a Dog, Java runs the Animal constructor first (via super()), and then finishes by running the Dog constructor.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'You cannot use "super" inside static methods! Static methods belong to the class, not to any specific instance, so they have no concept of a parent object reference.'
      }
    ],
    codeExamples: [
      {
        title: 'Chaining Constructors and Calling Parent Methods',
        language: 'java',
        code: `class Animal {
    String name;
    
    // Parent Constructor
    Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor called for: " + name);
    }
    
    void display() {
        System.out.println("Animal Name: " + name);
    }
}

class Dog extends Animal {
    String breed;
    
    // Child Constructor
    Dog(String name, String breed) {
        // Step 1: Call parent constructor! MUST be the first line!
        super(name); 
        this.breed = breed;
        System.out.println("Dog constructor called for breed: " + breed);
    }
    
    @Override
    void display() {
        // Step 2: Call parent display logic!
        super.display(); 
        
        // Step 3: Add child-specific display logic!
        System.out.println("Dog Breed: " + breed);
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Limbani", "Malawi Hound");
        dog.display();
    }
}`,
        explanation: 'When creating a Dog, "super(name)" passes the name to the Animal constructor first. Later, "super.display()" triggers the parent display logic before adding Dog-specific prints.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Constructor Chaining Sequence',
        description: 'Tracking the exact order of constructor execution when instantiating a subclass object.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'new Dog("Limbani", "Hound")', desc: 'Main program triggers the subclass instantiation.' },
            { id: '2', type: 'process', label: 'Dog Constructor Entry', desc: 'Control enters Dog constructor, but immediately jumps to super(name).' },
            { id: '3', type: 'process', label: 'Animal Constructor Runs', desc: 'Parent Animal constructor initializes the name field.' },
            { id: '4', type: 'process', label: 'Dog Constructor Resumes', desc: 'Control returns to Dog constructor to set the breed field.' },
            { id: '5', type: 'end', label: 'Fully Initialized Object', desc: 'The finished Dog object reference is returned to the caller.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Placing super() after other assignments inside a subclass constructor.',
        whyItHappens: 'Beginners might initialize child fields first before thinking about parent variables, writing "this.breed = breed; super(name);".',
        howToAvoid: 'Always place "super()" on the absolute first line of your constructor body. If you put anything else above it, the compiler will refuse to compile your code.',
        codeSnippet: {
          bad: `class Dog extends Animal {
    Dog(String name, String breed) {
        this.breed = breed;
        // ❌ WRONG: super() must be the very first line!
        super(name); 
    }
}`,
          good: `class Dog extends Animal {
    Dog(String name, String breed) {
        // ✓ CORRECT: Parent initialization occurs first
        super(name); 
        this.breed = breed;
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'The super Keyword Lab',
      tasks: [
        'Create a parent class "Account" with a constructor that sets a private "accountNumber" (String) and double "balance".',
        'Create a subclass "SavingsAccount" with a constructor that takes accountNumber, balance, and an additional "interestRate" (double). Use "super" to initialize the parent fields.',
        'Override a method "printSummary()" inside "SavingsAccount" that calls "super.printSummary()" before printing the interest rate.'
      ]
    },
    summary: [
      'The super keyword is used to reference parent class variables, methods, and constructors directly.',
      'When overriding methods, super.methodName() runs the parent\'s version of the behavior, preventing duplicate code.',
      'super() executes the parent class constructor and must reside on the absolute first line of a child constructor.'
    ]
  },

  'polymorphism': {
    slug: 'polymorphism',
    title: 'Polymorphism',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `One of the most powerful features of OOP is **Polymorphism**. The word polymorphism comes from Greek and means "many forms" (poly = many, morph = form).

Polymorphism allows you to treat specialized child objects as if they were generic parent objects. We will learn how a parent reference variable can hold a child object, and how Java dynamically selects and runs the correct overridden method at runtime.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine writing a method that feeds animals. Without polymorphism, you have to write separate, overloaded methods for every single animal class: "feedDog(Dog d)", "feedCat(Cat c)", "feedBird(Bird b)". If you add 50 new animals, you must write 50 new feeding methods. This is an absolute nightmare.`,
      problemSolved: `Polymorphism allows you to write a single method: "feedAnimal(Animal a)". Because a Dog, Cat, and Bird are all subclasses of Animal, you can pass any of them into this single method safely. The method will run automatically and dynamically choose the correct behaviors.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Polymorphism operates on a fundamental principle: **A reference variable of a superclass type can point to an object of any of its subclass types.**'
      },
      {
        type: 'paragraph',
        text: 'Let\'s break down what happens when we declare a polymorphic reference:'
      },
      {
        type: 'bullet_list',
        title: 'Polymorphic reference mechanics',
        items: [
          'The Reference Variable (Left Side): Decided at Compile-Time. Dictates what methods are available to call: "Animal myAnimal = ..."',
          'The Actual Object (Right Side): Decided at Runtime. Decides what code actually executes: "... = new Dog();"',
          'Dynamic Method Lookup: When calling "myAnimal.makeSound()", Java looks at the Heap object, realizes it is a Dog, and executes the Dog\'s overridden "makeSound()" version automatically!'
        ]
      },
      {
        type: 'paragraph',
        text: 'This enables incredible flexibility. You can create an array of "Animal" references and store Dogs, Cats, and Birds together in a single loop. When you loop through the array and call "makeSound()", each animal will automatically make its own unique sound!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Polymorphism',
          definition: 'The ability of a single reference variable to hold different object types and exhibit different behaviors depending on the actual instance.',
          explanation: 'Polymorphism lets an "Animal" reference act like a Dog or Cat dynamically at runtime.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Dynamic Method Binding',
          definition: 'The process where the Java Virtual Machine (JVM) resolves which overridden method to execute at runtime rather than compile-time.',
          explanation: 'Because of dynamic binding, Java runs the method belonging to the actual Heap object, not the variable type.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Polymorphism is how we connect loops and arrays to advanced objects! By storing child objects inside a parent-type array, we can iterate and manipulate complex lists cleanly.'
      }
    ],
    codeExamples: [
      {
        title: 'Polymorphism in Action with Arrays and Loops',
        language: 'java',
        code: `class Animal {
    void makeSound() {
        System.out.println("Generic animal sound...");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Step 1: Create a polymorphic parent-type array!
        // This array can hold Dogs, Cats, and any other Animal!
        Animal[] pets = new Animal[3];
        
        pets[0] = new Dog();    // Parent reference points to Dog
        pets[1] = new Cat();    // Parent reference points to Cat
        pets[2] = new Animal(); // Parent reference points to generic Animal
        
        // Step 2: Use a clean loop to trigger dynamic behaviors!
        for (Animal pet : pets) {
            // Java resolves the correct method at runtime!
            pet.makeSound(); 
        }
    }
}`,
        explanation: 'The loop only sees generic "Animal" variables. However, when executed, the output is: "Woof! Woof!", followed by "Meow!", followed by "Generic animal sound...". Java finds the correct overridden method on the heap!'
      }
    ],
    visualLearning: [
      {
        type: 'memory',
        title: 'Polymorphic Reference Memory Layout',
        description: 'How a compile-time Animal reference on the Stack points to a concrete Dog instance on the Heap.',
        elements: {
          cells: [
            { address: '0x00A0', name: 'myAnimal (Stack variable of type Animal)', value: '0x99FF (Heap pointer)', type: 'Animal Reference' },
            { address: '0x99FF', name: 'Heap Object', value: 'Dog { name: null, breed: null } [Runs Dog.makeSound()]', type: 'Dog Instance' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to call a child-specific method on a polymorphic parent reference.',
        whyItHappens: 'If "Animal a = new Dog();" is declared, a beginner might try to call "a.bark();". This causes a compile-time error because "a" is declared as an Animal, and Animals do not know how to bark.',
        howToAvoid: 'Remember that the compiler only lets you call methods that exist in the variable type (the left-hand side). If you must access child methods, you must perform a Downcast (e.g., "(Dog) a").',
        codeSnippet: {
          bad: `Animal myAnimal = new Dog();
// ❌ WRONG: Compile Error! Animal class does not have bark()
myAnimal.bark(); `,
          good: `Animal myAnimal = new Dog();
// ✓ CORRECT: Downcast reference to Dog to call bark() safely
if (myAnimal instanceof Dog) {
    Dog myDog = (Dog) myAnimal;
    myDog.bark();
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Polymorphic System Construction',
      tasks: [
        'Create a class "Shape" with a method "double getArea() { return 0.0; }".',
        'Create two subclasses: "Circle" (has field radius) and "Rectangle" (has fields width and height) that override "getArea()".',
        'In your main method, create an array of "Shape" containing 1 Circle and 1 Rectangle, and write a loop to calculate and print the total combined area of all shapes.'
      ]
    },
    summary: [
      'Polymorphism allows parent reference variables to hold instances of specialized child classes.',
      'At compile-time, the variable type decides what methods can be called. At runtime, the actual Heap object decides which method executes.',
      'Polymorphism makes systems highly extensible, enabling loops and arrays to manage collections of diverse objects smoothly.'
    ]
  },

  'abstract-classes': {
    slug: 'abstract-classes',
    title: 'Abstract Classes',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `Sometimes, a parent class is so generic that it doesn't make logical sense to ever create an object from it directly. For example, in our simulation game, what does a generic "Animal" look like? What sound does it make? It doesn't exist in reality—only specific animals like Dogs and Cats exist.

To model this, Java provides **Abstract Classes**. An abstract class is an incomplete class template designed strictly to be inherited, preventing anyone from creating a raw instance of it directly. We will learn how to declare abstract classes and write abstract methods.`,
    whyThisTopicMatters: {
      whyItExists: `If anyone can write "new Animal()", they get an incomplete object with generic, blank behaviors. This makes no logical sense in your business domain and can cause runtime bugs if generic methods are triggered.`,
      problemSolved: `The "abstract" keyword completely prevents direct instantiation. It forces developers to extend the class and implement mandatory subclass details, ensuring all created objects are concrete, specialized entities.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'An **Abstract Class** is a class marked with the "abstract" keyword. It acts as a strict structural guideline.'
      },
      {
        type: 'paragraph',
        text: 'Abstract classes have unique rules and features:'
      },
      {
        type: 'bullet_list',
        title: 'Core rules of abstract classes',
        items: [
          'No Instantiation: You cannot write "new Animal();". This will trigger an immediate compile-time crash.',
          'Abstract Methods: You can declare methods with NO body (no curly braces) using the "abstract" keyword: "abstract void makeSound();"',
          'Mandatory Implementation: Any concrete (non-abstract) subclass that extends an abstract class MUST override and write bodies for all abstract methods.',
          'Mixed Features: Abstract classes can contain normal variables, constructors, and normal (concrete) methods alongside abstract ones.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'abstract class',
          definition: 'A restricted class in Java that cannot be instantiated directly, used to outline standard structural designs.',
          explanation: 'Writing "abstract class Shape" creates a template shape that subclasses like Circle and Rectangle must finish.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Abstract Method',
          definition: 'A method signature declared in an abstract class that has no implementation body, ending on a semicolon.',
          explanation: 'Writing "abstract void draw();" forces all subclasses of Shape to write their own drawing steps.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'If a class contains even a single abstract method, the entire class ITSELF must be declared abstract! Otherwise, the compiler will refuse to compile.'
      }
    ],
    codeExamples: [
      {
        title: 'Declaring and Extending Abstract Classes',
        language: 'java',
        code: `// Abstract Parent Class
abstract class Shape {
    String color;
    
    Shape(String color) {
        this.color = color;
    }
    
    // Abstract Method: No body! Note the semicolon instead of curly braces.
    abstract double getArea();
    
    // Concrete Method: Shared helper that all shapes use exactly as is
    void displayColor() {
        System.out.println("Shape Color: " + color);
    }
}

// Concrete subclass MUST implement getArea()!
class Circle extends Shape {
    double radius;
    
    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        // Shape s = new Shape("Red"); // ❌ Compile Error! Shape is abstract.
        
        // ✓ CORRECT: Polymorphic reference to Circle is allowed!
        Shape myCircle = new Circle("Blue", 5.0);
        
        myCircle.displayColor(); // Output: Shape Color: Blue
        System.out.println("Area: " + myCircle.getArea()); // Dynamic lookup
    }
}`,
        explanation: 'Shape outlines the color field and declares getArea() as a mandatory rule. Circle implements getArea() with circular math, allowing polymorphic usage.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Abstract Class Structure',
        description: 'Analyzing how an abstract parent dictates mandatory behaviors for its concrete children.',
        elements: {
          classes: [
            {
              name: 'Shape [Abstract]',
              fields: ['String color'],
              methods: ['abstract double getArea()', 'void displayColor()']
            },
            {
              name: 'Circle [Concrete Subclass]',
              fields: ['double radius'],
              methods: ['double getArea() [Implemented]']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to instantiate an abstract class directly.',
        whyItHappens: 'Beginners sometimes treat abstract classes like standard classes and try to allocate memory for them.',
        howToAvoid: 'Use abstract classes only as parent reference types. Always instantiate a concrete child class instead.',
        codeSnippet: {
          bad: `// ❌ WRONG: Shape is abstract and cannot be instantiated!
Shape s = new Shape("Red");`,
          good: `// ✓ CORRECT: Create a concrete Circle instead
Shape s = new Circle("Red", 5.0);`
        }
      }
    ],
    practiceExercise: {
      title: 'Abstract Design Lab',
      tasks: [
        'Create an abstract class "Employee" with an abstract method "double calculatePay()". Add a concrete field "name".',
        'Create a subclass "HourlyEmployee" (has fields hoursWorked and hourlyRate) that extends Employee and implements "calculatePay()".',
        'Create a subclass "SalariedEmployee" (has field annualSalary) that implements "calculatePay()". Instantiate both and compare their pay polymorphically.'
      ]
    },
    summary: [
      'Abstract classes prevent direct instantiation, acting strictly as templates for subclasses.',
      'Abstract methods declare signature contracts without body implementations, requiring child classes to write them.',
      'Abstract classes can mix abstract rules with concrete methods and fields, facilitating highly flexible systems.'
    ]
  },

  'interfaces': {
    slug: 'interfaces',
    title: 'Interfaces',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `In Java, a subclass can only inherit from one parent class. But what if you want to define a behavior that multiple, completely unrelated classes can perform? For example, both a Bird and an Airplane can fly. However, an Airplane is definitely not a subclass of Animal!

To solve this, Java provides **Interfaces**. An interface is a pure behavioral contract. It defines *what* actions a class can perform, without dictating *how* it does them. Let's explore how to declare interfaces and implement them using the \`implements\` keyword.`,
    whyThisTopicMatters: {
      whyItExists: `Single inheritance restricts sharing behaviors to strict family lineages. If you want a Dog and a Robot to both be "chargeable" or "washable", you can't put those behaviors in a single parent class because they share no common ancestor.`,
      problemSolved: `Interfaces establish contracts across unrelated classes. By having both Bird and Airplane implement a "Flyable" interface, they sign a contract promising to provide a "fly()" method, allowing you to trigger flight actions polymorphically.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'An **Interface** is declared using the "interface" keyword instead of "class". It contains only abstract signatures and constant variables.'
      },
      {
        type: 'paragraph',
        text: 'Interfaces have distinct properties in Java:'
      },
      {
        type: 'bullet_list',
        title: 'Essential characteristics of Interfaces',
        items: [
          'Pure Abstract: All methods in an interface are automatically "public abstract" (you do not even need to write these keywords).',
          'No Instance Fields: Variables in interfaces are automatically "public static final" constants.',
          'The "implements" keyword: A class signs an interface contract by placing "implements InterfaceName" in its header.',
          'Multiple Interfaces: Unlike classes, a single class can implement MULTIPLE interfaces at the same time: "class Bird implements Flyable, EggLaying".'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Interface',
          definition: 'A reference type in Java that acts as a pure behavioral contract containing abstract method declarations.',
          explanation: 'An interface defines "What an object can do" without specifying any private details or execution lines.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'implements',
          definition: 'The Java keyword used by a class to sign and adopt one or more interface contracts.',
          explanation: 'Writing "class Bird implements Flyable" commits the Bird class to implementing a "void fly();" method.'
        }
      },
      {
        type: 'callout',
        calloutType: 'did_you_know',
        text: 'In real-world Java development, interfaces are the foundation of APIs, database connections, and web services because they isolate system designs from concrete, changeable code!'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing Unrelated Classes via Interfaces',
        language: 'java',
        code: `// Define the behavioral contract
interface Flyable {
    // Automatically public and abstract! No body allowed.
    void fly(); 
}

// Animal subclass implementing Flyable
class Bird extends Animal implements Flyable {
    Bird(String name) {
        super(name);
    }
    
    @Override
    public void fly() {
        System.out.println(getName() + " flaps its wings and takes off!");
    }
}

// Completely unrelated Machine class implementing Flyable
class Airplane implements Flyable {
    String flightNumber;
    
    Airplane(String flightNumber) {
        this.flightNumber = flightNumber;
    }
    
    @Override
    public void fly() {
        System.out.println("Flight " + flightNumber + " ignites jet engines and ascends!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Polymorphism works with interfaces too!
        Flyable flyer1 = new Bird("Tiwonge");
        Flyable flyer2 = new Airplane("BA-300");
        
        flyer1.fly(); // Output: Tiwonge flaps its wings...
        flyer2.fly(); // Output: Flight BA-300 ignites...
    }
}`,
        explanation: 'Bird and Airplane are completely different objects from separate lineages. However, because they both implement the Flyable contract, both can be stored inside Flyable reference variables and run fly() polymorphically.'
      }
    ],
    visualLearning: [
      {
        type: 'class_diagram',
        title: 'Interface Contract Structure',
        description: 'How unrelated classes implement a shared interface contract.',
        elements: {
          classes: [
            {
              name: 'Flyable [Interface]',
              fields: [],
              methods: ['void fly()']
            },
            {
              name: 'Bird [Class]',
              fields: ['String name'],
              methods: ['void fly() [Implemented]']
            },
            {
              name: 'Airplane [Class]',
              fields: ['String flightNumber'],
              methods: ['void fly() [Implemented]']
            }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to use the "public" keyword when implementing interface methods in a class.',
        whyItHappens: 'In the interface definition, the "public" keyword is omitted because it is automatic. However, when implementing that method in your class, leaving out "public" makes it package-private, which is a compilation error.',
        howToAvoid: 'Always declare your implemented interface methods as "public" inside your concrete classes.',
        codeSnippet: {
          bad: `class Bird implements Flyable {
    // ❌ WRONG: Omitted "public" reduces visibility, causing compiler crash!
    void fly() {
        System.out.println("Flaps wings");
    }
}`,
          good: `class Bird implements Flyable {
    // ✓ CORRECT: Must be declared public explicitly
    @Override
    public void fly() {
        System.out.println("Flaps wings");
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Interface Contract Lab',
      tasks: [
        'Create an interface named "Swimmable" with a method "void swim()".',
        'Create a class "Duck" that extends "Animal" and implements "Swimmable".',
        'Create a class "Submarine" (which is not an animal) that implements "Swimmable". Write a main method that runs "swim()" polymorphically on both.'
      ]
    },
    summary: [
      'Interfaces are behavioral contracts containing abstract method definitions.',
      'Classes utilize the "implements" keyword to adopt and fulfill interface behaviors.',
      'Interfaces allow completely unrelated classes to share standard actions and support polymorphism cleanly.'
    ]
  },

  'composition-vs-inheritance': {
    slug: 'composition-vs-inheritance',
    title: 'Composition vs. Inheritance',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `When designing software, you need to decide how your classes relate to one another. So far, we have focused heavily on **Inheritance**, which models an "Is-A" relationship (e.g., a Dog is an Animal). 

However, there is another equally powerful design model called **Composition**, which models a "Has-A" relationship (e.g., a Car has an Engine). We will explore the critical differences between these two approaches and learn when to favor composition to build resilient code.`,
    whyThisTopicMatters: {
      whyItExists: `Overusing inheritance leads to highly rigid software architectures. If you make "Car" inherit from "Engine", you create a logical disaster: a Car is not an Engine, and if you want to switch to an Electric Engine, your entire inheritance hierarchy shatters.`,
      problemSolved: `Composition avoids deep family trees. By placing an "Engine" object variable inside your "Car" class as a field, you can easily change or swap engine designs dynamically at runtime, creating highly modular applications.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To design relationships between classes effectively, we use two logical tests:'
      },
      {
        type: 'bullet_list',
        title: 'Comparing class relationships',
        items: [
          'Inheritance (Is-A): Used when a subclass is a specialized version of the superclass (e.g., "SavingsAccount is an Account", "Manager is an Employee").',
          'Composition (Has-A): Used when an object is composed of, or contains, other helper objects (e.g., "Car has an Engine", "Library has Books", "Course has Students").'
        ]
      },
      {
        type: 'paragraph',
        text: 'In software engineering, there is a famous design maxim: **"Favor composition over inheritance."** This is because composition offers loose coupling. If you want to change an Engine\'s horsepower, you only edit the Engine class. The Car class remains completely untouched!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Composition',
          definition: 'A software design pattern where a class is built by combining references to other distinct object instances as fields.',
          explanation: 'Instead of inheriting code, a composed class coordinates actions by calling methods on its internal helper objects.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Loose Coupling',
          definition: 'A system design goal where components have minimal dependencies on each other, making changes easy and isolated.',
          explanation: 'Composition promotes loose coupling because classes only interact through clean public methods, rather than locked parent variables.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Composition is how we use Arrays and Collections in advanced OOP! A "Library" class does not inherit from "Book". Instead, it has a field that holds an *array of Book objects* inside it.'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing Composition ("Has-A")',
        language: 'java',
        code: `// Engine Class - self contained
class Engine {
    String type;
    
    Engine(String type) {
        this.type = type;
    }
    
    void start() {
        System.out.println("Vroom! " + type + " engine is running.");
    }
}

// Car Class is Composed of an Engine!
class Car {
    String model;
    // Composition: Car HAS AN Engine variable!
    private Engine engine; 
    
    Car(String model, String engineType) {
        this.model = model;
        // Instantiate the helper object inside our constructor!
        this.engine = new Engine(engineType); 
    }
    
    void drive() {
        System.out.println("Preparing " + model + " to drive...");
        // Coordinate action by triggering our helper object!
        engine.start(); 
        System.out.println(model + " is accelerating down the highway!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("MAL-3000", "V8 Petrol");
        myCar.drive();
    }
}`,
        explanation: 'Car does not inherit from Engine. Instead, Car contains an Engine field. Calling myCar.drive() delegates the startup work to the internal engine instance.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Inheritance vs. Composition',
        description: 'Analyzing the trade-offs and differences between Is-A and Has-A relationships.',
        elements: {
          headers: ['Criteria', 'Inheritance ("Is-A")', 'Composition ("Has-A")'],
          rows: [
            ['Relationship', 'Subclass is a specialized type of parent.', 'Container class holds references to components.'],
            ['Coupling', 'Tight coupling (changing parent shatters child).', 'Loose coupling (components remain isolated).'],
            ['Flexibility', 'Rigid; decided at compile-time.', 'Flexible; components can be replaced at runtime.'],
            ['Implementation', 'Uses the "extends" keyword.', 'Uses variables of other class types as fields.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using inheritance to reuse code when there is no "Is-A" connection.',
        whyItHappens: 'Because inheritance is highly marketed, beginners might make "Computer extends Keyboard" just to reuse the keyboard\'s keys array.',
        howToAvoid: 'Run the linguistic test: Is a Computer a Keyboard? No. Does a Computer have a Keyboard? Yes. Use composition instead!',
        codeSnippet: {
          bad: `// ❌ WRONG: Computer is not a keyboard!
class Computer extends Keyboard {
    void process() {}
}`,
          good: `// ✓ CORRECT: Computer HAS A keyboard
class Computer {
    private Keyboard keyboard;
    void process() {}
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Composition Architecture Lab',
      tasks: [
        'Design a class "CPU" with fields "brand" and "cores" (int).',
        'Design a class "Computer" composed of a CPU and a field "ramGB" (int).',
        'Write a main method that instantiates a Computer, sets its CPU details, and prints a complete summary of its specifications.'
      ]
    },
    summary: [
      'Inheritance models "Is-A" hierarchies (e.g., Dog is an Animal) and is set at compile-time.',
      'Composition models "Has-A" associations (e.g., Car has an Engine) by placing object variables as fields.',
      'Favoring composition over inheritance creates loosely coupled, easily maintainable, and adaptable architectures.'
    ]
  },

  'oop-mini-project': {
    slug: 'oop-mini-project',
    title: 'OOP Mini Project',
    moduleSlug: 'advanced-oop',
    moduleName: 'Advanced Object-Oriented Programming',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `It is time to consolidate everything you have mastered throughout our Object-Oriented Programming journey! 

We will build a **Simple Banking System** that unites all core OOP concepts: classes, inheritance, method overriding, super keyword, and polymorphism. We will also utilize arrays, loops, and condition logic internally to manage customer files cleanly.`,
    whyThisTopicMatters: {
      whyItExists: `A single concept in isolation is simple. However, professional Java programs require combining these structures together to build cohesive, cooperative application architectures.`,
      problemSolved: `This mini-project demonstrates how a banking domain can be modeled cleanly using a Parent "Account" class, specialized "SavingsAccount" child classes, and a "Customer" coordinator class managing arrays of accounts dynamically.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Our Banking System will consist of three interconnected classes:'
      },
      {
        type: 'bullet_list',
        title: 'Banking System Class Blueprint',
        items: [
          'Account (Superclass): Stores standard variables like "accountNumber" and "balance", and handles generic deposit() and withdraw() behaviors.',
          'SavingsAccount (Subclass): Inherits from Account, adds an interestRate variable, overrides withdraw() to enforce fees, and adds an applyInterest() method.',
          'Customer (Composed Coordinator): Holds the customer\'s name and an *array of Account reference variables*, demonstrating composition and polymorphism.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Let\'s write the complete, clean, compile-ready code and analyze how these parts work together.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Dynamic Dispatch',
          definition: 'The runtime execution model where Java polymorphically dispatches calls to the specific overridden subclass implementation.',
          explanation: 'In our loop, when calling account.withdraw(), Java automatically determines if it is a standard Account or a SavingsAccount.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object Coordination',
          definition: 'The OOP design pattern where a composed master class invokes behaviors across an array of internal helper objects to run a business process.',
          explanation: 'Our Customer class manages a group of accounts by iterating and triggering actions on each account object.'
        }
      }
    ],
    codeExamples: [
      {
        title: 'The Simple Banking System App',
        language: 'java',
        code: `// 1. Generic Parent Class
class Account {
    private String accountNumber;
    protected double balance; // protected allows direct child access
    
    public Account(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited " + amount + " to " + accountNumber);
        }
    }
    
    // Generic withdraw method
    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from " + accountNumber);
        } else {
            System.out.println("Insufficient balance in " + accountNumber);
        }
    }
}

// 2. Specialized Subclass with Overriding and super
class SavingsAccount extends Account {
    private double interestRate; // e.g. 0.05 for 5%
    
    public SavingsAccount(String accountNumber, double balance, double interestRate) {
        // Run parent constructor first!
        super(accountNumber, balance); 
        this.interestRate = interestRate;
    }
    
    public void applyInterest() {
        double interest = balance * interestRate;
        balance += interest;
        System.out.println("Applied " + interest + " interest to Savings " + getAccountNumber());
    }
    
    // Override withdraw to enforce a savings penalty fee of $2.50
    @Override
    public void withdraw(double amount) {
        double totalDeduction = amount + 2.50;
        System.out.println("Savings withdrawal fee: $2.50 applied.");
        // Call parent withdraw to handle balance checking and execution!
        super.withdraw(totalDeduction); 
    }
}

// 3. Composed Customer Class holding an Array of Accounts polymorphically!
class Customer {
    private String name;
    // Composition: Customer HAS AN array of Account pointers!
    private Account[] accounts; 
    private int accountCount;
    
    public Customer(String name, int maxAccounts) {
        this.name = name;
        this.accounts = new Account[maxAccounts];
        this.accountCount = 0;
    }
    
    public void addAccount(Account acc) {
        if (accountCount < accounts.length) {
            accounts[accountCount] = acc;
            accountCount++;
            System.out.println("Linked account " + acc.getAccountNumber() + " to " + name);
        } else {
            System.out.println("Cannot add more accounts for " + name);
        }
    }
    
    // Polymorphic display loop!
    public void displayPortfolio() {
        System.out.println("\\n=== Portfolio for " + name + " ===");
        for (int i = 0; i < accountCount; i++) {
            Account acc = accounts[i];
            // Dynamic dispatch prints the correct balance and details
            System.out.println("Acc: " + acc.getAccountNumber() + " | Balance: $" + acc.getBalance());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Step 1: Create a Customer
        Customer customer = new Customer("Limbani", 3);
        
        // Step 2: Create a checking and a savings account
        Account checking = new Account("CHK-101", 500.0);
        SavingsAccount savings = new SavingsAccount("SAV-202", 1000.0, 0.05);
        
        // Step 3: Link them to Customer
        customer.addAccount(checking);
        customer.addAccount(savings);
        
        // Step 4: Display starting portfolio
        customer.displayPortfolio();
        
        // Step 5: Execute transactions (polymorphic overrides!)
        System.out.println("\\n--- Executing Transactions ---");
        checking.deposit(200.0);
        savings.withdraw(100.0); // Triggers Savings override (fee applied!)
        
        // Step 6: Specialized action
        savings.applyInterest();
        
        // Step 7: Final display
        customer.displayPortfolio();
    }
}`,
        explanation: 'The customer successfully links both standard accounts and savings accounts into a single "Account[]" array. Transactions execute cleanly, running overridden withdrawal logic and calculating interest.'
      }
    ],
    visualLearning: [
      {
        type: 'object_relation',
        title: 'Banking System Object Relationship Model',
        description: 'How Customer, Account, and SavingsAccount connect in memory.',
        elements: {
          objects: [
            { id: '1', name: 'Customer (Limbani)', fields: ['name: "Limbani"', 'accounts: Account[]'] },
            { id: '2', name: 'Account[] (Array)', fields: ['slot[0] -> CHK-101 (Account)', 'slot[1] -> SAV-202 (SavingsAccount)'] },
            { id: '3', name: 'CHK-101 (Account)', fields: ['balance: 700.0'] },
            { id: '4', name: 'SAV-202 (SavingsAccount)', fields: ['balance: 947.50', 'interestRate: 0.05'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'composes' },
            { from: '2', to: '3', label: 'points to' },
            { from: '2', to: '4', label: 'points to' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Declaring a private field in the parent class and expecting subclasses to access it directly without a getter or protected mapping.',
        whyItHappens: 'If "balance" was marked "private" instead of "protected", writing "balance += interest" in SavingsAccount would trigger a compile error.',
        howToAvoid: 'Either declare variables "protected" to allow child access, or use getters and setters to update them securely.',
        codeSnippet: {
          bad: `class Parent { private double val; }
class Child extends Parent {
    void edit() { val = 10; } // ❌ Compile Error!
}`,
          good: `class Parent { protected double val; } // Use protected!
class Child extends Parent {
    void edit() { val = 10; } // ✓ Compile Success!
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Banking Expansion Lab',
      tasks: [
        'Add a custom method "applyInterest()" verification check to the Main method to ensure it only runs on valid savings types.',
        'Create a new subclass "CheckingAccount" that inherits from Account and overrides "withdraw()" to charge a $1.00 transaction fee.',
        'Add a method "double getCombinedBalance()" to the "Customer" class that loops through their linked accounts and returns the total sum of their balances.'
      ]
    },
    summary: [
      'Successfully combined classes, inheritance, method overriding, super calling, and composition into a single software design.',
      'Composed classes utilize object arrays to manage groups of items cleanly and polymorphically.',
      'Complex enterprise programs use these exact structures to represent real business processes, databases, and assets.'
    ]
  }
};
