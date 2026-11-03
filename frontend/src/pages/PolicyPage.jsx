import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const pageDetails = {
  privacy: { title: 'Privacy', description: 'The school-approved privacy information has not been provided yet.' },
  terms: { title: 'Terms of Use', description: 'The school-approved terms of use have not been provided yet.' },
  accessibility: { title: 'Accessibility', description: 'Accessibility information and an approved contact route will be added after review.' }
};

const PolicyPage = ({ type }) => {
  const page = pageDetails[type];

  return (
    <div className="page-wrapper">
      <Breadcrumbs items={[{ label: page.title }]} />
      <section className="container section-pad" aria-labelledby="policy-title">
        <span className="section-eyebrow">SCHOOL INFORMATION</span>
        <h1 id="policy-title" className="section-heading">{page.title}</h1>
        <p className="section-subtext">{page.description}</p>
        <p>This placeholder does not describe an adopted school policy or make a legal compliance claim.</p>
      </section>
    </div>
  );
};

export default PolicyPage;
