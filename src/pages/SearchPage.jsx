import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

function SearchPage() {
	return (
		<div className='search-page'>
			<SearchBar />
			<br/>
			<MovieList />
		</div>
	);
}

export default SearchPage;
