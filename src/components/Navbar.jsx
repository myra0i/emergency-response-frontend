import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import logo from "../img/logo.png"
import {AuthContext} from "../context/authContext"

const Navbar = () => {

  const {currentUser,logout} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt=''/>
          </Link>
          
        </div>
        <div className="link">
          <Link className='link' to={"/?cat=fire"}>
           <h6>Fire</h6> 
            </Link>
            <Link className='link' to={"/?cat=floods"}>
           <h6>Floods</h6> 
            </Link>
            <Link className='link' to={"/?cat=terrorist"}>
           <h6>Terrorist</h6> 
            </Link>
            <Link className='link' to={"/?cat=animal-attack"}>
           <h6>Animal-Attack</h6> 
            </Link>

            <span>{currentUser?.username}</span>
             {currentUser ? (
             <span onClick={logout}>Logout</span>
             ) : (
             <Link className='link' to={"/login"}>
              Login
              </Link>
              )}
            <span className='write'>
              <Link to={"/write"} className='link'>Write</Link>
            </span>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
