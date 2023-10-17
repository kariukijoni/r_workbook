import React from 'react'

export default function Form() {
    const[formData,setFormData]=React.useState({firstName:'',lastName:'',
                                                email:'',comments:'',isFriendly:true,
                                                employment:'',favColor:''})
    
    // console.log(formData.favColor)
    
    function handleChange(event){
        
        // change event.target.value/name
        const{name,value,type,checked}=event.target
        
       setFormData(prevFormData=>{
           return{
               ...prevFormData,[name]:type === "checkbox" ? checked: value
           }
       })
    }
    
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='First name' name='firstName' value={formData.firstName} onChange={handleChange}/>
        
        <input type='text' placeholder='Last name' name='lastName' value={formData.lastName} onChange={handleChange}/>
        
        <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
        
        <textarea placeholder='Text Area' name='comments' value={formData.comments} onChange={handleChange}/>
        <div className='form-group'>
            <input type='checkbox' id="isFriendly" name='isFriendly' checked={formData.isFriendly} onChange={handleChange}/>
            <label htmlFor="isFriendly">Are you friendly?</label>
        </div>
        
        <fieldset>
            <legend>Current Employment Status</legend>
           
            <input type='radio' id='unemployed' name='employment' value='unemployed' onChange={handleChange}/>
            <label htmlFor="unemployed">Unemployed</label>
            
            <input type='radio' id='part_time' name='employment' value='part_time' onChange={handleChange}/>
            <label htmlFor="part_time">Part-Time</label>
            <input type='radio' id='full_time' name='employment' value='full_time' onChange={handleChange}/>
            <label htmlFor="full_time">Full-Time</label>
        </fieldset>
        <br />
        
        <label htmlFor='favColor'>What is your favourite color?</label><br />
        <select name="favColor" id="favColor" value={formData.favColor} onChange={handleChange}>
            <option value=''>--Choose--</option>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='yellow'>Yellow</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='indigo'>Indigo</option>
            <option value='violet'>Violet</option>        
        </select>
        <br />
        <button>Submit</button>
    </form>

  )
}
