import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit, previousSearch }) => {
  const [location, setLocation] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(location);
    previousSearch(location);
    setLocation('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <div className="field">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Another Location"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
