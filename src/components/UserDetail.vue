<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div v-if="user" class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Field</th>
            <th class="py-2 px-4 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">ID</td>
            <td class="py-2 px-4 border-b">{{ user._id }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Name</td>
            <td class="py-2 px-4 border-b">{{ user.name }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Email</td>
            <td class="py-2 px-4 border-b">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/users" class="mt-4 inline-block text-blue-500 hover:underline">Back to Users List</router-link>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const user = ref(null);
const route = useRoute();

const fetchUser = async () => {
  const userId = route.params.id;
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Include the token in the request headers
      }
    });
    user.value = await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

onMounted(() => {
  fetchUser();
});
</script>

<style scoped>
/* Add your styles here */
</style>
