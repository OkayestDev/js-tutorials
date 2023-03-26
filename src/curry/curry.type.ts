import { FilteredTypeArray, Tuple } from '../types/utility-types.type';

export type Curry<FnReturnType, Args extends any[]> = <
    Sym extends Symbol,
    PassedArgs extends (Partial<Args>[number] | Sym)[]
>(
    ...args: PassedArgs
) => Exclude<PassedArgs, Args> extends never
    ? FnReturnType
    : Curry<FnReturnType, Tuple<Args[number], FilteredTypeArray<PassedArgs, Sym>['length']>>;
