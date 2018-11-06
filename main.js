var allRows = document.getElementsByClassName("row");
console.log(allRows);
var cells = document.getElementsByClassName("cell");
var colorPicker = document.querySelector('#colorPicker');
var defaultColor = '#000000';
colorPicker.value = defaultColor;
console.log(colorPicker.value);
var clearCellsButton = document.getElementById('clearCells');

function cellsOnLoad(){
    const cellsContainer = document.getElementById('cells-container');
    for(i = 0; i < 26; i++){
        cellsContainer.insertAdjacentHTML('beforeend','<div class="row"> <div class="cell"></div> <div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>' );
    }
}
window.addEventListener('load', cellsOnLoad());
function setCells(){
for (i = 0; i < cells.length; i++){
    cells[i].setAttribute('onmouseover', 'colorThis(this)');
    cells[i].setAttribute('id', i.toString());
}
function clearCells(){
    const cellsContainer = document.getElementById('cells-container');
    while(cellsContainer.firstChild){
        cellsContainer.removeChild(cellsContainer.firstChild);
    }
    for(i = 0; i < 25; i++){
        cellsContainer.insertAdjacentHTML('beforeend','<div class="row"> <div class="cell"></div> <div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>' );
    }
}
}
function colorThis(cell){
    cell.style.backgroundColor = colorPicker.value;
}
function buildArray() {
    const
      rows = Array
        .from(document.querySelectorAll('#cells-container .row'))
        .reverse(),
      x = rows[0].children.length,
      y = rows.length,
      thisArray = [];
  
  
    for (let i=0; i<x; i++) {
      thisArray[i] = new Array(y);
      for (let j=0; j<y; j++) {
        thisArray[i][j] = rows[j].children[i];
      }
    }
  
    return thisArray;
  }
  
  let cellsArray = buildArray();
