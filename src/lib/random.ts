export function getRandomInts(size: number, max: number): number[] {
  const numbers: number[] = [];
  while (true) {
    const i = Math.floor(Math.random() * max);
    if (numbers.includes(i)) {
      continue;
    }
    numbers.push(i);
    if (numbers.length == Math.floor(size)) {
      break;
    }
  }
  return numbers;
}
