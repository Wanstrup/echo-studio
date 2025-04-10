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

  const generateTimeOptions = (start, end, stepMinutes) => {
    const options = [];
    let [sh, sm] = start.split(":").map(Number);
    let [eh, em] = end.split(":").map(Number);

    while (sh < eh || (sh === eh && sm <= em)) {
      const h = String(sh).padStart(2, "0");
      const m = String(sm).padStart(2, "0");
      options.push(`${h}:${m}`);
      sm += stepMinutes;
      if (sm >= 60) {
        sh += Math.floor(sm / 60);
        sm = sm % 60;
      }
    }

    return options;
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
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Vælg tidspunkt</option>
            {generateTimeOptions("09:00", "16:30", 30).map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
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
