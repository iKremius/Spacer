<!-- eslint-disable -->
<template>
  <div class="wrapper">
    <HeroImage />
    <Claim />
    <div class="searchWrapper">
      <input id="txtSearch" autocomplete="off" name="search" v-model="searchValue" @input="handleInput" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  components: {
    HeroImage,
    Claim,
  },
  name: 'App',
  data() {
      return {
        loading: false,
        step: 0,
        searchValue: '',
        results: [],
      };
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((res) => {
          this.results = this.searchValue !== null && this.searchValue !== '' ? res.data.collection.items: [];
        })
        .catch((ex) => {
          console.log(ex);
        });
    }, 500),
  },
};
</script>

<style scss>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800');

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

.wrapper {
  margin: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.searchWrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 300px;
}

.searchWrapper input {
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    height: 30px;
    border: 0;
    background: none;
    border-bottom: 1px solid #FFFFFF;
    transition: box-shadow .2s ease-out;
}

.searchWrapper input:focus {
    outline: none;
    box-shadow: 0 5px 10px -8px rgba(255, 255, 255, .5);
}

@media (min-width: 1024px) {
    .searchWrapper input {
        font-weight: 400;
    }
}
</style>