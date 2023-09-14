import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './user-navbar.css'
import { removeAuthUser } from '../../../helper/Storage';

const UserNavbar = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const Logout = () =>{
        removeAuthUser();
        navigate("/");
    }
        return (
            <div className='navbar'>
                    <div className='logo-container'>
                            <img className='logo' src={logo} alt='logo-img'></img>
                    </div>
                    <ul className='nav-links'>
                        <NavLink className='li' to={`/user/${id}`}><i class="fa-solid fa-user"></i></NavLink>
                        <NavLink className='li' to="/contactUs" target='_blank'>Contact Us</NavLink>
                        <button className='btn logout-btn' onClick={Logout}>Log out</button>
                    </ul>
            </div>
        );
    }

export default UserNavbar;