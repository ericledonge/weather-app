import { useEffect, useState } from 'react';

import { mapWeatherData } from '../utils/utils';

type forecastDay = {
  day: string;
  date: string;
  weather: string;
  temperature: number;
};

type useWeatherDataObject = {
  isLoading: boolean;
  forecastDays: forecastDay[];
};

const useWeatherData = (
  postalCode: string,
  numberOfDaysToForecast: number,
): useWeatherDataObject => {
  const WEATHER_API_URL = `https://api.weatherapi.com/v1/forecast.json?key=f2ca8da356204ad9ab520209221001&q=${postalCode}&days=${numberOfDaysToForecast}&aqi=no&alerts=no`;

  const [isLoading, setIsLoading] = useState(false);
  const [forecastDays, setForecastDays] = useState<forecastDay[]>([]);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await fetch(WEATHER_API_URL, { mode: 'cors' });
        const result = await response.json();
        const data = mapWeatherData(result);
        setForecastDays(data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    forecastDays,
  };
};

export default useWeatherData;
