import React, { useState, useEffect } from 'react';

import useOpenWeather from '../hooks/useOpenWeather';
import SearchBar from './SearchBar';
import LocationDetail from './LocationDetali';

const App = () => {
  const [weather, search] = useOpenWeather('london');

  return (
      <div>
          Hello
          <SearchBar onFormSubmit={search} />
          <LocationDetail locationData={weather.city} currentDay={weather.list ? weather.list[0] : ''}/>
      </div>
  );
};

export default App;
