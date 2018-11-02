var allRows = document.getElementsByClassName("row");
console.log(allRows);
var cells = document.getElementsByClassName("cell");
console.log(cells);
var colorPicker = document.getElementById('colorPicker');
console.log(colorPicker);

function setCells(){
for (i = 0; i < cells.length; i++){
    cells[i].setAttribute('onmouseover', 'colorThis(this)');
    cells[i].setAttribute('id', i.toString());
}
function clearCells(){
    for(i = 0; i < cells.length; i++)
    cells[i].style.backgroundColor = '#ffffff';
}
}
function colorThis(cell){
    cell.style.backgroundColor = '#8c0000';
}