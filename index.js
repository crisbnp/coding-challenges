// Create a function addTwo that accepts a number, and returns the number plus 2.

const addTwo = (num) => {
  num +=2;
  return num
}

// Create a function addS that accepts a string, and returns the string with an "s" added to the end.

const addS = (string) => {
  let word = string + "s"
return word
}

// Uncomment these to check your work!
// console.log(typeof addS); // should log: 'function'
// console.log(addS('cat')); // should log: 'cats'

// Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.


const sayHello = (name) => {
  let greeting = 'Hi, ' + name
  return greeting
}

// Uncomment these to check your work!
console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'

// Challenge: wereAwesome

// Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"

function wereAwesome(you, yourBuddy) {
  // let greeting = yourBuddy + " and " + you + " are awesome! "

  let greeting = `${yourBuddy} and ${you} are awesome!`
  return greeting
}


// Uncomment the lines below to test your function:
console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"

// Challenge: lastLetter

// Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

// Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'


function lastLetter(word) {
  let lastCharacter = word[word.length-1]
  return lastCharacter
 }
 
 // Uncomment the lines below to test your code
 console.log(lastLetter("hello")); //=> "o"
 console.log(lastLetter("goodbye!")); //=> "!"
 console.log(lastLetter("ZeltoiD")); //=> "D"
 console.log(lastLetter("I love Javascript")); //=> "t"

 // Challenge: Passing Arguments

// Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true