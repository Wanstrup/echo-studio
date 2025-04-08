import React, { useState } from "react";
import './Book.css';

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert(`Tak for din booking, ${formData.name}!\nVi ses den ${formData.date} kl. ${formData.time}.`);
  };

  return (
    <div className="booking-container">
      <h1>Book et møde</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Navn:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Dato:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Tidspunkt:
          <input
  type="time"
  name="time"
  value={formData.time}
  onChange={handleChange}
  min="09:00"
  max="16:30"
  step="1800"
  required
/>

        </label>
        <label>
          Besked:
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Evt. ønsker eller spørgsmål" />
        </label>
        <button type="submit">Book nu</button>
      </form>
    </div>
  );
}

export default Book;

