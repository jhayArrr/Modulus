function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
//  console.log(adding);
//  console.log(subtract);
//  console.log(mutliply);
//  console.log(divide);
}
//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

//simpleComparison
function howManyTimes (numberStart, numberEnd) {
 while (numberStart < numberEnd); {
  console.log(number);
  number += 5;
}
}


let number = [1, 20]
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting (1, 10, 1);
skipCounting (1, 10, 11);

console.log()
let oddNumbers = [];
let evenNumbers = [];

// Sequence of 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th
oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//printing out entire onject]
console.log(oddNumbers);
console.log(evenNumbers);

let Numbers = [10, 29]; //Boundary Numbers
let skipCount = 1; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[0]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}
