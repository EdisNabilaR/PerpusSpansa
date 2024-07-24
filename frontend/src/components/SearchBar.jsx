import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books, authors, subjects..."
        className="flex-1 p-2 mr-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
