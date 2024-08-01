//4. Print a table containing multiplication tables


for (let firstNum = 1; firstNum <= 100; firstNum++){
    for (let secondNum = 1; secondNum <= 12; secondNum++){

    const multiply = firstNum * secondNum;

        // Console.log to printout multiplication table
    console.log (firstNum + " * " + secondNum + " = " + (multiply));

    }
}