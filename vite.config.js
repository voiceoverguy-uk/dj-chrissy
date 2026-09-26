import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { readFile } from 'node:fs/promises'
import { pageSeo } from './src/seo/pages.js'
import { renderPageHtml } from './src/seo/html.js'

function seoDevRoutes() {
  return {
    name: 'seo-dev-routes',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const path = new URL(req.url, 'http://internal.invalid').pathname
        if (path.startsWith('/api/') || path.startsWith('/@') || path.startsWith('/__')) return next()
        if (['/about/', '/events/', '/contact/', '/projects/'].includes(path)) {
          res.statusCode = 308
          res.setHeader('Location', path === '/projects/' ? '/events' : path.slice(0, -1))
          res.end()
          return
        }
        if (!pageSeo[path] && !path.includes('.')) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('Not found')
          return
        }
        if (!pageSeo[path]) return next()
        try {
          const template = await readFile(new URL('./index.html', import.meta.url), 'utf8')
          const html = await server.transformIndexHtml(req.url, renderPageHtml(template, path))
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(html)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    seoDevRoutes(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/api': 'http://localhost:3001',
    },
    watch: {
      ignored: [
        '**/.local/**',
        '**/node_modules/**',
        '**/.git/**',
      ],
    },
  },
})
