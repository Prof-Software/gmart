// pages/SearchResults.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../components/Search';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Function to fetch search results
  const fetchResults = async (pageNumber) => {
    const url = `https://api.rawg.io/api/games?key=152e84c687fb48e0b875d3fefa6a808c&search=${encodeURIComponent(query)}&page=${pageNumber}&page_size=10`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setResults((prevResults) => pageNumber === 1 ? data.results : [...prevResults, ...data.results]);
      setHasMore(data.results.length > 0); // Update hasMore based on results
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message); // Set the error message
    }
  };

  // Fetch results when page number or query changes
  useEffect(() => {
    if (query) {
      setPage(1); // Reset page to 1 for new query
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      fetchResults(page);
    }
  }, [page, query]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      <Search />
      {error && <p className="text-red-500">{error}</p>}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result) => (
            <div key={result.id} className="p-4 border border-gray-700 bg-black text-white">
              <img
                src={result.background_image}
                alt={result.name}
                className="w-full h-[300px] object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{result.name}</h3>
              <p>Released: {result.released || 'N/A'}</p>
            </div>
          ))}
        </div>
      ) : (
        query && !error && <p>No results found</p>
      )}
      {hasMore && !error && (
        <button
          onClick={loadMore}
          className="mt-4 p-4 rounded-lg bg-blue-500 text-white"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default SearchResults;
