import { useState, useEffect } from 'react';
import openWeather from '../api/openWeather';

const useOpenWeather = (defaultLocation, path = 'london') => {
    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      search(defaultLocation);
    }, [defaultLocation]);
  
    const search = async (term) => {
      const response = await openWeather.get(path, {
        params: {
          q: term,
        },
      });
  
      setWeather(response.data);
    };
  
    return [weather, search];
  };

export default useOpenWeather;