const typicalAdd = (x, y) => x + y;

const typicalResult = typicalAdd(5, 6);
console.log({ typicalResult });

const add =
    (x: number) =>
    (y: number): number => {
        return x + y;
    };

const partialAdd = add(5);
console.log(typeof partialAdd);
const result = partialAdd(6);
console.log({ result });
