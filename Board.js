// Board.js

// Define each vertex as a row by column combination
// Following numbers are counted from 0

class Board{
    constructor(){
        this.minRow = 0;
        this.minColumn = 0;
        this.maxRow = 7;
        this.maxColumn = 7;        
    }
    isValidSquare(square){
        if((square.row <= this.maxRow)&&
           (square.column <= this.maxColumn)&&
           (square.row >= this.minRow)&&
           (square.column >= this.minColumn)){
                return true;
           }
        else{
            return false;
        }
    }
}

module.exports = {Board};
