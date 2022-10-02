const gridarea = document.querySelector('#gridarea');

let gridbox;
for (let i = 0; i < 16; i++) {
    let gridrow = document.createElement('div');
    gridarea.appendChild(gridrow); 
    gridrow.setAttribute('class', 'gridrow');  
    for (let i = 0; i < 16; i++) {
        let gridbox = document.createElement('div');
        gridrow.appendChild(gridbox); 
        gridbox.setAttribute('class', 'gridbox');                              
    }                            
}


let boxes = gridarea.querySelectorAll('.gridbox');
boxes.forEach(box => box.addEventListener('mouseover', () => {
    box.classList.add('boxhover');                               
  }));

  //generate input
  //create button
  //onclick event for button - prompt comes up
  //user enters height and width, this gets set as variables "size"
  //"i" now gets set to "size"


  //
  //have grid stay at the same width
  //