import { DetailedLessonContent } from '../../types';

export const CONTROL_FLOW_LESSONS: Record<string, DetailedLessonContent> = {
  'introduction-to-control-flow': {
    slug: 'introduction-to-control-flow',
    title: 'Introduction to Control Flow',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Up to this point, our Java programs have behaved like straight highways. The JVM has executed every single line of code in sequence, from top to bottom, exactly once.

But real-world software needs to make decisions, handle alternate routes, and repeat processes. Control Flow refers to the mechanisms in Java that allow us to break out of this rigid top-to-bottom sequence and direct the computer dynamically. This is where your code begins to show true intelligence!`,
    whyThisTopicMatters: {
      whyItExists: 'In raw sequential code, you cannot handle dynamic situations. A login form would crash or fail because it could not choose between "logging in" and "showing an error." A bank ATM would only allow one transaction before shutting down because it could not repeat its menu.',
      problemSolved: 'Control flow structures (conditionals and loops) solve this by giving your programs logic pathways. They allow you to define conditions under which code should run, bypass other blocks, or loop over instructions thousands of times.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'To understand control flow, let\'s look at the two primary types of steering systems we can build in our code:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Decision Making (Conditionals)',
          definition: 'Structures that evaluate a boolean expression (true or false) and choose an execution path based on the outcome.',
          explanation: 'These include "if", "if-else", and "switch" statements. They act like forks in the road.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Repetition (Loops)',
          definition: 'Structures that repeat a block of code multiple times as long as a specified condition remains true.',
          explanation: 'These include "for", "while", and "do-while" loops. They act like roundabouts or track laps.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'All control flow decisions in Java rely entirely on boolean expressions—statements that must ultimately evaluate to either true or false.'
      },
      {
        type: 'bullet_list',
        title: 'The Relational Operators (The Logical Compass)',
        items: [
          '**== (Equal to)**: Tests if two values are identical (e.g., `x == 5`). Note the double equals sign!',
          '**!= (Not equal to)**: Tests if two values are different (e.g., `x != 10`).',
          '**> and < (Greater/Less than)**: Standard mathematical comparisons.',
          '**>= and <= (Greater/Less than or equal to)**: Standard boundary comparisons.'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Comparing Sequential and Conditional Code',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Sequential flow (always runs)
        System.out.println("Program Started.");

        // Decision flow (runs selectively)
        int score = 85;
        if (score >= 50) {
            System.out.println("Status: Passed!");
        }

        System.out.println("Program Finished.");
    }
}`,
        explanation: 'The JVM prints "Program Started." and "Program Finished." no matter what. However, "Status: Passed!" is conditional—it only prints because the variable score (85) satisfies the boolean condition score >= 50.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Sequential vs. Conditional Flow',
        description: 'See the visual difference between a straight-line execution and a branching decision point.',
        elements: {
          steps: [
            { id: '1', label: 'Start', desc: 'Initialize program.', type: 'start' },
            { id: '2', label: 'Run Line 1', desc: 'Print program start.', type: 'action' },
            { id: '3', label: 'Check Score', desc: 'Is score >= 50?', type: 'decision' },
            { id: '4', label: 'Print Passed', desc: 'Only runs if check was true.', type: 'action' },
            { id: '5', label: 'Run Line 3', desc: 'Print program end.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using a single equals sign (=) instead of a double equals sign (==) for comparison.',
        whyItHappens: 'In mathematics, a single "=" represents equality. In Java, a single "=" is the assignment operator used to store values, while "==" is the relational operator used to compare values.',
        howToAvoid: 'Remember: "=" is for storing, "==" is for comparing!',
        codeSnippet: {
          bad: `// ❌ COMPILE ERROR! Trying to assign 10 to x inside a conditional check
int x = 5;
if (x = 10) { 
    System.out.println("Is ten");
}`,
          good: `// ✓ Correct: Compiles and performs comparison
int x = 5;
if (x == 10) {
    System.out.println("Is ten");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Identifying Decision Expressions',
      tasks: [
        'Write down the boolean result (true or false) for: `int a = 12; int b = 15;` checking `a < b`, `a == b`, and `a != b`.',
        'Describe in your own words how a loop differs from a conditional statement.',
        'Why does Java use "==" for checking equality instead of a single "="?',
        'Draw a simple logical flowchart for a vending machine deciding if it should dispense a soda based on the insert money balance.',
        'What error happens if you pass an integer variable directly into an "if" statement check (e.g. `if (myInteger)`)?'
      ]
    },
    summary: [
      'Control Flow structures let your code break out of top-to-bottom sequential execution.',
      'Conditionals (if-else) make branching decisions, while Loops (for, while) repeat processes.',
      'All logical branches are steered by boolean expressions that resolve to true or false.'
    ]
  },

  'if-statements': {
    slug: 'if-statements',
    title: 'if Statements',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `The "if" statement is the simplest and most basic form of decision-making in Java. It allows you to designate a specific block of code to run only when a certain condition is true.

If the condition is met (true), the code block executes. If the condition is not met (false), the JVM completely skips that code block and proceeds directly to the code that follows it.`,
    whyThisTopicMatters: {
      whyItExists: 'Without "if" statements, a program is completely rigid. It cannot adapt to user inputs, check thresholds, or perform basic verification checks.',
      problemSolved: 'The "if" statement lets you guard blocks of code with a logical gate. It solves the problem of selecting optional behaviors, such as showing warning messages, validating passwords, or updating records only when necessary.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The syntax of an "if" statement requires the keyword "if", followed by a boolean condition enclosed in parentheses, and finally a set of curly braces containing the code to execute:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'if Syntax',
          definition: 'if (booleanCondition) { // code to run if true }',
          explanation: 'The parentheses must contain an expression that produces a boolean (true or false). The curly braces define the boundaries of the conditional block.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Code Block Scope',
          definition: 'The region of code wrapped in curly braces { } belonging to a specific control structure.',
          explanation: 'Any variables declared inside this block are local to this block and cannot be accessed outside of it.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Do not put a semicolon immediately after the parentheses of your "if" condition! Doing so terminates the conditional statement early, causing the code block to run unconditionally.'
      },
      {
        type: 'bullet_list',
        title: 'Anatomy of an if Check',
        items: [
          '**Keyword**: Starts with `if` (lowercase).',
          '**Condition**: Placed inside `( )` and must evaluate to a boolean.',
          '**Braces**: Encapsulate instructions inside `{ }`. Indenting these instructions is vital for readability!'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Checking a Numeric Threshold',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int accountBalance = 120;
        int withdrawalAmount = 50;

        // If condition check
        if (withdrawalAmount <= accountBalance) {
            System.out.println("Transaction approved!");
            accountBalance -= withdrawalAmount;
            System.out.println("Remaining Balance: $" + accountBalance);
        }
    }
}`,
        explanation: 'Because withdrawalAmount (50) is less than or equal to accountBalance (120), the boolean condition is true. The lines inside the curly braces execute, printing the approval message and updating the balance.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Single Branch "if" Flow',
        description: 'Visualizing how a single "if" block acts as an optional detour.',
        elements: {
          steps: [
            { id: '1', label: 'Check Condition', desc: 'Is withdrawal <= balance?', type: 'decision' },
            { id: '2', label: 'Execute Block', desc: 'Approve and deduct funds (only runs if true).', type: 'action' },
            { id: '3', label: 'Resume', desc: 'Proceed with subsequent program lines.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting a semicolon directly after the "if" condition parentheses.',
        whyItHappens: 'Beginners are trained to end Java statements with semicolons, and mistakenly add them to the "if" line.',
        howToAvoid: 'Never put a semicolon after the parentheses of an "if", "for", or "while" loop statement.',
        codeSnippet: {
          bad: `// ❌ BUG: Semicolon terminates the if check. The block will ALWAYS run!
int age = 15;
if (age >= 18); {
    System.out.println("You can vote!"); // Prints even though age is 15!
}`,
          good: `// ✓ Correct: No semicolon after condition
int age = 15;
if (age >= 18) {
    System.out.println("You can vote!"); // Skip safely
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Writing Simple Conditions',
      tasks: [
        'Write an "if" statement that checks if a variable named `temperature` is below 0, and if so, prints "Warning: Freezing temperature!".',
        'Create a boolean variable named `isLoggedIn` and write an "if" check that prints "Welcome back!" if it is true.',
        'What happens if you omit the curly braces on an "if" statement? Test this by writing an "if" check with multiple statements but no braces.',
        'Write a program that initializes a variable `speedLimit` to 60 and `currentSpeed` to 75. If the current speed exceeds the limit, print "Slowing down...".',
        'Explain why indenting code inside an "if" statement block is important even if the compiler doesn\'t strictly require it.'
      ]
    },
    summary: [
      'An "if" statement executes a block of code if, and only if, its condition is true.',
      'Curly braces { } define the boundary scope of statements belonging to that "if" block.',
      'Omitting braces is legal for a single statement, but using braces is highly recommended to prevent bugs.'
    ]
  },

  'if-else-statements': {
    slug: 'if-else-statements',
    title: 'if-else Statements',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A single "if" statement is great for executing optional actions, but often we face a two-way split. We want to execute one action if a condition is true, and a completely different action if that condition is false.

This is where the "if-else" statement comes in. It guarantees that exactly one of two mutually exclusive code blocks will execute.`,
    whyThisTopicMatters: {
      whyItExists: 'In real life, we don\'t just make "optional" choices. We choose alternative paths. For example: IF your passcode is correct, grant access; ELSE show an error message. A system cannot simply ignore the false case.',
      problemSolved: 'The "else" keyword provides a clear, robust fallback path. It avoids having to write two separate "if" statements, which is inefficient and prone to logical errors if variables change mid-execution.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The "if-else" structure pairs an "if" block with an "else" block. If the "if" condition is true, its block runs and the "else" block is ignored. If it is false, the "if" block is skipped and the "else" block runs:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'else Keyword',
          definition: 'A control keyword that designates a fallback block of code to run only if the preceding "if" boolean condition evaluates to false.',
          explanation: 'The "else" keyword has no condition of its own. It acts as a catch-all for the false case of the "if" condition.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Mutually Exclusive',
          definition: 'A logical relationship where only one of multiple events or code blocks can happen at a time.',
          explanation: 'In an "if-else" structure, it is physically impossible for both blocks to run, and impossible for neither to run.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'The "else" block must follow immediately after the closing brace of the "if" block. You cannot write other statements between them!'
      }
    ],
    codeExamples: [
      {
        title: 'Verifying Age Limits',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int age = 16;

        if (age >= 18) {
            System.out.println("You are eligible to vote!");
        } else {
            System.out.println("You must be at least 18 years old to vote.");
            int yearsLeft = 18 - age;
            System.out.println("Please register in " + yearsLeft + " year(s).");
        }
    }
}`,
        explanation: 'Since age is 16, the condition age >= 18 evaluates to false. The JVM bypasses the "if" block completely and jumps to the "else" block, executing the voting warning and printing the calculation.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Two-Way Branching "if-else"',
        description: 'See how the program path splits into two mutually exclusive channels before merging back.',
        elements: {
          steps: [
            { id: '1', label: 'Evaluate Condition', desc: 'Is age >= 18?', type: 'decision' },
            { id: '2', label: 'Branch True: Vote Block', desc: 'Runs only if true.', type: 'action' },
            { id: '3', label: 'Branch False: Wait Block', desc: 'Runs only if false.', type: 'action' },
            { id: '4', label: 'Merge', desc: 'Subsequent code continues.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Trying to add a condition to the "else" statement, like "else (age < 18)".',
        whyItHappens: 'Beginners sometimes want to be explicit about what condition causes the "else" block to execute.',
        howToAvoid: 'Remember that "else" represents the exact opposite of the "if" condition. It does not take conditions. If you need a secondary check, you must use "else if" (covered in the next lesson).',
        codeSnippet: {
          bad: `// ❌ COMPILE ERROR! else cannot take a condition
int balance = 50;
if (balance > 100) {
    System.out.println("Gold member");
} else (balance <= 100) {
    System.out.println("Standard member");
}`,
          good: `// ✓ Correct: else handles everything that is not covered by the if condition
int balance = 50;
if (balance > 100) {
    System.out.println("Gold member");
} else {
    System.out.println("Standard member");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Writing Yes/No Decisions',
      tasks: [
        'Write a program that takes an integer `score`. If score is 50 or above, print "Pass", otherwise print "Fail".',
        'Write an if-else statement that checks if a number `number` is even or odd using the remainder operator (`%`). Hint: `number % 2 == 0` is even.',
        'Create a scenario where a variable `isWeekend` determines your alarm clock time. Print "Alarm set to 9:00 AM" if it is the weekend, else print "Alarm set to 6:30 AM".',
        'What compile error happens if you insert a print statement between the closing brace of an "if" and the "else" keyword?',
        'Describe in your own words why writing a single "if-else" is better than writing two independent "if" statements to check opposite conditions.'
      ]
    },
    summary: [
      'The "if-else" statement provides a clear two-way branch for mutual exclusivity.',
      'The "else" block acts as a logical catch-all that runs only if the "if" condition is false.',
      'The "else" keyword does not take a boolean condition of its own.'
    ]
  },

  'else-if-statements': {
    slug: 'else-if-statements',
    title: 'else-if Statements',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Life isn't always a simple yes-or-no question. Often, we are faced with multiple sequential options. For example, assigning letter grades (A, B, C, D, F) requires checking multiple thresholds in sequence.

The "else-if" structure allows you to chain multiple conditions together. The JVM checks each condition in order from top to bottom. As soon as it finds one that is true, it executes its block and completely skips the rest of the chain.`,
    whyThisTopicMatters: {
      whyItExists: 'When there are more than two paths, a single "if-else" is insufficient. While you could write many independent "if" statements, the computer would evaluate all of them, which is slow and can lead to multiple blocks executing incorrectly.',
      problemSolved: 'Chaining with "else-if" creates a structured decision tree. It ensures that only the first matching condition executes, conserving processing power and preventing logical overlaps.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'An "else-if" chain can have one "if" statement, any number of "else-if" statements, and an optional final "else" statement acting as a catch-all for when none of the conditions match:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'else-if',
          definition: 'A control structure that performs a secondary boolean check if all preceding "if" or "else-if" checks have evaluated to false.',
          explanation: 'It allows you to build multi-branch decision structures. Each "else-if" must have its own condition inside parentheses.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Short-Circuit Evaluation',
          definition: 'The execution pattern where the JVM exits a conditional chain as soon as a single true condition is met, skipping all subsequent checks.',
          explanation: 'Even if multiple conditions in the chain could be true, only the first matching block from the top will execute.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'The order of your conditions is highly critical in an "else-if" chain! Place your most restrictive conditions at the top, or they might be shadowed by broader checks.'
      }
    ],
    codeExamples: [
      {
        title: 'Determining Grade Boundaries',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int examScore = 85;

        if (examScore >= 90) {
            System.out.println("Grade: A");
        } else if (examScore >= 80) {
            System.out.println("Grade: B"); // Runs and exits the chain!
        } else if (examScore >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
    }
}`,
        explanation: 'The JVM checks the first condition (85 >= 90), which is false. It moves to the next check (85 >= 80), which is true. It executes "Grade: B" and immediately skips the remaining checks. Note that while 85 is also >= 70, "Grade: C" does not execute because the chain has already exited.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Chained else-if Decision Tree',
        description: 'See how control flows from check to check, exiting immediately upon the first true match.',
        elements: {
          steps: [
            { id: '1', label: 'Check 1', desc: 'Is score >= 90?', type: 'decision' },
            { id: '2', label: 'Check 2', desc: 'Is score >= 80?', type: 'decision' },
            { id: '3', label: 'Block B', desc: 'Print Grade B (Runs and skips subsequent steps).', type: 'action' },
            { id: '4', label: 'Check 3', desc: 'Is score >= 70? (Skipped)', type: 'decision' },
            { id: '5', label: 'Exit Chain', desc: 'Subsequent code continues.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting conditions in the wrong logical order, causing some blocks to become unreachable.',
        whyItHappens: 'A broader condition placed at the top of the chain will catch values intended for narrower checks below.',
        howToAvoid: 'Always order your checks from most specific to least specific.',
        codeSnippet: {
          bad: `// ❌ BUG: Broader check at the top makes "A grade" unreachable!
int score = 95;
if (score >= 70) {
    System.out.println("Pass"); // Matches here and exits, ignoring the A check!
} else if (score >= 90) {
    System.out.println("Passed with an A!");
}`,
          good: `// ✓ Correct: Specific check placed at the top
int score = 95;
if (score >= 90) {
    System.out.println("Passed with an A!");
} else if (score >= 70) {
    System.out.println("Pass");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Building Multi-Branch Logic',
      tasks: [
        'Write a program that takes an integer `temperature`. If temp is > 30, print "Hot", if > 15, print "Warm", if > 0, print "Cool", otherwise print "Cold".',
        'In your temperature program, what happens if you set the temperature to 35 and place the check `temperature > 0` at the very top of your chain?',
        'Write an else-if chain that categorizes an age variable: below 13 is "Child", below 20 is "Teenager", below 65 is "Adult", else is "Senior".',
        'Explain the role of the final optional "else" block in an "else-if" chain.',
        'Draw a conceptual flow diagram illustrating how a bank check-deposit system might decide fee charges based on the deposit amount.'
      ]
    },
    summary: [
      'The "else-if" statement chains multiple mutually exclusive conditions in sequence.',
      'Only the first matching condition executes; once met, the entire rest of the chain is skipped.',
      'An optional final "else" block acts as a fallback if no other condition is true.'
    ]
  },

  'nested-if-statements': {
    slug: 'nested-if-statements',
    title: 'Nested if Statements',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `Sometimes, a decision depends on another decision. For example, to rent a car, you must first be at least 21 years old. IF you are 21 or older, you must then check a second condition: do you have a valid driver's license?

Placing an "if" statement inside another "if" statement is called **nesting**. This allows you to build highly detailed, multi-layered logical criteria.`,
    whyThisTopicMatters: {
      whyItExists: 'In complex programs, checking all conditions in a single flat check is difficult or impossible, especially if you need to perform actions at intermediate steps.',
      problemSolved: 'Nesting solves the problem of sequential requirements. It allows you to establish a primary gateway condition, and only perform secondary checks once the primary criteria are successfully met.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'When nesting conditionals, keep close track of your curly braces. An "else" block will always pair with the nearest open "if" statement that belongs to the same code scope:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Nested if',
          definition: 'An if statement that is placed inside the code block of another if or else statement.',
          explanation: 'It creates a hierarchical decision structure where the inner check is completely dependent on the outer check.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Dangling else Problem',
          definition: 'The potential ambiguity in nesting where a developer is unsure which "if" statement a trailing "else" belongs to.',
          explanation: 'Java resolves this by always associating an "else" with the nearest preceding "if" in the same block, which is why explicit curly braces are crucial!'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'If you find yourself nesting more than three levels deep, stop and consider using Logical Operators (like && or ||) or splitting your code into separate methods. Deep nesting, often called the "Pyramid of Doom," makes code extremely difficult to read and maintain.'
      }
    ],
    codeExamples: [
      {
        title: 'Verifying Car Rental Qualifications',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int age = 22;
        boolean hasLicense = true;

        if (age >= 21) {
            System.out.println("Age requirement met.");
            
            // Nested Check
            if (hasLicense) {
                System.out.println("Rental Approved!");
            } else {
                System.out.println("Rental Declined: Missing valid driver's license.");
            }
            
        } else {
            System.out.println("Rental Declined: Underage.");
        }
    }
}`,
        explanation: 'First, the outer "if" checks if age (22) is >= 21. Since it is true, it prints "Age requirement met." and enters the block. Next, the inner "if" checks hasLicense (true). Since it is true, it prints "Rental Approved!".'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'Nested Conditional Flowchart',
        description: 'See how the secondary decision is physically nested inside the success branch of the primary gateway.',
        elements: {
          steps: [
            { id: '1', label: 'Primary Check', desc: 'Is age >= 21?', type: 'decision' },
            { id: '2', label: 'Print Age OK', desc: 'Only runs if age check is true.', type: 'action' },
            { id: '3', label: 'Secondary Check', desc: 'Is hasLicense true?', type: 'decision' },
            { id: '4', label: 'Approve', desc: 'Approved (both conditions met).', type: 'action' },
            { id: '5', label: 'Decline License', desc: 'Declined due to license check.', type: 'action' },
            { id: '6', label: 'Decline Age', desc: 'Declined due to age check.', type: 'action' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Confusing which "if" statement an "else" block belongs to due to poor formatting or missing braces.',
        whyItHappens: 'Without curly braces, the compiler compiles based on its strict syntactic rules, while the developer is misled by visual indentation.',
        howToAvoid: 'Always use curly braces { } for all outer and inner conditionals, and keep your indentation perfectly aligned.',
        codeSnippet: {
          bad: `// ❌ AMBIGUOUS: Looks like the else pairs with the age check, but syntactically it pairs with the license check!
int age = 18;
boolean hasLicense = false;
if (age >= 21)
    if (hasLicense)
        System.out.println("Approved");
else
    System.out.println("Declined: Underage"); // Prints "Declined: Underage" because hasLicense is false, even though age is 18!`,
          good: `// ✓ Correct: Explicit braces remove all ambiguity
int age = 18;
boolean hasLicense = false;
if (age >= 21) {
    if (hasLicense) {
        System.out.println("Approved");
    }
} else {
    System.out.println("Declined: Underage");
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Writing Nested Checks',
      tasks: [
        'Write a program that takes an integer `year` and a boolean `isLeapYear`. If isLeapYear is true, perform a nested check on `year` being divisible by 400.',
        'Write a nested conditional block representing an online checkout: if item is in stock (boolean), check account balance. If balance is sufficient, print "Purchase complete", otherwise print "Insufficient funds". If item is out of stock, print "Item unavailable".',
        'Simplify the following nested code into a single "if" statement using the logical AND (`&&`) operator: `if (a == 5) { if (b == 10) { System.out.println("Both met"); } }`.',
        'Describe what the "Dangling else" problem is in programming languages like Java.',
        'Identify a security login flow (checking username first, then password) and write it down as a nested if-else structure in Java syntax.'
      ]
    },
    summary: [
      'Nested "if" statements allow you to perform secondary checks after primary gates are passed.',
      'Java associates an "else" with the nearest preceding "if" within the same block scope.',
      'Always use curly braces to keep your nesting structure safe, readable, and error-free.'
    ]
  },

  'switch-statements': {
    slug: 'switch-statements',
    title: 'switch Statements',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '14 mins',
    difficulty: 'Beginner',
    introduction: `When you need to test a single variable against many potential individual values, a long "else-if" chain can become repetitive and messy. For example, translating a day number (1 to 7) into a day name (Monday to Sunday) requires seven distinct blocks.

The "switch" statement was designed specifically for this scenario. It acts like a multi-way switchboard, matching an expression against named cases and jumping directly to the corresponding instructions.`,
    whyThisTopicMatters: {
      whyItExists: 'Writing `else if (day == 1) ... else if (day == 2) ... else if (day == 3)` is verbose and hard to read. It requires repeating the variable name and comparison operator over and over.',
      problemSolved: 'The "switch" statement provides a clean, highly readable tabular structure. Under the hood, the compiler can optimize switch statements using a mechanism called a jump table, which executes much faster than scanning an else-if chain line-by-line.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s examine the standard syntax of a switch statement, including the critical use of the "case", "break", and "default" keywords:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'switch Expression',
          definition: 'The variable or value being evaluated, placed in parentheses after the switch keyword.',
          explanation: 'Allowed types in Java include byte, short, char, int, String, and Enums.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'break Keyword',
          definition: 'A control statement that terminates the active switch block or loop, shifting execution immediately to the code outside.',
          explanation: 'Forgetting a break statement causes execution to "fall through" into the subsequent case blocks.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'default Case',
          definition: 'An optional catch-all case inside a switch block that executes if no other case matches the expression.',
          explanation: 'It acts exactly like the final "else" block in an else-if chain.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Fall-Through Behavior: If you do not write a "break" statement at the end of a case block, the JVM will continue running the instructions of the next cases in order, even if those case labels do not match the expression! This is occasionally useful, but usually a bug.'
      }
    ],
    codeExamples: [
      {
        title: 'Matching Menu Choices',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int selection = 2;

        switch (selection) {
            case 1:
                System.out.println("Opening Savings Account...");
                break;
            case 2:
                System.out.println("Checking Balance...");
                break; // Exit switch block
            case 3:
                System.out.println("Processing Wire Transfer...");
                break;
            default:
                System.out.println("Invalid Selection. Please try again.");
                break;
        }
    }
}`,
        explanation: 'The switch evaluates selection (2) and jumps directly to case 2, printing "Checking Balance...". The "break" statement then immediately halts the switch block and prevents the code from falling through to case 3.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'switch vs. else-if Chain',
        description: 'How a switch statement compares to an equivalent else-if chain.',
        elements: {
          headers: ['Feature', 'switch Statement', 'else-if Chain'],
          rows: [
            ['Best Use Case', 'Comparing a single variable against many fixed values', 'Evaluating complex inequalities or multiple variables'],
            ['Readability', 'High (clean, column-based tabular formatting)', 'Lower (verbose, repetitive variable checks)'],
            ['Variable Types', 'Restricted to int, char, String, etc.', 'Any types and arbitrary expressions'],
            ['Under-the-hood Speed', 'Fast (can utilize jump tables in memory)', 'Slower (evaluates each check in sequence)']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the "break" statement at the end of a case block, causing unintentional fall-through.',
        whyItHappens: 'It is easy to forget that case blocks do not automatically exit when they finish their statements.',
        howToAvoid: 'Develop a habit of writing "case X: ... break;" as a single structural template before typing your instructions.',
        codeSnippet: {
          bad: `// ❌ BUG: Forgetting break statements causes both items to print!
int itemCode = 1;
switch (itemCode) {
    case 1:
        System.out.println("Print Item 1"); // Executes
    case 2:
        System.out.println("Print Item 2"); // Falls through and executes too!
}`,
          good: `// ✓ Correct: Explicit break statements isolate each case
int itemCode = 1;
switch (itemCode) {
    case 1:
        System.out.println("Print Item 1");
        break;
    case 2:
        System.out.println("Print Item 2");
        break;
} `
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Creating a Days-of-Week Converter',
      tasks: [
        'Write a switch statement that takes an integer `dayNumber` (1-7) and prints the corresponding day name (1 -> "Monday", etc.). Add a default case for invalid numbers.',
        'Modify your program so that weekdays (1-5) all print "Weekday" and weekend days (6-7) print "Weekend" by intentionally utilizing fall-through.',
        'Can you use a switch statement to check if a variable is greater than 100? Why or why not?',
        'Write a switch statement that evaluates a String variable named `direction` ("NORTH", "SOUTH", "EAST", "WEST") and prints the movement update.',
        'Explain what happens if a switch expression does not match any case label, and there is no default case written.'
      ]
    },
    summary: [
      'The "switch" statement evaluates a single expression and jumps directly to a matching case.',
      'Always use "break" statements to prevent execution from falling through to other cases.',
      'The "default" case acts as a catch-all if no cases match, similar to an "else" block.'
    ]
  },

  'while-loops': {
    slug: 'while-loops',
    title: 'while Loops',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `So far, we have covered decisions. Now, let's explore repetition! A loop repeats a block of code as long as a certain condition remains true.

The "while" loop is the most basic repetition structure in Java. It checks its condition *before* executing the loop body. If the condition is true, it runs the block, then loops back to check the condition again. This cycle repeats until the condition evaluates to false.`,
    whyThisTopicMatters: {
      whyItExists: 'In many situations, you don\'t know how many times a process needs to repeat. For example, a game loop should run as long as the user hasn\'t clicked "Quit." A data reader should read as long as there is text in a file.',
      problemSolved: 'The "while" loop solves this by providing condition-controlled repetition. It avoids having to duplicate code blocks manually, allowing programs to run dynamically for seconds, hours, or days based on state.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The syntax of a "while" loop requires the keyword "while" followed by a condition in parentheses, and a body wrapped in braces. Inside the body, you must update a variable so that the condition eventually becomes false:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'while Loop Syntax',
          definition: 'while (booleanCondition) { // code to repeat }',
          explanation: 'The condition is evaluated before every single iteration. If it starts as false, the loop body never runs even once.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Infinite Loop',
          definition: 'A loop whose condition never evaluates to false, causing the program to repeat indefinitely until system memory or resources are exhausted.',
          explanation: 'This usually occurs when you forget to update your loop control variable inside the loop body.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Ensuring Loop Termination: Always ensure your loop contains an update statement (like incrementing or decrementing a counter) that moves the control state closer to making the condition false.'
      },
      {
        type: 'bullet_list',
        title: 'The Three Essential Loop Elements',
        items: [
          '**Initialization**: Setting up a control variable before the loop starts (e.g., `int count = 1;`).',
          '**Condition**: The boolean gate checked before each lap (e.g., `while (count <= 5)`).',
          '**Update**: Modifying the control variable inside the loop (e.g., `count++;`).'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'A Simple Countdown Loop',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int count = 3; // 1. Initialize

        // 2. Condition Check
        while (count > 0) {
            System.out.println("Counting down: " + count);
            count--; // 3. Update (reduces count by 1)
        }

        System.out.println("Blast off!");
    }
}`,
        explanation: 'The variable count starts at 3. The loop checks (3 > 0), which is true, prints, and decrements count to 2. It loops back, checks (2 > 0), prints, and decrements to 1. It checks (1 > 0), prints, and decrements to 0. It checks (0 > 0), which is false, and exits the loop to print "Blast off!"'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'while Loop Cyclic Pathway',
        description: 'See how execution loops back to the decision point until the condition evaluates to false.',
        elements: {
          steps: [
            { id: '1', label: 'Init count = 3', desc: 'Pre-loop setup.', type: 'start' },
            { id: '2', label: 'Is count > 0?', desc: 'Loop condition check.', type: 'decision' },
            { id: '3', label: 'Print & Decrement', desc: 'Executes loop body (decrement count).', type: 'action' },
            { id: '4', label: 'Exit Loop', desc: 'Condition evaluated to false, loop exits.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the update statement inside the loop, creating an infinite loop.',
        whyItHappens: 'It is easy to focus on the instructions you want to repeat and forget the housekeeping step that manages the counter.',
        howToAvoid: 'When writing a while loop, write the initialization, the condition, and the update statement *first*, then fill in the rest of your logic inside.',
        codeSnippet: {
          bad: `// ❌ BUG: Infinite Loop! count is always 1, so condition is always true. Program will freeze!
int count = 1;
while (count <= 3) {
    System.out.println("Count is: " + count);
    // Missing: count++;
}`,
          good: `// ✓ Correct: count increases on every cycle, terminating the loop safely
int count = 1;
while (count <= 3) {
    System.out.println("Count is: " + count);
    count++;
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Writing Simple Loops',
      tasks: [
        'Write a while loop that prints the numbers from 1 up to 10 on separate lines.',
        'Write a while loop that prints all even numbers between 2 and 20.',
        'Create a variable `balance = 100`. Write a while loop that subtracts 15 from balance as long as balance is >= 15, printing the balance at each step.',
        'What is an "infinite loop" and how can you stop an executing program that is stuck in one in your terminal?',
        'Write a while loop that prints the powers of 2 (2, 4, 8, 16, 32) up to 100.'
      ]
    },
    summary: [
      'A "while" loop repeats code as long as a specified boolean condition remains true.',
      'The loop condition is checked before entering the loop; if initially false, the body never runs.',
      'Always include an update statement inside the loop body to avoid infinite loops.'
    ]
  },

  'do-while-loops': {
    slug: 'do-while-loops',
    title: 'do-while Loops',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `A standard "while" loop checks its condition at the very beginning. If the condition is false on the first check, the loop body is completely skipped.

But sometimes, you need to execute a block of code *at least once*, and then decide if you should repeat it. This is exactly what the **do-while** loop is designed for. It checks its condition at the end of the loop cycle.`,
    whyThisTopicMatters: {
      whyItExists: 'Consider a game: you must play the game at least once before the program can ask "Do you want to play again?". A passcode system must prompt you for the pin at least once before checking if it is valid.',
      problemSolved: 'The do-while loop guarantees that the loop body executes at least once, bypassing the initial entry condition check. This avoids duplicate code setup that would otherwise be needed to force an initial run.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The do-while loop starts with the "do" keyword, followed by the loop body in braces, and ends with the "while" keyword, condition in parentheses, and a semicolon:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'do-while Syntax',
          definition: 'do { // code block } while (condition);',
          explanation: 'Note the semicolon at the very end of the while line! This is syntactically required to terminate the do-while statement.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Post-test Loop',
          definition: 'A loop structure that tests its conditional gate at the exit boundary rather than the entry boundary.',
          explanation: 'This guarantees that the loop body will always execute a minimum of one time.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Do not forget the semicolon after the "while(condition)" statement of a do-while loop. Omitting it will cause a compilation error.'
      }
    ],
    codeExamples: [
      {
        title: 'Prompting for Input',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        int dummyBalance = 0;

        // Force at least one run
        do {
            System.out.println("Processing transaction step...");
            dummyBalance += 50;
        } while (dummyBalance < 100);

        System.out.println("Finished. Final Balance: " + dummyBalance);
    }
}`,
        explanation: 'The JVM enters the do block unconditionally, printing the message and adding 50 to dummyBalance. It then evaluates the condition dummyBalance < 100 (50 < 100 is true), loops back to run the block again, and exits when dummyBalance reaches 100.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'do-while Post-test Flowchart',
        description: 'See how the loop body runs first before reaching the branching condition check.',
        elements: {
          steps: [
            { id: '1', label: 'Execute Body', desc: 'Process first loop run unconditionally.', type: 'action' },
            { id: '2', label: 'Verify Condition', desc: 'Is condition true?', type: 'decision' },
            { id: '3', label: 'Loop Back', desc: 'Repeat if true.', type: 'action' },
            { id: '4', label: 'Exit Loop', desc: 'Exit if false.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting the semicolon at the end of the "while(condition);" line.',
        whyItHappens: 'Developers are trained not to put semicolons after loop statement headers in standard "while" or "for" loops.',
        howToAvoid: 'Remember: do-while loops end at the bottom, so they need a semicolon to terminate the entire statement.',
        codeSnippet: {
          bad: `// ❌ COMPILE ERROR: Missing semicolon at the end
int x = 5;
do {
    System.out.println(x);
    x--;
} while (x > 0) // Missing ;`,
          good: `// ✓ Correct: Semicolon added at the end
int x = 5;
do {
    System.out.println(x);
    x--;
} while (x > 0);`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Comparing Loop Behaviors',
      tasks: [
        'Write a program that initializes `int count = 10;`. Write a standard while loop and a do-while loop checking `count < 5`. Compare their outputs.',
        'Write a do-while loop that prints numbers from 5 down to 1.',
        'Create a simulated ATM transaction loop: do print "Deducting fee...", while account is overdrawn (boolean). Ensure it runs once.',
        'Explain why a do-while loop is referred to as a "post-test" loop whereas a while loop is a "pre-test" loop.',
        'Write a do-while loop that doubles a variable `value` starting at 1, while `value` is less than 100.'
      ]
    },
    summary: [
      'A "do-while" loop is a post-test loop that executes its body first before checking the condition.',
      'The loop body is guaranteed to run at least once.',
      'The do-while loop requires a terminating semicolon at the very end of the "while (condition);" line.'
    ]
  },

  'for-loops': {
    slug: 'for-loops',
    title: 'for Loops',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    introduction: `When you know exactly how many times a loop needs to run before you start, the **for** loop is your best choice. It is the most common, structured, and compact looping system in Java.

The "for" loop combines the three essential elements of a loop—initialization, condition, and update—into a single line of code, making it extremely easy to read, manage, and prevent bugs.`,
    whyThisTopicMatters: {
      whyItExists: 'In a "while" loop, your counter variable is declared outside the loop, and incremented inside. This scatters your loop controls across different sections of code, increasing the risk of forgetting to update or polluting your class with unused variables.',
      problemSolved: 'The "for" loop groups all loop parameters together. It isolates the counter variable so it only exists inside the loop scope, and guarantees that updates occur automatically on every lap.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'The "for" statement header contains three distinct sections separated by semicolons: `for (initialization; condition; update) { ... }`:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'for Loop Header',
          definition: 'The structure in parentheses that defines the loop control parameters: for (int i = 0; i < 5; i++)',
          explanation: 'Section 1 initializes the counter. Section 2 tests the condition. Section 3 increments or decrements the counter after each lap.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Loop Index (i)',
          definition: 'The local variable (conventionally named "i") used to keep track of the current iteration count.',
          explanation: 'Because it is declared in the header, its scope is restricted to the loop. It is destroyed as soon as the loop exits.'
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'The name "i" stands for "index" or "iteration." If you nest loops, use "j", "k", and so on, following standard programming conventions.'
      },
      {
        type: 'bullet_list',
        title: 'The Execution Sequence of a for Loop',
        items: [
          '**1. Initialization**: Runs once when entering the loop (e.g., `int i = 1;`).',
          '**2. Condition Check**: Checks if condition is true. If false, exits immediately.',
          '**3. Body Execution**: Runs all the code inside the curly braces `{ }`.',
          '**4. Update**: Runs the increment/decrement statement (e.g., `i++`).',
          '**5. Repeat**: Jumps back to step 2 to re-evaluate the condition.'
        ]
      }
    ],
    codeExamples: [
      {
        title: 'Counting Iterations',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Run exactly 3 times
        for (int i = 1; i <= 3; i++) {
            System.out.println("Loop iteration: i = " + i);
        }
        System.out.println("Loop finished!");
    }
}`,
        explanation: '1. i initializes to 1. 2. Checks if 1 <= 3 (true). 3. Prints "Loop iteration: i = 1". 4. Increments i to 2. 5. Checks 2 <= 3 (true), prints, increments to 3. 6. Checks 3 <= 3 (true), prints, increments to 4. 7. Checks 4 <= 3 (false), exits loop!'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'for Loop Execution Lifecycle',
        description: 'Understand the exact chronological order of statements in a for loop header.',
        elements: {
          steps: [
            { id: '1', label: '1. Initialize Counter', desc: 'Runs only once (int i = 1).', type: 'start' },
            { id: '2', label: '2. Is i <= 3?', desc: 'Loop condition check.', type: 'decision' },
            { id: '3', label: '3. Execute Body', desc: 'Print statement runs.', type: 'action' },
            { id: '4', label: '4. Update: i++', desc: 'Counter increments.', type: 'action' },
            { id: '5', label: 'Exit Loop', desc: 'Terminates when check is false.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using commas instead of semicolons to separate the header parameters.',
        whyItHappens: 'Commas are standard list separators in English and other programming contexts.',
        howToAvoid: 'Remember that the for loop header must contain exactly two semicolons separating three distinct statements: (init; condition; update).',
        codeSnippet: {
          bad: `// ❌ COMPILE ERROR: Commas are invalid in the loop header
for (int i = 0, i < 5, i++) {
    System.out.println(i);
}`,
          good: `// ✓ Correct: Semicolons separate the three segments
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`
        }
      },
      {
        mistake: 'Trying to access the loop index variable outside the loop boundaries.',
        whyItHappens: 'Developers forget that the index variable scope is restricted strictly to the loop.',
        howToAvoid: 'If you need to use the final value of the index variable after the loop finishes, declare the variable *before* the loop header.',
        codeSnippet: {
          bad: `// ❌ COMPILE ERROR: i is out of scope here!
for (int i = 0; i < 3; i++) {
    System.out.println(i);
}
System.out.println("Final value: " + i);`,
          good: `// ✓ Correct: i remains accessible after the loop
int i;
for (i = 0; i < 3; i++) {
    System.out.println(i);
}
System.out.println("Final value: " + i);`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Building Count-Controlled Loops',
      tasks: [
        'Write a for loop that prints numbers from 1 to 10.',
        'Write a for loop that counts backwards, printing numbers from 10 down to 1.',
        'Write a for loop that prints only the odd numbers between 1 and 15.',
        'Create a program that calculates the sum of all numbers from 1 to 100 using a for loop. Print the final sum.',
        'Explain in your own words the concept of "variable scope" using the loop index variable as an example.'
      ]
    },
    summary: [
      'The "for" loop is ideal for count-controlled iteration where the exact number of cycles is known.',
      'The header groups initialization, condition, and update parameters together separated by semicolons.',
      'The loop index variable exists only within the loop block, protecting variable namespaces.'
    ]
  },

  'nested-loops': {
    slug: 'nested-loops',
    title: 'Nested Loops',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '15 mins',
    difficulty: 'Intermediate',
    introduction: `Just like you can nest "if" statements, you can also place a loop inside another loop! This is known as a **nested loop**.

For every single "lap" or iteration of the outer loop, the inner loop runs through its *entire* cycle from start to finish. This structure is incredibly powerful for working with grids, multi-dimensional coordinates, tables, and patterns.`,
    whyThisTopicMatters: {
      whyItExists: 'In many problems, you need to navigate multiple dimensions. For example, a chessboard is an 8x8 grid of rows and columns. To scan every square, you need to loop through row 1, column 1 through 8; then row 2, column 1 through 8; and so on.',
      problemSolved: 'Nested loops solve the problem of multi-dimensional indexing. They allow you to coordinate and iterate through matrix structures, print formatted patterns, and compare items in lists against other items.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s analyze the relationship between the outer loop and the inner loop using a simple coordinates example:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Outer Loop',
          definition: 'The primary loop that controls the slower-moving coordinate (e.g., rows).',
          explanation: 'It initiates, runs once, triggers the inner loop, and waits for the inner loop to completely finish before advancing to its next iteration.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'Inner Loop',
          definition: 'The secondary loop that runs inside the outer loop\'s body, controlling the faster-moving coordinate (e.g., columns).',
          explanation: 'It executes its entire lifecycle from initialization to termination on *every* single pass of the outer loop.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Be extremely careful to use different index variables for your outer and inner loops! Using the same index variable (e.g. "i") for both will corrupt your loop control counters and lead to broken loops or infinite loops.'
      }
    ],
    codeExamples: [
      {
        title: 'Printing a Grid of Coordinates',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        // Outer loop (Row counter)
        for (int row = 1; row <= 2; row++) {
            System.out.println("Starting Row: " + row);

            // Inner loop (Column counter)
            for (int col = 1; col <= 3; col++) {
                System.out.println("  - Row " + row + ", Col " + col);
            }
        }
    }
}`,
        explanation: 'The outer loop starts with row = 1. It enters its body and hits the inner loop. The inner loop runs completely for col = 1, 2, and 3, printing coordinates. The outer loop then increments row to 2, re-enters its body, and the inner loop resets and runs completely again for col = 1, 2, and 3.'
      }
    ],
    visualLearning: [
      {
        type: 'comparison_table',
        title: 'The Slower/Faster Clock Analogy',
        description: 'Think of nested loops like the hands of a clock.',
        elements: {
          headers: ['Clock Component', 'Equivalent Loop Structure', 'Advancement Rate'],
          rows: [
            ['Hour Hand', 'Outer Loop', 'Moves only 1 step after the minute hand completes 60 steps.'],
            ['Minute Hand', 'Inner Loop', 'Cycles through its complete range (0-59) repeatedly for every hour step.'],
            ['Time Elapsed', 'Total Iterations', 'Total executions = (Outer iterations) x (Inner iterations).']
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using the exact same variable name for both loop counters.',
        whyItHappens: 'Developers are accustomed to typing "int i = 0" as their default loop counter and repeat it inside.',
        howToAvoid: 'Use "i" for outer, "j" for inner, or use descriptive names like "row" and "col" to keep them distinct.',
        codeSnippet: {
          bad: `// ❌ BUG: Both loops use "i"! This corrupts the counter and causes a broken loop!
for (int i = 1; i <= 3; i++) {
    for (int i = 1; i <= 2; i++) { // Corrupts outer index "i"
        System.out.print(i);
    }
}`,
          good: `// ✓ Correct: Distinct variable names "i" and "j" prevent collision
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.println("i=" + i + ", j=" + j);
    }
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Drawing Geometric Patterns',
      tasks: [
        'Write a nested loop that prints a solid 3x4 grid of stars: `***` on 4 separate lines.',
        'Write a nested loop that prints a right triangle pattern: row 1 prints `*`, row 2 prints `**`, row 3 prints `***`. Hint: outer loop `row` goes 1 to 3, inner loop goes 1 up to `row`.',
        'Create a multiplication table from 1x1 up to 5x5 using nested loops.',
        'If an outer loop runs 5 times and an inner loop runs 10 times, what is the exact total number of times the inner loop\'s body code will execute?',
        'Describe how nested loops are used to scan two-dimensional grids like images or game boards.'
      ]
    },
    summary: [
      'A nested loop is a loop structure placed inside the code body of another loop.',
      'For every single pass of the outer loop, the inner loop runs through its complete cycle.',
      'Always use distinct index variables (like "row" and "col" or "i" and "j") to prevent collision.'
    ]
  },

  'break-and-continue': {
    slug: 'break-and-continue',
    title: 'break and continue',
    moduleSlug: 'control-flow',
    moduleName: 'Control Flow in Java',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    introduction: `Normally, a loop runs until its boundary condition evaluates to false. But sometimes, you need to alter this cycle from *inside* the loop based on sudden runtime events.

Java provides two powerful control statements for this purpose: **break** and **continue**. They let you bypass normal iteration flow instantly.`,
    whyThisTopicMatters: {
      whyItExists: 'Imagine searching a list of 1 million bank records for a specific transaction ID. Once you find it, there is no point in checking the remaining 999,999 records—doing so wastes system power.',
      problemSolved: '"break" lets you exit a loop immediately upon finding a result, conserving resources. "continue" lets you skip irrelevant iterations (like skipping negative values in a calculation) and jump straight to the next lap. This is perfect for search algorithms, error recovery, input filtering, and skipping specific data items.'
    },
    mainExplanation: [
      {
        type: 'paragraph',
        text: 'Let\'s examine the distinct roles of the "break" and "continue" keywords:'
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'break Statement',
          definition: 'A control statement that instantly terminates the entire loop, jumping to the first line of code following the loop block.',
          explanation: 'It completely breaks the loop. No more laps are executed.'
        }
      },
      {
        type: 'terminology_card',
        terminology: {
          keyword: 'continue Statement',
          definition: 'A control statement that halts the current loop iteration, skips any remaining lines inside the body, and advances directly to the next lap.',
          explanation: 'It does not terminate the loop. It just skips the rest of the current turn and proceeds with the next index update.'
        }
      },
      {
        type: 'callout',
        calloutType: 'important',
        text: 'Both break and continue must be wrapped inside an conditional "if" check inside the loop. If placed unconditionally, the compiler will flag "unreachable code" errors on the lines that follow them.'
      }
    ],
    codeExamples: [
      {
        title: 'Bypassing and Terminating Iterations',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Iterating from 1 to 5:");

        for (int i = 1; i <= 5; i++) {
            // Skip even numbers
            if (i % 2 == 0) {
                continue; // Skip the rest of this loop iteration
            }

            // Exit completely if we reach 5
            if (i == 5) {
                break; // Break the entire loop
            }

            System.out.println("  Processing odd number: " + i);
        }
        System.out.println("Loop finished!");
    }
}`,
        explanation: 'The loop starts. i=1 prints. i=2 triggers the first "if" check (2%2==0), executing "continue" which skips the print and moves directly to update i to 3. i=3 prints. i=4 hits continue and is skipped. i=5 triggers the second "if" check, executing "break" which terminates the loop.'
      }
    ],
    visualLearning: [
      {
        type: 'flow',
        title: 'break vs. continue Execution Paths',
        description: 'See how break exits the loop structure completely, while continue loops back to the index update.',
        elements: {
          steps: [
            { id: '1', label: 'Evaluate Condition', desc: 'Check if loop continues.', type: 'decision' },
            { id: '2', label: 'Check continue?', desc: 'If hit, skip remaining lines and jump to update.', type: 'decision' },
            { id: '3', label: 'Check break?', desc: 'If hit, terminate immediately.', type: 'decision' },
            { id: '4', label: 'Run Body', desc: 'Normal iteration statements run.', type: 'action' },
            { id: '5', label: 'Exit Loop', desc: 'Execution shifts to subsequent lines.', type: 'end' }
          ]
        }
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting statements in a loop after an unconditional break or continue, causing compile errors.',
        whyItHappens: 'Developers write statements following a break without placing the break inside an "if" check, making the subsequent code impossible to reach.',
        howToAvoid: 'Always wrap break and continue statements inside a conditional check (if statement).',
        codeSnippet: {
          bad: `// ❌ COMPILE ERROR: Unreachable code detected on the print line!
for (int i = 0; i < 5; i++) {
    break;
    System.out.println(i); // This line can never run!
}`,
          good: `// ✓ Correct: break is guarded and only executes when triggered
for (int i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.println(i);
}`
        }
      }
    ],
    practiceExercise: {
      title: 'Exercise: Search and Skip Operations',
      tasks: [
        'Write a for loop that counts from 1 to 10. Use `break` to exit the loop as soon as the count reaches 6.',
        'Write a for loop from 1 to 10. Use `continue` to skip printing the number 5, but print all other numbers.',
        'Write a program that sums numbers from 1 to 10, but skips adding 4 and 7 using continue.',
        'Describe in your own words the difference between break and continue.',
        'What compiler error happens if code is written directly below a "break;" statement inside the same block?'
      ]
    },
    summary: [
      'The "break" statement terminates loop or switch execution completely, shifting control outside.',
      'The "continue" statement skips the remainder of the current loop lap and advances to the next turn.',
      'Always wrap break and continue inside "if" blocks to avoid compile-time unreachable code errors.'
    ]
  }
};
