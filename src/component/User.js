import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index"
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
import Parent from "./Parent";
const User=()=>{
    //const [getdata , setGetdata]=useState([]);
    const dispatch=useDispatch();
    const getuser=async()=>{
        const res= await fetch("https://dummyjson.com/users");
        const data= await res.json();
        dispatch(actionCreators.storeUser(data.users))
        //console.log(data);
        //const a=await setGetdata(data.users);  
        //setGetdata(data.users);  
        
    }

    function display()
    {
        console.log("hello i am display functiobn from parent componet");
    }
    useEffect(() => {
      getuser();
      //console.log("******",getdata); 
      },[]);
    return (
        <div><h1>this is user component </h1>
        <ErrorBoundary>
        <Hero heroname="superman"/>
        <Hero heroname="joker"/>
        <Parent onEvent={display} />
</ErrorBoundary>
       
        </div>
    )
}

export default User;