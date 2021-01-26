import React, { Fragment, useState }  from "react"
import Pathfind from './PathFind'
import Sidebar from '../layout/sidebar/Sidebar'

// A parent class that will handle calls between algorithm and sidebar (DJ)
const MainComponent = () => {
    const [sidebarOn, setSidebarOn] = useState(true);
    const [currAlgorithm, setCurrAlgorithm] = useState("A Star");
    const [currMaze, setCurrMaze] = useState("Kruskal");

    const handleSidebarOn = () => {
        setSidebarOn(!sidebarOn);
    };

    const algorithmSelectedHandler = () => {
        setCurrAlgorithm("BFS");
    };

    const mazeGenerateHandler = () => {
        setCurrMaze("Prim");
    };

    return (
        <Fragment>
            {/* Pass thing back to parent */}
            <Sidebar handleSidebar={handleSidebarOn.bind(this)} sidebar={sidebarOn} />
            <Pathfind sidebarOn={sidebarOn} currAlgorithm={currAlgorithm} currMaze={currMaze} />
        </Fragment>
    )
};

export default MainComponent;