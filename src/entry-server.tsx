// Libraries imports
import React from 'react'
import ReactDOMServer from 'react-dom/server' // Server-side rendering module from react-dom library.
import { StaticRouter } from 'react-router-dom/server'

// App level imports
import { Router } from './router'

interface IRenderProps {
  path: string
}

/**
  This file uses ReactDOMServer, imported above, to render the application on the server-side. This is useful for SEO purposes, as it allows search engines to crawl the application and index its content. This is potentially useful for performance, as it allows the application to render faster on the client-side.
 */
export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    // The renderToString method, is used to convert React components to an HTML string, which can be sent to the client for initial rendering.
    <React.StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </React.StrictMode>
  )
  return { html }
}
