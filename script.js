// grab references to body and container elements

const body = document.querySelector('body');
const container = document.querySelector('#container');

// create new divs

const newDiv = document.createElement('div');
newDiv.className = "newDivs";

// create grid

function gridCreator() {
    for (i = 0; i < 256; i++) {
        container.appendChild(newDiv.cloneNode());
    }
}

gridCreator()

// grab reference to a nodelist of all divs

const divs = document.querySelectorAll('#container > div');

// add event listeners to each

divs.forEach(element => {
    element.addEventListener('mouseover', function mouseOver(e) {
        e.target.style = "background-color: black";
    })
});
