function addCalcButtons() {

    let buttonContainer = document.getElementById("button-container");

    for (let i = 1; i < 20; i++) {

        let button = document.createElement("button");
        button.className = "calc-button";
        button.id = "btn" + i;
        if (i % 4 === 0 || i === 19) button.classList.add("operator");
        if (i <= 3) button.classList.add("sign");
        buttonContainer.appendChild(button);
    }
}


addCalcButtons();

