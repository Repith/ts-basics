function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];
  arr.forEach((n, i) => {
    result.push(fn(n, i));
  });
  return result;
}
