import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* GitHub Pages has no server-side rewrite, so a direct hit on /projects or a
   refresh there would 404. Pages serves 404.html for any unmatched path, so
   shipping a copy of index.html under that name hands the request to the
   router with the URL intact. */
function spaFallback() {
    return {
        name: 'spa-fallback-404',
        closeBundle() {
            const dist = resolve(__dirname, 'dist');
            copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
        },
    };
}

// User site (noahdelv.github.io) is served from the domain root, so base is '/'.
export default defineConfig({
    plugins: [react(), spaFallback()],
    build: {
        outDir: 'dist',
        assetsInlineLimit: 0,
    },
});
