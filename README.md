# Conway's Game of Life
###### The Game of Life, 
is a cellular automation (algorithim) created by mathematician John Horton Conway in 1970. 
The game takes place on a two-diminsional grid, and each box or cell can either be live or dead. 
The state of the cell's neighbors decides whether the current cell will be live or dead, on the next step in time. 

 ******

### Rules of the game
* Any live cell with fewer than two neighbors dies.
* Any live cell with two or three live neighbours lives on.
* Any live cell with more than three live neighbours dies.
* Any dead cell with exactly three live neighbours becomes a live cell.
(Neightbors can be to the left/right, up/down, or diagonal.)
******

### Features I'd add

* Don't kill neighbors
* 0(log n) recursion in game logic
