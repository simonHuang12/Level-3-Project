const tiles = document.querySelectorAll('.tile');
const tileContainer = document.querySelector('.tile-container');
tileContainer.addEventListener('click', () => swapTiles(tiles));
let ids = Array.from({length: 16}, (_, i) => i + 1 + '');
let numbers = Array.from({length: 15}, (_, i) => i + 1 + '');

function checkForWin(){
    let lock = Array.from({length: 15}, (_, i) => i + 1 + '');
    lock.push('');
    const key = [];
    tiles.forEach(t => {
        key.push(t.textContent);
    });
    if (arrayEquals(key, lock)){
        alert("You win");
    }
}

function arrayEquals(arr1, arr2){
    return Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index]);
}

function swapTiles(t){
    //dog
    checkForWin();
}