const reverseFx = (array) => {
  reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

arr = [1, 4, 7, 8, 9, 5, 4, 3, 3];

console.log(reverseFx(arr));