const container = document.querySelector(".container");
let gridSize = prompt("Enter grid size");
gridSize = Math.floor(gridSize/2);


function addDiv() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    container.appendChild(newDiv);
}

let i = 0;
while (i<gridSize) {
    addDiv();
    i++;
}

