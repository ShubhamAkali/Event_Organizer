import React, { useState } from 'react';
import { createBooking } from '../../api/bookings';

const BookSeminar = ({ seminarId }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBooking({ ...bookingData, eventId: seminarId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={bookingData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={bookingData.email} onChange={handleChange} placeholder="Email" />
      <input type="phone" name="phone" value={bookingData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Book Seminar</button>
    </form>
  );
};

export default BookSeminar;
