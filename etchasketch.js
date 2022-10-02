//Allow prompt on click
let button = document.querySelector("#buttonArea > button")
button.addEventListener('click', () => {
    let gridSize = prompt("Please enter a number",)
    makeGrid(gridSize);
});

const gridArea = document.querySelector('#gridArea');

function makeGrid(gridSize){

//Clear previous grid
while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.lastChild);
    }

//Make new grid
for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('div');
    gridArea.appendChild(gridRow); 
    gridRow.setAttribute('class', 'gridRow');  
    for (let i = 0; i < gridSize; i++) {
        let gridBox = document.createElement('div');
        gridRow.appendChild(gridBox); 
        gridBox.setAttribute('class', 'gridBox');                              
    } 
 //Try to get it not with java?
    //Try setting classes at the end?

    //Set hover
    let boxes = gridArea.querySelectorAll('.gridBox');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
    box.classList.add('boxHover');                               
  }));                         
}
}

