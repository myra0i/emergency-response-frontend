//import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    passowrd: "",

  })

  const [err,setErr] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);



  const handleChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
     await login(inputs)
 
    navigate("/");
     
  }catch(err){
   setErr(err.response.data)
  }
  }
  return (
    <div className='auth'>
     <h1>Login</h1>
      <form>
      <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
      <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Login</button>
      {err && <p>{err}</p>}
      <span>Don't have an account? <Link to={"/register"}> Register</Link></span>
     </form>
    </div>
  )
}

export default Login
