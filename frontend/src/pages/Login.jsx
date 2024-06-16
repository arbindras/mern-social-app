import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../api/userService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await userService.post('/auth/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            window.location.href = '/';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" >Login</button>
        </form>
    );
};

export default Login;
