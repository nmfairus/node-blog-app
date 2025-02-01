<template>
  <div class="h-[85vh] flex items-center justify-center bg-slate-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
      <!-- Header -->
      <h2 class="text-2xl font-bold text-center text-gray-800">Log Masuk</h2>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="contoh@email.com"
            required
          />
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Kata Laluan</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Kata laluan anda"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700 transition duration-300 ease-in-out"
        >
          Log Masuk
        </button>
      </form>

      <!-- Footer Link -->
      <p class="text-center text-sm text-gray-600">
        Belum mempunyai akaun? 
        <router-link to="/register" class="text-green-600 hover:text-green-700 font-medium underline">
          Daftar di sini
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', {
      email: email.value,
      password: password.value
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
    console.log('Login successful, token saved:', token);
    // Redirect to dashboard or another page
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
    alert('Log masuk gagal. Sila semak maklumat anda dan cuba lagi.');
  }
};
</script>

<style scoped>
/* Background Color */
.bg-slate-100 {
  background-color: #f1f5f9; /* Warna slate nipis */
}

/* Shadow Effect */
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Input Focus Styling */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.5);
}

/* Button Hover Animation */
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
