import React from "react";

function SearchBar({ sortBy, onSortChange, filter, onFilterChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortBy === "Alphabetically"}
          onChange={(e) => onSortChange(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortBy === "Price"}
          onChange={(e) => onSortChange(e.target.value)}
        />
        Price
      </label>
      <br />
      <strong>Filter:</strong>
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Healthcare">Healthcare</option>
      </select>
    </div>
  );
}

export default SearchBar;
