

const side1 = 1, side2 = 2, side3 = 2;

const day = 'Thursday'
if (side1 === side2 === side3){
    console.log("This is an Equilateral triangle")
}
else if (side1 === side2 || side1 === side3 || side2 === side3){
    console.log("This is an Isosceles triangle ")
}
else{
    console.log("This is a Scalene triangle")
}