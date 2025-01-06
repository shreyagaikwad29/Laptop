import React, { useEffect } from 'react'

const AdminUsers = () => {
    const getAllUserData = async () =>{
        try {
            const response = await fetch("http://localhost:3010/api/admin/users",{
                method: "GET",
                headers: {
                    Authori
                }
            });
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        getAllUserData();
    },[])
  return (
    <>

    </>
  )
}

export default AdminUsers
