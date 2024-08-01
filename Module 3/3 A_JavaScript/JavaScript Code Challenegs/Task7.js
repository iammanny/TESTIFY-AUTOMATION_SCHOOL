//7. Sort an array of numbers in descending order


function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}
let numArr = [11, 8, 4, 1, 8, 2, 0, 10, 5];

let sortedArr = sortArrayDescending(numArr);

console.log('Original Array:', numArr);

console.log('Sorted Array:', sortedArr);


