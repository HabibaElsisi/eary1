import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './navbar.css'

function Navbar(){
        return (
        <>
            <div className='navbar'>
                    <div className='logo-container'>
                        <Link exact to='/'>
                            <img className='logo' src={logo} alt='logo-img'></img>
                        </Link>
                    </div>
                        <ul className='nav-links'>
                            <NavLink className='li' exact to="/">Home</NavLink>
                            <NavLink className='li' to="/signup"><i class="fa-solid fa-user"></i></NavLink>
                            <NavLink className='li' to="/contactUs" target='_blank'>Contact Us</NavLink>
                        </ul>
            </div>
        </>
        );
    }
 
export default Navbar;