import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const UpdateTrip = () => {
  const { id } = useParams();
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
  const [cities, setCities] = useState([]);

  const [tripDate, setTripDate] = useState({
    price: '',
    start_date: '',
    end_date: '',
    max_participants: '',
  });

  useEffect(() => {
    axios.get(`/trips/${id}`)
      .then(response => {
        setTrip(response.data.trip);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des informations du voyage', error);
      });

    axios.get(`/trips/${id}/dates`)
      .then(response => {
        if (response.data.trip_dates.length > 0) {
          setTripDate(response.data.trip_dates[0]);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des informations de date du voyage', error);
      });

    axios.get('/cities')
      .then(response => {
        setCities(response.data.cities);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des villes', error);
      });
  }, [id]);

  const handleTripChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleTripDateChange = (e) => {
    setTripDate({ ...tripDate, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    axios.post(`/trips/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        axios.put(`/trips/dates/${tripDate.id}`, tripDate)
          .then(() => {
            alert('Voyage mis à jour avec succès');
            navigate('/admin');
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour de la période de voyage', error);
          });
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du voyage', error);
      });
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
          <h2 className="text-3xl font-bold mb-6">Modifier le voyage</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <select
                name="city_id"
                value={trip.city_id}
                onChange={handleTripChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Sélectionnez une ville</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
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

            <h3 className="text-2xl font-semibold mb-4">Périodes de voyage</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Prix</label>
                  <input
                    type="number"
                    name="price"
                    value={tripDate.price}
                    onChange={handleTripDateChange}
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
                    onChange={handleTripDateChange}
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
                    onChange={handleTripDateChange}
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
                    onChange={handleTripDateChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg mt-4 hover:bg-yellow-600 transition duration-300"
            >
              Mettre à jour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTrip;
