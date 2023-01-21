import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { CreateUser } from '../../services/userService';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setphoneNumber] = useState('0790983041');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {firstname,lastname,username,email,password,phoneNumber};
        try{
            const result = await CreateUser(user);

            console.log(result);
            setErrors([]);
        }catch(ex){
            if (ex.response.status === 400){
                setErrors(ex.response.data.errors)
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
                    <p>Register your account now and start setting up breakfasts</p>
                </div>
            </div>
            <div className='register-title'>
                <h2>Create an account</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="firstname">First Name</label>
                    <input className='form-input' value={firstname} onChange={(e) => setFirstname(e.currentTarget.value)} required="true" name='firstname' id='firstname' placeholder='your firstname...' />
                </div>

                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="lastname">Last Name</label>
                    <input className='form-input' value={lastname} onChange={(e) => setLastname(e.currentTarget.value)} required="true" name='lastname' id='lastname' placeholder='your lastname...' />
                </div>

                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="username">Username</label>
                    <input className='form-input' value={username} onChange={(e) => setUsername(e.currentTarget.value)} required="true" name='username' id='username' placeholder='your username...' />
                </div>

                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="email">Email</label>
                    <input className='form-input' value={email} onChange={(e) => setEmail(e.currentTarget.value)} required="true" name='email' id='email' placeholder='your email...' />
                </div>

                <div className='form-input-group'>
                    <label className='form-input-label' htmlFor="password">Password</label>
                    <input className='form-input' value={password} onChange={(e) => setPassword(e.currentTarget.value)} required="true" name='password' id='password' placeholder='your password...' />
                </div>
                <button className='btn'>Register</button>
            </form>

            <div className='register-bottom'>
                {errors.length > 0 && errors.map((err,i) => (<p key={i} className='error'>{err}</p>))}
                <p>Already have an account? <span className='login-link'><Link to="/login">Login</Link></span></p>
            </div>

        </div>
    </div>
}

export default Register;