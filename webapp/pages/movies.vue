<!-- pages/movies.vue -->

<template>
  <div>
    <h1>Movie Search Page</h1>
    <Search @search="performSearch" />

    <!-- Display search results -->
    <div v-if="searchResults.length > 0">
      <h2>Search Results:</h2>
      <div class="movies-container">
        <MovieCard 
          v-for="movie in searchResults" 
          :key="movie.movie_id" 
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "~/components/Search.vue";
import MovieCard from "~/components/MovieCard.vue";

export default {
  components: {
    Search,
    MovieCard
  },
  data() {
    return {
      searchResults: [],
    };
  },
  methods: {
    async performSearch(searchQuery) {
      try {
        const response = await this.$axios.get("/movies", {
          params: {
            search: searchQuery,
          },
        });
        this.searchResults = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}
</style>
