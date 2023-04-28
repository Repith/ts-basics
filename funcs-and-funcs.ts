// typing the callback as a void () => void,
// if there would be any parameter it needs to be typed as well
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

//!!! Types exist only in compile context

export type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
  [];
}
console.log(arrayMutate([1, 2, 3], (v) => v * 10));

export function createAdder(num: number): MutationFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(50));
