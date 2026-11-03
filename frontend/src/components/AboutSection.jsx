import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, PhoneCall, ArrowRight } from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './AboutSection.css';

const AboutSection = () => {
  const { data } = useSite();
  const phoneConfigured = data.settings.primaryPhone && !data.settings.primaryPhone.startsWith('[');

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container about-layout">
        
        {/* Left Visual Collage */}
        <figure className="about-visuals" aria-label="Illustrative images of school life">
          <div className="collage-tall-col">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80" 
              alt="Students collaborating in a classroom (illustrative image)" 
              className="collage-img tall-img"
              loading="lazy"
            />
          </div>
          <div className="collage-stack-col">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" 
              alt="Students learning together (illustrative image)" 
              className="collage-img small-img"
              loading="lazy"
            />
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
              alt="Students studying (illustrative image)" 
              className="collage-img small-img"
              loading="lazy"
            />
            <div className="experience-badge" aria-label="School life and learning">
              <span className="exp-number">School</span>
              <span className="exp-label">Life and learning</span>
            </div>
          </div>
          <figcaption className="sr-only">Illustrative images of students learning together</figcaption>
        </figure>

        {/* Right Article Content */}
        <article className="about-article">
          <header className="about-header">
            <span className="section-eyebrow">ABOUT US</span>
            <h2 id="about-title" className="section-heading">
              A school founded for learning and formation.
            </h2>
          </header>

          <p className="about-lead">
            Established in 1981 by the Comboni Missionaries, St. Daniel Comboni Secondary School is a Catholic Archdiocese of Juba institution of learning.
          </p>

          <ul className="about-feature-points" role="list">
            <li className="feature-item">
              <div className="feature-item-icon">
                <GraduationCap size={22} aria-hidden="true" />
              </div>
              <div className="feature-item-body">
                <h4>Academic and Vocational Skills</h4>
                <p>The school was founded to empower Sudanese people with academic and vocational skills.</p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-item-icon">
                <Globe size={22} aria-hidden="true" />
              </div>
              <div className="feature-item-body">
                <h4>Integral Formation</h4>
                <p>The school’s vision is integral development and formation through formal and informal education.</p>
              </div>
            </li>
          </ul>

          <p className="about-lead">The Comboni Missionaries later handed administration to the Catholic Archdiocese of Juba after departing Juba during the liberation struggle.</p>

          <footer className="about-footer-row">
            <Link to="/about" className="btn-hero-primary">
              Discover More <ArrowRight size={16} aria-hidden="true" />
            </Link>

            {phoneConfigured && <address className="contact-quick-pill">
              <div className="pill-icon-circle">
                <PhoneCall size={18} aria-hidden="true" />
              </div>
              <div className="pill-contact-details">
                <span className="pill-subtext">Call Inquiries</span>
                <a href={`tel:${data.settings.primaryPhone}`} className="pill-tel-link">{data.settings.primaryPhone}</a>
              </div>
            </address>}
          </footer>
        </article>

      </div>
    </section>
  );
};

export default AboutSection;

