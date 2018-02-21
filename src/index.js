module.exports = function solveEquation(equation) {
    let el = equation.split(' ');
    let a = el[0];
    let b = el[3] + el[4];
    let c = el[7] + el[8];

    let d = Math.pow(b, 2) - (4 * a * c);

    let result = [];

    if (d > 0) {
        let res1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
        let res2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
        result.push(res1, res2);
    }

    result.sort((a, b) => {
        return (a > b) ? 1 : -1;
    });

    return result;

}
