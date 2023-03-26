type AnyFn = (...args: any[]) => any;

export const pipe =
    (...fns: AnyFn[]) =>
    (...args) => {
        const pipeHandler = (index, accumulator: any[] = []) => {
            if (index >= fns.length) {
                return accumulator[0];
            }
            const fn = fns[index];
            const response = fn(...accumulator);

            return pipeHandler(index + 1, [response]);
        };

        return pipeHandler(0, args);
    };
