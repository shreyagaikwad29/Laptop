import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import "../pages/AdminUpdate.css"
import { toast } from 'react-toastify';

const AdminUpdate = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        mobile:"",
    });
    const params = useParams();
    const token = localStorage.getItem("token");
    console.log("params single use: ", params);
  

    const getSingleUserData = async () =>{
        try {
            const response = await fetch(`http://localhost:3010/api/admin/users/${params.id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        
                    },
                });
                if (!response.ok) {
                    const error = await response.json();
                    console.error("Failed to fetch user data:", error.message);
                    return;
                }
                console.log(`Fetching user data from: http://localhost:3010/api/admin/users/${params.id}`);
                const data = await response.json();
                console.log(`user single data ${data}`);
                // setData(data);
                console.log("User ID from params:", params.id);

                const user = Array.isArray(data) && data.length > 0 ? data[0] : data;

             // Ensure fetched data is valid
                if (user.name || user.email || user.mobile) {
                    setData(user);
                } else {
                    console.error("Invalid user data received:", data);
                }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        getSingleUserData();
    },[]);

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setData((data)=>({
            ...data,
            [name]:value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3010/api/admin/users/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization : `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );
            if(response.ok){
                toast.success("Updated successfully");
            }else{
                toast.error("Not Updated");
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
    <section className="section-contact">
        <div className="contact-content container">
            <h1 className="main-heading">Update User Data</h1>
        </div>

        <div className="container grid grid-two-cols">
            <section className="section-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="name">Name</label>
                        <input 
                        type="text"
                        name='name'
                        id='name'
                        autoComplete='off'
                        value={data.name}
                        onChange={handleInput}
                        required
                         />
                    </div>

                    <div>
                        <label htmlFor="email" className="email">Email</label>
                        <input 
                        type="email"
                        name='email'
                        id='email'
                        autoComplete='off'
                        value={data.email}
                        onChange={handleInput}
                        required
                         />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="mobile">Mobile</label>
                        <input 
                        type="mobile"
                        name='mobile'
                        id='mobile'
                        autoComplete='off'
                        value={data.mobile}
                        onChange={handleInput}
                        required
                         />
                    </div>

                    <div>
                        <button type='submit'>Update</button>
                    </div>
                </form>
            </section>
        </div>
    </section>
  )
}

export default AdminUpdate

