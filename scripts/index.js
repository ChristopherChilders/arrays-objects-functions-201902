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

// Even Numbers

//make a new array to store the even numbers
let evenNumbers = [];

// Write a function that seperates even values into evenNumbers
listOfNumbers.forEach(function (originalNumbers){
    if(originalNumbers % 2 === 0){
        evenNumbers.push(originalNumbers);
    }
    return evenNumbers;
});
console.log(evenNumbers);


//Square the Numbers

const squareTheNumbers = listOfNumbers.map(num => num * num);
// .map follows this formula:
// let newArray = array.map(function (currentValue, index, array));
// 1)           2)     3)             4)            5)     6)
// 1. evoke new array
// 2. set it equal to the original array
// 3. call the .map() function
// 4. the value of the current item in the old array. REQUIRED
// 5. the array index of the current element. OPTIONAL
// 6. the array object the current element belings to. OPTIONAL
console.log(squareTheNumbers);
