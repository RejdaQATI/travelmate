import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const AddTrip = () => {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    title: '',
    description: '',
    destination: '',
    duration: '',
    activities: '',
    included: '',
    city_id: '',
  });

  const [image, setImage] = useState(null);

  const [tripDates, setTripDates] = useState([
    { price: '', start_date: '', end_date: '', max_participants: '' }
  ]); // Tableau pour plusieurs périodes

  const handleTripChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleTripDateChange = (index, e) => {
    const newTripDates = [...tripDates];
    newTripDates[index][e.target.name] = e.target.value;
    setTripDates(newTripDates);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addTripDate = () => {
    setTripDates([...tripDates, { price: '', start_date: '', end_date: '', max_participants: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Première requête pour créer un voyage (trip)
      const formData = new FormData();
      formData.append('title', trip.title);
      formData.append('description', trip.description);
      formData.append('destination', trip.destination);
      formData.append('duration', trip.duration);
      formData.append('activities', trip.activities);
      formData.append('included', trip.included);
      formData.append('city_id', trip.city_id);
      if (image) {
        formData.append('image', image);
      }

      const tripResponse = await axios.post('/trips', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const tripId = tripResponse.data.id;

      // Deuxième requête pour créer les dates du voyage
      await Promise.all(tripDates.map(async (tripDate) => {
        const tripDateData = {
          price: tripDate.price,
          start_date: tripDate.start_date,
          end_date: tripDate.end_date,
          max_participants: tripDate.max_participants,
          trip_id: tripId,
        };
        await axios.post(`/trips/${tripId}/dates`, tripDateData);
      }));

      alert('Voyage et périodes de voyage ajoutés avec succès');
      navigate('/admin');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du voyage et des périodes', error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center pt-12 relative"
      style={{
        backgroundImage: "url('../images/1321981.jpeg')",
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="max-w-6xl w-full p-4">
        <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Ajouter un nouveau voyage</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Partie formulaire du voyage */}
            <div>
              <label className="block text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                name="title"
                value={trip.title}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={trip.description}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                name="destination"
                value={trip.destination}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Durée (jours)</label>
              <input
                type="number"
                name="duration"
                value={trip.duration}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Activités</label>
              <textarea
                name="activities"
                value={trip.activities}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Inclus</label>
              <textarea
                name="included"
                value={trip.included}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Ville (ID)</label>
              <input
                type="text"
                name="city_id"
                value={trip.city_id}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Périodes de voyage */}
            <h3 className="text-2xl font-semibold mb-4">Périodes de voyage</h3>
            {tripDates.map((tripDate, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Prix</label>
                    <input
                      type="number"
                      name="price"
                      value={tripDate.price}
                      onChange={(e) => handleTripDateChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Max participants</label>
                    <input
                      type="number"
                      name="max_participants"
                      value={tripDate.max_participants}
                      onChange={(e) => handleTripDateChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Date de début</label>
                    <input
                      type="date"
                      name="start_date"
                      value={tripDate.start_date}
                      onChange={(e) => handleTripDateChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Date de fin</label>
                    <input
                      type="date"
                      name="end_date"
                      value={tripDate.end_date}
                      onChange={(e) => handleTripDateChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addTripDate}
              className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-300"
            >
              Ajouter une autre période
            </button>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
            >
              Ajouter le voyage
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrip;
