var allRows = document.getElementsByClassName("row");
console.log(allRows);
var cells = document.getElementsByClassName("cell");
var cellsArray = [];

console.log(cellsArray);
var colorPicker = document.querySelector('#colorPicker');
var defaultColor = '#000000';
colorPicker.value = defaultColor;
console.log(colorPicker.value);
var clearCellsButton = document.getElementById('clearCells');

/*var cellsCountArray = new Array(25);
for(i = 0; i < 25; i++){
    cellsArray[i] = new Array(20);
    for(j = 0; j < 20; j++){
        cellsArray[i][j] = cells[j];
        
    }
}
console.log(cellsArray);
*/


window.onload = function cellsOnLoad(){
    const cellsContainer = document.getElementById('cells-container');
    for(i = 0; i < 26; i++){
        cellsContainer.insertAdjacentHTML('beforeend','<div class="row"> <div class="cell"></div> <div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>' );
    }
}
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
for(i = 0; i < cells.length; i++){
    cellsArray.push(cells[i]);
}