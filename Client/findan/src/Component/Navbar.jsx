import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../imgs/Logo.jpg";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt='logo picture'/>
            </div>
            <div className='links'>
                <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
                <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
                <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
            <span>John</span>
            <span>Logout</span>
            <span className='write'>
                <Link to="/write" className='link'>Write</Link>
            </span>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar