import { FaCode, FaCogs, FaDraftingCompass, FaHammer, FaLayerGroup, FaTools } from "react-icons/fa";
import Reveal from "../components/Reveal";

const skills = [
  ["Mechanical Design", "CAD, 3D modelling, assemblies and fabrication-ready thinking.", <FaDraftingCompass />],
  ["CNC Laser Cutting", "Fiber laser setup, parameters, nesting and production support.", <FaCogs />],
  ["Welding & Fabrication", "Sheet metal, bending, fitting, welding and workshop execution.", <FaHammer />],
  ["Machine Reliability", "Mechanical troubleshooting, servicing and maintenance thinking.", <FaTools />],
  ["Production Systems", "Workflow, material movement, job tracking and process visibility.", <FaLayerGroup />],
  ["Web Development", "Responsive interfaces and custom tools for technical operations.", <FaCode />],
];

function Skills() {
  return <main>
    <section className="page-hero compact"><Reveal><p className="eyebrow">CAPABILITIES / 02</p><h1>A toolkit for<br /><span>real problems.</span></h1><p>Not a list of buzzwords. These are the areas where I like getting my hands dirty — literally or digitally.</p></Reveal></section>
    <section className="skills-section"><div className="skills-grid">{skills.map(([title,text,icon],i)=><Reveal key={title} delay={i*60}><article className={`skill-card edge-box ${i===0?"featured-skill":""}`}><div className="skill-index">0{i+1}</div><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{text}</p><div className="skill-line"><span /></div></article></Reveal>)}</div></section>
  </main>;
}
export default Skills;
