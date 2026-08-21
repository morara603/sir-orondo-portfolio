import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Logo from "./components/Logo";
import BackToTop from "./components/BackToTop";
import Chatbot from "./components/Chatbot";
import FloatingCall from "./components/FloatingCall";
import Newsletter from "./components/Newsletter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="website">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Newsletter />
        <footer className="site-footer">
          <Logo footer />
          <div>Available for selected engineering, fabrication & digital projects</div>
          <strong>© {new Date().getFullYear()} Abednego Morara</strong>
          <a href="mailto:morara603@gmail.com">morara603@gmail.com</a>
        </footer>
        <BackToTop />
        <Chatbot />
        <FloatingCall />
      </div>
    </BrowserRouter>
  );
}
export default App;
