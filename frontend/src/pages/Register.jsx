import React, { useState } from 'react';
import userService from '../api/userService';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await userService.post('/auth/register', { name, email, mobileNo, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            window.location.href = '/login';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Mobile No"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
