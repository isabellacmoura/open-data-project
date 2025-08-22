import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  if (mode === 'widget') {
    return {
      plugins: [
        tailwindcss(),
        svelte({
          compilerOptions: {
            runes: false,
            legacy: {
              componentApi: true
            }
          }
        })
      ],
      resolve: {
        alias: {
          $lib: resolve(__dirname, 'src/lib')
        }
      },
      build: {
        lib: {
          entry: 'src/lib/index.js',
          name: 'MunicipiosWidget',
          fileName: 'municipios-widget',
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: [], // Bundles d3 and papaparse
          output: {
            globals: {}
          }
        }
      }
    };
  }
  return {
    plugins: [tailwindcss(), sveltekit()],
    resolve: {
      alias: {
        $lib: resolve(__dirname, 'src/lib')
      }
    }
  };
});
