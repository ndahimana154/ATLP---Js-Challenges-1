const primenumbers = (num: number): string => {
  var isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) isPrime = false;
    break;
  }
  return isPrime ? `${num} is Prime number` : `${num} is Not a Prime Number`;
};



console.log(primenumbers(70));