import './App.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import WeatherBoardReactQuery from './components/WeatherBoardReactQuery';
import WeatherBoardVanillaReact from './components/WeatherBoardVanillaReact';

const POSTAL_CODE = 'G6V9N3';
const NUMBER_OF_DAYS_TO_FORECAST = 3;

const App: React.FC = () => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <WeatherBoardReactQuery
        postalCode={POSTAL_CODE}
        numberOfDaysToForecast={NUMBER_OF_DAYS_TO_FORECAST}
      />

      <div className="separator" />

      <WeatherBoardVanillaReact
        postalCode={POSTAL_CODE}
        numberOfDaysToForecast={NUMBER_OF_DAYS_TO_FORECAST}
      />

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
