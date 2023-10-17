import React from 'react'

export default function Page() {
    const[things,setThings]=React.useState(['Thing 1','Thing 2'])
    
    function addItem(){
        const newThingText=`Thing ${things.length+1}`
        setThings(prevState=>[...prevState,newThingText])
    }
    
    const thingsElement=things.map(thing=><p key={thing}>{thing}</p>)
    
  return (
    <div>
        <button className='btn btn-outline-info' onClick={addItem}>Add Item</button>
        {thingsElement}
    </div>
  )
}
