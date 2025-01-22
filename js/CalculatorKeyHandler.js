export default class CalculatorKeyHandler {

    constructor(calculator) {
        this.calculator = calculator;
        this.handleKeys = this.handleKeys.bind(this);
        this.acceptedInputs = ["0", "1", "2", "3", "4",
            "5", "6", "7", "8", "9",
            "+", "-", "*", "/", ".",
            "%", "Backspace", "Enter"];

        this.initialize();
    }

    initialize() {
        document.addEventListener("keydown", this.handleKeys);
    }

    handleKeys(event) {

        if (this.acceptedInputs.includes(event.key)) {

            if (event.key >= "0" && event.key <= "9") {
                this.handleNumber(event.key);
            }

            switch (event.key) {
                case "+":
                    this.calculator.registerInput("plus");
                    this.handleOperator("plus");
                    break;
                case "-":
                    this.handleOperator("minus");
                    break;
                case "*":
                    this.handleOperator("multiply");
                    break;
                case "/":
                    this.handleOperator("divide");
                    break;
                case "=":
                    this.calculator.equals();
                    break;
                case "Enter":
                    this.calculator.equals();
                    break;
                case ".":
                    this.handleDecimal();
                    break;
                case "Backspace":
                    this.calculator.clear();
                    break;
                default:
                    break;
            }
        }
    }

    handleNumber(input) {
        this.calculator.registerInput(input);
        this.calculator.handleNumberInput(input);
    }

    handleOperator(input) {
        this.calculator.registerInput(input);
        this.calculator.handleOperatorInput(input);
    }


    handleDecimal() {
        if (this.calculator.displayedValue !== null && !this.calculator.displayedValue.includes(".")) {
            calculator.registerInput(".");
            this.calculator.enterInput(".");
            return;
        }
    }


}