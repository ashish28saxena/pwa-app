import React, { memo } from "react";

const PureComponent=()=>{
    console.log("hello ashish i am purecoment call");
    return(
        <div>
            <h1>this is exaple of pure component </h1>
        </div>
    )
}

export default memo(PureComponent);