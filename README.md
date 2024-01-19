# Movie Search Application

## Overview
This application allows users to search for movies by title. It uses a Vue.js/Nuxt.js front-end (`webapp`) and a Node.js/Express back-end (`webservice`), with movie data provided by The Movie Database (TMDB) API.

## Features
- Search for movies by title
- Display movie titles, posters, and popularity summaries

## Getting Started

### Prerequisites
- Node.js
- NPM (Node Package Manager)

### Setting Up the Project
1. Clone the repository:
   ```bash
   git clone [repository URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd [project directory]
   ```

## Configuration
1. In the webservice directory, copy `.env.example` to `.env` and fill in your environment variables.


### Running the Back-End (webservice)
1. Navigate to the `webservice` directory:
   ```bash
   cd webservice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Running the Front-End (webapp)
1. Open a new terminal and navigate to the `webapp` directory:
   ```bash
   cd webapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Nuxt.js application:
   ```bash
   npm run dev
   ```
4. The application will be running at `http://localhost:8000` (or the next available port if 8000 is in use).

## Future Enhancements
- Implement pagination or infinite scrolling for displaying search results
- Add advanced search filters (e.g., by genre, year, actor, director)
- Enhance the UI/UX design for a more engaging user experience
- Include specific user ratings and reviews

## Screenshots
(Add screenshots of your application here)