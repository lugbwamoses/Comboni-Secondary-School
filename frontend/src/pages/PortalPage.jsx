import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { LogIn, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './PortalPage.css';

const PortalPage = () => {
  const { data } = useSite();
  const { settings } = data;
  const portalUrl = (() => {
    try {
      const url = new URL(settings.portalUrl);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch {
      return '';
    }
  })();

  const handleExternalRedirect = () => {
    if (portalUrl) window.open(portalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-wrapper portal-gateway-page">
      <Breadcrumbs items={[{ label: 'Student Portal Gateway' }]} />

      <section className="page-header-banner" aria-labelledby="portal-head">
        <div className="container">
          <span className="banner-subtitle">EXTERNAL SCHOOL SERVICE</span>
          <h1 id="portal-head" className="banner-title">Student &amp; Parent Portal</h1>
          <p className="banner-lead">
            This public website does not provide student accounts or school management services.
          </p>
        </div>
      </section>

      <div className="container portal-gateway-container">
        <div className="portal-notice-card">
          <div className="portal-icon-wrapper">
            <LogIn size={40} className="portal-gateway-icon" />
          </div>

          <h2>Official Portal Gateway</h2>
          <p className="portal-explainer">
            The Student Portal is a separate system outside this public website. This page only links to it when the school provides an official portal address.
          </p>

          <div className="portal-status-strip">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>Portal status: <strong>{portalUrl ? 'External link configured' : 'Official portal link not configured'}</strong></span>
            </div>
              {portalUrl && <span className="portal-url-text">Target: <code>{portalUrl}</code></span>}
          </div>

          <div className="portal-cta-buttons">
            <button
              type="button"
              className="btn-launch-portal"
              onClick={handleExternalRedirect}
              disabled={!portalUrl}
            >
              <span>{portalUrl ? 'Open Student Portal' : 'Portal link coming soon'}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <p className="portal-scope-note">This website does not provide student logins, records, results, attendance, or payment services.</p>

          <footer className="portal-support-footer">
            <p>
              Need portal help? Contact the school using its verified contact details.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;

