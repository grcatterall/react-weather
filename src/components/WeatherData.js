import React from "react";

import SkeletonCard from './SkeletonCard';

const WeatherData = ({data}) => {
    if (data) {
        return (
            <div className="overlay-segment">
                <div className="overlay-segment-border__bottom">
                    <div className="overlay-text overlay-header">Weather Details</div>
                    <div class="overlay-data"><p className="overlay-text">Cloudy:</p> <p className="overlay-value">{data.clouds.all}%</p></div>
                    <div class="overlay-data"><p className="overlay-text">Humidity:</p> <p className="overlay-value">{data.main.humidity}%</p></div>
                    <div class="overlay-data"><p className="overlay-text">Wind:</p> <p className="overlay-value">{(Math.round((data.wind.speed * 3.6) * 10)) / 10}km/h</p></div>
                    <div class="overlay-data"><p className="overlay-text">Rain:</p> <p className="overlay-value">{data.rain ? data.rain['3h'] : 0}mm</p></div>
                </div>
            </div>
        );
    } else {
        return <SkeletonCard />;
    }
}

export default WeatherData;