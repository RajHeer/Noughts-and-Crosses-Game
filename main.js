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
        // if sq is empty CALL updateBoard
        // else 'pick another sq feedback'
    }  

    // UPDATE BOARD ARRAY //
    function updateBoardArr(squareID) {
        // CALL current player
        // boardArr[squareID] = currentPlayer.symbol
        // call updateDisplay
    }

})();

const updateDisplay( () => {

    // UPDATE DISPLAY //
    function updateDisplay(nextPlayer) {
        //loop through boardArr
        //index/value = squareID/ HTML of square
        // CALL checkWin
        // if true - delcare winner, end game
        // if false - update whose turn
        // CALL changePlayer
    }

    return {
        updateDisplay
    }

})();

const gameflow = ( () => {
    const playersArr = [];
    let currentPlayer = playersArr[0];

    // SET PLAYER //
    function setPlayer() {
        // Input player name & symbol
        // call playerFactory
        // Push player obj into playersArr
    }

    // CHECK CURRENT PLAYER //
    function checkPlayer() {
        return currentPlayer;
    }

    // UPDATE TO NEXT PLAYER //
    function changePlayer() {
        // if player[0] then player[1] else etc//
    }

    // CHECK WIN //
    function checkWin() {
        // three in a row logic
        // return true/ false
    }

    return {
        checkPlayer,
        checkWin,
        changePlayer
    };

})();

const playerFactory = (name, symbol) => {

    return {
        name,
        symbol
    }

};
