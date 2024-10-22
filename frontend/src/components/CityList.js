import React, { useEffect, useState } from 'react'; 
import axios from '../axiosConfig'; 

const CityList = ({ onCitySelect }) => { // on donne un prop 'onCitySelect' pour transmettre la ville sélectionnée au parent
  const [cities, setCities] = useState([]); // état pour stocker la liste des villes
  const [selectedCity, setSelectedCity] = useState(null); // État pour stocker la ville sélectionnée

// ON récupÈre les villes dès que le composant est monté.
  useEffect(() => {
    axios.get('/cities')
      .then(response => {
        const cityList = response.data.cities; // On stocke la liste des villes récupérées dans cityList
        setCities(cityList); // On met à jour l'état avec la liste des villes.

        //On fait la recherche d'une ville par défaut, ici "Los Angeles".
        const defaultCity = cityList.find(city => city.name === 'Los Angeles');
        if (defaultCity) {
          setSelectedCity(defaultCity); // on sélectionne la ville par défaut.
          onCitySelect(defaultCity); // on appelle la fonction onCitySelect pour informer le parent.
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des villes', error); 

      });
  }, [onCitySelect]); // useEffect est déclenché quand la fonction onCitySelect change.

  // gère le clic sur une ville et met à jour la ville sélectionnée.
  const handleCityClick = (city) => {
    setSelectedCity(city); // Met à jour l'état avec la ville cliquée.
    onCitySelect(city); // Appelle la fonction onCitySelect avec la ville sélectionnée.
  };

  return (
    <div className="text-center mb-6 mt-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Choisissez votre prochaine destination
      </h1>
      <h2 className="text-md sm:text-lg text-gray-600 mb-6">
        Trouvez le voyage qui vous correspond et explorez de nouveaux horizons
      </h2>

      <div className="flex flex-wrap sm:flex-nowrap justify-center space-x-2 sm:space-x-6 my-2 sm:my-8 gap-y-2 sm:gap-y-0"> 
  {cities.map(city => ( 
    <button
      key={city.id} 
      onClick={() => handleCityClick(city)} 
      className={`bg-cream border border-green-500 text-black-500 p-1 sm:p-3 lg:p-2 px-3 sm:px-6 lg:px-4 text-xs sm:text-base lg:text-sm min-w-[80px] sm:min-w-[150px] lg:min-w-[120px] rounded-full shadow hover:bg-green-100 transition duration-300 ${selectedCity && selectedCity.id === city.id ? 'bg-green-100' : ''}`} 
    >
      {city.name}
    </button>
  ))}
</div>


    </div>
  );
};

export default CityList;


//<div className="flex flex-wrap justify-center space-x-2 sm:space-x-3 my-2 sm:my-4"> 
//{cities.map(city => ( 
 // <button
   // key={city.id} 
    //onClick={() => handleCityClick(city)} 
   // className={`bg-cream border border-green-500 text-black-500 p-1 sm:p-2 px-3 sm:px-4 text-xs sm:text-sm min-w-[80px] sm:min-w-[100px] rounded-full shadow hover:bg-green-100 transition duration-300 ${selectedCity && selectedCity.id === city.id ? 'bg-green-100' : ''}`} 
 // >
   // {city.name}
  //</button>
//))}
//</div>
