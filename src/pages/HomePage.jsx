import React from 'react';
import SearchBar from '../components/SearchBar';

function HomePage() {
	return (
		<div className='home-page'>
			<h1>Welcome to the Movie Search App</h1>
			<p>Search for your favorite movies by name or keywords.</p>
			<SearchBar />
		</div>
	);
}

export default HomePage;
