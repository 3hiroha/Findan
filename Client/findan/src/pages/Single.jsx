import React, { useContext, useEffect, useState } from 'react'
import Menu from '../Component/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";
import { AuthContext } from '../Context/AuthContext';
import DOMPurify from "dompurify";
const Single = () => {
  const [post,setPost] =useState([])

    const location = useLocation();
    const Navigate = useNavigate();
    

    const postId = location.pathname.split("/")[2];
    
   

    const {currentUser} = useContext(AuthContext);

    const handleDelete = async () =>{
      try{
      await axios.delete(`http://localhost:8080/api/posts/${postId}`, {withCredentials:true})
          Navigate("/");
        } catch (err){
          console.log(err);
        }
    }


    console.log(location);

    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }

    useEffect(() =>{
      const fetchData = async () =>{
        try{
          const res = await axios.get(`http://localhost:8080/api/posts/${postId}`)
          setPost(res.data);
        } catch (err){
          console.log(err);
        }
        // https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
      }
        fetchData();
    }, [postId]);
    
  return (
    <div className='single'>
        <div className='content'>
         <img src={`../upload/${post.img}`} alt=''/>
        <div className='user'>
        {post.userImg && <img 
        src={post.userImg}
        alt='user pics'
        />}
        <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        {currentUser.username === post.username && (<div className='edit'>
            <Link to={`/write?edit=2`} state={post}>
                <EditIcon fontSize='small' />
            </Link>
        <DeleteIcon fontSize='small' onClick={handleDelete} />
        </div>
        )} 
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}>

        </p>
          
        
        </div>
        <div className='menu'>
        <Menu cat={post.cat}/>
        
        </div>


    </div>
  )
}

export default Single