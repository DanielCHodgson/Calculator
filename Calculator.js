
class Calculator {

    constructor() {}

    add(num1, num2) {
        return num1 + num2;
    };

    subtract(num1, num2) {
        return num1 - num2;
    };

    sum(nums) {
        return nums.reduce((total, current) => total + current, 0);
    };

    multiply(nums) {
        return nums.reduce((total, current) => total * current)
    };

    power(num, power) {

        let total = num;

        for (i = 1; i < power; i++) {
            total = num * total;
        }

        return total;
    };

    factorial(num) {

        let factoral = 1;

        if (num === 0) return factoral;

        for (i = 1; i <= num; i++) {
            factoral = factoral * i;
        }

        return factoral;
    };

}
