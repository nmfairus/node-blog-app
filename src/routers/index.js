import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import User from '@/components/User.vue';
import Login from '@/components/Login.vue';
import UserDetail from '@/components/UserDetail.vue';
import Contact from '@/components/Contact.vue';
import Dashboard from '@/components/Dashboard.vue';
import Register from '@/components/Register.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/users', component: User },
    { path: '/users/:id', component: UserDetail },
    { path: '/login', component: Login },
    { path: '/contact', component: Contact },
    { path: '/dashboard', component: Dashboard },
    { path: '/register', component: Register }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
