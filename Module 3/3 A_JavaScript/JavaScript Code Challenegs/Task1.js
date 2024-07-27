// 1. Calculate the sum of numbers within an array

const numberArray = [8, 19, 30, 45, 62, 0, 95]

let sum = 0;
for (let num = 0; num < numberArray.length; num++) {
  sum = sum + numberArray[num];
}
console.log("The total sum of the numbers within an array is", sum);