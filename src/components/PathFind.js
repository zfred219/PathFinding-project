import React, {useState, useEffect, forwardRef} from "react"
import Spot from "./Spot"
import Astar from "../algorithms/AStar"
import BFS from "../algorithms/bfs/BFS"
import DFS from "../algorithms/dfs/DFS"
import Dijkstra from '../algorithms/dijkstra/Dijkstra'
import "./PathFind.css"
import Square from "./Square"

// Grid Information
const cols = 25;
const rows = 15;


const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1


const Pathfind = forwardRef((props, ref) => { 
    // ref must be palce after props
    const [Grid, setGrid] = useState([]);
    // const [Path, setPath] = useState([]);
    const [VisitedNodes, setVisitedNodes] = useState([]);
    const [MouseDown, setMouseDown] = useState(false);


    // Initialize
    useEffect(() => {
        initilizeGrid();
    }, []);
    
    // const mounted = useRef();
    // useEffect(() => {
    // if (!mounted.current) {
    //     // do componentDidMount logic
    //     mounted.current = true;
    // } else {
    //     calculatePath(Grid)
    //     // do componentDidUpdate logic
    // }
    // },[Grid]);

    React.useImperativeHandle(
        ref,
        () => ({
            dispatchFunctionBtn(btnChoice) {
                switch (btnChoice) {
                    case 'Walls':
                        generateRandomWalls();
                        break;
                    case 'Clean':
                        resetClearHandler("clear");
                        break;
                    case 'Reset':
                        resetClearHandler("reset");
                        break;
                    default:
                        break;
                }
            },

            dispatchPathAlgorithm(pathAlgorithm) {

            }
        }),
    )


    const initilizeGrid = () => {
        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
        }
        createGrid(grid);
        setGrid(grid);
        addNeighbours(grid);
    };



    const mouseDownHandler = (row, col) => {
        mouseDownWallToggle(Grid, row, col);
        setMouseDown(true)
    };

    const mouseEnterHandler = (row, col) => {
        if (MouseDown) mouseDownWallToggle(Grid, row, col);
    };

    const mouseUpHandler = (row, col) => {
        setMouseDown(false);
        neighbourChanged(Grid)
    };


    const mouseDownWallToggle = (grid, row, col) => {
        const newGrid = grid.slice();
        const spot = newGrid[row][col];
        const newSpot = {
          ...spot, // spreading all other props of this spot
          isWall: !spot.isWall,
        };
        newSpot.addNeighboursSpot(newGrid);
        newGrid[row][col] = newSpot;
        setGrid(newGrid);
    };



    


                       

    const neighbourChanged = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].neighbours = []
                grid[i][j].addNeighboursSpot(grid)
            }
        }
    }

    // Create the spot
    const createGrid = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Square(i, j);
            }
        }
    }
    
    //Add Negihbours
    const addNeighbours= (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].addNeighboursSpot(grid)
            }
        }
    }
    
    /* Calculate path based on currently selected algorithm */
    const calculatePath = (grid) => {
        const startNode = grid[NODE_START_ROW][NODE_START_COL];
        const endNode = grid[NODE_END_ROW][NODE_END_COL];
        // let algorithmPath = Astar(grid, startNode, endNode);
        // let algorithmPath = DFS(grid, startNode, endNode);
        // let algorithmPath = BFS(grid, startNode, endNode);
        let algorithmPath = Dijkstra(grid, startNode, endNode);
        setVisitedNodes(algorithmPath.visitedNodes);
        return algorithmPath;
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
                                <Spot 
                                key={colIndex} isStart={isStart}
                                isEnd={isEnd} row={rowIndex}
                                col={colIndex} isWall={isWall}
                                mouseDown={(r, c) => mouseDownHandler(r, c)}
                                mouseEnter={(r, c) => mouseEnterHandler(r, c)}
                                mouseUp={(r, c) => mouseUpHandler(r, c)}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )


    /* Use a trick to clear all unfinishing setTimeOut (Reset during animation) */
    const resetTimeOuthandler = () => {
        // Set a fake timeout to get the highest timeout id
        var highestTimeoutId = setTimeout(1);
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
    }

    /* Reset the grid to original state */
    const resetClearHandler = (choice) => {
        resetTimeOuthandler();
        for (let r = 0; r < Grid.length; r++) {
            for (let c = 0; c < Grid[0].length; c++) {
                const node = Grid[r][c];
                const elem = document.getElementById(`node-${node.x}-${node.y}`);
                elem.classList.remove("node-shortest-path");
                elem.classList.remove("node-visited");
            }
            if (choice === 'reset') initilizeGrid();
        }
    }

    //TODO: Better Approach?
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
    }

    const visualizePathHandler = () => {
        let algorithmPath = calculatePath(Grid)
        // if (!algorithmPath) return; //TODO: pop up message
        let VisitedNodes = algorithmPath.visitedNodes
        let Path = algorithmPath.path;

        for (let i = 1; i <= VisitedNodes.length; i++) {
            if (i === VisitedNodes.length) {
                setTimeout(() => {
                    visualizeShortestPath(Path);
                 }, 12 * i);
            } else {
                setTimeout(() => {
                const node = VisitedNodes[i];
                if (!node.isEnd) document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited";
                 }, 12 * i);
            }
        }
        
    }

    const visualizeShortestPath = (shortestPathNodes) => {
        for (let i = 1; i < shortestPathNodes.length - 1; i++) {
            setTimeout(() => {
                const node = shortestPathNodes[i];
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path";
            }, 5 * i);
        }
        
    }

    return (
        <div className={props.sidebarOn ? "right-wrapper" : "wrapper"}>
            <h1>PathFind Visualization</h1>
            <br></br>
            <div>
                <button id="v-btn" onClick={visualizePathHandler}>Visualize Path</button>
                <button onClick={generateRandomWalls}>Generate Walls</button>
                <button onClick={resetClearHandler.bind(this, "clear")}>Clear Path</button>
                <button onClick={resetClearHandler.bind(this, "reset")}>Reset</button>
            </div>
            <div className="grid">
                {gridWithNode}
            </div>
        </div>
    )
});

export default Pathfind