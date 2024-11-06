import { combineReducers } from "redux";
import amountreducer from "./amountreducer";
import userreducer from "./userreducer";
const reducers=combineReducers({
    amount:amountreducer,
    showuser:userreducer
})

export default reducers