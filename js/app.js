import Calculator from "./Calculator.js";

function run() {

    let display = document.getElementById("display")
    let btns = document.querySelectorAll("button");
    const calc = new Calculator(display, btns);
}