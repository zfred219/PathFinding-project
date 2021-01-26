
// Grid Information
const cols = 5;
const rows = 5;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1


// Square function
class Square {
    

    constructor(i, j) {
    this.x = i;
    this.y = j;
    this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
    this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
    // For A*
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbours = [];
    this.isWall = false;
    this.previous = undefined;
    this.dist = Number.MAX_VALUE;
    this.visited = false;
    this.addNeighboursSpot = (grid) => {
        let i = this.x;
        let j = this.y;
        if (i>0) this.neighbours.push(grid[i-1][j]);
        if (i<rows-1) this.neighbours.push(grid[i+1][j]);
        if (j>0) this.neighbours.push(grid[i][j-1]);
        if (j<cols-1) this.neighbours.push(grid[i][j+1]);
    };
    }
    
}

export default Square;