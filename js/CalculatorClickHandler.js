export default class CalculatorClickHandler {

   constructor(calculator) {
      this.calculator = calculator; 
      this.calculator.buttons.forEach(btn => btn.addEventListener("click", () => this.handleClick(btn)));
   }

   handleClick(input) {

      let calculator = this.calculator;

      if (calculator.displayedValue === "ERROR") {
         console.log("clearing")
         calculator.clear();
      }

      if (calculator.currentInput !== null)
         calculator.previousInput = calculator.currentInput;

      calculator.currentInput = input;

      if (input.id === "sign") {
         calculator.handleSignInput();
         return;
      }

      if (input.classList.contains("operator")) {
         calculator.cachedOperator = input.id;
         return;
      }
      if (input.id === "clear") {
         calculator.clear();
         return;
      }
      if (input.id === "equals") {
         calculator.equals();
         return;
      }
      if (input.id === "decimal" && calculator.displayedValue !== null && !calculator.displayedValue.includes(".")) {
         calculator.enterInput(".");
         return;
      }

      if (input.classList.contains("number")) {
         calculator.handleNumberInput(input);
         return;
      }
   }
}

