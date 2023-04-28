//Declaring in function both - arguments and output
export function addNumbers(a: number, b: number): number {
  return a + b;
}

// = "" acts as a default if not used
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

//union mark | - provides a possibility of different types available
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

//Declaring type as void - doesn't return a value but runs an operation
export const printFormat = (title: string, params: string | number): void =>
  console.log(title, params);

//Using Promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//One of parameters is an array
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}
// ? after user provides an undefined output if there is no other
// ?? provides a default option if there is undefined
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
