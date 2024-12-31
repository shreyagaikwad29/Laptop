import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TicketForm.css'; // Import the CSS file
import { toast } from 'react-toastify';
import { useAuth } from '../../store/auth';
const URL = "http://localhost:3010/api/ticketform/ticket";


const TicketForm = () => {
const navigate = useNavigate(); 
const { storetokenInLS }= useAuth();

const [ticket, setTicket] = useState({
  name:"",
  email:"",
  mobile:"",
  customerType:"",
  issue:""
})

const handleInput = (e) =>{
  e.preventDefault();
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;

        setTicket({
            ...ticket,
            [name] : value,
        })
}

const handleSubmit = async (e) =>{
  e.preventDefault();
  console.log(ticket);
  try {
    const response = await fetch(URL, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    });
    console.log("Ticket", response);

    if (response.ok) {
        toast.success("Ticket Created successfully !!");
        const res_data = await response.json();
        console.log("res from server", res_data);
        storetokenInLS(res_data.token);
        setTicket({ 
          name:"",
          email:"",
          mobile:"",
          customerType:"",
          issue:""
        });  
        navigate("/ticketlist"); 
    }else{
        alert("invalid credential");
        console.log("invalid credential")
    }
} catch (error) {
    console.log(error);
}
}

  return (
    <>
        <section>
            <main>
                <div className="section-ticket">
                    <div className="container grid grid-two-cols">
                        <div className="ticket-image">
                        <lottie-player 
                        src="https://lottie.host/e0c7b218-5c16-4cd0-946a-d142e849c6b2/4Q7lDpM2Sg.json" 
                        background="##FFFFFF" 
                        speed="1"  
                        loop 
                        autoplay 
                        direction="1" 
                        mode="normal"></lottie-player>
                        </div>

                        

                        <div className="ticket-form">
                            <h1 className="main-heading mb-3">Create Ticket</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">Name </label>
                                        <br />
                                        <input 
                                        type="text" 
                                        name='name'
                                        placeholder='name'
                                        id='name'
                                        required
                                        autoComplete='off'
                                        value={ticket.name}
                                        onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email </label>
                                        <br />
                                        <input 
                                        type="email" 
                                        name='email'
                                        placeholder='email'
                                        id='email'
                                        required
                                        autoComplete='off'
                                        value={ticket.email}
                                        onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="mobile">Mobile </label>
                                        <br />
                                        <input 
                                        type="number" 
                                        name='mobile'
                                        placeholder='mobile'
                                        id='mobile'
                                        required
                                        autoComplete='off'
                                        value={ticket.mobile}
                                        onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="password">Customer Type </label>
                                        <br />
                                        <select name="customerType" value={ticket.customerType} onChange={handleInput} required>
                                          <option value="">Select Type</option>
                                          <option value="Regular">Regular</option>
                                          <option value="Premium">Premium</option>
                                        </select>
                                    </div>

                                    <div>
                                      <label htmlFor='issue'>Issue </label>
                                      <br />
                                      <textarea
                                        name="issue"
                                        className='issue'
                                        value={ticket.issue}
                                        onChange={handleInput}
                                        required
                                      ></textarea>
                                    </div>
                                    
                                    <br />

                                    <button type='submit' className='btn btn-submit'>Save</button>

                                </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>

  );
};

export default TicketForm;
