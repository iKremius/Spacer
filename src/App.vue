<template>
  <div class="wrapper">
    <heroImage />
    <claim />
    <searchInput />
  </div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

export default {
  components: {
    HeroImage,
    Claim,
    SearchInput,
  },
  name: 'App',
};
</script>

<style scss>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800');

* {
  box-sizing: border-box;
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
</style>