const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const tmdbApiKey = process.env.TMDB_API_KEY;
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

app.get('/', (req, res) => {
  res.send('Movie Lookup Service is running. Use /movies?search={title} to search for movies.');
});

app.get('/movies', async (req, res) => {
    const searchQuery = req.query.search;
    if (!searchQuery) {
        return res.status(400).send({ error: "Search query is required" });
    }

    try {
        const response = await axios.get(`${tmdbBaseUrl}/search/movie`, {
            params: {
                api_key: tmdbApiKey,
                query: searchQuery,
                include_adult: false,
                language: 'en-US',
                region: 'US'
            }
        });

        const movies = response.data.results.slice(0, 10).map(movie => ({
            movie_id: movie.id,
            title: movie.title,
            poster_image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            popularity_summary: `${movie.popularity} out of ${movie.vote_count}`
        }));

        res.send(movies);
    } catch (error) {
        return res.status(500).send({ error: "Error fetching data from TMDB" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
