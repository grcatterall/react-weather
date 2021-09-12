import { useState, useEffect } from 'react';
import openWeather from '../api/openWeather';

const useOpenWeather = (defaultLocation) => {
    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      search(defaultLocation);
    }, [defaultLocation]);
  
    const search = async (term) => {
      const response = await openWeather.get('/forecast', {
        params: {
          q: term,
        },
      });
  
      setWeather(response.data);
    };
  
    return [weather, search];
  };

export default useOpenWeather;