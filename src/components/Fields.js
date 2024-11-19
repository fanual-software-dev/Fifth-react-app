import React, { useState } from 'react'

const Fields = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const ChangeHandler = (changetype,e)=>{
        if (changetype==="name"){
            setName(e.target.value)
            console.log("name: ",name)
        }

        else if (changetype==="email"){
            setEmail(e.target.value)
            console.log("email: ",email)
        }

        else{
            setPassword(e.target.value)
            console.log("password: ",password)
        }
    }

  return (
    <div className='fields'>
        <p>Input Fields</p>
      <form className='form'>
        <input onChange={(e)=>ChangeHandler("name",e)}     value={name} type='text' placeholder='Enter your name' required/>
        <input onChange={(e)=>ChangeHandler("email",e)}    value={email} type='text' placeholder='Enter your email' required/>
        <input onChange={(e)=>ChangeHandler("password",e)} value={password} type='text' placeholder='Enter your password' required/>
        <button type='button'>Submit</button>
      </form>
    </div>
  )
}

export default Fields
