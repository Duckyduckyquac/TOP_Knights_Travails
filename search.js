// Search.js


// This would define the breadth-first-search that it would do

class Search{
    constructor(){
        // Stores the current paths we have
        this.queue = [];
        // Stores the visited coordinates
        this.visited = {};
    }
    addToQueue(arr){
        this.queue.push(arr);
    }
    removeFromQueue(){
        if(this.queue.length>0){
            let retrieved = this.queue[0];
            this.queue= this.queue.slice(1);
            return retrieved
        }
        else{
            throw new Error("Could not remove, queue is empty");
        } 
    }
    findShortestPath(start, end, board, knight){
        // Create the starting and ending coordinates
        // They have to be converted into array strings since
        // keys can only be strings
        let startCoordinates = `[${start[0]}, ${start[1]}]`;
        let endCoordinates = `[${end[0]},${end[1]}]`;

        // Mark the start as visited, since it will start the path
        this.visited[startCoordinates]=true;
        let currentPath = [[start[0], start[1]]];
        // This is the very first possible path, where the path is 
        // the startCoordinate itself
        this.addToQueue(currentPath);
        while(this.queue.length>0){
            let currentPath = this.removeFromQueue();
            let currentSquare = currentPath[currentPath.length-1];

            if(currentSquare[0]===end[0]&&
                currentSquare[1]===end[1]){
                return currentPath;
            }
            else{
                let possibleMoves = knight.generateValidMoves({row:currentSquare[0],
                                                               column:currentSquare[1]});
                for(let move of possibleMoves){
                    let moveKey = `[${move[0]}, ${move[1]}]`;
                    if(this.visited[moveKey]===true){
                        continue;
                    }
                    if(board.isValidSquare(move)!==true){
                        continue;
                    }
                    // if those two cases did not match, we create a new path
                    // for each and add them to the queue
                    let newPath = [...currentPath, move];
                    this.visited[moveKey]=true;
                    this.addToQueue(newPath);
                }
            }
        }
    }
}

module.exports = {Search};