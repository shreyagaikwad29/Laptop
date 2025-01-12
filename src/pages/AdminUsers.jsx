import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const AdminUsers = () => {
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const getAllUserData = async () =>{
        try {
            if (!token) {
                throw new Error("Token is missing or invalid.");
              }
            const response = await fetch("http://localhost:3010/api/admin/users",{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                const errorText = await response.text(); // Read the response body for details
                throw new Error(`Error: ${response.status} - ${response.statusText}\nDetails: ${errorText}`);
              }
            const data = await response.json();
            if (Array.isArray(data)) {
                setUsers(data);
            } else {
                console.error("Unexpected response data:", data);
                setUsers([]);
            }
            console.log(`users ${data}`);
        } catch (error) {
            console.error("Failed to fetch users:", error);
            setError("Failed to fetch users. Please try again later.");
        }
    };

    const deleteUser = async (id) =>{
        try {
            const response = await fetch(`http://localhost:3010/api/admin/users/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log(`users after delete ${data}`);
            getAllUserData();
        } catch (error) {
            console.error("Failed to delete user:", error);
            setError("Failed to delete user. Please try again later.");
        }
        
    }

    useEffect(()=>{
        getAllUserData();
    },[]);
  return (
    <>
        <section className="admin-users-section">
            <div className="container">
                <h1>Admin User Data</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.length > 0 ? (
                                users.map((curUser, index) => (
                                    <tr key={index}>
                                        <td>{curUser.name}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.mobile}</td>
                                        <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                        <td>
                                            <button onClick={() => deleteUser(curUser._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No users found.</td>
                                </tr>
                            )}
                        
                    </tbody>
                </table>
            
            </div>
        </section>
        
    </>
  );
}

export default AdminUsers
