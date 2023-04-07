const gameBoard = ( () => {
    const boardArr = [ ["","",""],["","",""],["","",""]];

    // CACHE DOM (SELECTORS) //
    const board = document.querySelector("#game-board");
    const squares = board.querySelectorAll(".game-square");
    const playerInputs = document.querySelectorAll("input");
    const display = document.querySelector("#display");

    // EVENT BINDERS //
    squares.forEach(square => {
        square.addEventListener("click", getSqID);
    });

    playerInputs.forEach(playerInput => {
        playerInput.addEventListener("keydown", callSetPlayer);
    })

    // GET SQUARE ID //
    function getSqID(e) {
        if (e.target.innerHTML === "") {
            updateBoardArr(e.target.id);
            display.innerHTML = "";
        } else {
            display.innerHTML = "Square taken. Pick another.";
        }
    }  

    // CALL SET PLAYER (CAN'T DIRECT REFERENCE ON INITIALISATION) //
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
        playerFactory(e.target.value);
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
        let count = 0;
        while (count < 3){
            // Loops to check all rows
            if (boardArr[count][0] != "" && boardArr[count][0] === boardArr[count][1]
            && boardArr[count][1] === boardArr[count][2]) {
                console.log(currentPlayer.playerName + " wins.");
                return true;
            // Loops to check all columns
            } else if (boardArr[0][count] != "" && boardArr[0][count] === boardArr[1][count]
            && boardArr[1][count] === boardArr[2][count]) {
                console.log(currentPlayer.playerName + " wins.");
                return true;
            // Loops to check diagonals
            } else if (boardArr[0][0] != "" && boardArr[0][0] === boardArr[1][1]
            && boardArr[1][1] === boardArr[2][2]) {
                console.log(currentPlayer.playerName + " wins.");
                return true;
            } else if (boardArr[2][0] != "" && boardArr[2][0] === boardArr[1][1]
            && boardArr[1][1] === boardArr[0][2]) {
                console.log(currentPlayer.playerName + " wins.");
                return true;
            }
            count++;
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

const playerFactory = (playerName) => {
    let count = 0;
    let playerSym = "X"
    return {
        playerName,
        playerSym
    }

};
