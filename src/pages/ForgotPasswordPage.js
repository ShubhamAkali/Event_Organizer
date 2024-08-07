import React, { useState } from 'react';
import { sendPasswordResetEmail } from '../api/auth';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Send Reset Email</button>
    </form>
  );
};

export default ForgotPasswordPage;
