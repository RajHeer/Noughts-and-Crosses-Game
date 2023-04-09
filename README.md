# Noughts-and-Crosses-Game
The classic (tic-tac-toe) game using modular code and a factory function. See 'live-view' [here](https://rajheer.github.io/Noughts-and-Crosses-Game/).

The Odin Project (JavaScript) cirriculum. Brief set [here](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe).

## About

Game interface which allows for two player competition (playing anonymously or through option to enter names).

## Implemented

1. Module / Revealing module / factory functon etc. to create only three global variables across code.

2. Separation of board related (DOM, binders, update board etc) logic and 'game-flow' logic.

3. Logic to evaluate win and draw conditions.

## To do

1. Further refactor (e.g. with separate displayController module). Amend code to only check win conditions where necessary (e.g. currently will also check when resetting game).

2. Refactor to reveal less critical functions e.g. change/set/reset players.

3. Implement AI for play against computer.
