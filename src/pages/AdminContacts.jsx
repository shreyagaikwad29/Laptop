import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AdminContacts = () => {
  const token = localStorage.getItem("token");
  console.log(token)
  const [contactData, setContactData] = useState([]);
  const getAllContactsData = async () =>{
    console.log("Fetching contacts...");
    try {
      const response = await fetch(`http://localhost:3010/api/admin/contacts`,
        {
          method:"GET",
          headers:{
            Authorization: `Bearer ${token}`,
          }
        });
        console.log(response)
        const data = await response.json();
        console.log("contact data ",data);
        if (response.ok) {
          setContactData(data);
        }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteContactById = async (id) =>{
          try {
              const response = await fetch(`http://localhost:3010/api/admin/contacts/delete/${id}`,
              {
                  method: 'DELETE',
                  headers: {
                      Authorization: `Bearer ${token}`,
                  }
              });
              if (response.ok) {
                getAllContactsData();
                  toast.success("Contact Deleted Successfully");
              }else{
                  toast.error("Contact Not Deleted");
              }
              if (!response.ok) {
                  
                  throw new Error(`Error: ${response.status} - ${response.statusText}`);
              }
              const data = await response.json();
              console.log(`users after delete ${data}`);
              
          } catch (error) {
              console.error("Failed to delete user:", error);
          }
          
      }

  useEffect(()=>{
    console.log("useEffect triggered");
    getAllContactsData();
  },[]);
  return (
    <>
      <section className="admin-contact-data">
        <h1>Admin Contact Data</h1>

        <div className="container admin-users">
          {contactData.map((curContactData, index)=>{
            
            const {name, email, message, _id} = curContactData;

            return(
              <div key={index}>
                <p>{name}</p>  
                <p>{email}</p>
                <p>{message}</p>
                <button className='btn' onClick={() => deleteContactById(_id)}>Delete</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default AdminContacts
