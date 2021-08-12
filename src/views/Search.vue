<template>
  <div class="wrapper">
    <claim />
    <searchInput />
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  components: {
    Claim,
    SearchInput,
  },
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
  margin: 0;
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0%;
}
</style>