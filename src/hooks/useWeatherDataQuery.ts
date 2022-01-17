import { useQuery } from 'react-query';

import getWeatherData from '../services/getWeatherData';
import { mapWeatherData } from '../utils/utils';

type forecastDay = {
  day: string;
  date: string;
  weather: string;
  temperature: number;
};

type useWeatherDataResponse = {
  isLoading: boolean;
  isError: boolean;
  forecastDays: forecastDay[] | null;
};

const useWeatherDataQuery = (
  postalCode: string,
  numberOfDaysToForecast: number,
): useWeatherDataResponse => {
  // Queries
  const { data, isLoading, isError } = useQuery('weather', () =>
    getWeatherData(postalCode, numberOfDaysToForecast),
  );

  let forecastDays = null;

  if (data) {
    forecastDays = mapWeatherData(data);
  }

  return {
    isLoading,
    isError,
    forecastDays,
  };
};

export default useWeatherDataQuery;
