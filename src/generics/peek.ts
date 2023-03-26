export const peek = <T>(arr: T[]) => arr[arr.length - 1];

export const peekNoType = (arr: any[]) => arr[arr.length - 1];

const stringArray = ['Hello', 'World!'];
const numberArray = [1, 2, 3];

const result = peek(stringArray);

const result2 = peek<string>(stringArray);

// const result3 = peek<string>(numberArray);

// export const grab =
//     <T>(key: keyof T) =>
//     (obj: T): T[keyof T] =>
//         obj[key];

// const obj = { some: 'value' };

// const result3 = grab('some')(obj);
// const result4 = grab('something')(obj);
