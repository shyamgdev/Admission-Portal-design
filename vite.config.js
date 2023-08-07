import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        registration: resolve(__dirname, 'registration.html'),
        profile: resolve(__dirname, 'profile.html')
      }
    }
  }
});
