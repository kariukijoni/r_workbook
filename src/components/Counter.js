import { set } from 'lodash'
import React from 'react'

export default function Counter() {
    const[count,setCount]=React.useState(0)
    
    function add(){
        // setCount(count+1)
        
        // console.log('yes')
        
        // setCount(function(oldValue){
        //     return oldValue+1
        // })
        
        setCount(prevCount=>prevCount+1)
    }
    
    function substract(){
        setCount(count-1)
    }
    
  return (
    <div>
        <button className='btn btn-danger' onClick={substract}>-</button>
        <button className='btn btn-outline-info'> {count} </button>
        <button className='btn btn-secondary' onClick={add}>+</button>
    
    </div>
  )
}
