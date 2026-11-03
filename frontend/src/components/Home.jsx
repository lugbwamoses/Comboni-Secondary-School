import React from 'react';
import Hero from './Hero.jsx';
import Pillars from './Pillars.jsx';
import AboutSection from './AboutSection.jsx';
import CurriculumSection from './CurriculumSection.jsx';
import FacultySection from './FacultySection.jsx';
import EventsSection from './EventsSection.jsx';
import NewsSection from './NewsSection.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page-layout">
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Floating 4 Key Pillars */}
      <Pillars />

      {/* 3. About Heritage & Mission */}
      <AboutSection />

      {/* 4. Academic Curriculum Streams */}
      <CurriculumSection />

      {/* 5. Instructors & Faculty */}
      <FacultySection />

      {/* 6. Upcoming School Events */}
      <EventsSection />

      {/* 7. Latest News & Announcements */}
      <NewsSection />
    </div>
  );
};

export default Home;
