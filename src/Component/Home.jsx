import React from 'react'
import "./Home.css";
import {FiSend} from "react-icons/fi"

const Home = () => {


  return (
    <div className="row">
        <div className="col">
            <h1>Welcome to Site !!!</h1>
            <div className="col-8">
                <div className="card">
                    <div className="card-header bg-success">
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
                                <button className="btn btn-secondary">Reset</button>
                            </div>
                            <div>
                                <button className="button">Save Client
                                <span className="button__icon contact__button-icon">
                                    <FiSend />
                                </span>
                                </button>
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

