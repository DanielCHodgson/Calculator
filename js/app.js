import Calculator from "./Calculator.js";

function run() {

    let display = document.getElementById("display-text")
    let btns = document.querySelectorAll("button");
    new Calculator(display, btns);
}

run();