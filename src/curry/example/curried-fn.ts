import { curry, $ } from '../curry';

const partialAdd =
    (x: number) =>
    (y: number): number =>
        x + y;

const resultWithPartial = partialAdd(5)(4);

const curriedAdd = curry((x: number, y: number) => x + y);

const resultWithCurry = curriedAdd(5, 4);

const curryPartial = curriedAdd(5);
const resultWithPartialCurry = curryPartial(4);

const partialWithPlaceHolder = curriedAdd($, 5);
const resultWithPlaceholder = partialWithPlaceHolder(4);

console.log({ resultWithPartial, resultWithCurry, resultWithPartialCurry, resultWithPlaceholder });
