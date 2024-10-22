import React from 'react';

const HeroImage = ({ backgroundImage = 'images/webp.webp', title = "Faites vos valises, l'aventure commence !" }) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px]"> 
      <img
        src={backgroundImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2"> 
          {title}
        </h1>
        <h2 className="hidden sm:block text-sm sm:text-base md:text-2xl text-white mt-4 text-opacity-95">
          Rencontrez de nouveaux amis et partagez des aventures inoubliables
        </h2>
      </div>
    </div>
  );
};

export default HeroImage;
