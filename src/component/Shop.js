import React from "react";
import { useDispatch } from "react-redux";
//import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"
//import { actionCreators } from './state/index';
const Shop=()=>{
    const dispatch=useDispatch();
    return(
        <div>
            <h1>Deposit & Withdraw Money</h1>
        <button onClick={ ()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
        Update Blance
        <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    </div>
    )
    
}

export default Shop;