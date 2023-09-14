import { useEffect, React, useState } from 'react';
import userPic from "../../../images/user-pic.png";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './display-profile.css'

const AdminProfile = () => {

    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get(`http://localhost:4000/admin/${id}`);
        setData(response.data);
    }
    
    const {id} = useParams();
    useEffect(() =>{
        axios
        .get(`http://localhost:4000/admin/${id}`)
        .then()
    }, [id])
    useEffect(() =>{
        loadData();
    },[]);

    return ( 
        <div className='user-profile-body'>
        <div className="userProfile-container">
            <div className="profile">
                <div className="avatar">
                    <img src={userPic} alt="Avatar"/>
                </div>
                <div className="info">
                    {data.map((item, index)=>{
                        return(
                            <div>
                                <h1>{item.name}</h1>
                                <p>{item.email}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="social-media">
                    <Link to={`/user/${id}`}><i className="fab fa-facebook-f"></i></Link>
                    <Link to={`/user/${id}`}><i className="fab fa-twitter"></i></Link>
                </div>
            </div>
            <div className='userProfile-buttons'>
                <Link to={`/updateAdmin/${id}`}>
                    <button>Update profile</button>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default AdminProfile;