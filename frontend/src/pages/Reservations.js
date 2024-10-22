import React from 'react';
import Header from '../components/Header';
import ReservationForm from '../components/ReservationForm';
import Footer from '../components/Footer';

const Reservation = () => {
  return (
    <div>
      <Header />
      <main>
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;
