// src/UserInfo.js
import React from 'react';

const UserInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <div>No user logged in</div>;
    }

    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Number: {user.mobile}</p>
        </div>
    );
};

export default UserInfo;
