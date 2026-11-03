import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { MapPin, Phone, Mail, Clock, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './ContactPage.css';

const ContactPage = () => {
  const { data } = useSite();
  const { settings } = data;
  const isConfigured = (value) => value && !value.startsWith('[');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  return (
    <div className="page-wrapper contact-page">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <section className="page-header-banner" aria-labelledby="contact-title">
        <div className="container">
          <span className="banner-subtitle">COMMUNICATIONS &amp; LOCATION</span>
          <h1 id="contact-title" className="banner-title">Connect With St. Daniel Comboni</h1>
          <p className="banner-lead">
            We welcome inquiries from prospective parents, students, educational partners, and alumni. Reach out to our campus in Juba, South Sudan.
          </p>
        </div>
      </section>

      <div className="container contact-main-layout">
        
        {/* Left Column: Contact Form */}
        <section className="contact-form-card" aria-labelledby="send-msg-title">
          <h2 id="send-msg-title">Send Us a Direct Message</h2>
          <p className="form-lead">The message form will be available when an official delivery service is configured.</p>
          <p className="contact-delivery-notice" role="status">Online message delivery is not connected yet. This form is disabled until an official contact service is configured.</p>

            <form onSubmit={(event) => event.preventDefault()} className="actual-contact-form">
              <fieldset disabled className="contact-fields-disabled">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Mary Ladu"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. mary@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="e.g. +211 920 000 000"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="contact-subject">Inquiry Subject *</label>
                  <select
                    id="contact-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Admissions & Application">Admissions &amp; Application</option>
                    <option value="Academic Curriculum">Academic Curriculum &amp; Streams</option>
                    <option value="Scholarships">Scholarships &amp; Bursaries</option>
                    <option value="Alumni Relations">Alumni Relations</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  required
                  placeholder="Please describe your question or request..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-message" disabled>
                <span>Message service unavailable</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              </fieldset>
            </form>
        </section>

        {/* Right Column: Physical Details & Map */}
        <aside className="contact-details-col">
          <div className="details-card">
            <h3>Campus Contact Information</h3>
            
            <address className="contact-address-block">
              <div className="info-block">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Physical Address</strong>
                  <p>{settings.address}</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Telephone Inquiries</strong>
                  <p>General: {isConfigured(settings.primaryPhone) ? <a href={`tel:${settings.primaryPhone}`}>{settings.primaryPhone}</a> : '[Official phone number]'}</p>
                  <p>Admissions: {isConfigured(settings.admissionsPhone) ? <a href={`tel:${settings.admissionsPhone}`}>{settings.admissionsPhone}</a> : '[Admissions phone number]'}</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <strong>Electronic Mail</strong>
                  <p>{isConfigured(settings.primaryEmail) ? <a href={`mailto:${settings.primaryEmail}`}>{settings.primaryEmail}</a> : '[Official email address]'}</p>
                  <p>{isConfigured(settings.admissionsEmail) ? <a href={`mailto:${settings.admissionsEmail}`}>{settings.admissionsEmail}</a> : '[Admissions email address]'}</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <strong>Administrative Office Hours</strong>
                  <p>{settings.officeHours}</p>
                </div>
              </div>
            </address>
          </div>

          {/* Interactive Location Placeholder Card */}
          <div className="location-map-card">
            <h4>Campus Location Map</h4>
            <div className="map-visual-placeholder">
              <MapPin size={32} className="map-pin-icon" />
              <span>Juba, South Sudan</span>
              <small>[Full school address to be confirmed]</small>
            </div>
            <p className="map-note">The school’s exact address and map location will be added when confirmed.</p>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ContactPage;

