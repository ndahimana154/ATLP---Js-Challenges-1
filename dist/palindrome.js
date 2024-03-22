"use strict";
const checkPalindromeFx = (string) => {
    string = string.toLowerCase().trim();
    // Remove Spaces
    var newWord = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " " || string[i] == ".") {
            continue;
        }
        newWord += string[i];
    }
    // The Spaces are romved then it's time to reverse.
    var reversedWord = "";
    for (let j = newWord.length - 1; j >= 0; j--) {
        reversedWord += newWord[j];
    }
    //   Check if the Removed Spaces Word is Same as Reversed Word
    if (reversedWord == newWord) {
        return `${string} is a Palindrome`;
    }
    return `${string} is not Palindrome`;
};
var str = "Mr. Owl ate my metal worm";
console.log(checkPalindromeFx(str));
