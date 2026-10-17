// Knight.js

// 1: Define the possible moves that the knight can make (put them as offsets)
// The moves are formatted as [row, column] offsets
class KnightPiece{
    constructor(row, column){
        this.row = row;
        this.column = column;
        // To be clear, the rows are counted from top to bottom
        // As for the columns, they increase from left to right
        this.knightMoveOffsets = [[-1,-2],[-2,-1],
                                  [-2,1],[-1,2],
                                  [1,-2],[2,-1],
                                  [2,1],[1, 2]];
    }
    // do note that piece is a KnightPiece object
    // it is currently placed in row, column
    // We could not use the this.row and this.column 
    // since we would have to use this function further than
    // the initial 8 moves
    generateValidMoves(piece){
        // get the position of the piece
        let row = piece.row;
        let column = piece.column;
        let pieceCoordinate = [row, column];

        let validMoves = [];
        for(let offset of this.knightMoveOffsets){
            let offsettedRow = pieceCoordinate[0]+offset[0]; 
            let offsettedColumn = pieceCoordinate[1]+offset[1];
            validMoves.push([offsettedRow, offsettedColumn]);
        }
        return validMoves;
    }
}

module.exports = {KnightPiece};