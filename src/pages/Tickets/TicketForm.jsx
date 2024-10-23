import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    customerType: '',
    issue: ''
  });
  const navigate = useNavigate(); // Initialize navigate

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      customerType: '',
      issue: ''
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const peopleResponse = await axios.get('http://localhost:5000/people');
      const people = peopleResponse.data;
      const assignedPerson = people[Math.floor(Math.random() * people.length)];

      const newTicket = {
        ...formData,
        ticketNumber: Date.now(),
        assignedPerson: assignedPerson.name
      };

      await axios.post('http://localhost:5000/tickets', newTicket);

      // Navigate to the tickets page
      navigate('tickets'); // Using navigate() instead of history.push()
    } catch (error) {
      console.error('Error saving ticket:', error);
    }
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Customer Type:</label>
          <select name="customerType" value={formData.customerType} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div>
          <label>Issue:</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default TicketForm;
