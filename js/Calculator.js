
export default class Calculator {

    currentResult = null;
    currentInput = null;
    display = null;
    buttons = null;

    constructor(display, buttons) {
        this.display = display;
        this.buttons = buttons;

        buttons.forEach(btn => {
            btn.addEventListener("click", function () {
                //calc.operate(btn.id, btn.id, this.currentResult);
                console.log("hello " + btn.id);

            });
        })
    }

    add(num1, num2) {
        if (!isNaN(num1 || !isNaN(num2)))
            return num1 + num2;
    };

    subtract(num1, num2) {
        if (!isNaN(num1 || !isNaN(num2)))
            return num1 - num2;
    };


    multiply(num1, num2) {
        if (!isNaN(num1 || !isNaN(num2)))
            return num1 * num2;
    };

    divide(num1, num2) {
        if (!isNaN(num1 || !isNaN(num2)))
            return num1 / num2;
    }

    percentage(num, percentage) {
        if (!isNaN(num1 || !isNaN(percentage)))
            return (num * percentage) / 100;
    }

    equals() {
        return this.currentResult;
    }

    operate(operator, num1, num2) {

    }

}
