
import React from 'react';
import { Link } from 'react-router-dom';

const TripItem = ({ trip }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-[150px] md:w-[180px]">
      <Link to={`/trip/${trip.id}`}>
        <img
          src={`${trip.image}`} 
          alt={trip.title}
          className="w-full h-52 object-cover object-left"
        />
        <div className="p-1 text-center">
          <p className="text-lg font-semibold text-white">{trip.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default TripItem;
