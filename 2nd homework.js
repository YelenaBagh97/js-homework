//1. print yes if prime
function yesIfPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return "no";
        }
    }
    return "yes";
}

//2. print n-th Fibonacci number
function fibonacci(n) {
    return generateFibo(n)[n];
}

//3. print Fibonacci series
function fibonSeries(n) {
    let arr = [];
    let j = 0;
    while (generateFibo(n)[j] < n) {
        arr = generateFibo(j);
        j++
    }

    return arr;
}

//4. if product is divisible print the quotient
function hasQuotient(n) {
    let numbers = n.toString().split('').map(Number);
    let sum = 0;
    let prod = 1;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        prod *= numbers[i];
    }

    return (prod === 0 ? "Cannot calculate" : prod % sum === 0 ? "Quotient is " + prod / sum : "Remainder is " + prod % sum);
}

//9. split to array with a step
function splitWithStep(a, b, n) {
    let array = [];
    let step = (b - a) / (n - 1);
    for (let i = 0; i < n; i++) {
        array.push(a);
        a = a + step;
    }

    return array;
}

//10. index of second maximum
function secMaxIndex(a) {
    let len = a.length;
    return a.indexOf(a.sort()[len - 2]);
}

//11. padding and repeat
function padAndRepeat(a, p, r) {
    let m = 0;
    if (p < a.length) {
        let a1 = [];
        let a2 = [];
        while (m < r) {
            for (let i = 0; i < p; i++) {
                a1.push(a[i]);
            }
            for (let j = a.length - p; j < a.length; j++) {
                a2.push(a[j]);
            }
            m++;
        }
        return a1.concat(a, a2);
    } else return "Invalid padding amount";

}

function generateFibo(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

