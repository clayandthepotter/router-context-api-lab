import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext'; // Import the MovieContext
import { fetchMovies } from '../services/api'; // Import the API function for fetching movies


function SearchBar() {
	const { updateSearchTerm, updateSearchResults } =	useContext(MovieContext);
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSearch = async () => {
		try {
			// Update the search term in the context
			updateSearchTerm(inputValue);
			// Call the API function to fetch movies based on the search term
			const movies = await fetchMovies(inputValue);
			// Update the search results in the context
			updateSearchResults(movies);

		} catch (error) {
			console.error('Error searching for movies:', error);
		}
	};

	const handleKeyPress = (event) => {
		if (event.code === "Enter") {
			// If Enter key is pressed, initiate the search
			handleSearch();
		}
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Search for a movie...'
				value={inputValue}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				style={{marginRight: "10px"}}
			/>
			<button type='submit' onClick={() => handleSearch()}>Search</button>
		</div>
	);
}

export default SearchBar;
