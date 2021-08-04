import { useQuery } from 'react-query';
import { WeatherResponse } from '../types';
import axios from 'axios';

const getWeather = (long: number, lat: number) => {
  return long && lat
    ? axios.get<WeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${String(lat)}&lon=${String(
          long,
        )}&units=metric&appid=c6882b7a7ed67fc1013ff62c1c9a26c3`,
      )
    : null;
};

export const useGetWeather = (long: number, lat: number) => {
  return useQuery(['weather', long, lat], () => getWeather(long, lat));
};
