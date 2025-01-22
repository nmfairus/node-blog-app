<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div v-if="user">
      <p><strong>ID:</strong> {{ user._id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM3NTU0NTY4LCJleHAiOjE3Mzc1NTgxNjh9.PpxXtzMWMtTuC5FMLNCvCGl4QYqYj7kjpXabhjgGB-Y"

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
