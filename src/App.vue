<!-- eslint-disable -->
<template>
  <div :class="[{ flexStart: step === 1 }, 'wrapper']">
    <HeroImage v-if="step === 0" />
    <Claim v-if="step === 0" />
    <Search v-model="searchValue" @input="handleInput" :dark="step === 1" />
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';
import Search from '@/components/Search.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  components: {
    HeroImage,
    Claim,
    Search,
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
      this.loading = true;
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((res) => {
          this.loading = false;
          if (this.searchValue !== null && this.searchValue !== '') {
            this.results = res.data.collection.items;
            this.step = 1;
          } else {
             this.results = [];
             this.step = 0;
           }
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

.flexStart {
  justify-content: flex-start;
}
</style>