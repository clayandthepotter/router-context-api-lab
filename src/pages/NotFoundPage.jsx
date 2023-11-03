import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function NotFoundPage() {
	return (
		<div className='not-found-page'>
			<h2>404: Page Not Found</h2>
			<p>Oops, the page you're looking for doesn't exist.</p>
			<Link to='/'>Go back to the home page</Link>
		</div>
	);
}

export default NotFoundPage;
