type FnType<X, G> = (value: X) => G;

const returnAnOption = (value: any) => (value instanceof Option ? value : Option.from(value));

const openOption = (value: any) => (value instanceof Option ? value.unwrap() : value);

export class Option<T extends any | undefined> {
    constructor(private value: T) {}

    run<X, G>(fn: FnType<X, G>): Option<G | undefined> {
        const openedValue = openOption(this.value) as X;

        if (openedValue === undefined) {
            return Option.from(undefined);
        }

        const result = fn(openedValue);
        return returnAnOption(result);
    }

    unwrap(): T {
        return this.value;
    }

    static from<T>(value: T) {
        return new Option(value);
    }
}
