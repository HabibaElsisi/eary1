import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './addUser.css';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    password: '',
    phone: '',
    status: ''
}


const AddUser = () =>{
    const [state, setState] = useState(initialState);
    const {name, email, password, phone, status} = state
    const navigate = useNavigate()
    const {id} = useParams();
    
    useEffect(() =>{
        axios.get(`http://localhost:4000/auth/getUsers/${id}`).then((resp) => setState({...resp.data[0]}))
    }, [id])


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !email || !password || !phone || !status){
            toast.error("please provide value into input data!")
        }else{
            if(!id){
                axios
                    .post("http://localhost:4000/auth/addUser", {
                        name,
                        email,
                        password,
                        phone,
                        status
                    })
                    .then(() => {
                        setState({name:'', email: '', password: '', phone: '', status: ''});
                    })
                    .catch((err) => console.log(err))
                    toast.success("user added successfully")
            }
            else{
                axios
                    .put(`http://localhost:4000/auth/update/${id}`, {
                        name,
                        email,
                        password,
                        phone,
                        status
                    })
                    .then(() => {
                        setState({name:'', email: '', password: '', phone: '', status: ''});
                    })
                    .catch((err) => console.log(err))
                    toast.success("user updated successfully")
            }
            setTimeout(() => navigate('/auth/getUsers'), 500);
        }
    }

    return (
            <div className='box addUser-box'>
                <form className='container addUser-card' onSubmit={handleSubmit}>
                    <h2>User Account Managment</h2>
                    <div className='form-input-container'>
                        <input type='text' id='name' name='name' placeholder='User Name' value={name || ""} onChange={handleChange}/>
                    </div>
                    <div className='form-input-container'>
                        <input type='email' id='email' name='email' placeholder='User Email' value={email || ""} onChange={handleChange}/>
                    </div>
                    <div className='form-input-container'>
                        <input type='password' id='password' name='password' placeholder='User Password' value={password || ""} onChange={handleChange}/>
                    </div>
                    <div className='form-input-container'>
                        <input type='number' id='phone' name='phone' placeholder=' Contact Number' value={phone || ""} onChange={handleChange}/>
                    </div>
                    <div className='form-input-container status-container'>
                        <p>Status : </p>
                        <input type='number' max= '1' min='0' id='status' name='status' placeholder='1 for active, 0 for in active' value={status || ""} onChange={handleChange}/>
                    </div>
                    <div className='submit-goback-container'>
                        <input type='submit' value={id ? 'Update' : "Save"}/>
                        <Link to='/auth/getUsers'>
                            <input type='button' value='go back'/>
                        </Link>
                    </div>
                </form>
            </div> 
    );
}

export default AddUser;