//6. Sort an array of strings in alphabetical order

function sortArrayAlphabetically(arr) {
    return arr.sort();
}
let stringArray = ["cat", "bee", "ant", "dog", "eagle"];

let sortedArray = sortArrayAlphabetically(stringArray);

console.log('Original Array:', stringArray);

console.log('Sorted Array:', sortedArray);