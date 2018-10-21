'use strict'

// politician one
const politicianOne = {
  name: 'Hubert Humphrey',
  honest: true,
  rating: 500
}

// student two
const politicianTwo = {
  name: 'Richard Nixon',
  honest: false,
  rating: 450
}

// politicians array
const politicians = [politicianOne, politicianTwo]

// parameters:
// politician: a politician object
// This function should deduct 25 points away from politician's rating
const deductForDishonesty = function () {
  // where do you define the parameters for this function?
  // how do you then use the parameters?
  // what should this function return?
}

// parameters:
// politician: a politician object
// This function should add 5 points to politicians's rating
const addForHonesty = function () {

}

// parameters:
// politicians: an array of politician objects
// honestyCallbackFunction: a function to add to a politician's rating if they are honest
// dishonestyCallbackFunction: a function to deduct from a politician's rating when they are dishonest
//
// This function makes use of callbacks (functions passed to other functions).
// It should accept an array of politicians
// and two callback functions, loop through the politicians array,
// and then pass the politician to the correct callback function as an argument.
const runHonestyScript = function () {
  console.log('running honesty script...')
}

// Invoke the runHonestyScript() function when this script is loaded.
// use like: `node lib/politician-honesty-lab.js`
// Alternatively, you can load this file into node and directly invoke
// any of the functions defined in this file.
runHonestyScript()

module.exports = {
  politicians,
  runHonestyScript,
  deductForDishonesty,
  addForHonesty
}
