'use strict'

// student one
const studentOne = {
  name: 'Mike',
  cheated: true,
  score: 100
}

// student two
const studentTwo = {
  name: 'Bernard',
  cheated: false,
  score: 90
}

// students array
const students = [studentOne, studentTwo]

// a callback function that is passed as an argument
// to runCheatingScript(), takes 25 points away from
// student's score
const deductForCheating = function (student) {
  student.score = student.score - 25
}

// a callback function that is passed as an argument
// to runCheatingScript(), adds 5 points to student's
// score
const addForHonesty = function () {

}

// the function should accept an array of students
// and two callback functions
const runCheatingScript = function () {
  // loop through the students array and check if they
  // cheated, then pass them as an argument to the correct
  // callback

}

// the function should get passed an array of students
// and two callback functions
runCheatingScript()

module.exports = {
  students,
  runCheatingScript,
  deductForCheating,
  addForHonesty
}
