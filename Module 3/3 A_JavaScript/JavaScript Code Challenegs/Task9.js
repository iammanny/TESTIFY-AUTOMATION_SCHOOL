//9. Return the number of vowels in a string

function numOfVowels(str) {

    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (Vowels.indexOf(str[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "The Number of vowels in -" +
        "QA is a Process that Focuses on Identifying, Creating Reliable and Stable Software :" +
        numOfVowels(
            "QA is a Process that Focuses on Identifying, Creating Reliable and Stable Software"
        )
);
