<template>
  <div class="wrapper">
    <claim />
    <searchInput />
  </div>
</template>

<script>
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

export default {
  components: {
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
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0%;
}
</style>