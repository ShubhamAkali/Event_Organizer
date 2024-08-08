import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import CustomerDashboardPage from './pages/Customer/CustomerDashboardPage';
import VendorDashboardPage from './pages/Vendor/VendorDashboardPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import EventsPage from './pages/EventsPage';
import CustomerLayout from './components/Layout/CustomerLayout';
// Import other pages similarly

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
        <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/customer" element={<CustomerLayout />} />
        {/* Add other routes similarly */}
      </Routes>
    </div>
  );
};

export default App;
