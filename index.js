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

let number = [10, 28]
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting (2, 10, 11);
skipCounting (2, 10, 10);

let number = [10, 28]; //Boundary Numbers
let skipCount = 2; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[10]; //Hint: used in the FOR Loop
for (let i=10; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}
