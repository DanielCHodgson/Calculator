export default class CalculatorClickHandler {

   constructor(calculator) {
      this.calculator = calculator; 
      this.calculator.buttons.forEach(btn => btn.addEventListener("click", () => this.handleClick(btn)));
   }

   handleClick(input) {

      let calculator = this.calculator;

      calculator.registerInput(input.id);

      if (input.classList.contains("number")) {
         calculator.handleNumberInput(input.id);
         return;
      }

      if (input.id === "decimal" && calculator.displayedValue !== null && !calculator.displayedValue.includes(".")) {
         calculator.enterInput(".");
         return;
      }

      if (input.id === "sign") {
         calculator.handleSignInput();
         return;
      }

      if (input.classList.contains("operator")) {
         calculator.handleOperatorInput(input.id);
         return;
      }

      if (input.id === "equals") {
         calculator.equals();
         return;
      }

      if (input.id === "clear") {
         calculator.clear();
         return;
      }
   }
}

