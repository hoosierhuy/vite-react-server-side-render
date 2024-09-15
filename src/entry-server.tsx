// Libraries imports
import React from 'react'
import ReactDOMServer from 'react-dom/server' // Server-side rendering module from react-dom library.
// import StaticRouter library here

// App level imports
// import local Router file here

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>{/* Static Router goes here */}</React.StrictMode>
  )
  return { html }
}
