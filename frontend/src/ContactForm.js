import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contacts', contact);
      setMessage('Contact saved successfully!');
      setContact({ name: '', phone: '' });
    } catch (error) {
      setMessage('Error saving contact.');
    }
  };

  return (
    <div className="form-container">
      <h2>Save Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contact.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          value={contact.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;