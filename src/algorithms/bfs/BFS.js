import Queue from './Queue'

function BFS(grid, startNode, endNode) {
    // Preparation
    let BfsQueue = new Queue();
    let visitedNodes = [];
    // Distance from start to anynode
    let distance = Array(grid.length * grid[0].length).fill(Number.MAX_SAFE_INTEGER);
    // counter to count distance array spot
    let neighbourCounter = 0;
    let pathCounter = 0;
    // Final path
    let path = [];

    BfsQueue.enqueue(startNode);
    distance[pathCounter] = 0;


    // Run BFS
    while(!BfsQueue.isEmpty()) {
        
        let currVisitingNode = BfsQueue.dequeue();
        currVisitingNode.BFSvisited = true
        pathCounter++;

        // Check End
        if (currVisitingNode === endNode) {
            console.log("Found BFS");
            let currNode = currVisitingNode;
            while(currNode.previous) {
                path.push(currNode.previous);
                currNode = currNode.previous
            }
            return {path, visitedNodes};
        }

        for (let i = 0; i < currVisitingNode.neighbours.length; ++i) {
            neighbourCounter++;
            let currNeighborNode = currVisitingNode.neighbours[i];
            if (!currNeighborNode.BFSvisited && !currNeighborNode.isWall) {
                // For BFS queue
                BfsQueue.enqueue(currNeighborNode);
                // For display purpose
                visitedNodes.push(currNeighborNode);
                // For BFS faster check
                currNeighborNode.BFSvisited = true;
                // Current Node distance to startNode
                distance[neighbourCounter] = distance[pathCounter] + 1;
                // Set previous 
                currNeighborNode.previous = currVisitingNode
            } 

        }
    }
    console.log(visitedNodes)
    console.log("I didn't find it buddy");
}

export default BFS