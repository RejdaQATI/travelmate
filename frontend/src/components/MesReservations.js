import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 
import { Link } from 'react-router-dom';

const MesReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/my-reservations')
      .then(response => {
        setReservations(response.data.reservations);
        setLoading(false);
      })
      .catch(error => {
        setError('Erreur lors de la récupération des réservations');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Chargement des réservations...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {reservations.length === 0 ? (
        <p className="text-center text-xl font-semibold">Vous n'avez aucune réservation pour le moment.</p>
      ) : (
        <div className="space-y-6"> 
          {reservations.map(reservation => (
            <div 
              key={reservation.id} 
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between w-full"
            >
              <div className="flex-1 mb-4 md:mb-0"> 
                <h2 className="text-2xl font-semibold mb-2">
                  Réservation #{reservation.id}
                </h2>
                {reservation.trip_date && reservation.trip_date.trip ? (
                  <>
                    <p className="text-lg"><strong>Voyage :</strong> {reservation.trip_date.trip.title}</p>
                    <p className="text-lg"><strong>Du :</strong> {new Date(reservation.trip_date.start_date).toLocaleDateString()} au {new Date(reservation.trip_date.end_date).toLocaleDateString()}</p>
                  </>
                ) : (
                  <p className="text-lg text-red-500">Informations sur le voyage indisponibles.</p>
                )}

                <p className="text-lg"><strong>Participants :</strong> {reservation.number_of_participants}</p>
                <p className="text-lg"><strong>Statut :</strong> {reservation.status}</p>
                <p className="text-lg"><strong>Statut Paiement :</strong> {reservation.payment_status}</p>
              </div>

              {reservation.trip_date && reservation.trip_date.trip_id && (
                <Link 
                  to={`/trips/${reservation.trip_date.trip_id}`}
                  className="inline-block bg-gray-500 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition duration-300"
                >
                  Détails du voyage
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MesReservations;
