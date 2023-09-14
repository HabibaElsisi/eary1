import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { setAuthUser } from '../../../helper/Storage';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
        loading: "",
        err: []
    })
    
    const loginFun = (event) =>{
    event.preventDefault();
    setLogin({...login, loading: true, err: []})
    axios.post("http://localhost:4000/auth/login", {
        email: login.email,
        password: login.password
    }).then(resp =>{
        setLogin({...login, loading: false, err: []});
        setAuthUser(resp.data);
        if(resp.data.role === 1){
            navigate(`/admin/${resp.data.id}`)
        }else if (resp.data.status === 1){
            navigate(`/user/${resp.data.id}`)
        }
        else if(resp.data.status === 0){
            navigate('/inActive')
        }
    }).catch(errors =>{
        // console.log(errors);
        setLogin({...login, loading: true, err: errors.response.data.errors})
    })
}
        return (
            <div className='box login-box'>
            <div className='container login-container'>
                <div className='login-header'>
                    <p>Have an account?</p>
                    <h1>Log in</h1>
                </div>
                    {login.err.map((error, index) =>(
                        <Alert variant='danger' className='p-2'>
                            {error.msg}
                        </Alert>
                    ))}
                
                <form onSubmit={loginFun}>
                    <div className='form-container'>
                        <input type="email" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})} placeholder='Your email...' required />
                        <input type="password" value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})} placeholder='password' required/>
                        <button className='btn loginBtn'>Login</button>
                    </div>
                </form>
                    <div className='createNew'>
                        <Link className='createAccBtn' exact to='/signup'>Create New Account</Link>
                        <div className="right">
                            <label><Link exact to='/contactUs'>Forgot password?</Link></label>
                        </div>
                    </div>
                    <div className="login-bottom">
                    </div>
            </div>
        </div>
        );
}

export default Login;