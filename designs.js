// Set variables
let size = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');

//When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function(e) {
    table.innerHTML = '';
    e.preventDefault();
    makeGrid();
  }
);

//When click occurs, changes background color

table.addEventListener('click', function(e){
    if (e.target.nodeName === 'TD'){
        e.target.style.backgroundColor = color.value;
    }
}
);

//Sets grid to width and height entered
function makeGrid() {
    for (let i =0; i < height.value; i++){
        const row = table.insertRow(0);
        for (let x = 0; x < width.value; x ++) {
            row.insertCell(0);
        }
    }
}


