import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.title ||'');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat||'');

  const navigate = useNavigate()

  const upload = async ()=>{
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err) {
      console.log(err)
    }
  }

  const handleClick = async e=>{
    e.preventDefault()
    const imgUrl = await upload()
    try {
      state ? await axios.put(`/posts/${state.id}`, {
        title,
        desc:value,
        cat,
        img:file ? imgUrl : ""
      }) :  await axios.post(`/posts/`, {
        title,
        desc:value,
        cat,
        img:file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/")
      
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='writes'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor'theme='snow' value={value} onChange={setValue}></ReactQuill>
          
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
          <b>Visibility</b>Public
          </span>
          <input style={{display:"none"}} type='file' name='' id='file' onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor='file'>Upload Image</label>
          <div className="buttons">
            <button>Save a draft</button>
            <button onClick={handleClick} >Publish</button>

          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type='radio' checked={cat === "fire"} name='cat' value="fire" id='fire' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='fire'>Fire</label>
          </div>
          <div className="cat">
          <input type='radio'checked={cat === "floods"} name='cat' value="floods" id='floods' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='floods'>Floods</label>
          </div>
          <div className="cat">
          <input type='radio' checked={cat === "animal-attack"}name='cat' value="animal-attack" id='animal-attack' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='animal-attack'>Animal-attack</label>
          </div>
          <div className="cat">
          <input type='radio' checked={cat === "terrorist"}name='cat' value="terrorist" id='terrorist' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='terrorist'>Terrorist</label>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Write
