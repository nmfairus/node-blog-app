<template>
    <div class="mt-20 flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                </div>
            </form>
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
    // Redirect to another page or perform other actions
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
    alert('Login failed. Please check your credentials and try again.');
  }
};
</script>
