import { StrictMode } from 'react';
import ReactDOMServer, { renderToString } from 'react-dom/server'; // Server-side rendering module from react-dom library.
import { StaticRouter } from 'react-router';
import Error from './components/Error';
import { IRenderProps } from './entry-server.types';
import { Router } from './router';

/**
  This file uses ReactDOMServer, imported above, to render the application on the server-side. This is useful for SEO purposes, as it allows search engines to crawl the application and index its content. This is potentially useful for performance, as it allows the application to render faster on the client-side.
 */

export function render({ path, statusCode }: IRenderProps) {
  if (statusCode) {
    return ReactDOMServer.renderToString(<Error statusCode={statusCode} />)
  }

  // The renderToString method, is used to convert React components to an HTML string, which can be sent to the client for initial rendering.
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </StrictMode>
  )
  return { html }
}
