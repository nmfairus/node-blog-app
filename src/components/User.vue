<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.js';

const userStore = useUserStore();
const users = ref([]);
const router = useRouter();
const isModalOpen = ref(false);
const newUser = ref({
  name: '',
  email: '',
  password: ''
});
const editingUserId = ref(null);
const editedUser = ref({
  _id: '',
  name: '',
  email: '',
  password: ''
});

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const deleteUser = async (userId) => {
  if (window.confirm('Are you sure you want to delete this user?')) {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
};

const createUser = async () => {
  try {
    await axios.post('http://localhost:3000/users/register', newUser.value);
    fetchUsers(); // Refresh the user list after creation
    closeModal();
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  newUser.value = {
    name: '',
    email: '',
    password: ''
  };
};

const startEditing = (user) => {
  editingUserId.value = user._id;
  editedUser.value = { ...user, password: '' }; // Do not prefill password
};

const cancelEditing = () => {
  editingUserId.value = null;
  editedUser.value = {
    _id: '',
    name: '',
    email: '',
    password: ''
  };
};

const saveUser = async () => {
  try {
    await axios.put(`http://localhost:3000/users/${editedUser.value._id}`, editedUser.value);
    userStore.updateUser(editedUser.value); // Update user in the store
    fetchUsers(); // Refresh the user list after update
    cancelEditing();
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Users</h1>
    <div class="mb-4">
      <button @click="openModal" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Tambah Pengguna</button>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">#</th>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user._id" :class="index % 2 === 0 ? 'bg-gray-100' : ''">
            <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
            <td class="py-2 px-4 border-b">
              <router-link :to="`/users/${user._id}`" class="text-blue-500 hover:underline">
                {{ user._id }}
              </router-link>
            </td>
            <td class="py-2 px-4 border-b">
              <template v-if="editingUserId === user._id">
                <input v-model="editedUser.name" class="w-full p-2 border border-gray-300 rounded" />
              </template>
              <template v-else>
                {{ user.name }}
              </template>
            </td>
            <td class="py-2 px-4 border-b">
              <template v-if="editingUserId === user._id">
                <input v-model="editedUser.email" class="w-full p-2 border border-gray-300 rounded" disabled />
              </template>
              <template v-else>
                {{ user.email }}
              </template>
            </td>
            <td class="py-2 px-4 border-b">
              <template v-if="editingUserId === user._id">
                <button @click="saveUser" class="text-green-500 hover:underline mr-2">Save</button>
                <button @click="cancelEditing" class="text-red-500 hover:underline">Cancel</button>
              </template>
              <template v-else>
                <button @click="startEditing(user)" class="text-yellow-500 hover:underline mr-2">Edit</button>
                <button @click="deleteUser(user._id)" class="text-red-500 hover:underline">Delete</button>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">Tambah Pengguna Baru</h2>
        <form @submit.prevent="createUser">
          <div class="mb-4">
            <label class="block text-gray-700">Nama</label>
            <input
              type="text"
              v-model="newUser.name"
              class="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              v-model="newUser.email"
              class="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Kata Laluan</label>
            <input
              type="password"
              v-model="newUser.password"
              class="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Batal</button>
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Tambah</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>


