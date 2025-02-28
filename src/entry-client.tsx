import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import { Router } from './router'

/**
  At a high level, this file is responsible for converting static HTML into dynamic content by attaching event handlers to html elements,(known as hydrating), enabling client-side interactivity for end-users.
 */
hydrateRoot(
  // We call the hydrateRoot method from ReactDOM to attach event handlers to the static HTML content, it will also rehydrate the server-rendered HTML content to make it interactive, as end users interact with the app.
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
