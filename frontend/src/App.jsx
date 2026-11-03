import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SiteProvider } from './context/SiteContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SearchModal from './components/SearchModal.jsx';
import Home from './components/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LeadershipPage from './pages/LeadershipPage.jsx';
import AdmissionsPage from './pages/AdmissionsPage.jsx';
import ProgrammesPage from './pages/ProgrammesPage.jsx';
import ProgrammeDetailPage from './pages/ProgrammeDetailPage.jsx';
import FacultiesPage from './pages/FacultiesPage.jsx';
import FacultyDetailPage from './pages/FacultyDetailPage.jsx';
import DepartmentsPage from './pages/DepartmentsPage.jsx';
import DepartmentDetailPage from './pages/DepartmentDetailPage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import NewsDetailPage from './pages/NewsDetailPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import DownloadsPage from './pages/DownloadsPage.jsx';
import StaffPage from './pages/StaffPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortalPage from './pages/PortalPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import Error404Page from './pages/Error404Page.jsx';
import { useSite } from './context/SiteContext.jsx';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const { data } = useSite();

  React.useEffect(() => {
    const routeLabels = {
      about: 'About', admissions: 'Admissions', programmes: 'Academic Programmes',
      faculties: 'Faculties', departments: 'Departments', research: 'Research',
      news: 'News', events: 'Events', gallery: 'Gallery', downloads: 'Downloads',
      staff: 'Staff Directory', contact: 'Contact', portal: 'Student Portal', admin: 'Website Admin Demo',
      privacy: 'Privacy', terms: 'Terms of Use', accessibility: 'Accessibility'
    };
    const segments = location.pathname.split('/').filter(Boolean);
    const section = segments[0];
    const slug = segments[1];
    const collections = [data.news, data.events, data.programmes, data.faculties, data.departments, data.staff];
    const record = slug && collections.flat().find((item) => item.slug === slug);
    const title = record?.title || record?.name || routeLabels[section] || 'Home';
    const description = record?.excerpt || record?.overview || record?.description ||
      'Official website of St. Daniel Comboni Secondary School in Juba, South Sudan.';
    const fullTitle = `${title} | St. Daniel Comboni Secondary School`;
    document.title = fullTitle;

    const setMeta = (selector, attribute, key, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = value;
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', record && data.news.includes(record) ? 'article' : 'website');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  }, [data, location.pathname]);

  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="demo-content-notice" role="status">
        Some school information is not yet published here. Admission requirements, fees, contact details, news, and photographs should be confirmed with the school.
      </div>
      <Header />
      <SearchModal />
      <ScrollToTop />
      <main id="main-content" tabIndex="-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
          >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/programmes/:slug" element={<ProgrammeDetailPage />} />
          <Route path="/faculties" element={<FacultiesPage />} />
          <Route path="/faculties/:slug" element={<FacultyDetailPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PolicyPage type="privacy" />} />
          <Route path="/terms" element={<PolicyPage type="terms" />} />
          <Route path="/accessibility" element={<PolicyPage type="accessibility" />} />
          <Route path="/portal" element={<PortalPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SiteProvider>
      <Router>
        <AppLayout />
      </Router>
    </SiteProvider>
  );
}

export default App;
