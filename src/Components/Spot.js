import React from "react"
import "./Spot.css"

const Spot = (props) => {
    const classes = props.isStart ? "node-start" : props.isWall ? "is-wall" : props.isEnd ? "node-end" : "";
    return (
        <div className = {`node ${classes}`}
         id={`node-${props.row}-${props.col}`}
          onMouseDown={()=>props.mouseDown(props.row, props.col)}
          onMouseEnter={()=>props.mouseEnter(props.row, props.col)}
          onMouseUp={()=>props.mouseUp(props.row, props.col)}
          >
        </div>
    )
};

export default React.memo(Spot);