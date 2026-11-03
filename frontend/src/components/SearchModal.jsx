import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './SearchModal.css';

const SearchModal = () => {
  const { isSearchOpen, openSearch, closeSearch, searchQuery, setSearchQuery, getSearchResults } = useSite();
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      previousFocusRef.current = document.activeElement;
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      previousFocusRef.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOpen]);

  const handleDialogKeyDown = (event) => {
    if (event.key !== 'Tab') return;
    const focusable = dialogRef.current?.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]');
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isSearchOpen) closeSearch();
        else openSearch();
      }
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, openSearch, closeSearch]);

  if (!isSearchOpen) return null;

  const results = getSearchResults(searchQuery);

  return (
    <div className="search-backdrop" onClick={closeSearch}>
      <div
        className="search-modal-box"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleDialogKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        <header className="search-modal-header">
          <h2 id="search-modal-title" className="sr-only">Search the school website</h2>
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon" aria-hidden="true" />
            <input
              ref={inputRef}
              id="global-search-input"
              type="search"
              placeholder="Search programmes, faculties, staff, news, events, downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Global search query"
            />
          </div>
          <button 
            type="button" 
            className="search-close-btn" 
            onClick={closeSearch}
            aria-label="Close search overlay"
          >
            <X size={20} />
          </button>
        </header>

        <div className="search-results-container">
          {searchQuery.trim().length < 2 ? (
            <div className="search-empty-prompt">
              <p>Type at least 2 characters to search across all institutional records.</p>
              <div className="search-suggestions">
                <span>Try searching:</span>
                <button type="button" onClick={() => setSearchQuery('Sciences')}>Sciences</button>
                <button type="button" onClick={() => setSearchQuery('Admissions')}>Admissions</button>
                <button type="button" onClick={() => setSearchQuery('Prospectus')}>Prospectus</button>
                <button type="button" onClick={() => setSearchQuery('ICT')}>ICT</button>
              </div>
            </div>
          ) : results.length > 0 ? (
            <ul className="search-results-list" role="list">
              {results.map((res, idx) => (
                <li key={idx} className="search-result-item">
                  <Link 
                    to={res.link} 
                    onClick={() => {
                      closeSearch();
                      setSearchQuery('');
                    }}
                    className="result-link"
                  >
                    <div className="result-type-badge">{res.type}</div>
                    <div className="result-body">
                      <strong className="result-title">{res.title}</strong>
                      <span className="result-desc">{res.desc}</span>
                    </div>
                    <ArrowRight size={16} className="result-arrow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="search-no-results">
              <p>No institutional records found matching "<strong>{searchQuery}</strong>".</p>
              <small>Try using broader keywords or explore our Academic Programmes directory.</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

