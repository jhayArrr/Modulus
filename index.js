function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
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

let number = [4, 7, 11, 99];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting (2, 10, 11);
skipCounting (2, 10, 10);
