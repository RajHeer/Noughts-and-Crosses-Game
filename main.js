const gameBoard = ( () => {
    const boardArr = [];

    // CACHE DOM (SELECTORS) //
    const board = document.querySelector('#game-board');
    const squares = board.querySelectorAll('.game-square');

    // EVENT BINDERS //
    squares.forEach(square => {
        square.addEventListener('click', getSqID);
    });

    // GET SQUARE ID //
    function getSqID(e) {
        console.log(e.target.id);
    }  

    // UPDATE BOARD ARRAY //
    function updateBoardArr(squareID, nextPlayer) {
        //push player symbol into squareID
        // call updateDisplay
    }

    // UPDATE DISPLAY //
    function updateDisplay(nextPlayer) {
        //loop through boardArr
        //index/value = squareID/ HTML of square
        //Update next player html
    }

    return {
        updateBoardArr
    };

})();

const gameflow = ( () => {
    const playersArr = [];
    let currentPlayer = playersArr[0].name;

    // SET PLAYER //
    function setPlayer() {
        // Input player name & symbol
        // call playerFactory
        // Push player obj into playersArr
    }

    // UPDATE NEXT PLAYER //
    function updateNextPlayer() {
        // if player[0] then player[1] else etc//
    }

    // MAKE MOVE //
    function makeMove() {
        // if selected square is empty get ID & player.symb
        // calls updateNextPlayer
        // call updateBoardArr
        // calls checkWin
    }

    // CHECK WIN //
    function checkWin() {
        // three in a row logic
    }

    return {
        makeMove,
    };

})();

const playerFactory = (name, symbol) => {

    return {
        name,
        symbol
    }

};
