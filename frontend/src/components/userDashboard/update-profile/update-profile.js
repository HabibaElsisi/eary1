import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './update-profile.css';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    password: '',
    phone: '',
}

const UpdateProfile = () => {
    const [state, setState] = useState(initialState);
    const {name, password, phone} = state
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() =>{
        axios.get(`http://localhost:4000/auth/user/${id}`).then((resp) => setState({...resp.data[0]}))
    }, [id])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !password || !phone){
            toast.error("please provide value into input data!")
        }else{
                axios
                    .put(`http://localhost:4000/UpdateProfile/${id}`, {
                        name,
                        password,
                        phone
                    })
                    .then(() => {
                        setState({name:'', password: '', phone: ''});
                    })
                    .catch((err) => console.log(err))
                    toast.success(`user #${id} data updated successfully`)
            setTimeout(() => navigate(`/user/${id}`), 500);
        }
    }

    return (
        <div className='box updateProfile-box'>
        <form className='container updateProfile-card' onSubmit={handleSubmit}>
            <h2>Update profile information</h2>
            <div className='form-input-container'>
                <input type='text' id='name' name='name' placeholder='New User Name...' onChange={handleChange}/>
            </div>
            <div className='form-input-container'>
                <input type='password' id='password' name='password' placeholder='New Password...' onChange={handleChange}/>
            </div>
            <div className='form-input-container'>
                <input type='number' id='phone' name='phone' placeholder=' New Contact Number...' onChange={handleChange}/>
            </div>
            <div className='update-goback-container'>
                <input type='submit' value='Update'/>
                <Link to={`/user/${id}`}>
                    <input type='button' value='go back'/>
                </Link>
            </div>
        </form>
    </div> 
    );
}

export default UpdateProfile;