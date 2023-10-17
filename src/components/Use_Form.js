import React from 'react'

export default function Use_Form() {
    const[warsData,setWarsData]=React.useState({})
    const[count,setCount]=React.useState(1)
    
    React.useEffect(function(){
        // console.log('Effet ran')
        fetch(`https://swapi.dev/api/people/${count}`).then(res=>res.json()).then(data=>setWarsData(data))
    },[count])
    
  return (
    <div>
        <pre>{JSON.stringify(warsData,null,2)}</pre>
        <p>The count is: {count}</p>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Generate</button>
    </div>
  )
}
