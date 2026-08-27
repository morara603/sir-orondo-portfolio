import { NavLink, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { PROJECT_PAGES } from '../data/seoContent';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECT_PAGES[slug];
  if (!project) return <main className="not-found"><h1>Project not found.</h1><NavLink to="/projects">View projects</NavLink></main>;
  return <main>
    <SEO title={project.title} description={project.description} path={`/projects/${slug}`} image={project.image} type="article" />
    <section className="page-hero detail-hero"><Reveal><p className="eyebrow">{project.category}</p><h1>{project.heading.split('\n').map((x,i)=><span key={x}>{i ? <><br />{x}</> : x}</span>)}</h1><p>{project.intro}</p></Reveal><Reveal delay={100} className="page-hero-image"><img src={project.image} alt={project.alt} /></Reveal></section>
    <section className="detail-section"><Reveal><div className="project-detail-body"><p className="eyebrow">THE BUILD</p><p className="lead-copy">{project.body}</p></div></Reveal><div className="project-detail-specs">{project.details.map(([value,label])=><Reveal key={label}><div className="detail-stat"><strong>{value}</strong><span>{label}</span></div></Reveal>)}</div><Reveal><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></Reveal></section>
    <section className="detail-cta edge-box"><Reveal><p className="eyebrow">HAVE A SIMILAR PROBLEM?</p><h2>Let's turn the idea<br /><em>into something usable.</em></h2><NavLink to="/booking" className="primary-button">Start a project <FaArrowRight /></NavLink></Reveal></section>
  </main>;
}
