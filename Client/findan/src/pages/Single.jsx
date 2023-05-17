import React from 'react'
import Menu from '../Component/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const Single = () => {
  return (
    <div className='single'>
        <div className='content'>
         <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
        <div className='user'>
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
        <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
        </div>
        <div className='edit'>
            <Link to={`/write?edit=2`}>
                <EditIcon fontSize='small' />
            </Link>
        <DeleteIcon fontSize='small'  />
        </div> 
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?</h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        <br />
        <br />
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        </p>
        </p>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        <br />
        <br />
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed asperiores cum tempore quidem ullam nulla eum facilis. Ex dignissimos nesciunt expedita praesentium vero iure perferendis corporis labore aspernatur dolore?
        </p>
        </p>
        </div>
        <div className='menu'>
        <Menu />
        
        </div>


    </div>
  )
}

export default Single