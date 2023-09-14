import React, { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import './signup.css';
import Alert from 'react-bootstrap/Alert';
import { setAuthUser } from '../../../helper/Storage';

const SignUp = () => { 
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        loading: "",
        err: []
    })
    
    const signUpFun = (event) =>{
        event.preventDefault();
        setRegister({...register, loading: true, err: []})
        axios.post("http://localhost:4000/auth/signup", {
            name: register.name,
            email: register.email,
            password: register.password,
            phone: register.phone
        }).then(resp =>{
            setRegister({...register, loading: false, err: []});
            setAuthUser(resp.data);
            navigate('/login')
        }).catch(errors =>{
            //console.log(errors);
            setRegister({...register, loading: true, err: errors.response.data.errors})
        })
    }
        return (
            <div className='box signup-box'>
                <div className='container signup-container'>
                    <h2>Welcome!🚀👂</h2>
                    {register.err.map((error, index) =>(
                        <Alert variant='danger' className='p-2'>
                            {error.msg}
                        </Alert>
                    ))}
                    <form onSubmit={signUpFun}>
                        <div className='form-container'>
                            <input
                                type="text" 
                                placeholder='Your name...'
                                required
                                value={register.name}
                                onChange={(e) => setRegister({...register, name: e.target.value})}
                                />
                            <input 
                                type="email"  
                                placeholder='Your email...' 
                                required 
                                value={register.email}  
                                onChange={(e) => setRegister({...register, email: e.target.value})}
                            />
                            <input
                                type="password"
                                placeholder='password' 
                                required 
                                value={register.password}  
                                onChange={(e) => setRegister({...register, password: e.target.value})}
                            />
                            <input 
                                type="number"  
                                placeholder='contact phone' 
                                required 
                                value={register.phone}  
                                onChange={(e) => setRegister({...register, phone: e.target.value})}
                            />
                            <button className='btn signUpBtn'>Sign up</button>
                        </div>
                    </form>
                        <div className='haveAccount'>
                            <p>already have an account?</p>
                            <span>
                                <Link exact to='/login'>log in</Link>
                            </span>
                        </div>
                </div>
            </div>
        );
    }
export default SignUp;