/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function TodoCard(props ) {

    const { children } = props 
  return (
   
         <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
    
                    <i className ="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                </div>
         </li>
      
    
  )
}
