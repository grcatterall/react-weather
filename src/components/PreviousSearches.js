import React from "react";
import reactDom from "react-dom";

const PreviousSearches = ({ onLocationClick, searchList }) => {
    console.log(searchList);
    const renderedList = searchList.map(searchTerm => {
        return (
            <p  className="overlay-text pointer" 
                key={searchTerm} 
                onClick={() => onLocationClick(searchTerm)}>
                    {searchTerm}
                    <br/>
            </p>
        );
      });
    return (
        <div className="overlay-segment">
            <div className="overlay-segment-border__bottom">
                {renderedList}
            </div>
        </div>
    );


}

export default PreviousSearches;