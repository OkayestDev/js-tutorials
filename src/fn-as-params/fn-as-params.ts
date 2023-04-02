export const evaluator = (fnOrArg) =>
    typeof fnOrArg === 'function' ? fnOrArg() : fnOrArg;
