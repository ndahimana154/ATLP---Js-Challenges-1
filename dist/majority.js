"use strict";
const findMajority = (arr) => {
    const arrLen = arr.length;
    var major = false;
    var occ, num;
    // Iterate throught the loop
    for (let i = 0; i < arrLen - 1; i++) {
        const currentNumber = arr[i];
        var occurences = 1;
        // Loop to check if no Occurences
        for (let j = 0; j < arrLen - 1; j++) {
            if (i == j) {
                break;
            }
            if (arr[j] == currentNumber) {
                occurences += 1;
            }
        }
        if (occurences > arrLen / 2) {
            major = true;
            occ = occurences;
            num = currentNumber;
            break;
        }
    }
    return major
        ? `Yes, there is major element, ${num} occured ${occ} times`
        : `No major element found!`;
};
console.log(findMajority([1, 5, 7, 9, 5, 5, 57, 5]));
