import { DayProps } from '../components/Day';
import { forecastDay } from '../models/weather';
import { WeatherData } from '../services/getWeatherData';

export const mapWeatherData = (weatherData: WeatherData): Array<DayProps> =>
  weatherData?.forecast?.forecastday.map((forecastDay: forecastDay) => ({
    day: getDay(forecastDay.date),
    date: getDate(forecastDay.date),
    weather: getWeather(forecastDay.day.condition.text),
    temperature: Math.round(forecastDay.day.avgtemp_c),
  }));

export const getDay = (date: string): string =>
  new Date(date).toLocaleDateString('fr-CA', { weekday: 'short' });

export const getDate = (date: string): string =>
  new Date(date).toLocaleDateString('fr-CA', { day: 'numeric' });

export const getWeather = (weather: string): string => {
  switch (weather) {
    case 'Patchy moderate snow':
    case 'Patchy snow possible':
    case 'Patchy sleet possible':
    case 'Patchy freezing drizzle possible':
    case 'Blowing snow':
    case 'Blizzard':
    case 'Freezing fog':
    case 'Freezing drizzle':
    case 'Heavy freezing drizzle':
    case 'Light sleet':
    case 'Moderate or heavy sleet':
    case 'Patchy light snow':
    case 'Light snow':
    case 'Moderate snow':
    case 'Patchy heavy snow':
    case 'Heavy snow':
    case 'Ice pellets':
    case 'Light snow showers':
    case 'Moderate or heavy snow showers':
    case 'Light showers of ice pellets':
    case 'Moderate or heavy showers of ice pellets':
      return 'snowy';
    case 'Sunny':
    case 'Overcast':
      return 'sunny';
    case 'Partly cloudy':
      return 'partlyCloudy';
    case 'Patchy rain possible':
    case 'Fog':
    case 'Mist':
    case 'Patchy light drizzle':
    case 'Light drizzle':
    case 'Patchy light rain':
    case 'Light rain':
    case 'Moderate rain at times':
    case 'Moderate rain':
    case 'Heavy rain at times':
    case 'Heavy rain':
    case 'Light freezing rain':
    case 'Moderate or heavy freezing rain':
    case 'Light rain shower':
    case 'Moderate or heavy rain shower':
    case 'Torrential rain shower':
    case 'Light sleet showers':
    case 'Moderate or heavy sleet showers':
      return 'rainy';
    case 'Thundery outbreaks possible':
    case 'Patchy light rain with thunder':
    case 'Moderate or heavy rain with thunder':
    case 'Patchy light snow with thunder':
    case 'Moderate or heavy snow with thunder':
      return 'stormy';
    default:
      return '';
  }
};
