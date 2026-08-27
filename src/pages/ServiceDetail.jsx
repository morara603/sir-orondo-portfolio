import { NavLink, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { SERVICE_PAGES } from '../data/seoContent';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_PAGES[slug];
  if (!service) return <main className="not-found"><h1>Service not found.</h1><NavLink to="/services">View services</NavLink></main>;
  return <main>
    <SEO title={service.title} description={service.description} path={`/services/${slug}`} image={service.image} type="article" />
    <section className="page-hero detail-hero"><Reveal><p className="eyebrow">{service.eyebrow}</p><h1>{service.heading.split('\n').map((x,i)=><span key={x}>{i ? <><br />{x}</> : x}</span>)}</h1><p>{service.intro}</p></Reveal><Reveal delay={100} className="page-hero-image"><img src={service.image} alt={service.alt} /></Reveal></section>
    <section className="detail-section"><div className="section-intro"><Reveal><p className="eyebrow">WHAT I CAN HELP WITH</p><h2>Practical expertise.<br /><span>Built around the problem.</span></h2></Reveal></div><div className="detail-grid">{service.sections.map(([title,text],i)=><Reveal key={title} delay={i*70}><article className="detail-card edge-box"><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Reveal><div className="tag-list">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div></Reveal></section>
    <section className="detail-cta edge-box"><Reveal><p className="eyebrow">READY TO DISCUSS IT?</p><h2>Bring me the problem.<br /><em>We'll find the route.</em></h2><NavLink to="/booking" className="primary-button">Book a consultation <FaArrowRight /></NavLink></Reveal></section>
  </main>;
}
