import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // This is to avoid CORS error when we make api calls from frontend to backend.
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
