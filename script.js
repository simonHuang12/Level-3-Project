let tiles, tileContainer, board, shuffle, swapArr;

function initialize() {
    tiles = document.querySelectorAll('.tile');
    tileContainer = document.querySelector('.tile-container');
    for (let i = 0; i < tiles.length; i++) {
		const x = parseInt(i / 4);
		const y = i % 4;
		tiles[i].addEventListener("click", () => swapTiles(x, y));
	}
    board = new Array(4).fill().map(() => new Array(4));
    console.log(board);
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

function swapTiles(x, y) {
    if (swapArr.length < 2) {
        swapArr.push(""+x+y);
        if (swapArr.length === 2) {
            let swap1 = document.getElementById(parseInt(swapArr[0])).textContent;
            let swap2 = document.getElementById(parseInt(swapArr[1])).textContent;

            console.log(swap1);
            console.log(swap2);

            let isEmpty = (swap1 == "") || (swap2 == "");
            if (!isEmpty) {
                swapArr = [];
            } else {
                document.getElementById(swapArr[0]).innerHTML = swap2;
                document.getElementById(swapArr[1]).innerHTML = swap1;
                swapArr = [];
            }
        }
    }
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