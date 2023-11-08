import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchPage from './SearchPage';

function HomePage() {
	return (
		<div className='home-page'>
			<h1>Welcome to the Movie Search App</h1>
			<p>Search for your favorite movies by name or keywords.</p>
			<SearchPage/>
		</div>
	);
}

export default HomePage;
