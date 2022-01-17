import React, { FC } from 'react';

import useWeatherDataFetch from '../hooks/useWeatherDataFetch';
import { WeatherInputs } from '../models/weather';
import Day from './Day';

type WeatherBoardProps = WeatherInputs;

const WeatherBoardVanillaReact: FC<WeatherBoardProps> = ({
  postalCode,
  numberOfDaysToForecast,
}) => {
  const { forecastDays, isLoading, isError } = useWeatherDataFetch(
    postalCode,
    numberOfDaysToForecast,
  );

  return (
    <div className="wrapper">
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>Error</p>
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
      <p>Method: React Vanilla</p>
    </div>
  );
};
export default WeatherBoardVanillaReact;
