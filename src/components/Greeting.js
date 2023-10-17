import React from 'react'

export default function Greeting(props) {
    const date=new Date()
    const hours=date.getHours()
    
    let timeOfDay
    
    if (hours>=4 && hours<12) {
        timeOfDay='Morning'
    }
    else if(hours>=12 && hours<17){
        timeOfDay='Afternoon'
    }
    else if(hours>=17 && hours<20)
        {
            timeOfDay='Evening'
        }
    else{
            timeOfDay='Good Night'
        
    }
  return (
    <div>   
    Good {timeOfDay} {props.name}!
    </div>
  )
}
