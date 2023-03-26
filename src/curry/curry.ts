import { AnyFunction, FilteredTypeArray, Tuple } from '../types/utility-types.type';

export const $ = Symbol('$');

const updateArgs = (args: any[], more: any[]) => {
    const newArgs = [...args];
    for (let i = 0; i < newArgs.length; i++) {
        if (newArgs[i] === $) {
            newArgs[i] = more.shift();
        }
    }
    return newArgs;
};

export const curry =
    <T extends AnyFunction>(fn: T): CurryPipe<ReturnType<T>, Parameters<T>> =>
    (...args) => {
        if (args.length >= fn.length && !args.includes($)) {
            return fn(...args);
        }

        return (...more) => {
            const newArgs = updateArgs(args, more);
            return curry(fn)(...newArgs);
        };
    };

type CurryPipe<FnReturnType, Args extends any[]> = <
    PassedArgs extends (Partial<Args>[number] | typeof $)[]
>(
    ...args: PassedArgs
) => Exclude<PassedArgs, Args> extends never
    ? FnReturnType
    : CurryPipe<
          FnReturnType,
          Tuple<Args[number], FilteredTypeArray<PassedArgs, typeof $>['length']>
      >;
