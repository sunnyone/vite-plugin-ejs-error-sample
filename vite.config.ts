import { defineConfig } from 'vite'
import path from 'path'
import {ViteEjsPlugin} from 'vite-plugin-ejs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteEjsPlugin({title: "ABC"})],
})
