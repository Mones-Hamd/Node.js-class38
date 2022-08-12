import fetch from 'node-fetch';
import KEY from '../sources/Keys.js';

const fetchApi = async (cityName) => {
  const respons = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${KEY.API_KEY}`,
  );
  if (respons.ok) {
    const data = await respons.json();
    return data;
  } else {
    return { weatherText: 'City is not found' };
  }
};

export default fetchApi;
