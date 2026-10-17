// main.js
// this will serve as the controller, therefore, it imports the other classes

const {Board} = require('./Board.js');
const {KnightPiece} = require('./KnightPiece.js');
const {Search} = require('./Search.js');

let boardInstance = new Board();
let pieceInstance = new KnightPiece(0,0);
let searchInstance = new Search();

let start = [pieceInstance.row, pieceInstance.column];
let target = [7,7];

shortestPath = searchInstance
                .findShortestPath(start, target, 
                                  boardInstance, pieceInstance);
if(shortestPath){
    console.log(`found the shortest path in ${shortestPath.length-1} moves`);
    console.log(`Path to target [${target[0]}, ${target[1]}]:\n`);
    shortestPath.forEach(square => {
        return console.log(square);
    })
}
else{
    console.log("No path exists.");
}
