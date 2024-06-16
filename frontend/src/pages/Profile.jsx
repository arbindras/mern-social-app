import React, { useEffect, useState } from 'react';
import userService from '../api/userService';

const Profile = () => {
    const [user, setUser] = useState({});
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await userService.get(`/users/${userInfo._id}`, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            setUser(data);
        };

        fetchUser();
    }, [userInfo]);

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Mobile No: {user.mobileNo}</p>
        </div>
    );
};

export default Profile;
