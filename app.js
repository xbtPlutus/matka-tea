// Helper function to calculate the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Helper function to calculate the Fibonacci sequence at a given position
function fibonacci(position) {
    if (position <= 1) {
        return position;
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

// Main function to perform the operation
function factorialAndFibonacci(x, y) {
    const factX = factorial(x);
    const fibY = fibonacci(y);
    return factX + fibY;
}

// Example of usage:
const number1 = 5;
const number2 = 7;
const result = factorialAndFibonacci(number1, number2);

console.log(`Factorial(${number1}) + Fibonacci(${number2}) = ${result}`);
