import React, { useState } from "react";

const SearchBar = ({ onFormSubmit, defaultSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };
  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Searchah</label>
          <input
            //makes controlled component
            onChange={onInputChange}
            value={searchTerm}
            type="text"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
