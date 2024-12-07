import React, { useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useSearch } from '@/src/contexts/SearchContext';
import './styles.css';

export default function SearchBar() {
  const { 
    searchQuery, 
    setSearchQuery, 
    isSearchOpen, 
    setIsSearchOpen 
  } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search... (Press '/' to focus)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button
            className="clear-button"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>
      <div className="search-shortcut">⌘K</div>
    </div>
  );
} 