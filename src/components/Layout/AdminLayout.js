import React from 'react';
import Sidebar from '../Shared/Sidebar';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const AdminLayout = ({ children }) => {
  const links = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Analytics', path: '/admin/analytics' },
    { name: 'Manage Events', path: '/admin/manage-events' },
    { name: 'Manage Users', path: '/admin/manage-users' },
    { name: 'Manage Vendors', path: '/admin/manage-vendors' },
    { name: 'Resolve Disputes', path: '/admin/resolve-disputes' },
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

export default AdminLayout;
