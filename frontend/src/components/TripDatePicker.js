import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TripDatePicker = ({ tripId, onDateSelect }) => {
  const [dates, setDates] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);

  useEffect(() => {
    axios.get(`/trips/${tripId}/dates`)
      .then(response => {
        setDates(response.data.trip_dates || []);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des dates du voyage', error);
      });
  }, [tripId]);

  const isWithinDateRange = (date, startDate, endDate) => {
    return date >= new Date(startDate) && date <= new Date(endDate);
  };

  const handleDateChange = (selectedDate) => {
    const foundRange = dates.find(({ start_date, end_date }) =>
      isWithinDateRange(selectedDate, start_date, end_date)
    );

    if (foundRange) {
      setSelectedRange({
        start: new Date(foundRange.start_date),
        end: new Date(foundRange.end_date),
        price: foundRange.price, 
        id: foundRange.id
      });

      onDateSelect({
        start: new Date(foundRange.start_date),
        end: new Date(foundRange.end_date),
        price: foundRange.price,
        id: foundRange.id, 
      });
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-black mb-4">Sélectionnez une période</h3>
      <Calendar
        onChange={handleDateChange}
        value={selectedRange ? [selectedRange.start, selectedRange.end] : null}
        tileDisabled={({ date }) =>
          !dates.some(({ start_date, end_date }) => isWithinDateRange(date, start_date, end_date))
        }
        selectRange={false}
      />
    </div>
  );
};

export default TripDatePicker;
