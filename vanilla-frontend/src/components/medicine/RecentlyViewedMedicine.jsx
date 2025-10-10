import React from 'react'
import "../../styles/RecentlyViewedMedicine.css"
import { MEDICINE_DATA } from '../../data/medicineData'
import { useSearch } from '../../contexts/SearchContext'

export default function RecentlyViewedMedicine() {
  const { searchTerm } = useSearch();

  // If there's a search term, don't show recently viewed
  if (searchTerm) {
    return null;
  }

  // Get recently viewed medicines (last 5 from the data)
  // const recentMedicines = MEDICINE_DATA.slice(-5);

  return (
    <div className='RecentlyViewedMedicine'>
      <h2>Recently Viewed</h2>
      <div className="RecentMedicinecard-container">
        {MEDICINE_DATA.slice(-5).map(medicine => (
          <div key={medicine.id} className="card">
            <img src={medicine.image} alt={medicine.name} />
            <div className="card-content">
              <h3>{medicine.name}</h3>
              <p id="price1">Price: ₹{medicine.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
