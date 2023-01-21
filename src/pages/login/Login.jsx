import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import './Login.css';
import { UserLogin, getUserFromJwtToken } from '../../services/authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const result = await UserLogin({username,password});
            
            if (result.status === 200){
                if (result.data.succeded){
                    localStorage.setItem('token',result.data.token);
                    errors.length > 0 && setErrors([]);

                    const _user = getUserFromJwtToken(result.data.token);
                    
                    navigate(`/user/${_user.Id}/profile`);
                    window.location.reload(); //TODO: User redux to fix this issue
                }
            }
        }catch(err){

            let _errors = [];
            if (err.response?.status === 400) {
                _errors.push(err.response.data)
                setErrors(_errors)
            }else {
                console.log(err)
                setErrors(['Something went wrong, please check form']) //TODO : Add error handling 
            }
            
        }
    }
    
    return <div className='container'>
        <div className='register-form'>
            <div className='top'>
                <div className='left'>
                    <div>
                        <img src='https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </div>
                </div>
                <div className='right'>
                    <p>Login your account now and start setting up breakfasts</p>
                </div>
            </div>
            <div className='register-title'>
                <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="username">Username</label>
                    <input className='form-input' onChange={(e) => setUsername(e.currentTarget.value)} required={true} name='username' id='username' placeholder='your username...' value={username} />
                </div>

                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="password">Password</label>
                    <input type="password" className='form-input' onChange={(e) => setPassword(e.currentTarget.value)} required={true} name='password' id='password' placeholder='your password...' value={password} />
                </div>
                <button className='btn'>Login</button>
            </form>

            <div className='register-bottom'>
                {errors.length !==0 && errors.map((err,i) => (<p key={i} className='error'>{err}</p>)) }
                <p>Dont have an account? <span className='login-link'><Link to="/register">Register</Link></span></p>
            </div>

        </div>
    </div>
}

export default Login;