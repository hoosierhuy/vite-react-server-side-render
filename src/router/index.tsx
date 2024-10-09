import { Routes, Route } from 'react-router-dom'

import { About, ContactUs, Home } from '../pages'

import Error from '../components/Error'

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  )
}
