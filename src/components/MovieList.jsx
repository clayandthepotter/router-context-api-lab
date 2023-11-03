import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext'; // Import the MovieContext
import MovieItem from './MovieItem';

function MovieList() {
	const { searchResults } = useContext(MovieContext);

	return (
		<div
			className='movie-list'
			style={{ width:'100vw', display: "flex", flexWrap:'wrap', gap: '2em' }}>
			{searchResults.length === 0 ? (
				<p>No movies found.</p>
			) : (
				searchResults.map((movie) => (
					<MovieItem key={movie.imdbID} movie={movie} />
				))
			)}
		</div>
	);
}

export default MovieList;
