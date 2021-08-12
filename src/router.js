/*  */
import { createRouter, createWebHistory } from 'vue-router';

import Search from './views/Search.vue';

export default createRouter({
    history: createWebHistory(),
    base: 'public',
    routes: [{
        path: '/',
        name: 'Search',
        component: Search,
    }],
});