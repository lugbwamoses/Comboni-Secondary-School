import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import heroBg from '../assets/hero.png';
import './Hero.css';

const Hero = () => {
  const { data } = useSite();
  const hero = data.settings.hero;
  const backgroundImage = hero.imageUrl || heroBg;

  return (
    <section 
      id="hero" 
      className="eduka-hero" 
      aria-labelledby="hero-heading"
      style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.90), rgba(15, 118, 110, 0.84)), url(${backgroundImage})` }}
    >
      <div className="container hero-inner">
        <header className="hero-text-block">
          <div className="hero-pill-badge" role="doc-subtitle">
            <Sparkles size={16} aria-hidden="true" />
            <span>{hero.badge}</span>
          </div>
          
          <h1 id="hero-heading" className="hero-main-heading">
            {hero.heading}
          </h1>
          
          <p className="hero-subtext">
            {hero.subheading}
          </p>

          <nav className="hero-cta-nav" aria-label="Hero Quick Links">
            <Link to={hero.primaryCtaLink || '/admissions'} className="btn-hero-primary">
              {hero.primaryCtaText} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to={hero.secondaryCtaLink || '/programmes'} className="btn-hero-outline">
              {hero.secondaryCtaText} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Hero;
