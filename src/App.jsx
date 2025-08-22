import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Partners from "./Pages/Partners";
import Services from "./Pages/Services";
import Resource from "./Pages/Resource";
import Contact from "./Pages/Contact";
import ServicePage from "./Pages/ServicePage";
import ResourcePage from "./Pages/ResourcePage";
import Quote from "./Pages/Quote";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BackToTop />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-partners" element={<Partners />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-services/:service" element={<ServicePage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/resource-center" element={<Resource />} />
          <Route path="/resource-center/:id" element={<ResourcePage />} />
          <Route path="/get-a-quote" element={<Quote />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
