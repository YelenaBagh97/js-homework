//1. odd or even
function oddOrEven(a) {
    if (a % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

//2. is divisible
function isDivisible(a, b) {
    if (a % b === 0 || b % a === 0) {
        return "1";
    } else {
        return "0";
    }
}

//3. triangle angles
function triangle(a, b) {
    return 180 - (a + b);
}


//4. n + nn + nnn
function nNumber(n) {
    return n.toString() + n * n.toString() + n * n * n.toString();
}

//5. last digit to the beginning
function lastToFirst(a) {
    if (a % 10 !== 0) {
        let b = (a % 10).toString();
        a.toString();
        return (b + a).substr(0, (b + a).length - 1);
    } else return a;
}

//6. calculate average
function average(a, b, c, d, e) {
    let sum = a + b + c + d + e;
    return sum / 5;
}

//7. check if multiple of 3, 5 or 7
function isMultiple(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        return a + " is a multiple of 3, 5";
    } else if (a % 3 === 0 && a % 7 === 0) {
        return a + " is a multiple of 3, 7";
    } else if (a % 5 === 0 && a % 7 === 0) {
        return a + " is a multiple of 7, 5";
    } else if (a % 3 === 0 && a % 5 === 0 && a % 7 === 0) {
        return a + " is a multiple of 3, 7 and 5";
    } else if (a % 3 === 0) {
        return a + " is a multiple of 3";
    } else if (a % 5 === 0) {
        return a + " is a multiple of 5";
    } else if (a % 7 === 0) {
        return a + " is a multiple of 7";
    } else {
        return a + " is not a multiple of 3, 7 or 5";
    }
}

//8. check whether it's a baby
function checkIfBabyOrAdult(age, time) {
    if (age >= 1 && age <= 12 && time === "months") {
        return "baby";
    } else if (time === "years") {
        if (age >= 1 && age <= 2) {
            return "toddler";
        } else if (age >= 3 && age <= 12) {
            return "child";
        } else if (age >= 13 && age <= 17) {
            return "teenager";
        } else {
            return "adult";
        }
    }
}

//9. ascending order 3 numbers
function ascending(a, b, c) {
    let tmp = 0;
    if (a > b) {
        tmp = a;
        a = b;
        b = tmp;
        return (a + "," + b + "," + c);
    } else if (a > c) {
        tmp = a;
        c = a;
        c = tmp;
        return (a + "," + b + "," + c);
    } else if (b > c) {
        tmp = b;
        b = c;
        c = tmp;
        return (a + "," + b + "," + c);
    }
}

//10. student passed or not
function passedOrNot(a, b, c) {
    if ((a + b + c) / 3 >= 50 || (a >= 40 && b >= 40 && c >= 40)) {
        return "Passed";
    } else {
        return "Not passed";
    }

}

//11. find the sign of product
function findTheSign(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return "unsigned";
    } else if ((Math.sign(a) < 0 && Math.sign(b) < 0) || (Math.sign(b) < 0 && Math.sign(c) < 0) || (Math.sign(a) < 0 && Math.sign(c) < 0) || (Math.sign(a) > 0 && Math.sign(c) > 0 && Math.sign(b) > 0)) {
        return "+";
    } else {
        return "-";
    }
}


//12. solve quadratic equation
function rootOfQuadratic(a, b, c) {
    if (a !== 0) {
        let D = Math.pow(b, 2) - (4 * a * c);
        if (D === 0) {
            return "solution is " + (-b / (2 * a));
        } else if (D > 0) {
            return "Solutions are " + ((-b + Math.sqrt(D)) / (2 * a)) + " and " + ((-b - Math.sqrt(D)) / (2 * a));
        } else {
            return "Solution does not exist";
        }

    } else {
        return "Enter valid constants";
    }

}

//13. simplify if
function simpleIf() {
    var n = +prompt();
    var i = 0;
    var j = 0;
    if (n % 2 === 0 && !Math.floor(n / 10)) {
        i += 1;
    }
    if (n % 3 === 0 && n % 10 === 1) {
        j += 1;
    }

}

//14. Check if number contains digits
function doesNumberContainDigit(a, b) {
    if (b.toString().includes(a.toString())) {
        return "Yes";
    } else {
        return "No";
    }

}

//15. Reverse first and last digits
function reverse(a) {
    let c = Math.floor(a / 10).toString();
    return a % 10 + c.substring(1, c.length) + c[0];
}

//16. floor to multiplies of 50
function floorToMultiplier(a) {
    return Math.round(a / 50) * 50;

}

//17. area of triangle or rectangle
function calculateArea(figure, height, base) {
    if (height > 0 && base > 0) {
        if (figure === "triangle") {
            return ("Square of the triangle is" + height * base) / 2;
        } else if (figure === "rectangle") {
            return "Square of the rectangle is" + height * base;
        }
    } else {
        return "Please enter only positives"
    }

}

//18. find the difference of biggest and smallest digits
function diffBetweenMaxAndMin(a) {

    let max = 0;
    let min = a % 10;

    while (a > 0) {
        let c = a % 10;
        max = Math.max(c, max);
        min = Math.min(c, min);
        a = Math.floor(a / 10);
    }

    return max - min;
}

