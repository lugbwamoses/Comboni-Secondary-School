import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { X, ChevronDown, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './GalleryPage.css';

const GalleryPage = () => {
  const { data } = useSite();
  const { gallery } = data;
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  const categories = ['All', 'Campus', 'Academic', 'Students', 'Graduation', 'Sports', 'Events'];

  const filteredImages = activeCategory === 'All'
    ? gallery
    : gallery.filter((img) => img.category === activeCategory);

  return (
    <div className="page-wrapper gallery-page">
      <Breadcrumbs items={[{ label: 'Photo Gallery' }]} />

      <section className="page-header-banner" aria-labelledby="gallery-title">
        <div className="container">
          <span className="banner-subtitle">SCHOOL PHOTOGRAPHS</span>
          <h1 id="gallery-title" className="banner-title">Photo Gallery</h1>
          <p className="banner-lead">
            Official school photographs will be added when approved for publication.
          </p>
        </div>
      </section>

      <div className="container gallery-container">
        {/* Category Filter Pills */}
        <div className="gallery-filter-pills" role="tablist" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gal-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid">
          {filteredImages.length === 0 && <p className="text-muted">No school photographs have been published yet.</p>}
          {filteredImages.map((item) => (
            <figure 
              key={item.id} 
              className="gallery-item-card"
              onClick={() => setActiveLightboxImg(item)}
            >
              <img src={item.src} alt={item.caption} className="gallery-img" loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="overlay-cat">{item.category}</span>
                <figcaption className="overlay-caption">{item.caption}</figcaption>
                <span className="overlay-click-hint">Click to expand</span>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setActiveLightboxImg(null)}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="btn-close-lightbox" 
              onClick={() => setActiveLightboxImg(null)}
              aria-label="Close image lightbox"
            >
              <X size={24} />
            </button>
            <img src={activeLightboxImg.src} alt={activeLightboxImg.caption} className="lightbox-main-img" />
            <div className="lightbox-footer-caption">
              <span className="lb-cat">{activeLightboxImg.category}</span>
              <p>{activeLightboxImg.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

