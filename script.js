// grab reference to grid container

const container = document.querySelector('#grid');

// make new divs and add event listeners to each for drawing functionality

function makeCell (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('newCells');
        container.appendChild(newCell);
    }
    let cells = document.querySelectorAll('.newCells');
    cells.forEach(div => {
        div.addEventListener('mouseover', function mouseOver(e) {
            e.target.style = "background-color: black";
        });
    });
}

// make grid

function makeGrid(numRows, numColumns) {
    container.style.setProperty('--numRows', numRows);
    container.style.setProperty('--numColumns', numColumns);
    for (i = 0; i < numRows; i++) {
        makeCell(numRows);
    }
}

// prompt user for # of grid cells per side, pass that value thru makeGrid()

function promptNewGrid() {
    let number = prompt("How many cells per side? (16-72)", 64);
    if (number >= 16 && number <= 72) {
        makeGrid(number, number);
    } else {
        number = prompt("Invalid number! Pick a number between 16 and 72.", 64);
        makeGrid(number, number);
    }
}

// reset button

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', function () {
        window.location.reload();
});

promptNewGrid();