import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Tickets List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Ticket Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Customer Type</th>
            <th>Issue</th>
            <th>Assigned Person</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticketNumber}>
              <td>{ticket.ticketNumber}</td>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.mobile}</td>
              <td>{ticket.customerType}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.assignedPerson}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
