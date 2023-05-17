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



const Write = () => {
    const [value, setValue] = useState('');
    const [selectedValue, setSelectedValue] = React.useState('a');
    console.log(value);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
  return (
    <div className='add'>
        <div className="content">
            <input type="text" placeholder='Title' />
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
                
                <input style={{display:"none"}} type="file" id="file"  name=""/>
                {/* label for Uploading ^^^^ */}
                <label className='file' htmlFor='file'>Upload Image</label>
                <div className="buttons">
                <button variant="contained" size='large'>
                    Save as a draft
                </button>
                <button variant="contained" size='large'>
                    Update
                </button>
                
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <div className='cat'>
                <input type='radio'name="cat" value="art" id="art"/>
                <label htmlFor='art'>Art</label>
                </div>
                <div className='cat'>
                <input type='radio'name="cat" value="art" id="art"/>
                <label htmlFor='art'>Science</label>
                </div>
                <div className='cat'>
                <input type='radio'name="cat" value="art" id="art"/>
                <label htmlFor='art'>Technology</label>
                </div>
                <div className='cat'>
                <input type='radio'name="cat" value="art" id="art"/>
                <label htmlFor='art'>Design</label>
                </div>
                <div className='cat'>
                <input type='radio'name="cat" value="art" id="art"/>
                <label htmlFor='art'>Food</label>
                </div>

            </div>
    
        </div>

    </div>
  )
}

export default Write