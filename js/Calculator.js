export default class Calculator {

    constructor(display, buttons) {
        this.previousInput = null;
        this.currentInput = null;
        this.displayedValue = "0";
        this.cachedValue = null;
        this.cachedOperator = null;

        this.display = display;
        this.buttons = buttons;
        buttons.forEach(btn => btn.addEventListener("click", () => this.handleClick(btn)));
    }

    handleClick(input) {

        if (this.displayedValue === "ERROR") {
            console.log("clearing")
            this.clear();
        }

        if (this.currentInput !== null)
            this.previousInput = this.currentInput;

        this.currentInput = input;

        if (input.id === "sign") {
            this.handleSignInput();
            return;
        }

        if (input.classList.contains("operator")) {
            this.cachedOperator = input.id;
            return;
        }
        if (input.id === "clear") {
            this.clear();
            return;
        }
        if (input.id === "equals") {
            this.equals();
            return;
        }
        if (input.id === "decimal" && this.displayedValue !== null && !this.displayedValue.includes(".")) {
            this.enterInput(".");
            return;
        }

        if (input.classList.contains("number")) {
            this.handleNumberInput(input);
            return;
        }
    }


    handleSignInput() {
        if (this.displayedValue !== "0") {
            if (this.displayedValue.charAt(0) === "-") {
                let newStr = this.displayedValue.slice(1);
                this.displayedValue = newStr;
                this.updateDisplay(this.displayedValue);
            } else {
                this.displayedValue = "-" + this.displayedValue;
                this.updateDisplay(this.displayedValue);
            }
        }
    }

    handleNumberInput(input) {
        if (this.previousInput !== null && this.previousInput.classList.contains("operator")) {
            if (this.cachedValue === null) {
                this.cachedValue = this.displayedValue;
            }
            this.displayedValue = "";
        }
        this.enterInput(input.id);

    }

    enterInput(input) {

        if (this.displayedValue == "0" && this.currentInput.id !== "decimal")
            this.displayedValue = "";

        let newDisplayValue = this.displayedValue + input;

        if (newDisplayValue.length <= 10)
            this.displayedValue = newDisplayValue;

        this.updateDisplay(this.displayedValue)
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

        if (this.previousInput !== null &&
            this.previousInput.classList.contains("number") &&
            this.cachedOperator !== null) {
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
            result = parseFloat(result);
            result = result.toExponential(4).toString();
        }

        console.log("result: " + result)

        this.cachedValue = result;
        this.cachedOperator = null;
        this.displayedValue = result;
        this.displayFormattedResult(result);
    }



    displayFormattedResult(result) {

        this.updateDisplay(result);
    }
}
