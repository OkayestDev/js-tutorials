import { pipe } from '../pipe';
import { curry, $ } from '../../curry/curry';

const add = curry((x: number, y: number) => {
    return x + y;
});

// prettier-ignore
const pipedAdds = pipe(
    add,
    add($, 7),
    add(10, $)
);

console.info(typeof pipedAdds);

const result = pipedAdds(3, 2);

console.info({ result });
