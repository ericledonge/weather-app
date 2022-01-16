import './App.css';

import React from 'react';

import Day from './components/Day';
import useWeatherData from './hooks/useWeatherData';

const POSTAL_CODE = 'G6V9N3';
const NUMBER_OF_DAYS_TO_FORECAST = 3;

const App: React.FC = () => {
  const { isLoading, forecastDays } = useWeatherData(
    POSTAL_CODE,
    NUMBER_OF_DAYS_TO_FORECAST,
  );

  return (
    <div className="wrapper">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        forecastDays?.map((day, index) => (
          <Day
            key={index}
            day={day.day}
            date={day.date}
            weather={day.weather}
            temperature={day.temperature}
          />
        ))
      )}
    </div>
  );
};

export default App;
