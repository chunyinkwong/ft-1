export function evaluate(expression: string): number {
    const allowed = '0123456789+-*/(). '
    let cleanExpression = '';
    for (let ch of expression) {
        if (allowed.indexOf(ch) !== -1) {
            cleanExpression += ch;
        }
    }
    try {
        return eval(cleanExpression);
    } catch (e) {
        return NaN;
    }
}
