const gameBoard = ( () => {
    const boardArr = [ ["","",""],["","",""],["","",""]];

    // CACHE DOM (SELECTORS) //
    const board = document.querySelector('#game-board');
    const squares = board.querySelectorAll('.game-square');

    // EVENT BINDERS //
    squares.forEach(square => {
        square.addEventListener('click', getSqID);
    });

    // GET SQUARE ID //
    function getSqID(e) {
        if (e.target.innerHTML === "") {
            updateBoardArr(e.target.id)
        } else {
            console.log("Taken square. Pick another.")
        }
    }  

    // UPDATE BOARD ARRAY //
    function updateBoardArr(squareID) {
        const indices = squareID.match(/(\d)/g)
        const row = indices[0];
        const col = indices[1];
        const currentPlayer = gameflow.checkPlayer();
        boardArr[row][col] = currentPlayer.playerSym;
        updateDisplay();
    }

     // UPDATE DISPLAY //
     function updateDisplay() {
        squares.forEach(square => {
            const indices = square.id.match(/(\d)/g)
            const row = indices[0];
            const col = indices[1];
            square.innerHTML =  boardArr[row][col];
        })
        // CALL checkWin
        // if true - delcare winner, end game
        // if false - update whose turn
        // CALL changePlayer
    }

})();

const gameflow = ( () => {
    const playersArr = [
        {playerName: "One", playerSym: "X"},
        {playerName: "Two", playerSym: "O"},
    ];
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

const playerFactory = (playerName, playerSym) => {

    return {
        playerName,
        playerSym
    }

};
