let tiles, tileContainer, shuffle, gameWon, tileLocked;

function initialize() {
    tiles = document.querySelectorAll('.tile');
    tileContainer = document.querySelector('.tile-container');
    for (let i = 0; i < tiles.length; i++) {
        const row = parseInt(i / 4);
        const col = i % 4;
        tiles[i].addEventListener("click", () => swapTiles(row, col));
        //creates a 2d array and adds event listeners to each of them
    }
    //conditions to prevent movement  
    shuffle = false;
    gameWon = false;
    tileLocked = true;
}

//finds the empty div in the 2d array so it can be swapped with
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
    //conditons to prevent movement
    if (tileLocked){
        alert("Please shuffle the board before playing");
        return;
    }
    if (gameWon) {
        return;
    }
    const emptyId = emptyDiv();
    const clickedId = `${row}${col}`;

    // checks if the clicked tile is adjacent to the empty tile
    if (areTilesAdjacent(clickedId, emptyId)) {
        // swaps the content of the clicked tile and the empty tile
        const clickedTile = document.getElementById(clickedId);
        const emptyContent = "";

        document.getElementById(emptyDiv()).innerHTML = clickedTile.textContent;
        clickedTile.textContent = emptyContent;
    }
    if (!shuffle){
        checkForWin();
    }   
}

//used in swapTiles to help check if the adj tile is an empty one
function areTilesAdjacent(tile1Id, tile2Id) {
    const [row1, col1] = tile1Id.split('').map(Number);
    const [row2, col2] = tile2Id.split('').map(Number);

    return (
        (Math.abs(row1 - row2) === 1 && col1 === col2) ||
        (row1 === row2 && Math.abs(col1 - col2) === 1)
    );
}

//shuffles the board 1000 times by using swapTiles 1000 times for random tiles
function shuffleBoard() {
    shuffle = true;
    tileLocked = false;
    for (let i = 0; i < 1000; i++) {
        const x = Math.floor(Math.random() * 4);
        const y = Math.floor(Math.random() * 4);
        swapTiles(x, y);
    }
    tileLocked = gameWon ? false: true;
    shuffle = false;
}


//used in checkForWin()
function arrayEquals(arr1, arr2) {
    return Array.isArray(arr1) &&
        Array.isArray(arr2) &&
        arr1.length === arr2.length &&
        arr1.every((val, index) => val === arr2[index]);
}

//gets the text content of every single element in the 2d array in order
//then it matches it with a pre-generated string of the correct order 
function checkForWin() {
    let lock = Array.from({ length: 15 }, (_, i) => i + 1 + '');
    lock.push('');
    const key = [];
    tiles.forEach(t => {
        key.push(t.textContent);
    });
    if (arrayEquals(key, lock)) {
        gameWon = true;
        const winMessage = document.getElementById('win-message');
        winMessage.style.display = 'block';
        //prompts win message because alert sucks
    }
}

//close button for that window
function closeWinMessage() {
    const winMessage = document.getElementById('win-message');
    winMessage.style.display = 'none';
    location.reload();
}
