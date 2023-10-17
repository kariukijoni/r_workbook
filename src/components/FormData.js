import React from 'react'

export default function FormData() {
    const[formData,setFormData]=React.useState({email:'',password:'',cpassword:'',isNewsLetter:true})
    
    function handleChange(event){
        const{name,value,type,checked}=event.target
        setFormData(prevFormData=>({...prevFormData,[name]:type === "checkbox"? checked : value}))
    }
    
    function handleSubmit(event){
        event.preventDefault()
        // console.log(formData)
        if(formData.password === formData.cpassword){
            console.log('Successfuly signed up')
        }else
        {
            console.log('Passwords do not much')
            return
        }
        
        if(formData.isNewsLetter)
        {
            console.log('Thank you for signing up to our news letter')
        }
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
        <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        <input type="password" name='cpassword' placeholder='Confirm Password' value={formData.cpassword} onChange={handleChange} />
        <input type='checkbox' id="isNewsLetter" name='isNewsLetter' checked={formData.isNewsLetter} onChange={handleChange}/> 
        <label htmlFor='isNewsLetter'>I want to join the newsletter</label>
        <br />
        <button>Sign Up</button>
    </form>
  )
}
