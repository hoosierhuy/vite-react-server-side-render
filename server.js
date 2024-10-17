import fs from 'node:fs/promises' // NodeJS async file system module, 'interact' static files
import express from 'express' // Express is NodeJS library for building api

/**
  This file is used to set up a NodeJS Express server to handle SSR for our React application. It dynamically selects the appropriate SSR render function and template based on the environment (development or production) and serves the rendered HTML to clients upon request.

  The server is set up to serve the client-side assets in production and use Vite's middleware in development. The server also reads the SSR manifest file in production to determine the appropriate render function to use.
 */

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })
  app.use(vite.middlewares)

  app.use(async (req, res, next) => {
    try {
      // Custom middleware logic
      next()
    } catch (error) {
      const statusCode = error.status || 500
      const html = await vite.transformIndexHtml(
        req.url,
        `<h1>${statusCode} Error</h1>`
      )
      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(html)
    }
  })
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML
// "*home" is Express 5.x syntax for matching all routes
app.use('*all', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
