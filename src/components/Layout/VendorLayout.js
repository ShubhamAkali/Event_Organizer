import React from 'react';
import Sidebar from '../Shared/Sidebar';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const VendorLayout = ({ children }) => {
  const links = [
    { name: 'Dashboard', path: '/vendor/dashboard' },
    { name: 'Manage Bookings', path: '/vendor/manage-bookings' },
    { name: 'Set Prices', path: '/vendor/set-prices' },
    { name: 'Manage Availability', path: '/vendor/manage-availability' },
    { name: 'Accept/Reject Bookings', path: '/vendor/accept-reject-bookings' },
  ];

  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default VendorLayout;
