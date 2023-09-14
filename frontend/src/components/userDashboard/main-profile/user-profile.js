import { useEffect, React, useState } from 'react';
import userPic from "../../../images/user-pic.png";
import { Link, useParams, } from 'react-router-dom';
import axios from 'axios';
import './user-profile.css';

const UserProfile = () => {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get(`http://localhost:4000/auth/user/${id}`);
        setData(response.data);
    }
    
    const {id} = useParams();
    useEffect(() =>{
        axios
        .get(`http://localhost:4000/auth/user/${id}`)
    }, [id])
    useEffect(() =>{
        loadData();
    });


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
                                    <p>contact number: +0{item.phone}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="social-media">
                        <Link to={`/user/${id}`}><i className="fab fa-twitter"></i></Link>
                        <Link to={`/user/${id}`}><i className="fab fa-linkedin-in"></i></Link>
                        <Link to={`/user/${id}`}><i className="fab fa-github"></i></Link>
                    </div>
                </div>
                <div className='userProfile-buttons'>
                    <Link to={`/updateProfile/${id}`}>
                        <button>Update profile</button>
                    </Link>
                    <Link to={`/exam/${id}`}>
                        <button>Take the Exam</button>
                    </Link>
                    <Link to={`/examHistory/${id}`}>
                        <button>History of exams</button>
                    </Link>
                </div>
	        </div>
        </div>
    );
}

export default UserProfile;