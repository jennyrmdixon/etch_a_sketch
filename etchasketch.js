//Allow prompt on click
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

const gridArea = document.querySelector('#gridArea');

function makeGrid(gridSize) {

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

        //Set hover
        let boxes = gridArea.querySelectorAll('.gridBox');
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let setRandomColor = getRandomColor();
            box.style.cssText = 'background-color:'+ setRandomColor +';';   
        }));
    }
}

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
  

        
    


