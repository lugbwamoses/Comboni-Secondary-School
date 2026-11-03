import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb navigation">
      <div className="container">
        <ol className="breadcrumbs-list" role="list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="breadcrumb-item">
                <span className="breadcrumb-separator" aria-hidden="true">&rsaquo;</span>
                {isLast || !item.link ? (
                  <span className="breadcrumb-current" aria-current="page">{item.label}</span>
                ) : (
                  <Link to={item.link}>{item.label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

