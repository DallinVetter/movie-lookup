<template>
  <div class="movie-card">
    <img :src="movie.poster_image_url" :alt="movie.title" class="movie-poster"/>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.popularity_summary }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.movie-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  width: 200px; /* Adjust width as needed */
}

.movie-card:hover {
  transform: translateY(-5px);
}

.movie-poster {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
}

h3 {
  margin: 10px 0;
  color: #333; /* Adjust color as needed */
}

p {
  color: #666; /* Adjust color as needed */
}
</style>
