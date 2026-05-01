import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import fs from 'node:fs'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const defaultPort = '5173'

function getSiteUrl() {
  const raw =
    process.env.VITE_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')

  if (!raw) {
    return `http://localhost:${defaultPort}`
  }

  if (/^https?:\/\//i.test(raw)) {
    return raw.replace(/\/+$/, '')
  }

  return `https://${raw.replace(/\/+$/, '')}`
}

function seoFilesPlugin() {
  return {
    name: 'seo-files',
    apply: 'build',
    writeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      const siteUrl = getSiteUrl()
      const pageUrl = new URL('/', siteUrl).toString()
      const imageUrl = new URL('/og-image.svg', siteUrl).toString()

      fs.writeFileSync(
        path.join(outDir, 'robots.txt'),
        `User-agent: *
Allow: /
Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}
`,
      )

      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      )

      fs.writeFileSync(
        path.join(outDir, 'site.webmanifest'),
        JSON.stringify(
          {
            name: 'Safwan Portfolio',
            short_name: 'Safwan',
            start_url: '/',
            scope: '/',
            display: 'standalone',
            background_color: '#020512',
            theme_color: '#020512',
            description:
              'Md. Safwan builds fast, conversion-focused MERN stack websites and web apps for e-commerce, restaurants, and EdTech brands.',
            icons: [
              {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'any maskable',
              },
            ],
            screenshots: [
              {
                src: imageUrl,
                sizes: '1200x630',
                type: 'image/svg+xml',
              },
            ],
          },
          null,
          2,
        ) + '\n',
      )
    },
  }
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
     seoFilesPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }

})
