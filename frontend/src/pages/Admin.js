import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationList from '../components/ReservationList';

const Admin = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Gestion des utilisateurs et des réservations</h1>
        <ReservationList />
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
