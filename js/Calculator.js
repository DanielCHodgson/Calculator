import { doesTextFit, isStringNum } from "./utility.js";

export default class Calculator {

    display = null;
    buttons = null;

    currentOperator = null;
    currentInput = null;
    currentValue = "0";

    constructor(display, buttons) {
        this.display = display;
        this.buttons = buttons;
        buttons.forEach(btn => btn.addEventListener("click", () => this.handleClick(btn)));
    }

    handleClick(btn) {

        if (btn.classList.contains("operator")) this.currentOperator = btn.id;
        if (btn.id === "clear") this.clear();
        if (btn.id === "equals") this.equals();
        if (btn.id === "decimal" &&
            this.currentValue !== null &&
            !this.currentValue.includes("."))
            this.enterInput(".");


        if (isStringNum(btn.id)) {
            /*
        this.currentOperator
            ? this.operate(btn.id, btn.id, this.currentValue)
            : this.enterInput(btn.id);

            */
            this.enterInput(btn.id);
        }


    }


    enterInput(input) {
        if (this.currentValue == "0") this.currentValue = "";
        let newDisplayValue = this.currentValue + input;
        if (doesTextFit(this.display)) this.currentValue = newDisplayValue;
        this.display.textContent = this.currentValue;
    }

    clear() {
        this.display.textContent = 0;
        this.currentValue = "0";
    }

    add(num1, num2) {

        console.log(num1 + "  " + num2)
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

    }

    operate(operator, input, currentValue) {


        switch (operator) {
            case "plus":

                break;
            case "minus":

                break;
            case "multiply":

                break;
            case "divide":

                break;
            case "percent":

                break;
        }

    }

}
