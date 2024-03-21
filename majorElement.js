function hasMajorityElement(arr) {
    let candidate = null;
    let count = 0;

    // Find potential majority element
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Verify if potential majority element occurs more than half of the array size
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    return count > arr.length / 2;
}

// Example usage:
const array1 = [3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3];
console.log("Array 1 has majority element:", hasMajorityElement(array1));

const array2 = [3, 1, 3, 4, 4];
console.log("Array 2 has majority element:", hasMajorityElement(array2));
