import React, { useState } from 'react';
import ManageUsers from './ManageUsers';
import ManageReservations from './ManageReservations';
import ManageTrips from './ManageTrips';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <ManageUsers />;
      case 'reservations':
        return <ManageReservations />;
      case 'trips':
        return <ManageTrips />;
      default:
        return <ManageUsers />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Menu burger pour les petits écrans */}
      <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu déroulant pour les petits écrans */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-gray-800 text-white p-4">
          <ul>
            <li>
              <button
                className={`w-full text-left px-3 py-2 text-sm rounded-lg mb-4 ${
                  activeTab === 'users' ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveTab('users');
                  setIsMenuOpen(false);
                }}
              >
                Gérer les utilisateurs
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 text-sm rounded-lg mb-4 ${
                  activeTab === 'reservations' ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveTab('reservations');
                  setIsMenuOpen(false);
                }}
              >
                Gérer les réservations
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 text-sm rounded-lg mb-4 ${
                  activeTab === 'trips' ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveTab('trips');
                  setIsMenuOpen(false);
                }}
              >
                Gérer les voyages
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Barre latérale pour les grands écrans */}
      <div className="hidden md:block w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <ul>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg mb-4 ${
                activeTab === 'users' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('users')}
            >
              Gérer les utilisateurs
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg mb-4 ${
                activeTab === 'reservations' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('reservations')}
            >
              Gérer les réservations
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg mb-4 ${
                activeTab === 'trips' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('trips')}
            >
              Gérer les voyages
            </button>
          </li>
        </ul>
      </div>

      {/* Contenu principal */}
      <div className="w-full md:w-3/4 bg-white p-4 md:p-8 text-sm md:text-base">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
