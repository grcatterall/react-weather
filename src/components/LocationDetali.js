import React from "react";
import reactDom from "react-dom";

const LocationDetail = ({ locationData, currentDay }) => {
    console.log(locationData);
    console.log(currentDay);
    if (locationData) {
        const weekDay = new Date(currentDay.dt * 1000).toLocaleString("en-gb", {
            weekday: "long"
        });
        let date = dateList(currentDay.dt_txt);

        return (
            <div className="ui raised card">
                <div className="header" className="content">
                    <h1>{weekDay}</h1>
                        <p class="category">{date}</p>
                    <h1 className="header">{Math.round(Number(currentDay.main.temp))}°C</h1>
                    <img src={`http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`} />
                    <div className="meta">
                        <p>{currentDay.weather[0].main}</p>
                    </div>
                    <div className="header">{locationData.name}, {locationData.country}</div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div classNameName="ui raised card">
                <div className="content">
                    <div className="header skeleton skeleton-header"></div>
                    <div className="description">
                        <p classNameName="skeleton skeleton-text"></p>
                        <p classNameName="skeleton skeleton-text"></p>
                        <p classNameName="skeleton skeleton-text"></p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                    </div>
                </div>
            </div>
        );
    }

    function dateList(date) {
        let months   = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let myarr1 = date.split(" ");
        date = myarr1[0];
        let myArr2 = date.split("-");
        let year = myArr2[0]
        let month = months[Number(myArr2[1])];
        let d = myArr2[2];
        return d + ' ' + month + ' ' + year; 
        return [d, month, year];
    }
}

export default LocationDetail;