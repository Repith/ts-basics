let userName: string = "Marcin";
let hasLoggedIn: boolean = true;

userName += " Gajzler";

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Marcin",
  last: "Gajzler",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

if (ids[30] === "B") {
}

//TS automatically adds a proper type in loops
for (let i = 1; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out: void[] = [4, 5, 6].map((v) => console.log(v + 10));
