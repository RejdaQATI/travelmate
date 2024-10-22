import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container px-4 mt-28 mb-10">
        <h1 className="text-4xl font-bold mb-6 text-left">À propos de Travel Mate</h1>
        
        <div className="space-y-6 text-lg leading-relaxed max-w-3xl pl-0">
          <p>
            Travel Mate est une plateforme dédiée à aider les voyageurs à organiser leurs voyages en groupe. 
            Notre mission est de rendre les voyages plus accessibles et plus sociaux en permettant aux 
            voyageurs de se connecter et de découvrir des destinations incroyables ensemble.
          </p>
          
          <p>
            Que vous voyagiez seul ou avec des amis, Travel Mate vous permet de trouver des compagnons de voyage 
            et de rejoindre des groupes pour partager des expériences inoubliables.
          </p>
          
          <p className="font-bold text-2xl text-left">Pourquoi choisir Travel Mate ?</p>
          
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>Voyages organisés en groupe</li>
            <li>Communauté active de voyageurs</li>
            <li>Destinations variées à travers le monde</li>
            <li>Réservations simples et sécurisées</li>
          </ul>
          
          <p>
            Rejoignez-nous et découvrez le monde avec Travel Mate, votre compagnon de voyage idéal.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
