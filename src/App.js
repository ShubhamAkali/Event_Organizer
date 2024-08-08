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
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
// Import other pages similarly

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/:role" element={<RegistrationPage />} />
        <Route path="/register" element={<RoleSelectionPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/events/birthdays" element={<BirthdaysPage />} /> 
        <Route path="/events/seminars" element={<SeminarsPage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
        <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
        
        {/* Add other routes similarly */}
      </Routes>
    </div>
  );
};

export default App;
