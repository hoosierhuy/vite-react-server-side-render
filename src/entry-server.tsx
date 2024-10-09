// Libraries imports
import React from 'react'
import ReactDOMServer from 'react-dom/server' // Server-side rendering module from react-dom library.
import { StaticRouter } from 'react-router-dom/server'

// App level imports
import { Router } from './router'
import Error, { ErrorProps } from './components/Error'

/**
  This file uses ReactDOMServer, imported above, to render the application on the server-side. This is useful for SEO purposes, as it allows search engines to crawl the application and index its content. This is potentially useful for performance, as it allows the application to render faster on the client-side.
 */

interface IRenderProps extends ErrorProps {
  path: string
  statusCode?: number
}

export function render({ path, statusCode }: IRenderProps) {
  if (statusCode) {
    return ReactDOMServer.renderToString(<Error statusCode={statusCode} />)
  }

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
