import { AnyFunction } from '../types/utility-types.type';

const returnWithLog = (value: WithLog<any> | any) =>
    value instanceof WithLog ? value : WithLog.from(value);

const openWithLog = (value: WithLog<any> | any) =>
    value instanceof WithLog ? value.unwrap() : value;

export class WithLog<T> {
    constructor(private value: T) {}

    run(fn: AnyFunction) {
        const response = fn(this.value);

        console.log(fn.name, { params: this.value, response });

        return returnWithLog(response);
    }

    unwrap(): T {
        return this.value;
    }

    static from<T>(value: T) {
        return new WithLog(value);
    }
}
