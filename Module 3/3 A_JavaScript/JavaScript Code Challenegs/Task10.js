//10. Create a function that filters out negative numbers


function filterNegativeNums(array) {
    return array.filter(num => num >= 0);
}
let numsArray = [-8,11,0,2,5,80,-18,-3,-0, 9,1,-13];
let filteredArray = filterNegativeNums(numberArray);

console.log('Original Array:', numsArray);
console.log('Filtered Array:', filteredArray);

