import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:3010/api/admin/admintickets"; // Endpoint to fetch tickets
const SEND_MAIL_URL = "http://localhost:3010/api/send-mail/send-mail"; // Endpoint to send mail

const AdminTicket = () => {
  const token = localStorage.getItem("token");
  console.log(token)
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [formData, setFormData] = useState({
    message: "",
    quotationFile: null,
  });
  const navigate = useNavigate();

  const assignedPersons = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Chris White"];
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    fetchTickets();
  }, []);

  const handleClick = () => {
    navigate('/ticket');
  };

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        data = data
        .filter((ticket) => ticket.email === userEmail)
        .map(ticket => ({
          ...ticket,
          assignedPerson: assignedPersons[Math.floor(Math.random() * assignedPersons.length)],
        }));
        setTickets(data);
      } else {
        console.error("Failed to fetch tickets");
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  const openPopup = (ticket) => {
    console.log("Opening popup for ticket:", ticket);
    setSelectedTicket(ticket);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedTicket(null);
    setFormData({ message: "", quotationFile: null });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, quotationFile: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = async () => {
    console.log("i am called send mail")
    if (!selectedTicket) return;

    const data = new FormData();
    data.append("email", selectedTicket.email);
    data.append("message", formData.message);
    data.append("quotationFile", formData.quotationFile);
    console.log(data)

    try {
      const response = await fetch(SEND_MAIL_URL, {
        method: "POST",
        body: data,
       
      });

      if (response.ok) {
        alert("Mail sent successfully!");
        closePopup();
      } else {
        alert("Failed to send mail.");
      }
    } catch (error) {
      console.error("Error sending mail:", error);
      alert("Error sending mail.");
    }
  };

  return (
    <div className="ticket-list-container">
      <h1 className="main-heading">Ticket List</h1>
      {loading ? (
        <p>Loading tickets...</p>
      ) : tickets.length === 0 ? (
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
              <th>Send Quotation</th>
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
                <td>{ticket.assignedPerson}</td>
                <td>
                  <button className="button" id={ticket._id} onClick={() => openPopup(ticket)}>
                    Send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button type="button" className="btn btn-submit" onClick={handleClick}>
        Back
      </button>

      {showPopup && selectedTicket && (
        <div className="modal">
           {console.log("Popup is rendering")}
          <div className="modal-content">
            <h2>Send Quotation</h2>
            <p>Sending to: {selectedTicket.email}</p>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <input class= "mt-3" type="file" onChange={handleFileChange} />
            <div class = "d-flex justify-content-between">
            <button class="button" onClick={sendMail}>Send</button>
            <button class="button" onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTicket;
