// Question - 1

// let n = prompt("Enter a number : ");

// for (let i = 1; i<=n; i++) {
//     if (n % i == 0) {
//         console.log(i);
//     }
// }


// Question - 2

// let num = prompt("Enter a number:");
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact *= i;
// }
// console.log(`Factorial of ${num} is: ${fact}`);


// Question - 3

// let number = prompt("Enter a number : ");
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     let digit = parseInt(number[i]);
//     if (digit) {
//         sum += digit;
//     }
// }
// console.log(`sum of all digit : ${sum}`);


// Question - 4

// let number = prompt("Enter a number : ");

// for (let i = 0; i < number.length; i++) {
//     if (i == 0) {
//         firstdigit = parseInt(number[i]);
//     }
//     lastdigit = parseInt(number[i]);
// }

// let sum = firstdigit + lastdigit;

// console.log(`sum of first and last digit : ${sum}`);


// Question - 5

let num = prompt("Enter a number to print table : ");

for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}