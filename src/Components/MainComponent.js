import React, { Fragment, useState }  from "react"
import Pathfind from './PathFind'
import Sidebar from '../layout/sidebar/Sidebar'


const MainComponent = () => {
    const [sidebarOn, setSidebarOn] = useState(true);
    const handleSidebarOn = () => {
        setSidebarOn(!sidebarOn);
    };

    return (
        <Fragment>
            {/* Pass thing back to parent */}
            <Sidebar handleSidebar={handleSidebarOn.bind(this)} sidebar={sidebarOn} />
            <Pathfind sidebarOn={sidebarOn} />
        </Fragment>
    )
};

export default MainComponent;