// add your solutions here
console.log("I'm working!")
//Function Exercises

// Positive Numbers

const listOfNumbers = [23, -16, -8, -9, -27, -1, 29, 34, 9, -32, -28, -13, -7, 16, -10, 3, -18, -21, -26, -33,];

// make an empty array to place the positive numbers from my random ones.
let positiveNumbers = [];
//write a function that returns just the positive numbers 
listOfNumbers.forEach(function (originalNumbers){
    if(originalNumbers > 0){
        positiveNumbers.push(originalNumbers);
    }
    // return the array of just positive numbers
    return positiveNumbers;
});

console.log(positiveNumbers);