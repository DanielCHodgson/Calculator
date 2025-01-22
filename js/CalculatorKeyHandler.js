export default class CalculatorKeyHandler {

    constructor(calculator) {
        this.calculator = calculator;
        this.handleKeys = this.handleKeys.bind(this);
        this.initialize();
    }

    initialize() {
        document.addEventListener('keydown', this.handleKeys);
    }


    mapKeyToID(key) {

        const keys = {
           "+" : "plus",
           "-" : "minus",
           "*" : "multiply",
           "/" : "divide",
           "%" : "percent",
        };

        return keys[key];
    }


    handleKeys(event) {

        let calculator = this.calculator;
        calculator.loadInput(input);

        if (event.key >= '0' && event.key <= '9') {
            this.handleNumber(event.key);
        }

        switch (event.key) {
            case '+':
                this.handleOperator('+');
                break;
            case '-':
                this.handleOperator('-');
                break;
            case '*':
                this.handleOperator('*');
                break;
            case '/':
                this.handleOperator('/');
                break;
            case '=':
                this.handleEquals();
                break;
            case '.':
                this.handleDecimal();
                break;
            default:
                break;
        }
    }

    handleNumber(key) {
        this.calculator.enterInput(key);
    }

    handleOperator(operator) {
        calculator.handleOperatorInput();
    }

    handleEquals() {
        this.calculator.calculateResult();
    }

    handleDecimal() {
        if (input.id === "decimal" && calculator.displayedValue !== null && !calculator.displayedValue.includes(".")) {
            calculator.enterInput(".");
            return;
         }
    }


}