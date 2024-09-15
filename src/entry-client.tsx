// Libraries imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// App level imports
import { Router } from './router'
import './index.css'

/**
  At a high level, this file is responsible for converting static HTML into dynamic content by attaching event handlers to html elements,(known as hydrating), enabling client-side interactivity for end-users.
 */
ReactDOM.hydrateRoot(
  // We call the hydrateRoot method from ReactDOM to attach event handlers to the static HTML content, it will also rehydrate the server-rendered HTML content to make it interactive, as end users interact with the app.
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
