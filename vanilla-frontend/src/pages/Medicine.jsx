import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/medicine.css"
import CallShop from '../components/medicine/CallShop.jsx';
import SuggestedMedicine from '../components/medicine/SuggestedMedicine';
import RecentlyViewedMedicine from '../components/medicine/RecentlyViewedMedicine';
import { MEDICINE_DATA } from '../data/medicineData';
import { useSearch } from '../contexts/SearchContext';

const Medicine = () => {
  const { searchTerm, performSearch, searchResults, clearSearch } = useSearch();
  const { t } = useTranslation();

  useEffect(() => {
    // Perform search when component mounts or search term changes
    if (searchTerm) {
      performSearch(MEDICINE_DATA, searchTerm);
    } else {
      clearSearch();
    }
  }, [searchTerm]);

  return (
    <div className='Medicine'>
      <CallShop/>
      
      {/* Show search results if there are any */}
      {searchResults.length > 0 && (
        <div className="search-results">
           <h2>{t('medicine.searchResultsFor')} "{searchTerm}"</h2>
          <div className="search-results-grid">
            {searchResults.map(medicine => (
              <div key={medicine.id} className="medicine-card">
                <img src={medicine.image} alt={medicine.name} />
                <div className="medicine-info">
                  <h3>{medicine.name}</h3>
                  <p className="compound">{medicine.compound}</p>
                  <p className="company">{medicine.company}</p>
                  <p className="price">₹{medicine.price}</p>
                  <p className="category">{medicine.category}</p>
                  <p className={`stock-status ${medicine.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {medicine.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show all medicines when no search term */}
      {!searchTerm && (
        <>
          {/* Common Medicines Section */}
          <SuggestedMedicine />
          
          {/* All Available Medicines Section */}
          <div className="all-medicines">
             <h2>{t('medicine.allAvailableMedicines')} ({MEDICINE_DATA.length})</h2>
            <div className="all-medicines-grid">
              {MEDICINE_DATA.map(medicine => (
                <div key={medicine.id} className="medicine-card">
                  <img src={medicine.image} alt={medicine.name} />
                  <div className="medicine-info">
                    <h3>{medicine.name}</h3>
                    <p className="compound">{medicine.compound}</p>
                    <p className="company">{medicine.company}</p>
                    <p className="price">₹{medicine.price}</p>
                    <p className="category">{medicine.category}</p>
                    <p className={`stock-status ${medicine.inStock ? 'in-stock' : 'out-of-stock'}`}>
                      {medicine.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </p>
                    <p className="description">{medicine.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <RecentlyViewedMedicine />
        </>
      )}

      {/* Show no results message */}
      {searchTerm && searchResults.length === 0 && (
        <div className="no-results">
           <h2>{t('medicine.noMedicinesFound')} "{searchTerm}"</h2>
           <p>{t('medicine.trySearchingWith')}</p>
        </div>
      )}
    </div>  
  );
}

export default Medicine;

