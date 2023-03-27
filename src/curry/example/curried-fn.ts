import { curry, $ } from '../curry';

const concatStrings = (str1: string, str2: string) => `${str1} ${str2}`;

const curriedConcatStrings = curry(concatStrings);

const partial = curriedConcatStrings($, 'World!');

const helloWorld = partial('Hello,');

console.info(helloWorld);
