import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',

      manifest: {
        name: 'Prioriterings-App',
        short_name: 'PA',
        description: 'En liten app for å tenke igjennom valg i hverdagen',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/pwa-test.svg',
            sizes: '192x192',
            type: 'image/svg'
          },
          {
            src: '/icons/pwa-test.svg',
            sizes: '512x512',
            type: 'image/svg'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}']
      }

     })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
