import Stack from './Stack';

/* Iterative DFS */
function DFS(grid, startNode, endNode) {

    let DfsStack = new Stack();
    let visitedNodes = [];
    let path = [];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            grid[r][c].visited = false;
        }
    }
    DfsStack.push(startNode);

    while(!DfsStack.isEmpty()) {
        
        let currVisitingNode = DfsStack.poll();
        visitedNodes.push(currVisitingNode)
        currVisitingNode.visited = true

        // Check End
        if (currVisitingNode === endNode) {
            console.log("Found DFS");
            let currNode = currVisitingNode;
            path.push(currNode);
            while(currNode.previous) {
                path.push(currNode.previous);
                currNode = currNode.previous
            }
            return {path, visitedNodes};
        }

        for (let i = 0; i < currVisitingNode.neighbours.length; ++i) {
            // neighbourCounter++;
            let currNeighborNode = currVisitingNode.neighbours[i];
            if (!currNeighborNode.visited && !currNeighborNode.isWall) {
                // For BFS queue
                DfsStack.push(currNeighborNode);
                // For BFS faster check
                currNeighborNode.visited = true;
                currNeighborNode.previous = currVisitingNode
            } 

        }
    }
    return {path, visitedNodes, error: "No Path Found!"};
}







/*

let result = "nul";
// With recursion
function DFS(visitedSet, startNode, endNode) {

    // Prepare
    let visitedNodes = [];
    let path = [];

    
    // Algorithm
    for (let currVisitingNode in startNode.neighbours) {
        console.log(startNode.neighbours)
        console.log(currVisitingNode)
        if (visitedSet[currVisitingNode.x][currVisitingNode.y]) continue;

        visitedSet[currVisitingNode.x][currVisitingNode.y] = true
        visitedNodes.push(currVisitingNode);
        

        if (currVisitingNode !== endNode) {
            result = DFS(visitedSet, currVisitingNode, endNode)
            if (!result) return result
        } else {
            console.log("Found DFS");
            let currNode = currVisitingNode;
            path.push(currNode);
            while(currNode.previous) {
                path.push(currNode.previous);
                currNode = currNode.previous
            }
            return {path, visitedNodes};
        }
    }
    console.log(result)
    return result;
}
*/

export default DFS