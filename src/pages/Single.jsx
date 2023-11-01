import React, { useContext, useEffect, useState } from 'react';
import edit from '../img/edit.png';
import del from '../img/delete.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from "moment";
import {AuthContext} from "../context/authContext.js"

const Single = () => {
  const [post, setPost] = useState([])

  const location = useLocation()

  const navigate= useNavigate()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  
useEffect(()=> {

const fetchData = async ()=> {
try{
const res = await axios.get(`/posts/${postId}`)
setPost(res.data)

}catch(err){

  console.log(err)

}

}
fetchData();
},[postId]);

const handleDelete = async ()=>{
  try{
    await axios.delete(`/posts/${postId}`)
    navigate("/")

  }catch(err){
    console.log(err)
  }
}
  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post?.img}`}
         alt=''/>
       <div className="user">
        <img src={post.userImg} alt=''/>
        <div className="info">
          <span>{post.username}</span>
          <p>{moment}</p>
        </div>
        {currentUser.username === post.username && (
        <div className="edit">
          <Link to={`/write?edit=2`} state={post}>
          <img src={edit} alt=''/>
          </Link>
          <img onClick={handleDelete}src={del} alt=''/>
        </div>
        )}
       </div>
       <h1>{post.title}</h1>
       {post.desc}
      </div>
      <div className="menu">
        <Menu cat={post.cat}/>
      </div>
    </div>
  )
}

export default Single
