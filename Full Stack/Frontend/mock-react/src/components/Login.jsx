import axios from 'axios';
import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit =  async(e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

       try {
        const apiFetch = await axios.post("http://localhost:8000/login",data);
        console.log(apiFetch)
        if(apiFetch){
            alert(apiFetch.data.message)
            console.log(apiFetch.data.token)
            localStorage.setItem("token",apiFetch.data.token)
        }
        else{
            alert(apiFetch.data.message)
        }

       } catch (error) {
        console.log(error);
       }

    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <br/>
        <input type='password' placeholder='create your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <br/>
        <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default Login
