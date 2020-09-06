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