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

// a callback function that is passed as an argument
// to runHonestyScript(), takes 25 points away from
// politician's rating
const deductForDishonesty = function (politician) {
  politician.rating = politician.rating - 25
}

// a callback function that is passed as an argument
// to runDishonestyScript(), adds 5 points to politicians's
// rating
const addForHonesty = function () {

}

// the function should accept an array of politicians
// and two callback functions
const runHonestyScript = function () {
  // loop through the politicians array and check if they
  // were dishonest, then pass them as an argument to the correct
  // callback

}

// the function should get passed an array of politicians
// and two callback functions
runHonestyScript()

module.exports = {
  politicians,
  runHonestyScript,
  deductForDishonesty,
  addForHonesty
}
