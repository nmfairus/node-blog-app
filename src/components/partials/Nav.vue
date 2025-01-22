<template>
  <!-- Navbar -->
  <nav class="bg-green-700 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-white text-2xl font-bold">
        <img alt="Vue logo" class="logo" src="../../assets/logo.svg" width="45" height="45" />
      </a>
      <div class="hidden md:flex space-x-4">
        <router-link to="/" class="text-white hover:text-gray-200">Home</router-link>
        <router-link to="/about" class="text-white hover:text-gray-200">About Me</router-link>
        <router-link to="/users" class="text-white hover:text-gray-200">Users</router-link>
        <router-link to="/login" class="text-white hover:text-gray-200">Login</router-link>
        <a href="#" class="text-white hover:text-gray-200">Contact</a>
      </div>
      <button class="md:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</template>