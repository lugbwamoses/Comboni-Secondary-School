import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { 
  Phone, Mail, MapPin, Search, ChevronDown, Menu, X, 
  LogIn, ArrowRight, ShieldCheck 
} from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { data, openSearch } = useSite();
  const { settings } = data;

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="site-header" role="banner">
      {/* 1. Secondary Utility Bar */}
      <div className="top-utility-bar">
        <div className="container utility-container">
          <div className="utility-left">
            <span className="utility-item">
              <MapPin size={13} className="utility-icon" aria-hidden="true" />
              <span>{settings.location}</span>
            </span>
            {settings.primaryPhone && !settings.primaryPhone.startsWith('[') && (
              <span className="utility-item">
                <Phone size={13} className="utility-icon" aria-hidden="true" />
                <a href={`tel:${settings.primaryPhone}`}>{settings.primaryPhone}</a>
              </span>
            )}
            {settings.primaryEmail && !settings.primaryEmail.startsWith('[') && (
              <span className="utility-item hide-mobile">
                <Mail size={13} className="utility-icon" aria-hidden="true" />
                <a href={`mailto:${settings.primaryEmail}`}>{settings.primaryEmail}</a>
              </span>
            )}
          </div>

          <div className="utility-right">
            <nav className="utility-quick-nav" aria-label="Utility Quick Links">
              <Link to="/admissions" className="util-link">Admissions</Link>
              <Link to="/downloads" className="util-link">Downloads</Link>
              <Link to="/staff" className="util-link">Staff Directory</Link>
              <Link to="/admin" className="util-link admin-pill">
                <ShieldCheck size={13} /> Admin Demo
              </Link>
              <Link to="/portal" className="portal-badge-link">
                <LogIn size={13} /> Student Portal
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="container nav-bar-container">
          
          {/* Logo & Identity */}
          <Link to="/" className="site-brand" onClick={closeMobile}>
            <img src={logo} alt="St. Daniel Comboni Secondary School Crest" className="school-crest-img" />
            <div className="brand-titles">
              <span className="school-main-name">St. Daniel Comboni</span>
              <span className="school-sub-name">Secondary School &bull; Juba</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="main-navigation" className={`main-nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main institutional navigation">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMobile}>
              Home
            </Link>

            {/* About Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button" 
                className={`dropdown-btn ${isActive('/about') ? 'active' : ''}`}
                onClick={() => toggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
              >
                About <ChevronDown size={14} className="chevron" aria-hidden="true" />
              </button>
              {activeDropdown === 'about' && (
                <div className="dropdown-panel">
                  <Link to="/about" onClick={closeMobile}>Overview &amp; History</Link>
                  <Link to="/about#mission" onClick={closeMobile}>Vision, Mission &amp; Values</Link>
                  <Link to="/about/leadership" onClick={closeMobile}>School Leadership</Link>
                  <Link to="/about#governance" onClick={closeMobile}>Governance &amp; Board</Link>
                </div>
              )}
            </div>

            {/* Admissions Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setActiveDropdown('admissions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button" 
                className={`dropdown-btn ${isActive('/admissions') ? 'active' : ''}`}
                onClick={() => toggleDropdown('admissions')}
                aria-expanded={activeDropdown === 'admissions'}
              >
                Admissions <ChevronDown size={14} className="chevron" aria-hidden="true" />
              </button>
              {activeDropdown === 'admissions' && (
                <div className="dropdown-panel">
                  <Link to="/admissions" onClick={closeMobile}>Admissions Overview</Link>
                  <Link to="/admissions#process" onClick={closeMobile}>Application Process</Link>
                  <Link to="/admissions#requirements" onClick={closeMobile}>Entry Requirements</Link>
                  <Link to="/admissions#tuition" onClick={closeMobile}>Tuition &amp; Fees</Link>
                  <Link to="/admissions#scholarships" onClick={closeMobile}>Scholarships &amp; Bursaries</Link>
                  <Link to="/admissions#faqs" onClick={closeMobile}>Admissions FAQs</Link>
                </div>
              )}
            </div>

            <Link to="/programmes" className={`nav-link ${isActive('/programmes') ? 'active' : ''}`} onClick={closeMobile}>
              Programmes
            </Link>

            <Link to="/faculties" className={`nav-link ${isActive('/faculties') ? 'active' : ''}`} onClick={closeMobile}>
              Faculties
            </Link>

            <Link to="/departments" className={`nav-link ${isActive('/departments') ? 'active' : ''}`} onClick={closeMobile}>
              Departments
            </Link>

            <Link to="/research" className={`nav-link ${isActive('/research') ? 'active' : ''}`} onClick={closeMobile}>
              Research
            </Link>

            <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`} onClick={closeMobile}>
              News
            </Link>

            <Link to="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`} onClick={closeMobile}>
              Events
            </Link>

            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={closeMobile}>
              Gallery
            </Link>

            <Link to="/downloads" className={`nav-link ${isActive('/downloads') ? 'active' : ''}`} onClick={closeMobile}>
              Downloads
            </Link>

            <Link to="/staff" className={`nav-link ${isActive('/staff') ? 'active' : ''}`} onClick={closeMobile}>
              Staff
            </Link>

            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMobile}>
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="header-action-group">
            <button 
              type="button" 
              className="btn-header-search" 
              onClick={openSearch}
              aria-label="Search website content"
              title="Global Search (Ctrl+K)"
            >
              <Search size={18} />
            </button>

            <Link to="/admissions" className="btn-primary-apply">
              <span>Apply Now</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>

            <button 
              type="button" 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="main-navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
