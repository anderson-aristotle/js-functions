'use strict'

// we have some dogs. make sure we don't feed the same dog too much
// dog one
const dogOne = {
  name: 'White Fang',
  openedFoodBag: false,
  foodScoops: 3
}

// dog two
const dogTwo = {
  name: 'Rin Tin Tin',
  openedFoodBag: true,
  foodScoops: 2
}

// dog three
const dogThree = {
  name: 'Lassie',
  openedFoodBag: false,
  foodScoops: 5
}

// dogs array
const dogs = [dogOne, dogTwo, dogThree]

// a callback function that is passed as an argument to feedDogs
const removeScoop = function (dog) {
  dog.foodScoops = dog.foodScoops - 1
}

// a callback function that is passed as an argument to feedDogs
// add 1 scoop of food to each dog that hasn't opened the food bag
const addScoop = function () {

}

// the function should accept an array of dogs
// and two callback functions
const feedDogs = function () {
  // loop through the dogs array and check if they
  // helped themselves, then pass them as an argument to the correct
  // callback
}

// the function should get passed an array of dogs
// and two callback functions
feedDogs(dogs, addScoops, removeScoops)

module.exports = {
  dogs,
  feedDogs,
  addScoops,
  removeScoops
}
