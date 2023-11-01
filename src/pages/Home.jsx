import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from "axios"


const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search



useEffect(()=> {

const fetchData = async ()=> {
try{
const res = await axios.get(`/posts${cat}`)
setPosts(res.data)

}catch(err){

  console.log(err)

}

}
fetchData()

  },[cat])
   // {
     // id:1,
      //title:"Forest Fires",
      //desc:"lorem Ipsum is just reprehenderit in voluptate velit esse cillum dolore magna aliquet vel fel magna aliquet vel fel magna aliquet vel fel magna aliquet vel fermentum aliquet vel fel",
      //img: "https://images.pexels.com/photos/4070727/pexels-photo-4070727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     
   // },
    //{
      //id:2,
      //title:"El Nino Floods",
      //desc:"lorem Ipsuk lorem ips nostrus felfel it esse cillum dolore magna aliquet vel fel magna aliquet vel fel magna aliquet vel fel magna aliquet vel fermentum",
      //img: "https://images.pexels.com/photos/14823610/pexels-photo-14823610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      //  },
   // {
     // id:3,
     // title:"Animal-Attack",
     // desc:"lorem Ipsuk lorem ips nostrus it esse cillum dolore magna aliquet vel fel magna aliquet vel fel magna aliquet vel fel magna aliquet vel fermentum",
     // img: "https://images.pexels.com/photos/68186/jumping-spider-tarantula-bird-spider-insect-68186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

     
   // },

   const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
   }

  
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt=''/>
            </div>
            <div className="content">
              <Link className="link"to={`/post/${post.id}`}>               
              <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>
                <Link className="link"to={`/post/${post.id}`}>
                Read More
                </Link>
                </button> 
                      
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home
