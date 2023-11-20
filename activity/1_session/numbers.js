function getNumbersDivisible(divisor, limit) {
  let divisibleNumbers = [];

  for (let i = 1; i <= limit; i++) {
    if (i % divisor === 0) {
      divisibleNumbers.push(i);
    }
  }

  return divisibleNumbers;
}

const numbers = getNumbersDivisible(7, 100);

export default numbers;
