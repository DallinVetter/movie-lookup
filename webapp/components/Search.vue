<template>
  <div class="search-container">
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Enter movie title" 
      class="search-input"
    >
    <button 
      @click="performSearch" 
      class="search-button"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Store the user's search query
    };
  },
  methods: {
    performSearch() {
      // Emit the search event with the current searchQuery
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.search-input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px; /* Adjust the width as needed */
}

.search-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF; /* Primary color */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #0056b3; /* Darker shade for hover effect */
}
</style>
