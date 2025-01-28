<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const isSpinning = ref(false);

const handleLogout = () => {
  localStorage.removeItem('token');
  console.log('Logout successful, token removed');
  router.push('/login');
  closeMenu();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  isSpinning.value = true;
  setTimeout(() => {
    isSpinning.value = false;
  }, 1000); // Spin for 2 seconds
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <!-- Navbar -->
  <nav class="bg-green-700 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-2xl font-bold" @click="closeMenu">
        <img alt="Vue logo" class="logo" src="../../assets/logo.svg" width="45" height="45" />
      </router-link>
      <div class="hidden md:flex space-x-4">
        <router-link to="/" class="text-white hover:text-gray-200" @click="closeMenu">Home</router-link>
        <router-link to="/about" class="text-white hover:text-gray-200" @click="closeMenu">About Me</router-link>
        <router-link to="/users" class="text-white hover:text-gray-200" @click="closeMenu">Users</router-link>
        <router-link to="/login" class="text-white hover:text-gray-200" @click="closeMenu">Login</router-link>
        <router-link to="/contact" class="text-white hover:text-gray-200" @click="closeMenu">Contact Us</router-link>
        <a href="#" @click.prevent="handleLogout" class="text-white hover:text-gray-200">Logout</a>
      </div>
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg :class="{'spin-animation': isSpinning}" class="w-8 h-8 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2">
      <router-link to="/" class="block text-white hover:text-gray-200" @click="closeMenu">Home</router-link>
      <router-link to="/about" class="block text-white hover:text-gray-200" @click="closeMenu">About Me</router-link>
      <router-link to="/users" class="block text-white hover:text-gray-200" @click="closeMenu">Users</router-link>
      <router-link to="/login" class="block text-white hover:text-gray-200" @click="closeMenu">Login</router-link>
      <router-link to="/contact" class="block text-white hover:text-gray-200" @click="closeMenu">Contact Us</router-link>
      <a href="#" @click.prevent="handleLogout" class="block text-white hover:text-gray-200">Logout</a>
    </div>
  </nav>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin-animation {
  animation: spin 2s linear;
}
</style>
