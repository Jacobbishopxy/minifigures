import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [react(), Pages()],
})
