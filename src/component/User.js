import React, { useEffect,useState } from "react";
const User=()=>{
    const [getdata , setGetdata]=useState([]);
    
    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            let a=data;
            console.log('&&&&&&&&&',a); 
            setGetdata(a);
            console.log('#######',getdata); 
            
          });
      },[]);
    return (
        <div><h1>this is user component </h1></div>
    )
}

export default User;