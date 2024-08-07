// src/components/Layout/MainLayout.js
import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-6 lg:p-8 w-full overflow-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
