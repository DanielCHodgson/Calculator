
const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (nums) {
    return nums.reduce((total, current) => total + current, 0);
};

const multiply = function (nums) {
    return nums.reduce((total, current) => total * current)
};

const power = function (num, power) {

    let total = num;

    for (i = 1; i < power; i++) {
        total = num * total;
    }

    return total;
};

const factorial = function (num) {

    let factoral = 1;

    if (num === 0) return factoral;

    for (i = 1; i <= num; i++) {
        factoral = factoral * i;
    }

    return factoral;
};