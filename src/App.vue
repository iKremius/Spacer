<template>
<div class="app">
  <router-view />
</div>
</template>

<script>
export default {
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
</style>