import React from "react";

const Hero =(props)=>{
    if(props.heroname==="joker")
    {
        throw new Error("Hero not a joker")
    }
     return(
        <div>
            <h1>this is hero component i work error boundry {props.heroname}</h1>
        </div>
     )
}

export default Hero;