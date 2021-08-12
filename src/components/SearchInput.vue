<template>
<div class="searchWrapper">
    <input id="txtSearch" type="text" name="search" v-model="searchValue" @input="handleInput" />
</div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
    name: 'SearchInput',
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
.searchWrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 300px;
}

.searchWrapper input[type="text"] {
    height: 30px;
    border: 0;
    color: #FFFFFF;
    background: none;
    border-bottom: 1px solid #FFFFFF;
}
</style>