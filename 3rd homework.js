//1. are all digits odd or not
let oddOrNot = (n) => {
    return (n > 0) ? (n % 10) % 2 === 0 ? false : oddOrNot(Math.floor(n / 10)) : true;
};

//2. find minimal positive element of array
let minPos = (arr) => {
    arr.sort((a, b) => a - b);
    if (arr.length === 0) {
        return "-1";
    } else {
        if (arr[0] < 0) {
            arr = minPos(arr.slice(1, arr.length));
        }
        return arr.toString();
    }
};

//3. fibonacci as an array
let fibonacciArr = (arg) => {
    let fiboArr = [0];
    if (arg === 0) {
        return fiboArr;
    } else if (arg === 1) {
        return [0, 1];
    } else {
        fiboArr = fibonacciArr(arg - 1);
        fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);
        return fiboArr;
    }
};

//4. flatten nested arrays
let flattenArr = (a) => {
    return Array.isArray(a) ? a.concat.apply([], a.map(flattenArr)) : a;
};

//5. calculate the sum of digits
let sumOfDigits = (n) => {
    return n < 10 ? n : sumOfDigits(n % 10 + sumOfDigits(Math.floor(n / 10)));
};