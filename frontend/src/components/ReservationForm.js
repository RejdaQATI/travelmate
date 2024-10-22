import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const ReservationForm = () => {
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [tripPrice, setTripPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Pour gérer l'acceptation des CGV

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const { tripDateId } = location.state || {};

  useEffect(() => {
    if (tripDateId) {
      axios.get(`/trips/dates/${tripDateId}`)
        .then(response => {
          const pricePerPerson = response.data.trip_date.price;
          setTripPrice(pricePerPerson);
          setTotalPrice(pricePerPerson * numberOfParticipants);
        })
        .catch(() => {
          setError('Erreur lors de la récupération des détails du voyage.');
        });
    }
  }, [tripDateId]);

  useEffect(() => {
    setTotalPrice(tripPrice * numberOfParticipants);
  }, [numberOfParticipants, tripPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tripDateId) {
      setError('Aucune date de voyage sélectionnée.');
      return;
    }

    if (!acceptedTerms) {
      setError('Vous devez accepter les conditions de vente.');
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    
      const response = await axios.post('/payment', {
        paymentMethodId: paymentMethod.id,
        amount: totalPrice * 100,
        trip_date_id: tripDateId,
        number_of_participants: numberOfParticipants,
      });
    
      if (response.data.success) {
        setSuccess('Votre réservation et paiement ont été confirmés avec succès.');
        setError(null);
        setTimeout(() => navigate('/'), 2000);
      } else {
        if (response.data.error === 'Le nombre maximum de participants est atteint.') {
          setError('Le nombre maximum de participants pour cette excursion a été atteint.');
        } else {
          setError('Le paiement a échoué.');
        }
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error === 'Le nombre maximum de participants est atteint.') {
        setError('Le nombre maximum de participants pour cette excursion a été atteint.');
      } else {
        setError('Une erreur est survenue lors du paiement.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-16 mb-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Réservez votre aventure</h1>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="participants" className="block text-xl font-semibold mb-3">
            Nombre de participants *
          </label>
          <input
            type="number"
            id="participants"
            min="1"
            value={numberOfParticipants}
            onChange={(e) => setNumberOfParticipants(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold">Prix par participant : {tripPrice}€</p>
          <p className="text-lg font-bold">Prix total : {totalPrice}€</p>
        </div>

        <div className="mb-6">
          <label htmlFor="card" className="block text-xl font-semibold mb-3">
            Informations de paiement
          </label>
          <CardElement className="p-3 border border-gray-300 rounded-lg" />
        </div>

        <div className="mb-6">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
            className="mr-2"
            required
          />
          <label htmlFor="terms">
            J'accepte les <a href="/terms" target="_blank" className="text-blue-500 underline">conditions générales de vente</a>.
          </label>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading || !stripe}
          >
            {loading ? 'Processing...' : 'Confirmer la réservation'}
          </button>
        </div>
      </form>
    </div>
  );
};

const ReservationComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <ReservationForm />
    </Elements>
  );
};

export default ReservationComponent;
