<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6">Pendaftaran Pengguna Baru</h1>
    <form @submit.prevent="handleRegister" class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
      <div class="mb-4">
        <label class="block text-gray-700">Nama</label>
        <input
          type="text"
          v-model="name"
          class="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          type="email"
          v-model="email"
          class="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Kata Laluan</label>
        <input
          type="password"
          v-model="password"
          class="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div class="mb-4">
        <button
          type="submit"
          class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Daftar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    await axios.post('http://localhost:3000/users/register', {
      name: name.value,
      email: email.value,
      password: password.value
    });
    alert('Pendaftaran berjaya!');
    router.push('/login');
  } catch (error) {
    console.error('Error registering user:', error);
    alert('Pendaftaran gagal. Sila cuba lagi.');
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>