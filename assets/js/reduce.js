const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const sumWithInitial = array1.reduce((acc, curr) => acc + curr,0);

console.log(sumWithInitial);
// Expected output 10