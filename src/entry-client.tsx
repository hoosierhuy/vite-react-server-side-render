// Libraries imports
import React from 'react'
import ReactDOM from 'react-dom/client'
// import BrowserRouter library here

// App level imports
// import Router setup file here
import './index.css'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>{/* <Router /> goes here */}</React.StrictMode>
)
