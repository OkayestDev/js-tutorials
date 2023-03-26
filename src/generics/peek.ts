export const peek = <T>(arr: T[]) => arr[arr.length - 1];

const stringArray = ['Hello', 'World!'];
const numberArray = [1, 2, 3];

const result = peek(stringArray);

const result2 = peek<string>(stringArray);

// const result3 = peek<string>(numberArray);
