<template>
  <div class="home-container">
    <h1>Welcome to Dallin's incredible, but humble Movie Lookup App</h1>
    <p>Discover and explore a vast collection of movies.</p>
    <nuxt-link to="/movies" class="search-button">Start Searching</nuxt-link>
  </div>
</template>

<script>
export default {
  // Script content goes here (if needed)
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa; /* Light background color */
}

.home-container h1 {
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #343a40; /* Dark text color */
}

.home-container p {
  margin-bottom: 30px;
  font-size: 1.2em;
  color: #6c757d; /* Medium text color */
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff; /* Primary button color */
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #0056b3; /* Darker shade for hover effect */
}
</style>
