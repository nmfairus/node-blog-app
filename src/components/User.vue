<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Users</h1>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">#</th>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id" :class="index % 2 === 0 ? 'bg-gray-100' : ''">
            <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
            <td class="py-2 px-4 border-b">
            <router-link :to="`/users/${user._id}`" class="text-blue-500 hover:underline">
              {{ user._id }}
            </router-link></td>
            <td class="py-2 px-4 border-b">{{ user.name }}</td>
            <td class="py-2 px-4 border-b">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>


