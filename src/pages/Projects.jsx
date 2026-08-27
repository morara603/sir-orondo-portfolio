import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal";

const projects = [
  ["E-Water Meter Boxes", "SHEET METAL", "/images/project-meter.jpeg", "Meter box components developed around repeatable sheet-metal production and assembly.", "e-water-meter-boxes"],
  ["Consumer Boxes", "ELECTRICAL ENCLOSURE", "/images/project-consumer.jpeg", "CNC-cut and bent enclosure components designed for practical production.", "consumer-boxes"],
  ["Tent Fabrication", "STRUCTURAL FABRICATION", "/images/project-tent.jpeg", "Structural fabrication work translating drawings into repeatable physical assemblies.", "tent-fabrication"],
  ["Curved Axis Beam", "MECHANICAL DESIGN", "/images/project-beam.jpeg", "A specialised mechanical beam combining design thinking with fabrication realities.", "curved-axis-beam"],
  ["Real-Time Fabrication Tracker", "SOFTWARE / PRODUCTION", "/images/project-tracker.jpeg", "A production management system connecting jobs, people, material, stages and progress.", "real-time-fabrication-tracker"],
];

function Projects() {
  return <main>
    <section className="page-hero projects-head"><Reveal><p className="eyebrow">PROJECTS / 03</p><h1>Proof of<br /><span>the process.</span></h1><p>A selection of physical builds and digital systems. Each one starts with a problem and ends with something usable.</p></Reveal></section>
    <section className="projects-section">
      <Reveal className="featured-project edge-box"><div className="featured-image"><img src="/images/hydraulic-bending-machine-3.jpeg" alt="Hydraulic sheet-metal bending machine" /><div className="image-badge">FEATURED PROJECT</div></div><div className="featured-content"><p className="eyebrow">01 / MECHANICAL FABRICATION</p><h2>Hydraulic Sheet-Metal Bending Machine</h2><p>Designed and fabricated a functional bending machine with a locally fabricated frame and sourced hydraulic, tank, pump, punch and die components.</p><div className="project-specs"><div><strong>1.2 m</strong><span>Maximum bend length</span></div><div><strong>3 mm</strong><span>Sheet thickness</span></div><div><strong>2</strong><span>Hydraulic jacks</span></div><div><strong>1 set</strong><span>Punch & die</span></div></div><div className="project-tags"><span>Mechanical Design</span><span>Hydraulics</span><span>Fabrication</span><span>Sheet Metal</span></div></div></Reveal>
      <div className="projects-grid">{projects.map(([title,category,img,text,slug],i)=><Reveal key={title} delay={i*60}><article className={`project-card edge-box ${i===4?"project-card-wide":""}`}><div className="project-image"><img src={img} alt={title} /><span className="project-number">0{i+2}</span></div><div className="project-info"><span>{category}</span><h3>{title}</h3><p>{text}</p><NavLink to={`/projects/${slug}`} aria-label={`View ${title} project`} className="project-detail-link">View project <FaArrowRight /></NavLink></div></article></Reveal>)}</div>
      <Reveal className="tracker-flow"><div className="flow-head"><div><p className="eyebrow">SYSTEM THINKING</p><h3>Making production visible.</h3></div><p>The production tracker turns a workshop process into a connected flow: every job has an owner, a stage, a quantity and a visible next move.</p></div><div className="flow-steps">{["Job", "Material", "Production", "Progress", "Release"].map((x,i)=><div className="flow-step" key={x}><b>0{i+1}</b><strong>{x}</strong><span>{["Define the work", "Issue what is needed", "Build the parts", "Measure completion", "Check & close"][i]}</span></div>)}</div></Reveal>
    </section>
    <section className="home-cta compact-cta"><Reveal><p className="eyebrow">NEXT BUILD?</p><h2>Maybe yours is<br /><em>next.</em></h2><NavLink to="/booking" className="primary-button">Let's talk <FaArrowRight /></NavLink></Reveal></section>
  </main>;
}
export default Projects;
