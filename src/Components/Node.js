import React from "react"
import "./Node.css"

const Node = (props) => {
    const classes = props.isStart ? "node-start" : props.isWall ? "is-wall" : props.isEnd ? "node-end" : "";
    return (
        <div className = {`node ${classes}`} id={`node-${props.row}-${props.col}`} onMouseDown={()=>props.mouseDown(props.row, props.col)}></div>
    )
};

export default Node;