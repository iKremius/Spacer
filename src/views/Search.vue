<template>
  <div class="wrapper">
    <div class="search">
      <label for="txtSearch">Search</label>
      <input id="txtSearch" type="text" name="search" v-model="searchValue" @input="handleInput" />
      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((res) => {
          if (this.searchValue !== null && this.searchValue !== '') {
            this.results = res.data.collection.items;
          } else {
            this.results = [];
          }
        })
        .catch((ex) => {
          console.log(ex);
        });
    }, 500),
  },
};
</script>

<style scss scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.search input[type="text"] {
  height: 30px;
    border: 0;
    border-bottom: 1px solid #000000;
}

.search label {
  font-family: 'Montserrot, sans-serif';
}
</style>