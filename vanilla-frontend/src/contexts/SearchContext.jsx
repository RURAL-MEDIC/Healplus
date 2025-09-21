import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const performSearch = (medicines, term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = medicines.filter(medicine => 
      medicine.name.toLowerCase().includes(term.toLowerCase()) ||
      medicine.compound.toLowerCase().includes(term.toLowerCase()) ||
      medicine.company.toLowerCase().includes(term.toLowerCase()) ||
      medicine.category.toLowerCase().includes(term.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const value = {
    searchTerm,
    searchResults,
    updateSearchTerm,
    performSearch,
    clearSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
