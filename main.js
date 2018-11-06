var allRows = document.getElementsByClassName("row");
console.log(allRows);
var cells = document.getElementsByClassName("cell");
var colorPicker = document.querySelector('#colorPicker');
var defaultColor = '#000000';
colorPicker.value = defaultColor;
console.log(colorPicker.value);
var clearCellsButton = document.getElementById('clearCells');

function cellsOnLoad(){
    const cellsContainer = document.getElementById('cells-container'); //Gets element div#cells-container//
    for(i = 0; i < 26; i++){ //Super jank way of appending elements in less lines//
        cellsContainer.insertAdjacentHTML('beforeend','<div class="row"> <div class="cell"></div> <div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>' );
    }
}
window.addEventListener('load', cellsOnLoad()); //Calls cellsOnLoad() at Runtime//

function setCells(){ //Sets cells to be filled via backgroundColor//
for (i = 0; i < cells.length; i++){
    cells[i].setAttribute('onmouseover', 'colorThis(this)');
    cells[i].setAttribute('id', i.toString());
}
function clearCells(){ //TBD//
    const cellsContainer = document.getElementById('cells-container');
    while(cellsContainer.firstChild){
        cellsContainer.removeChild(cellsContainer.firstChild);
    }
}
}
function colorThis(cell){ //Fills backgroundColor via colorPicker.value//
    cell.style.backgroundColor = colorPicker.value;
}
function buildArray() {
    const
      rows = Array //States that 'rows' is an Array type Object//
        .from(document.querySelectorAll('#cells-container .row')) //Creates an Array from an already array-like object, such as this collection of elements//
        .reverse(), //Has the process of 'pushing' reversed so that the origin is in the bottom left instead of the top left//
      x = rows[0].children.length, //Counter for total number of cells in a div.row//
      y = rows.length, //Counter for total number of rows in div#cells-container//
      thisArray = []; //Creates new array to store the cell elements in//
  
  
    for (let i=0; i<x; i++) {
      thisArray[i] = new Array(y); //For every index[i] of 'thisArray', create a new Array with variable 'y' acting as the index maximum//
      for (let j=0; j<y; j++) {
        thisArray[i][j] = rows[j].children[i]; //Assigns the 2D array indexes in reference to the relation between rows(j) and it's children cells(i)//
      }
    }
  
    return thisArray; //Returns the Array to be assigned to a global variable//
  }
  
  let cellsArray = buildArray(); //Assigned thisArray to cellsArray//
  console.log(cellsArray);
function sparks(){
    console.log(cellsArray[this]);
}