import axios from 'axios'; //for running with the entire app
// const axios = require("axios") //for running as isolated file for testing

// sample API query path: http://www.omdbapi.com/?s=Batman&apikey=547302b4

//set up BASE_URL and API_KEY variables here
const BASE_URL = "http://www.omdbapi.com/?"

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Access the API key from environment variable


const fetchMovies = async (searchTerm) => {
  try {
		//your code here
		// Define the OMDB API URL for searching movies
		const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchTerm}`;
		// Make a GET request to the OMDB API
		const response = await axios.get(apiUrl);

		// Check if the request was successful
		if (response.data.Response === 'True') {
			// The movies are available in response.data.Search
			return response.data.Search;
		} else {
			throw new Error(response.data.Error);
		}
	} catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    //your code here
    // Define the OMDB API URL for fetching a movie by its IMDb ID
    const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;

    // Make a GET request to the OMDB API
    const response = await axios.get(apiUrl);

    // Check if the request was successful
    if (response.data.Response === "True") {
      // The movie information is available in response.data
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }    
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

// fetchMovies("Batman");
// fetchMovieById("tt3896198")

export { fetchMovies, fetchMovieById };