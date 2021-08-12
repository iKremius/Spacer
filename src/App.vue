<template>
<div class="app">
  <div class="nav">
    <router-link to="/">Spacer</router-link>
    <router-link to="/About">About</router-link>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scss scoped />