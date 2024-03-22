// Getting Primes array
const filterArrayFx = (array) => {
  var primeArray = [];
  var nonPrimeArray = [];
  //   Loop through the aArray
  for (let i = 0; i < array.length; i++) {
    var currentNum = array[i];
    isPrime = true;
    // CHeck if  the current index is prime by Looping
    for (let j = 2; j < currentNum; j++) {
      if (currentNum % j == 0) {
        isPrime = false;
        break;
      }
    }
    // Check if the isPrime ended True or False
    if (isPrime) {
      primeArray.push(currentNum);
    } else {
      nonPrimeArray.push(currentNum);
    }
  }

  // Return the Prime numbers Array
  return `Array of Prime numbers: ${primeArray} and Array of Non Prime numbers ${nonPrimeArray} `;
};

const arr = [
  2, 5, 7, 3, 6, 2, 5, 11, 11, 44, 56, 6, 3, 45, 64, 17, 3, 56, 35, 6, 7, 4, 3,
];
console.log(filterArrayFx(arr));
