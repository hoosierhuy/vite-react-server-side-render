import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { cjsInterop } from 'vite-plugin-cjs-interop'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /**
     * https://vike.dev/broken-npm-package#workaround
     * Work around for:
     * SyntaxError: [vite] Named export 'ClockLoader' not found.
     * The requested module 'react-spinners' is a CommonJS module,
     * which may not support all module.exports as named exports.
     */
    cjsInterop({
      dependencies: ['react-spinners'],
    }),
  ],
})
