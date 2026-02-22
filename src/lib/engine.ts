export function evaluate(expression: string): number {
    const allowed = '0123456789+-*/(). '
    for (let ch of expression) {
        if (allowed.indexOf(ch) === -1) {
            throw new Error('Invalid character');
        }
    }
    return eval(expression);
}
