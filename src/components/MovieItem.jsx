import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MovieDetailsPage from '../pages/MovieDetailsPage';


function MovieItem({ key, movie }) {
  const { Title, Year, Poster } = movie;

  return (
		<div style={{ maxWidth: '300px' }}>
			<div>
				<img src={Poster} alt={`${Title} Poster`} />
			</div>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'column',
				}}
			>
				<h2>{Title}</h2>
				<p>Year: {Year}</p>
				<Link to={`/movie/${key}`} style={{ marginTop: '10px' }}>
					View Details
				</Link>
			</div>
      <Outlet/>
		</div>
	);
}

export default MovieItem;



