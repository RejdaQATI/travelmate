import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [title, setTitle] = useState(''); 
  const [dates, setDates] = useState(''); 
  const [showSuggestions, setShowSuggestions] = useState(false); 
  const [showMonthSuggestions, setShowMonthSuggestions] = useState(false); 
  const navigate = useNavigate();
  const continents = ['Europe', 'Amérique', 'Afrique', 'Asie', 'Australie'];
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/trips?continent=${title}&dates=${dates}`);
  };

  const handleSuggestionClick = (continent) => {
    setTitle(continent); 
    setShowSuggestions(false); 
    if (dates) {

      navigate(`/trips?continent=${continent}&dates=${dates}`);
    }
  };

  const handleMonthClick = (month) => {
    setDates(month); 
    setShowMonthSuggestions(false); 
    if (title) {
      navigate(`/trips?continent=${title}&dates=${month}`);
    }
  };

  const handleTitleFocus = () => {
    setShowSuggestions(true); 
    setShowMonthSuggestions(false); 
  };

  const handleDateFocus = () => {
    setShowMonthSuggestions(true); 
    setShowSuggestions(false); 
  };

  return (
    <div className="relative z-10 mx-auto w-full sm:w-3/4 md:w-1/2 -mt-6 sm:-mt-10 px-4">
      <form onSubmit={handleSearch} className="flex items-center bg-white p-2 md:p-4 rounded-lg shadow-lg space-x-2 md:space-x-4">
      
        <div className="flex-grow relative">
          <div className="flex items-center">
            <span className="flex items-center text-gray-700 mr-1 md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M12 6.5A2.5 2.5 0 1 1 9.5 9 2.5 2.5 0 0 1 12 6.5zM12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z"></path>
              </svg>
            </span>
            <input
              type="text"
              value={title}
              onFocus={handleTitleFocus} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Où ?"
              className="w-full p-1 md:p-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />
          </div>

          {showSuggestions && (
            <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
              {continents.map((continent) => (
                <div
                  key={continent}
                  onClick={() => handleSuggestionClick(continent)}
                  className="cursor-pointer p-2 hover:bg-gray-100 text-sm md:text-base"
                >
                  {continent}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-grow relative">
          <div className="flex items-center">
            <span className="flex items-center text-gray-700 mr-1 md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M14.25 3.5H13.5V2H12V3.5H6V2H4.5V3.5H3.75C2.9175 3.5 2.2575 4.175 2.2575 5L2.25 15.5C2.25 16.325 2.9175 17 3.75 17H14.25C15.075 17 15.75 16.325 15.75 15.5V5C15.75 4.175 15.075 3.5 14.25 3.5ZM14.25 15.5H3.75V8H14.25V15.5ZM14.25 6.5H3.75V5H14.25V6.5ZM6.75 11H5.25V9.5H6.75V11ZM9.75 11H8.25V9.5H9.75V11ZM12.75 11H11.25V9.5H12.75V11ZM6.75 14H5.25V12.5H6.75V14ZM9.75 14H8.25V12.5H9.75V14ZM12.75 14H11.25V12.5H12.75V14Z"></path>
              </svg>
            </span>
            <input
              type="text"
              value={dates}
              onFocus={handleDateFocus}
              onChange={(e) => setDates(e.target.value)}
              placeholder="Quand ?"
              className="w-full p-1 md:p-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />
          </div>


          {showMonthSuggestions && (
            <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
              {months.map((month) => (
                <div
                  key={month}
                  onClick={() => handleMonthClick(month)}
                  className="cursor-pointer p-2 hover:bg-gray-100 text-sm md:text-base"
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="bg-yellow-500 text-black p-2 md:p-3 rounded-lg hover:bg-yellow-600">
        
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
