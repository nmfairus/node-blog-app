import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import User from '@/components/User.vue';
import Login from '@/components/Login.vue';
import UserDetail from '@/components/UserDetail.vue';
import Contact from '@/components/Contact.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/users', component: User },
    { path: '/users/:id', component: UserDetail },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
