# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @squoog/lotide`

**Require it:**

`const _ = require('@usquoog/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: accepts 2 arrays and determines whether they are deeply equal*
* `assertEqual(actual, expected)`: accepts 2 values and determines whether they are deeply equal*
* `assertObjectsEqual(actual, expected)`: accepts 2 objects and determines whether they are deeply equal*
* `countLetters(string)`: accepts a string and returns the character count*
* `countOnly(allItems, itemsToCount)`: accepts an array of strings and a key, returning the number of instances of the key withing the array* 
* `eqArrays(array1, array2)`: accepts 2 arrays and determines whether they are deeply equal* 
* `eqObjects(object1, object2)`: accepts 2 objects and determines whether they are deeply equal* 
* `findKey(object, callback)`: accepts an object and callback function and returns the first key that matches a value given by the callback function* 
* `findKeyByValue(object, value)`: accepts and a value, and returns a key that matches the value* 
* `head(array)`: returns the first element in an array* 
* `letterPositions(string)`: accepts a string and returns an object containing indices for each non-whitespace character that appears in the string* 
* `map(array, callback)`: accepts an array and a callback function, and returns an array that has been passed through the callback function* 
* `middle(array)`: accepts an array and returns the value in the middle index (or the 2 values in the middle indices if array contains an even number of items)* 
* `tail(array)`: accepts an array and returns a new array without the first element* 
* `takeUntil(array, callback)`: accepts an array and a callback function, and constructs a new array that ends once it reaches the value returned by the callback function* 
* `without(array1, array2)`: accepts an array and removes all instances of elements contained in the second array* 
