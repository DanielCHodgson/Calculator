import CalculatorClickHandler from "./CalculatorClickHandler.js";
import CalculatorKeyHandler from "./CalculatorKeyHandler.js";

export default class Calculator {

    constructor(display, buttons) {
        this.previousInput = null;
        this.currentInput = null;
        this.displayedValue = "0";
        this.cachedValue = null;
        this.cachedOperator = null;

        this.display = display;
        this.buttons = buttons;

        new CalculatorClickHandler(this);
        new CalculatorKeyHandler(this);
    }


    registerInput(input) {

        if (this.displayedValue === "ERROR")
            this.clear();

        if (this.currentInput !== null)
            this.previousInput = this.currentInput;

        this.currentInput = input;
    }


    handleOperatorInput(input) {

        this.equals(this.cachedOperator, this.displayedValue, this.cachedValue);
        this.cachedOperator = input;
    }

    handleSignInput() {
        if (this.displayedValue !== "0" && this.inputIsNumber(this.previousInput)) {
            this.displayedValue = this.displayedValue.charAt(0) === "-"
                ? this.displayedValue.slice(1)
                : "-" + this.displayedValue;

            this.updateDisplay(this.displayedValue);
        }
    }

    handleNumberInput(input) {
        if (this.previousInput !== null) {
            if (this.isOperator(this.previousInput)) {
                this.cachedValue = this.displayedValue;
                this.displayedValue = "";
            }
        }
        this.enterInput(input);
    }

    enterInput(input) {
        if (this.displayedValue === "0" && input !== "decimal")
            this.displayedValue = "";

        const newDisplayValue = this.displayedValue + input;
        this.displayedValue = newDisplayValue.length <= 10 ? newDisplayValue : this.displayedValue;
        this.updateDisplay(this.displayedValue);
    }

    updateDisplay(value) {
        this.display.textContent = value;
    }

    clear() {
        this.previousInput = null;
        this.currentInput = null;
        this.displayedValue = "0";
        this.cachedValue = null;
        this.cachedOperator = null;
        this.updateDisplay(this.displayedValue)
    }

    add(num1, num2) {
        return num1 + num2;
    };

    subtract(num1, num2) {
        return num2 - num1;
    };


    multiply(num1, num2) {
        return num1 * num2;
    };

    divide(num1, num2) {
        if (num1 === 0) {
            return "ERROR";
        }
        return num2 / num1;
    }

    percentage(num, percentage) {
        return (num * percentage) / 100;
    }

    equals() {

        if (this.cachedOperator !== null && this.displayedValue !== null && this.cachedValue !== null) {
            this.operate(this.cachedOperator, this.displayedValue, this.cachedValue);
        }
    }

    operate(operator, input, cachedValue) {

        const num1 = parseFloat(input);
        const num2 = parseFloat(cachedValue);

        console.log("input: " + num1 + "   operator: " + operator + "   cachedValue: " + cachedValue)

        const operations = {
            "plus": this.add,
            "minus": this.subtract,
            "multiply": this.multiply,
            "divide": this.divide,
            "percent": this.percentage,
        };

        let result = operations[operator](num1, num2).toString();

        if (result.length > 10) {
            result = parseFloat(result).toExponential(4).toString();
        }

        console.log("result: " + result)

        this.cachedValue = result;
        this.cachedOperator = null;
        this.displayedValue = result;
        this.displayFormattedResult(result);
    }

    isOperator(input) {
        const operators = ["plus", "minus", "multiply", "divide", "percent"];
        return operators.includes(input);
    }

    inputIsNumber(input) {
        return input >= "0" && input <= '9';
    }

    displayFormattedResult(result) {

        this.updateDisplay(result);
    }
}
