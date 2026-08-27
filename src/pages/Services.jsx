import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCode, FaCogs, FaDraftingCompass, FaTools } from "react-icons/fa";
import Reveal from "../components/Reveal";

const services = [
  [<FaDraftingCompass />, "CAD & Mechanical Design", "Concept development, 3D modelling and fabrication-ready drawings with manufacturing in mind.", "Quote on request", "mechanical-design"],
  [<FaCogs />, "CNC & Production Support", "Laser cutting, process troubleshooting, nesting, production support and practical workshop problem solving.", "Quote on request", "cnc-fabrication"],
  [<FaTools />, "Machine Servicing & Repair", "Mechanical troubleshooting, maintenance planning and hands-on support for workshop equipment.", "Quote on request", "machine-reliability"],
  [<FaCode />, "Web & Digital Systems", "Responsive websites and custom operational tools that make information easier to use and decisions easier to make.", "Quote on request", "digital-production-systems"],
];

function Services() {
  return <main>
    <section className="page-hero compact"><Reveal><p className="eyebrow">SERVICES / 04</p><h1>Useful expertise.<br /><span>Zero theatre.</span></h1><p>If something needs designing, building, fixing or organising, let's start with the actual problem — not a package.</p></Reveal></section>
    <section className="services-section"><div className="services-grid">{services.map(([icon,title,text,price,slug],i)=><Reveal key={title} delay={i*80}><article className="service-card edge-box"><div className="service-icon">{icon}</div><span className="service-no">0{i+1}</span><span className="service-price">{price}</span><h3>{title}</h3><p>{text}</p><NavLink to={`/services/${slug}`}>Explore service <FaArrowRight /></NavLink></article></Reveal>)}</div></section>
    <section className="services-cta edge-box"><Reveal><div><p className="eyebrow">NOT SEEING YOUR PROBLEM?</p><h2>Good. The interesting ones are usually <em>different.</em></h2><p>Describe what you are trying to achieve and we can work out the right route.</p></div><NavLink to="/booking" className="primary-button">Tell me about it <FaArrowRight /></NavLink></Reveal></section>
  </main>;
}
export default Services;
