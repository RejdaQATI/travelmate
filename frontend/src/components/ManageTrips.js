import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const ManageTrips = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/trips')
      .then(response => {
        setTrips(response.data.trips);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des voyages:", error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      axios.delete(`/trips/${id}`)
        .then(() => {
          setTrips(trips.filter(trip => trip.id !== id));
        })
        .catch(error => {
          console.error('Erreur lors de la suppression du voyage', error);
        });
    }
  };

  const handleUpdate = (id) => {
    navigate(`/trips/update/${id}`); 
  };

  const handleAddTrip = () => {
    navigate('/trips/add'); 
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gérer les voyages</h2>
        <button
          onClick={handleAddTrip}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Ajouter un voyage
        </button>
      </div>

      {/* Tableau des voyages */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Titre</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map(trip => (
            <tr key={trip.id}>
              <td className="border px-4 py-2">{trip.title}</td>
              <td className="border px-4 py-2">{trip.description}</td>
              <td className="border px-4 py-2">
              <button
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(trip.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button
                  className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                  onClick={() => handleUpdate(trip.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 3.487a1.875 1.875 0 012.65 2.65L8.052 17.598a4.5 4.5 0 01-1.688 1.072l-3.178 1.06 1.06-3.178a4.5 4.5 0 011.072-1.688L16.862 3.487z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTrips;
