import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  searchResults: SearchResult[];
  selectedResultIndex: number;
  setSelectedResultIndex: (index: number) => void;
}

export interface SearchResult {
  label: string;
  href: string;
  icon?: React.ReactNode;
  category?: string;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  return (
    <SearchContext.Provider value={{ 
      searchQuery, 
      setSearchQuery, 
      isSearchOpen, 
      setIsSearchOpen,
      searchResults,
      selectedResultIndex,
      setSelectedResultIndex
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
} 