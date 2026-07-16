// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://1404.io',
  redirects: {
    '/agents': '/partnership',
    '/agents/executive-operations': '/partnership',
    '/agents/financial-intelligence': '/partnership',
    '/agents/business-development': '/partnership',
    '/agents/acquisitions': '/partnership',
    '/agents/exit-liquidity': '/partnership',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/analyst/') &&
        !page.includes('/demos') &&
        !page.includes('/brief-onboarding'),
    }),
  ],
  redirects: {
    '/privacy': '/legal/privacy',
    '/terms': '/legal/terms',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
