const gameBoard = ( () => {
    const boardArr = [ ["","",""],["","",""],["","",""]];

    // CACHE DOM (SELECTORS) //
    const board = document.querySelector('#game-board');
    const squares = board.querySelectorAll('.game-square');
    const playerInputs = document.querySelectorAll('input');

    // EVENT BINDERS //
    squares.forEach(square => {
        square.addEventListener('click', getSqID);
    });

    playerInputs.forEach(playerInput => {
        playerInput.addEventListener("keydown", callSetPlayer);
    })

    // GET SQUARE ID //
    function getSqID(e) {
        if (e.target.innerHTML === "") {
            updateBoardArr(e.target.id)
        } else {
            console.log("Taken square. Pick another.")
        }
    }  

    // CALL SET PLAYER (CAN'T DIRECT REFERENCE ON INITIALISATION)
    function callSetPlayer(e) {
        if (e.keyCode === 13) {
            gameflow.setPlayer(e);
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
        const isWin = gameflow.checkWin(boardArr)
            isWin ? console.log("Winner")
            : gameflow.changePlayer();
    }

})();

const gameflow = ( () => {
    const playersArr = [
        {playerName: "One", playerSym: "O"},
        {playerName: "Two", playerSym: "X"},
    ];
    let currentPlayer = playersArr[0];

    // SET PLAYER //
    function setPlayer(e) {
        console.log(e.target.value);
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
        currentPlayer === playersArr[0] 
        ? currentPlayer = playersArr[1]
        : currentPlayer = playersArr[0];
    }

    // CHECK WIN //
    function checkWin(boardArr) {
        // three in a row logic
        let rowCount = 0;
        while (rowCount < 3){
            if (boardArr[rowCount][0] != "" && boardArr[rowCount][0] === boardArr[rowCount][1]
            && boardArr[rowCount][1] === boardArr[rowCount][2]) {
                console.log(currentPlayer.playerName + " wins.");
            }
            rowCount++;
        }
        return false;
    }

    return {
        checkPlayer,
        checkWin,
        changePlayer,
        setPlayer
    };

})();

const playerFactory = (playerName, playerSym) => {

    return {
        playerName,
        playerSym
    }

};
