const gameBoard = ( () => {
    const boardArr = [];

    // CACHE DOM (SELECTORS) //

    // EVENT BINDERS //
        //Squares on click call moveMove

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
