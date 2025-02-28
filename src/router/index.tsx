import { Route, Routes } from "react-router";

import Error from '../components/Error';
import { About } from "../pages/about/About";
import { ContactUs } from "../pages/contactUs/ContactUs";
import { Home } from "../pages/home/Home";

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
