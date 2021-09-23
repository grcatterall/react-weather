import React from "react";
import { Grid } from 'semantic-ui-react';

import SkeletonCard from './SkeletonCard';

const LocationDetail = ({ locationData, currentDay }) => {
    if (locationData) {
        const weekDay = new Date(currentDay.dt * 1000).toLocaleString("en-gb", {
            weekday: "long"
        });
        let date = dateList(currentDay.dt_txt);

        return (
            <Grid padded style={{height: '100%'}}>
                <Grid.Row style={{height: '100%'}}>
                    <Grid.Column computer={4} mobile={16} style={{marginTop: '4%'}}>
                        <h1 className="temp">{Math.round(Number(currentDay.main.temp))}°C</h1>
                    </Grid.Column>
                    <Grid.Column computer={5} mobile={16} style={{marginTop: '4%'}}>
                        <div className="location"><p>{locationData.name}, {locationData.country}</p></div>
                        <div className="header">{weekDay}, {date}</div>
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={16}>
                        <img src={`http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`} alt={'dsajnk'}/>
                        <p>{currentDay.weather[0].main}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    } else {
        return <SkeletonCard />;
    }

    function dateList(date) {
        let months   = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let myarr1 = date.split(" ");
        date = myarr1[0];
        let myArr2 = date.split("-");
        let year = myArr2[0]
        let month = months[Number(myArr2[1])];
        let d = myArr2[2];
        return d + ' ' + month + ' ' + year; 
    }
}

export default LocationDetail;