import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { MovieContextProvider } from '../src/context/MovieContext'; 
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
		<MovieContextProvider>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/search-page' element={<SearchPage />} />
				</Routes>
			</Router>
		</MovieContextProvider>
	);
}

export default App;





