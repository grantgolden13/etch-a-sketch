// grabs reference to body
const body = document.querySelector('body');

// declare variables 
const container = document.querySelector('#container');
const newDiv = document.createElement('div');


// adds class to all divs and stores their nodelist in new
newDiv.className = "newDivs";
const newDivs = document.querySelectorAll('.newDivs');


newDivs.forEach(newDiv => {
    newDiv.addEventListener('click', () => {
        console.log('clicked');
    });
});


function gridCreator() {
    for (i = 0; i < 256; i++) {
        container.appendChild(newDiv.cloneNode());
    }
}


gridCreator()
