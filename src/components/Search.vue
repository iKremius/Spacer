<!-- eslint-disable -->
<template>
  <div class="searchWrapper">
    <input
        id="txtSearch"
        autocomplete="off"
        name="search"
        :class=" { dark }"
        :value="value"
        @input="handleChange"
    />
</div>
</template>

<script>
export default {
  name: 'Search',
  props: {
      value: {
          type: String,
          required: true,
      },
      dark: {
          type: Boolean,
          default: false,
      },
  },
  methods: {
      handleChange(e) {
        this.$emit('input', e.target.value);
      },
  },
};
</script>

<style scss>
.dark {
  color: #1E3D4A;
  border-bottom-color: #1E3D4A;
}

.dark:focus {
  box-shadow: 0 10px 20px -8px rgba(#1E3D4A, .2);
  color: #1E3D4A;
  border-bottom-color: #1E3D4A;
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