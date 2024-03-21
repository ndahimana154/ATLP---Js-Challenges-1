function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function customSort(array) {
    // First, remove prime numbers from the array
    const filteredArray = array.filter(num => !isPrime(num));

    // Then, implement a simple sorting algorithm
    for (let i = 0; i < filteredArray.length; i++) {
        for (let j = i + 1; j < filteredArray.length; j++) {
            if (filteredArray[i] < filteredArray[j]) {
                // Swap elements if they're out of order
                const temp = filteredArray[i];
                filteredArray[i] = filteredArray[j];
                filteredArray[j] = temp;
            }
        }
    }

    return filteredArray;
}

// Example usage:
const inputArray = [9, 7, 4, 11, 16, 2,77, 13];
const sortedArray = customSort(inputArray);
console.log("Sorted Array (Descending order with prime numbers removed):", sortedArray);
