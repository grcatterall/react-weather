import React from "react";
import reactDom from "react-dom";

const PreviousSearches = ({ onLocationClick, searchList }) => {
    console.log(searchList);
    const renderedList = searchList.map(searchTerm => {
        return (
            <p className="overlay-text" key={searchTerm} onClick={() => onLocationClick(searchTerm)}>{searchTerm}<br/></p>
        );
      });
    return (
        <div className="overlay-segment">{renderedList}</div>
    );


}

export default PreviousSearches;