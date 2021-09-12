import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit, previousSearch }) => {
  const [location, setLocation] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(location);
    previousSearch(location);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Enter Location</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
