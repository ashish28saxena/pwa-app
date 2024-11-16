import React from "react";

const Childcomponent=(props)=>{
    return(
        <div>
            <label id="example">example {props.name}  {props.email}</label>
            <h1>{props.childern}</h1>
        </div>
    )
}

export default Childcomponent;