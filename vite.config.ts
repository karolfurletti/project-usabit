import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  plugins: [tsconfigPaths(), svgr(), react()],
}));
