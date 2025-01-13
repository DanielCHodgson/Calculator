import { doesTextFit } from "./utility.js";

export default class Calculator {

    currentResult = null;
    display = null;
    currentDisplayValue = null;
    buttons = null;

    constructor(display, buttons) {
        this.display = display;
        this.buttons = buttons;

        buttons.forEach(btn => btn.addEventListener("click", () => this.handleClick(btn)));
    }

    handleClick(btn) {

        let currentInput = btn.id;

        if(btn.id === "clear") this.clear();

        if (isNaN(parseInt(currentInput))) {

            console.log(btn.id);

        } else {
            this.enterNumber(currentInput);
        }
    }


    enterNumber(currentInput) {

        if (this.currentDisplayValue === null) {
            this.currentDisplayValue = currentInput;
        } else {

            let oldDisplayValue = this.currentDisplayValue;
            let newDisplayValue = oldDisplayValue + currentInput;
            this.currentDisplayValue = newDisplayValue;

            if (!doesTextFit(this.display)) {
                this.currentDisplayValue = oldDisplayValue;
            }
        }

        this.display.textContent = this.currentDisplayValue;
    }

    clear() {

        this.currentResult = null;
        this.display.textContent = 0;
        this.currentDisplayValue = null;

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
        this.currentResult = null;
        this.display.textContent = 0;
        this.currentDisplayValue = null;
    }

    operate(operator, input, currentResult) {


    }

}
