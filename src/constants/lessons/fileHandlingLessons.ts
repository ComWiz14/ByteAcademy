import { DetailedLessonContent } from '../../types';

export const FILE_HANDLING_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-file-handling': {
    slug: 'introduction-to-file-handling',
    title: 'Introduction to File Handling',
    moduleSlug: 'file-handling',
    moduleName: 'File Handling',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    introduction: `Up until now, all the information our programs managed lived inside variables, arrays, and collections. However, there is a major catch: this information only exists while our program is active. Once the program closes, or the computer is turned off, every single variable is erased.

To build software that is actually useful—like a game that saves your progress, or an app that remembers your login details—we must store information permanently. This is where **File Handling** comes in.`,
    whyThisTopicMatters: {
      whyItExists: `Without file handling, every application would start from scratch every single time you open it. Imagine having to recreate your Spotify playlist, type in your user preferences, or re-level your gaming character every day because the program couldn't save anything to your hard drive!`,
      problemSolved: `File handling bridges the gap between active runtime memory (RAM) and long-term physical storage (Hard Drives/SSDs), allowing your software's state and data to survive program restarts.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand how computers manage data, we must look at the difference between two kinds of memory:'
      },
      {
        type: 'bullet_list',
        title: 'Memory vs. Permanent Storage',
        items: [
          'RAM (Random Access Memory): Extremely fast, temporary workspace where Java stores active variables and objects. RAM is "volatile," meaning it completely empties when the program exits or power cuts out.',
          'Persistent Storage (SSD/HDD): Slower but permanent disk storage. Information is written in the form of Files (text files, images, database tables) which remain intact forever unless explicitly deleted.'
        ]
      },
      {
        type: 'paragraph',
        text: 'In Java, we interact with physical files using the concept of **Streams**. A stream is a unidirectional pipe through which data flows byte-by-byte or character-by-character.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Data Stream',
          definition: 'A continuous flow of data elements from a source (like a file) to a destination (like your program).',
          explanation: 'Think of it as a water pipe. You can turn on the tap to let data flow in (Input Stream) or pump water out to a tank (Output Stream).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Checked Exception',
          definition: 'An exception that Java forces you to handle at compile-time before it allows your code to run.',
          explanation: 'Because external files might be missing, locked, or corrupt, Java requires file code to be protected with try-catch blocks.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Learning Connection: Earlier, we used Scanner(System.in) to read inputs from the keyboard. System.in is actually an Input Stream! File handling simply swaps the source from your keyboard to a physical text document on your drive.'
      }
    ],
    codeExamples: [
      {
        title: 'Conceptual Stream Flow in Java',
        language: 'java',
        code: `// This is a conceptual view of how data flows in Java File Handling
// No actual physical files are read yet, but it illustrates the pipeline:

// 1. INPUT STREAM (Reading)
// [Physical File on Disk: "scores.txt"] ====> (FileReader Stream) ====> [Your Program Variables]

// 2. OUTPUT STREAM (Writing)
// [Your Program Variables] ====> (FileWriter Stream) ====> [Physical File on Disk: "scores.txt"]`,
        explanation: 'Data is processed sequentially. For reading, data flows from the disk file through an input character stream into active RAM variables. For writing, variables in RAM flow through an output character stream back onto the disk sector.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'RAM vs. Storage',
        description: 'Comparing how your computer treats active runtime variables vs. disk files.',
        elements: {
          headers: ['Feature', 'RAM (Variables & Collections)', 'Storage (Hard Drive Files)'],
          rows: [
            ['Durability', 'Volatile (erased on shutdown)', 'Persistent (saved permanently)'],
            ['Access Speed', 'Ultra-fast (nanoseconds)', 'Slower (microseconds/milliseconds)'],
            ['Java Representation', 'Variables, Objects, Lists, Arrays', 'Files, Folders, Databases'],
            ['Capacity', 'Limited (e.g., 8GB - 32GB)', 'Abundant (e.g., 512GB - 2TB)'],
            ['Interaction Style', 'Direct CPU read/write', 'Must use Input/Output (I/O) Streams']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming file-handling code will always execute without error.',
        whyItHappens: 'Writing basic file code and forgetting that the file system is an external resource outside of Java\'s control.',
        howToAvoid: 'Expect things to fail. Always assume a file might be missing or permission denied, and wrap file-related code in try-catch guards.',
        codeSnippet: {
          bad: `// ❌ Will fail to compile! Unhandled exception type IOException
public void writeData() {
    FileWriter writer = new FileWriter("data.txt");
    writer.write("Hello");
}`,
          good: `// ✓ CORRECT: Wrapped inside exception handler blocks!
import java.io.FileWriter;
import java.io.IOException;

public void writeData() {
    try {
        FileWriter writer = new FileWriter("data.txt");
        writer.write("Hello");
        writer.close();
    } catch (IOException e) {
        System.out.println("Could not write to file: " + e.getMessage());
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Storage Strategy Brainstorming',
      tasks: [
        'Write down three different types of data that a professional application must save permanently (e.g., high scores in a game).',
        'Explain why a standard Java ArrayList is insufficient on its own for saving user accounts in a messaging app.',
        'Describe in your own words how an Input Stream differs from an Output Stream.'
      ]
    },
    summary: [
      'Variables and collections store temporary data in volatile RAM that empties when programs close.',
      'File handling allows information to survive permanently by writing it into storage drives.',
      'Java uses unidirectional "Streams" to read (input) and write (output) character or binary data.'
    ]
  },

  'working-with-files-in-java': {
    slug: 'working-with-files-in-java',
    title: 'Working with Files in Java',
    moduleSlug: 'file-handling',
    moduleName: 'File Handling',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Before we can read or write text, our program must be able to locate, inspect, and manage files on our hard drive.

Java provides a class called **File** (located inside the \`java.io\` package) that represents a file or directory path. With this class, you can check if a file exists, query its details, create a blank file, or delete it entirely.`,
    whyThisTopicMatters: {
      whyItExists: `Before you try to open and read a document, you must verify that the document is actually where you think it is. If your program blindly tries to read a missing file, it will crash.`,
      problemSolved: `The File class provides safe querying and management of file metadata without having to read or modify the contents inside the file.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The most important thing to remember is: **Constructing a File object does NOT create a physical file on your disk!**'
      },
      {
        type: 'paragraph',
        text: 'Let\'s look at how we instantiate and use the File class step-by-step:'
      },
      {
        type: 'bullet_list',
        title: 'Core Steps of the File Class',
        items: [
          'Instantiation: File fileRef = new File("data.txt"); - This creates a virtual reference to a path named "data.txt" in your project folder.',
          'Checking Existence: fileRef.exists() - Returns true if the physical file actually exists on the drive, false otherwise.',
          'Physical Creation: fileRef.createNewFile() - If the file does not exist, this method creates a brand new, empty text file on your drive and returns true.',
          'Metadata Inspection: We can query the file\'s size in bytes using .length(), or get its absolute system path using .getAbsolutePath().'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'java.io.File',
          definition: 'An abstract representation of file and directory pathnames.',
          explanation: 'It does not open file contents; it only inspects and manipulates the outer metadata (e.g., file existence, file size, permissions).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'createNewFile()',
          definition: 'A File method that atomically creates a new, empty file named by this abstract pathname if it does not yet exist.',
          explanation: 'This method is checked, meaning it can throw an IOException, requiring try-catch wrapper logic.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Path Types: If you write File("data.txt"), Java looks for the file in the project\'s root directory (Relative Path). If you write File("C:/Users/Admin/data.txt"), it looks for the absolute location on your drive (Absolute Path). Always prefer Relative Paths to ensure your code works on other computers!'
      }
    ],
    codeExamples: [
      {
        title: 'Inspecting and Creating Files Programmatically',
        language: 'java',
        code: `import java.io.File;
import java.io.IOException;

public class WorkingWithFiles {
    public static void main(String[] args) {
        // 1. Create a virtual reference to "report.txt"
        File file = new File("report.txt");
        
        System.out.println("File Name: " + file.getName());
        
        // 2. Check if the file already exists on the computer
        if (file.exists()) {
            System.out.println("Status: File already exists!");
            System.out.println("Absolute Path: " + file.getAbsolutePath());
            System.out.println("Size in Bytes: " + file.length());
        } else {
            System.out.println("Status: File does not exist. Creating a new one...");
            try {
                // 3. Physically write a blank file to the disk
                boolean isCreated = file.createNewFile();
                if (isCreated) {
                    System.out.println("Success: Blank file created successfully!");
                }
            } catch (IOException e) {
                System.out.println("An error occurred during creation: " + e.getMessage());
            }
        }
    }
}`,
        explanation: 'We declare a File object for "report.txt". If it is already there, we print its path and size. If not, we attempt to physically create the blank file on the drive using createNewFile() wrapped in a try-catch block.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Core File Class Methods',
        description: 'Your control panel for inspecting file metadata.',
        elements: {
          headers: ['Method', 'Return Type', 'Purpose'],
          rows: [
            ['exists()', 'boolean', 'Checks if the physical file actually exists.'],
            ['createNewFile()', 'boolean', 'Physically writes a new empty file. Throws IOException.'],
            ['delete()', 'boolean', 'Permanently deletes the physical file from your drive.'],
            ['length()', 'long', 'Returns the size of the file measured in bytes.'],
            ['getName()', 'String', 'Returns the simple name of the file (e.g., "report.txt").'],
            ['getAbsolutePath()', 'String', 'Returns the entire system path from root to file (e.g., "C:/Users/...").'],
            ['isFile() / isDirectory()', 'boolean', 'Verifies if the path is a file or a folder directory.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming "new File("info.txt")" creates the file on the drive.',
        whyItHappens: 'Forgetting that creating a Java Object in RAM is separate from writing blocks on physical storage hardware.',
        howToAvoid: 'Remember: "new File()" only creates a pointer in your Java program. You must call "createNewFile()" or use a Writer stream to physically write the file to your disk.',
        codeSnippet: {
          bad: `// ❌ Creates a Java Object pointer, but "missing.txt" remains non-existent on your drive!
File file = new File("missing.txt");
System.out.println("Created: " + file.exists()); // Prints false`,
          good: `// ✓ CORRECT: Call createNewFile() to commit the file to disk!
File file = new File("missing.txt");
try {
    if (!file.exists()) {
        file.createNewFile(); // Physically creates the empty file!
    }
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}`
        }
      }
    ],
    practiceExercise: {
      title: 'File Manager Experiment',
      tasks: [
        'Write a complete Java program that creates a File object pointing to "notes.txt".',
        'Add logic that checks if "notes.txt" exists. If it exists, print its size and then delete it using the .delete() method.',
        'If it does not exist, create it programmatically.'
      ]
    },
    summary: [
      'The java.io.File class represents file pathways and directory metadata, not file contents.',
      'Creating a File object only creates a reference in memory; createNewFile() commits the empty file to disk.',
      'Key methods allow you to verify file existence, query sizes, find path directories, and delete files.'
    ]
  },

  'reading-data-from-files': {
    slug: 'reading-data-from-files',
    title: 'Reading Data From Files',
    moduleSlug: 'file-handling',
    moduleName: 'File Handling',
    estimatedTime: '12 mins',
    difficulty: 'Intermediate',
    introduction: `Once we know a file exists, we can open a channel to read its contents. In Java, reading text files is done by passing characters from the disk file into active program variables.

To make reading efficient, we combine a low-level stream like **FileReader** with a high-level helper class called **BufferedReader** which reads whole lines of text at a time.`,
    whyThisTopicMatters: {
      whyItExists: `Reading files character-by-character from physical disks is extremely slow, as it requires physical disc rotations or constant flash memory queries.`,
      problemSolved: `BufferedReader solves this by pre-loading huge chunks of text into a memory "buffer" (RAM). When you request the next line of text, it pulls it instantly from RAM instead of querying the slow disk drive.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To read a file, we create a nested stream pipeline. Here is how data flows:'
      },
      {
        type: 'bullet_list',
        title: 'The File Reading Pipeline',
        items: [
          'Disk File ("data.txt"): Stores the raw characters on the hard drive.',
          'FileReader: A low-level stream that connects directly to the file, reading individual characters sequentially.',
          'BufferedReader: Wraps around the FileReader. It pre-fetches blocks of characters and stores them in RAM, allowing you to use the super-convenient "readLine()" method.',
          'Your Program: Receives full lines of strings and stores them in lists or variables.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'FileReader',
          definition: 'A connection class that reads streams of characters from a text file.',
          explanation: 'It parses bytes from the disk and decodes them into Java char data types.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'BufferedReader',
          definition: 'A buffer stream reader that reads text from a character-input stream, buffering characters to provide efficient reading.',
          explanation: 'It provides the .readLine() method, which returns a full line of text as a String, or "null" when the end of the file is reached.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Resource Leak: Always close your readers! Leaving file streams open locks the file, preventing other apps from writing to it and leaking system resources in memory.'
      }
    ],
    codeExamples: [
      {
        title: 'Reading a Text File Line-by-Line Safely',
        language: 'java',
        code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadingDemo {
    public static void main(String[] args) {
        String filepath = "students.txt";
        
        // Try-with-resources: Automatically closes readers when finished!
        try (BufferedReader reader = new BufferedReader(new FileReader(filepath))) {
            String line;
            System.out.println("Reading Student Records from disk:");
            
            // Loop line by line until there are no more lines left (null)
            while ((line = reader.readLine()) != null) {
                System.out.println("Record: " + line);
            }
            
        } catch (IOException e) {
            System.out.println("Could not read file " + filepath + ". Error: " + e.getMessage());
        }
    }
}`,
        explanation: 'We open "students.txt" using a BufferedReader nested with a FileReader inside a modern try-with-resources block. The while loop runs, calling readLine() to retrieve strings. When it reaches the end of the document, readLine() returns null, stopping the loop.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'FileReader vs. BufferedReader',
        description: 'Analyzing the two components of the file reading pipeline.',
        elements: {
          headers: ['Property', 'FileReader', 'BufferedReader'],
          rows: [
            ['Role', 'Low-level stream connector', 'High-level memory buffer'],
            ['Read Style', 'Reads 1 character at a time', 'Reads full blocks and lines at a time'],
            ['Core Method', 'read() (returns char int value)', 'readLine() (returns full String)'],
            ['Performance', 'Slow (constant hardware queries)', 'Extremely fast (uses RAM buffers)'],
            ['Independence', 'Can be used alone (tedious)', 'Must wrap around another Reader stream']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to close the BufferedReader, leading to locked file errors.',
        whyItHappens: 'A developer opens files, reads the text, and exits without releasing the system stream hooks.',
        howToAvoid: 'Use modern Java "Try-With-Resources". Declare the reader variable inside the try parentheses "try (BufferedReader r = ...)" so Java closes it automatically even if the code crashes.',
        codeSnippet: {
          bad: `// ❌ Dangerous: If an error occurs, the reader is never closed, locking the file!
BufferedReader reader = new BufferedReader(new FileReader("data.txt"));
System.out.println(reader.readLine());
reader.close(); // Might never be reached!`,
          good: `// ✓ CORRECT: Try-with-resources guarantees file closure!
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(reader.readLine());
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Line Counter Challenge',
      tasks: [
        'Write a program that opens a file named "grades.txt".',
        'Read every line of the file and keep a counter of how many total lines exist.',
        'Print the final line count inside your console (handle IOException in case grades.txt is missing).'
      ]
    },
    summary: [
      'FileReader connects directly to disk files to stream individual character data.',
      'BufferedReader buffers these streams, providing the highly efficient readLine() method.',
      'Try-with-resources syntax automatically closes file readers, preventing locked resource leaks.'
    ]
  },

  'writing-data-into-files': {
    slug: 'writing-data-into-files',
    title: 'Writing Data Into Files',
    moduleSlug: 'file-handling',
    moduleName: 'File Handling',
    estimatedTime: '12 mins',
    difficulty: 'Intermediate',
    introduction: `To save our variables, strings, and student details permanently, we must write them out to physical files.

Just like reading, writing is most efficient when we combine a low-level stream like **FileWriter** with a high-level helper buffer called **BufferedWriter**. This combination lets us write full lines of text to our drive in a single command.`,
    whyThisTopicMatters: {
      whyItExists: `Imagine running a school register app. At the end of the day, you want to compile and save your list of registered student objects into a text document so you can load them back tomorrow.`,
      problemSolved: `BufferedWriter and FileWriter manage character stream encoding, allowing you to write formatted String variables directly to disk storage.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When writing files in Java, you have two primary options for handling existing files:'
      },
      {
        type: 'bullet_list',
        title: 'Overwrite vs. Append Modes',
        items: [
          'Overwrite Mode (Default): FileWriter writer = new FileWriter("data.txt"); - If "data.txt" already exists, its old contents are completely erased and replaced with the new data.',
          'Append Mode: FileWriter writer = new FileWriter("data.txt", true); - By passing a second parameter "true", Java leaves existing content intact and appends any new writes directly to the end of the file.'
        ]
      },
      {
        type: 'paragraph',
        text: 'The nesting structure of writing streams mirrors reading:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'FileWriter',
          definition: 'A connection class that writes character streams to text files.',
          explanation: 'It opens a connection, translating Java characters into binary codes on your disk.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'BufferedWriter',
          definition: 'A buffer stream writer that holds output characters in RAM, writing them in larger batches to speed up performance.',
          explanation: 'Provides methods like .write(String) and .newLine() to print formatted lines easily.'
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Flushing data: BufferedWriter writes to RAM first. If your program crashes before the stream is closed, your text might stay trapped in the RAM buffer and never get written to disk! Closing the stream automatically flushes (writes) all buffered data to the physical file.'
      }
    ],
    codeExamples: [
      {
        title: 'Saving Student Profiles to disk',
        language: 'java',
        code: `import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileWritingDemo {
    public static void main(String[] args) {
        String filepath = "students.txt";
        
        // Pass "true" to append to the end of the file instead of overwriting!
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filepath, true))) {
            // Write student records
            writer.write("Alinafe,95.5");
            writer.newLine(); // Inserts a platform-specific newline character
            
            writer.write("Brie,88.2");
            writer.newLine();
            
            System.out.println("Student profiles saved successfully to " + filepath);
            
        } catch (IOException e) {
            System.out.println("An error occurred during save: " + e.getMessage());
        }
    }
}`,
        explanation: 'We open a BufferedWriter wrapping a FileWriter configured with append-mode (true). We call write() to print name/gpa values, followed by newLine() to push the cursor down. The try-with-resources closes the stream and flushes the data onto the disk.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'FileWriter Constructors',
        description: 'How to control writing behaviors in your application.',
        elements: {
          headers: ['Constructor Syntax', 'Existing File Action', 'Best Use Case'],
          rows: [
            ['new FileWriter("log.txt")', 'Wipes and overwrites everything.', 'Overwriting a document or saving a fresh session state.'],
            ['new FileWriter("log.txt", true)', 'Leaves old text; appends to the end.', 'Writing system logs or adding new entries to an ongoing list.'],
            ['new FileWriter("log.txt", false)', 'Wipes and overwrites everything.', 'Explicitly confirming you want to start fresh.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Writing text using .write() and forgetting to add newlines.',
        whyItHappens: 'Forgetting that .write() does not act like System.out.println(), it keeps writing text on the exact same line.',
        howToAvoid: 'Always call .newLine() after writing a record to ensure consecutive entries appear on separate lines.',
        codeSnippet: {
          bad: `// ❌ Results in: "AliceBob" on a single clumped line!
writer.write("Alice");
writer.write("Bob");`,
          good: `// ✓ CORRECT: Prints each on separate readable lines!
writer.write("Alice");
writer.newLine();
writer.write("Bob");
writer.newLine();`
        }
      }
    ],
    practiceExercise: {
      title: 'Logger Persister Sandbox',
      tasks: [
        'Write a program that uses Scanner to read a line of text input from the user.',
        'Append the user\'s text into a file named "user_log.txt" using append mode.',
        'Add a newline after the entry and print: "Log saved!"'
      ]
    },
    summary: [
      'FileWriter writes character bytes to files; passing true enables append mode.',
      'BufferedWriter optimizes write cycles, queuing letters in RAM until flushed or closed.',
      'The newLine() method prints system-specific newlines, separating data records cleanly.'
    ]
  },

  'handling-file-exceptions': {
    slug: 'handling-file-exceptions',
    title: 'Handling File Exceptions',
    moduleSlug: 'file-handling',
    moduleName: 'File Handling',
    estimatedTime: '10 mins',
    difficulty: 'Intermediate',
    introduction: `File handling is highly unpredictable. A user might delete a file while your program is reading it, write to a read-only folder, or supply an invalid path.

Because of this, Java enforces compile-time **Checked Exceptions** for all file I/O operations. In this lesson, we will learn how to handle file system errors gracefully to prevent our applications from crashing.`,
    whyThisTopicMatters: {
      whyItExists: `If an application cannot find a configuration file, crashing on the spot is a terrible user experience. It is far better to catch the error, inform the user, and fall back to safe default settings.`,
      problemSolved: `Exception handling shields your program, turning fatal file system crashes into recoverable error alerts.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When working with files, you will primarily encounter two types of checked exceptions from the java.io package:'
      },
      {
        type: 'bullet_list',
        title: 'Core File Handling Exceptions',
        items: [
          'FileNotFoundException: Thrown when you attempt to open a file for reading that does not exist at the specified path directory.',
          'IOException: The parent class of FileNotFoundException. It represents general input/output failures, such as disk full errors, permission denials, or broken stream connections.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Since FileNotFoundException is a subclass of IOException, order matters inside your catch blocks!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'FileNotFoundException',
          definition: 'Signals that an attempt to open the file denoted by a specified pathname has failed.',
          explanation: 'Usually triggered by relative path typos, or trying to read a file that has not been created yet.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Multi-Catch Structure',
          definition: 'Writing multiple catch blocks to handle specific exceptions differently before catching general ones.',
          explanation: 'Put specific catch blocks (like FileNotFoundException) at the top, and general ones (like IOException) below them.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'Checked Mandates: Checked exceptions cannot be ignored. If you try to run FileWriter code without a try-catch block or a "throws" declaration, Java will refuse to compile your software.'
      }
    ],
    codeExamples: [
      {
        title: 'Handling Multiple File Exceptions Gracefully',
        language: 'java',
        code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileNotFoundException;
import java.io.IOException;

public class GracefulFileHandler {
    public static void main(String[] args) {
        String filepath = "missing_configs.txt";
        
        try (BufferedReader reader = new BufferedReader(new FileReader(filepath))) {
            System.out.println("First line: " + reader.readLine());
            
        } catch (FileNotFoundException e) {
            // 1. Catches specifically missing files
            System.out.println("Error: The file '" + filepath + "' was not found!");
            System.out.println("Action: Loading safe application default settings instead...");
            
        } catch (IOException e) {
            // 2. Catches other general IO problems (e.g., locked file, drive offline)
            System.out.println("Error: General system I/O failure: " + e.getMessage());
        }
    }
}`,
        explanation: 'The code attempts to read "missing_configs.txt". Since it does not exist, Java skips the try block and jumps directly to the first matching catch block: FileNotFoundException. We handle it by printing a customized error message instead of letting the JVM crash the app.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Checked vs. Unchecked Exception Layout',
        description: 'Where file handling exceptions sit compared to standard math/runtime errors.',
        elements: {
          headers: ['Exception Class', 'Type', 'Triggered By', 'Java Rule'],
          rows: [
            ['ArithmeticException', 'Unchecked (Runtime)', 'Division by zero inside calculations.', 'Optional try-catch.'],
            ['NullPointerException', 'Unchecked (Runtime)', 'Calling methods on a null variable.', 'Optional try-catch.'],
            ['FileNotFoundException', 'Checked (Compile-time)', 'Trying to read a file that isn\'t on disk.', 'MANDATORY try-catch or throws.'],
            ['IOException', 'Checked (Compile-time)', 'General hardware or network stream failures.', 'MANDATORY try-catch or throws.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Placing the general IOException catch block above FileNotFoundException.',
        whyItHappens: 'Forgetting that Java evaluates catch blocks in order, from top to bottom.',
        howToAvoid: 'Always place subclass exceptions (specific) before parent exceptions (general) to prevent compiling errors.',
        codeSnippet: {
          bad: `// ❌ Will fail to compile! FileNotFoundException has already been caught by IOException!
try (FileReader fr = new FileReader("test.txt")) {
} catch (IOException e) {
    System.out.println("IO Error");
} catch (FileNotFoundException e) {
    System.out.println("File missing");
}`,
          good: `// ✓ CORRECT: Specific exception is placed at the top!
try (FileReader fr = new FileReader("test.txt")) {
} catch (FileNotFoundException e) {
    System.out.println("File missing");
} catch (IOException e) {
    System.out.println("IO Error");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Protected Reader Practice',
      tasks: [
        'Write a program that attempts to open a file named "protected.txt".',
        'Add a try-catch block catching FileNotFoundException, and inside write a clear prompt telling the user to create the file.',
        'Add a generic catch block for general IOException.'
      ]
    },
    summary: [
      'Java forces file code to use try-catch blocks because external disk environments are highly unpredictable.',
      'FileNotFoundException represents a missing file; general IOException covers broad reading/writing hardware errors.',
      'Always catch specific child exceptions before parent exceptions to maintain correct compilation rules.'
    ]
  },

  'file-handling-mini-project': {
    slug: 'file-handling-mini-project',
    title: 'File Handling Mini Project',
    moduleSlug: 'file-handling',
    moduleName: 'File Handling',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `Now that we have mastered creating, reading, writing, and handling exceptions, let\'s consolidate our knowledge.

In this mini-project, we will construct a complete, command-line **Student Records System**. Our application will let users enter student names, save them permanently to a "students.txt" file on our drive, and read/display them back cleanly in our console!`,
    whyThisTopicMatters: {
      whyItExists: `Synthesizing OOP classes, collections, user scanners, file streams, and error blocks is how real-world developers build professional application tools.`,
      problemSolved: `This project proves you can manage dynamic data arrays inside active RAM, and mirror that data persistently onto a hard disk structure.`
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s analyze the architecture of our Student Records System:'
      },
      {
        type: 'bullet_list',
        title: 'Project Structural Components',
        items: [
          'The Student Class: An OOP class representing a Student object with a name property.',
          'Active Memory (ArrayList): A temporary list inside RAM to store newly registered students while the program is running.',
          'Disk Storage (students.txt): A text file that holds the names permanently.',
          'Persistence Methods: saveToDisk() loops through our RAM list and appends students to our text file. readFromDisk() reads lines from students.txt and prints them to our console.'
        ]
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Data Persistence',
          definition: 'The survival of data structures after the process that created them has terminated.',
          explanation: 'Achieved by writing active RAM parameters to files or databases.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Record Serialization',
          definition: 'Translating an active object state in memory into a string format that can be written to a file.',
          explanation: 'For example, converting a Student(name="Alinafe") object into the line "Alinafe" inside students.txt.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Under the hood, our program binds variables in RAM, parses string splits, handles Scanner user input inputs, catches IO errors, and operates file write streams. This brings together everything you have learned!'
      }
    ],
    codeExamples: [
      {
        title: 'A Complete Student Records System in Java',
        language: 'java',
        code: `import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

// OOP Object Model
class Student {
    private String name;

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

public class StudentRegistrySystem {
    private static final String FILE_NAME = "registry.txt";

    public static void main(String[] args) {
        ArrayList<Student> sessionList = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        int choice = -1;

        System.out.println("=== ByteAcademy Student Registry ===");

        while (choice != 3) {
            System.out.println("\\nOptions:");
            System.out.println("1. Add Student Name (to RAM)");
            System.out.println("2. Save RAM Data to Disk & Show Registry");
            System.out.println("3. Exit Program");
            System.out.print("Enter selection: ");

            if (scanner.hasNextInt()) {
                choice = scanner.nextInt();
                scanner.nextLine(); // Clear scanner buffer
            } else {
                System.out.println("Invalid number format! Try again.");
                scanner.nextLine();
                continue;
            }

            switch (choice) {
                case 1:
                    System.out.print("Enter student name: ");
                    String name = scanner.nextLine();
                    if (!name.trim().isEmpty()) {
                        sessionList.add(new Student(name));
                        System.out.println(name + " added to temporary session list (RAM).");
                    } else {
                        System.out.println("Name cannot be empty!");
                    }
                    break;

                case 2:
                    // 1. Save RAM list elements to Disk
                    if (!sessionList.isEmpty()) {
                        saveToDisk(sessionList);
                        sessionList.clear(); // Clear RAM once successfully stored on disk
                    }
                    // 2. Read and display everything from Disk
                    displayRegistry();
                    break;

                case 3:
                    System.out.println("Thank you for using ByteAcademy Registry! Goodbye.");
                    break;

                default:
                    System.out.println("Invalid option. Enter 1, 2, or 3.");
            }
        }
        scanner.close();
    }

    // Writes ArrayList entries out to disk safely
    private static void saveToDisk(ArrayList<Student> students) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(FILE_NAME, true))) {
            for (Student s : students) {
                writer.write(s.getName());
                writer.newLine();
            }
            System.out.println("System: " + students.size() + " records successfully committed to disk.");
        } catch (IOException e) {
            System.out.println("Error saving records: " + e.getMessage());
        }
    }

    // Reads and prints stored text data
    private static void displayRegistry() {
        File file = new File(FILE_NAME);
        if (!file.exists()) {
            System.out.println("Registry is empty! No records saved yet.");
            return;
        }

        System.out.println("\\n--- Stored Student Registry (registry.txt) ---");
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String studentName;
            int counter = 1;
            while ((studentName = reader.readLine()) != null) {
                System.out.println(counter + ". " + studentName);
                counter++;
            }
        } catch (IOException e) {
            System.out.println("Error reading registry: " + e.getMessage());
        }
        System.out.println("----------------------------------------------");
    }
}`,
        explanation: 'The system runs a loop matching menu choices. Option 1 adds a Student instance to our sessionList. Option 2 invokes saveToDisk() to append names to "registry.txt" using BufferedWriter, clears the temporary list, and calls displayRegistry() to scan registry.txt line-by-line and print the complete historical roster.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Registry RAM vs. Disk State',
        description: 'Analyzing state transitions during different user actions.',
        elements: {
          headers: ['Action', 'RAM State (sessionList)', 'Disk State (registry.txt)'],
          rows: [
            ['Add student "Alinafe" (Option 1)', 'Holds 1 item: ["Alinafe"]', 'Unchanged on disk.'],
            ['Add student "Brie" (Option 1)', 'Holds 2 items: ["Alinafe", "Brie"]', 'Unchanged on disk.'],
            ['Save and Show (Option 2)', 'Empty (cleared after commit)', 'Appended with "Alinafe" and "Brie" permanently.'],
            ['Restart App & Show (Option 2)', 'Empty', 'Shows all historical entries loaded from disk.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to flush or close writing streams, leaving files completely empty.',
        whyItHappens: 'Forgetting that BufferedWriter holds characters in RAM memory and won\'t commit them to physical blocks immediately unless closed.',
        howToAvoid: 'Always use Try-With-Resources. It guarantees that the BufferedWriter is automatically closed and flushed upon leaving the block.',
        codeSnippet: {
          bad: `// ❌ Leaves registry.txt completely empty because close() is never called!
BufferedWriter writer = new BufferedWriter(new FileWriter("registry.txt"));
writer.write("Alinafe");`,
          good: `// ✓ CORRECT: Stream is auto-closed and flushed instantly!
try (BufferedWriter writer = new BufferedWriter(new FileWriter("registry.txt"))) {
    writer.write("Alinafe");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Extend the Student Registry',
      tasks: [
        'Run the provided Registry code, add two student names, and verify that "registry.txt" is generated inside your directory.',
        'Extend the code: Modify the Student class to store both a name and a grade (e.g. "Alinafe,95.5").',
        'Update saveToDisk and displayRegistry to split the name and grade using string operations when displaying records.'
      ]
    },
    summary: [
      'This project integrates scanner inputs, lists, nested file writers, nested readers, and class models.',
      'Data flows from variables to RAM lists, serializes to text files, and parses back to variables upon request.',
      'Persistent files allow records to be retrieved and displayed even after restarting the computer.'
    ]
  }
};
