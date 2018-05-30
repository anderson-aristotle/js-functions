[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

-   [JavaScript Reference Types](https://git.generalassemb.ly/ga-wdi-boston/js-reference-types)
-   [JavaScript Functions - "Ins & Outs" - Study](https://git.generalassemb.ly/ga-wdi-boston/js-functions-arguments-and-return-values-study)

## Objectives

By the end of this talk, developers should be able to:

-   Create and invoke functions that take an arbitrary number of arguments
-   Create and invoke functions that take reference types as arguments
-   Create and invoke functions that return reference types
-   Create and invoke functions that take functions as arguments
-   Create and invoke functions that return functions

## Preparation

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

## Introduction

What is a function? Why do we use them?

Today we're going to look more closely at functions.  In particular we are going to look at how values are passed into functions to be used within a function body, and how values are returned from functions, so the rest of your code can take advantage of the output of a function. You can think of this as functions arguments and returned values.

## "Arguments and Return Values"

### "Arguments"

#### Functions with 0 arguments

Some functions do not have parameters when they are defined and do not need
to be passed arguments when they are called.

```js
const printHello = function(){
  console.log("Hello World")
}

printHello()
```

#### Functions with 1 or more arguments

Some functions define 1 or more parameters and expect 1 or more arguments to be
passed when called.

```js
const subtract = function(num1, num2){
  return num1 - num2
}

subtract(2, 1) // 1
```

The order of the arguments matter.

```js
const subtract = function(num1, num2){
  return num1 - num2
}

subtract(1, 2) // -1
subtract(2, 1) // 1
```

The type of the arguments matter.

```js
const add = function(num1, num2){
  return num1 + num2
}

add(1, 2) // 3
add("cat", 1) // "cat1"
```

It is up to the developer to know the order and type of arguments a function
is expecting.

The arguments passed to a function can be any primitive data types or reference types,
which include objects, arrays, and functions.

```js
// array
const subtract = function(nums){
  return nums[0] - nums[1]
}

// number
const add = function(num1, num2){
  return num1 + num2
}

subtract( [2, 1] ) // 1
add( 2, 1 ) // 3
```

##### Lab - single array argument

Write a function `maxOfArray` that takes an array of numbers and returns the
max.

#### Reference types as arguments

Reference types passed as arguments can be modified within the functions.
It is often considered an [anti-pattern to modify an object that is passed to a function](https://softwareengineering.stackexchange.com/questions/208828/passing-an-object-into-a-method-which-changes-the-object-is-it-a-common-anti).

##### Demo - primitive data types as arguments

```js
let num = 1

const change = function (num) {
  num++
  console.log(num)
}

change(num) // 2
console.log(num) // 1
```

##### Demo - reference types as arguments - arrays

```js
let numbers = [1, 2, 3]

const change = function (numbers) {
  numbers.push(4)
  console.log(numbers)
}

change(numbers) // [1, 2, 3, 4]
console.log(numbers) // [1, 2, 3, 4]
```

##### Demo - reference types as arguments - objects

```js
let person = {
  name: "Mike",
  age: 100
}

const getOlder = function (person) {
  person.age++
  console.log(person.age)
}

getOlder(person) // 101
console.log(person.age) // 101
```

##### Code along - reference type arguments

```js

const addProperty = function (obj, prop, val) {
  // this function takes an object and adds a property
  // to it

}
```

#### Functions as arguments

Functions are valid arguments.
A function that is passed to another function is called a callback.

```js
const add = function (num1, num2){
  return num1 + num2
}

const subtract = function (num1, num2){
  return num1 - num2
}

const doMath = function (num1, num2, operation) {
  return operation(num1, num2)
}

doMath(2,1, add) // 3
doMath(2,1, subtract) // 1
```

What is a callback?
A callback is a function that is passed to another function.

### "Return Values"


#### Primitive data types as returns values
Primitive data types returned are a new instance of the data type

```js
let num = 1

const change = function (num) {
  num++
  return num
}

let newNum = change(num)
console.log(newNum) // 2
console.log(num) // 1
```

#### Reference types as returns values

Reference types declared within the function that are returned from functions
create new instances of that reference type.

```js
const createArray = function () {
  let result = []

  for (let i = 0; i < arguments.length; i++) {
    result[i] = arguments[i]
  }

  return result
}

let outcome = createArray(1,2,false,true)
console.log(outcome) // [1, 2, false, true]
console.log(result) // ReferenceError: result is not defined
```

 Reference types not declared within the function that are
 returned from functions are still the same reference type
 and not new instances.

 ```js
 let numbers = [1, 2, 3]

 const change = function (numbers) {
   numbers.push(4)
   return numbers
 }

 let newNumbers = change(numbers)
 console.log(newNumbers) // [1, 2, 3, 4]
 console.log(numbers) // [1, 2, 3, 4]

 newNumbers.push(5,6,7)
 console.log(newNumbers) // [1, 2, 3, 4, 5, 6, 7]
 console.log(numbers) // [1, 2, 3, 4, 5, 6, 7]
```

##### Lab - reference types as arguments and return values

Write a function that takes an array of pets and two callback functions. The
function should loop through the pets to check if they can get into their bag of
kibble and then apply the correct callback function to adjust their dinner
portions.

##### Code along  - return new objects

```js
const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {

}
```

#### Functions as returns values

Remember that in JavaScript, everything is an object, even a function. We already know how to return objects from functions. We can also return functions from functions that can be invoked whenever we like.

## Additional Resources
-   [Callbacks](https://www.impressivewebs.com/callback-functions-javascript/)
-   [Callback Challenge](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)
-   [Array slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
-   [Array shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
-   [Function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
-   [Function arguments key word](https://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
