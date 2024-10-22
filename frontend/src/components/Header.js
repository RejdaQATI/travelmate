import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from './Logout'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isAdmin, setIsAdmin] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    const role = localStorage.getItem('role');  
    setIsLoggedIn(!!token);
    if (role === 'admin') {
      setIsAdmin(true); 
    } else {
      setIsAdmin(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      if (!location.pathname.startsWith('/trips/') && location.pathname !== '/reservation' && location.pathname !== '/terms' && location.pathname !== '/about' && location.pathname !== '/legalmentions') {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else if (!isMenuOpen) {
          setIsScrolled(false); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isMenuOpen]); 

  useEffect(() => {
    if (
      location.pathname.startsWith('/trips/') ||
      location.pathname === '/reservation' ||
      location.pathname === '/terms' ||
      location.pathname === '/about' ||
      location.pathname === '/legalmentions' ||
      isMenuOpen 
    ) {
      setIsScrolled(true); 
    }
  }, [location.pathname, isMenuOpen]); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsScrolled(true);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-4' 
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            !isScrolled ? 'text-white' : 'text-transparent'
          } relative`}
        >
          {isScrolled ? (
            <img 
              src="../images/logo2.png" 
              alt="Logo" 
              className="h-16 w-auto" 
            />
          ) : (
            "TravelMate" 
          )}
        </Link>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <nav className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className={`transition duration-300 font-bold ${
              !isScrolled ? 'text-white' : 'text-gray-700'
            } hover:text-blue-500`}
          >
            Accueil
          </Link>
          <Link
            to="/trips"
            className={`transition duration-300 font-bold ${
              !isScrolled ? 'text-white' : 'text-gray-700'
            } hover:text-blue-500`}
          >
            Voyages
          </Link>

          {isLoggedIn && (
            <Link
              to="/profile"
              className={`transition duration-300 font-bold ${
                !isScrolled ? 'text-white' : 'text-gray-700'
              } hover:text-blue-500`}
            >
              Mon Profil
            </Link>
          )}

          <Link
            to="/about"
            className={`transition duration-300 font-bold ${
              !isScrolled ? 'text-white' : 'text-gray-700'
            } hover:text-blue-500`}
          >
            À propos
          </Link>

          {isLoggedIn && isAdmin && (  
            <Link
              to="/admin"
              className={`transition duration-300 font-bold ${
                !isScrolled ? 'text-white' : 'text-gray-700'
              } hover:text-blue-500`}
            >
              Admin
            </Link>
          )}

          {isLoggedIn ? (
            <Logout setIsLoggedIn={setIsLoggedIn} isScrolled={isScrolled} />
          ) : (
            <Link
              to="/login"
              className={`transition duration-300 font-bold ${
                !isScrolled ? 'text-white' : 'text-gray-700'
              } hover:text-blue-500`}
            >
              Connexion
            </Link>
          )}
        </nav>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg sm:hidden">
            <nav className="flex flex-col items-center space-y-4 py-6">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500 font-bold"
              >
                Accueil
              </Link>
              <Link
                to="/trips"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500 font-bold"
              >
                Voyages
              </Link>

              {isLoggedIn && (
                <Link
                  to="/profile"
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-500 font-bold"
                >
                  Mon Profil
                </Link>
              )}

              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500 font-bold"
              >
                À propos
              </Link>

              {isLoggedIn && isAdmin && (
                <Link
                  to="/admin"
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-500 font-bold"
                >
                  Admin
                </Link>
              )}

              {isLoggedIn ? (
                <Logout setIsLoggedIn={setIsLoggedIn} isScrolled={isScrolled} />
              ) : (
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-500 font-bold"
                >
                  Connexion
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
