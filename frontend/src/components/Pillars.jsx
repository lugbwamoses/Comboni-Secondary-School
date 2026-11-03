import React from 'react';
import { Award, Users, BookOpen, Building } from './Icons.jsx';
import './Pillars.css';

const pillarData = [
  {
    id: '01',
    title: 'Catholic Education',
    desc: 'An institution of learning under the Catholic Archdiocese of Juba.',
    icon: Award,
    colorClass: 'badge-teal'
  },
  {
    id: '02',
    title: 'Academic and Vocational Skills',
    desc: 'Founded to empower Sudanese people through academic and vocational learning.',
    icon: Users,
    colorClass: 'badge-orange'
  },
  {
    id: '03',
    title: 'Integral Development',
    desc: 'Formation through formal and informal education.',
    icon: BookOpen,
    colorClass: 'badge-teal'
  },
  {
    id: '04',
    title: 'School Activities',
    desc: 'The school year includes academic programmes and co-curricular activities.',
    icon: Building,
    colorClass: 'badge-orange'
  }
];

const Pillars = () => {
  return (
    <section id="pillars" className="pillars-wrapper" aria-label="Core Educational Pillars">
      <div className="container">
        <ul className="pillars-grid" role="list">
          {pillarData.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id} className="pillar-item">
                <article className="pillar-card">
                  <header className="pillar-header">
                    <div className={`pillar-icon-box ${item.colorClass}`}>
                      <IconComponent size={24} aria-hidden="true" />
                    </div>
                    <span className="pillar-number" aria-hidden="true">{item.id}</span>
                  </header>
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pillars;

