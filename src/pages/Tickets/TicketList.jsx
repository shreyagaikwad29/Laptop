import React, { useEffect, useState } from 'react';
import './TicketList.css';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const URL = "http://localhost:3010/api/ticketform/ticketlist"; // Endpoint to fetch tickets

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate();

  // List of possible assigned persons

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleClick = ()=>{
    navigate('/ticket');
  }

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      console.log(response)
      if (response.ok) {
        let data = await response.json();

        // Randomly assign a person to each ticket
        data = data.map(ticket => ({
          ...ticket,
          assignedPerson: ticket.assignedPerson || "Unassigned",
        }));

        setTickets(data);
      } else {
        console.error("Failed to fetch tickets");
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally  {
      setLoading(false);
    }
  };

  return (
    <div className="ticket-list-container">
    <h1 className="main-heading">Ticket List</h1>
    { loading ? (
      <p>Loading tickets...</p>
      ) :
        tickets.length === 0 ? (
          <p>No tickets available.</p>
        ) : (
      <table className="ticket-table">
        <thead>
          <tr>
            <th>Ticket Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Customer Type</th>
            <th>Issue</th>
            <th>Assigned Person</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.ticketNumber || index + 1}</td>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.mobile}</td>
              <td>{ticket.customerType}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.assignedPerson || "Unassigned"}</td>
              <td>{new Date(ticket.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    <button type="button" className="btn btn-submit" onClick={handleClick}>
      Back
    </button>
  </div>
);
};

export default TicketList;
