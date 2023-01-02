export const divisible = (totalNumbers, dividerKey) => {
  if (totalNumbers && dividerKey || (typeof totalNumbers === 'number' && typeof totalNumbers === 'number') ) {
    const validNumbers = [];
    for(let x = 0; x <= totalNumbers; x++) {
      if (x % dividerKey === 0) {
        validNumbers.push(x);
      }
    }

    console.log("Ejercicio 4: ", validNumbers.join(', '));
  } else {
    throw error('Invalid parameters');
  }
}