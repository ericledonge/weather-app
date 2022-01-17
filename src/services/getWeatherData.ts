import { forecastDay } from '../models/weather';

export type WeatherData = {
  forecast: {
    forecastday: forecastDay[];
  };
};

const getWeatherData = async (
  postalCode: string,
  numberOfDaysToForecast: number,
): Promise<WeatherData> => {
  const WEATHER_API_URL = `https://api.weatherapi.com/v1/forecast.json?key=f2ca8da356204ad9ab520209221001&q=${postalCode}&days=${numberOfDaysToForecast}&aqi=no&alerts=no`;
  const data = await fetch(WEATHER_API_URL, { mode: 'cors' });

  return data.json();
};

export default getWeatherData;
