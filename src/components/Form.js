import React from 'react'

export default function Form() {
    const[formData,setFormData]=React.useState({firstName:'',lastName:''})
    
    console.log(formData)
    
    function handleChange(event){
       setFormData(prevFormData=>{
           return{
               ...prevFormData,[event.target.name]:event.target.value
           }
       })
    }
    
    
  return (
    <form>
        <input type='text' placeholder='First name' name='firstName' onChange={handleChange}/>
        
        <input type='text' placeholder='Last name' name='lastName' onChange={handleChange}/>

    </form>

  )
}
