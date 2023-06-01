import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../imgs/Logo.jpg";
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {

    const { currentUser,logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <Link to="/" >
                <img src={Logo} alt='logo picture'/>
                </Link>
            </div>
            <div className='links'>
                <Link className='link' to="/?cat=Education"><h6>EDUCATION</h6></Link>
                <Link className='link' to="/?cat=sport"><h6>SPORT</h6></Link>
            <span><b>{currentUser?.username}</b></span>
            {currentUser ? <Link className='link' to="/login"> <span onClick={logout}>Logout</span>  </Link>
            : 
            <Link className='link' to="/login">login</Link>}
            <span className='write'>
                <Link to="/write" className='link'>Write</Link>
            </span>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar