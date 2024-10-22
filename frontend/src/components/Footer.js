import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#13253F' }} className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">À propos de nous</h2>
            <p className="text-gray-300">
              Travel Mate est une agence de voyages dédiée à vous offrir les meilleures expériences de voyage partout dans le monde. Notre équipe est passionnée par les découvertes et les aventures uniques.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Liens rapides</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white">À propos</a></li>
              <li><a href="/trips" className="hover:text-white">Destinations</a></li>
              <li><a href="/legalmentions" className="hover:text-white">Mentions Legales</a></li>
              <li><a href="/terms" className="hover:text-white">Conditions générales de vente</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contactez-nous</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Email: travelmate@gmail.com</li>
              <li>Téléphone: +33 12345678</li>
              <li>Adresse: Paris, France</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Suivez-nous</h2>
            <ul className="flex space-x-4 text-gray-300">
              <li><a href="https://facebook.com" className="hover:text-white">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
              <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
              <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Travel Mate. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
