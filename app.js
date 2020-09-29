//1. String Reversal
//Given a string of characters as input, write a function that returns it with the characters reversed.
const input = "string"
function StringReversal() {
    array = input.split("") 
    array.reverse()
    array.join()
    console.log(array)
}
StringReversal();

//2. Palindrome
//A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
const palindrome = "test"
function CheckPalindrome() {
    array = palindrome.split("")
    palindromeReverse = array.reverse()
    console.log(palindromeReverse)
    palindromeReverseFinal = palindromeReverse.join("")
    console.log(palindrome)
    console.log(palindromeReverseFinal)
    if (palindrome === palindromeReverseFinal) {
        console.log(true)
    } 
    else {
        console.log(false)
        }
}
CheckPalindrome();

//3. Integer Reversal
//Given an integer, reverse the order of the digits.
const int = 1234
function integerReverse() {
    const newInt = int.toString()
    const array = newInt.split("")
    const reversedInt = array.reverse();
    const finalInt = reversedInt.join("");
    console.log(finalInt)
    const intReversed = parseInt(finalInt)
    console.log(intReversed)
}
integerReverse();

//4. Fizz Buzz
//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, 
//print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
function fizzbuzz(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            console.log("fizzbuzz")
        }
        else if (i % 2 == 0) {
            console.log("fizz")
        }
        else if (i % 3 == 0) {
            console.log("buzz")
        }
        else {
            console.log(i)
        }

    }
}
fizzbuzz(10);

//5. Max Character
//Given a string of characters, return the character that appears the most often.
const charString = "I am characters"
function maxCharacter() {
    
}

//Mentor suggestion #1
// take an array of numbers and return the indices of the first pair that adds up to 
// a target. (example: array [1, 3, 5, 6, 4], target 9, the output would be [1,3]. 
// Work on getting the first pair, then once the solution is in place, 
// return an array of pairs.

let exArray = [1, 3, 5, 6, 4];
let target = 9;

// use a hash table/ JS object for efficiency 

let twoSum = function(exArray, target) {
    numsIndex = {};

    for (let i = 0;  i < exArray.length ; i ++) {
        let currentDiff = target - exArray[i];

        if (numsIndex[currentDiff] !== undefined && numsIndex[currentDiff] !== i) {
            return [i, numsIndex[currentDiff]];
            
        } else {
            numsIndex[exArray[i]] = i;
        }

    }

}

twoSum(exArray, target);

//explanation of code: create function two sum that takes in the array and the target
// create an object numsIndex  to create a hash table
//use a for loop to loop through the example array
// use curretnDiff variable to store the target minus the current number
//in the array ex: 9 - 1 = 8 
//if the current diff is in the hash map and is not undefined and is not the current
// number in the example array then we can return the current number's index and the
// hashmap's value for the current diff's key
//otherwise add the current number in the example array to the hash map as a key
// and add the index as a value 



//mentor suggestion 2
// take a relative path and the current path and return the absolute 
// path (like how files get imported) - it will work with manipulating 
// strings and arrays

// path with reference to root directory is called absolute
// path with reference to current directory is called relative

let relativePath = '/foobar';
let currentPath = 'https://foo.org/bar';

let re = /[/w-]/
let newOne = relativePath.replace(re, "");
console.log(newOne)
let re2 = /\/bar/;
let newCurrent = currentPath.replace(re2, "");
console.log(newCurrent);
let absolutePath = `${newCurrent}/${newOne}`;
console.log(absolutePath);




//mentor suggestion 3
// write a function that takes a form id and parses through the 
// dom to create a request object (for example <form><input name="foo.bar"></form>  
// would output {foo: {bar: <value>}} start with just text inputs, 
// then start adding the other cases.

//let findId = function(id) {

//}