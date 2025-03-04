// Question-1

// let a = prompt("Enter your marks : ");

// if (a >= 90 && a <= 100) {
//     console.log("A+")
// } else if (a >= 80 && a <= 89) {
//     console.log("A")
// } else if (a >= 70 && a <= 79) {
//     console.log("B")
// } else if (a >= 60 && a <= 69) {
//     console.log("C")
// } else if (a >= 50 && a <= 59) {
//     console.log("D")
// } 
// else if(a < 50) {
//     console.log("Fail")
// } 
// else {
//     console.log("Enter a Valid Value")
// }


// Question-2

// let unit = prompt("Enter number of units : ");

// let bill = 0;
// const fixcharge = 50;

// if (unit <= 100) {
//     bill = unit * 5;
// }else if (unit >= 101 && unit <= 300) {
//     bill = unit * 7;
// }else if (unit >= 300) {
//     bill = unit * 10;
// }else {
//     alert ("Please Enter a valid unit");
// }

// let totalbill = bill + fixcharge

// console.log(totalbill);


// Question-3

// let Principal = prompt("Enter a Principal : ");
// let Rate = prompt("Enter a Rate : ");
// let Time = prompt("Enter a Time in years : ");

// console.log(`Enter a Principal : ${Principal}`);
// console.log(`Enter a Principal : ${Rate}`);
// console.log(`Enter a Principal : ${Time}`);

// let SI = (Principal * Rate * Time) / 100


// console.log(`The SI is = ${SI} `);


// Question-4

// let salary = prompt("Enter your salary : ");
// let tax = 0;

// if (salary <= 50000) {
//     console.log("No Tax");
// }else if (salary >= 50001 && salary <= 100000) {
//     tax = salary * 0.1
//     console.log(tax)
// }else {
//     tax = salary * 0.2
//     console.log(tax)
// } 

// let NetSalary = salary - tax;

// console.log(`Your NetSalary : ${NetSalary}`);


// Question-5

// let number = prompt("Enter a number : ");

// if (number % 2 == 0) {
//     console.log("The number is even");
// }else {
//     console.log("The number is odd");
// }


// Question-6

// let character = prompt("Enter a single character :");

// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
//     console.log(`${character} is a vowel`);
// } else {
//     console.log(`${character} is not a vowel`);
// }