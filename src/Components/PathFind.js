import React, {useState, useEffect} from "react"
import Node from "./Node"
import Astar from "../Algorithms/AStar"
import "./PathFind.css"

const cols = 15;
const rows = 12;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1


const Pathfind = () => {
    const [Grid, setGrid] = useState([]);
    const [Path, setPath] = useState([]);
    const [VisitedNodes, setVisitedNodes] = useState([]);

    const initilizeGrid = () => {
        
        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
        }
        
        createGrid(grid);
        setGrid(grid);
        addNeighbours(grid);
        calculatePath(grid);

        // const startNode = grid[NODE_START_ROW][NODE_START_COL];
        // const endNode = grid[NODE_END_ROW][NODE_END_COL];
        // let path = Astar(startNode, endNode);
        // //diplay
        // setPath(path.path);
        // setVisitedNodes(path.visitedNodes);

 
    };

    // Call first
    useEffect(() => {
        initilizeGrid();
    }, []);

    

    // Create the spot
    const createGrid = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i, j);
            }
        }
    }
    
    //Add Negihbours
    const addNeighbours= (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].addNeighbours(grid)
            }
        }
    }
    
    //Spot constructor
    function Spot(i, j) {
        
        this.x = i;
        this.y = j;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.g = 0;
        this.f = 0;
        this.h = 0;
        this.neighbours = [];
        this.isWall = false;
        this.previous = undefined;
        this.addNeighbours = (grid) => {
            let i = this.x;
            let j = this.y;
            if (i>0) this.neighbours.push(grid[i-1][j]);
            if (i<rows-1) this.neighbours.push(grid[i+1][j]);
            if (j>0) this.neighbours.push(grid[i][j-1]);
            if (j<cols-1) this.neighbours.push(grid[i][j+1]);
        };
    }

    const calculatePath = (grid) => {
        const startNode = grid[NODE_START_ROW][NODE_START_COL];
        const endNode = grid[NODE_END_ROW][NODE_END_COL];
        let AlgorithmPath = Astar(startNode, endNode);
        //diplay
        setPath(AlgorithmPath.path);
        setVisitedNodes(AlgorithmPath.visitedNodes);
    }

    // Grid with node
    const gridWithNode = (
        <div>
            {Grid.map((row, rowIndex) => {
                return (
                    <div key = {rowIndex} className="rowWrapper">
                        {row.map((col, colIndex) => {
                            const {isStart, isEnd, isWall} = col;
                            return (
                                <Node 
                                key={colIndex} isStart={isStart}
                                isEnd={isEnd} row={rowIndex}
                                col={colIndex} isWall={isWall}/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

    const visualizePath = () => {
        
        //document.getElementById("v-btn").disabled = true;
        for (let i = 1; i <= VisitedNodes.length; i++) {
            if (i === VisitedNodes.length) {
                setTimeout(() => {
                    visualizeShortestPath(Path);
                 }, 20 * i);
            } else {
                setTimeout(() => {
                const node = VisitedNodes[i];
                if (!node.isEnd) document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited";
                 }, 20 * i);
            }
        }
        
    }

    const visualizeShortestPath = (shortestPathNodes) => {
        for (let i = 1; i < shortestPathNodes.length - 1; i++) {
            setTimeout(() => {
                const node = shortestPathNodes[i];
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path";
            }, 10 * i);
        }
        
    }

    const resetPath = () => {
        for (let i = 0; i < VisitedNodes.length; i++) {
            const node = VisitedNodes[i];
            const elem = document.getElementById(`node-${node.x}-${node.y}`);
            elem.classList.remove("node-shortest-path");
            elem.classList.remove("node-visited");
        }
        initilizeGrid();
    }

    //Better Approach?
    const generateRandomWalls = () => {
        for (let r = 0; r < Grid.length; r++) {
            for (let c = 0; c < Grid[0].length; c++) {
                
                let currSpot = Grid[r][c];
                currSpot.isWall = false;
                currSpot.isWall = (Math.random(1) < 0.2 && !currSpot.isStart && !currSpot.isEnd) ? true : false;
                const elem = document.getElementById(`node-${r}-${c}`)
                elem.classList.remove("node-shortest-path");
                elem.classList.remove("node-visited");
                if (currSpot.isWall) {
                    elem.classList.add("is-wall")
                } else {
                    elem.classList.remove("is-wall")
                }
            }
        }      
        calculatePath(Grid)
    }
    
    return (
        <div className="Wrapper">
            <h1>PathFind Visualization</h1>
            <br></br>
            <button id="v-btn" onClick={visualizePath}>Visualize Path</button>
            <button onClick={resetPath}>Reset</button>
            <button onClick={generateRandomWalls}>Generate Walls</button>
            {gridWithNode}
        </div>
    )
}




export default Pathfind