import React from "react";
import reactDom from "react-dom";

const PreviousSearches = ({ onLocationClick, searchList }) => {
    const renderedList = searchList.map(searchTerm => {
        return (
            <p key={searchTerm} onClick={() => onLocationClick(searchTerm)}>{searchTerm}<br/></p>
        );
      });
    return (
        <div>{renderedList}</div>
    );


}

export default PreviousSearches;