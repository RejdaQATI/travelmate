import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'; 

const TripsSlider = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get('/trips')
      .then(response => {
        setTrips(response.data.trips); 
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des voyages', error);
      });
  }, []);

  return (
    <div className="relative container mx-auto py-8 px-4">
      <div className="text-left mb-6 sm:px-4">
        <h1 className="text-4xl font-bold">Destinations tendance</h1>
        <h2 className="text-md text-gray-600 mt-2 max-w-md">
          Explorez notre sélection des voyages les plus prisés et laissez-vous inspirer pour trouver votre prochaine aventure inoubliable.
        </h2>
      </div>
      <div className="absolute right-0 top-0 flex items-center space-x-2 pr-4 pt-10 z-10 mt-8 hidden md:flex">
        <div className="custom-prev-button bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="custom-next-button bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation={{
          prevEl: '.custom-prev-button',
          nextEl: '.custom-next-button',
        }}
        modules={[Navigation]}
        breakpoints={{
          375: { slidesPerView: 2, spaceBetween: 5 },
          500: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {trips.map(trip => (
          <SwiperSlide key={trip.id}>
            <Link to={`/trips/${trip.id}`}>
              <div className="bg-white rounded-lg overflow-hidden w-[180px] md:w-[230px] h-[300px] md:h-[350px]">
                <img
                  src={`${trip.image}`}
                  alt={trip.title}
                  className="w-full h-40 md:h-56 object-cover rounded-lg"
                />
                <p className="text-center p-4 text-lg font-semibold">{trip.title}</p>
                <p className="text-center pb-4 text-sm text-gray-500">À partir de {trip.minPrice} €</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripsSlider;
