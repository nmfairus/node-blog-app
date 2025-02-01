<template>
  <nav class="bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="text-white text-2xl font-bold flex items-center space-x-2">
        <img alt="Vue logo" class="logo rounded-full" src="../../assets/logo.svg" width="45" height="45" />
        <span>MyApp</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-gray-200 transition duration-300">Home</router-link>
        <router-link to="#" class="hover:text-gray-200 transition duration-300">About</router-link>
        <router-link to="#" class="hover:text-gray-200 transition duration-300">Contact</router-link>
      </div>

      <!-- Welcome Message or Login/Logout -->
      <div class="flex items-center space-x-4">
        <template v-if="userStore.user">
          <span class="text-gray-200">Welcome, {{ userStore.user.name }}</span>
          <button
            @click="handleLogout"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <router-link
            to="/login"
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Login
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.js';

const userStore = useUserStore();
const router = useRouter();
const isLoggedIn = ref(false);
const userName = ref(null);

// Check if user is logged in and retrieve user data
onMounted(() => {
  userStore.initialize();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  if (token && user) {
    isLoggedIn.value = true;
    userName.value = user.name || user.email; // Use name if available, otherwise use email
  }
});

// Handle Logout
const handleLogout = () => {
  userStore.logout();
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  isLoggedIn.value = false;
  router.push('/login');
};
</script>

<style scoped>
/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, #10b981, #047857);
}

/* Padding */
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Hover Effects */
.hover\:text-gray-200:hover {
  color: #e5e7eb;
}

/* Button Styling */
.bg-green-500 {
  background-color: #10b981;
}
.bg-red-500 {
  background-color: #ef4444;
}
.hover\:bg-green-600:hover {
  background-color: #059669;
}
.hover\:bg-red-600:hover {
  background-color: #dc2626;
}

/* Transition */
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>