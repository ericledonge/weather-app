import React, { FC } from 'react';

import useWeatherDataQuery from '../hooks/useWeatherDataQuery';
import { WeatherInputs } from '../models/weather';
import Day from './Day';

type WeatherBoardProps = WeatherInputs;

const WeatherBoardReactQuery: FC<WeatherBoardProps> = ({
  postalCode,
  numberOfDaysToForecast,
}) => {
  const { forecastDays, isLoading, isError } = useWeatherDataQuery(
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
      <p>Method: React Query</p>
    </div>
  );
};
export default WeatherBoardReactQuery;
