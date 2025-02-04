import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from '../../store/auth';

const AdminLayout = () => {
  const {user, isLoading} = useAuth();
  console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading.....</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to="/"/>
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li> <NavLink to="/admin/users"> <FaUser /> Users</NavLink> </li>
              <li><NavLink to="/admin/contacts"> <FaMessage />Contacts</NavLink></li>
              <li><NavLink to="/admin/admintickets"><FaRegListAlt />Tickets</NavLink></li>
              <li><NavLink to="/"><FaHome />Home</NavLink></li>
            </ul>
          </nav>
        </div>
        <Outlet/>
      </header>
    </>
  )
}

export default AdminLayout
