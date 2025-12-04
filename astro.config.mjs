// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sparkhost.ie',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        // Exclude backup pages and any internal/test pages
        !page.includes('backup') &&
        !page.includes('test'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Customise priority for key pages
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://sparkhost.ie/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Main service/pricing pages
        else if (
          item.url.includes('/services') ||
          item.url.includes('/pricing')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Blog posts
        else if (item.url.includes('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Legal pages
        else if (
          item.url.includes('/privacy') ||
          item.url.includes('/terms') ||
          item.url.includes('/gdpr') ||
          item.url.includes('/cookies')
        ) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize chunk sizes for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate OGL library (WebGL) for lazy loading
            'ogl': ['ogl'],
            // React core
            'react-vendor': ['react', 'react-dom']
          }
        }
      },
      // Use esbuild for minification (faster, built-in)
      minify: 'esbuild'
    }
  }
});
