import Queue from './Queue'

function BFS(grid, startNode, endNode) {
    console.log("RUN BFS")
    // Preparation
    let BfsQueue = new Queue();
    let visitedNodes = [];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            grid[r][c].visited = false;
        }
    }



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
        visitedNodes.push(currVisitingNode)
        currVisitingNode.visited = true
        pathCounter++;

        // Check End
        if (currVisitingNode === endNode) {
            console.log("Found BFS");
            let currNode = currVisitingNode;
            path.push(currNode);
            while(currNode.previous) {
                path.push(currNode.previous);
                currNode = currNode.previous
            }
            return {path, visitedNodes};
        }
        console.log(currVisitingNode.neighbours)
        for (let i = 0; i < currVisitingNode.neighbours.length; ++i) {
            neighbourCounter++;
            let currNeighborNode = currVisitingNode.neighbours[i];
            if (!currNeighborNode.visited && !currNeighborNode.isWall) {
                // For BFS queue
                BfsQueue.enqueue(currNeighborNode);
                // For BFS faster check
                currNeighborNode.visited = true;
                // Current Node distance to startNode
                distance[neighbourCounter] = distance[pathCounter] + 1;
                // Set previous 
                currNeighborNode.previous = currVisitingNode
            } 

        }
    }
    return {path, visitedNodes, error: "No Path Found!"};
}

export default BFS