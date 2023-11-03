import React, { createContext, useState } from 'react';

// Create a new context
const MovieContext = createContext();

// Create a context provider component
const MovieContextProvider = ({ children }) => {
	// Define state to store the search term and search results
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	// Create a function to update the search term
	const updateSearchTerm = (term) => {
		setSearchTerm(term);
	};

	// Create a function to update the search results
	const updateSearchResults = (results) => {
		setSearchResults(results);
	};

	return (
		<MovieContext.Provider
			value={{
				searchTerm,
				searchResults,
				updateSearchTerm,
				updateSearchResults,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export { MovieContext, MovieContextProvider };
