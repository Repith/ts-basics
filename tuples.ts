type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([1, 2, 3], [10, 20, 30]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [stringGetter, stringSetter] = simpleStringState("hello");
console.log(stringGetter());
stringSetter("goodbye");
console.log(stringGetter());

function myOwnState(initial: string): [() => string, (v: string) => void] {
  let str = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [stateGetter, stateSetter] = myOwnState("test");

console.log(stateGetter());
stateSetter("different");
console.log(stateGetter());
