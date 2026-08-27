import { NavLink } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaWhatsapp, FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Reveal from "../components/Reveal";

const socials = [
  ["YouTube", "https://www.youtube.com/@abednegomorara3487", <FaYoutube />],
  ["Instagram", "https://www.instagram.com/m_kisii2/", <FaInstagram />],
  ["TikTok", "https://www.tiktok.com/@m_orara", <FaTiktok />],
  ["X", "https://x.com/Orondo12", <FaXTwitter />],
  ["LinkedIn", "https://www.linkedin.com/in/abednego-morara-b17a36191/", <FaLinkedin />],
];

function Contact() {
  return <main>
    <section className="page-hero contact-head"><Reveal><p className="eyebrow">CONTACT / 05</p><h1>Let's build<br /><span>something useful.</span></h1><p>Have an engineering challenge, a machine problem, a fabrication job or a digital idea? Start with a message.</p></Reveal></section>
    <section className="contact-section"><div className="contact-grid">
      <Reveal><a href="https://wa.me/254740967882" target="_blank" rel="noreferrer" className="contact-card edge-box"><div className="contact-icon whatsapp-icon"><FaWhatsapp /></div><span className="contact-label">FASTEST</span><h3>WhatsApp</h3><p>Quick questions, project discussions and consultation.</p><strong>+254 740 967 882 <FaArrowRight /></strong></a></Reveal>
      <Reveal delay={80}><a href="mailto:morara603@gmail.com" className="contact-card edge-box"><div className="contact-icon"><FaEnvelope /></div><span className="contact-label">EMAIL</span><h3>Email</h3><p>Send drawings, requirements or a detailed project brief.</p><strong>morara603@gmail.com <FaArrowRight /></strong></a></Reveal>
      <Reveal delay={160}><NavLink to="/booking" className="contact-card edge-box"><div className="contact-icon"><FaArrowRight /></div><span className="contact-label">STRUCTURED</span><h3>Book a Session</h3><p>Give me the details and request a consultation time.</p><strong>Open booking form <FaArrowRight /></strong></NavLink></Reveal>
    </div></section>

    <section className="social-section">
      <div className="section-intro"><Reveal><p className="eyebrow">FIND ME ONLINE / 06</p><h2>Follow the<br /><span>work in motion.</span></h2></Reveal><Reveal delay={100}><p className="intro-copy">Project updates, engineering work, fabrication and the things happening behind the finished result.</p></Reveal></div>
      <div className="social-grid">
        {socials.map(([name, url, icon], i) => <Reveal key={name} delay={i * 60}><a className="social-card edge-box" href={url} target="_blank" rel="noreferrer"><span className="social-icon">{icon}</span><span><small>{name}</small><strong>Open profile <FaArrowRight /></strong></span></a></Reveal>)}
      </div>
    </section>

    <section className="contact-cta edge-box"><Reveal><p className="eyebrow">THE NEXT MOVE</p><h2>Don't polish the idea forever.<br /><em>Let's test it.</em></h2><NavLink to="/booking" className="primary-button">Start a project <FaArrowRight /></NavLink></Reveal></section>
  </main>;
}
export default Contact;
