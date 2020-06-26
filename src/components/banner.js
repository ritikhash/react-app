import React from 'react'

export default function banner(props) {
    return (
        
     <div className ="banner"> 
       <h1> {props.tittle}</h1>
           
      <div/>
       <p>{props.subTittle}</p>
          {props.children}
     </div>
        
    )
}

