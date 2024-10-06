import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="p-4 rounded-lg mt-7 bg-gray-900 outline-none border border-blue-900 focus:border-blue-500"
        placeholder="Search for games"
        autoFocus // Optional: Focus on the input field when the page loads
      />
    </form>
  );
};

export default Search;
