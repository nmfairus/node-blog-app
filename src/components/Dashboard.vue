<template>
  <div class="flex h-[80vh] bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-lg p-6">
      <h2 class="text-2xl font-bold text-green-700 mb-8">Admin Panel</h2>
      <ul class="space-y-4">
        <li>
          <router-link
            to="#"
            class="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l-2-2m2 2V4a1 1 0 00-1-1h-3a1 1 0 00-1 1v10a1 1 0 001 1h3z" />
            </svg>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Pengguna</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Peranan</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Tetapan</span>
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 overflow-y-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <!-- Statistik Utama -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Card: Jumlah Pengguna -->
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center space-y-2">
          <span class="text-4xl font-bold text-green-600">{{ userCount }}</span>
          <p class="text-sm text-gray-600">Jumlah Pengguna</p>
        </div>

        <!-- Card: Jumlah Admin -->
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center space-y-2">
          <span class="text-4xl font-bold text-blue-600">{{ adminCount }}</span>
          <p class="text-sm text-gray-600">Jumlah Admin</p>
        </div>

        <!-- Card: Jumlah Aktiviti -->
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center space-y-2">
          <span class="text-4xl font-bold text-yellow-600">{{ activityCount }}</span>
          <p class="text-sm text-gray-600">Aktiviti Terkini</p>
        </div>

        <!-- Card: Jumlah Log Masuk -->
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center space-y-2">
          <span class="text-4xl font-bold text-red-600">{{ loginCount }}</span>
          <p class="text-sm text-gray-600">Log Masuk Hari Ini</p>
        </div>
      </div>

      <!-- Grafik Aktiviti -->
      <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Grafik Aktiviti Pengguna</h2>
        <canvas id="activityChart"></canvas>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

// Data Statistik
const userCount = ref(0);
const adminCount = ref(0);
const activityCount = ref(0);
const loginCount = ref(0);

// Fetch Data dari Backend
const fetchData = async () => {
  try {
    const [userResponse, adminResponse, activityResponse, loginResponse] = await Promise.all([
      axios.get('http://localhost:3000/users/count'),
      axios.get('http://localhost:3000/users/count'),
      axios.get('http://localhost:3000/users/count'),
      axios.get('http://localhost:3000/users/count')
    ]);

    userCount.value = userResponse.data.count;
    adminCount.value = adminResponse.data.count;
    activityCount.value = activityResponse.data.count;
    loginCount.value = loginResponse.data.count;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Render Grafik Aktiviti
const renderChart = () => {
  const ctx = document.getElementById('activityChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Aktiviti Pengguna',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      }
    }
  });
};

// Lifecycle Hook
onMounted(() => {
  fetchData();
  renderChart();
});
</script>

<style scoped>
/* Container */
.flex {
  display: flex;
}
.h-screen {
  height: 100vh;
}
.bg-gray-100 {
  background-color: #f3f4f6;
}

/* Sidebar */
.w-64 {
  width: 16rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.p-6 {
  padding: 1.5rem;
}

/* Text Styling */
.text-green-700 {
  color: #15803d;
}
.text-gray-700 {
  color: #374151;
}
.hover\:text-green-700:hover {
  color: #15803d;
}

/* Links */
.space-x-2 > * + * {
  margin-left: 0.5rem;
}
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Main Content */
.flex-1 {
  flex: 1 1 0%;
}
.overflow-y-auto {
  overflow-y: auto;
}

/* Cards */
.bg-white {
  background-color: #ffffff;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Responsive Grid */
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.md\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.lg\:grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

/* Spacing */
.mb-8 {
  margin-bottom: 2rem;
}
.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>