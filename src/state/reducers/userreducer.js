const reducer=(state=0,action)=>{
  
    if(action.type==='storeuser')
    {
      return action.payload
    }else{
      return state
    }
}

export default reducer