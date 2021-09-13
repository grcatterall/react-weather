import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

import useOpenWeather from '../hooks/useOpenWeather';
import SearchBar from './SearchBar';
import LocationDetail from './LocationDetali';
import PreviousSearches from './PreviousSearches';
import WeatherData from './WeatherData';

import balloon from '../img/balloon.jpeg';

const App = () => {
    const [weather, search] = useOpenWeather('london', '/forecast');
    const [previousSearches, addSearch] = useState([]);

    const pushToSearch = (search) => {
        if (previousSearches.length > 3) {
            let newArray = previousSearches.pop();
            addSearch(newArray);
        }
        
        addSearch([search.charAt(0).toUpperCase() + search.slice(1), ...previousSearches]);
    }

    return (
        <div className="background" style={{backgroundImage: "url('" + balloon + "')"}}>
            <Grid padded style={{height: '100vh', overflowY: 'hidden'}}>
                <Grid.Row style={{height: '100%', overflowY: 'scroll'}}>
                    <Grid.Column mobile={16} computer={10} width={10} style={{position: 'relative'}}>
                        <div className="pane-view">
                            <LocationDetail locationData={weather.city} currentDay={weather.list ? weather.list[0] : ''}/>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={6} width={6}>
                        <div className="overlay">
                            <Grid  padded style={{height: '100%'}}>
                                <Grid.Row style={{height: '10%'}}>
                                    <SearchBar onFormSubmit={search} previousSearch={pushToSearch}/>
                                </Grid.Row>
                                <Grid.Row style={{height: '40%'}}>
                                    <PreviousSearches onLocationClick={search} searchList={previousSearches}/>
                                </Grid.Row>
                                <Grid.Row style={{height: '50%'}}>
                                    <WeatherData data={weather.list ? weather.list[0] : ''} />
                                </Grid.Row>
                            </Grid>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{height: '100%'}}>
                    <Grid.Column width={16} >
                        <div className="overlay">
                            <LocationDetail locationData={weather.city} currentDay={weather.list ? weather.list[0] : ''}/>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </div>
    );
};

export default App;
