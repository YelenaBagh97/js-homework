//1. Determine if array consists of unique elements only
let isUniqueOnly = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(element => element === arr[i]).length !== 1) {
            return "Array does not consist from unique elements";
        }
    }
    return "Array consists only from unique elements";
};

//2. Find the sum of numbers, which square root is even
let sumOfNumWithEvenSquare = (arr = []) => {
    let sum = 0;
    arr.forEach((el) => {
        if (Math.sqrt(el) % 2 === 0) {
            sum += el;
    }});
    return sum;
};

//3. Check if string is a palindrome
let isPalindrome = (str = "") => {
    if (str.split("").reverse().join("") === str) {
        return "String is a palindrome"
    } else return "String is not a palindrome";
};

//4. Select correct sublist of anagrams
let anagramSublist = (str = "", arr = []) => {
    let newArr = [];

    function sortChars(str) {
        return str.split("").sort().join("");
    }

    arr.forEach((el) => {
        if ((sortChars(el.toString())).indexOf(sortChars(str)) > -1) {
            newArr.push(el);
        }
    });
    return newArr;

};
