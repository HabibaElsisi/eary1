import {React, useState, useEffect} from 'react';
import './Admin-navbar.css';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { removeAuthUser } from '../../../helper/Storage';
import adminPic from '../../../images/admin-pic.png';

function AdminNavBar() {
    const {id} = useParams();
    const [admin, setAdmin] = useState([]);
    const loadData = async () => {
        const response = await axios.get(`http://localhost:4000/admin/${id}`);
        setAdmin(response.data);
    }
    useEffect(() =>{
        loadData();
    });
    const navigate = useNavigate();
    const Logout = () =>{
        removeAuthUser();
        navigate("/");
    }
    return ( 
        <>
            <div className='box adminNavbar-container'>
                <div className='admin-pic'>
                        <img src={adminPic} alt=''/>
                    <h2>Admin</h2>
                </div>
                <div className='admin-nav-links'>
                        <ul>
                            <NavLink className='admin-link' to='/admin/1'>Home</NavLink>
                            <NavLink className='admin-link' to="/manageQuestions">Questions</NavLink>
                            <NavLink className='admin-link' exact="true" to="/auth/getUsers">Users List</NavLink>
                        </ul>
                    </div>
                <div>
                    <button onClick={Logout} className='btn logout-btn'>Log out</button>
                </div>
            </div>
        </>
    );
}

export default AdminNavBar;