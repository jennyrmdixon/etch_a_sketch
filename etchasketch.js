//Bring up prompt and set grid size when button is clicked
let button = document.querySelector("#buttonArea > button")
button.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Please enter a number",));
    if (gridSize > 100) {
        alert("That number is too large, please try again with 100 or less.");
    }
    else {
        makeGrid(gridSize);
    }
});

//Set variables used in grid
const gridArea = document.querySelector('#gridArea');
let newOpacity = 0;


function makeGrid(gridSize) {

    //Clear previous grid
    while (gridArea.firstChild) {
        gridArea.removeChild(gridArea.lastChild);
    }

    //Make new grid
    for (let i = 0; i < gridSize; i++) {
        //Create rows
        let gridRow = document.createElement('div');
        gridArea.appendChild(gridRow);
        gridRow.setAttribute('class', 'gridRow');
        //Create boxes
        for (let i = 0; i < gridSize; i++) {
            let gridBox = document.createElement('div');
            gridRow.appendChild(gridBox);
            gridBox.setAttribute('class', 'gridBox');
            //Box set to black with 0 opacity by default
            gridBox.setAttribute('style', 'background-color:rgba(0,0,0,0);');
        }

        //Set hover style changes for grid boxes
        let boxes = gridArea.querySelectorAll('.gridBox');
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            //Get current background color style
            let style = window.getComputedStyle(box);
            let currBackgroundColor = style.backgroundColor.slice(0, style.backgroundColor.length - 1);
            //Make opacity greater
            //At opacity of 1, css gets reset to "rgb"
            //Only execute code if "RGBA is used"
            if (currBackgroundColor.slice(3, 4) === "a") {
                let currOpacity = Number(currBackgroundColor.slice(14));
                if (currOpacity < 1) {
                    let newOpacity = currOpacity + 0.1;
                    box.setAttribute('style', 'background-color:rgba(0,0,0,' + newOpacity + ')')
                }
            }
        }));
    }
}






