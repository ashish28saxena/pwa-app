import React from "react";

const Parent=(props)=>{
    return(
        <div>
            <button onClick={props.onEvent}>click me</button>
        </div>
    )
}

export default Parent;