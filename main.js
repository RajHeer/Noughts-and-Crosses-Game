const gameBoard = ( () => {
    let boardArr = [ ["","",""],["","",""],["","",""] ];

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
        } else {
            display.innerHTML = "Square taken. Pick another.";
        }
    }  

    // CALL SET PLAYER (CAN'T DIRECT REFERENCE ON INITIALISATION) //
    function callSetPlayer(e) {
        display.innerHTML = "Press ENTER after NAME.";
        if (e.keyCode === 13) {
            display.innerHTML = "";
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
        display.innerHTML = "";
        squares.forEach(square => {
            const indices = square.id.match(/(\d)/g)
            const row = indices[0];
            const col = indices[1];
            square.innerHTML =  boardArr[row][col];
        })
        const isWin = gameflow.checkWin(boardArr)
        isWin ? reset(isWin)
        : gameflow.changePlayer();
    }

    function reset(isWin) {
        display.innerHTML = `${isWin.winner} wins.`
        boardArr = [ ["","",""],["","",""],["","",""] ];
        setTimeout(updateDisplay, 1750);
        setTimeout(gameflow.resetPlayerOne, 1800);
    }

})();

const gameflow = ( () => {
    // DEFAULT PLAYER NAMES //
    const playersArr = [
        {playerName: "One", playerSym: "O"},
        {playerName: "Two", playerSym: "X"},
    ];
    let currentPlayer = playersArr[0];

    // SET PLAYER //
    function setPlayer(e) {
        const newPlayer = playerFactory(e.target.value, e.target.id);
        if (newPlayer.playerSym === "O") {
            playersArr[0] = newPlayer;
            resetPlayerOne();
        } else {
            playersArr[1] = newPlayer;
        }
    }

    function resetPlayerOne() {
        currentPlayer = playersArr[0];
        console.log(currentPlayer);
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
        const confirmWin = {win: true, winner: currentPlayer.playerName}
        while (count < 3){
            // Loops to check all rows
            if (boardArr[count][0] != "" && boardArr[count][0] === boardArr[count][1]
            && boardArr[count][1] === boardArr[count][2]) {
                return confirmWin;
            // Loops to check all columns
            } else if (boardArr[0][count] != "" && boardArr[0][count] === boardArr[1][count]
            && boardArr[1][count] === boardArr[2][count]) {
                return confirmWin;
            // Loops to check diagonals
            } else if (boardArr[0][0] != "" && boardArr[0][0] === boardArr[1][1]
            && boardArr[1][1] === boardArr[2][2]) {
                return confirmWin;
            } else if (boardArr[2][0] != "" && boardArr[2][0] === boardArr[1][1]
            && boardArr[1][1] === boardArr[0][2]) {
                return confirmWin;
            }
            count++;
        }
        const isDraw = checkDraw(boardArr);
        if (isDraw) {
            return {win: false, winner: "Draw - nobody"}
        } 
        return false;
    }

    //CHECK DRAW (ONLY WORKS THROUGH CALL IN CHECKWIN)//
    function checkDraw(boardArr) {
        let rowCount = 0;
        while (rowCount < 3) {
            let colCount = 0;
            while (colCount < 3) {
                if (boardArr[rowCount][colCount] === "") {
                    return false;
                }
            colCount++;
            }
            rowCount++;
        }
        return true;
    }

    return {
        checkPlayer,
        checkWin,
        changePlayer,
        setPlayer,
        resetPlayerOne
    };

})();

const playerFactory = (playerName, playerSym) => {
    return {
        playerName,
        playerSym
    }

};
