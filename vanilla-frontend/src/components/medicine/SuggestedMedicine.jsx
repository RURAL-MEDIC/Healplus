import React from 'react'
import { useTranslation } from 'react-i18next'
import "../../styles/SuggestedMedicine.css"
import { Link } from 'react-router-dom'
import { MEDICINE_DATA } from '../../data/medicineData'
import { useSearch } from '../../contexts/SearchContext'

export default function SuggestedMedicine() {
  const { searchTerm, searchResults } = useSearch();
  const { t } = useTranslation();

  // If there's a search term, don't show suggested medicines
  if (searchTerm) {
    return null;
  }

  // Get common medicines (first 4 from the data)
  const commonMedicines = MEDICINE_DATA.slice(0, 4);

  return (
    <div className='SuggestedMedicine'>
       <h2>{t('medicine.commonMedicines')}</h2>
      <div className="SuggestedMedicineCardContainer">
        {commonMedicines.map(medicine => (
          <Link key={medicine.id} className="SuggestedMedicine-card" to={`/medicine/${medicine.id}`}>
            <div className="SuggestedMedicine-icon">
              <img src={medicine.image} alt={medicine.name} />
            </div>
            <div className="SuggestedMedicine-name">
              <h3>{medicine.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
