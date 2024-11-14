import React from "react";

//import Childcomponent from "./Childcomponent";
const Parent=(props)=>{
    let data="ashish saxena";
    return(
        <div>
            <h1 >sfdgfd </h1>
            <button onClick={()=>props.onEvent(data)}>click me</button>
        </div>
    )
}

export default Parent;