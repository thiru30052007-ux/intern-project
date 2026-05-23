import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  sport: '',
  date: '',
  time: '',
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${form.name}, your ${form.sport || 'selected'} slot has been booked successfully!`);
    setForm(initialForm);
  }

  return (
    <section className="booking-page">
      <div className="booking-container">
        <h1>Sports Slot Booking</h1>
        <p>Fill the form and reserve your slot</p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email id"
            required
          />
          <select name="sport" value={form.sport} onChange={handleChange} required>
            <option value="">Select Sport</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
          </select>
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
          <select name="time" value={form.time} onChange={handleChange} required>
            <option value="">Select Slot Time</option>
            <option value="8 AM - 9 AM">8 AM - 9 AM</option>
            <option value="9 AM - 10 AM">9 AM - 10 AM</option>
            <option value="10 AM - 11 AM">10 AM - 11 AM</option>
            <option value="11 AM - 12 PM">11 AM - 12 PM</option>
            <option value="4 PM - 5 PM">4 PM - 5 PM</option>
            <option value="5 PM - 6 PM">5 PM - 6 PM</option>
            <option value="6 PM - 7 PM">6 PM - 7 PM</option>
            <option value="7 PM - 8 PM">7 PM - 8 PM</option>
            <option value="8 PM - 9 PM">8 PM - 9 PM</option>
            <option value="9 PM - 10 PM">9 PM - 10 PM</option>
            <option value="10 PM - 11 PM">10 PM - 11 PM</option>
          </select>
          <button className="primary-button" type="submit">
            Confirm Booking
          </button>
        </form>

        {message && <p className="booking-message">{message}</p>}
      </div>
    </section>
  );
}
