// Immutability of type and arrays

interface Cat {
  name: string;
  breed: string;
}

// -Readonly
function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");

// -readonly
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);

// -as const
const reallyConst = [1, 2, 3] as const;
