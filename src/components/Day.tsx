import React, { FC } from 'react';

import Cloudy from '../../resources/images/cloudy.svg?component';
import PartlyCloudy from '../../resources/images/partly-cloudy.svg?component';
import Rainy from '../../resources/images/rainy.svg?component';
import Snowy from '../../resources/images/snowy.svg?component';
import Stormy from '../../resources/images/stormy.svg?component';
import Sunny from '../../resources/images/sunny.svg?component';

const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case 'cloudy':
      return <Cloudy />;
    case 'snowy':
      return <Snowy />;
    case 'sunny':
      return <Sunny />;
    case 'partlyCloudy':
      return <PartlyCloudy />;
    case 'rainy':
      return <Rainy />;
    case 'stormy':
      return <Stormy />;
  }
};

export type DayProps = {
  day: string;
  date: string;
  weather: string;
  temperature: number;
};

const Day: FC<DayProps> = ({ day, date, weather, temperature }) => {
  return (
    <div className="day">
      <div className="day-of-week">{day}</div>

      <div className="date">{date}</div>

      <div className={`bar ${weather}`}>
        <div className="icon">{getWeatherIcon(weather)}</div>

        <div className="temperature">
          {temperature}
          <span className="degrees">&deg;</span>
        </div>
      </div>
    </div>
  );
};

export default Day;
