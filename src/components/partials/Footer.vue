<template>
  <footer class="bg-gradient-to-r from-green-600 to-green-800 text-white py-4">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        &copy; {{ currentYear }} Sistem Maklumat Intranet. Hak Cipta Terpelihara.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Dapatkan tahun semasa secara automatik
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, #10b981, #047857);
}

/* Padding */
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Text Styling */
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

/* Center Alignment */
.text-center {
  text-align: center;
}
</style>