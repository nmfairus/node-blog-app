<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/partials/Nav.vue';
import Hero from './components/Hero.vue';
import Main from './components/Main.vue';
import Footer from './components/partials/Footer.vue';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isHomePage = computed(() => route.path === '/');

</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-100">
    <Navbar />
    <div class="flex-grow">
      <Hero v-if="isHomePage" />
      <router-view />
    </div>
    <Footer />
  </div>
</template>
