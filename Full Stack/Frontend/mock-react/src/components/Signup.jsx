import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Signup = () => {
const [email,setEmail] = useState('');
const [password,setPassword]=  useState('');
const [confirmPassword,setConfirm] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }


    try {
        const apiFetch = await axios.post(`http://localhost:8000/signup`,data);
        console.log(apiFetch);
        alert("signup Successful")
    } catch (error) {
        console.log(error);
        alert("Invalid Credentials")
    }
  }


  return (
    <div>
        <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <br/>
        <input type='password' placeholder='create your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <br/>
        <input type='password' placeholder='Enter your password again' value={confirmPassword} onChange={(e)=> setConfirm(e.target.value)} />
        <br/>
        <br/>
        <button type='submit'>Signup</button>

      </form>
    </div>
  )
}

export default Signup
