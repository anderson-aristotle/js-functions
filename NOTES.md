# Notes for Delivery

## DRY Motivations

We should emphasize the important of being DRY throughout this lesson where it is applicable. We will likely code out similar functions in multiple examples which is a nice opportunity to cover this principle early in the cohort.

## Callbacks

Some developers confuse "callback" with "method that takes a callback"

This indicates that sometimes when we receive vague feedback about "understanding callbacks", some developers do not properly have the vocabulary in their mind.

For example, when a developer says "the reduce callback" what they typically mean is "the reduce method", but what experienced developers would hear is "the function the reduce method receives as the first argument".

Additionally, ask everyone the same question using cold-call cards. Trust me. It sounds silly. Do it.

> "What is a callback?"

> "A callback is a function that is passed to another function."

This is all. They will think it is a trick. They will think there's more they don't get. It's definitional. Callbacks are not special. They are types passed to a function that accesses those values in the body.

### Function naming
from [Issue #52](https://git.generalassemb.ly/ga-wdi-boston/js-functions-ins-and-outs/issues/52)
After the debate taking place in the issues mentioned above, the final consensus on function naming is as follows
```js
// GOOD
const foo = function () { };

// GOOD if needed for recursion
const bar = function bar () {};

// BAD otherwise
const baz = function baz () {};
```
- We originally showed developers naming the function in the declaration, as well as the expression. Useful to point out naming function in the declaration is useful when dealing with recursion, but we shouldn't go into more depth.
