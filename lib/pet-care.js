'use strict'

// we have some pets. make sure we don't feed the same pet too much
// pet one
const petOne = {
  name: 'White Fang',
  canOpenFoodBag: false,
  foodScoops: 3
}

// pet two
const petTwo = {
  name: 'Rin Tin Tin',
  canOpenFoodBag: true,
  foodScoops: 2
}

// pet three
const petThree = {
  name: 'Lassie',
  canOpenFoodBag: false,
  foodScoops: 5
}

// pets array
const pets = [petOne, petTwo, petThree]

// a callback function that is passed as an argument
// to feedPets, reverses the effects of addScoops
const removeScoops = function (pet) {
  pet.foodScoops = pet.foodScoops - 2
}

// a callback function that is passed as an argument to
// feedPets(), add 11 scoops of food to each pet that
// is able to open the food bag
const addScoops = function () {

}

// the function should accept an array of pets
// and two callback functions
const feedPets = function () {
  // loop through the pets array and check if they
  // helped themselves, then pass them as an argument to the correct
  // callback
}

// the function should get passed an array of pets
// and two callback functions
feedPets(pets, addScoops, removeScoops)

module.exports = {
  pets,
  feedPets,
  addScoops,
  removeScoops
}
