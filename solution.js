const fs = require("fs");


const filename = process.argv[2];
if (!filename) {
    console.log("Usage: node solution.js test1.json");
    process.exit(1);
}

const input = JSON.parse(fs.readFileSync(filename, "utf8"));

let k = input.keys.k;
let points = [];


function bigIntFromBase(str, base) {
    let b = BigInt(base);
    let result = 0n;

    for (let ch of str) {
        let digit;
        if (ch >= '0' && ch <= '9') digit = BigInt(ch.charCodeAt(0) - 48);
        else digit = BigInt(ch.toLowerCase().charCodeAt(0) - 87); 
        result = result * b + digit;
    }
    return result;
}

for (let key of Object.keys(input)) {
    if (key === "keys") continue;
    if (!/^\d+$/.test(key)) continue;

    let base = parseInt(input[key].base);
    let value = input[key].value;

    let x = BigInt(key);
    let y = bigIntFromBase(value, base);

    points.push({ x, y });
}

points.sort((a, b) => Number(a.x - b.x));
points = points.slice(0, k);

function lagrangeConstant(points) {
    let resultNum = 0n;
    let resultDen = 1n;

    for (let i = 0; i < points.length; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        let num = yi;
        let den = 1n;

        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            let xj = points[j].x;

            num *= -xj;
            den *= (xi - xj);
        }

        resultNum = resultNum * den + num * resultDen;
        resultDen = resultDen * den;
    }

    return resultNum / resultDen;
}

let C = lagrangeConstant(points);
console.log("Constant C:", C.toString());




