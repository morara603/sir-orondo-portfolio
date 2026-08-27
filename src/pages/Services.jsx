import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCode, FaCogs, FaDraftingCompass, FaTools } from "react-icons/fa";
import Reveal from "../components/Reveal";

const services = [
  [
    <FaDraftingCompass />,
    "Mechanical Design & CAD",
    "Mechanical design, 3D modelling and fabrication-ready drawings developed with real manufacturing requirements in mind.",
    "Quote on request",
    "mechanical-design"
  ],
  [
    <FaCogs />,
    "CNC Fabrication & Production",
    "CNC laser cutting, sheet-metal production, process troubleshooting and practical fabrication support.",
    "Quote on request",
    "cnc-fabrication"
  ],
  [
    <FaTools />,
    "Machine Reliability & Maintenance",
    "Mechanical troubleshooting, maintenance planning, servicing and hands-on support for workshop and production equipment.",
    "Quote on request",
    "machine-reliability"
  ],
  [
    <FaCode />,
    "Digital Production Systems",
    "Custom production tracking, operational tools, dashboards and responsive digital systems built around real workflows.",
    "Quote on request",
    "digital-production-systems"
  ],
];

function Services() {
  return <main>
    <section className="page-hero compact"><Reveal><p className="eyebrow">SERVICES / 04</p><h1>Engineering & Digital Services.<br /><span>Built for real problems.</span></h1><p>
  Mechanical engineering, fabrication, machine reliability and digital systems services in Kenya, with support available for international projects. If something needs designing, building, fixing or organising, let's start with the actual problem.
</p></Reveal></section>
    <section className="services-section"><div className="services-grid">{services.map(([icon,title,text,price,slug],i)=><Reveal key={title} delay={i*80}><article className="service-card edge-box"><div className="service-icon">{icon}</div><span className="service-no">0{i+1}</span><span className="service-price">{price}</span><h3>{title}</h3><p>{text}</p><NavLink to={`/services/${slug}`}>Explore service <FaArrowRight /></NavLink></article></Reveal>)}</div></section>
    <section className="services-cta edge-box"><Reveal><div><p className="eyebrow">NOT SEEING YOUR PROBLEM?</p><h2>Good. The interesting ones are usually <em>different.</em></h2><p>
  Tell me what you are trying to achieve, whether it's an engineering project, fabrication requirement, machine problem or digital system, and we can work out the right route.
</p></div><NavLink to="/booking" className="primary-button">Tell me about it <FaArrowRight /></NavLink></Reveal></section>
  </main>;
}
export default Services;
