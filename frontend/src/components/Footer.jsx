import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Mail, Phone, Share
} from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { defaultSchoolAddress } from '../data/siteData.js';
import logo from '../assets/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const { data } = useSite();
  const { settings } = data;
  const currentYear = new Date().getFullYear();
  const schoolAddress = settings.address && !settings.address.startsWith('[') ? settings.address : defaultSchoolAddress;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-content-grid">
        
        {/* Column 1: School Identity & Address */}
        <div className="footer-col brand-col">
          <div className="footer-brand-header">
            <img src={logo} alt="St. Daniel Comboni Crest" className="footer-logo-img" />
            <div>
              <span className="footer-brand-title">St. Daniel Comboni</span>
              <span className="footer-brand-sub">Secondary School</span>
            </div>
          </div>
          
          <p className="footer-mission-text">
            Official information and school updates. Contact and social details will appear here after verification.
          </p>

          <address className="footer-contact-address">
            <div className="contact-line">
              <MapPin size={16} aria-hidden="true" />
              <span>{schoolAddress}</span>
            </div>
            <div className="contact-line">
              <Mail size={16} aria-hidden="true" />
              {settings.primaryEmail && !settings.primaryEmail.startsWith('[') ? <a href={`mailto:${settings.primaryEmail}`}>{settings.primaryEmail}</a> : <span>[Official email address]</span>}
            </div>
            <div className="contact-line">
              <Phone size={16} aria-hidden="true" />
              {settings.primaryPhone && !settings.primaryPhone.startsWith('[') ? <a href={`tel:${settings.primaryPhone}`}>{settings.primaryPhone}</a> : <span>[Official phone number]</span>}
            </div>
          </address>

          {Object.entries(settings.socialLinks || {}).some(([, url]) => url) && (
            <nav className="footer-social-nav" aria-label="School social media channels">
              {Object.entries(settings.socialLinks).filter(([, url]) => url).map(([network, url]) => (
                <a key={network} href={url} aria-label={network} target="_blank" rel="noreferrer">
                  <Share size={16} />
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Column 2: Quick Links */}
        <nav className="footer-col" aria-label="Footer Quick Links">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links-list" role="list">
            <li><Link to="/about">About the School</Link></li>
            <li><Link to="/admissions">Admissions &amp; Requirements</Link></li>
            <li><Link to="/programmes">Academic Programmes</Link></li>
            <li><Link to="/staff">Staff Directory</Link></li>
            <li><Link to="/events">School Events</Link></li>
            <li><Link to="/news">News &amp; Announcements</Link></li>
          </ul>
        </nav>

        {/* Column 3: Academic Pathways */}
        <nav className="footer-col" aria-label="Academic Departments">
          <h3 className="footer-col-title">Academic Streams</h3>
          <ul className="footer-links-list" role="list">
            <li><Link to="/programmes">Programme Directory</Link></li>
            <li><Link to="/faculties">Faculties</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
          </ul>
        </nav>

        {/* Column 4: Newsletter */}
        <section className="footer-col newsletter-col" aria-labelledby="footer-newsletter-title">
          <h3 id="footer-newsletter-title" className="footer-col-title">Stay Informed</h3>
          <p className="newsletter-desc">Newsletter subscriptions will be available when an official mailing service is configured.</p>

          {settings.tagline && <div className="motto-callout"><span>School motto:</span> {settings.tagline}</div>}
        </section>

      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <small className="copyright-notice">
            &copy; {currentYear} St. Daniel Comboni Secondary School. All rights reserved.
          </small>
          <nav className="legal-nav" aria-label="Legal links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/portal">Student Portal</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
