// Display 1 to 100 but even numbers
console.log('Even numbers between 1 and 100 are:');
const result = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    result.push(i);
  }
}
console.log(result);
console.log("");

// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

console.log('100 + 50 = ', calculate(100, 50, '+'));
console.log('100 - 50 = ', calculate(100, 50, '-'));
console.log('100 * 50 = ', calculate(100, 50, '*'));
console.log('100 / 50 = ', calculate(100, 50, '/'));
console.log("");

/* 

3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.

*/

function findTax(salary) {
  let tax = 0;
  switch (true) {
    case salary <= 500000:
      tax = 0;
      break;
    case salary <= 1000000:
      tax = salary * 0.1;
      break;
    case salary <= 1500000:
      tax = salary * 0.2;
      break;
    default:
      tax = salary * 0.3;
  }
  return tax;
}

console.log('Tax on 400000 is ', findTax(400000));
console.log('Tax on 600000 is ', findTax(600000));
console.log('Tax on 1200000 is ', findTax(1200000));
console.log('Tax on 2000000 is ', findTax(2000000));
console.log("");

// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
  let sum = 0;
  while (n1 > 0 && n2 > 0) {
    sum += (n1 % 10) * (n2 % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  return sum;
}

console.log('Sum of products of 6 and 34 is ', sumOfProducts(6, 34));
console.log('Sum of products of 123 and 45 is ', sumOfProducts(123, 45));
console.log('Sum of products of 1234 and 5678 is ', sumOfProducts(1234, 5678));
console.log("");