import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { 
  ShieldCheck, BookOpen, Building, Users, Calendar, 
  Download, Award, CheckCircle2, ArrowRight 
} from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './AdminPage.css';

const AdminPage = () => {
  const { 
    data, 
    updateSettings, 
    updateHero, 
    addNews, 
    addEvent, 
    addDownload, 
    resetData 
  } = useSite();

  const { settings, programmes, faculties, departments, news, events, downloads, staff, gallery } = data;

  const [activeTab, setActiveTab] = useState('dashboard');
  const [saveAlert, setSaveAlert] = useState(false);

  // Settings Form State
  const [schoolSettings, setSchoolSettings] = useState({
    schoolName: settings.schoolName,
    tagline: settings.tagline,
    location: settings.location,
    address: settings.address,
    primaryPhone: settings.primaryPhone,
    primaryEmail: settings.primaryEmail,
    portalUrl: settings.portalUrl
  });

  // Hero Form State
  const [heroForm, setHeroForm] = useState({
    badge: settings.hero.badge || '',
    heading: settings.hero.heading,
    subheading: settings.hero.subheading,
    primaryCtaText: settings.hero.primaryCtaText,
    secondaryCtaText: settings.hero.secondaryCtaText,
    primaryCtaLink: settings.hero.primaryCtaLink || '/admissions',
    secondaryCtaLink: settings.hero.secondaryCtaLink || '/programmes',
    imageUrl: settings.hero.imageUrl || ''
  });

  // New News State
  const [newNews, setNewNews] = useState({
    title: '',
    category: 'Academic Excellence',
    excerpt: '',
    content: ''
  });

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    updateSettings(schoolSettings);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 3000);
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    updateHero(heroForm);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 3000);
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    if (!newNews.title || !newNews.excerpt) return;
    const article = {
      id: `news-${Date.now()}`,
      slug: newNews.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newNews.title,
      category: newNews.category,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      dateTime: new Date().toISOString().split('T')[0],
      author: 'CMS Administrator',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      excerpt: newNews.excerpt,
      content: newNews.content || newNews.excerpt
    };
    addNews(article);
    setNewNews({ title: '', category: 'Academic Excellence', excerpt: '', content: '' });
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 3000);
  };

  return (
    <div className="page-wrapper admin-cms-page">
      <Breadcrumbs items={[{ label: 'CMS Admin Portal' }]} />

      <section className="admin-header-banner">
        <div className="container admin-banner-content">
          <div>
            <div className="admin-badge-strip">
              <ShieldCheck size={18} />
              <span>CONTENT MANAGEMENT SYSTEM (CMS)</span>
            </div>
            <h1>Institutional Administration Portal</h1>
            <p>Local demonstration editor. Changes stay in this browser and are not published to a server.</p>
          </div>
          <button 
            type="button" 
            className="btn-reset-data"
            onClick={() => {
              if (window.confirm('Reset all CMS content back to initial school demo defaults?')) {
                resetData();
                window.location.reload();
              }
            }}
          >
            Reset to Factory Defaults
          </button>
        </div>
      </section>

      <div className="container admin-layout">
        <p className="admin-demo-notice" role="status">This page has no sign-in or server connection. Do not enter private information or treat edits as published content.</p>
        
        {/* Admin Navigation Tabs */}
        <aside className="admin-sidebar-nav">
          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard Overview
          </button>
          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'hero' ? 'active' : ''}`}
            onClick={() => setActiveTab('hero')}
          >
            Homepage Hero CMS
          </button>
          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            School Details &amp; Contact
          </button>
          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            Publish Announcement
          </button>
        </aside>

        {/* Admin Working Panel */}
        <main className="admin-main-panel">
          {saveAlert && (
            <div className="admin-alert-banner">
              <CheckCircle2 size={20} />
              <span>Saved in this browser. This does not publish changes to a website server.</span>
            </div>
          )}

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="admin-tab-pane">
              <h2>Content Overview &amp; Health Metrics</h2>
              <p className="tab-lead">Counts from sample content stored in this browser.</p>

              <div className="metrics-grid">
                <div className="metric-card">
                  <BookOpen size={24} className="metric-icon" />
                  <span className="metric-val">{programmes.length}</span>
                  <span className="metric-lbl">Academic Programmes</span>
                </div>
                <div className="metric-card">
                  <Building size={24} className="metric-icon" />
                  <span className="metric-val">{faculties.length}</span>
                  <span className="metric-lbl">Academic Faculties</span>
                </div>
                <div className="metric-card">
                  <Building size={24} className="metric-icon" />
                  <span className="metric-val">{departments.length}</span>
                  <span className="metric-lbl">Departments</span>
                </div>
                <div className="metric-card">
                  <Users size={24} className="metric-icon" />
                  <span className="metric-val">{staff.length}</span>
                  <span className="metric-lbl">Public Staff Profiles</span>
                </div>
                <div className="metric-card">
                  <Award size={24} className="metric-icon" />
                  <span className="metric-val">{news.length}</span>
                  <span className="metric-lbl">Published News Dispatches</span>
                </div>
                <div className="metric-card">
                  <Calendar size={24} className="metric-icon" />
                  <span className="metric-val">{events.length}</span>
                  <span className="metric-lbl">Upcoming Events</span>
                </div>
                <div className="metric-card">
                  <Download size={24} className="metric-icon" />
                  <span className="metric-val">{downloads.length}</span>
                  <span className="metric-lbl">Public Downloads</span>
                </div>
                <div className="metric-card">
                  <BookOpen size={24} className="metric-icon" />
                  <span className="metric-val">{gallery.length}</span>
                  <span className="metric-lbl">Gallery Artifacts</span>
                </div>
              </div>

              <div className="recent-activity-card">
                <h3>System Status &amp; CMS Security</h3>
                <ul>
                  <li><strong>Admin access:</strong> No authentication is configured.</li>
                  <li><strong>Portal gateway:</strong> {settings.portalUrl || 'External portal URL has not been configured.'}</li>
                  <li><strong>Storage:</strong> Changes are saved to this browser only.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: HOMEPAGE HERO CMS */}
          {activeTab === 'hero' && (
            <div className="admin-tab-pane">
              <h2>Homepage Hero Section Management</h2>
              <p className="tab-lead">Modify the primary university headline, narrative statement, and call-to-action buttons.</p>

              <form onSubmit={handleHeroSubmit} className="admin-form">
                <div className="admin-input-group">
                  <label htmlFor="hero-badge-input">Hero eyebrow</label>
                  <input
                    id="hero-badge-input"
                    type="text"
                    value={heroForm.badge}
                    onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                  />
                </div>

                <div className="admin-input-group">
                  <label htmlFor="hero-title-input">Hero Main Heading *</label>
                  <input
                    id="hero-title-input"
                    type="text"
                    required
                    value={heroForm.heading}
                    onChange={(e) => setHeroForm({ ...heroForm, heading: e.target.value })}
                  />
                  <small>Example: "Always Better, Always Best"</small>
                </div>

                <div className="admin-input-group">
                  <label htmlFor="hero-sub-input">Hero Subheading &amp; Institutional Statement *</label>
                  <textarea
                    id="hero-sub-input"
                    rows="4"
                    required
                    value={heroForm.subheading}
                    onChange={(e) => setHeroForm({ ...heroForm, subheading: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-cols-2">
                  <div className="admin-input-group">
                    <label htmlFor="cta-prim-text">Primary CTA Button Label</label>
                    <input
                      id="cta-prim-text"
                      type="text"
                      value={heroForm.primaryCtaText}
                      onChange={(e) => setHeroForm({ ...heroForm, primaryCtaText: e.target.value })}
                    />
                  </div>
                  <div className="admin-input-group">
                    <label htmlFor="cta-sec-text">Secondary CTA Button Label</label>
                    <input
                      id="cta-sec-text"
                      type="text"
                      value={heroForm.secondaryCtaText}
                      onChange={(e) => setHeroForm({ ...heroForm, secondaryCtaText: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-cols-2">
                  <div className="admin-input-group">
                    <label htmlFor="cta-prim-link">Primary CTA destination</label>
                    <input
                      id="cta-prim-link"
                      type="text"
                      value={heroForm.primaryCtaLink}
                      onChange={(e) => setHeroForm({ ...heroForm, primaryCtaLink: e.target.value })}
                    />
                  </div>
                  <div className="admin-input-group">
                    <label htmlFor="cta-sec-link">Secondary CTA destination</label>
                    <input
                      id="cta-sec-link"
                      type="text"
                      value={heroForm.secondaryCtaLink}
                      onChange={(e) => setHeroForm({ ...heroForm, secondaryCtaLink: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-input-group">
                  <label htmlFor="hero-image-url">Hero image URL</label>
                  <input
                    id="hero-image-url"
                    type="url"
                    value={heroForm.imageUrl}
                    onChange={(e) => setHeroForm({ ...heroForm, imageUrl: e.target.value })}
                    placeholder="Use the built-in demo image until an approved school photo is available"
                  />
                </div>

                <button type="submit" className="btn-admin-save">Save Homepage Hero Changes</button>
              </form>
            </div>
          )}

          {/* TAB 3: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="admin-tab-pane">
              <h2>School Identity, Contacts &amp; Portal URL</h2>
              <p className="tab-lead">Update campus address in Juba, official telephone lines, and external Student Portal URL.</p>

              <form onSubmit={handleSettingsSubmit} className="admin-form">
                <div className="form-cols-2">
                  <div className="admin-input-group">
                    <label htmlFor="set-name">Official School Name *</label>
                    <input
                      id="set-name"
                      type="text"
                      required
                      value={schoolSettings.schoolName}
                      onChange={(e) => setSchoolSettings({ ...schoolSettings, schoolName: e.target.value })}
                    />
                  </div>
                  <div className="admin-input-group">
                    <label htmlFor="set-tagline">School Motto / Tagline</label>
                    <input
                      id="set-tagline"
                      type="text"
                      value={schoolSettings.tagline}
                      onChange={(e) => setSchoolSettings({ ...schoolSettings, tagline: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-input-group">
                  <label htmlFor="set-address">Physical Campus Address in Juba</label>
                  <input
                    id="set-address"
                    type="text"
                    value={schoolSettings.address}
                    onChange={(e) => setSchoolSettings({ ...schoolSettings, address: e.target.value })}
                  />
                </div>

                <div className="form-cols-2">
                  <div className="admin-input-group">
                    <label htmlFor="set-phone">General Inquiries Telephone</label>
                    <input
                      id="set-phone"
                      type="text"
                      value={schoolSettings.primaryPhone}
                      onChange={(e) => setSchoolSettings({ ...schoolSettings, primaryPhone: e.target.value })}
                    />
                  </div>
                  <div className="admin-input-group">
                    <label htmlFor="set-email">Institutional Email</label>
                    <input
                      id="set-email"
                      type="email"
                      value={schoolSettings.primaryEmail}
                      onChange={(e) => setSchoolSettings({ ...schoolSettings, primaryEmail: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-input-group">
                  <label htmlFor="set-portal">External Student Portal Gateway URL</label>
                  <input
                    id="set-portal"
                    type="url"
                    value={schoolSettings.portalUrl}
                    onChange={(e) => setSchoolSettings({ ...schoolSettings, portalUrl: e.target.value })}
                  />
                  <small>When students click "Student Portal", they will be forwarded to this address.</small>
                </div>

                <button type="submit" className="btn-admin-save">Save Institutional Settings</button>
              </form>
            </div>
          )}

          {/* TAB 4: PUBLISH NEWS */}
          {activeTab === 'news' && (
            <div className="admin-tab-pane">
              <h2>Publish Official School Announcement</h2>
              <p className="tab-lead">Compose a new dispatch to appear immediately on the homepage and news feed.</p>

              <form onSubmit={handleNewsSubmit} className="admin-form">
                <div className="admin-input-group">
                  <label htmlFor="news-title-in">Announcement Title *</label>
                  <input
                    id="news-title-in"
                    type="text"
                    required
                    placeholder="e.g. Senior 1 Orientation Timetable Announced"
                    value={newNews.title}
                    onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                  />
                </div>

                <div className="admin-input-group">
                  <label htmlFor="news-cat-in">Category</label>
                  <select
                    id="news-cat-in"
                    value={newNews.category}
                    onChange={(e) => setNewNews({ ...newNews, category: e.target.value })}
                  >
                    <option value="Academic Excellence">Academic Excellence</option>
                    <option value="Campus Facilities">Campus Facilities</option>
                    <option value="Sports & Culture">Sports &amp; Culture</option>
                    <option value="Admissions">Admissions</option>
                  </select>
                </div>

                <div className="admin-input-group">
                  <label htmlFor="news-ex-in">Short Summary / Excerpt *</label>
                  <textarea
                    id="news-ex-in"
                    rows="2"
                    required
                    placeholder="Brief 1-2 sentence overview for cards..."
                    value={newNews.excerpt}
                    onChange={(e) => setNewNews({ ...newNews, excerpt: e.target.value })}
                  ></textarea>
                </div>

                <div className="admin-input-group">
                  <label htmlFor="news-body-in">Full Article Prose Content</label>
                  <textarea
                    id="news-body-in"
                    rows="5"
                    placeholder="Enter full paragraph body text..."
                    value={newNews.content}
                    onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-admin-save">Publish Announcement Now</button>
              </form>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default AdminPage;

