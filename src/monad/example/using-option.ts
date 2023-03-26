import { Option } from '../option-monad';

const doSomething = (arg) => {
    console.info('doSomething');
    return {
        ...arg,
        value: arg.value + 1,
    };
};

const returnUndefined = (arg) => {
    console.info('returnUndefined');
    return undefined;
};

const iWillThrowIfArgIsUndefined = (arg) => {
    console.info('iWillThrowIfArgsIsUndefined');
    return arg.someValue;
};

try {
    const step1 = doSomething({ value: 0 });
    const step2 = returnUndefined(step1);
    iWillThrowIfArgIsUndefined(step2);
} catch (error) {
    console.info(error);
}

// const optionArg = Option.from({ value: 0 });
// const resultingOption = optionArg
//     .run(doSomething)
//     .run(returnUndefined)
//     .run(iWillThrowIfArgIsUndefined);
// console.info('No error and result is', resultingOption.unwrap());
