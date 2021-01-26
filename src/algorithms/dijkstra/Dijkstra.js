
import PriorityQueue from './PriorityQueue'

function Dijkstra(grid, startNode, endNode) {
    
    // Display
    let visitedNodes = [];
    let path = [];

    // A priority queue ordered by distance
    let fringe = new PriorityQueue((node1, node2) => node1.dist - node2.dist);

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            grid[r][c].dist = Number.MAX_VALUE;
            fringe.enq(grid[r][c]); 
        }
    }
    startNode.dist = 0;


    while (!fringe.isEmpty()) {
        const currVisitingNode = fringe.deq();
        
        visitedNodes.push(currVisitingNode);

        // Check path find
        if(currVisitingNode === endNode) {
            console.log("Pathfind by Dijkstra!")
            let temp = currVisitingNode;
            path.push(temp);
            
            while(temp.previous) {
                path.push(temp.previous);
                temp = temp.previous
            }
            return {path, visitedNodes};
        }

        for (let i = 0; i < currVisitingNode.neighbours.length; i++) {
            let neighbourNode = currVisitingNode.neighbours[i];
            if(currVisitingNode.dist + heruistic(currVisitingNode, neighbourNode) < neighbourNode.dist) {
                neighbourNode.dist = currVisitingNode.dist + heruistic(currVisitingNode, neighbourNode);
                neighbourNode.previous = currVisitingNode;
            }
        }
        console.log(fringe)
        
    }
    return {path, visitedNodes, error: "No Path Found by Dijkstra!"};
}

// Mahant Dist 
function heruistic(a, b) {
    let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
    return d;
}

export default Dijkstra;