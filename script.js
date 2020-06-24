const gridContain = document.querySelector('.grid-contain');

makeGrid(16);

function makeGrid(gridNum) {

    let i;
    for (i = 0; i < gridNum; i++) {

        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        let j;
        for (j = 0; j < gridNum; j++) {

            const gridDiv = document.createElement('div'); //make single div
            gridDiv.classList.add("grid-div"); // add class
            gridRow.appendChild(gridDiv); //add single div to grid-row
        };

        gridContain.appendChild(gridRow);
    };
    const allGridDivs = document.querySelectorAll(".grid-div");

    allGridDivs.forEach(addDivClick);

    function addDivClick(divClick) {
        divClick.addEventListener('mouseover', addColor);
    }

    function addColor(e) {
        this.classList.add('add-color');
        // let randomColor = Math.floor(Math.random()*16777215).toString(16);
        // this.style.backgroundColor = `#${randomColor}`;
    }
}



const clear = document.querySelector(".clear");

clear.addEventListener('click', clearGrid);

function clearGrid() {
    let removeGrids = document.querySelectorAll('.grid-row');
    removeGrids.forEach(isGrid => {

        gridContain.removeChild(isGrid);

    });
    let gridSize = prompt('How many blocks per side of grid?');
    makeGrid(gridSize);
    // let colorGrid = document.querySelectorAll(".add-color");
    // colorGrid.forEach(colored => {
    //     colored.classList.remove('add-color');
    // });
}