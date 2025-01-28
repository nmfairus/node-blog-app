<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Bilangan Pengguna</h2>
        <p class="text-3xl">{{ userCount }}</p>
      </div>
      <!-- Tambahkan card lain jika diperlukan -->
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Pengurusan Pengguna</h2>
      <router-link to="/users" class="text-blue-500 hover:underline">Lihat dan Urus Pengguna</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const userCount = ref(0);

const fetchUserCount = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users/count');
    userCount.value = response.data.count;
  } catch (error) {
    console.error('Error fetching user count:', error);
  }
};

onMounted(() => {
  fetchUserCount();
});
</script>

<style scoped>
/* Add your styles here */
</style>