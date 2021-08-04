import { useQuery } from 'react-query';
import { WeatherResponse } from '../types';
import axios from 'axios';

const apiKey = 'ADDAPIKEYHERE';
const getWeather = (long: number, lat: number) => {
  return long && lat
    ? axios.get<WeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${String(lat)}&lon=${String(
          long,
        )}&units=metric&appid=${apiKey}`,
      )
    : null;
};

export const useGetWeather = (long: number, lat: number) => {
  return useQuery(['weather', long, lat], () => getWeather(long, lat));
};
