import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './updateAdmin.css';
import axios from 'axios';

const initialState = {
    name: '',
    password: '',
}

const UpdateAdminProfile = () => {
    const [state, setState] = useState(initialState);
    const {name, password} = state
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() =>{
        axios.get(`http://localhost:4000/admin/${id}`).then((resp) => setState({...resp.data[0]}))
    }, [])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
                axios
                    .put(`http://localhost:4000/UpdateAdmin/${id}`, {
                        name,
                        password
                    })
                    .then(() => {
                        setState({name:'', password: ''});
                    })
                    .catch((err) => console.log(err))
                    toast.success('admin data updated successfully')
            setTimeout(() => navigate(`/admin/${id}`), 500);
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
            <div className='update-goback-container'>
                <input type='submit' value='Update'/>
                <Link to={`/admin/${id}`}>
                    <input type='button' value='go back'/>
                </Link>
            </div>
        </form>
    </div> 
    );
}

export default UpdateAdminProfile;