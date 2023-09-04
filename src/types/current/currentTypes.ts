import { WeatherTypes } from "../common/WeatherTypes";

export interface CurrentBaseTypes {
  weather: WeatherTypes[];
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  wind: {
    deg: number;
    speed: number;
  };
  // rain?: {
  //   "1h": number;
  //   "3h": number;
  // };
  rain?: any;
}
