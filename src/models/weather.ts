export type WeatherInputs = {
  postalCode: string;
  numberOfDaysToForecast: number;
};

export type forecastDay = {
  day: { condition: { text: string }; avgtemp_c: number };
  date: string;
  weather: string;
  temperature: number;
};
