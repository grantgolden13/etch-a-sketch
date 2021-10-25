// grab reference to grid container

const container = document.querySelector('#grid');

// make new divs

function makeCell (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('newCells');
        container.appendChild(newCell);
    }
}

// add drawing functionality w/ event listeners

const divs = document.querySelectorAll('.newCells');
divs.forEach(div => {
    div.addEventListener('mouseover', function mouseOver(e) {
        e.target.style = "background-color: black";
    });
});

// makes grid

function makeGrid() {
    let sides = prompt("How many grid squares per side? (16-100)", 24);
    console.log(sides);
    
    return sides;
}

// reset button

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', function () {
        window.location.reload();
});

makeGrid();