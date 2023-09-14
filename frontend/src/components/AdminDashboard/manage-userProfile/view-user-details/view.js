import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './view.css';
import WhiteUserPic from '../../../../images/white-user-pic.png';
const View = () =>{
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:4000/auth/getUsers/${id}`).then((resp) => setUser({...resp.data[0]}))
    }, [id])
    return(
        <div className='view-body'>
            <div className='container user-details-container'>
                <div className='user-details-header'>
                    <img className='user-pic' src={WhiteUserPic} alt=''/>
                    <h2>User Details</h2>
                </div>
                <div className='single-detail-container'>
                    <h3>ID :</h3>
                    <span>{id}</span>
                </div>
                <div className='single-detail-container'>
                    <h3>Name :</h3>
                    <span>{user.name}</span>
                </div>
                <div className='single-detail-container'>
                    <h3>Email :</h3>
                    <span>{user.email}</span>
                </div>
                <div className='single-detail-container'>
                    <h3>Contact Phone :</h3>
                    <span>+20 {user.phone}</span>
                </div>
                    <Link to="/auth/getUsers">
                        <button className='btn '>Go Back</button>
                    </Link>
            </div>
        </div>
    )
}
export default View;