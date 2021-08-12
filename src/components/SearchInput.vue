<template>
<div class="searchWrapper">
    <input id="txtSearch" type="text" name="search" v-model="searchValue" @input="handleInput" />
</div>
</template>

<script>
export default {
    name: 'SearchInput',
};
</script>

<style scss scoped>
.searchWrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 300px;
}

.searchWrapper input[type="text"] {
    height: 30px;
    border: 0;
    background: none;
    border-bottom: 1px solid #000000;
}
</style>