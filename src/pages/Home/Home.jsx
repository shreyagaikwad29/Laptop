import React from 'react'
import "./Home.css";
import {FiSend} from "react-icons/fi"
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Home = (onShowAuth) => {


  return (

    <div className="row">
        <div className="col" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to Site !!!</h1>
            <p>Please log in or sign up to access more features.</p>
            
            <div className="col-md-6 mx-auto mt-5">
                <div className="card">
                    <div className="card-header" style={{backgroundColor:'blueviolet'}}>
                        Client List
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <label for="">Name</label>
                                <input type="text" className="form-control" placeholder='Enter your Name'/>
                            </div>
                            <div className="col-6">
                                <label for="">Mobile No.</label>
                                <input type="text" className="form-control" placeholder='Enter your Mobile Number'/>
                            </div>
                            <div className="col-6">
                                <label for="">Email ID</label>
                                <input type="email" className="form-control" placeholder='Enter your Email ID'/>
                            </div>
                            <div className="col-6">
                                <label for="">Type Of Customer </label>
                                <input type="text" className="form-control" placeholder='Enter your Type'/>
                            </div>
                            <div className="col-6">
                                <label for="">Issue</label>
                                <textarea placeholder='Your Issue' className='form-control'></textarea>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-6 text-center">
                            <Link to="/" className="button text-decoration-none">Reset</Link>
                            </div>
                            <div>
                            <Link to="/" className="button text-decoration-none">Save</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;

