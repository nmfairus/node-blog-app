// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    login(user, token) {
      this.user = user;
      this.token = token;

      // Simpan ke localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    },
    logout() {
      this.user = null;
      this.token = null;

      // Padam dari localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    initialize() {
      // Muat semula data dari localStorage semasa aplikasi dimulakan
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');

      if (user && token) {
        this.user = JSON.parse(user);
        this.token = token;
      }
    }
  }
});