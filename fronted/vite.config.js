import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { config } from 'dotenv';
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {  
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['vishal-coder.onrender.com'], // Add the allowed host
  },
  define: {
    'process.env': process.env
  }
})