import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // allows LAN access (important for phone access)
    port: 5173,         // optional, default is 5173
    strictPort: true,   // fail if port is already in use
  },
  json: {
    namedExports: true, // enable named exports for JSON files
    stringify: false,    // stringify JSON files
  },
})
