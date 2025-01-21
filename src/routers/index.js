import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import User from '@/components/User.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/users', component: User }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
