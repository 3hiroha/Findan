import React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from 'moment';



const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const upload = async ()=>{
        try{
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("http://localhost:8080/api/upload", formData);
            
            return res.data;
        }catch(err){
            console.log(err)
        }
    }


    const handleClick = async e=>{
        e.preventDefault();
        const imgUrl = await upload();

        try{
     state ?
                 await axios.put(`http://localhost:8080/api/posts/${state.id}`  , {
                title, 
                desc:value,
                cat,
                img:file ? imgUrl : "", 
            }, {withCredentials: true}) 
            :    await axios.post(`http://localhost:8080/api/posts/` , {
                title,
                desc:value,
                cat,
                img:file ? imgUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        },{withCredentials: true})
        } catch (err){
            console.log(err);
        }



    }

    const [selectedValue, setSelectedValue] = React.useState('a');
    console.log(value);
    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    //   };
  return (
    <div className='add'>
        <div className="content">
            <input type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)} /> 
            <div className="editorContainer">
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
            </div>

        </div>
        <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status:</b> Draft
                </span>
                
                <span>
                    <b>Visibility:</b>public
                </span>
                
                <input style={{display:"none"}} type="file" id="file"  name="" onChange={e=>setFile(e.target.files[0])}/>
                {/* label for Uploading ^^^^ */}
                <label className='file' htmlFor='file'>Upload Image</label>
                <div className="buttons">
                <button variant="contained" size='large'>
                    Save as a draft
                </button>
                <button variant="contained" size='large' onClick={handleClick}>
                    Publish
                </button>
                
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <div className='cat'>
                <input type='radio' checked={cat === "art"} name="cat" value="art" id="art"onChange={e=>setCat(e.target.value)}  />
                <label htmlFor='art'>Art</label>
                </div>
                <div className='cat'>
                <input type='radio' checked={cat === "science" } name="cat" value="science" id="science"onChange={e=>setCat(e.target.value)}  />
                <label htmlFor='science'>Science</label>
                </div>
                <div className='cat'>
                <input type='radio' checked={cat === "technology"} name="cat" value="technology" id="technology"onChange={e=>setCat(e.target.value)}  />
                <label htmlFor='technology'>Technology</label>
                </div>
                <div className='cat'>
                <input type='radio' checked={cat === "design"} name="cat" value="design" id="design"onChange={e=>setCat(e.target.value)}  />
                <label htmlFor='design'>Design</label>
                </div>
                <div className='cat'>
                <input type='radio' checked={cat === "sport"} name="cat" value="sport" id="sport"onChange={e=>setCat(e.target.value)}  />
                <label htmlFor='sport'>Sport</label>
                </div>

            </div>
    
        </div>

    </div>
  )
}

export default Write