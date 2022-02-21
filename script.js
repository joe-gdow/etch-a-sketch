const container = document.querySelector(".grid-container");
const squareButton = document.getElementById('makeASquare');
squareButton.addEventListener('click', printGrid);

function clearPage() {
    container.innerHTML = "";
}

function getValue() {
    let value = document.getElementById('userInput').value;
    if (value > 10) {
        value = 10;
    }
    return value;
}

function addDiv() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    container.appendChild(newDiv);
}

function printGrid() {
    clearPage();
    let gridSize = getValue();
    let i = 0;
    
    while (i < gridSize*2) {
        addDiv();
        i++;
    }
}

