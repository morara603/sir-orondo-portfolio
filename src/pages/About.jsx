import { FaArrowRight, FaCompass, FaLightbulb, FaTools, FaWrench } from "react-icons/fa";
import Reveal from "../components/Reveal";

const process = [
  ["01", "Understand", "Strip the problem down to the actual requirement, constraints and failure points.", <FaCompass />],
  ["02", "Design", "Choose the simplest robust concept and work through how it will really be made.", <FaLightbulb />],
  ["03", "Build", "Turn drawings and decisions into physical work, code or a working process.", <FaTools />],
  ["04", "Improve", "Measure what happened, remove friction and leave the solution better than I found it.", <FaWrench />],
];

function About() {
  return <main>
    <section className="page-hero">
      <div><Reveal><p className="eyebrow">ABOUT / 01</p><h1>Mechanical Engineer<br /><span>& Builder in Kenya.</span></h1><p>
  I'm Abednego Morara, a mechanical engineer and builder in Kenya working across mechanical design, CNC fabrication, machine reliability, production systems and digital technology.
</p></Reveal></div>
      <Reveal delay={120} className="page-hero-image"><img src="/images/hydraulic-bending-machine-2.jpeg" alt="Hydraulic sheet-metal bending machine fabrication work" /></Reveal>
    </section>

    <section className="about-section">
      <div className="about-content">
        <Reveal><p className="eyebrow">THE SHORT VERSION</p><h2>Mechanical engineer by training.<br /><span>Builder by instinct.</span></h2></Reveal>
        <Reveal delay={100} className="about-text"><p>
  My work has grown around a simple question: <strong>how do we make this actually work?</strong> That question drives how I approach engineering projects, fabrication work and digital systems.
</p><p>That has taken me through mechanical design, CNC laser cutting, sheet-metal fabrication, welding, machine maintenance and production processes — and into web development when I realised that information itself can become a bottleneck.</p><p>I don't see these as separate worlds. They are different tools for solving the same kind of problem: understand it, build the right thing, test it and improve it.</p></Reveal>
      </div>
      <div className="about-stats">
        {["Mechanical Design", "CNC & Fabrication", "Machines & Reliability", "Digital Systems"].map((x,i)=><Reveal key={x} delay={i*70}><div className="stat edge-box"><span>0{i+1}</span><strong>{x}</strong><small>Practical capability</small></div></Reveal>)}
      </div>
    </section>

    <section className="process-section"><div className="section-intro"><Reveal><p className="eyebrow">MY METHOD / 02</p><h2>Think. Build.<br /><span>Improve.</span></h2></Reveal></div><div className="process-grid">{process.map(([n,t,d,icon],i)=><Reveal key={n} delay={i*90}><article className="process-card edge-box"><div className="process-number">{n}</div><div className="process-icon">{icon}</div><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></section>
  </main>;
}
export default About;
