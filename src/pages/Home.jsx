import { NavLink } from "react-router-dom";
import { FaArrowRight, FaBolt, FaCogs, FaDraftingCompass, FaLaptopCode, FaPlay } from "react-icons/fa";
import Reveal from "../components/Reveal";
import EngineeringWeb from "../components/EngineeringWeb";
import RainbowCard from "../components/RainbowCard";

const capabilities = [
  {
    icon: <FaDraftingCompass />,
    number: "01",
    title: "Mechanical Design & CAD",
    text: "Mechanical design, CAD modelling and fabrication-ready engineering solutions built around real manufacturing requirements.",
    path: "/services/mechanical-design",
  },
  {
    icon: <FaBolt />,
    number: "02",
    title: "CNC Fabrication & Sheet Metal",
    text: "CNC laser cutting, sheet-metal fabrication, welding, bending and production support for practical engineering projects.",
    path: "/services/cnc-fabrication",
  },
  {
    icon: <FaCogs />,
    number: "03",
    title: "Machine Reliability & Maintenance",
    text: "Machine troubleshooting, servicing and maintenance support focused on reducing avoidable downtime and keeping equipment working.",
    path: "/services/machine-reliability",
  },
  {
    icon: <FaLaptopCode />,
    number: "04",
    title: "Digital Production Systems",
    text: "Production tracking, workflow tools, dashboards and responsive digital systems built around how real operations work.",
    path: "/services/digital-production-systems",
  },
];

function Home() {
  return (
    <main>
      <section className="hero">
        <EngineeringWeb />
        <div className="hero-grid-lines" />
        <div className="hero-content">
          <Reveal>
            <div className="availability"><span /> ENGINEERING • FABRICATION • DIGITAL SYSTEMS</div>
          </Reveal>
          <Reveal delay={80}>
            <h1>I build things that <em>work.</em></h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero-description">
  I'm Abednego Morara, a mechanical engineer and fabricator in Kenya working across mechanical design, CNC fabrication, machine reliability and digital production systems for practical projects in Kenya and internationally.
</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-buttons">
              <NavLink to="/projects" className="primary-button">Explore the work <FaArrowRight /></NavLink>
              <NavLink to="/booking" className="secondary-button"><FaPlay /> Start a conversation</NavLink>
            </div>
          </Reveal>
          <Reveal delay={290}>
            <div className="hero-metrics">
              <div><strong>CAD</strong><span>Design</span></div>
              <div><strong>CNC</strong><span>Fabrication</span></div>
              <div><strong>WEB</strong><span>Systems</span></div>
              <div><strong>∞</strong><span>Problem solving</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-portrait" delay={180}>
          <div className="portrait-frame">
            <img src="/images/abednego.jpeg" aalt="Abednego Morara, mechanical engineer and fabricator in Kenya" />
          </div>
        </Reveal>

        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="capability-strip">
        <div className="capability-strip-inner">
          {capabilities.map((item, i) => (
            <RainbowCard key={item.title} className="capability-strip-card">
              <div className="card-top"><span>{item.number}</span><div className="capability-icon">{item.icon}</div></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <NavLink to={item.path}>
  Explore this service <FaArrowRight />
</NavLink>
            </RainbowCard>
          ))}
        </div>
      </section>

      <section className="home-capabilities">
        <div className="section-intro">
          <Reveal><p className="eyebrow">CAPABILITIES / 01</p><h2>Different tools.<br /><span>One way of thinking.</span></h2></Reveal>
          <Reveal delay={100}><p className="intro-copy">I like problems that sit between disciplines. A machine problem might need a drawing. A production problem might need software. The best solution is usually the one that survives contact with reality.</p></Reveal>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((item, i) => <Reveal key={item.title} delay={i * 70}><RainbowCard className="capability-card"><div className="card-top"><span>{item.number}</span><div className="capability-icon">{item.icon}</div></div><h3>{item.title}</h3><p>{item.text}</p><NavLink to={item.path}>
  Explore this service <FaArrowRight />
</NavLink></RainbowCard></Reveal>)}
        </div>
      </section>

      <section className="home-work">
        <div className="section-intro work-intro">
          <Reveal><p className="eyebrow">SELECTED WORK / 02</p><h2>Built, not just <span>talked about.</span></h2></Reveal>
          <Reveal delay={100}><NavLink to="/projects" className="text-link">View the full archive <FaArrowRight /></NavLink></Reveal>
        </div>
        <Reveal className="featured-work edge-box">
          <div className="featured-work-image"><img src="/images/hydraulic-bending-machine-3.jpeg" alt="Hydraulic sheet-metal bending machine designed and fabricated by Abednego Morara" /><span className="image-badge">FEATURED / 01</span></div>
          <div className="featured-work-content"><p className="eyebrow">MECHANICAL FABRICATION</p><h3>Hydraulic Sheet-Metal<br />Bending Machine</h3><p>A practical machine built by combining a locally fabricated structure with sourced hydraulic and tooling components.</p><div className="spec-strip"><div><strong>1.2m</strong><span>Working length</span></div><div><strong>3mm</strong><span>Sheet capacity</span></div><div><strong>2×</strong><span>Hydraulic jacks</span></div></div><NavLink
  to="/projects/hydraulic-sheet-metal-bending-machine"
  className="outline-link"
>
  Inspect project <FaArrowRight />
</NavLink></div>
        </Reveal>
      </section>


      <section className="resource-showcase">
        <div className="section-intro">
          <Reveal><p className="eyebrow">IN THE WORKSHOP / 03</p><h2>Ideas become <span>real things.</span></h2></Reveal>
          <Reveal delay={100}><p className="intro-copy">A look at the kind of engineering, fabrication, CNC, automation and digital work that sits behind the finished result.</p></Reveal>
        </div>
        <div className="resource-grid">
          {[["resource-01.jpeg","Fabrication","Enclosure & sheet-metal work"],["resource-10.jpeg","CNC","Machining & production"],["resource-08.jpeg","Automation","Robotics & process work"],["resource-07.jpeg","Engineering","Machine design & reliability"],["resource-11.jpeg","Digital","Systems & security"],["resource-09.jpeg","Production","Press-brake & forming"]].map(([image,tag,title],i)=><Reveal key={image} delay={i*60}><article className="resource-card"><img
  src={`/images/${image}`}
  alt={`${title} by Abednego Morara`}
  loading="lazy"
/><div><span>{tag}</span><h3>{title}</h3></div></article></Reveal>)}
        </div>
      </section>

      <section className="home-cta edge-box">
        <div className="cta-glow" />
        <Reveal><p className="eyebrow">HAVE A HARD PROBLEM?</p><h2>Let's make the complicated<br /><em>look simple.</em></h2><p>Tell me what you're building, fixing or improving. We'll work backwards from the result.</p><NavLink to="/booking" className="primary-button">Start a project <FaArrowRight /></NavLink></Reveal>
      </section>
    </main>
  );
}
export default Home;
