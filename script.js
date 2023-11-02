let tiles, tileContainer, board, shuffle, swapArr;

function initialize() {
    tiles = document.querySelectorAll('.tile');
    tileContainer = document.querySelector('.tile-container');
    for (let i = 0; i < tiles.length; i++) {
        const row = parseInt(i / 4);
        const col = i % 4;
        tiles[i].addEventListener("click", () => swapTiles(row, col));
    }
    board = new Array(4).fill().map(() => new Array(4));
    shuffle = false;
    swapArr = [];
}

function checkForWin() {
    let lock = Array.from({ length: 15 }, (_, i) => i + 1 + '');
    lock.push('');
    const key = [];
    tiles.forEach(t => {
        key.push(t.textContent);
    });
    if (arrayEquals(key, lock)) {
        alert("You win");
    }
}

function arrayEquals(arr1, arr2) {
    return Array.isArray(arr1) &&
        Array.isArray(arr2) &&
        arr1.length === arr2.length &&
        arr1.every((val, index) => val === arr2[index]);
}

function emptyDiv() {
    for (let i = 0; i < tiles.length; i++) {
        const x = parseInt(i / 4);
        const y = i % 4;
        if (document.getElementById("" + x + y).textContent === '') {
            return "" + x + y;
        }
    }
}

function swapTiles(row, col) {
    let swap = document.getElementById(""+row+col).textContent;
    let adjRowUp, adjRowDown, adjColLeft, adjColRight;
    if (row - 1 < 0) {
        adjRowUp = 0;
    }else{
        adjRowUp = row-1;
    }   
    if (row + 1 > 3) {
        adjRowDown = 3;
    }else{
        adjRowDown = row+1;
    }
    if (col - 1 < 0) {
        adjColLeft = 0;
    }else{
        adjColLeft = col-1
    }
    if (col + 1 > 3) {
        adjColRight = 0;
    }else{
        adjColRight = col+1;
    }   
    let adjRowUpTile, adjRowDownTile, adjColLeftTile, adjColRightTile;
    adjRowUpTile = document.getElementById(""+adjRowUp+col).textContent;
    adjRowDownTile = document.getElementById(""+adjRowDown+col).textContent;
    adjColLeftTile = document.getElementById(""+row+adjColLeft).textContent;
    adjColRightTile = document.getElementById(""+row+adjColRight).textContent; 

    //console.log(adjColRightTile);
    console.log(adjRowDown);
    console.log(adjRowDownTile);
    //console.log(adjColLeftTile);
    //console.log(adjColRightTile);


    console.log(emptyDiv(row, col));
}

function shuffleBoard() {
    for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 4);
        const y = Math.floor(Math.random() * 4);
        shuffle = true;
        swapTiles(x, y);
    }
    shuffle = false;
}