[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

- [JavaScript Reference Types](https://git.generalassemb.ly/ga-wdi-boston/js-reference-types)
- [JavaScript Functions Study](https://git.generalassemb.ly/ga-wdi-boston/js-functions-study)

## Objectives

By the end of this talk, developers should be able to:

- Create and invoke functions that take reference types as arguments.
- Create and invoke functions that return reference types.
- Create and invoke functions that take functions as arguments.
- Create and invoke functions that return functions.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Create a new branch, `training`, for your work.
1. Install dependencies with `npm install`.

### Introduction

What is a function? Why do we use them?

Today we're going to look more closely at functions. In particular we are
going to look at how values are passed into functions to be used within a
function body, and how values are returned from functions, so the rest of your
code can take advantage of the output of a function. You can think of this as
functions arguments and returned values.

### Arguments and Return Values

*Arguments* are values that you pass into a function when you invoke the function. When you first define the function, you specify which *parameters* the function will accept, and give those parameters names, much like naming a variable that will hold a value.

Functions can be defined with 0 or more parameters. Just because you are using a function does not mean you have to pass arguments when you invoke the function:

```js
const printHello = function () {
  console.log("Hello World")
}

printHello()
```


### Return Values

Each time a function is invoked, the code within the function is executed. The function returns a value as specified by the *return* keyword. If nothing is specified, it will return the value `undefined`, even if you are doing something like the above example with `console.log()`.

Note that the `return` value from a function and using `console.log()` are different. How are they different?

### Functions with 1 or more arguments

Some functions are defined with 1 or more parameters and expect 1 or more arguments to be
passed when called:

```js
const subtract = function (num1, num2) {
  return num1 - num2
}

subtract(2, 1) // 1
```

The order of the arguments matter:

```js
const subtract = function (num1, num2) {
  return num1 - num2
}

subtract(1, 2) // -1
subtract(2, 1) // 1
```

The type of the arguments matter:

```js
const add = function (num1, num2) {
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
const subtract = function (nums) {
  return nums[0] - nums[1]
}

// number
const add = function (num1, num2) {
  return num1 + num2
}

subtract([2, 1]) // 1
add(2, 1) // 3
```

### Demo - multiple arguments

Watch as I write a function `max` that takes 4 numbers and returns the max of the four numbers.

### Lab - single array argument

Write a function `maxOfArray` that takes an array of numbers and returns the
maximum value in the array.

### Reference types as arguments

You can also pass _reference types_ to functions (arrays and objects). Reference types passed as arguments can be modified within the function, however it is often considered an [anti-pattern to modify an object that is passed to a function](https://softwareengineering.stackexchange.com/questions/208828/passing-an-object-into-a-method-which-changes-the-object-is-it-a-common-anti).

Why is that?

### Demo - primitive data types as arguments

Watch as I work with functions that take primitive data types as arguments:

```js
let num = 1

const change = function (incomingNum) {
  incomingNum++
  console.log(incomingNum)
}

change(num) // 2
console.log(num) // 1
```

### Demo - reference types as arguments - arrays

Watch as I work with a function that takes reference types as arguments.

First we will work with an array as a function argument:

```js
let numbers = [1, 2, 3]

const change = function (incomingArray) {
  numbers.push(4)
  console.log(incomingArray)
}

change(numbers) // [1, 2, 3, 4]
console.log(numbers) // [1, 2, 3, 4]
```

Next we will take an object as an argument:

```js
let person = {
  name: "Mike",
  age: 100
}

const getOlder = function (personParam) {
  personParam.age++
  console.log(personParam.age)
}

getOlder(person) // 101
console.log(person.age) // 101
```

### Code along - reference type arguments

Let's write a function `addProperty` that takes an object, and adds a property to the object. Then, we will assign a value to the property. All three things we need in this function are going to be passed in when we invoke the function:

```js
const addProperty = function (obj, prop, val) {
  // this function takes an object and adds a property
  // to it
}
```

### Functions as arguments

Along with primitives and reference types, you can also pass in functions into other functions. A function at the end of the day is just another kind of object.

A function that is passed to another function is called a _callback_.

```js
const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const doMath = function (num1, num2, operation) {
  return operation(num1, num2)
}

doMath(2,1, add) // 3
doMath(2,1, subtract) // 1
```

This is a *very important term*: What is a *callback*?

A callback is a function that is passed to another function.

### Primitive data types as returns values

Primitive data types returned are a new instance of the data type

```js
let num = 1

const change = function (incomingNum) {
  incomingNum++
  return incomingNum
}

let newNum = change(num)
console.log(newNum) // 2
console.log(num) // 1
```

### Reference types as returns values

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

 const change = function (incomingNumsArray) {
   incomingNumsArray.push(4)
   return incomingNumsArray
 }

 let newNumbers = change(numbers)
 console.log(newNumbers) // [1, 2, 3, 4]
 console.log(numbers) // [1, 2, 3, 4]

 newNumbers.push(5,6,7)
 console.log(newNumbers) // [1, 2, 3, 4, 5, 6, 7]
 console.log(numbers) // [1, 2, 3, 4, 5, 6, 7]
```

### Lab - reference types as arguments and return values

Starting with the code in `lib/politician-honesty-lab.js`, write a function that takes an array of politicians and two callback functions. The function should loop through the politicians to check if they were honest, and then apply the correct callback function to adjust their score.

### Code along  - Functions as returns values

Remember that in JavaScript, everything is an object, even a function. We
already know how to return objects from functions. We can also return functions
from functions that can be invoked whenever we like.

Say we want a counter that stores a number and increments it by some fixed
amount, e.g. starting at 0 and then counting up to 4, 8, 12, 16, etc. We can
accomplish that with a function that references an outside variable to keep
track of the counter, like this:

```js
let counter = 0
const countBy4 = function () {
  counter += 4
  return counter
}
```

To accomplish the above, you are taking into account where the variable `counter` is defined, and what _scope_ it has. A variable declared outside of a function can be accessed inside a function, but a variable declared inside a function is only accessible inside the function. This and more discussion on scope in JavaScript is the topic for another talk on [js-scope](https://git.generalassemb.ly/ga-wdi-boston/js-scope)

What if we needed several of these functions, each with a different sized
increment? We could accomplish that with a function that returns another
function. Let's give it a try!

```js
const counterFactory = function (increment) {

}
```

### Additional Resources

- [Callbacks](https://www.impressivewebs.com/callback-functions-javascript/)
- [Callback Challenge](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)
- [Array slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [Function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function arguments key word](https://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
