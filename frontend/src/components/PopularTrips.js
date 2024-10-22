import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom'; 

const PopularTrips = () => {
  const [popularTrips, setPopularTrips] = useState([]);

  useEffect(() => {
    axios.get('/populartrips')
      .then(response => {
        setPopularTrips(response.data.trips); 
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des voyages populaires', error);
      });
  }, []);

  return (
    <div className="text-center mb-6 mt-8">
      <div className="mx-auto max-w-[90%] sm:max-w-[70%] lg:max-w-[50%]">
        <h1 className="text-3xl font-bold text-[18px] sm:text-4xl">
          Explorez les destinations préférées
        </h1>

        <h2 className="text-base text-gray-600 mt-2 text-[14px] sm:text-lg">
          Découvrez nos voyages les plus populaires et trouvez votre prochaine aventure.
        </h2>
      </div>

      <div className="container mx-auto py-4 relative">
        <div className="hide-scrollbar relative flex w-full snap-x snap-mandatory justify-start lg:justify-center items-start overflow-x-auto scroll-smooth  overflow-y-hidden">
          {popularTrips.map(trip => (
            <Link key={trip.id} to={`/trips/${trip.id}`} className="card-dimension h-full shrink-0 snap-center">
              <div className="w-[220px] sm:w-[220px] m-2 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`${trip.image}`}
                  alt={trip.title}
                  className="w-full h-[180px] object-cover rounded-t-lg"
                />
                <p className="text-center p-4 text-lg font-semibold">{trip.title}</p>
                <p className="text-center pb-4 text-sm text-gray-500">À partir de {trip.price} €</p>
              </div>
            </Link>
          ))}
        </div>
        {!popularTrips.length && <p className="text-center text-lg">Aucun voyage populaire disponible pour le moment !</p>}
      </div>
    </div>
  );
};

export default PopularTrips;
