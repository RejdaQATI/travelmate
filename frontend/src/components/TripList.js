import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from '../axiosConfig'; 

const TripList = ({ initialContinent }) => {  
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]); 
  const [selectedContinent, setSelectedContinent] = useState(initialContinent || '');

  useEffect(() => {
    axios.get('/trips')
      .then(response => {
        setTrips(response.data.trips); 
        setFilteredTrips(response.data.trips); 
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des voyages', error);
      });
  }, []);

  useEffect(() => {
    if (selectedContinent) {
      const filtered = trips.filter(trip => trip.destination.toLowerCase() === selectedContinent.toLowerCase());
      setFilteredTrips(filtered); 
    } else {
      setFilteredTrips(trips); 
    }
  }, [selectedContinent, trips]);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  return (
    <div>
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 mt-2 sm:mt-4">
        {['Europe', 'Amérique', 'Afrique', 'Asie', 'Australie'].map(continent => (
          <button
            key={continent}
            onClick={() => handleContinentClick(continent)}
            className={`bg-cream border border-green-500 text-black-500 p-2 sm:p-3 px-4 sm:px-6 text-xs sm:text-base rounded-full shadow hover:bg-green-100 transition duration-300 ${
              selectedContinent === continent ? 'bg-green-100' : ''
            }`}
          >
            {continent}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap m-3 justify-center">
        {filteredTrips.map(trip => (
          <Link to={`/trips/${trip.id}`} key={trip.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 m-3 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={`${trip.image}`}
              alt={trip.title}
              className="w-full h-56 object-cover"
            />
            <p className="text-center p-4 text-lg font-semibold">{trip.title}</p>
            <p className="text-center px-4 pb-4 text-sm text-gray-600">
              {trip.description ? trip.description : 'Aucune description disponible'}
            </p>
            <p className="text-center pb-4 text-sm text-gray-500">
              À partir de {trip.minPrice !== null ? `${trip.minPrice} €` : 'Prix non disponible'}
            </p>
          </Link>
        ))}
      </div>
      {!filteredTrips.length && <p className="text-center text-lg">Aucun voyage disponible pour le moment !</p>}
    </div>
  );
};

export default TripList;
