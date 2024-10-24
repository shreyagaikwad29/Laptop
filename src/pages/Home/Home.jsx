import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import TicketForm from '../Tickets/TicketForm';

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <h1 className="title">AutumnDigi</h1>
                <p className="description">Complete solutions for all your fintech needs</p>
                <Link to="/ticket-form" className="btn-a">Visit us to know more</Link>
            </div>
        </div>
    );
}

export default Home;





    // <div className="row">
    //     <div className="col" style={{padding: '20px' }}>
    //         <h1 style={{textAlign:'center' }}>Welcome to Site !!!</h1>
    //         <p style={{textAlign:'center' }}>Please log in or sign up to access more features.</p>
            
    //         <div className="col-md-9 mx-auto mt-5">
    //             <div className="card">
    //                 <div className="card-header">
    //                     Client List
    //                 </div>
    //                 <div className="card-body">
    //                     <div className="row">
    //                         <div className="col-6">
    //                             <label for="">Name</label>
    //                             <input type="text" className="form-control" placeholder='Enter your Name'/>
    //                         </div>
    //                         <div className="col-6">
    //                             <label for="">Mobile No.</label>
    //                             <input type="text" className="form-control" placeholder='Enter your Mobile Number'/>
    //                         </div>
    //                         <div className="col-6">
    //                             <label for="">Email ID</label>
    //                             <input type="email" className="form-control" placeholder='Enter your Email ID'/>
    //                         </div>
    //                         <div className="col-6">
    //                             <label for="">Type Of Customer </label>
    //                             <select name="" className='form-control'>
    //                                 <option value="walkin">Walk IN</option>
    //                                 <option value="corporate">Corporate</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-6">
    //                             <label for="">Issue</label>
    //                             <textarea placeholder='Your Issue' className='form-control'></textarea>
    //                         </div>
    //                     </div>
    //                     <div className="row pt-2">
    //                         <div className="col-6 text-center">
    //                         <Link to="/" className="button text-decoration-none">Reset</Link>
    //                         </div>
    //                         <div>
    //                         <Link to="/" className="button text-decoration-none">Save</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
 

