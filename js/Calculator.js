import { isTextOverflowingHorizontally } from "./utility.js";

export default class Calculator {

    currentResult = null;
    display = null;
    displayValue = null;
    buttons = null;

    constructor(display, buttons) {
        this.display = display;
        this.buttons = buttons;

        buttons.forEach(btn => btn.addEventListener("click", () => this.handleClick(btn)));
    }

    handleClick(btn) {

        let currentInput = btn.id;

        if (isNaN(parseInt(currentInput))) {

            console.log(btn.id);

        } else {
            this.enterNumber(currentInput);
        }
    }


    enterNumber(currentInput) {

        if (this.displayValue === null) {
            this.displayValue = currentInput;
        } else {
            
            let oldDisplayValue = this.displayValue;
            let newDisplayValue = oldDisplayValue + currentInput;
            this.displayValue = newDisplayValue;

            if(isTextOverflowingHorizontally(this.display)) {
                this.displayValue = oldDisplayValue;
            }
        }

        this.display.textContent = this.displayValue;
    }

    isTextOverflowing(element) {
        return element.scrollHeight > element.clientHeight;  // For vertical overflow
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

    operate(operator, input, currentResult) {


    }

}
