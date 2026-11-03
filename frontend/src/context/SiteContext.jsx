import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSiteData } from '../data/siteData.js';

const SITE_DATA_STORAGE_KEY = 'comboni_site_data_v3';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(SITE_DATA_STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialSiteData;
    } catch (e) {
      return initialSiteData;
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SITE_DATA_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [data]);

  const updateSettings = (updatedSettings) => {
    setData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...updatedSettings
      }
    }));
  };

  const updateHero = (updatedHero) => {
    setData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        hero: {
          ...prev.settings.hero,
          ...updatedHero
        }
      }
    }));
  };

  const addNews = (article) => {
    setData((prev) => ({
      ...prev,
      news: [article, ...prev.news]
    }));
  };

  const deleteNews = (id) => {
    setData((prev) => ({
      ...prev,
      news: prev.news.filter((item) => item.id !== id)
    }));
  };

  const addEvent = (event) => {
    setData((prev) => ({
      ...prev,
      events: [event, ...prev.events]
    }));
  };

  const deleteEvent = (id) => {
    setData((prev) => ({
      ...prev,
      events: prev.events.filter((item) => item.id !== id)
    }));
  };

  const addDownload = (download) => {
    setData((prev) => ({
      ...prev,
      downloads: [download, ...prev.downloads]
    }));
  };

  const resetData = () => {
    setData(initialSiteData);
    localStorage.removeItem(SITE_DATA_STORAGE_KEY);
  };

  // Search logic across entities
  const getSearchResults = (query) => {
    if (!query || query.trim().length < 2) return [];
    const q = query.toLowerCase().trim();
    const results = [];
    const pages = [
      { title: 'About the School', link: '/about', text: 'school overview history mission vision leadership governance' },
      { title: 'Admissions', link: '/admissions', text: 'admissions requirements how to apply fees scholarships' },
      { title: 'Contact', link: '/contact', text: 'contact address phone email enquiries' },
      { title: 'Student Portal', link: '/portal', text: 'student portal external link' }
    ];

    pages.forEach((page) => {
      if (`${page.title} ${page.text}`.toLowerCase().includes(q)) {
        results.push({ type: 'Page', title: page.title, link: page.link, desc: 'Website page' });
      }
    });

    // Search Programmes
    data.programmes.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.overview.toLowerCase().includes(q) || p.faculty.toLowerCase().includes(q)) {
        results.push({ type: 'Programme', title: p.name, link: `/programmes/${p.slug}`, desc: p.level });
      }
    });

    // Search Faculties
    data.faculties.forEach((f) => {
      if (f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q) || f.dean.toLowerCase().includes(q)) {
        results.push({ type: 'Faculty', title: f.name, link: `/faculties/${f.slug}`, desc: `Dean: ${f.dean}` });
      }
    });

    // Search Departments
    data.departments.forEach((d) => {
      if (d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)) {
        results.push({ type: 'Department', title: d.name, link: `/departments/${d.slug}`, desc: d.faculty });
      }
    });

    // Search News
    data.news.forEach((n) => {
      if (n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)) {
        results.push({ type: 'News', title: n.title, link: `/news/${n.slug}`, desc: n.date });
      }
    });

    // Search Events
    data.events.forEach((ev) => {
      if (ev.title.toLowerCase().includes(q) || ev.description.toLowerCase().includes(q) || ev.location.toLowerCase().includes(q)) {
        results.push({ type: 'Event', title: ev.title, link: `/events/${ev.slug}`, desc: `${ev.month} ${ev.day}, ${ev.year} - ${ev.location}` });
      }
    });

    // Search Staff
    data.staff.forEach((s) => {
      if (s.name.toLowerCase().includes(q) || s.position.toLowerCase().includes(q) || s.faculty.toLowerCase().includes(q)) {
        results.push({ type: 'Staff Directory', title: s.name, link: `/staff#${s.id}`, desc: `${s.position} (${s.faculty})` });
      }
    });

    // Search Downloads
    data.downloads.forEach((dl) => {
      if (dl.title.toLowerCase().includes(q) || dl.description.toLowerCase().includes(q) || dl.category.toLowerCase().includes(q)) {
        results.push({ type: 'Download', title: dl.title, link: `/downloads#${dl.id}`, desc: `${dl.category} (${dl.format}, ${dl.size})` });
      }
    });

    (data.research?.publications || []).forEach((publication) => {
      if ([publication.title, publication.authors, publication.publisher, publication.category, publication.abstract]
        .some((value) => (value || '').toLowerCase().includes(q))) {
        results.push({
          type: 'Research publication',
          title: publication.title,
          link: `/research#publication-${publication.id}`,
          desc: `${publication.authors} · ${publication.year}`
        });
      }
    });

    (data.gallery || []).forEach((image) => {
      if (`${image.caption} ${image.category}`.toLowerCase().includes(q)) {
        results.push({ type: 'Gallery', title: image.caption, link: '/gallery', desc: image.category });
      }
    });

    return results;
  };

  return (
    <SiteContext.Provider
      value={{
        data,
        isSearchOpen,
        setIsSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        searchQuery,
        setSearchQuery,
        getSearchResults,
        updateSettings,
        updateHero,
        addNews,
        deleteNews,
        addEvent,
        deleteEvent,
        addDownload,
        resetData
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};

