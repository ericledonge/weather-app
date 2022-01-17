import { useEffect, useState } from 'react';

import getWeatherData from '../services/getWeatherData';
import { mapWeatherData } from '../utils/utils';

type forecastDay = {
  day: string;
  date: string;
  weather: string;
  temperature: number;
};

type useWeatherDataObject = {
  isLoading: boolean;
  isError: boolean;
  forecastDays: forecastDay[];
};

const useWeatherDataFetch = (
  postalCode: string,
  numberOfDaysToForecast: number,
): useWeatherDataObject => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [forecastDays, setForecastDays] = useState<forecastDay[]>([]);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const weatherData = await getWeatherData(postalCode, numberOfDaysToForecast);
        const mappedWeatherData = mapWeatherData(weatherData);
        setForecastDays(mappedWeatherData);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
    forecastDays,
  };
};

export default useWeatherDataFetch;
