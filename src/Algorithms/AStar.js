function Astar(startNode, endNode) 
{
    // Display
    let visitedNodes = [];

    // Prepare
    let path = [];
    let openSet = [];
    let closedSet = [];
    openSet.push(startNode);


    while(openSet.length > 0) {

        // Find the node with least f value (Queue)
        let leastIndex = 0;
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f <  openSet[leastIndex].f) {
                leastIndex = i;
            }
        }
        // Get and Pop it out
        let current = openSet[leastIndex];
        openSet = openSet.filter((elt) => elt !== current);
        // add current to visited
        visitedNodes.push(current);
        
        // Check end
        if(current === endNode) {
            let temp = current;
            path.push(temp);
            
            while(temp.previous) {
                path.push(temp.previous);
                temp = temp.previous
            }
            return {path, visitedNodes};
        }

        // Get all possible neighbours/successors
        let neighbours = current.neighbours;
        // For each neighbour
        for (let i = 0; i < neighbours.length; i++) {
            let neighbour = neighbours[i];
            // 1) 
            // console.log(neighbour.isWall)
            if (!closedSet.includes(neighbour) && !neighbour.isWall) {
                let tempG = current.g + 1;
                let newPath = false;
                if (openSet.includes(neighbour)) {
                    if (tempG < neighbour.g) {
                        neighbour.g = tempG;
                        newPath = true;
                    } 
                } else {
                    neighbour.g = tempG;
                    newPath = true;
                    openSet.push(neighbour);
                }

                if (newPath) {
                    neighbour.h = heruistic(neighbour, endNode);
                    neighbour.f = neighbour.g + neighbour.f;
                    neighbour.previous = current;
                }
            }
        } 
        closedSet.push(current);
    }
    return {path, visitedNodes, error: "No Path Found!"};
}

// Mahant Dist (TODO: Change to other?)
function heruistic(a, b) {
    let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
    return d;
}

export default Astar