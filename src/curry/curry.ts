import { AnyFunction } from '../types/utility-types.type';
import { Curry } from './curry.type';

export const $ = Symbol('$');

const updateArgs = (args: any[], more: any[]) => {
    for (let i = 0; i < args.length; i++) {
        if (args[i] === $) {
            args[i] = more.shift();
        }
    }
    return [...args, ...more];
};

export const curry =
    <T extends AnyFunction>(fn: T): Curry<ReturnType<T>, Parameters<T>> =>
    (...args) => {
        if (args.length >= fn.length && !args.includes($)) {
            return fn(...args);
        }

        // use object to dynamically name curry function 
        const curried = {
            [fn.name]: (...more) => {
                const newArgs = updateArgs(args, more);
                return curry(fn)(...newArgs);
            },
        };

        return curried[fn.name];
    };
