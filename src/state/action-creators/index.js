export const depositMoney=(amount)=>{
     return (dispatch)=>{
        dispatch({
                type:'deposit',
                payload: amount
        }
                
        )
        
     }
}

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{ 
        
        dispatch({
                type:'withdraw',
                payload: amount
        }
                
        )
        

     }
}


export const storeUser=(user)=>{
        return (dispatch)=>{
           dispatch({
                   type:'storeuser',
                   payload: user
           }
                   
           )
           
        }
   }