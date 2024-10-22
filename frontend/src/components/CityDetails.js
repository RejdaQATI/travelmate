import React from 'react';

const CityDetails = ({ city }) => {
  if (!city) return null; 

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-4 px-4">
      <img
        src={`${city.image}`}
        alt={city.name}
        className="w-full h-[250px] sm:h-[450px] object-cover mx-auto rounded-lg shadow-lg mb-4"
      />

      <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-11/12 sm:w-10/12 md:w-9/12 bg-white p-4 sm:p-6 shadow-lg rounded-lg mb-4"
        style={{ backgroundColor: '#eeebeb' }} 
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="text-left w-full sm:w-2/3 mb-4 sm:mb-0"> 
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">{city.name}</h2> 
            <p className="text-sm sm:text-lg text-gray-700">{city.description}</p> 
          </div>


          <div className="w-full sm:w-auto text-center sm:text-left">
            {city.trip ? (
              <a
                href={`/trips/${city.trip.id}`}
                className="inline-block bg-gray-700 text-white px-6 sm:px-9 py-3 rounded shadow hover:bg-gray-800 transition duration-300"
              >
                Découvrir
              </a>
            ) : (
              <p className="text-red-500">Aucun voyage associé à cette ville.</p>
            )}
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default CityDetails;
