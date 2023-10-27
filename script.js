const tiles = document.querySelectorAll('.tile');
const tileContainer = document.querySelector('.tile-container');

function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    if (ev.target.hasChildNodes()){return;}
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data))
    checkForWin();
}

function checkForWin(){
    let lock = "123456789101112131415";
    let key = "";
    for (let i = 0; i < tiles.length; i++){
        key += document.getElementById(tiles).innerHTML;
    }
    console.log(key);
}