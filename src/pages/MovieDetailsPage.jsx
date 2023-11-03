import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router to create a back button
import { useParams } from 'react-router-dom'; // Import useParams to access the movie ID from the URL
import MovieItem from '../components/MovieItem';

function MovieDetailsPage({}) {
	const { id } = useParams(); // Get the movie ID from the URL

	// Replace this with your logic to fetch detailed information about the movie
	const movie = {id}; // Replace with the actual movie details

	return (
		<div className='movie-details-page'>
			<Link to='/search'>Back to Search</Link>
			{movie ? (
				<div>
					<MovieItem movie={movie} />
					<h2>Movie Details</h2>
					<p>Plot: {movie.Plot}</p>
					<p>Actors: {movie.Actors}</p>
					{/* Include other detailed attributes like ratings, etc. */}
				</div>
			) : (
				<p>Movie not found.</p>
			)}
		</div>
	);
}

export default MovieDetailsPage;
