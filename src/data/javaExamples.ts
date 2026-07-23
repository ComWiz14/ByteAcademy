import { JavaExample } from '../types';

export const JAVA_EXAMPLES: JavaExample[] = [
  // ==================== BEGINNER EXAMPLES ====================
  {
    id: "beg-01",
    title: "Print Hello World",
    category: "Beginner",
    topic: "Introduction",
    difficulty: "Beginner",
    tags: ["printing", "main method", "basics"],
    description: "The traditional starter program. Teaches you how to display output to the console.",
    code: `public class Main {
    public static void main(String[] args) {
        // System.out.println prints text followed by a new line
        System.out.println("Hello, World!");
    }
}`,
    explanation: "Every standalone Java application must have a main class and a main method. 'System.out.println' is the standard way to print output to the screen."
  },
  {
    id: "beg-02",
    title: "Variables and Constants",
    category: "Beginner",
    topic: "Variables",
    difficulty: "Beginner",
    tags: ["data types", "final", "assignments"],
    description: "Demonstrates how to declare, assign, and output variables of different types, including immutable constants.",
    code: `public class VariablesDemo {
    public static void main(String[] args) {
        // Declaring and initializing standard variables
        int age = 20;
        double grade = 94.5;
        char letter = 'A';
        boolean isEnrolled = true;
        
        // Declaring a constant with the 'final' keyword
        final double PI = 3.14159;
        
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
        System.out.println("Letter: " + letter);
        System.out.println("Enrolled: " + isEnrolled);
        System.out.println("PI: " + PI);
    }
}`,
    explanation: "Variables store data. Use standard types like int (integers) and double (decimals). Use the 'final' keyword to lock a variable, turning it into a constant."
  },
  {
    id: "beg-03",
    title: "Primitive Data Types Demo",
    category: "Beginner",
    topic: "Variables",
    difficulty: "Beginner",
    tags: ["byte", "short", "long", "float", "double"],
    description: "Explores all primary primitive data types in Java and their memory-specific sizes and literal notations.",
    code: `public class DataTypesDemo {
    public static void main(String[] args) {
        byte smallByte = 127;
        short mediumVal = 32000;
        int standardInt = 2147483647;
        long largeLong = 9223372036854775807L; // L suffix for long literals
        
        float decimalFloat = 5.75f; // f suffix for float literals
        double standardDouble = 19.99;
        
        System.out.println("Byte: " + smallByte);
        System.out.println("Long: " + largeLong);
        System.out.println("Float: " + decimalFloat);
        System.out.println("Double: " + standardDouble);
    }
}`,
    explanation: "Primitives are pre-defined by Java. Suffix float values with 'f' and long values with 'L' to instruct the compiler on correct literal representations."
  },
  {
    id: "beg-04",
    title: "User Input using Scanner",
    category: "Beginner",
    topic: "User Input",
    difficulty: "Beginner",
    tags: ["scanner", "keyboard", "interactive"],
    description: "Learn how to read keyboard inputs dynamically from users using the java.util.Scanner utility.",
    code: `import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        // Create scanner instance reading standard input stream
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Hello " + name + "! You are " + age + " years old.");
        
        // Good practice to close scanner when finished
        scanner.close();
    }
}`,
    explanation: "Import 'java.util.Scanner' to parse user entries. NextLine() reads standard text strings, while nextInt() converts inputs into solid integers."
  },
  {
    id: "beg-05",
    title: "Arithmetic Operators",
    category: "Beginner",
    topic: "Arithmetic",
    difficulty: "Beginner",
    tags: ["operators", "modulo", "math"],
    description: "Basic mathematical operators (addition, subtraction, multiplication, division, and modulo) in action.",
    code: `public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 15;
        int b = 4;
        
        int sum = a + b;
        int diff = a - b;
        int product = a * b;
        int quotient = a / b; // Integer division truncates decimals
        int remainder = a % b; // Modulo (gets remainder)
        
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + diff);
        System.out.println("Product: " + product);
        System.out.println("Quotient (Int): " + quotient);
        System.out.println("Remainder (Modulo): " + remainder);
    }
}`,
    explanation: "Arithmetic operators run standard math. Remember that dividing two integers in Java drops any fractional remainder (truncates towards zero)."
  },
  {
    id: "beg-06",
    title: "Even or Odd Number Checker",
    category: "Beginner",
    topic: "If Statements",
    difficulty: "Beginner",
    tags: ["conditions", "if-else", "modulo"],
    description: "An essential logic exercise. Uses the modulo (%) operator inside a conditional block to test divisibility.",
    code: `public class EvenOdd {
    public static void main(String[] args) {
        int number = 17;
        
        // If a number divided by 2 has no remainder, it is even
        if (number % 2 == 0) {
            System.out.println(number + " is Even.");
        } else {
            System.out.println(number + " is Odd.");
        }
    }
}`,
    explanation: "The % (modulo) operator returns the division remainder. Checking if 'number % 2 == 0' is the standard way to isolate even numbers."
  },
  {
    id: "beg-07",
    title: "Largest of Three Numbers",
    category: "Beginner",
    topic: "If Statements",
    difficulty: "Beginner",
    tags: ["logical operators", "and", "if-else-if"],
    description: "Use nested conditionals and logical AND (&&) to find the largest of three given numbers.",
    code: `public class LargestNumber {
    public static void main(String[] args) {
        int a = 12, b = 25, c = 18;
        
        if (a >= b && a >= c) {
            System.out.println(a + " is the largest.");
        } else if (b >= a && b >= c) {
            System.out.println(b + " is the largest.");
        } else {
            System.out.println(c + " is the largest.");
        }
    }
}`,
    explanation: "Logical AND (&&) combines conditions. An if-else-if ladder sequentially checks each scenario until it finds the true execution branch."
  },
  {
    id: "beg-08",
    title: "Smallest of Two Numbers",
    category: "Beginner",
    topic: "If Statements",
    difficulty: "Beginner",
    tags: ["ternary", "shorthand", "comparison"],
    description: "Demonstrates standard comparison using an if-else statement as well as the compact ternary operator.",
    code: `public class SmallestNumber {
    public static void main(String[] args) {
        int x = 42;
        int y = 19;
        
        // Standard If-Else
        int smallest;
        if (x < y) {
            smallest = x;
        } else {
            smallest = y;
        }
        
        // Shorthand Ternary Operator (condition ? value_if_true : value_if_false)
        int min = (x < y) ? x : y;
        
        System.out.println("Smallest via If: " + smallest);
        System.out.println("Smallest via Ternary: " + min);
    }
}`,
    explanation: "Ternary operations 'condition ? true : false' represent an elegant, single-line shorthand replacement for standard multi-line if-else blocks."
  },
  {
    id: "beg-09",
    title: "Positive, Negative, or Zero Checker",
    category: "Beginner",
    topic: "If Statements",
    difficulty: "Beginner",
    tags: ["relational", "comparisons", "sign"],
    description: "Evaluates whether an integer is positive, negative, or exactly zero using relational operators.",
    code: `public class SignChecker {
    public static void main(String[] args) {
        int num = -8;
        
        if (num > 0) {
            System.out.println(num + " is Positive.");
        } else if (num < 0) {
            System.out.println(num + " is Negative.");
        } else {
            System.out.println("The number is Zero.");
        }
    }
}`,
    explanation: "This layout forms a clean three-way decision branch using 'num > 0', 'num < 0', and a fallback 'else' for the exact zero scenario."
  },
  {
    id: "beg-10",
    title: "Swap Two Variables",
    category: "Beginner",
    topic: "Variables",
    difficulty: "Beginner",
    tags: ["memory swap", "temporary variable"],
    description: "Demonstrates how to swap the values of two variables using a temporary storage variable.",
    code: `public class SwapVariables {
    public static void main(String[] args) {
        int first = 10;
        int second = 20;
        
        System.out.println("Before Swap: first=" + first + ", second=" + second);
        
        // Use temporary variable to prevent overwriting
        int temp = first;
        first = second;
        second = temp;
        
        System.out.println("After Swap: first=" + first + ", second=" + second);
    }
}`,
    explanation: "Swapping requires an extra placeholder. We copy the first value into 'temp', set first to second, and then retrieve the stored value back into second."
  },
  {
    id: "beg-11",
    title: "Leap Year Checker",
    category: "Beginner",
    topic: "If Statements",
    difficulty: "Beginner",
    tags: ["modulo", "nested conditions", "leap year"],
    description: "Implements the mathematical logic of determining leap years based on division rules of 4, 100, and 400.",
    code: `public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap = false;
        
        // Leap year logic
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                // Must be divisible by 400 to be a leap year if divisible by 100
                if (year % 400 == 0) {
                    isLeap = true;
                }
            } else {
                isLeap = true;
            }
        }
        
        System.out.println(year + " is a leap year? " + isLeap);
    }
}`,
    explanation: "A year is a leap year if divisible by 4, but not by 100 unless it is also divisible by 400. This requires nested structure or complex logical statements."
  },
  {
    id: "beg-12",
    title: "If-Else Grade Calculator",
    category: "Beginner",
    topic: "If Statements",
    difficulty: "Beginner",
    tags: ["grading", "if-else ladder"],
    description: "Calculates academic letter grades based on scores using a clean multi-branch if-else layout.",
    code: `public class GradeCalculator {
    public static void main(String[] args) {
        int score = 84;
        char grade;
        
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else if (score >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        
        System.out.println("Score " + score + " results in Grade: " + grade);
    }
}`,
    explanation: "The conditions are checked sequentially from top to bottom. The first condition evaluating to true executes, and all remaining branches are skipped."
  },
  {
    id: "beg-13",
    title: "Switch Case Day Selector",
    category: "Beginner",
    topic: "Switch",
    difficulty: "Beginner",
    tags: ["switch", "break", "branching"],
    description: "Evaluates an integer and outputs corresponding days of the week using standard Switch statements.",
    code: `public class SwitchDemo {
    public static void main(String[] args) {
        int dayNumber = 4;
        String dayName;
        
        switch (dayNumber) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid Day"; break;
        }
        
        System.out.println("Day 4 is: " + dayName);
    }
}`,
    explanation: "Switch tests equality against pre-defined values. The 'break' keyword stops evaluation so program execution doesn't fall through next options."
  },
  {
    id: "beg-14",
    title: "Switch Case Season Selector",
    category: "Beginner",
    topic: "Switch",
    difficulty: "Beginner",
    tags: ["multi-case", "switch statements"],
    description: "Groups multiple switch cases together to resolve seasons from input month codes.",
    code: `public class SeasonSelector {
    public static void main(String[] args) {
        int month = 7; // July
        String season;
        
        switch (month) {
            case 12: case 1: case 2:
                season = "Winter";
                break;
            case 3: case 4: case 5:
                season = "Spring";
                break;
            case 6: case 7: case 8:
                season = "Summer";
                break;
            case 9: case 10: case 11:
                season = "Autumn";
                break;
            default:
                season = "Unknown Month";
                break;
        }
        
        System.out.println("Season: " + season);
    }
}`,
    explanation: "By stacking cases, you can execute a single block of code for multiple options. The default case acts as a catch-all for unrecognized values."
  },
  {
    id: "beg-15",
    title: "Simple For Loop",
    category: "Beginner",
    topic: "For Loop",
    difficulty: "Beginner",
    tags: ["counting", "loops", "iterations"],
    description: "Counts upward from 1 to 5 using a traditional for-loop structure, printing values iteratively.",
    code: `public class ForLoopDemo {
    public static void main(String[] args) {
        // Syntax: for (initialization; condition; update)
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteration count: " + i);
        }
    }
}`,
    explanation: "For loops are used when the number of iterations is known. It sets up a counter (i), checks a condition, and increments the counter after each pass."
  },
  {
    id: "beg-16",
    title: "While Loop Sum of Numbers",
    category: "Beginner",
    topic: "While Loop",
    difficulty: "Beginner",
    tags: ["loops", "accumulation", "summation"],
    description: "Uses a while-loop to sum integers from 1 up to a predefined limit recursively.",
    code: `public class WhileSum {
    public static void main(String[] args) {
        int limit = 10;
        int sum = 0;
        int i = 1;
        
        // Iterates while loop condition is true
        while (i <= limit) {
            sum += i; // Add i to sum
            i++;      // Increment index
        }
        
        System.out.println("Sum of numbers 1 to " + limit + " is: " + sum);
    }
}`,
    explanation: "While loops repeat execution as long as their condition is true. Do not forget the update statement (i++), or the loop will run forever."
  },
  {
    id: "beg-17",
    title: "Do-While Menu Selection",
    category: "Beginner",
    topic: "Do While",
    difficulty: "Beginner",
    tags: ["menu", "post-test loop"],
    description: "Simulates console menus which are guaranteed to execute at least once before testing loop exit conditions.",
    code: `public class DoWhileDemo {
    public static void main(String[] args) {
        int choice = 3; // Simulating user choice to exit
        
        do {
            System.out.println("=== GAME MENU ===");
            System.out.println("1. Start New Game");
            System.out.println("2. Load Settings");
            System.out.println("3. Quit");
            System.out.println("Menu parsed. Selection: " + choice);
            
        } while (choice != 3); // Loop condition evaluated AFTER execution block
        
        System.out.println("Exited successfully.");
    }
}`,
    explanation: "Do-while is a post-test loop: the body is executed once *before* checking the condition. Excellent for scenarios like interactive menus."
  },
  {
    id: "beg-18",
    title: "Factorial of a Number",
    category: "Beginner",
    topic: "For Loop",
    difficulty: "Beginner",
    tags: ["factorial", "math algorithms"],
    description: "Calculates the factorial (n!) of a number using iterative loops.",
    code: `public class Factorial {
    public static void main(String[] args) {
        int number = 5;
        long factorialResult = 1;
        
        for (int i = 1; i <= number; i++) {
            factorialResult *= i;
        }
        
        System.out.println("Factorial of " + number + " is: " + factorialResult);
    }
}`,
    explanation: "To calculate n!, we multiply consecutive numbers from 1 to n. A long data type is used as factorials grow extremely fast."
  },
  {
    id: "beg-19",
    title: "Fibonacci Series",
    category: "Beginner",
    topic: "For Loop",
    difficulty: "Beginner",
    tags: ["sequence", "series", "iterative"],
    description: "Generates the Fibonacci sequence up to a specific term length.",
    code: `public class Fibonacci {
    public static void main(String[] args) {
        int terms = 8;
        int t1 = 0, t2 = 1;
        
        System.out.print("First " + terms + " terms: ");
        
        for (int i = 1; i <= terms; i++) {
            System.out.print(t1 + " ");
            
            // Calculate next term
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
        System.out.println(); // Print newline
    }
}`,
    explanation: "Each number in Fibonacci is the sum of the two preceding ones. We iteratively update 't1' and 't2' to shift the sliding window forward."
  },
  {
    id: "beg-20",
    title: "Prime Number Checker",
    category: "Beginner",
    topic: "For Loop",
    difficulty: "Beginner",
    tags: ["prime test", "division", "break"],
    description: "Examines if a target number is a prime number using iterative test divisions and flag assertions.",
    code: `public class PrimeChecker {
    public static void main(String[] args) {
        int num = 29;
        boolean isPrime = true;
        
        if (num <= 1) {
            isPrime = false;
        } else {
            // Check divisibility from 2 up to square root of num (optimized)
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break; // Divisor found, stop searching
                }
            }
        }
        
        System.out.println(num + " is prime? " + isPrime);
    }
}`,
    explanation: "Primes are only divisible by 1 and themselves. We optimize the loop by checking divisibility only up to the square root of the number."
  },
  {
    id: "beg-21",
    title: "Reverse a Number",
    category: "Beginner",
    topic: "While Loop",
    difficulty: "Beginner",
    tags: ["math manipulation", "digits", "modulo"],
    description: "Reverses an integer value using modulo operations and standard numerical loops.",
    code: `public class ReverseNumber {
    public static void main(String[] args) {
        int original = 12345;
        int reversed = 0;
        int num = original;
        
        while (num != 0) {
            int digit = num % 10;     // Extract last digit
            reversed = reversed * 10 + digit; // Append digit to reversed number
            num /= 10;                 // Chop off last digit
        }
        
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
    }
}`,
    explanation: "Repeatedly use % 10 to extract the rightmost digit, shift 'reversed' left (multiply by 10) to append it, and use / 10 to trim the input."
  },
  {
    id: "beg-22",
    title: "Palindrome Number Checker",
    category: "Beginner",
    topic: "While Loop",
    difficulty: "Beginner",
    tags: ["palindrome", "number reverse"],
    description: "Inspects if a number reads exactly the same backward as it does forward.",
    code: `public class PalindromeNumber {
    public static void main(String[] args) {
        int num = 121;
        int original = num;
        int reversed = 0;
        
        while (num > 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        
        if (original == reversed) {
            System.out.println(original + " is a Palindrome.");
        } else {
            System.out.println(original + " is NOT a Palindrome.");
        }
    }
}`,
    explanation: "Reverts the digits of the original integer. If the reversed form matches the original, it is classified as a palindrome."
  },
  {
    id: "beg-23",
    title: "Armstrong Number",
    category: "Beginner",
    topic: "While Loop",
    difficulty: "Beginner",
    tags: ["math logic", "digits power", "armstrong"],
    description: "Validates an Armstrong number (where sum of cubes of individual digits equals the original number).",
    code: `public class ArmstrongNumber {
    public static void main(String[] args) {
        int number = 153; // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
        int temp = number;
        int totalSum = 0;
        
        while (temp != 0) {
            int digit = temp % 10;
            totalSum += (digit * digit * digit);
            temp /= 10;
        }
        
        if (totalSum == number) {
            System.out.println(number + " is an Armstrong number.");
        } else {
            System.out.println(number + " is NOT an Armstrong number.");
        }
    }
}`,
    explanation: "We isolate individual digits, cube each digit, and aggregate their sum. An Armstrong number equals the sum of its digits raised to the power of digit count."
  },
  {
    id: "beg-24",
    title: "Sum of Digits",
    category: "Beginner",
    topic: "While Loop",
    difficulty: "Beginner",
    tags: ["sum of digits", "math loop"],
    description: "Extracts and totals each separate digit in an integer using modulo operations and division.",
    code: `public class SumOfDigits {
    public static void main(String[] args) {
        int num = 456; // 4 + 5 + 6 = 15
        int sum = 0;
        int temp = num;
        
        while (temp != 0) {
            sum += temp % 10; // Add last digit to sum
            temp /= 10;       // Trim last digit
        }
        
        System.out.println("Sum of digits in " + num + " is: " + sum);
    }
}`,
    explanation: "Continually peels off the last digit with the remainder operator and divides the base integer by ten until no digits are left."
  },
  {
    id: "beg-25",
    title: "Random Number Generator",
    category: "Beginner",
    topic: "Math",
    difficulty: "Beginner",
    tags: ["random", "java.util.Random", "math"],
    description: "Introduces standard classes for generating pseudo-random numbers in custom ranges.",
    code: `import java.util.Random;

public class RandomDemo {
    public static void main(String[] args) {
        Random rand = new Random();
        
        // Generate a random integer anywhere in integer space
        int randomInt = rand.nextInt();
        
        // Generate a random integer from 1 to 100
        int boundedInt = rand.nextInt(100) + 1;
        
        // Generate random decimal between 0.0 and 1.0
        double randomDouble = rand.nextDouble();
        
        System.out.println("Random Integer: " + randomInt);
        System.out.println("Bounded Int (1-100): " + boundedInt);
        System.out.println("Random Double: " + randomDouble);
    }
}`,
    explanation: "Use 'java.util.Random'. 'nextInt(n)' yields values in range [0, n-1]. Shifting with (+1) yields standard bounded dice rolls."
  },
  {
    id: "beg-26",
    title: "Multiplication Table Generator",
    category: "Beginner",
    topic: "For Loop",
    difficulty: "Beginner",
    tags: ["loops", "multiplication", "for loops"],
    description: "Displays a clean multiplication table for any given integer up to 10.",
    code: `public class MultiplicationTable {
    public static void main(String[] args) {
        int base = 7;
        
        System.out.println("=== Multiplication Table of " + base + " ===");
        for (int i = 1; i <= 10; i++) {
            System.out.println(base + " x " + i + " = " + (base * i));
        }
    }
}`,
    explanation: "Calculates products sequentially within a simple for-loop to generate clean arithmetic lists on the console."
  },
  {
    id: "beg-27",
    title: "Nested Loops Star Pyramid",
    category: "Beginner",
    topic: "Nested Loops",
    difficulty: "Beginner",
    tags: ["nested loops", "stars", "patterns"],
    description: "Draws an expanding right-angled star pyramid using outer and inner loop orchestrations.",
    code: `public class StarPattern {
    public static void main(String[] args) {
        int rows = 5;
        
        for (int i = 1; i <= rows; i++) {
            // Inner loop prints stars depending on the current row
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            // Move to next line after printing stars in row
            System.out.println();
        }
    }
}`,
    explanation: "Nested loops: the outer loop governs the rows while the inner loop manages columns. System.out.println() creates the line breaks."
  },
  {
    id: "beg-28",
    title: "Nested Loops Number Pyramid",
    category: "Beginner",
    topic: "Nested Loops",
    difficulty: "Beginner",
    tags: ["nested loops", "numbers", "patterns"],
    description: "Draws an elegant number pyramid pattern where column indexes are printed iteratively.",
    code: `public class NumberPattern {
    public static void main(String[] args) {
        int rows = 5;
        
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`,
    explanation: "Instead of stars, we print the column loop index 'j'. This outputs escalating numerical values on each line."
  },
  {
    id: "beg-29",
    title: "Declare and Traverse 1D Array",
    category: "Beginner",
    topic: "Arrays",
    difficulty: "Beginner",
    tags: ["arrays", "traversal", "indexing"],
    description: "How to declare, initialize, and print elements inside a standard single-dimensional Java array.",
    code: `public class ArrayDemo {
    public static void main(String[] args) {
        // Declaration and initialization
        int[] scores = {85, 90, 78, 92, 88};
        
        System.out.println("Array length: " + scores.length);
        
        // Loop using indices
        System.out.print("Traditional loop: ");
        for (int i = 0; i < scores.length; i++) {
            System.out.print(scores[i] + " ");
        }
        System.out.println();
        
        // Foreach enhanced loop
        System.out.print("Enhanced foreach loop: ");
        for (int score : scores) {
            System.out.print(score + " ");
        }
        System.out.println();
    }
}`,
    explanation: "Arrays are fixed-size structures. Indexing starts at 0. Use the enhanced for-each loop 'for (int val : array)' for cleaner traversal syntax."
  },
  {
    id: "beg-30",
    title: "Find Maximum Element in Array",
    category: "Beginner",
    topic: "Arrays",
    difficulty: "Beginner",
    tags: ["array algorithms", "max", "comparison"],
    description: "Scans through an array to identify the highest number present.",
    code: `public class FindMax {
    public static void main(String[] args) {
        int[] numbers = {12, 45, 32, 9, 78, 56};
        
        // Assume first index is largest
        int max = numbers[0];
        
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i]; // Update max
            }
        }
        
        System.out.println("Maximum value is: " + max);
    }
}`,
    explanation: "Initialize max with the first element, then scan the rest of the array. If any element is larger, it replaces the current max."
  },
  {
    id: "beg-31",
    title: "Find Minimum Element in Array",
    category: "Beginner",
    topic: "Arrays",
    difficulty: "Beginner",
    tags: ["array algorithms", "min", "comparison"],
    description: "Scans an array to isolate the absolute lowest integer.",
    code: `public class FindMin {
    public static void main(String[] args) {
        int[] numbers = {24, 52, 11, 78, 6, 35};
        
        int min = numbers[0];
        
        for (int num : numbers) {
            if (num < min) {
                min = num;
            }
        }
        
        System.out.println("Minimum value is: " + min);
    }
}`,
    explanation: "Using an enhanced loop, we check each element. If it is smaller than our running minimum, we update the minimum."
  },
  {
    id: "beg-32",
    title: "Calculate Average of Array",
    category: "Beginner",
    topic: "Arrays",
    difficulty: "Beginner",
    tags: ["array sum", "average", "double cast"],
    description: "Sums up elements of an integer array and calculates their decimal average.",
    code: `public class ArrayAverage {
    public static void main(String[] args) {
        int[] values = {10, 20, 30, 40, 55};
        int sum = 0;
        
        for (int val : values) {
            sum += val;
        }
        
        // Cast sum or length to double to avoid integer division truncation
        double average = (double) sum / values.length;
        
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}`,
    explanation: "When calculating averages, cast the sum to (double) before dividing. This avoids truncating decimal places."
  },
  {
    id: "beg-33",
    title: "Linear Search in Array",
    category: "Beginner",
    topic: "Arrays",
    difficulty: "Beginner",
    tags: ["search", "index find", "loops"],
    description: "Searches an array for a target key, returning its index location or negative feedback if not found.",
    code: `public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {15, 23, 8, 42, 33};
        int target = 42;
        int foundIndex = -1;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                foundIndex = i;
                break; // Target found, stop loop
            }
        }
        
        if (foundIndex != -1) {
            System.out.println("Target " + target + " found at index: " + foundIndex);
        } else {
            System.out.println("Target not found in array.");
        }
    }
}`,
    explanation: "Linear search checks each cell sequentially. Once found, we record the index and use 'break' to terminate the search immediately."
  },
  {
    id: "beg-34",
    title: "Declare and Traverse 2D Array",
    category: "Beginner",
    topic: "Arrays",
    difficulty: "Beginner",
    tags: ["matrix", "2D arrays", "nested iteration"],
    description: "Create and output a standard 2D grid matrix using nested coordinate iterations.",
    code: `public class MatrixDemo {
    public static void main(String[] args) {
        // Declare a 2x3 matrix (2 rows, 3 columns)
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };
        
        System.out.println("Rows: " + matrix.length);
        System.out.println("Columns in Row 0: " + matrix[0].length);
        
        // Nested loop traversal
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                System.out.print(matrix[r][c] + "\t"); // Tab space
            }
            System.out.println(); // Next row line
        }
    }
}`,
    explanation: "2D arrays are arrays of arrays. The first bracket indexes the outer array (rows), and the second indexes the inner array (columns)."
  },
  {
    id: "beg-35",
    title: "Basic Custom Methods",
    category: "Beginner",
    topic: "Methods",
    difficulty: "Beginner",
    tags: ["methods", "parameters", "return values"],
    description: "How to declare custom modular helper methods to write dry, clean, reusable code structures.",
    code: `public class MethodsDemo {
    // A custom method with arguments and return type
    public static int addNumbers(int x, int y) {
        return x + y;
    }
    
    // A void method that performs operations but returns nothing
    public static void greetUser(String username) {
        System.out.println("Welcome, student " + username + "!");
    }
    
    public static void main(String[] args) {
        greetUser("Banda");
        
        int result = addNumbers(12, 18);
        System.out.println("Addition result: " + result);
    }
}`,
    explanation: "Methods break programs into isolated blocks. Use 'static' so they can be called directly from the static main method without creating objects."
  },
  {
    id: "beg-36",
    title: "Method Overloading Demo",
    category: "Beginner",
    topic: "Methods",
    difficulty: "Beginner",
    tags: ["overloading", "signatures", "methods"],
    description: "Declare multiple methods with identical names but differing parameter signatures.",
    code: `public class OverloadingDemo {
    // Add two integers
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded: Add three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded: Add two decimals
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        System.out.println("Two ints: " + add(5, 10));
        System.out.println("Three ints: " + add(1, 2, 3));
        System.out.println("Two doubles: " + add(3.5, 4.2));
    }
}`,
    explanation: "Method overloading allows methods to share names. The compiler distinguishes which method to invoke by checking parameter count and types."
  },

  // ==================== INTERMEDIATE EXAMPLES ====================
  {
    id: "int-37",
    title: "Class and Object Creation",
    category: "Intermediate",
    topic: "OOP Basics",
    difficulty: "Intermediate",
    tags: ["classes", "objects", "blueprints"],
    description: "Define a basic class template, instantiate multiple distinct objects, and interact with properties.",
    code: `class Car {
    String brand;
    int year;
    
    void displayDetails() {
        System.out.println("Brand: " + brand + ", Built: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        // Instantiate objects
        Car car1 = new Car();
        car1.brand = "Toyota";
        car1.year = 2021;
        
        Car car2 = new Car();
        car2.brand = "Mazda";
        car2.year = 2023;
        
        car1.displayDetails();
        car2.displayDetails();
    }
}`,
    explanation: "A class acts as an blueprints template. Objects are instances of that template. The 'new' keyword allocates storage for each individual object."
  },
  {
    id: "int-38",
    title: "Multiple Constructors (Overloading)",
    category: "Intermediate",
    topic: "OOP Basics",
    difficulty: "Intermediate",
    tags: ["constructors", "overloading", "initialization"],
    description: "Declaring default, parameterized, and copy constructors inside custom classes.",
    code: `class Book {
    String title;
    String author;
    
    // Default constructor
    Book() {
        this.title = "Untitled";
        this.author = "Unknown Author";
    }
    
    // Parameterized constructor
    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
    
    void printBook() {
        System.out.println("Book: '" + title + "' by " + author);
    }
}

public class Main {
    public static void main(String[] args) {
        Book defaultBook = new Book();
        Book specifiedBook = new Book("Java Basics", "ByteAcademy");
        
        defaultBook.printBook();
        specifiedBook.printBook();
    }
}`,
    explanation: "Constructors run automatically during object creation. Overloading constructor types provides flexible initial value combinations."
  },
  {
    id: "int-39",
    title: "Encapsulation (Getters & Setters)",
    category: "Intermediate",
    topic: "Encapsulation",
    difficulty: "Intermediate",
    tags: ["private", "getters", "setters", "data protection"],
    description: "Secures internal state by locking fields with the 'private' modifier and granting access only via getters and setters.",
    code: `class Student {
    private String name;
    private int score;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getScore() {
        return score;
    }
    
    public void setScore(int score) {
        // Validation logic to protect object integrity
        if (score >= 0 && score <= 100) {
            this.score = score;
        } else {
            System.out.println("Error: Score must be between 0 and 100.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Student std = new Student();
        std.setName("Chimango");
        std.setScore(95);
        std.setScore(150); // Will trigger safety validation
        
        System.out.println(std.getName() + "'s score: " + std.getScore());
    }
}`,
    explanation: "Encapsulation hides data. Setter validation prevents objects from getting corrupted with invalid metrics (like negative ages or scores over 100)."
  },
  {
    id: "int-40",
    title: "Single Inheritance",
    category: "Intermediate",
    topic: "Inheritance",
    difficulty: "Intermediate",
    tags: ["extends", "parent class", "child class"],
    description: "Illustrates the 'extends' keyword where child classes inherit variables and actions from a common parent class.",
    code: `class Employee {
    String name = "Mughogho";
    double salary = 50000;
    
    void work() {
        System.out.println(name + " is working.");
    }
}

class Developer extends Employee {
    String language = "Java";
    
    void debug() {
        System.out.println(name + " is debugging " + language + " code.");
    }
}

public class Main {
    public static void main(String[] args) {
        Developer dev = new Developer();
        dev.work();  // Inherited method
        dev.debug(); // Child-specific method
    }
}`,
    explanation: "Inheritance models an 'is-a' relationship. The child class (Developer) inherits public properties and methods of the parent (Employee) automatically."
  },
  {
    id: "int-41",
    title: "Polymorphism Demonstration",
    category: "Intermediate",
    topic: "Polymorphism",
    difficulty: "Intermediate",
    tags: ["polymorphism", "dynamic dispatch", "methods"],
    description: "Instantiates parent references pointing to different subclasses, calling methods polymorphic-style.",
    code: `class Shape {
    void draw() {
        System.out.println("Drawing generic shape.");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Circle with radius.");
    }
}

class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Square with side dimensions.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Parent class references pointing to subclass implementations
        Shape s1 = new Circle();
        Shape s2 = new Square();
        
        s1.draw(); // Dynamic resolution of overridden methods
        s2.draw();
    }
}`,
    explanation: "Polymorphism lets objects respond uniquely to identical instructions. The exact method resolved is determined dynamically at runtime."
  },
  {
    id: "int-42",
    title: "Method Overriding (@Override)",
    category: "Intermediate",
    topic: "Polymorphism",
    difficulty: "Intermediate",
    tags: ["annotations", "overriding", "@Override"],
    description: "Uses the '@Override' annotation to securely rewrite parent behaviors inside child entities.",
    code: `class Animal {
    void speak() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog barks: Woof! Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.speak();
    }
}`,
    explanation: "Overriding lets child classes redefine inherited methods. The compiler validates signature matches to avoid capitalization or parameter typos."
  },
  {
    id: "int-43",
    title: "Interface Implementation",
    category: "Intermediate",
    topic: "Interfaces",
    difficulty: "Intermediate",
    tags: ["implements", "contracts", "multiple inheritance"],
    description: "Declare and enforce behavioral contracts across unrelated classes using interfaces.",
    code: `interface Drivable {
    void startEngine();
    void accelerate();
}

class Motorcycle implements Drivable {
    public void startEngine() {
        System.out.println("Bike starter active.");
    }
    
    public void accelerate() {
        System.out.println("Throttle twisted.");
    }
}

public class Main {
    public static void main(String[] args) {
        Drivable bike = new Motorcycle();
        bike.startEngine();
        bike.accelerate();
    }
}`,
    explanation: "Interfaces specify WHAT a class should do, not HOW. Classes using interfaces must fully implement all methods listed in the contract."
  },
  {
    id: "int-44",
    title: "Abstract Classes & Methods",
    category: "Intermediate",
    topic: "Abstract Classes",
    difficulty: "Intermediate",
    tags: ["abstract", "templates", "hierarchy"],
    description: "Prevent direct instantiation of structural root templates while forcing children to implement key behaviors.",
    code: `abstract class Appliance {
    // Abstract method has no implementation body
    abstract void turnOn();
    
    // Regular concrete method is allowed
    void displayStatus() {
        System.out.println("Appliance status nominal.");
    }
}

class Fan extends Appliance {
    @Override
    void turnOn() {
        System.out.println("Fan blades rotating.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Appliance app = new Appliance(); // ERROR: Cannot instantiate abstract type
        Appliance fan = new Fan();
        fan.turnOn();
        fan.displayStatus();
    }
}`,
    explanation: "Abstract classes combine abstract methods (forcing child override logic) and concrete methods (sharing standard pre-written actions)."
  },
  {
    id: "int-45",
    title: "ArrayList Operations Demo",
    category: "Intermediate",
    topic: "Collections",
    difficulty: "Intermediate",
    tags: ["ArrayList", "collections", "dynamic arrays"],
    description: "Declaring, modifying, and iterating over dynamic resizable list structures.",
    code: `import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        
        // Add items
        students.add("Chimango");
        students.add("Banda");
        students.add("Mughogho");
        
        // Print size and fetch indices
        System.out.println("Class size: " + students.size());
        System.out.println("First student: " + students.get(0));
        
        // Remove item
        students.remove("Banda");
        
        // Traverse elements
        for (String std : students) {
            System.out.println("Active: " + std);
        }
    }
}`,
    explanation: "Standard arrays are fixed-size. 'ArrayList' grows and shrinks dynamically as you add or remove elements."
  },
  {
    id: "int-46",
    title: "LinkedList (Queue Behavior)",
    category: "Intermediate",
    topic: "Collections",
    difficulty: "Intermediate",
    tags: ["LinkedList", "FIFO", "queue"],
    description: "Implements standard First-In, First-Out (FIFO) queue buffers using double-linked list structures.",
    code: `import java.util.LinkedList;
import java.util.Queue;

public class QueueDemo {
    public static void main(String[] args) {
        Queue<String> ticketLine = new LinkedList<>();
        
        // Add elements to the queue (Enqueuing)
        ticketLine.add("Client A");
        ticketLine.add("Client B");
        ticketLine.add("Client C");
        
        // Process elements (Dequeuing)
        while (!ticketLine.isEmpty()) {
            String processed = ticketLine.poll(); // Returns and removes first element
            System.out.println("Serving: " + processed);
        }
    }
}`,
    explanation: "A Queue models a queue layout. 'LinkedList' implements the Queue interface, making it perfect for rapid insertion and deletion operations."
  },
  {
    id: "int-47",
    title: "HashMap Key-Value Store",
    category: "Intermediate",
    topic: "Collections",
    difficulty: "Intermediate",
    tags: ["HashMap", "dictionary", "key-value"],
    description: "Stores and retrieves key-value entries like a dictionary.",
    code: `import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<String, Integer> courseGrades = new HashMap<>();
        
        // Map values to keys
        courseGrades.put("Java Basics", 95);
        courseGrades.put("OOP Fundamentals", 88);
        courseGrades.put("Advanced Data Structures", 92);
        
        // Query database
        System.out.println("Java Basics Grade: " + courseGrades.get("Java Basics"));
        
        // Check contains
        if (courseGrades.containsKey("Math")) {
            System.out.println("Math mapped.");
        } else {
            System.out.println("No Math records found.");
        }
        
        // Loop keys and values
        for (String subject : courseGrades.keySet()) {
            System.out.println(subject + " -> " + courseGrades.get(subject));
        }
    }
}`,
    explanation: "HashMaps store data as key-value pairs. They provide near-instant retrieval based on the key, regardless of map scale."
  },
  {
    id: "int-48",
    title: "HashSet Unique Elements Set",
    category: "Intermediate",
    topic: "Collections",
    difficulty: "Intermediate",
    tags: ["HashSet", "sets", "uniqueness"],
    description: "Using Sets to store only unique elements, automatically filtering out duplicate submissions.",
    code: `import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {
        HashSet<Integer> idSet = new HashSet<>();
        
        idSet.add(101);
        idSet.add(102);
        idSet.add(101); // Attempting to insert duplicate
        idSet.add(103);
        
        System.out.println("Unique IDS size: " + idSet.size());
        
        for (int id : idSet) {
            System.out.println("Set item ID: " + id);
        }
    }
}`,
    explanation: "A Set is a mathematical group that forbids duplicate items. Attempts to insert duplicates are rejected silently without throwing errors."
  },
  {
    id: "int-49",
    title: "Custom Exception Class",
    category: "Intermediate",
    topic: "Exception Handling",
    difficulty: "Intermediate",
    tags: ["custom exceptions", "throw", "try-catch"],
    description: "Write and throw custom exceptions to enforce application-specific domain business logic.",
    code: `class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class Main {
    static void checkVotingAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age below legal standard of 18.");
        }
        System.out.println("Eligible for voting registration.");
    }
    
    public static void main(String[] args) {
        try {
            checkVotingAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught Custom Violation: " + e.getMessage());
        }
    }
}`,
    explanation: "Extend 'Exception' to create custom checked exceptions. Use the 'throw' keyword followed by an exception instance to halt bad execution states."
  },
  {
    id: "int-50",
    title: "Try-Catch-Finally Exception Handling",
    category: "Intermediate",
    topic: "Exception Handling",
    difficulty: "Intermediate",
    tags: ["try-catch", "finally", "error handling"],
    description: "Isolate runtime exceptions and use clean-up blocks that are guaranteed to execute.",
    code: `public class FinallyDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // Triggers ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Alert: Division by zero caught.");
        } finally {
            // This code runs ALWAYS, regardless of exceptions
            System.out.println("Finally block triggered: Resource safely released.");
        }
    }
}`,
    explanation: "The 'finally' block is guaranteed to run after the try and catch statements have finished. Crucial for locking files or closing network ports safely."
  },
  {
    id: "int-51",
    title: "Multiple Catch Blocks",
    category: "Intermediate",
    topic: "Exception Handling",
    difficulty: "Intermediate",
    tags: ["multiple catch", "exception priority"],
    description: "Capturing separate, specific runtime exceptions individually.",
    code: `public class MultiCatch {
    public static void main(String[] args) {
        try {
            int[] nums = {1, 2};
            // Throws OutOfBounds, which will skip division parsing
            int num = nums[5];
            int divide = num / 0;
            
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught Index Error: Index does not exist.");
        } catch (ArithmeticException e) {
            System.out.println("Caught Math Error: Divide by zero.");
        } catch (Exception e) {
            System.out.println("Fallback Catch-All for unknown exceptions.");
        }
    }
}`,
    explanation: "Exception hierarchies dictate execution: order matters. Specific subclasses must be caught *before* broader parent Exception fallback catch blocks."
  },
  {
    id: "int-52",
    title: "File Writing Demo",
    category: "Intermediate",
    topic: "File I/O",
    difficulty: "Intermediate",
    tags: ["FileWriter", "BufferedWriter", "file create"],
    description: "Creates and saves text blocks inside a local text file.",
    code: `import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileWriteDemo {
    public static void main(String[] args) {
        String data = "Welcome to ByteAcademy. Let's master Java.";
        
        // Try-with-resources auto-closes file buffers when done
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("academy.txt"))) {
            writer.write(data);
            System.out.println("File output saved successfully.");
        } catch (IOException e) {
            System.out.println("File Writing Failed: " + e.getMessage());
        }
    }
}`,
    explanation: "FileWriter accesses file systems. Using try-with-resources 'try (BufferedWriter ...)' auto-releases system file handles without a finally block."
  },
  {
    id: "int-53",
    title: "File Reading Demo",
    category: "Intermediate",
    topic: "File I/O",
    difficulty: "Intermediate",
    tags: ["FileReader", "Scanner file", "input stream"],
    description: "Parses contents of a local text file line-by-line using FileReader.",
    code: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReadDemo {
    public static void main(String[] args) {
        try {
            File myFile = new File("academy.txt");
            Scanner reader = new Scanner(myFile);
            
            while (reader.hasNextLine()) {
                String lineContent = reader.nextLine();
                System.out.println("File Line: " + lineContent);
            }
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error: The requested file could not be located.");
        }
    }
}`,
    explanation: "Pass a 'File' instance to a 'Scanner' to read text. Wrap with try-catch to catch 'FileNotFoundException' in case the file doesn't exist."
  },
  {
    id: "int-54",
    title: "StringBuilder Performance Demo",
    category: "Intermediate",
    topic: "Strings",
    difficulty: "Intermediate",
    tags: ["StringBuilder", "mutability", "efficiency"],
    description: "Illustrates memory efficiency of mutable StringBuilder compared to standard immutable String additions.",
    code: `public class StringBuilderDemo {
    public static void main(String[] args) {
        // StringBuilder is mutable - modifies text in-place
        StringBuilder builder = new StringBuilder("Java");
        
        for (int i = 1; i <= 5; i++) {
            builder.append(" ").append(i);
        }
        
        System.out.println("Concatenated String: " + builder.toString());
    }
}`,
    explanation: "Regular Strings are immutable; modifying them repeatedly creates thousands of temporary garbage objects. 'StringBuilder' updates the same buffer in-place."
  },
  {
    id: "int-55",
    title: "Common String Methods",
    category: "Intermediate",
    topic: "Strings",
    difficulty: "Intermediate",
    tags: ["String methods", "substring", "length"],
    description: "A sandbox showing Java's most common built-in operations for text manipulation.",
    code: `public class StringMethods {
    public static void main(String[] args) {
        String text = "   ByteAcademy Java  ";
        
        System.out.println("Length: " + text.length());
        System.out.println("Cleaned (trim): '" + text.trim() + "'");
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Substring (3, 14): '" + text.substring(3, 14) + "'");
        System.out.println("Contains 'Java'? " + text.contains("Java"));
        System.out.println("Replaced 'a' with '@': " + text.replace('a', '@'));
    }
}`,
    explanation: "String objects cannot be changed. All manipulation methods return a brand new String representing the modified value."
  },
  {
    id: "int-56",
    title: "Bubble Sort Algorithm",
    category: "Intermediate",
    topic: "Sorting & Searching",
    difficulty: "Intermediate",
    tags: ["sorting", "bubble sort", "algorithms"],
    description: "Sorts an array ascendingly by repeatedly swapping adjacent components that are in the wrong order.",
    code: `public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11};
        int n = arr.length;
        
        // Loop through all array elements
        for (int i = 0; i < n - 1; i++) {
            // Last i elements are already in place
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap adjacent elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        
        System.out.print("Sorted array: ");
        for (int val : arr) {
            System.out.print(val + " ");
        }
        System.out.println();
    }
}`,
    explanation: "Bubble sort repeatedly passes through the array, floating the largest values to the end. It is simple but has O(n^2) time complexity."
  },
  {
    id: "int-57",
    title: "Selection Sort Algorithm",
    category: "Intermediate",
    topic: "Sorting & Searching",
    difficulty: "Intermediate",
    tags: ["sorting", "selection sort", "algorithms"],
    description: "Iteratively searches for the smallest index and swaps it into position.",
    code: `public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            // Find the minimum element in unsorted array
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            
            // Swap the found minimum element with the first element
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
        
        System.out.print("Selection sorted elements: ");
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}`,
    explanation: "Selection Sort divides the list into sorted and unsorted portions, finding the smallest unsorted element and appending it to the sorted list."
  },
  {
    id: "int-58",
    title: "Binary Search on Sorted Array",
    category: "Intermediate",
    topic: "Sorting & Searching",
    difficulty: "Intermediate",
    tags: ["binary search", "search algorithm", "divide & conquer"],
    description: "An optimized divide-and-conquer search algorithm that runs in O(log n) time. Requires a sorted array.",
    code: `public class BinarySearch {
    public static void main(String[] args) {
        int[] sortedArr = {10, 20, 30, 40, 50, 60, 70};
        int target = 50;
        
        int low = 0;
        int high = sortedArr.length - 1;
        int foundIndex = -1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (sortedArr[mid] == target) {
                foundIndex = mid;
                break;
            } else if (sortedArr[mid] < target) {
                low = mid + 1; // Discard left half
            } else {
                high = mid - 1; // Discard right half
            }
        }
        
        System.out.println("Element found at index: " + foundIndex);
    }
}`,
    explanation: "Binary search compares the target with the middle element. This continuously halves the search space, resulting in logarithmic lookup times."
  },
  {
    id: "int-59",
    title: "Student Record Management System",
    category: "Intermediate",
    topic: "OOP Practical Apps",
    difficulty: "Intermediate",
    tags: ["ArrayList", "OOP", "records management"],
    description: "A compact interactive console manager tracking list indexes of Student profiles dynamically.",
    code: `import java.util.ArrayList;

class StudentRecord {
    int id;
    String name;
    
    StudentRecord(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

class RecordManager {
    ArrayList<StudentRecord> db = new ArrayList<>();
    
    void addRecord(int id, String name) {
        db.add(new StudentRecord(id, name));
        System.out.println("Profile added for " + name);
    }
    
    void listRecords() {
        System.out.println("--- Student Directory ---");
        for (StudentRecord r : db) {
            System.out.println("ID: " + r.id + " | Name: " + r.name);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        RecordManager mgr = new RecordManager();
        mgr.addRecord(1, "Chimango");
        mgr.addRecord(2, "Banda");
        mgr.listRecords();
    }
}`,
    explanation: "Uses object-oriented classes and ArrayLists to build clean, real-world database trackers with dynamic record sizes."
  },
  {
    id: "int-60",
    title: "Mini Bank Account System",
    category: "Intermediate",
    topic: "OOP Practical Apps",
    difficulty: "Intermediate",
    tags: ["OOP", "banking", "encapsulation"],
    description: "Simulates banking transactions with balance protection policies.",
    code: `class BankAccount {
    private String accountNumber;
    private double balance;
    
    BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited " + amount + ". Balance: " + balance);
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew " + amount + ". Balance: " + balance);
        } else {
            System.out.println("Insufficient funds or bad transaction.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("BA-1001", 500.0);
        acc.deposit(200);
        acc.withdraw(100);
        acc.withdraw(1000); // Fails safely
    }
}`,
    explanation: "Combines class design and local methods to protect account logic, preventing overdrafts or negative deposits."
  },
  {
    id: "int-61",
    title: "Book Library System",
    category: "Intermediate",
    topic: "OOP Practical Apps",
    difficulty: "Intermediate",
    tags: ["library", "OOP relations", "arrays"],
    description: "Manages books and availability using robust class relationships.",
    code: `class LibraryBook {
    String title;
    boolean isAvailable = true;
    
    LibraryBook(String title) {
        this.title = title;
    }
    
    void borrow() {
        if (isAvailable) {
            isAvailable = false;
            System.out.println("Borrowed: " + title);
        } else {
            System.out.println(title + " is already borrowed.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LibraryBook book = new LibraryBook("Clean Code");
        book.borrow();
        book.borrow(); // Double borrow warning
    }
}`,
    explanation: "Tracks object state (isAvailable) to coordinate borrow operations, illustrating object-oriented simulation logic."
  },
  {
    id: "int-62",
    title: "Iterator Traversal",
    category: "Intermediate",
    topic: "Collections",
    difficulty: "Intermediate",
    tags: ["iterator", "traversal", "collections"],
    description: "Demonstrates using an Iterator to safely traverse lists and remove items on the fly.",
    code: `import java.util.ArrayList;
import java.util.Iterator;

public class IteratorDemo {
    public static void main(String[] args) {
        ArrayList<Integer> scores = new ArrayList<>();
        scores.add(45);
        scores.add(85);
        scores.add(52);
        scores.add(90);
        
        Iterator<Integer> iterator = scores.iterator();
        while (iterator.hasNext()) {
            int score = iterator.next();
            // Remove failing grades (below 50) safely
            if (score < 50) {
                iterator.remove();
            }
        }
        
        System.out.println("Passing scores: " + scores);
    }
}`,
    explanation: "Modifying a list directly inside a standard loop throws ConcurrentModificationExceptions. Iterators resolve this by supporting safe deletions during loops."
  },

  // ==================== ADVANCED EXAMPLES ====================
  {
    id: "adv-63",
    title: "Generic Box Class",
    category: "Advanced",
    topic: "Generics",
    difficulty: "Advanced",
    tags: ["generics", "generic types", "type safety"],
    description: "Write highly reusable wrappers that can store any data type while ensuring compiler level type verification.",
    code: `class Box<T> {
    private T value;
    
    public void set(T value) {
        this.value = value;
    }
    
    public T get() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        // Box configured strictly for integers
        Box<Integer> intBox = new Box<>();
        intBox.set(100);
        
        // Box configured strictly for strings
        Box<String> strBox = new Box<>();
        strBox.set("ByteAcademy Generics");
        
        System.out.println("Integer value: " + intBox.get());
        System.out.println("String value: " + strBox.get());
    }
}`,
    explanation: "Generics permit classes to operate on parameters of any type. This eliminates cast issues and raises compiler type checking."
  },
  {
    id: "adv-64",
    title: "Generic Array Printer Method",
    category: "Advanced",
    topic: "Generics",
    difficulty: "Advanced",
    tags: ["generic methods", "printing"],
    description: "Use a single generic method signature to print arrays containing completely different object types.",
    code: `public class GenericMethodDemo {
    // Generic method declaration
    public static <E> void printArray(E[] array) {
        for (E element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4};
        String[] strArray = {"Java", "Generics", "Advanced"};
        
        System.out.print("Printing Integers: ");
        printArray(intArray);
        
        System.out.print("Printing Strings: ");
        printArray(strArray);
    }
}`,
    explanation: "Generic methods introduce their own type parameter list '<E>' before the return type. This lets the method resolve array components dynamically."
  },
  {
    id: "adv-65",
    title: "Upper Bounded Wildcards",
    category: "Advanced",
    topic: "Generics",
    difficulty: "Advanced",
    tags: ["wildcards", "extends", "upper bounds"],
    description: "Write methods that parse lists containing any numeric type subclass using upper-bounded wildcards.",
    code: `import java.util.List;
import java.util.Arrays;

public class UpperBoundedDemo {
    // Wildcard extends restricts input to Numbers or its child subclasses
    public static double sumOfList(List<? extends Number> list) {
        double sum = 0.0;
        for (Number num : list) {
            sum += num.doubleValue();
        }
        return sum;
    }
    
    public static void main(String[] args) {
        List<Integer> integers = Arrays.asList(10, 20, 30);
        List<Double> doubles = Arrays.asList(3.5, 4.5, 5.5);
        
        System.out.println("Integers Sum: " + sumOfList(integers));
        System.out.println("Doubles Sum: " + sumOfList(doubles));
    }
}`,
    explanation: "'? extends T' designates an upper bound wildcard. It accepts lists of type T or any class descending from T, perfect for math operations."
  },
  {
    id: "adv-66",
    title: "Lower Bounded Wildcards",
    category: "Advanced",
    topic: "Generics",
    difficulty: "Advanced",
    tags: ["wildcards", "super", "lower bounds"],
    description: "Leverage lower bounds wildcards to declare methods that write elements safely to collection arrays.",
    code: `import java.util.List;
import java.util.ArrayList;

public class LowerBoundedDemo {
    // Wildcard super accepts Integer or its superclasses
    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i);
        }
    }
    
    public static void main(String[] args) {
        List<Number> numList = new ArrayList<>();
        addNumbers(numList);
        
        System.out.println("List elements: " + numList);
    }
}`,
    explanation: "'? super T' restricts wildcards to type T or its parent ancestors, securing insertions of items (such as writing Integers to Number collections)."
  },
  {
    id: "adv-67",
    title: "Custom Exceptions with Re-throwing",
    category: "Advanced",
    topic: "Exception Handling",
    difficulty: "Advanced",
    tags: ["re-throwing", "chained exceptions"],
    description: "Demonstrates advanced exception structures, chained exceptions, and re-throwing scenarios.",
    code: `class DatabaseException extends Exception {
    public DatabaseException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class Main {
    static void queryDatabase() throws DatabaseException {
        try {
            // Simulate database connection math failure
            int error = 10 / 0;
        } catch (ArithmeticException e) {
            // Chain exceptions, wrapping low-level issues in domain alerts
            throw new DatabaseException("Failed to run DB Transaction query.", e);
        }
    }
    
    public static void main(String[] args) {
        try {
            queryDatabase();
        } catch (DatabaseException e) {
            System.out.println("Caught Database Alert: " + e.getMessage());
            System.out.println("Underlying low-level root issue: " + e.getCause());
        }
    }
}`,
    explanation: "Chaining wraps low-level errors inside high-level business exceptions. This preserves debug logs via 'e.getCause()' while providing clean, high-level alerts."
  },
  {
    id: "adv-68",
    title: "Comparable Interface (Sorting Students)",
    category: "Advanced",
    topic: "Comparable & Comparator",
    difficulty: "Advanced",
    tags: ["Comparable", "compareTo", "sorting"],
    description: "Defines a natural sort order for custom objects using the Comparable interface.",
    code: `import java.util.ArrayList;
import java.util.Collections;

class Student implements Comparable<Student> {
    String name;
    int grade;
    
    Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
    
    // Sort logically by grades descending
    @Override
    public int compareTo(Student other) {
        return Integer.compare(other.grade, this.grade);
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student("Chimango", 85));
        list.add(new Student("Banda", 95));
        list.add(new Student("Mughogho", 90));
        
        Collections.sort(list); // Invokes compareTo
        
        for (Student s : list) {
            System.out.println(s.name + " -> Grade: " + s.grade);
        }
    }
}`,
    explanation: "Comparable defines 'natural sorting' for a class via 'compareTo()'. Collections.sort() uses this method automatically to order lists."
  },
  {
    id: "adv-69",
    title: "Comparator Interface (Sorting Products)",
    category: "Advanced",
    topic: "Comparable & Comparator",
    difficulty: "Advanced",
    tags: ["Comparator", "custom sorting", "lambda"],
    description: "Implements flexible multiple-field comparison policies (like sorting by price or by name) outside the model class definition.",
    code: `import java.util.ArrayList;
import java.util.Comparator;

class Product {
    String name;
    double price;
    
    Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Product> catalogue = new ArrayList<>();
        catalogue.add(new Product("Laptop", 1200));
        catalogue.add(new Product("Mouse", 25));
        catalogue.add(new Product("Keyboard", 80));
        
        // Sort by Price using custom Comparator (lambda format)
        catalogue.sort(Comparator.comparingDouble(p -> p.price));
        
        System.out.println("Sorted by price:");
        for (Product p : catalogue) {
            System.out.println(p.name + " -> $" + p.price);
        }
    }
}`,
    explanation: "Comparator provides external sort logic. Unlike Comparable, Comparator allows multiple custom sort policies for the exact same class."
  },
  {
    id: "adv-70",
    title: "Recursive Factorial",
    category: "Advanced",
    topic: "Algorithms",
    difficulty: "Advanced",
    tags: ["recursion", "factorial", "call stack"],
    description: "Solve factorials using classic recursive strategies that demonstrate call stacks.",
    code: `public class RecursionFactorial {
    // Recursive base-case algorithm
    public static int factorial(int n) {
        // Base case
        if (n == 1 || n == 0) {
            return 1;
        }
        // Recursive step
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        int target = 5;
        int result = factorial(target);
        System.out.println("Factorial (Recursion) of " + target + " is: " + result);
    }
}`,
    explanation: "Recursion splits tasks into subproblems. It requires a solid 'base case' to stop calling itself and prevent infinite loops (StackOverflowErrors)."
  },
  {
    id: "adv-71",
    title: "Recursive Binary Search",
    category: "Advanced",
    topic: "Algorithms",
    difficulty: "Advanced",
    tags: ["recursion", "binary search", "search"],
    description: "Implements recursive array binary partitioning.",
    code: `public class RecursiveSearch {
    public static int recBinarySearch(int[] arr, int target, int low, int high) {
        if (low > high) return -1; // Base case: not found
        
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            return recBinarySearch(arr, target, mid + 1, high);
        } else {
            return recBinarySearch(arr, target, low, mid - 1);
        }
    }
    
    public static void main(String[] args) {
        int[] sortedArr = {5, 10, 15, 20, 25, 30};
        int result = recBinarySearch(sortedArr, 20, 0, sortedArr.length - 1);
        System.out.println("Element 20 found at index: " + result);
    }
}`,
    explanation: "Recursive binary search divides search scopes dynamically, passing bounds into sub-method levels."
  },
  {
    id: "adv-72",
    title: "Matrix Multiplication",
    category: "Advanced",
    topic: "Algorithms",
    difficulty: "Advanced",
    tags: ["2D arrays", "matrix multiplication", "nested loops"],
    description: "Performs mathematical row-by-column dot multiplication of two 2D matrices.",
    code: `public class MatrixMultiplication {
    public static void main(String[] args) {
        int[][] A = {
            {1, 2},
            {3, 4}
        };
        int[][] B = {
            {5, 6},
            {7, 8}
        };
        
        int[][] C = new int[2][2]; // Store result matrix
        
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        
        System.out.println("Product Matrix C:");
        for (int[] row : C) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}`,
    explanation: "Matrix multiplication sums products across dimensions. It coordinates row (i), column (j), and inner dimension (k) iterations."
  },
  {
    id: "adv-73",
    title: "Custom Stack Implementation",
    category: "Advanced",
    topic: "Data Structures",
    difficulty: "Advanced",
    tags: ["custom structures", "stack", "LIFO"],
    description: "Write your own Last-In, First-Out (LIFO) stack data structure using arrays and bounds checking.",
    code: `class CustomStack {
    private int[] storage;
    private int topIndex;
    private int capacity;
    
    CustomStack(int size) {
        capacity = size;
        storage = new int[capacity];
        topIndex = -1;
    }
    
    void push(int value) {
        if (topIndex == capacity - 1) {
            System.out.println("Stack Overflow Alert!");
            return;
        }
        storage[++topIndex] = value;
    }
    
    int pop() {
        if (topIndex == -1) {
            System.out.println("Stack Underflow!");
            return -1;
        }
        return storage[topIndex--];
    }
}

public class Main {
    public static void main(String[] args) {
        CustomStack stack = new CustomStack(3);
        stack.push(10);
        stack.push(20);
        
        System.out.println("Popped: " + stack.pop());
        System.out.println("Popped: " + stack.pop());
    }
}`,
    explanation: "Stacks are linear lists using top indexes to append and retrieve items. Push increments topIndex, and pop retrieves the top item first."
  },
  {
    id: "adv-74",
    title: "Custom Queue Implementation",
    category: "Advanced",
    topic: "Data Structures",
    difficulty: "Advanced",
    tags: ["custom structures", "queue", "FIFO"],
    description: "Implements standard First-In, First-Out (FIFO) queue array architectures.",
    code: `class CustomQueue {
    private int[] elements;
    private int front, rear, size, maxCapacity;
    
    CustomQueue(int capacity) {
        maxCapacity = capacity;
        elements = new int[maxCapacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    void enqueue(int val) {
        if (size == maxCapacity) return; // Full
        rear = (rear + 1) % maxCapacity; // Circular wrap
        elements[rear] = val;
        size++;
    }
    
    int dequeue() {
        if (size == 0) return -1;
        int value = elements[front];
        front = (front + 1) % maxCapacity; // Circular wrap
        size--;
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        CustomQueue q = new CustomQueue(5);
        q.enqueue(1);
        q.enqueue(2);
        System.out.println("Dequeued: " + q.dequeue());
    }
}`,
    explanation: "Tracks index wraps with circular modulo loops to preserve storage when enqueuing and dequeuing array values."
  },
  {
    id: "adv-75",
    title: "OOP Calculator Design",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["OOP design", "polymorphism", "calculator"],
    description: "A beautifully structured calculator using polymorphism and operation interfaces instead of messy switch cases.",
    code: `interface Operation {
    double apply(double a, double b);
}

class Add implements Operation {
    public double apply(double a, double b) { return a + b; }
}

class Divide implements Operation {
    public double apply(double a, double b) {
        if (b == 0) throw new ArithmeticException("Divide by zero.");
        return a / b;
    }
}

class OOPCalculator {
    double execute(Operation op, double a, double b) {
        return op.apply(a, b);
    }
}

public class Main {
    public static void main(String[] args) {
        OOPCalculator calc = new OOPCalculator();
        double ans = calc.execute(new Add(), 15, 25);
        System.out.println("Polymorphic Add result: " + ans);
    }
}`,
    explanation: "Replaces conditional branching with object polymorphism. Each calculation maps directly to an implementation of the 'Operation' interface."
  },
  {
    id: "adv-76",
    title: "Mini Inventory System",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["inventory", "HashMap", "records"],
    description: "Tracks store stocks, product codes, and quantity tallies using standard HashMaps.",
    code: `import java.util.HashMap;

class Inventory {
    private HashMap<String, Integer> stock = new HashMap<>();
    
    void updateStock(String product, int qty) {
        stock.put(product, stock.getOrDefault(product, 0) + qty);
        System.out.println(product + " stock updated: " + stock.get(product));
    }
    
    void displayInventory() {
        System.out.println("=== STORE STOCK TALLIES ===");
        stock.forEach((k, v) -> System.out.println(k + " : " + v + " items"));
    }
}

public class Main {
    public static void main(String[] args) {
        Inventory inv = new Inventory();
        inv.updateStock("Java Textbook", 50);
        inv.updateStock("Notebooks", 100);
        inv.updateStock("Java Textbook", -10); // Deduct stock
        inv.displayInventory();
    }
}`,
    explanation: "Utilizes HashMap 'getOrDefault' to read existing stock quantities and modifies them inline safely."
  },
  {
    id: "adv-77",
    title: "Contact Manager Application",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["HashMap", "contacts manager", "OOP"],
    description: "Create a simple search and add phonebook manager using structured objects.",
    code: `import java.util.HashMap;

class Contact {
    String phone;
    String email;
    
    Contact(String phone, String email) {
        this.phone = phone;
        this.email = email;
    }
}

class Directory {
    HashMap<String, Contact> book = new HashMap<>();
    
    void save(String name, String phone, String email) {
        book.put(name.toLowerCase(), new Contact(phone, email));
        System.out.println("Saved: " + name);
    }
    
    void lookup(String name) {
        Contact c = book.get(name.toLowerCase());
        if (c != null) {
            System.out.println("Found " + name + ": Phone=" + c.phone + ", Email=" + c.email);
        } else {
            System.out.println("Contact not found.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Directory d = new Directory();
        d.save("Chimango", "+265 997 064 278", "chimangomughogho22@gmail.com");
        d.lookup("Chimango");
    }
}`,
    explanation: "A clean phonebook layout storing contact instances under case-insensitive map keys."
  },
  {
    id: "adv-78",
    title: "Grade Management System",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["OOP", "grades tracker", "ArrayList"],
    description: "Calculates grade metrics, scores averages, and tracks performance lists for classrooms.",
    code: `import java.util.ArrayList;

class GradeBook {
    private ArrayList<Double> grades = new ArrayList<>();
    
    void enterGrade(double g) {
        if (g >= 0 && g <= 100) grades.add(g);
    }
    
    double getAverage() {
        if (grades.isEmpty()) return 0;
        double sum = 0;
        for (double d : grades) sum += d;
        return sum / grades.size();
    }
}

public class Main {
    public static void main(String[] args) {
        GradeBook book = new GradeBook();
        book.enterGrade(95.5);
        book.enterGrade(88.0);
        System.out.println("Class Average: " + book.getAverage());
    }
}`,
    explanation: "Consolidates double grades and calculates average scores safely using loops."
  },
  {
    id: "adv-79",
    title: "Employee Manager with Polymorphism",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["polymorphism", "employee records", "methods override"],
    description: "Manage employee logs and parse distinct wages calculations dynamically.",
    code: `abstract class Worker {
    String name;
    Worker(String n) { name = n; }
    abstract double pay();
}

class FullTime extends Worker {
    double salary;
    FullTime(String n, double s) { super(n); salary = s; }
    double pay() { return salary; }
}

class Contractor extends Worker {
    double hourlyRate;
    int hours;
    Contractor(String n, double rate, int hrs) { super(n); hourlyRate = rate; hours = hrs; }
    double pay() { return hourlyRate * hours; }
}

public class Main {
    public static void main(String[] args) {
        Worker[] employees = {
            new FullTime("Banda", 3500),
            new Contractor("Mughogho", 50, 80)
        };
        for (Worker w : employees) {
            System.out.println(w.name + " pay stub: $" + w.pay());
        }
    }
}`,
    explanation: "Leverages polymorphic inheritance arrays: calls pay() dynamically to invoke custom wage behaviors."
  },
  {
    id: "adv-80",
    title: "Hotel Reservation Simulation",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["hotel reservation", "OOP simulation"],
    description: "Coordinates room booking availability logs and payments simulation.",
    code: `class Room {
    int id;
    boolean isBooked = false;
    Room(int num) { id = num; }
}

class Hotel {
    Room[] rooms = { new Room(101), new Room(102), new Room(103) };
    
    void book(int roomNumber) {
        for (Room r : rooms) {
            if (r.id == roomNumber) {
                if (!r.isBooked) {
                    r.isBooked = true;
                    System.out.println("Room " + roomNumber + " reserved.");
                } else {
                    System.out.println("Room already occupied.");
                }
                return;
            }
        }
        System.out.println("Room does not exist.");
    }
}

public class Main {
    public static void main(String[] args) {
        Hotel h = new Hotel();
        h.book(101);
        h.book(101); // Conflict check
    }
}`,
    explanation: "Models hotels using sub-arrays, modifying room state flag assertions safely."
  },
  {
    id: "adv-81",
    title: "Quiz Application Simulation",
    category: "Advanced",
    topic: "OOP Practical Apps",
    difficulty: "Advanced",
    tags: ["interactive quiz", "OOP simulation"],
    description: "Evaluates trivia submissions against true key definitions dynamically.",
    code: `class Question {
    String query;
    String answer;
    
    Question(String q, String ans) {
        query = q;
        answer = ans;
    }
    
    boolean check(String attempt) {
        return answer.equalsIgnoreCase(attempt.trim());
    }
}

public class Main {
    public static void main(String[] args) {
        Question q = new Question("What is Java's parent Exception?", "Throwable");
        boolean correct = q.check("Throwable ");
        System.out.println("Submission accepted? " + correct);
    }
}`,
    explanation: "Creates dynamic quiz object parameters, validating answers case-insensitively."
  },
  {
    id: "adv-82",
    title: "Lexer Compiler Tokenizer Demo",
    category: "Advanced",
    topic: "Algorithms",
    difficulty: "Advanced",
    tags: ["tokenizer", "compiler lexer", "string processing"],
    description: "Parses mathematical code strings into typed compiler symbols using basic regex scanning.",
    code: `import java.util.ArrayList;

enum TokenType { NUMBER, OPERATOR, IDENTIFIER }

class Token {
    TokenType type;
    String value;
    Token(TokenType t, String v) { type = t; value = v; }
    
    @Override
    public String toString() { return "[" + type + ": " + value + "]"; }
}

public class SimpleLexer {
    public static void main(String[] args) {
        String expression = "x = 42 + 5";
        ArrayList<Token> tokens = new ArrayList<>();
        
        // Split text by standard spaces
        String[] segments = expression.split("\\s+");
        for (String seg : segments) {
            if (seg.matches("\\d+")) {
                tokens.add(new Token(TokenType.NUMBER, seg));
            } else if (seg.matches("[+\\-*/=]")) {
                tokens.add(new Token(TokenType.OPERATOR, seg));
            } else {
                tokens.add(new Token(TokenType.IDENTIFIER, seg));
            }
        }
        
        System.out.println("Compiled expression tokens: " + tokens);
    }
}`,
    explanation: "Simulates initial compiler lexing pipelines: scans characters and outputs a structured ArrayList of classified compiler tokens."
  },
  {
    id: "adv-83",
    title: "Fibonacci Memoization Dynamic Programming",
    category: "Advanced",
    topic: "Algorithms",
    difficulty: "Advanced",
    tags: ["Fibonacci", "recursion", "memoization", "dynamic programming"],
    description: "Calculates massive Fibonacci terms in O(n) runtime using a recursion memoization lookup table.",
    code: `public class FibonacciMemoization {
    private static long[] memoTable;
    
    public static long fib(int n) {
        if (n <= 1) return n;
        
        // If result already computed, return it from memory
        if (memoTable[n] != 0) {
            return memoTable[n];
        }
        
        // Otherwise, calculate and store in memo table
        memoTable[n] = fib(n - 1) + fib(n - 2);
        return memoTable[n];
    }
    
    public static void main(String[] args) {
        int n = 50; // High value would take years using standard recursion
        memoTable = new long[n + 1];
        
        System.out.println("Fibonacci of " + n + " is: " + fib(n));
    }
}`,
    explanation: "Standard recursion recalculates identical branches millions of times, causing O(2^n) exponential delay. Memoization caches calculations in a fast array lookup table, achieving O(n) linear performance."
  }
];
