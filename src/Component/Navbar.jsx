import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:'70px'}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item" >
                            <a class="nav-link" routerLinkActive="active">Master</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLinkActive="active">Employee</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" routerLinkActive="active">Client</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
