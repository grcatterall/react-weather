import React, { useState, useEffect } from 'react';

import useOpenWeather from '../hooks/useOpenWeather';
import SearchBar from './SearchBar';
import LocationDetail from './LocationDetali';
import PreviousSearches from './PreviousSearches';

const App = () => {
    const [weather, search] = useOpenWeather('london', '/forecast');
    const [previousSearches, addSearch] = useState([]);

    const pushToSearch = (search) => {
        if (previousSearches.length > 3) {
            let newArray = previousSearches.shift();
            addSearch(newArray);
            console.log(newArray);
            console.log(previousSearches);
        }
        addSearch([...previousSearches, search]);
    }

    return (
      <div className="ui container grid">
        <div className="ui row centered">
            <div className="column eight wide">
                <SearchBar onFormSubmit={search} previousSearch={pushToSearch}/>
            </div>
            <div className="column four">
                <PreviousSearches onLocationClick={search} searchList={previousSearches}/>
            </div>
        </div>
        <div className="ui row centered">
          <LocationDetail locationData={weather.city} currentDay={weather.list ? weather.list[0] : ''}/>
        </div>
      </div>
    );
};

export default App;
