import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import WhatWeOffer from "./Pages/WhatWeOffer";
import Trainers from "./Pages/Trainers";
function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/trainers" element={<Trainers />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;