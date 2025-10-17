import React, { useEffect } from "react";
import CallShop from "../components/medicine/CallShop.jsx";
import { useSearch } from "../contexts/SearchContext";
import SuggestedMedicine from "../components/medicine/SuggestedMedicine";
import AllMedicine from "../components/medicine/AllMedicine.jsx";
import RecentlyViewedMedicine from "../components/medicine/RecentlyViewedMedicine";
import { MEDICINE_DATA } from "../data/medicineData";
import "../styles/medicine.css";
import { useTranslation } from "react-i18next";



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
    <div className="Medicine">

      <CallShop />
      {/* Show search results if there are any */}
      {searchResults.length > 0 && (
        <div className="search-results">
           <h2>{t('medicine.searchResultsFor')} "{searchTerm}"</h2>
          <div className="search-results-grid">
            {searchResults.map((medicine) => (
              <div key={medicine.id} className="medicine-card">
                <img src={medicine.image} alt={medicine.name} />
                <div className="medicine-info">
                  <h3>{medicine.name}</h3>
                  <p className="compound">{medicine.compound}</p>
                  <p className="company">{medicine.company}</p>
                  <p className="price">₹{medicine.price}</p>
                  <p className="category">{medicine.category}</p>
                  <p
                    className={`stock-status ${
                      medicine.inStock ? "in-stock" : "out-of-stock"
                    }`}
                  >
                    {medicine.inStock ? "✓ In Stock" : "✗ Out of Stock"}
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
          <AllMedicine />

          <RecentlyViewedMedicine />
        </>
      )}

      {/* Show no results message */}
      {searchTerm && searchResults.length === 0 && (
        <div className="no-results">
          <h2>No medicines found for "{searchTerm}"</h2>
          <p>
            Try searching with different keywords like medicine name, compound,
            or company.
          </p>
        </div>
      )}
    </div>
  );
};

export default Medicine;
