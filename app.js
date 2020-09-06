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