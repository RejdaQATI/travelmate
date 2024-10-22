import React, { useState } from 'react';
import api from '../axiosConfig';
import '../assets/css/LoginForm.css'; 
import { useNavigate, Link } from 'react-router-dom';
import planeImage from '../assets/images/travelmate-plane.png'; 
import cloudImage from '../assets/images/clouds.png'; 
import cloud2Image from '../assets/images/clouds-2.png'; 
import Register from '../pages/Register';

const LoginForm = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.user.role);

        navigate('/');
      })
      .catch(error => {
        alert('Erreur lors de la connexion.');
      });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative z-5" 
      style={{ backgroundImage: "url('images/ile-de-la-reunion.jpg')" }}
    >
      <div className="bg-white bg-opacity-75 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Entrez votre email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="Entrez votre mot de passe" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Se connecter
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500">Vous n'avez pas de compte ? <Link to="/Register" className="text-blue-500 hover:underline">Inscrivez-vous</Link></p>
          </div>
        </form>
      </div>

      <div 
        className="cloud-animation" 
        style={{ backgroundImage: `url(${cloudImage})` }}
      ></div>

      <div 
        className="cloud-animation cloud-animation-2" 
        style={{ backgroundImage: `url(${cloud2Image})` }}
      ></div>

      <div 
        className="plane-animation" 
        style={{ backgroundImage: `url(${planeImage})` }}
      ></div>
    </div>
  );
};

export default LoginForm;
