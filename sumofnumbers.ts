// for loop
function sumFor(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// while loop
function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// recursion
function sumRecursion(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1));
}

// array functionla programming
function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
