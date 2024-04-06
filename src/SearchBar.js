import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput.trim()); // Trim any leading or trailing whitespace
    setSearchInput(""); // Clear the input after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
