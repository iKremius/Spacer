import { createRouter, createWebHistory } from 'vue-router';

import Search from './views/Search.vue';
import About from './views/About.vue';

export default createRouter({
    history: createWebHistory(),
    base: 'public',
    routes: [{
            path: '/',
            name: 'Search',
            component: Search,
        },
        {
            path: '/About',
            name: 'About',
            component: About,
        },
    ],
});