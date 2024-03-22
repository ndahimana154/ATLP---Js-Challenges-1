"use strict";
function sortFx(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedNumbers = sortFx(numbers);
console.log(sortedNumbers);
