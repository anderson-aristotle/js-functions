'use strict'

// we have some pets. make sure we don't feed the same pet too much
// student one
const petOne = {
  name: 'Fang',
  canOpenFoodBag: false,
  foodScoops: 3
}

// student two
const petTwo = {
  name: 'Rover',
  canOpenFoodBag: true,
  foodScoops: 2
}

const petThree = {
  name: 'Kerberos',
  canOpenFoodBag: false,
  foodScoops: 5
}

// pets array
const pets = [petOne, petTwo, petThree]

// a callback function that is passed as an argument
// to feedPets, reverses the effects of shareFood
const stopFoodSharing = function (student) {
  student.score = student.score - 25
}

// a callback function that is passed as an argument to
// feedPets(), add 11 scoops of food to each pet that
// is able to open the food bag
const shareFood = function () {

}

// the function should accept an array of pets
// and two callback functions
const feedPets = function (pets, shareFoodCallback, stopFoodSharingCallback) {
  // loop through the pets array and check if they
  // helped themselves, then pass them as an argument to the correct
  // callback
}

// the function should get passed an array of students
// and two callback functions
feedPets(pets, shareFood, stopFoodSharing)

module.exports = {
  pets,
  feedPets,
  shareFood,
  stopFoodSharing
}
