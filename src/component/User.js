import React, { useState,useEffect, createContext } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index"
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
import Parent from "./Parent";
import PureComponent from "./PureComponent";
const data= createContext()
const User=()=>{
    //const [getdata , setGetdata]=useState([]);
    const [getdata , setGetdata]=useState(0);
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
        setGetdata(getdata+1);
        console.log(getdata);
        console.log("hello i am display functiobn from parent componet");
    }
    useEffect(() => {
      getuser();
      //console.log("******",getdata); 
      },[]);
    return (
        <div><h1>this is user component </h1>
        <ErrorBoundary>
            <data.Provider>
            <Hero heroname="superman"/>
            <Hero heroname="superman"/>
            <Parent onEvent={display} />
            <PureComponent/>
            </data.Provider>
        
</ErrorBoundary>
       
        </div>
    )
}

export default User;