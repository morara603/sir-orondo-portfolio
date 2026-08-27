import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Logo from "./components/Logo";
import BackToTop from "./components/BackToTop";
import Chatbot from "./components/Chatbot";
import FloatingCall from "./components/FloatingCall";
import Newsletter from "./components/Newsletter";
import SEO from "./components/SEO";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="website">
        <Navbar />
        <Routes>
          <Route path="/" element={<><SEO page="home" path="/" /><Home /></>} />
          <Route path="/about" element={<><SEO page="about" path="/about" /><About /></>} />
          <Route path="/skills" element={<><SEO page="skills" path="/skills" /><Skills /></>} />
          <Route path="/projects" element={<><SEO page="projects" path="/projects" image="/images/hydraulic-bending-machine-3.jpeg" /><Projects /></>} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<><SEO page="services" path="/services" /><Services /></>} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/booking" element={<><SEO page="booking" path="/booking" /><Booking /></>} />
          <Route path="/contact" element={<><SEO page="contact" path="/contact" /><Contact /></>} />
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
