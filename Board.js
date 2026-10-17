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
    isValidSquare(squareArr){
        if(Array.isArray(squareArr)!==true){
            throw new Error('This must be an array of row by column');
        }
        else{
            if((squareArr[0]<=this.maxRow)&&
               (squareArr[1]<=this.maxColumn)&&
               (squareArr[0]>= this.minRow)&&
               (squareArr[1]>= this.minColumn)){
                return true;
            }
            else{
                return false;
            }

        }
    }
}

module.exports = {Board};
