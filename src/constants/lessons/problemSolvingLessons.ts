import { DetailedLessonContent } from '../../types';

export const PROBLEM_SOLVING_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-problem-solving': {
    slug: 'introduction-to-problem-solving',
    title: 'Introduction to Problem Solving in Programming',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `When beginners start learning a programming language, they often make a critical mistake: they focus entirely on syntax—the semicolons, curly braces, and keyword rules of Java—while completely ignoring the art of problem solving. 

Programming is not simply about typing lines of code. It is about using a computer to solve real-world problems. Code is merely the tool we use to write down and execute our solutions. In this lesson, we will shift your perspective from being a "code writer" to being a "problem solver."`,
    whyThisTopicMatters: {
      whyItExists: 'Knowing programming syntax without knowing how to solve problems is like knowing how to hold a hammer but not knowing how to draw up blueprints for a house. Programmers are primarily hired to solve business and technical challenges, not just to type keywords.',
      problemSolved: 'Developing a problem-solving mindset prevents "blank screen syndrome"—the common beginner frustration where you understand Java features (like if-statements and loops) but have no idea where to start when faced with a blank file and a new task.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To become a successful software developer, you must understand that programming happens mostly in your head, not on your keyboard. Writing the code is actually the final, easiest step. The real work is figuring out the logical steps needed to solve the problem.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Problem Solving',
          definition: 'The systematic process of analyzing a situation, identifying a goal, and designing a step-by-step sequence of instructions to reach that goal.',
          explanation: 'In software, this process takes place entirely before writing code. You identify the requirements, analyze constraints, plan the logic, and only then write the Java code.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Logical Thinking',
          definition: 'The ability to analyze a problem and deduce a series of cause-and-effect relationships that lead to a correct solution.',
          explanation: 'Computers are literal and do exactly what you tell them, not what you want them to do. Logical thinking ensures your instructions match your true intentions.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'The best programmers spend up to 70% of their time planning, drawing diagrams, and talking through problems, and only 30% of their time actually typing out code. If you start typing immediately, you will likely write messy, error-prone code!'
      }
    ],
    codeExamples: [
      {
        title: 'Syntax vs. Logical Thinking',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // SYNTAX is perfect: the compiler is happy
        // LOGICAL THINKING is broken: does not solve the problem!
        
        int userAge = 16;
        
        // Goal: Check if user is old enough to vote (18+)
        if (userAge > 18) {
            System.out.println("You can vote!");
        } else {
            System.out.println("Too young.");
        }
    }
}`,
        explanation: 'The code above compiles with zero errors, but it has a logical bug! If the user is exactly 18, it will incorrectly print "Too young." because we used > instead of >=. The compiler can only check syntax rules—it cannot check if your problem-solving logic is correct.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Syntactic Coding vs. Logical Problem Solving',
        description: 'Comparing the two essential halves of programming to see why problem solving is the dominant skill.',
        elements: {
          headers: ['Dimension', 'Syntactic Coding (The "Tool")', 'Logical Problem Solving (The "Mind")'],
          rows: [
            ['Focus', 'Where do semicolons go? How do I write a loop?', 'What steps are needed? How do we handle edge cases?'],
            ['Thinking style', 'Memorization of rules and keyword definitions.', 'Creative reasoning, decomposition, and algorithmic design.'],
            ['Platform compatibility', 'Changes entirely between languages (Java vs. Python vs. C++).', 'Universal. A logical solution works in any language.'],
            ['Troubleshooting', 'Correcting compiler errors and red squiggly lines.', 'Analyzing incorrect results, tracing code, and finding logical flaws.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Starting to code immediately after reading a problem description.',
        whyItHappens: 'Beginners feel an urgent pressure to type code, mistakenly believing that if their fingers are moving, they are making progress.',
        howToAvoid: 'Never write code until you can write down the step-by-step solution in plain English first. If you cannot solve it on paper, you cannot solve it in Java.'
      }
    ],
    practiceExercise: {
      title: 'The Mindset Shift Challenge',
      tasks: [
        'Explain in your own words why a program that compiles with absolutely no errors can still be completely useless to a client.',
        'Consider the task of organizing a deck of cards by suit and value. Write down the precise instructions you would give to a child to do this. Keep each step as simple as possible.',
        'Why do you think computers are often described as "incredibly fast, but incredibly stupid"?'
      ]
    },
    summary: [
      'Programming is first and foremost about systematic problem solving; typing the code is just translation.',
      'A compiler only enforces syntax rules—it has no idea what your program is actually trying to accomplish.',
      'Spend the majority of your energy analyzing, planning, and sketching out logic before you touch the keyboard.'
    ]
  },

  'understanding-problems': {
    slug: 'understanding-problems',
    title: 'Understanding Problems Before Coding',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `If you are given 60 minutes to solve a difficult problem, you should spend 40 minutes understanding the problem, 15 minutes planning the solution, and only 5 minutes coding it. 

The biggest pitfall for new programmers is trying to write a solution to a problem they do not fully understand yet. If you do not know exactly what the problem is, how can you know if your code has successfully solved it? In this lesson, we will learn how to analyze a problem and tear it down to its core components.`,
    whyThisTopicMatters: {
      whyItExists: 'In the real world, client and project requirements are often vague, confusing, or incomplete. Coding immediately based on a vague idea leads to wasted hours, incorrect applications, and frustrated clients.',
      problemSolved: 'Learning to analyze problems systematically saves hours of rewrite time. It ensures you know exactly what to build, what data you need, and what boundaries your code must respect.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand any programming problem completely, you must dissect it into three essential pillars: **Inputs**, **Outputs**, and **Constraints**.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Inputs',
          definition: 'The raw data, values, or signals that your program receives from the outside world (e.g., from a user, a file, or another system).',
          explanation: 'Before writing code, ask yourself: What data does my program need? What are the types of these values (numbers, text, decimals)? How does the user provide them?'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Outputs',
          definition: 'The final results, messages, or actions that your program must produce once it has completed its work.',
          explanation: 'Ask yourself: What does a successful run look like? Should I print a message to the console, update a file, or return a specific calculated value?'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Constraints',
          definition: 'The limitations, rules, and boundaries within which your program must operate.',
          explanation: 'Constraints could be mathematical rules (e.g., "cannot divide by zero", "age must be positive") or system rules (e.g., "must run in under 2 seconds"). Identifying these prevents bugs.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Always test your understanding by designing dummy test cases! For example, write down a set of sample inputs, calculate the correct output by hand, and use that to verify your program later.'
      }
    ],
    codeExamples: [
      {
        title: 'Analyzing a Simple Requirement',
        language: 'java',
        code: `/* 
 PROBLEM: 
 "Create a program that calculates the discount on a purchase. 
  If the customer spends MWK 50,000 or more, they get a 10% discount. 
  Otherwise, they get no discount. Print the final price."

 ANALYSIS:
 - Inputs: originalPrice (decimal number)
 - Outputs: finalPrice (decimal number)
 - Constraints: Price cannot be negative. Discount only applies starting exactly at 50,000.
*/

public class DiscountCalculator {
    public static void main(String[] args) {
        double originalPrice = 55000.0; // Input
        double finalPrice;
        
        // Constraint check
        if (originalPrice < 0) {
            System.out.println("Error: Price cannot be negative.");
            return;
        }
        
        // Logical rule execution
        if (originalPrice >= 50000.0) {
            finalPrice = originalPrice * 0.90; // 10% off
        } else {
            finalPrice = originalPrice; // No discount
        }
        
        System.out.println("Final Price: MWK " + finalPrice); // Output
    }
}`,
        explanation: 'By writing down the Inputs, Outputs, and Constraints before typing code, we avoid bugs like forgetting to check for negative numbers or using > instead of >= for the discount threshold.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'The Problem Analysis Pipeline',
        description: 'The journey of data from the initial requirements stage to a finalized program structure.',
        elements: {
          steps: [
            { id: '1', label: '1. Read Requirements', desc: 'Identify what the user wants to accomplish.', type: 'start' },
            { id: '2', label: '2. Isolate Inputs & Outputs', desc: 'Determine the starting data and desired end results.', type: 'action' },
            { id: '3', label: '3. Enforce Constraints', desc: 'List all boundary rules and invalid input scenarios.', type: 'decision' },
            { id: '4', label: '4. Design Test Cases', desc: 'Calculate expected outputs for sample inputs by hand.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming inputs will always be perfectly valid.',
        whyItHappens: 'New programmers write code assuming the user will always follow instructions (e.g., typing a positive age instead of -5, or entering numbers when text is requested).',
        howToAvoid: 'Always think about the "Worst-Case User." What if they input zero? What if they input a negative number? Add validation rules to handle these constraint violations gracefully.'
      }
    ],
    practiceExercise: {
      title: 'Requirement Dissection Lab',
      tasks: [
        'Analyze this requirement: "Build a program that calculates the average of three exam scores. If the average is 50 or above, the student passes. Otherwise, they fail." List the Inputs, Outputs, and Constraints.',
        'For the exam scores program above, write down three distinct hand-calculated test cases. Include one passing scenario, one failing scenario, and one extreme boundary scenario.',
        'Why is it vital to identify constraint rules BEFORE you decide what variable types (like int vs. double) to use in your program?'
      ]
    },
    summary: [
      'Never begin coding until you can clearly list the inputs, desired outputs, and core constraints of the problem.',
      'Creating hand-calculated test cases before coding gives you an instant way to verify if your program actually works.',
      'Thinking about edge cases and bad inputs is the hallmark of a professional, reliable software developer.'
    ]
  },

  'breaking-problems-down': {
    slug: 'breaking-problems-down',
    title: 'Breaking Problems Into Smaller Steps',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `When you look at a giant, complex problem all at once, it feels overwhelming. You might feel paralyzed, not knowing where to write the first line of code. 

The secret that professional programmers use to solve massive systems is incredibly simple: they do not solve giant problems. Instead, they break the giant problem down into a dozen tiny, simple problems, solve each one individually, and glue them back together. In computer science, this process is called **Decomposition** or **"Divide and Conquer."**`,
    whyThisTopicMatters: {
      whyItExists: 'Human brains are terrible at keeping track of too many moving parts at once. If you try to write a complex program in one single, massive mental leap, you will quickly get confused and introduce hard-to-find bugs.',
      problemSolved: 'Decomposition turns scary, complex programming tasks into a checklist of easy, bite-sized tasks. It allows you to build software incrementally, testing each tiny piece as you go.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand decomposition, let\'s use a real-world analogy. Imagine you want to build a house. If you look at the entire house, it seems impossible to construct in one go. Instead, you break it down into independent, manageable phases: clearing the land, pouring the concrete foundation, raising the timber frame, installing the pipes, and putting on the roof.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Decomposition',
          definition: 'The analytical process of breaking a complex system or problem down into smaller, simpler, more manageable sub-problems.',
          explanation: 'Also known as modularization. Each smaller sub-problem is solved independently, often leading to individual lines of code or dedicated helper methods.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Incremental Development',
          definition: 'The practice of building and testing a program in tiny, functional stages rather than attempting to write the entire system before running it.',
          explanation: 'You write code to solve one small sub-problem, compile and run it to verify it works perfectly, and only then move on to the next sub-problem.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'When decomposing a problem, aim to make your sub-problems as independent as possible. If Sub-Problem A does not depend on Sub-Problem B, you can focus on solving A completely without worrying about B.'
      }
    ],
    codeExamples: [
      {
        title: 'Decomposing a Student Grade Analyzer',
        language: 'java',
        code: `/*
  PROBLEM:
  "Write a program that takes three student scores, calculates their average, 
  determines their letter grade (A, B, C, F), and prints a custom report."
  
  DECOMPOSITION (The Checklist):
  1. Retrieve the three scores from variables.
  2. Validate that each score is between 0 and 100.
  3. Calculate the average of the scores.
  4. Determine the letter grade based on the average.
  5. Print a beautifully formatted report.
*/

public class GradeAnalyzer {
    public static void main(String[] args) {
        // Step 1: Retrieve inputs
        double s1 = 85.0;
        double s2 = 90.0;
        double s3 = 78.0;
        
        // Step 2: Validate scores (Constraints check)
        if (s1 < 0 || s1 > 100 || s2 < 0 || s2 > 100 || s3 < 0 || s3 > 100) {
            System.out.println("Error: Scores must be between 0 and 100.");
            return;
        }
        
        // Step 3: Calculate average
        double average = (s1 + s2 + s3) / 3.0;
        
        // Step 4: Determine letter grade
        char grade;
        if (average >= 90) grade = 'A';
        else if (average >= 80) grade = 'B';
        else if (average >= 70) grade = 'C';
        else grade = 'F';
        
        // Step 5: Print custom report
        System.out.println("=== STUDENT GRADE REPORT ===");
        System.out.println("Scores: " + s1 + ", " + s2 + ", " + s3);
        System.out.println("Average: " + average);
        System.out.println("Final Grade: " + grade);
        System.out.println("=============================");
    }
}`,
        explanation: 'By decomposing the problem into five distinct steps, we turned a potentially confusing task into a clean sequence of simple calculations and prints. We can build and verify each step one-by-one.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Monolithic Coding vs. Decomposed Coding',
        description: 'Analyzing how developers handle problems of different scales using decomposition.',
        elements: {
          headers: ['Metric', 'The Monolithic Approach (No Decomposition)', 'The Decomposed Approach (Divide & Conquer)'],
          rows: [
            ['Mental strain', 'Very high. Trying to solve everything at once leads to immediate cognitive overload.', 'Low. You only focus on one simple step at a time.'],
            ['Debugging speed', 'Slow. When something breaks, you must search through a massive pile of code to find the cause.', 'Fast. You can test each small step individually to isolate where the logic failed.'],
            ['Collaboration', 'Impossible. Only one programmer can write the giant block of code.', 'Easy. You can assign different sub-problems to different team members.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to write the entire program before compiling and testing it.',
        whyItHappens: 'Beginners believe compiling is slow or that a program must be completely finished before it is worth running.',
        howToAvoid: 'Write a few lines of code (e.g., just the input step), compile it, and print the values to make sure they are correct. Once verified, move to the next step. This is called the "build-and-verify" loop.'
      }
    ],
    practiceExercise: {
      title: 'Problem Decomposition Workshop',
      tasks: [
        'Consider the task: "Build a program for an ATM that checks if a user has enough money in their account, subtracts their requested withdrawal, and counts out the bills." Decompose this into a checklist of at least 5 sub-problems.',
        'Why does decomposition make it much easier to write reusable methods later on?',
        'Pick any interactive web application you use daily (e.g., a login form or a search bar) and write down the small sub-problems its programmers had to solve behind the scenes.'
      ]
    },
    summary: [
      'Decomposition is the art of breaking a large, intimidating problem into a sequence of small, simple tasks.',
      'Solving and testing your code incrementally in stages prevents confusion and isolates errors immediately.',
      'If you get stuck on a problem, it means the step you are trying to solve is still too big. Break it down even further.'
    ]
  },

  'algorithms-thinking': {
    slug: 'algorithms-thinking',
    title: 'Algorithms and Step-by-Step Thinking',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `A computer is incredibly fast, but it is also completely blind and lacks any common sense. It cannot look at a problem and "guess" how to solve it. It requires a precise, step-by-step recipe that covers every single detail. 

In computer science, this precise recipe is called an **Algorithm**. Algorithmic thinking is the ability to outline a clear, unambiguous sequence of steps that will always solve a problem, no matter what valid inputs are provided. In this lesson, we will learn how to design algorithms using natural thinking before converting them to code.`,
    whyThisTopicMatters: {
      whyItExists: 'A computer cannot interpret vague instructions. If you tell a computer to "find the highest score," it has no idea what you mean. You must define exactly how to look at the scores, remember the largest one, compare each one, and output the result.',
      problemSolved: 'Mastering algorithmic thinking allows you to convert messy, unstructured ideas into organized, predictable, and highly efficient execution instructions.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'You actually use algorithms every single day of your life without realizing it. A baking recipe, the steps to change a flat tire, or the instructions to assemble a bookshelf are all algorithms!'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Algorithm',
          definition: 'A set of step-by-step, unambiguous instructions designed to perform a specific task or solve a particular problem in a finite amount of time.',
          explanation: 'An algorithm must be clear (no guessing), general (works for different input values), and finite (it must eventually finish and not run forever).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Algorithmic Thinking',
          definition: 'The cognitive skill of formulating a problem in terms of a clear step-by-step process that can be executed by an automated system.',
          explanation: 'It involves logic, ordering, conditional branches (ifs), and repetitions (loops) expressed conceptually before choosing a programming language.'
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        text: 'An algorithm is independent of any programming language! You can write an algorithm for sorting numbers on a napkin in English, and that exact same algorithm can be implemented in Java, Python, C++, or Javascript.'
      }
    ],
    codeExamples: [
      {
        title: 'An Everyday Algorithm: Preparing to Drive',
        language: 'java',
        code: `/*
  ALGORITHM FOR DRIVING A CAR:
  1. Open the car door.
  2. Get inside and sit down.
  3. Insert the key into the ignition.
  4. Put on your seatbelt (CRITICAL SAFETY CONSTRAINT).
  5. IF seatbelt is not buckled, print warning and do NOT start engine.
  6. Turn the key to start the engine.
  7. Shift gear into Drive and press the accelerator.
*/

public class CarLauncher {
    public static void main(String[] args) {
        boolean seatbeltBuckled = true; // Input
        
        System.out.println("Opening door...");
        System.out.println("Sitting inside...");
        
        // Logical condition step
        if (!seatbeltBuckled) {
            System.out.println("WARNING: Buckle seatbelt! Engine disabled.");
            return; // Finite stop
        }
        
        System.out.println("Starting engine... Vroom!");
        System.out.println("Shifting gears and driving away safely!");
    }
}`,
        explanation: 'Notice how the algorithm translates directly into code statements and control flow checks. By mapping out the driving instructions beforehand, we ensured safety constraints are handled first.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Vague Thinking vs. Algorithmic Thinking',
        description: 'Seeing how general human ideas must be refined into precise, automated instructions.',
        elements: {
          headers: ['Goal', 'Vague Human Instruction', 'Precise Algorithmic Recipe'],
          rows: [
            ['Check if a number is even', 'Look at the number and see if it is even.', '1. Take the number. 2. Divide it by 2. 3. Look at the remainder. 4. IF remainder is 0, output "Even". 5. ELSE output "Odd".'],
            ['Find the largest of three numbers', 'Just pick the biggest number in the group.', '1. Compare first and second. Remember the larger one. 2. Compare the remembered number with the third. 3. Output the final largest number.'],
            ['Add numbers from 1 to 5', 'Add them up in your head.', '1. Create a sum variable starting at 0. 2. Create a counter starting at 1. 3. Add counter to sum. 4. Add 1 to counter. 5. Repeat steps 3-4 until counter exceeds 5. 6. Output sum.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Leaving steps out of your algorithm because you assume they are "obvious."',
        whyItHappens: 'Humans have massive amounts of background context and common sense, so we skip basic steps (e.g., forgetting to check if a list is empty before looking inside it).',
        howToAvoid: 'Pretend you are explaining the task to an alien or a robot who understands absolutely nothing except basic arithmetic. Write down every single action explicitly.'
      }
    ],
    practiceExercise: {
      title: 'The Unambiguous Recipe Challenge',
      tasks: [
        'Write an explicit step-by-step algorithm in plain English to find the smallest number in a list of 5 numbers. Assume you can only look at one number at a time.',
        'Consider the task: "Check if a word is a palindrome (spelled the same forwards and backwards)." Write a clear algorithm to evaluate this.',
        'Why must an algorithm always be finite? What happens in a computer program if an algorithm fails to have a clear exit point?'
      ]
    },
    summary: [
      'An algorithm is a clear, step-by-step, finite set of instructions to solve a problem.',
      'Algorithms are universal and can be written in plain English before being translated to Java.',
      'To think algorithmically, you must remove all assumptions and express logic in terms of literal, cause-and-effect steps.'
    ]
  },

  'pseudocode-fundamentals': {
    slug: 'pseudocode-fundamentals',
    title: 'Pseudocode Fundamentals',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `When you are ready to translate an algorithm into code, you might find that jumping straight from plain English to strict Java syntax is too difficult. You have to worry about both the logic AND the exact placement of dots, capital letters, and public-static-void boilerplates.

To bridge this gap, professional programmers use **Pseudocode**. Pseudocode is a loose, informal way of writing code that looks like a programming language but uses plain English words. It has no strict syntax rules, meaning you can focus 100% on logic without worrying about compiler errors.`,
    whyThisTopicMatters: {
      whyItExists: 'Trying to design complex program logic while simultaneously wrestling with Java compiler syntax is incredibly difficult. It forces your brain to multitask, leading to confusion and errors.',
      problemSolved: 'Pseudocode allows you to draft, refine, and perfect your logic in a lightweight, stress-free format. Once your pseudocode is correct, writing the final Java code is as simple as translating words line-by-line.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Pseudocode literally means "fake code." It uses standard programming concepts like variables, conditionals (IF/ELSE), and loops (FOR/WHILE) but writes them in natural, easy-to-read terms.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Pseudocode',
          definition: 'An informal high-level description of a computer program or algorithm, written using simplified programming conventions combined with natural language.',
          explanation: 'It is intended for human reading rather than machine execution. There are no compiler errors or strict grammar rules in pseudocode.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Syntax Independence',
          definition: 'The quality of being free from the specific formatting and grammar rules of any single programming language.',
          explanation: 'Because pseudocode is syntax-independent, you can share it with a Python developer or a Java developer, and they can both implement it easily.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'When writing pseudocode, use indentations (indenting blocks of text under an IF or LOOP) to visually organize your steps. This makes it much easier to write matching curly braces when you transition to Java.'
      }
    ],
    codeExamples: [
      {
        title: 'Translating Pseudocode to Java',
        language: 'java',
        code: `/*
  PSEUDOCODE:
  ---------------------------------------------
  DECLARE score = 85
  
  IF score is greater than or equal to 50 THEN
      PRINT "Congratulations, you passed!"
  ELSE
      PRINT "Please try again."
  ENDIF
  ---------------------------------------------
  
  JAVA TRANSLATION:
*/

public class ExamResult {
    public static void main(String[] args) {
        int score = 85; // DECLARE
        
        if (score >= 50) { // IF score >= 50 THEN
            System.out.println("Congratulations, you passed!"); // PRINT
        } else { // ELSE
            System.out.println("Please try again."); // PRINT
        } // ENDIF
    }
}`,
        explanation: 'Notice how the pseudocode matches the final Java program almost line-for-line. Writing the pseudocode first allowed us to establish our logical path clearly before we had to type out the Java boilerplate.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Common Pseudocode Commands and Java Equivalents',
        description: 'A handy translation guide to help you draft your pseudocode.',
        elements: {
          headers: ['Operation', 'Common Pseudocode Keyword', 'Java Translation'],
          rows: [
            ['Creating a storage variable', 'DECLARE name = value', 'int name = value; or double name = value;'],
            ['Showing output to the user', 'PRINT "message" or DISPLAY "message"', 'System.out.println("message");'],
            ['Making logical choices', 'IF condition THEN ... ELSE ... ENDIF', 'if (condition) { ... } else { ... }'],
            ['Repeating an action', 'REPEAT ... UNTIL condition or WHILE condition DO', 'while (condition) { ... } or for (...) { ... }'],
            ['Stopping program execution', 'STOP or END', 'return; or System.exit(0);']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Worrying about exact syntax rules while writing pseudocode.',
        whyItHappens: 'Beginners are so used to the compiler yelling at them that they try to write perfect Java inside their pseudocode.',
        howToAvoid: 'Relax! Pseudocode is just for you. If you write "show message" instead of "PRINT", that is completely fine. Focus entirely on the step-by-step logic.'
      }
    ],
    practiceExercise: {
      title: 'The Pseudocode Drafting Workshop',
      tasks: [
        'Write high-quality pseudocode for a program that asks the user to input a positive integer. If the integer is negative, print an error. Otherwise, check if it is odd or even and display the result.',
        'Convert the pseudocode you wrote in Task 1 into a complete, compilable Java class.',
        'Why is pseudocode a valuable tool when discussing software designs with non-technical business partners or clients?'
      ]
    },
    summary: [
      'Pseudocode is fake code written in plain English that maps out programming logic without strict syntax rules.',
      'It acts as a critical translator bridge between raw human algorithms and highly structured computer code.',
      'Using pseudocode lets you focus entirely on solving the problem, leaving syntax details for the very last step.'
    ]
  },

  'flowcharts-logic': {
    slug: 'flowcharts-logic',
    title: 'Flowcharts and Program Logic',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `Humans are highly visual creatures. When we look at a dense list of text instructions, our brains have to work hard to build a mental picture of how data moves. 

A **Flowchart** is a visual diagram that represents the step-by-step execution path of an algorithm. By using simple shapes connected by arrows, flowcharts allow you to visually trace decisions, loops, and procedures. In this lesson, we will learn how to design, read, and understand program flowcharts to plan our Java code logic.`,
    whyThisTopicMatters: {
      whyItExists: 'As programs grow, they develop complex networks of branching decisions (ifs) and nested loops. Standard code files can become difficult to read, making it easy to lose track of execution paths.',
      problemSolved: 'Flowcharts give you a birds-eye, visual blueprint of your program. They make it instantly clear where decisions are made, where loops repeat, and where execution terminates, preventing dead ends and unreachable code.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Every flowchart is constructed using a set of universally standardized geometric shapes. Each shape represents a different type of programming operation, and they are always connected by directional flow arrows.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Terminal Oval',
          definition: 'A rounded oval shape used to mark the absolute Start or End boundary of your algorithm.',
          explanation: 'Every flowchart must have exactly one Start oval, and at least one End oval to represent where the execution finishes.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Process Rectangle',
          definition: 'A standard rectangular block that represents an action, process, calculation, or variable assignment.',
          explanation: 'Used for tasks like "Add 1 to count," "Set discount = 0.10," or "Calculate total sum = s1 + s2."'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Decision Diamond',
          definition: 'A diamond shape that represents a logical conditional evaluation, branching the flow path into separate directions.',
          explanation: 'Always contains a yes/no or true/false question. It has one entry arrow, and always has two separate exit arrows representing the paths (e.g., Yes/No).'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Input/Output Parallelogram',
          definition: 'A slanted four-sided shape used to represent data being read into or displayed out of the system.',
          explanation: 'Used for statements like "Read user input score" or "Print final price to terminal screen."'
        }
      }
    ],
    codeExamples: [
      {
        title: 'Visualizing an ATM Withdrawal Decision',
        language: 'java',
        code: `/*
  FLOWCHART LOGICAL TREE:
  [Start Oval]
       │
  [Input Parallelogram: Read withdrawalAmount, accountBalance]
       │
  <Decision Diamond: withdrawalAmount <= accountBalance?>
       ├─── Yes ───> [Process: Subtract amount from balance] ───> [Output: Dispense Cash] ───> [End Oval]
       └─── No  ───> [Output: Print "Insufficient Funds"] ─────────────────────────────────> [End Oval]
*/

public class ATMSystem {
    public static void main(String[] args) {
        double accountBalance = 150000.0;
        double withdrawalAmount = 200000.0;
        
        // Match the Decision Diamond
        if (withdrawalAmount <= accountBalance) {
            // Yes path
            accountBalance = accountBalance - withdrawalAmount;
            System.out.println("Dispensing Cash. New Balance: MWK " + accountBalance);
        } else {
            // No path
            System.out.println("Error: Insufficient Funds!");
        }
    }
}`,
        explanation: 'The flowchart visually partitions our logic into two clear branches. By tracing the yes and no arrows, we make sure that both execution paths lead safely to a termination Oval without getting stuck.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Flowchart Logic Architecture',
        description: 'Standard visualization layout showing step-by-step branching execution.',
        elements: {
          steps: [
            { id: '1', label: 'Start Program', desc: 'Represented by a Terminal Oval.', type: 'start' },
            { id: '2', label: 'Input Age', desc: 'Represented by an I/O Parallelogram.', type: 'action' },
            { id: '3', label: 'Is Age >= 18?', desc: 'Represented by a Decision Diamond (Yes/No).', type: 'decision' },
            { id: '4', label: 'Finish Execution', desc: 'Represented by a Terminal Oval.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Leaving a path arrow floating without connecting it to a next shape or end terminal.',
        whyItHappens: 'When sketching, beginners focus on the primary path and forget to specify what happens on the fallback branch, leaving the program "dangling" in space.',
        howToAvoid: 'Trace every single arrow in your flowchart with your finger. Make sure that no matter what decisions are made, you always eventually reach an [End] oval.'
      }
    ],
    practiceExercise: {
      title: 'Visual Flowchart Mapping',
      tasks: [
        'Draw (or describe) a complete flowchart for a program that prints numbers from 1 to 5 using a loop. Hint: Use a counter process rectangle and a loop evaluation decision diamond.',
        'How do decision diamonds in flowcharts translate directly into Java syntax statements?',
        'Look at the input/output parallelogram. Why is it visually distinguished from standard process rectangles?'
      ]
    },
    summary: [
      'Flowcharts are visual maps of program logic, using standardized geometric shapes connected by arrows.',
      'Ovals represent boundaries, diamonds represent conditional branches, and rectangles represent operations.',
      'Visualizing your execution paths guarantees that your logical structure is complete and free of endless loops.'
    ]
  },

  'tracing-code-dry-running': {
    slug: 'tracing-code-dry-running',
    title: 'Tracing Code and Dry Running Programs',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `A lot of times, you will write code that runs with no compile errors but outputs completely crazy, incorrect numbers. You look at the code, but the logic error is invisible to your eyes. 

To find these hidden logic bugs, you must master a super-power used by the most elite developers: **Dry Running** (also known as **Code Tracing**). Dry running is the process of executing a program manually using just a piece of paper and a pen. You act exactly like the JVM, tracking how every single variable changes value step-by-step. In this lesson, we will learn how to dry run programs using trace tables.`,
    whyThisTopicMatters: {
      whyItExists: 'Computers run code at billions of operations per second, making it impossible to see individual calculations on the fly. If you only look at the final incorrect result, you are just guessing where the mistake happened.',
      problemSolved: 'Dry running slows down time. It lets you inspect the precise state of variables at any exact step in your code, revealing exactly where your calculations went off course.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To dry run code successfully, you must create a **Trace Table**. A trace table is a simple grid where every column represents a variable in your program, and every row represents a single step of code execution.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Dry Running',
          definition: 'The manual, paper-based execution of computer code to track variable states and verify logical output without running the program on a machine.',
          explanation: 'It is a crucial debugging skill. By slowly simulating the JVM in your head, you catch logic errors that compile perfectly but yield wrong results.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Trace Table',
          definition: 'A structured matrix grid used to document and audit the step-by-step state changes of variables during a manual program execution.',
          explanation: 'Whenever a variable is initialized or mutated, you write its new value in its designated column, making variable tracking completely visual.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'When dry running loops, always write down the loop condition as a column in your table (e.g., "count < 3"). This makes it easy to see exactly when the loop becomes false and stops executing.'
      }
    ],
    codeExamples: [
      {
        title: 'Tracing a Loop Variable State',
        language: 'java',
        code: `/*
  CODE TO TRACE:
  ---------------------------------------------
  int sum = 0;
  int count = 1;
  while (count <= 3) {
      sum = sum + count;
      count++;
  }
  System.out.println("Sum: " + sum);
  ---------------------------------------------
  
  TRACE TABLE GENERATION:
  
  Step | count <= 3 | sum value | count value | Notes
  -------------------------------------------------------------
  Init |    ---     |     0     |      1      | Variables initialized
  L1   |    True    |     1     |      1      | Loop 1: sum = 0 + 1
  L1   |    True    |     1     |      2      | Loop 1: count++
  L2   |    True    |     3     |      2      | Loop 2: sum = 1 + 2
  L2   |    True    |     3     |      3      | Loop 2: count++
  L3   |    True    |     6     |      3      | Loop 3: sum = 3 + 3
  L3   |    True    |     6     |      4      | Loop 3: count++
  Exit |    False   |     6     |      4      | Loop condition false. Exit!
*/

public class TraceLoop {
    public static void main(String[] args) {
        int sum = 0;
        int count = 1;
        while (count <= 3) {
            sum = sum + count;
            count++;
        }
        System.out.println("Final Sum: " + sum); // Output: 6
    }
}`,
        explanation: 'By writing out the trace table, we can see exactly how "sum" climbs from 0 to 1, then to 3, and finally to 6, while "count" ends at 4, causing the loop condition to evaluate to false.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'Automated IDE Debugging vs. Manual Paper Tracing',
        description: 'Choosing the best diagnostic methodology to isolate logic defects.',
        elements: {
          headers: ['Diagnostic Method', 'Paper Tracing (Dry Running)', 'IDE Debugger Tool'],
          rows: [
            ['Setup cost', 'Zero. Requires only a pencil, paper, and your brain.', 'Requires learning complex IDE panel keybindings, breakpoints, and steps.'],
            ['Conceptual value', 'Extremely high. Forces you to truly understand how JVM memory reads and writes.', 'Medium. Automates steps, but you can click through without thinking.'],
            ['Best used for', 'Short algorithms, loop limits, calculations, and learning foundations.', 'Large corporate systems, reading files, and complex object tracking.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Updating variables in your head instead of writing them down on the paper.',
        whyItHappens: 'Developers overestimate their short-term memory, assuming they can track three variables and a loop condition simultaneously.',
        howToAvoid: 'Write down EVERYTHING. If a variable changes from 5 to 6, cross out the 5 on your paper and write 6. Treat your paper as the literal physical system RAM.'
      }
    ],
    practiceExercise: {
      title: 'Manual Tracing Lab',
      tasks: [
        'Dry run this code block using a trace table: "int x = 10; int y = 5; if (x > y) { x = x - y; } else { y = y - x; } x = x * 2;". What are the final values of x and y?',
        'Create a trace table for this loop algorithm: "int p = 1; int k = 1; while (k <= 4) { p = p * 2; k++; }". What is the final value of p?',
        'How does manual code tracing help you catch "off-by-one" loop boundary errors?'
      ]
    },
    summary: [
      'Dry running is executing program instructions manually on paper to trace logical execution and states.',
      'A trace table tracks values of variables at every logical line step, revealing exactly when mistakes occur.',
      'Paper tracing builds a powerful mental model of the computer, turning invisible logical bugs into visible records.'
    ]
  },

  'debugging-thinking': {
    slug: 'debugging-thinking',
    title: 'Debugging Thinking',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    introduction: `When your program crashes or does not work, it is easy to feel frustrated and defeated. You might feel like the computer "hates" you, or that you are just not cut out for coding. 

But here is a secret: **all code breaks.** Even senior developers at Google write buggy code every single day. The difference between a master programmer and a beginner is not that the master writes perfect code, but that the master knows how to systematically find and fix bugs. Debugging is not a frustrating interruption to programming; debugging **is** programming. In this lesson, we will learn how to think systematically when code fails.`,
    whyThisTopicMatters: {
      whyItExists: 'Software systems are incredibly delicate. A single out-of-order character, a capital letter typo, or an invalid calculation can cause an entire application to crash or leak data.',
      problemSolved: 'Learning structured debugging thinking prevents emotional panic, random "guess-and-check" coding, and endless frustration. It gives you a calm, scientific checklist to isolate and eliminate errors.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To debug like a professional, you must first categorize the enemy. Software bugs fall into three major families: **Syntax Errors**, **Runtime Errors**, and **Logical Errors**.'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Syntax Error',
          definition: 'A spelling, punctuation, or grammar violation of Java rules that prevents the compiler from compiling your program.',
          explanation: 'Examples: missing semicolons, unmatched curly braces, or misspelled keywords. These are the easiest to fix because the compiler tells you exactly where they are.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Runtime Error',
          definition: 'An exception crash that occurs while the program is actively executing, usually because the code tried to do something mathematically or physically impossible.',
          explanation: 'Examples: dividing a number by zero, or accessing an array index that does not exist. The code compiles fine, but crashes instantly when run.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Logical Error',
          definition: 'A program that compiles perfectly and runs without crashing, but outputs completely incorrect, unexpected results.',
          explanation: 'Examples: printing "Too young" when the user is 18, or adding scores instead of calculating averages. These are the hardest to find because the computer has no idea anything is wrong.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Use the Scientific Method of Debugging: 1. Observe the bug. 2. Formulate a hypothesis of what caused it. 3. Design a test (e.g., add print statements). 4. Apply a target fix. 5. Verify. Never change lines of code randomly!'
      }
    ],
    codeExamples: [
      {
        title: 'Unmasking the Three Bug Families',
        language: 'java',
        code: `public class BugDemo {
    public static void main(String[] args) {
        // 1. SYNTAX ERROR: Misspelled keyword (System.out.printl instead of println)
        // System.out.printl("Hello"); // UNCOMMENTING THIS CAUSES COMPILE FAILURE
        
        // 2. RUNTIME ERROR: Division by zero crashes the program actively
        int numerator = 10;
        int denominator = 0;
        // int result = numerator / denominator; // UNCOMMENTING THIS CRASHES RUNTIME
        
        // 3. LOGICAL ERROR: Goal is to find sum of 5 and 5, but wrote subtraction instead
        int a = 5;
        int b = 5;
        int sum = a - b; // Compiles and runs perfectly, but outputs 0 instead of 10!
        
        System.out.println("Logical Sum result: " + sum);
    }
}`,
        explanation: 'We must approach each family differently. Syntax errors are caught by the compiler. Runtime errors require input validation guards. Logical errors require manual tracing and debugging print statements.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'The Debugging Action Plan',
        description: 'A systematic checklist to resolve failures based on error categories.',
        elements: {
          headers: ['Error Type', 'How to Detect It', 'Your Action Plan'],
          rows: [
            ['Syntax Error', 'Red squiggly lines in editor, compiler error logs in console.', '1. Read the error message. 2. Look at the specified line number. 3. Check for matching braces, semicolons, and spelling.'],
            ['Runtime Error', 'Program starts, but crashes midway with an Exception trace log.', '1. Identify which exception was thrown. 2. Add "if" guards to validate inputs before executing the risky calculation.'],
            ['Logical Error', 'Program runs green, but output is wrong or calculations are off.', '1. Dry run the code manually. 2. Insert temporary "System.out.println" statements to inspect variable values inside loops.']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using a "guess-and-check" methodology to fix errors.',
        whyItHappens: 'Panic. When code breaks, beginners change pluses to minuses, move braces, and alter names randomly, hoping the code magically works.',
        howToAvoid: 'Stop typing. Read the error message completely. Ask yourself: Why did the computer do this? If you do not know why a change might fix the bug, do not make it.'
      }
    ],
    practiceExercise: {
      title: 'Debugging Thinking Labs',
      tasks: [
        'A user inputs their score as 100, but your program prints: "Congratulations, you scored 0!". What family of bug is this? How would you start investigating it?',
        'Look up what a "Stack Trace" is, and explain why reading it from bottom to top (or top to bottom) helps isolate runtime exceptions.',
        'Why are temporary print statements (e.g., printing a loop counter value inside the loop) considered a highly valuable debugging technique?'
      ]
    },
    summary: [
      'Debugging is a logical, scientific process, not a frustrating interruption to coding.',
      'Bugs are divided into syntax errors (compiler), runtime errors (crashes), and logical errors (wrong output).',
      'Never write random code changes. Formulate a clear hypothesis first, then execute structured tests.'
    ]
  },

  'problem-solving-mini-project': {
    slug: 'problem-solving-mini-project',
    title: 'Problem Solving Mini Project',
    moduleSlug: 'programming-problem-solving',
    moduleName: 'Programming Problem Solving',
    estimatedTime: '25 mins',
    difficulty: 'Beginner',
    introduction: `You have learned the entire theoretical lifecycle of programming problem solving: analyzing inputs, isolating constraints, decomposing steps, sketching algorithms, writing pseudocode, tracing execution, and scientific debugging.

Now, it is time to combine all of these cognitive skills into a single cohesive, practical coding challenge. In this lesson, we will build a **Student Performance Analyzer** project, walking through the entire conceptual design pipeline before we write a single line of Java code!`,
    whyThisTopicMatters: {
      whyItExists: 'Siloed theory is useless if you cannot combine it to solve a real task. Walking through a mini-project design teaches you how software architectures are planned and built in professional environments.',
      problemSolved: 'This project bridges the gap between basic control flow concepts and structured programming, preparing you to tackle complex arrays and collections in future modules with complete confidence.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s define the project specifications first: "We need a program that accepts three exam scores for a student. The program must validate the scores, calculate the average, determine if the student passes with honors (average >= 80), simply passes (average >= 50), or fails. It must also identify and print the single highest score achieved."'
      },
      {
        type: 'info_card',
        title: 'Project Engineering Pipeline'
      },
      {
        type: 'bullet_list',
        title: 'The Conceptual Design Steps:',
        items: [
          '**Step 1: Isolate Specifications** — Inputs: score1, score2, score3 (decimals). Outputs: Average score, Highest score, Academic status message. Constraints: Scores must be between 0 and 100.',
          '**Step 2: Decomposition Checklist** — 1. Retrieve the inputs. 2. Verify all inputs respect constraints. 3. Find the maximum score. 4. Calculate average. 5. Determine passing status. 6. Display visual report.',
          '**Step 3: Draft Pseudocode** — Write down fake code mapping variables, comparison tests, and arithmetic procedures.',
          '**Step 4: Translate and Code** — Write standard, clean Java code to execute the finalized pseudocode.'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Project Step 3: Drafting the Pseudocode',
        language: 'java',
        code: `/*
  PSEUDOCODE:
  ---------------------------------------------
  DECLARE s1 = 82, s2 = 95, s3 = 71
  
  IF s1 < 0 OR s1 > 100 OR s2 < 0 OR s2 > 100 OR s3 < 0 OR s3 > 100 THEN
      PRINT "Error: Invalid Scores"
      STOP
  ENDIF
  
  // Find highest score
  DECLARE max = s1
  IF s2 > max THEN
      max = s2
  ENDIF
  IF s3 > max THEN
      max = s3
  ENDIF
  
  // Calculate average
  DECLARE avg = (s1 + s2 + s3) / 3
  
  // Evaluate status
  DECLARE status = "Fail"
  IF avg >= 80 THEN
      status = "Pass with Honors"
  ELSE IF avg >= 50 THEN
      status = "Pass"
  ENDIF
  
  PRINT "Report Cards Statistics"
  PRINT "Average: " + avg
  PRINT "Highest: " + max
  PRINT "Status: " + status
  ---------------------------------------------
*/`,
        explanation: 'This pseudocode is incredibly clean and easy to read. It handles inputs, validates them, uses a clever comparison chain to isolate the maximum, calculates averages, and maps the logic tree perfectly.'
      },
      {
        title: 'Project Step 4: Final Java Code Translation',
        language: 'java',
        code: `public class PerformanceAnalyzer {
    public static void main(String[] args) {
        // Step 1: Inputs
        double s1 = 82.0;
        double s2 = 95.0;
        double s3 = 71.0;
        
        // Step 2: Validate Constraints
        if (s1 < 0 || s1 > 100 || s2 < 0 || s2 > 100 || s3 < 0 || s3 > 100) {
            System.out.println("Error: All scores must reside between 0 and 100.");
            return;
        }
        
        // Step 3: Find Highest Score (Algorithm execution)
        double maxScore = s1;
        if (s2 > maxScore) {
            maxScore = s2;
        }
        if (s3 > maxScore) {
            maxScore = s3;
        }
        
        // Step 4: Calculate Average
        double averageScore = (s1 + s2 + s3) / 3.0;
        
        // Step 5: Determine Status
        String status = "Fail";
        if (averageScore >= 80.0) {
            status = "Pass with Honors";
        } else if (averageScore >= 50.0) {
            status = "Pass";
        }
        
        // Step 6: Output Visual Report
        System.out.println("==========================================");
        System.out.println("       STUDENT PERFORMANCE REPORT         ");
        System.out.println("==========================================");
        System.out.println("Input Scores: " + s1 + ", " + s2 + ", " + s3);
        System.out.println("Average Score: " + Math.round(averageScore * 100.0) / 100.0 + "%");
        System.out.println("Highest Score Score: " + maxScore + "%");
        System.out.println("Academic Outcome: " + status);
        System.out.println("==========================================");
    }
}`,
        explanation: 'Our final Java code is clean, robust, and translates our pseudocode perfectly. It enforces constraints on line 9, handles algorithmic evaluations, and prints a beautifully styled text dashboard.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Mini-Project Execution Blueprint',
        description: 'Visualizing how our performance analyzer handles a single student record.',
        elements: {
          steps: [
            { id: '1', label: 'Start Program', desc: 'Read score values.', type: 'start' },
            { id: '2', label: 'Verify Bounds (0-100)', desc: 'IF invalid, stop program with error.', type: 'decision' },
            { id: '3', label: 'Isolate Highest Score', desc: 'Iteratively compare s1, s2, and s3 values.', type: 'action' },
            { id: '4', label: 'Map Passing Status', desc: 'Apply conditionals to average score.', type: 'decision' },
            { id: '5', label: 'Print visual dashboard', desc: 'Display statistics to console and terminate.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Failing to handle decimals correctly when dividing.',
        whyItHappens: 'Beginners write "(s1 + s2 + s3) / 3" using whole integers, which causes Java to perform integer division and discard decimal precision.',
        howToAvoid: 'Always divide by "3.0" instead of "3" to ensure Java promotes the calculation to a floating-point double value.'
      }
    ],
    practiceExercise: {
      title: 'Project Extensions Challenge',
      tasks: [
        'Dry run the PerformanceAnalyzer code above with these scores: s1 = 45, s2 = 50, s3 = 55. What is the calculated average? What is the passing status? What is the highest score?',
        'Add a new constraint check to the project code: If any of the scores is exactly 0, print an additional special warning: "Academic Alert: Student has a zero score!".',
        'In your own words, describe why working through the analysis and pseudocode stages made writing the final Java class simple and error-free.'
      ]
    },
    summary: [
      'The Performance Analyzer project combines inputs, constraint checks, and comparisons into a cohesive logical application.',
      'Always design the project algorithm and pseudocode before translating ideas to physical syntax.',
      'Correctly validating bounds and dividing decimals ensures the program produces precise, enterprise-ready results.'
    ]
  }
};
