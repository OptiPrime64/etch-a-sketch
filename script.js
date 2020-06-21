const gridContain = document.querySelector('.grid-contain');

makeRow();

function makeRow() {

    let i;
    for (i = 0; i < 16; i++) {

        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        let j;
        for (j = 0; j < 16; j++) {

            const gridDiv = document.createElement('div'); //make single div
            gridDiv.classList.add("grid-div"); // add class
            gridRow.appendChild(gridDiv); //add single div to grid-row
        };

        gridContain.appendChild(gridRow);
    };
}

const allGridDivs = document.querySelectorAll(".grid-div");
allGridDivs.forEach(addDivClick);

function addDivClick(divClick) {
    divClick.addEventListener('mouseover', addColor);
}

function addColor(e) {
    this.classList.add('add-color');
}

const clear = document.querySelector(".clear");
clear.addEventListener('click', clearGrid);

function clearGrid() {
    let colorGrid = document.querySelectorAll(".add-color");
    colorGrid.forEach(colored => {
        colored.classList.remove('add-color');
    });
}