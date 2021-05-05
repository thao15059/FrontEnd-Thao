// exercise 01
// var n = 5;
// var sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }

// console.log("Giá trị của n là ", n);
// console.log("Tổng từ 1 đến n là ", sum);

// exercise 02
// var n = 5;
// var sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum = sum + i * i;
// }

// console.log("Giá trị của n là ", n);
// console.log("Tổng từ 1 đến n là ", sum);

// exercise 03
// var n = 5;
// var sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + 1 / i;
// }

// console.log("Giá trị của n là ", n);
// console.log("Tổng từ 1 đến n là ", sum);

// exercise 04
function power(x, n) {
  if (n === 0) {
    return 1;
  } else if (y % 2 === 0) {
    return power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
  } else return x * power(x, parseInt(n / 2)) * power(x, parseInt(n / 2));
}

// vi du neu x = 3, n = 2
// n = 1; se tinh sum = 0 + 3^1 = 3
// n = 2; se tinh sum = 3 + 3^2 = 12;

// var n = 5;
// var x = 3;
// var sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + Math.pow(x, i);
// }
// var string = "";
// for (let i = 1; i <= n; i++) {
//   if (i === 1) {
//     string += x;
//   } else {
//     string += ` + ${x}^${i}`;
//   }
// }

// console.log(`Với x = " ${x} và n = " ${n}\nTổng của "${string} = ${sum}`);

// exercise 05
// var sum = 1;
// var n = -5;
// var isPositiveNumber = 1;

// if (n < 0) {
//   n *= -1;
//   isPositiveNumber = -1;
// }

// for (let i = 1; i <= n; i++) {
//   sum *= i;
// }

// console.log(`Kết quả của ${n * isPositiveNumber}! = ${sum * isPositiveNumber}`);

// exercise 06 kiem tra so nguyen to
// var number = 19;
// function isPrimeNumber(number) {
//   var isPrime = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) isPrime = false;
//   }
//   return isPrime;
// }

// isPrimeNumber(number)
//   ? console.log(`Số ${number} là số nguyên tố`)
//   : console.log(`Số ${number} không phải là số nguyên tố`);

// exercise 07
// var numbers = [7, -5, 3];

// function findLargestNumber(numbers) {
//   var largestNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (largestNumber < numbers[i]) largestNumber = numbers[i];
//   }

//   return largestNumber;
// }

// console.log(`Số lớn nhất trong [${numbers}] là ${findLargestNumber(numbers)}`);

// exercise 08
// var randomNumber = function (count, min, max) {
//   var countNumber = [];
//   var randomNumber = Math.ceil(Math.random() * max);
//   while (min < randomNumber < max) {
//     while (countNumber.length < count) {
//       randomNumber = Math.ceil(Math.random() * max);
//       countNumber.push(randomNumber);
//     }
//     break;
//   }

//   return countNumber;
// };

// var numbers = randomNumber(10, 1, 100);
// findLargestNumber(numbers);
// console.log(`Số lớn nhất trong [${numbers}] là ${findLargestNumber(numbers)}`);

// exercise 09
// var numbers = [1, 2, 5, 9, -5, 9, -10, 20, 30, 15, 40, -2, 1, 2, 3];

// function findAllNegativeNumbers(numbers) {
//   var negativeNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) negativeNumbers.push(numbers[i]);
//   }

//   return negativeNumbers;
// }

// var negativeNumbers = findAllNegativeNumbers(numbers);
// var lastNegativeNumber = negativeNumbers[negativeNumbers.length - 1];

// console.log(
//   `Trong mảng [${numbers}] phần tử âm cuối cùng có giá trị là ${lastNegativeNumber} và nằm ở vị trí ${numbers.indexOf(
//     lastNegativeNumber
//   )}`
// );

// exercise 10
// var numbers = [1.2, -2.5, -10, 20, 0.5, 15];

// function findAllPositiveNumbers(numbers) {
//   var positiveNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) positiveNumbers.push(numbers[i]);
//   }

//   return positiveNumbers;
// }

// function findSmallestNumber(numbers) {
//   var smallestNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (smallestNumber > numbers[i]) smallestNumber = numbers[i];
//   }

//   return smallestNumber;
// }

// var positiveNumbers = findAllPositiveNumbers(numbers);
// var smallestNumber = findSmallestNumber(positiveNumbers);

// console.log(
//   `Trong mảng [${numbers}] giá trị nguyên dương nhỏ nhất là ${smallestNumber} và nằm ở vị trí ${numbers.indexOf(
//     smallestNumber
//   )}`
// );

// exercise 11
// var numbers = [1.2, -2.5, -10, 20, 1.2, -10, -10.2, 21.4];

// var smallestNumber = findSmallestNumber(numbers);
// var largestNumber = findLargestNumber(numbers);

// console.log(
//   `Trong mảng [${numbers}] ta có khoảng giá trị [${Math.floor(
//     smallestNumber
//   )},${Math.ceil(largestNumber)}]`
// );

// exercise 12
// var numbers = [1, 2, 5, 5, 20, -10, 5, 30];
// function countDuplicate(numbers) {
//   let counts = {};

//   for (let i = 0; i < numbers.length; i++) {
//     if (counts[numbers[i]]) {
//       counts[numbers[i]] += 1;
//     } else {
//       counts[numbers[i]] = 1;
//     }
//   }

//   return counts;
// }

// var counts = countDuplicate(numbers);

// for (let prop in counts) {
//   if (counts[prop] >= 2) {
//     console.log(`Phần tử ${prop} xuất hiện ${counts[prop]} lần`);
//   }
// }
