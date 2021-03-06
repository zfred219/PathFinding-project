import React, { Fragment, useState, useRef }  from "react"
import Pathfind from './PathFind'
import Sidebar from '../layout/sidebar/Sidebar'

// A parent class that will handle calls between algorithm and sidebar (DJ)
const MainComponent = () => {
    const [sidebarOn, setSidebarOn] = useState(true);
    const [currPathFinding, setCurrPathFinding] = useState("A Star");
    const [currMaze, setCurrMaze] = useState("Kruskal");
    const pathFindRef = useRef();

    const handleSidebarOn = () => {
        setSidebarOn(!sidebarOn);
    };

    const setPathAlgorithmHandler = (algorithm) => {
        setCurrPathFinding(algorithm);
        console.log(algorithm)
    };

    const setMazeAlgorithmHandler = (algorithm) => {
        setCurrMaze(algorithm);
        console.log(algorithm)
    };

    const buttonSelectHandler = (btnChoice) => {
        pathFindRef.current.dispatchFunctionBtn(btnChoice);
        console.log(btnChoice);
        
    }

    return (
        <Fragment>
            <Sidebar    handleSidebar={handleSidebarOn.bind(this)}
                        sidebar={sidebarOn} 
                        setMazeAlgorithm={setMazeAlgorithmHandler} 
                        setPathAlgorithm={setPathAlgorithmHandler}
                        buttonSelected={buttonSelectHandler}
                        />
            <Pathfind   ref={pathFindRef}
                        sidebarOn={sidebarOn} 
                        currPathFinding={currPathFinding}
                        currMaze={currMaze} 
                        />
        </Fragment>
    )
};

export default MainComponent;