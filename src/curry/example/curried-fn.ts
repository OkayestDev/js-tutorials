import { curry, $ } from '../curry';

const concatStrings = (str1: string, str2: string) => `${str1} ${str2}`;

const curriedConcatStrings = curry(concatStrings);

console.info('curriedConcatStrings is a', typeof curriedConcatStrings);

const partial = curriedConcatStrings('Hello', $);

console.info('partial is a', typeof partial);

const helloWorld = partial('World!');

console.info('helloWorld is a', typeof helloWorld);
console.info(helloWorld);
