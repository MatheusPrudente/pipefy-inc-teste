function firstFactorial(num) { 
    let factorial = 1;
    
    for (let index = num; index > 0; index -- ) {
      factorial *= index
    }
  
    return factorial; 
  
  }
     
  console.log(firstFactorial(8));

/*First Factorial
Have the function FirstFactorial(num) take 
the num parameter being passed and return 
the factorial of it. For example: if num = 4, 
then your program should return (4 * 3 * 2 * 1) = 24.
For the test cases, the range will be between 1 
and 18 and the input will always be an integer.

Examples
Input: 4
Output: 24
Input: 8
Output: 40320
Tags
recursion math fundamentals free */