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
                <img src={Logo} alt='logo picture'/>
            </div>
            <div className='links'>
                <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
                <Link className='link' to="/?cat=art"><h6>SCIENCE</h6></Link>
                <Link className='link' to="/?cat=art"><h6>TECHNOLOGY</h6></Link>
                <Link className='link' to="/?cat=art"><h6>CINEMA</h6></Link>
                <Link className='link' to="/?cat=art"><h6>DESIGN</h6></Link>
                <Link className='link' to="/?cat=art"><h6>FOOD</h6></Link>
            <span>{currentUser?.username}</span>
            {currentUser ? <span onClick={logout}>Logout</span> 
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