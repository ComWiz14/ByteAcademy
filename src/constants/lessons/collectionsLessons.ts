import { DetailedLessonContent } from '../../types';

export const COLLECTIONS_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-collections-framework': {
    slug: 'introduction-to-collections-framework',
    title: 'Introduction to Collections Framework',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `In software development, we constantly need to manage groups of data. Up until now, we have used standard Java Arrays to store lists of numbers or strings. However, standard arrays have a major limitation: they are fixed in size. Once you create an array of size 5, it can never hold a 6th item.

To solve this and other limitations, Java provides the **Collections Framework**—a set of built-in, highly flexible classes that make storing, organizing, and manipulating groups of objects simple and efficient.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine building an online shopping app. Users constantly add and remove items from their carts. If you used a standard array, you would have to guess the max number of items a user might buy. If you guess 10, and they buy 11, the app crashes! If you guess 100, you waste memory for most users.`,
      problemSolved: `The Java Collections Framework solves this by providing dynamic data structures that automatically shrink and grow as items are added or removed, complete with built-in tools for searching, sorting, and filtering.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Standard Java arrays have three major limitations that make them difficult to use in real-world applications:'
      },
      {
        type: 'bullet_list',
        title: 'The three limitations of standard arrays',
        items: [
          'Fixed Size: You must declare the array size at creation time, and it cannot be changed during execution.',
          'Manual Operations: Adding or removing elements in the middle of an array requires writing tedious loops to shift subsequent elements.',
          'No Built-in Helpers: Searching for a specific value or checking if an item exists requires writing your own scanning algorithms.'
        ]
      },
      {
        type: 'paragraph',
        text: 'To solve these challenges, Java provides three primary collection archetypes, each designed for a specific data management style:'
      },
      {
        type: 'bullet_list',
        title: 'The Three Core Collection Types',
        items: [
          'List: An ordered sequence of elements that allows duplicates (e.g., an ArrayList of usernames). You access items by their numeric index.',
          'Set: An unordered collection that contains NO duplicates (e.g., a HashSet of unique country codes). Perfect for membership checks.',
          'Map: A collection of key-value pairs (e.g., a HashMap linking Student IDs to Student Names). You look up values using a unique key.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Collections Framework',
          definition: 'A unified architecture in Java for representing and manipulating groups of objects.',
          explanation: 'It includes interfaces (like List, Set, Map) and implementation classes (like ArrayList, HashSet, HashMap).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Generics',
          definition: 'A Java feature that allows you to specify the exact type of objects a collection can store.',
          explanation: 'Written inside angle brackets, like <String> or <Integer>, ensuring type-safety at compile time.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Curriculum Connection: Collections only store Objects, not primitive data types. Instead of int, double, or boolean, you will use their Object wrapper classes: Integer, Double, and Boolean!'
      }
    ],
    codeExamples: [
      {
        title: 'A High-Level Comparison of List, Set, and Map',
        language: 'java',
        code: `import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;

public class CollectionsOverview {
    public static void main(String[] args) {
        // 1. LIST: Maintains order and allows duplicates
        ArrayList<String> shoppingList = new ArrayList<>();
        shoppingList.add("Apple");
        shoppingList.add("Banana");
        shoppingList.add("Apple"); // Duplicate is allowed!
        System.out.println("List (allows duplicates): " + shoppingList);
        
        // 2. SET: Discards duplicates automatically
        HashSet<String> uniqueColors = new HashSet<>();
        uniqueColors.add("Red");
        uniqueColors.add("Blue");
        uniqueColors.add("Red"); // Duplicate is silently ignored!
        System.out.println("Set (unique items only): " + uniqueColors);
        
        // 3. MAP: Stores Key-to-Value associations
        HashMap<String, String> phoneBook = new HashMap<>();
        phoneBook.put("Alice", "555-0199");
        phoneBook.put("Bob", "555-0142");
        System.out.println("Map (Keys to Values): Alice's number is " + phoneBook.get("Alice"));
    }
}`,
        explanation: 'This code showcases the three core types. The list prints duplicate Apples. The set ignores the second Red. The map retrieves Bob or Alice\'s phone number in constant time.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Arrays vs. Collections',
        description: 'Choosing the right structure for your application data.',
        elements: {
          headers: ['Feature', 'Standard Arrays', 'Java Collections'],
          rows: [
            ['Size', 'Fixed (cannot change)', 'Dynamic (grows and shrinks automatically)'],
            ['Type Support', 'Supports primitives (int) and objects', 'Supports objects only (requires Wrapper classes)'],
            ['Duplicate elements', 'Always allowed', 'Depends on type (Lists allow, Sets forbid)'],
            ['Built-in Methods', 'None (requires manual loops)', 'Rich library of helper functions (.contains, .remove, .sort)'],
            ['Performance', 'Slightly faster due to simple memory', 'Highly optimized for specific operational tasks']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to import the collections utility classes.',
        whyItHappens: 'Collections are not in the default java.lang package, so using ArrayList without importing causes compilation errors.',
        howToAvoid: 'Always place "import java.util.*" or specific imports like "import java.util.ArrayList;" at the very top of your Java file.',
        codeSnippet: {
          bad: `// ❌ Throws compilation error: Cannot find symbol ArrayList!
public class BadImport {
    ArrayList<String> list = new ArrayList<>();
}`,
          good: `// ✓ CORRECT: Import from java.util package first!
import java.util.ArrayList;

public class GoodImport {
    ArrayList<String> list = new ArrayList<>();
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Collection Archetype Selection',
      tasks: [
        'Determine which collection type (List, Set, or Map) is best for: A list of unique social security numbers.',
        'Determine which collection type is best for: A collection of chat messages ordered by time received.',
        'Determine which collection type is best for: A user directory linking email addresses to user profile objects.'
      ]
    },
    summary: [
      'Standard arrays have a fixed size and require manual logic to insert or delete elements.',
      'The Collections Framework provides pre-built interfaces and dynamic classes for lists, maps, and sets.',
      'Collections only store Object types, necessitating Java Wrapper classes for raw numeric variables.'
    ]
  },

  'arraylist-basics': {
    slug: 'arraylist-basics',
    title: 'ArrayList Basics',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `The most popular and frequently used collection class in Java is the **ArrayList**. An ArrayList implements the List interface, functioning as a resizable array.

Under the hood, an ArrayList wraps around a standard array. When you add items, the ArrayList automatically handles the allocation of more memory, letting you treat your list as if it has infinite capacity.`,
    whyThisTopicMatters: {
      whyItExists: `If you are building an email client like Gmail, you need to store an active list of received emails. As new emails arrive, they are added to the top of the list. ArrayList allows you to add elements seamlessly without managing memory arrays yourself.`,
      problemSolved: `ArrayList eliminates the need to manually resize arrays, copy values, or maintain a tracking variable for the index of the last element inserted.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Creating and manipulating an ArrayList is easy when you break down the code step-by-step:'
      },
      {
        type: 'bullet_list',
        title: 'Creating an ArrayList in Java',
        items: [
          'Import ArrayList: Place "import java.util.ArrayList;" at the top of your file.',
          'Declare the List: Specify the class name and the object type inside angle brackets: "ArrayList<String>"',
          'Instantiate: Use the new keyword and the diamond operator "<>": "new ArrayList<>()"'
        ]
      },
      {
        type: 'paragraph',
        text: 'Let\'s dissect the syntax of the declaration:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Diamond Operator (<>)',
          definition: 'The angle brackets used in Java to specify the generic type parameter.',
          explanation: 'In "ArrayList<String> list = new ArrayList<>();", the compiler infers the type "String" on the right side, so you do not have to write it twice.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Wrapper Class',
          definition: 'Object classes corresponding to Java primitive data types.',
          explanation: 'ArrayLists cannot hold "int" directly. You must declare "ArrayList<Integer>" instead. Java automatically converts ints to Integers (autoboxing).'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'OOP Connection: Under the hood, an ArrayList is an object on the heap that contains a reference to a standard array. When that array fills up, ArrayList constructs a new array that is 1.5 times larger and copies all elements over!'
      }
    ],
    codeExamples: [
      {
        title: 'Creating and Performing Basic Operations on an ArrayList',
        language: 'java',
        code: `import java.util.ArrayList;

public class ArrayListBasics {
    public static void main(String[] args) {
        // Create an ArrayList of Strings to hold customer names
        ArrayList<String> customers = new ArrayList<>();
        
        // 1. Adding elements
        customers.add("Alice");
        customers.add("Bob");
        customers.add("Charlie");
        
        System.out.println("Customers: " + customers);
        
        // 2. Accessing elements by index
        String first = customers.get(0); // Gets first item
        System.out.println("First Customer: " + first);
        
        // 3. Removing elements
        customers.remove(1); // Removes "Bob" at index 1
        System.out.println("After removing Bob: " + customers);
        
        // 4. Getting the current size
        int total = customers.size();
        System.out.println("Total Customers: " + total);
    }
}`,
        explanation: 'We create a list and use .add() to append strings. The list expands dynamically. We retrieve items via .get(0) and delete Bob with .remove(1), which instantly shifts subsequent items up.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Array vs. ArrayList Syntax',
        description: 'Contrasting the basic operations between static and dynamic lists.',
        elements: {
          headers: ['Operation', 'Standard Array', 'ArrayList'],
          rows: [
            ['Declaration', 'String[] names = new String[5];', 'ArrayList<String> names = new ArrayList<>();'],
            ['Adding element', 'names[0] = "Alice";', 'names.add("Alice");'],
            ['Accessing element', 'String x = names[0];', 'String x = names.get(0);'],
            ['Modifying element', 'names[0] = "Bob";', 'names.set(0, "Bob");'],
            ['Getting count', 'int size = names.length;', 'int size = names.size();'],
            ['Deleting element', 'Not supported (must write code to shift items)', 'names.remove(0); (shifts automatically)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Attempting to use primitive data types inside generic angle brackets.',
        whyItHappens: 'Forgetting that collections only work with Objects, and writing "ArrayList<int>" because of array habits.',
        howToAvoid: 'Always use object wrappers. Use Integer instead of int, Double instead of double, Character instead of char, and Boolean instead of boolean.',
        codeSnippet: {
          bad: `// ❌ Throws compilation error: Unexpected type, primitive not allowed!
ArrayList<int> scores = new ArrayList<>();`,
          good: `// ✓ CORRECT: Use the Integer wrapper class instead!
ArrayList<Integer> scores = new ArrayList<>();
scores.add(95); // Autoboxing converts the primitive int 95 to Integer object!`
        }
      }
    ],
    practiceExercise: {
      title: 'ArrayList Sandbox Lab',
      tasks: [
        'Write an ArrayList of Double objects named "temperatures". Add three decimal numbers to it.',
        'Access and print the second temperature in the list.',
        'Remove the first temperature, and print the new size of the list.'
      ]
    },
    summary: [
      'ArrayList is a resizable list class that implements the List interface in Java.',
      'You must specify Object wrapper classes (like Integer) instead of primitive types (like int) inside Generics.',
      'Core ArrayList methods include add() to append, get() to retrieve, remove() to delete, and size() to get element count.'
    ]
  },

  'working-with-arraylist-methods': {
    slug: 'working-with-arraylist-methods',
    title: 'Working with ArrayList Methods',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Beyond basic additions and retrievals, the ArrayList class is packed with built-in helper methods. These methods make performing complex tasks—like searching, replacing, inserting, or clearing elements—incredibly easy.

Instead of writing custom loops to check if a value exists or to modify an index, we can invoke these optimized methods in a single line of code.`,
    whyThisTopicMatters: {
      whyItExists: `In an e-commerce checkout system, you must constantly verify if an item is already in the cart to update its quantity, or clear the entire cart after a successful transaction. Doing this manually on arrays is exhausting.`,
      problemSolved: `ArrayList methods encapsulate standard list processing operations, saving you from writing redundant search, modification, and clear-up logic.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s master the core list processing methods that Java provides inside the ArrayList class:'
      },
      {
        type: 'bullet_list',
        title: 'Essential ArrayList API Methods',
        items: [
          'add(int index, E element): Inserts an element at a specific index, shifting subsequent elements to the right.',
          'set(int index, E element): Replaces the element at the specified index with a new value, overwriting what was there.',
          'contains(Object o): Scans the list and returns true if the element is present, and false otherwise.',
          'indexOf(Object o): Returns the index of the first occurrence of the element, or -1 if the element is not found.',
          'clear(): Deletes all elements inside the list, reducing its size to zero instantly.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Method Overloading',
          definition: 'Having multiple methods with the same name but different parameters.',
          explanation: 'The add() method is overloaded. "add(value)" appends to the end, while "add(index, value)" inserts at a specific position.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'contains() method',
          definition: 'A search method that evaluates if an item exists inside a collection.',
          explanation: 'Under the hood, contains() loops through the list and uses the equals() method to check if each item matches.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Exceptions Connection: Just like standard arrays, accessing or modifying an invalid index (such as list.get(99) on a list with only 5 items) will throw an ArrayIndexOutOfBoundsException!'
      }
    ],
    codeExamples: [
      {
        title: 'Leveraging Advanced ArrayList Operations',
        language: 'java',
        code: `import java.util.ArrayList;

public class ListMethodExplorer {
    public static void main(String[] args) {
        ArrayList<String> playlist = new ArrayList<>();
        
        playlist.add("Song A");
        playlist.add("Song B");
        playlist.add("Song C");
        
        // 1. Insertion at specific index
        playlist.add(1, "Bonus Song"); // Inserts at index 1
        System.out.println("After Insertion: " + playlist); // [Song A, Bonus Song, Song B, Song C]
        
        // 2. Replacing an element
        playlist.set(3, "Song C (Remix)"); // Overwrites Song C
        System.out.println("After Modifying: " + playlist);
        
        // 3. Checking for existence
        if (playlist.contains("Bonus Song")) {
            System.out.println("Playlist contains the Bonus Song!");
        }
        
        // 4. Locating elements
        int index = playlist.indexOf("Song B");
        System.out.println("Song B is at position: " + index);
        
        // 5. Emptying the list
        playlist.clear();
        System.out.println("After Clearing, list size is: " + playlist.size());
    }
}`,
        explanation: 'We insert a song at index 1, shift elements, modify an entry with .set(), search for values using .contains() and .indexOf(), and finally erase the entire list using .clear().'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Comparing add() vs. set()',
        description: 'Understanding how inserting and replacing affect list size and indexing.',
        elements: {
          headers: ['Operation', 'list.add(1, "NewItem");', 'list.set(1, "NewItem");'],
          rows: [
            ['Action', 'Inserts element at index 1, pushing others down', 'Replaces whatever was at index 1 with "NewItem"'],
            ['Overwriting?', 'No. Old item at index 1 shifts to index 2', 'Yes. The old value is permanently erased/replaced'],
            ['List Size effect', 'Increases size by 1', 'List size remains exactly the same'],
            ['Safe indexes', 'Valid from 0 to list.size()', 'Valid from 0 to list.size() - 1']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using standard bracket syntax to modify or access ArrayList elements.',
        whyItHappens: 'Being accustomed to standard Java array syntax like "arr[0] = value;".',
        howToAvoid: 'Remember that ArrayList is a class with methods. You must use .get() and .set(). Only arrays use brackets.',
        codeSnippet: {
          bad: `ArrayList<String> names = new ArrayList<>();
names.add("Alinafe");
// ❌ Compile Error: Array type required, but ArrayList found!
names[0] = "John"; 
String s = names[0];`,
          good: `ArrayList<String> names = new ArrayList<>();
names.add("Alinafe");
// ✓ CORRECT: Use set() and get() methods instead!
names.set(0, "John");
String s = names.get(0);`
        }
      }
    ],
    practiceExercise: {
      title: 'Playlist Manager Challenge',
      tasks: [
        'Write a program that manages an ArrayList of Strings representing tasks: "Task 1", "Task 2".',
        'Insert "High Priority Task" at index 0.',
        'Check if "Task 3" exists in the list; if not, add it.',
        'Print the final list of tasks.'
      ]
    },
    summary: [
      'The overloaded add(index, element) inserts items at any position, shifting later elements down.',
      'The set(index, newElement) replaces existing elements without altering the overall size of the list.',
      'The contains() and indexOf() methods provide simple, built-in search and query tools.'
    ]
  },

  'looping-through-collections': {
    slug: 'looping-through-collections',
    title: 'Looping Through Collections',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Storing data in collections is only useful if we can retrieve and process those items later. In Java, traversing through elements in a list is a core skill.

We can loop through collections using traditional index-based for loops, or we can use the cleaner, more modern **enhanced for loop** (also known as the for-each loop).`,
    whyThisTopicMatters: {
      whyItExists: `Think of a grading application. You store student test grades inside an ArrayList of Integers. To calculate the class average, your program must loop through the collection, add all grades to a sum variable, and divide by the size.`,
      problemSolved: `Looping through collections allows you to apply calculations, print formatting, or search constraints across every element stored in a dynamic structure.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'We have two primary ways to loop through list collections in Java:'
      },
      {
        type: 'bullet_list',
        title: 'Two Methods for Iterating over Lists',
        items: [
          'Traditional For Loop: Uses a standard loop counter variable "i" running from 0 to list.size() - 1. This is useful when you need to know the index number of the item you are processing.',
          'Enhanced For-Each Loop: A simplified loop structure that automatically assigns each element to a temp variable. It has no index counters, making it highly readable and clean.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Enhanced For Loop (for-each)',
          definition: 'A simplified Java loop structure designed specifically to iterate through arrays and collections without index counters.',
          explanation: 'Syntax: "for (Type element : collection)". In each iteration, "element" automatically references the next item.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'ConcurrentModificationException',
          definition: 'An exception thrown when you modify a collection structurally while iterating over it with a for-each loop.',
          explanation: 'You cannot use list.remove() inside a for-each loop. We will learn how to do this safely using Iterators in later lessons.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Curriculum Connection: Just like with standard arrays, the enhanced for-each loop is read-only. Modifying the loop parameter does not write new values back into the underlying collection.'
      }
    ],
    codeExamples: [
      {
        title: 'Traversing an ArrayList using Traditional and Enhanced Loops',
        language: 'java',
        code: `import java.util.ArrayList;

public class CollectionLooping {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        students.add("Alinafe");
        students.add("Brie");
        students.add("Chisomo");
        
        // Method 1: Traditional For Loop (Uses Index)
        System.out.println("--- Traditional For Loop ---");
        for (int i = 0; i < students.size(); i++) {
            System.out.println("Student at index " + i + " is: " + students.get(i));
        }
        
        // Method 2: Enhanced For Loop (Cleaner)
        System.out.println("\\n--- Enhanced For-Each Loop ---");
        for (String student : students) {
            System.out.println("Student: " + student);
        }
    }
}`,
        explanation: 'The traditional loop uses index i to fetch student names via .get(i). The enhanced loop hides index mechanics completely, reading like plain English: "For each student of type String in the students collection, print..."'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Traditional vs. Enhanced Loop',
        description: 'Choosing the right loop for collection traversal.',
        elements: {
          headers: ['Feature', 'Traditional Loop', 'Enhanced Loop (For-Each)'],
          rows: [
            ['Syntax Complexity', 'Moderate (for (int i = 0; i < size; i++))', 'Very Simple (for (String s : list))'],
            ['Index access', 'Yes (via counter variable i)', 'No (index is hidden)'],
            ['Direction of traversal', 'Can run forward, backward, or skip items', 'Always runs forward, item by item'],
            ['Modifying values during loop', 'Possible (via list.set(i, val))', 'Impossible (read-only access)'],
            ['Best Use Case', 'When index matters (e.g., replacing item at index i)', 'When you just want to read or display every item']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using list.remove() inside an enhanced for-each loop.',
        whyItHappens: 'A developer wants to search for an item in a list and delete it if it matches, using a simple for-each.',
        howToAvoid: 'Never alter the structure of an active collection inside a for-each loop. If you must delete items dynamically, use an Iterator (see Lesson 8) or use a standard backward-running indexed loop.',
        codeSnippet: {
          bad: `ArrayList<String> tags = new ArrayList<>();
tags.add("admin");
tags.add("user");
// ❌ Throws ConcurrentModificationException at runtime!
for (String tag : tags) {
    if (tag.equals("admin")) {
        tags.remove(tag); 
    }
}`,
          good: `ArrayList<String> tags = new ArrayList<>();
tags.add("admin");
tags.add("user");
// ✓ CORRECT: Loop backwards to avoid index shifting bugs!
for (int i = tags.size() - 1; i >= 0; i--) {
    if (tags.get(i).equals("admin")) {
        tags.remove(i);
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Cart Total Calculator Lab',
      tasks: [
        'Create an ArrayList of Double objects named "prices" and add values: 19.99, 5.50, 10.00.',
        'Use an enhanced for-each loop to compute the sum of all elements in the list.',
        'Print out the computed total price of the items.'
      ]
    },
    summary: [
      'The traditional for loop uses index-based counters (i) and is ideal when index positions matter.',
      'The enhanced for loop (for-each) provides highly readable, index-free access to all collection items.',
      'Modifying a list structurally (adding/removing) inside an enhanced loop throws a ConcurrentModificationException.'
    ]
  },

  'linkedlist': {
    slug: 'linkedlist',
    title: 'LinkedList',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Java provides multiple ways to implement the List interface. While \`ArrayList\` is the most common, another powerful implementation is the **LinkedList**.

Instead of using a single backing array, a LinkedList is made up of a chain of independent **Node** objects. Each node contains a value, and links to the next and previous nodes in the chain.`,
    whyThisTopicMatters: {
      whyItExists: `In high-frequency systems like stock trading or media streaming queues, you are constantly inserting and deleting items at the head of the list. Doing this in ArrayList is slow because it has to shift thousands of elements in memory. In a LinkedList, it is instant because you only modify node links.`,
      problemSolved: `LinkedList eliminates the O(N) element shifting penalty during front insertions and removals, offering O(1) constant-time modifications.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand LinkedList, you must understand how its node-based memory works:'
      },
      {
        type: 'bullet_list',
        title: 'LinkedList Node Structure',
        items: [
          'The Node: Each element in a LinkedList sits inside a tiny Node wrapper.',
          'Double Links: Every Node contains two memory pointers: "next" (pointing to the following node) and "prev" (pointing to the preceding node).',
          'Sequential Scanning: Because elements are scattered across different memory locations, accessing index 500 requires starting at index 0 and following links sequentially 500 times.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Doubly LinkedList',
          definition: 'A sequence of nodes where each node links to both its successor and predecessor.',
          explanation: 'This allows the LinkedList class to traverse elements efficiently from both the beginning and the end.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Data Node',
          definition: 'A private object used by LinkedList to hold the actual element and link addresses.',
          explanation: 'It acts as an envelope wrapping around the data you insert (like a String or Integer).'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'When choosing between ArrayList and LinkedList: Default to ArrayList! It is faster for 95% of applications because reading from memory indexes is extremely fast.'
      }
    ],
    codeExamples: [
      {
        title: 'Using LinkedList for a Queue or Playlist',
        language: 'java',
        code: `import java.util.LinkedList;

public class LinkedListDemo {
    public static void main(String[] args) {
        // Create a LinkedList of Strings
        LinkedList<String> taskQueue = new LinkedList<>();
        
        // 1. Adding elements
        taskQueue.add("Task 1");
        taskQueue.add("Task 2");
        
        // 2. LinkedList provides additional methods for ends
        taskQueue.addFirst("Urgent Task"); // Adds at index 0 instantly
        taskQueue.addLast("Low Priority Task"); // Appends at the end
        
        System.out.println("Tasks: " + taskQueue);
        
        // 3. Accessing ends instantly
        System.out.println("Next Task up: " + taskQueue.getFirst());
        System.out.println("Last Task up: " + taskQueue.getLast());
        
        // 4. Removing from ends
        taskQueue.removeFirst(); // Removes Urgent Task
        System.out.println("After processing urgent task: " + taskQueue);
    }
}`,
        explanation: 'We declare a LinkedList. Because it implements both List and Deque, it has methods like .addFirst(), .addLast(), .getFirst(), and .removeFirst(), which perform at constant speed.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'ArrayList vs. LinkedList',
        description: 'Analyzing performance differences for core operations.',
        elements: {
          headers: ['Operation', 'ArrayList Performance', 'LinkedList Performance', 'Why the difference?'],
          rows: [
            ['get(index)', 'Fast: O(1) Constant Time', 'Slow: O(N) Linear Time', 'ArrayList jumps directly to memory index; LinkedList must walk the node links.'],
            ['add(element) (at end)', 'Fast: O(1) (Usually)', 'Fast: O(1) Constant Time', 'Both append to the end quickly.'],
            ['add(0, element) (at start)', 'Slow: O(N) Linear Time', 'Fast: O(1) Constant Time', 'ArrayList must shift all existing items in memory; LinkedList just updates node link references.'],
            ['Memory Usage', 'Low (stores elements directly)', 'High (stores values plus next/prev pointer addresses)', 'Each node object requires additional reference pointer overhead.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using standard indexed for-loops with LinkedList for large data.',
        whyItHappens: 'A developer writes a traditional "for (int i=0; i < linkedList.size(); i++)" loop, forgetting how nodes are read.',
        howToAvoid: 'Never use index-based for loops with LinkedList! Because .get(i) must walk the chain every time, this loop takes O(N^2) time, making your app crawl. Always use an enhanced for-each loop or Iterator, which traverse sequentially without restarting from the head.',
        codeSnippet: {
          bad: `LinkedList<String> list = getHugeList();
// ❌ HORRIBLY SLOW: Walks the nodes from the start on every single i!
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i)); 
}`,
          good: `LinkedList<String> list = getHugeList();
// ✓ CORRECT: Traverses from node to node directly without restarting!
for (String element : list) {
    System.out.println(element);
}`
        }
      }
    ],
    practiceExercise: {
      title: 'LinkedList Pipeline Lab',
      tasks: [
        'Write a program that uses LinkedList to implement a printer task queue.',
        'Add three document names using .addLast().',
        'Print the document queue, process the first one using .removeFirst(), and print the final queue.'
      ]
    },
    summary: [
      'LinkedList stores elements in nodes linked to next and previous node addresses.',
      'It allows ultra-fast O(1) insertions and removals at the beginning or end of the list.',
      'Accessing elements by index is slow because LinkedList must scan the chain sequentially from node to node.'
    ]
  },

  'hashset': {
    slug: 'hashset',
    title: 'HashSet',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Sometimes we do not care about the order of our data, but we care deeply about uniqueness. For example, if we are storing user accounts, we must guarantee that no two accounts have the exact same username.

To manage non-duplicate collections, Java provides the **HashSet** class. A HashSet implements the Set interface, guaranteeing that duplicate elements are rejected automatically.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine an online polling app where users submit votes. If a user votes multiple times, their duplicate votes must be discarded. Storing votes in a HashSet ensures that each user ID is counted exactly once, automatically preventing ballot stuffing.`,
      problemSolved: `HashSet discards duplicate elements automatically. It also performs membership searches (checking if an item exists) near-instantly, even if the Set contains millions of items.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A HashSet is designed with distinct structural behaviors that differentiate it from List collections:'
      },
      {
        type: 'bullet_list',
        title: 'Core Characteristics of HashSet',
        items: [
          'No Duplicates: If you attempt to add an element already present in the Set, the .add() method returns false and the addition is ignored.',
          'Unordered: HashSet does not maintain any insertion order. When you print a HashSet, the elements will appear in an unpredictable order.',
          'No Indexing: Because elements are unordered, there are no index numbers. You cannot write "set.get(0)".'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Set Interface',
          definition: 'A collection interface in Java that models mathematical sets, containing no duplicate elements.',
          explanation: 'HashSet is the most popular implementation of the Set interface.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Hashing',
          definition: 'A technique that converts an object into a unique integer identifier (hashcode) to store it at a specific memory slot.',
          explanation: 'Because of hashing, a HashSet can find or check an element instantly without searching through the entire collection.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Curriculum Connection: How does HashSet know if an item is a duplicate? It uses the object\'s hashCode() and equals() methods (from OOP!) to evaluate if they match.'
      }
    ],
    codeExamples: [
      {
        title: 'Managing Unique Usernames with HashSet',
        language: 'java',
        code: `import java.util.HashSet;

public class HashSetBasics {
    public static void main(String[] args) {
        HashSet<String> usernames = new HashSet<>();
        
        // 1. Adding unique elements
        usernames.add("alice123");
        usernames.add("bob_coder");
        usernames.add("charlie_java");
        
        // 2. Attempting to add a duplicate!
        boolean added = usernames.add("alice123"); // Returns false!
        System.out.println("Was duplicate alice123 added? " + added);
        
        System.out.println("Set size: " + usernames.size()); // Size remains 3
        System.out.println("Set Contents: " + usernames); // Order is unpredictable!
        
        // 3. Ultra-fast membership lookup
        if (usernames.contains("bob_coder")) {
            System.out.println("bob_coder is registered.");
        }
        
        // 4. Removing elements
        usernames.remove("charlie_java");
        System.out.println("After removal: " + usernames);
    }
}`,
        explanation: 'We create a HashSet. Adding "alice123" a second time fails, returning false. The overall size remains 3. When printed, notice that the order of the strings does not match the order they were added.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'List vs. Set Summary',
        description: 'Key architectural differences between List and Set structures.',
        elements: {
          headers: ['Property', 'List (ArrayList / LinkedList)', 'Set (HashSet)'],
          rows: [
            ['Allows Duplicates?', 'Yes (e.g. ["Apple", "Apple"])', 'No (silently discards duplicates)'],
            ['Maintains Order?', 'Yes (ordered by insertion index)', 'No (unpredictable order)'],
            ['Index support?', 'Yes (get(0))', 'No (no indexes exist)'],
            ['Search Speed', 'Slow: O(N) (must scan elements sequentially)', 'Instant: O(1) (via Hashcode indexes)'],
            ['Null value support', 'Allows multiple null values', 'Allows at most one null value']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to retrieve elements from a HashSet using a numeric index.',
        whyItHappens: 'Assuming because it holds multiple items, we can write a loop with "set.get(i)" like an ArrayList.',
        howToAvoid: 'Since Set has no indexes, .get() is not supported. To read values, you must loop through using an enhanced for-each loop or check presence with .contains().',
        codeSnippet: {
          bad: `HashSet<String> codes = new HashSet<>();
codes.add("US");
// ❌ Compile Error: Cannot find symbol method get(int) in HashSet!
String first = codes.get(0); `,
          good: `HashSet<String> codes = new HashSet<>();
codes.add("US");
codes.add("UK");
// ✓ CORRECT: Iterate using enhanced for-each to access elements!
for (String code : codes) {
    System.out.println("Code: " + code);
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Duplicate Filter Lab',
      tasks: [
        'Write a program that declares an ArrayList of Strings with values: "Dog", "Cat", "Dog", "Bird".',
        'Construct a HashSet and add all items from your ArrayList into it. Note what happens to the duplicate.',
        'Print the size of both the ArrayList and the HashSet.'
      ]
    },
    summary: [
      'HashSet implements the Set interface, ensuring all elements are unique and discarding duplicates.',
      'Sets are unordered and do not support index-based lookups (no get(index) method).',
      'Using hashing algorithms, HashSet offers incredibly fast, constant-time checks for elements.'
    ]
  },

  'hashmap': {
    slug: 'hashmap',
    title: 'HashMap',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `A list is indexed by numbers (0, 1, 2...). But what if you want to index data using non-numeric labels, such as names or emails?

For this, Java provides the **HashMap** class. A HashMap stores relational pairings called **Key-Value Pairs**. Think of it like a vocabulary dictionary: you look up a word (the Key) to find its definition (the Value).`,
    whyThisTopicMatters: {
      whyItExists: `In massive directories like a student catalog, looking up a student name by their unique Student ID in a list is highly inefficient. If you have 10,000 students, you might have to scan 10,000 items. A HashMap maps Student ID (Key) directly to Student Name (Value), performing lookups instantly.`,
      problemSolved: `HashMap links custom keys of any object type to associated value objects, delivering extremely fast lookup times.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'A HashMap operates under specific rules regarding keys and values:'
      },
      {
        type: 'bullet_list',
        title: 'Core Rules of HashMaps',
        items: [
          'Unique Keys: Keys must be completely unique. If you map a value to an existing key, the old value is overwritten.',
          'Duplicate Values: Values can repeat. For instance, two different students (different Keys) can have the same name (same Value).',
          'Key-to-Value Association: Map operations require declaring two generic types inside brackets: "HashMap<KeyType, ValueType>".'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Key-Value Pair',
          definition: 'A relationship linking an index key directly to an associated data value.',
          explanation: 'In "map.put(\"Alice\", \"A+\");", "Alice" is the key and "A+" is the value.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'put() vs get()',
          definition: 'The primary methods used to insert and retrieve data inside a Map.',
          explanation: 'Use .put(key, value) to write, and .get(key) to retrieve. If the key doesn\'t exist, .get() returns null.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Exceptions Connection: Since lookups can fail, calling methods directly on a returned map value without checking if it is null can easily trigger a NullPointerException. Always check if the key exists using containsKey()!'
      }
    ],
    codeExamples: [
      {
        title: 'Implementing a Student GPA lookup Directory',
        language: 'java',
        code: `import java.util.HashMap;

public class HashMapBasics {
    public static void main(String[] args) {
        // Create a HashMap: Keys are student IDs (Integer), Values are Names (String)
        HashMap<Integer, String> studentRecords = new HashMap<>();
        
        // 1. Adding Key-Value pairs with put()
        studentRecords.put(101, "Alinafe");
        studentRecords.put(102, "Brie");
        studentRecords.put(103, "Chisomo");
        
        // 2. Overwriting a value by using an existing key!
        studentRecords.put(102, "Brianna"); // Overwrites "Brie" at key 102
        
        System.out.println("Directory: " + studentRecords);
        
        // 3. Retrieving a value with get()
        String student = studentRecords.get(101);
        System.out.println("Student with ID 101: " + student);
        
        // 4. Looking up keys
        int searchId = 105;
        if (studentRecords.containsKey(searchId)) {
            System.out.println("Found: " + studentRecords.get(searchId));
        } else {
            System.out.println("ID " + searchId + " does not exist in our directory.");
        }
        
        // 5. Removing pairs
        studentRecords.remove(103); // Removes Key 103 and its value
        System.out.println("After removal size is: " + studentRecords.size());
    }
}`,
        explanation: 'We declare a HashMap mapping Integers to Strings. Calling .put(102, "Brianna") replaces Brie. We use .get(101) to fetch, .containsKey() to check if ID 105 is valid, and .remove() to delete a record.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Collection Visual Lookup',
        description: 'How data layout differs across lists, sets, and maps.',
        elements: {
          headers: ['Collection Type', 'Underlying Memory Structure', 'How you find data'],
          rows: [
            ['List (ArrayList)', 'Contiguous indexed slots: [0: "Apple", 1: "Banana"]', 'Find by index number: list.get(0)'],
            ['Set (HashSet)', 'Unordered bag: {"Apple", "Banana"}', 'Check presence: set.contains("Apple")'],
            ['Map (HashMap)', 'Paired directory: {"A": "Apple", "B": "Banana"}', 'Find by Key value: map.get("A")']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming key lookups are case-insensitive.',
        whyItHappens: 'Using keys like "alice" and expecting .get("Alice") to retrieve the entry.',
        howToAvoid: 'Java keys are completely case-sensitive. "Alice" and "alice" are treated as two entirely separate, unique keys inside a HashMap.',
        codeSnippet: {
          bad: `HashMap<String, String> creds = new HashMap<>();
creds.put("admin", "secret123");
// ❌ Returns null! "Admin" has capital letter
String pw = creds.get("Admin"); `,
          good: `HashMap<String, String> creds = new HashMap<>();
creds.put("admin", "secret123");
// ✓ CORRECT: Match case exactly to get the value
String pw = creds.get("admin");`
        }
      }
    ],
    practiceExercise: {
      title: 'Item Inventory Tracker',
      tasks: [
        'Write a program that uses HashMap<String, Integer> to store item inventories (e.g., "Apple" -> 50, "Banana" -> 12).',
        'Retrieve and print the stock count of "Apple".',
        'Add code to check if "Orange" is in stock using containsKey(); if not, print "Not in stock".'
      ]
    },
    summary: [
      'HashMap stores data as associated Key-Value pairings.',
      'Keys are completely unique and case-sensitive; values can have duplicates.',
      'Accessing, updating, and inserting pairs takes near constant-time (O(1)) using hashing.'
    ]
  },

  'iterators': {
    slug: 'iterators',
    title: 'Iterators',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `We have learned how to use enhanced for loops to traverse our collections. However, what if we want to remove elements while looping? Doing this in a standard for-each loop throws a crash.

To address this, Java provides the **Iterator** interface. An Iterator is a specialized cursor object designed to safely traverse and modify collections during looping.`,
    whyThisTopicMatters: {
      whyItExists: `In a multiplayer game lobby, you might have an active list of connected players. If players do not send a ping within 60 seconds, they need to be disconnected and removed from the list. An Iterator lets you safely filter and remove players during active scanning.`,
      problemSolved: `Iterator resolves the ConcurrentModificationException crash by safely synchronizing element deletions while advancing the traversal cursor.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'An Iterator operates like a pointer sitting between elements, moving step-by-step through three core methods:'
      },
      {
        type: 'bullet_list',
        title: 'The Three Methods of Iterator',
        items: [
          'hasNext(): Returns true if there are more elements in the collection ahead of the cursor, and false otherwise.',
          'next(): Advances the cursor to the next element and returns its value.',
          'remove(): Safely deletes the last element returned by the next() method from the underlying collection.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Iterator Object',
          definition: 'An object that implements the Iterator interface, used to traverse any Collection.',
          explanation: 'It acts as an external cursor. You obtain one by calling "list.iterator()".'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'hasNext() check',
          definition: 'A boolean query method that validates if the iteration loop should continue.',
          explanation: 'It allows safe traversal without risking a NoSuchElementException.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Curriculum Connection: While Map doesn\'t have a direct iterator() method, you can iterate maps by converting them into Sets of keys using map.keySet().iterator()!'
      }
    ],
    codeExamples: [
      {
        title: 'Safely Filtering out Odd Numbers with an Iterator',
        language: 'java',
        code: `import java.util.ArrayList;
import java.util.Iterator;

public class IteratorDemo {
    public static void main(String[] args) {
        ArrayList<Integer> scores = new ArrayList<>();
        scores.add(85);
        scores.add(45);
        scores.add(95);
        scores.add(50);
        
        System.out.println("Original Scores: " + scores);
        
        // Obtain an Iterator for the scores list
        Iterator<Integer> scoreIterator = scores.iterator();
        
        // Loop while there are more elements
        while (scoreIterator.hasNext()) {
            // Get next element and advance cursor
            int score = scoreIterator.next(); 
            
            // Safe conditional removal: Filter out failing scores under 50
            if (score < 50) {
                scoreIterator.remove(); // Safely removes from scores list!
            }
        }
        
        System.out.println("Filtered Scores (>=50): " + scores);
    }
}`,
        explanation: 'We create an Iterator over integers. The while loop runs as long as .hasNext() is true. Inside, we call .next() to read the score. If score is under 50, we use scoreIterator.remove() to safely delete 45 without any exceptions.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Traversing & Modifying Comparison',
        description: 'How different looping techniques handle element modification.',
        elements: {
          headers: ['Traversal Method', 'Safe to READ?', 'Safe to ADD/REMOVE during loop?', 'Consequences of Add/Remove'],
          rows: [
            ['Enhanced For Loop', 'Yes', 'No', 'Throws ConcurrentModificationException instantly.'],
            ['Traditional For Loop', 'Yes', 'Yes (but dangerous)', 'Skipped elements or Index errors due to index shifting.'],
            ['Iterator Loop', 'Yes', 'Yes (Deletes safely)', 'Allows safe deletion via iterator.remove() without issues.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Calling iterator.next() multiple times inside a single loop iteration.',
        whyItHappens: 'Thinking .next() acts as a static read variable instead of an active pointer cursor that advances every time it is called.',
        howToAvoid: 'Only call .next() exactly once per loop. Store its return value in a temporary variable if you need to use or check it multiple times.',
        codeSnippet: {
          bad: `Iterator<String> it = names.iterator();
while (it.hasNext()) {
    // ❌ WRONG: Calling .next() twice advances the cursor twice!
    if (it.next().startsWith("A")) {
        System.out.println(it.next()); // Might skip names or throw NoSuchElementException!
    }
}`,
          good: `Iterator<String> it = names.iterator();
while (it.hasNext()) {
    // ✓ CORRECT: Store in a variable, then perform multiple checks!
    String current = it.next(); 
    if (current.startsWith("A")) {
        System.out.println(current);
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Active Filter Sandbox',
      tasks: [
        'Write a program that uses an Iterator to traverse an ArrayList of names: "Alex", "Bob", "Alice".',
        'Delete any name that starts with the letter "A".',
        'Print the final list of names.'
      ]
    },
    summary: [
      'An Iterator provides a specialized, safe cursor to scan and modify elements within collections.',
      'The hasNext() checks for elements, next() reads and advances, and remove() deletes elements safely.',
      'Using an Iterator prevents the classic ConcurrentModificationException error.'
    ]
  },

  'collections-with-objects': {
    slug: 'collections-with-objects',
    title: 'Collections with Objects',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `Java Collections are fully object-oriented. This means we are not restricted to storing primitive wrappers like Strings and Integers; we can store custom objects that we define ourselves.

In this lesson, we will combine Object-Oriented Programming (OOP) with Collections by defining a custom Class and managing its instantiated objects within a dynamic ArrayList.`,
    whyThisTopicMatters: {
      whyItExists: `In real applications, you do not just store plain names. You store comprehensive profiles: a Student has a Name, ID, GPA, and Enrollment status. A product has a Barcode, Price, and Stock amount. Collections let you manage these compound objects as single entities.`,
      problemSolved: `Storing custom objects inside collections allows you to build highly organized relational catalogs, enabling complex sorting and querying across object fields.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Combining OOP with collections relies on standard class instantiations:'
      },
      {
        type: 'bullet_list',
        title: 'Building Lists of Objects',
        items: [
          'Define the Blueprint: Create a standard class with fields, constructor, and getter methods.',
          'Declare the Collection: Use the class name as the generic type parameter: "ArrayList<Student>"',
          'Add Instances: Create new instances of your class and add them directly into the list: "students.add(new Student(\"Alice\"))"'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Object Collections',
          definition: 'A collection that stores memory references pointing to instances of custom classes on the Heap.',
          explanation: 'In "ArrayList<Student> list", each element is a pointer to an actual Student object.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'toString() Override',
          definition: 'An OOP method override that returns a custom String description of an object.',
          explanation: 'If you do not override toString() in your custom class, printing your collection outputs cryptic memory addresses like "Student@4512fd".'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Curriculum Connection: Because collections store references, modifying an object retrieved from a list (e.g., list.get(0).setName("Bob")) modifies the actual object stored on the Heap!'
      }
    ],
    codeExamples: [
      {
        title: 'Managing custom Student Profiles in a List',
        language: 'java',
        code: `import java.util.ArrayList;

class Student {
    private String name;
    private int id;
    private double gpa;
    
    public Student(String name, int id, double gpa) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
    }
    
    public String getName() { return name; }
    public double getGpa() { return gpa; }
    
    @Override
    public String toString() {
        return "Student[ID: " + id + ", Name: " + name + ", GPA: " + gpa + "]";
    }
}

public class StudentListDemo {
    public static void main(String[] args) {
        // Create an ArrayList of custom Student objects
        ArrayList<Student> directory = new ArrayList<>();
        
        // Add student objects directly
        directory.add(new Student("Alinafe", 101, 3.8));
        directory.add(new Student("Brie", 102, 3.4));
        directory.add(new Student("Chisomo", 103, 3.9));
        
        System.out.println("--- Student Directory ---");
        // Loop through and use getter methods
        for (Student s : directory) {
            System.out.println(s); // Uses toString() automatically
        }
        
        System.out.println("\\n--- Honor Roll Students (GPA >= 3.5) ---");
        for (Student s : directory) {
            if (s.getGpa() >= 3.5) {
                System.out.println(s.getName() + " with GPA " + s.getGpa());
            }
        }
    }
}`,
        explanation: 'We declare a Student class with an overridden toString(). We define an ArrayList of type Student, add instances, and iterate over them using getter methods like s.getGpa() to implement filtering logic.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Primitives vs. Object Collections',
        description: 'Differentiating basic and compound collection contents.',
        elements: {
          headers: ['Property', 'ArrayList<Integer>', 'ArrayList<Student>'],
          rows: [
            ['Generic Element', 'Integer (primitive wrapper)', 'Student (custom class blueprint)'],
            ['Retrieval type', 'int / Integer value', 'Student object reference'],
            ['Direct print output', 'Numeric list (e.g., [1, 2, 3])', 'Relies on Student\'s toString() method override'],
            ['Field queries?', 'No (plain values only)', 'Yes (can call s.getName() or s.getGpa())'],
            ['Heap layout', 'Array of wrapper addresses', 'Array of references to custom class blocks']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to override the toString() method in custom classes.',
        whyItHappens: 'Printing the collection or elements, and seeing hard-to-read object references like "Student@56731a" instead of names and values.',
        howToAvoid: 'Always declare @Override public String toString() in your custom classes to output clean, readable diagnostic descriptions.',
        codeSnippet: {
          bad: `class Product {
    private String name;
    public Product(String n) { name = n; }
    // ❌ toString() is not overridden!
}
// Printing prints "Product@7a8120"`,
          good: `class Product {
    private String name;
    public Product(String n) { name = n; }
    
    @Override
    public String toString() {
        // ✓ CORRECT: Return custom descriptions!
        return "Product: " + name; 
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'OOP List Catalog',
      tasks: [
        'Create a class "Book" with fields: String title, String author, and double price.',
        'Implement an ArrayList of Book objects named "library" and add two book instances.',
        'Use an enhanced for loop to display each book\'s title alongside its price.'
      ]
    },
    summary: [
      'Collections can hold references to custom-defined Class objects instead of plain Strings or Integer wrappers.',
      'Overriding the toString() method in custom classes is required to display human-readable collection outputs.',
      'Iterating through object lists allows you to access and filter elements based on custom object fields.'
    ]
  },

  'collections-mini-project': {
    slug: 'collections-mini-project',
    title: 'Collections Mini Project',
    moduleSlug: 'collections',
    moduleName: 'Collections',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `Now that you understand Lists, looping, and custom objects, let's put everything together!

In this lesson, you will build a complete **Student Management System**. This system will model a real application where users can add, display, search, and delete Student records dynamically, using advanced loops and exception handling to stay robust.`,
    whyThisTopicMatters: {
      whyItExists: `Professional applications never run in isolation. A school administration app requires integrating user menus, class definitions, array-lists, filters, and safety validation gates to prevent bad data entries or crashes.`,
      problemSolved: `This mini-project combines variables, classes, methods, loops, ArrayLists, and exception handling into a complete, unified console-like simulator.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Our Student Management System requires a logical split of concerns:'
      },
      {
        type: 'bullet_list',
        title: 'Project Architectural Components',
        items: [
          'The Student Class: Models the profile, storing ID, Name, and GPA fields with custom overrides.',
          'The Manager Class: Handles the ArrayList collection of students, containing methods to add, remove, search, and print.',
          'The Guard Gates: Employs try-catch blocks to catch invalid inputs, such as negative GPAs or invalid ID lookups.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Student Management System',
          definition: 'A practical prototype application that demonstrates dynamic CRUD (Create, Read, Update, Delete) operations over collections.',
          explanation: 'It utilizes an ArrayList to handle the storage of student objects.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Defensive Verification',
          definition: 'Writing validation gates that throw exceptions early to prevent bad data from polluting a collection.',
          explanation: 'Checking "gpa < 0.0 || gpa > 4.0" and throwing an IllegalArgumentException before adding a student.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Curriculum Connection: Notice how we use exceptions to keep our collections clean! If bad inputs are caught, the list additions are bypassed, maintaining state safety.'
      }
    ],
    codeExamples: [
      {
        title: 'A Complete Student Management System in Java',
        language: 'java',
        code: `import java.util.ArrayList;
import java.util.Iterator;

// 1. Define the Student object model
class StudentProfile {
    private int id;
    private String name;
    private double gpa;
    
    public StudentProfile(int id, String name, double gpa) {
        if (gpa < 0.0 || gpa > 4.0) {
            throw new IllegalArgumentException("Invalid GPA! Must be between 0.0 and 4.0");
        }
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
    
    public int getId() { return id; }
    public String getName() { return name; }
    public double getGpa() { return gpa; }
    
    @Override
    public String toString() {
        return "ID: " + id + " | Name: " + name + " | GPA: " + gpa;
    }
}

// 2. Define the manager class encapsulating the collection
class StudentManager {
    private ArrayList<StudentProfile> students = new ArrayList<>();
    
    // Add student with validation guards
    public void addStudent(StudentProfile student) {
        // Prevent duplicate IDs
        for (StudentProfile s : students) {
            if (s.getId() == student.getId()) {
                throw new IllegalArgumentException("Student with ID " + student.getId() + " already exists!");
            }
        }
        students.add(student);
        System.out.println("Successfully added: " + student.getName());
    }
    
    // Search student by ID
    public StudentProfile searchById(int id) {
        for (StudentProfile s : students) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null; // Not found
    }
    
    // Remove student using safe Iterator
    public boolean removeById(int id) {
        Iterator<StudentProfile> it = students.iterator();
        while (it.hasNext()) {
            StudentProfile s = it.next();
            if (s.getId() == id) {
                it.remove(); // Safe removal!
                System.out.println("Removed student with ID: " + id);
                return true;
            }
        }
        return false;
    }
    
    // Display all profiles
    public void displayAll() {
        if (students.isEmpty()) {
            System.out.println("No students registered.");
            return;
        }
        System.out.println("--- Register ---");
        for (StudentProfile s : students) {
            System.out.println(s);
        }
    }
}

// 3. Main execution demonstrating standard actions
public class ManagementApp {
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        
        System.out.println("=== Starting SMS Application ===\\n");
        
        // Populate profiles safely
        try {
            manager.addStudent(new StudentProfile(1, "Alinafe", 3.8));
            manager.addStudent(new StudentProfile(2, "Brie", 3.5));
            manager.addStudent(new StudentProfile(3, "Chisomo", 3.9));
        } catch (IllegalArgumentException e) {
            System.out.println("Setup Error: " + e.getMessage());
        }
        
        System.out.println("\\nDisplaying all records:");
        manager.displayAll();
        
        // Test 1: Exception Guard in Action (Negative GPA)
        System.out.println("\\nTrying to add invalid GPA:");
        try {
            manager.addStudent(new StudentProfile(4, "Bad GPA Student", -1.5));
        } catch (IllegalArgumentException e) {
            System.out.println("Caught Expected Error: " + e.getMessage());
        }
        
        // Test 2: Search ID
        System.out.println("\\nSearching for ID 2:");
        StudentProfile found = manager.searchById(2);
        if (found != null) {
            System.out.println("Found student: " + found.getName());
        } else {
            System.out.println("Student not found.");
        }
        
        // Test 3: Safe Deletion
        System.out.println("\\nRemoving Student with ID 2:");
        manager.removeById(2);
        
        System.out.println("\\nDisplaying remaining records:");
        manager.displayAll();
    }
}`,
        explanation: 'The code models a real application. StudentProfile enforces a 0.0 - 4.0 GPA range inside its constructor using exceptions. StudentManager exposes helper methods, iterating safely through lists. The main method exercises these routines under try-catch safety screens.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'SMS System Processing Loops',
        description: 'Tracking how addition and deletion logic behaves safely.',
        elements: {
          steps: [
            { id: '1', type: 'start', label: 'Call addStudent()', desc: 'Main instigates addition of a profile.' },
            { id: '2', type: 'process', label: 'Verify constraints', desc: 'GPAs and uniqueness checks are verified.' },
            { id: '3', type: 'process', label: 'Collection modified', desc: 'If checks pass, student reference is appended to the ArrayList.' },
            { id: '4', type: 'process', label: 'Call removeById()', desc: 'Deletion requests are verified by ID.' },
            { id: '5', type: 'end', label: 'Safe iterator sweep', desc: 'An Iterator searches and safely calls remove() when matched.' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using a basic for-each loop to remove elements inside StudentManager.',
        whyItHappens: 'Writing "for (StudentProfile s : students) { if (s.getId() == id) students.remove(s); }" because it seems simpler.',
        howToAvoid: 'Use an explicit Iterator (as shown in StudentManager.removeById()) when removing items based on a dynamic search. It prevents ConcurrentModificationException bugs.',
        codeSnippet: {
          bad: `public void removeById(int id) {
    // ❌ DANGEROUS: Throws exception if more items exist!
    for (StudentProfile s : students) {
        if (s.getId() == id) {
            students.remove(s); 
        }
    }
}`,
          good: `public void removeById(int id) {
    // ✓ CORRECT: Use Iterator to safely remove during loop
    Iterator<StudentProfile> it = students.iterator();
    while (it.hasNext()) {
        if (it.next().getId() == id) {
            it.remove();
        }
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Upgrade the System',
      tasks: [
        'Add a new field String "major" to the StudentProfile class (e.g., "Computer Science"). Update constructor and toString().',
        'Add a method "public void displayHonorRoll()" inside StudentManager that displays only students with a GPA >= 3.6.',
        'Implement validation in StudentProfile to reject blank names and verify that the print results show the new layout.'
      ]
    },
    summary: [
      'The Student Management System aggregates OOP patterns (blueprints, getters, overrides) with dynamic ArrayList storage.',
      'Validation gates inside class constructors shield collections from getting corrupted by invalid data.',
      'Explicit Iterators must be used to execute safe item deletions when scanning through listings.'
    ]
  }
};
