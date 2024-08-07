import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import CustomerDashboardPage from './pages/Customer/CustomerDashboardPage';
import VendorDashboardPage from './pages/Vendor/VendorDashboardPage';
import EventsPage from './pages/EventsPage';
import BirthdaysPage from './pages/BirthdaysPage';
import SeminarsPage from './pages/SeminarsPage';
// Import other pages similarly

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/events/birthdays" element={<BirthdaysPage />} /> 
        <Route path="/events/seminars" element={<SeminarsPage />} /> 
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
        <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
        {/* Add other routes similarly */}
      </Routes>
    </div>
  );
};

export default App;
